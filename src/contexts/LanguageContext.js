// src/contexts/LanguageContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const uiDictionary = {
  tr: {
    searchPlaceholder: "Sözlükte ara...",
    searchMobilePlaceholder: "Kelime yaz...",
    searchTitle: "Sözlükte Ara",
    noResults: "Sonuç bulunamadı.",
    markOnly: "Sadece kelimeyi işaretle",
    notFound: "Sözlükte bulunamadı",
    changeChapter: "Bölüm Değiştir",
    aboutGuide: "Hakkında ve Kullanım Kılavuzu",
    syncingData: "Verilerin senkronize ediliyor...",
    pleaseWait: "Lütfen bekleyin.",
    accountSync: "Hesap ve Senkronizasyon",
    flashcards: "Flashcards",
    
    // AuthModal Çevirileri
    authSuccess: "✅ Giriş linki mail adresine gönderildi. Lütfen gelen kutunu kontrol et.",
    authError: "❌ Bir hata oluştu: ",
    importSuccess: "✅ Veriler başarıyla içe aktarıldı! Sayfa yenileniyor...",
    importError: "❌ Geçersiz veya bozuk yedek dosyası!",
    syncProgress: "İlerlemeni Senkronize Et",
    syncDesc: "Farklı cihazlardan (telefon, tablet, ofis bilgisayarı) kaldığın yerden devam edebilmek ve istatistiklerini güvenle bulutta saklamak için giriş yap. Şifreye gerek yok!",
    loggedIn: "Giriş Yapıldı",
    logout: "Çıkış Yap",
    emailPlaceholder: "E-posta adresin...",
    connecting: "Bağlanıyor...",
    sendLoginLink: "Giriş Linki Gönder",
    manualManageInfo: "Giriş yapmak istemiyor musun? Verilerini manuel yönet:",
    downloadBackup: "İndir (Yedekle)",
    importDataBtn: "İçe Aktar",
    language: "Dil"
  },
  en: {
    searchPlaceholder: "Search dictionary...",
    searchMobilePlaceholder: "Type a word...",
    searchTitle: "Search Dictionary",
    noResults: "No results found.",
    markOnly: "Just mark the word",
    notFound: "Not found in dictionary",
    changeChapter: "Change Chapter",
    aboutGuide: "About & User Guide",
    syncingData: "Synchronizing your data...",
    pleaseWait: "Please wait.",
    accountSync: "Account & Sync",
    flashcards: "Flashcards",

    // AuthModal Çevirileri
    authSuccess: "✅ Login link sent to your email. Please check your inbox.",
    authError: "❌ An error occurred: ",
    importSuccess: "✅ Data imported successfully! Reloading page...",
    importError: "❌ Invalid or corrupted backup file!",
    syncProgress: "Synchronize Your Progress",
    syncDesc: "Log in to safely store your statistics in the cloud and pick up where you left off on different devices (phone, tablet, office PC). No password required!",
    loggedIn: "Logged In",
    logout: "Log Out",
    emailPlaceholder: "Your email address...",
    connecting: "Connecting...",
    sendLoginLink: "Send Login Link",
    manualManageInfo: "Don't want to log in? Manage your data manually:",
    downloadBackup: "Download (Backup)",
    importDataBtn: "Import",
    language: "Language"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('appLanguage') || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', lang);
  }, [lang]);

  const t = (key) => uiDictionary[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);