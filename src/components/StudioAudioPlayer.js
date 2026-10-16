// src/components/StudioAudioPlayer.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cancelDutchSpeech } from '../utils/speech';

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export default function StudioAudioPlayer({ audioData, lang = 'tr', type = 'dialogue' }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isTr = lang === 'tr';

  // Seslendirmeyi başlat/durdur
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Tarayıcı Web Speech seslendirmesini anında durdur
      cancelDutchSpeech();
      // Diğer ses bileşenlerini uyar
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('studioAudioStarted', { 
          detail: { src: audioData.src } 
        }));
      }
      setIsLoading(true);
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoading(false);
          })
          .catch((err) => {
            console.warn('Audio playback error:', err);
            setIsLoading(false);
            setIsPlaying(false);
          });
      }
    }
  }, [isPlaying, audioData.src]);

  // Geri / İleri sarma
  const skip = useCallback((seconds) => {
    if (!audioRef.current) return;
    const newTime = Math.min(Math.max(audioRef.current.currentTime + seconds, 0), duration || 9999);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  // İlerleme çubuğunda tıklama / kaydırma
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Oynatma hızı değiştirme (0.8x, 1.0x, 1.2x, 1.5x döngüsü)
  const cyclePlaybackRate = () => {
    const rates = [0.8, 1.0, 1.2, 1.5];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  // Sessize al / aç
  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Web Speech veya başka stüdyo kaydı başladığında bu oynatıcıyı otomatik durdur
  useEffect(() => {
    const handleDutchSpeech = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };

    const handleOtherStudioAudio = (e) => {
      if (e.detail?.src !== audioData.src && audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };

    window.addEventListener('dutchSpeechStarted', handleDutchSpeech);
    window.addEventListener('studioAudioStarted', handleOtherStudioAudio);

    return () => {
      window.removeEventListener('dutchSpeechStarted', handleDutchSpeech);
      window.removeEventListener('studioAudioStarted', handleOtherStudioAudio);
    };
  }, [audioData.src]);

  // MediaSession API: Mobil kilit ekranı ve bildirim çubuğunda podcast kontrolleri
  useEffect(() => {
    if ('mediaSession' in navigator && audioRef.current) {
      const title = audioData.title || (type === 'dialogue' ? 'Dialoog' : 'Leestekst');
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: title,
        artist: 'Nederlands in Gang (Studio Podcast)',
        album: isTr ? 'Hollandaca A1-A2 Dinleme & Anlama' : 'Dutch A1-A2 Listening & Comprehension',
        artwork: [
          { src: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        togglePlay();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current?.pause();
      });
      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        skip(-(details.seekOffset || 10));
      });
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        skip(details.seekOffset || 10);
      });
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.seekTime !== undefined && audioRef.current) {
          audioRef.current.currentTime = details.seekTime;
          setCurrentTime(details.seekTime);
        }
      });
    }
  }, [audioData, isTr, type, togglePlay, skip]);

  // Sayfa değişirse veya bileşen unmount olursa sesi durdur
  useEffect(() => {
    const audioEl = audioRef.current;
    return () => {
      if (audioEl) {
        audioEl.pause();
      }
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-indigo-500/50 mb-5">
      {/* Gizli Audio Elemanı */}
      <audio
        ref={audioRef}
        src={audioData.src}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
      />

      {/* Üst Kısım: Rozet ve Ekolayzır */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 font-mono text-[11px] font-extrabold tracking-wide uppercase shadow-sm">
            <i className="fa-solid fa-headphones text-xs text-indigo-400"></i>
            <span>{isTr ? 'Stüdyo Podcast Kaydı' : 'Studio Podcast Audio'}</span>
          </span>

          {isPlaying && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {isTr ? 'Oynatılıyor' : 'Playing'}
            </span>
          )}
        </div>

        {/* Ekolayzır Animasyonu (Sadece çalarken) */}
        <div className="flex items-center gap-1 h-4 px-2" title={isPlaying ? "Canlı Ses Akışı" : ""}>
          <span className={`w-1 bg-indigo-400 rounded-full transition-all duration-200 ${isPlaying ? 'h-4 animate-bounce' : 'h-1.5 opacity-40'}`}></span>
          <span className={`w-1 bg-teal-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-2 opacity-40'}`}></span>
          <span className={`w-1 bg-brand-400 rounded-full transition-all duration-250 ${isPlaying ? 'h-4.5 animate-bounce' : 'h-1.5 opacity-40'}`}></span>
          <span className={`w-1 bg-indigo-300 rounded-full transition-all duration-200 ${isPlaying ? 'h-2 animate-pulse' : 'h-2 opacity-40'}`}></span>
        </div>
      </div>

      {/* Başlık ve Açıklama */}
      <div className="mb-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
          <span>{audioData.title}</span>
        </h4>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          {audioData.description ? (audioData.description[lang] || audioData.description.tr) : ''}
        </p>
        <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-400 flex-wrap">
          {audioData.speakers && (
            <span className="flex items-center gap-1 text-slate-300">
              <i className="fa-solid fa-users text-indigo-400 text-[10px]"></i>
              <span className="text-slate-400">{isTr ? 'Karakterler:' : 'Speakers:'}</span> {audioData.speakers}
            </span>
          )}
          {audioData.narrator && (
            <span className="flex items-center gap-1 text-slate-300">
              <i className="fa-solid fa-microphone-lines text-indigo-400 text-[10px]"></i>
              <span className="text-slate-400">{isTr ? 'Seslendiren:' : 'Narrator:'}</span> {audioData.narrator}
            </span>
          )}
          {audioData.voices && (
            <span className="text-slate-400/80 font-mono text-[10px]">
              • {audioData.voices}
            </span>
          )}
        </div>
      </div>

      {/* Oynatıcı Kontrolleri ve İlerleme Çubuğu */}
      <div className="space-y-3 bg-slate-950/60 rounded-xl p-3 border border-slate-800">
        {/* İlerleme Çubuğu (Scrubber) */}
        <div className="space-y-1">
          <div className="relative flex items-center group">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.5"
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400 transition-all focus:outline-none"
              style={{
                background: `linear-gradient(to right, #6366f1 0%, #818cf8 ${progressPercent}%, #334155 ${progressPercent}%, #334155 100%)`
              }}
              title={isTr ? "İlerlet / Geri al" : "Seek"}
            />
          </div>

          {/* Süre Bilgisi */}
          <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 px-0.5">
            <span>{formatTime(currentTime)}</span>
            <span className="text-slate-400">{formatTime(duration || 0)}</span>
          </div>
        </div>

        {/* Ana Kontrol Butonları */}
        <div className="flex items-center justify-between pt-1">
          {/* Sol Kısım: Hız Değiştirme Butonu */}
          <button
            type="button"
            onClick={cyclePlaybackRate}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-teal-300 hover:text-white border border-slate-700/80 font-mono text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            title={isTr ? `Oynatma Hızı: ${playbackRate}x (Değiştirmek için tıkla)` : `Playback Speed: ${playbackRate}x (Click to change)`}
          >
            <i className="fa-solid fa-gauge-high text-[10px]"></i>
            <span>{playbackRate.toFixed(1)}x</span>
          </button>

          {/* Orta Kısım: -10s, Oynat/Durdur, +10s */}
          <div className="flex items-center gap-3">
            {/* 10 Saniye Geri */}
            <button
              type="button"
              onClick={() => skip(-10)}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-90 border border-slate-700 cursor-pointer"
              title={isTr ? "10 saniye geri sar" : "Rewind 10 seconds"}
            >
              <i className="fa-solid fa-rotate-left text-xs"></i>
            </button>

            {/* Oynat / Durdur Butonu */}
            <button
              type="button"
              onClick={togglePlay}
              disabled={isLoading}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 cursor-pointer ${
                isPlaying
                  ? 'bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white shadow-rose-950/60 ring-2 ring-rose-400/40'
                  : 'bg-gradient-to-r from-indigo-600 to-brand-500 hover:from-indigo-500 hover:to-brand-400 text-white shadow-indigo-950/60 ring-2 ring-indigo-400/30'
              }`}
              title={isPlaying ? (isTr ? 'Durdur' : 'Pause') : (isTr ? 'Oynat' : 'Play')}
            >
              {isLoading ? (
                <i className="fa-solid fa-circle-notch fa-spin text-base"></i>
              ) : isPlaying ? (
                <i className="fa-solid fa-pause text-base"></i>
              ) : (
                <i className="fa-solid fa-play text-base translate-x-0.5"></i>
              )}
            </button>

            {/* 10 Saniye İleri */}
            <button
              type="button"
              onClick={() => skip(10)}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-90 border border-slate-700 cursor-pointer"
              title={isTr ? "10 saniye ileri sar" : "Forward 10 seconds"}
            >
              <i className="fa-solid fa-rotate-right text-xs"></i>
            </button>
          </div>

          {/* Sağ Kısım: Sessiz / Ses Açık */}
          <button
            type="button"
            onClick={toggleMute}
            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all border border-slate-700/80 cursor-pointer"
            title={isMuted ? (isTr ? "Sesi Aç" : "Unmute") : (isTr ? "Sessize Al" : "Mute")}
          >
            <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-rose-400' : 'fa-volume-high text-slate-300'} text-xs`}></i>
          </button>
        </div>
      </div>

      {/* Alt Bilgi İpucu (Ekran kapalıyken arka planda dinleme bilgisi) */}
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/40 rounded-lg px-2.5 py-1.5 border border-slate-800/60">
        <i className="fa-solid fa-circle-info text-indigo-400 text-xs flex-shrink-0"></i>
        <span>
          {isTr 
            ? 'Kulaklığınızı takip ekranı kapatsanız veya başka sayfaya geçseniz dahi podcast gibi kesintisiz dinleyebilirsiniz.' 
            : 'You can lock your phone screen or browse with headphones for uninterrupted background listening.'}
        </span>
      </div>
    </div>
  );
}

