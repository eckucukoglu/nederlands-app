// src/data/studioAudio.js
import chapter1Timestamps from './chapter1Timestamps.json';

export const STUDIO_AUDIO_DATA = {
  dialogues: {
    1: {
      ...chapter1Timestamps.dialogue,
      audioSrc: `${process.env.PUBLIC_URL || ''}${chapter1Timestamps.dialogue.audioSrc}`
    }
  },
  reading: {
    1: {
      ...chapter1Timestamps.reading,
      audioSrc: `${process.env.PUBLIC_URL || ''}${chapter1Timestamps.reading.audioSrc}`
    }
  }
};
