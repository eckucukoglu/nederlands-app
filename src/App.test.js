import { APP_VERSION } from './version';
import { STUDIO_AUDIO_DATA } from './data/studioAudio';
import { quizQuestions } from './data/quizData';

test('app version is defined and matches semantic versioning format', () => {
  expect(APP_VERSION).toMatch(/^v\d+\.\d+\.\d+$/);
  expect(APP_VERSION).toBe('v0.1.8');
});

test('studio audio data contains Chapter 1 lines and paragraphs timestamps', () => {
  expect(STUDIO_AUDIO_DATA.dialogues[1]).toBeDefined();
  expect(STUDIO_AUDIO_DATA.dialogues[1].audioSrc).toContain('ch1.mp3');
  expect(STUDIO_AUDIO_DATA.dialogues[1].lines.length).toBe(20);

  expect(STUDIO_AUDIO_DATA.reading[1]).toBeDefined();
  expect(STUDIO_AUDIO_DATA.reading[1].audioSrc).toContain('ch1.mp3');
  expect(STUDIO_AUDIO_DATA.reading[1].paragraphs.length).toBe(4);
});

test('studio audio data covers all 18 chapters for both dialogues and reading passages', () => {
  for (let ch = 1; ch <= 18; ch++) {
    expect(STUDIO_AUDIO_DATA.dialogues[ch]).toBeDefined();
    expect(STUDIO_AUDIO_DATA.dialogues[ch].audioSrc).toContain(`ch${ch}.mp3`);
    expect(STUDIO_AUDIO_DATA.dialogues[ch].lines.length).toBeGreaterThan(0);
    expect(STUDIO_AUDIO_DATA.dialogues[ch].totalDuration).toBeGreaterThan(10);

    expect(STUDIO_AUDIO_DATA.reading[ch]).toBeDefined();
    expect(STUDIO_AUDIO_DATA.reading[ch].audioSrc).toContain(`ch${ch}.mp3`);
    expect(STUDIO_AUDIO_DATA.reading[ch].paragraphs.length).toBe(4);
    expect(STUDIO_AUDIO_DATA.reading[ch].totalDuration).toBeGreaterThan(10);
  }
});

test('authentic vocabulary quiz questions exist for each chapter with both vocabulary and summary_chX tags', () => {
  for (let ch = 1; ch <= 18; ch++) {
    const vocabQuestions = quizQuestions.filter(
      q => q.tags && q.tags.includes('vocabulary') && q.tags.includes(`summary_ch${ch}`)
    );
    expect(vocabQuestions.length).toBeGreaterThanOrEqual(15);
  }
});

