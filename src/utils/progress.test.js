import { calculateOverallProgress } from './progress';
import { vocabulary } from '../data';

describe('Experience and Progress System Robustness Tests', () => {
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
  });

  test('TC2: Robustness & Monotonicity - Marking paragraph words as known never decreases progress', () => {
    // 1. Kullanıcı 3 chapter ve bir miktar soru/kelime bitirmiş olsun (~%19 civarı bir durum)
    const initialPool = {};
    for (let i = 0; i < 200; i++) {
      const w = vocabulary[i];
      if (w) {
        initialPool[(w.nl || '').toLowerCase()] = { ...w, status: 'known' };
      }
    }
    localStorage.setItem('globalWordPool', JSON.stringify(initialPool));
    
    // Bazı bölümleri tamamla
    const completed = {
      '1.1': true, '1.2': true, '1.3': true,
      '2.1': true, '2.2': true, '2.3': true,
      '3.1': true, '3.2': true, '3.3': true,
    };

    const beforeStats = calculateOverallProgress({ completed });
    const beforeXP = beforeStats.totalXP;
    const beforeProgress = beforeStats.overallProgress;

    // 2. Şimdi kullanıcı Reading Passage'da "Tüm paragrafı biliyorum olarak işaretle" butonuna basar.
    // Paragrafta müfredatta olmayan 40 yeni kelime vardır (Lucas, woensdagochtend, hese, praktijkassistente vb.)
    const updatedPool = { ...initialPool };
    for (let j = 0; j < 40; j++) {
      const extraWord = `extra_word_${j}`;
      updatedPool[extraWord] = {
        nl: extraWord,
        status: 'known',
        chapter: 9,
        addedAt: new Date().toISOString()
      };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(updatedPool));

    const afterStats = calculateOverallProgress({ completed });

    // Matematiksel Monotonicity Kontrolü:
    // Öğrenilen kelime sayısı artmalı
    expect(afterStats.totalLearnedWords).toBeGreaterThan(beforeStats.totalLearnedWords);
    // Kelime XP'si artmalı (kesinlikle düşmemeli!)
    expect(afterStats.wordsXP).toBeGreaterThanOrEqual(beforeStats.wordsXP);
    // Toplam XP kesinlikle düşmemeli!
    expect(afterStats.totalXP).toBeGreaterThanOrEqual(beforeXP);
    // Genel ilerleme yüzdesi kesinlikle düşmemeli (%19'dan %18'e gerileme engellendi!)
    expect(afterStats.overallProgress).toBeGreaterThanOrEqual(beforeProgress);
    // Referans hedef kelime sayısı şişip eski puanları eritmemeli!
    expect(afterStats.targetWordCount).toBe(vocabulary.length);
  });

  test('TC3: Vocabulary section completion is resilient to extra words', () => {
    // 1. Ünite 1'deki tüm resmi müfredat kelimelerini biliniyor yap
    const ch1Words = vocabulary.filter(w => w.chapter === 1);
    const pool = {};
    ch1Words.forEach(w => {
      pool[(w.nl || '').toLowerCase()] = { ...w, status: 'known' };
    });
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats1 = calculateOverallProgress();
    const ch1Stats1 = stats1.chapterVocabStats.find(c => c.chapterNum === 1);
    expect(ch1Stats1.isVocabSectionDone).toBe(true);
    expect(ch1Stats1.progress).toBe(100);

    // 2. Şimdi Ünite 1'e müfredat dışı yeni 'unknown' kelimeler eklensin
    pool['extra_unknown_ch1'] = { nl: 'extra_unknown_ch1', status: 'unknown', chapter: 1 };
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats2 = calculateOverallProgress();
    const ch1Stats2 = stats2.chapterVocabStats.find(c => c.chapterNum === 1);
    // Resmi müfredat tam olduğu için tamamlanma durumu bozulmamalı!
    expect(ch1Stats2.isVocabSectionDone).toBe(true);
    expect(ch1Stats2.progress).toBe(100);
  });

  test('TC4: Deduplication of article-prefixed words', () => {
    // 'de man' ve 'man' aynı kelime olarak tek sayılmalı
    const pool = {
      'de man': { nl: 'de man', status: 'known' },
      'man': { nl: 'man', status: 'known' },
      'het kind': { nl: 'het kind', status: 'known' },
      'kind': { nl: 'kind', status: 'known' }
    };
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    const stats = calculateOverallProgress();
    // 4 giriş yerine 2 benzersiz kelime olarak deduplicate edilmeli
    expect(stats.totalPoolWords).toBe(2);
  });

  test('TC5: Flashcards stats contribute to XP and review bonus', () => {
    const flashcardStats = {
      'word_1': { known: 20, unknown: 0, lastStatus: 'known' },
      'word_2': { known: 0, unknown: 20, lastStatus: 'unknown' }
    };
    localStorage.setItem('flashcardStats', JSON.stringify(flashcardStats));

    const stats = calculateOverallProgress();
    expect(stats.totalFlashcardReviews).toBe(40);
    // 40 tekrar / 20 = 2 XP tekrar bonusu
    expect(stats.wordsXP).toBeGreaterThan(0);
  });

  test('TC6: Ceiling caps are strictly enforced at 10,000 XP', () => {
    // Tüm gerçek bölümleri tamamla
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

    // 2000 kelime biliniyor (1066'dan fazla)
    const pool = {};
    for (let i = 0; i < 2000; i++) {
      pool[`word_${i}`] = { nl: `word_${i}`, status: 'known' };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));

    // 4000 soru çözülmüş
    const quizHistory = {};
    for (let q = 0; q < 4000; q++) {
      quizHistory[`q_${q}`] = { correct: 5, incorrect: 0 };
    }
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

    const stats = calculateOverallProgress({ completed });
    expect(stats.sectionsXP).toBeLessThanOrEqual(3500);
    expect(stats.wordsXP).toBeLessThanOrEqual(3500);
    expect(stats.questionsXP).toBeLessThanOrEqual(3000);
    expect(stats.totalXP).toBe(10000);
    expect(stats.overallProgress).toBe(100);
  });
});
