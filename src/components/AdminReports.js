// src/components/AdminReports.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function AdminReports() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Feedbackleri Çek
      const fbSnapshot = await getDocs(collection(db, "feedbacks"));
      const fbData = fbSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Tarihe göre en yeni en üstte
      setFeedbacks(fbData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));

      // Hatalı Soruları Çek
      const repSnapshot = await getDocs(collection(db, "reported_questions"));
      const repData = repSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReports(repData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
      
	} catch (error) {
      console.error("Veriler çekilirken hata:", error);
      if (error.message.includes('permission')) {
        alert("Yetki Hatası: Raporları görebilmek için rapor panelini açtığınız bu tarayıcıda da siteye giriş (Login) yapmış olmanız gerekmektedir.");
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

  if (loading) return <div className="text-white text-center mt-20">Veriler yükleniyor...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-bold text-white mb-8">🛠️ Gelen Raporlar ve Geri Bildirimler</h1>

      {/* HATALI SORULAR TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-flag"></i> Hatalı Bildirilen Sorular ({reports.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4">Tarih</th>
                <th className="p-4">Kullanıcı</th>
                <th className="p-4">Soru ID & Metni</th>
                <th className="p-4 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {reports.length === 0 && <tr><td colSpan="4" className="p-4 text-center">Rapor yok.</td></tr>}
              {reports.map(rep => (
                <tr key={rep.id} className="hover:bg-slate-800/50">
                  <td className="p-4">{new Date(rep.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-brand-300">{rep.userEmail}</td>
                  <td className="p-4">
                    <span className="bg-slate-800 px-2 py-1 rounded text-xs mr-2">{rep.questionId}</span>
                    {rep.questionNl}
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", rep.id)} className="text-rose-400 hover:text-rose-300">
                      Çözüldü / Sil
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
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4">Tarih</th>
                <th className="p-4">Kullanıcı</th>
                <th className="p-4">Mesaj</th>
                <th className="p-4 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {feedbacks.length === 0 && <tr><td colSpan="4" className="p-4 text-center">Mesaj yok.</td></tr>}
              {feedbacks.map(fb => (
                <tr key={fb.id} className="hover:bg-slate-800/50">
                  <td className="p-4 whitespace-nowrap">{new Date(fb.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-brand-300 whitespace-nowrap">{fb.userEmail}</td>
                  <td className="p-4 max-w-md break-words">{fb.text}</td>
                  <td className="p-4 text-right whitespace-nowrap">
                    <button onClick={() => deleteItem("feedbacks", fb.id)} className="text-rose-400 hover:text-rose-300">
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