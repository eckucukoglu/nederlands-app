// src/components/ReadingPassage.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { vocabulary } from '../data';
import { globalDictionary } from '../data/globalDictionary';
import { 
  speakDutch, 
  speakDutchWithHighlight, 
  parseTextTokens, 
  cancelDutchSpeech, 
  getSpeechRate, 
  setSpeechRate 
} from '../utils/speech';
import { STUDIO_AUDIO_DATA } from '../data/studioAudio';

const fallbackDictionary = {
  "de": "the", "een": "a/an", "het": "the", "ik": "I", "u": "you (formal)", "we": "we", "ze": "they", "mijn": "my", "uw": "your",
  "is": "is", "zijn": "are", "ben": "am", "heeft": "has", "hebt": "have", "hebben": "have", "heb": "have", "kunt": "can", "wil": "want",
  "wat": "what", "waar": "where", "wanneer": "when", "hoe": "how", "waarom": "why",
  "nou": "well", "hoef": "need to", "niet": "not", "te": "to", "vragen": "ask", "hier": "here", "komt": "comes", "doen": "do",
  "nee": "no", "dat": "that", "wel": "indeed/well", "er": "there", "aan": "on", "hand": "hand", "ziet": "see", "zit": "sit/is", 
  "onder": "under / covered in", "rode": "red", "zitten": "sit/are", "op": "on", "en": "and", "alleen": "only", "maar": "but", 
  "niets": "nothing", "sinds": "since", "vertellen": "tell", "gisteren": "yesterday", "met": "with", "huis": "house", "naar": "to",
  "nog": "still/yet", "biertje": "beer", "iets": "something", "eigenlijk": "actually", "dagen": "days", "o": "oh", "ja": "yes", 
  "in": "in", "weekend": "weekend", "heel": "very", "veel": "much/many", "aardbeien": "strawberries", "tuin": "garden", "meer": "more", 
  "dan": "than", "jaar": "year", "andere": "other", "verder": "further", "mee": "along", "graag": "gladly", "voor": "for", 
  "volgende": "next", "week": "week", "nieuwe": "new", "maken": "make", "bedankt": "thanks", "tot": "until/see you",
  "beetje": "a bit", "van": "from", "onze": "our", "zeg": "say", "je": "you", "heet": "is called", "ook": "also", "erg": "very",
  "sorry": "sorry", "zegt": "say", "oud": "old", "dus": "so", "bent": "are", "hij": "he/it", "prima": "fine", "misschien": "maybe", 
  "even": "just/briefly", "kijken": "look", "vanmorgen": "this morning", "goed": "good", "zal": "will", "hele": "whole", 
  "weer": "again", "als": "like/as", "nieuw": "new", "woorden": "words", "morgen": "tomorrow", "overmorgen": "the day after tomorrow", "dag": "dag"
};

export default function ReadingPassage({ 
  data, 
  lang = 'tr', 
  chapterId = 1,
  sectionId = `Reading-${chapterId}`,
  favorites = {},
  toggleFavorite,
  completed = {},
  toggleCompleted
}) {
  const isTr = lang === 'tr';

  const [playingIdx, setPlayingIdx] = useState(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeWordIdx, setActiveWordIdx] = useState(null);
  const [activeSentenceIdx, setActiveSentenceIdx] = useState(null);
  const [currentSpeechRate, setCurrentSpeechRate] = useState(getSpeechRate());

  // Favoriler ve Tamamlandı Yönetimi (Diyalog ile aynı)
  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");

  const isFav = favorites && favorites[sectionId];
  const isComp = completed && completed[sectionId];

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (isFav) {
      if (toggleFavorite) toggleFavorite(sectionId, null);
    } else {
      setShowFavInput(true);
    }
  };

  const saveFavorite = (e) => {
    e.stopPropagation();
    if (toggleFavorite) {
      toggleFavorite(sectionId, favNote.trim() || (isTr ? "Önemli Okuma Bölümü" : "Important Reading Section"));
    }
    setShowFavInput(false);
    setFavNote("");
  };

  const handleToggleCompleted = (e) => {
    e.stopPropagation();
    if (toggleCompleted) {
      toggleCompleted(sectionId);
    }
  };

  // Kelime Popup ve Durum Yönetimi
  const [selectedWords, setSelectedWords] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [clickedWordRaw, setClickedWordRaw] = useState("");
  const [wordStatuses, setWordStatuses] = useState({});

  const playAllSessionRef = useRef(0);
  const playAllTimeoutRef = useRef(null);

  useEffect(() => {
    setShowFavInput(false);
    setFavNote("");
  }, [sectionId]);

  // Kelime durumlarını localStorage ve globalWordPool'dan al
  const fetchStatuses = useCallback(() => {
    const saved = localStorage.getItem(`readingWordStatuses_${chapterId}`);
    let statuses = saved ? JSON.parse(saved) : {};

    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    Object.entries(pool).forEach(([word, obj]) => {
      if (obj && obj.status && !statuses[word]) {
        statuses[word] = obj.status;
      }
    });
    setWordStatuses(statuses);
  }, [chapterId]);

  useEffect(() => {
    fetchStatuses();
    window.addEventListener('wordStatusUpdated', fetchStatuses);
    return () => window.removeEventListener('wordStatusUpdated', fetchStatuses);
  }, [fetchStatuses]);

  // Hız değişikliği dinleyicisi
  useEffect(() => {
    const handleRateUpdate = (e) => {
      setCurrentSpeechRate(e.detail || getSpeechRate());
    };
    window.addEventListener('speechRateChanged', handleRateUpdate);
    return () => window.removeEventListener('speechRateChanged', handleRateUpdate);
  }, []);

  // Paragrafları normalize et
  const paragraphs = (data?.paragraphs || []).map((p, idx) => {
    if (typeof p === 'string') {
      return { id: idx, text: p };
    }
    return { id: p.id || idx, text: p.text };
  });

  const studioAudioRef = useRef(null);
  const chNum = parseInt(chapterId, 10);
  const studioReading = (STUDIO_AUDIO_DATA.reading[chNum]?.sectionId === sectionId || STUDIO_AUDIO_DATA.reading[chNum]?.chapter === chNum) 
    ? STUDIO_AUDIO_DATA.reading[chNum] 
    : null;

  const stopPlayback = useCallback(() => {
    playAllSessionRef.current++;
    if (playAllTimeoutRef.current) {
      clearTimeout(playAllTimeoutRef.current);
      playAllTimeoutRef.current = null;
    }
    if (studioAudioRef.current) {
      try {
        studioAudioRef.current.pause();
        studioAudioRef.current.onended = null;
        studioAudioRef.current.ontimeupdate = null;
        studioAudioRef.current.onerror = null;
      } catch (e) {}
    }
    cancelDutchSpeech();
    setPlayingIdx(null);
    setIsPlayingAll(false);
    setActiveWordIdx(null);
    setActiveSentenceIdx(null);
  }, []);

  // Bileşen kapandığında veya bölüm değiştiğinde seslendirmeyi durdur
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, [data, stopPlayback]);

  useEffect(() => {
    const handleRateUpdate = (e) => {
      const rate = e.detail || getSpeechRate();
      setCurrentSpeechRate(rate);
      if (studioAudioRef.current) {
        studioAudioRef.current.playbackRate = rate;
      }
    };
    window.addEventListener('speechRateChanged', handleRateUpdate);
    return () => window.removeEventListener('speechRateChanged', handleRateUpdate);
  }, []);

  const handleSpeechRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    if (!isNaN(newRate)) {
      setCurrentSpeechRate(newRate);
      setSpeechRate(newRate);
      if (studioAudioRef.current) {
        studioAudioRef.current.playbackRate = newRate;
      }
    }
  };

  const resetSpeechRate = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSpeechRate(1.0);
    setSpeechRate(1.0);
    if (studioAudioRef.current) {
      studioAudioRef.current.playbackRate = 1.0;
    }
  };

  const playWebSpeechSinglePara = (idx, para, currentSession) => {
    speakDutchWithHighlight(para.text, {
      rate: currentSpeechRate,
      onWord: (wIdx) => {
        if (playAllSessionRef.current === currentSession) {
          setActiveWordIdx(wIdx);
        }
      },
      onSentence: (sIdx) => {
        if (playAllSessionRef.current === currentSession) {
          setActiveSentenceIdx(sIdx);
        }
      },
      onEnd: () => {
        if (playAllSessionRef.current === currentSession) {
          setPlayingIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      },
      onError: () => {
        if (playAllSessionRef.current === currentSession) {
          setPlayingIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      }
    });
  };

  // Tekil paragrafı çal / durdur
  const handleToggleParagraph = (idx) => {
    if (playingIdx === idx) {
      stopPlayback();
      return;
    }

    stopPlayback();
    const para = paragraphs[idx];
    if (!para || !para.text) return;

    const currentSession = ++playAllSessionRef.current;
    setPlayingIdx(idx);
    setIsPlayingAll(false);

    const paraEl = document.getElementById(`reading-para-${idx}`);
    if (paraEl) {
      paraEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // EĞER BÖLÜM İÇİN DOĞAL STÜDYO KAYDI VARSA, DOĞRUDAN O PARAGRAFIN ZAMAN ARALIĞINI DİNLET
    if (studioReading && studioReading.paragraphs) {
      const paraTimingIdx = studioReading.paragraphs.findIndex(p => p.idx === idx);
      const paraTiming = paraTimingIdx !== -1 ? studioReading.paragraphs[paraTimingIdx] : null;
      if (paraTiming) {
        if (!studioAudioRef.current) {
          studioAudioRef.current = new Audio();
        }
        const audio = studioAudioRef.current;
        audio.src = studioReading.audioSrc;
        audio.playbackRate = currentSpeechRate;
        audio.currentTime = paraTiming.start;

        const nextParaTiming = studioReading.paragraphs[paraTimingIdx + 1];
        // Doğal ses sönümlemesi ve son kelimelerin kesilmemesi için:
        // Eğer sonraki paragraf varsa, sonraki paragraf başlamadan önceki sessizlik aralığına kadar çal.
        // Eğer son paragraf ise, dosya sonuna veya paragraf sonundan +0.7 saniye sonrasına kadar çal.
        const stopAt = nextParaTiming
          ? Math.max(paraTiming.end, nextParaTiming.start - 0.08)
          : (audio.duration ? Math.min(paraTiming.end + 0.70, audio.duration) : paraTiming.end + 0.70);

        const tokens = parseTextTokens(para.text);

        audio.ontimeupdate = () => {
          if (playAllSessionRef.current !== currentSession) return;
          const cur = audio.currentTime;

          // Bu paragrafın bitiş saniyesine (stopAt eşiğine) ulaşıldıysa durdur
          if (cur >= stopAt) {
            audio.pause();
            if (playAllSessionRef.current === currentSession) {
              setPlayingIdx(null);
              setActiveWordIdx(null);
              setActiveSentenceIdx(null);
            }
            return;
          }

          // Paragraf içi kelime ve cümle ışıklandırma
          if (tokens.length > 0) {
            const pElapsed = cur - paraTiming.start;
            const pDur = Math.max(0.1, paraTiming.end - paraTiming.start);
            const progress = Math.min(Math.max(pElapsed / pDur, 0), 1);
            const tokenTargetIdx = Math.min(Math.floor(progress * tokens.length), tokens.length - 1);
            setActiveWordIdx(tokenTargetIdx);
            if (tokens[tokenTargetIdx]) {
              setActiveSentenceIdx(tokens[tokenTargetIdx].sentenceIndex);
            }
          }
        };

        audio.onended = () => {
          if (playAllSessionRef.current === currentSession) {
            setPlayingIdx(null);
            setActiveWordIdx(null);
            setActiveSentenceIdx(null);
          }
        };

        audio.play().catch(() => {
          playWebSpeechSinglePara(idx, para, currentSession);
        });
        return;
      }
    }

    playWebSpeechSinglePara(idx, para, currentSession);
  };

  const playWebSpeechReading = (currentSession) => {
    let index = 0;

    const playNext = () => {
      if (playAllSessionRef.current !== currentSession) return;

      if (index >= paragraphs.length) {
        setIsPlayingAll(false);
        setPlayingIdx(null);
        setActiveWordIdx(null);
        setActiveSentenceIdx(null);
        cancelDutchSpeech();
        return;
      }

      setPlayingIdx(index);
      const paraEl = document.getElementById(`reading-para-${index}`);
      if (paraEl) {
        paraEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      const para = paragraphs[index];
      index++;

      speakDutchWithHighlight(para.text, {
        rate: currentSpeechRate,
        onWord: (wIdx) => {
          if (playAllSessionRef.current === currentSession) {
            setActiveWordIdx(wIdx);
          }
        },
        onSentence: (sIdx) => {
          if (playAllSessionRef.current === currentSession) {
            setActiveSentenceIdx(sIdx);
          }
        },
        onEnd: () => {
          if (playAllSessionRef.current !== currentSession) return;
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
          if (playAllTimeoutRef.current) clearTimeout(playAllTimeoutRef.current);
          playAllTimeoutRef.current = setTimeout(() => {
            if (playAllSessionRef.current !== currentSession) return;
            playNext();
          }, 500);
        },
        onError: () => {
          if (playAllSessionRef.current !== currentSession) return;
          setIsPlayingAll(false);
          setPlayingIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      });
    };

    playNext();
  };

  // Tüm metni sırayla seslendir
  const handleTogglePlayAll = () => {
    if (isPlayingAll) {
      stopPlayback();
      return;
    }

    if (paragraphs.length === 0) return;

    stopPlayback();
    const currentSession = ++playAllSessionRef.current;
    setIsPlayingAll(true);

    // 1. EĞER BÖLÜM İÇİN DOĞAL STÜDYO KAYDI VARSA (Örn. Hoofdstuk 1)
    if (studioReading && studioReading.paragraphs && studioReading.paragraphs.length > 0) {
      if (!studioAudioRef.current) {
        studioAudioRef.current = new Audio();
      }
      const audio = studioAudioRef.current;
      audio.src = studioReading.audioSrc;
      audio.playbackRate = currentSpeechRate;
      audio.currentTime = 0;

      const paras = studioReading.paragraphs;

      audio.ontimeupdate = () => {
        if (playAllSessionRef.current !== currentSession) return;
        const cur = audio.currentTime;

        const currentParaTiming = paras.find(p => cur >= p.start && cur < p.end);
        if (currentParaTiming) {
          const pIdx = currentParaTiming.idx;
          setPlayingIdx(prevIdx => {
            if (prevIdx !== pIdx) {
              const paraEl = document.getElementById(`reading-para-${pIdx}`);
              if (paraEl) {
                paraEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
              return pIdx;
            }
            return prevIdx;
          });

          // Paragraf içi kelime ve cümle ışıklandırma
          const paraData = paragraphs[pIdx];
          if (paraData && paraData.text) {
            const tokens = parseTextTokens(paraData.text);
            if (tokens.length > 0) {
              const pElapsed = cur - currentParaTiming.start;
              const pDur = Math.max(0.1, currentParaTiming.end - currentParaTiming.start);
              const progress = Math.min(Math.max(pElapsed / pDur, 0), 1);
              const tokenTargetIdx = Math.min(Math.floor(progress * tokens.length), tokens.length - 1);
              setActiveWordIdx(tokenTargetIdx);
              if (tokens[tokenTargetIdx]) {
                setActiveSentenceIdx(tokens[tokenTargetIdx].sentenceIndex);
              }
            }
          }
        }
      };

      audio.onended = () => {
        if (playAllSessionRef.current === currentSession) {
          setIsPlayingAll(false);
          setPlayingIdx(null);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        }
      };

      audio.onerror = () => {
        playWebSpeechReading(currentSession);
      };

      audio.play().catch(() => {
        playWebSpeechReading(currentSession);
      });
      return;
    }

    // 2. STÜDYO KAYDI OLMAYAN BÖLÜMLER İÇİN WEB SPEECH MOTORU
    playWebSpeechReading(currentSession);
  };

  // ========================================================
  // KELİME TIKLAMA VE POPUP İŞLEMLERİ (Diyalog ile Birebir Aynı)
  // ========================================================
  const handleWordClick = (e, wordIndex, cleanWords) => {
    e.stopPropagation();
    const cleanWord = cleanWords[wordIndex];
    if (!cleanWord) return;
    setClickedWordRaw(cleanWord);

    let yPosition = e.clientY + 15;
    if (yPosition + 280 > window.innerHeight) {
      yPosition = e.clientY - 260;
    }
    setPopupPos({ x: e.clientX, y: yPosition });

    const allVocab = [...vocabulary, ...globalDictionary];
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => {
      uniqueVocabMap.set(item.nl.toLowerCase(), item);
    });
    const uniqueVocab = Array.from(uniqueVocabMap.values());

    let matches = [];
    try {
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
      matches = uniqueVocab.filter(v => regex.test(v.nl) || regex.test(v.nl.replace(/['’]/g, '')));
    } catch (err) {
      console.error("Regex error:", err);
    }

    if (matches.length === 0) {
      matches = uniqueVocab.filter(v => v.nl.toLowerCase().includes(cleanWord));
    }

    if (matches.length === 0) {
      const fallback = fallbackDictionary[cleanWord];
      matches = [{
        nl: cleanWord,
        en: fallback || "Translation not available",
        tr: "Çeviri bulunamadı",
        example: fallback ? "Uit de tekst" : (isTr ? "Sözlükte bulunamadı" : "Not found in dictionary")
      }];
    }

    matches.sort((a, b) => {
      const getScore = (item) => {
        const low = item.nl.toLowerCase();
        const lowNoApos = low.replace(/['’]/g, '');
        if (low === cleanWord || lowNoApos === cleanWord) return 100;
        if (low === `de ${cleanWord}` || low === `het ${cleanWord}` || low === `een ${cleanWord}`) return 90;
        if (low.startsWith(`${cleanWord} (`) || lowNoApos.startsWith(`${cleanWord} (`)) return 85;
        if (low.includes(`(${cleanWord})`)) return 80;
        return 50 - Math.min(item.nl.length, 40);
      };
      return getScore(b) - getScore(a);
    });

    setSelectedWords(matches);
  };

  // --- BULK (TOPLU) PARAGRAF KELİMELERİNİ BİLİYORUM İŞARETLEME ---
  const handleMarkParagraphAsKnown = (e, cleanWords) => {
    e.stopPropagation();

    const allVocab = [...vocabulary, ...globalDictionary];
    const uniqueVocabMap = new Map();
    allVocab.forEach(item => uniqueVocabMap.set(item.nl.toLowerCase(), item));

    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    const storageKey = `readingUnknowns_${chapterId}`;
    let existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    const newStatuses = { ...wordStatuses };
    let hasChanges = false;

    cleanWords.forEach(cleanWord => {
      if (!cleanWord) return;
      if (newStatuses[cleanWord] === 'known') return; // Zaten biliniyorsa geç

      let wordObj = null;

      // 1. Önce tam eşleşme ara (Exact match)
      if (uniqueVocabMap.has(cleanWord)) {
        wordObj = uniqueVocabMap.get(cleanWord);
      } else {
        // 2. "de", "het", "een" gibi article ile başlayanları ara
        const articleMatch = allVocab.find(v => 
          v.nl.toLowerCase() === `de ${cleanWord}` || 
          v.nl.toLowerCase() === `het ${cleanWord}` || 
          v.nl.toLowerCase() === `een ${cleanWord}`
        );

        if (articleMatch) {
          wordObj = articleMatch;
        } else {
          // 3. Parantez içi veya cümle içi kelimeleri regex ile ara (örn: "gedroomd (dromen)")
          try {
            const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
            const boundaryMatch = allVocab.find(v => regex.test(v.nl));
            if (boundaryMatch) {
              wordObj = boundaryMatch;
            }
          } catch(err) { console.error(err); }
        }
      }

      // 4. Eğer sözlükte hiç yoksa, fallback listesine bak veya genel nesne oluştur
      if (!wordObj) {
        const fallback = fallbackDictionary[cleanWord];
        wordObj = {
          nl: cleanWord,
          en: fallback || "Translation not available",
          tr: "Çeviri bulunamadı",
          example: fallback ? "Uit de tekst" : (isTr ? "Sözlükte bulunamadı" : "Not found in dictionary"),
          chapter: chapterId
        };
      }

      // Eğer geçerli bir sözlük/fallback kelimesi bulunduysa listeye ekle
      if (wordObj) {
        hasChanges = true;
        const entryWithChapter = {
          ...wordObj,
          chapter: wordObj.chapter || chapterId,
          status: 'known',
          addedAt: new Date().toISOString()
        };
        pool[wordObj.nl.toLowerCase()] = entryWithChapter;
        existingUnknowns = existingUnknowns.filter(w => w.nl.toLowerCase() !== wordObj.nl.toLowerCase() && w.nl.toLowerCase() !== cleanWord);
        
        newStatuses[cleanWord] = 'known';
        
        const lowerNL = wordObj.nl.toLowerCase();
        newStatuses[lowerNL] = 'known';
        
        if (lowerNL.includes('(')) {
          const parts = lowerNL.split('(');
          const mainPart = parts[0].trim();
          const insideParen = parts[1].replace(')', '').trim();
          if (mainPart) newStatuses[mainPart] = 'known';
          if (insideParen) newStatuses[insideParen] = 'known';
        }

        const articleMatch = lowerNL.match(/^(de|het|een)\s+(.+)$/);
        if (articleMatch) {
          newStatuses[articleMatch[2].trim()] = 'known';
        }
      }
    });

    if (hasChanges) {
      localStorage.setItem('globalWordPool', JSON.stringify(pool));
      localStorage.setItem(storageKey, JSON.stringify(existingUnknowns));
      localStorage.setItem(`readingWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
      setWordStatuses(newStatuses);
      window.dispatchEvent(new Event('wordStatusUpdated'));
      window.dispatchEvent(new Event('progressUpdated'));
    }
  };

  const saveToGlobalPool = (wordObj, status) => {
    const pool = JSON.parse(localStorage.getItem('globalWordPool')) || {};
    if (status === undefined) {
      delete pool[wordObj.nl.toLowerCase()];
    } else {
      pool[wordObj.nl.toLowerCase()] = {
        ...wordObj,
        chapter: wordObj.chapter || chapterId,
        status,
        addedAt: new Date().toISOString()
      };
    }
    localStorage.setItem('globalWordPool', JSON.stringify(pool));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    window.dispatchEvent(new Event('progressUpdated'));
  };

  const handleWordKnowledge = (wordObj, isKnown) => {
    const storageKey = `readingUnknowns_${chapterId}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns;

    if (!isKnown) {
      if (!existingUnknowns.some(w => w.nl === wordObj.nl)) updatedUnknowns = [...existingUnknowns, wordObj];
      else updatedUnknowns = existingUnknowns;
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== wordObj.nl);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    saveToGlobalPool(wordObj, isKnown ? 'known' : 'unknown');

    const keysToUpdate = new Set();
    const lowerNL = wordObj.nl.toLowerCase();
    keysToUpdate.add(lowerNL);

    if (lowerNL.includes('(')) {
      const parts = lowerNL.split('(');
      const mainPart = parts[0].trim();
      const insideParen = parts[1].replace(')', '').trim();
      if (mainPart) keysToUpdate.add(mainPart);
      if (insideParen) keysToUpdate.add(insideParen);
    }

    const articleMatch = lowerNL.match(/^(de|het|een)\s+(.+)$/);
    if (articleMatch) {
      keysToUpdate.add(articleMatch[2].trim());
    }

    if (clickedWordRaw) {
      keysToUpdate.add(clickedWordRaw);
    }

    const newStatuses = { ...wordStatuses };
    keysToUpdate.forEach(key => {
      newStatuses[key] = isKnown ? 'known' : 'unknown';
    });

    setWordStatuses(newStatuses);
    localStorage.setItem(`readingWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
    setSelectedWords(null);
  };

  const handleRawWordToggle = (direction, e) => {
    e.stopPropagation();
    if (!clickedWordRaw) return;

    const currentStatus = wordStatuses[clickedWordRaw];
    let newStatus;

    if (direction === 'left') {
      if (currentStatus === 'known') newStatus = undefined; 
      else newStatus = 'unknown'; 
    } else if (direction === 'right') {
      if (currentStatus === 'unknown') newStatus = undefined; 
      else newStatus = 'known'; 
    }

    const storageKey = `readingUnknowns_${chapterId}`;
    const existingUnknowns = JSON.parse(localStorage.getItem(storageKey)) || [];
    let updatedUnknowns = existingUnknowns;

    if (newStatus === 'unknown') {
      if (!existingUnknowns.some(w => w.nl === clickedWordRaw)) {
        updatedUnknowns = [...existingUnknowns, {
          nl: clickedWordRaw, 
          en: "Not found in dictionary", 
          tr: "Sözlükte bulunamadı",
          example: "Manually marked by the user."
        }];
      }
    } else {
      updatedUnknowns = existingUnknowns.filter(w => w.nl !== clickedWordRaw);
    }
    localStorage.setItem(storageKey, JSON.stringify(updatedUnknowns));

    const wordObj = {
      nl: clickedWordRaw,
      en: "Not found in dictionary",
      tr: "Sözlükte bulunamadı",
      example: "Manually marked by the user."
    };
    saveToGlobalPool(wordObj, newStatus);

    const newStatuses = { ...wordStatuses };
    if (newStatus === undefined) {
      delete newStatuses[clickedWordRaw];
    } else {
      newStatuses[clickedWordRaw] = newStatus;
    }
    setWordStatuses(newStatuses);
    localStorage.setItem(`readingWordStatuses_${chapterId}`, JSON.stringify(newStatuses));
    window.dispatchEvent(new Event('wordStatusUpdated'));
  };

  if (!data) return null;

  const introText = typeof data.intro === 'object'
    ? (data.intro[lang] || data.intro.tr || data.intro.en)
    : data.intro;

  // Slider renkleri
  const rawStatus = wordStatuses[clickedWordRaw];
  let trackColor = "bg-slate-700/80";
  let thumbColor = "bg-slate-400";
  let translateClass = "translate-x-[18px]"; 

  if (rawStatus === 'unknown') {
    trackColor = "bg-rose-900/60"; thumbColor = "bg-rose-500"; translateClass = "translate-x-[2px]"; 
  } else if (rawStatus === 'known') {
    trackColor = "bg-emerald-900/60"; thumbColor = "bg-emerald-500"; translateClass = "translate-x-[34px]"; 
  }

  // Paragraftaki kelimeleri tıklanabilir, cümle gruplu ve ışıklı olarak render et
  const renderInteractiveParagraph = (text, isThisPlaying) => {
    const tokens = parseTextTokens(text);
    const cleanWords = tokens.map(t => t.clean);

    const sentenceGroups = [];
    tokens.forEach((token, tokenIdx) => {
      const sIdx = token.sentenceIndex;
      if (!sentenceGroups[sIdx]) sentenceGroups[sIdx] = [];
      sentenceGroups[sIdx].push({ ...token, globalIndex: tokenIdx });
    });

    return (
      <span className="leading-relaxed">
        {sentenceGroups.map((group, sIdx) => {
          const isSentenceActive = isThisPlaying && activeSentenceIdx === sIdx;
          return (
            <span
              key={sIdx}
              className={`transition-colors duration-200 rounded-lg inline ${
                isSentenceActive 
                  ? 'bg-amber-500/15 text-slate-100 px-1 py-0.5' 
                  : ''
              }`}
            >
              {group.map((token) => {
                const i = token.globalIndex;
                const isWordActive = isThisPlaying && activeWordIdx === i;

                let status = wordStatuses[token.clean];

                if (!status) {
                  const checkPhrases = [
                    [[i-4, i-3, i-2, i-1, i], [i-3, i-2, i-1, i, i+1], [i-2, i-1, i, i+1, i+2], [i-1, i, i+1, i+2, i+3], [i, i+1, i+2, i+3, i+4]],
                    [[i-3, i-2, i-1, i], [i-2, i-1, i, i+1], [i-1, i, i+1, i+2], [i, i+1, i+2, i+3]],
                    [[i-2, i-1, i], [i-1, i, i+1], [i, i+1, i+2]],
                    [[i-1, i], [i, i+1]]
                  ];

                  for (const grp of checkPhrases) {
                    for (const indices of grp) {
                      if (indices.every(idx => idx >= 0 && idx < cleanWords.length)) {
                        const phrase = indices.map(idx => cleanWords[idx]).join(' ');
                        if (wordStatuses[phrase]) {
                          status = wordStatuses[phrase];
                          break;
                        }
                      }
                    }
                    if (status) break;
                  }
                }

                let wordColor = 'inherit';
                if (status === 'known') wordColor = '#34d399'; 
                if (status === 'unknown') wordColor = '#fb7185';

                return (
                  <React.Fragment key={i}>
                    <span
                      style={{
                        color: isWordActive ? '#09090b' : wordColor,
                        textDecoration: isWordActive ? 'none' : 'underline',
                        textDecorationStyle: 'dotted',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => handleWordClick(e, i, cleanWords)}
                      className={`transition-colors duration-150 rounded-sm ${
                        isWordActive 
                          ? 'bg-amber-400 text-slate-950' 
                          : 'hover:text-indigo-300'
                      }`}
                    >
                      {token.raw}
                    </span>
                    {' '}
                  </React.Fragment>
                );
              })}
            </span>
          );
        })}
      </span>
    );
  };

  const isAudioActive = isPlayingAll || playingIdx !== null;

  return (
    <div className="space-y-4" onClick={() => { setSelectedWords(null); setShowFavInput(false); }}>
      <div className="bg-slate-850/90 p-5 sm:p-7 rounded-2xl border-l-4 border-indigo-500 shadow-xl border border-slate-700/70 relative overflow-hidden">
        
        {/* Üst Bilgi Rozetleri ve Ses/Aksiyon Kontrolleri */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-indigo-900/60 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-md border border-indigo-700/50 uppercase tracking-wider flex items-center gap-1.5">
              <i className="fa-solid fa-book-open text-xs"></i>
              {isTr ? 'Okuma & Anlama' : 'Reading Comprehension'}
            </span>
            {data.level && (
              <span className="text-xs text-slate-400 font-medium bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                {data.level}
              </span>
            )}
            {isFav && (
              <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                <i className="fa-solid fa-star text-[10px]"></i> {favorites[sectionId]}
              </span>
            )}
          </div>

          <div className="relative flex items-center space-x-2 sm:space-x-3 self-end sm:self-center">
            {/* TÜM METNİ OYNAT / DURDUR BUTONU (Diyalog kısmındakiyle aynı tasarım) */}
            {paragraphs.length > 0 && (
              <button 
                type="button"
                onClick={isAudioActive ? stopPlayback : handleTogglePlayAll}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all shadow-sm cursor-pointer ${
                  isAudioActive 
                    ? 'bg-rose-900/50 text-rose-300 border-rose-600/80 shadow-rose-950/50' 
                    : 'bg-slate-800 text-indigo-300 hover:text-white hover:bg-slate-700 border-slate-600'
                }`}
                title={isAudioActive 
                  ? (isTr ? 'Okumayı Durdur' : 'Stop Playing') 
                  : (isTr ? 'Tüm Metni Dinle' : 'Listen to Full Text')}
              >
                <i className={`fa-solid ${isAudioActive ? 'fa-stop text-rose-400' : 'fa-play text-indigo-400 text-[10px]'}`}></i>
                <span className="hidden sm:inline">{isAudioActive ? (isTr ? 'Durdur' : 'Stop') : (isTr ? 'Metni Dinle' : 'Play Full Text')}</span>
              </button>
            )}

            {/* ANALOG SES HIZI KONTROLÜ (SLIDER / PITCH FADER) */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2 bg-slate-950/70 border border-slate-700/80 hover:border-slate-600 rounded-xl px-2 py-1 shadow-inner transition-colors group select-none"
              title={isTr ? `Konuşma Hızı: ${Number(currentSpeechRate).toFixed(2)}x (Kaydırarak ayarla, 1.0x için tıkla)` : `Speech Speed: ${Number(currentSpeechRate).toFixed(2)}x (Slide to adjust, click 1.0x to reset)`}
            >
              <i className="fa-solid fa-gauge-high text-teal-400 text-[11px] flex-shrink-0 group-hover:scale-110 transition-transform"></i>
              
              <input 
                type="range"
                min="0.6"
                max="1.4"
                step="0.05"
                value={currentSpeechRate}
                onChange={handleSpeechRateChange}
                className="analog-speed-slider w-14 sm:w-20 md:w-24 h-1.5 cursor-ew-resize flex-shrink-0"
              />

              <button 
                type="button"
                onClick={resetSpeechRate}
                title={isTr ? "1.00x normal hıza sıfırla" : "Reset to 1.00x"}
                className="font-mono text-[10px] sm:text-[11px] font-extrabold text-teal-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/60 px-1.5 py-0.5 rounded transition-all shadow-sm active:scale-95 flex-shrink-0 cursor-pointer"
              >
                {Number(currentSpeechRate).toFixed(2)}x
              </button>
            </div>

            {/* TAMAMLANDI BUTONU (Hız bareminin hemen sağında, diyalog ile birebir aynı) */}
            <button 
              type="button"
              onClick={handleToggleCompleted} 
              className="text-xl transition-transform hover:scale-110 focus:outline-none ml-1 cursor-pointer"
              title={isComp ? (isTr ? "Tamamlandı olarak işaretlendi" : "Marked as completed") : (isTr ? "Tamamlandı olarak işaretle" : "Mark as completed")}
            >
              {isComp ? (
                <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
              )}
            </button>

            {/* FAVORİ BUTONU (Tamamlandı butonunun yanında) */}
            <div className="flex items-center">
              <button 
                type="button"
                onClick={handleStarClick} 
                className="text-xl transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                title={isFav ? (isTr ? "Favorilerden kaldır" : "Remove from favorites") : (isTr ? "Favorilere ekle" : "Add to favorites")}
              >
                {isFav ? (
                  <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                ) : (
                  <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                )}
              </button>
            </div>

            {showFavInput && (
              <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/50 p-1 rounded-xl shadow-lg animate-fadeIn absolute right-0 top-full mt-2 z-30" onClick={e => e.stopPropagation()}>
                <input
                  autoFocus
                  maxLength={100}
                  value={favNote}
                  onChange={e => setFavNote(e.target.value)}
                  onKeyDown={e => { 
                    if (e.key === 'Enter') saveFavorite(e); 
                    if (e.key === 'Escape') setShowFavInput(false);
                  }}
                  placeholder={isTr ? "Notun (max 100 kar.)..." : "Your note (max 100 char.)..."}
                  className="bg-transparent text-slate-200 text-xs px-2.5 py-1 w-36 sm:w-44 focus:outline-none placeholder-slate-500"
                />
                <button onClick={saveFavorite} className="bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Metin Başlığı */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-300 mb-2 leading-tight">
          {data.title}
        </h3>

        {/* Giriş Açıklaması */}
        {introText && (
          <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
            {introText}
          </p>
        )}

        {/* PARAGRAFLAR LİSTESİ */}
        <div className="space-y-3 font-normal">
          {paragraphs.map((para, idx) => {
            const isThisPlaying = playingIdx === idx;
            const paraWords = para.text.split(' ');
            const cleanWords = paraWords.map(w => w.replace(/[.,?!:;–—"“”'‘’()]/g, '').toLowerCase()).filter(Boolean);
            const areAllKnown = cleanWords.length > 0 && cleanWords.every(cw => wordStatuses[cw] === 'known');

            return (
              <div
                id={`reading-para-${idx}`}
                key={para.id}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-start gap-3 sm:gap-4 ${
                  isThisPlaying
                    ? 'bg-slate-900/95 border-amber-500/80 ring-2 ring-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.25)] scale-[1.01]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Sol Buton ve Numara */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleToggleParagraph(idx)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      isThisPlaying
                        ? 'bg-amber-500 border-amber-300 text-slate-950 font-bold shadow-md shadow-amber-500/40 scale-105'
                        : 'bg-slate-900 border-slate-700 text-indigo-400 hover:bg-slate-800 hover:border-indigo-600 hover:text-indigo-300'
                    }`}
                    title={isThisPlaying ? (isTr ? 'Durdur' : 'Stop') : (isTr ? 'Paragrafı Dinle' : 'Listen to paragraph')}
                  >
                    <i className={`text-sm fa-solid ${isThisPlaying ? 'fa-stop text-slate-950' : 'fa-volume-high'}`}></i>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleMarkParagraphAsKnown(e, cleanWords)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border shadow-sm ${
                      areAllKnown
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-400 hover:bg-emerald-900/50'
                        : 'bg-slate-900 border-slate-700 hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-400 text-slate-500'
                    }`}
                    title={isTr ? 'Tüm paragrafı biliyorum olarak işaretle' : 'Mark all words in paragraph as known'}
                  >
                    <i className="fa-solid fa-check-double text-xs sm:text-sm"></i>
                  </button>

                </div>

                {/* Paragraf Metni (Tıklanabilir kelimeler ile) */}
                <div className="flex-1 text-slate-100 text-sm sm:text-base leading-relaxed">
                  {isThisPlaying && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-950/70 px-2.5 py-0.5 rounded-full mb-2 border border-amber-600/60 shadow-[0_0_10px_rgba(245,158,11,0.25)] animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24]"></span>
                      <span>{isTr ? 'Seslendiriliyor...' : 'Playing...'}</span>
                    </div>
                  )}
                  <p className="text-slate-200">
                    {renderInteractiveParagraph(para.text, isThisPlaying)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* KELİME & GRAMER İPUÇLARI (HINTS) */}
        {data.hints && data.hints.length > 0 && (
          <div className="mt-6 pt-5 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            {data.hints.map((hintGroup, gIdx) => {
              const groupTitle = typeof hintGroup.title === 'object'
                ? (hintGroup.title[lang] || hintGroup.title.tr || hintGroup.title.en)
                : hintGroup.title;

              return (
                <div key={gIdx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-indigo-400 mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
                    {hintGroup.icon && <i className={`fa-solid ${hintGroup.icon} text-xs`}></i>}
                    <span>{groupTitle}</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {hintGroup.items.map((item, iIdx) => {
                      const meaning = typeof item === 'object'
                        ? (isTr ? item.tr : item.en)
                        : '';
                      const term = typeof item === 'object' ? item.term : item;

                      return (
                        <li key={iIdx} className="flex items-start justify-between gap-2 border-b border-slate-800/50 pb-1 last:border-b-0 last:pb-0">
                          <span className="font-semibold text-slate-200">{term}</span>
                          {meaning && (
                            <span className="text-slate-400 text-right">{meaning}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* KELİME ÇEVİRİ VE İŞARETLEME POPUP MODAL                     */}
      {/* ======================================================== */}
      {selectedWords && selectedWords.length > 0 && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={(e) => { e.stopPropagation(); setSelectedWords(null); }}
          ></div>

          <div 
            className="fixed bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-2xl z-50 min-w-[240px] max-w-[280px] transform -translate-x-1/2 max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600" 
            style={{ left: `${popupPos.x}px`, top: `${popupPos.y}px` }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Üst Kısım: Seçilen Ham Kelime ve Hızlı Slider */}
            <div className="mb-3 pb-3 border-b border-slate-700/80 flex justify-between items-center gap-3">
              <div className="flex flex-col truncate">
                <span className="text-[13px] font-bold text-slate-200 truncate">
                  <i className="fa-solid fa-pen-nib text-indigo-400 mr-1.5"></i>
                  {clickedWordRaw}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  {isTr ? "Sadece İşaretle" : "Mark Only"}
                </span>
              </div>
              
              <div className={`relative w-14 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${trackColor}`}>
                <div 
                  className="absolute left-0 w-1/2 h-full z-10 cursor-pointer rounded-l-full" 
                  onClick={(e) => handleRawWordToggle('left', e)}
                ></div>
                <div 
                  className="absolute right-0 w-1/2 h-full z-10 cursor-pointer rounded-r-full" 
                  onClick={(e) => handleRawWordToggle('right', e)}
                ></div>
                <div className={`absolute top-[2px] w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-in-out ${thumbColor} ${translateClass}`}></div>
              </div>
            </div>

            {/* Eşleşen Kelimeler Listesi */}
            <div className="space-y-3">
              {selectedWords.map((wordObj, idx) => {
                const currentStatus = wordStatuses[wordObj.nl.toLowerCase()];

                return (
                  <div key={idx} className="border-b border-slate-700 last:border-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-indigo-400 text-[15px] leading-tight">{wordObj.nl}</h3>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); speakDutch(wordObj.nl); }} 
                        className="text-slate-400 hover:text-indigo-300 ml-2 cursor-pointer"
                      >
                        <i className="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </div>
                    
                    <div className="leading-snug mb-1.5 flex flex-col gap-0.5">
                      {isTr ? (
                        <>
                          {wordObj.tr && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 mr-1 tracking-wider">TR</span>
                              <span className="text-[14px] font-bold text-slate-100">{wordObj.tr}</span>
                            </div>
                          )}
                          {wordObj.en && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 mr-1 tracking-wider">GB</span>
                              <span className="text-[13px] font-normal text-slate-400">{wordObj.en}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {wordObj.en && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 mr-1 tracking-wider">GB</span>
                              <span className="text-[14px] font-bold text-slate-100">{wordObj.en}</span>
                            </div>
                          )}
                          {wordObj.tr && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-500 mr-1 tracking-wider">TR</span>
                              <span className="text-[13px] font-normal text-slate-400">{wordObj.tr}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {wordObj.example && (
                      <p className="text-[11px] text-slate-400 italic mb-2 leading-snug">"{wordObj.example}"</p>
                    )}

                    <div className="flex gap-2 mt-1.5">
                      <button 
                        type="button"
                        onClick={() => handleWordKnowledge(wordObj, true)} 
                        className={`flex-1 py-1.5 rounded-md text-xs transition-all border cursor-pointer ${
                          currentStatus === 'known' 
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-inner scale-[0.98]' 
                            : 'bg-slate-700/50 border-slate-600 hover:bg-emerald-900/40 hover:border-emerald-700/50 text-slate-300'
                        }`}
                        title={isTr ? "Biliyorum" : "I know"}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                      <button 
                        type="button"
                        onClick={() => handleWordKnowledge(wordObj, false)} 
                        className={`flex-1 py-1.5 rounded-md text-xs transition-all border cursor-pointer ${
                          currentStatus === 'unknown' 
                            ? 'bg-rose-600 border-rose-500 text-white shadow-inner scale-[0.98]' 
                            : 'bg-slate-700/50 border-slate-600 hover:bg-rose-900/40 hover:border-rose-700/50 text-slate-300'
                        }`}
                        title={isTr ? "Bilmiyorum" : "I don't know"}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
