// src/components/AdminReports.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // auth eklendi
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // onAuthStateChanged eklendi

export default function AdminReports() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [reports, setReports] = useState([]);
  const [duplicates, setDuplicates] = useState([]);
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true); // Kimlik kontrolü için yeni state
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Sayfa açıldığında önce Firebase'den kullanıcının giriş yapıp yapmadığını bekle
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
      
      // Sadece giriş yapmış biri varsa verileri çekmeye başla
      if (currentUser) {
        fetchData();
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      // Feedbackleri Çek
      const fbSnapshot = await getDocs(collection(db, "feedbacks"));
      const fbData = fbSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(fbData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));

      // Raporlanan ve İşaretlenen Soruları Çek
      const repSnapshot = await getDocs(collection(db, "reported_questions"));
      const repData = repSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const sortedReps = repData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setReports(sortedReps.filter(r => !r.reportType || r.reportType === 'error'));
      setDuplicates(sortedReps.filter(r => r.reportType === 'duplicate'));
      setGoods(sortedReps.filter(r => r.reportType === 'good'));
      
    } catch (error) {
      console.error("Veriler çekilirken hata:", error);
      if (error.message && error.message.includes('permission')) {
        setErrorMsg("Yetki Hatası: Raporları görebilmek için giriş yapmalısınız.");
      } else {
        setErrorMsg("Bir hata oluştu: " + error.message);
      }
    }
    setLoading(false);
  };

  const deleteItem = async (collectionName, id) => {
    if(!window.confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
    try {
      await deleteDoc(doc(db, collectionName, id));
      fetchData(); // Silince listeyi yenile
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  // 1. Durum: Henüz kimlik kontrol ediliyor
  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400">
        <i className="fa-solid fa-spinner fa-spin text-4xl mb-4 text-brand-400"></i>
        <p>Kimlik doğrulanıyor...</p>
      </div>
    );
  }

  // 2. Durum: Kullanıcı giriş yapmamış, sayfayı GİZLE!
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-slate-900 border border-rose-900/50 rounded-3xl text-center shadow-2xl">
           <div className="w-20 h-20 bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-800/50">
             <i className="fa-solid fa-lock text-4xl text-rose-500"></i>
           </div>
           <h2 className="text-2xl font-extrabold text-white mb-2">Erişim Engellendi</h2>
           <p className="text-slate-400 mb-8 text-sm leading-relaxed">
             Rapor paneline erişebilmek için öncelikle ana sayfa üzerinden sisteme giriş yapmış olmanız gerekmektedir.
           </p>
           <button onClick={() => window.location.href = '/'} className="w-full bg-brand-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/20">
             Ana Sayfaya Dön
           </button>
        </div>
      </div>
    );
  }

  // 3. Durum: Veriler yükleniyor
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400">
        <i className="fa-solid fa-cloud-arrow-down text-4xl animate-bounce mb-4 text-brand-400"></i>
        <p>Raporlar yükleniyor...</p>
      </div>
    );
  }

  // 4. Durum: Yetki veya bağlantı hatası alındı
  if (errorMsg) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-rose-400 text-center font-bold bg-rose-950/30 p-6 rounded-xl border border-rose-900/50">
          <i className="fa-solid fa-triangle-exclamation text-3xl mb-3"></i>
          <p>{errorMsg}</p>
        </div>
      </div>
    );
  }

  // 5. Durum: Başarılı, tabloları göster
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 pb-20">
      <h1 className="text-3xl font-bold text-white mb-8 mt-4">🛠️ Gelen Raporlar ve Geri Bildirimler</h1>

      {/* HATALI SORULAR TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-flag"></i> Hatalı Bildirilen Sorular ({reports.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300 min-w-[800px]">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4 w-40">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Soru ID & Metni</th>
                <th className="p-4 text-right w-32">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {reports.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">Rapor yok.</td></tr>}
              {reports.map(rep => (
                <tr key={rep.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(rep.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-brand-300 font-medium truncate max-w-[12rem]" title={rep.userEmail}>{rep.userEmail}</td>
                  <td className="p-4">
                    <span className="bg-slate-950 px-2 py-1 rounded text-xs font-mono text-slate-400 mr-2 border border-slate-800">{rep.questionId}</span>
                    <span className="font-medium text-slate-200">{rep.questionNl}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", rep.id)} className="bg-rose-950/40 text-rose-400 border border-rose-900/50 hover:bg-rose-600 hover:text-white hover:border-rose-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap">
                      Çözüldü / Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* KOPYA / MÜKERRER SORULAR TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-clone"></i> Mükerrer / Kopya Bildirilen Sorular ({duplicates.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300 min-w-[800px]">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4 w-40">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Soru ID & Metni</th>
                <th className="p-4 text-right w-32">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {duplicates.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">Mükerrer soru bildirimi yok.</td></tr>}
              {duplicates.map(dup => (
                <tr key={dup.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(dup.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-sky-300 font-medium truncate max-w-[12rem]" title={dup.userEmail}>{dup.userEmail}</td>
                  <td className="p-4">
                    <span className="bg-slate-950 px-2 py-1 rounded text-xs font-mono text-slate-400 mr-2 border border-slate-800">{dup.questionId}</span>
                    <span className="font-medium text-slate-200">{dup.questionNl}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", dup.id)} className="bg-sky-950/40 text-sky-400 border border-sky-900/50 hover:bg-sky-600 hover:text-white hover:border-sky-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap">
                      İncelendi / Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* İYİ / BEĞENİLEN SORULAR TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-thumbs-up"></i> İyi / Kaliteli Olarak İşaretlenen Sorular ({goods.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300 min-w-[800px]">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4 w-40">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Soru ID & Metni</th>
                <th className="p-4 text-right w-32">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {goods.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">Beğenilen soru yok.</td></tr>}
              {goods.map(g => (
                <tr key={g.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(g.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-emerald-300 font-medium truncate max-w-[12rem]" title={g.userEmail}>{g.userEmail}</td>
                  <td className="p-4">
                    <span className="bg-slate-950 px-2 py-1 rounded text-xs font-mono text-slate-400 mr-2 border border-slate-800">{g.questionId}</span>
                    <span className="font-medium text-slate-200">{g.questionNl}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", g.id)} className="bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap">
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FEEDBACK TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-comment-dots"></i> Kullanıcı Geri Bildirimleri ({feedbacks.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300 min-w-[800px]">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4 w-40">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Mesaj</th>
                <th className="p-4 text-right w-32">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {feedbacks.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">Mesaj yok.</td></tr>}
              {feedbacks.map(fb => (
                <tr key={fb.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(fb.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-brand-300 font-medium truncate max-w-[12rem]" title={fb.userEmail}>{fb.userEmail}</td>
                  <td className="p-4 break-words leading-relaxed text-slate-200">{fb.text}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("feedbacks", fb.id)} className="bg-slate-800 text-slate-300 border border-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap">
                      Okundu / Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}