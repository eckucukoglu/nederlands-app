// src/components/AuthModal.js
import React, { useState } from 'react';
import { auth, sendSignInLinkToEmail } from '../firebase';

export default function AuthModal({ isOpen, onClose, user }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
      setMessage("✅ Giriş linki mail adresine gönderildi. Lütfen gelen kutunu kontrol et.");
    } catch (error) {
      setMessage("❌ Bir hata oluştu: " + error.message);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    auth.signOut();
    window.location.reload();
  };

  // MANUEL EXPORT (Dışa Aktar)
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

  // MANUEL IMPORT (İçe Aktar) Güvenlik Korumalı
  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (typeof data !== 'object' || data === null) throw new Error("Geçersiz format");
        
        // Sadece beklenen key'leri kabul ederek güvenlik sağla
        Object.keys(data).forEach(key => {
          if(typeof data[key] === 'string') {
             localStorage.setItem(key, data[key]);
          }
        });
        
        alert("✅ Veriler başarıyla içe aktarıldı! Sayfa yenileniyor...");
        window.location.reload();
      } catch (err) {
        alert("❌ Geçersiz veya bozuk yedek dosyası!");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl max-w-md w-full m-4 relative" onClick={e => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 transition-colors">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div className="text-center mb-6">
          <div className="bg-brand-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-500/20">
            <i className="fa-solid fa-cloud-arrow-up text-3xl text-brand-400"></i>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100 mb-2">İlerlemeni Senkronize Et</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Farklı cihazlardan (telefon, tablet, ofis bilgisayarı) kaldığın yerden devam edebilmek ve istatistiklerini güvenle bulutta saklamak için giriş yap. Şifreye gerek yok!
          </p>
        </div>

        {user ? (
          <div className="text-center space-y-4">
            <div className="bg-emerald-900/30 border border-emerald-800/50 p-4 rounded-2xl">
              <p className="text-sm font-bold text-emerald-400 mb-1">Giriş Yapıldı</p>
              <p className="text-xs text-slate-300">{user.email}</p>
            </div>
            <button onClick={handleLogout} className="w-full bg-slate-800 hover:bg-rose-900/40 border border-slate-700 hover:border-rose-700/50 text-slate-300 hover:text-rose-300 font-bold py-3 rounded-xl transition-all">
              Çıkış Yap
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-posta adresin..." 
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button disabled={loading} type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all disabled:opacity-50">
              {loading ? "Bağlanıyor..." : "Giriş Linki Gönder"}
            </button>
            {message && <p className={`text-xs text-center font-medium ${message.includes('❌') ? 'text-rose-400' : 'text-emerald-400'}`}>{message}</p>}
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
          <p className="text-xs text-center text-slate-500 font-medium">Giriş yapmak istemiyor musun? Verilerini manuel yönet:</p>
          <div className="flex gap-2">
            <button onClick={exportData} className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
              <i className="fa-solid fa-download"></i> İndir (Yedekle)
            </button>
            
            <label className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <i className="fa-solid fa-upload"></i> İçe Aktar
              <input type="file" accept=".json" className="hidden" onChange={importData} />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}