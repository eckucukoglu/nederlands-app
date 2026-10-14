// src/components/HomeView.js
import React, { useState, useMemo, useEffect } from 'react';
import { vocabulary } from '../data';
import { 
  quizQuestions, 
  matchingQuestions, 
  irregularVerbs, 
  grammarTenses, 
  grammarSyntax, 
  grammarForms, 
  dialoguesReading 
} from '../data/quizData';
import QuizModule from './QuizModule';

// Ünite Başlıkları ve Anlamları
const CHAPTER_INFO = {
  1: { tr: "Welkom (Tanışma & Başlangıç)", en: "Welkom (Welcome & Basics)", nl: "Welkom", icon: "fa-solid fa-handshake" },
  2: { tr: "In de kantine (Rutinler & Zaman)", en: "In de kantine (Routines & Time)", nl: "In de kantine", icon: "fa-solid fa-mug-saucer" },
  3: { tr: "In het café (Yeme-İçme & Sipariş)", en: "In het café (Ordering & Food)", nl: "In het café", icon: "fa-solid fa-utensils" },
  4: { tr: "Op straat (Sokakta & Günlük Yaşam)", en: "Op straat (On the Street)", nl: "Op straat", icon: "fa-solid fa-road" },
  5: { tr: "Op de markt (Pazarda & Alışveriş)", en: "Op de markt (At the Market)", nl: "Op de markt", icon: "fa-solid fa-basket-shopping" },
  6: { tr: "In een restaurant (Restoranda & Sosyal)", en: "In een restaurant (Restaurant)", nl: "In een restaurant", icon: "fa-solid fa-wine-glass" },
  7: { tr: "In een kledingzaak (Giyim & Alışveriş)", en: "In een kledingzaak (Clothing Store)", nl: "In een kledingzaak", icon: "fa-solid fa-shirt" },
  8: { tr: "Bij de makelaar (Emlakçıda & Konut)", en: "Bij de makelaar (Real Estate)", nl: "Bij de makelaar", icon: "fa-solid fa-house" },
  9: { tr: "Bij de huisarts (Doktorda & Sağlık)", en: "Bij de huisarts (At the Doctor)", nl: "Bij de huisarts", icon: "fa-solid fa-user-doctor" },
  10: { tr: "Bij de fietsenmaker (Bisiklet & Ulaşım)", en: "Bij de fietsenmaker (Bike Repair)", nl: "Bij de fietsenmaker", icon: "fa-solid fa-bicycle" },
  11: { tr: "Op een verjaardag (Doğum Günü & İş)", en: "Op een verjaardag (Birthday & Work)", nl: "Op een verjaardag", icon: "fa-solid fa-cake-candles" },
  12: { tr: "Naar de Evenementenhal (Etkinlikler)", en: "Naar de Evenementenhal (Events & Fairs)", nl: "Naar de Evenementenhal", icon: "fa-solid fa-ticket" },
  13: { tr: "Bij vrienden (Arkadaşlarda & Ziyaret)", en: "Bij vrienden (With Friends)", nl: "Bij vrienden", icon: "fa-solid fa-users" },
  14: { tr: "In de sportschool (Spor & Yaşam)", en: "In de sportschool (In the Gym)", nl: "In de sportschool", icon: "fa-solid fa-dumbbell" },
  15: { tr: "In de trein (Trende & Seyahat)", en: "In de trein (On the Train)", nl: "In de trein", icon: "fa-solid fa-train" },
  16: { tr: "Naar de bioscoop (Sinemada & Kültür)", en: "Naar de bioscoop (At the Cinema)", nl: "Naar de bioscoop", icon: "fa-solid fa-film" },
  17: { tr: "Thuis (Evde & Aile Yaşamı)", en: "Thuis (At Home)", nl: "Thuis", icon: "fa-solid fa-couch" },
  18: { tr: "Bij de politie (Poliste & Toplum)", en: "Bij de politie (At the Police)", nl: "Bij de politie", icon: "fa-solid fa-shield-halved" }
};

export default function HomeView({
  favorites = {},
  completed = {},
  goToSection,
  lang = 'tr',
  bookSections = [],
  lastTabBeforeHome,
  onReturn,
  getSectionTitle,
  setActiveTab,
  setCurrentChapter,
  setIsFullQuizOpen,
  GuideContent
}) {
  const isTr = lang === 'tr';
  const hasUserActivity = 
    Object.keys(favorites).length > 0 || 
    Object.keys(completed).length > 0;

  // Kılavuz açık/kapalı durumu: İlk açılışta aktivite yoksa açık, varsa kapalı
  const [isGuideExpanded, setIsGuideExpanded] = useState(!hasUserActivity);

  // Aktif İstatistik Sekmesi: 'overview' | 'questions' | 'vocabulary' | 'chapters'
  const [activeTabId, setActiveTabId] = useState('overview');

  // Soru Konu Filtresi: 'all' | 'chapters' | 'grammar'
  const [topicFilter, setTopicFilter] = useState('all');

  // Quiz Başlatma Modalı
  const [activeQuizTopic, setActiveQuizTopic] = useState(null);

  // Veri güncelleme sürümü (Quiz veya kart bittiğinde yeniden hesaplama tetiklemek için)
  const [statsVersion, setStatsVersion] = useState(0);

  useEffect(() => {
    const handleStorageUpdate = () => setStatsVersion(v => v + 1);
    window.addEventListener('wordStatusUpdated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('wordStatusUpdated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  // --- HESAPLAMA MOTORU (3 BOYUTLU ANALİZ & ORTALAMA İLERLEME) ---
  const stats = useMemo(() => {
    // statsVersion bağımlılığı yeniden hesaplamayı tetikler
    if (statsVersion < 0) return null;

    // ----------------------------------------------------
    // A) YEREL DEPOLAMA (LOCALSTORAGE) VERİLERİNİ ÇEK
    // ----------------------------------------------------
    let quizHistory = {};
    let goodQuestions = {};
    let globalWordPool = {};
    let flashcardStats = {};
    let starredVerbs = [];

    try {
      quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || {};
      goodQuestions = JSON.parse(localStorage.getItem('goodQuestions')) || {};
      globalWordPool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
      flashcardStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};
      starredVerbs = JSON.parse(localStorage.getItem('starredIrregularVerbs')) || [];
    } catch (e) {}

    // ----------------------------------------------------
    // B) 1. SÜTUN: SORULAR & QUIZ ANALİZİ (TOPIC / CHAPTER BAZLI)
    // ----------------------------------------------------
    const attemptedQIds = Object.keys(quizHistory);
    const uniqueAttempted = attemptedQIds.length;
    let totalQuizCorrect = 0;
    let totalQuizIncorrect = 0;
    let masteredCount = 0;
    let weakCount = 0;

    attemptedQIds.forEach(id => {
      const q = quizHistory[id] || {};
      const c = Number(q.correct) || 0;
      const inc = Number(q.incorrect) || 0;
      totalQuizCorrect += c;
      totalQuizIncorrect += inc;
      if (c > 0 && inc === 0) masteredCount++;
      if (inc > c) weakCount++;
    });

    const totalQuizAttempts = totalQuizCorrect + totalQuizIncorrect;
    const quizAccuracy = totalQuizAttempts > 0 
      ? Math.round((totalQuizCorrect / totalQuizAttempts) * 100) 
      : 0;
    const totalQuizQuestions = quizQuestions?.length || 2204;
    const goodQuestionsCount = Object.keys(goodQuestions).length;

    // Sorulardaki genel ilerleme yüzdesi (Çözülen soru / Toplam soru)
    const questionsProgressPercent = totalQuizQuestions > 0 
      ? Math.min(100, Math.round((uniqueAttempted / totalQuizQuestions) * 100)) 
      : 0;

    // Set'ler ile O(1) Hızlı Gramer/Beceri Kontrolü
    const grammarTensesSet = new Set(grammarTenses.map(q => q.id));
    const grammarSyntaxSet = new Set(grammarSyntax.map(q => q.id));
    const grammarFormsSet = new Set(grammarForms.map(q => q.id));
    const irregularVerbsSet = new Set(irregularVerbs.map(q => q.id));
    const dialoguesReadingSet = new Set(dialoguesReading.map(q => q.id));
    const matchingSet = new Set(matchingQuestions.map(q => q.id));

    // 24 Konuluk Detaylı Soru Listesi
    const rawTopics = [
      // 18 Ünite Konusu
      ...Array.from({ length: 18 }, (_, idx) => {
        const ch = idx + 1;
        const info = CHAPTER_INFO[ch] || {};
        return {
          id: `ch${ch}`,
          category: 'chapters',
          chapterNum: ch,
          titleTr: info.tr || `Ünite ${ch}`,
          titleEn: info.en || `Chapter ${ch}`,
          nlTitle: info.nl || `Hoofdstuk ${ch}`,
          icon: info.icon || "fa-solid fa-book",
          tags: [`summary_ch${ch}`, `dialogue_ch${ch}`, `ch${ch}`],
          matcher: (q) => {
            const tags = q.tags || [];
            return tags.includes(`summary_ch${ch}`) || 
                   tags.includes(`dialogue_ch${ch}`) || 
                   tags.includes(`ch${ch}`) || 
                   (q.id && (q.id.startsWith(`sum_ch${ch}_`) || q.id.startsWith(`ch${ch}_`)));
          }
        };
      }),
      // 6 Gramer ve Beceri Konusu
      {
        id: 'grammar_tenses',
        category: 'grammar',
        titleTr: 'Gramer: Fiil Zamanları (Tenses)',
        titleEn: 'Grammar: Verb Tenses',
        nlTitle: 'Grammatica: Werkwoordstijden',
        icon: 'fa-solid fa-clock-rotate-left',
        tags: ['grammar_tenses', 'tenses_perfectum', 'tenses_imperfectum', 'verbs_present'],
        matcher: (q) => grammarTensesSet.has(q.id)
      },
      {
        id: 'grammar_syntax',
        category: 'grammar',
        titleTr: 'Gramer: Cümle Dizilimi (Syntax & Bijzin)',
        titleEn: 'Grammar: Word Order & Syntax',
        nlTitle: 'Grammatica: Woordvolgorde',
        icon: 'fa-solid fa-diagram-project',
        tags: ['grammar_syntax', 'word_order', 'inversion', 'bijzin'],
        matcher: (q) => grammarSyntaxSet.has(q.id)
      },
      {
        id: 'grammar_forms',
        category: 'grammar',
        titleTr: 'Gramer: Formlar & Artikeller (De/Het & Ekler)',
        titleEn: 'Grammar: Forms & Articles (De/Het)',
        nlTitle: 'Grammatica: Lidwoorden & Vormen',
        icon: 'fa-solid fa-spell-check',
        tags: ['grammar_forms', 'articles', 'plural', 'adjectives', 'pronouns'],
        matcher: (q) => grammarFormsSet.has(q.id)
      },
      {
        id: 'irregular_verbs',
        category: 'grammar',
        titleTr: 'Düzensiz Fiiller (Onregelmatige Werkwoorden)',
        titleEn: 'Irregular Verbs',
        nlTitle: 'Onregelmatige Werkwoorden',
        icon: 'fa-solid fa-bolt',
        tags: ['irregular_verbs'],
        matcher: (q) => irregularVerbsSet.has(q.id)
      },
      {
        id: 'dialogues_reading',
        category: 'grammar',
        titleTr: 'Okuma Anlama & Diyaloglar',
        titleEn: 'Reading Comprehension & Dialogues',
        nlTitle: 'Lezen & Dialogen',
        icon: 'fa-solid fa-comments',
        tags: ['dialogues_reading'],
        matcher: (q) => dialoguesReadingSet.has(q.id)
      },
      {
        id: 'matching',
        category: 'grammar',
        titleTr: 'Eşleştirme & Kelime Bağlantıları',
        titleEn: 'Matching & Pairs',
        nlTitle: 'Matching Oefeningen',
        icon: 'fa-solid fa-link',
        tags: ['matching'],
        matcher: (q) => matchingSet.has(q.id)
      }
    ];

    // Konu Bazlı İstatistikleri Hesapla
    const topicStats = rawTopics.map(topic => {
      const topicQuestions = quizQuestions.filter(topic.matcher);
      const total = topicQuestions.length;
      let attempted = 0;
      let correct = 0;
      let incorrect = 0;
      let mastered = 0;
      let weak = 0;

      topicQuestions.forEach(q => {
        const hist = quizHistory[q.id];
        if (hist) {
          const c = Number(hist.correct) || 0;
          const inc = Number(hist.incorrect) || 0;
          if (c + inc > 0) {
            attempted++;
            correct += c;
            incorrect += inc;
            if (c > 0 && inc === 0) mastered++;
            if (inc > c) weak++;
          }
        }
      });

      const attempts = correct + incorrect;
      const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
      const progress = total > 0 ? Math.round((attempted / total) * 100) : 0;

      return {
        ...topic,
        total,
        attempted,
        correct,
        incorrect,
        mastered,
        weak,
        accuracy,
        progress
      };
    });

    // ----------------------------------------------------
    // C) 2. SÜTUN: KELİMELER & FLASHCARD ANALİZİ (ÜNİTE BAZLI)
    // ----------------------------------------------------
    const poolWords = Object.values(globalWordPool);
    const totalPoolWords = poolWords.length;

    let flashcardKnownTotal = 0;
    let flashcardUnknownTotal = 0;
    Object.values(flashcardStats).forEach(s => {
      flashcardKnownTotal += (Number(s.known) || 0);
      flashcardUnknownTotal += (Number(s.unknown) || 0);
    });
    const totalFlashcardReviews = flashcardKnownTotal + flashcardUnknownTotal;
    const flashcardAccuracy = totalFlashcardReviews > 0 
      ? Math.round((flashcardKnownTotal / totalFlashcardReviews) * 100) 
      : 0;

    // Ünite 1 - 18 Kelime Dağılımını Hesapla
    const chapterVocabStats = Array.from({ length: 18 }, (_, idx) => {
      const ch = idx + 1;
      const chCurriculumWords = vocabulary.filter(w => w.chapter === ch);
      
      let dialogueStatuses = {};
      try {
        dialogueStatuses = JSON.parse(localStorage.getItem(`dialogueWordStatuses_${ch}`)) || {};
      } catch (e) {}

      let learnedCount = 0;
      let learningCount = 0;

      chCurriculumWords.forEach(word => {
        const lowerNL = (word.nl || '').toLowerCase();
        const poolItem = globalWordPool[lowerNL];
        const fcItem = flashcardStats[word.id] || flashcardStats[lowerNL] || flashcardStats[word.nl];
        const diagStatus = dialogueStatuses[lowerNL];

        const isLearned = 
          poolItem?.status === 'known' || 
          fcItem?.lastStatus === 'known' || 
          (fcItem && fcItem.known > fcItem.unknown) || 
          diagStatus === 'known';

        const isLearning = !isLearned && (
          poolItem?.status === 'unknown' || 
          (fcItem && (fcItem.unknown > 0 || fcItem.known > 0)) || 
          diagStatus === 'unknown'
        );

        if (isLearned) learnedCount++;
        else if (isLearning) learningCount++;
      });

      // Havuzda olup bu üniteye ait özel eklenen kelimeler
      const extraPoolChWords = poolWords.filter(w => {
        if (w.chapter !== ch) return false;
        const lower = (w.nl || '').toLowerCase();
        return !chCurriculumWords.some(cw => (cw.nl || '').toLowerCase() === lower);
      });

      extraPoolChWords.forEach(w => {
        if (w.status === 'known') learnedCount++;
        else if (w.status === 'unknown') learningCount++;
      });

      const totalWords = chCurriculumWords.length + extraPoolChWords.length;
      const unstudied = Math.max(0, totalWords - learnedCount - learningCount);
      const progress = totalWords > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;
      const studiedTotal = learnedCount + learningCount;

      const info = CHAPTER_INFO[ch] || {};

      return {
        chapterNum: ch,
        titleTr: info.tr || `Ünite ${ch}`,
        titleEn: info.en || `Chapter ${ch}`,
        nlTitle: info.nl || `Hoofdstuk ${ch}`,
        icon: info.icon || "fa-solid fa-book",
        totalWords,
        learnedCount,
        learningCount,
        unstudied,
        studiedTotal,
        progress
      };
    });

    const totalBookWords = vocabulary.length || 1066;
    const totalLearnedWords = chapterVocabStats.reduce((acc, c) => acc + c.learnedCount, 0);
    const totalLearningWords = chapterVocabStats.reduce((acc, c) => acc + c.learningCount, 0);
    const wordsProgressPercent = totalBookWords > 0 
      ? Math.min(100, Math.round((totalLearnedWords / totalBookWords) * 100)) 
      : 0;

    // ----------------------------------------------------
    // D) 3. SÜTUN: BÖLÜM & ÜNİTE TAMAMLAMA ANALİZİ (SECTIONS)
    // ----------------------------------------------------
    const normalSections = bookSections.filter(s => !s.id.includes('On-Class'));
    const totalBookSections = normalSections.length || 85;
    const completedSectionsCount = normalSections.filter(s => completed[s.id]).length;
    const sectionsProgressPercent = totalBookSections > 0 
      ? Math.min(100, Math.round((completedSectionsCount / totalBookSections) * 100)) 
      : 0;

    const availableChapters = Array.from({ length: 18 }, (_, i) => i + 1);
    const chapterSectionStats = availableChapters.map(ch => {
      const chSections = bookSections.filter(s => s.chapter === ch && !s.id.includes('On-Class'));
      const summarySec = bookSections.find(s => s.chapter === ch && s.id.includes('On-Class'));
      const completedCount = chSections.filter(s => completed[s.id]).length;
      const totalCount = chSections.length;
      const isFullyDone = totalCount > 0 && completedCount === totalCount;
      const isSummaryDone = summarySec ? !!completed[summarySec.id] : false;
      const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
      const info = CHAPTER_INFO[ch] || {};

      return {
        chapterNum: ch,
        titleTr: info.tr || `Ünite ${ch}`,
        titleEn: info.en || `Chapter ${ch}`,
        nlTitle: info.nl || `Hoofdstuk ${ch}`,
        icon: info.icon || "fa-solid fa-book",
        totalCount,
        completedCount,
        isFullyDone,
        isSummaryDone,
        progress,
        sections: chSections,
        summarySection: summarySec
      };
    });

    const completedChaptersCount = chapterSectionStats.filter(c => c.isFullyDone).length;
    const totalFavoritesCount = Object.keys(favorites).length;
    const starredVerbsCount = Array.isArray(starredVerbs) ? starredVerbs.length : 0;

    // ----------------------------------------------------
    // E) BİRLEŞİK İLERLEME (OVERALL PROGRESS - 3 SÜTUNUN ORTALAMASI)
    // ----------------------------------------------------
    // Kullanıcının belirttiği gibi: Toplam kelimeler, üniteler ve sorulardaki durumun ortalaması
    const overallProgress = Math.min(100, Math.round(
      (sectionsProgressPercent + wordsProgressPercent + questionsProgressPercent) / 3
    ));

    return {
      // 1. Sorular
      uniqueAttempted,
      totalQuizAttempts,
      totalQuizCorrect,
      totalQuizIncorrect,
      quizAccuracy,
      totalQuizQuestions,
      masteredCount,
      weakCount,
      goodQuestionsCount,
      questionsProgressPercent,
      topicStats,

      // 2. Kelimeler
      totalPoolWords,
      totalBookWords,
      totalLearnedWords,
      totalLearningWords,
      totalFlashcardReviews,
      flashcardAccuracy,
      wordsProgressPercent,
      chapterVocabStats,

      // 3. Bölümler
      totalBookSections,
      completedSectionsCount,
      sectionsProgressPercent,
      totalChapters: 18,
      completedChaptersCount,
      chapterSectionStats,
      totalFavoritesCount,
      starredVerbsCount,

      // 4. Birleşik Ortalama
      overallProgress
    };
  }, [completed, favorites, bookSections, statsVersion]);

  const getSecTitle = (secId) => {
    const sec = bookSections.find(s => s.id === secId);
    if (sec && sec.title) return sec.title;
    if (secId.includes('On-Class')) {
       const ch = secId.replace('On-Class-', '');
       return isTr ? `Ünite ${ch} Özeti` : `Chapter ${ch} Summary`;
    }
    return isTr ? 'Diyalog / Alıştırma' : 'Dialogue / Exercise';
  };

  // Seviye Rozeti Belirleme (0 - 100 Birleşik Skora Göre)
  const getLevelBadge = (prog) => {
    if (prog >= 75) {
      return {
        badge: isTr ? "A2 Sınav Seviyesi" : "A2 Exam Ready",
        color: "text-emerald-300 bg-emerald-950/80 border-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
        icon: "fa-solid fa-trophy"
      };
    }
    if (prog >= 50) {
      return {
        badge: isTr ? "A2 Hazırlık Aşaması" : "A2 In Progress",
        color: "text-brand-300 bg-brand-950/80 border-brand-600 shadow-[0_0_12px_rgba(14,165,233,0.3)]",
        icon: "fa-solid fa-rocket"
      };
    }
    if (prog >= 25) {
      return {
        badge: isTr ? "A1 İleri Düzey" : "A1 Advanced",
        color: "text-amber-300 bg-amber-950/80 border-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
        icon: "fa-solid fa-seedling"
      };
    }
    return {
      badge: isTr ? "A1 Başlangıç" : "A1 Beginner",
      color: "text-sky-300 bg-sky-950/80 border-sky-600 shadow-[0_0_12px_rgba(56,189,248,0.2)]",
      icon: "fa-solid fa-compass"
    };
  };

  const levelInfo = getLevelBadge(stats.overallProgress);

  // Soru Konu Filtreleme
  const filteredTopics = useMemo(() => {
    if (topicFilter === 'chapters') return stats.topicStats.filter(t => t.category === 'chapters');
    if (topicFilter === 'grammar') return stats.topicStats.filter(t => t.category === 'grammar');
    return stats.topicStats;
  }, [stats.topicStats, topicFilter]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto w-full pb-10">
      
      {/* 0. ÖZEL KONU QUIZ MODALI */}
      {activeQuizTopic && (
        <QuizModule 
          tags={activeQuizTopic.tags}
          title={isTr ? `${activeQuizTopic.titleTr} Quiz` : `${activeQuizTopic.titleEn} Quiz`}
          onClose={() => {
            setActiveQuizTopic(null);
            setStatsVersion(v => v + 1);
          }}
        />
      )}

      {/* 1. ÜST BAŞLIK & GERİ DÖNÜŞ AKSİYONU */}
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Mijn Dashboard
            </h2>
            <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border flex items-center gap-1.5 ${levelInfo.color}`}>
              <i className={levelInfo.icon}></i>
              {levelInfo.badge}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {isTr 
              ? 'Dersler, kelimeler ve soru istatistiklerinizin dengeli ortalaması ve ayrıntılı analizleri.' 
              : 'Balanced progress across sections, vocabulary, and questions with deep analytics.'}
          </p>
        </div>

        {lastTabBeforeHome && lastTabBeforeHome !== 'home' && onReturn && (
          <button
            onClick={onReturn}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-300 hover:text-white border border-slate-700 hover:border-brand-500/50 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
            title={isTr ? 'Kaldığın ekrana geri dön' : 'Return to previous screen'}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{isTr ? 'Kaldığın Yere Dön' : 'Return'}{getSectionTitle ? `: ${getSectionTitle(lastTabBeforeHome)}` : ''}</span>
          </button>
        )}
      </div>

      {/* 2. GENEL İLERLEME (HERO BANNER - 3 SÜTUNLU ORTALAMA GÖSTERİMİ) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950/60 border border-slate-700/80 p-5 sm:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-6">
          {/* Üst Kısım: Genel Başlık, Yüzde ve Butonlar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
                <i className="fa-solid fa-chart-pie"></i>
                {isTr ? 'Birleşik Öğrenme İlerlemesi' : 'Combined Learning Progress'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">
                {isTr ? 'A1 → A2 Genel İlerleme Durumu' : 'A1 → A2 Overall Progress Index'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isTr 
                  ? 'İlerlemeniz: Bölümler, Kelimeler ve Sorulardaki başarı durumunuzun eşit ağırlıklı ortalamasıdır.' 
                  : 'Calculated as the equal average of your progress across Sections, Vocabulary, and Questions.'}
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-right">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-brand-300 to-indigo-300">
                  %{stats.overallProgress}
                </span>
                <span className="block text-[11px] font-semibold text-slate-400">
                  {isTr ? 'Ortalama İlerleme' : 'Average Progress'}
                </span>
              </div>
            </div>
          </div>

          {/* Ana İlerleme Çubuğu */}
          <div className="space-y-1.5">
            <div className="w-full bg-slate-800/90 rounded-full h-4 overflow-hidden p-0.5 border border-slate-700/80 shadow-inner">
              <div 
                className="bg-gradient-to-r from-teal-500 via-brand-500 to-indigo-500 h-full rounded-full transition-all duration-700 shadow-[0_0_14px_rgba(56,189,248,0.6)]"
                style={{ width: `${Math.max(3, stats.overallProgress)}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 px-1">
              <span>0% Başlangıç</span>
              <span className="font-mono text-slate-300">
                ( %{stats.sectionsProgressPercent} + %{stats.wordsProgressPercent} + %{stats.questionsProgressPercent} ) ÷ 3 = %{stats.overallProgress}
              </span>
              <span>100% Tam Yetkinlik</span>
            </div>
          </div>

          {/* 3 Boyutlu İlerleme Kartları (Pillars) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-slate-700/60">
            {/* Sütun 1: Bölüm & Dersler */}
            <div 
              onClick={() => setActiveTabId('chapters')}
              className="bg-slate-800/70 hover:bg-slate-800 p-3.5 rounded-2xl border border-indigo-900/50 hover:border-indigo-500/50 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-book-open text-xs"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-300">
                    {isTr ? 'Bölümler & Dersler' : 'Course Sections'}
                  </span>
                </div>
                <span className="text-base font-black text-indigo-400">
                  %{stats.sectionsProgressPercent}
                </span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden mb-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-sky-500 h-full rounded-full transition-all"
                  style={{ width: `${stats.sectionsProgressPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Tamamlanan:' : 'Completed:'}</span>
                <span className="font-bold text-slate-200">{stats.completedSectionsCount} / {stats.totalBookSections}</span>
              </div>
            </div>

            {/* Sütun 2: Kelimeler & Hazne */}
            <div 
              onClick={() => setActiveTabId('vocabulary')}
              className="bg-slate-800/70 hover:bg-slate-800 p-3.5 rounded-2xl border border-emerald-900/50 hover:border-emerald-500/50 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-brain text-xs"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-300">
                    {isTr ? 'Kelimeler & Hazne' : 'Vocabulary'}
                  </span>
                </div>
                <span className="text-base font-black text-emerald-400">
                  %{stats.wordsProgressPercent}
                </span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden mb-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all"
                  style={{ width: `${stats.wordsProgressPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Öğrenilen:' : 'Mastered:'}</span>
                <span className="font-bold text-slate-200">{stats.totalLearnedWords} / {stats.totalBookWords}</span>
              </div>
            </div>

            {/* Sütun 3: Sorular & Quizler */}
            <div 
              onClick={() => setActiveTabId('questions')}
              className="bg-slate-800/70 hover:bg-slate-800 p-3.5 rounded-2xl border border-teal-900/50 hover:border-teal-500/50 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-clipboard-question text-xs"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-300">
                    {isTr ? 'Sorular & Quizler' : 'Questions & Quizzes'}
                  </span>
                </div>
                <span className="text-base font-black text-teal-400">
                  %{stats.questionsProgressPercent}
                </span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden mb-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full transition-all"
                  style={{ width: `${stats.questionsProgressPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Çözülen Soru:' : 'Attempted:'}</span>
                <span className="font-bold text-slate-200">{stats.uniqueAttempted} / {stats.totalQuizQuestions}</span>
              </div>
            </div>
          </div>

          {/* Hızlı Aksiyon Butonları */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2">
            <div className="flex flex-wrap gap-2 flex-1">
              {setIsFullQuizOpen && (
                <button
                  onClick={() => setIsFullQuizOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-teal-950/40 transition-all active:scale-[0.98]"
                >
                  <i className="fa-solid fa-graduation-cap"></i>
                  {isTr ? 'Genel Sınav Çöz' : 'Start Full Quiz'}
                </button>
              )}

              {setActiveTab && (
                <>
                  <button
                    onClick={() => setActiveTab('flashcards')}
                    className="px-3.5 py-2.5 rounded-xl bg-rose-950/70 hover:bg-rose-900/90 border border-rose-800/60 text-rose-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <i className="fa-solid fa-clone text-xs"></i>
                    {isTr ? 'Flashcard Çalış' : 'Open Flashcards'}
                  </button>

                  <button
                    onClick={() => setActiveTab('grammar')}
                    className="px-3.5 py-2.5 rounded-xl bg-indigo-950/70 hover:bg-indigo-900/90 border border-indigo-800/60 text-indigo-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <i className="fa-solid fa-spell-check text-xs"></i>
                    {isTr ? 'Gramer Referansı' : 'Grammar Reference'}
                  </button>
                </>
              )}
            </div>

            <div className="text-[11px] text-slate-400 italic">
              <i className="fa-solid fa-circle-info mr-1 text-slate-500"></i>
              {isTr ? 'Ayrıntılı döküm için aşağıdaki sekmeleri kullanabilirsiniz.' : 'Select a tab below to inspect detailed metrics.'}
            </div>
          </div>
        </div>
      </div>

      {/* 3. İNTERAKTİF DETAY SEKMELERİ (NAVIGATION TABS) */}
      <div className="grid grid-cols-2 sm:flex sm:items-center sm:flex-wrap gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTabId('overview')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer w-full sm:w-auto ${
            activeTabId === 'overview'
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/30 border border-brand-400/50'
              : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <i className="fa-solid fa-table-cells-large text-xs flex-shrink-0"></i>
            <span className="sm:hidden">{isTr ? 'Genel Bakış' : 'Overview'}</span>
            <span className="hidden sm:inline">{isTr ? 'Genel Bakış & Metrikler' : 'Overview & Metrics'}</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTabId('questions')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer w-full sm:w-auto ${
            activeTabId === 'questions'
              ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/30 border border-teal-400/50'
              : 'bg-slate-800/80 text-slate-400 hover:text-teal-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <i className="fa-solid fa-clipboard-question text-xs flex-shrink-0"></i>
            <span className="sm:hidden">{isTr ? 'Sorular' : 'Questions'}</span>
            <span className="hidden sm:inline">{isTr ? 'Sorular & Konu İstatistikleri' : 'Questions & Topic Breakdown'}</span>
          </div>
          <span className="text-[10px] bg-slate-900/60 px-2 py-0.5 rounded-full font-mono flex-shrink-0">
            %{stats.questionsProgressPercent}
          </span>
        </button>

        <button
          onClick={() => setActiveTabId('vocabulary')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer w-full sm:w-auto ${
            activeTabId === 'vocabulary'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 border border-emerald-400/50'
              : 'bg-slate-800/80 text-slate-400 hover:text-emerald-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <i className="fa-solid fa-brain text-xs flex-shrink-0"></i>
            <span className="sm:hidden">{isTr ? 'Kelimeler' : 'Vocabulary'}</span>
            <span className="hidden sm:inline">{isTr ? 'Kelimeler & Ünite İstatistikleri' : 'Vocabulary by Chapter'}</span>
          </div>
          <span className="text-[10px] bg-slate-900/60 px-2 py-0.5 rounded-full font-mono flex-shrink-0">
            %{stats.wordsProgressPercent}
          </span>
        </button>

        <button
          onClick={() => setActiveTabId('chapters')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer w-full sm:w-auto ${
            activeTabId === 'chapters'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 border border-indigo-400/50'
              : 'bg-slate-800/80 text-slate-400 hover:text-indigo-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <i className="fa-solid fa-book-open text-xs flex-shrink-0"></i>
            <span className="sm:hidden">{isTr ? 'Bölümler' : 'Chapters'}</span>
            <span className="hidden sm:inline">{isTr ? 'Bölümler & Tamamlama' : 'Chapters & Completion'}</span>
          </div>
          <span className="text-[10px] bg-slate-900/60 px-2 py-0.5 rounded-full font-mono flex-shrink-0">
            %{stats.sectionsProgressPercent}
          </span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* SEKME 1: GENEL BAKIŞ & KPI METRİKLERİ                     */}
      {/* ======================================================== */}
      {activeTabId === 'overview' && (
        <div className="space-y-6">
          {/* 4 Ana Metrik Kartı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KART 1: QUIZ DOĞRULUK & SORU SAYISI */}
            <div 
              onClick={() => setActiveTabId('questions')}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-teal-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 group-hover:text-teal-300 transition-colors">
                  {isTr ? 'Quiz Başarısı' : 'Quiz Accuracy'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400">
                  <i className="fa-solid fa-bullseye text-sm"></i>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-slate-100">
                    {stats.totalQuizAttempts > 0 ? `%${stats.quizAccuracy}` : '--'}
                  </span>
                  <span className="text-xs font-bold text-teal-400">
                    {stats.totalQuizCorrect} {isTr ? 'Doğru' : 'Correct'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stats.uniqueAttempted} {isTr ? 'farklı soru çözüldü' : 'unique questions'}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Soru Havuzu:' : 'Question Pool:'}</span>
                <span className="font-extrabold text-slate-200">{stats.uniqueAttempted} / {stats.totalQuizQuestions}</span>
              </div>
            </div>

            {/* KART 2: KELİME DAĞARCIĞI */}
            <div 
              onClick={() => setActiveTabId('vocabulary')}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-emerald-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-300 transition-colors">
                  {isTr ? 'Kelime Havuzu' : 'Word Pool'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                  <i className="fa-solid fa-brain text-sm"></i>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    {stats.totalLearnedWords}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {isTr ? 'Öğrenildi' : 'Mastered'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stats.totalLearningWords > 0 
                    ? (isTr ? `${stats.totalLearningWords} kelime öğrenilme aşamasında` : `${stats.totalLearningWords} words in review`)
                    : (isTr ? 'Tüm takip edilen kelimeler biliniyor' : 'All tracked words known')}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Müfredat Kelimeleri:' : 'Curriculum Words:'}</span>
                <span className="font-extrabold text-slate-200">{stats.totalLearnedWords} / {stats.totalBookWords}</span>
              </div>
            </div>

            {/* KART 3: DERS & KİTAP İLERLEMESİ */}
            <div 
              onClick={() => setActiveTabId('chapters')}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-indigo-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-300 transition-colors">
                  {isTr ? 'Kitap İlerlemesi' : 'Course Progress'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                  <i className="fa-solid fa-book-open text-sm"></i>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-brand-300">
                    %{stats.sectionsProgressPercent}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {stats.completedSectionsCount} / {stats.totalBookSections}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stats.completedChaptersCount} / {stats.totalChapters} {isTr ? 'tam ünite tamamlandı' : 'full chapters done'}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Alınan Notlar:' : 'Favorites & Notes:'}</span>
                <span className="font-extrabold text-amber-400">{stats.totalFavoritesCount} {isTr ? 'Bölüm' : 'Sections'}</span>
              </div>
            </div>

            {/* KART 4: FLASHCARD & PRATİK TEKRARI */}
            <div 
              onClick={() => setActiveTabId('vocabulary')}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-rose-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 group-hover:text-rose-300 transition-colors">
                  {isTr ? 'Flashcard & Pratik' : 'Card Reviews'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400">
                  <i className="fa-solid fa-clone text-sm"></i>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-rose-300">
                    {stats.totalFlashcardReviews}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {isTr ? 'Tekrar' : 'Reviews'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stats.totalFlashcardReviews > 0 
                    ? (isTr ? `%${stats.flashcardAccuracy} kart doğruluk oranı` : `%${stats.flashcardAccuracy} card accuracy`)
                    : (isTr ? 'Henüz kart tekrarı yapılmadı' : 'No card reviews yet')}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isTr ? 'Yıldızlı Fiiller:' : 'Starred Verbs:'}</span>
                <span className="font-extrabold text-sky-400">{stats.starredVerbsCount} {isTr ? 'Fiil' : 'Verbs'}</span>
              </div>
            </div>
          </div>

          {/* İkili Özet Grubu (Quiz Özeti + Kelime Özeti) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* SOL: QUIZ & SINAV DETAYLARI */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                    <i className="fa-solid fa-clipboard-check text-teal-400"></i>
                    {isTr ? 'Quiz & Soru Özeti' : 'Quiz & Practice Summary'}
                  </h3>
                  <button 
                    onClick={() => setActiveTabId('questions')}
                    className="text-xs text-teal-300 hover:text-white underline font-semibold"
                  >
                    {isTr ? 'Tüm Konuları Gör →' : 'View All Topics →'}
                  </button>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                      {isTr ? 'Hatasız Ustalaşılan Sorular' : 'Mastered Questions'}
                    </span>
                    <span className="font-extrabold text-emerald-400">{stats.masteredCount}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-triangle-exclamation text-amber-400 text-xs"></i>
                      {isTr ? 'Tekrar Gerekenler (Zorlanılan)' : 'Questions Needing Review'}
                    </span>
                    <span className="font-extrabold text-amber-400">{stats.weakCount}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-thumbs-up text-brand-400 text-xs"></i>
                      {isTr ? 'Beğenilen Sorular (İyi Soru)' : 'Favorited Questions'}
                    </span>
                    <span className="font-extrabold text-brand-300">{stats.goodQuestionsCount}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-layer-group text-slate-400 text-xs"></i>
                      {isTr ? 'Toplam Soru Denemesi' : 'Total Practice Attempts'}
                    </span>
                    <span className="font-extrabold text-slate-200">{stats.totalQuizAttempts}</span>
                  </div>
                </div>
              </div>

              {setIsFullQuizOpen && (
                <button
                  onClick={() => setIsFullQuizOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-700/80 border border-slate-700 hover:border-teal-500/50 text-teal-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <i className="fa-solid fa-play text-xs"></i>
                  {isTr ? 'Tüm Sorulardan Quiz Başlat' : 'Start Full Quiz'}
                </button>
              )}
            </div>

            {/* SAĞ: KELİME & HAFIZA DETAYLARI */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                    <i className="fa-solid fa-spell-check text-emerald-400"></i>
                    {isTr ? 'Kelime Havuzu & Flashcard Özeti' : 'Vocabulary Summary'}
                  </h3>
                  <button 
                    onClick={() => setActiveTabId('vocabulary')}
                    className="text-xs text-emerald-300 hover:text-white underline font-semibold"
                  >
                    {isTr ? 'Ünite Kelimelerini Gör →' : 'View Vocabulary by Chapter →'}
                  </button>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-400 text-xs"></i>
                      {isTr ? 'Öğrenildi / Biliyorum' : 'Known Words'}
                    </span>
                    <span className="font-extrabold text-emerald-400">{stats.totalLearnedWords}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-xmark text-rose-400 text-xs"></i>
                      {isTr ? 'Çalışılıyor / Tekrarda' : 'Learning / In Progress'}
                    </span>
                    <span className="font-extrabold text-rose-400">{stats.totalLearningWords}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-bolt text-sky-400 text-xs"></i>
                      {isTr ? 'Yıldızlı Düzensiz Fiil Havuzu' : 'Starred Irregular Verbs'}
                    </span>
                    <span className="font-extrabold text-sky-400">{stats.starredVerbsCount}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <i className="fa-solid fa-repeat text-amber-400 text-xs"></i>
                      {isTr ? 'Toplam Kart Tekrar Sayısı' : 'Total Flashcard Repetitions'}
                    </span>
                    <span className="font-extrabold text-amber-300">{stats.totalFlashcardReviews}</span>
                  </div>
                </div>
              </div>

              {setActiveTab && (
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-700/80 border border-slate-700 hover:border-emerald-500/50 text-emerald-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <i className="fa-solid fa-clone text-xs"></i>
                  {isTr ? 'Flashcard Çalışmaya Başla' : 'Open Flashcards'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SEKME 2: SORULAR & KONU BAZLI İSTATİSTİKLER               */}
      {/* ======================================================== */}
      {activeTabId === 'questions' && (
        <div className="space-y-6">
          {/* Konu Filtre Butonları */}
          <div className="flex items-center justify-between flex-wrap gap-3 bg-slate-850 p-4 rounded-2xl border border-slate-700/80 shadow-md">
            <div>
              <h3 className="text-base font-extrabold text-slate-100 flex items-center gap-2">
                <i className="fa-solid fa-filter text-teal-400"></i>
                {isTr ? 'Konulara Göre Soru İstatistikleri' : 'Question Breakdown by Topic'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isTr 
                  ? 'Hangi üniteden veya gramer konusundan ne kadar soru çözdüğünüzü ve başarı yüzdenizi inceleyin.' 
                  : 'Track your solved questions, accuracy, and mastery level for every single chapter and grammar topic.'}
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setTopicFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  topicFilter === 'all'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isTr ? 'Tümü (24 Konu)' : 'All (24 Topics)'}
              </button>
              <button
                onClick={() => setTopicFilter('chapters')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  topicFilter === 'chapters'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isTr ? 'Üniteler (1-18)' : 'Chapters (1-18)'}
              </button>
              <button
                onClick={() => setTopicFilter('grammar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  topicFilter === 'grammar'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isTr ? 'Gramer & Beceriler' : 'Grammar & Skills'}
              </button>
            </div>
          </div>

          {/* Konu Kartları Izgarası */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTopics.map(topic => {
              const isMastered = topic.progress === 100;
              const hasStarted = topic.attempted > 0;

              return (
                <div 
                  key={topic.id}
                  className="bg-slate-850 hover:bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/50 p-4 rounded-2xl flex flex-col justify-between transition-all shadow-md group"
                >
                  <div>
                    {/* Başlık ve İkon */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                          <i className={`${topic.icon} text-sm`}></i>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-100 text-sm truncate group-hover:text-teal-300 transition-colors">
                            {isTr ? topic.titleTr : topic.titleEn}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {topic.nlTitle}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                        isMastered
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
                          : hasStarted
                            ? 'bg-teal-950/80 text-teal-300 border-teal-700'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {isMastered 
                          ? (isTr ? 'Tamamlandı' : 'Mastered')
                          : hasStarted 
                            ? `%${topic.progress}` 
                            : (isTr ? 'Başlanmadı' : 'New')}
                      </span>
                    </div>

                    {/* İlerleme Çubuğu */}
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden mb-3">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          isMastered 
                            ? 'bg-emerald-500' 
                            : 'bg-gradient-to-r from-teal-500 to-cyan-400'
                        }`}
                        style={{ width: `${Math.max(hasStarted ? 4 : 0, topic.progress)}%` }}
                      ></div>
                    </div>

                    {/* İstatistik Rakamları */}
                    <div className="grid grid-cols-3 gap-2 text-center bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 mb-3 text-xs">
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          {isTr ? 'Çözülen' : 'Solved'}
                        </span>
                        <span className="font-extrabold text-slate-200">
                          {topic.attempted} <span className="text-[10px] text-slate-500 font-normal">/ {topic.total}</span>
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          {isTr ? 'Doğruluk' : 'Accuracy'}
                        </span>
                        <span className="font-extrabold text-teal-400">
                          {topic.accuracy > 0 ? `%${topic.accuracy}` : '--'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          {isTr ? 'Doğru / Yanlış' : 'C / Inc'}
                        </span>
                        <span className="font-extrabold text-slate-200">
                          <span className="text-emerald-400">{topic.correct}</span>
                          <span className="text-slate-500 mx-0.5">/</span>
                          <span className="text-rose-400">{topic.incorrect}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Buton: Bu Konudan Quiz Başlat */}
                  <button
                    onClick={() => setActiveQuizTopic(topic)}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-teal-600 text-teal-300 hover:text-white border border-teal-800/60 hover:border-teal-500 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
                  >
                    <i className="fa-solid fa-play text-[10px]"></i>
                    <span>{isTr ? 'Bu Konudan Quiz Çöz' : 'Practice Topic'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SEKME 3: KELİMELER & ÜNİTE BAZLI İSTATİSTİKLER             */}
      {/* ======================================================== */}
      {activeTabId === 'vocabulary' && (
        <div className="space-y-6">
          {/* Kelime Üst Bilgilendirme Kartı */}
          <div className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-100 flex items-center gap-2">
                <i className="fa-solid fa-spell-check text-emerald-400"></i>
                {isTr ? 'Ünitelere Göre Kelime Durumu' : 'Vocabulary Breakdown by Chapter'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isTr 
                  ? 'Her ünitede kaç kelime öğrendiğinizi (biliyorum), kaçının çalışılma aşamasında olduğunu ve toplam ilerlemenizi görün.' 
                  : 'Track mastered words, words in review, and remaining vocabulary for all 18 chapters.'}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-700/80 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300 font-semibold">{isTr ? 'Öğrenildi' : 'Mastered'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="text-slate-300 font-semibold">{isTr ? 'Çalışılıyor' : 'In Review'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-400 font-semibold">{isTr ? 'Bekliyor' : 'Unstudied'}</span>
              </div>
            </div>
          </div>

          {/* 18 Ünite Kelime Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.chapterVocabStats.map(ch => {
              const learnedPct = ch.totalWords > 0 ? (ch.learnedCount / ch.totalWords) * 100 : 0;
              const learningPct = ch.totalWords > 0 ? (ch.learningCount / ch.totalWords) * 100 : 0;
              const isFullyLearned = ch.progress === 100;

              return (
                <div 
                  key={ch.chapterNum}
                  className="bg-slate-850 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col justify-between transition-all shadow-md group"
                >
                  <div>
                    {/* Başlık ve İlerleme Yüzdesi */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                          <i className={`${ch.icon} text-sm`}></i>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-100 text-sm truncate group-hover:text-emerald-300 transition-colors">
                            {isTr ? ch.titleTr : ch.titleEn}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {ch.nlTitle}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                        isFullyLearned
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
                          : ch.learnedCount > 0
                            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        %{ch.progress}
                      </span>
                    </div>

                    {/* Çok Segmentli Renkli İlerleme Çubuğu */}
                    <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden flex mb-3 border border-slate-800">
                      <div 
                        className="bg-emerald-500 h-full transition-all"
                        style={{ width: `${learnedPct}%` }}
                        title={`${ch.learnedCount} ${isTr ? 'Öğrenildi' : 'Mastered'}`}
                      ></div>
                      <div 
                        className="bg-amber-400 h-full transition-all"
                        style={{ width: `${learningPct}%` }}
                        title={`${ch.learningCount} ${isTr ? 'Çalışılıyor' : 'In Review'}`}
                      ></div>
                    </div>

                    {/* Sayısal Dağılım */}
                    <div className="grid grid-cols-3 gap-1.5 text-center bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 mb-3 text-xs">
                      <div>
                        <span className="block text-[10px] text-emerald-400 font-semibold">
                          {isTr ? 'Öğrenildi' : 'Mastered'}
                        </span>
                        <span className="font-extrabold text-slate-100">
                          {ch.learnedCount}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-amber-400 font-semibold">
                          {isTr ? 'Çalışılıyor' : 'Review'}
                        </span>
                        <span className="font-extrabold text-slate-100">
                          {ch.learningCount}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-semibold">
                          {isTr ? 'Toplam' : 'Total'}
                        </span>
                        <span className="font-extrabold text-slate-300">
                          {ch.totalWords}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Buton: Bu Ünitenin Flashcard'larını Aç */}
                  <button
                    onClick={() => {
                      if (setCurrentChapter) setCurrentChapter(ch.chapterNum);
                      if (setActiveTab) setActiveTab('flashcards');
                    }}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-800/60 hover:border-emerald-500 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
                  >
                    <i className="fa-solid fa-clone text-[10px]"></i>
                    <span>{isTr ? 'Bu Üniteyi Çalış' : 'Study Chapter Words'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SEKME 4: BÖLÜMLER & TAMAMLAMA ANALİZİ (CHAPTER SECTIONS)   */}
      {/* ======================================================== */}
      {activeTabId === 'chapters' && (
        <div className="space-y-6">
          {/* Bölüm Üst Bilgilendirme Kartı */}
          <div className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-100 flex items-center gap-2">
                <i className="fa-solid fa-book-open text-indigo-400"></i>
                {isTr ? 'Ünite ve Alt Bölüm Tamamlama Durumu' : 'Course & Section Progress'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isTr 
                  ? 'Her ünitenin alt bölümlerini (1.1, 1.2...) inceleyin; tamamlananları ve bekleyenleri görerek doğrudan istediğiniz bölüme geçin.' 
                  : 'Track your completion status across individual sections. Click any badge to jump directly into that exercise.'}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-700/80 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300 font-semibold">{isTr ? 'Tamamlandı' : 'Completed'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-400 font-semibold">{isTr ? 'Kalan' : 'Pending'}</span>
              </div>
            </div>
          </div>

          {/* 18 Ünite Bölüm Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.chapterSectionStats.map(ch => {
              return (
                <div 
                  key={ch.chapterNum}
                  className={`bg-slate-850 border rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all shadow-md ${
                    ch.isFullyDone 
                      ? 'border-emerald-700/60 bg-gradient-to-br from-slate-850 to-emerald-950/20' 
                      : 'border-slate-700/80 hover:border-indigo-500/50'
                  }`}
                >
                  <div>
                    {/* Ünite Başlığı ve Rozet */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                          ch.isFullyDone
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                            : 'bg-indigo-950/80 text-indigo-400 border-indigo-800/60'
                        }`}>
                          <i className={`${ch.icon} text-sm`}></i>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-100 text-sm truncate">
                            {isTr ? ch.titleTr : ch.titleEn}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {ch.completedCount} / {ch.totalCount} {isTr ? 'Bölüm Tamamlandı' : 'Sections Done'}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border flex-shrink-0 flex items-center gap-1 ${
                        ch.isFullyDone
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                          : ch.completedCount > 0
                            ? 'bg-indigo-950/80 text-indigo-300 border-indigo-700'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {ch.isFullyDone && <i className="fa-solid fa-check text-[10px]"></i>}
                        %{ch.progress}
                      </span>
                    </div>

                    {/* İlerleme Çubuğu */}
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden mb-4">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          ch.isFullyDone 
                            ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' 
                            : 'bg-gradient-to-r from-indigo-500 to-sky-400'
                        }`}
                        style={{ width: `${Math.max(ch.completedCount > 0 ? 5 : 0, ch.progress)}%` }}
                      ></div>
                    </div>

                    {/* Alt Bölüm Butonları (Pill'ler) */}
                    <div className="space-y-1.5 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {isTr ? 'Bölümler (Tıkla ve Git):' : 'Sections (Click to Open):'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ch.sections.map(sec => {
                          const isDone = !!completed[sec.id];
                          return (
                            <button
                              key={sec.id}
                              onClick={() => goToSection(sec.id)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                                isDone
                                  ? 'bg-emerald-950/70 border-emerald-600/70 text-emerald-300 hover:bg-emerald-800 hover:text-white'
                                  : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:bg-slate-750 hover:text-slate-200'
                              }`}
                              title={sec.title || sec.id}
                            >
                              <i className={`text-[10px] ${isDone ? 'fa-solid fa-check text-emerald-400' : 'fa-regular fa-circle text-slate-600'}`}></i>
                              <span>{sec.id}</span>
                            </button>
                          );
                        })}

                        {/* Summary / Özet Butonu */}
                        {ch.summarySection && (
                          <button
                            key={ch.summarySection.id}
                            onClick={() => goToSection(ch.summarySection.id)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                              ch.isSummaryDone
                                ? 'bg-amber-950/80 border-amber-500/70 text-amber-300 hover:bg-amber-800 hover:text-white'
                                : 'bg-slate-900/80 border-amber-900/50 text-amber-400/80 hover:bg-amber-950/50 hover:text-amber-300'
                            }`}
                            title={isTr ? 'Ünite Özeti' : 'Chapter Summary'}
                          >
                            <i className="fa-solid fa-chalkboard-user text-[10px]"></i>
                            <span>{isTr ? 'Özet' : 'Summary'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. FAVORİLERİM (NOTLARIYLA BİRLİKTE)                      */}
      {/* ======================================================== */}
      {Object.keys(favorites).length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-5 sm:p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <i className="fa-solid fa-star"></i> 
              {isTr ? 'Favorilerim & Özel Notlarım' : 'Favorites & Notes'}
            </h3>
            <span className="text-xs text-amber-300/80 font-semibold bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-800/40">
              {Object.keys(favorites).length} {isTr ? 'Kayıt' : 'Items'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(favorites).map(([secId, note]) => (
              <div 
                key={secId} 
                onClick={() => goToSection(secId)} 
                className="cursor-pointer bg-slate-800 p-4 rounded-xl border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:-translate-y-1 transition-all shadow-md group flex flex-col gap-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-slate-200 text-[15px] leading-snug group-hover:text-white transition-colors">
                    {secId.includes('On-Class') 
                      ? (isTr ? `Özet ${secId.replace('On-Class-','')}` : `Sum ${secId.replace('On-Class-','')}`) 
                      : secId} - {getSecTitle(secId)}
                  </h4>
                  <div className="bg-amber-900/30 p-1.5 rounded-lg flex items-center justify-center border border-amber-500/20 flex-shrink-0">
                    <i className="fa-solid fa-star text-amber-400 text-xs"></i>
                  </div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50 flex-1 relative overflow-hidden">
                  <i className="fa-solid fa-quote-left absolute top-2 left-2 text-slate-700 text-xl opacity-30"></i>
                  <p className="text-[13px] text-amber-200/90 italic line-clamp-3 leading-relaxed relative z-10 pl-4">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 6. TAMAMLANAN BÖLÜMLER LİSTESİ                            */}
      {/* ======================================================== */}
      {Object.keys(completed).length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-5 sm:p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i> 
              {isTr ? 'Tamamlanan Bölümler' : 'Completed Sections'}
            </h3>
            <span className="text-xs text-emerald-300/80 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
              {Object.keys(completed).length} {isTr ? 'Bölüm' : 'Sections'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {Object.keys(completed).map(secId => (
              <button 
                key={secId} 
                onClick={() => goToSection(secId)} 
                className="bg-slate-800/80 border border-emerald-700/50 text-emerald-400 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-600 hover:text-white hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(52,211,153,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-check text-[11px]"></i> 
                <span>
                  {secId.includes('On-Class') 
                    ? (isTr ? `Ünite ${secId.replace('On-Class-','')} Özeti` : `Chapter ${secId.replace('On-Class-','')} Summary`) 
                    : secId} - {getSecTitle(secId)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 7. KILAVUZ & REHBER (AKORDEON AÇILIR/KAPANIR)             */}
      {/* ======================================================== */}
      {GuideContent && (
        <div className="bg-slate-800/60 border border-slate-700/70 rounded-3xl p-5 sm:p-6 shadow-md transition-all">
          <button 
            type="button"
            onClick={() => setIsGuideExpanded(!isGuideExpanded)}
            className="w-full flex items-center justify-between text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-950/80 border border-brand-800/60 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform">
                <i className="fa-solid fa-book-open text-sm"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-brand-300 transition-colors">
                  {isTr ? 'Uygulama Kullanım Kılavuzu & İpuçları' : 'App Guide & Helpful Tips'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isTr ? 'Diyaloglar, kelime havuzu ve quiz sisteminin verimli kullanımı.' : 'Learn how to make the most of dialogues, pool, and quizzes.'}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-850 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
              <i className={`fa-solid fa-chevron-${isGuideExpanded ? 'up' : 'down'} text-xs`}></i>
            </div>
          </button>

          {isGuideExpanded && (
            <div className="mt-6 pt-6 border-t border-slate-700/80">
              <GuideContent lang={lang} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
