import { APP_VERSION } from './version';
import { STUDIO_AUDIO_DATA } from './data/studioAudio';

test('app version is defined and matches semantic versioning format', () => {
  expect(APP_VERSION).toMatch(/^v\d+\.\d+\.\d+$/);
  expect(APP_VERSION).toBe('v0.1.3');
});

test('studio audio data contains Chapter 1 lines and paragraphs timestamps', () => {
  expect(STUDIO_AUDIO_DATA.dialogues[1]).toBeDefined();
  expect(STUDIO_AUDIO_DATA.dialogues[1].audioSrc).toContain('ch1.mp3');
  expect(STUDIO_AUDIO_DATA.dialogues[1].lines.length).toBe(20);

  expect(STUDIO_AUDIO_DATA.reading[1]).toBeDefined();
  expect(STUDIO_AUDIO_DATA.reading[1].audioSrc).toContain('ch1.mp3');
  expect(STUDIO_AUDIO_DATA.reading[1].paragraphs.length).toBe(4);
});
