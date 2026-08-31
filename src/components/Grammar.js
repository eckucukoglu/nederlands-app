// src/components/Grammar.js
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Gramer konularını burada tutacağız. Sen resimleri gönderdikçe burayı dolduracağız.
const grammarData = [
  {
    id: "pronouns",
    titleTr: "Kişi Zamirleri (Personal Pronouns)",
    titleEn: "Personal Pronouns",
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          Hollandacada kişi zamirleri cümlenin öznesi konumundadır. Vurgulu (nadruk) ve vurgusuz (zonder nadruk) olmak üzere ikiye ayrılırlar.
        </p>
        <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden">
           {/* Örnek Tablo */}
           <table className="w-full text-sm text-left text-slate-300">
              <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                 <tr>
                    <th className="px-4 py-3">Tekil / Çoğul</th>
                    <th className="px-4 py-3">Vurgulu</th>
                    <th className="px-4 py-3">Vurgusuz</th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-slate-700/50">
                    <td className="px-4 py-3 font-medium text-slate-200">1. Tekil (Ben)</td>
                    <td className="px-4 py-3 text-brand-400 font-bold">ik</td>
                    <td className="px-4 py-3 text-slate-400">'k</td>
                 </tr>
                 <tr className="border-b border-slate-700/50">
                    <td className="px-4 py-3 font-medium text-slate-200">2. Tekil (Sen)</td>
                    <td className="px-4 py-3 text-brand-400 font-bold">jij / u</td>
                    <td className="px-4 py-3 text-slate-400">je</td>
                 </tr>
              </tbody>
           </table>
        </div>
        
        {/* Önemli İstisna / İpucu Kutusu */}
        <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded-xl mt-4">
           <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
             <i className="fa-solid fa-triangle-exclamation"></i> Let op! (Dikkat)
           </h4>
           <p className="text-amber-200/80 text-xs leading-relaxed">
             "Jij" kelimesi fiilden sonra geldiğinde fiildeki son "t" harfi düşer. Örnek: "Werk jij?" (Werk<span className="line-through text-rose-400">t</span> jij?)
           </p>
        </div>
      </div>
    )
  },
  {
    id: "word_order",
    titleTr: "Cümle Dizilimi (Word Order)",
    titleEn: "Word Order in Main Clauses",
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          Gramer kuralları buraya gelecek... Resimleri bekliyorum!
        </p>
      </div>
    )
  }
];

export default function Grammar() {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTopic, setActiveTopic] = useState(grammarData[0].id);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return grammarData;
    const lower = searchTerm.toLowerCase();
    return grammarData.filter(topic => 
      topic.titleTr.toLowerCase().includes(lower) || 
      topic.titleEn.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const activeContent = grammarData.find(t => t.id === activeTopic);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 animate-fadeIn pb-12">
      
      {/* SOL MENÜ (Konu Listesi) */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        {/* Arama */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-md relative">
          <h2 className="text-lg font-extrabold text-indigo-400 mb-4 flex items-center gap-2">
             <i className="fa-solid fa-spell-check"></i> 
             {isTr ? 'Gramer Referansı' : 'Grammar Reference'}
          </h2>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isTr ? 'Konu ara...' : 'Search topics...'}
              className="w-full bg-slate-900 border border-slate-600 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 shadow-inner"
            />
          </div>
        </div>

        {/* Konu Listesi */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-md overflow-hidden flex flex-col">
           <div className="overflow-y-auto max-h-[400px] md:max-h-[600px] scrollbar-thin scrollbar-thumb-slate-600">
             {filteredTopics.length > 0 ? (
               <div className="flex flex-col">
                 {filteredTopics.map((topic) => (
                   <button
                     key={topic.id}
                     onClick={() => setActiveTopic(topic.id)}
                     className={`text-left px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${activeTopic === topic.id ? 'bg-slate-700/50 text-indigo-300 border-indigo-500' : 'text-slate-400 border-transparent hover:bg-slate-700/30 hover:text-slate-200'}`}
                   >
                     {isTr ? topic.titleTr : topic.titleEn}
                   </button>
                 ))}
               </div>
             ) : (
               <div className="p-6 text-center text-slate-500 text-sm">
                 {isTr ? 'Sonuç bulunamadı.' : 'No results found.'}
               </div>
             )}
           </div>
        </div>
      </div>

      {/* SAĞ İÇERİK (Detaylar) */}
      <div className="w-full md:w-2/3 lg:w-3/4">
        {activeContent ? (
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <i className="fa-solid fa-pen-ruler text-9xl text-indigo-400"></i>
             </div>
             
             <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 border-b border-slate-700 pb-4 relative z-10">
               {isTr ? activeContent.titleTr : activeContent.titleEn}
             </h3>
             
             <div className="relative z-10">
                {activeContent.content}
             </div>
          </div>
        ) : (
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center flex flex-col items-center justify-center shadow-xl h-full min-h-[300px]">
             <i className="fa-solid fa-arrow-pointer text-4xl text-slate-600 mb-4 animate-bounce"></i>
             <p className="text-slate-400 font-medium">
               {isTr ? 'Lütfen sol taraftan bir gramer konusu seçin.' : 'Please select a grammar topic from the left.'}
             </p>
          </div>
        )}
      </div>

    </div>
  );
}