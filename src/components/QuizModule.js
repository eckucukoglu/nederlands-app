// src/components/QuizModule.js
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/quizData';

export default function QuizModule({ tags = [], onClose, title = "Oefening" }) {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  // Soruları verilen tag'lere göre filtrele ve Fisher-Yates algoritması ile KARIŞTIR
  const filteredQuestions = useMemo(() => {
    let filtered = tags.length === 0 
        ? [...quizQuestions] 
        : quizQuestions.filter(q => q.tags.some(tag => tags.includes(tag)));
    
    // Gerçek rastgelelik için Fisher-Yates karıştırma algoritması
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    return filtered;
  }, [tags]); // Sadece modül açıldığında (tag'ler değiştiğinde) 1 kez karıştırır.

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizHistory, setQuizHistory] = useState({});

  // Component yüklendiğinde geçmiş istatistikleri çek
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || {};
    setQuizHistory(history);
  }, []);

  const currentQ = filteredQuestions[currentIndex];
  // Mevcut sorunun daha önceki performansını getir
  const qHistory = currentQ ? quizHistory[currentQ.id] || { correct: 0, incorrect: 0 } : null;

  const handleCheck = () => {
    if (!userAnswer.trim()) return;

    const correct = userAnswer.trim().toLowerCase() === currentQ.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);

    // İstatistiği güncelle ve LocalStorage'a kaydet (Bulut senkronizasyonu için hazır hale gelir)
    const newHistory = { ...quizHistory };
    if (!newHistory[currentQ.id]) newHistory[currentQ.id] = { correct: 0, incorrect: 0 };
    
    if (correct) {
      newHistory[currentQ.id].correct += 1;
    } else {
      newHistory[currentQ.id].incorrect += 1;
    }
    
    setQuizHistory(newHistory);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      onClose(); // Test bittiğinde modülü kapat
    }
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-700 p-8 text-center" onClick={e => e.stopPropagation()}>
          <i className="fa-solid fa-ghost text-4xl text-slate-500 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-200 mb-2">{isTr ? 'Soru Bulunamadı' : 'No Questions Found'}</h3>
          <p className="text-slate-400 text-sm mb-6">{isTr ? 'Bu konuyla ilgili henüz soru eklenmemiş.' : 'No questions have been added for this topic yet.'}</p>
          <button onClick={onClose} className="bg-slate-800 text-white px-6 py-2.5 rounded-xl border border-slate-600 hover:bg-slate-700 transition-colors">
            {isTr ? 'Kapat' : 'Close'}
          </button>
        </div>
      </div>
    );
  }

  // Cümledeki "___" kısmını bulup input veya durum kutusu olarak render etmek için yardımcı fonksiyon
  const renderQuestionText = () => {
    if (!currentQ.questionNl.includes('___')) return currentQ.questionNl;
    
    const parts = currentQ.questionNl.split('___');
    return (
      <span className="leading-loose">
        {parts[0]}
        {currentQ.type === 'fill_in' && !isAnswered ? (
          <input 
            autoFocus
            type="text" 
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            className="mx-2 bg-slate-800 border-b-2 border-slate-500 text-brand-300 px-2 py-1 w-24 text-center focus:outline-none focus:border-brand-400 shadow-inner rounded-t-md"
          />
        ) : (
          <span className={`mx-2 px-3 py-1 rounded-md font-bold ${isAnswered ? (isCorrect ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-700' : 'bg-rose-900/50 text-rose-400 border border-rose-700 line-through') : 'text-slate-500 border-b-2 border-slate-500'}`}>
            {isAnswered ? userAnswer || '___' : '___'}
          </span>
        )}
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden relative" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-4 sm:p-5 flex justify-between items-center border-b border-slate-800 bg-slate-800/50">
          <h3 className="text-base sm:text-lg font-bold text-slate-200 flex items-center gap-2">
            <i className="fa-solid fa-dumbbell text-brand-400"></i> {title}
          </h3>
          
          <div className="flex items-center gap-4">
            {/* Soru Geçmişi İstatistiği */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold bg-slate-950/50 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-700">
               <span className="text-slate-400 font-normal mr-1 hidden sm:inline">{isTr ? 'Bu Soru:' : 'This Q:'}</span>
               <span className="text-emerald-400 flex items-center gap-1" title={isTr ? 'Doğru (Correct)' : 'Correct'}><i className="fa-solid fa-check"></i> {qHistory.correct}</span>
               <span className="text-slate-600">|</span>
               <span className="text-rose-400 flex items-center gap-1" title={isTr ? 'Yanlış (Incorrect)' : 'Incorrect'}><i className="fa-solid fa-xmark"></i> {qHistory.incorrect}</span>
            </div>
            
            <button onClick={onClose} className="text-slate-400 hover:text-rose-400 text-xl transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5">
          <div className="bg-brand-500 h-full transition-all duration-300" style={{ width: `${((currentIndex) / filteredQuestions.length) * 100}%` }}></div>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
           <div className="text-center mb-8">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2 block">
                {isTr ? 'Soru' : 'Question'} {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow-sm">
                {renderQuestionText()}
              </h2>
           </div>

           {/* Seçenekler (Çoktan seçmeli için) */}
           {currentQ.type === 'multiple_choice' && (
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {currentQ.options.map(opt => {
                  let btnClass = "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700";
                  if (isAnswered) {
                    if (opt === currentQ.correctAnswer) btnClass = "bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                    else if (opt === userAnswer) btnClass = "bg-rose-900/40 border-rose-500 text-rose-300 opacity-50";
                    else btnClass = "bg-slate-800 border-slate-700 text-slate-500 opacity-50";
                  } else if (userAnswer === opt) {
                    btnClass = "bg-brand-900/40 border-brand-500 text-brand-300";
                  }

                  return (
                    <button 
                      key={opt}
                      disabled={isAnswered}
                      onClick={() => setUserAnswer(opt)}
                      className={`px-4 py-4 rounded-xl border-2 font-bold transition-all text-sm sm:text-base ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
             </div>
           )}

           {/* Sonuç & Açıklama */}
           {isAnswered && (
             <div className={`mt-4 p-5 rounded-xl border animate-fadeIn flex flex-col gap-2 ${isCorrect ? 'bg-emerald-900/10 border-emerald-800/50' : 'bg-rose-900/10 border-rose-800/50'}`}>
               <h4 className={`text-lg font-bold flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                 <i className={`fa-solid ${isCorrect ? 'fa-face-smile-beam' : 'fa-face-frown-open'}`}></i>
                 {isCorrect ? (isTr ? 'Harika!' : 'Correct!') : (isTr ? 'Yanlış!' : 'Incorrect!')}
               </h4>
               {!isCorrect && (
                 <p className="text-slate-300 text-sm">
                   {isTr ? 'Doğru cevap:' : 'Correct answer:'} <strong className="text-white px-2 py-0.5 bg-slate-800 rounded border border-slate-600 ml-1">{currentQ.correctAnswer}</strong>
                 </p>
               )}
               <p className="text-slate-400 text-sm mt-2 italic border-t border-slate-700/50 pt-3">
                 <i className="fa-solid fa-lightbulb text-amber-400 mr-1.5"></i> 
                 {isTr ? currentQ.explanationTr : currentQ.explanationEn}
               </p>
             </div>
           )}

           {/* Aksiyon Butonu */}
           <div className="mt-8 flex justify-center">
             {!isAnswered ? (
               <button 
                 onClick={handleCheck}
                 disabled={!userAnswer}
                 className="bg-brand-600 text-white px-10 py-3.5 rounded-xl font-bold border border-brand-500 shadow-[0_0_15px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:shadow-none hover:bg-brand-500 transition-all"
               >
                 <i className="fa-solid fa-check mr-2"></i> {isTr ? 'Kontrol Et' : 'Check'}
               </button>
             ) : (
               <button 
                 onClick={handleNext}
                 className="bg-indigo-600 text-white px-10 py-3.5 rounded-xl font-bold border border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all"
               >
                 {currentIndex < filteredQuestions.length - 1 ? (isTr ? 'Sıradaki Soru' : 'Next Question') : (isTr ? 'Testi Bitir' : 'Finish')} <i className="fa-solid fa-arrow-right ml-2"></i>
               </button>
             )}
           </div>
        </div>

      </div>
    </div>
  );
}