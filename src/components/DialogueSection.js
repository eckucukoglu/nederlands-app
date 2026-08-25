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
  
  // YENİ: Tek kelime yerine, bulunan TÜM eşleşmeleri tutan dizi (array) state'i
  const [selectedWords, setSelectedWords] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");
  
  const [wordStatuses, setWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const activeDialogue = dialogues[sectionId] || [];
  const isFav = favorites && favorites[sectionId];
  const isComp = completed && completed[sectionId];

  useEffect(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
    setWordStatuses(saved ? JSON.parse(saved) : {});
  }, [chapterId]);

  const speakDutch = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
  };

  // YENİ: AKILLI ARAMA (SMART SEARCH) ALGORİTMASI
  const handleWordClick = (e, wordIndex, cleanWords) => {
    e.stopPropagation();
    const cleanWord = cleanWords[wordIndex];

    // Ekranın altına taşıp kaybolmaması için dinamik Y ekseni hesaplaması
    let yPosition = e.clientY + 15;
    if (yPosition + 350 > window.innerHeight) {
      yPosition = e.clientY - 330; 
    }
    setPopupPos({ x: e.clientX, y: yPosition });

    const allVocab = [...vocabulary, ...globalDictionary];
    
    // Mükerrer (çift) sözlük kayıtlarını birleştirme
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => {
      uniqueVocabMap.set(item.nl.toLowerCase(), item);
    });
    const uniqueVocab = Array.from(uniqueVocabMap.values());

    let matches = [];
    try {
      // 1. AŞAMA: Tıklanan kelimenin "bağımsız bir kelime" olarak geçtiği TÜM kalıpları bul
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
      matches = uniqueVocab.filter(v => regex.test(v.nl));
    } catch (err) {
      console.error("Regex error:", err);
    }

    // 2. AŞAMA: Eğer hiçbir şey bulamadıysa, içinde geçip geçmediğine bak (özel karakterler için fallback)
    if (matches.length === 0) {
      matches = uniqueVocab.filter(v => v.nl.toLowerCase().includes(cleanWord));
    }

    // 3. AŞAMA: Hala boşsa İngilizce Fallback sözlüğe bak
    if (matches.length === 0) {
      const fallback = fallbackDictionary[cleanWord];
      matches = [{ 
        nl: cleanWord, 
        en: fallback || "Translation not available", 
        tr: "Çeviri bulunamadı",
        example: fallback ? "Uit de dialoog" : "Sözlükte bulunamadı. Lütfen kelime kökünü (infinitive) kontrol ediniz." 
      }];
    }

    // 4. AŞAMA: Sonuçları mantıklı sırala (Birebir eşleşen en üstte, sonra kısa öbekler, sonra uzun kalıplar)
    matches.sort((a, b) => {
      const aIsExact = a.nl.toLowerCase() === cleanWord ? -1 : 1;
      const bIsExact = b.nl.toLowerCase() === cleanWord ? -1 : 1;
      if (aIsExact !== bIsExact) return aIsExact - bIsExact;
      return a.nl.length - b.nl.length;
    });

    setSelectedWords(matches);
  };

  const handleWordKnowledge = (wordObj, isKnown) => {
    const entryKey = wordObj.nl.toLowerCase();
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

    const newStatuses = { ...wordStatuses, [entryKey]: isKnown ? 'known' : 'unknown' };
    setWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    
    // DİKKAT: setSelectedWords(null) SİLİNDİ. POPUP ARTIK AÇIK KALIR.
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
                      // YENİ: N-Gram taramasını 5 kelimeye kadar çıkardık!
                      const checkPhrases = [
                        // 5 kelimelik öbekler
                        [[i-4, i-3, i-2, i-1, i], [i-3, i-2, i-1, i, i+1], [i-2, i-1, i, i+1, i+2], [i-1, i, i+1, i+2, i+3], [i, i+1, i+2, i+3, i+4]],
                        // 4 kelimelik öbekler
                        [[i-3, i-2, i-1, i], [i-2, i-1, i, i+1], [i-1, i, i+1, i+2], [i, i+1, i+2, i+3]],
                        // 3 kelimelik öbekler
                        [[i-2, i-1, i], [i-1, i, i+1], [i, i+1, i+2]],
                        // 2 kelimelik öbekler
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

      {/* YENİ: ÇOKLU SONUÇ GÖSTEREN, KAYDIRILABİLİR (SCROLLABLE) POP-UP ALANI */}
      {selectedWords && selectedWords.length > 0 && (
        <>
          <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setSelectedWords(null); }}></div>
          <div 
            className="fixed bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-2xl z-50 min-w-[280px] max-w-[340px] transform -translate-x-1/2 max-h-[320px] overflow-y-auto" 
            style={{ left: `${popupPos.x}px`, top: `${popupPos.y}px` }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {selectedWords.map((wordObj, idx) => {
                const currentStatus = wordStatuses[wordObj.nl.toLowerCase()];
                return (
                  <div key={idx} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-center mb-1.5">
                      <h3 className="font-bold text-brand-400 text-base leading-tight">{wordObj.nl}</h3>
                      <button onClick={() => speakDutch(wordObj.nl)} className="text-slate-400 hover:text-brand-300 ml-2">
                        <i className="fa-solid fa-volume-high"></i>
                      </button>
                    </div>
                    
                    {wordObj.en && <p className="text-sm font-medium text-slate-200">🇬🇧 EN: {wordObj.en}</p>}
                    {wordObj.tr && <p className="text-sm font-bold text-brand-300 mt-0.5">🇹🇷 TR: {wordObj.tr}</p>}
                    {wordObj.example && <p className="text-xs text-slate-400 italic mt-2 leading-relaxed">{wordObj.example}</p>}

                    {/* YENİ: YAZISIZ İKON BUTONLARI */}
                    <div className="flex gap-2 mt-3">
                      <button 
                        onClick={() => handleWordKnowledge(wordObj, true)} 
                        className={`flex-1 py-2 rounded-lg text-sm transition-all border ${
                          currentStatus === 'known' 
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' 
                            : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'
                        }`}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                      <button 
                        onClick={() => handleWordKnowledge(wordObj, false)} 
                        className={`flex-1 py-2 rounded-lg text-sm transition-all border ${
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