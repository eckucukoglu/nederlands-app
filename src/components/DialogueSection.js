import React, { useState, useEffect, useRef, useCallback } from 'react';
import { vocabulary, dialogues, bookSections } from '../data';
import { globalDictionary } from '../data/globalDictionary'; 
import { useLanguage } from '../contexts/LanguageContext'; 
import { 
  speakDutch as speakDutchAudio, 
  speakDutchWithHighlight, 
  parseTextTokens, 
  detectSpeakerGender,
  getSpeechRate, 
  setSpeechRate, 
  cancelDutchSpeech 
} from '../utils/speech'; 

const fallbackDictionary = {
  "de": "the", "een": "a/an", "het": "the", "ik": "I", "u": "you (formal)", "we": "we", "ze": "they", "mijn": "my", "uw": "your",
  "is": "is", "zijn": "are", "ben": "am", "heeft": "has", "hebt": "have", "hebben": "have", "heb": "have", "kunt": "can", "wil": "want",
  "wat": "what", "waar": "where", "wanneer": "when", "hoe": "how", "waarom": "why",
  "nou": "well", "hoef": "need to", "niet": "not", "te": "to", "vragen": "ask", "hier": "here", "komt": "comes", "doen": "do",
  "nee": "no", "dat": "that", "wel": "indeed/well", "er": "there", "aan": "on", "hand": "hand", "ziet": "see", "zit": "sit/is", 
  "onder": "under / covered in", "rode": "red", "zitten": "sit/are", "op": "on", "en": "and", "alleen": "only", "maar": "but", 
  "niets": "nothing", "sinds": "since", "vertellen": "tell", "gisteren": "yesterday", "met": "with", "huis": "house", "naar": "to",
  "nog": "still/yet", "biertje": "beer", "iets": "something", "eigenlijk": "actually", "dagen": "days", "o": "oh", "ja": "yes", 
  "in": "in", "weekend": "weekend", "heel": "very", "veel": "much/many", "aardbeien": "strawberries", "tuin": "garden", "meer": "more", 
  "dan": "than", "jaar": "year", "andere": "other", "verder": "further", "mee": "along", "graag": "gladly", "voor": "for", 
  "volgende": "next", "week": "week", "nieuwe": "new", "maken": "make", "bedankt": "thanks", "tot": "until/see you",
  "beetje": "a bit", "van": "from", "onze": "our", "zeg": "say", "je": "you", "heet": "is called", "ook": "also", "erg": "very",
  "sorry": "sorry", "zegt": "say", "oud": "old", "dus": "so", "bent": "are", "hij": "he/it", "prima": "fine", "misschien": "maybe", 
  "even": "just/briefly", "kijken": "look", "vanmorgen": "this morning", "goed": "good", "zal": "will", "hele": "whole", 
  "weer": "again", "als": "like/as", "nieuw": "new", "woorden": "words", "morgen": "tomorrow", "overmorgen": "the day after tomorrow", "dag": "dag"
};

const speakerColorPalette = [
  { bg: "bg-slate-800/50", border: "border-slate-500", text: "text-slate-400" },     
  { bg: "bg-teal-900/20", border: "border-teal-600", text: "text-teal-400" },        
  { bg: "bg-indigo-900/20", border: "border-indigo-500", text: "text-indigo-400" },  
  { bg: "bg-rose-900/20", border: "border-rose-600", text: "text-rose-400" },        
  { bg: "bg-amber-900/20", border: "border-amber-600", text: "text-amber-400" },     
  { bg: "bg-purple-900/20", border: "border-purple-500", text: "text-purple-400" }   
];

export default function DialogueSection({ sectionId, favorites, toggleFavorite, completed, toggleCompleted }) {
  const { lang, t } = useLanguage(); 
  const chapterId = sectionId.split('.')[0];
  const sectionData = bookSections.find(s => s.id === sectionId);
  
  const [selectedWords, setSelectedWords] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [clickedWordRaw, setClickedWordRaw] = useState("");
  
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");
  
  const [wordStatuses, setWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [qStats, setQStats] = useState(JSON.parse(localStorage.getItem('questionStats')) || {});
  const [currentSpeechRate, setCurrentSpeechRate] = useState(getSpeechRate());
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [playingLineIdx, setPlayingLineIdx] = useState(null);
  const [activeWordIdx, setActiveWordIdx] = useState(null);
  const [activeSentenceIdx, setActiveSentenceIdx] = useState(null);

  const playAllSessionRef = useRef(0);
  const playAllTimeoutRef = useRef(null);

  const activeDialogue = dialogues[sectionId] || [];
  const isFav = favorites && favorites[sectionId];
  const isComp = completed && completed[sectionId];

  const uniqueSpeakers = [...new Set(activeDialogue.map(line => line.speaker))];
  
  const getSpeakerStyle = (speakerName) => {
    const index = uniqueSpeakers.indexOf(speakerName);
    return speakerColorPalette[index % speakerColorPalette.length];
  };

  useEffect(() => {
    const handleRateUpdate = (e) => {
      setCurrentSpeechRate(e.detail || getSpeechRate());
    };
    window.addEventListener('speechRateChanged', handleRateUpdate);
    return () => window.removeEventListener('speechRateChanged', handleRateUpdate);
  }, []);

  useEffect(() => {
    const fetchStatuses = () => {
      const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
      setWordStatuses(saved ? JSON.parse(saved) : {});
    };
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, [chapterId]);

  const stopPlayingAll = useCallback(() => {
    // 1. Session ID'yi artırarak devam eden veya tetiklenecek sonraki adımları derhal geçersiz kıl
    playAllSessionRef.current += 1;

    // 2. Satırlar arası bekleme timer'ını temizle
    if (playAllTimeoutRef.current) {
      clearTimeout(playAllTimeoutRef.current);
      playAllTimeoutRef.current = null;
    }

    // 3. Web Speech API konuşmasını derhal durdur
    cancelDutchSpeech();

    // 4. State'leri sıfırla
    setIsPlayingAll(false);
    setPlayingLineIdx(null);
    setActiveWordIdx(null);
    setActiveSentenceIdx(null);
  }, []);

  // Bileşen kapandığında veya sayfa değiştiğinde konuşmayı kes
  useEffect(() => {
    return () => {
      stopPlayingAll();
    };
  }, [stopPlayingAll]);

  useEffect(() => {
    setAnswers({});         
    setShowResults(false);
    stopPlayingAll();
  }, [sectionId, stopPlayingAll]);

  const handleSpeechRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    if (!isNaN(newRate)) {
      setCurrentSpeechRate(newRate);
      setSpeechRate(newRate);
    }
  };

  const resetSpeechRate = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSpeechRate(1.0);
    setSpeechRate(1.0);
  };

  const handlePlaySingleLine = (idx, line, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (playingLineIdx === idx) {
      stopPlayingAll();
      return;
    }

    stopPlayingAll();
    const currentSession = ++playAllSessionRef.current;
    setPlayingLineIdx(idx);
    setIsPlayingAll(false);

    speakDutchWithHighlight(line.text, {
      speaker: line.speaker,
      rate: currentSpeechRate,
      onWord: (wIdx) => {
        if (playAllSessionRef.current === currentSession) {
          setActiveWordIdx(wIdx);
        }
      },
      onSentence: (sIdx) => {
        if (playAllSessionRef.current === currentSession) {
          setActiveSentenceIdx(sIdx);
        }
      },
      onEnd: () => {
        if (playAllSessionRef.current === currentSession) {
          setPlayingLineIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      },
      onError: () => {
        if (playAllSessionRef.current === currentSession) {
          setPlayingLineIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      }
    });
  };

  const speakDutch = (text, e, speaker, idx) => {
    if (typeof idx === 'number') {
      const line = activeDialogue[idx] || { text, speaker };
      handlePlaySingleLine(idx, line, e);
    } else {
      if (e && e.stopPropagation) e.stopPropagation();
      stopPlayingAll();
      speakDutchAudio(text, { speaker, rate: currentSpeechRate });
    }
  };

  const handlePlayAllDialogue = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (isPlayingAll) {
      stopPlayingAll();
      return;
    }

    if (!activeDialogue || activeDialogue.length === 0) return;

    // Önceki herhangi bir seslendirme veya timer'ı tamamen temizle
    stopPlayingAll();

    const currentSession = ++playAllSessionRef.current;
    setIsPlayingAll(true);
    let index = 0;

    const playNext = () => {
      // Eğer kullanıcı durdurduysa veya yeni bir oynatma başlattıysa oturum geçersizdir
      if (playAllSessionRef.current !== currentSession) return;

      if (index >= activeDialogue.length) {
        setIsPlayingAll(false);
        setPlayingLineIdx(null);
        setActiveWordIdx(null);
        setActiveSentenceIdx(null);
        return;
      }

      setPlayingLineIdx(index);
      const lineEl = document.getElementById(`dialogue-line-${index}`);
      if (lineEl) {
        lineEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      const line = activeDialogue[index];
      index++;

      speakDutchWithHighlight(line.text, {
        speaker: line.speaker,
        rate: currentSpeechRate,
        onWord: (wIdx) => {
          if (playAllSessionRef.current === currentSession) {
            setActiveWordIdx(wIdx);
          }
        },
        onSentence: (sIdx) => {
          if (playAllSessionRef.current === currentSession) {
            setActiveSentenceIdx(sIdx);
          }
        },
        onEnd: () => {
          if (playAllSessionRef.current !== currentSession) return;
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
          playAllTimeoutRef.current = setTimeout(() => {
            if (playAllSessionRef.current !== currentSession) return;
            playNext();
          }, 450);
        },
        onError: () => {
          if (playAllSessionRef.current !== currentSession) return;
          setIsPlayingAll(false);
          setPlayingLineIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      });
    };

    playNext();
  };

// --- YENİ EKLENEN BULK (TOPLU) İŞARETLEME FONKSİYONU ---
  const handleMarkLineAsKnown = (e, cleanWords) => {
    e.stopPropagation();

    const allVocab = [...vocabulary, ...globalDictionary];
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => uniqueVocabMap.set(item.nl.toLowerCase(), item));

    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const storageKey = `dialogueUnknowns_${chapterId}`;
    let existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    const newStatuses = { ...wordStatuses };
    let hasChanges = false;

    cleanWords.forEach(cleanWord => {
      if (!cleanWord) return;
      if (newStatuses[cleanWord] === 'known') return; // Zaten biliniyorsa geç

      let wordObj = null;

      // 1. Önce tam eşleşme ara (Exact match)
      if (uniqueVocabMap.has(cleanWord)) {
        wordObj = uniqueVocabMap.get(cleanWord);
      } else {
        // 2. "de", "het", "een" gibi article ile başlayanları ara
        const articleMatch = allVocab.find(v => 
          v.nl.toLowerCase() === `de ${cleanWord}` || 
          v.nl.toLowerCase() === `het ${cleanWord}` || 
          v.nl.toLowerCase() === `een ${cleanWord}`
        );

        if (articleMatch) {
          wordObj = articleMatch;
        } else {
          // 3. Parantez içi veya cümle içi kelimeleri regex ile ara (örn: "gedroomd (dromen)")
          try {
            const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
            const boundaryMatch = allVocab.find(v => regex.test(v.nl));
            if (boundaryMatch) {
              wordObj = boundaryMatch;
            }
          } catch(err) { console.error(err); }
        }
      }

      // 4. Eğer sözlükte hiç yoksa, fallback listesine bak (bağlaçlar vb.)
      if (!wordObj) {
        const fallback = fallbackDictionary[cleanWord];
        if (fallback) {
          wordObj = {
            nl: cleanWord,
            en: fallback,
            tr: "Çeviri bulunamadı",
            example: "Uit de dialoog",
            chapter: chapterId
          };
        }
      }

      // Eğer geçerli bir sözlük/fallback kelimesi bulunduysa listeye ekle
      if (wordObj) {
        hasChanges = true;
        const entryWithChapter = {
          ...wordObj,
          chapter: wordObj.chapter || chapterId,
          status: 'known',
          addedAt: new Date().toISOString()
        };
        pool[wordObj.nl.toLowerCase()] = entryWithChapter;
        existingUnknowns = existingUnknowns.filter(w => w.nl.toLowerCase() !== wordObj.nl.toLowerCase());
        
        newStatuses[cleanWord] = 'known';
        
        const lowerNL = wordObj.nl.toLowerCase();
        newStatuses[lowerNL] = 'known';
        
        if (lowerNL.includes('(')) {
          const parts = lowerNL.split('(');
          const mainPart = parts[0].trim();
          const insideParen = parts[1].replace(')', '').trim();
          if (mainPart) newStatuses[mainPart] = 'known';
          if (insideParen) newStatuses[insideParen] = 'known';
        }

        const articleMatch = lowerNL.match(/^(de|het|een)\s+(.+)$/);
        if (articleMatch) {
          newStatuses[articleMatch[2].trim()] = 'known';
        }
      }
    });

    if (hasChanges) {
      localStorage.setItem('globalWordPool', JSON.stringify(pool));
      localStorage.setItem(storageKey, JSON.stringify(existingUnknowns));
      localStorage.setItem(`dialogueWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
      setWordStatuses(newStatuses);
      window.dispatchEvent(new Event('wordStatusUpdated'));
      window.dispatchEvent(new Event('progressUpdated'));
    }
  };
  // -------------------------------------------------------

  const handleWordClick = (e, wordIndex, cleanWords) => {
    e.stopPropagation();
    const cleanWord = cleanWords[wordIndex];
    setClickedWordRaw(cleanWord);

    let yPosition = e.clientY + 15;
    if (yPosition + 280 > window.innerHeight) {
      yPosition = e.clientY - 260; 
    }
    setPopupPos({ x: e.clientX, y: yPosition });

    const allVocab = [...vocabulary, ...globalDictionary];
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => {
      uniqueVocabMap.set(item.nl.toLowerCase(), item);
    });
    const uniqueVocab = Array.from(uniqueVocabMap.values());

    let matches = [];
    try {
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
      matches = uniqueVocab.filter(v => regex.test(v.nl));
    } catch (err) {
      console.error("Regex error:", err);
    }

    if (matches.length === 0) {
      matches = uniqueVocab.filter(v => v.nl.toLowerCase().includes(cleanWord));
    }

    if (matches.length === 0) {
      const fallback = fallbackDictionary[cleanWord];
      matches = [{ 
        nl: cleanWord, 
        en: fallback || "Translation not available", 
        tr: "Çeviri bulunamadı",
        example: fallback ? "Uit de dialoog" : t('notFound')
      }];
    }

    matches.sort((a, b) => {
      const aIsExact = a.nl.toLowerCase() === cleanWord ? -1 : 1;
      const bIsExact = b.nl.toLowerCase() === cleanWord ? -1 : 1;
      if (aIsExact !== bIsExact) return aIsExact - bIsExact;
      return a.nl.length - b.nl.length;
    });

    setSelectedWords(matches);
  };

  const saveToGlobalPool = (wordObj, status) => {
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    if (status === undefined) {
      delete pool[wordObj.nl.toLowerCase()];
    } else {
      pool[wordObj.nl.toLowerCase()] = {
        ...wordObj,
        chapter: wordObj.chapter || chapterId,
        status,
        addedAt: new Date().toISOString()
      };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    window.dispatchEvent(new Event('progressUpdated'));
  };

  const handleWordKnowledge = (wordObj, isKnown) => {
    const storageKey = `dialogueUnknowns_${chapterId}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns;

    if (!isKnown) {
      if (!existingUnknowns.some(w => w.nl === wordObj.nl)) updatedUnknowns = [...existingUnknowns, wordObj];
      else updatedUnknowns = existingUnknowns;
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== wordObj.nl);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    saveToGlobalPool(wordObj, isKnown ? 'known' : 'unknown');

    const keysToUpdate = new Set();
    const lowerNL = wordObj.nl.toLowerCase();
    keysToUpdate.add(lowerNL);
    
    if (lowerNL.includes('(')) {
      const parts = lowerNL.split('(');
      const mainPart = parts[0].trim();
      const insideParen = parts[1].replace(')', '').trim();
      if (mainPart) keysToUpdate.add(mainPart);
      if (insideParen) keysToUpdate.add(insideParen);
    }

    const articleMatch = lowerNL.match(/^(de|het|een)\s+(.+)$/);
    if (articleMatch) {
      keysToUpdate.add(articleMatch[2].trim());
    }

    if (clickedWordRaw) {
      keysToUpdate.add(clickedWordRaw);
    }

    const newStatuses = { ...wordStatuses };
    keysToUpdate.forEach(key => {
      newStatuses[key] = isKnown ? 'known' : 'unknown';
    });

    setWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    setSelectedWords(null);
  };

  const handleRawWordToggle = (direction, e) => {
    e.stopPropagation();
    if (!clickedWordRaw) return;

    const currentStatus = wordStatuses[clickedWordRaw];
    let newStatus;

    if (direction === 'left') {
      if (currentStatus === 'known') newStatus = undefined; 
      else newStatus = 'unknown'; 
    } else if (direction === 'right') {
      if (currentStatus === 'unknown') newStatus = undefined; 
      else newStatus = 'known'; 
    }

    const storageKey = `dialogueUnknowns_${chapterId}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns = existingUnknowns;

    if (newStatus === 'unknown') {
      if (!existingUnknowns.some(w => w.nl === clickedWordRaw)) {
        updatedUnknowns = [...existingUnknowns, {
          nl: clickedWordRaw, 
          en: "Not found in dictionary", 
          tr: "Sözlükte bulunamadı",
          example: "Manually marked by the user."
        }];
      }
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== clickedWordRaw);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    const wordObj = {
      nl: clickedWordRaw,
      en: "Not found in dictionary",
      tr: "Sözlükte bulunamadı",
      example: "Manually marked by the user."
    };
    saveToGlobalPool(wordObj, newStatus);

    const newStatuses = { ...wordStatuses };
    if (newStatus === undefined) {
      delete newStatuses[clickedWordRaw];
    } else {
      newStatuses[clickedWordRaw] = newStatus;
    }
    setWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (isFav) toggleFavorite(sectionId, null);
    else setShowFavInput(true);
  };

  const saveFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(sectionId, favNote.trim() || (lang === 'tr' ? "Önemli Bölüm" : "Important Section"));
    setShowFavInput(false);
    setFavNote("");
  };

  const handleAnswerChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleVerify = () => {
    setShowResults(true);
    const newStats = { ...qStats };
    const groups = sectionData?.exerciseGroups || [];
    groups.forEach(group => {
      group.questions.forEach(q => {
        const userAns = answers[q.id]?.toLowerCase().trim() || "";
        const isCorrect = Boolean(userAns && q.correctAnswer && userAns === q.correctAnswer.toLowerCase().trim());
        if (userAns !== "") {
          const current = newStats[q.id] || { correct: 0, incorrect: 0 };
          newStats[q.id] = {
            correct: current.correct + (isCorrect ? 1 : 0),
            incorrect: current.incorrect + (!isCorrect ? 1 : 0)
          };
        }
      });
    });
    setQStats(newStats);
    localStorage.setItem('questionStats', JSON.stringify(newStats));
  };

  const rawStatus = wordStatuses[clickedWordRaw];
  let trackColor = "bg-slate-700/80";
  let thumbColor = "bg-slate-400";
  let translateClass = "translate-x-[18px]"; 

  if (rawStatus === 'unknown') {
    trackColor = "bg-rose-900/60"; thumbColor = "bg-rose-500"; translateClass = "translate-x-[2px]"; 
  } else if (rawStatus === 'known') {
    trackColor = "bg-emerald-900/60"; thumbColor = "bg-emerald-500"; translateClass = "translate-x-[34px]"; 
  }

  return (
    <div className="space-y-6" onClick={() => { setSelectedWords(null); setShowFavInput(false); }}>
      
      {/* 1. DİYALOG ALANI */}
      <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 relative">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-comments text-brand-400 text-lg"></i>
            <div>
              <h3 className="text-lg font-bold text-slate-100 leading-tight">Dialoog Lezen en Luisteren</h3>
              {isFav && (
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-0.5">
                  <i className="fa-solid fa-star text-[10px]"></i> {favorites[sectionId]}
                </span>
              )}
            </div>
          </div>

          <div className="relative flex items-center space-x-2 sm:space-x-3 self-end sm:self-center">
            {/* TÜM DİYALOĞU OYNAT / DURDUR BUTONU */}
            {activeDialogue.length > 0 && (
              <button 
                onClick={handlePlayAllDialogue}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all shadow-sm ${
                  isPlayingAll 
                    ? 'bg-rose-900/50 text-rose-300 border-rose-600/80 shadow-rose-950/50' 
                    : 'bg-slate-800 text-brand-300 hover:text-white hover:bg-slate-700 border-slate-600'
                }`}
                title={isPlayingAll 
                  ? (lang === 'tr' ? 'Okumayı Durdur' : 'Stop Playing') 
                  : (lang === 'tr' ? 'Tüm Diyaloğu Karşılıklı Dinle' : 'Listen to Full Dialogue')}
              >
                <i className={`fa-solid ${isPlayingAll ? 'fa-stop text-rose-400' : 'fa-play text-brand-400 text-[10px]'}`}></i>
                <span className="hidden sm:inline">{isPlayingAll ? (lang === 'tr' ? 'Durdur' : 'Stop') : (lang === 'tr' ? 'Diyaloğu Dinle' : 'Play All')}</span>
              </button>
            )}

            {/* ANALOG SES HIZI KONTROLÜ (SLIDER / PITCH FADER) */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2 bg-slate-950/70 border border-slate-700/80 hover:border-slate-600 rounded-xl px-2 py-1 shadow-inner transition-colors group select-none"
              title={lang === 'tr' ? `Konuşma Hızı: ${Number(currentSpeechRate).toFixed(2)}x (Kaydırarak ayarla, 1.0x için tıkla)` : `Speech Speed: ${Number(currentSpeechRate).toFixed(2)}x (Slide to adjust, click 1.0x to reset)`}
            >
              <i className="fa-solid fa-gauge-high text-teal-400 text-[11px] flex-shrink-0 group-hover:scale-110 transition-transform"></i>
              
              <input 
                type="range"
                min="0.6"
                max="1.4"
                step="0.05"
                value={currentSpeechRate}
                onChange={handleSpeechRateChange}
                className="analog-speed-slider w-14 sm:w-20 md:w-24 h-1.5 cursor-ew-resize flex-shrink-0"
              />

              <button 
                type="button"
                onClick={resetSpeechRate}
                title={lang === 'tr' ? "1.00x normal hıza sıfırla" : "Reset to 1.00x"}
                className="font-mono text-[10px] sm:text-[11px] font-extrabold text-teal-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/60 px-1.5 py-0.5 rounded transition-all shadow-sm active:scale-95 flex-shrink-0"
              >
                {Number(currentSpeechRate).toFixed(2)}x
              </button>
            </div>

            <button onClick={(e) => { e.stopPropagation(); toggleCompleted(sectionId); }} className="text-xl transition-transform hover:scale-110 focus:outline-none ml-1">
              {isComp ? (
                <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
              )}
            </button>

            <div className="flex items-center">
              <button onClick={handleStarClick} className="text-xl transition-transform hover:scale-110 focus:outline-none cursor-pointer">
                {isFav ? (
                  <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                ) : (
                  <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                )}
              </button>
            </div>

            {showFavInput && (
              <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/50 p-1 rounded-xl shadow-lg animate-fadeIn" onClick={e => e.stopPropagation()}>
                <input
                  autoFocus
                  maxLength={100}
                  value={favNote}
                  onChange={e => setFavNote(e.target.value)}
                  onKeyDown={e => { 
                    if (e.key === 'Enter') saveFavorite(e); 
                    if (e.key === 'Escape') setShowFavInput(false);
                  }}
                  placeholder={lang === 'tr' ? "Notun (max 100 kar.)..." : "Your note (max 100 char.)..."}
                  className="bg-transparent text-slate-200 text-xs px-2.5 py-1 w-36 sm:w-44 focus:outline-none placeholder-slate-500"
                />
                <button onClick={saveFavorite} className="bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          {activeDialogue.map((line, idx) => {
            const tokens = parseTextTokens(line.text);
            const cleanWords = tokens.map(t => t.clean);
            
            // Cümle bazlı gruplama
            const sentenceGroups = [];
            tokens.forEach((token, tokenIdx) => {
              const sIdx = token.sentenceIndex;
              if (!sentenceGroups[sIdx]) sentenceGroups[sIdx] = [];
              sentenceGroups[sIdx].push({ ...token, globalIndex: tokenIdx });
            });

            const style = getSpeakerStyle(line.speaker);

            const translationText = typeof line.translation === 'object' 
              ? line.translation[lang] || line.translation.tr 
              : line.translation;
              
            const flag = lang === 'tr' ? '🇹🇷' : '🇬🇧';
            const isLinePlaying = playingLineIdx === idx;

            return (
              <div 
                id={`dialogue-line-${idx}`}
                key={idx} 
                className={`p-3.5 rounded-xl flex items-start space-x-3 transition-all ${style.bg} border-l-4 ${style.border} ${
                  isLinePlaying 
                    ? 'ring-2 ring-amber-400/90 border-l-amber-400 bg-slate-800/95 shadow-[0_0_25px_rgba(251,191,36,0.25)] scale-[1.01]' 
                    : ''
                }`}
              >
                {/* --- DİNLEME VE TOPLU İŞARETLEME BUTONLARI --- */}
                <div className="flex flex-col gap-2 flex-shrink-0 mt-0.5">
                  <button 
                    onClick={(e) => handlePlaySingleLine(idx, line, e)} 
                    className={`border p-2 rounded-lg shadow-sm transition ${
                      isLinePlaying 
                        ? 'bg-amber-500 border-amber-300 text-slate-950 font-bold shadow-md shadow-amber-500/40 scale-105' 
                        : 'bg-slate-800 border-slate-600 hover:bg-slate-700 text-brand-400'
                    }`} 
                    title={isLinePlaying ? (lang === 'tr' ? 'Durdur' : 'Stop') : (lang === 'tr' ? 'Dinle' : 'Listen')}
                  >
                    <i className={`fa-solid ${isLinePlaying ? 'fa-stop text-slate-950' : 'fa-volume-high'}`}></i>
                  </button>
                  <button 
                    onClick={(e) => handleMarkLineAsKnown(e, cleanWords)} 
                    className="bg-slate-800 border border-slate-600 p-2 rounded-lg shadow-sm hover:bg-emerald-900/40 hover:border-emerald-500 hover:text-emerald-400 text-slate-500 transition" 
                    title={lang === 'tr' ? 'Tüm cümleyi biliyorum olarak işaretle' : 'Mark all words as known'}
                  >
                    <i className="fa-solid fa-check-double text-sm"></i>
                  </button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 ${style.text}`}>
                      <i 
                        className={`text-[10px] ${
                          detectSpeakerGender(line.speaker) === 'female' 
                            ? 'fa-solid fa-venus text-rose-400' 
                            : detectSpeakerGender(line.speaker) === 'male' 
                            ? 'fa-solid fa-mars text-sky-400' 
                            : 'fa-regular fa-user text-slate-400'
                        }`} 
                        title={
                          detectSpeakerGender(line.speaker) === 'female' 
                            ? (lang === 'tr' ? 'Kadın Konuşmacı (Kadın Sesi)' : 'Female Speaker') 
                            : detectSpeakerGender(line.speaker) === 'male' 
                            ? (lang === 'tr' ? 'Erkek Konuşmacı (Erkek Sesi)' : 'Male Speaker') 
                            : ''
                        }
                      ></i>
                      <span>{line.speaker}</span>
                    </span>
                    {isLinePlaying && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-600/60 shadow-[0_0_10px_rgba(245,158,11,0.25)] animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24]"></span>
                        <span>{lang === 'tr' ? 'Seslendiriliyor...' : 'Playing...'}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                    {sentenceGroups.map((group, sIdx) => {
                      const isSentenceActive = isLinePlaying && activeSentenceIdx === sIdx;
                      return (
                        <span 
                          key={sIdx}
                          className={`transition-all duration-200 rounded-lg inline ${
                            isSentenceActive 
                              ? 'bg-amber-500/15 text-slate-100 ring-1 ring-amber-400/40 px-1 py-0.5 shadow-[0_0_12px_rgba(245,158,11,0.2)]' 
                              : ''
                          }`}
                        >
                          {group.map((token) => {
                            const i = token.globalIndex;
                            const isWordActive = isLinePlaying && activeWordIdx === i;

                            let status = wordStatuses[token.clean]; 
                            if (!status) {
                              const checkPhrases = [
                                [[i-4, i-3, i-2, i-1, i], [i-3, i-2, i-1, i, i+1], [i-2, i-1, i, i+1, i+2], [i-1, i, i+1, i+2, i+3], [i, i+1, i+2, i+3, i+4]],
                                [[i-3, i-2, i-1, i], [i-2, i-1, i, i+1], [i-1, i, i+1, i+2], [i, i+1, i+2, i+3]],
                                [[i-2, i-1, i], [i-1, i, i+1], [i, i+1, i+2]],
                                [[i-1, i], [i, i+1]]
                              ];

                              for (const grp of checkPhrases) {
                                for (const indices of grp) {
                                  if (indices.every(idx => idx >= 0 && idx < cleanWords.length)) {
                                    const phrase = indices.map(idx => cleanWords[idx]).join(' ');
                                    if (wordStatuses[phrase]) {
                                      status = wordStatuses[phrase];
                                      break;
                                    }
                                  }
                                }
                                if (status) break;
                              }
                            }

                            let wordColor = 'inherit';
                            if (status === 'known') wordColor = '#34d399'; 
                            if (status === 'unknown') wordColor = '#fb7185';

                            return (
                              <span 
                                key={i} 
                                style={{ 
                                  color: isWordActive ? '#020617' : wordColor, 
                                  textDecoration: isWordActive ? 'none' : 'underline', 
                                  textDecorationStyle: 'dotted', 
                                  cursor: 'pointer' 
                                }} 
                                onClick={(e) => handleWordClick(e, i, cleanWords)}
                                className={`transition-all duration-150 inline-block mx-0.5 rounded ${
                                  isWordActive 
                                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black px-1.5 py-0.5 shadow-[0_0_16px_rgba(251,191,36,0.95)] ring-2 ring-amber-300 scale-110 z-20 -translate-y-0.5' 
                                    : ''
                                }`}
                              >
                                {token.raw}{' '}
                              </span>
                            );
                          })}
                        </span>
                      );
                    })}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 italic">{flag} {translationText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. TEORİ / GRAMER ALANI */}
      {sectionData?.theory && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 animate-fadeIn">
          <div className="text-slate-300 leading-relaxed font-medium">
            {typeof sectionData.theory === 'function' ? sectionData.theory(lang) : sectionData.theory}
          </div>
        </div>
      )}

      {/* 3. EGZERSİZ ALANI */}
      {sectionData?.exerciseGroups && sectionData.exerciseGroups.length > 0 && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-6 animate-fadeIn">
          <h3 className="text-xl font-bold text-slate-100 border-b border-slate-700 pb-2 mb-4 flex items-center space-x-2">
            <i className="fa-solid fa-pen-to-square text-brand-400"></i>
            <span>{lang === 'tr' ? 'Bölüm Soruları' : 'Section Questions'}</span>
          </h3>

          {sectionData.exerciseGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6 mb-8">
              <h4 className="font-bold text-brand-400 border-b border-slate-700/50 pb-2 flex items-center space-x-2">
                <span>{group.instruction}</span>
              </h4>

              {group.questions.filter(q => q && q.question).map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = Boolean(userAns && q.correctAnswer && userAns.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim());

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-slate-700 bg-slate-900/50 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-extrabold text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">Q{idx + 1}</span>
                      <p className="flex-1 font-semibold text-sm text-slate-200">{q.question}</p>
                      <button onClick={(e) => speakDutch(q.question, e)} className="text-slate-500 hover:text-brand-400 text-xs transition-colors">
                        <i className="fa-solid fa-volume-high"></i>
                      </button>
                    </div>

                    <div className="pt-1">
                      {q.type === 'multiple_choice' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map(opt => {
                            let btnClass = "bg-slate-800 border-slate-600 text-slate-300 hover:border-brand-500 hover:bg-slate-700";
                            if (userAns === opt) btnClass = "bg-brand-600 text-white border-brand-500 shadow-sm";
                            if (showResults) {
                              if (opt === q.correctAnswer) btnClass = "bg-emerald-600 text-white border-emerald-500 font-bold";
                              else if (userAns === opt && !isCorrect) btnClass = "bg-rose-600 text-white border-rose-500";
                            }
                            return (
                              <button key={opt} disabled={showResults} onClick={() => handleAnswerChange(q.id, opt)} className={`p-3 rounded-lg border text-xs text-left font-medium transition-all flex items-center justify-between ${btnClass}`}>
                                <span>{opt}</span>
                                {showResults && opt === q.correctAnswer && <i className="fa-solid fa-circle-check text-emerald-200 text-sm"></i>}
                                {showResults && userAns === opt && !isCorrect && <i className="fa-solid fa-circle-xmark text-rose-200 text-sm"></i>}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <input 
                          type="text" 
                          disabled={showResults}
                          placeholder={lang === 'tr' ? "Cevabını yaz..." : "Type your answer..."} 
                          value={userAns || ''} 
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="p-3 w-full max-w-sm text-sm rounded-xl border border-slate-600 bg-slate-900 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none"
                        />
                      )}
                    </div>

                    {showResults && (
                      <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? "bg-emerald-900/30 text-emerald-300 border border-emerald-800" : "bg-rose-900/30 text-rose-300 border border-rose-800"}`}>
                        <span className="font-bold">{isCorrect ? (lang === 'tr' ? "✔️ Juist! (Doğru)" : "✔️ Juist! (Correct)") : (lang === 'tr' ? "❌ Onjuist. (Yanlış)" : "❌ Onjuist. (Incorrect)")} </span>
                        {!isCorrect && <span>{lang === 'tr' ? "Doğru cevap (Het goede antwoord is): " : "The correct answer is (Het goede antwoord is): "}<strong className="text-white">{q.correctAnswer}</strong></span>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          <div className="flex justify-end pt-4 border-t border-slate-700">
            <button onClick={handleVerify} className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition">
              {lang === 'tr' ? 'Cevapları Kontrol Et' : 'Verify Answers'}
            </button>
          </div>
        </div>
      )}

      {/* 4. MODALS (Kelime Çeviri) */}
      {selectedWords && selectedWords.length > 0 && (
        <>
          <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setSelectedWords(null); }}></div>
          <div 
            className="fixed bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-2xl z-50 min-w-[240px] max-w-[280px] transform -translate-x-1/2 max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600" 
            style={{ left: `${popupPos.x}px`, top: `${popupPos.y}px` }} 
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="mb-3 pb-3 border-b border-slate-700/80 flex justify-between items-center gap-3">
              <div className="flex flex-col truncate">
                <span className="text-[13px] font-bold text-slate-200 truncate">
                  <i className="fa-solid fa-pen-nib text-brand-400 mr-1.5"></i>
                  {clickedWordRaw}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight mt-0.5">{lang === 'tr' ? "Sadece İşaretle" : "Mark Only"}</span>
              </div>
              
              <div className={`relative w-14 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${trackColor}`}>
                <div className="absolute left-0 w-1/2 h-full z-10 cursor-pointer rounded-l-full" onClick={(e) => handleRawWordToggle('left', e)}></div>
                <div className="absolute right-0 w-1/2 h-full z-10 cursor-pointer rounded-r-full" onClick={(e) => handleRawWordToggle('right', e)}></div>
                <div className={`absolute top-[2px] w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-in-out ${thumbColor} ${translateClass}`}></div>
              </div>
            </div>

            <div className="space-y-3">
              {selectedWords.map((wordObj, idx) => {
                const currentStatus = wordStatuses[wordObj.nl.toLowerCase()];
                return (
                  <div key={idx} className="border-b border-slate-700 last:border-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-brand-400 text-[15px] leading-tight">{wordObj.nl}</h3>
                      <button onClick={(e) => speakDutch(wordObj.nl, e)} className="text-slate-400 hover:text-brand-300 ml-2">
                        <i className="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </div>
                    
                    <div className="leading-snug mb-1.5 flex flex-col gap-0.5">
                      {lang === 'tr' ? (
                        <>
                          {wordObj.tr && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 mr-1 tracking-wider">TR</span>
                              <span className="text-[14px] font-bold text-slate-100">{wordObj.tr}</span>
                            </div>
                          )}
                          {wordObj.en && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 mr-1 tracking-wider">GB</span>
                              <span className="text-[13px] font-normal text-slate-400">{wordObj.en}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {wordObj.en && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 mr-1 tracking-wider">GB</span>
                              <span className="text-[14px] font-bold text-slate-100">{wordObj.en}</span>
                            </div>
                          )}
                          {wordObj.tr && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 mr-1 tracking-wider">TR</span>
                              <span className="text-[13px] font-normal text-slate-400">{wordObj.tr}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {wordObj.example && <p className="text-[11px] text-slate-400 italic mb-2 leading-snug">"{wordObj.example}"</p>}

                    <div className="flex gap-2 mt-1.5">
                      <button 
                        onClick={() => handleWordKnowledge(wordObj, true)} 
                        className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${
                          currentStatus === 'known' 
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' 
                            : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'
                        }`}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                      <button 
                        onClick={() => handleWordKnowledge(wordObj, false)} 
                        className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${
                          currentStatus === 'unknown' 
                            ? 'bg-rose-600 border-rose-500 text-white shadow-inner scale-[0.98]' 
                            : 'bg-slate-700/50 border-slate-600 hover:bg-rose-900/40 hover:border-rose-700/50 text-slate-300'
                        }`}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}