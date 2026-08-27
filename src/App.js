// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import AuthModal from './components/AuthModal';
import { bookSections, vocabulary } from './data';
import { globalDictionary } from './data/globalDictionary';
import { auth, isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged, handleUserSyncOnLogin, pullFromCloud } from './firebase';

const chapterTitles = {
  1: "Welkom", 2: "In de kantine", 3: "In het café", 4: "Op straat", 5: "Op de markt",
  6: "In een restaurant", 7: "In een kledingzaak", 8: "Bij de makelaar", 9: "Bij de huisarts",
  10: "Bij de fietsenmaker", 11: "Op een verjaardag", 12: "Naar de Evenementenhal",
  13: "Bij vrienden", 14: "In de sportschool", 15: "In de trein", 16: "Naar de bioscoop",
  17: "Thuis", 18: "Bij de politie"
};

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

function MainContent({ user, setIsAuthModalOpen }) {
  const availableChapters = [...new Set(bookSections.map(sec => sec.chapter))].filter(Boolean).sort((a, b) => a - b);
  const fallbackChapter = availableChapters[0] || 1;

  const [currentChapter, setCurrentChapter] = useState(() => {
    const savedChapter = localStorage.getItem('lastVisitedChapter');
    if (savedChapter && availableChapters.includes(Number(savedChapter))) return Number(savedChapter);
    return fallbackChapter;
  });

  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem(`lastVisitedTab_${currentChapter}`);
    return savedTab ? savedTab : `${currentChapter}.1`;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteSections');
    return saved ? JSON.parse(saved) : {};
  });

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedSections');
    return saved ? JSON.parse(saved) : {};
  });

  // ARAMA ÇUBUĞU STATE'LERİ
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  // YENİ: BÖLÜM SEÇİCİ (CHAPTER SELECTOR) STATE'İ
  const [isChapterExpanded, setIsChapterExpanded] = useState(false);

  const [globalWordStatuses, setGlobalWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${currentChapter}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const fetchStatuses = () => {
      const saved = localStorage.getItem(`dialogueWordStatuses_${currentChapter}`);
      setGlobalWordStatuses(saved ? JSON.parse(saved) : {});
    };
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, [currentChapter]);

  const speakDutch = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
  };

  const handleGlobalSearch = (e) => {
    if (e) e.preventDefault();
    const cleanWord = searchQuery.trim().toLowerCase();
    if (!cleanWord) return;

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
    } catch (err) { console.error("Regex error:", err); }

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

    setSearchResults(matches);
  };

  const handleSearchWordKnowledge = (wordObj, isKnown) => {
    const storageKey = `dialogueUnknowns_${currentChapter}`;
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

    if (searchQuery.trim()) {
      keysToUpdate.add(searchQuery.trim().toLowerCase());
    }

    const newStatuses = { ...globalWordStatuses };
    keysToUpdate.forEach(key => {
      newStatuses[key] = isKnown ? 'known' : 'unknown';
    });

    setGlobalWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${currentChapter}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    setSearchResults(null);
  };

  const handleSearchRawWordToggle = (direction, e) => {
    e.stopPropagation();
    const rawWord = searchQuery.trim().toLowerCase();
    if (!rawWord) return;

    const currentStatus = globalWordStatuses[rawWord];
    let newStatus;

    if (direction === 'left') {
      if (currentStatus === 'known') newStatus = undefined;
      else newStatus = 'unknown';
    } else if (direction === 'right') {
      if (currentStatus === 'unknown') newStatus = undefined;
      else newStatus = 'known';
    }

    const storageKey = `dialogueUnknowns_${currentChapter}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns = existingUnknowns;

    if (newStatus === 'unknown') {
      if (!existingUnknowns.some(w => w.nl === rawWord)) {
        updatedUnknowns = [...existingUnknowns, {
          nl: rawWord, en: "Not found in dictionary", tr: "Sözlükte bulunamadı",
          example: "Kullanıcı tarafından manuel olarak işaretlendi."
        }];
      }
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== rawWord);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    const newStatuses = { ...globalWordStatuses };
    if (newStatus === undefined) {
      delete newStatuses[rawWord];
    } else {
      newStatuses[rawWord] = newStatus;
    }
    setGlobalWordStatuses(newStatuses);
    localStorage.setItem(`dialogueWordStatuses_${currentChapter}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
  };

  const toggleFavorite = (sectionId, note) => {
    const newFavs = { ...favorites };
    if (newFavs[sectionId]) delete newFavs[sectionId];
    else newFavs[sectionId] = note;
    setFavorites(newFavs);
    localStorage.setItem('favoriteSections', JSON.stringify(newFavs));
  };

  const toggleCompleted = (sectionId) => {
    const newComp = { ...completed };
    if (newComp[sectionId]) delete newComp[sectionId];
    else newComp[sectionId] = true;
    setCompleted(newComp);
    localStorage.setItem('completedSections', JSON.stringify(newComp));
  };

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

  const rawWord = searchQuery.trim().toLowerCase();
  const rawStatus = globalWordStatuses[rawWord];
  let trackColor = "bg-slate-700/80"; let thumbColor = "bg-slate-400"; let translateClass = "translate-x-[18px]";

  if (rawStatus === 'unknown') {
    trackColor = "bg-rose-900/60"; thumbColor = "bg-rose-500"; translateClass = "translate-x-[2px]";
  } else if (rawStatus === 'known') {
    trackColor = "bg-emerald-900/60"; thumbColor = "bg-emerald-500"; translateClass = "translate-x-[34px]";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300">
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

          {/* SAĞ TARAF KONTROLLERİ */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* LOGIN BUTONU */}
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="p-1.5 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center relative group"
              title="Hesap ve Senkronizasyon"
            >
              <i className={`fa-solid fa-circle-user text-2xl ${user ? 'text-emerald-400' : 'text-slate-400 group-hover:text-brand-400'}`}></i>
              {user && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>}
            </button>

            {/* GENİŞLEYEN ARAMA BUTONU */}
            <div className="relative flex items-center">
              <div className={`transition-all duration-300 ease-in-out overflow-hidden flex items-center ${isSearchExpanded ? 'w-36 sm:w-48 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                <form onSubmit={handleGlobalSearch} className="w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Sözlükte ara..."
                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-full px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-500 shadow-inner"
                  />
                </form>
              </div>
              <button 
                onClick={() => {
                  if (isSearchExpanded && searchQuery.trim()) handleGlobalSearch();
                  else {
                    setIsSearchExpanded(!isSearchExpanded);
                    if (isSearchExpanded) { setSearchResults(null); setSearchQuery(''); }
                  }
                }}
                className={`p-1.5 rounded-full transition-colors flex items-center justify-center ${isSearchExpanded ? 'bg-brand-600 hover:bg-brand-500 text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-brand-400'}`}
                title="Sözlükte Ara"
              >
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
              </button>

              {/* ARAMA SONUÇLARI POP-UP */}
              {searchResults && searchResults.length > 0 && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSearchResults(null)}></div>
                  <div className="absolute right-0 top-full mt-3 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-2xl z-50 min-w-[240px] max-w-[280px] max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                    <div className="mb-3 pb-3 border-b border-slate-700/80 flex justify-between items-center gap-3">
                      <div className="flex flex-col truncate">
                        <span className="text-[13px] font-bold text-slate-200 truncate">
                          <i className="fa-solid fa-pen-nib text-brand-400 mr-1.5"></i>
                          {rawWord}
                        </span>
                        <span className="text-[10px] text-slate-400 leading-tight mt-0.5">Sadece kelimeyi işaretle</span>
                      </div>
                      
                      <div className={`relative w-14 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${trackColor}`}>
                        <div className="absolute left-0 w-1/2 h-full z-10 cursor-pointer rounded-l-full" onClick={(e) => handleSearchRawWordToggle('left', e)}></div>
                        <div className="absolute right-0 w-1/2 h-full z-10 cursor-pointer rounded-r-full" onClick={(e) => handleSearchRawWordToggle('right', e)}></div>
                        <div className={`absolute top-[2px] w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-in-out ${thumbColor} ${translateClass}`}></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {searchResults.map((wordObj, idx) => {
                        const currentStatus = globalWordStatuses[wordObj.nl.toLowerCase()];
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
                                onClick={() => handleSearchWordKnowledge(wordObj, true)} 
                                className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'known' ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'}`}
                              ><i className="fa-solid fa-check"></i></button>
                              <button 
                                onClick={() => handleSearchWordKnowledge(wordObj, false)} 
                                className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'unknown' ? 'bg-rose-600 border-rose-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-rose-900/40 hover:border-rose-700/50 text-slate-300'}`}
                              ><i className="fa-solid fa-xmark"></i></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="h-6 w-[1px] bg-slate-700 my-auto mx-1 sm:mx-2"></div>

            {/* YENİ: GENİŞLEYEN ÜNİTE (CHAPTER) SEÇİCİ */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsChapterExpanded(!isChapterExpanded)}
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-extrabold text-sm transition-all border shadow-sm ${isChapterExpanded ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 text-brand-400 border-slate-700 hover:bg-slate-700'}`}
                title="Bölüm Değiştir"
              >
                {currentChapter}
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden flex items-center ${isChapterExpanded ? 'w-48 sm:w-60 opacity-100 ml-2' : 'w-0 opacity-0'}`}>
                <select
                  value={currentChapter}
                  onChange={(e) => {
                    handleChapterChange(e);
                    setIsChapterExpanded(false); // Seçince otomatik kapat
                  }}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-full px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-500 shadow-inner cursor-pointer appearance-none"
                >
                  {availableChapters.map(ch => (
                    <option key={ch} value={ch}>
                      Hoofdstuk {ch} {chapterTitles[ch] ? `- ${chapterTitles[ch]}` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>

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
                <div className="flex items-center space-x-1 ml-1">
                  {completed[sec.id] && <i className="fa-solid fa-circle-check text-emerald-400"></i>}
                  {favorites[sec.id] && <i className="fa-solid fa-star text-amber-400"></i>}
                </div>
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

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 text-slate-200">
        {(activeTab.includes('.1') && !activeTab.includes('On-Class')) && (
          <DialogueSection 
            sectionId={activeTab} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            completed={completed} 
            toggleCompleted={toggleCompleted} 
          />
        )}
        
        {activeTab !== 'flashcards' && bookSections.find(s => s.id === activeTab) && (
          <ExerciseEngine 
            sectionData={bookSections.find(s => s.id === activeTab)} 
            chapterNum={currentChapter} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            completed={completed} 
            toggleCompleted={toggleCompleted}
          />
        )}

        {activeTab === 'flashcards' && <Flashcards initialChapter={currentChapter} />}
      </main>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) email = window.prompt('Lütfen doğrulama için mail adresinizi tekrar girin:');
        
        if (email) {
          try {
            const result = await signInWithEmailLink(auth, email, window.location.href);
            window.localStorage.removeItem('emailForSignIn');
            await handleUserSyncOnLogin(result.user);
            window.location.href = window.location.origin; 
          } catch (error) {
            console.error("Giriş hatası", error);
            setIsAppReady(true);
          }
        } else {
          setIsAppReady(true);
        }
      } else if (currentUser) {
        await pullFromCloud(currentUser.uid);
        setIsAppReady(true);
      } else {
        setIsAppReady(true); 
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isAppReady) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-brand-400">
        <i className="fa-solid fa-cloud-arrow-down text-6xl animate-bounce mb-4"></i>
        <h2 className="text-xl font-bold text-slate-200">Verilerin senkronize ediliyor...</h2>
        <p className="text-sm text-slate-500 mt-2">Lütfen bekleyin.</p>
      </div>
    );
  }

  return (
    <>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} user={user} />
      <MainContent user={user} setIsAuthModalOpen={setIsAuthModalOpen} />
    </>
  );
}