// src/data/studioAudio.js
// Central manifest for high-fidelity studio podcast audio recordings

export const STUDIO_AUDIO = {
  dialogues: {
    1: {
      chapter: 1,
      sectionId: '1.1',
      src: `${process.env.PUBLIC_URL || ''}/audio/dialogues/ch1.mp3`,
      title: 'Hoofdstuk 1: Dialoog 1.1 - Welkom in de cursus',
      description: {
        tr: 'Karin (Docent), Susy, Ning ve Anlatıcı ile çok sesli radyo tiyatrosu formatında doğal diyalog kaydı.',
        en: 'Multi-character natural audio dialogue with Karin (Teacher), Susy, Ning, and Narrator.'
      },
      speakers: 'Docent (Karin), Susy, Ning, Verteller',
      voices: 'nl-NL Colette, Fenna & Maarten Neural',
      approxDuration: '02:00'
    }
  },
  reading: {
    1: {
      chapter: 1,
      sectionId: 'Reading-1',
      src: `${process.env.PUBLIC_URL || ''}/audio/reading/ch1.mp3`,
      title: 'Hoofdstuk 1: De eerste lesdag van de cursus Nederlands',
      description: {
        tr: 'A1 seviyesi hikaye metninin stüdyo kalitesinde, akıcı ve doğal Türkçe/Hollandaca vurgularla seslendirmesi.',
        en: 'Studio quality story narration with natural Dutch intonation and pacing.'
      },
      narrator: 'Colette',
      voices: 'nl-NL Colette Neural',
      approxDuration: '01:46'
    }
  }
};

