// src/components/QuizModule.js
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/quizData';
import { auth, toggleReportQuestion, toggleGoodQuestion } from '../firebase'; 

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
  const [tagInput, setTagInput] = useState(tags && tags.length > 0 ? tags[0] : '');

  // Tüm mevcut etiketlerin listesi (Datalist otomatik tamamlama için)
  const allAvailableTags = useMemo(() => {
    const tagSet = new Set();
    quizQuestions.forEach(q => {
      if (q.tags && Array.isArray(q.tags)) {
        q.tags.forEach(t => tagSet.add(t));
      }
    });
    return Array.from(tagSet).sort();
  }, []);
  
  const [isFinished, setIsFinished] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [wrongTagsCloud, setWrongTagsCloud] = useState({}); 
  const [reportedQuestions, setReportedQuestions] = useState(() => JSON.parse(localStorage.getItem('reportedQuestions')) || {}); 
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
    setTagInput(clickedTag);
    setActiveTags([clickedTag]);
  };

  const handleTagSubmit = (e) => {
    if (e) e.preventDefault();
    const cleanTag = tagInput.replace(/^#/, '').trim().toLowerCase();
    if (!cleanTag) return;
    const matchedTag = allAvailableTags.find(t => t.toLowerCase() === cleanTag) || cleanTag;
    setTagInput(matchedTag);
    setActiveTags([matchedTag]);
  };

  const handleClearTagFilter = () => {
    setTagInput('');
    setActiveTags(tags);
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
            {(activeFilter !== 'all' || activeTags.length > 0) && (
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  handleClearTagFilter();
                }} 
                className="bg-rose-900/40 text-rose-300 px-5 py-2.5 rounded-xl border border-rose-800/50 hover:bg-rose-900/60 transition-colors font-bold text-xs sm:text-sm"
              >
                <i className="fa-solid fa-filter-circle-xmark mr-2"></i>
                {isTr ? 'Filtreleri Temizle' : 'Clear Filters'}
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
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-sm" onClick={onClose}>
      {/* ANA TEST EKRANI - Okunaklı, Zarif & Mobil Uyumlu */}
      <div className="bg-slate-900/98 backdrop-blur-md w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden relative max-h-[94vh] sm:max-h-[92vh]" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-800 bg-slate-800/80 flex-none space-y-2.5">
          {/* Üst Satır: Başlık & Aksiyon Butonları */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-400">
                <i className="fa-solid fa-graduation-cap text-xs sm:text-sm"></i>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-100 truncate" title={title}>
                {title}
              </h3>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
              {/* İyi Soru */}
              <button 
                onClick={handleGoodToggle}
                title={isTr ? (isGood ? "İyi Soru (İşareti Kaldır)" : "İyi Soru Olarak İşaretle") : (isGood ? "Remove Good Mark" : "Mark as Good Question")}
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-sm sm:text-base transition-colors rounded-lg hover:bg-slate-700/70 cursor-pointer ${isGood ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/50' : 'text-slate-400 hover:text-emerald-400'}`}
              >
                <i className={isGood ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"}></i>
              </button>

              {/* Hatalı Soru Bildir */}
              <button 
                onClick={handleReportToggle}
                title={isTr ? (isReported ? "Hatalı Soru (İşareti Kaldır)" : "Hatalı Soru Bildir") : (isReported ? "Remove Report" : "Report Question Error")}
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-sm sm:text-base transition-colors rounded-lg hover:bg-slate-700/70 cursor-pointer ${isReported ? 'text-amber-400 bg-amber-950/40 border border-amber-800/50' : 'text-slate-400 hover:text-amber-400'}`}
              >
                <i className={isReported ? "fa-solid fa-flag" : "fa-regular fa-flag"}></i>
              </button>

              <div className="h-4 w-[1px] bg-slate-700 mx-0.5 sm:mx-1"></div>
              
              {/* Kapat Butonu */}
              <button 
                onClick={onClose} 
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-slate-400 hover:text-rose-400 text-base sm:text-lg transition-colors rounded-lg hover:bg-slate-700/70 cursor-pointer" 
                title={isTr ? 'Kapat' : 'Close'}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Alt Satır: Soru İstatistiği & Filtreler */}
          <div className="flex items-center justify-between gap-2 pt-0.5 flex-wrap sm:flex-nowrap">
            {/* Soru İstatistiği */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold bg-slate-950/70 px-3 py-1.5 rounded-xl border border-slate-700/80 shadow-inner">
              <span className="text-slate-400 font-medium">{isTr ? 'Bu Soru:' : 'This Q:'}</span>
              <span className="text-emerald-400 flex items-center gap-1" title={isTr ? 'Doğru' : 'Correct'}>
                <i className="fa-solid fa-check text-[10px]"></i> {qHistory.correct}
              </span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="text-rose-400 flex items-center gap-1" title={isTr ? 'Yanlış' : 'Incorrect'}>
                <i className="fa-solid fa-xmark text-[10px]"></i> {qHistory.incorrect}
              </span>
            </div>
            
            {/* Filtreler ve Etiket Arama */}
            <div className="flex items-center bg-slate-950/70 p-1 rounded-xl border border-slate-700/80 gap-1.5 flex-wrap sm:flex-nowrap">
              <button 
                onClick={() => toggleFilter('weak')}
                className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'weak' 
                    ? 'bg-rose-900/80 text-rose-200 border border-rose-700/80 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Zorlanılanlar' : 'Weakest'}
              </button>

              <button 
                onClick={() => toggleFilter('unattempted')}
                className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'unattempted' 
                    ? 'bg-sky-900/80 text-sky-200 border border-sky-700/80 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Çözülmeyenler' : 'Unseen'}
              </button>

              <div className="h-4 w-[1px] bg-slate-700 mx-0.5 hidden sm:block"></div>

              {/* Manuel Tag Giriş Alanı */}
              <form onSubmit={handleTagSubmit} className="flex items-center gap-1">
                <div className={`flex items-center bg-slate-900 rounded-lg px-2 py-1 border transition-all ${
                  activeTags.length > 0 && activeTags[0] === (tagInput.replace(/^#/, '').trim())
                    ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                    : 'border-slate-700 focus-within:border-indigo-500'
                }`}>
                  <span className="text-xs text-indigo-400 font-bold mr-1 select-none">#</span>
                  <input 
                    type="text"
                    list="quiz-tag-suggestions"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder={isTr ? "etiket..." : "tag..."}
                    className="bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none w-20 sm:w-28 font-medium"
                  />
                  {tagInput && (
                    <button 
                      type="button" 
                      onClick={handleClearTagFilter}
                      className="text-slate-400 hover:text-rose-400 ml-1 p-0.5 text-xs cursor-pointer"
                      title={isTr ? "Etiket filtresini temizle" : "Clear tag filter"}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!tagInput.trim()}
                  className="text-xs sm:text-sm font-bold px-2.5 py-1.5 rounded-lg bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 hover:bg-indigo-900 disabled:opacity-40 transition-all flex items-center cursor-pointer disabled:cursor-not-allowed shadow-sm"
                  title={isTr ? "Bu etikete göre soruları filtrele" : "Filter by this tag"}
                >
                  <i className="fa-solid fa-magnifying-glass text-xs"></i>
                </button>
              </form>

              {/* Datalist: Mevcut tüm etiketler */}
              <datalist id="quiz-tag-suggestions">
                {allAvailableTags.map(tag => (
                  <option key={tag} value={tag} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 flex-none">
          <div className="bg-teal-500 h-full transition-all duration-300 shadow-[0_0_8px_rgba(20,184,166,0.6)]" style={{ width: `${((currentIndex) / deck.length) * 100}%` }}></div>
        </div>
        
        {/* Content */}
        <div className="px-4 sm:px-7 py-4 sm:py-5 flex-1 flex flex-col justify-start overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
           <div className="text-center mb-3 sm:mb-4">
              {currentQ.tags && currentQ.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                  {currentQ.tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg border shadow-sm transition-all cursor-pointer ${
                        activeTags.includes(tag)
                          ? 'bg-indigo-900 border-indigo-500 text-white shadow-md'
                          : 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 hover:bg-indigo-900 hover:text-white'
                      }`}
                      title={isTr ? `Bu etiketle ilgili sorulara geç: #${tag}` : `Filter by tag: #${tag}`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}

              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                {isTr ? 'Soru' : 'Question'} {currentIndex + 1} / {deck.length}
              </span>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed max-w-xl mx-auto">
                {renderQuestionText()}
              </h2>
           </div>

           {/* 1. Çoktan Seçmeli Seçenekler */}
           {currentQ.type === 'multiple_choice' && (
             <div className={`grid gap-2.5 sm:gap-3 mb-3 sm:mb-4 w-full max-w-xl mx-auto ${shuffledOptions.some(o => o.length > 28) ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {shuffledOptions.map((opt, index) => {
                  const letter = String.fromCharCode(65 + index); // A, B, C, D
                  let containerClass = "bg-slate-800/90 border-slate-700/80 text-slate-100 hover:bg-slate-750 hover:border-teal-500/70 active:scale-[0.99] shadow-sm";
                  let badgeClass = "bg-slate-700 text-slate-200";
                  let icon = null;

                  if (isAnswered) {
                    if (opt === currentQ.correctAnswer) {
                      containerClass = "bg-emerald-950/60 border-emerald-500 text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.3)]";
                      badgeClass = "bg-emerald-500 text-slate-950 font-black";
                      icon = <i className="fa-solid fa-check text-emerald-400 ml-auto text-base"></i>;
                    } else if (opt === userAnswer) {
                      containerClass = "bg-rose-950/60 border-rose-500 text-rose-100 opacity-95";
                      badgeClass = "bg-rose-500 text-white font-black";
                      icon = <i className="fa-solid fa-xmark text-rose-400 ml-auto text-base"></i>;
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
                      className={`group flex items-center gap-3 px-4 sm:px-4.5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border text-left font-semibold transition-all text-sm sm:text-base cursor-pointer disabled:cursor-default ${containerClass}`}
                    >
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 transition-colors shadow-sm ${badgeClass}`}>
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

           {/* 2. Eşleştirme Sorusu Bölümü (Kelimeler Havuzu + Cümleler Slotları - MOBİL DOSTU) */}
           {currentQ.type === 'matching' && (
             <div className="w-full max-w-xl mx-auto flex flex-col gap-3 mb-3">
               {/* Kelime Havuzu */}
               <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 sm:p-4 shadow-lg">
                 <div className="flex items-center justify-between mb-2.5">
                   <span className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2">
                     <i className="fa-solid fa-layer-group text-teal-400 text-sm"></i>
                     {isTr ? 'Kelime Havuzu' : 'Word Pool'}
                     <span className="text-xs text-slate-400 font-normal">
                       ({shuffledWordPool.length} {isTr ? 'kelime' : 'words'})
                     </span>
                   </span>
                   {!isAnswered && Object.keys(userMatches).length > 0 && (
                     <button 
                       onClick={handleClearAllMatches}
                       className="text-xs font-semibold text-slate-400 hover:text-rose-400 bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                       title={isTr ? 'Tüm eşleştirmeleri temizle' : 'Clear all matches'}
                     >
                       <i className="fa-solid fa-rotate-left text-xs"></i>
                       <span>{isTr ? 'Sıfırla' : 'Reset'}</span>
                     </button>
                   )}
                 </div>

                 {/* Kelime Hapları / Çipleri */}
                 <div className="flex flex-wrap gap-2 justify-center">
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
                         className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 select-none shadow-sm cursor-pointer ${
                           isUsed
                             ? 'bg-slate-900/80 text-slate-500 border border-slate-800 line-through opacity-50'
                             : 'bg-teal-950/60 border-2 border-teal-500/70 text-teal-100 hover:bg-teal-900/80 hover:border-teal-400 hover:scale-105 active:scale-95 shadow cursor-grab active:cursor-grabbing'
                         }`}
                       >
                         <span>{word}</span>
                         {isUsed && <i className="fa-solid fa-check text-[10px] text-teal-400 no-underline"></i>}
                       </button>
                     );
                   })}
                 </div>

                 {!isAnswered && (
                   <div className="mt-2.5 text-xs text-slate-300 text-center bg-slate-900/50 py-1.5 px-3 rounded-xl border border-slate-800/70 flex items-center justify-center gap-1.5">
                     <i className="fa-solid fa-hand-pointer text-teal-400 text-xs"></i>
                     <span>
                       {activeSlotId 
                         ? (isTr ? 'Seçili boşluğa yerleştirmek için yukarıdaki kelimelerden birine dokunun.' : 'Tap a word above to place into the selected blank.')
                         : (isTr ? 'Boşluğa dokunup kelime seçin veya doğrudan kelimeye dokunun.' : 'Tap a blank then select a word, or tap a word directly.')}
                     </span>
                   </div>
                 )}
               </div>

               {/* Cümleler Listesi */}
               <div className="space-y-2.5 max-h-[46vh] sm:max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                 {shuffledMatchingItems.map((item, idx) => {
                   const parts = item.sentenceNl.split('___');
                   const assignedWord = userMatches[item.id];
                   const isActiveSlot = activeSlotId === item.id;
                   const isItemCorrect = isAnswered && (assignedWord || '').trim().toLowerCase() === item.answer.trim().toLowerCase();

                   return (
                     <div 
                       key={item.id}
                       className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all text-sm sm:text-base leading-relaxed flex items-center gap-2.5 sm:gap-3 ${
                         isAnswered
                           ? isItemCorrect
                             ? 'bg-emerald-950/30 border-emerald-700/60 shadow-sm'
                             : 'bg-rose-950/30 border-rose-700/60 shadow-sm'
                           : isActiveSlot
                             ? 'bg-slate-800 border-teal-400 shadow-lg ring-2 ring-teal-400/30'
                             : 'bg-slate-800/60 border-slate-700/70 hover:border-slate-600'
                       }`}
                     >
                       <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-inner">
                         {idx + 1}
                       </span>

                       <div className="flex-1 leading-relaxed text-slate-100 font-medium text-sm sm:text-base">
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
                           className={`mx-1.5 inline-flex items-center justify-center px-3.5 py-1.5 sm:py-2 min-w-[90px] sm:min-w-[110px] rounded-xl text-xs sm:text-sm font-bold transition-all align-middle select-none shadow-sm cursor-pointer ${
                             isAnswered
                               ? isItemCorrect
                                 ? 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200'
                                 : 'bg-rose-950/80 border-2 border-rose-500 text-rose-200 line-through'
                               : assignedWord
                                 ? 'bg-teal-900/70 border-2 border-teal-400 text-teal-100 hover:bg-rose-950/60 hover:border-rose-500 hover:text-rose-200'
                                 : isActiveSlot
                                   ? 'border-2 border-teal-400 bg-teal-950/70 text-teal-300 ring-4 ring-teal-400/25 animate-pulse'
                                   : 'border-2 border-dashed border-slate-600 hover:border-teal-400 bg-slate-900/80 text-slate-400 hover:text-teal-300'
                           }`}
                           title={assignedWord && !isAnswered ? (isTr ? 'Kaldırmak için dokunun' : 'Tap to remove') : (isTr ? 'Bu boşluğu seç' : 'Select blank')}
                         >
                           {assignedWord ? (
                             <>
                               <span>{assignedWord}</span>
                               {!isAnswered && <i className="fa-solid fa-xmark text-xs ml-2 opacity-70 hover:opacity-100"></i>}
                             </>
                           ) : (
                             <span className="font-mono text-xs opacity-75">___</span>
                           )}
                         </button>

                         {/* Yanlış ise doğru cevabı hemen yanında yeşil rozetle göster */}
                         {isAnswered && !isItemCorrect && (
                           <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs sm:text-sm font-bold ml-2 align-middle shadow-sm">
                             <i className="fa-solid fa-arrow-right text-[10px]"></i>
                             {item.answer}
                           </span>
                         )}

                         {parts[1]}
                       </div>

                       {/* Durum İkonu */}
                       {isAnswered && (
                         <div className="flex-shrink-0 ml-1">
                           {isItemCorrect ? (
                             <i className="fa-solid fa-circle-check text-emerald-400 text-base sm:text-lg"></i>
                           ) : (
                             <i className="fa-solid fa-circle-xmark text-rose-400 text-base sm:text-lg"></i>
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
             <div className={`mt-2 p-3.5 sm:p-4 rounded-2xl border animate-fadeIn flex flex-col gap-1.5 max-w-xl mx-auto w-full shadow-lg ${isCorrect ? 'bg-emerald-950/40 border-emerald-800/70' : 'bg-rose-950/40 border-rose-800/70'}`}>
               <div className="flex items-center justify-between">
                 <h4 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                   <i className={`fa-solid ${isCorrect ? 'fa-circle-check text-base' : 'fa-circle-xmark text-base'}`}></i>
                   {isCorrect ? (isTr ? 'Tebrikler! Doğru Cevap!' : 'Correct!') : (isTr ? 'Yanlış Cevap' : 'Incorrect')}
                 </h4>
                 <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                   {isTr ? 'Devam etmek için Enter ↵' : 'Press Enter ↵ to continue'}
                 </span>
               </div>

               {currentQ.type === 'matching' ? (
                 <p className="text-slate-200 text-xs sm:text-sm font-medium">
                   {isTr 
                     ? `${(currentQ.items || []).filter(it => (userMatches[it.id] || '').trim().toLowerCase() === it.answer.trim().toLowerCase()).length} / ${(currentQ.items || []).length} doğru eşleştirme yapıldı.`
                     : `${(currentQ.items || []).filter(it => (userMatches[it.id] || '').trim().toLowerCase() === it.answer.trim().toLowerCase()).length} / ${(currentQ.items || []).length} correct matches.`}
                 </p>
               ) : (!isCorrect && (
                 <div className="text-slate-200 text-xs sm:text-sm flex items-center gap-2 flex-wrap">
                   <span>{isTr ? 'Doğru cevap:' : 'Correct answer:'}</span>
                   <span className="text-emerald-300 font-bold px-2.5 py-1 bg-slate-900 rounded-lg border border-emerald-700/60 shadow-sm">
                     {currentQ.correctAnswer}
                   </span>
                 </div>
               ))}

               {(currentQ.explanationTr || currentQ.explanationEn) && (
                 <p className="text-slate-300 text-xs sm:text-sm mt-1 italic border-t border-slate-800/80 pt-2 flex items-start gap-2 leading-relaxed">
                   <i className="fa-solid fa-lightbulb text-amber-400 mt-0.5 flex-shrink-0 text-xs"></i> 
                   <span>{isTr ? currentQ.explanationTr : currentQ.explanationEn}</span>
                 </p>
               )}
             </div>
           )}

           {/* Alt Aksiyon Butonları */}
           <div className="mt-3 sm:mt-4 flex flex-wrap justify-center items-center gap-2.5 max-w-xl mx-auto w-full pb-1">
             {!isAnswered ? (
               <>
                 {currentQ.type === 'fill_in' && (
                   <button 
                     onClick={() => handleCheck()}
                     disabled={!userAnswer.trim()}
                     className="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold border border-teal-500/80 shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                   >
                     <i className="fa-solid fa-check text-xs"></i> {isTr ? 'Kontrol Et' : 'Check'}
                   </button>
                 )}

                 {currentQ.type === 'matching' && (
                   <button 
                     onClick={() => handleCheck()}
                     disabled={Object.keys(userMatches).length === 0}
                     className="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold border border-teal-500/80 shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                   >
                     <i className="fa-solid fa-check text-xs"></i> 
                     <span>{isTr ? 'Kontrol Et' : 'Check'}</span>
                     <span className="text-xs opacity-85 font-mono">
                       ({Object.keys(userMatches).length}/{(currentQ.items || []).length})
                     </span>
                   </button>
                 )}

                 <button 
                   onClick={handleDontKnow}
                   className="flex-1 sm:flex-initial bg-slate-800/90 hover:bg-rose-950/50 text-slate-300 hover:text-rose-300 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold border border-slate-700 hover:border-rose-800/60 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                   title={isTr ? 'Yanlış kabul edilir' : 'Counts as incorrect'}
                 >
                   <i className="fa-solid fa-circle-question text-rose-400 text-xs"></i> {isTr ? 'Bilmiyorum' : "Don't know"}
                 </button>

                 <button 
                   onClick={handleSkip}
                   className="flex-1 sm:flex-initial bg-slate-800/90 hover:bg-slate-750 text-slate-300 hover:text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold border border-slate-700 hover:border-slate-600 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                   title={isTr ? 'Skoru etkilemeden sonraki soruya geçer' : 'Skip without affecting score'}
                 >
                   <i className="fa-solid fa-forward text-amber-400 text-xs"></i> {isTr ? 'Soruyu Geç' : 'Skip'}
                 </button>
               </>
             ) : (
               <button 
                 onClick={handleNext}
                 className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold border border-indigo-500/80 shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer"
               >
                 <span>{currentIndex < deck.length - 1 ? (isTr ? 'Sıradaki Soru' : 'Next Question') : (isTr ? 'Testi Bitir' : 'Finish')}</span>
                 <span className="text-xs opacity-75 font-mono hidden sm:inline">(Enter ↵)</span>
                 <i className="fa-solid fa-arrow-right text-xs"></i>
               </button>
             )}
           </div>
        </div>

      </div>
    </div>
  );
}