// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import AuthModal from './components/AuthModal';
import { bookSections, vocabulary } from './data';
import { globalDictionary } from './data/globalDictionary';
import { auth, isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged, handleUserSyncOnLogin, pullFromCloud } from './firebase';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

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
  const { lang, t } = useLanguage(); 
  
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

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const [isChapterExpanded, setIsChapterExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const [isSectionBarOverflowing, setIsSectionBarOverflowing] = useState(false);

  const [globalWordStatuses, setGlobalWordStatuses] = useState(() => {
    const saved = localStorage.getItem(`dialogueWordStatuses_${currentChapter}`);
    return saved ? JSON.parse(saved) : {};
  });

  const searchRef = useRef(null);
  const chapterMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const sectionMeasureRef = useRef(null); 

  useEffect(() => {
    const checkOverflow = () => {
      if (sectionMeasureRef.current) {
        const containerWidth = sectionMeasureRef.current.clientWidth;
        const contentWidth = sectionMeasureRef.current.scrollWidth;
        setIsSectionBarOverflowing(contentWidth > containerWidth + 1);
      }
    };
    checkOverflow();
    const timeoutId = setTimeout(checkOverflow, 50); 
    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [currentChapter, activeTab]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
        setSearchResults(null);
      }
      if (chapterMenuRef.current && !chapterMenuRef.current.contains(event.target)) {
        setIsChapterExpanded(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        example: fallback ? "Uit de dialoog" : t('notFound') 
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

  const saveToGlobalPool = (wordObj, status) => {
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    if (status === undefined) {
      delete pool[wordObj.nl.toLowerCase()];
    } else {
      pool[wordObj.nl.toLowerCase()] = { ...wordObj, status, addedAt: new Date().toISOString() };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));
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
          example: "Manually marked by the user."
        }];
      }
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== rawWord);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    const wordObj = {
      nl: rawWord,
      en: "Not found in dictionary",
      tr: "Sözlükte bulunamadı",
      example: "Manually marked by the user."
    };
    saveToGlobalPool(wordObj, newStatus);

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

  const getSectionTitle = (secId) => {
    if (secId === 'flashcards') return "Flashcards";
    const sec = currentSections.find(s => s.id === secId);
    if (sec && sec.title) return sec.title;
    if (secId.includes('On-Class')) return "Extra Oefeningen";
    if (secId.endsWith('.1')) return "Dialoog";
    return "Oefening";
  };

  const currentIndex = currentSections.findIndex(sec => sec.id === activeTab);

  const SearchResultsUI = () => (
    <>
      <div className="mb-3 pb-3 border-b border-slate-700/80 flex justify-between items-center gap-3">
        <div className="flex flex-col truncate">
          <span className="text-[13px] font-bold text-slate-200 truncate">
            <i className="fa-solid fa-pen-nib text-brand-400 mr-1.5"></i>
            {rawWord}
          </span>
          <span className="text-[10px] text-slate-400 leading-tight mt-0.5">{t('markOnly')}</span>
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
                <button type="button" onClick={() => speakDutch(wordObj.nl)} className="text-slate-400 hover:text-brand-300 ml-2">
                  <i className="fa-solid fa-volume-high text-xs"></i>
                </button>
              </div>
              
              {/* YENİ: Çeviri Gösterimi - Seçili dile göre dinamik sıralama ve stil */}
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
                <button type="button" onClick={() => handleSearchWordKnowledge(wordObj, true)} className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'known' ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'}`}><i className="fa-solid fa-check"></i></button>
                <button type="button" onClick={() => handleSearchWordKnowledge(wordObj, false)} className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'unknown' ? 'bg-rose-600 border-rose-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-rose-900/40 hover:border-rose-700/50 text-slate-300'}`}><i className="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300 w-full max-w-full relative">
      
      {isInfoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsInfoModalOpen(false)}>
          <div className="bg-slate-900 w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-5 flex justify-between items-center border-b border-slate-800 bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-brand-400"></i> {t('aboutGuide')}
              </h3>
              <button onClick={() => setIsInfoModalOpen(false)} className="text-slate-400 hover:text-rose-400 text-xl transition-colors">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 flex-1 scrollbar-thin scrollbar-thumb-slate-700 space-y-6 text-slate-300 text-sm leading-relaxed">
              
              {lang === 'tr' ? (
                <>
                  <div className="bg-brand-900/20 border border-brand-700/50 p-4 rounded-xl">
                    <p>Bu uygulama, <em>"Nederlands in Gang"</em> kitabının 3. sürümünü takip etmek amacıyla geliştirilmiş <strong>ticari olmayan</strong>, açık kaynaklı bir projedir. Size kişiselleştirilmiş ve etkileşimli bir Hollandaca öğrenme deneyimi sunmak için <strong>Google Gemini</strong> ile birlikte özenle kodlanmıştır.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-300 text-base mb-3 border-b border-slate-700 pb-2"><i className="fa-solid fa-book-open mr-2"></i>Nasıl Kullanılır?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-400"><i className="fa-solid fa-comments"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Diyaloglar & Etkileşimli Okuma</strong>
                          Ünite diyaloglarını okuyun ve dinleyin. Çevirisini görmek için <u>altı noktalı kelimelerin</u> üzerine tıklayın. Bir kelimeyi anında "Biliyorum" (<i className="fa-solid fa-check text-emerald-400"></i>) veya "Bilmiyorum" (<i className="fa-solid fa-xmark text-rose-400"></i>) olarak işaretleyebilirsiniz. Bu işlem, kelimeyi otomatik olarak <strong>Global Havuzunuza</strong> kaydeder.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-900/50 border border-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-rose-400"><i className="fa-solid fa-clone"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Flashcards & Global Havuz</strong>
                          Etkileşimli flashcard'lar ile kelime pratiği yapın. İsterseniz sadece seçtiğiniz üniteye özel kelimeleri çalışabilir, isterseniz de <strong>Global Havuz</strong> moduna geçerek site genelinde etkileşime girdiğiniz tüm kelimeleri tekrar edebilirsiniz. Yalnızca "Bilinmeyen" kelimeleri filtreleyebilir veya listenizi tek tuşla panoya kopyalayabilirsiniz. Hızlı geçişler için klavye ok tuşlarını (⬅️ ⬆️ ⬇️ ➡️) kullanın.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-900/50 border border-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-sky-400"><i className="fa-solid fa-magnifying-glass"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Akıllı Sözlük Araması</strong>
                          Herhangi bir Hollandaca kelimeyi bulmak için üstteki arama çubuğunu kullanın. Aradığınız kelime bulunduğunuz ünitede olmasa bile, arama sonuçlarından doğrudan "biliyorum/bilmiyorum" şeklinde işaretleyebilir ve kişisel takip sisteminize anında ekleyebilirsiniz.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-900/50 border border-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400"><i className="fa-solid fa-chalkboard-user"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Sınıf-İçi (On-Class) Ekstra Bölümler</strong>
                          Bu bölümler ("On-C"), gerçek sınıf notlarına dayanan kapsamlı gramer özetleri, telaffuz ipuçları ve ekstra egzersizler içerir. Hızlı tekrarlar yapmak ve ünite konularını pekiştirmek için mükemmeldir.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-400"><i className="fa-solid fa-globe"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Dil Seçimi</strong>
                          Uygulamanın dilini dilediğiniz an değiştirmek için üst menüdeki Profil simgesine (<i className="fa-solid fa-circle-user"></i>) tıklayın. Açılan hesap menüsündeki TR/EN butonlarını kullanarak Türkçe veya İngilizce arasında geçiş yapabilirsiniz.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Bulut Senkronizasyonu & Üyelik</strong>
                          Profil simgesini (<i className="fa-solid fa-circle-user"></i>) kullanarak giriş yaptığınızda; ilerlemeniz, bilinen/bilinmeyen kelimeleriniz, favorileriniz ve tamamlanan bölümleriniz güvenli bir şekilde buluta kaydedilir. Cihaz değiştirseniz veya tarayıcı önbelleğinizi temizleseniz bile verileriniz asla kaybolmaz.
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-brand-900/20 border border-brand-700/50 p-4 rounded-xl">
                    <p>This application is a <strong>non-commercial</strong>, open-source project designed to track and support the 3rd edition of the <em>"Nederlands in Gang"</em> textbook. It was meticulously developed in collaboration with <strong>Google Gemini</strong> to create a personalized, interactive Dutch learning experience.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-300 text-base mb-3 border-b border-slate-700 pb-2"><i className="fa-solid fa-book-open mr-2"></i>How to Use the App</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-400"><i className="fa-solid fa-comments"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Dialogues & Interactive Reading</strong>
                          Read and listen to chapter dialogues. Click on <u>any dotted word</u> to see its translation. You can instantly mark it as "Known" (<i className="fa-solid fa-check text-emerald-400"></i>) or "Unknown" (<i className="fa-solid fa-xmark text-rose-400"></i>). This action automatically saves the word to your <strong>Global Word Pool</strong>.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-900/50 border border-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-rose-400"><i className="fa-solid fa-clone"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Flashcards & Global Pool</strong>
                          Practice vocabulary with interactive flashcards. You can study chapter-specific words, or switch to the <strong>Global Havuz</strong> to review every word you have ever interacted with. You can also filter the deck to only show "Unknown" words, and copy lists directly to your clipboard. Use keyboard arrows (⬅️ ⬆️ ⬇️ ➡️) for quick navigation.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-900/50 border border-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-sky-400"><i className="fa-solid fa-magnifying-glass"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Smart Dictionary Search</strong>
                          Use the search bar at the top to find any Dutch word. Even if it's not in the current chapter, you can still mark it as known/unknown directly from the search results, instantly adding it to your personal tracking system.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-900/50 border border-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400"><i className="fa-solid fa-chalkboard-user"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">On-Class Extra Sections</strong>
                          These sections ("On-C") contain comprehensive grammar summaries, pronunciation tips, and extra exercises based on real classroom notes. They are perfect for quick reviews and reinforcing chapter concepts.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-400"><i className="fa-solid fa-globe"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Language Selection</strong>
                          Click the profile icon (<i className="fa-solid fa-circle-user"></i>) to open the account menu, where you can instantly switch the application language between English and Turkish using the TR/EN toggle buttons.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                        <div>
                          <strong className="text-slate-200 block mb-1">Cloud Sync & Membership</strong>
                          By signing in using the profile icon (<i className="fa-solid fa-circle-user"></i>), your progress—including known/unknown words, favorites, and completed sections—is securely synchronized to the cloud. You will never lose your progress, even if you switch devices or clear your browser cache.
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}

              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between mt-6">
                <div>
                  <strong className="block text-slate-200">Open Source Project</strong>
                  <span className="text-xs text-slate-400">Feel free to contribute or review the code.</span>
                </div>
                <a href="https://github.com/eckucukoglu/nederlands-app" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm">
                  <i className="fa-brands fa-github text-lg"></i> GitHub
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 1. HEADER */}
      <header className="bg-slate-950 text-white shadow-md sticky top-0 z-50 border-b border-slate-800 flex-none w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex flex-nowrap justify-between items-center gap-2">
          
          <div 
            className="flex items-center space-x-2 flex-shrink min-w-0 cursor-pointer group"
            onClick={() => setIsInfoModalOpen(true)}
            title={t('aboutGuide')}
          >
            <div className="bg-brand-900/50 p-2 rounded-xl backdrop-blur flex-shrink-0 group-hover:bg-brand-800/50 transition-colors">
              <i className="fa-solid fa-book-medical text-xl text-brand-400 group-hover:text-brand-300"></i>
            </div>
            <div className="hidden sm:block truncate">
              <h1 className="font-bold text-lg leading-tight text-slate-100 truncate group-hover:text-brand-300 transition-colors">Nederlands in Gang</h1>
              <p className="text-xs text-brand-300 truncate">Interactief Oefenportaal (A1 → A2)</p>
            </div>
            <h1 className="font-bold text-lg leading-tight text-slate-100 sm:hidden flex-shrink-0 group-hover:text-brand-300 transition-colors">NiG</h1>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 overflow-visible">
            
            <button 
              onClick={() => { setActiveTab("flashcards"); setIsChapterExpanded(false); setIsSearchExpanded(false); }}
              className={`p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center ${activeTab === 'flashcards' ? 'bg-rose-600 text-white shadow-md' : 'bg-rose-900/30 text-rose-400 hover:bg-rose-600 hover:text-white border border-rose-800/30'}`}
              title={t('flashcards')}
            >
              <i className="fa-solid fa-clone text-lg sm:text-xl"></i>
            </button>

            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center relative group"
              title={t('accountSync')}
            >
              <i className={`fa-solid fa-circle-user text-xl sm:text-2xl ${user ? 'text-emerald-400' : 'text-slate-400 group-hover:text-brand-400'}`}></i>
              {user && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>}
            </button>

            <div className="relative flex items-center" ref={searchRef}>
              <div className={`hidden sm:flex transition-all duration-300 ease-in-out overflow-hidden items-center ${isSearchExpanded ? 'w-56 opacity-100 mr-1' : 'w-0 opacity-0'}`}>
                <form onSubmit={handleGlobalSearch} className="w-full relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-full pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-500 shadow-inner"
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      onClick={() => { setSearchQuery(''); setSearchResults(null); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </form>
              </div>
              
              <button 
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsMobileSearchOpen(true);
                  } else {
                    if (isSearchExpanded && searchQuery.trim()) handleGlobalSearch();
                    else {
                      setIsSearchExpanded(!isSearchExpanded);
                      if (!isSearchExpanded) setIsChapterExpanded(false);
                      if (isSearchExpanded) { setSearchResults(null); setSearchQuery(''); }
                    }
                  }
                }}
                className={`p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center ${isSearchExpanded ? 'hidden sm:flex bg-brand-600 hover:bg-brand-500 text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-brand-400'}`}
                title={t('searchTitle')}
              >
                <i className="fa-solid fa-magnifying-glass text-lg sm:text-xl"></i>
              </button>

              {isSearchExpanded && searchResults && searchResults.length > 0 && (
                <div className="hidden sm:block absolute right-0 top-full mt-3 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-2xl z-50 min-w-[280px] max-w-[320px] max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                  <SearchResultsUI />
                </div>
              )}
            </div>

            <div className="h-6 w-[1px] bg-slate-700 my-auto mx-0.5 sm:mx-1"></div>

            <div className="relative flex items-center" ref={chapterMenuRef}>
              <button
                onClick={() => { setIsChapterExpanded(!isChapterExpanded); setIsSearchExpanded(false); }}
                className={`flex items-center justify-center px-3 sm:px-4 h-9 rounded-full font-extrabold text-xs sm:text-sm transition-all border shadow-sm flex-shrink-0 ${isChapterExpanded ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'}`}
                title={t('changeChapter')}
              >
                <span className="whitespace-nowrap">Hoofdstuk {currentChapter}</span>
                <i className={`fa-solid fa-chevron-${isChapterExpanded ? 'up' : 'down'} ml-2 text-[10px]`}></i>
              </button>

              {isChapterExpanded && (
                <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col py-1.5 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                  {availableChapters.map(ch => (
                    <button
                      key={ch}
                      onClick={() => {
                        handleChapterChange({ target: { value: ch }});
                        setIsChapterExpanded(false); 
                      }}
                      className={`w-full px-4 py-3 flex flex-col text-left text-sm transition-colors ${currentChapter === ch ? 'bg-slate-700/50 text-brand-300 font-bold border-l-4 border-brand-400' : 'text-slate-300 hover:bg-slate-700/30 border-l-4 border-transparent'}`}
                    >
                      <span className="font-bold">Hoofdstuk {ch}</span>
                      {chapterTitles[ch] && <span className="text-[11px] text-slate-400 mt-0.5 truncate">{chapterTitles[ch]}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* 2. MOBİL MERKEZ ARAMA (Modal) */}
      {isMobileSearchOpen && (
        <div className="sm:hidden fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsMobileSearchOpen(false)}>
          <div className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-3xl p-5 shadow-2xl flex flex-col max-h-[85vh]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand-400 font-bold"><i className="fa-solid fa-magnifying-glass mr-2"></i> {t('searchTitle')}</h2>
              <button onClick={() => { setIsMobileSearchOpen(false); setSearchResults(null); }} className="text-slate-500 hover:text-rose-400"><i className="fa-solid fa-xmark text-xl"></i></button>
            </div>
            
            <form onSubmit={handleGlobalSearch} className="w-full mb-4 flex gap-2">
              <div className="relative flex-1">
                <input 
                  autoFocus 
                  type="text" 
                  value={searchQuery} 
                  onChange={e => setSearchQuery(e.target.value)} 
                  placeholder={t('searchMobilePlaceholder')}
                  className="w-full bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-brand-500 shadow-inner" 
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={() => { setSearchQuery(''); setSearchResults(null); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>
              <button type="submit" className="bg-brand-600 hover:bg-brand-500 text-white rounded-xl px-4 flex items-center justify-center transition-colors shadow-sm">
                 <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 flex-1 pr-1">
              {searchResults && searchResults.length > 0 ? <SearchResultsUI /> : (searchQuery && searchResults !== null ? <p className="text-center text-slate-500 text-sm mt-4 font-medium">{t('noResults')}</p> : null)}
            </div>
          </div>
        </div>
      )}

      {/* 3. SECTION BAR */}
      <div 
        className={`bg-slate-900/40 border-slate-800 w-full max-w-full overflow-hidden shadow-inner z-40 flex-none transition-all duration-300 ${
          isSectionBarOverflowing ? 'absolute top-0 left-0 h-0 invisible opacity-0 pointer-events-none' : 'border-b relative opacity-100'
        }`}
      >
        <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div 
          ref={sectionMeasureRef} 
          className="max-w-7xl mx-auto px-2 py-2.5 flex justify-center items-center w-full max-w-full overflow-x-auto hide-scroll whitespace-nowrap gap-2" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center justify-center flex-nowrap gap-1.5 sm:gap-2 px-1 flex-shrink-0">
            {currentSections.map(sec => {
              const isActive = activeTab === sec.id;
              const isC = completed[sec.id];
              const isF = favorites[sec.id];
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`relative flex items-center justify-center h-9 px-3.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-extrabold transition-all border shadow-sm whitespace-nowrap ${
                    isActive ? 'bg-brand-600 text-white border-brand-500 z-10' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {sec.id.includes('On-Class') ? 'On-C' : sec.id}
                  {(isC || isF) && (
                    <div className="absolute -top-1.5 -right-1.5 flex space-x-[1px]">
                      {isF && <div className="w-[14px] h-[14px] bg-slate-900 rounded-full flex items-center justify-center border border-slate-700"><i className="fa-solid fa-star text-amber-400 text-[8px]"></i></div>}
                      {isC && <div className="w-[14px] h-[14px] bg-slate-900 rounded-full flex items-center justify-center border border-slate-700"><i className="fa-solid fa-circle-check text-emerald-400 text-[9px]"></i></div>}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. MOBİL ZARİF İLERLEME ÇUBUĞU */}
      {isSectionBarOverflowing && (
        <div className="w-full relative px-4 py-3 bg-slate-900/60 border-b border-slate-800 shadow-inner z-40 flex-none" ref={mobileMenuRef}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-full max-w-3xl mx-auto border rounded-2xl p-3 shadow-sm flex flex-col gap-2.5 transition-all ${isMobileMenuOpen ? 'bg-slate-800 border-brand-500' : 'bg-slate-800 border-slate-700'}`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-slate-200 text-sm font-bold truncate text-left">
                {activeTab === 'flashcards' ? t('flashcards') : (activeTab.includes('On-Class') ? 'Extra: On-Class' : `Sectie ${activeTab}`)}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {activeTab !== 'flashcards' && (
                  <span className="text-[10px] font-extrabold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-700">
                    {currentIndex + 1} / {currentSections.length}
                  </span>
                )}
                <i className={`fa-solid fa-chevron-${isMobileMenuOpen ? 'up' : 'down'} text-brand-400 text-xs`}></i>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full gap-1">
              {currentSections.map((sec) => {
                const isActive = activeTab === sec.id;
                const isC = completed[sec.id];
                const isF = favorites[sec.id];
                return (
                  <div key={sec.id} className="relative flex-1 h-1.5 flex justify-center">
                     <div className={`w-full h-full rounded-full transition-all duration-300 ${isActive ? 'bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]' : 'bg-slate-700'}`}></div>
                     {!isActive && (isC || isF) && (
                        <div className="absolute -top-[4px] flex gap-[2px]">
                           {isC && <div className="w-[5px] h-[5px] bg-emerald-400 rounded-full shadow-[0_0_2px_rgba(52,211,153,0.8)]"></div>}
                           {isF && <div className="w-[5px] h-[5px] bg-amber-400 rounded-full shadow-[0_0_2px_rgba(251,191,36,0.8)]"></div>}
                        </div>
                     )}
                  </div>
                );
              })}
            </div>
          </button>

          {isMobileMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl mt-2 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col py-1.5 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                {currentSections.map(sec => {
                  const isC = completed[sec.id];
                  const isF = favorites[sec.id];
                  return (
                    <button
                      key={sec.id}
                      onClick={() => { setActiveTab(sec.id); setIsMobileMenuOpen(false); }}
                      className={`w-full px-4 py-3 flex items-center justify-between text-sm transition-colors ${activeTab === sec.id ? 'bg-slate-700/50 text-brand-300 font-bold border-l-4 border-brand-400' : 'text-slate-300 hover:bg-slate-700/30 border-l-4 border-transparent'}`}
                    >
                      <span className="truncate pr-2 text-left">{sec.id.includes('On-Class') ? 'Extra: On-Class' : `${sec.id} - ${getSectionTitle(sec.id)}`}</span>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {isF && <i className="fa-solid fa-star text-amber-400"></i>}
                        {isC && <i className="fa-solid fa-circle-check text-emerald-400"></i>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* 5. ANA İÇERİK */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 text-slate-200 flex flex-col relative overflow-hidden">
        
        {(activeTab.endsWith('.1') && !activeTab.includes('On-Class')) && (
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
        <h2 className="text-xl font-bold text-slate-200">Yükleniyor / Loading...</h2>
        <p className="text-sm text-slate-500 mt-2">Lütfen bekleyin / Please wait.</p>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} user={user} />
      <MainContent user={user} setIsAuthModalOpen={setIsAuthModalOpen} />
    </LanguageProvider>
  );
}