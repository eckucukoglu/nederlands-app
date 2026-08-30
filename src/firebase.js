// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

let isPulling = false; // Veri indirilirken kazara geri yüklemeyi durdurmak için
let syncTimeout = null;

export const syncToCloud = async () => {
  if (!auth.currentUser || isPulling) return;
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
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

const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  originalSetItem.apply(this, arguments);
  if (!key.startsWith('firebase') && !isPulling) {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(syncToCloud, 2000);
  }
};

// YENİ: Sayfa yenilendiğinde buluttaki en taze veriyi indiren fonksiyon
export const pullFromCloud = async (uid) => {
  isPulling = true;
  try {
    const userDocRef = doc(db, "users", uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists() && docSnap.data().localData) {
      const cloudData = docSnap.data().localData;
      Object.keys(cloudData).forEach(key => {
        originalSetItem.call(localStorage, key, cloudData[key]);
      });
    }
  } catch (err) {
    console.error("Pull error:", err);
  }
  isPulling = false;
};

export const handleUserSyncOnLogin = async (user) => {
  isPulling = true;
  const userDocRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userDocRef);

  if (docSnap.exists() && docSnap.data().localData) {
    const cloudData = docSnap.data().localData;
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).startsWith('firebase')) keysToRemove.push(localStorage.key(i));
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    Object.keys(cloudData).forEach(key => {
      originalSetItem.call(localStorage, key, cloudData[key]);
    });
    isPulling = false;
    return "restored";
  } else {
    isPulling = false;
    await syncToCloud();
    return "uploaded";
  }
};

export { isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged };