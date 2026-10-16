import { APP_VERSION } from './version';
import { STUDIO_AUDIO } from './data/studioAudio';

test('app version is defined and matches semantic versioning format', () => {
  expect(APP_VERSION).toMatch(/^v\d+\.\d+\.\d+$/);
  expect(APP_VERSION).toBe('v0.1.1');
});

test('studio audio manifest contains Chapter 1 audio assets', () => {
  expect(STUDIO_AUDIO.dialogues[1]).toBeDefined();
  expect(STUDIO_AUDIO.dialogues[1].src).toContain('ch1.mp3');
  expect(STUDIO_AUDIO.reading[1]).toBeDefined();
  expect(STUDIO_AUDIO.reading[1].src).toContain('ch1.mp3');
});
