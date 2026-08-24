// src/components/Flashcards.js
import React, { useState, useEffect, useCallback } from 'react';
import { vocabulary } from '../data';

export default function Flashcards({ initialChapter }) {
  const availableChapters = [...new Set(vocabulary.map(v => v.chapter))].filter(Boolean).sort((a, b) => a - b);
  
  const [targetChapter, setTargetChapter] = useState(initialChapter || availableChapters[availableChapters.length - 1] || 9);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState('all'); 
  
  const [sessionStats, setSessionStats] = useState({ known: 0, unknown: 0 });
  const [globalStats, setGlobalStats] = useState(JSON.parse(localStorage.getItem('flashcardStats')) || {});

  const chapterVocab = vocabulary.filter(v => v.chapter === targetChapter);

  useEffect(() => {
    if (mode === 'all') {
      setDeck(chapterVocab);
    } else {
      loadDialogueUnknowns(targetChapter);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ known: 0, unknown: 0 });
  }, [targetChapter, mode]); // eslint-disable-line

  const loadDialogueUnknowns = (chapter) => {
    const saved = JSON.parse(localStorage.getItem(`dialogueUnknowns_${chapter}`)) || [];
    if (saved.length > 0) {
      setDeck(saved);
    } else {
      setDeck([{ id: 'empty', nl: "Geen woorden", en: "No words selected", example: "Bu ünite diyaloğunda 'Bilmiyorum' dediğiniz kelime yok." }]);
    }
  };

  const currentWord = deck[currentIndex];
  const totalWords = deck.length;

  const updateStats = useCallback((isKnown) => {
    if (!currentWord || currentWord.id === 'empty') return; 
    const wordId = currentWord.id || currentWord.nl; 
    
    setSessionStats(prev => ({ ...prev, [isKnown ? 'known' : 'unknown']: prev[isKnown ? 'known' : 'unknown'] + 1 }));

    const currentGlobal = globalStats[wordId] || { known: 0, unknown: 0 };
    const newGlobal = {
      ...globalStats,
      [wordId]: { known: currentGlobal.known + (isKnown ? 1 : 0), unknown: currentGlobal.unknown + (!isKnown ? 1 : 0) }
    };
    setGlobalStats(newGlobal);
    localStorage.setItem('flashcardStats', JSON.stringify(newGlobal));

    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % totalWords);
  }, [currentWord, globalStats, totalWords]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); setIsFlipped(prev => !prev); } 
    else if (e.key === 'ArrowRight') { updateStats(true); } 
    else if (e.key === 'ArrowLeft') { updateStats(false); }
  }, [updateStats]);

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

  const wordGlobalStat = globalStats[currentWord?.id || currentWord?.nl] || { known: 0, unknown: 0 };
  const progressPercentage = totalWords > 0 ? Math.round(((currentIndex + 1) / totalWords) * 100) : 0;

  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-100">Vocabulaire Flashcards</h2>
        <div className="text-sm font-medium text-slate-400 bg-slate-800 inline-block px-4 py-2 rounded-xl shadow-sm border border-slate-700">
          Klavye: <strong>⬆️/⬇️</strong> Çevir &nbsp;•&nbsp; <strong>⬅️</strong> Bilmiyorum &nbsp;•&nbsp; <strong>➡️</strong> Biliyorum
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {/* DİNAMİK ÜNİTE SEÇİCİ */}
        <select 
          value={targetChapter} 
          onChange={(e) => setTargetChapter(Number(e.target.value))} 
          className="bg-slate-800 border border-slate-600 text-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
        >
          {availableChapters.map(ch => (
            <option key={ch} value={ch}>Hoofdstuk {ch}</option>
          ))}
        </select>
        
        <select 
          value={mode} 
          onChange={(e) => setMode(e.target.value)} 
          className="bg-slate-800 border border-slate-600 text-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
        >
          <option value="all">Alle Woorden ({chapterVocab.length})</option>
          <option value="dialogue">Dialoog (Onbekend)</option>
        </select>

        <button 
          onClick={shuffleDeck}
          className="bg-slate-800 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-brand-400 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-shuffle"></i> Karıştır
        </button>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-700">
        <div className="flex justify-between text-sm font-bold text-slate-400 mb-3">
          <span>Kart: {currentIndex + 1} / {totalWords}</span>
          <span className="text-brand-400">İlerleme: %{progressPercentage}</span>
        </div>
        <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
          <div className="bg-brand-500 h-full transition-all duration-300 ease-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-700 text-center">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">Bu Oturum (Session)</h4>
          <div className="flex justify-center gap-4 text-sm font-bold">
            <span className="text-emerald-400 bg-emerald-900/40 border border-emerald-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-check"></i> {sessionStats.known}</span>
            <span className="text-rose-400 bg-rose-900/40 border border-rose-800/50 px-3 py-1.5 rounded-lg flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {sessionStats.unknown}</span>
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-700 text-center">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">Geçmiş (Bu Kelime)</h4>
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
              <span className="text-xs font-bold text-brand-400 bg-brand-900/30 border border-brand-700/50 px-3 py-1 rounded-full uppercase">Nederlands</span>
              <div>
                <h3 className="text-4xl font-extrabold text-slate-100 drop-shadow-md">{currentWord?.nl}</h3>
                <p className="text-sm text-slate-500 mt-4 font-medium">(Çeviri için tıkla of ⬆️ / ⬇️)</p>
              </div>
              <button onClick={(e) => speakDutch(currentWord?.nl, e)} className="text-slate-400 hover:text-brand-400 hover:bg-slate-700 p-3 rounded-full transition-colors text-xl">
                <i className="fa-solid fa-volume-high"></i>
              </button>
            </div>

            <div className="flashcard-back absolute inset-0 rounded-3xl p-6 flex flex-col justify-between items-center text-center bg-gradient-to-br from-rose-600 to-rose-800 text-white">
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase shadow-sm">Engels / Turks</span>
              <div>
                <h3 className="text-3xl font-extrabold drop-shadow-md">{currentWord?.en}</h3>
                {currentWord?.example && currentWord.id !== 'empty' && (
                  <div className="mt-4 p-3 bg-black/20 rounded-xl border border-white/10">
                    <p className="text-sm text-rose-50 italic">"{currentWord?.example}"</p>
                  </div>
                )}
              </div>
              <span className="text-xs text-rose-300 font-medium tracking-wide">Hoofdstuk {targetChapter}</span>
            </div>

          </div>
        </div>

        <div className="flex gap-4 w-full">
           <button 
             onClick={(e) => { e.stopPropagation(); updateStats(false); }}
             className="flex-1 bg-slate-800 border-2 border-rose-700/50 hover:border-rose-500 hover:bg-rose-900/30 text-rose-400 font-extrabold py-3.5 px-4 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
           >
             <i className="fa-solid fa-xmark text-lg"></i> Bilmiyorum
           </button>
           <button 
             onClick={(e) => { e.stopPropagation(); updateStats(true); }}
             className="flex-1 bg-slate-800 border-2 border-emerald-700/50 hover:border-emerald-500 hover:bg-emerald-900/30 text-emerald-400 font-extrabold py-3.5 px-4 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
           >
             <i className="fa-solid fa-check text-lg"></i> Biliyorum
           </button>
        </div>
      </div>
    </div>
  );
}