// src/components/HomeView.js
import React, { useState, useMemo } from 'react';
import { quizQuestions } from '../data/quiz';

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
  setIsFullQuizOpen,
  GuideContent
}) {
  const isTr = lang === 'tr';
  const hasUserActivity = 
    Object.keys(favorites).length > 0 || 
    Object.keys(completed).length > 0;

  // Kılavuz açık/kapalı durumu: İlk açılışta aktivite yoksa açık, varsa kapalı
  const [isGuideExpanded, setIsGuideExpanded] = useState(!hasUserActivity);

  // --- 1. LOCALSTORAGE VERİLERİNİN HESAPLANMASI ---
  const stats = useMemo(() => {
    // A) Quiz İstatistikleri
    let quizHistory = {};
    let goodQuestions = {};
    try {
      quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || {};
      goodQuestions = JSON.parse(localStorage.getItem('goodQuestions')) || {};
    } catch (e) {}

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
    const quizCoveragePercent = totalQuizQuestions > 0 
      ? ((uniqueAttempted / totalQuizQuestions) * 100).toFixed(1) 
      : 0;
    const goodQuestionsCount = Object.keys(goodQuestions).length;

    // B) Kelime Havuzu & Flashcard İstatistikleri
    let globalWordPool = {};
    let flashcardStats = {};
    try {
      globalWordPool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
      flashcardStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};
    } catch (e) {}

    const poolWords = Object.values(globalWordPool);
    const totalPoolWords = poolWords.length;
    const knownWordsCount = poolWords.filter(w => w.status === 'known').length;
    const learningWordsCount = poolWords.filter(w => w.status === 'unknown').length;

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
    const uniqueCardsReviewed = Object.keys(flashcardStats).length;

    // C) Kitap & Ders Tamamlama İstatistikleri
    const normalSections = bookSections.filter(s => !s.id.includes('On-Class'));
    const totalBookSections = normalSections.length || 85;
    const completedSectionsCount = Object.keys(completed).length;
    const completedPercent = totalBookSections > 0 
      ? Math.round((completedSectionsCount / totalBookSections) * 100) 
      : 0;

    const availableChapters = [...new Set(bookSections.map(sec => sec.chapter))].filter(Boolean);
    const totalChapters = availableChapters.length || 18;
    const completedChaptersCount = availableChapters.filter(ch => {
      const chSections = bookSections.filter(s => s.chapter === ch && !s.id.includes('On-Class'));
      return chSections.length > 0 && chSections.every(s => completed[s.id]);
    }).length;

    const totalFavoritesCount = Object.keys(favorites).length;

    // D) Yıldızlı Düzensiz Fiiller
    let starredVerbs = [];
    try {
      starredVerbs = JSON.parse(localStorage.getItem('starredIrregularVerbs')) || [];
    } catch (e) {}
    const starredVerbsCount = Array.isArray(starredVerbs) ? starredVerbs.length : 0;

    // E) Kitap İçi Alıştırmalar (ExerciseEngine)
    let questionStats = {};
    try {
      questionStats = JSON.parse(localStorage.getItem('questionStats')) || {};
    } catch (e) {}
    let exerciseCorrect = 0;
    let exerciseIncorrect = 0;
    Object.values(questionStats).forEach(s => {
      exerciseCorrect += (Number(s.correct) || 0);
      exerciseIncorrect += (Number(s.incorrect) || 0);
    });
    const totalExerciseAttempts = exerciseCorrect + exerciseIncorrect;

    // F) Genel Öğrenme İlerleme Endeksi (0 - 100)
    // Kitap tamamlama (%40), Quiz çözme (%35), Kelime öğrenme (%25)
    const progressSectionsScore = Math.min(100, completedPercent);
    const progressQuizScore = Math.min(100, (uniqueAttempted / 200) * 100);
    const progressVocabScore = Math.min(100, (knownWordsCount / 150) * 100);
    const overallProgress = Math.min(100, Math.round(
      (progressSectionsScore * 0.40) + 
      (progressQuizScore * 0.35) + 
      (progressVocabScore * 0.25)
    ));

    return {
      uniqueAttempted,
      totalQuizAttempts,
      totalQuizCorrect,
      totalQuizIncorrect,
      quizAccuracy,
      totalQuizQuestions,
      quizCoveragePercent,
      masteredCount,
      weakCount,
      goodQuestionsCount,

      totalPoolWords,
      knownWordsCount,
      learningWordsCount,
      totalFlashcardReviews,
      flashcardAccuracy,
      uniqueCardsReviewed,

      totalBookSections,
      completedSectionsCount,
      completedPercent,
      totalChapters,
      completedChaptersCount,
      totalFavoritesCount,
      starredVerbsCount,

      totalExerciseAttempts,
      exerciseCorrect,
      exerciseIncorrect,

      overallProgress
    };
  }, [completed, favorites, bookSections]);

  const getSecTitle = (secId) => {
    const sec = bookSections.find(s => s.id === secId);
    if (sec && sec.title) return sec.title;
    if (secId.includes('On-Class')) {
       const ch = secId.replace('On-Class-', '');
       return isTr ? `Ünite ${ch} Özeti` : `Chapter ${ch} Summary`;
    }
    return isTr ? 'Diyalog / Alıştırma' : 'Dialogue / Exercise';
  };

  // Seviye Rozeti Belirleme
  const getLevelBadge = (prog) => {
    if (prog >= 75) {
      return {
        badge: isTr ? "A2 Sınav Seviyesi" : "A2 Exam Ready",
        color: "text-emerald-400 bg-emerald-950/80 border-emerald-600",
        icon: "fa-solid fa-trophy"
      };
    }
    if (prog >= 45) {
      return {
        badge: isTr ? "A2 Hazırlık Aşaması" : "A2 Preparation",
        color: "text-brand-300 bg-brand-950/80 border-brand-600",
        icon: "fa-solid fa-rocket"
      };
    }
    if (prog >= 20) {
      return {
        badge: isTr ? "A1 İleri Düzey" : "A1 Advanced",
        color: "text-amber-300 bg-amber-950/80 border-amber-600",
        icon: "fa-solid fa-seedling"
      };
    }
    return {
      badge: isTr ? "A1 Başlangıç" : "A1 Beginner",
      color: "text-sky-300 bg-sky-950/80 border-sky-600",
      icon: "fa-solid fa-compass"
    };
  };

  const levelInfo = getLevelBadge(stats.overallProgress);

  return (
    <div className="space-y-8 max-w-6xl mx-auto w-full pb-8">
      {/* 1. ÜST BAŞLIK & GERİ DÖNÜŞ AKSİYONU */}
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Mijn Dashboard
            </h2>
            <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border shadow-sm flex items-center gap-1.5 ${levelInfo.color}`}>
              <i className={levelInfo.icon}></i>
              {levelInfo.badge}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {isTr 
              ? 'Hollandaca öğrenme ilerlemeniz, quiz performansınız ve çalışma notlarınız.' 
              : 'Your Dutch learning progress, quiz metrics, and study notes.'}
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

      {/* 2. GENEL İLERLEME VE SEVİYE KARTI (HERO BANNER) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950/50 border border-slate-700/80 p-5 sm:p-7 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-300 flex items-center gap-2">
                <i className="fa-solid fa-chart-line text-brand-400"></i>
                {isTr ? 'Genel A1 → A2 İlerleme Endeksi' : 'Overall A1 → A2 Progress Index'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-brand-300">
                %{stats.overallProgress}
              </span>
            </div>

            {/* İlerleme Çubuğu */}
            <div className="w-full bg-slate-800/90 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-700">
              <div 
                className="bg-gradient-to-r from-teal-500 via-brand-500 to-indigo-500 h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                style={{ width: `${Math.max(4, stats.overallProgress)}%` }}
              ></div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {isTr 
                ? `${stats.completedSectionsCount} ders tamamlandı, ${stats.uniqueAttempted} soru çözüldü ve ${stats.knownWordsCount} kelime hazneye eklendi.` 
                : `${stats.completedSectionsCount} sections completed, ${stats.uniqueAttempted} questions solved, and ${stats.knownWordsCount} words mastered.`}
            </p>
          </div>

          {/* Hızlı Aksiyon Butonları */}
          <div className="flex flex-wrap lg:flex-col gap-2 flex-shrink-0">
            {setIsFullQuizOpen && (
              <button
                onClick={() => setIsFullQuizOpen(true)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-900/30 transition-all active:scale-[0.98]"
              >
                <i className="fa-solid fa-graduation-cap"></i>
                {isTr ? 'Genel Sınav Çöz' : 'Full Quiz'}
              </button>
            )}

            {setActiveTab && (
              <div className="flex gap-2 flex-1 sm:flex-initial">
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className="flex-1 px-3 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/60 text-rose-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  title="Flashcards"
                >
                  <i className="fa-solid fa-clone text-[11px]"></i>
                  {isTr ? 'Kelimeler' : 'Flashcards'}
                </button>

                <button
                  onClick={() => setActiveTab('grammar')}
                  className="flex-1 px-3 py-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-800/60 text-indigo-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  title="Grammar"
                >
                  <i className="fa-solid fa-spell-check text-[11px]"></i>
                  {isTr ? 'Gramer' : 'Grammar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. DÖRT ANA METRİK KARTI (KPI CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KART 1: QUIZ DOĞRULUK & SORU SAYISI */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-slate-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400">
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
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-slate-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400">
              {isTr ? 'Kelime Havuzu' : 'Word Pool'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
              <i className="fa-solid fa-brain text-sm"></i>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                {stats.knownWordsCount}
              </span>
              <span className="text-xs font-bold text-slate-400">
                {isTr ? 'Öğrenildi' : 'Mastered'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {stats.learningWordsCount > 0 
                ? (isTr ? `${stats.learningWordsCount} kelime öğrenilme aşamasında` : `${stats.learningWordsCount} words in review`)
                : (isTr ? 'Tüm takip edilen kelimeler biliniyor' : 'All tracked words known')}
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
            <span>{isTr ? 'Havuzdaki Toplam:' : 'Total Pool:'}</span>
            <span className="font-extrabold text-slate-200">{stats.totalPoolWords} {isTr ? 'Kelime' : 'Words'}</span>
          </div>
        </div>

        {/* KART 3: DERS & KİTAP İLERLEMESİ */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-slate-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400">
              {isTr ? 'Kitap İlerlemesi' : 'Course Progress'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
              <i className="fa-solid fa-book-open text-sm"></i>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-brand-300">
                %{stats.completedPercent}
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
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-slate-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400">
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

      {/* 4. AYRINTILI ANALİZ GRUBU (QUIZ ANALİZİ + KELİME ANALİZİ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* SOL BLOK: QUIZ VE SINAV DETAYLARI */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <i className="fa-solid fa-clipboard-check text-teal-400"></i>
                {isTr ? 'Quiz & Sınav Detayları' : 'Quiz & Practice Breakdown'}
              </h3>
              <span className="text-xs font-extrabold text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-800/50">
                %{stats.quizCoveragePercent} {isTr ? 'Havuz Kapsamı' : 'Pool Coverage'}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                <span className="text-slate-400 flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                  {isTr ? 'Hatasız Ustalaşılan Sorular' : 'Mastered Questions (No Errors)'}
                </span>
                <span className="font-extrabold text-emerald-400">{stats.masteredCount}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                <span className="text-slate-400 flex items-center gap-2">
                  <i className="fa-solid fa-triangle-exclamation text-amber-400 text-xs"></i>
                  {isTr ? 'Tekrar Edilmesi Gerekenler (Zorlanılan)' : 'Questions Needing Review'}
                </span>
                <span className="font-extrabold text-amber-400">{stats.weakCount}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                <span className="text-slate-400 flex items-center gap-2">
                  <i className="fa-solid fa-thumbs-up text-brand-400 text-xs"></i>
                  {isTr ? 'Beğenilen Sorular (İyi Soru)' : 'Favorited / Quality Questions'}
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

        {/* SAĞ BLOK: KELİME & HAFIZA DETAYLARI */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <i className="fa-solid fa-spell-check text-rose-400"></i>
                {isTr ? 'Kelime Havuzu & Flashcard Analizi' : 'Vocabulary & Flashcards'}
              </h3>
              <span className="text-xs font-extrabold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-800/50">
                {stats.totalPoolWords} {isTr ? 'Kelime' : 'Words'}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                <span className="text-slate-400 flex items-center gap-2">
                  <i className="fa-solid fa-check text-emerald-400 text-xs"></i>
                  {isTr ? 'Öğrenildi / Biliyorum' : 'Known Words'}
                </span>
                <span className="font-extrabold text-emerald-400">{stats.knownWordsCount}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-700/60">
                <span className="text-slate-400 flex items-center gap-2">
                  <i className="fa-solid fa-xmark text-rose-400 text-xs"></i>
                  {isTr ? 'Çalışılıyor / Bilmiyorum' : 'Learning / In Progress'}
                </span>
                <span className="font-extrabold text-rose-400">{stats.learningWordsCount}</span>
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
                  {isTr ? 'Tekrar Edilen Kart Çeşitliliği' : 'Distinct Cards Reviewed'}
                </span>
                <span className="font-extrabold text-amber-300">{stats.uniqueCardsReviewed}</span>
              </div>
            </div>
          </div>

          {setActiveTab && (
            <button
              onClick={() => setActiveTab('flashcards')}
              className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-700/80 border border-slate-700 hover:border-rose-500/50 text-rose-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <i className="fa-solid fa-clone text-xs"></i>
              {isTr ? 'Flashcard Çalışmaya Başla' : 'Open Flashcards'}
            </button>
          )}
        </div>
      </div>

      {/* 5. FAVORİLERİM (NOTLARIYLA BİRLİKTE) */}
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

      {/* 6. TAMAMLANAN BÖLÜMLER */}
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

      {/* 7. KILAVUZ & REHBER (AKORDEON AÇILIR/KAPANIR) */}
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

