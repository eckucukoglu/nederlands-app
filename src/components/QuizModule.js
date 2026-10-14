// src/components/QuizModule.js
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/quizData';
import { auth, toggleReportQuestion, toggleGoodQuestion, onAuthStateChanged } from '../firebase'; 

const DIFFICULTY_LEVELS = [
  { level: 1, labelTr: 'A1 Temel', labelEn: 'A1 Basics', shortTr: 'A1', shortEn: 'A1', color: 'bg-emerald-950/90 text-emerald-300 border-emerald-800/80 hover:bg-emerald-900' },
  { level: 2, labelTr: 'A1+ / Erken A2', labelEn: 'A1+ / Early A2', shortTr: 'A1+', shortEn: 'A1+', color: 'bg-teal-950/90 text-teal-300 border-teal-800/80 hover:bg-teal-900' },
  { level: 3, labelTr: 'Çekirdek A2', labelEn: 'Core A2', shortTr: 'A2', shortEn: 'A2', color: 'bg-amber-950/90 text-amber-300 border-amber-800/80 hover:bg-amber-900' },
  { level: 4, labelTr: 'İleri A2', labelEn: 'Upper A2', shortTr: 'A2+', shortEn: 'A2+', color: 'bg-orange-950/90 text-orange-300 border-orange-800/80 hover:bg-orange-900' },
  { level: 5, labelTr: 'B1 Hazırlık', labelEn: 'B1 Prep', shortTr: 'B1', shortEn: 'B1', color: 'bg-rose-950/90 text-rose-300 border-rose-800/80 hover:bg-rose-900' },
];

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
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [isDiffMenuOpen, setIsDiffMenuOpen] = useState(false);
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
  const [currentUser, setCurrentUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Kısayol & Kaydırma (Swipe) Geri Bildirim Toast'ı
  const [gestureToast, setGestureToast] = useState(null);
  const toastTimeoutRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0, target: null, scrollTop: 0 });
  const scrollContainerRef = useRef(null);

  const showGestureToast = (message, icon, colorClass = "text-teal-400") => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setGestureToast({ message, icon, colorClass });
    toastTimeoutRef.current = setTimeout(() => {
      setGestureToast(null);
    }, 1100);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  // Modal açıkken arka plan sayfasının kaydırılmasını (Scrollbar 1) engelle
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || {};
    
    let filtered = activeTags.length === 0 
        ? [...quizQuestions] 
        : quizQuestions.filter(q => q.tags && q.tags.some(tag => activeTags.includes(tag)));
    
    if (selectedDifficulty !== null) {
      filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
    }

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
  }, [activeTags, activeFilter, selectedDifficulty]);

  const currentQ = deck[currentIndex];
  const qHistory = currentQ ? quizHistory[currentQ.id] || { correct: 0, incorrect: 0 } : null;
  const isReported = (currentQ && currentUser) ? !!reportedQuestions[currentQ.id] : false;
  const isGood = (currentQ && currentUser) ? !!goodQuestions[currentQ.id] : false;

  useEffect(() => {
    setUserMatches({});
    setActiveSlotId(null);
    setIsDiffMenuOpen(false);
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
      alert(isTr ? "İyi soru bildirmek için giriş yapmalısınız." : "You must be logged in to mark a good question.");
      return;
    }

    const newStatus = !isGood;
    try {
      await toggleGoodQuestion(currentQ, auth.currentUser, newStatus);

      const updatedGoods = { ...goodQuestions, [currentQ.id]: newStatus };
      setGoodQuestions(updatedGoods);
      localStorage.setItem('goodQuestions', JSON.stringify(updatedGoods));

      showGestureToast(
        newStatus 
          ? (isTr ? 'İyi Soru Olarak İşaretlendi 👍' : 'Marked as Good Question 👍') 
          : (isTr ? 'İyi Soru İşareti Kaldırıldı' : 'Removed from Good Questions'),
        'fa-thumbs-up',
        newStatus ? 'text-emerald-400' : 'text-slate-400'
      );
    } catch (error) {
      console.error("Firebase toggleGoodQuestion hatası:", error);
      alert(isTr 
        ? "İyi soru bildirilirken bir hata oluştu. Lütfen bağlantınızı veya izinleri kontrol edin." 
        : "An error occurred while marking as good question. Please check your connection."
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

  const handleSelectDifficulty = (lvl) => {
    setSelectedDifficulty(prev => (prev === lvl ? null : lvl));
    setIsDiffMenuOpen(false);
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

  const handleNext = () => {
    goToNextState();
  };

  const handleSkip = () => {
    setSessionScore(prev => ({ ...prev, skipped: prev.skipped + 1 }));
    goToNextState();
  };

  const handleDontKnow = () => {
    if (isAnswered) return;
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

  // Klavyedeki Yön Tuşları:
  // Sağa (ArrowRight) & Sola (ArrowLeft): Soruyu geç (veya yanıttan sonra sıradaki soru)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Input veya textarea alanında yazarken yön tuşlarını çalıştırma
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'Enter') {
        if (isAnswered) {
          goToNextState();
        } else if (currentQ?.type === 'fill_in' && userAnswer.trim()) {
          handleCheck();
        } else if (currentQ?.type === 'matching' && Object.keys(userMatches).length > 0) {
          handleCheck();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        if (isAnswered) {
          showGestureToast(isTr ? 'Sıradaki Soru ⏭' : 'Next Question ⏭', 'fa-forward', 'text-amber-400');
          goToNextState();
        } else {
          showGestureToast(isTr ? 'Soruyu Geç ⏭' : 'Skip ⏭', 'fa-forward', 'text-amber-400');
          handleSkip();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered, currentQ, userAnswer, userMatches, currentIndex, deck.length, isGood, goodQuestions]);

  // Mobil Dokunmatik / Kaydırma (Swipe) Hareketleri:
  // Sağa veya sola kaydırma: Soruyu geç (veya soru yanıtlandıysa sıradaki soru)
  const handleTouchStart = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
      target: e.target
    };
  };

  const handleTouchEnd = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Uzun basma (> 800ms) veya input üzeri dokunmaları yok say
    if (deltaTime > 800) return;
    if (touchStartRef.current.target?.closest('input, textarea, select')) return;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    const HORIZONTAL_THRESHOLD = 40; // px (akıcı ve hassas algılama)

    // Yalnızca Yatay Kaydırma (Horizontal Swipe: Sağa / Sola)
    if (absX > absY && absX >= HORIZONTAL_THRESHOLD) {
      if (isAnswered) {
        // Soru yanıtlandıktan sonra açıklama alanındayken kaydırarak doğrudan sıradaki soruya geç
        showGestureToast(isTr ? 'Sıradaki Soru ⏭' : 'Next Question ⏭', 'fa-forward', 'text-amber-400');
        goToNextState();
      } else {
        // Sağa ve sola kaydırmaların ikisi de soruyu geçer (bilmiyorum olarak işaretlemez)
        showGestureToast(isTr ? 'Soruyu Geç ⏭' : 'Skip ⏭', 'fa-forward', 'text-amber-400');
        handleSkip();
      }
      return;
    }
  };

  // HİÇ SORU BULUNAMADIĞINDA ÇIKAN EKRAN (Scroll Eklendi)
  if (deck.length === 0) {
    return (
      <div 
        data-quiz-module="true"
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" 
        onClick={onClose}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-700 p-6 sm:p-8 text-center max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700" onClick={e => e.stopPropagation()}>
          <i className="fa-solid fa-ghost text-4xl text-slate-500 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-200 mb-2">{isTr ? 'Soru Bulunamadı' : 'No Questions Found'}</h3>
          <p className="text-slate-400 text-sm mb-6">{isTr ? 'Bu kriterlere uygun soru bulunamadı.' : 'No questions found matching these criteria.'}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {(activeFilter !== 'all' || activeTags.length > 0 || selectedDifficulty !== null) && (
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSelectedDifficulty(null);
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
      <div 
        data-quiz-module="true"
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" 
        onClick={onClose}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
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
    <div 
      data-quiz-module="true"
      className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-sm" 
      onClick={onClose}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      {/* ANA TEST EKRANI - Okunaklı, Zarif, Mobil Kaydırma (Swipe) ve Yön Tuşları Uyumlu */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={handleTouchEnd}
        className="bg-slate-900/98 backdrop-blur-md w-full max-w-2xl min-h-[350px] sm:min-h-[370px] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden relative max-h-[94vh] sm:max-h-[92vh]" 
        onClick={e => e.stopPropagation()}
      >
        {/* Kısayol & Jest Toast Bildirimi */}
        {gestureToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-fadeIn flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-2xl backdrop-blur-md text-xs sm:text-sm font-bold bg-slate-900/95 text-slate-100 border-slate-700">
            <i className={`fa-solid ${gestureToast.icon} ${gestureToast.colorClass}`}></i>
            <span>{gestureToast.message}</span>
          </div>
        )}
        
        {/* Header */}
        <div data-quiz-header="true" className="quiz-modal-header px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-800 bg-slate-800/80 flex-none space-y-2.5 select-none">
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
                title={
                  !currentUser
                    ? (isTr ? "İyi soru bildirmek için giriş yapmalısınız" : "Login required to mark as good question")
                    : (isTr ? (isGood ? "İyi Soru (İşareti Kaldır)" : "İyi Soru Olarak İşaretle") : (isGood ? "Remove Good Mark" : "Mark as Good Question"))
                }
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-sm sm:text-base transition-colors rounded-lg hover:bg-slate-700/70 cursor-pointer ${isGood ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/50' : 'text-slate-400 hover:text-emerald-400'}`}
              >
                <i className={isGood ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"}></i>
              </button>

              {/* Hatalı Soru Bildir */}
              <button 
                onClick={handleReportToggle}
                title={
                  !currentUser
                    ? (isTr ? "Hata bildirmek için giriş yapmalısınız" : "Login required to report question error")
                    : (isTr ? (isReported ? "Hatalı Soru (İşareti Kaldır)" : "Hatalı Soru Bildir") : (isReported ? "Remove Report" : "Report Question Error"))
                }
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
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 pt-0.5 flex-wrap sm:flex-nowrap">
            {/* Soru İstatistiği */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold bg-slate-950/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-700/80 shadow-inner flex-shrink-0">
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
            <div className="flex items-center bg-slate-950/70 p-1 rounded-xl border border-slate-700/80 gap-1 sm:gap-1.5 flex-nowrap w-full sm:w-auto overflow-x-auto no-scrollbar">
              <button 
                onClick={() => toggleFilter('weak')}
                className={`text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap ${
                  activeFilter === 'weak' 
                    ? 'bg-rose-900/80 text-rose-200 border border-rose-700/80 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Zorlanılanlar' : 'Weakest'}
              </button>

              <button 
                onClick={() => toggleFilter('unattempted')}
                className={`text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap ${
                  activeFilter === 'unattempted' 
                    ? 'bg-sky-900/80 text-sky-200 border border-sky-700/80 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isTr ? 'Çözülmeyenler' : 'Unseen'}
              </button>
              <div className="h-4 w-[1px] bg-slate-700 mx-0.5 hidden sm:block flex-shrink-0"></div>

              {/* Manuel Tag Giriş Alanı */}
              <form onSubmit={handleTagSubmit} className="flex items-center gap-1 flex-1 sm:flex-initial min-w-0">
                <div className={`flex items-center bg-slate-900 rounded-lg px-2 py-1 border transition-all flex-1 min-w-0 ${
                  activeTags.length > 0 && activeTags[0] === (tagInput.replace(/^#/, '').trim())
                    ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                    : 'border-slate-700 focus-within:border-indigo-500'
                }`}>
                  <span className="text-xs text-indigo-400 font-bold mr-1 select-none flex-shrink-0">#</span>
                  <input 
                    type="text"
                    list="quiz-tag-suggestions"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder={isTr ? "etiket..." : "tag..."}
                    className="bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none w-full min-w-[48px] sm:w-24 font-medium truncate"
                  />
                  {tagInput && (
                    <button 
                      type="button" 
                      onClick={handleClearTagFilter}
                      className="text-slate-400 hover:text-rose-400 ml-0.5 p-0.5 text-xs cursor-pointer flex-shrink-0"
                      title={isTr ? "Etiket filtresini temizle" : "Clear tag filter"}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!tagInput.trim()}
                  className="text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 hover:bg-indigo-900 disabled:opacity-40 transition-all flex items-center cursor-pointer disabled:cursor-not-allowed shadow-sm flex-shrink-0"
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
        <div ref={scrollContainerRef} className="px-4 sm:px-7 py-4 sm:py-5 flex-1 flex flex-col justify-start overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
           <div data-quiz-header="true" className="quiz-question-header text-center mb-3 sm:mb-4 select-none">
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

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/80 uppercase tracking-wider">
                  {isTr ? 'Soru' : 'Question'} {currentIndex + 1} / {deck.length}
                </span>

                {currentQ.difficulty && (
                  <div className="relative inline-block text-left w-32 sm:w-36">
                    {/* Arka plan tıklama katmanı (menü açıkken dışarıya tıklandığında kapatmak için) */}
                    {isDiffMenuOpen && (
                      <div
                        className="fixed inset-0 z-40"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDiffMenuOpen(false);
                        }}
                      />
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDiffMenuOpen(prev => !prev);
                      }}
                      className={`w-full text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border flex items-center justify-between gap-1 transition-all cursor-pointer relative z-40 ${
                        selectedDifficulty !== null
                          ? 'ring-2 ring-white/70 shadow-lg font-bold'
                          : 'hover:brightness-125'
                      } ${
                        (selectedDifficulty || currentQ.difficulty) === 1
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/70'
                          : (selectedDifficulty || currentQ.difficulty) === 2
                          ? 'bg-teal-950/60 text-teal-300 border-teal-800/70'
                          : (selectedDifficulty || currentQ.difficulty) === 3
                          ? 'bg-amber-950/60 text-amber-300 border-amber-800/70'
                          : (selectedDifficulty || currentQ.difficulty) === 4
                          ? 'bg-orange-950/60 text-orange-300 border-orange-800/70'
                          : 'bg-rose-950/60 text-rose-300 border-rose-800/70'
                      }`}
                      title={
                        isTr
                          ? selectedDifficulty !== null
                            ? `Zorluk: ${currentQ.difficulty}/5 (${selectedDifficulty}/5 filtresi aktif). Seviyeyi değiştirmek veya kaldırmak için tıklayın.`
                            : `Zorluk: ${currentQ.difficulty}/5. Zorluk seviyesi seçmek için tıklayın.`
                          : `Difficulty: ${currentQ.difficulty}/5. Click to select difficulty level.`
                      }
                    >
                      <div className="flex items-center gap-1 min-w-0 truncate">
                        <i className="fa-solid fa-gauge-high text-[10px] flex-shrink-0"></i>
                        <span className="truncate">{isTr ? 'Zorluk' : 'Diff'}: {currentQ.difficulty}/5</span>
                      </div>
                      <i className={`fa-solid fa-chevron-down text-[8px] flex-shrink-0 opacity-80 transition-transform ${isDiffMenuOpen ? 'rotate-180' : ''}`}></i>
                    </button>

                    {/* Açılır Dropdown Menü: Buton ile birebir aynı hizada ve genişlikte (w-full left-0) */}
                    {isDiffMenuOpen && (
                      <div className="absolute left-0 top-full mt-1 z-50 w-full bg-slate-900/98 backdrop-blur-md rounded-lg border border-slate-700 shadow-2xl p-1 space-y-0.5 animate-fadeIn max-h-[170px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                        {selectedDifficulty !== null && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDifficulty(null);
                              setIsDiffMenuOpen(false);
                            }}
                            className="w-full text-center h-5 py-0.5 px-1.5 mb-0.5 rounded-md bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-rose-300 border border-slate-700/80 text-[9.5px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                            title={isTr ? "Zorluk filtresini kaldır" : "Clear difficulty filter"}
                          >
                            <i className="fa-solid fa-xmark text-[8.5px]"></i>
                            <span>{isTr ? 'Filtreyi Kaldır' : 'Clear Filter'}</span>
                          </button>
                        )}

                        <div className="space-y-0.5">
                          {DIFFICULTY_LEVELS.map(({ level, labelTr, labelEn, shortTr, shortEn, color }) => {
                            const isSelected = selectedDifficulty === level;
                            return (
                              <button
                                key={level}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSelectDifficulty(level);
                                }}
                                className={`w-full flex items-center justify-between px-2 py-0.5 h-6 rounded-md border text-[10px] font-semibold transition-all cursor-pointer ${color} ${
                                  isSelected
                                    ? 'ring-2 ring-white/90 shadow-md font-bold'
                                    : 'opacity-90 hover:opacity-100'
                                }`}
                                title={
                                  isTr
                                    ? isSelected
                                      ? `${level}/5 filtresi aktif. Kaldırmak için tekrar tıklayın.`
                                      : `${level}/5 (${labelTr}) seviyesini filtrele.`
                                    : isSelected
                                      ? `${level}/5 filter active. Click again to clear.`
                                      : `Filter by ${level}/5 (${labelEn}).`
                                }
                              >
                                <div className="flex items-center gap-1 min-w-0">
                                  <span className="font-bold">{level}/5</span>
                                  <span className="text-[9.5px] opacity-80 truncate">· {isTr ? shortTr : shortEn}</span>
                                </div>
                                {isSelected && (
                                  <i className="fa-solid fa-check text-[9px] text-white flex-shrink-0"></i>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {currentQ.quality && (
                  <span
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md border flex items-center justify-center transition-all select-none ${
                      currentQ.quality === 2
                        ? 'bg-sky-950/50 text-sky-300 border-sky-800/60 shadow-sm'
                        : 'bg-slate-800/80 text-slate-400 border-slate-700/80'
                    }`}
                    title={
                      isTr
                        ? `Soru Kalitesi: ${currentQ.quality}/2 (${
                            currentQ.quality === 2 ? 'Yüksek / Zengin Açıklama' : 'Standart / İyi'
                          })`
                        : `Question Quality: ${currentQ.quality}/2 (${
                            currentQ.quality === 2 ? 'Excellent / Rich Explanation' : 'Standard / Good'
                          })`
                    }
                  >
                    <i className="fa-solid fa-gem text-[11px] sm:text-xs"></i>
                  </span>
                )}
              </div>
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

           {/* 2. Eşleştirme Sorusu Bölümü (Kelimeler Havuzu + Cümleler Slotları - MOBİL & DESKTOP DOSTU) */}
           {currentQ.type === 'matching' && (
             <div className="w-full max-w-2xl mx-auto flex flex-col gap-2.5 sm:gap-3 mb-3">
               {/* Kelime Havuzu: Kaydırıldığında üstte sabitlenir, kelimeler her an erişilebilir kalır */}
               <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl">
                 <div className="flex items-center justify-between mb-2">
                   <span className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5 sm:gap-2">
                     <i className="fa-solid fa-layer-group text-teal-400 text-xs sm:text-sm"></i>
                     {isTr ? 'Kelime Havuzu' : 'Word Pool'}
                     <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
                       ({shuffledWordPool.length} {isTr ? 'kelime' : 'words'})
                     </span>
                   </span>
                   {!isAnswered && Object.keys(userMatches).length > 0 && (
                     <button 
                       onClick={handleClearAllMatches}
                       className="text-[11px] sm:text-xs font-semibold text-slate-400 hover:text-rose-400 bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 px-2 py-0.5 sm:py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                       title={isTr ? 'Tüm eşleştirmeleri temizle' : 'Clear all matches'}
                     >
                       <i className="fa-solid fa-rotate-left text-[10px]"></i>
                       <span>{isTr ? 'Sıfırla' : 'Reset'}</span>
                     </button>
                   )}
                 </div>

                 {/* Kelime Hapları / Çipleri */}
                 <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
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
                         className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 select-none shadow-sm cursor-pointer ${
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
                   <div className="mt-2 text-[11px] sm:text-xs text-slate-300 text-center bg-slate-900/50 py-1 px-2.5 rounded-lg border border-slate-800/70 flex items-center justify-center gap-1.5">
                     <i className="fa-solid fa-hand-pointer text-teal-400 text-[10px] sm:text-xs"></i>
                     <span>
                       {activeSlotId 
                         ? (isTr ? 'Seçili boşluğa yerleştirmek için yukarıdaki kelimelerden birine dokunun.' : 'Tap a word above to place into the selected blank.')
                         : (isTr ? 'Boşluğa dokunup kelime seçin veya doğrudan kelimeye dokunun.' : 'Tap a blank then select a word, or tap a word directly.')}
                     </span>
                   </div>
                 )}
               </div>

               {/* Cümleler Listesi: İç içe dikey kaydırma kaldırıldı, tüm modal tek akıcı kaydırmayla çalışır */}
               <div className="space-y-2 sm:space-y-2.5">
                 {shuffledMatchingItems.map((item, idx) => {
                   const parts = item.sentenceNl.split('___');
                   const assignedWord = userMatches[item.id];
                   const isActiveSlot = activeSlotId === item.id;
                   const isItemCorrect = isAnswered && (assignedWord || '').trim().toLowerCase() === item.answer.trim().toLowerCase();

                   return (
                     <div 
                       key={item.id}
                       className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all text-xs sm:text-sm leading-relaxed flex items-center gap-2 sm:gap-2.5 ${
                         isAnswered
                           ? isItemCorrect
                             ? 'bg-emerald-950/30 border-emerald-700/60 shadow-sm'
                             : 'bg-rose-950/30 border-rose-700/60 shadow-sm'
                           : isActiveSlot
                             ? 'bg-slate-800 border-teal-400 shadow-lg ring-2 ring-teal-400/30'
                             : 'bg-slate-800/60 border-slate-700/70 hover:border-slate-600'
                       }`}
                     >
                       <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-[11px] sm:text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-inner">
                         {idx + 1}
                       </span>

                       <div className="flex-1 leading-relaxed text-slate-100 font-medium text-xs sm:text-sm">
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
                           className={`mx-1 inline-flex items-center justify-center px-2.5 sm:px-3 py-1 sm:py-1.5 min-w-[75px] sm:min-w-[95px] rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all align-middle select-none shadow-sm cursor-pointer ${
                             isAnswered
                               ? isItemCorrect
                                 ? 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200'
                                 : 'bg-rose-950/80 border-2 border-rose-500 text-rose-200 line-through'
                               : assignedWord
                                 ? 'bg-teal-900/70 border-2 border-teal-400 text-teal-100 hover:bg-rose-950/60 hover:border-rose-500 hover:text-rose-200'
                                 : isActiveSlot
                                   ? 'border-2 border-teal-400 bg-teal-950/70 text-teal-300 ring-2 ring-teal-400/40 animate-pulse'
                                   : 'border-2 border-dashed border-slate-600 hover:border-teal-400 bg-slate-900/80 text-slate-400 hover:text-teal-300'
                           }`}
                           title={assignedWord && !isAnswered ? (isTr ? 'Kaldırmak için dokunun' : 'Tap to remove') : (isTr ? 'Bu boşluğu seç' : 'Select blank')}
                         >
                           {assignedWord ? (
                             <>
                               <span>{assignedWord}</span>
                               {!isAnswered && <i className="fa-solid fa-xmark text-[10px] ml-1.5 opacity-70 hover:opacity-100"></i>}
                             </>
                           ) : (
                             <span className="font-mono text-xs opacity-75">___</span>
                           )}
                         </button>

                         {/* Yanlış ise doğru cevabı hemen yanında yeşil rozetle göster */}
                         {isAnswered && !isItemCorrect && (
                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950 border border-emerald-500 text-emerald-300 text-[11px] sm:text-xs font-bold ml-1.5 align-middle shadow-sm">
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
                             <i className="fa-solid fa-circle-check text-emerald-400 text-sm sm:text-base"></i>
                           ) : (
                             <i className="fa-solid fa-circle-xmark text-rose-400 text-sm sm:text-base"></i>
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
             <div 
               onClick={goToNextState}
               className={`mt-2 p-3.5 sm:p-4 rounded-2xl border animate-fadeIn flex flex-col gap-1.5 max-w-xl mx-auto w-full shadow-lg cursor-pointer transition-all hover:scale-[1.005] select-none ${isCorrect ? 'bg-emerald-950/40 border-emerald-800/70 hover:bg-emerald-950/60' : 'bg-rose-950/40 border-rose-800/70 hover:bg-rose-950/60'}`}
               title={isTr ? "Sonraki soruya geçmek için dokunun veya kaydırın" : "Tap or swipe to continue to next question"}
             >
               <div className="flex items-center justify-between">
                 <h4 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                   <i className={`fa-solid ${isCorrect ? 'fa-circle-check text-base' : 'fa-circle-xmark text-base'}`}></i>
                   {isCorrect ? (isTr ? 'Tebrikler! Doğru Cevap!' : 'Correct!') : (isTr ? 'Yanlış Cevap' : 'Incorrect')}
                 </h4>
                 <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                   <span className="hidden sm:inline">
                     {isTr ? 'Devam: Enter ↵ veya Kaydır' : 'Continue: Enter ↵ or Swipe'}
                   </span>
                   <span className="sm:hidden text-[11px] text-amber-300 font-medium flex items-center gap-1">
                     <i className="fa-solid fa-angles-right text-[10px] animate-pulse"></i>
                     {isTr ? 'Kaydır / Dokun ⏭' : 'Swipe / Tap ⏭'}
                   </span>
                 </div>
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
           <div className="mt-auto pt-3 sm:pt-4 flex flex-wrap justify-center items-center gap-2.5 max-w-xl mx-auto w-full pb-1">
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
                   onClick={handleSkip}
                   className="flex-1 sm:flex-initial bg-slate-800/90 hover:bg-slate-750 text-slate-300 hover:text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold border border-slate-700 hover:border-slate-600 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm"
                   title={isTr ? 'Skoru etkilemeden sonraki soruya geçer (Yön Tuşları / Sağa-Sola Kaydır)' : 'Skip without affecting score (Arrow Keys / Swipe)'}
                 >
                   <i className="fa-solid fa-forward text-amber-400 text-xs"></i> 
                   <span>{isTr ? 'Soruyu Geç' : 'Skip'}</span>
                   <span className="hidden sm:inline text-[10px] text-slate-500 font-mono">(← / →)</span>
                 </button>

                 <button 
                   onClick={handleDontKnow}
                   className="flex-1 sm:flex-initial bg-slate-800/90 hover:bg-rose-950/50 text-slate-300 hover:text-rose-300 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold border border-slate-700 hover:border-rose-800/60 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm"
                   title={isTr ? 'Yanlış kabul edilir' : 'Counts as incorrect'}
                 >
                   <i className="fa-solid fa-circle-question text-rose-400 text-xs"></i> 
                   <span>{isTr ? 'Bilmiyorum' : "Don't know"}</span>
                 </button>
               </>
             ) : (
               <button 
                 onClick={handleNext}
                 className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold border border-indigo-500/80 shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer"
               >
                 <span>{currentIndex < deck.length - 1 ? (isTr ? 'Sıradaki Soru' : 'Next Question') : (isTr ? 'Testi Bitir' : 'Finish')}</span>
                 <span className="text-xs opacity-75 font-mono hidden sm:inline">(Enter ↵ veya Kaydır)</span>
                 <i className="fa-solid fa-arrow-right text-xs"></i>
               </button>
             )}
           </div>

           {/* Yön Tuşları & Mobil Kaydırma (Swipe) Kısayol Çubuğu */}
           <div className="pt-2.5 pb-1 border-t border-slate-800/70 mt-2.5 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-slate-400 font-medium px-2 flex-wrap select-none max-w-xl mx-auto w-full">
             <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors" title={isTr ? "Sağa veya sola kaydır / Yön tuşları: Soruyu geç" : "Swipe left or right / Arrow keys: Skip question"}>
               <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono text-[9px] sm:text-[10px]">←</kbd>
               <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono text-[9px] sm:text-[10px]">→</kbd>
               <span>{isTr ? "Sağa / Sola Kaydır: Soruyu Geç" : "Swipe Left / Right: Skip"}</span>
             </span>
           </div>
        </div>

      </div>
    </div>
  );
}