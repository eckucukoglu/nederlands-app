import { calculateOverallProgress } from './progress';
import { vocabulary } from '../data';
import { quizQuestions } from '../data/quizData';

describe('Experience and Progress System Robustness & Scoring Engine Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('TC1: Baseline calculation starts at 0 and valid ranges', () => {
    const stats = calculateOverallProgress();
    expect(stats.totalXP).toBe(0);
    expect(stats.overallProgress).toBe(0);
    expect(stats.maxXP).toBe(10000);
    expect(stats.wordsMaxXP).toBe(3500);
    expect(stats.sectionsMaxXP).toBe(3500);
    expect(stats.questionsMaxXP).toBe(3000);
    expect(stats.targetWordCount).toBe(vocabulary.length);
    expect(stats.wordsSubBreakdown.curriculumVocabXP).toBe(0);
    expect(stats.wordsSubBreakdown.flashcardsXP).toBe(0);
    expect(stats.wordsSubBreakdown.readingContextXP).toBe(0);
    expect(stats.wordsSubBreakdown.verbsAndStarredXP).toBe(0);
  });

  test('TC2: Anti-Inflation - Marking 10 reading passages words as known CANNOT inflate vocabulary to 100%', () => {
    // Kullanıcı senaryosu: 10 ünitenin okuma parçalarındaki paragraflardaki tüm kelimeleri 'biliyorum' olarak işaretler.
    // Toplam 1.500 kelime havuzda 'known' olarak kaydedilir.
    // Ancak kullanıcı hiç flashcards çözmemiş, diğer ünitelerin kelime bölümlerine dokunmamıştır.
    const pool = {};
    for (let ch = 1; ch <= 10; ch++) {
      const readingStatuses = {};
      for (let i = 0; i < 150; i++) {
        const wordKey = `reading_word_ch${ch}_${i}`;
        readingStatuses[wordKey] = 'known';
        pool[wordKey] = {
          nl: wordKey,
          status: 'known',
          chapter: ch,
          addedAt: new Date().toISOString()
        };
      }
      localStorage.setItem(`readingWordStatuses_${ch}`, JSON.stringify(readingStatuses));
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats = calculateOverallProgress();

    // 1. Kelime XP'si KESİNLİKLE 3.500 XP veya %100 olamaz!
    expect(stats.wordsXP).toBeLessThan(1000);
    expect(stats.wordsProgressPercent).toBeLessThan(30);

    // 2. Okuma metinleri kelime puanı kendi tavanı olan 500 XP'yi aşamaz!
    expect(stats.wordsSubBreakdown.readingContextXP).toBeLessThanOrEqual(500);

    // 3. Hiç flashcards çözülmediği için flashcards XP kesinlikle 0 olmalıdır!
    expect(stats.wordsSubBreakdown.flashcardsXP).toBe(0);
    expect(stats.totalFlashcardReviews).toBe(0);

    // 4. Genel ilerleme yüzdesi asla şişip %100 veya yüksek seviyelere varamaz!
    expect(stats.overallProgress).toBeLessThan(12);

    // 5. Dokunulmamış ünitelerin (11-18) kelime ilerlemesi kesinlikle %0 kalmalıdır!
    for (let ch = 11; ch <= 18; ch++) {
      const chStat = stats.chapterVocabStats.find(c => c.chapterNum === ch);
      expect(chStat.progress).toBe(0);
      expect(chStat.chCurriculumLearned).toBe(0);
      expect(chStat.isVocabSectionDone).toBe(false);
    }
  });

  test('TC3: Section .2 is NOT falsely completed by reading words', () => {
    // Ünite 1 okuma parçasındaki tüm kelimeleri biliniyor yap
    const readingStatuses = {};
    const pool = {};
    for (let i = 0; i < 100; i++) {
      const w = `text_word_${i}`;
      readingStatuses[w] = 'known';
      pool[w] = { nl: w, status: 'known', chapter: 1 };
    }
    localStorage.setItem('readingWordStatuses_1', JSON.stringify(readingStatuses));
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats = calculateOverallProgress();
    const ch1 = stats.chapterVocabStats.find(c => c.chapterNum === 1);

    // Kullanıcı .2'yi tamamlamadığı ve resmi kelimeleri bitirmediği için isVocabSectionDone false olmalıdır!
    expect(ch1.isVocabSectionDone).toBe(false);

    // Bölüm listesinde de .2 tamamlanmış sayılmamalıdır
    const chSec1 = stats.chapterSectionStats.find(c => c.chapterNum === 1);
    expect(chSec1.isVocabDone).toBe(false);
    expect(chSec1.isFullyDone).toBe(false);
  });

  test('TC4: Flashcards Only User - Awards flashcard points without cross-contaminating other pillars', () => {
    const flashcardStats = {};
    // 200 kelime başarıyla çalışılmış (known > unknown)
    for (let i = 0; i < 200; i++) {
      flashcardStats[`word_${i}`] = { known: 5, unknown: 1, lastStatus: 'known' };
    }
    localStorage.setItem('flashcardStats', JSON.stringify(flashcardStats));

    const stats = calculateOverallProgress();
    expect(stats.totalFlashcardReviews).toBe(1200);
    expect(stats.uniqueFlashcardMastered).toBe(200);
    expect(stats.flashcardAccuracy).toBeGreaterThan(70);

    // Flashcards XP kazanılmalı ve tavanı olan 800 XP içinde kalmalı
    expect(stats.wordsSubBreakdown.flashcardsXP).toBeGreaterThan(400);
    expect(stats.wordsSubBreakdown.flashcardsXP).toBeLessThanOrEqual(800);

    // Sorular ve Bölümler kesinlikle 0 XP kalmalı
    expect(stats.questionsXP).toBe(0);
    expect(stats.sectionsXP).toBe(0);
    expect(stats.totalXP).toBe(stats.wordsXP);
  });

  test('TC5: Questions Only User - Awards quiz points up to 3,000 XP cap without bleeding into other pillars', () => {
    const quizHistory = {};
    // 1.500 benzersiz soru doğru çözülmüş
    for (let q = 0; q < 1500; q++) {
      quizHistory[`q_${q}`] = { correct: 2, incorrect: 0 };
    }
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

    const stats = calculateOverallProgress();
    expect(stats.uniqueCorrect).toBe(1500);
    expect(stats.masteredCount).toBe(1500);
    expect(stats.quizAccuracy).toBe(100);

    // Soru XP'si hesaplanmalı ve 3.000 XP tavanında kalmalı
    expect(stats.questionsXP).toBeGreaterThan(1200);
    expect(stats.questionsXP).toBeLessThanOrEqual(3000);

    // Kelime ve Bölüm puanları kesinlikle 0 olmalı
    expect(stats.wordsXP).toBe(0);
    expect(stats.sectionsXP).toBe(0);
    expect(stats.totalXP).toBe(stats.questionsXP);
    expect(stats.overallProgress).toBeLessThanOrEqual(30);
  });

  test('TC6: Sections Only User - Awards section points up to 3,500 XP cap without bleeding into other pillars', () => {
    const completed = {};
    const stats0 = calculateOverallProgress();
    // 50 bölümü tamamla
    let count = 0;
    stats0.chapterSectionStats.forEach(ch => {
      ch.sections.forEach(s => {
        if (s && s.id && count < 50) {
          completed[s.id] = true;
          count++;
        }
      });
    });

    const stats = calculateOverallProgress({ completed });
    expect(stats.completedSectionsCount).toBe(50);
    expect(stats.sectionsXP).toBeGreaterThan(500);
    expect(stats.sectionsXP).toBeLessThanOrEqual(3500);

    // Kelime ve Soru puanları 0 kalmalı
    expect(stats.wordsXP).toBe(0);
    expect(stats.questionsXP).toBe(0);
    expect(stats.totalXP).toBe(stats.sectionsXP);
  });

  test('TC7: Strict Monotonicity - Learning actions never decrease progress or XP', () => {
    // 1. Adım: Başlangıç durumu
    const completed = { '1.1': true };
    const step1 = calculateOverallProgress({ completed });

    // 2. Adım: Kelime öğren
    const pool = { 'hallo': { nl: 'hallo', status: 'known', chapter: 1 } };
    localStorage.setItem('globalWordPool', JSON.stringify(pool));
    const step2 = calculateOverallProgress({ completed });
    expect(step2.totalXP).toBeGreaterThanOrEqual(step1.totalXP);
    expect(step2.overallProgress).toBeGreaterThanOrEqual(step1.overallProgress);

    // 3. Adım: Flashcard çöz
    const fc = { 'hallo': { known: 3, unknown: 0, lastStatus: 'known' } };
    localStorage.setItem('flashcardStats', JSON.stringify(fc));
    const step3 = calculateOverallProgress({ completed });
    expect(step3.totalXP).toBeGreaterThanOrEqual(step2.totalXP);

    // 4. Adım: Soru çöz
    const qh = { 'q_test_1': { correct: 1, incorrect: 0 } };
    localStorage.setItem('quizHistory', JSON.stringify(qh));
    const step4 = calculateOverallProgress({ completed });
    expect(step4.totalXP).toBeGreaterThanOrEqual(step3.totalXP);

    // 5. Adım: Yanlış cevap verildiğinde (hata sayısı arttığında) kazanılmış puan geriye düşmemeli
    qh['q_test_1'] = { correct: 1, incorrect: 2 };
    localStorage.setItem('quizHistory', JSON.stringify(qh));
    const step5 = calculateOverallProgress({ completed });
    expect(step5.totalXP).toBeGreaterThanOrEqual(step4.baseQuestionsXP || 0);

    // 6. Adım: 'unknown' kelime eklendiğinde kazanılmış XP düşmemeli
    pool['moeilijk'] = { nl: 'moeilijk', status: 'unknown', chapter: 1 };
    localStorage.setItem('globalWordPool', JSON.stringify(pool));
    const step6 = calculateOverallProgress({ completed });
    expect(step6.totalXP).toBeGreaterThanOrEqual(step4.totalXP);
  });

  test('TC8: Saturation Ceiling - Perfect completion strictly caps at 10,000 XP and 100%', () => {
    // 1. Tüm 169 bölümü tamamla
    const completed = {};
    const stats0 = calculateOverallProgress();
    stats0.chapterSectionStats.forEach(ch => {
      ch.sections.forEach(s => {
        if (s && s.id) completed[s.id] = true;
      });
      if (ch.dialogueSection) completed[ch.dialogueSection.id] = true;
      if (ch.vocabSection) completed[ch.vocabSection.id] = true;
      if (ch.readingSection) completed[ch.readingSection.id] = true;
      if (ch.summarySection) completed[ch.summarySection.id] = true;
    });

    // 2. 1.066 müfredat kelimesinin hepsini biliniyor yap
    const pool = {};
    for (let ch = 1; ch <= 18; ch++) {
      const chVocab = {};
      vocabulary.filter(w => w.chapter === ch).forEach(w => {
        chVocab[(w.nl || '').toLowerCase()] = 'known';
        pool[(w.nl || '').toLowerCase()] = { ...w, status: 'known', chapter: ch };
      });
      localStorage.setItem(`vocabularyWordStatuses_${ch}`, JSON.stringify(chVocab));
    }
    // Ekstra 1.500 metin kelimesi (tüm 18 ünite metin havuzu)
    for (let i = 0; i < 1500; i++) {
      pool[`extra_${i}`] = { nl: `extra_${i}`, status: 'known', chapter: (i % 18) + 1 };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    // 3. 500 flashcard çalışması
    const fc = {};
    for (let i = 0; i < 500; i++) {
      fc[`fc_${i}`] = { known: 10, unknown: 0, lastStatus: 'known' };
    }
    localStorage.setItem('flashcardStats', JSON.stringify(fc));

    // 4. 100 düzensiz fiil
    const verbs = Array.from({ length: 100 }, (_, i) => `verb_${i}`);
    localStorage.setItem('starredIrregularVerbs', JSON.stringify(verbs));

    // 5. Tüm soru bankasını %100 başarıyla çöz
    const qh = {};
    quizQuestions.forEach(q => {
      qh[q.id] = { correct: 5, incorrect: 0 };
    });
    localStorage.setItem('quizHistory', JSON.stringify(qh));

    const favorites = { 'fav_1': true, 'fav_2': true, 'fav_3': true, 'fav_4': true, 'fav_5': true, 'fav_6': true, 'fav_7': true, 'fav_8': true, 'fav_9': true, 'fav_10': true };

    const stats = calculateOverallProgress({ completed, favorites });
    expect(stats.sectionsXP).toBe(3500);
    expect(stats.wordsXP).toBe(3500);
    expect(stats.questionsXP).toBe(3000);
    expect(stats.totalXP).toBe(10000);
    expect(stats.overallProgress).toBe(100);
    expect(stats.currentTier.level).toBe(10);
    expect(stats.currentTier.titleTr).toBe("Hollanda Fatihi");
  });

  test('TC9: Deduplication of article-prefixed words', () => {
    const pool = {
      'de man': { nl: 'de man', status: 'known' },
      'man': { nl: 'man', status: 'known' },
      'het kind': { nl: 'het kind', status: 'known' },
      'kind': { nl: 'kind', status: 'known' }
    };
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats = calculateOverallProgress();
    expect(stats.totalPoolWords).toBe(2);
  });

  test('TC10: 2 Chapters User Scenario - Studying vocabulary and reading in 2 chapters awards proportional progress (~3.5% - 4.5%), NOT 14%', () => {
    // Kullanıcı senaryosu: Kullanıcı yalnızca Chapter 1 ve Chapter 2'nin kelimelerini ve okuma parçalarını tamamlar.
    // Chapter 1'de 89 kelime, Chapter 2'de 75 kelime = toplam 164 müfredat kelimesi.
    // Okuma metinlerinden de yaklaşık 150 ek metin kelimesi işaretlenir.
    const pool = {};
    const ch1Vocab = {};
    vocabulary.filter(w => w.chapter === 1).forEach(w => {
      ch1Vocab[(w.nl || '').toLowerCase()] = 'known';
      pool[(w.nl || '').toLowerCase()] = { ...w, status: 'known', chapter: 1 };
    });
    localStorage.setItem('vocabularyWordStatuses_1', JSON.stringify(ch1Vocab));

    const ch2Vocab = {};
    vocabulary.filter(w => w.chapter === 2).forEach(w => {
      ch2Vocab[(w.nl || '').toLowerCase()] = 'known';
      pool[(w.nl || '').toLowerCase()] = { ...w, status: 'known', chapter: 2 };
    });
    localStorage.setItem('vocabularyWordStatuses_2', JSON.stringify(ch2Vocab));

    // Chapter 1 ve Chapter 2 okuma parçalarından 150 metin kelimesi
    const r1 = {};
    const r2 = {};
    for (let i = 0; i < 75; i++) {
      r1[`r1_word_${i}`] = 'known';
      pool[`r1_word_${i}`] = { nl: `r1_word_${i}`, status: 'known', chapter: 1 };
      r2[`r2_word_${i}`] = 'known';
      pool[`r2_word_${i}`] = { nl: `r2_word_${i}`, status: 'known', chapter: 2 };
    }
    localStorage.setItem('readingWordStatuses_1', JSON.stringify(r1));
    localStorage.setItem('readingWordStatuses_2', JSON.stringify(r2));
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    // Kullanıcı Chapter 1 ve 2'nin kelime ve okuma bölümlerini tamamlamış
    const completed = { '1.2': true, 'Reading-1': true, '2.2': true, 'Reading-2': true };
    const stats = calculateOverallProgress({ completed });

    // 1. Müfredat kelimeleri sayısı tam 164 olmalı, asla 317 veya başka bir şişme olmamalıdır!
    expect(stats.totalCurriculumLearned).toBe(164);
    expect(stats.totalLearnedWords).toBe(164);

    // 2. Metin kelimeleri 150 olmalıdır
    expect(stats.totalExtraLearned).toBe(150);

    // 3. Kelime puanı ~350 - 400 XP aralığında olmalı (oran: %10 - %12)
    expect(stats.wordsXP).toBeGreaterThanOrEqual(300);
    expect(stats.wordsXP).toBeLessThanOrEqual(450);
    expect(stats.wordsProgressPercent).toBeLessThanOrEqual(13);

    // 4. Genel İlerleme kesinlikle %14 OLMAMALI, %3 ile %5 arasında hakkaniyetli kalmalıdır!
    expect(stats.overallProgress).toBeGreaterThanOrEqual(3);
    expect(stats.overallProgress).toBeLessThanOrEqual(5);

    // 5. Dokunulmayan Chapter 3..18'in kelime ilerlemesi kesinlikle 0 kalmalıdır
    for (let ch = 3; ch <= 18; ch++) {
      const chStat = stats.chapterVocabStats.find(c => c.chapterNum === ch);
      expect(chStat.progress).toBe(0);
      expect(chStat.chCurriculumLearned).toBe(0);
      expect(chStat.isVocabSectionDone).toBe(false);
    }
  });

  test('TC11: 5x Weighting for Matching Questions - Matching question carries 5x the weight of single choice question', () => {
    // 1 matching soru ve 1 multiple_choice soru bulalım
    const matchingQ = quizQuestions.find(q => q.type === 'matching');
    const mcQ = quizQuestions.find(q => q.type === 'multiple_choice');

    expect(matchingQ).toBeDefined();
    expect(mcQ).toBeDefined();

    // Senaryo A: Sadece 1 Çoktan Seçmeli Soru Çözen Kullanıcı
    localStorage.setItem('quizHistory', JSON.stringify({
      [mcQ.id]: { correct: 1, incorrect: 0 }
    }));
    const statsMC = calculateOverallProgress();

    // Senaryo B: Sadece 1 Eşleştirme (Matching) Sorusu Çözen Kullanıcı
    localStorage.setItem('quizHistory', JSON.stringify({
      [matchingQ.id]: { correct: 1, incorrect: 0 }
    }));
    const statsMatching = calculateOverallProgress();

    expect(statsMC.weightedUniqueCorrect).toBe(1);
    expect(statsMatching.weightedUniqueCorrect).toBe(5);

    // Eşleştirme sorusunun kazandırdığı ağırlık tam olarak 5 katıdır
    expect(statsMatching.weightedUniqueCorrect).toBe(statsMC.weightedUniqueCorrect * 5);
    expect(statsMatching.questionsSubBreakdown.baseQuestionsXP).toBe(3); // round(5/4171 * 2200) = 3
    expect(statsMC.questionsSubBreakdown.baseQuestionsXP).toBe(1); // round(1/4171 * 2200) = 1
  });
});
