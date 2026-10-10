// src/utils/speech.js

// Varsayılan konuşma hızı (Dil öğrenimi için 0.85x ideal bir başlangıçtır)
const DEFAULT_SPEECH_RATE = 0.85;

export const getSpeechRate = () => {
  const saved = localStorage.getItem('speechRate');
  if (saved) {
    const parsed = parseFloat(saved);
    if (!isNaN(parsed) && parsed >= 0.5 && parsed <= 2.0) {
      return parsed;
    }
  }
  return DEFAULT_SPEECH_RATE;
};

export const setSpeechRate = (rate) => {
  const validRate = Math.min(Math.max(parseFloat(rate) || DEFAULT_SPEECH_RATE, 0.5), 2.0);
  localStorage.setItem('speechRate', validRate.toString());
  window.dispatchEvent(new CustomEvent('speechRateChanged', { detail: validRate }));
  return validRate;
};

// Sistemdeki mevcut sesleri al
let cachedVoices = [];

export const getVoices = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  if (cachedVoices.length > 0) return cachedVoices;
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
};

// Tarayıcı sesleri yüklendiğinde cache'i güncelle
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

// En kaliteli Hollandaca sesleri filtrele
export const getDutchVoices = () => {
  const voices = getVoices();
  const dutchVoices = voices.filter(v => v.lang && (v.lang.startsWith('nl') || v.lang.includes('NL')));
  
  // Öncelik: Google / Natural / Online / Neural sesler
  return dutchVoices.sort((a, b) => {
    const aScore = (a.name.includes('Google') || a.name.includes('Natural') || a.name.includes('Online')) ? 2 : 1;
    const bScore = (b.name.includes('Google') || b.name.includes('Natural') || b.name.includes('Online')) ? 2 : 1;
    return bScore - aScore;
  });
};

// Konuşmacının adından veya rolünden cinsiyet ve tonlama tahmini
const femaleNames = new Set([
  'emma', 'eva', 'lotte', 'sanne', 'lisa', 'anna', 'sophie', 'sarah', 'fleur', 
  'anouk', 'karin', 'elena', 'maria', 'vrouw', 'moeder', 'dochter', 'meisje', 
  'doktersassistente', 'vriendin', 'serveerster', 'verkoopster'
]);

const maleNames = new Set([
  'sam', 'dijs', 'tom', 'daan', 'bram', 'lars', 'sem', 'lucas', 'milan', 
  'levi', 'finn', 'jan', 'peter', 'man', 'vader', 'zoon', 'jongen', 
  'dokter', 'arts', 'politieagent', 'ober', 'verkoper', 'makelaar', 'fietsenmaker'
]);

export const getSpeakerVoiceConfig = (speakerName = '') => {
  const name = (speakerName || '').trim().toLowerCase();
  
  let isFemale = false;
  let isMale = false;

  for (const f of femaleNames) {
    if (name.includes(f)) { isFemale = true; break; }
  }
  if (!isFemale) {
    for (const m of maleNames) {
      if (name.includes(m)) { isMale = true; break; }
    }
  }

  // Karakter bazlı pitch (perde) ayarı:
  // Kadın: 1.12 - 1.15 (daha ince ve net)
  // Erkek: 0.88 - 0.90 (daha tok ve derin)
  // Belirsiz ise: İsim karakterlerinin hash'ine göre sabit iki ton
  let pitch = 1.0;
  if (isFemale) {
    pitch = 1.14;
  } else if (isMale) {
    pitch = 0.88;
  } else if (name) {
    // İki farklı kişi konuşuyorsa sırayla farklı tonlar alabilmesi için basit hash
    const charCodeSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    pitch = charCodeSum % 2 === 0 ? 1.10 : 0.90;
  }

  // Varsa uygun ses seçimi
  const dutchVoices = getDutchVoices();
  let selectedVoice = dutchVoices[0] || null;

  if (dutchVoices.length > 1) {
    if (isFemale) {
      const femaleVoice = dutchVoices.find(v => 
        /female|vrouw|colette|fenna|ellen|laura/i.test(v.name)
      );
      if (femaleVoice) selectedVoice = femaleVoice;
    } else if (isMale) {
      const maleVoice = dutchVoices.find(v => 
        /male|man|maarten|bart|xander/i.test(v.name)
      );
      if (maleVoice) selectedVoice = maleVoice;
    }
  }

  return { pitch, voice: selectedVoice };
};

// Ana konuşma fonksiyonu
export const speakDutch = (text, options = {}) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  if (!text || typeof text !== 'string') return;

  // Önceki seslendirmeyi durdur
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';

  // Hız ayarı
  const currentRate = options.rate !== undefined ? options.rate : getSpeechRate();
  utterance.rate = currentRate;

  // Konuşmacı konfigürasyonu (pitch ve voice)
  const { pitch, voice } = getSpeakerVoiceConfig(options.speaker);
  utterance.pitch = options.pitch !== undefined ? options.pitch : pitch;
  if (voice) {
    utterance.voice = voice;
  }

  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }
  if (options.onError) {
    utterance.onerror = options.onError;
  }

  window.speechSynthesis.speak(utterance);
};

// Hız testi için örnek cümle
export const testDutchSpeech = (customRate) => {
  const testPhrases = [
    "Goedemorgen! Hoe gaat het met u?",
    "Welkom in Nederland, laten we samen oefenen."
  ];
  const phrase = testPhrases[Math.floor(Math.random() * testPhrases.length)];
  speakDutch(phrase, { rate: customRate, speaker: 'Emma' });
};

