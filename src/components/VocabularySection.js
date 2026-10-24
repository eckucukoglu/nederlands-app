// src/components/VocabularySection.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { vocabulary, bookSections } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { speakDutch } from '../utils/speech';
import { 
  WORD_METADATA, 
  groupChapterWords 
} from '../data/vocabCategories';
import { CHAPTER_VOCAB_GUIDES } from '../data/vocabGuides';
import ExerciseResultToast from './ExerciseResultToast';

export default function VocabularySection({
  sectionId = '1.2',
  chapterNum = 1,
  favorites = {},
  toggleFavorite,
  completed = {},
  toggleCompleted
}) {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const chNum = useMemo(() => {
    if (chapterNum) return Number(chapterNum);
    if (sectionId && sectionId.includes('.')) {
      return Number(sectionId.split('.')[0]);
    }
    return 1;
  }, [chapterNum, sectionId]);

  // Sayfaya ait kelimeler
  const chapterWords = useMemo(() => {
    return vocabulary.filter(w => w.chapter === chNum);
  }, [chNum]);

  // Section data (varsa egzersizler için)
  const sectionData = useMemo(() => {
    return bookSections.find(s => s.id === sectionId);
  }, [sectionId]);

  // UI Durumları
  const [groupType, setGroupType] = useState('alphabetical'); // 'alphabetical' | 'functional' | 'contextual'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'known' | 'unknown' | 'unmarked'
  const [wordStatuses, setWordStatuses] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [showGuide, setShowGuide] = useState(false);

  // Favori Notu State
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState('');

  // Egzersiz State'leri (varsa)
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [resultToast, setResultToast] = useState(null);

  useEffect(() => {
    setAnswers({});
    setShowResults(false);
    setResultToast(null);
  }, [sectionId]);

  const handleToggleResults = () => {
    if (!showResults) {
      let correct = 0;
      let incorrect = 0;
      let unanswered = 0;
      let total = 0;

      const groups = sectionData?.exerciseGroups || [];
      groups.forEach(group => {
        group.questions.forEach(q => {
          total += 1;
          const userAns = answers[q.id]?.toLowerCase().trim() || "";
          const isCorrect = Boolean(userAns && q.correctAnswer && userAns === q.correctAnswer.toLowerCase().trim());
          if (!userAns) {
            unanswered += 1;
            incorrect += 1;
          } else if (isCorrect) {
            correct += 1;
          } else {
            incorrect += 1;
          }
        });
      });
      setResultToast({ correct, incorrect, unanswered, total, ts: Date.now() });
      setShowResults(true);
    } else {
      setShowResults(false);
      setResultToast(null);
    }
  };

  // Kelime durumlarını yükle
  const fetchStatuses = useCallback(() => {
    const saved = localStorage.getItem(`vocabularyWordStatuses_${chNum}`);
    let statuses = saved ? JSON.parse(saved) : {};

    // Dialogue ve Reading durumlarından da al
    const diagSaved = localStorage.getItem(`dialogueWordStatuses_${chNum}`);
    if (diagSaved) {
      try {
        const dObj = JSON.parse(diagSaved);
        Object.entries(dObj).forEach(([w, st]) => {
          if (!statuses[w]) statuses[w] = st;
        });
      } catch (e) {}
    }

    const readSaved = localStorage.getItem(`readingWordStatuses_${chNum}`);
    if (readSaved) {
      try {
        const rObj = JSON.parse(readSaved);
        Object.entries(rObj).forEach(([w, st]) => {
          if (!statuses[w]) statuses[w] = st;
        });
      } catch (e) {}
    }

    // Global word pool'dan da senkronize et
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    chapterWords.forEach(w => {
      const lowerNL = (w.nl || '').toLowerCase();
      const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
      const poolItem = pool[lowerNL] || pool[cleanNL];
      if (poolItem && poolItem.status && !statuses[lowerNL]) {
        statuses[lowerNL] = poolItem.status;
      }
    });

    setWordStatuses(statuses);
  }, [chNum, chapterWords]);

  useEffect(() => {
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, [fetchStatuses]);

  // Kelime durumunu getir
  const getStatusOfWord = useCallback((word) => {
    const lowerNL = (word.nl || '').toLowerCase();
    const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
    return wordStatuses[lowerNL] || wordStatuses[cleanNL] || null;
  }, [wordStatuses]);

  // Filtrelenmiş kelimeler
  const filteredWords = useMemo(() => {
    let result = chapterWords;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(w => {
        const matchNL = (w.nl || '').toLowerCase().includes(q);
        const matchEN = (w.en || '').toLowerCase().includes(q);
        const meta = WORD_METADATA[w.id];
        const matchTR = meta && meta.tr ? meta.tr.toLowerCase().includes(q) : false;
        return matchNL || matchEN || matchTR;
      });
    }

    if (statusFilter !== 'all') {
      result = result.filter(w => {
        const st = getStatusOfWord(w);
        if (statusFilter === 'known') return st === 'known';
        if (statusFilter === 'unknown') return st === 'unknown';
        if (statusFilter === 'unmarked') return !st;
        return true;
      });
    }

    return result;
  }, [chapterWords, searchQuery, statusFilter, getStatusOfWord]);

  // Gruplanmış kelimeler
  const groupedSections = useMemo(() => {
    return groupChapterWords(filteredWords, chNum, groupType);
  }, [filteredWords, chNum, groupType]);

  // İstatistikler
  const stats = useMemo(() => {
    let knownCount = 0;
    let unknownCount = 0;
    let unmarkedCount = 0;

    chapterWords.forEach(w => {
      const st = getStatusOfWord(w);
      if (st === 'known') knownCount++;
      else if (st === 'unknown') unknownCount++;
      else unmarkedCount++;
    });

    const total = chapterWords.length;
    const progressPercent = total > 0 ? Math.round((knownCount / total) * 100) : 0;

    return { total, knownCount, unknownCount, unmarkedCount, progressPercent };
  }, [chapterWords, getStatusOfWord]);

  // Kelimeye tıklayınca modal aç
  const handleWordCardClick = (e, word) => {
    e.stopPropagation();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    let xPosition;
    if (isMobile) {
      xPosition = window.innerWidth / 2;
    } else {
      const halfWidth = 150;
      const padding = 20;
      xPosition = Math.min(Math.max(e.clientX, halfWidth + padding), window.innerWidth - halfWidth - padding);
    }

    let yPosition = e.clientY + 15;
    const estimatedHeight = 340;
    if (yPosition + estimatedHeight > window.innerHeight) {
      yPosition = Math.max(70, e.clientY - estimatedHeight - 10);
    }
    yPosition = Math.max(70, Math.min(window.innerHeight - estimatedHeight, yPosition));

    setPopupPos({ x: xPosition, y: yPosition });
    setSelectedWord(word);
  };

  // Kelime Durumu Değiştir (Biliyorum / Bilmiyorum)
  const setWordKnowledge = (word, status) => {
    const lowerNL = (word.nl || '').toLowerCase();
    const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();

    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const meta = WORD_METADATA[word.id] || {};

    const wordEntry = {
      id: word.id,
      nl: word.nl,
      en: word.en,
      tr: meta.tr || "Çeviri bulunamadı",
      example: word.example || "",
      chapter: chNum,
      status: status,
      addedAt: new Date().toISOString()
    };

    if (status === undefined) {
      delete pool[lowerNL];
      delete pool[cleanNL];
    } else {
      pool[lowerNL] = wordEntry;
      pool[cleanNL] = wordEntry;
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const newStatuses = { ...wordStatuses };
    if (status === undefined) {
      delete newStatuses[lowerNL];
      delete newStatuses[cleanNL];
    } else {
      newStatuses[lowerNL] = status;
      newStatuses[cleanNL] = status;
    }

    setWordStatuses(newStatuses);
    localStorage.setItem(`vocabularyWordStatuses_${chNum}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    setSelectedWord(null);
  };

  // Toplu "Hepsini Biliyorum Olarak İşaretle" Butonu
  const handleMarkAllKnown = () => {
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const newStatuses = { ...wordStatuses };

    filteredWords.forEach(word => {
      const lowerNL = (word.nl || '').toLowerCase();
      const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
      const meta = WORD_METADATA[word.id] || {};

      const entry = {
        id: word.id,
        nl: word.nl,
        en: word.en,
        tr: meta.tr || "Çeviri bulunamadı",
        example: word.example || "",
        chapter: chNum,
        status: 'known',
        addedAt: new Date().toISOString()
      };

      pool[lowerNL] = entry;
      pool[cleanNL] = entry;
      newStatuses[lowerNL] = 'known';
      newStatuses[cleanNL] = 'known';
    });

    localStorage.setItem('globalWordPool', JSON.stringify(pool));
    localStorage.setItem(`vocabularyWordStatuses_${chNum}`, JSON.stringify(newStatuses));
    setWordStatuses(newStatuses);
    window.dispatchEvent(new Event('wordStatusUpdated'));
  };

  const isFav = !!favorites[sectionId];
  const isComp = !!completed[sectionId];

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (isFav) {
      if (toggleFavorite) toggleFavorite(sectionId, null);
    } else {
      setShowFavInput(true);
    }
  };

  const handleSaveFav = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (toggleFavorite) {
      toggleFavorite(sectionId, favNote.trim() || (isTr ? `Ünite ${chNum} Kelimeleri` : `Chapter ${chNum} Vocabulary`));
    }
    setShowFavInput(false);
    setFavNote('');
  };

  // Modal içindeki aktif kelimenin durumu
  const selectedWordStatus = selectedWord ? getStatusOfWord(selectedWord) : null;
  const metaForSelected = selectedWord ? WORD_METADATA[selectedWord.id] : null;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 animate-fadeIn text-slate-100 min-w-0">
      
      {/* ======================================================== */}
      {/* 1. ÜST BAŞLIK VE KONTROL KARTI                           */}
      {/* ======================================================== */}
      <div className="bg-slate-800/90 rounded-2xl p-3.5 sm:p-6 border border-slate-700/80 shadow-xl backdrop-blur-sm w-full min-w-0">
        
        {/* Üst Satır: Başlık, Rozet ve Sağ Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 border-b border-slate-700/70 pb-4 sm:pb-5 w-full min-w-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 flex-shrink-0">
              <i className="fa-solid fa-spell-check text-lg sm:text-xl"></i>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-700/50 px-2 py-0.5 rounded-md flex-shrink-0">
                  {sectionId} • Vocabulary
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium truncate">
                  {isTr ? `${chNum}. Ünite Kelime Listesi` : `Chapter ${chNum} Word List`}
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-black text-slate-100 tracking-tight mt-0.5 truncate">
                {isTr ? `Ünite ${chNum} - Kelimeler` : `Chapter ${chNum} - Vocabulary`}
              </h1>
            </div>
          </div>

          {/* Aksiyon Butonları (Toplu İşaretle, Tamamlandı, Favori) */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap pt-1 sm:pt-0">
            {/* Toplu İşaretle Butonu */}
            <button
              onClick={handleMarkAllKnown}
              className="bg-slate-900/80 border border-slate-700 hover:border-emerald-500 hover:bg-emerald-950/40 text-slate-300 hover:text-emerald-400 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 sm:gap-2 shadow-sm cursor-pointer"
              title={isTr ? 'Görüntülenen tüm kelimeleri biliyorum olarak işaretle' : 'Mark all visible words as known'}
            >
              <i className="fa-solid fa-check-double text-emerald-400"></i>
              <span>{isTr ? 'Tümünü Biliyorum Yap' : 'Mark All Known'}</span>
            </button>

            {/* Tamamlandı Butonu (Sitenin geri kalanıyla tam uyumlu) */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); toggleCompleted && toggleCompleted(sectionId); }}
              className="text-xl sm:text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center p-1"
              title={isComp ? (isTr ? 'Tamamlandı olarak işaretlendi' : 'Marked as completed') : (isTr ? 'Tamamlandı olarak işaretle' : 'Mark as completed')}
            >
              {isComp ? (
                <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
              )}
            </button>

            {/* Favorilere Ekle Butonu (Sitenin geri kalanıyla tam uyumlu) */}
            <div className="flex items-center relative">
              <button
                type="button"
                onClick={handleStarClick}
                className="text-xl sm:text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center p-1"
                title={isFav ? (isTr ? 'Favorilerden çıkar' : 'Remove from favorites') : (isTr ? 'Favorilere ekle' : 'Add to favorites')}
              >
                {isFav ? (
                  <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                ) : (
                  <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                )}
              </button>

              {/* Favori Notu Popover Giriş Alanı */}
              {showFavInput && (
                <div 
                  className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/50 p-1 rounded-xl shadow-lg animate-fadeIn absolute right-0 top-full mt-2 z-30" 
                  onClick={e => e.stopPropagation()}
                >
                  <input
                    autoFocus
                    maxLength={100}
                    value={favNote}
                    onChange={(e) => setFavNote(e.target.value)}
                    onKeyDown={(e) => { 
                      if (e.key === 'Enter') handleSaveFav(e); 
                      if (e.key === 'Escape') setShowFavInput(false);
                    }}
                    placeholder={isTr ? "Notun (max 100 kar.)..." : "Your note (max 100 char.)..."}
                    className="bg-transparent text-slate-200 text-xs px-2.5 py-1 w-32 sm:w-44 focus:outline-none placeholder-slate-500"
                  />
                  <button 
                    type="button"
                    onClick={handleSaveFav} 
                    className="bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* İlerleme ve İstatistikler Satırı */}
        <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center w-full min-w-0">
          <div className="bg-slate-900/70 border border-slate-800 p-2 sm:p-2.5 rounded-xl min-w-0">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">{isTr ? 'Toplam Kelime' : 'Total Words'}</span>
            <span className="text-base sm:text-lg font-black text-slate-200">{stats.total}</span>
          </div>
          <div className="bg-slate-900/70 border border-emerald-900/40 p-2 sm:p-2.5 rounded-xl min-w-0">
            <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium block flex items-center justify-center gap-1 truncate">
              <i className="fa-solid fa-check text-[10px]"></i> {isTr ? 'Biliyorum' : 'Known'}
            </span>
            <span className="text-base sm:text-lg font-black text-emerald-400">{stats.knownCount}</span>
          </div>
          <div className="bg-slate-900/70 border border-rose-900/40 p-2 sm:p-2.5 rounded-xl min-w-0">
            <span className="text-[10px] sm:text-[11px] text-rose-400 font-medium block flex items-center justify-center gap-1 truncate">
              <i className="fa-solid fa-xmark text-[10px]"></i> {isTr ? 'Bilmiyorum' : 'Unknown'}
            </span>
            <span className="text-base sm:text-lg font-black text-rose-400">{stats.unknownCount}</span>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 p-2 sm:p-2.5 rounded-xl min-w-0">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">{isTr ? 'Öğrenme Oranı' : 'Progress'}</span>
            <span className="text-base sm:text-lg font-black text-indigo-400">{stats.progressPercent}%</span>
          </div>
        </div>

        {/* İlerleme Çubuğu */}
        <div className="mt-3 w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-700/50">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full transition-all duration-500"
            style={{ width: `${stats.progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* ÜNİTE KELİME REHBERİ & KONU ANLATIMI KARTI */}
      {CHAPTER_VOCAB_GUIDES[chNum] && (
        <div className="bg-slate-800/90 rounded-2xl border border-indigo-900/50 shadow-lg overflow-hidden transition-all duration-300">
          <div 
            onClick={() => setShowGuide(!showGuide)}
            className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors select-none"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-sm">
                <i className={`${CHAPTER_VOCAB_GUIDES[chNum].icon || 'fa-solid fa-lightbulb'} text-base sm:text-lg`}></i>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                  <span>{CHAPTER_VOCAB_GUIDES[chNum].title[lang] || CHAPTER_VOCAB_GUIDES[chNum].title.tr}</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                    A2 Rehber
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {CHAPTER_VOCAB_GUIDES[chNum].summary[lang] || CHAPTER_VOCAB_GUIDES[chNum].summary.tr}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
              <span className="text-xs font-bold text-indigo-400 hidden sm:inline">
                {showGuide ? (isTr ? 'Gizle' : 'Hide') : (isTr ? 'Konu Anlatımını Gör' : 'View Guide')}
              </span>
              <div className={`w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center text-indigo-400 transition-transform duration-300 ${showGuide ? 'rotate-180' : ''}`}>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
            </div>
          </div>

          {showGuide && (
            <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-700/60 space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {CHAPTER_VOCAB_GUIDES[chNum].keyPatterns.map((pat, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2">
                    <h4 className="text-xs font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <i className="fa-solid fa-star text-[10px] text-amber-400"></i>
                      <span>{pat.rule[lang] || pat.rule.tr}</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pat.explanation[lang] || pat.explanation.tr}
                    </p>
                    {pat.examples && pat.examples.length > 0 && (
                      <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Örnekler:</span>
                        {pat.examples.map((ex, exIdx) => (
                          <div key={exIdx} className="text-xs text-slate-200 font-medium flex items-center justify-between gap-2">
                            <span>• {ex}</span>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); speakDutch(ex); }}
                              className="text-slate-500 hover:text-indigo-300 text-[10px] p-0.5"
                              title={isTr ? 'Dinle' : 'Listen'}
                            >
                              <i className="fa-solid fa-volume-high"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {CHAPTER_VOCAB_GUIDES[chNum].inburgeringTip && (
                <div className="bg-amber-950/30 border border-amber-600/40 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-graduation-cap text-xs"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                      {isTr ? '💡 A2 Inburgering Sınav Püf Noktası' : '💡 A2 Inburgering Exam Tip'}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {CHAPTER_VOCAB_GUIDES[chNum].inburgeringTip[lang] || CHAPTER_VOCAB_GUIDES[chNum].inburgeringTip.tr}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. GRUPLAMA SEÇİCİ VE FİLTRE ÇUBUĞU                      */}
      {/* ======================================================== */}
      <div className="bg-slate-800/80 rounded-2xl p-3 sm:p-4 border border-slate-700/80 shadow-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full min-w-0 max-w-full">
        
        {/* Gruplama Tipi Butonları (3 Tür: Alfabetik, Fonksiyonel, Contextual) */}
        <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-700 overflow-x-auto no-scrollbar w-full md:w-auto max-w-full min-w-0">
          <button
            onClick={() => setGroupType('alphabetical')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0 ${
              groupType === 'alphabetical'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-solid fa-arrow-down-a-z text-xs"></i>
            <span>{isTr ? 'Alfabetik' : 'Alphabetical'}</span>
          </button>

          <button
            onClick={() => setGroupType('functional')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0 ${
              groupType === 'functional'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-solid fa-tags text-xs"></i>
            <span>{isTr ? 'Fonksiyonel' : 'Functional'}</span>
          </button>

          <button
            onClick={() => setGroupType('contextual')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0 ${
              groupType === 'contextual'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-solid fa-layer-group text-xs"></i>
            <span>{isTr ? 'Bağlamsal' : 'Contextual'}</span>
          </button>
        </div>

        {/* Sağ Taraf: Arama ve Durum Filtreleri */}
        <div className="flex items-center gap-2 w-full md:w-auto md:justify-end min-w-0 flex-wrap sm:flex-nowrap">
          {/* Canlı Arama Input */}
          <div className="relative flex-1 min-w-[130px] sm:max-w-[220px]">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-500 text-xs"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isTr ? "Kelime ara..." : "Search words..."}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-8 pr-7 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-200 text-xs cursor-pointer"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            )}
          </div>

          {/* Durum Filtreleri Dropdown / Butonlar */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-indigo-500 cursor-pointer flex-shrink-0"
          >
            <option value="all">{isTr ? 'Tüm Durumlar' : 'All Statuses'}</option>
            <option value="known">🟢 {isTr ? 'Biliyorum' : 'Known'}</option>
            <option value="unknown">🔴 {isTr ? 'Bilmiyorum' : 'Unknown'}</option>
            <option value="unmarked">⚪ {isTr ? 'İşaretsiz' : 'Unmarked'}</option>
          </select>
        </div>
      </div>

      {/* Alfabetik Hızlı Atlama Çubuğu (Yalnızca alfabetik modda ve arama yokken) */}
      {groupType === 'alphabetical' && !searchQuery && (
        <div className="flex items-center flex-wrap gap-1.5 py-1.5 w-full max-w-full min-w-0">
          {groupedSections.map(group => (
            <a
              key={group.key}
              href={`#${group.key}`}
              className="w-7 h-7 flex-shrink-0 rounded-lg bg-slate-800/80 hover:bg-indigo-600 hover:text-white border border-slate-700 text-xs font-bold text-slate-300 flex items-center justify-center transition shadow-sm"
            >
              {group.title}
            </a>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. GRUPLANMIŞ KELİME KARTLARI LİSTESİ                    */}
      {/* ======================================================== */}
      <div className="space-y-4 sm:space-y-6 w-full min-w-0">
        {groupedSections.length === 0 ? (
          <div className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/60 text-center">
            <i className="fa-solid fa-folder-open text-3xl text-slate-600 mb-3"></i>
            <p className="text-sm font-semibold text-slate-400">
              {isTr ? 'Aradığınız kriterlere uygun kelime bulunamadı.' : 'No words found matching your search.'}
            </p>
          </div>
        ) : (
          groupedSections.map(group => {
            const groupTitle = typeof group.title === 'object'
              ? (group.title[lang] || group.title.tr || group.title.en)
              : group.title;

            return (
              <div 
                key={group.key} 
                id={group.key}
                className="bg-slate-800/50 rounded-2xl p-3.5 sm:p-5 border border-slate-700/70 shadow-sm w-full min-w-0"
              >
                {/* Grup Başlığı */}
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4 w-full min-w-0">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-700/40 text-indigo-400 flex items-center justify-center text-sm shadow-inner flex-shrink-0">
                      <i className={group.icon || 'fa-solid fa-folder'}></i>
                    </span>
                    <h3 className="font-extrabold text-slate-100 text-base sm:text-lg tracking-tight truncate">
                      {groupTitle}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700/60 flex-shrink-0">
                    {group.words.length} {isTr ? 'kelime' : 'words'}
                  </span>
                </div>

                {/* Kelimeler Izgarası (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 w-full min-w-0">
                  {group.words.map(word => {
                    const status = getStatusOfWord(word);
                    const meta = WORD_METADATA[word.id];
                    const trMeaning = meta?.tr;

                    let statusBorder = 'border-slate-700/80 hover:border-slate-600 bg-slate-900/60';
                    let statusIcon = null;

                    if (status === 'known') {
                      statusBorder = 'border-emerald-500/50 bg-emerald-950/20 hover:border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.1)]';
                      statusIcon = <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>;
                    } else if (status === 'unknown') {
                      statusBorder = 'border-rose-500/50 bg-rose-950/20 hover:border-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.1)]';
                      statusIcon = <i className="fa-solid fa-circle-xmark text-rose-400 text-xs"></i>;
                    }

                    return (
                      <div
                        key={word.id}
                        onClick={(e) => handleWordCardClick(e, word)}
                        className={`group relative p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 hover:-translate-y-0.5 shadow-sm min-w-0 ${statusBorder}`}
                      >
                        {/* Üst Satır: Felemenkçe Kelime & Telaffuz & Durum Rozeti */}
                        <div className="flex items-start justify-between gap-2 min-w-0">
                          <span className={`font-bold text-sm sm:text-base leading-snug tracking-tight break-words min-w-0 flex-1 ${
                            status === 'known' ? 'text-emerald-300' : status === 'unknown' ? 'text-rose-300' : 'text-slate-100 group-hover:text-indigo-300'
                          }`}>
                            {word.nl}
                          </span>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {statusIcon}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakDutch(word.nl);
                              }}
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-700/70"
                              title={isTr ? 'Dinle' : 'Listen'}
                            >
                              <i className="fa-solid fa-volume-high text-[11px]"></i>
                            </button>
                          </div>
                        </div>

                        {/* Alt Satır: İngilizce / Türkçe Çeviri Önizlemesi */}
                        <div className="text-xs text-slate-400 leading-normal line-clamp-1">
                          {isTr && trMeaning ? (
                            <span className="text-slate-300 font-medium">{trMeaning}</span>
                          ) : (
                            <span className="text-slate-300 font-medium">{word.en}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ======================================================== */}
      {/* 4. EGZERSİZ ALANI (Bölümün egzersizleri varsa, örn: 5.2)  */}
      {/* ======================================================== */}
      {sectionData?.exerciseGroups && sectionData.exerciseGroups.length > 0 && (
        <div className="bg-slate-800/90 rounded-2xl p-6 shadow-xl border border-slate-700 space-y-6 mt-8">
          <h3 className="text-xl font-bold text-slate-100 border-b border-slate-700 pb-3 flex items-center gap-2">
            <i className="fa-solid fa-pen-to-square text-indigo-400"></i>
            <span>{isTr ? 'Bölüm Alıştırmaları' : 'Section Exercises'}</span>
          </h3>

          {sectionData.exerciseGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4 mb-6">
              <h4 className="font-bold text-indigo-300 border-b border-slate-700/50 pb-2">
                {group.instruction}
              </h4>

              <div className="space-y-4">
                {group.questions.map((q) => {
                  const userAns = answers[q.id] || "";
                  const isCorrect = Boolean(q.correctAnswer && userAns.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim());

                  return (
                    <div key={q.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/70 space-y-2">
                      <p className="font-semibold text-sm text-slate-200">{q.question}</p>

                      {q.type === 'multiple_choice' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                          {q.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold text-left transition border ${
                                userAns === opt
                                  ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={userAns}
                          onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                          placeholder={isTr ? "Cevabınızı yazın..." : "Type your answer..."}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                        />
                      )}

                      {showResults && (
                        <div className={`text-xs font-bold mt-2 flex items-center gap-1.5 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                          <i className={`fa-solid ${isCorrect ? 'fa-check' : 'fa-xmark'}`}></i>
                          <span>{isCorrect ? (isTr ? 'Doğru!' : 'Correct!') : `${isTr ? 'Doğru cevap:' : 'Correct answer:'} ${q.correctAnswer}`}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pt-3 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
            {resultToast && showResults ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold shadow-sm animate-fadeIn">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <i className="fa-solid fa-circle-check"></i> {resultToast.correct} {isTr ? 'Doğru' : 'Correct'}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <i className="fa-solid fa-circle-xmark"></i> {resultToast.incorrect} {isTr ? 'Yanlış' : 'Incorrect'}
                </span>
                {resultToast.unanswered > 0 && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-medium">
                      {resultToast.unanswered} {isTr ? 'Boş' : 'Empty'}
                    </span>
                  </>
                )}
              </div>
            ) : <div className="hidden sm:block"></div>}
            <button
              onClick={handleToggleResults}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition cursor-pointer shadow-md"
            >
              {showResults ? (isTr ? 'Sonuçları Gizle' : 'Hide Results') : (isTr ? 'Cevapları Kontrol Et' : 'Check Answers')}
            </button>
          </div>
        </div>
      )}

      {/* FLOATING TEST DEĞERLENDİRME BİLDİRİMİ */}
      <ExerciseResultToast 
        stats={resultToast} 
        lang={lang} 
        onClose={() => setResultToast(null)} 
      />

      {/* ======================================================== */}
      {/* 5. KELİME ÇEVİRİ VE İŞARETLEME MODAL POPUP                */}
      {/* ======================================================== */}
      {selectedWord && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setSelectedWord(null)}
          ></div>

          <div 
            className="fixed bg-slate-800 border border-slate-600 p-4 rounded-2xl shadow-2xl z-50 w-[calc(100vw-32px)] max-w-[320px] box-border transform -translate-x-1/2 max-h-[min(380px,calc(100vh-90px))] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 animate-fadeIn" 
            style={{ left: `${popupPos.x}px`, top: `${popupPos.y}px` }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Üst: Başlık & Telaffuz */}
            <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-indigo-400 text-base leading-tight">
                  {selectedWord.nl}
                </h3>
                <button 
                  type="button"
                  onClick={() => speakDutch(selectedWord.nl)}
                  className="text-slate-400 hover:text-indigo-300 cursor-pointer p-1"
                  title={isTr ? 'Dinle' : 'Listen'}
                >
                  <i className="fa-solid fa-volume-high text-xs"></i>
                </button>
              </div>
              <button 
                onClick={() => setSelectedWord(null)} 
                className="text-slate-400 hover:text-slate-200 cursor-pointer text-sm"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Çeviriler */}
            <div className="space-y-1.5 mb-3 text-xs leading-relaxed">
              {metaForSelected?.tr && (
                <div className="flex items-start gap-1.5">
                  <span className="flex-shrink-0">🇹🇷</span>
                  <span className="text-slate-200 font-semibold">{metaForSelected.tr}</span>
                </div>
              )}
              <div className="flex items-start gap-1.5">
                <span className="flex-shrink-0">🇬🇧</span>
                <span className="text-slate-300 font-medium">{selectedWord.en}</span>
              </div>
            </div>

            {/* Örnek Cümle */}
            {selectedWord.example && (
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/60 mb-3 text-[11px] text-slate-300 italic">
                <span className="font-semibold text-indigo-300 block mb-0.5 not-italic">
                  {isTr ? 'Örnek Cümle:' : 'Example:'}
                </span>
                "{selectedWord.example}"
              </div>
            )}

            {/* Hızlı İşaretleme Butonları */}
            <div className="pt-2 border-t border-slate-700 flex gap-2">
              <button 
                onClick={() => setWordKnowledge(selectedWord, 'known')} 
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition cursor-pointer shadow-sm ${
                  selectedWordStatus === 'known'
                    ? 'bg-emerald-600 text-white shadow-emerald-900/50'
                    : 'bg-emerald-950/60 border border-emerald-600/70 text-emerald-400 hover:bg-emerald-800 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-check text-[11px]"></i>
                <span>{isTr ? 'Biliyorum' : 'I know'}</span>
              </button>

              <button 
                onClick={() => setWordKnowledge(selectedWord, 'unknown')} 
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition cursor-pointer shadow-sm ${
                  selectedWordStatus === 'unknown'
                    ? 'bg-rose-600 text-white shadow-rose-900/50'
                    : 'bg-rose-950/60 border border-rose-600/70 text-rose-400 hover:bg-rose-800 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-xmark text-[11px]"></i>
                <span>{isTr ? 'Bilmiyorum' : "Don't know"}</span>
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
