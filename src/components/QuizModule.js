// src/components/QuizModule.js
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/quizData';
import { auth, toggleReportQuestion } from '../firebase'; // YENİ IMPORT

export default function QuizModule({ tags = [], onClose, title = "Oefening" }) {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const [activeTags, setActiveTags] = useState(tags);
  const [deck, setDeck] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const [quizHistory, setQuizHistory] = useState(() => JSON.parse(localStorage.getItem('quizHistory')) || {});

  // YENİ STATE'LER
  const [studyWeakOnly, setStudyWeakOnly] = useState(false); 
  const [isFinished, setIsFinished] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [wrongTagsCloud, setWrongTagsCloud] = useState({}); 
  const [reportedQuestions, setReportedQuestions] = useState(() => JSON.parse(localStorage.getItem('reportedQuestions')) || {}); // Hatalı Sorular

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || {};
    
    let filtered = activeTags.length === 0 
        ? [...quizQuestions] 
        : quizQuestions.filter(q => q.tags && q.tags.some(tag => activeTags.includes(tag)));
    
    if (studyWeakOnly) {
      filtered = filtered.filter(q => {
        const hist = history[q.id];
        return hist && hist.incorrect > hist.correct;
      });
    }
    
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    setDeck(filtered);
    setCurrentIndex(0);
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    setIsFinished(false);
    setSessionScore({ correct: 0, incorrect: 0, skipped: 0 });
    setWrongTagsCloud({});
  }, [activeTags, studyWeakOnly]);

  const currentQ = deck[currentIndex];
  const qHistory = currentQ ? quizHistory[currentQ.id] || { correct: 0, incorrect: 0 } : null;
  const isReported = currentQ ? reportedQuestions[currentQ.id] : false; // YENİ: Soru bildirildi mi?

  const shuffledOptions = useMemo(() => {
    if (!currentQ || !currentQ.options) return [];
    let optionsCopy = [...currentQ.options];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }
    return optionsCopy;
  }, [currentQ]);

  // YENİ: Hatalı Soru Bildirim Fonksiyonu
  const handleReportToggle = async () => {
    if (!currentQ) return;
    if (!auth.currentUser) {
      alert(isTr ? "Hata bildirmek için giriş yapmalısınız." : "You must be logged in to report an error.");
      return;
    }

    const newStatus = !isReported;
    
    // Lokal state'i güncelle (kullanıcı anında geri bildirim görsün)
    const updatedReports = { ...reportedQuestions, [currentQ.id]: newStatus };
    setReportedQuestions(updatedReports);
    localStorage.setItem('reportedQuestions', JSON.stringify(updatedReports));

    // Firebase'e gönder/sil
    await toggleReportQuestion(currentQ, auth.currentUser, newStatus);
  };

  const handleTagClick = (clickedTag) => {
    setActiveTags([clickedTag]);
  };

  const handleCheck = () => {
    if (!userAnswer.trim()) return;

    const correct = userAnswer.trim().toLowerCase() === currentQ.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);

    const newHistory = { ...quizHistory };
    if (!newHistory[currentQ.id]) newHistory[currentQ.id] = { correct: 0, incorrect: 0 };
    
    if (correct) {
      newHistory[currentQ.id].correct += 1;
      setSessionScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      newHistory[currentQ.id].incorrect += 1;
      setSessionScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      
      if (currentQ.tags) {
        const newCloud = { ...wrongTagsCloud };
        currentQ.tags.forEach(t => {
          newCloud[t] = (newCloud[t] || 0) + 1;
        });
        setWrongTagsCloud(newCloud);
      }
    }
    
    setQuizHistory(newHistory);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
  };

  const handleDontKnow = () => {
    setIsCorrect(false);
    setIsAnswered(true);
    setUserAnswer(isTr ? 'Bilinmiyor / Pas' : 'Unknown');

    const newHistory = { ...quizHistory };
    if (!newHistory[currentQ.id]) newHistory[currentQ.id] = { correct: 0, incorrect: 0 };
    newHistory[currentQ.id].incorrect += 1;
    
    setSessionScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));

    if (currentQ.tags) {
      const newCloud = { ...wrongTagsCloud };
      currentQ.tags.forEach(t => {
        newCloud[t] = (newCloud[t] || 0) + 1;
      });
      setWrongTagsCloud(newCloud);
    }

    setQuizHistory(newHistory);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
  };

  const handleSkip = () => {
    setSessionScore(prev => ({ ...prev, skipped: prev.skipped + 1 }));
    goToNextState();
  };

  const handleNext = () => {
    goToNextState();
  };

  const goToNextState = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setIsFinished(true); 
    }
  };

  if (deck.length === 0) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-700 p-8 text-center" onClick={e => e.stopPropagation()}>
          <i className="fa-solid fa-ghost text-4xl text-slate-500 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-200 mb-2">{isTr ? 'Soru Bulunamadı' : 'No Questions Found'}</h3>
          <p className="text-slate-400 text-sm mb-6">{isTr ? 'Bu kriterlere uygun soru bulunamadı.' : 'No questions found matching these criteria.'}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {studyWeakOnly && (
              <button 
                onClick={() => setStudyWeakOnly(false)} 
                className="bg-rose-900/40 text-rose-300 px-5 py-2.5 rounded-xl border border-rose-800/50 hover:bg-rose-900/60 transition-colors font-bold"
              >
                <i className="fa-solid fa-filter-circle-xmark mr-2"></i>
                {isTr ? 'Filtreyi Kaldır' : 'Clear Filter'}
              </button>
            )}
            <button onClick={onClose} className="bg-slate-800 text-white px-6 py-2.5 rounded-xl border border-slate-600 hover:bg-slate-700 transition-colors font-bold">
              {isTr ? 'Kapat' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const totalAnswered = sessionScore.correct + sessionScore.incorrect;
    const successRate = totalAnswered > 0 ? Math.round((sessionScore.correct / totalAnswered) * 100) : 0;
    
    let resultMessage = "";
    let resultIcon = "";
    let resultColor = "";

    if (successRate >= 80) {
      resultMessage = isTr ? "Mükemmel İş Çıkardın!" : "Excellent Work!";
      resultIcon = "fa-trophy";
      resultColor = "text-emerald-400";
    } else if (successRate >= 50) {
      resultMessage = isTr ? "İyi Gidiyorsun, Ama Biraz Daha Pratik Şart." : "Good, But Needs More Practice.";
      resultIcon = "fa-thumbs-up";
      resultColor = "text-brand-400";
    } else {
      resultMessage = isTr ? "Bu Konuda Eksiklerin Var, Tekrar Etmelisin." : "You Need to Review This Topic.";
      resultIcon = "fa-book-open";
      resultColor = "text-rose-400";
    }

    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-700 p-8 flex flex-col items-center animate-fadeIn" onClick={e => e.stopPropagation()}>
          
          <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-rose-400 text-xl transition-colors">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <i className={`fa-solid ${resultIcon} ${resultColor} text-6xl drop-shadow-lg mb-4`}></i>
          <h2 className="text-2xl font-extrabold text-white mb-2">{isTr ? 'Test Tamamlandı!' : 'Quiz Completed!'}</h2>
          <p className={`${resultColor} font-bold text-center mb-6`}>{resultMessage}</p>

          <div className="grid grid-cols-3 gap-4 w-full mb-8">
            <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-3xl font-black text-emerald-400">{sessionScore.correct}</span>
              <span className="text-xs font-bold text-slate-400 uppercase mt-1">{isTr ? 'Doğru' : 'Correct'}</span>
            </div>
            <div className="bg-rose-900/20 border border-rose-800/50 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-3xl font-black text-rose-400">{sessionScore.incorrect}</span>
              <span className="text-xs font-bold text-slate-400 uppercase mt-1">{isTr ? 'Yanlış' : 'Incorrect'}</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-3xl font-black text-slate-300">{sessionScore.skipped}</span>
              <span className="text-xs font-bold text-slate-400 uppercase mt-1">{isTr ? 'Boş' : 'Skipped'}</span>
            </div>
          </div>

          {Object.keys(wrongTagsCloud).length > 0 && (
            <div className="w-full bg-slate-800/50 border border-slate-700 p-5 rounded-2xl mb-8">
              <p className="text-xs text-slate-400 mb-3 text-center">
                <i className="fa-solid fa-magnifying-glass-chart mr-1.5 text-brand-400"></i>
                {isTr ? 'Ağırlıklı Olarak Yanlış Yaptığınız Konular:' : 'Topics you missed most:'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(wrongTagsCloud)
                  .sort((a, b) => b[1] - a[1]) 
                  .map(([tag, count]) => (
                  <button 
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="group bg-rose-950/40 border border-rose-900/50 hover:bg-rose-900 hover:border-rose-500 rounded-lg px-3 py-1.5 flex items-center gap-2 transition-all cursor-pointer"
                    title={isTr ? 'Sadece bu konudan tekrar test çöz' : 'Test again with this topic only'}
                  >
                    <span className="text-rose-300 font-bold text-sm">#{tag}</span>
                    <span className="bg-rose-900 group-hover:bg-rose-700 text-rose-200 text-[10px] px-1.5 py-0.5 rounded-md font-black">{count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button onClick={onClose} className="w-full bg-brand-600 text-white py-3.5 rounded-xl font-bold border border-brand-500 hover:bg-brand-500 transition-all shadow-lg">
            {isTr ? 'Kapat ve Dön' : 'Close and Return'}
          </button>

        </div>
      </div>
    );
  }

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
            <i className="fa-solid fa-graduation-cap text-brand-400"></i> {title}
          </h3>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold bg-slate-950/50 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-700">
               <span className="text-slate-400 font-normal mr-1 hidden sm:inline">{isTr ? 'Bu Soru:' : 'This Q:'}</span>
               <span className="text-emerald-400 flex items-center gap-1" title={isTr ? 'Doğru' : 'Correct'}><i className="fa-solid fa-check"></i> {qHistory.correct}</span>
               <span className="text-slate-600">|</span>
               <span className="text-rose-400 flex items-center gap-1" title={isTr ? 'Yanlış' : 'Incorrect'}><i className="fa-solid fa-xmark"></i> {qHistory.incorrect}</span>
            </div>
            
            {/* YENİ: HATALI SORU BİLDİRME BUTONU */}
            <button 
              onClick={handleReportToggle}
              title={isTr ? "Hatalı Soru Bildir" : "Report Question Error"}
              className={`text-lg transition-colors px-2 ${isReported ? 'text-amber-400 hover:text-amber-300' : 'text-slate-500 hover:text-amber-400'}`}
            >
              <i className={isReported ? "fa-solid fa-flag" : "fa-regular fa-flag"}></i>
            </button>
            
            <button onClick={onClose} className="text-slate-400 hover:text-rose-400 text-xl transition-colors ml-1">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5">
          <div className="bg-brand-500 h-full transition-all duration-300" style={{ width: `${((currentIndex) / deck.length) * 100}%` }}></div>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
           <div className="text-center mb-8">
              
              {/* Filtre ve Etiketler */}
              <div className="flex flex-col items-center gap-3 mb-4">
                
                {/* Zayıf Sorular Filtresi Butonu */}
                <button 
                  onClick={() => setStudyWeakOnly(!studyWeakOnly)}
                  className={`text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                    studyWeakOnly 
                      ? 'bg-rose-900/50 text-rose-300 border-rose-700 shadow-[0_0_10px_rgba(225,29,72,0.2)]' 
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:border-slate-500'
                  }`}
                >
                  <i className="fa-solid fa-filter"></i>
                  {isTr ? 'Sadece Zorlandıklarım' : 'Weakest Questions Only'}
                </button>

                {currentQ.tags && currentQ.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                    {currentQ.tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className="text-[10px] font-semibold bg-indigo-950/60 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-800/50 shadow-sm hover:bg-indigo-900 hover:text-white transition-all cursor-pointer"
                        title={isTr ? `Bu etiketle ilgili sorulara geç: #${tag}` : `Filter by tag: #${tag}`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2 block">
                {isTr ? 'Soru' : 'Question'} {currentIndex + 1} / {deck.length}
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow-sm">
                {renderQuestionText()}
              </h2>
           </div>

           {currentQ.type === 'multiple_choice' && (
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {shuffledOptions.map(opt => {
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

           <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
             {!isAnswered ? (
               <>
                 <button 
                   onClick={handleCheck}
                   disabled={!userAnswer}
                   className="w-full sm:w-auto bg-brand-600 text-white px-8 py-3.5 rounded-xl font-bold border border-brand-500 shadow-[0_0_15px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:shadow-none hover:bg-brand-500 transition-all"
                 >
                   <i className="fa-solid fa-check mr-2"></i> {isTr ? 'Kontrol Et' : 'Check'}
                 </button>

                 <div className="flex gap-2 w-full sm:w-auto">
                   <button 
                     onClick={handleDontKnow}
                     className="flex-1 sm:flex-initial bg-slate-800 hover:bg-rose-950/50 text-slate-300 hover:text-rose-300 px-5 py-3.5 rounded-xl font-bold border border-slate-700 hover:border-rose-800/50 transition-all text-xs sm:text-sm"
                     title={isTr ? 'Yanlış kabul edilir' : 'Counts as incorrect'}
                   >
                     <i className="fa-solid fa-circle-question mr-1.5 text-rose-400"></i> {isTr ? 'Bilmiyorum' : "Don't know"}
                   </button>

                   <button 
                     onClick={handleSkip}
                     className="flex-1 sm:flex-initial bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-5 py-3.5 rounded-xl font-bold border border-slate-700 hover:border-slate-600 transition-all text-xs sm:text-sm"
                     title={isTr ? 'Skoru etkilemeden sonraki soruya geçer' : 'Skip without affecting score'}
                   >
                     <i className="fa-solid fa-forward mr-1.5 text-amber-400"></i> {isTr ? 'Soruyu Geç' : 'Skip'}
                   </button>
                 </div>
               </>
             ) : (
               <button 
                 onClick={handleNext}
                 className="bg-indigo-600 text-white px-10 py-3.5 rounded-xl font-bold border border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all"
               >
                 {currentIndex < deck.length - 1 ? (isTr ? 'Sıradaki Soru' : 'Next Question') : (isTr ? 'Testi Bitir' : 'Finish')} <i className="fa-solid fa-arrow-right ml-2"></i>
               </button>
             )}
           </div>
        </div>

      </div>
    </div>
  );
}