// src/components/AuthModal.js
import React, { useState, useEffect } from 'react';
import { auth, sendSignInLinkToEmail, deleteCloudData } from '../firebase'; 
import { useLanguage } from '../contexts/LanguageContext';
import { getSpeechRate, setSpeechRate, testDutchSpeech } from '../utils/speech';

export default function AuthModal({ isOpen, onClose, user }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [speechRate, setLocalSpeechRate] = useState(getSpeechRate());
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleRateUpdate = (e) => {
      setLocalSpeechRate(e.detail || getSpeechRate());
    };
    window.addEventListener('speechRateChanged', handleRateUpdate);
    return () => window.removeEventListener('speechRateChanged', handleRateUpdate);
  }, []);
  
  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const actionCodeSettings = {
      url: window.location.origin, 
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      setMessage(t('authSuccess')); 
    } catch (error) {
      setMessage(t('authError') + error.message); 
    }
    setLoading(false);
  };

  const handleLogout = () => {
    auth.signOut();
    window.location.reload();
  };

  const exportData = () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key.startsWith('firebase')) data[key] = localStorage.getItem(key);
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `nederlands_backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (typeof data !== 'object' || data === null) throw new Error("Geçersiz format");
        
        Object.keys(data).forEach(key => {
          if(typeof data[key] === 'string') {
             localStorage.setItem(key, data[key]);
          }
        });
        
        alert(t('importSuccess')); 
        window.location.reload();
      } catch (err) {
        alert(t('importError')); 
      }
    };
    reader.readAsText(file);
  };

  const handleDeleteAllData = async () => {
    try {
      if (user) {
        await deleteCloudData(user.uid);
      }

      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !key.startsWith('firebase') && key !== 'emailForSignIn') {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => localStorage.removeItem(key));

      alert(lang === 'tr' ? 'Tüm gelişiminiz en başa sarıldı ve verileriniz silindi.' : 'All your progress and data have been reset.');
      window.location.reload();

    } catch (error) {
      console.error("Veriler sıfırlanırken hata oluştu:", error);
      alert(lang === 'tr' ? 'Veriler sıfırlanırken bir hata oluştu.' : 'An error occurred while resetting data.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-5 rounded-2xl shadow-2xl max-w-sm w-full relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700" onClick={e => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-7 h-7 flex items-center justify-center transition-colors z-10">
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* BAŞLIK & İKON (ZARİF & KOMPAKT) */}
        <div className="text-center mb-3.5">
          <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-2 text-brand-400 shadow-inner">
            <i className="fa-solid fa-cloud-arrow-up text-base"></i>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-100">{t('syncProgress')}</h2>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-snug max-w-[280px] mx-auto">
            {t('syncDesc')}
          </p>
        </div>

        {/* KULLANICI GİRİŞ DURUMU VEYA FORM */}
        {user ? (
          <div className="mb-3">
            <div className="bg-emerald-950/30 border border-emerald-800/40 p-2.5 rounded-xl flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-[9px]"></i>
                  {t('loggedIn')}
                </p>
                <p className="text-xs text-slate-200 font-medium truncate mt-0.5">{user.email}</p>
              </div>
              <button 
                onClick={handleLogout} 
                className="bg-slate-800 hover:bg-rose-950/40 border border-slate-700 hover:border-rose-700/50 text-slate-300 hover:text-rose-300 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <i className="fa-solid fa-arrow-right-from-bracket text-[10px]"></i>
                <span>{t('logout')}</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-2 mb-3">
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="w-full bg-slate-950/60 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>
            <button 
              disabled={loading} 
              type="submit" 
              className="w-full bg-brand-600 hover:bg-brand-500 active:scale-[0.99] text-white text-xs font-bold py-2 rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center justify-center gap-1.5"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin text-xs"></i>
                  <span>{t('connecting')}</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                  <span>{t('sendLoginLink')}</span>
                </>
              )}
            </button>
            {message && (
              <p className={`text-[11px] text-center font-medium ${message.includes('❌') ? 'text-rose-400' : 'text-emerald-400'}`}>
                {message}
              </p>
            )}
          </form>
        )}
        
        {/* AYARLAR GRUBU (DİL VE SES HIZI) */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          
          {/* DİL SEÇİMİ */}
          <div className="bg-slate-950/40 border border-slate-800/80 px-3 py-1.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <i className="fa-solid fa-globe text-brand-400 text-xs"></i>
              <span>{t('language')}</span>
            </div>
            
            <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700">
              <button 
                type="button"
                onClick={() => setLang('tr')}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-md transition-all ${lang === 'tr' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                TR
              </button>
              <button 
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-md transition-all ${lang === 'en' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                EN
              </button>
            </div>
          </div>
          
          {/* SESLENDİRME HIZI AYARI (ANALOG SLIDER - YÜKSEK KONTRAST) */}
          <div className="bg-slate-950/60 border border-slate-700/80 px-3.5 py-2.5 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-100">
                <i className="fa-solid fa-sliders text-teal-400 text-xs"></i>
                <span>{lang === 'tr' ? 'Seslendirme Hızı' : 'Speech Speed'}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-extrabold text-teal-300 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded-md shadow-sm">
                  {Number(speechRate).toFixed(2)}x
                </span>
                <button 
                  type="button"
                  onClick={() => testDutchSpeech(speechRate)}
                  className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-2.5 py-1 rounded-lg border border-teal-400/80 shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                  title={lang === 'tr' ? 'Örnek Sesi Dinle' : 'Play Sample Audio'}
                >
                  <i className="fa-solid fa-volume-high text-xs text-white"></i>
                  <span className="text-white font-bold">{lang === 'tr' ? 'Test' : 'Test'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-0.5">
              <span className="text-xs font-mono font-bold text-slate-300">0.6x</span>
              <input 
                type="range"
                min="0.6"
                max="1.4"
                step="0.05"
                value={speechRate}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setLocalSpeechRate(val);
                  setSpeechRate(val);
                }}
                className="analog-speed-slider flex-1 h-1.5 cursor-ew-resize"
              />
              <span className="text-xs font-mono font-bold text-slate-300">1.4x</span>
            </div>
          </div>
        </div>
        
        {/* VERİ YÖNETİMİ BÖLÜMÜ (KOMPAKT) */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-2">
          <div className="flex gap-2">
            <button 
              onClick={exportData} 
              className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-slate-300 hover:text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <i className="fa-solid fa-download text-[10px] text-slate-400"></i>
              <span>{t('downloadBackup')}</span>
            </button>
            
            <label className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-slate-300 hover:text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
              <i className="fa-solid fa-upload text-[10px] text-slate-400"></i>
              <span>{t('importDataBtn')}</span>
              <input type="file" accept=".json" className="hidden" onChange={importData} />
            </label>
          </div>

          {!showDeleteConfirm ? (
            <div className="text-center pt-0.5">
              <button 
                onClick={() => setShowDeleteConfirm(true)} 
                className="text-[11px] text-rose-400/70 hover:text-rose-300 font-medium transition-colors inline-flex items-center gap-1"
              >
                <i className="fa-solid fa-triangle-exclamation text-[10px]"></i> 
                <span>{lang === 'tr' ? 'Tüm Site Verisini Sıfırla' : 'Erase All Site Data'}</span>
              </button>
            </div>
          ) : (
            <div className="p-2.5 bg-rose-950/40 border border-rose-800/60 rounded-xl space-y-2 animate-fadeIn text-center">
              <p className="text-[11px] text-rose-300 font-medium leading-tight">
                {lang === 'tr' 
                  ? 'Tüm ilerleme ve notlarınız kalıcı olarak silinecek. Emin misiniz?' 
                  : 'All your progress and notes will be permanently deleted. Are you sure?'}
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowDeleteConfirm(false)} 
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold py-1 rounded-lg transition-colors border border-slate-700"
                >
                  {lang === 'tr' ? 'İptal' : 'Cancel'}
                </button>
                <button 
                  onClick={handleDeleteAllData} 
                  className="flex-1 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold py-1 rounded-lg transition-colors shadow-sm"
                >
                  {lang === 'tr' ? 'Evet, Sıfırla' : 'Yes, Erase'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}