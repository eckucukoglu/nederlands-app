// src/data/studioAudio.js
import studioAudioTimestamps from './studioAudioTimestamps.json';

const prefix = process.env.PUBLIC_URL || '';

export const STUDIO_AUDIO_DATA = {
  dialogues: Object.fromEntries(
    Object.entries(studioAudioTimestamps.dialogues).map(([ch, data]) => [
      parseInt(ch, 10),
      {
        ...data,
        audioSrc: `${prefix}${data.audioSrc}`
      }
    ])
  ),
  reading: Object.fromEntries(
    Object.entries(studioAudioTimestamps.reading).map(([ch, data]) => [
      parseInt(ch, 10),
      {
        ...data,
        audioSrc: `${prefix}${data.audioSrc}`
      }
    ])
  )
};
