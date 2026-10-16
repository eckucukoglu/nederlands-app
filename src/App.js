// src/App.js
import React, { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import VocabularySection from './components/VocabularySection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import AuthModal from './components/AuthModal';
import IrregularVerbs from './components/IrregularVerbs';
import Grammar from './components/Grammar'; 
import QuizModule from './components/QuizModule'; 
import FloatingFeedback from './components/FloatingFeedback';
import AdminReports from './components/AdminReports';
import HomeView from './components/HomeView';

import { bookSections, vocabulary } from './data';
import { globalDictionary } from './data/globalDictionary';
import { auth, isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged, handleUserSyncOnLogin, pullFromCloud } from './firebase';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { speakDutch as speakDutchAudio } from './utils/speech';
import { calculateOverallProgress } from './utils/progress';

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
        {/* TANITIM KARTI */}
        <div className="bg-brand-900/20 border border-brand-500/30 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0 text-brand-400 mt-0.5 shadow-sm">
            <i className="fa-solid fa-graduation-cap text-lg"></i>
          </div>
          <div>
            <h4 className="font-bold text-brand-300 text-sm sm:text-base mb-1">Nederlands in Gang (A1 → A2) Etkileşimli Çalışma Portalı</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bu platform, <em>"Nederlands in Gang"</em> ders kitabını takip eden öğrenciler için geliştirilmiş <strong>ücretsiz, reklamsız ve açık kaynaklı</strong> modern bir öğrenme aracıdır. Hollandaca dil becerilerinizi (dinleme, okuma, kelime dağarcığı ve gramer) interaktif alıştırmalarla pekiştirmeniz için tasarlanmıştır.
            </p>
          </div>
        </div>

        {/* ANA ÖZELLİKLER GRİDİ */}
        <div>
          <h4 className="font-bold text-slate-100 text-base mb-4 flex items-center gap-2 border-b border-slate-800 pb-2.5">
            <i className="fa-solid fa-compass text-brand-400"></i>
            <span>Temel Özellikler ve Kullanım Rehberi</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* 1. Diyaloglar */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <i className="fa-solid fa-comments text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">1. Etkileşimli Diyaloglar & Ses Hızı Ayarı</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Her ünitedeki diyalogları konuşmacı renkleriyle ayrılmış olarak okuyun. Cümleleri tek tek dinleyebilir veya <strong>"Diyaloğu Dinle"</strong> butonuyla tümünü kesintisiz çalabilirsiniz. Analog hız baremiyle (<strong>0.6x - 1.4x</strong>) ses hızını dilediğiniz gibi ayarlayabilirsiniz.
              </p>
            </div>

            {/* 2. Okuma & Anlama */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <i className="fa-solid fa-book-open text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">2. Okuma & Anlama (Reading) Parçaları</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Her ünite için hazırlanan özgün okuma metinlerini sesli olarak dinleyin ve takip edin. Okuma parçalarındaki hızı da bağımsız olarak ayarlayabilir, ardından anlama (comprehension) sorularını çözerek bilginizi ölçebilirsiniz.
              </p>
            </div>

            {/* 3. Tıklanabilir Kelimeler & Havuz */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <i className="fa-solid fa-hand-pointer text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">3. Tıklanabilir Kelimeler & Kelime Havuzum</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Diyalog ve okuma metinlerindeki altı noktalı kelimelere tıklayarak Türkçe ve İngilizce karşılıklarını, örnek cümlelerini inceleyin. Kelimeleri tek tıkla <strong>"Biliyorum" (Yeşil)</strong> veya <strong>"Bilmiyorum" (Kırmızı)</strong> olarak işaretleyip kişisel <strong>Kelime Havuzunuza</strong> ekleyin.
              </p>
            </div>

            {/* 4. Flashcards */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <i className="fa-solid fa-clone text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">4. Akıllı Flashcards (Kelime Kartları)</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                3D çevirmeli kartlarla pratik yapın. İster seçtiğiniz ünitenin kelimelerini, ister site genelinde biriktirdiğiniz <strong>"Benim Kelime Havuzum"</strong> modunu çalışın. Sadece "Bilinmeyen" kelimeleri filtreleyebilir veya listenizi panoya kopyalayabilirsiniz.
              </p>
            </div>

            {/* 5. Gramer & Düzensiz Fiiller */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <i className="fa-solid fa-spell-check text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">5. Gramer Rehberi & Düzensiz Fiiller</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tüm A1/A2 Hollandaca dilbilgisi kurallarını ve tablolarını inceleyin. En sık kullanılan düzensiz fiillerin zaman çekimlerini (Imperfectum & Perfectum) öğrenin ve her konu için özel alıştırma testlerini çözün.
              </p>
            </div>

            {/* 6. Ünite Özetleri & Sınavlar */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <i className="fa-solid fa-chalkboard-user text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">6. Ünite Özetleri (Summary) & Quizler</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Her ünite sonundaki <strong>Özet (Summary)</strong> bölümünde sınıf ders notlarına dayalı özetler ve ünite sonu pratik testi (<strong>Practice</strong> butonu) yer alır. Üst menüdeki kep (🎓) simgesinden ise tüm konuları kapsayan <strong>Genel Sınav</strong>'a katılabilirsiniz.
              </p>
            </div>

            {/* 7. İlerleme & Favoriler */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <i className="fa-solid fa-circle-check text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">7. İlerleme Takibi & Favoriler</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tamamladığınız bölümleri yeşil tik (<i className="fa-solid fa-circle-check text-emerald-400"></i>) ile işaretleyerek Dashboard üzerinden ünite tamamlama yüzdenizi takip edin. Önemli bulduğunuz bölümlere özel notlar ekleyerek favorilere (<i className="fa-solid fa-star text-amber-400"></i>) kaydedin.
              </p>
            </div>

            {/* 8. Akıllı Arama & Bulut Eşitleme */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <i className="fa-solid fa-cloud-arrow-up text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">8. Çok Dilli Arama & Bulut Eşitleme</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Üst arama çubuğundan Hollandaca, Türkçe veya İngilizce kelimeleri anında bulun ve doğrudan sonuçlardan kelime durumunuzu güncelleyin. Profilinizle (<i className="fa-solid fa-circle-user"></i>) giriş yaptığınızda tüm ilerlemeniz ve kelimeleriniz buluta yedeklenir.
              </p>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        {/* INTRO CARD */}
        <div className="bg-brand-900/20 border border-brand-500/30 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0 text-brand-400 mt-0.5 shadow-sm">
            <i className="fa-solid fa-graduation-cap text-lg"></i>
          </div>
          <div>
            <h4 className="font-bold text-brand-300 text-sm sm:text-base mb-1">Nederlands in Gang (A1 → A2) Interactive Study Portal</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This platform is a <strong>free, ad-free, and open-source</strong> companion app for students studying the <em>"Nederlands in Gang"</em> textbook. It is carefully crafted to help you practice and reinforce listening, reading, vocabulary, and grammar through interactive exercises.
            </p>
          </div>
        </div>

        {/* CORE FEATURES GRID */}
        <div>
          <h4 className="font-bold text-slate-100 text-base mb-4 flex items-center gap-2 border-b border-slate-800 pb-2.5">
            <i className="fa-solid fa-compass text-brand-400"></i>
            <span>Core Features & User Guide</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* 1. Dialogues */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <i className="fa-solid fa-comments text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">1. Interactive Dialogues & Audio Speed</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Read chapter dialogues color-coded by speaker. Listen line-by-line or play the entire dialogue continuously with <strong>"Play Full Dialogue"</strong>. Adjust playback speed using the analog slider (<strong>0.6x - 1.4x</strong>).
              </p>
            </div>

            {/* 2. Reading Comprehension */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <i className="fa-solid fa-book-open text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">2. Reading Passages & Comprehension</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Listen and read along with dedicated reading texts crafted for each chapter. Fine-tune speech speed, inspect unfamiliar words, and test your understanding with comprehension quiz questions.
              </p>
            </div>

            {/* 3. Clickable Words & Word Pool */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <i className="fa-solid fa-hand-pointer text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">3. Clickable Words & My Word Pool</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click any dotted word in dialogues and reading passages to see its English and Turkish definitions with examples. Mark words as <strong>"Known" (Green)</strong> or <strong>"Unknown" (Red)</strong> to instantly save them to your personal <strong>Word Pool</strong>.
              </p>
            </div>

            {/* 4. Flashcards */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <i className="fa-solid fa-clone text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">4. Smart Vocabulary Flashcards</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practice vocabulary with interactive 3D cards. Study words specific to a chapter or switch to <strong>"My Word Pool"</strong> to review all interacted words. Filter by "Unknown" words, shuffle cards, or copy vocabulary to your clipboard.
              </p>
            </div>

            {/* 5. Grammar & Verbs */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <i className="fa-solid fa-spell-check text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">5. Grammar Reference & Irregular Verbs</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore comprehensive A1/A2 grammar rules, structured summary tables, and exceptions. Master essential irregular verbs across present, imperfect, and perfect tenses with built-in practice quizzes.
              </p>
            </div>

            {/* 6. Summaries & Quizzes */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <i className="fa-solid fa-chalkboard-user text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">6. Chapter Summaries & Quizzes</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review classroom lecture notes and key takeaways in the <strong>Summary</strong> section. Take quick chapter tests via the <strong>Practice</strong> button or launch the comprehensive <strong>Full Quiz</strong> (🎓).
              </p>
            </div>

            {/* 7. Progress & Favorites */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <i className="fa-solid fa-circle-check text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">7. Progress Tracking & Bookmarks</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mark sections, reading passages, and summaries as completed (<i className="fa-solid fa-circle-check text-emerald-400"></i>) to monitor your chapter completion on the Dashboard. Bookmark important sections with personal notes (<i className="fa-solid fa-star text-amber-400"></i>).
              </p>
            </div>

            {/* 8. Search & Cloud Sync */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <i className="fa-solid fa-cloud-arrow-up text-xs"></i>
                </div>
                <strong className="text-slate-100 text-sm font-bold">8. Multilingual Search & Cloud Sync</strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Search across Dutch, Turkish, and English terms with instant reverse lookup. Sign in with your account (<i className="fa-solid fa-circle-user"></i>) to keep your word pool and progress securely synchronized across all devices.
              </p>
            </div>
          </div>
        </div>
      </>
    )}

    {/* EN ALTTA GITHUB BAĞLANTISI */}
    <div className="bg-slate-800/80 border border-slate-700/80 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-sm">
      <div className="flex items-center gap-3 text-center sm:text-left">
        <div className="w-10 h-10 rounded-xl bg-slate-700/60 border border-slate-600/60 flex items-center justify-center text-slate-200 flex-shrink-0 shadow-inner">
          <i className="fa-brands fa-github text-xl"></i>
        </div>
        <div>
          <strong className="block text-slate-100 text-sm font-bold">
            {lang === 'tr' ? 'Açık Kaynak Kodlu Proje' : 'Open Source Project'}
          </strong>
          <span className="text-xs text-slate-400">
            {lang === 'tr' 
              ? 'Kaynak kodları inceleyebilir, projeye katkıda bulunabilir veya GitHub üzerinden yıldız verebilirsiniz.' 
              : 'Feel free to review the source code, contribute, or star the repository on GitHub.'}
          </span>
        </div>
      </div>
      <a 
        href="https://github.com/eckucukoglu/nederlands-app" 
        target="_blank" 
        rel="noreferrer" 
        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2.5 rounded-xl transition-all font-semibold text-xs shadow-sm hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
      >
        <i className="fa-brands fa-github text-base"></i>
        <span>GitHub Repository</span>
        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-0.5 opacity-70"></i>
      </a>
    </div>
  </div>
);

// --- ANA SAYFA (HOME VIEW) BİLEŞENİ ARTIK src/components/HomeView.js DOSYASINDA ---






function MainContent({ user, setIsAuthModalOpen, isAuthModalOpen }) {
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

  const [lastTabBeforeHome, setLastTabBeforeHome] = useState(() => {
    const saved = localStorage.getItem('lastTabBeforeHome');
    if (saved && saved !== 'home') return saved;
    const savedTab = localStorage.getItem(`lastVisitedTab_${currentChapter}`);
    if (savedTab && savedTab !== 'home') return savedTab;
    return `${currentChapter}.1`;
  });

  useEffect(() => {
    if (activeTab !== 'home') {
      setLastTabBeforeHome(activeTab);
      localStorage.setItem('lastTabBeforeHome', activeTab);
    }
  }, [activeTab]);



  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearchedQuery, setLastSearchedQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState(null);

  const [isChapterExpanded, setIsChapterExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const [isFullQuizOpen, setIsFullQuizOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

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

  // Genel İlerleme Durumu ve Başlık İlerleme Barı (Soldan Sağa Dinamik Arka Plan)
  const [progressVersion, setProgressVersion] = useState(0);

  useEffect(() => {
    const handleProgressUpdate = () => setProgressVersion(v => v + 1);
    window.addEventListener('wordStatusUpdated', handleProgressUpdate);
    window.addEventListener('progressUpdated', handleProgressUpdate);
    window.addEventListener('storage', handleProgressUpdate);
    return () => {
      window.removeEventListener('wordStatusUpdated', handleProgressUpdate);
      window.removeEventListener('progressUpdated', handleProgressUpdate);
      window.removeEventListener('storage', handleProgressUpdate);
    };
  }, []);

  const overallStats = useMemo(() => {
    if (progressVersion < 0) return null;
    return calculateOverallProgress({ completed, favorites, bookSections });
  }, [completed, favorites, progressVersion]);

  const headerProgressPercent = Math.max(0, Math.min(100, overallStats?.overallProgress || 0));

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

  const getSectionSortWeight = (id) => {
    if (id.startsWith('On-Class-')) return 2;
    if (id.startsWith('Reading-')) return 1;
    return 0;
  };

  const currentSections = bookSections
    .filter(sec => sec.chapter === currentChapter)
    .sort((a, b) => getSectionSortWeight(a.id) - getSectionSortWeight(b.id));
  const currentIndex = currentSections.findIndex(sec => sec.id === activeTab);

  const isSummaryMode = activeTab.startsWith('On-Class-');
  const isReadingMode = activeTab.startsWith('Reading-');
  const isDialogueMode = activeTab.endsWith('.1') && !isSummaryMode && !isReadingMode;
  const isVocabularyMode = activeTab.endsWith('.2') && !isSummaryMode && !isReadingMode;

  const isChapterFullyCompleted = (chNum) => {
    const chapterSections = bookSections.filter(s => s.chapter === chNum);
    if (chapterSections.length === 0) return false;
    return chapterSections.every(s => completed[s.id]);
  };

  const goToSection = (secId) => {
    let chapter = fallbackChapter;
    if (secId.startsWith('On-Class-')) {
      chapter = Number(secId.replace('On-Class-', ''));
    } else if (secId.startsWith('Reading-')) {
      chapter = Number(secId.replace('Reading-', ''));
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

  const isAnyModalOrQuizActive = () => {
    if (isFullQuizOpen || isInfoModalOpen || isFeedbackOpen || isAuthModalOpen || customWordModal.isOpen) return true;
    if (typeof document !== 'undefined' && document.querySelector('[data-quiz-module="true"]')) return true;
    return false;
  };

  const goToNextSection = () => {
    if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
    if (isAnyModalOrQuizActive()) return;
    if (currentIndex === -1) return;

    if (currentIndex < currentSections.length - 1) {
      setPreviousTab(currentSections[currentIndex].id);
      setActiveTab(currentSections[currentIndex + 1].id);
    } else {
      // Summary'deyiz: bir sonraki chapter'a geç
      const chIdx = availableChapters.indexOf(currentChapter);
      if (chIdx !== -1 && chIdx < availableChapters.length - 1) {
        const nextCh = availableChapters[chIdx + 1];
        const nextSections = bookSections
          .filter(sec => sec.chapter === nextCh)
          .sort((a, b) => getSectionSortWeight(a.id) - getSectionSortWeight(b.id));
        const targetId = nextSections.length > 0 ? nextSections[0].id : `${nextCh}.1`;
        setPreviousTab(currentSections[currentIndex].id);
        setCurrentChapter(nextCh);
        setActiveTab(targetId);
      }
    }
  };

  const goToPrevSection = () => {
    if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
    if (isAnyModalOrQuizActive()) return;
    if (currentIndex === -1) return;

    if (currentIndex > 0) {
      setPreviousTab(currentSections[currentIndex].id);
      setActiveTab(currentSections[currentIndex - 1].id);
    } else {
      // .1 section'ındayız: Chapter 1 hariç, bir önceki chapter'ın summary kısmına geç
      const chIdx = availableChapters.indexOf(currentChapter);
      if (chIdx > 0) {
        const prevCh = availableChapters[chIdx - 1];
        const prevSummaryId = `On-Class-${prevCh}`;
        setPreviousTab(currentSections[currentIndex].id);
        setCurrentChapter(prevCh);
        setActiveTab(prevSummaryId);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
      if (isAnyModalOrQuizActive()) return;

      if (e.key === 'ArrowLeft') {
        goToPrevSection();
      } else if (e.key === 'ArrowRight') {
        goToNextSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, currentSections, currentChapter, activeTab, isFullQuizOpen, isInfoModalOpen, isFeedbackOpen, isAuthModalOpen, customWordModal.isOpen]);

  const handleTouchStart = (e) => {
    if (isAnyModalOrQuizActive()) return;
    if (e.target?.closest?.('[data-quiz-module="true"]')) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (activeTab === 'flashcards' || activeTab === 'verbs' || activeTab === 'grammar' || activeTab === 'home') return;
    if (isAnyModalOrQuizActive()) return;
    if (e.target?.closest?.('[data-quiz-module="true"]')) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) {
        goToNextSection();
      } else {
        goToPrevSection();
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
    speakDutchAudio(text);
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
    if (activeTab !== 'home') {
      localStorage.setItem(`lastVisitedTab_${currentChapter}`, activeTab);
    }
  }, [activeTab, currentChapter]);

  const handleChapterChange = (e) => {
    const newChapter = Number(e.target.value);
    setCurrentChapter(newChapter);
    const savedTab = localStorage.getItem(`lastVisitedTab_${newChapter}`);
    
    if (savedTab && !savedTab.includes('On-Class') && savedTab !== 'home') {
       setActiveTab(savedTab);
    } else {
       setActiveTab(`${newChapter}.1`);
    }
  };

  const getSectionTitle = (secId) => {
    if (!secId || secId === 'home') return "Dashboard";
    if (secId === 'flashcards') return "Flashcards";
    if (secId === 'verbs') return lang === 'tr' ? "Düzensiz Fiiller" : "Irregular Verbs";
    if (secId === 'grammar') return lang === 'tr' ? "Gramer Referansı" : "Grammar Reference";
    if (secId.includes('On-Class')) {
       const ch = secId.replace('On-Class-', '');
       return lang === 'tr' ? `Ünite ${ch} - Özet` : `Chapter ${ch} - Summary`;
    }
    if (secId.includes('Reading')) {
       const ch = secId.replace('Reading-', '');
       return lang === 'tr' ? `Ünite ${ch} - Okuma & Anlama` : `Chapter ${ch} - Reading Comprehension`;
    }
    if (secId.endsWith('.1')) {
       const ch = secId.split('.')[0];
       return lang === 'tr' ? `Ünite ${ch} - Diyalog` : `Chapter ${ch} - Dialogue`;
    }
    if (secId.endsWith('.2')) {
       const ch = secId.split('.')[0];
       return lang === 'tr' ? `Ünite ${ch} - Vocabulary` : `Chapter ${ch} - Vocabulary`;
    }
    const sec = bookSections.find(s => s.id === secId);
    if (sec && sec.title) {
      const titleStr = typeof sec.title === 'object' ? (sec.title[lang] || sec.title.tr || sec.title.en) : sec.title;
      const clean = String(titleStr).replace(new RegExp(`^(?:${secId.replace('.', '\\.')}\\s*[-–:]?\\s*)+`, 'i'), '').trim();
      return clean ? `${secId} - ${clean}` : secId;
    }
    return `${secId} (${lang === 'tr' ? "Alıştırma" : "Exercise"})`;
  };

  const handleTitleClick = () => {
    setIsChapterExpanded(false); 
    setIsSearchExpanded(false);

    if (activeTab === 'home') {
      const target = lastTabBeforeHome || localStorage.getItem('lastTabBeforeHome') || `${currentChapter}.1`;
      if (target.startsWith('On-Class-')) {
        const ch = Number(target.replace('On-Class-', ''));
        if (!isNaN(ch) && availableChapters.includes(ch)) {
          setCurrentChapter(ch);
        }
      } else if (target.startsWith('Reading-')) {
        const ch = Number(target.replace('Reading-', ''));
        if (!isNaN(ch) && availableChapters.includes(ch)) {
          setCurrentChapter(ch);
        }
      } else if (target.includes('.')) {
        const ch = Number(target.split('.')[0]);
        if (!isNaN(ch) && availableChapters.includes(ch)) {
          setCurrentChapter(ch);
        }
      }
      setActiveTab(target);
    } else {
      setLastTabBeforeHome(activeTab);
      setActiveTab('home');
    }
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
      className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300 w-full max-w-full relative overflow-x-clip"
      style={{ overflowX: 'clip' }}
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



      {/* 1. HEADER (SADECE BU KISIM SABİT - ARKA PLAN İLERLEME BARI ENTEGRELİ) */}
      <header className="bg-slate-950/95 backdrop-blur-md text-white shadow-md sticky top-0 z-50 border-b border-slate-800 flex-none w-full relative transition-colors">
        
        {/* ARKA PLAN DİNAMİK İLERLEME BARI (Soldan Sağa Ambient Dolgu - Sadece arka planı sınırlar, menülerin taşmasını engellemez) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {headerProgressPercent > 0 && (
            <>
              {/* 1. DİNAMİK AMBIENT DOLGU (Soldan Sağa Yumuşak Aurora Akışı) */}
              <div 
                className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
                style={{ width: `${headerProgressPercent}%` }}
              >
                {/* Ana Arka Plan Degrade Dolgusu (Bitiş ucu dikey düz kesik olmasın diye maskImage ile yumuşakça karararak erir) */}
                <div 
                  className="w-full h-full bg-gradient-to-r from-teal-500/10 via-sky-500/15 to-indigo-500/15"
                  style={{
                    maskImage: 'linear-gradient(to right, black calc(100% - 48px), rgba(0,0,0,0.4) calc(100% - 12px), transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black calc(100% - 48px), rgba(0,0,0,0.4) calc(100% - 12px), transparent 100%)'
                  }}
                />

                {/* 2. UÇ NOKTADAKİ ELEGANT AURORA IŞIK SÜZMESİ (Dümdüz dikey çizgi yerine açılı ve buğulu dinamik ışık) */}
                {/* Geniş yumuşak atmosferik ışıma (Halo / Aurora) */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-32 h-20 bg-teal-400/15 blur-2xl rounded-full pointer-events-none" />

                {/* Açılı, zarif ışık huzmesi (Slanted Light Sheen - -skew-x-[22deg]) */}
                <div className="absolute -right-8 top-0 bottom-0 w-16 -skew-x-[22deg] origin-bottom-right bg-gradient-to-r from-transparent via-teal-400/20 to-transparent blur-sm pointer-events-none" />
                
                {/* İnce tatlı ışık vurgusu (Dikey değil, tatlı bir açıyla yukarıdan aşağıya süzülen hat) */}
                <div className="absolute -right-2 top-0 bottom-0 w-6 -skew-x-[22deg] origin-bottom-right bg-gradient-to-b from-transparent via-teal-300/30 to-transparent blur-[1px] pointer-events-none" />
              </div>

              {/* 3. İNCE ALT KENAR İLERLEME ÇİZGİSİ & PARLAYAN KOMET UCU */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] transition-all duration-1000 ease-out"
                style={{ width: `${headerProgressPercent}%` }}
              >
                {/* Ray çizgisi (Hafif degradeli neon) */}
                <div className="w-full h-full bg-gradient-to-r from-teal-500/40 via-sky-400/70 to-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />

                {/* Uç Noktadaki Mücevher / Komet Işıltısı (Noktasal Parlama & Flare) */}
                <div className="absolute right-0 bottom-0 translate-x-1/2 mb-[1px] flex items-center justify-center pointer-events-none">
                  {/* Dış buğulu hale */}
                  <div className="absolute w-6 h-6 rounded-full bg-teal-400/25 blur-sm" />
                  {/* Yatay mini ışık hüzmesi */}
                  <div className="absolute w-6 h-[2px] bg-gradient-to-r from-transparent via-teal-200 to-white blur-[0.5px] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
                  {/* Merkez parlak kristal nokta */}
                  <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-teal-200 via-white to-sky-200 shadow-[0_0_8px_rgba(45,212,191,1),0_0_3px_#fff]" />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-2.5 flex flex-nowrap justify-between items-center gap-1.5 sm:gap-2 relative z-10">
          
          <div 
            className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0 min-w-0 cursor-pointer group select-none"
            onClick={handleTitleClick}
            title={activeTab === 'home' 
              ? (lang === 'tr' ? 'Kaldığın Ekrana Dön' : 'Return to Previous Screen')
              : (lang === 'tr' 
                  ? `Mijn Dashboard (Genel İlerleme: %${overallStats.overallProgress} • ${overallStats.currentTier?.titleTr || ''})` 
                  : `Dashboard (Overall Progress: %${overallStats.overallProgress} • ${overallStats.currentTier?.titleEn || ''})`)
            }
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 relative ${
              activeTab === 'home' 
                ? 'bg-brand-600 text-white border-2 border-brand-300 shadow-[0_0_14px_rgba(14,165,233,0.8)] ring-2 ring-brand-300/60' 
                : 'bg-brand-950/40 text-brand-400 hover:bg-brand-900/50 hover:text-brand-300 border border-brand-500/30'
            }`}>
              <i className="fa-solid fa-book-medical text-base sm:text-xl"></i>
            </div>
            <div className="hidden sm:block truncate">
              <div className="flex items-center gap-2">
                <h1 className={`font-bold text-base sm:text-lg leading-tight truncate transition-colors ${
                  activeTab === 'home' ? 'text-brand-300' : 'text-slate-100 group-hover:text-brand-300'
                }`}>Nederlands in Gang</h1>
                {overallStats.overallProgress > 0 && (
                  <span 
                    className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-teal-950/70 border border-teal-500/40 text-teal-300 font-mono tracking-tight shadow-sm"
                    title={lang === 'tr' ? `Genel Müfredat İlerlemeniz: %${overallStats.overallProgress}` : `Overall Progress: %${overallStats.overallProgress}`}
                  >
                    %{overallStats.overallProgress}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-brand-400/80 truncate">Interactief Oefenportaal (A1 → A2)</p>
            </div>
            
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 overflow-visible">
            {/* 1. QUIZ BUTONU */}
            <button 
              onClick={() => {
                setIsFullQuizOpen(!isFullQuizOpen);
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isFullQuizOpen 
                  ? 'bg-teal-600 text-white border-2 border-teal-300 shadow-[0_0_14px_rgba(20,184,166,0.8)] ring-2 ring-teal-300/60' 
                  : 'bg-teal-950/50 text-teal-400 hover:bg-teal-900/60 hover:text-teal-200 border border-teal-800/50 shadow-sm'
              }`}
              title={lang === 'tr' ? 'Genel Sınav & Full Quiz' : 'Full Quiz Mode'}
            >
              <i className="fa-solid fa-graduation-cap text-base sm:text-lg"></i>
            </button>

            {/* 2. FLASHCARDS BUTONU */}
            <button 
              onClick={() => {
                if (activeTab === 'flashcards') {
                  setActiveTab(previousTab || 'home');
                } else {
                  if (activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'grammar' && !activeTab.startsWith('On-Class-') && !activeTab.startsWith('Reading-')) setPreviousTab(activeTab);
                  setActiveTab("flashcards");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                activeTab === 'flashcards' 
                  ? 'bg-rose-600 text-white border-2 border-rose-300 shadow-[0_0_14px_rgba(244,63,94,0.8)] ring-2 ring-rose-300/60' 
                  : 'bg-rose-950/50 text-rose-400 hover:bg-rose-900/60 hover:text-rose-200 border border-rose-800/50 shadow-sm'
              }`}
              title={t('flashcards')}
            >
              <i className="fa-solid fa-clone text-base sm:text-lg"></i>
            </button>

            {/* 3. GRAMMAR REFERANSI BUTONU */}
            <button 
              onClick={() => {
                if (activeTab === 'grammar') {
                  setActiveTab(previousTab || 'home');
                } else {
                  if (activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'flashcards' && !activeTab.startsWith('On-Class-') && !activeTab.startsWith('Reading-')) setPreviousTab(activeTab);
                  setActiveTab("grammar");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                activeTab === 'grammar' 
                  ? 'bg-indigo-600 text-white border-2 border-indigo-300 shadow-[0_0_14px_rgba(99,102,241,0.8)] ring-2 ring-indigo-300/60' 
                  : 'bg-indigo-950/50 text-indigo-400 hover:bg-indigo-900/60 hover:text-indigo-200 border border-indigo-800/50 shadow-sm'
              }`}
              title={lang === 'tr' ? 'Gramer Referansı' : 'Grammar Reference'}
            >
              <i className="fa-solid fa-spell-check text-base sm:text-lg"></i>
            </button>

            {/* 4. DÜZENSİZ FİİLLER (VERBS) BUTONU */}
            <button 
              onClick={() => {
                if (activeTab === 'verbs') {
                  setActiveTab(previousTab || 'home');
                } else {
                  if (activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'grammar' && !activeTab.startsWith('On-Class-') && !activeTab.startsWith('Reading-')) setPreviousTab(activeTab);
                  setActiveTab("verbs");
                }
                setIsChapterExpanded(false); 
                setIsSearchExpanded(false);
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                activeTab === 'verbs' 
                  ? 'bg-sky-600 text-white border-2 border-sky-300 shadow-[0_0_14px_rgba(14,165,233,0.8)] ring-2 ring-sky-300/60' 
                  : 'bg-sky-950/50 text-sky-400 hover:bg-sky-900/60 hover:text-sky-200 border border-sky-800/50 shadow-sm'
              }`}
              title={lang === 'tr' ? 'Düzensiz Fiiller' : 'Irregular Verbs'}
            >
              <i className="fa-solid fa-bolt text-base sm:text-lg"></i>
            </button>

            {/* 5. AUTH / PROFİL BUTONU (Login Olmuşsa Yeşil) */}
            <button 
              onClick={() => {
                setIsAuthModalOpen(true);
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center relative cursor-pointer ${
                user 
                  ? (isAuthModalOpen 
                      ? 'bg-emerald-600 text-white border-2 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.9)] ring-2 ring-emerald-300/60' 
                      : 'bg-emerald-950/50 text-emerald-400 hover:bg-emerald-900/60 hover:text-emerald-200 border border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.25)]')
                  : (isAuthModalOpen
                      ? 'bg-cyan-600 text-white border-2 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.9)] ring-2 ring-cyan-300/60'
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/60 shadow-sm')
              }`}
              title={t('accountSync')}
            >
              <i className={`fa-solid fa-circle-user text-base sm:text-lg ${user ? (isAuthModalOpen ? 'text-white' : 'text-emerald-400') : ''}`}></i>
              {user && (
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-slate-950 rounded-full shadow-[0_0_6px_rgba(52,211,153,1)]"></div>
              )}
            </button>

            {/* ARAMA BUTONU */}
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
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                  (isMobileSearchOpen || isSearchExpanded)
                    ? 'bg-brand-600 text-white border-2 border-brand-300 shadow-[0_0_14px_rgba(14,165,233,0.8)] ring-2 ring-brand-300/60' 
                    : 'bg-slate-800/80 text-slate-400 hover:text-brand-300 hover:bg-slate-800 border border-slate-700/60 shadow-sm'
                }`}
                title={t('searchTitle')}
              >
                <i className="fa-solid fa-magnifying-glass text-base sm:text-lg"></i>
              </button>

              {isSearchExpanded && searchResults && searchResults.length > 0 && (
                <div className="hidden sm:block absolute right-0 top-full mt-3 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-2xl z-50 min-w-[280px] max-w-[320px] max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                  {renderSearchResults()}
                </div>
              )}
            </div>

            <div className="h-5 sm:h-6 w-[1px] bg-slate-800 mx-0.5 flex-shrink-0"></div>

            {/* CHAPTER MENÜSÜ */}
            <div className="relative flex items-center" ref={chapterMenuRef}>
              <button
                onClick={() => { 
                  setIsChapterExpanded(!isChapterExpanded); 
                  setIsSearchExpanded(false); 
                }}
                className={`flex items-center justify-center h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-full font-extrabold text-xs sm:text-xs transition-all border shadow-sm flex-shrink-0 cursor-pointer ${
                  isChapterExpanded 
                    ? 'bg-brand-600 text-white border-2 border-brand-300 shadow-[0_0_14px_rgba(14,165,233,0.8)] ring-2 ring-brand-300/60' 
                    : 'bg-slate-800/80 text-slate-200 border-slate-700/70 hover:bg-slate-700 hover:text-white'
                }`}
                title={t('changeChapter')}
              >
                {/* Mobilde kompakt Ü17, masaüstünde tam metin */}
                <span className="sm:hidden whitespace-nowrap flex items-center gap-1">
                   {lang === 'tr' ? 'Ü' : 'Ch'}{currentChapter}
                   {isChapterFullyCompleted(currentChapter) && <i className="fa-solid fa-circle-check text-emerald-400 text-[10px]"></i>}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap">
                   {lang === 'tr' ? 'Ünite' : 'Chapter'} {currentChapter}
                   {isChapterFullyCompleted(currentChapter) && <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>}
                </span>
                <i className={`fa-solid fa-chevron-${isChapterExpanded ? 'up' : 'down'} ml-1.5 text-[9px] transition-transform`}></i>
              </button>

              {isChapterExpanded && (
                <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col py-1.5 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                  {availableChapters.map(ch => {
                    const isFullyCompleted = isChapterFullyCompleted(ch);
                    return (
                      <button
                        key={ch}
                        onClick={() => {
                          handleChapterChange({ target: { value: ch }});
                          setIsChapterExpanded(false); 
                        }}
                        className={`w-full px-4 py-3 flex flex-col text-left text-sm transition-colors cursor-pointer ${currentChapter === ch ? 'bg-slate-700/50 text-brand-300 font-bold border-l-4 border-brand-400' : 'text-slate-300 hover:bg-slate-700/30 border-l-4 border-transparent'}`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="font-bold">{lang === 'tr' ? 'Ünite' : 'Chapter'} {ch}</span>
                          {isFullyCompleted && <i className="fa-solid fa-circle-check text-emerald-400"></i>}
                        </div>
                        {chapterTitles[ch] && <span className="text-[11px] text-slate-400 mt-0.5 truncate">{chapterTitles[ch]}</span>}
                      </button>
                    );
                  })}
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

      {/* 3. SECTION BAR (SUMMARY VS NORMAL SECTIONS RENDER) */}
      <div 
        className={`bg-slate-900/95 backdrop-blur-sm border-slate-800 w-full max-w-full overflow-hidden shadow-inner flex-none transition-all duration-300 relative ${
          isSectionBarOverflowing ? 'h-0 invisible opacity-0 pointer-events-none' : 'border-b opacity-100'
        }`}
      >
        <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-center relative min-h-[44px]">
          
          <div 
            ref={sectionMeasureRef} 
            className="w-full max-w-full overflow-x-auto hide-scroll whitespace-nowrap flex justify-center items-center gap-2 px-10 sm:px-12" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center justify-center flex-nowrap gap-1.5 sm:gap-2 px-1 flex-shrink-0">
              {currentSections.map(sec => {
                const isActive = activeTab === sec.id;
                const isC = completed[sec.id];
                const isF = favorites[sec.id];
                const isSummary = sec.id.startsWith('On-Class-');
                const isReading = sec.id.startsWith('Reading-');
                const isDialogue = sec.id.endsWith('.1');
                const isVocabulary = sec.id.endsWith('.2');
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
                      isActive 
                        ? (isSummary ? 'bg-amber-600 text-white border-amber-500 z-10' : isReading ? 'bg-indigo-600 text-white border-indigo-500 z-10' : isVocabulary ? 'bg-purple-600 text-white border-purple-500 z-10' : 'bg-brand-600 text-white border-brand-500 z-10')
                        : (isSummary ? 'bg-amber-950/40 text-amber-300 border-amber-800/60 hover:bg-amber-900/50 hover:text-amber-200' : isReading ? 'bg-indigo-950/40 text-indigo-300 border-indigo-800/60 hover:bg-indigo-900/50 hover:text-indigo-200' : isVocabulary ? 'bg-purple-950/40 text-purple-300 border-purple-800/60 hover:bg-purple-900/50 hover:text-purple-200' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-slate-200')
                    }`}
                  >
                    {isSummary && <i className="fa-solid fa-chalkboard-user text-[10px]"></i>}
                    {isReading && <i className="fa-solid fa-book-open text-[10px]"></i>}
                    {isDialogue && <i className="fa-solid fa-comments text-[10px]"></i>}
                    {isVocabulary && <i className="fa-solid fa-spell-check text-[10px]"></i>}
                    <span>{isSummary ? (lang === 'tr' ? 'Özet' : 'Summary') : isReading ? (lang === 'tr' ? 'Okuma' : 'Reading') : isDialogue ? (lang === 'tr' ? 'Diyalog' : 'Dialogue') : isVocabulary ? 'Vocabulary' : sec.id}</span>
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

          {/* SAĞ TARAF AKSİYONLARI */}
          <div className="absolute right-3 sm:right-4 z-10 flex items-center gap-2 sm:gap-2.5">
            {/* SABİT GERİ BİLDİRİM (+) BUTONU */}
            <button 
              type="button"
              onClick={() => setIsFeedbackOpen(true)}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-brand-300 border border-slate-700 hover:border-brand-500/60 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 group flex-shrink-0"
              title={lang === 'tr' ? 'Geri Bildirim / Öneri Ekle (+)' : 'Add Feedback / Suggestion (+)'}
            >
              <i className="fa-solid fa-plus text-xs group-hover:rotate-90 transition-transform duration-200"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBİL ZARİF İLERLEME ÇUBUĞU */}
      {isSectionBarOverflowing && (
        <div className="w-full relative px-3 sm:px-4 py-2 bg-slate-900 border-b border-slate-800 shadow-inner flex-none z-40" ref={mobileMenuRef}>
          <div className="max-w-3xl mx-auto flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex-1 border rounded-2xl p-2.5 sm:p-3 shadow-sm flex flex-col gap-2 transition-all ${isMobileMenuOpen ? 'bg-slate-800 border-brand-500' : 'bg-slate-800 border-slate-700'}`}
            >
            <div className="flex items-center justify-between w-full">
              <span className="text-slate-200 text-sm font-bold truncate text-left">
                {activeTab === 'home' ? 'Dashboard' : (activeTab === 'flashcards' ? t('flashcards') : activeTab === 'verbs' ? (lang === 'tr' ? 'Düzensiz Fiiller' : 'Irregular Verbs') : activeTab === 'grammar' ? (lang === 'tr' ? 'Gramer Referansı' : 'Grammar Reference') : (isSummaryMode ? (lang === 'tr' ? `Ünite ${currentChapter} - Özet` : `Chapter ${currentChapter} - Summary`) : isReadingMode ? (lang === 'tr' ? `Ünite ${currentChapter} - Okuma & Anlama` : `Chapter ${currentChapter} - Reading Comprehension`) : isDialogueMode ? (lang === 'tr' ? `Ünite ${currentChapter} - Diyalog` : `Chapter ${currentChapter} - Dialogue`) : isVocabularyMode ? (lang === 'tr' ? `Ünite ${currentChapter} - Vocabulary` : `Chapter ${currentChapter} - Vocabulary`) : (lang === 'tr' ? `Bölüm ${activeTab}` : `Section ${activeTab}`)))}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar' && activeTab !== 'home' && (
                  <span className="text-[10px] font-extrabold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-700">
                    {`${currentIndex + 1} / ${currentSections.length}`}
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
                const isSummary = sec.id.startsWith('On-Class-');
                const isReading = sec.id.startsWith('Reading-');
                return (
                  <div key={sec.id} className="relative flex-1 h-1.5 flex justify-center">
                     <div className={`w-full h-full rounded-full transition-all duration-300 ${
                       isActive 
                         ? (isSummary ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]' : isReading ? 'bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]' : 'bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]')
                         : 'bg-slate-700'
                     }`}></div>
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

          <button
            type="button"
            onClick={() => setIsFeedbackOpen(true)}
            className="w-7 h-7 flex-shrink-0 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-brand-300 border border-slate-700 hover:border-brand-500/60 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group"
            title={lang === 'tr' ? 'Geri Bildirim / Öneri Ekle (+)' : 'Add Feedback / Suggestion (+)'}
          >
            <i className="fa-solid fa-plus text-xs group-hover:rotate-90 transition-transform duration-200"></i>
          </button>
        </div>

          {isMobileMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl mt-2 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col py-1.5 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600">
                {currentSections.map(sec => {
                  const isC = completed[sec.id];
                  const isF = favorites[sec.id];
                  const isSummary = sec.id.startsWith('On-Class-');
                  const isReading = sec.id.startsWith('Reading-');
                  const isDialogue = sec.id.endsWith('.1');
                  const isVocabulary = sec.id.endsWith('.2');
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
                      className={`w-full px-4 py-3 flex items-center justify-between text-sm transition-colors ${
                        activeTab === sec.id 
                          ? (isSummary ? 'bg-slate-700/50 text-amber-300 font-bold border-l-4 border-amber-400' : isReading ? 'bg-slate-700/50 text-indigo-300 font-bold border-l-4 border-indigo-400' : isVocabulary ? 'bg-slate-700/50 text-purple-300 font-bold border-l-4 border-purple-400' : 'bg-slate-700/50 text-brand-300 font-bold border-l-4 border-brand-400')
                          : 'text-slate-300 hover:bg-slate-700/30 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex flex-col text-left truncate pr-2 flex-1">
                        <span className="truncate">
                          {isSummary 
                            ? (lang === 'tr' ? `Ünite ${sec.chapter} - Özet` : `Chapter ${sec.chapter} - Summary`)
                            : isReading
                            ? (lang === 'tr' ? `Ünite ${sec.chapter} - Okuma & Anlama` : `Chapter ${sec.chapter} - Reading Comprehension`)
                            : isDialogue
                            ? (lang === 'tr' ? `Ünite ${sec.chapter} - Diyalog` : `Chapter ${sec.chapter} - Dialogue`)
                            : isVocabulary
                            ? (lang === 'tr' ? `Ünite ${sec.chapter} - Vocabulary` : `Chapter ${sec.chapter} - Vocabulary`)
                            : getSectionTitle(sec.id)
                          }
                        </span>
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
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 text-slate-200 flex flex-col relative min-w-0 overflow-x-hidden">
        
        {activeTab === 'home' && (
          <HomeView 
            favorites={favorites} 
            completed={completed} 
            goToSection={goToSection} 
            lang={lang} 
            bookSections={bookSections}
            lastTabBeforeHome={lastTabBeforeHome}
            onReturn={handleTitleClick}
            getSectionTitle={getSectionTitle}
            setActiveTab={setActiveTab}
            setCurrentChapter={setCurrentChapter}
            setIsFullQuizOpen={setIsFullQuizOpen}
            GuideContent={GuideContent}
          />
        )}

        {(activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'grammar' && activeTab !== 'flashcards' && activeTab.endsWith('.1') && !isSummaryMode) && (
          <DialogueSection 
            sectionId={activeTab} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            completed={completed} 
            toggleCompleted={toggleCompleted} 
          />
        )}

        {(activeTab !== 'home' && activeTab !== 'verbs' && activeTab !== 'grammar' && activeTab !== 'flashcards' && activeTab.endsWith('.2') && !isSummaryMode) && (
          <VocabularySection 
            sectionId={activeTab} 
            chapterNum={currentChapter}
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            completed={completed} 
            toggleCompleted={toggleCompleted} 
          />
        )}
        
        {activeTab !== 'home' && activeTab !== 'flashcards' && activeTab !== 'verbs' && activeTab !== 'grammar' && bookSections.find(s => s.id === activeTab) && !activeTab.endsWith('.1') && !activeTab.endsWith('.2') && (
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
      <FloatingFeedback isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // YENİ EKLENEN KISIM: URL'yi kontrol et
  const currentPath = window.location.pathname;
  const isAdminRoute = currentPath === '/feedbacks';
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      // Firebase kullanıcının kim olduğunu anladıktan sonra admin sayfasındaysak devam et.
      if (isAdminRoute) {
        setIsAppReady(true);
        return; 
      }
	  
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
  }, [isAdminRoute]);

  if (!isAppReady) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-brand-400">
        <i className="fa-solid fa-cloud-arrow-down text-6xl animate-bounce mb-4"></i>
        <h2 className="text-xl font-bold text-slate-200">Yükleniyor / Loading...</h2>
        <p className="text-sm text-slate-500 mt-2">Lütfen bekleyin / Please wait.</p>
      </div>
    );
  }
  
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-slate-950">
        <AdminReports />
      </div>
    );
  }

  return (
    <LanguageProvider>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} user={user} />
      <MainContent user={user} isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen} />
    </LanguageProvider>
  );
}