// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { migrateLocalStorageSectionData } from "./utils/sectionMigration";
import { mergeCloudAndLocalData } from "./utils/syncMerger";
import { APP_VERSION } from "./version";

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

let isPulling = false; // Veri indirilirken kazara döngüye girmeyi engellemek için
let syncTimeout = null;

export const originalSetItem = typeof window !== 'undefined' ? localStorage.setItem : () => {};

export const syncToCloud = async (immediate = false) => {
  if (!auth.currentUser || isPulling) return { success: false, reason: 'skipped' };
  
  if (syncTimeout) {
    clearTimeout(syncTimeout);
    syncTimeout = null;
  }

  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || key.startsWith('firebase') || key === 'emailForSignIn') continue;
    const val = localStorage.getItem(key);
    if (val !== null && val !== undefined) {
      allData[key] = val;
    }
  }

  try {
    const now = new Date().toISOString();
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      localData: allData,
      lastSyncedAt: now,
      userEmail: auth.currentUser.email || null,
      appVersion: APP_VERSION,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null
    }, { merge: true });

    originalSetItem.call(localStorage, 'lastCloudSyncTimestamp', now);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cloudSyncStateChanged', {
        detail: { state: 'synced', lastSyncedAt: now }
      }));
    }
    return { success: true, timestamp: now };
  } catch (err) {
    console.error("Cloud Sync Error:", err);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cloudSyncStateChanged', {
        detail: { state: 'error', error: err.message }
      }));
    }
    return { success: false, error: err };
  }
};

// LocalStorage monkey-patch: yazılan her ilerlemeyi debounced olarak buluta iletir
if (typeof window !== 'undefined') {
  localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (key && !key.startsWith('firebase') && key !== 'emailForSignIn' && !isPulling) {
      clearTimeout(syncTimeout);
      syncTimeout = setTimeout(() => syncToCloud(false), 2000);
    }
  };

  // Sekme arka plana geçtiğinde veya kapandığında bekleyen senkronizasyonu hemen tamamla
  window.addEventListener('beforeunload', () => {
    if (syncTimeout) {
      clearTimeout(syncTimeout);
      syncToCloud(true);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && syncTimeout) {
      clearTimeout(syncTimeout);
      syncToCloud(true);
    } else if (document.visibilityState === 'visible' && auth.currentUser && !isPulling) {
      // Telefonda veya başka cihazda geri dönüldüğünde en son bulut verisini sessizce çek ve birleştir
      pullFromCloud(auth.currentUser.uid);
    }
  });

  // Pencere odaklandığında (mobil uygulama veya tarayıcı sekmesi aktifleştiğinde)
  window.addEventListener('focus', () => {
    if (auth.currentUser && !isPulling) {
      pullFromCloud(auth.currentUser.uid);
    }
  });
}

// Buluttaki veriyi çekip yerel veriyle akıllıca birleştiren (smart bidirectional merge) fonksiyon
export const pullFromCloud = async (uid) => {
  const targetUid = uid || auth.currentUser?.uid;
  if (!targetUid) return { success: false, reason: 'no_uid' };

  isPulling = true;
  try {
    const userDocRef = doc(db, "users", targetUid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists() && docSnap.data().localData) {
      const cloudData = docSnap.data().localData;
      const lastSyncedAt = docSnap.data().lastSyncedAt || new Date().toISOString();

      // Mevcut yerel verileri topla
      const localData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !key.startsWith('firebase') && key !== 'emailForSignIn') {
          localData[key] = localStorage.getItem(key);
        }
      }

      // AKILLI BİRLEŞTİRME: Asla sıfırlama, iki taraftaki ilerlemeyi koru
      const merged = mergeCloudAndLocalData(cloudData, localData);

      // Birleştirilen veriyi localStorage'a yaz
      Object.keys(merged).forEach(key => {
        originalSetItem.call(localStorage, key, merged[key]);
      });

      originalSetItem.call(localStorage, 'lastCloudSyncTimestamp', lastSyncedAt);
      migrateLocalStorageSectionData();

      // UI ve React bileşenlerini uyandır
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('progressUpdated'));
        window.dispatchEvent(new Event('wordStatusUpdated'));
        window.dispatchEvent(new Event('cloudDataRestored'));
        window.dispatchEvent(new CustomEvent('cloudSyncStateChanged', {
          detail: { state: 'synced', lastSyncedAt }
        }));
      }

      // Eğer cihazda bulutta olmayan taze yerel ilerleme vardıysa bulutu da güncelle
      isPulling = false;
      syncToCloud(false);
      return { success: true, count: Object.keys(merged).length };
    } else {
      // Bulutta kayıt yoksa, cihazdaki mevcut yerel veriyi buluta ilk yedek olarak gönder
      isPulling = false;
      await syncToCloud(true);
      return { success: true, uploaded: true };
    }
  } catch (err) {
    console.error("Pull error:", err);
    isPulling = false;
    return { success: false, error: err };
  }
};

export const handleUserSyncOnLogin = async (user) => {
  if (!user) return "no_user";
  const res = await pullFromCloud(user.uid);
  return res.success ? "synced" : "error";
};

// Buluttaki kullanıcı verilerini tamamen silen fonksiyon
export const deleteCloudData = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    await deleteDoc(userDocRef);
  } catch (err) {
    console.error("Cloud delete error:", err);
  }
};

export { isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged };

// Hatalı Soruyu Bildirme veya Geri Alma
export const toggleReportQuestion = async (question, user, isReporting) => {
  if (!user) throw new Error("Kullanıcı bulunamadı"); 
  
  const docId = `${question.id}_${user.uid}`;
  const docRef = doc(db, "reported_questions", docId);
  
  try {
    if (isReporting) {
      await setDoc(docRef, {
        questionId: question.id || "ID Yok",
        questionNl: question.questionNl || "Soru metni yok",
        tags: question.tags || [],
        userId: user.uid,
        userEmail: user.email || "Email belirtilmemiş",
        reportType: "error",
        timestamp: new Date().toISOString()
      });
    } else {
      await deleteDoc(docRef);
    }
  } catch (err) {
    console.error("Soru bildirim hatası (Firebase):", err);
    throw err;
  }
};

// Genel Text Feedback Gönderme
export const submitFeedback = async (text, user) => {
  const collRef = collection(db, "feedbacks");
  try {
    await addDoc(collRef, {
      text: text,
      userId: user ? user.uid : "anonymous",
      userEmail: user ? user.email : "Ziyaretçi",
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null
    });
  } catch (err) {
    console.error("Feedback gönderim hatası:", err);
    throw err;
  }
};
