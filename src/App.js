// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import AuthModal from './components/AuthModal';
import IrregularVerbs from './components/IrregularVerbs';
import Grammar from './components/Grammar'; // GRAMMAR EKLENDİ
import QuizModule from './components/QuizModule'; // FULL QUIZ MODÜLÜ EKLENDİ
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
  "weer": "again", "als": "like/as", "nieuw": "new", "woorden": "words", "morgen": "tomorrow", "overmorgen": "the day after tomorrow", "dag": "dag"
};

// --- ORTAK KILAVUZ (ABOUT) BİLEŞENİ ---
const GuideContent = ({ lang }) => (
  <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
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
                Ünite diyaloglarını okuyun ve dinleyin. Çevirisini görmek için <u>altı noktalı kelimelerin</u> üzerine tıklayın. Bir kelimeyi anında "Biliyorum" (<i className="fa-solid fa-check text-emerald-400"></i>) veya "Bilmiyorum" (<i className="fa-solid fa-xmark text-rose-400"></i>) olarak işaretleyebilirsiniz. Bu işlem, kelimeyi otomatik olarak <strong>Benim Kelime Havuzum</strong>'a kaydeder.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-900/50 border border-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-rose-400"><i className="fa-solid fa-clone"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Flashcards & Benim Kelime Havuzum</strong>
                Etkileşimli flashcard'lar ile kelime pratiği yapın. İsterseniz sadece seçtiğiniz üniteye özel kelimeleri çalışabilir, isterseniz de <strong>Benim Kelime Havuzum</strong> moduna geçerek site genelinde etkileşime girdiğiniz tüm kelimeleri tekrar edebilirsiniz. Yalnızca "Bilinmeyen" kelimeleri filtreleyebilir veya listenizi tek tuşla panoya kopyalayabilirsiniz.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-400"><i className="fa-solid fa-spell-check"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Gramer Referansı & Fiiller</strong>
                Arama çubuğunun solundaki butonları kullanarak Hollandaca gramer kurallarına, detaylı örneklere, istisnalara ve en sık kullanılan düzensiz fiil listelerine anında ulaşabilirsiniz.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-400"><i className="fa-solid fa-graduation-cap"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Pratik Testleri & Genel Sınav</strong>
                Gramer ve Düzensiz Fiiller bölümlerindeki <strong>Çalış & Test Et</strong> butonlarıyla o konuya özel testler çözebilir veya üst menüdeki kep simgesine (🎓) tıklayarak tüm konulardan oluşan <strong>Genel Sınav</strong>'a katılabilirsiniz. Çözdüğünüz soruların istatistikleri tutulur.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-900/50 border border-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-sky-400"><i className="fa-solid fa-magnifying-glass"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Akıllı Sözlük Araması (Tersten Arama Destekli)</strong>
                Herhangi bir Hollandaca, Türkçe veya İngilizce kelimeyi bulmak için üstteki arama çubuğunu kullanın. Aradığınız kelime bulunduğunuz ünitede olmasa bile, arama sonuçlarından doğrudan "biliyorum/bilmiyorum" şeklinde işaretleyebilir ve kişisel takip sisteminize anında ekleyebilirsiniz.
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
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-400"><i className="fa-solid fa-right-left"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Bölümler Arası Hızlı Geçiş</strong>
                Ders bölümleri arasında klavyenizdeki <strong>sol/sağ ok tuşlarını</strong> kullanarak veya mobilde ekranı <strong>sağa/sola kaydırarak (swipe)</strong> anında gezinebilirsiniz.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400"><i className="fa-solid fa-cloud-arrow-up"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Bulut Senkronizasyonu & Üyelik</strong>
                Profil simgesini (<i className="fa-solid fa-circle-user"></i>) kullanarak giriş yaptığınızda ilerlemeniz güvenli bir şekilde buluta kaydedilir. Cihaz değiştirseniz bile verileriniz asla kaybolmaz.
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
                Read and listen to chapter dialogues. Click on <u>any dotted word</u> to see its translation. You can instantly mark it as "Known" (<i className="fa-solid fa-check text-emerald-400"></i>) or "Unknown" (<i className="fa-solid fa-xmark text-rose-400"></i>). This action automatically saves the word to <strong>My Word Pool</strong>.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-900/50 border border-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-rose-400"><i className="fa-solid fa-clone"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Flashcards & My Word Pool</strong>
                Practice vocabulary with interactive flashcards. You can study chapter-specific words, or switch to <strong>My Word Pool</strong> to review every word you have ever interacted with.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-400"><i className="fa-solid fa-spell-check"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Grammar Reference & Verbs</strong>
                Use the buttons next to the search bar to instantly access Dutch grammar rules, detailed examples, exceptions, and lists of frequently used irregular verbs.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-400"><i className="fa-solid fa-graduation-cap"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Practice Tests & Full Quiz</strong>
                You can take topic-specific tests using the <strong>Practice</strong> buttons in the Grammar and Irregular Verbs sections, or take a comprehensive <strong>Full Quiz</strong> by clicking the graduation cap icon (🎓) in the top menu. Your performance statistics are recorded.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-900/50 border border-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-sky-400"><i className="fa-solid fa-magnifying-glass"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Smart Dictionary Search (Reverse Search Supported)</strong>
                Use the search bar at the top to find any Dutch, English or Turkish word. Even if it's not in the current chapter, you can still mark it as known/unknown directly from the search results.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-900/50 border border-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400"><i className="fa-solid fa-chalkboard-user"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">On-Class Extra Sections</strong>
                These sections ("On-C") contain comprehensive grammar summaries, pronunciation tips, and extra exercises based on real classroom notes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-400"><i className="fa-solid fa-right-left"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Easy Section Navigation</strong>
                You can quickly switch between lesson sections using the <strong>left/right arrow keys</strong> on your keyboard or by <strong>swiping left/right</strong> on mobile devices.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400"><i className="fa-solid fa-cloud-arrow-up"></i></div>
              <div>
                <strong className="text-slate-200 block mb-1">Cloud Sync & Membership</strong>
                By signing in using the profile icon (<i className="fa-solid fa-circle-user"></i>), your progress is securely synchronized to the cloud. You will never lose your progress.
              </div>
            </li>
          </ul>
        </div>
      </>
    )}
  </div>
);

// --- ANA SAYFA (HOME VIEW) BİLEŞENİ ---
const HomeView = ({ favorites, completed, goToSection, lang, bookSections }) => {
  const hasData = Object.keys(favorites).length > 0 || Object.keys(completed).length > 0;

  const getSecTitle = (secId) => {
    const sec = bookSections.find(s => s.id === secId);
    if (sec && sec.title) return sec.title;
    return secId.includes('On-Class') ? 'Extra Oefeningen' : 'Dialoog / Oefening';
  };

  if (!hasData) {
    return (
      <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-6 sm:p-8 max-w-4xl mx-auto">
         <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-400 mb-6 flex items-center gap-3">
           <i className="fa-solid fa-hands-clapping"></i> {lang === 'tr' ? 'Nederlands in Gang\'a Hoş Geldiniz!' : 'Welcome to Nederlands in Gang!'}
         </h2>
         <GuideContent lang={lang} />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto w-full">
       <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2 tracking-tight">Mijn Dashboard</h2>
          <p className="text-sm text-slate-400">{lang === 'tr' ? 'Favori ve tamamladığınız bölümler.' : 'Your favorite and completed sections.'}</p>
       </div>

       {Object.keys(favorites).length > 0 && (
         <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-star"></i> {lang === 'tr' ? 'Favorilerim' : 'Favorites'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {Object.entries(favorites).map(([secId, note]) => (
                   <div 
                     key={secId} 
                     onClick={() => goToSection(secId)} 
                     className="cursor-pointer bg-slate-800 p-4 rounded-xl border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:-translate-y-1 transition-all shadow-md group flex flex-col gap-3"
                   >
                       <div className="flex justify-between items-start gap-2">
                           <h4 className="font-bold text-slate-200 text-[15px] leading-snug group-hover:text-white transition-colors">{secId} - {getSecTitle(secId)}</h4>
                           <div className="bg-amber-900/30 p-1.5 rounded-lg flex items-center justify-center border border-amber-500/20">
                             <i className="fa-solid fa-star text-amber-400 text-xs"></i>
                           </div>
                       </div>
                       <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50 flex-1 relative overflow-hidden">
                           <i className="fa-solid fa-quote-left absolute top-2 left-2 text-slate-700 text-xl opacity-30"></i>
                           <p className="text-[13px] text-amber-200/90 italic line-clamp-3 leading-relaxed relative z-10 pl-4">{note}</p>
                       </div>
                   </div>
               ))}
            </div>
         </div>
       )}

       {Object.keys(completed).length > 0 && (
         <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i> {lang === 'tr' ? 'Tamamlananlar' : 'Completed'}
            </h3>
            <div className="flex flex-wrap gap-3">
               {Object.keys(completed).map(secId => (
                   <button 
                     key={secId} 
                     onClick={() => goToSection(secId)} 
                     className="bg-slate-800/80 border border-emerald-700/50 text-emerald-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-600 hover:text-white hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(52,211,153,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                   >
                       <i className="fa-solid fa-check"></i> {secId} - {getSecTitle(secId)}
                   </button>
               ))}
            </div>
         </div>
       )}
    </div>
  );
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

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteSections');
    return saved ? JSON.parse(saved) : {};
  });

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedSections');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem(`lastVisitedTab_${currentChapter}`);
    const hasData = (Object.keys(favorites).length > 0) || (Object.keys(completed).length > 0);
    if (!savedTab && !hasData) return 'home';
    return savedTab ? savedTab : `${currentChapter}.1`;
  });

  const [previousTab, setPreviousTab] = useState('home');

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearchedQuery, setLastSearchedQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState(null);

  const [isChapterExpanded, setIsChapterExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const [isFullQuizOpen, setIsFullQuizOpen] = useState(false);

  const [isSectionBarOverflowing, setIsSectionBarOverflowing] = useState(false);

  const [globalWordStatuses, setGlobalWordStatuses] = useState(() => {
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const statuses = {};
    Object.keys(pool).forEach(key => { statuses[key] = pool[key].status; });
    return statuses;
  });

  useEffect(() => {
    const fetchStatuses = () => {
      const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
      const statuses = {};
      Object.keys(pool).forEach(key => { statuses[key] = pool[key].status; });
      setGlobalWordStatuses(statuses);
    };
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, []);

  const [searchToast, setSearchToast] = useState(null);
  
  const [customWordModal, setCustomWordModal] = useState({ isOpen: false, word: '', status: '' });
  const [customTr, setCustomTr] = useState('');
  const [customEn, setCustomEn] = useState('');
  const [customExample, setCustomExample] = useState('');
  const [customError, setCustomError] = useState(false);

  const searchRef = useRef(null);
  const desktopSearchInputRef = useRef(null); 
  const chapterMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const sectionMeasureRef = useRef(null); 
  const mobileSearchRef = useRef(null); 

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const currentSections = bookSections.filter(sec => sec.chapter === currentChapter || sec.id === `On-Class-${currentChapter}`);
  const currentIndex = currentSections.findIndex(sec => sec.id === activeTab);

  const goToSection = (secId) => {
    let chapter = fallbackChapter;
    if (secId.startsWith('On-Class-')) {
      chapter = Number(secId.replace('On-Class-', ''));
    } else {
      chapter = Number(secId.split('.')[0]);
    }
    if (!isNaN(chapter)) setCurrentChapter(chapter);
    setActiveTab(secId);
  };

  useEffect(() => {
    if (isSearchExpanded) {
      setTimeout(() => {
        desktopSearchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchExpanded]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) setActiveTab(currentSections[currentIndex - 1].id);
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < currentSections.length - 1) setActiveTab(currentSections[currentIndex + 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentSections, activeTab]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) {
        if (currentIndex < currentSections.length - 1) setActiveTab(currentSections[currentIndex + 1].id);
      } else {
        if (currentIndex > 0) setActiveTab(currentSections[currentIndex - 1].id);
      }
    }
  };

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
      if (customWordModal.isOpen) return;

      const isOutsideDesktopSearch = searchRef.current && !searchRef.current.contains(event.target);
      const isOutsideMobileSearch = mobileSearchRef.current ? !mobileSearchRef.current.contains(event.target) : true;

      if (isOutsideDesktopSearch && isOutsideMobileSearch) {
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
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }
  }, [customWordModal.isOpen]);

  const speakDutch = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
  };

  const getToastMessage = (word, statusKey) => {
    const isTr = lang === 'tr';
    let statusLabel = "";
    
    if (statusKey === 'known') statusLabel = isTr ? "Biliyorum" : "Known";
    else if (statusKey === 'unknown') statusLabel = isTr ? "Bilmiyorum" : "Unknown";
    else statusLabel = isTr ? "İşaret kaldırıldı" : "Mark removed";

    if (isTr) {
      if (statusKey === 'removed') return `"${word}" kelimesinin işareti kaldırıldı.`;
      return `"${word}" kelimesi "${statusLabel}" olarak güncellendi.`;
    } else {
      if (statusKey === 'removed') return `Mark removed for "${word}".`;
      return `Word "${word}" marked as "${statusLabel}".`;
    }
  };

  const showToast = (message) => {
    setSearchToast(message);
    setTimeout(() => {
      setSearchToast(null);
    }, 2800);
  };

  const checkIsCustom = (word) => {
    const customPool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const customVocab = Object.values(customPool);
    const allVocab = [...vocabulary, ...globalDictionary, ...customVocab];
    const isMatched = allVocab.some(v => v.nl.toLowerCase() === word.toLowerCase());
    const hasFallback = !!fallbackDictionary[word.toLowerCase()];
    
    return !isMatched && !hasFallback;
  };

  const handleGlobalSearch = (e) => {
    if (e) e.preventDefault();
    const cleanWord = searchQuery.trim().toLowerCase();
    if (!cleanWord) return;

    setLastSearchedQuery(cleanWord);

    const customPool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const customVocab = Object.values(customPool).map(wordObj => ({
      nl: wordObj.nl,
      en: wordObj.en || "",
      tr: wordObj.tr || "",
      example: wordObj.example || ""
    }));

    const allVocab = [...vocabulary, ...globalDictionary, ...customVocab];
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => {
      uniqueVocabMap.set(item.nl.toLowerCase(), item);
    });
    const uniqueVocab = Array.from(uniqueVocabMap.values());

    let matches = [];
    try {
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
      matches = uniqueVocab.filter(v => 
        regex.test(v.nl) || 
        (v.en && regex.test(v.en)) || 
        (v.tr && regex.test(v.tr))
      );
    } catch (err) { console.error("Regex error:", err); }

    if (matches.length === 0) {
      matches = uniqueVocab.filter(v => 
        v.nl.toLowerCase().includes(cleanWord) || 
        (v.en && v.en.toLowerCase().includes(cleanWord)) || 
        (v.tr && v.tr.toLowerCase().includes(cleanWord))
      );
    }

    if (matches.length === 0) {
      const fallback = fallbackDictionary[cleanWord];
      matches = [{ 
        nl: cleanWord, 
        en: fallback || "Translation not available", 
        tr: fallback ? "Çeviri bulunamadı" : "Çeviri bulunamadı",
        example: fallback ? "Uit de dialoog" : t('notFound'),
        isCustom: !fallback 
      }];
    }

    matches.sort((a, b) => {
      const aExactNl = a.nl.toLowerCase() === cleanWord ? -2 : 0;
      const bExactNl = b.nl.toLowerCase() === cleanWord ? -2 : 0;
      
      const aExactOther = (a.en?.toLowerCase() === cleanWord || a.tr?.toLowerCase() === cleanWord) ? -1 : 0;
      const bExactOther = (b.en?.toLowerCase() === cleanWord || b.tr?.toLowerCase() === cleanWord) ? -1 : 0;

      const aScore = aExactNl + aExactOther;
      const bScore = bExactNl + bExactOther;

      if (aScore !== bScore) return aScore - bScore;
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

  const executeStorageUpdate = (wordObj, status) => {
    saveToGlobalPool(wordObj, status);
    window.dispatchEvent(new Event('wordStatusUpdated'));
    showToast(getToastMessage(wordObj.nl, status === undefined ? 'removed' : status));
  };

  const handleCustomSave = (e) => {
    e.preventDefault();
    if (!customTr.trim() && !customEn.trim()) {
      setCustomError(true);
      return;
    }
    setCustomError(false);

    const wordObj = {
      nl: customWordModal.word,
      tr: customTr.trim(),
      en: customEn.trim(),
      example: customExample.trim() || (lang === 'tr' ? "Benim Kelime Havuzum'a eklendi." : "Manually added to My Word Pool.")
    };

    executeStorageUpdate(wordObj, customWordModal.status);

    setCustomWordModal({ isOpen: false, word: '', status: '' });
    setSearchResults(null);
    if (window.innerWidth < 640) {
      setIsMobileSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSearchWordKnowledge = (wordObj, isKnown) => {
    if (wordObj.isCustom) {
       setCustomWordModal({ isOpen: true, word: wordObj.nl, status: isKnown ? 'known' : 'unknown' });
       setCustomTr('');
       setCustomEn('');
       setCustomExample('');
       setCustomError(false);
       return;
    }
    
    executeStorageUpdate(wordObj, isKnown ? 'known' : 'unknown');
  };

  const handleSearchRawWordToggle = (direction, targetWord, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!targetWord) return;

    const currentStatus = globalWordStatuses[targetWord];
    let newStatus;

    if (direction === 'left') {
      if (currentStatus === 'known') newStatus = undefined;
      else newStatus = 'unknown';
    } else if (direction === 'right') {
      if (currentStatus === 'unknown') newStatus = undefined;
      else newStatus = 'known';
    }

    if (newStatus !== undefined && checkIsCustom(targetWord)) {
       setCustomWordModal({ isOpen: true, word: targetWord, status: newStatus });
       setCustomTr('');
       setCustomEn('');
       setCustomExample('');
       setCustomError(false);
       return;
    }

    const wordObj = {
      nl: targetWord,
      en: "Not found in dictionary",
      tr: "Sözlükte bulunamadı",
      example: "Manually marked by the user."
    };

    executeStorageUpdate(wordObj, newStatus);
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

  const handleChapterChange = (e) => {
    const newChapter = Number(e.target.value);
    setCurrentChapter(newChapter);
    const savedTab = localStorage.getItem(`lastVisitedTab_${newChapter}`);
    setActiveTab(savedTab ? savedTab : `${newChapter}.1`);
  };

  const getSectionTitle = (secId) => {
    if (secId === 'flashcards') return "Flashcards";
    if (secId === 'verbs') return lang === 'tr' ? "Düzensiz Fiiller" : "Irregular Verbs";
    if (secId === 'grammar') return lang === 'tr' ? "Gramer Referansı" : "Grammar Reference";
    const sec = currentSections.find(s => s.id === secId);
    if (sec && sec.title) return sec.title;
    if (secId.includes('On-Class')) return "Extra Oefeningen";
    if (secId.endsWith('.1')) return "Dialoog";
    return "Oefening";
  };

  const renderSearchResults = () => {
    const rawWord = lastSearchedQuery || searchQuery.trim().toLowerCase();
    const rawStatus = globalWordStatuses[rawWord];
    let trackColor = "bg-slate-700/80"; let thumbColor = "bg-slate-400"; let translateClass = "translate-x-[18px]";

    if (rawStatus === 'unknown') {
      trackColor = "bg-rose-900/60"; thumbColor = "bg-rose-500"; translateClass = "translate-x-[2px]";
    } else if (rawStatus === 'known') {
      trackColor = "bg-emerald-900/60"; thumbColor = "bg-emerald-500"; translateClass = "translate-x-[34px]";
    }

    return (
      <React.Fragment>
        <div className="mb-3 pb-3 border-b border-slate-700/80 flex justify-between items-center gap-3">
          <div className="flex flex-col truncate">
            <span className="text-[13px] font-bold text-slate-200 truncate">
              <i className="fa-solid fa-pen-nib text-brand-400 mr-1.5"></i>
              {rawWord}
            </span>
            <span className="text-[10px] text-slate-400 leading-tight mt-0.5">{t('markOnly')}</span>
          </div>
          <div className={`relative w-14 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${trackColor}`}>
            <button type="button" className="absolute left-0 w-1/2 h-full z-10 cursor-pointer rounded-l-full outline-none" onClick={(e) => handleSearchRawWordToggle('left', rawWord, e)}></button>
            <button type="button" className="absolute right-0 w-1/2 h-full z-10 cursor-pointer rounded-r-full outline-none" onClick={(e) => handleSearchRawWordToggle('right', rawWord, e)}></button>
            <div className={`absolute top-[2px] w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-in-out pointer-events-none ${thumbColor} ${translateClass}`}></div>
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
                  <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleSearchWordKnowledge(wordObj, true); }} className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'known' ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'}`}><i className="fa-solid fa-check"></i></button>
                  <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleSearchWordKnowledge(wordObj, false); }} className={`flex-1 py-1.5 rounded-md text-xs transition-all border ${currentStatus === 'unknown' ? 'bg-rose-600 border-rose-500 text-white shadow-inner scale-[0.98]' : 'bg-slate-700/50 border-slate-600 hover:bg-rose-900/40 hover:border-rose-700/50 text-slate-300'}`}><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300 w-full max-w-full relative overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* TOAST BİLDİRİM */}
      {searchToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] bg-slate-800 text-slate-100 px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-600 text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-bounce w-max max-w-[90%]">
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span>{searchToast}</span>
        </div>
      )}

      {/* CUSTOM WORD MODAL */}
      {customWordModal.isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={() => setCustomWordModal({ isOpen: false, word: '', status: '' })}>
          <div className="bg-slate-900 w-full max-w-sm rounded-3xl shadow-2xl border border-slate-700 p-6 flex flex-col relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
               <i className="fa-solid fa-book-medical text-8xl text-brand-400"></i>
            </div>
            <h3 className="text-xl font-extrabold text-brand-400 mb-4 flex items-center gap-2 relative z-10">
              <i className="fa-solid fa-plus"></i>
              {lang === 'tr' ? 'Kelime Ekle' : 'Add Word'}
            </h3>
            
            <p className="text-[13px] text-slate-300 mb-5 leading-relaxed relative z-10">
              {lang === 'tr' 
                ? 'Bu kelime sözlükte bulunmuyor. Benim Kelime Havuzum\'a eklemek için lütfen en az bir dilde çevirisini girin.' 
                : 'This word is not in the dictionary. Please provide a translation in at least one language to add it to My Word Pool.'}
            </p>

            <form onSubmit={handleCustomSave} className="space-y-4 relative z-10">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nederlands</label>
                <input type="text" value={customWordModal.word} disabled className="w-full bg-slate-800/80 border border-slate-700 text-slate-400 text-sm font-bold rounded-xl px-4 py-2.5 cursor-not-allowed shadow-inner" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Türkçe</label>
                <input autoFocus type="text" value={customTr} onChange={e => {setCustomTr(e.target.value); setCustomError(false);}} placeholder={lang === 'tr' ? "Türkçe anlamı..." : "Turkish meaning..."} className="w-full bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 shadow-inner transition-colors" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">English</label>
                <input type="text" value={customEn} onChange={e => {setCustomEn(e.target.value); setCustomError(false);}} placeholder={lang === 'tr' ? "İngilizce anlamı..." : "English meaning..."} className="w-full bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 shadow-inner transition-colors" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {lang === 'tr' ? 'Örnek Cümle (İsteğe Bağlı)' : 'Example Sentence (Optional)'}
                </label>
                <input 
                  type="text" 
                  value={customExample} 
                  onChange={e => setCustomExample(e.target.value)} 
                  placeholder={lang === 'tr' ? "Kelimeyi bir cümlede kullanın..." : "Use the word in a sentence..."} 
                  className="w-full bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 shadow-inner transition-colors" 
                />
              </div>

              {customError && (
                <p className="text-[12px] text-rose-400 font-bold flex items-center gap-1.5 mt-2 bg-rose-900/20 p-2 rounded-lg border border-rose-800/50">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {lang === 'tr' ? 'Lütfen en az bir dilde çeviri girin.' : 'Please enter at least one translation.'}
                </p>
              )}

              <div className="flex gap-3 pt-3">
                <button type="button" onClick={() => setCustomWordModal({ isOpen: false, word: '', status: '' })} className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-600 transition-colors shadow-sm">
                  {lang === 'tr' ? 'İptal' : 'Cancel'}
                </button>
                <button type="submit" className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-brand-600 text-white hover:bg-brand-500 shadow-md shadow-brand-900/30 transition-all active:scale-[0.98]">
                  <i className="fa-solid fa-floppy-disk mr-2"></i>
                  {lang === 'tr' ? 'Kaydet' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            
            <div className="overflow-y-auto p-6 flex-1 scrollbar-thin scrollbar-thumb-slate-700 space-y-6">
               <GuideContent lang={lang} />
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

      {/* FULL QUIZ MODAL */}
      {isFullQuizOpen && (
        <QuizModule 
          tags={[]} 
          onClose={() => setIsFullQuizOpen(false)} 
          title={lang === 'tr' ? "Genel Sınav (Tüm Sorular)" : "Full Quiz (All Questions)"}
        />
      )}

      {/* 1. HEADER */}
      <header className="bg-slate-950 text-white shadow-md sticky top-0 z-50 border-b border-slate-800 flex-none w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex flex-nowrap justify-between items-center gap-2">
          
          <div 
            className="flex items-center space-x-2 flex-shrink min-w-0 cursor-pointer group select-none"
            onClick={() => setActiveTab('home')}
            onDoubleClick={(e) => { e.preventDefault(); setIsInfoModalOpen(true); }}
            title={lang === 'tr' ? '1 Tık: Ana Sayfa | 2 Tık: Kılavuz' : '1 Click: Home | 2 Clicks: Guide'}
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
            
            {/* FULL QUIZ BUTONU */}
            <button 
              onClick={() => setIsFullQuizOpen(true)}
              className="p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center bg-amber-900/30 text-amber-400 hover:bg-amber-600 hover:text-white border border-amber-800/30 shadow-sm"
              title={lang === 'tr' ? 'Genel Sınav & Full Quiz' : 'Full Quiz Mode'}
            >
              <i className="fa-solid fa-graduation-cap text-lg sm:text-xl"></i>
            </button>

            <button 
              onClick={() => {
                if (activeTab === 'flashcards') {
                  setActiveTab(previousTab);
                } else {
                  if (activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'grammar') setPreviousTab(activeTab);
                  setActiveTab("flashcards");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center ${activeTab === 'flashcards' ? 'bg-rose-600 text-white shadow-md' : 'bg-rose-900/30 text-rose-400 hover:bg-rose-600 hover:text-white border border-rose-800/30'}`}
              title={t('flashcards')}
            >
              <i className="fa-solid fa-clone text-lg sm:text-xl"></i>
            </button>

            <button 
              onClick={() => {
                if (activeTab === 'grammar') {
                  setActiveTab(previousTab);
                } else {
                  if (activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'flashcards') setPreviousTab(activeTab);
                  setActiveTab("grammar");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center ${activeTab === 'grammar' ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-900/30 text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-800/30'}`}
              title={lang === 'tr' ? 'Gramer Referansı' : 'Grammar Reference'}
            >
              <i className="fa-solid fa-spell-check text-lg sm:text-xl"></i>
            </button>

            <button 
              onClick={() => {
                if (activeTab === 'verbs') {
                  setActiveTab(previousTab);
                } else {
                  if (activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'grammar') setPreviousTab(activeTab);
                  setActiveTab("verbs");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center ${activeTab === 'verbs' ? 'bg-sky-600 text-white shadow-md' : 'bg-sky-900/30 text-sky-400 hover:bg-sky-600 hover:text-white border border-sky-800/30'}`}
              title={lang === 'tr' ? 'Düzensiz Fiiller' : 'Irregular Verbs'}
            >
              <i className="fa-solid fa-bolt text-lg sm:text-xl"></i>
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
                    ref={desktopSearchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={e => {
                      setSearchQuery(e.target.value);
                    }}
                    onClick={() => { if (searchResults) setSearchResults(null); }}
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
                  {renderSearchResults()}
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
                {/* Mobilde sadece H10 vb. gösterilir, masaüstünde tam metin */}
                <span className="sm:hidden whitespace-nowrap">H{currentChapter}</span>
                <span className="hidden sm:inline whitespace-nowrap">Hoofdstuk {currentChapter}</span>
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
        <div className="sm:hidden fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => { setIsMobileSearchOpen(false); setSearchResults(null); }}>
          <div ref={mobileSearchRef} className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-3xl p-5 shadow-2xl flex flex-col max-h-[85vh]" onClick={e => e.stopPropagation()}>
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
                  onChange={e => { setSearchQuery(e.target.value); }} 
                  onClick={() => { if (searchResults) setSearchResults(null); }}
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
              {searchResults && searchResults.length > 0 ? renderSearchResults() : (searchQuery && searchResults !== null ? <p className="text-center text-slate-500 text-sm mt-4 font-medium">{t('noResults')}</p> : null)}
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
                  onClick={() => {
                    if (activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar') {
                      setPreviousTab(sec.id);
                    }
                    setActiveTab(sec.id);
                  }}
                  title={favorites[sec.id] ? `Favori Notu: ${favorites[sec.id]}` : ''}
                  className={`relative flex items-center h-9 px-3.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-extrabold transition-all border shadow-sm whitespace-nowrap gap-1.5 ${
                    isActive ? 'bg-brand-600 text-white border-brand-500 z-10' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span>{sec.id.includes('On-Class') ? 'On-C' : sec.id}</span>
                  {isF && <i className="fa-solid fa-star text-amber-400 text-[10px]"></i>}
                  {isF && favorites[sec.id] && (
                    <span className={`text-[10px] font-normal truncate max-w-[80px] ${isActive ? 'text-amber-200' : 'text-amber-400/80'}`}>
                      {favorites[sec.id]}
                    </span>
                  )}
                  {isC && <i className="fa-solid fa-circle-check text-emerald-400 text-[10px] ml-0.5"></i>}
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
                {activeTab === 'home' ? 'Dashboard' : (activeTab === 'flashcards' ? t('flashcards') : activeTab === 'verbs' ? (lang === 'tr' ? 'Düzensiz Fiiller' : 'Irregular Verbs') : activeTab === 'grammar' ? (lang === 'tr' ? 'Gramer Referansı' : 'Grammar Reference') : (activeTab.includes('On-Class') ? 'Extra: On-Class' : `Sectie ${activeTab}`))}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar' && activeTab !== 'home' && (
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
                      onClick={() => { 
                        if (activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar') {
                          setPreviousTab(sec.id);
                        }
                        setActiveTab(sec.id); 
                        setIsMobileMenuOpen(false); 
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-between text-sm transition-colors ${activeTab === sec.id ? 'bg-slate-700/50 text-brand-300 font-bold border-l-4 border-brand-400' : 'text-slate-300 hover:bg-slate-700/30 border-l-4 border-transparent'}`}
                    >
                      <div className="flex flex-col text-left truncate pr-2 flex-1">
                        <span className="truncate">{sec.id.includes('On-Class') ? 'Extra: On-Class' : `${sec.id} - ${getSectionTitle(sec.id)}`}</span>
                        {favorites[sec.id] && (
                          <span className="text-[11px] text-amber-400/90 italic truncate mt-0.5 flex items-center gap-1">
                            <i className="fa-solid fa-star text-[9px]"></i> {favorites[sec.id]}
                          </span>
                        )}
                      </div>
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
        
        {activeTab === 'home' && (
          <HomeView 
            favorites={favorites} 
            completed={completed} 
            goToSection={goToSection} 
            lang={lang} 
            bookSections={bookSections}
          />
        )}

        {(activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'grammar' && activeTab !== 'flashcards' && activeTab.endsWith('.1') && !activeTab.includes('On-Class')) && (
          <DialogueSection 
            sectionId={activeTab} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            completed={completed} 
            toggleCompleted={toggleCompleted} 
          />
        )}
        
        {activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar' && bookSections.find(s => s.id === activeTab) && !activeTab.endsWith('.1') && (
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
        {activeTab === 'verbs' && <IrregularVerbs />}
        {activeTab === 'grammar' && <Grammar />}
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