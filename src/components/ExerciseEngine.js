// src/components/ExerciseEngine.js
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  tr: {
    chapter: "Bölüm",
    section: "Sectie",
    myNote: "Mijn Notitie (Notum):",
    notePlaceholder: "Notun (max 100 kar.)...",
    defaultNote: "Önemli Bölüm",
    bookQuestions: "Kitaptaki Sorular",
    extraPractice: "Ekstra Pratik",
    typeAnswer: "Cevabını yaz...",
    correct: "✔️ Juist! (Doğru)",
    incorrect: "❌ Onjuist. (Yanlış)",
    correctAnswerIs: "Doğru cevap (Het goede antwoord is): ",
    verifyAnswers: "Cevapları Kontrol Et"
  },
  en: {
    chapter: "Chapter",
    section: "Section",
    myNote: "Mijn Notitie (My Note):",
    notePlaceholder: "Your note (max 100 char.)...",
    defaultNote: "Important Section",
    bookQuestions: "Book Exercises",
    extraPractice: "Extra Practice",
    typeAnswer: "Type your answer...",
    correct: "✔️ Juist! (Correct)",
    incorrect: "❌ Onjuist. (Incorrect)",
    correctAnswerIs: "The correct answer is (Het goede antwoord is): ",
    verifyAnswers: "Verify Answers"
  }
};

export default function ExerciseEngine({ sectionData, chapterNum, favorites, toggleFavorite, completed, toggleCompleted }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations['tr'];

  const [subTab, setSubTab] = useState("book");
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [qStats, setQStats] = useState(JSON.parse(localStorage.getItem('questionStats')) || {});

  const [showFavInput, setShowFavInput] = useState(false);
  const [favNote, setFavNote] = useState("");

  const isFav = favorites && favorites[sectionData?.id];
  const isComp = completed && completed[sectionData?.id];

  useEffect(() => {
    setSubTab("book");      
    setAnswers({});         
    setShowResults(false);  
    setShowFavInput(false); 
  }, [sectionData?.id]);

  if (!sectionData) return null;

  const bookExercises = sectionData.exerciseGroups?.filter(g => !g.isExtra) || [];
  const extraExercises = sectionData.exerciseGroups?.filter(g => g.isExtra) || [];
  const currentGroups = subTab === "book" ? bookExercises : extraExercises;

  const handleAnswerChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleVerify = () => {
    setShowResults(true);
    const newStats = { ...qStats };
    currentGroups.forEach(group => {
      group.questions.forEach(q => {
        const userAns = answers[q.id]?.toLowerCase().trim() || "";
        const isCorrect = userAns === q.correctAnswer.toLowerCase();
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
  };

  const speakDutch = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    window.speechSynthesis.speak(utterance);
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
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        
        <div className="flex-1">
          <div className="inline-flex items-center space-x-2 bg-brand-900/30 border border-brand-500/20 text-brand-400 font-bold px-3 py-1 rounded-full text-xs mb-3">
            <i className="fa-solid fa-stethoscope"></i>
            <span>Hoofdstuk ({t.chapter}) {chapterNum} • {t.section} {sectionData.id}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-100">{sectionData.title}</h2>
              {isFav && (
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-1">
                  <i className="fa-solid fa-star text-[10px]"></i> {favorites[sectionData.id]}
                </span>
              )}
            </div>
            
            {/* İKON ALANI (TİK + YILDIZ) */}
            <div className="relative flex items-center space-x-3">
              
              <button onClick={(e) => { e.stopPropagation(); toggleCompleted(sectionData.id); }} className="text-2xl transition-transform hover:scale-110 focus:outline-none mt-1">
                {isComp ? (
                  <i className="fa-solid fa-circle-check text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"></i>
                ) : (
                  <i className="fa-regular fa-circle-check text-slate-500 hover:text-emerald-400 transition-colors"></i>
                )}
              </button>

              <div className="flex items-center">
                <button onClick={handleStarClick} className="text-2xl transition-transform hover:scale-110 focus:outline-none mt-1">
                  {isFav ? (
                    <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"></i>
                  ) : (
                    <i className="fa-regular fa-star text-slate-500 hover:text-amber-400 transition-colors"></i>
                  )}
                </button>
              </div>

              {showFavInput && (
                <div className="absolute left-full ml-3 top-0 bg-slate-800 p-2 rounded-xl shadow-2xl border border-slate-600 z-50 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                  <input
                    autoFocus
                    maxLength={100}
                    value={favNote}
                    onChange={e => setFavNote(e.target.value)}
                    placeholder={t.notePlaceholder}
                    className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 w-48 focus:outline-none focus:border-amber-400"
                  />
                  <button onClick={saveFavorite} className="bg-emerald-600 hover:bg-emerald-500 text-white p-1.5 rounded-lg text-xs transition-colors">
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-1.5 rounded-xl flex space-x-1 w-full lg:w-auto border border-slate-700/50">
          <button
            onClick={() => { setSubTab("book"); setShowResults(false); }}
            className={`flex-1 lg:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              subTab === "book" ? "bg-slate-700 text-brand-300 shadow-sm" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <i className="fa-solid fa-book-open"></i><span>{t.bookQuestions}</span>
          </button>
          <button
            onClick={() => { setSubTab("extra"); setShowResults(false); }}
            className={`flex-1 lg:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              subTab === "extra" ? "bg-brand-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <i className="fa-solid fa-fire text-amber-400"></i><span>{t.extraPractice}</span>
          </button>
        </div>
      </div>

      {sectionData.theory && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
          <div className="text-slate-300 leading-relaxed font-medium">
            {typeof sectionData.theory === 'function' ? sectionData.theory(lang) : sectionData.theory}
          </div>
        </div>
      )}

      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-6">
        {currentGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-6 mb-8">
            <h3 className="font-bold text-brand-400 border-b border-slate-700 pb-2 flex items-center space-x-2">
              <i className="fa-solid fa-pen-to-square"></i>
              <span>{group.instruction}</span>
            </h3>

            {group.questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns?.toLowerCase().trim() === q.correctAnswer.toLowerCase();

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

        {currentGroups.length > 0 && (
          <div className="flex justify-end pt-4 border-t border-slate-700">
            <button onClick={handleVerify} className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition">
              {t.verifyAnswers}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}