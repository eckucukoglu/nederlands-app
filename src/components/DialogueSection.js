import React, { useState, useEffect } from 'react';
import { vocabulary, dialogues } from '../data';
import { globalDictionary } from '../data/globalDictionary'; 

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
  "weer": "again", "als": "like/as", "nieuw": "new", "woorden": "words", "morgen": "tomorrow", "overmorgen": "the day after tomorrow", "dag": "day"
};

export default function DialogueSection({ sectionId, favorites, toggleFavorite, completed, toggleCompleted }) {
  const chapterId = sectionId.split('.')[0];
  
  const [selectedWords, setSelectedWords] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [clickedWordRaw, setClickedWordRaw] = useState("");
  
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");
  
  const [wordStatuses, setWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const activeDialogue = dialogues[sectionId] || [];
  const isFav = favorites && favorites[sectionId];
  const isComp = completed && completed[sectionId];

  // YENİ: Hem ilk yüklemede hem de Arama Çubuğundan gelen değişiklikleri anında dinle
  useEffect(() => {
    const fetchStatuses = () => {
      const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
      setWordStatuses(saved ? JSON.parse(saved) : {});
    };
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, [chapterId]);

  const speakDutch = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
  };

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
        example: fallback ? "Uit de dialoog" : "Sözlükte bulunamadı. Lütfen kelime kökünü (infinitive) kontrol ediniz." 
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
    // Dışarıya da haber ver
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
          example: "Kullanıcı tarafından manuel olarak işaretlendi."
        }];
      }
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== clickedWordRaw);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

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
    toggleFavorite(sectionId, favNote.trim() || "Önemli Bölüm");
    setShowFavInput(false);
    setFavNote("");
  };

  const rawStatus = wordStatuses[clickedWordRaw];
  let trackColor = "bg-slate-700/80";
  let thumbColor = "bg-slate-400";
  let translateClass = "translate-x-[18px]"; 

  if (rawStatus === 'unknown') {
    trackColor = "bg-rose-900/60";
    thumbColor = "bg-rose-500";
    translateClass = "translate-x-[2px]"; 
  } else if (rawStatus === 'known') {
    trackColor = "bg-emerald-900/60";
    thumbColor = "bg-emerald-500";
    translateClass = "translate-x-[34px]"; 
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 relative" onClick={() => { setSelectedWords(null); setShowFavInput(false); }}>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
          <i className="fa-solid fa-comments text-brand-400"></i>
          <span>Dialoog Lezen en Luisteren</span>
        </h3>

        <div className="relative flex items-center space-x-3">
          <button onClick={(e) => { e.stopPropagation(); toggleCompleted(sectionId); }} className="text-xl transition-transform hover:scale-110 focus:outline-none">
            {isComp ? (
              <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
            ) : (
              <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
            )}
          </button>

          <div className="group relative flex items-center">
            <button onClick={handleStarClick} className="text-xl transition-transform hover:scale-110 focus:outline-none">
              {isFav ? (
                <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
              )}
            </button>
            
            {isFav && (
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-48 p-3 bg-slate-800 border border-slate-600 text-slate-200 text-xs rounded-xl shadow-2xl z-50">
                <div className="font-bold text-amber-400 mb-1 border-b border-slate-600 pb-1">Mijn Notitie:</div>
                <p className="break-words leading-relaxed">{favorites[sectionId]}</p>
              </div>
            )}
          </div>

          {showFavInput && (
            <div className="absolute right-0 top-full mt-2 bg-slate-800 p-2 rounded-xl shadow-2xl border border-slate-600 z-50 flex items-center gap-2" onClick={e => e.stopPropagation()}>
              <input
                autoFocus
                maxLength={100}
                value={favNote}
                onChange={e => setFavNote(e.target.value)}
                placeholder="Notun (max 100 kar.)..."
                className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 w-48 focus:outline-none focus:border-amber-400"
              />
              <button onClick={saveFavorite} className="bg-emerald-600 hover:bg-emerald-500 text-white p-1.5 rounded-lg text-xs transition-colors">
                <i className="fa-solid fa-check"></i>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        {activeDialogue.map((line, idx) => {
          const isDoc = line.speaker.includes("Huisarts") || line.speaker.includes("Fietsenmaker");
          const words = line.text.split(' ');
          const cleanWords = words.map(w => w.replace(/[.,?!:;–-]/g, '').toLowerCase());

          return (
            <div key={idx} className={`p-3.5 rounded-xl flex items-start space-x-3 transition ${isDoc ? "bg-teal-900/20 border-l-4 border-teal-600" : "bg-slate-800/50 border-l-4 border-slate-600"}`}>
              <button onClick={() => speakDutch(line.text)} className="bg-slate-800 border border-slate-600 p-2 rounded-lg shadow-sm hover:bg-slate-700 text-brand-400 transition flex-shrink-0 mt-0.5">
                <i className="fa-solid fa-volume-high text-sm"></i>
              </button>
              <div className="flex-1">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400">{line.speaker}</span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5 leading-relaxed">
                  
                  {words.map((word, i) => {
                    let status = wordStatuses[cleanWords[i]]; 
                    
                    if (!status) {
                      const checkPhrases = [
                        [[i-4, i-3, i-2, i-1, i], [i-3, i-2, i-1, i, i+1], [i-2, i-1, i, i+1, i+2], [i-1, i, i+1, i+2, i+3], [i, i+1, i+2, i+3, i+4]],
                        [[i-3, i-2, i-1, i], [i-2, i-1, i, i+1], [i-1, i, i+1, i+2], [i, i+1, i+2, i+3]],
                        [[i-2, i-1, i], [i-1, i, i+1], [i, i+1, i+2]],
                        [[i-1, i], [i, i+1]]
                      ];

                      for (const group of checkPhrases) {
                        for (const indices of group) {
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
                        style={{ color: wordColor, textDecoration: 'underline', textDecorationStyle: 'dotted', cursor: 'pointer' }} 
                        onClick={(e) => handleWordClick(e, i, cleanWords)}
                      >
                        {word}{' '}
                      </span>
                    );
                  })}
                </p>
                <p className="text-xs text-slate-400 mt-1 italic">🇹🇷 {line.translation}</p>
              </div>
            </div>
          );
        })}
      </div>

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
                <span className="text-[10px] text-slate-400 leading-tight mt-0.5">Sadece kelimeyi işaretle</span>
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
                      <button onClick={() => speakDutch(wordObj.nl)} className="text-slate-400 hover:text-brand-300 ml-2">
                        <i className="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </div>
                    
                    <div className="leading-snug space-y-0.5 mb-1.5">
                      {wordObj.tr && <p className="text-[13px] font-bold text-brand-300">🇹🇷 {wordObj.tr}</p>}
                      {wordObj.en && <p className="text-[12px] font-medium text-slate-300">🇬🇧 {wordObj.en}</p>}
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