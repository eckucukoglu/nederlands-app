// src/components/FloatingFeedback.js
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { auth, submitFeedback, onAuthStateChanged } from '../firebase'; 

export default function FloatingFeedback() {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const [isOpen, setIsOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  
  // Drag (Sürükleme) State'leri
  const [pos, setPos] = useState({ x: window.innerWidth - 60, y: window.innerHeight - 120 });
  const isDragging = useRef(false);
  const dragStart = useRef(null);

  // Kullanıcı giriş durumunu dinle
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Pencere boyutu değiştiğinde butonun ekranın dışında kalmasını önlemek için
  useEffect(() => {
    const handleResize = () => {
      setPos(p => {
        let newX = p.x;
        let newY = p.y;
        if (newX > window.innerWidth - 50) newX = window.innerWidth - 50;
        if (newY > window.innerHeight - 50) newY = window.innerHeight - 50;
        return { x: newX, y: newY };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY, startX: pos.x, startY: pos.y };
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      isDragging.current = true;
    }
    setPos({ x: dragStart.current.startX + dx, y: dragStart.current.startY + dy });
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture(e.pointerId);
    dragStart.current = null;
    
    // Yüzde 50'yi geçtiyse sağa veya sola yapış (Snap to edge)
    const midX = window.innerWidth / 2;
    if (pos.x < midX) {
      setPos(p => ({ ...p, x: 10 })); 
    } else {
      setPos(p => ({ ...p, x: window.innerWidth - 50 }));
    }

    // Sürüklenmediyse, sadece tıklandıysa modalı aç
    if (!isDragging.current) {
      setIsOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackText.trim() || !user) return;

    setIsSubmitting(true);
    try {
      await submitFeedback(feedbackText, user);
      alert(isTr ? "Geri bildiriminiz başarıyla iletildi. Teşekkürler!" : "Feedback successfully submitted. Thank you!");
      setFeedbackText("");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert(isTr ? "Bir hata oluştu, lütfen tekrar deneyin." : "An error occurred, please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Sürüklenen Yüzen Buton */}
      {!isOpen && (
        <div 
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ 
            left: `${pos.x}px`, 
            top: `${pos.y}px`, 
            position: 'fixed',
            touchAction: 'none' // Mobilde sayfayı kaydırmayı önler
          }}
          className="z-[100] w-10 h-10 bg-slate-800 border-2 border-brand-500 rounded-full flex items-center justify-center text-brand-400 shadow-[0_0_12px_rgba(56,189,248,0.4)] cursor-pointer hover:bg-brand-500 hover:text-white transition-all duration-200"
          title={isTr ? "Geri Bildirim" : "Feedback"}
        >
          <i className="fa-solid fa-paper-plane text-sm pointer-events-none -ml-0.5"></i>
        </div>
      )}

      {/* Geri Bildirim Formu Modalı */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-6 shadow-2xl relative animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 text-xl transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
              <i className="fa-solid fa-paper-plane text-brand-400"></i>
              {isTr ? 'Geri Bildirim Gönder' : 'Send Feedback'}
            </h3>

            {!user ? (
              // Giriş Yapmamış Kullanıcı Ekranı
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
                 <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shadow-inner">
                     <i className="fa-solid fa-user-lock text-slate-400 text-2xl"></i>
                 </div>
                 <p className="text-sm font-medium text-slate-300 px-4">
                   {isTr ? "Geri bildirim göndermek için lütfen giriş yapın." : "Please log in to send feedback."}
                 </p>
              </div>
            ) : (
              // Giriş Yapmış Kullanıcı Ekranı
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
                    className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-2.5 rounded-xl transition-colors disabled:opacity-50 flex justify-center items-center gap-2 shadow-lg"
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
      )}
    </>
  );
}