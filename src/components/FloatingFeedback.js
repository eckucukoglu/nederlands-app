// src/components/FloatingFeedback.js
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { auth, submitFeedback, onAuthStateChanged } from '../firebase'; 

export default function FloatingFeedback({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackText.trim() || !user) return;

    setIsSubmitting(true);
    try {
      await submitFeedback(feedbackText, user);
      alert(isTr ? "Geri bildiriminiz başarıyla iletildi. Teşekkürler!" : "Feedback successfully submitted. Thank you!");
      setFeedbackText("");
      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      alert(isTr ? "Bir hata oluştu, lütfen tekrar deneyin." : "An error occurred, please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-6 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 text-xl transition-colors bg-slate-900 rounded-full w-8 h-8 flex items-center justify-center"
          title={isTr ? "Kapat" : "Close"}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2 mt-1">
          <i className="fa-solid fa-paper-plane text-brand-400"></i>
          {isTr ? 'Geri Bildirim Gönder' : 'Send Feedback'}
        </h3>

        {!user ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
             <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shadow-inner">
                 <i className="fa-solid fa-user-lock text-slate-400 text-2xl"></i>
             </div>
             <p className="text-sm font-medium text-slate-300 px-4">
               {isTr ? "Geri bildirim göndermek için lütfen giriş yapın." : "Please log in to send feedback."}
             </p>
          </div>
        ) : (
          <>
            <p className="text-xs text-slate-400 mb-4">
              {isTr 
                ? 'Hata, öneri veya düşüncelerinizi bizimle paylaşın.' 
                : 'Share any bugs, suggestions, or thoughts with us.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea 
                autoFocus
                maxLength={256}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder={isTr ? "Mesajınızı buraya yazın..." : "Write your message here..."}
                className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-brand-500 resize-none shadow-inner"
              ></textarea>
              <div className="text-right text-[10px] text-slate-500 font-medium -mt-2">
                {feedbackText.length} / 256
              </div>

              <button 
                type="submit" 
                disabled={!feedbackText.trim() || isSubmitting}
                className="w-full flex-shrink-0 bg-brand-600 hover:bg-brand-500 text-white font-bold py-2.5 rounded-xl transition-colors disabled:opacity-50 flex justify-center items-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <i className="fa-solid fa-circle-notch fa-spin"></i>
                ) : (
                  <><i className="fa-solid fa-paper-plane"></i> {isTr ? 'Gönder' : 'Submit'}</>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}