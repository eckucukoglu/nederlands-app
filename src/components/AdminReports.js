// src/components/AdminReports.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // auth eklendi
import { collection, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // onAuthStateChanged eklendi

export default function AdminReports() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [reports, setReports] = useState([]);
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true); // Kimlik kontrolü için yeni state
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [bulkCopiedLabel, setBulkCopiedLabel] = useState(null);

  const copyAllIds = async (list, label) => {
    const ids = [...new Set(list.map(item => item.questionId).filter(Boolean))];
    if (ids.length === 0) {
      alert("Kopyalanacak soru ID'si bulunamadı.");
      return;
    }
    
    await copyToClipboard(ids.join('\n'));
    setBulkCopiedLabel(label);
    setTimeout(() => {
      setBulkCopiedLabel(prev => (prev === label ? null : prev));
    }, 2500);
  };

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

  const copyToClipboard = async (text) => {
    if (!text) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(text);
      setTimeout(() => {
        setCopiedId(prev => (prev === text ? null : prev));
      }, 2000);
    } catch (error) {
      console.error("Kopyalama hatası:", error);
    }
  };

  const renderQuestionId = (questionId) => {
    if (!questionId) return null;
    const isCopied = copiedId === questionId;
    return (
      <button
        type="button"
        onClick={() => copyToClipboard(questionId)}
        title={isCopied ? "Kopyalandı!" : "ID'yi panoya kopyalamak için tıklayın"}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono border transition-all cursor-pointer mr-2 select-all ${
          isCopied
            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500/50'
            : 'bg-slate-950 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-500'
        }`}
      >
        <span>{questionId}</span>
        <i className={isCopied ? "fa-solid fa-check text-emerald-400 text-[10px]" : "fa-regular fa-copy text-slate-400 hover:text-slate-200 text-[10px]"}></i>
      </button>
    );
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

  const markFeedbackDone = async (id) => {
    try {
      await updateDoc(doc(db, "feedbacks", id), {
        status: 'done',
        completedAt: new Date().toISOString()
      });
      fetchData();
    } catch (error) {
      console.error("Geri bildirim güncellenirken hata:", error);
      alert("Hata oluştu: " + error.message);
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
  const activeFeedbacks = feedbacks.filter(fb => fb.status !== 'done');
  const doneFeedbacks = feedbacks.filter(fb => fb.status === 'done');

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 pb-20">
      <div className="mt-4 mb-2">
        <h1 className="text-3xl font-extrabold text-white">🛠️ Gelen Raporlar ve Geri Bildirimler</h1>
        <p className="text-sm text-slate-400 mt-1">Kullanıcı bildirimleri ve işaretlenmiş soruların yönetim paneli.</p>
      </div>

      {/* 1. KULLANICI GERİ BİLDİRİMLERİ TABLOSU */}
      <section>
        <h2 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-comment-dots"></i> Kullanıcı Geri Bildirimleri ({activeFeedbacks.length})
        </h2>
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300 min-w-[800px]">
            <thead className="bg-slate-800 text-slate-100">
              <tr>
                <th className="p-4 w-40">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Mesaj</th>
                <th className="p-4 text-right w-44">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {activeFeedbacks.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">Bekleyen geri bildirim yok.</td></tr>}
              {activeFeedbacks.map(fb => (
                <tr key={fb.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(fb.timestamp).toLocaleString('tr-TR')}</td>
                  <td className="p-4 text-brand-300 font-medium truncate max-w-[12rem]" title={fb.userEmail}>{fb.userEmail}</td>
                  <td className="p-4 break-words leading-relaxed text-slate-200">{fb.text}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => markFeedbackDone(fb.id)} 
                        title="Yapıldı / Tamamlandı olarak işaretle"
                        className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                      >
                        <i className="fa-solid fa-check"></i>
                        <span>Yapıldı</span>
                      </button>
                      <button 
                        onClick={() => deleteItem("feedbacks", fb.id)} 
                        title="Geri bildirimi tamamen sil"
                        className="bg-rose-950/40 text-rose-400 border border-rose-900/50 hover:bg-rose-600 hover:text-white hover:border-rose-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                        <span>Sil</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. HATALI SORULAR TABLOSU */}
      <section>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-xl font-bold text-rose-400 flex items-center gap-2">
            <i className="fa-solid fa-flag"></i> Hatalı Bildirilen Sorular ({reports.length})
          </h2>
          {reports.length > 0 && (
            <button
              onClick={() => copyAllIds(reports, 'errors')}
              className="bg-rose-950/60 hover:bg-rose-900 border border-rose-800/80 text-rose-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Tüm hatalı soru ID'lerini panoya kopyala"
            >
              <i className={bulkCopiedLabel === 'errors' ? "fa-solid fa-check text-emerald-400" : "fa-regular fa-copy"}></i>
              <span>{bulkCopiedLabel === 'errors' ? "Kopyalandı!" : `Tüm Hatalı ID'leri Kopyala (${[...new Set(reports.map(r => r.questionId).filter(Boolean))].length})`}</span>
            </button>
          )}
        </div>
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
                    {renderQuestionId(rep.questionId)}
                    <span className="font-medium text-slate-200">{rep.questionNl}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", rep.id)} className="bg-rose-950/40 text-rose-400 border border-rose-900/50 hover:bg-rose-600 hover:text-white hover:border-rose-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap cursor-pointer">
                      Çözüldü / Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. İYİ / KALİTELİ OLARAK İŞARETLENEN SORULAR TABLOSU */}
      <section>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
            <i className="fa-solid fa-thumbs-up"></i> İyi / Kaliteli Olarak İşaretlenen Sorular ({goods.length})
          </h2>
          {goods.length > 0 && (
            <button
              onClick={() => copyAllIds(goods, 'goods')}
              className="bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Tüm kaliteli soru ID'lerini panoya kopyala"
            >
              <i className={bulkCopiedLabel === 'goods' ? "fa-solid fa-check text-emerald-400" : "fa-regular fa-copy"}></i>
              <span>{bulkCopiedLabel === 'goods' ? "Kopyalandı!" : `Tüm İyi ID'leri Kopyala (${[...new Set(goods.map(r => r.questionId).filter(Boolean))].length})`}</span>
            </button>
          )}
        </div>
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
                    {renderQuestionId(g.questionId)}
                    <span className="font-medium text-slate-200">{g.questionNl}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => deleteItem("reported_questions", g.id)} className="bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 px-3 py-1.5 rounded-lg transition-all text-xs font-bold shadow-sm whitespace-nowrap cursor-pointer">
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. YAPILDI / TAMAMLANAN GERİ BİLDİRİMLER (YALNIZCA GÖRÜNTÜLEME) */}
      <section>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <i className="fa-solid fa-circle-check text-emerald-400"></i> Yapıldı Olarak İşaretlenen Geri Bildirimler ({doneFeedbacks.length})
          </h2>
          <span className="text-xs text-slate-500 font-medium italic">
            Yalnızca görüntüleme
          </span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-400 min-w-[700px]">
            <thead className="bg-slate-800/70 text-slate-300">
              <tr>
                <th className="p-4 w-44">Tarih</th>
                <th className="p-4 w-48">Kullanıcı</th>
                <th className="p-4">Mesaj</th>
                <th className="p-4 w-32 text-center">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {doneFeedbacks.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-slate-600 font-medium">
                    Henüz yapıldı olarak işaretlenmiş geri bildirim bulunmuyor.
                  </td>
                </tr>
              )}
              {doneFeedbacks.map(fb => (
                <tr key={fb.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-500 whitespace-nowrap text-xs">
                    <div>{new Date(fb.timestamp).toLocaleString('tr-TR')}</div>
                    {fb.completedAt && (
                      <div className="text-[11px] text-emerald-500/80 mt-0.5">
                        Yapıldı: {new Date(fb.completedAt).toLocaleDateString('tr-TR')}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-slate-300 font-medium truncate max-w-[12rem]" title={fb.userEmail}>
                    {fb.userEmail}
                  </td>
                  <td className="p-4 break-words leading-relaxed text-slate-300">
                    {fb.text}
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 select-none">
                      <i className="fa-solid fa-check text-[10px]"></i> Yapıldı
                    </span>
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