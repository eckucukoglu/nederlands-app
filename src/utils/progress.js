// src/utils/progress.js
import { bookSections as defaultBookSections, vocabulary } from '../data';
import { quizQuestions } from '../data/quizData';

export const CHAPTER_INFO = {
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
  11: { tr: "Op een verjaardag (Doğum Günü & İş)", en: "Op een verjaardag (Birthday & Work)", nl: "Op bir verjaardag", icon: "fa-solid fa-cake-candles" },
  12: { tr: "Naar de Evenementenhal (Etkinlikler)", en: "Naar de Evenementenhal (Events & Fairs)", nl: "Naar de Evenementenhal", icon: "fa-solid fa-ticket" },
  13: { tr: "Bij vrienden (Arkadaşlarda & Ziyaret)", en: "Bij vrienden (With Friends)", nl: "Bij vrienden", icon: "fa-solid fa-users" },
  14: { tr: "In de sportschool (Spor & Yaşam)", en: "In de sportschool (In the Gym)", nl: "In de sportschool", icon: "fa-solid fa-dumbbell" },
  15: { tr: "In de trein (Trende & Seyahat)", en: "In de trein (On the Train)", nl: "In de trein", icon: "fa-solid fa-train" },
  16: { tr: "Naar de bioscoop (Sinemada & Kültür)", en: "Naar de bioscoop (At the Cinema)", nl: "Naar de bioscoop", icon: "fa-solid fa-film" },
  17: { tr: "Thuis (Evde & Aile Yaşamı)", en: "Thuis (At Home)", nl: "Thuis", icon: "fa-solid fa-couch" },
  18: { tr: "Bij de politie (Poliste & Toplum)", en: "Bij de politie (At the Police)", nl: "Bij de politie", icon: "fa-solid fa-shield-halved" }
};

// 10 Kademeli Deneyim (XP) ve Seviye Sistemi (10.000 XP Tavan)
export const LEVEL_TIERS = [
  { level: 1, minXp: 0, maxXp: 500, titleTr: "Acemi Kaşif", titleEn: "Beginner Explorer", rank: "A1.1", icon: "fa-solid fa-compass", color: "from-sky-500 to-blue-600", badgeColor: "text-sky-300 bg-sky-950/80 border-sky-600 shadow-[0_0_10px_rgba(56,189,248,0.2)]" },
  { level: 2, minXp: 500, maxXp: 1200, titleTr: "Hevesli Öğrenci", titleEn: "Eager Learner", rank: "A1.1", icon: "fa-solid fa-seedling", color: "from-emerald-500 to-teal-600", badgeColor: "text-emerald-300 bg-emerald-950/80 border-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.2)]" },
  { level: 3, minXp: 1200, maxXp: 2200, titleTr: "Kelime Avcısı", titleEn: "Word Hunter", rank: "A1.2", icon: "fa-solid fa-brain", color: "from-teal-500 to-cyan-600", badgeColor: "text-teal-300 bg-teal-950/80 border-teal-600 shadow-[0_0_10px_rgba(20,184,166,0.2)]" },
  { level: 4, minXp: 2200, maxXp: 3400, titleTr: "Cümle Mimarı", titleEn: "Sentence Builder", rank: "A1.2", icon: "fa-solid fa-cubes", color: "from-indigo-500 to-blue-600", badgeColor: "text-indigo-300 bg-indigo-950/80 border-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.2)]" },
  { level: 5, minXp: 3400, maxXp: 4800, titleTr: "Gramer Yolcusu", titleEn: "Grammar Voyager", rank: "A1+", icon: "fa-solid fa-feather-pointed", color: "from-purple-500 to-indigo-600", badgeColor: "text-purple-300 bg-purple-950/80 border-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.2)]" },
  { level: 6, minXp: 4800, maxXp: 6300, titleTr: "Diyalog Ustası", titleEn: "Dialogue Crafter", rank: "A2.1", icon: "fa-solid fa-comments", color: "from-amber-500 to-orange-600", badgeColor: "text-amber-300 bg-amber-950/80 border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.25)]" },
  { level: 7, minXp: 6300, maxXp: 7800, titleTr: "Metin Kaşifi", titleEn: "Text Explorer", rank: "A2.1", icon: "fa-solid fa-book-open-reader", color: "from-rose-500 to-pink-600", badgeColor: "text-rose-300 bg-rose-950/80 border-rose-600 shadow-[0_0_10px_rgba(244,63,94,0.25)]" },
  { level: 8, minXp: 7800, maxXp: 9000, titleTr: "Akıcı Konuşmacı", titleEn: "Fluent Speaker", rank: "A2.2", icon: "fa-solid fa-microphone-lines", color: "from-cyan-500 to-teal-600", badgeColor: "text-cyan-300 bg-cyan-950/80 border-cyan-600 shadow-[0_0_10px_rgba(6,182,212,0.25)]" },
  { level: 9, minXp: 9000, maxXp: 9800, titleTr: "Dil Rehberi", titleEn: "Language Mentor", rank: "A2+", icon: "fa-solid fa-award", color: "from-yellow-400 to-amber-500", badgeColor: "text-yellow-300 bg-yellow-950/80 border-yellow-600 shadow-[0_0_12px_rgba(234,179,8,0.3)]" },
  { level: 10, minXp: 9800, maxXp: 10000, titleTr: "Hollanda Fatihi", titleEn: "Dutch Master", rank: "A2 Master", icon: "fa-solid fa-crown", color: "from-yellow-400 to-amber-600", badgeColor: "text-amber-200 bg-amber-950/90 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" }
];

export function notifyProgressUpdated() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('progressUpdated'));
  }
}

/**
 * Müfredat ve çalışma verilerine göre genel ilerlemeyi (0-100) ve detaylı istatistikleri hesaplar.
 * 10.000 XP Tavan Puanı 3 Bağımsız Direğe Ayrılmıştır:
 * 1. Müfredat Dersleri & Bölümler: 3.500 XP
 * 2. Kelimeler & Kelime Çalışmaları: 3.500 XP
 * 3. Soru Bankası & Quizler: 3.000 XP
 */
export function calculateOverallProgress({ completed = {}, favorites = {}, bookSections = [] } = {}) {
  let quizHistory = {};
  let globalWordPool = {};
  let flashcardStats = {};
  let starredVerbs = [];

  try {
    quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || {};
    globalWordPool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    flashcardStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};
    starredVerbs = JSON.parse(localStorage.getItem('starredIrregularVerbs')) || [];
  } catch (e) {}

  // Benzersiz havuz kelimelerini temizle ve deduplicate et (örn: 'de man' ve 'man' ikililerini tekilleştir)
  const uniquePoolWordsMap = new Map();
  Object.values(globalWordPool).forEach(item => {
    if (!item || !item.nl) return;
    const cleanKey = (item.nl || '').toLowerCase().replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
    if (!cleanKey) return;
    const existing = uniquePoolWordsMap.get(cleanKey);
    // 'known' durumu olan kayıtlar daima önceliklidir
    if (!existing || item.status === 'known') {
      uniquePoolWordsMap.set(cleanKey, { ...item, cleanKey });
    }
  });
  const uniquePoolWords = Array.from(uniquePoolWordsMap.values());
  const totalPoolWords = uniquePoolWords.length;

  // Flashcards İstatistikleri & Aktif Ustalık
  let flashcardKnownTotal = 0;
  let flashcardUnknownTotal = 0;
  let uniqueFlashcardMastered = 0;
  Object.values(flashcardStats).forEach(s => {
    const k = Number(s.known) || 0;
    const u = Number(s.unknown) || 0;
    flashcardKnownTotal += k;
    flashcardUnknownTotal += u;
    if (s.lastStatus === 'known' || (k > u && k > 0)) {
      uniqueFlashcardMastered++;
    }
  });
  const totalFlashcardReviews = flashcardKnownTotal + flashcardUnknownTotal;
  const flashcardAccuracy = totalFlashcardReviews > 0 
    ? Math.round((flashcardKnownTotal / totalFlashcardReviews) * 100) 
    : 0;

  // Müfredat kelimelerinin normalize edilmiş clean anahtarları
  const curriculumCleanKeys = new Set(
    vocabulary.map(w => (w.nl || '').toLowerCase().replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim())
  );

  // 1. Ünite 1 - 18 Kelime Dağılımı ve Doğrulaması
  const chapterVocabStats = Array.from({ length: 18 }, (_, idx) => {
    const ch = idx + 1;
    const chCurriculumWords = vocabulary.filter(w => w.chapter === ch);
    
    let dialogueStatuses = {};
    let readingStatuses = {};
    let vocabStatuses = {};
    try {
      dialogueStatuses = JSON.parse(localStorage.getItem(`dialogueWordStatuses_${ch}`)) || {};
      readingStatuses = JSON.parse(localStorage.getItem(`readingWordStatuses_${ch}`)) || {};
      vocabStatuses = JSON.parse(localStorage.getItem(`vocabularyWordStatuses_${ch}`)) || {};
    } catch (e) {}

    let chCurriculumLearned = 0;
    let chCurriculumLearning = 0;

    chCurriculumWords.forEach(word => {
      const lowerNL = (word.nl || '').toLowerCase();
      const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
      const poolItem = globalWordPool[lowerNL] || globalWordPool[cleanNL];
      const fcItem = flashcardStats[word.id] || flashcardStats[lowerNL] || flashcardStats[cleanNL] || flashcardStats[word.nl];
      const vs = vocabStatuses[lowerNL] || vocabStatuses[cleanNL];
      const ds = dialogueStatuses[lowerNL] || dialogueStatuses[cleanNL];
      const rs = readingStatuses[lowerNL] || readingStatuses[cleanNL];

      // Müfredat kelimesinin öğrenilmiş sayılması için:
      // 1) Bu ünitenin Kelime Bölümünde (VocabularySection) 'biliyorum' yapılması (vs === 'known') VEYA
      // 2) Bu kelimenin Flashcards ile pekiştirilmesi (fcItem) VEYA
      // 3) Açıkça bu üniteye ait geçerli sözlük kaydının bulunması (poolItem.chapter === ch && poolItem.status === 'known')
      // (Okuma metinleri ve diyaloglar bu ünitenin veya başka ünitelerin müfredat sözlüğünü sahte olarak tamamlayamaz; onlar 2C bağlam kotasına gider)
      const isPoolItemForThisChapter = poolItem && (poolItem.chapter === ch && poolItem.status === 'known' && !rs && !ds);

      const isLearned = 
        vs === 'known' ||
        fcItem?.lastStatus === 'known' || 
        (fcItem && fcItem.known > fcItem.unknown) || 
        isPoolItemForThisChapter;

      const isLearning = !isLearned && (
        vs === 'unknown' ||
        (fcItem && (fcItem.unknown > 0 || fcItem.known > 0)) || 
        (poolItem && poolItem.chapter === ch && poolItem.status === 'unknown')
      );

      if (isLearned) chCurriculumLearned++;
      else if (isLearning) chCurriculumLearning++;
    });

    // Bu üniteye özel etiketlenmiş ekstra havuz kelimeleri (müfredat harici metin kelimeleri)
    const extraPoolChWords = uniquePoolWords.filter(w => {
      if (w.chapter !== ch) return false;
      return !curriculumCleanKeys.has(w.cleanKey);
    });

    let extraChLearned = 0;
    let extraChLearning = 0;
    extraPoolChWords.forEach(w => {
      if (w.status === 'known') extraChLearned++;
      else if (w.status === 'unknown') extraChLearning++;
    });

    const learnedCount = chCurriculumLearned + extraChLearned;
    const learningCount = chCurriculumLearning + extraChLearning;
    const totalWords = chCurriculumWords.length + extraPoolChWords.length;
    const unstudied = Math.max(0, totalWords - learnedCount - learningCount);

    // Ünite kelime ilerlemesi: Resmi müfredat kelimeleri tamamlandığında %100 olur
    const progress = chCurriculumWords.length > 0
      ? Math.min(100, Math.round((chCurriculumLearned / chCurriculumWords.length) * 100))
      : (totalWords > 0 ? Math.min(100, Math.round((learnedCount / totalWords) * 100)) : 0);

    const studiedTotal = learnedCount + learningCount;

    // Ünitenin .2 Kelime bölümü tamamlandı mı?
    // 1) Kullanıcı açıkça .2 bölümünü tamamladı olarak işaretlediyse VEYA
    // 2) Bu ünitenin tüm resmi müfredat kelimelerini Vocabulary bölümünde veya Flashcards ile 'known' yaptıysa.
    // (Okuma metinleri ve rastgele havuz kelimeleri .2 bölümünü ASLA sahte olarak tamamlayamaz!)
    const allCurriculumWordsLearnedInVocab = chCurriculumWords.length > 0 && chCurriculumWords.every(w => {
      const lowerNL = (w.nl || '').toLowerCase();
      const cleanNL = lowerNL.replace(/^(de|het|een)\s+/, '').replace(/\(.*?\)/g, '').trim();
      const fc = flashcardStats[w.id] || flashcardStats[lowerNL] || flashcardStats[cleanNL];
      const vs = vocabStatuses[lowerNL] || vocabStatuses[cleanNL];
      return vs === 'known' || fc?.lastStatus === 'known' || (fc && fc.known > fc.unknown);
    });

    const isVocabSectionDone = Boolean(completed[`${ch}.2`] || allCurriculumWordsLearnedInVocab);
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
      chCurriculumLearned,
      chCurriculumLearning,
      chCurriculumTotal: chCurriculumWords.length,
      unstudied,
      studiedTotal,
      progress,
      isVocabSectionDone
    };
  });

  // =========================================================================
  // DİREK 2: KELİMELER & KELİME ÇALIŞMALARI (TAVAN: 3.500 XP)
  // Şişirilemez, 4 Bağımsız Alt Kotaya Bölünmüş Matematiksel Dağılım
  // =========================================================================
  const totalBookWords = vocabulary.length || 1066;

  // 2A. Resmi Müfredat Kelimeleri (Core 1.066 Words) - Maks 2.000 XP
  // 18 ünitenin resmi ders kitabı sözlüğü. Her kelime tam öğrenildiğinde ~1.876 XP sağlar.
  const totalCurriculumLearned = chapterVocabStats.reduce((acc, c) => acc + c.chCurriculumLearned, 0);
  const totalCurriculumLearning = chapterVocabStats.reduce((acc, c) => acc + c.chCurriculumLearning, 0);
  const curriculumScore = totalCurriculumLearned + (totalCurriculumLearning * 0.30);
  const curriculumVocabXP = totalBookWords > 0 
    ? Math.min(2000, Math.round((curriculumScore / totalBookWords) * 2000))
    : 0;

  // 2B. Flashcards Pratiği & Aktif Hatırlama - Maks 800 XP
  // Kullanıcı Flashcards çözmezse bu 800 XP kesinlikle 0 kalır; okuma metinleriyle kazanılamaz.
  let flashcardsXP = 0;
  if (totalFlashcardReviews > 0) {
    const fcMasteryXP = Math.min(600, Math.round((uniqueFlashcardMastered / 300) * 600));
    const fcVolumeBonus = Math.min(100, Math.floor(totalFlashcardReviews / 10));
    const fcAccuracyBonus = flashcardAccuracy >= 70 
      ? Math.min(100, Math.round(((flashcardAccuracy - 70) / 30) * 100)) 
      : 0;
    flashcardsXP = Math.min(800, fcMasteryXP + fcVolumeBonus + fcAccuracyBonus);
  }

  // 2C. Okuma & Diyalog Metin Kelimeleri (Contextual Vocabulary) - Maks 500 XP
  // 18 ünitenin okuma parçalarında ve diyaloglarında geçen ~1.500 bağlamsal kelime.
  // 18 ünitenin tamamına dengeli dağıtılmıştır (kelime başı ~0.33 XP).
  const extraPoolWords = uniquePoolWords.filter(w => !curriculumCleanKeys.has(w.cleanKey));
  const totalExtraLearned = extraPoolWords.filter(w => w.status === 'known').length;
  const totalExtraLearning = extraPoolWords.filter(w => w.status === 'unknown').length;
  const readingContextScore = totalExtraLearned + (totalExtraLearning * 0.30);
  const targetReadingWords = 1500;
  const readingContextXP = Math.min(500, Math.round((readingContextScore / targetReadingWords) * 500));

  // 2D. Düzensiz Fiiller & Kişisel Hazne - Maks 200 XP
  // 100 düzensiz fiil çekim tablosu (150 XP) + kişisel kelime haznesi (50 XP).
  const starredVerbsCount = Array.isArray(starredVerbs) ? starredVerbs.length : 0;
  const starredVerbsXP = Math.min(150, Math.round(starredVerbsCount * 1.5));
  const customBonus = Math.min(50, Math.floor(totalExtraLearned / 30));
  const verbsAndStarredXP = Math.min(200, starredVerbsXP + customBonus);

  // Toplam Kelimeler & Hazne XP (Maks 3.500 XP)
  const wordsXP = Math.min(3500, curriculumVocabXP + flashcardsXP + readingContextXP + verbsAndStarredXP);
  const wordsProgressPercent = Math.min(100, Math.round((wordsXP / 3500) * 100));

  const totalLearnedWords = totalCurriculumLearned;
  const totalLearningWords = totalCurriculumLearning;
  const targetWordCount = totalBookWords;

  const wordsSubBreakdown = {
    curriculumVocabXP,
    curriculumVocabMaxXP: 2000,
    flashcardsXP,
    flashcardsMaxXP: 800,
    readingContextXP,
    readingContextMaxXP: 500,
    verbsAndStarredXP,
    verbsAndStarredMaxXP: 200
  };

  // =========================================================================
  // DİREK 3: SORU BANKASI & QUİZLER (TAVAN: 3.000 XP)
  // =========================================================================
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
  const totalQuizQuestions = quizQuestions?.length || 3069;
  const uniqueCorrect = attemptedQIds.filter(id => (quizHistory[id]?.correct || 0) > 0).length;

  // 3A. Benzersiz Doğru Çözülen Sorular: Maks 2.200 XP
  const baseQuestionsXP = totalQuizQuestions > 0 
    ? Math.min(2200, Math.round((uniqueCorrect / totalQuizQuestions) * 2200)) 
    : 0;

  // 3B. Sıfır Hata ile Ustalık: Maks 400 XP
  const masteryXP = totalQuizQuestions > 0 
    ? Math.min(400, Math.round((masteredCount / totalQuizQuestions) * 400)) 
    : 0;

  // 3C. Yüksek Doğruluk Oranı (%70+): Maks 250 XP (En az 20 soru çözümüyle aktive olur)
  const accuracyBonus = (quizAccuracy >= 70 && totalQuizAttempts >= 20) 
    ? Math.min(250, Math.round(((quizAccuracy - 70) / 30) * 250)) 
    : 0;

  // 3D. Soru Tekrarı & Çözüm Hacmi: Maks 150 XP
  const repetitionBonus = Math.min(150, Math.floor(totalQuizCorrect / 20));
  const extraQuestionsXP = repetitionBonus;

  const questionsXP = Math.min(3000, baseQuestionsXP + masteryXP + accuracyBonus + extraQuestionsXP);
  const questionsProgressPercent = Math.min(100, Math.round((questionsXP / 3000) * 100));

  const questionsSubBreakdown = {
    baseQuestionsXP,
    baseQuestionsMaxXP: 2200,
    masteryXP,
    masteryMaxXP: 400,
    accuracyBonus,
    accuracyBonusMaxXP: 250,
    extraQuestionsXP,
    extraQuestionsMaxXP: 150
  };

  // =========================================================================
  // DİREK 1: MÜFREDAT DERSLERİ & BÖLÜMLER (TAVAN: 3.500 XP)
  // =========================================================================
  const allSections = (bookSections && bookSections.length > 0) ? bookSections : defaultBookSections;
  const totalBookSections = allSections.length || 169;

  // Tamamlanan Bölümler (169 Bölüm - Maks 2.800 XP)
  const completedSectionsCount = allSections.filter(s => {
    if (completed[s.id]) return true;
    if (s.id.endsWith('.2')) {
      const v = chapterVocabStats.find(c => c.chapterNum === s.chapter);
      return v && v.isVocabSectionDone;
    }
    return false;
  }).length;

  let partialSectionPoints = 0;
  allSections.forEach(s => {
    if (completed[s.id]) return;
    if (s.id.endsWith('.2')) {
      const v = chapterVocabStats.find(c => c.chapterNum === s.chapter);
      if (v && v.progress > 0 && !v.isVocabSectionDone) {
        partialSectionPoints += (v.progress / 100) * 0.5;
      }
    } else if (s.id.endsWith('.1')) {
      try {
        const diagSt = JSON.parse(localStorage.getItem(`dialogueWordStatuses_${s.chapter}`)) || {};
        const studiedCount = Object.keys(diagSt).length;
        if (studiedCount > 0) {
          partialSectionPoints += Math.min(0.4, studiedCount * 0.04);
        }
      } catch (e) {}
    } else if (s.id.includes('Reading')) {
      try {
        const readSt = JSON.parse(localStorage.getItem(`readingWordStatuses_${s.chapter}`)) || {};
        const studiedCount = Object.keys(readSt).length;
        if (studiedCount > 0) {
          partialSectionPoints += Math.min(0.4, studiedCount * 0.04);
        }
      } catch (e) {}
    }
  });

  const baseSectionsXP = totalBookSections > 0 
    ? Math.min(2800, Math.round((completedSectionsCount / totalBookSections) * 2800))
    : 0;
  const partialSectionsXP = Math.min(50, Math.round((partialSectionPoints / totalBookSections) * 500));
  const completedSectionsXP = Math.min(2800, baseSectionsXP + partialSectionsXP);

  const totalFavoritesCount = Object.keys(favorites).length;

  const availableChapters = Array.from({ length: 18 }, (_, i) => i + 1);
  const chapterSectionStats = availableChapters.map(ch => {
    const dialogueSec = allSections.find(s => s.chapter === ch && s.id.endsWith('.1'));
    const vocabSec = allSections.find(s => s.chapter === ch && s.id.endsWith('.2'));
    const exerciseSecs = allSections.filter(s => s.chapter === ch && !s.id.endsWith('.1') && !s.id.endsWith('.2') && !s.id.includes('Reading') && !s.id.includes('On-Class'));
    const readingSec = allSections.find(s => s.chapter === ch && s.id.includes('Reading'));
    const summarySec = allSections.find(s => s.chapter === ch && s.id.includes('On-Class'));

    const chVocab = chapterVocabStats.find(v => v.chapterNum === ch);
    const isVocabDone = vocabSec 
      ? Boolean(completed[vocabSec.id] || (chVocab && chVocab.isVocabSectionDone)) 
      : false;
    const isDialogueDone = dialogueSec ? Boolean(completed[dialogueSec.id]) : false;
    const isReadingDone = readingSec ? Boolean(completed[readingSec.id]) : false;
    const isSummaryDone = summarySec ? Boolean(completed[summarySec.id]) : false;
    const completedExerciseCount = exerciseSecs.filter(s => completed[s.id]).length;

    const totalCount = (dialogueSec ? 1 : 0) + (vocabSec ? 1 : 0) + exerciseSecs.length + (readingSec ? 1 : 0) + (summarySec ? 1 : 0);
    const completedCount = (isDialogueDone ? 1 : 0) + (isVocabDone ? 1 : 0) + completedExerciseCount + (isReadingDone ? 1 : 0) + (isSummaryDone ? 1 : 0);
    const isFullyDone = totalCount > 0 && completedCount === totalCount;
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
      isDialogueDone,
      isVocabDone,
      isReadingDone,
      isSummaryDone,
      progress,
      dialogueSection: dialogueSec,
      vocabSection: vocabSec,
      exerciseSections: exerciseSecs,
      readingSection: readingSec,
      summarySection: summarySec,
      sections: [dialogueSec, vocabSec, ...exerciseSecs].filter(Boolean),
      vocabStats: chVocab
    };
  });

  // 18 Tam Ünite Ustalığı (18 Chapters - Maks 400 XP)
  const completedChaptersCount = chapterSectionStats.filter(c => c.isFullyDone).length;
  const chapterMasteryXP = Math.min(400, Math.round((completedChaptersCount / 18) * 400));

  // Gramer Notları & Favoriler: Maks 300 XP
  const grammarXP = Math.min(300, totalFavoritesCount * 30);

  const sectionsXP = Math.min(3500, completedSectionsXP + chapterMasteryXP + grammarXP);
  const sectionsProgressPercent = Math.min(100, Math.round((sectionsXP / 3500) * 100));

  const sectionsSubBreakdown = {
    completedSectionsXP: baseSectionsXP,
    completedSectionsMaxXP: 2800,
    chapterMasteryXP,
    chapterMasteryMaxXP: 400,
    grammarXP,
    grammarMaxXP: 300
  };

  // =========================================================================
  // 4. BİRLEŞİK TOPLAM XP (TAVAN: 10.000 XP) & GENEL İLERLEME (%)
  // =========================================================================
  const totalXP = Math.min(10000, sectionsXP + wordsXP + questionsXP);
  const hasAnyActivity = totalXP > 0 || uniqueAttempted > 0 || totalLearnedWords > 0 || completedSectionsCount > 0 || totalFlashcardReviews > 0 || partialSectionPoints > 0;
  const overallProgress = Math.min(100, hasAnyActivity ? Math.max(1, Math.round((totalXP / 10000) * 100)) : 0);

  // 5. XP & Seviye Sistemi (10 Kademe)
  const currentTier = LEVEL_TIERS.slice().reverse().find(t => totalXP >= t.minXp) || LEVEL_TIERS[0];
  const nextTier = LEVEL_TIERS.find(t => t.level === currentTier.level + 1) || null;
  const xpInCurrentTier = totalXP - currentTier.minXp;
  const xpNeededForTier = nextTier ? (nextTier.minXp - currentTier.minXp) : (10000 - currentTier.minXp);
  const tierProgressPercent = nextTier ? Math.min(100, Math.max(0, Math.round((xpInCurrentTier / xpNeededForTier) * 100))) : 100;
  const xpToNextLevel = nextTier ? Math.max(0, nextTier.minXp - totalXP) : 0;

  return {
    // 10.000 XP & Genel İlerleme
    maxXP: 10000,
    totalXP,
    overallProgress,

    // 1. Sorular & Quizler (Maks 3.000 XP)
    questionsXP,
    questionsMaxXP: 3000,
    questionsProgressPercent,
    uniqueAttempted,
    uniqueCorrect,
    totalQuizAttempts,
    totalQuizCorrect,
    totalQuizIncorrect,
    quizAccuracy,
    totalQuizQuestions,
    masteredCount,
    weakCount,
    questionsSubBreakdown,

    // 2. Kelimeler & Hazne (Maks 3.500 XP)
    wordsXP,
    wordsMaxXP: 3500,
    wordsProgressPercent,
    targetWordCount,
    totalPoolWords,
    totalBookWords,
    totalLearnedWords,
    totalLearningWords,
    totalCurriculumLearned,
    totalCurriculumLearning,
    totalExtraLearned,
    totalFlashcardReviews,
    flashcardAccuracy,
    uniqueFlashcardMastered,
    chapterVocabStats,
    wordsSubBreakdown,

    // 3. Bölümler & Dersler (Maks 3.500 XP)
    sectionsXP,
    sectionsMaxXP: 3500,
    sectionsProgressPercent,
    totalBookSections,
    completedSectionsCount,
    partialSectionPoints: Number(partialSectionPoints.toFixed(1)),
    totalChapters: 18,
    completedChaptersCount,
    chapterSectionStats,
    totalFavoritesCount,
    starredVerbsCount,
    sectionsSubBreakdown,

    // Seviye & Tier
    currentTier,
    nextTier,
    tierProgressPercent,
    xpToNextLevel
  };
}
