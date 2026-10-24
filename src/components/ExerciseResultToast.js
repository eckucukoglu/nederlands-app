// src/components/ExerciseResultToast.js
import React, { useEffect, useState } from 'react';

/**
 * ExerciseResultToast
 * 
 * Elegant, mobile-optimized floating toast that displays correct/incorrect evaluation
 * after checking exercise answers, and smoothly fades away.
 */
export default function ExerciseResultToast({
  stats,
  lang = 'tr',
  onClose,
  duration = 4200
}) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!stats) return;
    setIsFading(false);

    // After 3.2s, begin the slow, graceful fade-out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, Math.max(1500, duration - 1000));

    // After duration (4.2s), trigger unmount
    const removeTimer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [stats?.ts, duration, onClose]);

  if (!stats) return null;

  const isTr = lang === 'tr';
  const { correct = 0, incorrect = 0, unanswered = 0, total = 0 } = stats;
  const isPerfect = total > 0 && correct === total && incorrect === 0;

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-1000 ease-out transform ${
        isFading ? 'opacity-0 translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100 animate-toast-slide-up'
      } w-[calc(100vw-32px)] max-w-sm sm:max-w-md`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.15)] rounded-2xl p-3 sm:px-4 sm:py-3 flex items-center justify-between gap-2.5 text-slate-100">
        
        {/* Left: Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm ${
            isPerfect 
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
              : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
          }`}>
            <i className={`fa-solid ${isPerfect ? 'fa-award' : 'fa-list-check'}`}></i>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs sm:text-sm font-extrabold text-white truncate">
              {isPerfect 
                ? (isTr ? 'Tebrikler! Hepsi Doğru' : 'Perfect! All Correct') 
                : (isTr ? 'Test Değerlendirmesi' : 'Exercise Result')}
            </span>
            <span className="text-[10px] text-slate-400 font-medium truncate">
              {total} {isTr ? 'soru kontrol edildi' : 'questions checked'}
            </span>
          </div>
        </div>

        {/* Right: Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Doğru Badge */}
          <div className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-xl text-xs font-bold shadow-sm">
            <i className="fa-solid fa-circle-check text-emerald-400 text-[11px]"></i>
            <span>{correct} {isTr ? 'Doğru' : 'Correct'}</span>
          </div>

          {/* Yanlış Badge */}
          <div className="flex items-center gap-1 bg-rose-950/80 border border-rose-500/40 text-rose-300 px-2.5 py-1 rounded-xl text-xs font-bold shadow-sm">
            <i className="fa-solid fa-circle-xmark text-rose-400 text-[11px]"></i>
            <span>{incorrect} {isTr ? 'Yanlış' : 'Incorrect'}</span>
          </div>

          {/* Boş Badge (varsa) */}
          {unanswered > 0 && (
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-600/60 text-slate-300 px-2 py-1 rounded-xl text-xs font-bold shadow-sm">
              <i className="fa-solid fa-circle-question text-slate-400 text-[10px]"></i>
              <span>{unanswered} {isTr ? 'Boş' : 'Empty'}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}