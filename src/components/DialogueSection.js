import React, { useState, useEffect } from 'react';
import { vocabulary, dialogues } from '../data';

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

export default function DialogueSection({ sectionId, favorites, toggleFavorite }) {
  const chapterId = sectionId.split('.')[0];
  const [selectedWord, setSelectedWord] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [clickedWordRaw, setClickedWordRaw] = useState("");
  
  // YENİ: Favori Yıldız Input State'leri
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");
  
  const [wordStatuses, setWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${chapterId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const activeDialogue = dialogues[sectionId] || [];
  const isFav = favorites && favorites[sectionId];

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

  const handleWordClick = (e, wordText) => {
    e.stopPropagation();
    setPopupPos({ x: e.clientX, y: e.clientY });

    const cleanWord = wordText.replace(/[.,?!:;–-]/g, '').toLowerCase();
    setClickedWordRaw(cleanWord);
    
    let found = vocabulary.find(v => v.nl.toLowerCase() === cleanWord);
    if (!found) {
      try {
        const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
        found = vocabulary.find(v => regex.test(v.nl));
      } catch (err) {
        console.error("Regex hatası:", err);
      }
    }

    if (!found) {
      const fallback = fallbackDictionary[cleanWord];
      found = { 
        nl: cleanWord, en: fallback || "Translation not available", example: fallback ? "Uit de dialoog" : "Bilinmeyen kelime." 
      };
    }
    setSelectedWord(found);
  };

  const handleWordKnowledge = (isKnown) => {
    const storageKey = `dialogueUnknowns_${chapterId}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns;

    if (!isKnown) {
      if (!existingUnknowns.some(w => w.nl === selectedWord.nl)) updatedUnknowns = [...existingUnknowns, selectedWord];
      else updatedUnknowns = existingUnknowns;
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== selectedWord.nl);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    const newStatuses = { ...wordStatuses, [clickedWordRaw]: isKnown ? 'known' : 'unknown' };
    setWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    setSelectedWord(null);
  };

  // FAVORİ BUTONU TETİKLEYİCİSİ
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
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 relative" onClick={() => { setSelectedWord(null); setShowFavInput(false); }}>
      
      {/* BAŞLIK VE YILDIZ */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
          <i className="fa-solid fa-comments text-brand-400"></i>
          <span>Dialoog Lezen en Luisteren</span>
        </h3>

        {/* YILDIZ ALANI */}
        <div className="relative flex items-center">
          <div className="group relative flex items-center">
            <button onClick={handleStarClick} className="text-xl transition-transform hover:scale-110 focus:outline-none">
              {isFav ? (
                <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
              )}
            </button>
            
            {/* HOVER TOOLTIP */}
            {isFav && (
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-48 p-3 bg-slate-800 border border-slate-600 text-slate-200 text-xs rounded-xl shadow-2xl z-50">
                <div className="font-bold text-amber-400 mb-1 border-b border-slate-600 pb-1">Mijn Notitie:</div>
                <p className="break-words leading-relaxed">{favorites[sectionId]}</p>
              </div>
            )}
          </div>

          {/* NOT GİRİŞ KUTUSU */}
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
          return (
            <div key={idx} className={`p-3.5 rounded-xl flex items-start space-x-3 transition ${isDoc ? "bg-teal-900/20 border-l-4 border-teal-600" : "bg-slate-800/50 border-l-4 border-slate-600"}`}>
              <button onClick={() => speakDutch(line.text)} className="bg-slate-800 border border-slate-600 p-2 rounded-lg shadow-sm hover:bg-slate-700 text-brand-400 transition flex-shrink-0 mt-0.5">
                <i className="fa-solid fa-volume-high text-sm"></i>
              </button>
              <div className="flex-1">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400">{line.speaker}</span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5 leading-relaxed">
                  {line.text.split(' ').map((word, i) => {
                    const cleanWord = word.replace(/[.,?!:;–-]/g, '').toLowerCase();
                    const status = wordStatuses[cleanWord];
                    let wordColor = 'inherit';
                    if (status === 'known') wordColor = '#34d399'; 
                    if (status === 'unknown') wordColor = '#fb7185';

                    return (
                      <span key={i} style={{ color: wordColor, textDecoration: 'underline', textDecorationStyle: 'dotted', cursor: 'pointer' }} onClick={(e) => handleWordClick(e, word)}>
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

      {/* POP-UP ÇEVİRİ ALANI */}
      {selectedWord && (
        <>
          <div className="fixed inset-0 z-40" onClick={(e) => { e.stopPropagation(); setSelectedWord(null); }}></div>
          <div className="fixed bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-2xl z-50 min-w-[240px] transform -translate-x-1/2" style={{ left: `${popupPos.x}px`, top: `${popupPos.y + 15}px` }} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-brand-400 text-lg">{selectedWord.nl}</h3>
              <button onClick={() => speakDutch(selectedWord.nl)} className="text-slate-400 hover:text-brand-300"><i className="fa-solid fa-volume-high"></i></button>
            </div>
            <p className="text-sm font-medium text-slate-200">EN: {selectedWord.en}</p>
            <p className="text-xs text-slate-400 italic mt-1">{selectedWord.example}</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => handleWordKnowledge(true)} className="flex-1 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/50 text-emerald-300 text-xs font-bold py-2 rounded-lg transition-colors">✔️ Biliyorum</button>
              <button onClick={() => handleWordKnowledge(false)} className="flex-1 bg-rose-900/40 hover:bg-rose-800/60 border border-rose-700/50 text-rose-300 text-xs font-bold py-2 rounded-lg transition-colors">❌ Bilmiyorum</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}