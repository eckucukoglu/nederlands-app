// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import { bookSections } from './data';

// Ünite başlıkları sözlüğü
const chapterTitles = {
  1: "Welkom", 2: "In de kantine", 3: "In het café", 4: "Op straat", 5: "Op de markt",
  6: "In een restaurant", 7: "In een kledingzaak", 8: "Bij de makelaar", 9: "Bij de huisarts",
  10: "Bij de fietsenmaker", 11: "Op een verjaardag", 12: "Naar de Evenementenhal",
  13: "Bij vrienden", 14: "In de sportschool", 15: "In de trein", 16: "Naar de bioscoop",
  17: "Thuis", 18: "Bij de politie"
};

function App() {
  const availableChapters = [...new Set(bookSections.map(sec => sec.chapter))].filter(Boolean).sort((a, b) => a - b);
  const fallbackChapter = availableChapters[availableChapters.length - 1] || 9;

  const [currentChapter, setCurrentChapter] = useState(() => {
    const savedChapter = localStorage.getItem('lastVisitedChapter');
    if (savedChapter && availableChapters.includes(Number(savedChapter))) return Number(savedChapter);
    return fallbackChapter;
  });

  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem(`lastVisitedTab_${currentChapter}`);
    return savedTab ? savedTab : `${currentChapter}.1`;
  });

  useEffect(() => {
    localStorage.setItem('lastVisitedChapter', currentChapter);
  }, [currentChapter]);

  useEffect(() => {
    localStorage.setItem(`lastVisitedTab_${currentChapter}`, activeTab);
  }, [activeTab, currentChapter]);

  const currentSections = bookSections.filter(sec => sec.chapter === currentChapter || sec.id === `On-Class-${currentChapter}`);

  const handleChapterChange = (e) => {
    const newChapter = Number(e.target.value);
    setCurrentChapter(newChapter);
    const savedTab = localStorage.getItem(`lastVisitedTab_${newChapter}`);
    setActiveTab(savedTab ? savedTab : `${newChapter}.1`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300">
      {/* HEADER */}
      <header className="bg-slate-950 text-white shadow-xl sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-900/50 border border-brand-500/30 p-2.5 rounded-xl backdrop-blur">
              <i className="fa-solid fa-book-medical text-2xl text-brand-400"></i>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight text-slate-100">Nederlands in Gang</h1>
              <p className="text-xs text-brand-300">Interactief Oefenportaal (A1 → A2)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <label className="text-xs text-slate-400 font-medium hidden sm:inline">
              <i className="fa-solid fa-layer-group mr-1"></i>Selecteer Hoofdstuk:
            </label>
            
            <select 
              value={currentChapter}
              onChange={handleChapterChange}
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-1.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              {availableChapters.map(ch => (
                <option key={ch} value={ch}>
                  Hoofdstuk {ch} {chapterTitles[ch] ? `- ${chapterTitles[ch]}` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* BÖLÜM SEKMELERİ */}
        <div className="bg-slate-900/50 border-t border-slate-800 overflow-x-auto scrollbar-thin">
          <div className="max-w-7xl mx-auto px-4 flex space-x-1 py-1.5 min-w-max">
            {currentSections.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                  activeTab === sec.id ? "bg-brand-600 text-white shadow-md" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <span>{sec.id.includes('On-Class') ? 'On-Class' : sec.id}</span>
              </button>
            ))}
            <div className="h-5 w-[1px] bg-slate-700 my-auto mx-1"></div>
            <button
              onClick={() => setActiveTab("flashcards")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                activeTab === "flashcards" ? "bg-rose-600 text-white shadow-md" : "text-rose-400 hover:bg-slate-800 hover:text-rose-300"
              }`}
            >
              <i className="fa-solid fa-clone text-xs"></i>
              <span>Flashcards</span>
            </button>
          </div>
        </div>
      </header>

      {/* ANA İÇERİK ALANI */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 text-slate-200">
        {(activeTab.includes('.1') && !activeTab.includes('On-Class')) && (
          <DialogueSection sectionId={activeTab} />
        )}
        
        {activeTab !== 'flashcards' && bookSections.find(s => s.id === activeTab) && (
          <ExerciseEngine sectionData={bookSections.find(s => s.id === activeTab)} chapterNum={currentChapter} />
        )}

        {activeTab === 'flashcards' && <Flashcards initialChapter={currentChapter} />}
      </main>
    </div>
  );
}

export default App;