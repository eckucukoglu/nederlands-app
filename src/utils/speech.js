// src/utils/speech.js

// Varsayılan konuşma hızı: 1.0x (Orijinal doğal konuşma hızı, ses kalitesi ve netlik için en ideali)
const DEFAULT_SPEECH_RATE = 1.0;

export const getSpeechRate = () => {
  if (typeof window === 'undefined') return DEFAULT_SPEECH_RATE;
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
  if (typeof window === 'undefined') return DEFAULT_SPEECH_RATE;
  const validRate = Math.min(Math.max(parseFloat(rate) || DEFAULT_SPEECH_RATE, 0.5), 2.0);
  localStorage.setItem('speechRate', validRate.toString());
  window.dispatchEvent(new CustomEvent('speechRateChanged', { detail: validRate }));
  return validRate;
};

// Sistemdeki mevcut sesleri al
let cachedVoices = [];

export const getVoices = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  const currentVoices = window.speechSynthesis.getVoices();
  if (currentVoices && currentVoices.length > 0) {
    cachedVoices = currentVoices;
    return currentVoices;
  }
  return cachedVoices;
};

// Tarayıcı sesleri yüklendiğinde cache'i güncelle
if (typeof window !== 'undefined' && window.speechSynthesis) {
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
    };
  }
}

// En kaliteli Hollandaca sesleri filtrele ve puanla
export const getDutchVoices = () => {
  const voices = getVoices();
  if (!voices || voices.length === 0) return [];

  const dutchVoices = voices.filter(v => {
    if (!v || !v.lang) return false;
    const lang = v.lang.toLowerCase().replace('_', '-');
    return lang.startsWith('nl') || lang.includes('nld') || (v.name && v.name.toLowerCase().includes('dutch'));
  });

  return dutchVoices.sort((a, b) => {
    const score = (voice) => {
      let s = 10;
      const n = (voice.name || '').toLowerCase();
      const l = (voice.lang || '').toLowerCase().replace('_', '-');

      // Online / Natural / Neural en kaliteli seslerdir (özellikle Edge ve cloud)
      if (n.includes('natural') || n.includes('neural') || n.includes('online')) s += 40;
      // Google sesleri çok nettir (Chrome)
      if (n.includes('google')) s += 30;
      // Apple Siri / Premium / Enhanced sesleri (Safari/macOS/iOS)
      if (n.includes('premium') || n.includes('enhanced') || n.includes('siri')) s += 25;
      // Hollanda aksanı (Belçika flaman yerine standart nl-NL)
      if (l === 'nl-nl') s += 5;
      if (voice.default) s += 2;
      // espeak veya compact sesler kalitesizdir, geriye at
      if (n.includes('compact') || n.includes('espeak')) s -= 50;
      return s;
    };
    return score(b) - score(a);
  });
};

// Konuşmacının adından veya rolünden cinsiyet tahmini (diyaloglarda farklı doğal ses atamak için)
const femaleNames = new Set([
  'emma', 'eva', 'lotte', 'sanne', 'lisa', 'anna', 'sophie', 'sarah', 'fleur', 
  'anouk', 'karin', 'elena', 'maria', 'vrouw', 'moeder', 'dochter', 'meisje', 
  'doktersassistente', 'vriendin', 'serveerster', 'verkoopster', 'mevrouw',
  'kirsten', 'marit', 'janine', 'amira', 'caissière', 'caissiere', 'tina',
  'susy', 'edit', 'christine', 'sandra', 'patricia'
]);

const maleNames = new Set([
  'sam', 'dijs', 'tom', 'daan', 'bram', 'lars', 'sem', 'lucas', 'milan', 
  'levi', 'finn', 'jan', 'peter', 'man', 'vader', 'zoon', 'jongen', 
  'dokter', 'arts', 'politieagent', 'ober', 'verkoper', 'makelaar', 'fietsenmaker',
  'meneer', 'buschauffeur', 'portier', 'voorbijganger', 'bas', 'paul', 'tjeerd',
  'buurman', 'andres', 'bert', 'hans', 'jasper', 'huisarts'
]);

export const getSpeakerVoiceConfig = (speakerName = '') => {
  const name = (speakerName || '').trim().toLowerCase();
  
  let isFemale = false;
  let isMale = false;

  if (name) {
    for (const f of femaleNames) {
      if (name.includes(f)) { isFemale = true; break; }
    }
    if (!isFemale) {
      for (const m of maleNames) {
        if (name.includes(m)) { isMale = true; break; }
      }
    }
  }

  const dutchVoices = getDutchVoices();
  let selectedVoice = null;

  if (dutchVoices.length > 0) {
    selectedVoice = dutchVoices[0];

    // Sistemde birden fazla Hollandaca ses varsa karakter cinsiyetine veya konuşmacıya göre ata
    if (dutchVoices.length > 1) {
      const femaleVoices = dutchVoices.filter(v => 
        /female|vrouw|fenna|colette|claire|ellen|laura/i.test(v.name)
      );
      const maleVoices = dutchVoices.filter(v => 
        /male|man|maarten|bart|xander|ruben/i.test(v.name)
      );

      if (isFemale && femaleVoices.length > 0) {
        selectedVoice = femaleVoices[0];
      } else if (isMale && maleVoices.length > 0) {
        selectedVoice = maleVoices[0];
      } else if (name) {
        // Cinsiyet belirli değilse iki farklı konuşmacı dönüşümlü farklı ses alsın
        const charSum = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
        selectedVoice = dutchVoices[charSum % dutchVoices.length];
      }
    }
  }

  // ÖNEMLİ: Pitch (ses perdesi) DAİMA 1.0 (doğal) bırakılmalıdır!
  // Web Speech API'de suni pitch değişimi ses frekansını bozup robotikleştirir ve telaffuz anlaşılmaz hale gelir.
  return { pitch: 1.0, voice: selectedVoice };
};

// Chrome/Chromium uzun metinlerde 15 saniye sonra takılma sorununu önleyen heartbeat mekanizması
let speechHeartbeatTimer = null;

const clearHeartbeat = () => {
  if (speechHeartbeatTimer) {
    clearInterval(speechHeartbeatTimer);
    speechHeartbeatTimer = null;
  }
};

let currentHighlightSession = 0;

// Seslendirmeyi anında durdurma fonksiyonu
export const cancelDutchSpeech = () => {
  currentHighlightSession++;
  clearHeartbeat();
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};

// Ana konuşma fonksiyonu
export const speakDutch = (text, options = {}) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  if (!text || typeof text !== 'string') return;

  // Önceki seslendirmeyi durdur ve heartbeat'i temizle
  clearHeartbeat();
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Konuşmacı konfigürasyonu
  const { pitch, voice } = getSpeakerVoiceConfig(options.speaker);
  
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'nl-NL';
  } else {
    utterance.lang = 'nl-NL';
  }

  // Pitch daima doğal (1.0) veya açıkça belirtilmişse options.pitch
  utterance.pitch = options.pitch !== undefined ? options.pitch : pitch;

  // Hız ayarı
  const currentRate = options.rate !== undefined ? options.rate : getSpeechRate();
  utterance.rate = currentRate;

  utterance.onstart = (e) => {
    if (options.onStart) options.onStart(e);
  };

  utterance.onboundary = (e) => {
    if (options.onBoundary) options.onBoundary(e);
  };

  utterance.onend = (e) => {
    clearHeartbeat();
    if (options.onEnd) options.onEnd(e);
  };

  utterance.onerror = (e) => {
    clearHeartbeat();
    if (options.onError) options.onError(e);
  };

  // Uzun paragrafların kesilmemesi için her 10 saniyede bir pause/resume döngüsü
  speechHeartbeatTimer = setInterval(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    } else {
      clearHeartbeat();
    }
  }, 10000);

  window.speechSynthesis.speak(utterance);
};

// Metni kelime ve cümle tokenlarına ayırarak karakter konumlarını hesapla
export const parseTextTokens = (text) => {
  if (!text || typeof text !== 'string') return [];
  const tokens = [];
  let currentSentence = 0;
  const regex = /\S+/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const raw = match[0];
    const startChar = match.index;
    const endChar = match.index + raw.length;
    const clean = raw.replace(/[.,?!:;–—"“”'‘’()]/g, '').toLowerCase();

    tokens.push({
      raw,
      clean,
      startChar,
      endChar,
      sentenceIndex: currentSentence
    });

    if (/[.!?]+["'”’]?$/.test(raw)) {
      currentSentence++;
    }
  }

  return tokens;
};

// Karakter indeksine göre en uygun kelime token indeksini bul
export const findTokenIndexAtChar = (tokens, charIndex) => {
  if (!tokens || tokens.length === 0) return -1;
  for (let i = 0; i < tokens.length; i++) {
    const nextStart = i < tokens.length - 1 ? tokens[i + 1].startChar : tokens[i].endChar + 9999;
    if (charIndex >= tokens[i].startChar && charIndex < nextStart) {
      return i;
    }
  }
  let closest = 0;
  let minDiff = Infinity;
  for (let i = 0; i < tokens.length; i++) {
    const diff = Math.abs(tokens[i].startChar - charIndex);
    if (diff < minDiff) {
      minDiff = diff;
      closest = i;
    }
  }
  return closest;
};

// Seslendirmeyi kelime ve cümle bazında ışıklı senkronizasyon ile yürüten fonksiyon
export const speakDutchWithHighlight = (text, options = {}) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }
  if (!text || typeof text !== 'string') {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }

  const tokens = parseTextTokens(text);
  if (tokens.length === 0) {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }

  const sessionId = ++currentHighlightSession;
  let fallbackTimer = null;
  let hasReceivedBoundary = false;
  let currentWordIdx = -1;
  let currentSentIdx = -1;

  const emitWord = (idx) => {
    if (sessionId !== currentHighlightSession) return;
    if (idx === currentWordIdx) return;
    currentWordIdx = idx;

    if (options.onWord) {
      options.onWord(idx, idx !== null && idx >= 0 ? tokens[idx] : null);
    }

    if (idx !== null && idx >= 0 && tokens[idx]) {
      const sIdx = tokens[idx].sentenceIndex;
      if (sIdx !== currentSentIdx) {
        currentSentIdx = sIdx;
        if (options.onSentence) options.onSentence(sIdx);
      }
    } else {
      if (currentSentIdx !== null) {
        currentSentIdx = null;
        if (options.onSentence) options.onSentence(null);
      }
    }
  };

  const cleanup = () => {
    if (fallbackTimer) {
      clearInterval(fallbackTimer);
      fallbackTimer = null;
    }
    emitWord(null);
  };

  const currentRate = options.rate !== undefined ? options.rate : getSpeechRate();

  speakDutch(text, {
    speaker: options.speaker,
    rate: currentRate,
    pitch: options.pitch,
    onStart: (e) => {
      if (sessionId !== currentHighlightSession) return;
      emitWord(0);
      if (options.onStart) options.onStart(e);

      // Web Speech API boundary olayı desteklenmeyen ortamlar için akıllı zamanlama yedeği
      const startTime = Date.now();
      const charsPerSec = 14 * currentRate;
      let cumulativeTime = 0;
      const wordStartTimes = tokens.map(t => {
        const durationMs = Math.max(180, (t.raw.length / charsPerSec) * 1000);
        const start = cumulativeTime;
        cumulativeTime += durationMs;
        return start;
      });

      fallbackTimer = setInterval(() => {
        if (sessionId !== currentHighlightSession) {
          clearInterval(fallbackTimer);
          return;
        }
        if (hasReceivedBoundary) return;

        const elapsed = Date.now() - startTime;
        let activeIdx = tokens.length - 1;
        for (let i = 0; i < wordStartTimes.length; i++) {
          if (elapsed < wordStartTimes[i]) {
            activeIdx = Math.max(0, i - 1);
            break;
          }
        }
        emitWord(activeIdx);
      }, 50);
    },
    onBoundary: (e) => {
      if (sessionId !== currentHighlightSession) return;
      if (e.name === 'word' || e.charIndex !== undefined) {
        hasReceivedBoundary = true;
        const idx = findTokenIndexAtChar(tokens, e.charIndex);
        if (idx >= 0 && idx < tokens.length) {
          emitWord(idx);
        }
      } else if (e.name === 'sentence') {
        const idx = findTokenIndexAtChar(tokens, e.charIndex);
        if (idx >= 0 && idx < tokens.length) {
          emitWord(idx);
        }
      }
    },
    onEnd: (e) => {
      if (sessionId !== currentHighlightSession) return;
      cleanup();
      if (options.onEnd) options.onEnd(e);
    },
    onError: (e) => {
      if (sessionId !== currentHighlightSession) return;
      cleanup();
      if (options.onError) options.onError(e);
    }
  });

  return {
    cancel: () => {
      if (sessionId === currentHighlightSession) {
        currentHighlightSession++;
      }
      cleanup();
      cancelDutchSpeech();
    }
  };
};

// Hız ve ses testi için örnek cümle
export const testDutchSpeech = (customRate) => {
  const testPhrases = [
    "Goedemorgen! Hoe gaat het met u?",
    "Welkom in Nederland, laten we samen oefenen.",
    "Hallo! Dit is een test voor de uitspraak."
  ];
  const phrase = testPhrases[Math.floor(Math.random() * testPhrases.length)];
  speakDutch(phrase, { rate: customRate, speaker: 'Emma' });
};
