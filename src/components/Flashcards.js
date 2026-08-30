// src/components/Flashcards.js
import React, { useState, useEffect, useCallback } from 'react';
import { vocabulary } from '../data';
import { globalDictionary } from '../data/globalDictionary'; // KESİN ÇÖZÜM: Global sözlük dahil edildi
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  tr: {
    emptyGlobalEx: "Sitede henüz hiçbir kelimeyi işaretlemediniz.",
    emptyDialogEx: "Bu ünite diyaloğunda 'Bilmiyorum' dediğiniz kelime yok.",
    emptyFilterTitle: "Klaar!",
    emptyFilterEn: "No unknown words",
    emptyFilterEx: "Harika! Bu kategoride bilinmeyen kelime kalmadı.",
    unknownWords: "Bilinmeyen Kelimeler",
    allWords: "Tüm Kelimeler",
    copied: "Kopyalandı",
    copyToClipboard: "Panoya Kopyala",
    noTranslation: "Çeviri yok",
    noWordsInList: "Bu listede gösterilecek kelime yok.",
    keyboard: "Klavye",
    flip: "Çevir",
    dontKnow: "Bilmiyorum",
    know: "Biliyorum",
    allWordsOption: "Alle Woorden",
    dialogueOption: "Dialoog (Onbekend)",
    globalPoolOption: "🌐 Global Havuz",
    shuffle: "Karıştır",
    studyUnknowns: "Bilinmeyenleri Çalış",
    listUnknowns: "Bilinmeyenleri Listele",
    listAll: "Hepsini Listele",
    card: "Kart",
    progress: "İlerleme",
    thisSession: "Bu Oturum (Session)",
    history: "Geçmiş (Bu Kelime)",
    known: "Biliniyor",
    unknown: "Bilinmiyor",
    clickToTranslate: "(Çeviri için tıkla of ⬆️ / ⬇️)",
    globalPoolLabel: "Global Havuz"
  },
  en: {
    emptyGlobalEx: "You haven't marked any words on the site yet.",
    emptyDialogEx: "There are no words marked as 'Unknown' in this chapter's dialogue.",
    emptyFilterTitle: "Klaar!",
    emptyFilterEn: "No unknown words",
    emptyFilterEx: "Great! There are no unknown words left in this category.",
    unknownWords: "Unknown Words",
    allWords: "All Words",
    copied: "Copied",
    copyToClipboard: "Copy to Clipboard",
    noTranslation: "No translation",
    noWordsInList: "No words to show in this list.",
    keyboard: "Keyboard",
    flip: "Flip",
    dontKnow: "Don't Know",
    know: "Know",
    allWordsOption: "All Words",
    dialogueOption: "Dialogue (Unknown)",
    globalPoolOption: "🌐 Global Pool",
    shuffle: "Shuffle",
    studyUnknowns: "Study Unknowns Only",
    listUnknowns: "List Unknowns",
    listAll: "List All",
    card: "Card",
    progress: "Progress",
    thisSession: "This Session",
    history: "History (This Word)",
    known: "Known",
    unknown: "Unknown",
    clickToTranslate: "(Click to translate or ⬆️ / ⬇️)",
    globalPoolLabel: "Global Pool"
  }
};

export default function Flashcards({ initialChapter }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations['tr'];

  const availableChapters = [...new Set(vocabulary.map(v => v.chapter))].filter(Boolean).sort((a, b) => a - b);
  
  const [targetChapter, setTargetChapter] = useState(initialChapter || availableChapters[availableChapters.length - 1] || 9);
  const [deck, setDeck] = useState([]);
  const [baseDeck, setBaseDeck] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const [mode, setMode] = useState('all'); 
  
  const [sessionStats, setSessionStats] = useState({ known: 0, unknown: 0 });
  const [globalStats, setGlobalStats] = useState({});

  const [studyUnknownsOnly, setStudyUnknownsOnly] = useState(false);
  const [listModal, setListModal] = useState({ isOpen: false, type: null }); 
  const [copied, setCopied] = useState(false);

  const chapterVocab = vocabulary.filter(v => v.chapter === targetChapter);

  // --- KELİMENİN TÜRKÇE VE İNGİLİZCE KARŞILIKLARINI GLOBAL SÖZLÜKTEN BULAN FONKSİYON ---
  const getResolvedWord = (word) => {
    if (!word) return { nl: "", tr: "", en: "", example: "" };
    if (word.id?.startsWith('empty')) return word;

    const match = globalDictionary.find(
      item => item.nl.toLowerCase() === word.nl?.toLowerCase()
    );

    return {
      ...word,
      tr: word.tr || match?.tr || "",
      en: word.en || match?.en || "",
      example: word.example || match?.example || ""
    };
  };

  useEffect(() => {
    const freshStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};
    setGlobalStats(freshStats);
  }, [targetChapter, mode]);

  useEffect(() => {
    let newDeck = [];
    const freshStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};

    if (mode === 'global') {
      const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
      newDeck = Object.values(pool);
      if (newDeck.length === 0) {
        newDeck = [{ id: 'empty_global', nl: "Geen woorden", en: "No words in Global Pool", tr: "Global havuzda kelime yok", example: t.emptyGlobalEx }];
      }
    } else if (mode === 'all') {
      newDeck = chapterVocab;
    } else {
      const saved = JSON.parse(localStorage.getItem(`dialogueUnknowns_${targetChapter}`)) || [];
      if (saved.length > 0) {
        newDeck = saved;
      } else {
        newDeck = [{ id: 'empty', nl: "Geen woorden", en: "No words selected", tr: "Kelime seçilmedi", example: t.emptyDialogEx }];
      }
    }

    setBaseDeck(newDeck);

    if (studyUnknownsOnly) {
      newDeck = newDeck.filter(word => {
        if (word.id?.startsWith('empty')) return false;
        const wordId = word.id || word.nl;
        const stat = freshStats[wordId];
        const isUnknownGlobally = stat?.lastStatus === 'unknown';
        const isUnknownInPool = word.status === 'unknown';
        return isUnknownGlobally || isUnknownInPool;
      });

      if (newDeck.length === 0) {
        newDeck = [{ id: 'empty_filter', nl: t.emptyFilterTitle, en: t.emptyFilterEn, tr: t.emptyFilterEn, example: t.emptyFilterEx }];
      }
    }

    setDeck(newDeck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ known: 0, unknown: 0 });
  }, [targetChapter, mode, studyUnknownsOnly, lang]); // eslint-disable-line

  const currentWord = getResolvedWord(deck[currentIndex]);
  const totalWords = deck.length;

  const updateStats = useCallback((isKnown) => {
    if (!currentWord || currentWord.id?.startsWith('empty')) return; 
    
    const wordId = currentWord.id || currentWord.nl; 
    
    setSessionStats(prev => ({ ...prev, [isKnown ? 'known' : 'unknown']: prev[isKnown ? 'known' : 'unknown'] + 1 }));

    const freshStorage = JSON.parse(localStorage.getItem('flashcardStats')) || {};
    const currentGlobal = freshStorage[wordId] || { known: 0, unknown: 0, lastStatus: null };
    
    const newGlobal = {
      ...freshStorage,
      [wordId]: { 
        known: currentGlobal.known + (isKnown ? 1 : 0), 
        unknown: currentGlobal.unknown + (!isKnown ? 1 : 0),
        lastStatus: isKnown ? 'known' : 'unknown'
      }
    };
    
    setGlobalStats(newGlobal);
    localStorage.setItem('flashcardStats', JSON.stringify(newGlobal)); 

    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % totalWords);
  }, [currentWord, totalWords]);

  const handleKeyDown = useCallback((e) => {
    if (listModal.isOpen) return;

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); setIsFlipped(prev => !prev); } 
    else if (e.key === 'ArrowRight') { updateStats(true); } 
    else if (e.key === 'ArrowLeft') { updateStats(false); }
  }, [updateStats, listModal.isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const shuffleDeck = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const speakDutch = (text, e) => {
    if(e) e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
  };

  const getListData = () => {
    let rawList = baseDeck.filter(w => !w.id?.startsWith('empty')).map(getResolvedWord);
    const freshStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};

    if (listModal.type === 'unknown') {
      rawList = rawList.filter(word => {
        const wordId = word.id || word.nl;
        const stat = freshStats[wordId];
        return stat?.lastStatus === 'unknown' || word.status === 'unknown';
      });
    }
    return rawList;
  };

  const handleCopyClipboard = () => {
    const dataToCopy = getListData();
    const text = dataToCopy.map(w => `${w.nl} - ${w.tr || ''} (${w.en || ''})`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordGlobalStat = globalStats[currentWord?.id || currentWord?.nl] || { known: 0, unknown: 0, lastStatus: null };
  const progressPercentage = totalWords > 0 && !currentWord?.id?.startsWith('empty') ? Math.round(((currentIndex + 1) / totalWords) * 100) : 0;

  let sessionBgClass = "bg-slate-800 border-slate-700";
  if (sessionStats.known === 0 && sessionStats.unknown === 0) {
    sessionBgClass = "bg-slate-800 border-slate-700";
  } else if (sessionStats.known >= sessionStats.unknown * 3) {
    sessionBgClass = "bg-emerald-900/20 border-emerald-800/50";
  } else {
    sessionBgClass = "bg-rose-900/20 border-rose-800/50";
  }

  let globalBgClass = "bg-slate-800 border-slate-700";
  if (wordGlobalStat.known === 0 && wordGlobalStat.unknown === 0) {
    globalBgClass = "bg-slate-800 border-slate-700";
  } else if (wordGlobalStat.known >= wordGlobalStat.unknown * 1.5 && wordGlobalStat.lastStatus === 'known') {
    globalBgClass = "bg-emerald-900/20 border-emerald-800/50";
  } else {
    globalBgClass = "bg-rose-900/20 border-rose-800/50";
  }

  // --- DİL SEÇİMİNE GÖRE ÜST (KALIN) VE ALT (İNCE) METİN DÜZENİ ---
  const trText = currentWord?.tr || "";
  const enText = currentWord?.en || "";

  let primaryDisplay = "";
  let secondaryDisplay = "";

  if (lang === 'tr') {
    primaryDisplay = trText || enText || t.noTranslation;
    secondaryDisplay = (trText && enText && trText.toLowerCase() !== enText.toLowerCase()) ? enText : null;
  } else {
    primaryDisplay = enText || trText || t.noTranslation;
    secondaryDisplay = (enText && trText && enText.toLowerCase() !== trText.toLowerCase()) ? trText : null;
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-4 relative">
      
      {listModal.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm" 
          onClick={() => setListModal({ isOpen: false, type: null })}
        >
          <div className="bg-slate-900 w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            
            <div className="p-4 sm:p-5 flex justify-between items-center border-b border-slate-800 bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-200">
                {listModal.type === 'unknown' ? t.unknownWords : t.allWords}
                <span className="ml-2 text-sm font-medium text-slate-500">({getListData().length})</span>
              </h3>
              <div className="flex items-center gap-3">
                <button onClick={handleCopyClipboard} className="text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-lg text-slate-300 transition-colors flex items-center gap-1.5">
                  {copied ? <><i className="fa-solid fa-check text-emerald-400"></i> {t.copied}</> : <><i className="fa-regular fa-copy"></i> {t.copyToClipboard}</>}
                </button>
                <button onClick={() => setListModal({ isOpen: false, type: null })} className="text-slate-400 hover:text-rose-400 text-xl transition-colors ml-1">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto p-4 sm:p-5 flex-1 scrollbar-thin scrollbar-thumb-slate-700">
              {getListData().length > 0 ? (
                <ul className="space-y-2">
                  {getListData().map((w, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-brand-400 text-sm sm:text-base">{w.nl}</span>
                      <div className="flex flex-col sm:items-end text-xs sm:text-sm mt-1 sm:mt-0">
                        <span className="font-bold text-slate-200">{lang === 'tr' ? (w.tr || w.en) : (w.en || w.tr)}</span>
                        {w.tr && w.en && w.tr.toLowerCase() !== w.en.toLowerCase() && (
                          <span className="text-slate-400 text-xs">{lang === 'tr' ? w.en : w.tr}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-slate-500 py-12 flex flex-col items-center">
                   <i className="fa-solid fa-ghost text-4xl mb-3 opacity-50"></i>
                   <p className="font-medium">{t.noWordsInList}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-100">Vocabulaire Flashcards</h2>
        <div className="text-sm font-medium text-slate-400 bg-slate-800 inline-block px-4 py-2 rounded-xl shadow-sm border border-slate-700">
          {t.keyboard}: <strong>⬆️/⬇️</strong> {t.flip} &nbsp;•&nbsp; <strong>⬅️</strong> {t.dontKnow} &nbsp;•&nbsp; <strong>➡️</strong> {t.know}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {mode !== 'global' && (
          <select 
            value={targetChapter} 
            onChange={(e) => setTargetChapter(Number(e.target.value))} 
            className="bg-slate-800 border border-slate-600 text-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
          >
            {availableChapters.map(ch => (
              <option key={ch} value={ch}>Hoofdstuk {ch}</option>
            ))}
          </select>
        )}
        
        <select 
          value={mode} 
          onChange={(e) => setMode(e.target.value)} 
          className={`bg-slate-800 border text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer rounded-xl px-4 py-2.5 ${mode === 'global' ? 'border-amber-500 text-amber-400' : 'border-slate-600 text-slate-200'}`}
        >
          <option value="all">{t.allWordsOption} ({chapterVocab.length})</option>
          <option value="dialogue">{t.dialogueOption}</option>
          <option value="global">{t.globalPoolOption}</option>
        </select>

        <button 
          onClick={shuffleDeck}
          className="bg-slate-800 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-brand-400 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-shuffle"></i> {t.shuffle}
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
        <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-semibold text-slate-300 hover:text-brand-400 transition-colors select-none">
          <input 
            type="checkbox" 
            checked={studyUnknownsOnly} 
            onChange={e => setStudyUnknownsOnly(e.target.checked)} 
            className="w-4 h-4 rounded bg-slate-900 border-slate-600 text-brand-500 focus:ring-brand-500 focus:ring-offset-slate-800" 
          />
          {t.studyUnknowns}
        </label>

        <div className="w-[1px] h-5 bg-slate-600 hidden sm:block"></div>

        <button onClick={() => setListModal({ isOpen: true, type: 'unknown' })} className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-rose-400 transition-colors flex items-center gap-1.5">
          <i className="fa-solid fa-list-ul"></i> {t.listUnknowns}
        </button>

        <div className="w-[1px] h-5 bg-slate-600 hidden sm:block"></div>

        <button onClick={() => setListModal({ isOpen: true, type: 'all' })} className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
          <i className="fa-solid fa-layer-group"></i> {t.listAll}
        </button>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-700">
        <div className="flex justify-between text-sm font-bold text-slate-400 mb-3">
          <span>{t.card}: {totalWords > 0 && !currentWord?.id?.startsWith('empty') ? currentIndex + 1 : 0} / {totalWords}</span>
          <span className="text-brand-400">{t.progress}: %{progressPercentage}</span>
        </div>
        <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
          <div className="bg-brand-500 h-full transition-all duration-300 ease-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-2xl shadow-sm border text-center transition-colors duration-300 ${sessionBgClass}`}>
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">{t.thisSession}</h4>
          <div className="flex justify-center gap-4 text-sm font-bold">
            <span className="text-emerald-400 bg-emerald-900/40 border border-emerald-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-check"></i> {sessionStats.known}</span>
            <span className="text-rose-400 bg-rose-900/40 border border-rose-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {sessionStats.unknown}</span>
          </div>
        </div>
        <div className={`p-4 rounded-2xl shadow-sm border text-center transition-colors duration-300 ${globalBgClass}`}>
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">{t.history}</h4>
          <div className="flex justify-center gap-4 text-sm font-bold">
            <span className="text-emerald-400 bg-emerald-900/40 border border-emerald-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-check"></i> {wordGlobalStat.known}</span>
            <span className="text-rose-400 bg-rose-900/40 border border-rose-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {wordGlobalStat.unknown}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 mt-4">
        <div onClick={() => setIsFlipped(!isFlipped)} className={`flashcard w-full h-72 cursor-pointer ${isFlipped ? "flipped" : ""}`}>
          <div className="flashcard-inner relative w-full h-full rounded-3xl shadow-2xl border border-slate-700">
            
            <div className="flashcard-front absolute inset-0 rounded-3xl p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-slate-800 to-slate-900">
              <div className="flex justify-between w-full px-2">
                <span className="text-xs font-bold text-brand-400 bg-brand-900/30 border border-brand-700/50 px-3 py-1 rounded-full uppercase">Nederlands</span>
                {mode === 'global' && currentWord?.status && !currentWord.id?.startsWith('empty') && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase border ${currentWord.status === 'known' ? 'bg-emerald-900/40 text-emerald-400 border-emerald-700/50' : 'bg-rose-900/40 text-rose-400 border-rose-700/50'}`}>
                    {currentWord.status === 'known' ? t.known : t.unknown}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-slate-100 drop-shadow-md">{currentWord?.nl}</h3>
                <p className="text-sm text-slate-500 mt-4 font-medium">{t.clickToTranslate}</p>
              </div>
              <button onClick={(e) => speakDutch(currentWord?.nl, e)} className="text-slate-400 hover:text-brand-400 hover:bg-slate-700 p-3 rounded-full transition-colors text-xl">
                <i className="fa-solid fa-volume-high"></i>
              </button>
            </div>

            <div className="flashcard-back absolute inset-0 rounded-3xl p-6 flex flex-col justify-between items-center text-center bg-gradient-to-br from-rose-600 to-rose-800 text-white">
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase shadow-sm">
                {lang === 'tr' ? 'Türkçe / İngilizce' : 'English / Turkish'}
              </span>
              
              <div className="flex flex-col items-center justify-center my-auto w-full px-2">
                {/* Üstte Seçili Dil (Kalın), Altta Diğer Dil (İnce) */}
                <h3 className="text-3xl font-extrabold drop-shadow-md leading-tight">{primaryDisplay}</h3>
                {secondaryDisplay && (
                  <h4 className="text-base font-normal mt-2 text-rose-100/80">{secondaryDisplay}</h4>
                )}
                
                {currentWord?.example && !currentWord.id?.startsWith('empty') && (
                  <div className="mt-4 p-2.5 bg-black/20 rounded-xl border border-white/10 w-full max-w-md">
                    <p className="text-xs sm:text-sm text-rose-50 italic">"{currentWord?.example}"</p>
                  </div>
                )}
              </div>

              <span className="text-xs text-rose-300 font-medium tracking-wide">
                {mode === 'global' ? t.globalPoolLabel : `Hoofdstuk ${targetChapter}`}
              </span>
            </div>

          </div>
        </div>

        <div className="flex gap-4 w-full">
           <button 
             onClick={(e) => { e.stopPropagation(); updateStats(false); }}
             className="flex-1 bg-slate-800 border-2 border-rose-700/50 hover:border-rose-500 hover:bg-rose-900/30 text-rose-400 font-extrabold py-3.5 px-4 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
           >
             <i className="fa-solid fa-xmark text-lg"></i> {t.dontKnow}
           </button>
           <button 
             onClick={(e) => { e.stopPropagation(); updateStats(true); }}
             className="flex-1 bg-slate-800 border-2 border-emerald-700/50 hover:border-emerald-500 hover:bg-emerald-900/30 text-emerald-400 font-extrabold py-3.5 px-4 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
           >
             <i className="fa-solid fa-check text-lg"></i> {t.know}
           </button>
        </div>
      </div>
    </div>
  );
}