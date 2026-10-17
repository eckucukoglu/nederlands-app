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
  try {
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
  } catch (e) {}
  // Farklı tarayıcılarda (Chrome/Safari) asenkron ilk yüklemeyi yakalamak için kademeli yoklama
  [50, 150, 400, 1000].forEach(delay => {
    setTimeout(updateVoices, delay);
  });
}

// Bir sesin kesinlikle Hollandaca olup olmadığını denetle (İngilizce seslerin yanlışlıkla seçilmesini engeller)
export const isRealDutchVoice = (voice) => {
  if (!voice) return false;
  const l = (voice.lang || '').toLowerCase().replace('_', '-');
  const n = (voice.name || '').toLowerCase();

  // Kesinlikle başka bir dil olamaz (İngilizce, Türkçe, Almanca, Fransızca, İspanyolca vb.)
  if (
    l.startsWith('en') || 
    l.startsWith('tr') || 
    l.startsWith('de') || 
    l.startsWith('fr') || 
    l.startsWith('es') ||
    l.startsWith('it')
  ) {
    return false;
  }

  // Gerçek Hollandaca / Flaman dil kodu kontrolü (nl, nl-nl, nl-be, nld)
  const isDutchLang = l.startsWith('nl') || l.startsWith('nld');
  const isDutchName = (n.includes('nederlands') || n.includes('flemish') || n.includes('dutch')) && !n.includes('english');

  return isDutchLang || isDutchName;
};

// En kaliteli, doğal ve insansı Hollandaca sesleri filtrele ve puanla
export const getDutchVoices = () => {
  const voices = getVoices();
  if (!voices || voices.length === 0) return [];

  const dutchVoices = voices.filter(isRealDutchVoice);

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
    'amira', 'anna', 'anouk', 'ayse', 'christine', 'colette', 'claire', 'edit', 'elena', 
    'ellen', 'emma', 'eva', 'fatima', 'fenna', 'fleur', 'janine', 'karin', 'kirsten', 
    'laura', 'lisa', 'lotte', 'maria', 'marit', 'ning', 'patricia', 'sandra', 
    'sanne', 'sarah', 'saskia', 'selin', 'sophie', 'susy', 'tina', 'charlotte', 'willeke',
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
  const dutchVoices = getDutchVoices();
  // En kaliteli, doğal ve insansı Hollandaca ses (Neural / Natural / Google Nederlands)
  const selectedVoice = dutchVoices.length > 0 ? dutchVoices[0] : null;
  // Farklı kişiler için perdeyi (pitch) değiştirme; daima temiz ve doğal insan perdesi (1.0) kullan
  const pitch = 1.0;

  return { pitch, voice: selectedVoice, gender };
};

// Çöp toplayıcının (GC) konuşma devam ederken utterance nesnesini silmesini engelleyen güçlü referans kümesi
const activeUtterances = new Set();
if (typeof window !== 'undefined') {
  window._activeDutchUtterances = activeUtterances;
}

let currentHighlightSession = 0;
let unpauseWatchdogTimer = null;

const startUnpauseWatchdog = () => {
  if (unpauseWatchdogTimer) clearInterval(unpauseWatchdogTimer);
  unpauseWatchdogTimer = setInterval(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    }
  }, 1000);
};

const stopUnpauseWatchdog = () => {
  if (unpauseWatchdogTimer) {
    clearInterval(unpauseWatchdogTimer);
    unpauseWatchdogTimer = null;
  }
};

// Paylaşılan HTML5 Audio örneği (Mobil tarayıcılarda kullanıcı tıklama yetkisini korumak için)
let currentSharedAudio = null;

export const getSharedAudio = () => {
  if (typeof window === 'undefined') return null;
  if (!currentSharedAudio) {
    try {
      currentSharedAudio = new Audio();
      currentSharedAudio.preload = 'auto';
    } catch (e) {
      currentSharedAudio = null;
    }
  }
  return currentSharedAudio;
};

// Google Doğal Hollandaca Ses Akışı URL'si (Native Dutch Human Audio)
export const getDutchAudioUrl = (text) => {
  if (!text) return '';
  return `https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&client=tw-ob&q=${encodeURIComponent(text)}`;
};

// Seslendirmeyi anında durdurma fonksiyonu
export const cancelDutchSpeech = () => {
  currentHighlightSession++;
  stopUnpauseWatchdog();
  activeUtterances.clear();

  if (typeof window !== 'undefined') {
    if (currentSharedAudio) {
      try {
        currentSharedAudio.pause();
        currentSharedAudio.currentTime = 0;
        currentSharedAudio.src = '';
      } catch (e) {}
    }
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }
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

// Uzun metinleri ve paragrafları tarayıcının 15 saniyelik kesilme sınırına takılmayacak
// doğal cümle ve cümlecik parçalarına bölen akıllı böleme fonksiyonu
export const buildSpeechChunks = (text, tokens, maxChunkLength = 160) => {
  if (!tokens || tokens.length === 0) {
    if (!text || !text.trim()) return [];
    return [{
      sentenceIndex: 0,
      text: text.trim(),
      startChar: 0,
      endChar: text.length,
      startTokenIdx: 0,
      endTokenIdx: 0
    }];
  }

  const sentences = [];
  tokens.forEach((t, idx) => {
    const sIdx = t.sentenceIndex;
    if (!sentences[sIdx]) sentences[sIdx] = [];
    sentences[sIdx].push({ ...t, tokenIdx: idx });
  });

  const chunks = [];

  sentences.forEach((sTokens, sIdx) => {
    if (!sTokens || sTokens.length === 0) return;

    const sStartChar = sTokens[0].startChar;
    const sEndChar = sTokens[sTokens.length - 1].endChar;
    const sText = text.substring(sStartChar, sEndChar);

    // Doğal cümle ezgisi ve noktalama tonlamasını korumak için tek parça olarak al
    if (sText.length <= maxChunkLength && sTokens.length <= 22) {
      chunks.push({
        sentenceIndex: sIdx,
        text: sText,
        startChar: sStartChar,
        endChar: sEndChar,
        startTokenIdx: sTokens[0].tokenIdx,
        endTokenIdx: sTokens[sTokens.length - 1].tokenIdx
      });
      return;
    }

    // Uzun cümleleri noktalama işaretlerinden (, ; : – —) veya güvenli kelime sınırlarından böl
    let currentChunkTokens = [];
    let currentStartChar = sTokens[0].startChar;

    for (let i = 0; i < sTokens.length; i++) {
      const t = sTokens[i];
      currentChunkTokens.push(t);
      const curLength = t.endChar - currentStartChar;
      const isClauseBoundary = /[;,:\-–—]$/.test(t.raw) || (t.raw.endsWith(',') && curLength > 50);
      const isTooLong = curLength >= maxChunkLength && i < sTokens.length - 1;

      if ((isClauseBoundary && curLength > 40) || isTooLong) {
        const cEndChar = t.endChar;
        chunks.push({
          sentenceIndex: sIdx,
          text: text.substring(currentStartChar, cEndChar),
          startChar: currentStartChar,
          endChar: cEndChar,
          startTokenIdx: currentChunkTokens[0].tokenIdx,
          endTokenIdx: currentChunkTokens[currentChunkTokens.length - 1].tokenIdx
        });
        currentChunkTokens = [];
        if (i + 1 < sTokens.length) {
          currentStartChar = sTokens[i + 1].startChar;
        }
      }
    }

    if (currentChunkTokens.length > 0) {
      const lastToken = currentChunkTokens[currentChunkTokens.length - 1];
      chunks.push({
        sentenceIndex: sIdx,
        text: text.substring(currentStartChar, lastToken.endChar),
        startChar: currentStartChar,
        endChar: lastToken.endChar,
        startTokenIdx: currentChunkTokens[0].tokenIdx,
        endTokenIdx: lastToken.tokenIdx
      });
    }
  });

  return chunks;
};

// Seslendirmeyi kelime ve cümle bazında kesintisiz parça kuyruğu (chunk queue) ile yürüten ana fonksiyon
export const speakDutchWithHighlight = (text, options = {}) => {
  if (typeof window === 'undefined') {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }
  if (!text || typeof text !== 'string') {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }

  const trimmed = text.trim();
  if (!trimmed || /^[\s().,?!–—…]+$/.test(trimmed)) {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }

  const tokens = parseTextTokens(text);
  const chunks = buildSpeechChunks(text, tokens);

  if (chunks.length === 0) {
    if (options.onEnd) options.onEnd();
    return { cancel: () => {} };
  }

  // Önceki seslendirmeyi durdur ve yeni oturum başlat
  cancelDutchSpeech();
  const sessionId = currentHighlightSession;
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('dutchSpeechStarted'));
  }
  startUnpauseWatchdog();

  let currentChunkTimers = null;
  let chunkWatchdogTimer = null;
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
    if (currentChunkTimers) {
      currentChunkTimers();
      currentChunkTimers = null;
    }
    if (chunkWatchdogTimer) {
      clearTimeout(chunkWatchdogTimer);
      chunkWatchdogTimer = null;
    }
    stopUnpauseWatchdog();
    emitWord(null);
  };

  const currentRate = options.rate !== undefined ? options.rate : getSpeechRate();
  const { pitch, voice } = getSpeakerVoiceConfig(options.speaker);
  const currentPitch = options.pitch !== undefined ? options.pitch : pitch;

  const playChunk = (index) => {
    if (sessionId !== currentHighlightSession) return;

    if (index >= chunks.length) {
      cleanup();
      if (options.onEnd) options.onEnd();
      return;
    }

    const chunk = chunks[index];
    const chunkTokens = tokens.slice(chunk.startTokenIdx, chunk.endTokenIdx + 1);

    // Cümle geçişini bildir ve ilk kelimeyi vurgula
    if (options.onSentence) {
      currentSentIdx = chunk.sentenceIndex;
      options.onSentence(chunk.sentenceIndex);
    }
    if (chunk.startTokenIdx !== undefined && chunk.startTokenIdx >= 0) {
      emitWord(chunk.startTokenIdx);
    }

    let chunkTimer = null;
    let watchdogTimer = null;
    let hasAdvanced = false;

    const clearCurrentTimers = () => {
      if (chunkTimer) {
        clearInterval(chunkTimer);
        chunkTimer = null;
      }
      if (watchdogTimer) {
        clearTimeout(watchdogTimer);
        watchdogTimer = null;
      }
    };
    currentChunkTimers = clearCurrentTimers;

    // Noktalama işaretlerine göre nefes ve duraklama ile sıradaki parçaya geç
    const advanceToNextChunk = () => {
      if (hasAdvanced) return;
      hasAdvanced = true;
      clearCurrentTimers();
      if (sessionId !== currentHighlightSession) return;

      if (index + 1 >= chunks.length) {
        cleanup();
        if (options.onEnd) options.onEnd();
        return;
      }

      const lastToken = chunkTokens[chunkTokens.length - 1];
      const lastRaw = lastToken ? lastToken.raw : '';
      let pauseDuration = 320;
      if (/[?!]/.test(lastRaw)) {
        pauseDuration = 380;
      } else if (/[,;:]/.test(lastRaw)) {
        pauseDuration = 200;
      }

      const scaledPause = Math.round(pauseDuration / Math.max(0.7, Math.min(1.5, currentRate)));
      setTimeout(() => {
        if (sessionId !== currentHighlightSession) return;
        playChunk(index + 1);
      }, scaledPause);
    };

    // Zaman ve harf uzunluğu oranına göre kelime vurgulama motoru
    const runWordHighlighter = (startTime, totalDurationMs) => {
      const charsPerSec = chunk.text.length / (totalDurationMs / 1000);
      let cumulative = 0;
      const wordTimes = chunkTokens.map((t, idx) => {
        const nextStart = idx < chunkTokens.length - 1 ? chunkTokens[idx + 1].startChar : t.endChar;
        const spanLen = Math.max(t.raw.length, nextStart - t.startChar);
        let duration = (spanLen / charsPerSec) * 1000;
        if (/[;,:\-–—]$/.test(t.raw)) duration += 120;
        else if (/[.!?]$/.test(t.raw)) duration += 200;
        const startMs = cumulative;
        cumulative += duration;
        return { tokenIdx: chunk.startTokenIdx + idx, startMs };
      });

      chunkTimer = setInterval(() => {
        if (sessionId !== currentHighlightSession) {
          clearCurrentTimers();
          return;
        }
        const elapsed = Date.now() - startTime;
        let targetIdx = chunk.startTokenIdx;
        for (let i = 0; i < wordTimes.length; i++) {
          if (elapsed >= wordTimes[i].startMs) {
            targetIdx = wordTimes[i].tokenIdx;
          } else {
            break;
          }
        }
        // Kesin ileri akış
        if (targetIdx >= currentWordIdx) {
          emitWord(targetIdx);
        }
      }, 35);
    };

    // --- Web Speech API Yedek Sentezleyici ---
    const playViaWebSpeech = () => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        advanceToNextChunk();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(chunk.text);
      utterance.volume = 1.0;
      utterance.rate = currentRate;
      utterance.pitch = currentPitch;

      if (voice && isRealDutchVoice(voice)) {
        utterance.voice = voice;
        utterance.lang = voice.lang || 'nl-NL';
      } else {
        utterance.lang = 'nl-NL';
      }

      activeUtterances.add(utterance);

      const maxExpectedMs = Math.max(3000, (chunk.text.length / (7 * currentRate)) * 1000 + 3000);
      watchdogTimer = setTimeout(() => {
        if (sessionId !== currentHighlightSession) return;
        if (activeUtterances.has(utterance)) {
          activeUtterances.delete(utterance);
          advanceToNextChunk();
        }
      }, maxExpectedMs);

      utterance.onstart = () => {
        if (sessionId !== currentHighlightSession) return;
        if (index === 0 && options.onStart) options.onStart();
        const estDurationMs = Math.max(700, (chunk.text.length / (13.5 * currentRate)) * 1000);
        runWordHighlighter(Date.now(), estDurationMs);
      };

      utterance.onboundary = (e) => {
        if (sessionId !== currentHighlightSession) return;
        if (e.name && e.name !== 'word') return;
        clearCurrentTimers();
        const charIdx = e.charIndex !== undefined ? e.charIndex : 0;
        for (let i = 0; i < chunkTokens.length; i++) {
          const localStart = chunkTokens[i].startChar - chunk.startChar;
          const nextLocalStart = i < chunkTokens.length - 1
            ? chunkTokens[i + 1].startChar - chunk.startChar
            : Infinity;

          if (charIdx >= localStart && charIdx < nextLocalStart) {
            const targetIdx = chunk.startTokenIdx + i;
            if (targetIdx >= currentWordIdx) {
              emitWord(targetIdx);
            }
            break;
          }
        }
      };

      utterance.onend = () => {
        activeUtterances.delete(utterance);
        advanceToNextChunk();
      };

      utterance.onerror = (e) => {
        activeUtterances.delete(utterance);
        if (e.error === 'interrupted' || e.error === 'canceled') {
          cleanup();
          return;
        }
        advanceToNextChunk();
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        advanceToNextChunk();
      }
    };

    // --- BİRİNCİL MOTOR: Google Doğal İnsansı Hollandaca Ses Akışı ---
    // Cihazın işletim sistemi veya tarayıcısından bağımsız olarak %100 saf, otantik ve
    // asla İngilizceye kaymayan gerçek Hollandaca insan telaffuzunu garanti eder.
    const audioUrl = getDutchAudioUrl(chunk.text);
    const audio = getSharedAudio() || new Audio();

    audio.playbackRate = currentRate;
    audio.src = audioUrl;

    const maxAudioMs = Math.max(4000, (chunk.text.length / (6 * currentRate)) * 1000 + 3500);
    watchdogTimer = setTimeout(() => {
      if (sessionId !== currentHighlightSession) return;
      advanceToNextChunk();
    }, maxAudioMs);

    audio.onplay = () => {
      if (sessionId !== currentHighlightSession) {
        try { audio.pause(); } catch (e) {}
        return;
      }
      if (index === 0 && options.onStart) options.onStart();

      const durationMs = (audio.duration && !isNaN(audio.duration) && audio.duration > 0)
        ? (audio.duration / currentRate) * 1000
        : Math.max(700, (chunk.text.length / (13.5 * currentRate)) * 1000);

      runWordHighlighter(Date.now(), durationMs);
    };

    audio.onended = () => {
      advanceToNextChunk();
    };

    audio.onerror = () => {
      clearCurrentTimers();
      playViaWebSpeech();
    };

    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          clearCurrentTimers();
          if (sessionId !== currentHighlightSession) return;
          playViaWebSpeech();
        });
      }
    } catch (err) {
      clearCurrentTimers();
      playViaWebSpeech();
    }
  };

  // İlk parçayı başlat
  playChunk(0);

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

// Standart konuşma fonksiyonu (kelime veya metin seslendirmeleri)
export const speakDutch = (text, options = {}) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  if (!text || typeof text !== 'string') return;

  let cleanText = text.trim();
  if (!cleanText || /^[\s().,?!–—…]+$/.test(cleanText)) {
    if (options.onEnd) options.onEnd();
    return;
  }

  // Tekil kelime seslendirmelerinde parantez içindeki açıklamaları temizle: "ben (zijn)" -> "ben"
  if (!options.onBoundary && !options.onWord && /\([^)]*\)/.test(cleanText)) {
    cleanText = cleanText.replace(/\s*\([^)]*\)/g, '').trim() || text;
  }

  return speakDutchWithHighlight(cleanText, options);
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
