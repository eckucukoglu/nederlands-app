// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxv7FLtaydQFQAQkAuvGt1zjZUp5mckS0",
  authDomain: "nederlands-app.firebaseapp.com",
  projectId: "nederlands-app",
  storageBucket: "nederlands-app.firebasestorage.app",
  messagingSenderId: "875273325126",
  appId: "1:875273325126:web:c0c1bee5264c9853191847",
  measurementId: "G-2264HLRW4G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// --------------------------------------------------------
// OTOMATİK BULUT SENKRONİZASYON MOTORU (Local-First Sync)
// --------------------------------------------------------
let syncTimeout = null;

const syncToCloud = async () => {
  if (!auth.currentUser) return; // Giriş yapılmamışsa buluta gitme, sadece lokalde kal
  
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    // Sadece uygulamamızın verilerini al (Firebase'in kendi tokenlarını hariç tut)
    if (!key.startsWith('firebase')) {
      allData[key] = localStorage.getItem(key);
    }
  }

  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), { localData: allData }, { merge: true });
  } catch (err) {
    console.error("Cloud Sync Error:", err);
  }
};

// LocalStorage'a yazılan her şeyi (Favori, Tik, Sözlük) yakalayıp 2 saniye gecikmeyle buluta yollar
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  originalSetItem.apply(this, arguments);
  if (!key.startsWith('firebase')) {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(syncToCloud, 2000); 
  }
};

// --------------------------------------------------------
// GİRİŞ YAPILDIĞINDAKİ BİRLEŞTİRME (MERGE) MANTIĞI
// --------------------------------------------------------
export const handleUserSyncOnLogin = async (user) => {
  const userDocRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userDocRef);

  if (docSnap.exists() && docSnap.data().localData) {
    // ESKİ KULLANICI: Lokal verileri SİL, buluttakileri İNDİR
    const cloudData = docSnap.data().localData;
    
    // Firebase auth verilerini silmemek için temizlik
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).startsWith('firebase')) keysToRemove.push(localStorage.key(i));
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    // Buluttan gelenleri yaz
    Object.keys(cloudData).forEach(key => {
      originalSetItem.call(localStorage, key, cloudData[key]);
    });
    
    return "restored";
  } else {
    // YENİ KULLANICI: Mevcut lokal verileri buluta YÜKLE
    await syncToCloud();
    return "uploaded";
  }
};

export { isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged };