// src/components/ExerciseEngine.js
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import QuizModule from './QuizModule';
import ReadingPassage from './ReadingPassage';
import ExerciseResultToast from './ExerciseResultToast';
import { speakDutch as speakDutchAudio } from '../utils/speech';

const translations = {
  tr: {
    chapter: "Bölüm",
    section: "Sectie",
    myNote: "Mijn Notitie (Notum):",
    notePlaceholder: "Notun (max 100 kar.)...",
    defaultNote: "Önemli Bölüm",
    sectionQuestions: "Bölüm Soruları",
    typeAnswer: "Cevabını yaz...",
    correct: "✔️ Juist! (Doğru)",
    incorrect: "❌ Onjuist. (Yanlış)",
    correctAnswerIs: "Doğru cevap (Het goede antwoord is): ",
    verifyAnswers: "Cevapları Kontrol Et",
    practiceSummary: "Çalış & Test Et", 
    summaryQuizTitle: "Ünite Özeti Testi" 
  },
  en: {
    chapter: "Chapter",
    section: "Section",
    myNote: "Mijn Notitie (My Note):",
    notePlaceholder: "Your note (max 100 char.)...",
    defaultNote: "Important Section",
    sectionQuestions: "Section Questions",
    typeAnswer: "Type your answer...",
    correct: "✔️ Juist! (Correct)",
    incorrect: "❌ Onjuist. (Incorrect)",
    correctAnswerIs: "The correct answer is (Het goede antwoord is): ",
    verifyAnswers: "Verify Answers",
    practiceSummary: "Practice", 
    summaryQuizTitle: "Chapter Summary Quiz" 
  }
};

export default function ExerciseEngine({ sectionData, chapterNum, favorites, toggleFavorite, completed, toggleCompleted }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations['tr'];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [resultToast, setResultToast] = useState(null);
  const [qStats, setQStats] = useState(JSON.parse(localStorage.getItem('questionStats')) || {});

  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");
  
  const [isQuizOpen, setIsQuizOpen] = useState(false); 

  const isFav = favorites && favorites[sectionData?.id];
  const isComp = completed && completed[sectionData?.id];
  const isSummaryMode = sectionData?.id?.startsWith('On-Class-'); 
  const isReadingMode = sectionData?.id?.startsWith('Reading-'); 

  useEffect(() => {
    setAnswers({});         
    setShowResults(false);
    setResultToast(null);  
    setShowFavInput(false); 
    setIsQuizOpen(false);   
  }, [sectionData?.id]);

  if (!sectionData) return null;

  const currentGroups = sectionData.exerciseGroups || [];

  const handleAnswerChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleVerify = () => {
    setShowResults(true);
    const newStats = { ...qStats };
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let total = 0;

    currentGroups.forEach(group => {
      group.questions.forEach(q => {
        total += 1;
        const userAns = answers[q.id]?.toLowerCase().trim() || "";
        const isCorrect = Boolean(userAns && q.correctAnswer && userAns === q.correctAnswer.toLowerCase().trim());
        if (!userAns) {
          unanswered += 1;
          incorrect += 1;
        } else if (isCorrect) {
          correct += 1;
        } else {
          incorrect += 1;
        }
        if (userAns !== "") {
          const current = newStats[q.id] || { correct: 0, incorrect: 0 };
          newStats[q.id] = {
            correct: current.correct + (isCorrect ? 1 : 0),
            incorrect: current.incorrect + (!isCorrect ? 1 : 0)
          };
        }
      });
    });
    setQStats(newStats);
    localStorage.setItem('questionStats', JSON.stringify(newStats));
    setResultToast({ correct, incorrect, unanswered, total, ts: Date.now() });
  };

  const speakDutch = (text) => {
    speakDutchAudio(text);
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (isFav) toggleFavorite(sectionData.id, null);
    else setShowFavInput(true);
  };

  const saveFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(sectionData.id, favNote.trim() || t.defaultNote);
    setShowFavInput(false);
    setFavNote("");
  };

  return (
    <div className="space-y-6" onClick={() => setShowFavInput(false)}>
      
      {/* SUMMARY MODU BAŞLIK VE KONTROL KARTI */}
      {isSummaryMode && (
        <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg border border-amber-900/40 relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Dekoratif Arka Plan İkonu */}
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <i className="fa-solid fa-chalkboard-user text-8xl text-amber-400"></i>
          </div>

          {/* SOL: Başlık & Rozet */}
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-amber-950/50 border border-amber-800/60 text-amber-300 font-bold px-3 py-1 rounded-full text-xs mb-2">
              <i className="fa-solid fa-chalkboard-user text-[11px]"></i>
              <span>Hoofdstuk ({t.chapter}) {chapterNum} • {lang === 'tr' ? 'Özet' : 'Summary'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
              {lang === 'tr' ? `Bölüm ${chapterNum} - Ders Özeti (Summary)` : `Chapter ${chapterNum} - Chapter Summary`}
            </h2>
            {isFav && favorites[sectionData.id] && (
              <span className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-1">
                <i className="fa-solid fa-star text-[10px]"></i> {favorites[sectionData.id]}
              </span>
            )}
          </div>

          {/* SAĞ: Aksiyon Butonları (Practice, Tamamlandı, Favori) */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 self-end sm:self-center">
            {/* PRACTICE BUTONU */}
            <button
              type="button"
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-2 h-9 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold bg-amber-600/20 hover:bg-amber-600 text-amber-400 hover:text-white border border-amber-500/50 hover:border-amber-500 transition-all shadow-sm group cursor-pointer"
              title={lang === 'tr' ? "Ünite Özeti Testi (Pratik Yap)" : "Practice Summary Quiz"}
            >
              <i className="fa-solid fa-dumbbell group-hover:animate-bounce text-xs"></i>
              <span>{t.practiceSummary || "Practice"}</span>
            </button>

            {/* TAMAMLANDI BUTONU */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleCompleted(sectionData.id);
              }}
              className="text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center w-8 h-8"
              title={isComp ? (lang === 'tr' ? "Tamamlandı olarak işaretlendi" : "Marked as completed") : (lang === 'tr' ? "Tamamlandı olarak işaretle" : "Mark as completed")}
            >
              {isComp ? (
                <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
              ) : (
                <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
              )}
            </button>

            {/* FAVORİ BUTONU & NOT AÇILIR PENCERESİ */}
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={handleStarClick}
                className="text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center w-8 h-8"
                title={isFav ? `Favori: ${favorites[sectionData.id]}` : (lang === 'tr' ? "Favorilere ekle" : "Add to favorites")}
              >
                {isFav ? (
                  <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                ) : (
                  <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                )}
              </button>

              {showFavInput && (
                <div 
                  className="absolute right-0 top-full mt-2 bg-slate-900 border border-amber-500/50 p-1.5 rounded-xl shadow-2xl z-50 flex items-center gap-1.5 animate-fadeIn" 
                  onClick={e => e.stopPropagation()}
                >
                  <input
                    autoFocus
                    maxLength={100}
                    value={favNote}
                    onChange={e => setFavNote(e.target.value)}
                    onKeyDown={e => { 
                      if (e.key === 'Enter') saveFavorite(e); 
                      if (e.key === 'Escape') setShowFavInput(false);
                    }}
                    placeholder={t.notePlaceholder}
                    className="bg-slate-950 text-slate-200 text-xs px-2.5 py-1 w-36 sm:w-48 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-400 placeholder-slate-500"
                  />
                  <button 
                    type="button"
                    onClick={saveFavorite} 
                    className="bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STANDART BÖLÜM BAŞLIK VE AKSİYON KUTUSU */}
      {!isReadingMode && !isSummaryMode && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 flex flex-col lg:flex-row justify-between items-start gap-6 relative overflow-hidden">
          
          {/* SOL KISIM: Başlık, Chapter Etiketi, Favori/Tamamlandı İkonları */}
          <div className="flex-1 w-full relative z-10">
            <div className="inline-flex items-center space-x-2 bg-brand-900/30 border border-brand-500/20 text-brand-400 font-bold px-3 py-1 rounded-full text-xs mb-3">
              <i className="fa-solid fa-stethoscope"></i>
              <span>Hoofdstuk ({t.chapter}) {chapterNum} • {`${t.section} ${sectionData.id}`}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-between w-full gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-100">
                    {typeof sectionData.title === 'object' 
                      ? (sectionData.title[lang] || sectionData.title.tr || sectionData.title.en) 
                      : sectionData.title}
                  </h2>
                  {isFav && (
                    <span className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-1">
                      <i className="fa-solid fa-star text-[10px]"></i> {favorites[sectionData.id]}
                    </span>
                  )}
                </div>
                
                {/* İKON ALANI (TİK + YILDIZ + FAVORİ GİRİŞİ) */}
                <div className="flex items-center space-x-3">
                  <button onClick={(e) => { e.stopPropagation(); toggleCompleted(sectionData.id); }} className="text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer">
                    {isComp ? (
                      <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
                    ) : (
                      <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
                    )}
                  </button>

                  <div className="flex items-center">
                    <button onClick={handleStarClick} className="text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer">
                      {isFav ? (
                        <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                      ) : (
                        <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                      )}
                    </button>
                  </div>

                  {showFavInput && (
                    <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/50 p-1 rounded-xl shadow-lg animate-fadeIn" onClick={e => e.stopPropagation()}>
                      <input
                        autoFocus
                        maxLength={100}
                        value={favNote}
                        onChange={e => setFavNote(e.target.value)}
                        onKeyDown={e => { 
                          if (e.key === 'Enter') saveFavorite(e); 
                          if (e.key === 'Escape') setShowFavInput(false);
                        }}
                        placeholder={t.notePlaceholder}
                        className="bg-transparent text-slate-200 text-xs px-2.5 py-1 w-36 sm:w-44 focus:outline-none placeholder-slate-500"
                      />
                      <button onClick={saveFavorite} className="bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-sm">
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* READING / OKUMA PARÇASI */}
      {sectionData.readingPassage && (
        <ReadingPassage 
          data={sectionData.readingPassage} 
          lang={lang} 
          chapterId={chapterNum || sectionData.chapter || (sectionData.id?.startsWith('Reading-') ? Number(sectionData.id.replace('Reading-', '')) : 1)}
          sectionId={sectionData.id}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          completed={completed}
          toggleCompleted={toggleCompleted}
        />
      )}

      {/* TEORİ BÖLÜMÜ */}
      {sectionData.theory && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
          <div className="text-slate-300 leading-relaxed font-medium">
            {typeof sectionData.theory === 'function' ? sectionData.theory(lang) : sectionData.theory}
          </div>
        </div>
      )}

      {/* BÖLÜM SORULARI */}
      {currentGroups.length > 0 && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-6">
          <div className="border-b border-slate-700 pb-3 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2.5">
              <i className="fa-solid fa-pen-to-square text-brand-400"></i>
              <span>{t.sectionQuestions}</span>
            </h3>
            <span className="text-xs bg-slate-900/80 text-brand-300 border border-slate-700 px-3 py-1 rounded-full font-bold">
              {currentGroups.reduce((acc, g) => acc + (g.questions?.length || 0), 0)} {lang === 'tr' ? 'Soru' : 'Questions'}
            </span>
          </div>

          {currentGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6 mb-8">
              <h4 className="font-bold text-brand-400 border-b border-slate-700/60 pb-2 flex items-center space-x-2 text-sm sm:text-base">
                <i className="fa-solid fa-circle-question text-xs text-brand-400/70"></i>
                <span>{group.instruction}</span>
              </h4>

            {group.questions.filter(q => q && q.question).map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = Boolean(userAns && q.correctAnswer && userAns.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim());

              return (
                <div key={q.id} className="p-4 rounded-xl border border-slate-700 bg-slate-900/50 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-extrabold text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">Q{idx + 1}</span>
                    <p className="flex-1 font-semibold text-sm text-slate-200">{q.question}</p>
                    <button onClick={() => speakDutch(q.question)} className="text-slate-500 hover:text-brand-400 text-xs transition-colors">
                      <i className="fa-solid fa-volume-high"></i>
                    </button>
                  </div>

                  <div className="pt-1">
                    {q.type === 'multiple_choice' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map(opt => {
                          let btnClass = "bg-slate-800 border-slate-600 text-slate-300 hover:border-brand-500 hover:bg-slate-700";
                          if (userAns === opt) btnClass = "bg-brand-600 text-white border-brand-500 shadow-sm";
                          if (showResults) {
                            if (opt === q.correctAnswer) btnClass = "bg-emerald-600 text-white border-emerald-500 font-bold";
                            else if (userAns === opt && !isCorrect) btnClass = "bg-rose-600 text-white border-rose-500";
                          }
                          return (
                            <button key={opt} disabled={showResults} onClick={() => handleAnswerChange(q.id, opt)} className={`p-3 rounded-lg border text-xs text-left font-medium transition-all flex items-center justify-between ${btnClass}`}>
                              <span>{opt}</span>
                              {showResults && opt === q.correctAnswer && <i className="fa-solid fa-circle-check text-emerald-200 text-sm"></i>}
                              {showResults && userAns === opt && !isCorrect && <i className="fa-solid fa-circle-xmark text-rose-200 text-sm"></i>}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <input 
                        type="text" 
                        disabled={showResults}
                        placeholder={t.typeAnswer} 
                        value={userAns || ''} 
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        className="p-3 w-full max-w-sm text-sm rounded-xl border border-slate-600 bg-slate-900 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    )}
                  </div>

                  {showResults && (
                    <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? "bg-emerald-900/30 text-emerald-300 border border-emerald-800" : "bg-rose-900/30 text-rose-300 border border-rose-800"}`}>
                      <span className="font-bold">{isCorrect ? t.correct : t.incorrect} </span>
                      {!isCorrect && <span>{t.correctAnswerIs}<strong className="text-white">{q.correctAnswer}</strong></span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-700">
          {resultToast ? (
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold shadow-sm animate-fadeIn">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <i className="fa-solid fa-circle-check"></i> {resultToast.correct} {lang === 'tr' ? 'Doğru' : 'Correct'}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <i className="fa-solid fa-circle-xmark"></i> {resultToast.incorrect} {lang === 'tr' ? 'Yanlış' : 'Incorrect'}
              </span>
              {resultToast.unanswered > 0 && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    {resultToast.unanswered} {lang === 'tr' ? 'Boş' : 'Empty'}
                  </span>
                </>
              )}
            </div>
          ) : <div className="hidden sm:block"></div>}
          <button onClick={handleVerify} className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition cursor-pointer">
            {t.verifyAnswers}
          </button>
        </div>
      </div>
    )}

      {/* FLOATING TEST DEĞERLENDİRME BİLDİRİMİ */}
      <ExerciseResultToast 
        stats={resultToast} 
        lang={lang} 
        onClose={() => setResultToast(null)} 
      />

      {/* YENİ EKLENEN: QUIZ MODÜLÜ */}
      {isQuizOpen && (
        <QuizModule 
          tags={[`summary_ch${chapterNum}`]} 
          onClose={() => setIsQuizOpen(false)} 
          title={`${t.summaryQuizTitle} (H${chapterNum})`}
        />
      )}
    </div>
  );
}