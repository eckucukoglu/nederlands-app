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
// Tarayıcı sesleri hazır olduğunda önbelleği derhal güncelle
if (typeof window !== 'undefined' && window.speechSynthesis) {
  const updateVoices = () => {
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) cachedVoices = v;
    } catch (e) {}
  };
  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

// En kaliteli, doğal ve insansı Hollandaca sesleri filtrele ve puanla
export const getDutchVoices = () => {
  const voices = getVoices();
  if (!voices || voices.length === 0) return [];

  const dutchVoices = voices.filter(v => {
    if (!v || !v.lang) return false;
    const lang = v.lang.toLowerCase().replace('_', '-');
    const name = (v.name || '').toLowerCase();
    return (
      lang.startsWith('nl') || 
      lang.startsWith('nld') || 
      name.includes('dutch') || 
      name.includes('nederlands') || 
      name.includes('flemish')
    );
  });

  return dutchVoices.sort((a, b) => {
    const score = (voice) => {
      let s = 100;
      const n = (voice.name || '').toLowerCase();
      const l = (voice.lang || '').toLowerCase().replace('_', '-');

      // 1. En Üst Seviye: Modern Neural / Natural Online Sesler (Edge, Azure Neural)
      // Bu sesler gerçek insan gibi nefes alan, melodik ve robotik olmayan en gelişmiş seslerdir.
      if (n.includes('natural') || n.includes('neural')) s += 120;
      if (n.includes('online')) s += 40;

      // 2. Apple Siri & Premium / Enhanced Sesleri (Safari, iOS, macOS)
      // Apple'ın stüdyo kayıtlı gelişmiş sesleri (Xander, Claire, Siri)
      if (n.includes('siri')) s += 100;
      if (n.includes('premium')) s += 90;
      if (n.includes('enhanced')) s += 80;

      // 3. Google Yüksek Kaliteli Bulut & WaveNet Sesleri (Chrome Desktop & Android)
      if (n.includes('google')) s += 70;
      if (n.includes('wavenet') || n.includes('network')) s += 50;

      // 4. Standart Hollanda Aksanı (nl-NL standardı, Belçika flaman yerine öncelikli)
      if (l === 'nl-nl' || l === 'nl') s += 20;
      if (l === 'nl-be') s += 10;
      if (voice.default) s += 5;

      // 5. Mekanik / Düşük Kaliteli Sesleri Güçlü Şekilde Geriye At
      // eSpeak, festival veya compact gibi 80'ler tarzı robotik sesler asla ilk tercih olmamalıdır
      if (n.includes('compact')) s -= 50;
      if (
        n.includes('espeak') || 
        n.includes('festival') || 
        n.includes('mbrola') || 
        n.includes('flite') || 
        n.includes('speech-dispatcher')
      ) {
        s -= 400;
      }

      return s;
    };
    return score(b) - score(a);
  });
};

// Konuşmacının adından veya rolünden cinsiyet tespiti
export const detectSpeakerGender = (speakerName = '') => {
  if (!speakerName) return 'neutral';
  
  // Normalizasyon: Küçük harfe çevir ve aksanları temizle (é, è, ë, ç vb.)
  const raw = speakerName.trim().toLowerCase();
  const normalized = raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const words = normalized.split(/[\s,/-]+/);

  // Doğrudan kadın unvan / rol / anahtar kelimeleri
  const femaleRoles = [
    'vrouw', 'mevrouw', 'meisje', 'moeder', 'dochter', 'zus', 'oma', 'tante', 
    'vriendin', 'serveerster', 'verkoopster', 'caissiere', 'doktersassistente', 
    'assistente', 'buurvrouw', 'dame', 'lerares', 'studente', 'vrouwen', 'dames'
  ];

  // Doğrudan erkek unvan / rol / anahtar kelimeleri
  const maleRoles = [
    'man', 'meneer', 'jongen', 'vader', 'zoon', 'broer', 'opa', 'oom', 
    'vriend', 'ober', 'verkoper', 'makelaar', 'fietsenmaker', 'huisarts', 
    'dokter', 'arts', 'politieagent', 'agent', 'portier', 'buschauffeur', 
    'buurman', 'heer', 'docent', 'cursist', 'leraar', 'student', 'verteller', 
    'voorbijganger', 'mannen', 'heren'
  ];

  // Kadın isimleri listesi (müfredattaki tüm diyalog karakterleri dahil)
  const femaleNames = new Set([
    'amira', 'anna', 'anouk', 'christine', 'colette', 'claire', 'edit', 'elena', 
    'ellen', 'emma', 'eva', 'fenna', 'fleur', 'janine', 'karin', 'kirsten', 
    'laura', 'lisa', 'lotte', 'maria', 'marit', 'ning', 'patricia', 'sandra', 
    'sanne', 'sarah', 'saskia', 'sophie', 'susy', 'tina', 'charlotte', 'willeke',
    'inge', 'danielle', 'esther', 'monique', 'astrid', 'bianca'
  ]);

  // Erkek isimleri listesi (müfredattaki tüm diyalog karakterleri dahil)
  const maleNames = new Set([
    'andres', 'arthur', 'bart', 'bas', 'bert', 'bram', 'daan', 'dijs', 
    'finn', 'frank', 'hans', 'jan', 'jasper', 'lars', 'levi', 'luc', 
    'lucas', 'maarten', 'milan', 'paul', 'peter', 'ruben', 'sam', 'sem', 
    'tjeerd', 'tom', 'xander', 'willem', 'johan', 'thijs', 'stefan', 'koen', 
    'mark', 'arjan', 'dennis', 'tim', 'jeroen', 'sander', 'erik', 'kevin'
  ]);

  // 1. Rol kontrolü
  for (const role of femaleRoles) {
    if (words.includes(role) || normalized.includes(role)) return 'female';
  }
  for (const role of maleRoles) {
    if (words.includes(role) || normalized.includes(role)) return 'male';
  }

  // 2. İsim kontrolü
  for (const w of words) {
    if (femaleNames.has(w)) return 'female';
    if (maleNames.has(w)) return 'male';
  }

  return 'neutral';
};

export const getSpeakerVoiceConfig = (speakerName = '') => {
  const gender = detectSpeakerGender(speakerName);
  const isFemale = gender === 'female';
  const isMale = gender === 'male';

  const dutchVoices = getDutchVoices();
  let selectedVoice = null;
  let voiceGender = 'unknown';

  if (dutchVoices.length > 0) {
    // Geniş ve doğru cinsiyet tanıma desenleri (Google Nederlands ve Android sesleri dahil!)
    const femaleVoiceRegex = /female|vrouw|woman|google|fenna|colette|claire|ellen|saskia|laura|anna|emma|dena|dfa|dfd|dff/i;
    const maleVoiceRegex = /\bmale\b|\bman\b|maarten|bart|xander|ruben|daan|frank|bram|arthur|luc|arnaud|dfb|dfc|dfe/i;

    const femaleVoices = dutchVoices.filter(v => femaleVoiceRegex.test(v.name));
    const maleVoices = dutchVoices.filter(v => maleVoiceRegex.test(v.name));

    if (isFemale && femaleVoices.length > 0) {
      // Eğer aynı cinsiyette birden fazla kaliteli ses varsa konuşmacı adına göre dönüşümlü kullan
      const hash = Math.abs((speakerName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0));
      selectedVoice = femaleVoices[hash % femaleVoices.length];
      voiceGender = 'female';
    } else if (isMale && maleVoices.length > 0) {
      const hash = Math.abs((speakerName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0));
      selectedVoice = maleVoices[hash % maleVoices.length];
      voiceGender = 'male';
    } else if (dutchVoices.length > 1) {
      // Belirli bir cinsiyet eşleşmesi yoksa mevcut sesler arasında konuşmacı bazlı dağıt
      const hash = Math.abs((speakerName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0));
      selectedVoice = dutchVoices[hash % dutchVoices.length];
      if (maleVoiceRegex.test(selectedVoice.name)) voiceGender = 'male';
      else if (femaleVoiceRegex.test(selectedVoice.name)) voiceGender = 'female';
    } else {
      // Tek ses varsa (örn: Chrome masaüstünde yalnızca Google Nederlands yüklüyse)
      selectedVoice = dutchVoices[0];
      if (maleVoiceRegex.test(selectedVoice.name)) voiceGender = 'male';
      else if (femaleVoiceRegex.test(selectedVoice.name)) voiceGender = 'female';
    }
  }

  // --- DOĞAL VE İNSANSI PERDE (PITCH) YÖNETİMİ ---
  // Eski kodda kullanılan 0.78 ve 1.18 gibi sert perde değişiklikleri
  // tarayıcıların sentezleyicilerinde aşırı mekanik, teneke gibi metalik ve robotik
  // bir tınıya yol açıyordu.
  // Burada: Gerçek erkek veya kadın sesi bulunduğunda perde kesinlikle 1.0 (orijinal insan tınısı) tutulur.
  // Tek bir ses olan ortamlarda ise sadece çok hafif (en fazla %5-6) mikromikron tonlama yapılır;
  // böylece ses kalitesi bozulmaz, metalikleşmez ve konuşma hissi tamamen doğal kalır.
  let pitch = 1.0;

  if (isMale) {
    if (voiceGender === 'male') {
      pitch = 1.0; // Gerçek erkek sesi -> Orijinal doğal perde
    } else {
      // Kadın/genel ses üzerinden erkek konuşmacı:
      // 0.78 yerine 0.94 -> Metalik robotikleşme olmadan hafifçe tok ve doğal erkek tonu
      pitch = 0.94;
    }
  } else if (isFemale) {
    if (voiceGender === 'female') {
      pitch = 1.0; // Gerçek kadın sesi -> Orijinal doğal perde
    } else {
      // Erkek/genel ses üzerinden kadın konuşmacı:
      // 1.18 yerine 1.04 -> Çizgi film karakterine dönüşmeden berrak, canlı kadın tonu
      pitch = 1.04;
    }
  } else {
    pitch = 1.0; // Anlatıcı veya genel metinler daima saf doğal perde
  }

  return { pitch, voice: selectedVoice, gender };
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

  const trimmed = text.trim();
  // Sadece parantez, nokta veya sembol içeren metinleri seslendirmeye çalışma
  if (!trimmed || /^[\s().,?!–—…]+$/.test(trimmed)) {
    if (options.onEnd) options.onEnd();
    return;
  }

  // Önceki seslendirmeyi durdur ve heartbeat'i temizle
  clearHeartbeat();
  window.speechSynthesis.cancel();

  // Tekil kelime seslendirmelerinde parantez içindeki açıklamaları temizle: "ben (zijn)" -> "ben"
  let cleanText = text;
  if (!options.onBoundary && !options.onWord && /\([^)]*\)/.test(cleanText)) {
    cleanText = cleanText.replace(/\s*\([^)]*\)/g, '').trim() || text;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.volume = 1.0;

  // Konuşmacı konfigürasyonu
  const { pitch, voice } = getSpeakerVoiceConfig(options.speaker);
  
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'nl-NL';
  } else {
    utterance.lang = 'nl-NL';
  }

  // Pitch doğal (1.0) veya akıllı mikro-ayar
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
