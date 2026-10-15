// src/components/ReadingPassage.js
import React, { useState, useEffect, useRef } from 'react';
import { speakDutch, cancelDutchSpeech, getSpeechRate, setSpeechRate } from '../utils/speech';

export default function ReadingPassage({ data, lang = 'tr' }) {
  const isTr = lang === 'tr';

  const [playingIdx, setPlayingIdx] = useState(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [currentSpeechRate, setCurrentSpeechRate] = useState(getSpeechRate());

  const playAllSessionRef = useRef(0);
  const playAllTimeoutRef = useRef(null);

  // Paragrafları normalize et (string veya obje olabilir)
  const paragraphs = (data?.paragraphs || []).map((p, idx) => {
    if (typeof p === 'string') {
      return { id: idx, text: p, content: null };
    }
    return { id: p.id || idx, text: p.text, content: p.content };
  });

  // Bileşen kapandığında veya bölüm değiştiğinde seslendirmeyi durdur
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, [data]);

  const stopPlayback = () => {
    playAllSessionRef.current++;
    if (playAllTimeoutRef.current) {
      clearTimeout(playAllTimeoutRef.current);
      playAllTimeoutRef.current = null;
    }
    cancelDutchSpeech();
    setPlayingIdx(null);
    setIsPlayingAll(false);
  };

  const handleSpeedChange = (rate) => {
    setCurrentSpeechRate(rate);
    setSpeechRate(rate);
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

    setPlayingIdx(idx);
    setIsPlayingAll(false);

    speakDutch(para.text, {
      rate: currentSpeechRate,
      onEnd: () => {
        setPlayingIdx(null);
      },
      onError: () => {
        setPlayingIdx(null);
      }
    });
  };

  // Tüm metni sırayla paragraf paragraf seslendir
  const handleTogglePlayAll = () => {
    if (isPlayingAll) {
      stopPlayback();
      return;
    }

    if (paragraphs.length === 0) return;

    stopPlayback();
    const currentSession = ++playAllSessionRef.current;
    setIsPlayingAll(true);
    let index = 0;

    const playNext = () => {
      if (playAllSessionRef.current !== currentSession) return;

      if (index >= paragraphs.length) {
        setIsPlayingAll(false);
        setPlayingIdx(null);
        return;
      }

      setPlayingIdx(index);
      const para = paragraphs[index];
      index++;

      speakDutch(para.text, {
        rate: currentSpeechRate,
        onEnd: () => {
          if (playAllSessionRef.current !== currentSession) return;
          // Paragraflar arasında doğal 600ms nefes payı
          playAllTimeoutRef.current = setTimeout(() => {
            if (playAllSessionRef.current !== currentSession) return;
            playNext();
          }, 600);
        },
        onError: () => {
          if (playAllSessionRef.current !== currentSession) return;
          setIsPlayingAll(false);
          setPlayingIdx(null);
        }
      });
    };

    playNext();
  };

  if (!data) return null;

  const introText = typeof data.intro === 'object'
    ? (data.intro[lang] || data.intro.tr || data.intro.en)
    : data.intro;

  // Tırnak içindeki diyalog cümlelerini vurgulayarak formatla
  const renderParagraphContent = (para) => {
    if (para.content) return para.content;
    const text = para.text;
    const parts = text.split(/(".*?"|'.*?'|“.*?”)/g);

    return parts.map((part, pIdx) => {
      if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith('“') && part.endsWith('”'))) {
        return (
          <em key={pIdx} className="text-indigo-200 font-medium not-italic bg-indigo-950/40 px-1 py-0.5 rounded border border-indigo-800/40">
            {part}
          </em>
        );
      }
      return <span key={pIdx}>{part}</span>;
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-850/90 p-5 sm:p-7 rounded-2xl border-l-4 border-indigo-500 shadow-xl border border-slate-700/70 relative overflow-hidden">
        
        {/* Üst Bilgi Rozetleri */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-900/60 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-md border border-indigo-700/50 uppercase tracking-wider flex items-center gap-1.5">
              <i className="fa-solid fa-book-open text-xs"></i>
              {isTr ? 'Reading Okuma' : 'Reading'}
            </span>
            {data.level && (
              <span className="text-xs text-slate-400 font-medium bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                {data.level}
              </span>
            )}
          </div>

          {/* Ses Hızı Butonları */}
          <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700/80">
            <span className="text-[10px] text-slate-400 font-bold px-1.5 flex items-center gap-1">
              <i className="fa-solid fa-gauge-high"></i> {isTr ? 'Hız' : 'Speed'}
            </span>
            {[0.75, 1.0, 1.25].map(rate => (
              <button
                key={rate}
                type="button"
                onClick={() => handleSpeedChange(rate)}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition ${
                  currentSpeechRate === rate 
                    ? 'bg-indigo-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {/* Metin Başlığı */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-300 mb-2 leading-tight">
          {data.title}
        </h3>

        {/* Giriş Açıklaması */}
        {introText && (
          <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
            {introText}
          </p>
        )}

        {/* Seslendirme Aksiyon Çubuğu */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 bg-slate-900/80 rounded-xl border border-indigo-900/40">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleTogglePlayAll}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
                isPlayingAll
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/50'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/50'
              }`}
            >
              <i className={`fa-solid ${isPlayingAll ? 'fa-stop' : 'fa-play'}`}></i>
              <span>{isPlayingAll ? (isTr ? 'Durdur' : 'Stop') : (isTr ? 'Tüm Metni Dinle' : 'Play Full Text')}</span>
            </button>

            {playingIdx !== null && !isPlayingAll && (
              <button
                type="button"
                onClick={stopPlayback}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <i className="fa-solid fa-stop text-xs"></i>
                <span>{isTr ? 'Durdur' : 'Stop'}</span>
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <i className="fa-solid fa-circle-info text-indigo-400 text-[11px]"></i>
            <span>{isTr ? 'Paragraf yanındaki butona tıklayarak tekil olarak da dinleyebilirsiniz.' : 'Click the speaker next to any paragraph to listen individually.'}</span>
          </div>
        </div>

        {/* PARAGRAFLAR LİSTESİ */}
        <div className="space-y-3 font-normal">
          {paragraphs.map((para, idx) => {
            const isThisPlaying = playingIdx === idx;

            return (
              <div
                key={para.id}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-start gap-3 sm:gap-4 ${
                  isThisPlaying
                    ? 'bg-indigo-950/50 border-indigo-500/80 ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-950/60'
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
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/40 scale-105'
                        : 'bg-slate-900 border-slate-700 text-indigo-400 hover:bg-slate-800 hover:border-indigo-600 hover:text-indigo-300'
                    }`}
                    title={isThisPlaying ? (isTr ? 'Durdur' : 'Stop') : (isTr ? 'Paragrafı Dinle' : 'Listen to paragraph')}
                  >
                    <i className={`text-sm fa-solid ${isThisPlaying ? 'fa-stop' : 'fa-volume-high'}`}></i>
                  </button>

                  <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                    #{idx + 1}
                  </span>
                </div>

                {/* Paragraf Metni */}
                <div className="flex-1 text-slate-100 text-sm sm:text-base leading-relaxed">
                  {isThisPlaying && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-300 bg-indigo-900/60 px-2 py-0.5 rounded-full mb-1.5 border border-indigo-700/50 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      <span>{isTr ? 'Seslendiriliyor...' : 'Playing...'}</span>
                    </div>
                  )}
                  <p className="text-slate-200">
                    {renderParagraphContent(para)}
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
    </div>
  );
}

