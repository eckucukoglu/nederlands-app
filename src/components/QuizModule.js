// src/components/QuizModule.js
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/quizData';
import { auth, toggleReportQuestion, toggleDuplicateQuestion, toggleGoodQuestion } from '../firebase'; 

export default function QuizModule({ tags = [], onClose, title = "Oefening" }) {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const [activeTags, setActiveTags] = useState(tags);
  const [deck, setDeck] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userMatches, setUserMatches] = useState({});
  const [activeSlotId, setActiveSlotId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const [quizHistory, setQuizHistory] = useState(() => JSON.parse(localStorage.getItem('quizHistory')) || {});

  const [activeFilter, setActiveFilter] = useState('all'); 
  
  const [isFinished, setIsFinished] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [wrongTagsCloud, setWrongTagsCloud] = useState({}); 
  const [reportedQuestions, setReportedQuestions] = useState(() => JSON.parse(localStorage.getItem('reportedQuestions')) || {}); 
  const [duplicateQuestions, setDuplicateQuestions] = useState(() => JSON.parse(localStorage.getItem('duplicateQuestions')) || {}); 
  const [goodQuestions, setGoodQuestions] = useState(() => JSON.parse(localStorage.getItem('goodQuestions')) || {}); 

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || {};
    
    let filtered = activeTags.length === 0 
        ? [...quizQuestions] 
        : quizQuestions.filter(q => q.tags && q.tags.some(tag => activeTags.includes(tag)));
    
    if (activeFilter === 'weak') {
      filtered = filtered.filter(q => {
        const hist = history[q.id];
        return hist && hist.incorrect > hist.correct;
      });
    } else if (activeFilter === 'unattempted') {
      filtered = filtered.filter(q => {
        const hist = history[q.id];
        return !hist || (hist.incorrect === 0 && hist.correct === 0);
      });
    }
    
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    setDeck(filtered);
    setCurrentIndex(0);
    setUserAnswer('');
    setUserMatches({});
    setActiveSlotId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setIsFinished(false);
    setSessionScore({ correct: 0, incorrect: 0, skipped: 0 });
    setWrongTagsCloud({});
  }, [activeTags, activeFilter]);

  const currentQ = deck[currentIndex];
  const qHistory = currentQ ? quizHistory[currentQ.id] || { correct: 0, incorrect: 0 } : null;
  const isReported = currentQ ? !!reportedQuestions[currentQ.id] : false;
  const isDuplicate = currentQ ? !!duplicateQuestions[currentQ.id] : false;
  const isGood = currentQ ? !!goodQuestions[currentQ.id] : false;

  useEffect(() => {
    setUserMatches({});
    setActiveSlotId(null);
  }, [currentQ?.id]);

  const shuffledOptions = useMemo(() => {
    if (!currentQ || !currentQ.options) return [];
    let optionsCopy = [...currentQ.options];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }
    return optionsCopy;
  }, [currentQ]);

  // Eşleştirme Soruları İçin Cümlelerin Sırasını Karıştır (Her karşılaşıldığında)
  const shuffledMatchingItems = useMemo(() => {
    if (!currentQ || currentQ.type !== 'matching' || !currentQ.items) return [];
    let itemsCopy = [...currentQ.items];
    for (let i = itemsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [itemsCopy[i], itemsCopy[j]] = [itemsCopy[j], itemsCopy[i]];
    }
    return itemsCopy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQ, currentIndex]);

  // Eşleştirme Soruları İçin Kelime Havuzunu Karıştır (Doğru cevaplar + Yanıltıcılar)
  const shuffledWordPool = useMemo(() => {
    if (!currentQ || currentQ.type !== 'matching') return [];
    let pool = currentQ.options 
      ? [...currentQ.options] 
      : [...(currentQ.items || []).map(i => i.answer), ...(currentQ.distractors || [])];
    
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQ, currentIndex]);

  const handleReportToggle = async () => {
    if (!currentQ) return;
    if (!auth.currentUser) {
      alert(isTr ? "Hata bildirmek için giriş yapmalısınız." : "You must be logged in to report an error.");
      return;
    }

    const newStatus = !isReported;
    
    try {
      await toggleReportQuestion(currentQ, auth.currentUser, newStatus);
      
      const updatedReports = { ...reportedQuestions, [currentQ.id]: newStatus };
      setReportedQuestions(updatedReports);
      localStorage.setItem('reportedQuestions', JSON.stringify(updatedReports));

    } catch (error) {
      console.error(error);
      alert(isTr 
        ? "Soru bildirilirken bir hata oluştu. Lütfen bağlantınızı veya izinleri kontrol edin." 
        : "An error occurred while reporting. Please check your connection."
      );
    }
  };

  const handleDuplicateToggle = async () => {
    if (!currentQ) return;
    if (!auth.currentUser) {
      alert(isTr ? "Kopya soru bildirmek için giriş yapmalısınız." : "You must be logged in to report a duplicate question.");
      return;
    }

    const newStatus = !isDuplicate;
    
    try {
      await toggleDuplicateQuestion(currentQ, auth.currentUser, newStatus);
      
      const updatedDuplicates = { ...duplicateQuestions, [currentQ.id]: newStatus };
      setDuplicateQuestions(updatedDuplicates);
      localStorage.setItem('duplicateQuestions', JSON.stringify(updatedDuplicates));

    } catch (error) {
      console.error(error);
      alert(isTr 
        ? "Kopya soru bildirilirken bir hata oluştu. Lütfen bağlantınızı veya izinleri kontrol edin." 
        : "An error occurred while reporting duplicate. Please check your connection."
      );
    }
  };

  const handleGoodToggle = async () => {
    if (!currentQ) return;
    if (!auth.currentUser) {
      alert(isTr ? "İyi soru olarak işaretlemek için giriş yapmalısınız." : "You must be logged in to mark as a good question.");
      return;
    }

    const newStatus = !isGood;
    
    try {
      await toggleGoodQuestion(currentQ, auth.currentUser, newStatus);
      
      const updatedGoods = { ...goodQuestions, [currentQ.id]: newStatus };
      setGoodQuestions(updatedGoods);
      localStorage.setItem('goodQuestions', JSON.stringify(updatedGoods));

    } catch (error) {
      console.error(error);
      alert(isTr 
        ? "İyi soru işaretlenirken bir hata oluştu. Lütfen bağlantınızı veya izinleri kontrol edin." 
        : "An error occurred while marking good question. Please check your connection."
      );
    }
  };

  const handleTagClick = (clickedTag) => {
    setActiveTags([clickedTag]);
  };

  const toggleFilter = (filterType) => {
    if (activeFilter === filterType) {
      setActiveFilter('all'); 
    } else {
      setActiveFilter(filterType);
    }
  };

  const handleCheck = (answerParam) => {
    if (currentQ?.type === 'matching') {
      const items = currentQ.items || [];
      const total = items.length;
      let correctCount = 0;
      items.forEach(item => {
        if ((userMatches[item.id] || '').trim().toLowerCase() === item.answer.trim().toLowerCase()) {
          correctCount++;
        }
      });

      const allCorrect = total > 0 && correctCount === total;
      setIsCorrect(allCorrect);
      setIsAnswered(true);

      const newHistory = { ...quizHistory };
      if (!newHistory[currentQ.id]) newHistory[currentQ.id] = { correct: 0, incorrect: 0 };

      if (allCorrect) {
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
      return;
    }

    const rawAnswer = typeof answerParam === 'string' ? answerParam : userAnswer;
    if (!rawAnswer || !rawAnswer.trim()) return;

    const answer = rawAnswer.trim();
    const correct = answer.toLowerCase() === currentQ.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
    setUserAnswer(answer);

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

  const handleOptionSelect = (opt) => {
    if (isAnswered) return;
    handleCheck(opt);
  };

  // Eşleştirme Soruları: Kelimeyi Boşluğa Yerleştir / Kaldır
  const handlePlaceWord = (word) => {
    if (isAnswered) return;

    const currentlyInSlot = Object.keys(userMatches).find(id => userMatches[id] === word);

    if (activeSlotId) {
      setUserMatches(prev => {
        const next = { ...prev };
        if (currentlyInSlot && currentlyInSlot !== activeSlotId) {
          delete next[currentlyInSlot];
        }
        next[activeSlotId] = word;
        return next;
      });

      const nextEmpty = shuffledMatchingItems.find(it => it.id !== activeSlotId && (!userMatches[it.id] || it.id === currentlyInSlot));
      setActiveSlotId(nextEmpty ? nextEmpty.id : null);
      return;
    }

    if (currentlyInSlot) {
      setUserMatches(prev => {
        const next = { ...prev };
        delete next[currentlyInSlot];
        return next;
      });
      return;
    }

    const firstEmpty = shuffledMatchingItems.find(it => !userMatches[it.id]);
    if (firstEmpty) {
      setUserMatches(prev => ({ ...prev, [firstEmpty.id]: word }));
    }
  };

  // Cümledeki Boşluk Butonuna Tıklama (Aktif Slot Yap / Kelimeyi Çıkar)
  const handleSlotClick = (itemId) => {
    if (isAnswered) return;
    if (userMatches[itemId]) {
      setUserMatches(prev => {
        const next = { ...prev };
        delete next[itemId];
        return next;
      });
      setActiveSlotId(itemId);
    } else {
      setActiveSlotId(prev => (prev === itemId ? null : itemId));
    }
  };

  // Tüm Eşleştirmeleri Sıfırla
  const handleClearAllMatches = () => {
    if (isAnswered) return;
    setUserMatches({});
    setActiveSlotId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (isAnswered) {
          goToNextState();
        } else if (currentQ?.type === 'fill_in' && userAnswer.trim()) {
          handleCheck();
        } else if (currentQ?.type === 'matching' && Object.keys(userMatches).length > 0) {
          handleCheck();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered, currentQ, userAnswer, userMatches, currentIndex, deck.length]);

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
      setUserMatches({});
      setActiveSlotId(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setIsFinished(true); 
    }
  };

  // HİÇ SORU BULUNAMADIĞINDA ÇIKAN EKRAN (Scroll Eklendi)
  if (deck.length === 0) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-700 p-6 sm:p-8 text-center max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700" onClick={e => e.stopPropagation()}>
          <i className="fa-solid fa-ghost text-4xl text-slate-500 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-200 mb-2">{isTr ? 'Soru Bulunamadı' : 'No Questions Found'}</h3>
          <p className="text-slate-400 text-sm mb-6">{isTr ? 'Bu kriterlere uygun soru bulunamadı.' : 'No questions found matching these criteria.'}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {activeFilter !== 'all' && (
              <button 
                onClick={() => setActiveFilter('all')} 
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

  // SONUÇ EKRANI (Scroll Eklendi)
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
        <div className="bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-700 p-6 sm:p-8 flex flex-col items-center animate-fadeIn max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 relative" onClick={e => e.stopPropagation()}>
          
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 text-xl transition-colors bg-slate-900 w-8 h-8 flex items-center justify-center rounded-full z-10">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <i className={`fa-solid ${resultIcon} ${resultColor} text-6xl drop-shadow-lg mb-4 mt-2`}></i>
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

          <button onClick={onClose} className="w-full flex-shrink-0 bg-brand-600 text-white py-3.5 rounded-xl font-bold border border-brand-500 hover:bg-brand-500 transition-all shadow-lg">
            {isTr ? 'Kapat ve Dön' : 'Close and Return'}
          </button>

        </div>
      </div>
    );
  }

  const renderQuestionText = () => {
    if (currentQ.type === 'matching') {
      return (
        <span className="text-sm sm:text-base text-slate-200 font-semibold block">
          {currentQ.questionNl || (isTr ? (currentQ.instructionTr || 'Aşağıdaki boşlukları kelime havuzundaki doğru kelimelerle eşleştirin:') : (currentQ.instructionEn || 'Match the blanks with the correct words from the pool:'))}
        </span>
      );
    }

    if (!currentQ.questionNl.includes('___')) return currentQ.questionNl;
    
    const parts = currentQ.questionNl.split('___');
    return (
      <span className="leading-relaxed">
        {parts[0]}
        {currentQ.type === 'fill_in' && !isAnswered ? (
          <input 
            autoFocus
            type="text" 
            value={userAnswer}
            placeholder="..."
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            className="mx-1.5 bg-slate-800/90 border border-teal-500/70 text-teal-300 px-2.5 py-0.5 w-28 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-400/50 shadow-inner rounded-md"
          />
        ) : (
          <span className={`mx-1.5 px-2.5 py-0.5 rounded-md font-bold text-sm inline-block ${isAnswered ? (isCorrect ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-600' : 'bg-rose-950/60 text-rose-300 border border-rose-600 line-through') : 'text-slate-400 border-b-2 border-slate-500'}`}>
            {isAnswered ? (userAnswer || '___') : '___'}
          </span>
        )}
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
      {/* ANA TEST EKRANI - Kompakt ve Zarif Mobil Uyumlu */}
      <div className="bg-slate-900/95 backdrop-blur-md w-full max-w-xl rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden relative max-h-[90vh] sm:max-h-[92vh]" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-slate-800 bg-slate-800/70 flex-none space-y-1.5">
          {/* Üst Satır: Başlık & Aksiyon Butonları */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0 flex-1">
              <i className="fa-solid fa-graduation-cap text-teal-400 text-xs sm:text-sm flex-shrink-0"></i>
              <h3 className="text-xs sm:text-sm font-bold text-slate-100 truncate" title={title}>
                {title}
              </h3>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              {/* İyi Soru */}
              <button 
                onClick={handleGoodToggle}
                title={isTr ? (isGood ? "İyi Soru (İşareti Kaldır)" : "İyi Soru Olarak İşaretle") : (isGood ? "Remove Good Mark" : "Mark as Good Question")}
                className={`p-1 text-xs sm:text-sm transition-colors rounded hover:bg-slate-700/60 ${isGood ? 'text-emerald-400' : 'text-slate-400 hover:text-emerald-400'}`}
              >
                <i className={isGood ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"}></i>
              </button>

              {/* Mükerrer / Kopya Soru */}
              <button 
                onClick={handleDuplicateToggle}
                title={isTr ? (isDuplicate ? "Kopya Soru (İşareti Kaldır)" : "Kopya / Mükerrer Soru Bildir") : (isDuplicate ? "Remove Duplicate Mark" : "Mark as Duplicate Question")}
                className={`p-1 text-xs sm:text-sm transition-colors rounded hover:bg-slate-700/60 ${isDuplicate ? 'text-sky-400' : 'text-slate-400 hover:text-sky-400'}`}
              >
                <i className={isDuplicate ? "fa-solid fa-clone" : "fa-regular fa-clone"}></i>
              </button>

              {/* Hatalı Soru Bildir */}
              <button 
                onClick={handleReportToggle}
                title={isTr ? (isReported ? "Hatalı Soru (İşareti Kaldır)" : "Hatalı Soru Bildir") : (isReported ? "Remove Report" : "Report Question Error")}
                className={`p-1 text-xs sm:text-sm transition-colors rounded hover:bg-slate-700/60 ${isReported ? 'text-amber-400' : 'text-slate-400 hover:text-amber-400'}`}
              >
                <i className={isReported ? "fa-solid fa-flag" : "fa-regular fa-flag"}></i>
              </button>

              <div className="h-3 w-[1px] bg-slate-700 mx-0.5"></div>
              
              {/* Kapat Butonu */}
              <button onClick={onClose} className="text-slate-400 hover:text-rose-400 p-1 text-sm sm:text-base transition-colors rounded hover:bg-slate-700/60" title={isTr ? 'Kapat' : 'Close'}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Alt Satır: Soru İstatistiği & Filtreler (Kompakt Tek Satır) */}
          <div className="flex items-center justify-between gap-1.5 pt-0.5">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold bg-slate-950/60 px-2 py-0.5 rounded-md border border-slate-700/80">
              <span className="text-slate-400 font-medium hidden sm:inline">{isTr ? 'Bu Soru:' : 'This Q:'}</span>
              <span className="text-emerald-400 flex items-center gap-0.5" title={isTr ? 'Doğru' : 'Correct'}>
                <i className="fa-solid fa-check text-[9px]"></i> {qHistory.correct}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-rose-400 flex items-center gap-0.5" title={isTr ? 'Yanlış' : 'Incorrect'}>
                <i className="fa-solid fa-xmark text-[9px]"></i> {qHistory.incorrect}
              </span>
            </div>
            
            <div className="flex bg-slate-950/60 p-0.5 rounded-lg border border-slate-700/80 gap-0.5">
              <button 
                onClick={() => toggleFilter('weak')}
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                  activeFilter === 'weak' 
                    ? 'bg-rose-900/70 text-rose-200 border border-rose-700/60 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Zorlanılanlar' : 'Weakest'}
              </button>

              <button 
                onClick={() => toggleFilter('unattempted')}
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                  activeFilter === 'unattempted' 
                    ? 'bg-sky-900/70 text-sky-200 border border-sky-700/60 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Çözülmeyenler' : 'Unseen'}
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar (Flex-none) */}
        <div className="w-full bg-slate-800 h-1 flex-none">
          <div className="bg-teal-500 h-full transition-all duration-300" style={{ width: `${((currentIndex) / deck.length) * 100}%` }}></div>
        </div>
        
        {/* Content */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex-1 flex flex-col justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
           <div className="text-center mb-2.5 sm:mb-3">
              {currentQ.tags && currentQ.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1 mb-1.5">
                  {currentQ.tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="text-[10px] font-semibold bg-indigo-950/50 text-indigo-300 px-2 py-0.5 rounded-md border border-indigo-800/40 shadow-sm hover:bg-indigo-900 hover:text-white transition-all cursor-pointer"
                      title={isTr ? `Bu etiketle ilgili sorulara geç: #${tag}` : `Filter by tag: #${tag}`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}

              <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5 block">
                {isTr ? 'Soru' : 'Question'} {currentIndex + 1} / {deck.length}
              </span>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug max-w-xl mx-auto">
                {renderQuestionText()}
              </h2>
           </div>

           {/* 1. Çoktan Seçmeli Seçenekler */}
           {currentQ.type === 'multiple_choice' && (
             <div className={`grid gap-2 sm:gap-2.5 mb-2.5 sm:mb-3 w-full max-w-xl mx-auto ${shuffledOptions.some(o => o.length > 28) ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {shuffledOptions.map((opt, index) => {
                  const letter = String.fromCharCode(65 + index); // A, B, C, D
                  let containerClass = "bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-750 hover:border-teal-500/60 active:scale-[0.99]";
                  let badgeClass = "bg-slate-700 text-slate-300";
                  let icon = null;

                  if (isAnswered) {
                    if (opt === currentQ.correctAnswer) {
                      containerClass = "bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.25)]";
                      badgeClass = "bg-emerald-500 text-slate-950 font-black";
                      icon = <i className="fa-solid fa-check text-emerald-400 ml-auto text-sm"></i>;
                    } else if (opt === userAnswer) {
                      containerClass = "bg-rose-950/50 border-rose-500 text-rose-200 opacity-90";
                      badgeClass = "bg-rose-500 text-white font-black";
                      icon = <i className="fa-solid fa-xmark text-rose-400 ml-auto text-sm"></i>;
                    } else {
                      containerClass = "bg-slate-800/40 border-slate-700/40 text-slate-500 opacity-40";
                      badgeClass = "bg-slate-800 text-slate-500";
                    }
                  }

                  return (
                    <button 
                      key={opt}
                      disabled={isAnswered}
                      onClick={() => handleOptionSelect(opt)}
                      className={`group flex items-center gap-2.5 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border text-left font-medium transition-all text-xs sm:text-sm cursor-pointer disabled:cursor-default ${containerClass}`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${badgeClass}`}>
                        {letter}
                      </span>
                      <span className="flex-1 leading-snug break-words">
                        {opt}
                      </span>
                      {icon}
                    </button>
                  );
                })}
             </div>
           )}

           {/* 2. Eşleştirme Sorusu Bölümü (Kelimeler Havuzu + Cümleler Slotları) */}
           {currentQ.type === 'matching' && (
             <div className="w-full max-w-xl mx-auto flex flex-col gap-2 mb-2">
               {/* Kelime Havuzu */}
               <div className="bg-slate-800/60 border border-slate-700/70 rounded-xl p-2.5 sm:p-3">
                 <div className="flex items-center justify-between mb-1.5">
                   <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                     <i className="fa-solid fa-layer-group text-teal-400 text-xs"></i>
                     {isTr ? 'Kelime Havuzu' : 'Word Pool'}
                     <span className="text-[10px] text-slate-400 font-normal">
                       ({shuffledWordPool.length} {isTr ? 'kelime' : 'words'})
                     </span>
                   </span>
                   {!isAnswered && Object.keys(userMatches).length > 0 && (
                     <button 
                       onClick={handleClearAllMatches}
                       className="text-[10px] text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
                       title={isTr ? 'Tüm eşleştirmeleri temizle' : 'Clear all matches'}
                     >
                       <i className="fa-solid fa-rotate-left"></i>
                       {isTr ? 'Temizle' : 'Reset'}
                     </button>
                   )}
                 </div>

                 {/* Kelime Hapları */}
                 <div className="flex flex-wrap gap-1.5 justify-center">
                   {shuffledWordPool.map((word, wIdx) => {
                     const isUsed = Object.values(userMatches).includes(word);
                     return (
                       <button
                         key={`${word}_${wIdx}`}
                         disabled={isAnswered}
                         draggable={!isAnswered && !isUsed}
                         onDragStart={(e) => {
                           e.dataTransfer.setData('text/plain', word);
                         }}
                         onClick={() => handlePlaceWord(word)}
                         className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 select-none ${
                           isUsed
                             ? 'bg-slate-900/60 text-slate-500 border border-slate-800 line-through opacity-50 cursor-pointer'
                             : 'bg-teal-950/40 border border-teal-500/50 text-teal-200 hover:bg-teal-900/60 hover:border-teal-400 hover:scale-105 active:scale-95 shadow-sm cursor-grab active:cursor-grabbing'
                         }`}
                       >
                         <span>{word}</span>
                         {isUsed && <i className="fa-solid fa-check text-[9px] text-teal-500 no-underline"></i>}
                       </button>
                     );
                   })}
                 </div>

                 {!isAnswered && (
                   <p className="text-[10px] text-slate-400 text-center mt-1.5 italic">
                     <i className="fa-solid fa-hand-pointer mr-1 text-teal-400"></i>
                     {activeSlotId 
                       ? (isTr ? 'Seçili boşluğa yerleştirmek için kelimeye dokunun.' : 'Tap a word to place into selected blank.')
                       : (isTr ? 'Kelimeye dokunarak veya sürükleyerek boşlukları doldurun.' : 'Tap or drag words to fill the blanks.')}
                   </p>
                 )}
               </div>

               {/* Cümleler Listesi */}
               <div className="space-y-1.5 max-h-[38vh] overflow-y-auto pr-0.5 scrollbar-thin scrollbar-thumb-slate-700">
                 {shuffledMatchingItems.map((item, idx) => {
                   const parts = item.sentenceNl.split('___');
                   const assignedWord = userMatches[item.id];
                   const isActiveSlot = activeSlotId === item.id;
                   const isItemCorrect = isAnswered && (assignedWord || '').trim().toLowerCase() === item.answer.trim().toLowerCase();

                   return (
                     <div 
                       key={item.id}
                       className={`p-2 rounded-xl border transition-all text-xs sm:text-sm flex items-center gap-2 ${
                         isAnswered
                           ? isItemCorrect
                             ? 'bg-emerald-950/20 border-emerald-800/40'
                             : 'bg-rose-950/20 border-rose-800/40'
                           : isActiveSlot
                             ? 'bg-slate-800 border-teal-500/80 shadow-md ring-1 ring-teal-500/30'
                             : 'bg-slate-800/50 border-slate-700/60 hover:border-slate-600'
                       }`}
                     >
                       <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                         {idx + 1}
                       </span>

                       <div className="flex-1 leading-relaxed text-slate-200">
                         {parts[0]}
                         
                         {/* Boşluk / Slot Butonu */}
                         <button
                           type="button"
                           disabled={isAnswered}
                           onClick={() => handleSlotClick(item.id)}
                           onDragOver={(e) => {
                             if (!isAnswered) e.preventDefault();
                           }}
                           onDrop={(e) => {
                             if (isAnswered) return;
                             e.preventDefault();
                             const droppedWord = e.dataTransfer.getData('text/plain');
                             if (droppedWord) {
                               setUserMatches(prev => {
                                 const next = { ...prev };
                                 const prevSlot = Object.keys(next).find(k => next[k] === droppedWord);
                                 if (prevSlot) delete next[prevSlot];
                                 next[item.id] = droppedWord;
                                 return next;
                               });
                               setActiveSlotId(null);
                             }
                           }}
                           className={`mx-1.5 inline-flex items-center justify-center px-2 py-0.5 min-w-[70px] rounded-md text-xs font-bold transition-all align-middle select-none ${
                             isAnswered
                               ? isItemCorrect
                                 ? 'bg-emerald-900/60 border border-emerald-500 text-emerald-300'
                                 : 'bg-rose-900/60 border border-rose-500 text-rose-300'
                               : assignedWord
                                 ? 'bg-teal-900/50 border border-teal-500 text-teal-200 hover:bg-rose-900/40 hover:border-rose-500 hover:text-rose-200 cursor-pointer shadow-sm'
                                 : isActiveSlot
                                   ? 'border-2 border-dashed border-teal-400 bg-teal-950/40 text-teal-300 animate-pulse cursor-pointer'
                                   : 'border-2 border-dashed border-slate-600 hover:border-teal-400/80 bg-slate-900/60 text-slate-400 hover:text-teal-300 cursor-pointer'
                           }`}
                           title={assignedWord && !isAnswered ? (isTr ? 'Kaldırmak için tıkla' : 'Click to remove') : undefined}
                         >
                           {assignedWord ? (
                             <>
                               <span>{assignedWord}</span>
                               {!isAnswered && <i className="fa-solid fa-xmark text-[9px] ml-1.5 opacity-60"></i>}
                             </>
                           ) : (
                             <span>___</span>
                           )}
                         </button>

                         {/* Yanlış ise doğru cevabı hemen yanında yeşil rozetle göster */}
                         {isAnswered && !isItemCorrect && (
                           <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-600 text-emerald-300 text-xs font-bold ml-1 align-middle">
                             <i className="fa-solid fa-arrow-right text-[9px]"></i>
                             {item.answer}
                           </span>
                         )}

                         {parts[1]}
                       </div>

                       {/* Durum İkonu */}
                       {isAnswered && (
                         <div className="flex-shrink-0 ml-1">
                           {isItemCorrect ? (
                             <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
                           ) : (
                             <i className="fa-solid fa-circle-xmark text-rose-400 text-sm"></i>
                           )}
                         </div>
                       )}
                     </div>
                   );
                 })}
               </div>
             </div>
           )}

           {/* Cevap Geribildirim Kutusu */}
           {isAnswered && (
             <div className={`mt-1 p-2.5 sm:p-3 rounded-xl border animate-fadeIn flex flex-col gap-1 max-w-xl mx-auto w-full ${isCorrect ? 'bg-emerald-950/30 border-emerald-800/60' : 'bg-rose-950/30 border-rose-800/60'}`}>
               <div className="flex items-center justify-between">
                 <h4 className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                   <i className={`fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
                   {isCorrect ? (isTr ? 'Tebrikler! Doğru Cevap!' : 'Correct!') : (isTr ? 'Yanlış Cevap' : 'Incorrect')}
                 </h4>
                 <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                   {isTr ? 'Devam etmek için Enter ↵' : 'Press Enter ↵ to continue'}
                 </span>
               </div>

               {currentQ.type === 'matching' ? (
                 <p className="text-slate-300 text-xs">
                   {isTr 
                     ? `${(currentQ.items || []).filter(it => (userMatches[it.id] || '').trim().toLowerCase() === it.answer.trim().toLowerCase()).length} / ${(currentQ.items || []).length} doğru eşleştirme yapıldı.`
                     : `${(currentQ.items || []).filter(it => (userMatches[it.id] || '').trim().toLowerCase() === it.answer.trim().toLowerCase()).length} / ${(currentQ.items || []).length} correct matches.`}
                 </p>
               ) : (!isCorrect && (
                 <div className="text-slate-300 text-xs flex items-center gap-1.5 flex-wrap">
                   <span>{isTr ? 'Doğru cevap:' : 'Correct answer:'}</span>
                   <span className="text-emerald-300 font-bold px-2 py-0.5 bg-slate-900/90 rounded border border-emerald-700/60">
                     {currentQ.correctAnswer}
                   </span>
                 </div>
               ))}

               {(currentQ.explanationTr || currentQ.explanationEn) && (
                 <p className="text-slate-400 text-xs mt-0.5 italic border-t border-slate-800/80 pt-1.5 flex items-start gap-1.5 leading-relaxed">
                   <i className="fa-solid fa-lightbulb text-amber-400 mt-0.5 flex-shrink-0 text-[11px]"></i> 
                   <span>{isTr ? currentQ.explanationTr : currentQ.explanationEn}</span>
                 </p>
               )}
             </div>
           )}

           {/* Alt Aksiyon Butonları */}
           <div className="mt-2.5 sm:mt-3 flex flex-wrap justify-center items-center gap-2 max-w-xl mx-auto w-full">
             {!isAnswered ? (
               <>
                 {currentQ.type === 'fill_in' && (
                   <button 
                     onClick={() => handleCheck()}
                     disabled={!userAnswer.trim()}
                     className="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white px-5 sm:px-6 py-2 rounded-xl font-bold border border-teal-500/80 shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                   >
                     <i className="fa-solid fa-check text-xs"></i> {isTr ? 'Kontrol Et' : 'Check'}
                   </button>
                 )}

                 {currentQ.type === 'matching' && (
                   <button 
                     onClick={() => handleCheck()}
                     disabled={Object.keys(userMatches).length === 0}
                     className="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white px-5 sm:px-6 py-2 rounded-xl font-bold border border-teal-500/80 shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                   >
                     <i className="fa-solid fa-check text-xs"></i> 
                     <span>{isTr ? 'Kontrol Et' : 'Check'}</span>
                     <span className="text-[10px] opacity-80 font-mono">
                       ({Object.keys(userMatches).length}/{(currentQ.items || []).length})
                     </span>
                   </button>
                 )}

                 <button 
                   onClick={handleDontKnow}
                   className="flex-1 sm:flex-initial bg-slate-800/80 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 px-3.5 sm:px-4 py-2 rounded-xl font-semibold border border-slate-700/80 hover:border-rose-800/60 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                   title={isTr ? 'Yanlış kabul edilir' : 'Counts as incorrect'}
                 >
                   <i className="fa-solid fa-circle-question text-rose-400 text-xs"></i> {isTr ? 'Bilmiyorum' : "Don't know"}
                 </button>

                 <button 
                   onClick={handleSkip}
                   className="flex-1 sm:flex-initial bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white px-3.5 sm:px-4 py-2 rounded-xl font-semibold border border-slate-700/80 hover:border-slate-600 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                   title={isTr ? 'Skoru etkilemeden sonraki soruya geçer' : 'Skip without affecting score'}
                 >
                   <i className="fa-solid fa-forward text-amber-400 text-xs"></i> {isTr ? 'Soruyu Geç' : 'Skip'}
                 </button>
               </>
             ) : (
               <button 
                 onClick={handleNext}
                 className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-6 sm:px-8 py-2.5 rounded-xl font-bold border border-indigo-500/80 shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
               >
                 <span>{currentIndex < deck.length - 1 ? (isTr ? 'Sıradaki Soru' : 'Next Question') : (isTr ? 'Testi Bitir' : 'Finish')}</span>
                 <span className="text-[10px] opacity-75 font-mono hidden sm:inline">(Enter ↵)</span>
                 <i className="fa-solid fa-arrow-right text-xs"></i>
               </button>
             )}
           </div>
        </div>

      </div>
    </div>
  );
}