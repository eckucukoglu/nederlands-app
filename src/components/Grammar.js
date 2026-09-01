// src/components/Grammar.js
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import QuizModule from './QuizModule';

const grammarData = [
  {
    id: "verbs_present",
    tags: ["verbs_present"],
    titleTr: "Zamirler ve Şimdiki Zaman (Pronouns & Present Tense)",
    titleEn: "Personal Pronouns & Present Tense",
    content: (isTr) => (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed">
          {isTr 
            ? "Hollandacada düzenli fiillerin (regelmatige werkwoorden) şimdiki zaman çekimini yapmak için önce fiilin kökünü (stam) bulmanız gerekir. Fiil kökü, mastar (infinitief) halinden '-en' ekinin atılmasıyla bulunur." 
            : "In Dutch, to conjugate regular verbs (regelmatige werkwoorden) in the present tense, you first need to find the stem (stam). The stem of a verb is the infinitive minus -en."}
        </p>
        
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 font-mono text-sm text-brand-300 text-center shadow-inner">
           infinitief = luisteren &nbsp; ➡️ &nbsp; stam = luister
        </div>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm">
           <table className="w-full text-sm text-left text-slate-300">
              <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                 <tr>
                    <th className="px-4 py-3">{isTr ? "Kişi (Singularis/Pluralis)" : "Person (Singularis/Pluralis)"}</th>
                    <th className="px-4 py-3">{isTr ? "Kural" : "Rule"}</th>
                    <th className="px-4 py-3 border-l border-slate-700">luisteren</th>
                    <th className="px-4 py-3">komen</th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-medium text-slate-200">1. ik</td>
                    <td className="px-4 py-3 text-brand-400 font-bold">de stam</td>
                    <td className="px-4 py-3 border-l border-slate-700">luister</td>
                    <td className="px-4 py-3">kom</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-medium text-slate-200">2. jij* / je / u</td>
                    <td className="px-4 py-3 text-brand-400 font-bold">stam + t</td>
                    <td className="px-4 py-3 border-l border-slate-700">luister<span className="text-rose-400">t</span></td>
                    <td className="px-4 py-3">kom<span className="text-rose-400">t</span></td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-medium text-slate-200">3. hij / zij* / ze / het</td>
                    <td className="px-4 py-3 text-brand-400 font-bold">stam + t</td>
                    <td className="px-4 py-3 border-l border-slate-700">luister<span className="text-rose-400">t</span></td>
                    <td className="px-4 py-3">kom<span className="text-rose-400">t</span></td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-medium text-slate-200">1. wij* / we</td>
                    <td className="px-4 py-3 text-sky-400 font-bold">infinitief</td>
                    <td className="px-4 py-3 border-l border-slate-700">luisteren</td>
                    <td className="px-4 py-3">komen</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-medium text-slate-200">2. jullie</td>
                    <td className="px-4 py-3 text-sky-400 font-bold">infinitief</td>
                    <td className="px-4 py-3 border-l border-slate-700">luisteren</td>
                    <td className="px-4 py-3">komen</td>
                 </tr>
                 <tr className="hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-medium text-slate-200">3. zij* / ze</td>
                    <td className="px-4 py-3 text-sky-400 font-bold">infinitief</td>
                    <td className="px-4 py-3 border-l border-slate-700">luisteren</td>
                    <td className="px-4 py-3">komen</td>
                 </tr>
              </tbody>
           </table>
        </div>

        <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded-xl shadow-inner">
           <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
             <i className="fa-solid fa-triangle-exclamation"></i> Let op!
           </h4>
           <ul className="text-amber-200/90 text-sm leading-relaxed space-y-2 list-disc list-inside ml-2">
             <li>{isTr ? "Eğer fiil kökü zaten '-t' harfi ile bitiyorsa, fiile fazladan bir '-t' daha eklenmez." : "If the stem ends in a -t, the verb does not get an extra -t."}</li>
             <li>{isTr ? "Tabloda yıldız (*) ile işaretlenen 'jij', 'zij' ve 'wij' zamirleri, vurgulu (accent) formlardır." : "Jij, zij (singular and plural) and wij are the forms of the personal pronoun with accent."}</li>
             <li>{isTr ? "Bu formları (jij, zij, wij), cümlede zıtlık yaratmak veya kişiyi özellikle vurgulamak istediğinizde kullanırsınız." : "These forms are used to put emphasis on the personal pronoun."}</li>
             <li className="italic text-amber-300">Voorbeeld: Ik kom uit Nederland, <u>jij</u> komt uit Indonesië.</li>
           </ul>
        </div>

        <h4 className="font-bold text-lg text-slate-200 mt-8 mb-4 border-b border-slate-700 pb-2">
          {isTr ? "En Sık Kullanılan Düzensiz Fiiller (zijn & hebben)" : "Most Common Irregular Verbs (zijn & hebben)"}
        </h4>
        <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm">
           <table className="w-full text-sm text-left text-slate-300">
              <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                 <tr>
                    <th className="px-4 py-3">{isTr ? "Kişi" : "Person"}</th>
                    <th className="px-4 py-3 text-sky-400 border-l border-slate-700">zijn (olmak / to be)</th>
                    <th className="px-4 py-3 text-rose-400 border-l border-slate-700">hebben (sahip olmak / to have)</th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-slate-700/50">
                    <td className="px-4 py-3 font-medium text-slate-200">ik</td>
                    <td className="px-4 py-3 border-l border-slate-700">ben</td>
                    <td className="px-4 py-3 border-l border-slate-700">heb</td>
                 </tr>
                 <tr className="border-b border-slate-700/50">
                    <td className="px-4 py-3 font-medium text-slate-200">jij / je / u</td>
                    <td className="px-4 py-3 border-l border-slate-700">bent</td>
                    <td className="px-4 py-3 border-l border-slate-700">hebt (u: hebt / heeft**)</td>
                 </tr>
                 <tr className="border-b border-slate-700/50">
                    <td className="px-4 py-3 font-medium text-slate-200">hij / zij / ze / het</td>
                    <td className="px-4 py-3 border-l border-slate-700">is</td>
                    <td className="px-4 py-3 border-l border-slate-700">heeft</td>
                 </tr>
                 <tr className="bg-slate-800/20">
                    <td className="px-4 py-3 font-medium text-slate-200">wij / jullie / zij (pluralis)</td>
                    <td className="px-4 py-3 border-l border-slate-700">zijn</td>
                    <td className="px-4 py-3 border-l border-slate-700">hebben</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>
    )
  },
  {
    id: "word_order",
    tags: ["word_order", "inversion", "questions"],
    titleTr: "Cümle Dizilimi ve Sorular (Word Order & Questions)",
    titleEn: "Word Order & Questions",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Hoofdzin */}
        <div>
          <h4 className="font-bold text-lg text-brand-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-align-left"></i> {isTr ? "1. Düz Cümle (Hoofdzin)" : "1. Main Clause (Hoofdzin)"}
          </h4>
          <p className="text-slate-300 text-sm mb-3">
             {isTr ? "Standart bir Hollandaca cümlesinde dizilim: Özne (Subject) + Çekimli Fiil (Persoonsvorm) + Kalanlar (Rest: Zaman/Yer) şeklindedir." : "The standard Dutch word order is: Subject + Persoonsvorm (verb) + Rest (time + place)."}
          </p>
          <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm">
             <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                   <tr>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2 text-brand-400 border-l border-slate-700">Persoonsvorm</th>
                      <th className="px-4 py-2 border-l border-slate-700">Rest (tijd + plaats)</th>
                   </tr>
                </thead>
                <tbody>
                   <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-2 font-bold text-white">Ik</td>
                      <td className="px-4 py-2 text-brand-300 border-l border-slate-700">kom</td>
                      <td className="px-4 py-2 border-l border-slate-700">uit Engeland.</td>
                   </tr>
                   <tr>
                      <td className="px-4 py-2 font-bold text-white">Mijn ouders</td>
                      <td className="px-4 py-2 text-brand-300 border-l border-slate-700">zijn</td>
                      <td className="px-4 py-2 border-l border-slate-700">op dit moment in Indonesië.</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>

        {/* Inversie */}
        <div className="mt-8">
          <h4 className="font-bold text-lg text-purple-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrows-turn-to-dots"></i> {isTr ? "2. Devrik Cümle (Inversie)" : "2. Inversion (Inversie)"}
          </h4>
          <p className="text-slate-300 text-sm mb-3">
             {isTr 
               ? "Cümleye özne DIŞINDA başka bir öğeyle (zaman, yer vb.) başlarsanız, fiil ile özne yer değiştirir. (Fiil daima 2. sıradadır!)" 
               : "If you start a sentence with an element other than the subject, the verb and subject swap places. (Verb is always in the 2nd position!)"}
          </p>
          <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4">
             <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                   <tr>
                      <th className="px-4 py-2 text-purple-400">Ander element</th>
                      <th className="px-4 py-2 text-brand-400 border-l border-slate-700">Persoonsvorm</th>
                      <th className="px-4 py-2 border-l border-slate-700">Subject</th>
                      <th className="px-4 py-2 border-l border-slate-700">Rest</th>
                   </tr>
                </thead>
                <tbody>
                   <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-2 font-bold text-purple-300">Zondag</td>
                      <td className="px-4 py-2 text-brand-300 border-l border-slate-700">is</td>
                      <td className="px-4 py-2 font-bold text-white border-l border-slate-700">Jenny</td>
                      <td className="px-4 py-2 border-l border-slate-700">jarig.</td>
                   </tr>
                   <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-2 font-bold text-purple-300">Dat</td>
                      <td className="px-4 py-2 text-brand-300 border-l border-slate-700">weet</td>
                      <td className="px-4 py-2 font-bold text-white border-l border-slate-700">ik</td>
                      <td className="px-4 py-2 border-l border-slate-700">niet.</td>
                   </tr>
                   <tr>
                      <td className="px-4 py-2 font-bold text-purple-300">Om 11.00 uur</td>
                      <td className="px-4 py-2 text-brand-300 border-l border-slate-700">hebben</td>
                      <td className="px-4 py-2 font-bold text-white border-l border-slate-700">we</td>
                      <td className="px-4 py-2 border-l border-slate-700">pauze.</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>

        {/* Ja/Nee Vragen */}
        <div className="mt-8">
          <h4 className="font-bold text-lg text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-circle-question"></i> {isTr ? "3. Evet/Hayır Soruları (Ja/nee-vragen)" : "3. Yes/No Questions (Ja/nee-vragen)"}
          </h4>
          <p className="text-slate-300 text-sm mb-3">
             {isTr ? "Soru sorarken Fiil (Persoonsvorm) cümlenin en başına gelir, ardından Özne (Subject) gelir." : "In a yes/no question, the verb (Persoonsvorm) comes first, followed by the Subject."}
          </p>
          
          <div className="bg-emerald-900/10 rounded-xl border border-emerald-900/30 overflow-hidden mb-4 shadow-sm">
             <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs uppercase bg-emerald-900/30 text-emerald-400">
                   <tr>
                      <th className="px-4 py-2 text-emerald-400">Persoonsvorm</th>
                      <th className="px-4 py-2 border-l border-emerald-900/30">Subject</th>
                      <th className="px-4 py-2 border-l border-emerald-900/30">Rest</th>
                   </tr>
                </thead>
                <tbody>
                   <tr className="border-b border-emerald-900/20">
                      <td className="px-4 py-2 font-bold text-emerald-300">Komt</td>
                      <td className="px-4 py-2 font-bold text-white border-l border-emerald-900/20">je broer</td>
                      <td className="px-4 py-2 border-l border-emerald-900/20">ook op bezoek?</td>
                   </tr>
                   <tr>
                      <td className="px-4 py-2 font-bold text-emerald-300">Bent</td>
                      <td className="px-4 py-2 font-bold text-white border-l border-emerald-900/20">u</td>
                      <td className="px-4 py-2 border-l border-emerald-900/20">mevrouw Witman?</td>
                   </tr>
                </tbody>
             </table>
          </div>

          <div className="bg-rose-900/20 border border-rose-700/50 p-4 rounded-xl shadow-inner mt-4">
             <h4 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2">
               <i className="fa-solid fa-triangle-exclamation"></i> {isTr ? "ÇOK ÖNEMLİ KURAL: '-t' Harfinin Düşmesi" : "CRUCIAL RULE: Dropping the '-t'"}
             </h4>
             <p className="text-rose-200/90 text-sm leading-relaxed mb-2">
               {isTr 
                 ? "Eğer 'jij' veya 'je' zamiri (özne olarak) soru cümlesinde fiilden hemen SONRA gelirse, fiildeki '-t' harfi KESİNLİKLE düşer!" 
                 : "If 'jij' or 'je' comes directly AFTER the verb (persoonsvorm), the verb does NOT get a '-t'."}
             </p>
             <div className="flex flex-col gap-1 text-sm font-mono bg-rose-950/40 p-3 rounded-lg text-rose-300 border border-rose-900/50">
                <span>❌ Kom<span className="line-through text-white opacity-50">t</span> jij uit Irak? ➡️ ✅ <strong className="text-white">Kom jij</strong> uit Irak?</span>
                <span className="mt-1">❌ Woon<span className="line-through text-white opacity-50">t</span> je in Utrecht? ➡️ ✅ <strong className="text-white">Woon je</strong> in Utrecht?</span>
             </div>
             <p className="text-rose-200/90 text-sm leading-relaxed mt-3">
               {isTr 
                 ? "NOT: Bu kural 'u', 'hij' veya 'zij' için GEÇERLİ DEĞİLDİR. Onlarda '-t' harfi her zaman kalır." 
                 : "NOTE: This is NOT the case for u, hij, zij / ze. They keep the '-t'."}
             </p>
             <div className="text-sm font-mono mt-1 text-emerald-300">
                ✅ Woont u in België? / Komt hij uit Brussel?
             </div>
          </div>
        </div>

        {/* Vraagwoordvragen */}
        <div className="mt-8">
          <h4 className="font-bold text-lg text-sky-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-clipboard-question"></i> {isTr ? "4. Soru Kelimeleri (Vraagwoorden)" : "4. Question Words (Vraagwoorden)"}
          </h4>
          <p className="text-slate-300 text-sm mb-3">
             {isTr ? "Eğer bir soru kelimesi kullanıyorsanız dizilim: Soru Kelimesi + Fiil + Özne + Kalanlar şeklindedir." : "Word order for W-Questions: Vraagwoord + Persoonsvorm + Subject + Rest."}
          </p>
          <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden mb-4 shadow-sm">
             <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                   <tr>
                      <th className="px-4 py-2 text-sky-400">Vraagwoord</th>
                      <th className="px-4 py-2 border-l border-slate-700">Persoonsvorm</th>
                      <th className="px-4 py-2 border-l border-slate-700">Subject</th>
                   </tr>
                </thead>
                <tbody>
                   <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                      <td className="px-4 py-2 font-bold text-sky-300">Wie (Kim)</td>
                      <td className="px-4 py-2 border-l border-slate-700">heeft</td>
                      <td className="px-4 py-2 border-l border-slate-700">mijn boek?</td>
                   </tr>
                   <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                      <td className="px-4 py-2 font-bold text-sky-300">Hoe (Nasıl)</td>
                      <td className="px-4 py-2 border-l border-slate-700">heet</td>
                      <td className="px-4 py-2 border-l border-slate-700">je zus?</td>
                   </tr>
                   <tr className="hover:bg-slate-800/30">
                      <td className="px-4 py-2 font-bold text-sky-300">Wat (Ne)</td>
                      <td className="px-4 py-2 border-l border-slate-700">is</td>
                      <td className="px-4 py-2 border-l border-slate-700">zijn adres?</td>
                   </tr>
                </tbody>
             </table>
          </div>

          <div className="bg-sky-900/20 border border-sky-700/50 p-4 rounded-xl shadow-inner mt-4">
             <h4 className="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
               <i className="fa-solid fa-lightbulb"></i> Welk vs Welke (Hangi)
             </h4>
             <ul className="text-sky-200/90 text-sm leading-relaxed list-disc list-inside space-y-1">
               <li><strong className="text-white">Welk:</strong> {isTr ? "Yalnızca 'het' kelimeleriyle kullanılır." : "You use 'Welk' with 'het'-words."} <span className="italic text-slate-400 ml-1">(Voorbeeld: Welk boek?)</span></li>
               <li><strong className="text-white">Welke:</strong> {isTr ? "Yalnızca 'de' kelimeleriyle kullanılır." : "You use 'Welke' with 'de'-words."} <span className="italic text-slate-400 ml-1">(Voorbeeld: Welke dag?)</span></li>
             </ul>
          </div>
        </div>

      </div>
    )
  },
  {
    id: "articles_plurals",
    tags: ["articles_plurals", "diminutives"],
    titleTr: "Artikeller, Çoğullar ve Küçültme (Articles, Plurals, Diminutives)",
    titleEn: "Articles, Plurals & Diminutives",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Artikeller */}
        <div>
           <h4 className="font-bold text-lg text-indigo-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-tag"></i> {isTr ? "1. Artikeller (Artikel)" : "1. Articles (Artikel)"}
           </h4>
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-4 py-2">Type</th>
                       <th className="px-4 py-2 border-l border-slate-700 text-brand-400">Definiet (Belirli)</th>
                       <th className="px-4 py-2 border-l border-slate-700 text-emerald-400">Indefiniet (Belirsiz)</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-bold text-indigo-300">de-woord</td>
                       <td className="px-4 py-2 border-l border-slate-700">de cursus</td>
                       <td className="px-4 py-2 border-l border-slate-700">een cursus</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-bold text-indigo-300">het-woord</td>
                       <td className="px-4 py-2 border-l border-slate-700">het café</td>
                       <td className="px-4 py-2 border-l border-slate-700">een café</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-bold text-indigo-300">diminutief (küçültme)</td>
                       <td className="px-4 py-2 border-l border-slate-700">het rondje</td>
                       <td className="px-4 py-2 border-l border-slate-700">een rondje</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-bold text-indigo-300">pluralis (çoğul)</td>
                       <td className="px-4 py-2 border-l border-slate-700">de cursussen<br/>de cafés</td>
                       <td className="px-4 py-2 border-l border-slate-700">cursussen <span className="text-slate-500 italic">(geen artikel)</span><br/>cafés</td>
                    </tr>
                 </tbody>
              </table>
           </div>
           
           <div className="bg-indigo-900/20 border border-indigo-700/50 p-4 rounded-xl shadow-inner space-y-2">
              <p className="text-indigo-200/90 text-sm flex gap-2"><i className="fa-solid fa-check mt-1 text-indigo-400"></i> {isTr ? "Çoğul kelimeler HER ZAMAN de-woord'dur." : "Words in plural are ALWAYS de-words."}</p>
              <p className="text-indigo-200/90 text-sm flex gap-2"><i className="fa-solid fa-check mt-1 text-indigo-400"></i> {isTr ? "Küçültme ekli kelimeler (tekil) HER ZAMAN het-woord'dur." : "Diminutives in singular are ALWAYS het-words."}</p>
              <p className="text-indigo-200/90 text-sm flex gap-2"><i className="fa-solid fa-check mt-1 text-indigo-400"></i> {isTr ? "De-woorden genellikle eril (masculine) veya dişil (feminine) kelimelerdir. Het-woorden ise nötrdür." : "De-words are masculine or feminine. Het-words are neuter."}</p>
           </div>
        </div>

        {/* Küçültme Ekleri */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-compress"></i> {isTr ? "2. Küçültme Ekleri (Diminutieven)" : "2. Diminutives (Diminutieven)"}
           </h4>
           <p className="text-slate-300 text-sm mb-3">
             {isTr ? "Hollandacada küçültme ekleri çok sık kullanılır. Genellikle kelimenin sonuna '-je' eklenerek yapılır. Farklı ses uyumlarına göre '-pje' ve '-tje' de kullanılabilir." : "In Dutch, diminutives are very common. Usually, you make a diminutive with -je. Other suffixes are -pje and -tje."}
           </p>
           <ul className="list-disc list-inside text-sm text-emerald-200/80 space-y-1 ml-2">
              <li><strong className="text-white">-je:</strong> dag <i className="fa-solid fa-arrow-right text-slate-500 mx-1"></i> dag<strong className="text-emerald-400">je</strong></li>
              <li><strong className="text-white">-pje:</strong> film <i className="fa-solid fa-arrow-right text-slate-500 mx-1"></i> film<strong className="text-emerald-400">pje</strong></li>
              <li><strong className="text-white">-tje:</strong> broer <i className="fa-solid fa-arrow-right text-slate-500 mx-1"></i> broer<strong className="text-emerald-400">tje</strong></li>
           </ul>
        </div>

        {/* Çoğullar */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-layer-group"></i> {isTr ? "3. Çoğul Yapma (Pluralis)" : "3. Plurals (Pluralis)"}
           </h4>
           <p className="text-slate-300 text-sm mb-4">
             {isTr ? "İsimleri çoğul yapmak için temel olarak -en, -s veya -'s ekleri kullanılır." : "You make plurals with -en, -s or -'s."}
           </p>

           <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-amber-400 mr-1">■</span> +en Kuralı</h5>
                 <p className="text-sm text-slate-300 mb-2">{isTr ? "Çoğu Hollandaca kelime ve tek heceli kelimeler '-en' alır." : "Most Dutch words and words with one syllable get -en."}</p>
                 <p className="text-sm text-amber-200/80 italic">Voorbeeld: fiets - fiets<strong className="text-amber-400">en</strong>, boek - boek<strong className="text-amber-400">en</strong></p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-amber-400 mr-1">■</span> +s Kuralı</h5>
                 <p className="text-sm text-slate-300 mb-2">{isTr ? "İki veya daha fazla heceli olup sonu -el, -em, -en, -er, -je veya -e ile bitenler '-s' alır. Ayrıca tek heceli yabancı kelimeler de '-s' alır." : "Words with two or more syllables ending in -el, -em, -en, -er, -je or -e get -s. Also, foreign words usually get -s."}</p>
                 <p className="text-sm text-amber-200/80 italic leading-relaxed">
                   Voorbeeld: aardappel<strong className="text-amber-400">s</strong>, jongen<strong className="text-amber-400">s</strong>, biertje<strong className="text-amber-400">s</strong>, kantine<strong className="text-amber-400">s</strong><br/>
                   (Vreemde woorden): film<strong className="text-amber-400">s</strong>, champignon<strong className="text-amber-400">s</strong>
                 </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-amber-400 mr-1">■</span> +'s Kuralı</h5>
                 <p className="text-sm text-slate-300 mb-2">{isTr ? "Sonu sesli harflerle (-a, -i, -o, -u, -y) biten kelimeler, okunuşu korumak için kesme işaretiyle '-s' alır." : "Words ending in -a, -i, -o, -u or -y get -'s."}</p>
                 <p className="text-sm text-amber-200/80 italic">Voorbeeld: paprika<strong className="text-amber-400">'s</strong>, auto<strong className="text-amber-400">'s</strong>, hobby<strong className="text-amber-400">'s</strong></p>
              </div>

              <div className="bg-rose-900/20 p-4 rounded-xl border border-rose-800/50">
                 <h5 className="font-bold text-rose-400 mb-2"><i className="fa-solid fa-bolt mr-1"></i> {isTr ? "Düzensiz Çoğullar (Onregelmatige Vormen)" : "Irregular Forms"}</h5>
                 <p className="text-sm text-rose-200/90 italic">
                   stad ➡️ steden <br/>
                   kind ➡️ kinderen <br/>
                   ei ➡️ eieren
                 </p>
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "adjectives",
    tags: ["adjectives"],
    titleTr: "Sıfatlar (Adjectief)",
    titleEn: "Adjectives (Adjectief)",
    content: (isTr) => (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed">
          {isTr 
            ? "Sıfatlar ismin önüne geldiğinde genellikle sonuna '-e' takısı alırlar. Ancak çok önemli bir İSTİSNA kuralı vardır." 
            : "When an adjective is placed before a noun, it usually gets an '-e'. However, there is a very important EXCEPTION."}
        </p>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-6">
           <table className="w-full text-sm text-left text-slate-300">
              <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                 <tr>
                    <th className="px-4 py-3">Situatie</th>
                    <th className="px-4 py-3 border-l border-slate-700 text-brand-400">de-woord</th>
                    <th className="px-4 py-3 border-l border-slate-700 text-sky-400">het-woord</th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Definiet<br/><span className="text-xs text-slate-500">(de of het)</span></td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      de klein<strong className="text-brand-400">e</strong> courgette<br/>
                      de prettig<strong className="text-brand-400">e</strong> vakantie
                    </td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      het klein<strong className="text-sky-400">e</strong> bosje<br/>
                      het goed<strong className="text-sky-400">e</strong> idee
                    </td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-rose-900/10">
                    <td className="px-4 py-3 font-medium text-rose-300">Indefiniet<br/><span className="text-xs text-rose-400/70">(een of geen artikel)</span></td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      een klein<strong className="text-brand-400">e</strong> courgette<br/>
                      prettig<strong className="text-brand-400">e</strong> vakantie
                    </td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      <span className="bg-rose-900/50 text-white px-2 py-1 rounded-md border border-rose-700/50 inline-block mb-1 shadow-sm">een klein_ bosje</span><br/>
                      <span className="bg-rose-900/50 text-white px-2 py-1 rounded-md border border-rose-700/50 inline-block shadow-sm">goed_ idee</span>
                    </td>
                 </tr>
                 <tr className="hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Pluralis<br/><span className="text-xs text-slate-500">(çoğul)</span></td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      de klein<strong className="text-brand-400">e</strong> courgettes<br/>
                      klein<strong className="text-brand-400">e</strong> courgettes
                    </td>
                    <td className="px-4 py-3 border-l border-slate-700">
                      de klein<strong className="text-sky-400">e</strong> bosjes<br/>
                      klein<strong className="text-sky-400">e</strong> bosjes
                    </td>
                 </tr>
              </tbody>
           </table>
        </div>

        <div className="bg-rose-900/20 border border-rose-700/50 p-5 rounded-xl shadow-inner">
           <h4 className="text-rose-400 font-bold text-base mb-3 flex items-center gap-2">
             <i className="fa-solid fa-crown"></i> {isTr ? "ALTIN KURAL (İstisna)" : "THE GOLDEN RULE (Exception)"}
           </h4>
           <p className="text-rose-200/90 text-sm leading-relaxed mb-3 font-medium">
             {isTr 
               ? "Eğer isim bir 'het-woord' ise VE ismin önünde 'een', 'geen' veya 'hiçbir artikel yoksa', sıfat '-e' takısı ALMAZ!" 
               : "If the noun is a 'het-word' AND there is 'een', 'geen', or 'no article' before it, the adjective gets NO '-e'!"}
           </p>
           <div className="space-y-1.5 text-sm font-mono bg-rose-950/40 p-3 rounded-lg text-rose-300 border border-rose-900/50">
              <div>✅ een <strong className="text-white">klein</strong> bosje peterselie</div>
              <div>✅ geen <strong className="text-white">klein</strong> bosje peterselie</div>
              <div>✅ <strong className="text-white">vers</strong> fruit <span className="text-rose-400/70 text-xs">(geen artikel)</span></div>
           </div>
        </div>

        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-ban"></i> {isTr ? "Diğer '-e' Almayan Durumlar" : "Other Situations with NO '-e'"}
           </h4>
           <ul className="text-slate-300 text-sm leading-relaxed space-y-3 list-disc list-inside ml-2">
             <li>
               <strong className="text-white">Na het substantief:</strong> {isTr ? "Sıfat isimden sonra geliyorsa." : "When the adjective is after the noun."}
               <div className="italic text-amber-200/80 ml-6 mt-1">De courgette is <strong className="text-amber-400">klein</strong>. Het eten is <strong className="text-amber-400">vet</strong>.</div>
             </li>
             <li>
               <strong className="text-white">Perfectumvormen op -en:</strong> {isTr ? "Sonu -en ile biten fiil çekimleri sıfat olduğunda." : "Past participles ending in -en."}
               <div className="italic text-amber-200/80 ml-6 mt-1">de <strong className="text-amber-400">gebakken</strong> spekjes, de <strong className="text-amber-400">geschreven</strong> tekst</div>
             </li>
             <li>
               <strong className="text-white">Materiaal:</strong> {isTr ? "Neden yapıldığını belirten materyal sıfatları." : "Adjectives indicating material."}
               <div className="italic text-amber-200/80 ml-6 mt-1">een <strong className="text-amber-400">houten</strong> schuur, een <strong className="text-amber-400">katoenen</strong> T-shirt</div>
             </li>
             <li>
               <strong className="text-white">Eindigt op -en:</strong> {isTr ? "Kendi kökü -en ile biten sıfatlar." : "Adjectives inherently ending in -en."}
               <div className="italic text-amber-200/80 ml-6 mt-1">een <strong className="text-amber-400">open</strong> deur, een <strong className="text-amber-400">eigen</strong> huis</div>
             </li>
           </ul>
        </div>

      </div>
    )
  },
  {
    id: "modal_imperative",
    tags: ["modal_verbs", "imperative"],
    titleTr: "Kipler ve Emir Cümlesi (Modal Verbs & Imperative)",
    titleEn: "Modal Verbs & Imperative",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Modale Werkwoorden */}
        <div>
           <h4 className="font-bold text-lg text-brand-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-gears"></i> {isTr ? "1. Kipler (Modale werkwoorden)" : "1. Modal Verbs (Modale werkwoorden)"}
           </h4>
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-3 py-2"></th>
                       <th className="px-3 py-2 text-brand-400 border-l border-slate-700">mogen <span className="block text-[10px] font-normal text-slate-500">(izinli olmak)</span></th>
                       <th className="px-3 py-2 text-sky-400 border-l border-slate-700">willen <span className="block text-[10px] font-normal text-slate-500">(istemek)</span></th>
                       <th className="px-3 py-2 text-emerald-400 border-l border-slate-700">moeten <span className="block text-[10px] font-normal text-slate-500">(zorunda olmak)</span></th>
                       <th className="px-3 py-2 text-purple-400 border-l border-slate-700">kunnen <span className="block text-[10px] font-normal text-slate-500">(-ebilmek)</span></th>
                       <th className="px-3 py-2 text-amber-400 border-l border-slate-700">zullen <span className="block text-[10px] font-normal text-slate-500">(olacak/yapacak)</span></th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-3 py-2 font-bold text-white">ik</td>
                       <td className="px-3 py-2 border-l border-slate-700">mag</td>
                       <td className="px-3 py-2 border-l border-slate-700">wil</td>
                       <td className="px-3 py-2 border-l border-slate-700">moet</td>
                       <td className="px-3 py-2 border-l border-slate-700">kan</td>
                       <td className="px-3 py-2 border-l border-slate-700">zal</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-3 py-2 font-bold text-white">jij / u</td>
                       <td className="px-3 py-2 border-l border-slate-700">mag</td>
                       <td className="px-3 py-2 border-l border-slate-700">wil / wilt</td>
                       <td className="px-3 py-2 border-l border-slate-700">moet</td>
                       <td className="px-3 py-2 border-l border-slate-700">kan / kunt</td>
                       <td className="px-3 py-2 border-l border-slate-700">zal / zult</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-3 py-2 font-bold text-white">hij / zij / het</td>
                       <td className="px-3 py-2 border-l border-slate-700">mag</td>
                       <td className="px-3 py-2 border-l border-slate-700">wil</td>
                       <td className="px-3 py-2 border-l border-slate-700">moet</td>
                       <td className="px-3 py-2 border-l border-slate-700">kan</td>
                       <td className="px-3 py-2 border-l border-slate-700">zal</td>
                    </tr>
                    <tr className="bg-slate-800/20">
                       <td className="px-3 py-2 font-bold text-white">wij / jullie / zij</td>
                       <td className="px-3 py-2 border-l border-slate-700">mogen</td>
                       <td className="px-3 py-2 border-l border-slate-700">willen</td>
                       <td className="px-3 py-2 border-l border-slate-700">moeten</td>
                       <td className="px-3 py-2 border-l border-slate-700">kunnen</td>
                       <td className="px-3 py-2 border-l border-slate-700">zullen</td>
                    </tr>
                 </tbody>
              </table>
           </div>

           <div className="bg-brand-900/20 border border-brand-700/50 p-4 rounded-xl shadow-inner mt-4">
              <h4 className="text-brand-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-info"></i> Cümle Dizilimi (Word Order)
              </h4>
              <p className="text-brand-200/90 text-sm leading-relaxed mb-2">
                {isTr 
                  ? "Modaller kullanıldığında, asıl eylemi bildiren mastar fiil (infinitief) genellikle cümlenin EN SONUNA gider." 
                  : "Usually there is an infinitive after a modal verb. The infinitive is usually at the END of the sentence."}
              </p>
              <div className="text-sm font-mono text-white mb-3">
                 <strong className="text-brand-400">Mag</strong> ik jouw soep ook even <strong className="text-brand-400">proeven</strong>?<br/>
                 We <strong className="text-brand-400">moeten</strong> oefening 3 ook <strong className="text-brand-400">maken</strong>.
              </div>
              <p className="text-brand-200/90 text-sm leading-relaxed">
                {isTr 
                  ? "Eğer mastar fiilin ne olduğu bağlamdan çok net anlaşılabiliyorsa, mastar fiil cümleden düşebilir." 
                  : "If the infinitive is very logical, you can omit the infinitive."}
              </p>
              <div className="text-sm font-mono text-slate-300 italic mt-1">
                 Ik wil graag koffie. (hebben)<br/>
                 Ik moet naar de les. (gaan)
              </div>
           </div>
        </div>

        {/* Zullen - Voorstel */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-handshake"></i> {isTr ? "2. Zullen (Teklif / Öneri)" : "2. Zullen (Proposal / Suggestion)"}
           </h4>
           <p className="text-slate-300 text-sm leading-relaxed mb-3">
             {isTr 
               ? "Hollandacada 'Zullen' fiilini bir teklif veya öneri yapmak için kullanırız. Bu her zaman bir soru cümlesidir ve öznesi mutlaka 'ik' veya 'wij/we' olur." 
               : "A proposal is always a question and the subject is 'ik' or 'wij/we'."}
           </p>
           <ul className="list-disc list-inside text-sm text-amber-200/80 space-y-1 ml-2 italic">
              <li><strong className="text-amber-400 font-bold not-italic">Zal</strong> ik eten maken? <span className="text-slate-500 not-italic">(Yemek yapayım mı?)</span></li>
              <li><strong className="text-amber-400 font-bold not-italic">Zullen</strong> we naar café De Zomer gaan? <span className="text-slate-500 not-italic">(De Zomer kafeye gidelim mi?)</span></li>
           </ul>
        </div>

        {/* Imperatief */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-bullhorn"></i> {isTr ? "3. Emir Kipi (Imperatief)" : "3. Imperative (Imperatief)"}
           </h4>
           <p className="text-slate-300 text-sm mb-4">
             {isTr ? "Emir kipi iki şekilde yapılabilir:" : "You can make an imperative in two ways:"}
           </p>

           <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-emerald-400 mr-2">1.</span> {isTr ? "Normal Form (Birey ve Gruplara):" : "Normal Form (To individual and group):"} <strong className="text-emerald-400 ml-2">de stam</strong></h5>
                 <p className="text-sm text-emerald-200/80 italic">
                   <strong className="text-emerald-400 font-bold not-italic">Geef</strong> maar een biertje.<br/>
                   <strong className="text-emerald-400 font-bold not-italic">Vertel</strong> eens over je vakantie.
                 </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-emerald-400 mr-2">2.</span> {isTr ? "Kibar Form (Beleefde vorm):" : "Polite Form:"} <strong className="text-emerald-400 ml-2">stam + t en u</strong></h5>
                 <p className="text-sm text-emerald-200/80 italic">
                   <strong className="text-emerald-400 font-bold not-italic">Gaa<span className="text-white">t</span> u</strong> zitten.<br/>
                   <strong className="text-emerald-400 font-bold not-italic">Gaa<span className="text-white">t</span> u</strong> maar even zitten.
                 </p>
              </div>

              <div className="bg-emerald-900/20 border border-emerald-700/50 p-4 rounded-xl">
                 <p className="text-emerald-200/90 text-sm">
                   <i className="fa-solid fa-lightbulb text-emerald-400 mr-2"></i>
                   {isTr 
                     ? "İlk form (sadece kök) en çok kullanılan formdur. Cümleyi yumuşatmak ve daha dostça (vriendelijk) yapmak için cümleye 'maar', 'maar even' veya 'eens' kelimeleri eklenir." 
                     : "The first form is most used. Adding 'maar', 'maar even' and 'eens' makes an imperative friendly."}
                 </p>
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "comparative_superlative",
    tags: ["comparative_superlative"],
    titleTr: "Karşılaştırma ve Üstünlük (Comparative & Superlative)",
    titleEn: "Comparative & Superlative",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Regular Forms */}
        <div>
           <h4 className="font-bold text-lg text-indigo-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrow-up-right-dots"></i> {isTr ? "1. Kurallı Formlar (Regelmatige vormen)" : "1. Regular Forms (Regelmatige vormen)"}
           </h4>
           
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-4 py-3 text-white">Basisvorm</th>
                       <th className="px-4 py-3 border-l border-slate-700 text-indigo-400">Comparatief (+er)</th>
                       <th className="px-4 py-3 border-l border-slate-700 text-brand-400">Superlatief (+st)</th>
                       <th className="px-4 py-3 border-l border-slate-700 text-emerald-400">Gelijk (Eşitlik)</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">klein</td>
                       <td className="px-4 py-3 border-l border-slate-700">klein<strong className="text-indigo-400">er</strong> (dan)</td>
                       <td className="px-4 py-3 border-l border-slate-700">het klein<strong className="text-brand-400">st</strong></td>
                       <td className="px-4 py-3 border-l border-slate-700">even klein als</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">groot</td>
                       <td className="px-4 py-3 border-l border-slate-700">grot<strong className="text-indigo-400">er</strong> (dan)</td>
                       <td className="px-4 py-3 border-l border-slate-700">het groot<strong className="text-brand-400">st</strong></td>
                       <td className="px-4 py-3 border-l border-slate-700">even groot als</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">duur</td>
                       <td className="px-4 py-3 border-l border-slate-700">duur<strong className="text-indigo-400">der</strong> (dan)*</td>
                       <td className="px-4 py-3 border-l border-slate-700">het duur<strong className="text-brand-400">st</strong></td>
                       <td className="px-4 py-3 border-l border-slate-700">even duur als</td>
                    </tr>
                 </tbody>
              </table>
           </div>

           <div className="bg-indigo-900/20 border border-indigo-700/50 p-4 rounded-xl shadow-inner space-y-3">
              <div>
                 <h5 className="font-bold text-indigo-400 text-sm mb-1">Comparatief (Daha...)</h5>
                 <p className="text-indigo-200/90 text-sm">
                   {isTr ? "Sıfatın sonuna '-er' eklenir. Karşılaştırma yaparken 'dan' (den/dan) kullanılır." : "Add '-er' to the adjective. Use 'dan' to compare."} 
                   <span className="italic ml-2">Mijn broer is oud<strong className="text-indigo-400">er</strong>.</span>
                 </p>
                 <p className="text-indigo-200/90 text-sm mt-1">
                   <strong className="text-rose-400">* İstisna:</strong> {isTr ? "Sıfat '-r' ile bitiyorsa '-der' eklenir." : "If the adjective ends in '-r', add '-der'."} 
                   <span className="italic ml-2">duur ➡️ duur<strong className="text-rose-400">der</strong>.</span>
                 </p>
              </div>
              <div className="border-t border-indigo-800/50 pt-3">
                 <h5 className="font-bold text-brand-400 text-sm mb-1">Superlatief (En...)</h5>
                 <p className="text-indigo-200/90 text-sm">
                   {isTr ? "Sıfatın sonuna '-st' eklenir. Öncesinde 'het' kullanılır." : "Add '-st' to the adjective. Preceded by 'het'."} 
                   <span className="italic ml-2">Ik ben <strong className="text-brand-400">het</strong> jong<strong className="text-brand-400">st</strong> in de groep. Dit T-shirt is <strong className="text-brand-400">het</strong> mooi<strong className="text-brand-400">st</strong>.</span>
                 </p>
              </div>
              <div className="border-t border-indigo-800/50 pt-3">
                 <h5 className="font-bold text-emerald-400 text-sm mb-1">Gelijk (Eşitlik)</h5>
                 <p className="text-indigo-200/90 text-sm">
                   {isTr ? "Nesneler eşitse 'even ... als' veya 'net zo ... als' kullanılır." : "If objects are equal, use 'even ... als' or 'net zo ... als'."} 
                   <span className="italic ml-2 font-mono mt-1 block bg-indigo-950/40 p-2 rounded">
                     Mijn moeder is kleiner dan ik. Jouw kamer is <strong className="text-emerald-400">even</strong> groot <strong className="text-emerald-400">als</strong> mijn kamer. Ik ben <strong className="text-emerald-400">net zo</strong> groot <strong className="text-emerald-400">als</strong> jij.
                   </span>
                 </p>
              </div>
           </div>
        </div>

        {/* Irregular Forms */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-rose-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-triangle-exclamation"></i> {isTr ? "2. Düzensiz Formlar (Onregelmatige vormen)" : "2. Irregular Forms (Onregelmatige vormen)"}
           </h4>
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-rose-900/30 text-rose-400">
                    <tr>
                       <th className="px-4 py-3">Basisvorm</th>
                       <th className="px-4 py-3 border-l border-rose-900/30">Comparatief</th>
                       <th className="px-4 py-3 border-l border-rose-900/30">Superlatief</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">goed (iyi)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-300">beter</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-400">het best</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">veel (çok)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-300">meer</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-400">het meest</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">weinig (az)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-300">minder</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-400">het minst</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-slate-200">graag (memnuniyetle)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-300">liever</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-rose-400">het liefst</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* Position Rules */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-map-pin"></i> {isTr ? "3. Cümle İçindeki Konumu" : "3. Position in Sentence"}
           </h4>
           <ul className="text-slate-300 text-sm leading-relaxed space-y-3 list-disc list-inside ml-2">
             <li>
               <strong className="text-white">İsmin Önünde (Voor een substantief):</strong>
               <div className="italic text-amber-200/80 ml-6 mt-1">Maria vindt geel een mooi<strong className="text-amber-400">ere</strong> kleur dan rood. <br/> Ilja is de oud<strong className="text-amber-400">ste</strong> man in de groep.</div>
             </li>
             <li>
               <strong className="text-white">Fiille Birlikte Zarf Olarak (Na het werkwoord):</strong>
               <div className="italic text-amber-200/80 ml-6 mt-1">Ik eet <strong className="text-amber-400">het liefst</strong> spaghetti.</div>
               <div className="bg-rose-900/20 text-rose-300 p-2 rounded-lg mt-2 text-xs border border-rose-800/50">
                 <strong className="text-rose-400">İSTİSNA:</strong> "vinden" fiilinde "het" kullanılmaz! <br/>
                 ✅ Peter <strong className="text-rose-400">vindt</strong> biefstuk met frietjes <strong className="text-rose-400">lekkerst</strong>. (het lekkerst DEĞİL)
               </div>
             </li>
           </ul>
        </div>

      </div>
    )
  },
  {
    id: "pronouns_negation",
    tags: ["pronouns_object", "pronouns_demonstrative", "negation"],
    titleTr: "Nesne ve İşaret Zamirleri & Olumsuzluk",
    titleEn: "Object & Demonstrative Pronouns & Negation",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Object Pronouns */}
        <div>
           <h4 className="font-bold text-lg text-indigo-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-user-tag"></i> {isTr ? "1. Nesne Zamirleri (Objectvorm)" : "1. Object Pronouns (Objectvorm)"}
           </h4>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Persons Table */}
             <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-x-auto shadow-sm">
                <table className="w-full text-sm text-left text-slate-300 min-w-[250px]">
                   <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                      <tr>
                         <th className="px-4 py-2 text-white">Subject (Personen)</th>
                         <th className="px-4 py-2 border-l border-slate-700 text-indigo-400">Object (Personen)</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">ik</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">mij / me</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">jij / je</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">jou / je</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">u</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">u</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">hij</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">hem</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">zij / ze</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">haar</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">het</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">het</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">wij / we</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">ons</td></tr>
                      <tr className="border-b border-slate-700/50"><td className="px-4 py-2">jullie</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">jullie</td></tr>
                      <tr><td className="px-4 py-2">zij / ze</td><td className="px-4 py-2 border-l border-slate-700 font-bold text-indigo-300">hen / ze</td></tr>
                   </tbody>
                </table>
             </div>
             
             {/* Non-Persons Table */}
             <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-x-auto shadow-sm h-fit">
                <table className="w-full text-sm text-left text-slate-300 min-w-[350px]">
                   <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                      <tr>
                         <th className="px-4 py-2"></th>
                         <th className="px-4 py-2 border-l border-slate-700 text-brand-400">Subject (Niet-personen)</th>
                         <th className="px-4 py-2 border-l border-slate-700 text-emerald-400">Object (Niet-personen)</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr className="border-b border-slate-700/50">
                         <td className="px-4 py-2 font-bold text-slate-400">de-woord</td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-brand-300">hij</strong><br/>
                           <span className="text-xs italic">Dit is mijn nieuwe fiets. <strong className="text-brand-400">Hij</strong> rijdt goed.</span>
                         </td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-emerald-300">hem</strong><br/>
                           <span className="text-xs italic">Dit is mijn nieuwe fiets. Ik heb <strong className="text-emerald-400">hem</strong> pas drie weken.</span>
                         </td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                         <td className="px-4 py-2 font-bold text-slate-400">het-woord</td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-brand-300">het</strong><br/>
                           <span className="text-xs italic">Dit is een goed boek. <strong className="text-brand-400">Het</strong> kost 12 euro.</span>
                         </td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-emerald-300">het</strong><br/>
                           <span className="text-xs italic">Dit is een goed boek. Ik koop <strong className="text-emerald-400">het</strong> voor mijn vriendin.</span>
                         </td>
                      </tr>
                      <tr>
                         <td className="px-4 py-2 font-bold text-slate-400">pluralis</td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-brand-300">ze</strong><br/>
                           <span className="text-xs italic">Dat zijn leuke schoenen! <strong className="text-brand-400">Ze</strong> zijn niet duur.</span>
                         </td>
                         <td className="px-4 py-2 border-l border-slate-700">
                           <strong className="text-emerald-300">ze</strong><br/>
                           <span className="text-xs italic">Dat zijn leuke schoenen! Mag ik <strong className="text-emerald-400">ze</strong> even passen?</span>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
           </div>

           <p className="text-indigo-300 text-sm mt-3 bg-indigo-900/20 p-3 rounded-xl border border-indigo-800/50">
             <i className="fa-solid fa-circle-info mr-2"></i>
             <strong className="text-white">Mij</strong> en <strong className="text-white">jou</strong> zijn de vormen met accent: <span className="italic ml-1">Hij heeft <strong className="text-white">jou</strong> en <strong className="text-white">mij</strong> in Utrecht gezien.</span>
           </p>
        </div>

        {/* Demonstrative Pronouns */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-brand-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-hand-pointer"></i> {isTr ? "2. İşaret Zamirleri (Demonstratief pronomen)" : "2. Demonstrative Pronouns"}
           </h4>
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-4 py-3"></th>
                       <th className="px-4 py-3 border-l border-slate-700 text-brand-400">hier (burada / yakında)</th>
                       <th className="px-4 py-3 border-l border-slate-700 text-sky-400">daar (orada / uzakta)</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-medium text-slate-200">singularis (de broek)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-brand-300">deze broek</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-sky-300">die broek</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-medium text-slate-200">singularis (het shirt)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-brand-300">dit shirt</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-sky-300">dat shirt</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                       <td className="px-4 py-3 font-medium text-slate-200">pluralis (de broeken)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-brand-300">deze broeken</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-sky-300">die broeken</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 bg-slate-800/20">
                       <td className="px-4 py-3 font-medium text-slate-200">pluralis (de shirts)</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-brand-300">deze shirts</td>
                       <td className="px-4 py-3 border-l border-slate-700 font-bold text-sky-300">die shirts</td>
                    </tr>
                 </tbody>
              </table>
           </div>
           <div className="bg-brand-900/20 border border-brand-700/50 p-4 rounded-xl shadow-inner">
             <h4 className="text-brand-400 font-bold text-sm mb-1 flex items-center gap-2">
               <i className="fa-solid fa-lightbulb"></i> {isTr ? "Hatırlama İpucu (Een trucje om te onthouden)" : "Trick to remember"}
             </h4>
             <p className="text-brand-200/90 text-sm leading-relaxed">
               {isTr 
                 ? "Son harfler her zaman aynıdır. 'de-woorden' için yine '-e' ile biten işaret zamirleri kullanılır (dezE, diE). 'het-woorden' için ise '-t' ile bitenler kullanılır (diT, daT)." 
                 : "The last letters are always the same. For de-words you use demonstratives ending in -e (deze, die). For het-words you use demonstratives ending in -t (dit, dat)."}
             </p>
           </div>
        </div>

        {/* Negation & Moeten/Hoeven */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-rose-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-ban"></i> {isTr ? "3. Olumsuzluk (Negatie) & Moeten / Hoeven" : "3. Negation & Moeten / Hoeven"}
           </h4>
           
           <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-rose-400 mr-2">■</span> geen vs niet</h5>
                 <p className="text-sm text-slate-300 mb-2">
                   {isTr ? "Belirsiz (indefinite) kelimeler için 'geen' kullanılır. Diğer durumlarda 'niet' kullanılır." : "Use 'geen' for indefinite words. Use 'niet' in other situations."}
                 </p>
                 <p className="text-sm text-rose-200/80 italic font-mono bg-slate-900/50 p-2 rounded">
                   Susy heeft <strong className="text-rose-400">geen</strong> grote kamer.<br/>
                   De kamer is <strong className="text-rose-400">niet</strong> zonnig.
                 </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                 <h5 className="font-bold text-white mb-2"><span className="text-rose-400 mr-2">■</span> moeten / hoeven</h5>
                 <p className="text-sm text-slate-300 mb-2 leading-relaxed">
                   {isTr 
                     ? "'Moeten' (zorunda olmak) sorusuna olumsuz cevap verirken 'hoeven' (gerek yok) kullanılır. 'Hoeven' her zaman 'te + infinitief' alır." 
                     : "Use 'hoeven' if you want to react negatively to a question with 'moeten'. 'Hoeven' gets 'te + infinitief'."}
                 </p>
                 <div className="text-sm text-rose-200/80 italic font-mono bg-slate-900/50 p-3 rounded space-y-2">
                    <div><span className="text-slate-400 not-italic">Vraag:</span> Moeten we oefening 3 maken?</div>
                    <div><span className="text-slate-400 not-italic">Antwoord:</span> Nee, jullie <strong className="text-rose-400">hoeven</strong> oefening 3 <strong className="text-rose-400">niet te maken</strong>.</div>
                    <div className="border-t border-slate-700 my-2"></div>
                    <div><span className="text-slate-400 not-italic">Vraag:</span> Moet ik je bellen?</div>
                    <div><span className="text-slate-400 not-italic">Antwoord:</span> Nee, je <strong className="text-rose-400">hoeft</strong> me <strong className="text-rose-400">niet te bellen</strong>.</div>
                 </div>
              </div>

              <div className="bg-rose-900/20 border border-rose-700/50 p-4 rounded-xl">
                 <p className="text-rose-200/90 text-sm">
                   <i className="fa-solid fa-triangle-exclamation text-rose-400 mr-2"></i>
                   {isTr 
                     ? "Eğer bir şeyin yapılması YASAK veya KÖTÜ ise, 'moeten + niet/geen' kullanılır." 
                     : "Use 'moeten + niet/geen' if something is forbidden or bad to do."}
                   <br/>
                   <span className="italic block mt-1">Moet ik u bellen? Nee, u <strong className="text-rose-400">moet</strong> mij <strong className="text-rose-400">niet bellen</strong>. Wij bellen u!</span>
                 </p>
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "past_tenses",
    tags: ["past_tenses", "perfectum", "imperfectum"],
    titleTr: "Geçmiş Zamanlar (Perfectum & Imperfectum)",
    titleEn: "Past Tenses (Perfectum & Imperfectum)",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Soft Ketchup Rule - Crucial for both */}
        <div className="bg-gradient-to-r from-amber-900/30 to-rose-900/20 border border-amber-700/50 p-5 rounded-2xl shadow-inner mb-8">
           <h4 className="text-amber-400 font-extrabold text-lg mb-3 flex items-center gap-2">
             <i className="fa-solid fa-star"></i> {isTr ? "ALTIN KURAL: 'Soft Ketchup' (veya 't kofschip)" : "GOLDEN RULE: 'Soft Ketchup' (or 't kofschip)"}
           </h4>
           <p className="text-slate-200 text-sm leading-relaxed mb-4 font-medium">
             {isTr 
               ? "Hollandacada düzenli fiillerin geçmiş zamanını (hem Perfectum hem de Imperfectum) yaparken fiil kökünün (stam) son harfine bakılır. Bu kuralı bilmek hayat kurtarır!" 
               : "To make the past tense (both Perfectum and Imperfectum) of regular verbs, look at the last letter of the stem. Knowing this rule is a lifesaver!"}
           </p>
           
           <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700 text-sm">
              <p className="text-slate-300 mb-2">
                {isTr ? "Fiil kökünün son harfi şu ünsüzlerden biri mi?" : "Is the last letter of the stem one of these consonants?"}
              </p>
              <div className="text-2xl font-extrabold text-white tracking-widest text-center my-3 drop-shadow-md">
                 <span className="text-rose-400">s, f, t, k, ch, p</span>
              </div>
              <p className="text-slate-400 text-center text-xs italic mb-4">
                ({isTr ? "Akılda tutmak için:" : "Memory aid:"} <strong className="text-white">s</strong>o<strong className="text-white">f</strong><strong className="text-white">t</strong> <strong className="text-white">k</strong>e<strong className="text-white">t</strong><strong className="text-white">ch</strong>u<strong className="text-white">p</strong>)
              </p>
              
              <ul className="space-y-2 mt-4 text-slate-300">
                <li className="flex gap-2 items-start"><i className="fa-solid fa-check text-emerald-400 mt-1"></i> <div><strong className="text-emerald-400">EVET (YES):</strong> {isTr ? "Perfectum için +t, Imperfectum için +te(n) eklenir." : "For Perfectum add +t, for Imperfectum add +te(n)."} <br/><span className="text-xs text-slate-400 font-mono">werken ➡️ werk ➡️ gewerk<strong className="text-emerald-400">t</strong> / werk<strong className="text-emerald-400">te</strong></span></div></li>
                <li className="flex gap-2 items-start"><i className="fa-solid fa-xmark text-rose-400 mt-1"></i> <div><strong className="text-rose-400">HAYIR (NO):</strong> {isTr ? "Diğer tüm seslerde Perfectum için +d, Imperfectum için +de(n) eklenir." : "For all other sounds, for Perfectum add +d, for Imperfectum add +de(n)."} <br/><span className="text-xs text-slate-400 font-mono">spelen ➡️ speel ➡️ gespeel<strong className="text-rose-400">d</strong> / speel<strong className="text-rose-400">de</strong></span></div></li>
              </ul>
           </div>
        </div>

        {/* Perfectum */}
        <div>
           <h4 className="font-bold text-xl text-sky-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-clock-rotate-left"></i> 1. Perfectum (hebben/zijn + ge_t/d)
           </h4>
           <p className="text-slate-300 text-sm mb-4">
             {isTr ? "Geçmişte olup bitmiş olaylar (afgesloten zaken) için kullanılır." : "Used for completed actions in the past."}
           </p>

           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-6">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-4 py-3">Zijn vs Hebben</th>
                       <th className="px-4 py-3 border-l border-slate-700">Regel (Kural)</th>
                       <th className="px-4 py-3 border-l border-slate-700">Voorbeeld (Örnek)</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 font-bold text-sky-300 align-top" rowSpan="3">zijn</td>
                       <td className="px-4 py-3 border-l border-slate-700"><strong className="text-white">richting</strong> {isTr ? "(bir yere doğru yönelme)" : "(direction)"}</td>
                       <td className="px-4 py-3 border-l border-slate-700 italic">Ik ben naar huis gefietst.</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 border-l border-slate-700"><strong className="text-white">verandering van situatie</strong> {isTr ? "(durum değişikliği)" : "(change of situation)"}</td>
                       <td className="px-4 py-3 border-l border-slate-700 italic text-xs space-y-1">
                         <div className="block">We zijn om 9.00 uur begonnen.</div>
                         <div className="block">Ze is met de cursus gestopt.</div>
                         <div className="block">Ben je gisteren 21 geworden?</div>
                         <div className="block">Wat is er gebeurd?</div>
                       </td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-3 border-l border-slate-700"><strong className="text-white">werkwoorden:</strong> zijn, blijven</td>
                       <td className="px-4 py-3 border-l border-slate-700 italic text-xs">
                         <div className="block">Ik ben naar de voetbalvereniging <strong className="text-sky-400">geweest</strong>.</div>
                         <div className="block">Hij is tot 22.00 uur <strong className="text-sky-400">gebleven</strong>.</div>
                       </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 bg-rose-900/10">
                       <td className="px-4 py-3 font-bold text-rose-300 align-top">hebben</td>
                       <td className="px-4 py-3 border-l border-slate-700">{isTr ? "Diğer tüm durumlar (genellikle nesne alan fiiller)" : "All other situations (usually verbs with objects)"}</td>
                       <td className="px-4 py-3 border-l border-slate-700 italic">We hebben gefietst.<br/>Hij heeft zijn moeder gebeld.</td>
                    </tr>
                 </tbody>
              </table>
           </div>

           <div className="bg-rose-900/20 border border-rose-700/50 p-4 rounded-xl shadow-inner mt-4">
             <h4 className="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2">
               <i className="fa-solid fa-ban"></i> {isTr ? "İSTİSNA: 'ge-' prefixi almayanlar" : "EXCEPTION: Verbs without 'ge-' prefix"}
             </h4>
             <p className="text-rose-200/90 text-sm leading-relaxed mb-2">
               {isTr 
                 ? "Eğer bir fiil ge-, be-, her-, ver- veya ont- ile başlıyorsa, participium (3. hal) yaparken başına fazladan 'ge-' EKLENMEZ!" 
                 : "If a verb begins with ge-, be-, her-, ver- or ont-, the participium does NOT get an extra 'ge-'!"}
             </p>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-rose-300">
               <div className="bg-rose-950/40 p-2 rounded">gebeuren ➡️ gebeurd</div>
               <div className="bg-rose-950/40 p-2 rounded">betalen ➡️ betaald</div>
               <div className="bg-rose-950/40 p-2 rounded">herhalen ➡️ herhaald</div>
               <div className="bg-rose-950/40 p-2 rounded">vertalen ➡️ vertaald</div>
               <div className="bg-rose-950/40 p-2 rounded">ontdekken ➡️ ontdekt</div>
             </div>
           </div>
        </div>

        {/* Imperfectum */}
        <div className="mt-8">
           <h4 className="font-bold text-xl text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-book-journal-whills"></i> 2. Imperfectum (stam + te(n)/de(n))
           </h4>
           <p className="text-slate-300 text-sm mb-4">
             {isTr ? "Genellikle geçmişi tasvir etmek (beschrijvingen) ve hikaye anlatmak için kullanılır. Tekil öznelerde '-te/-de', çoğul öznelerde '-ten/-den' eklenir." : "Usually used for descriptions in the past and storytelling. Add '-te/-de' for singular, '-ten/-den' for plural."}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Reguliere Werkwoorden */}
             <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm h-fit">
                <table className="w-full text-sm text-left text-slate-300">
                   <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                      <tr>
                         <th className="px-4 py-3">Persoon</th>
                         <th className="px-4 py-3 border-l border-slate-700">werken (+te)</th>
                         <th className="px-4 py-3 border-l border-slate-700">wonen (+de)</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr className="border-b border-slate-700/50">
                         <td className="px-4 py-2 font-medium">ik / jij / hij / u</td>
                         <td className="px-4 py-2 border-l border-slate-700 font-bold text-emerald-300">werkte</td>
                         <td className="px-4 py-2 border-l border-slate-700 font-bold text-emerald-300">woonde</td>
                      </tr>
                      <tr className="bg-slate-800/20">
                         <td className="px-4 py-2 font-medium">wij / jullie / zij</td>
                         <td className="px-4 py-2 border-l border-slate-700 font-bold text-emerald-400">werkten</td>
                         <td className="px-4 py-2 border-l border-slate-700 font-bold text-emerald-400">woonden</td>
                      </tr>
                   </tbody>
                </table>
             </div>

             {/* Modale Werkwoorden - Onregelmatig */}
             <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm h-fit">
                <table className="w-full text-[11px] sm:text-xs text-left text-slate-300">
                   <thead className="text-[10px] uppercase bg-slate-800 text-brand-400">
                      <tr>
                         <th className="px-2 py-2" colSpan="6">Modale Werkwoorden (Onregelmatig)</th>
                      </tr>
                      <tr>
                         <th className="px-2 py-2 border-t border-slate-700"></th>
                         <th className="px-2 py-2 border-t border-l border-slate-700">mogen</th>
                         <th className="px-2 py-2 border-t border-l border-slate-700">willen</th>
                         <th className="px-2 py-2 border-t border-l border-slate-700">moeten</th>
                         <th className="px-2 py-2 border-t border-l border-slate-700">kunnen</th>
                         <th className="px-2 py-2 border-t border-l border-slate-700">zullen</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                         <td className="px-2 py-2 font-bold text-white">ik / jij / hij</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-300">mocht</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-300">wilde / wou</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-300">moest</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-300">kon</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-300">zou</td>
                      </tr>
                      <tr className="bg-slate-800/20 hover:bg-slate-800/30">
                         <td className="px-2 py-2 font-bold text-white">wij / jullie / zij</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-400">mochten</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-400">wilden</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-400">moesten</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-400">konden</td>
                         <td className="px-2 py-2 border-l border-slate-700 text-amber-400">zouden</td>
                      </tr>
                   </tbody>
                </table>
             </div>
           </div>

           <div className="bg-indigo-900/20 border border-indigo-700/50 p-4 rounded-xl shadow-inner mt-4">
             <h4 className="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2">
               <i className="fa-solid fa-code-compare"></i> Perfectum vs Imperfectum (Kullanım Farkı)
             </h4>
             <ul className="text-indigo-200/90 text-sm leading-relaxed space-y-3 list-disc list-inside">
               <li>
                 <strong className="text-white">Perfectum (Afgesloten zaken):</strong> {isTr ? "Tamamlanmış, olup bitmiş tekil olaylar için." : "For completed actions."}
                 <br/><span className="italic ml-5 text-indigo-300/80">Wat heb je zaterdag gedaan? Ik heb lang geslapen. We zijn naar de markt geweest...</span>
               </li>
               <li>
                 <strong className="text-white">Imperfectum (Beschrijvingen):</strong> {isTr ? "Arka plan bilgisi, tasvirler ve devamlılığı olan durumlar için." : "For background information and descriptions."}
                 <br/><span className="italic ml-5 text-indigo-300/80">Waar ging de film over? Het was een prachtige film. Hij ging over een vrouw...</span>
               </li>
             </ul>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "verbs_special",
    tags: ["separable_verbs", "reflexive_verbs"],
    titleTr: "Ayrılabilen ve Dönüşlü Fiiller (Separable & Reflexive)",
    titleEn: "Separable & Reflexive Verbs",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Scheidbare werkwoorden */}
        <div>
           <h4 className="font-bold text-lg text-brand-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrows-split-up-and-left"></i> {isTr ? "1. Ayrılabilen Fiiller (Scheidbare werkwoorden)" : "1. Separable Verbs (Scheidbare werkwoorden)"}
           </h4>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             {isTr 
               ? "Ayrılabilen fiiller (örn: afrekenen, meenemen), cümlede kullanıldıkları zamana göre iki parçaya ayrılırlar." 
               : "Separable verbs (e.g., afrekenen, meenemen) split into two parts depending on the tense used in the sentence."}
           </p>

           <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-white mb-2"><span className="text-brand-400 mr-2">■</span> Presens & Imperfectum</h5>
                 <p className="text-sm text-slate-300 mb-2">
                   {isTr ? "Şimdiki zaman ve imperfectum'da, fiilin ilk parçası (prefix) cümlenin EN SONUNA gider." : "In present and imperfectum, the first part (prefix) goes to the END of the sentence."}
                 </p>
                 <div className="text-sm font-mono bg-slate-950/40 p-3 rounded-lg text-brand-200 border border-brand-900/30">
                    <span className="text-slate-400 text-xs block mb-1">afrekenen (hesap ödemek)</span>
                    We <strong className="text-brand-400">rekenen</strong> het eten <strong className="text-brand-400">af</strong>. <br/>
                    We <strong className="text-brand-400">rekenden</strong> het eten <strong className="text-brand-400">af</strong>.
                 </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-white mb-2"><span className="text-brand-400 mr-2">■</span> Perfectum</h5>
                 <p className="text-sm text-slate-300 mb-2">
                   {isTr ? "Perfectum'da, 'ge-' eki fiilin iki parçasının ARASINA girer ve fiil bitişik yazılıp sona gider." : "In perfectum, '-ge-' comes BETWEEN the two parts of the participium. It is written as one word at the end."}
                 </p>
                 <div className="text-sm font-mono bg-slate-950/40 p-3 rounded-lg text-brand-200 border border-brand-900/30">
                    We hebben het eten <strong className="text-brand-400">afgerekend</strong>. (af + ge + rekend)
                 </div>
              </div>
           </div>
        </div>

        {/* Reflexieve werkwoorden */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-purple-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrows-rotate"></i> {isTr ? "2. Dönüşlü Fiiller (Reflexieve werkwoorden)" : "2. Reflexive Verbs (Reflexieve werkwoorden)"}
           </h4>
           <p className="text-slate-300 text-sm mb-4">
             {isTr 
               ? "Eylemi yapanın aynı zamanda eylemden etkilendiği fiillerdir (örn: zich vergissen - yanılmak, zich wassen - yıkanmak). Her şahsa göre ayrı bir dönüşlü zamir (reflexief pronomen) kullanılır." 
               : "Verbs where the subject and object are the same (e.g., zich wassen). They use a reflexive pronoun."}
           </p>

           <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden shadow-sm mb-4 w-full max-w-md">
              <table className="w-full text-sm text-left text-slate-300">
                 <thead className="text-xs uppercase bg-slate-800 text-slate-400">
                    <tr>
                       <th className="px-4 py-3">Subject</th>
                       <th className="px-4 py-3 border-l border-slate-700 text-purple-400">Reflexief pronomen</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-medium">ik</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">me</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-medium">jij / je</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">je</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-medium">u</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">u (of zich)*</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                       <td className="px-4 py-2 font-medium">hij, zij / ze, het</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">zich</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                       <td className="px-4 py-2 font-medium">wij / we</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">ons</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                       <td className="px-4 py-2 font-medium">jullie</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">je</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 bg-slate-800/20">
                       <td className="px-4 py-2 font-medium">zij / ze</td>
                       <td className="px-4 py-2 border-l border-slate-700 font-bold text-purple-300">zich</td>
                    </tr>
                 </tbody>
              </table>
           </div>

           <div className="bg-purple-900/20 border border-purple-700/50 p-4 rounded-xl shadow-inner space-y-4">
              <div>
                 <h5 className="font-bold text-purple-400 text-sm mb-1">* 'u' Zamiri İçin İstisna</h5>
                 <p className="text-purple-200/90 text-sm leading-relaxed">
                   {isTr 
                     ? "'u' zamiri için genellikle yine 'u' kullanılır (özellikle prepozisyonlardan önce veya devrik cümlelerde). Ancak 'zich' kullanımı da doğrudur." 
                     : "'U' is used more often than 'zich', especially before a preposition or in inversion."}
                   <br/><span className="italic mt-1 block">Vergist <strong className="text-purple-400">u</strong> <strong className="text-purple-400">u</strong> zich niet? (of: Vergist u zich niet?)</span>
                 </p>
              </div>
              <div className="border-t border-purple-800/50 pt-3">
                 <h5 className="font-bold text-emerald-400 text-sm mb-1">Elkaar (Birbirini / Birbirine)</h5>
                 <p className="text-purple-200/90 text-sm leading-relaxed">
                   {isTr 
                     ? "Karşılıklı yapılan eylemlerde (reciprocal) 'elkaar' kullanılır." 
                     : "Use 'elkaar' for reciprocal actions (each other)."}
                   <br/><span className="italic mt-1 block font-mono bg-purple-950/40 p-2 rounded mt-2">
                     We kennen <strong className="text-emerald-400">elkaar</strong> ruim twee jaar.<br/>
                     Zullen we iets met <strong className="text-emerald-400">elkaar</strong> afspreken?
                   </span>
                 </p>
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "future_zullen",
    tags: ["future_tenses", "future_presens", "future_gaan", "zullen", "zullen_proposal", "zullen_promise", "zullen_probability"],
    titleTr: "Gelecek Zaman ve 'Zullen' (Future & Zullen)",
    titleEn: "Future Tense & Zullen",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Futurum (Future Tense) */}
        <div>
           <h4 className="font-bold text-lg text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-forward-fast"></i> {isTr ? "1. Gelecek Zaman (Futurum)" : "1. Future Tense (Futurum)"}
           </h4>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             {isTr 
               ? "Hollandacada gelecekten bahsetmek için duruma göre 3 farklı yapı kullanabilirsiniz:" 
               : "You can use three forms for the future:"}
           </p>

           <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                 <div className="flex-1">
                    <h5 className="font-bold text-white mb-1"><span className="text-emerald-400 mr-2">1.</span> Presens + tijd / periode</h5>
                    <p className="text-sm text-slate-400">{isTr ? "Şimdiki zaman fiili + geleceği gösteren bir zaman zarfı." : "Present tense verb + future time word."}</p>
                 </div>
                 <div className="flex-1 bg-slate-800 p-3 rounded-lg border border-slate-600 font-mono text-sm text-emerald-200">
                    Ik <strong className="text-emerald-400">ben volgend weekend</strong> in Londen.<br/>
                    Hans <strong className="text-emerald-400">komt volgende week</strong> niet.
                 </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                 <div className="flex-1">
                    <h5 className="font-bold text-white mb-1"><span className="text-emerald-400 mr-2">2.</span> gaan + infinitief</h5>
                    <p className="text-sm text-slate-400">{isTr ? "Planlanmış bir niyetten (plan of intentie) bahsederken kullanılır." : "When talking about a plan or intention."}</p>
                 </div>
                 <div className="flex-1 bg-slate-800 p-3 rounded-lg border border-slate-600 font-mono text-sm text-emerald-200">
                    Eva <strong className="text-emerald-400">gaat</strong> een jaar in Engeland <strong className="text-emerald-400">studeren</strong>.<br/>
                    We <strong className="text-emerald-400">gaan</strong> nu even <strong className="text-emerald-400">koffiedrinken</strong>.
                 </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                 <div className="flex-1">
                    <h5 className="font-bold text-white mb-1"><span className="text-emerald-400 mr-2">3.</span> zullen + infinitief</h5>
                    <p className="text-sm text-slate-400">{isTr ? "Eylemin gerçekleşmesi neredeyse kesinse veya resmi bir bağlam (formele context) varsa kullanılır." : "Action is almost certain and it is a formal context."}</p>
                 </div>
                 <div className="flex-1 bg-slate-800 p-3 rounded-lg border border-slate-600 font-mono text-sm text-emerald-200">
                    De koning <strong className="text-emerald-400">zal</strong> de beurs <strong className="text-emerald-400">openen</strong>.<br/>
                    Over enkele ogenblikken <strong className="text-emerald-400">zullen</strong> we <strong className="text-emerald-400">aankomen</strong>.
                 </div>
              </div>
           </div>
        </div>

        {/* Zullen - Other Functions */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-puzzle-piece"></i> {isTr ? "2. 'Zullen' Fiilinin Diğer Kullanımları" : "2. Other Uses of 'Zullen'"}
           </h4>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             {isTr 
               ? "'Zullen' gelecek zaman oluşturmak dışında, çok sık kullanılan iki önemli anlama daha sahiptir:" 
               : "'Zullen' has two other very common uses besides forming the future tense:"}
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-900/10 p-5 rounded-xl border border-amber-700/50 shadow-inner">
                 <h5 className="font-bold text-amber-400 mb-2 flex items-center gap-2"><i className="fa-solid fa-hand-holding-heart"></i> Belofte (Söz / Vaat)</h5>
                 <p className="text-sm text-amber-100/90 mb-3">
                   {isTr ? "Eğer resmi olmayan bir durumda 'zullen' kullanıyorsanız, bu kulağa bir SÖZ VERME (belofte) gibi gelir. Öznesi daima 'ik' veya 'wij/we' olur." : "In informal contexts, it sounds like a promise. The subject is 'ik' or 'wij/we'."}
                 </p>
                 <div className="font-mono text-sm text-amber-300 bg-amber-950/40 p-2 rounded">
                   Ik <strong className="text-amber-400">zal</strong> vanavond eten maken.<br/>
                   We <strong className="text-amber-400">zullen</strong> je helpen.<br/>
                   <span className="text-xs text-amber-200/50 mt-1 block">("Ik beloof dat ik..." anlamı verir)</span>
                 </div>
              </div>

              <div className="bg-sky-900/10 p-5 rounded-xl border border-sky-700/50 shadow-inner">
                 <h5 className="font-bold text-sky-400 mb-2 flex items-center gap-2"><i className="fa-solid fa-cloud-sun"></i> Waarschijnlijkheid (Olasılık)</h5>
                 <p className="text-sm text-sky-100/90 mb-3">
                   {isTr ? "'Zullen' genellikle 'wel' kelimesiyle birlikte kullanılarak güçlü bir ihtimal/olasılık belirtir." : "Often used with the word 'wel' to express probability."}
                 </p>
                 <div className="font-mono text-sm text-sky-300 bg-sky-950/40 p-2 rounded">
                   Paul <strong className="text-sky-400">zal</strong> morgen <strong className="text-sky-400">wel</strong> spierpijn hebben.<br/>
                   Het <strong className="text-sky-400">zal</strong> morgen <strong className="text-sky-400">wel</strong> mooi weer zijn.
                 </div>
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "er_daar_continuous",
    tags: ["er_daar", "continuous"],
    titleTr: "Er/Daar Kullanımı ve Şimdiki Zaman Hikayesi (Er/Daar & Continuous)",
    titleEn: "Er/Daar & Continuous Form",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Er / daar */}
        <div>
           <h4 className="font-bold text-lg text-brand-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-location-dot"></i> 1. Er / Daar
           </h4>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             {isTr 
               ? "Hollandacada 'er' kelimesinin birçok kullanımı vardır. En yaygın iki kullanım şunlardır:" 
               : "'Er' has many uses in Dutch. Here are the two most common situations:"}
           </p>

           <div className="space-y-4">
              <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-brand-300 mb-2 text-base">A. Er + indefiniet subject / getal</h5>
                 <p className="text-sm text-slate-300 mb-3">
                   {isTr ? "Cümlede belirli bir özne (the dog, my sister) YOKSA ve belirsiz bir durumdan veya sayıdan bahsediliyorsa cümlenin başına 'Er' (İngilizcedeki 'There is / There are' gibi) gelir." : "When there is no definite subject, 'Er' stands at the beginning of the sentence (like 'There is/are')."}
                 </p>
                 <div className="text-sm font-mono text-brand-200 bg-slate-950/40 p-3 rounded-lg border border-brand-900/30 leading-relaxed">
                    <strong className="text-brand-400">Er</strong> is geen plaats meer, alles is uitverkocht.<br/>
                    <strong className="text-brand-400">Er</strong> zijn veel problemen met het programma.<br/>
                    <strong className="text-brand-400">Er</strong> zitten vijf studenten in de groep.
                 </div>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-sky-400 mb-2 text-base">B. Er / daar als plaats (Yer bildiren)</h5>
                 <p className="text-sm text-slate-300 mb-3">
                   {isTr ? "'Daar', yere özel bir VURGU (accent) yapar ve cümlenin en başına gelebilir. 'Er' ise yer belirtse bile vurgusuzdur ve cümlenin en başına YER ANLAMIYLA gelemez." : "'Daar' puts emphasis on the place and can stand first in the sentence. 'Er' (as a place) cannot."}
                 </p>
                 <div className="text-sm font-mono text-sky-200 bg-slate-950/40 p-3 rounded-lg border border-sky-900/30 leading-relaxed">
                    Ik ben <strong className="text-sky-400">er</strong> morgenochtend niet. (Orada değilim)<br/>
                    <strong className="text-sky-400">Daar</strong> (in Thailand) is het zes uur later. (ORADA saat altı saat ileride)
                 </div>
              </div>
           </div>
        </div>

        {/* Zijn + aan het + infinitief */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-emerald-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-spinner"></i> {isTr ? "2. Şimdiki Zamanın Sürekliliği (zijn + aan het + infinitief)" : "2. Continuous Form (zijn + aan het + infinitief)"}
           </h4>
           <div className="bg-emerald-900/10 p-5 rounded-xl border border-emerald-700/50 shadow-inner flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                 <p className="text-sm text-emerald-100/90 mb-3 leading-relaxed">
                   {isTr 
                     ? "Tam olarak ŞU ANDA yapılmakta olan, devam eden bir eylemi belirtmek için kullanılır (İngilizcedeki 'I am doing' / Türkçe '-Iyor' anlamı)." 
                     : "With this construction you can say what you are doing at a specific moment (like English Present Continuous)."}
                 </p>
                 <div className="font-bold text-white bg-emerald-950/60 py-2 px-4 rounded-lg border border-emerald-800/50 inline-block mb-3">
                   <span className="text-emerald-400">zijn</span> + <span className="text-amber-400">aan het</span> + <span className="text-sky-400">infinitief</span>
                 </div>
              </div>
              <div className="flex-1 w-full bg-slate-900/60 p-4 rounded-xl border border-slate-700 font-mono text-sm leading-relaxed text-slate-200">
                 <span className="text-slate-400 italic block mb-1">Vraag: Wat doe je? / Wat ben je aan het doen?</span>
                 Ik <strong className="text-emerald-400">ben</strong> <strong className="text-amber-400">aan het</strong> <strong className="text-sky-400">koken</strong>.<br/>
                 We <strong className="text-emerald-400">zijn</strong> <strong className="text-amber-400">aan het</strong> <strong className="text-sky-400">fietsen</strong>.
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "conjunctions_independent",
    tags: ["conjunctions", "independent_pronouns"],
    titleTr: "Bağlaçlar ve Bağımsız İşaret Zamirleri (Conjunctions & Pronouns)",
    titleEn: "Conjunctions & Independent Pronouns",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Conjucties */}
        <div>
           <h4 className="font-bold text-lg text-indigo-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-link"></i> {isTr ? "1. Bağlaçlar (Conjuncties)" : "1. Conjunctions (Conjuncties)"}
           </h4>
           <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 shadow-sm mb-4">
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                <strong className="text-indigo-400">En, of, maar, want</strong> {isTr ? "ve" : "and"} <strong className="text-indigo-400">dus</strong> {isTr ? "iki ana cümleyi (hoofdzin) birbirine bağlar. Bu bağlaçlardan sonra cümle dizilimi (Word Order) DEĞİŞMEZ. Hemen ardından Özne (Subject) + Fiil (Persoonsvorm) gelir." : "are conjunctions that connect two main clauses. The word order does NOT change after them (Subject + Verb follows)."}
              </p>
              
              <ul className="space-y-3 font-mono text-sm text-slate-200">
                <li className="bg-slate-800/80 p-3 rounded-lg border border-slate-600">
                  Ik koop koffie <strong className="text-indigo-400">en</strong> (ik koop) brood.
                </li>
                <li className="bg-slate-800/80 p-3 rounded-lg border border-slate-600">
                  Ik ga op vakantie naar Engeland <strong className="text-indigo-400">of</strong> (ik ga op vakantie) naar Frankrijk.
                </li>
                <li className="bg-slate-800/80 p-3 rounded-lg border border-slate-600">
                  Ik heb niet veel geld <strong className="text-indigo-400">maar</strong> ik ga dit jaar wel op vakantie.
                </li>
                <li className="bg-slate-800/80 p-3 rounded-lg border border-slate-600">
                  Ik ga niet mee naar de bioscoop <strong className="text-indigo-400">want</strong> ik voel me niet lekker.
                </li>
                <li className="bg-slate-800/80 p-3 rounded-lg border border-slate-600">
                  Ik heb zin in koffie <strong className="text-indigo-400">dus</strong> ik ga naar de kantine.
                </li>
              </ul>
           </div>
        </div>

        {/* Demonstratief pronomen - zelfstandig */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-cube"></i> {isTr ? "2. Bağımsız İşaret Zamirleri (Zelfstandig)" : "2. Independent Demonstrative Pronouns"}
           </h4>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             {isTr 
               ? "İşaret zamirlerini (die, dat, dit, deze) ismin önüne koymak yerine tek başlarına bir ismin veya cümlenin yerine (bağımsız) kullanabilirsiniz." 
               : "You can use demonstrative pronouns independently to refer back to a noun, a person, or a whole sentence."}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-amber-400 mb-2 text-base">Die</h5>
                 <ul className="space-y-3 text-sm text-slate-300">
                   <li>
                     <span className="text-xs font-bold text-slate-500 uppercase block mb-1">de-woorden</span>
                     <div className="font-mono text-amber-200">Wat vind je van de kaas? <strong className="text-amber-400">Die</strong> vind ik lekker.</div>
                   </li>
                   <li className="border-t border-slate-700/50 pt-2">
                     <span className="text-xs font-bold text-slate-500 uppercase block mb-1">personen (Kişiler)</span>
                     <div className="font-mono text-amber-200">Waar is tante Lena? <strong className="text-amber-400">Die</strong> moest helaas werken.</div>
                     <div className="font-mono text-amber-200 mt-1">Waar zijn Tom en Marit? <strong className="text-amber-400">Die</strong> zijn naar de beurs.</div>
                   </li>
                 </ul>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-amber-400 mb-2 text-base">Dat</h5>
                 <ul className="space-y-3 text-sm text-slate-300">
                   <li>
                     <span className="text-xs font-bold text-slate-500 uppercase block mb-1">het-woorden</span>
                     <div className="font-mono text-amber-200">We zien zo het Naardermeer. <strong className="text-amber-400">Dat</strong> is prachtig.</div>
                   </li>
                   <li className="border-t border-slate-700/50 pt-2">
                     <span className="text-xs font-bold text-slate-500 uppercase block mb-1">hele zin (Bütün bir Cümle)</span>
                     <div className="font-mono text-amber-200">Je hebt koffie meegenomen? Ja, <strong className="text-amber-400">dat</strong> heb ik gedaan.</div>
                     <div className="font-mono text-amber-200 mt-1">Wanneer maak je je huiswerk? <strong className="text-amber-400">Dat</strong> doe ik vanmiddag.</div>
                   </li>
                 </ul>
              </div>
           </div>

           <div className="bg-sky-900/20 border border-sky-700/50 p-4 rounded-xl shadow-inner mt-4">
              <h5 className="font-bold text-sky-400 mb-1 flex items-center gap-2"><i className="fa-solid fa-hand-sparkles"></i> Presenteren (Sunmak/Tanıtmak)</h5>
              <p className="text-sm text-sky-200/90 mb-2">
                {isTr ? "Bir şeyi veya kişiyi ilk defa sunarken 'dit' veya 'dat' kullanılır. Çoğul olsalar bile!" : "To present something, use 'dit' or 'dat'. Even if it is plural!"}
              </p>
              <div className="font-mono text-sm text-sky-300 bg-sky-950/40 p-2 rounded">
                 <strong className="text-sky-400">Dit</strong> is Katharina, mijn zus. <strong className="text-sky-400">Dit</strong> zijn leuke dvd's.<br/>
                 <strong className="text-sky-400">Dat</strong> is het boek. <strong className="text-sky-400">Dat</strong> zijn mijn docenten Karin en Paul.
              </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "conjunctions_subclauses",
    tags: ["subclauses", "conjunctions", "want_omdat"],
    titleTr: "Yan Cümleler ve Bağlaçlar (Bijzin & Conjuncties)",
    titleEn: "Subclauses & Conjunctions (Bijzin)",
    content: (isTr) => (
      <div className="space-y-6">
        
        {/* Intro - The Golden Rule of Bijzin */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/20 border border-indigo-700/50 p-5 rounded-2xl shadow-inner mb-6">
           <h4 className="text-indigo-400 font-extrabold text-lg mb-3 flex items-center gap-2">
             <i className="fa-solid fa-wand-magic-sparkles"></i> {isTr ? "YAN CÜMLE ALTIN KURALI" : "THE GOLDEN RULE OF SUBCLAUSES"}
           </h4>
           <p className="text-slate-200 text-sm leading-relaxed mb-4 font-medium">
             {isTr 
               ? "Aşağıdaki bağlaçlardan birini kullandığınızda bir 'Yan Cümle' (Bijzin) oluşturursunuz. Yan cümlenin en büyük özelliği, FİİLLERİN TAMAMININ CÜMLENİN EN SONUNA GİTMESİDİR!" 
               : "When you use one of the conjunctions below, you create a subclause (bijzin). The absolute main rule of a subclause is that ALL VERBS MOVE TO THE END of the sentence!"}
           </p>
           
           <div className="flex flex-wrap gap-2 mb-4">
             {['als', 'omdat', 'zodra', 'zodat', 'terwijl', 'hoewel', 'nadat', 'toen', 'voordat'].map(conj => (
               <span key={conj} className="bg-indigo-950/60 text-indigo-300 font-bold border border-indigo-800/50 px-3 py-1 rounded-lg text-sm shadow-sm">
                 {conj}
               </span>
             ))}
           </div>

           <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700 text-sm font-mono text-center shadow-sm">
              <span className="text-slate-400">{isTr ? "Yapı:" : "Structure:"}</span> <span className="text-white">conjunctie + subject + rest + <strong className="text-indigo-400">persoonsvorm (+ andere werkwoorden)</strong></span>
           </div>
        </div>

        {/* Structure 1: Hoofdzin + Bijzin */}
        <div>
           <h4 className="font-bold text-lg text-sky-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrow-right"></i> {isTr ? "1. Ana Cümle + Yan Cümle (Hoofdzin + Bijzin)" : "1. Main Clause + Subclause"}
           </h4>
           <p className="text-slate-300 text-sm mb-3">
             {isTr ? "Ana cümle normal dizilimdedir, bağlaçtan sonraki yan cümlede fiil sona gider." : "The main clause has normal word order, verbs in the subclause go to the end."}
           </p>
           <div className="bg-slate-900/50 rounded-xl border border-slate-700 p-4 font-mono text-sm space-y-3 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span className="text-slate-300">Ik doe de cursus Nederlands</span>
                <span className="text-indigo-400 font-bold">zodat</span>
                <span className="text-slate-300">ik goed op het examen voorbereid <strong className="text-sky-400">ben</strong>.</span>
              </div>
              <div className="border-t border-slate-700/50"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 pt-2">
                <span className="text-slate-300">Ik luister naar muziek</span>
                <span className="text-indigo-400 font-bold">terwijl</span>
                <span className="text-slate-300">ik mijn huiswerk <strong className="text-sky-400">maak</strong>.</span>
              </div>
           </div>
        </div>

        {/* Structure 2: Bijzin + Hoofdzin (Inversie!) */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-purple-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-arrows-turn-to-dots"></i> {isTr ? "2. Yan Cümle + Ana Cümle (INVERSİE!)" : "2. Subclause + Main Clause (INVERSION!)"}
           </h4>
           <p className="text-slate-300 text-sm mb-3">
             {isTr 
               ? "Eğer cümleye yan cümle ile BAŞLARSANIZ, yan cümle bittikten hemen sonra gelen ana cümlede DEVRİK YAPI (Inversie) olmak zorundadır. Yani iki fiil virgül etrafında yan yana gelir!" 
               : "If you START the sentence with the subclause, the main clause that follows MUST have inversion. This means the two verbs will meet around the comma!"}
           </p>
           <div className="bg-purple-900/10 rounded-xl border border-purple-900/30 p-4 font-mono text-sm space-y-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span className="text-indigo-400 font-bold">Nadat</span>
                <span className="text-slate-300">mijn fiets gestolen <strong className="text-sky-400">was</strong>,</span>
                <span className="text-purple-400 font-bold">ben</span>
                <span className="text-slate-300">ik naar de politie gegaan.</span>
              </div>
              <div className="border-t border-purple-900/20"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 pt-2">
                <span className="text-indigo-400 font-bold">Voordat</span>
                <span className="text-slate-300">we naar huis <strong className="text-sky-400">gaan</strong>,</span>
                <span className="text-purple-400 font-bold">wil</span>
                <span className="text-slate-300">ik graag nog iets drinken.</span>
              </div>
           </div>
        </div>

        {/* Want vs Omdat */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-rose-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-code-compare"></i> Want vs Omdat (Çünkü)
           </h4>
           <p className="text-slate-300 text-sm mb-3 leading-relaxed">
             {isTr 
               ? "'Want' ve 'omdat' kelimelerinin ikisi de 'çünkü' demektir. Ancak 'want' sonrasında normal cümle (hoofdzin) gelirken, 'omdat' sonrasında fiiller sona gider (bijzin)." 
               : "Both mean 'because', but their grammar is different. 'Want' is followed by normal word order. 'Omdat' pushes the verbs to the end."}
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-rose-400 mb-2">Want (+ Hoofdzin)</h5>
                 <p className="text-sm font-mono text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-700/50">
                    Ik doe deze cursus <strong className="text-rose-400">want</strong> ik <strong className="text-white">wil</strong> graag Nederlands <strong className="text-white">leren</strong>.
                 </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                 <h5 className="font-bold text-indigo-400 mb-2">Omdat (+ Bijzin)</h5>
                 <p className="text-sm font-mono text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-700/50">
                    Ik doe deze cursus <strong className="text-indigo-400">omdat</strong> ik graag Nederlands <strong className="text-white">wil leren</strong>.
                 </p>
              </div>
           </div>
        </div>

        {/* Multiple verbs at the end */}
        <div className="mt-8">
           <h4 className="font-bold text-lg text-amber-400 mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
             <i className="fa-solid fa-layer-group"></i> {isTr ? "Sonda Birden Fazla Fiil Varsa Ne Olur?" : "Multiple Verbs at the End"}
           </h4>
           
           <div className="space-y-4">
             <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                <p className="text-sm font-bold text-white mb-2">
                  <span className="text-amber-400 mr-2">1.</span> Modaal werkwoord (of gaan) + infinitief
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  {isTr ? "Sıralama: Çekimli modal fiil + Mastar fiil" : "Order: Conjugated modal verb + infinitive."}
                </p>
                <div className="font-mono text-sm text-amber-200 bg-slate-950/40 p-2 rounded">
                  ... als ik je <strong className="text-amber-400">kan helpen</strong>.<br/>
                  ... omdat we <strong className="text-amber-400">moeten wachten</strong>.
                </div>
             </div>

             <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 shadow-sm">
                <p className="text-sm font-bold text-white mb-2">
                  <span className="text-amber-400 mr-2">2.</span> Hebben/Zijn + Participium (3. Hal)
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  {isTr ? "İki sıralama da DOĞRUDUR. İstediğinizi kullanabilirsiniz." : "Both orders are CORRECT. You can choose."}
                </p>
                <div className="font-mono text-sm text-emerald-200 bg-slate-950/40 p-2 rounded">
                  Zodra uw portemonnee <strong className="text-emerald-400">gevonden is</strong>.<br/>
                  Zodra uw portemonnee <strong className="text-emerald-400">is gevonden</strong>.
                </div>
             </div>
           </div>
        </div>

      </div>
    )
  },
  {
    id: "pronouns_summary",
    tags: ["schema_pronomina", "pronouns_object", "pronouns_possessive"],
    titleTr: "Tüm Zamirler Tablosu (Schema Pronomina)",
    titleEn: "All Pronouns Summary (Schema Pronomina)",
    content: (isTr) => (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {isTr 
            ? "Hollandacada kullanılan tüm kişi, nesne, iyelik ve dönüşlü zamirlerin tek bir tabloda özeti. Bu tabloyu referans olarak kullanabilirsiniz." 
            : "A complete summary of all personal, object, possessive, and reflexive pronouns in one table for your reference."}
        </p>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-x-auto shadow-sm">
           <table className="w-full text-sm text-left text-slate-300 min-w-[600px]">
              <thead className="text-[11px] sm:text-xs uppercase bg-slate-800 text-slate-400">
                 <tr>
                    <th className="px-4 py-3 text-white">Subjectvorm <span className="block text-[9px] text-slate-500 font-normal lowercase">(Özne)</span></th>
                    <th className="px-4 py-3 border-l border-slate-700 text-indigo-400">Objectvorm <span className="block text-[9px] text-slate-500 font-normal lowercase">(Nesne - Beni/Bana)</span></th>
                    <th className="px-4 py-3 border-l border-slate-700 text-sky-400">Possessief <span className="block text-[9px] text-slate-500 font-normal lowercase">(İyelik - Benim)</span></th>
                    <th className="px-4 py-3 border-l border-slate-700 text-purple-400">Reflexief <span className="block text-[9px] text-slate-500 font-normal lowercase">(Dönüşlü - Kendimi)</span></th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">ik</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">mij / me</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">mijn</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">me</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">jij / je</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">jou / je</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">jouw / je</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">je</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">u</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">u</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">uw</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">zich, u</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-bold text-white">hij</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">hem</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">zijn</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">zich</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-bold text-white">zij / ze <span className="text-xs font-normal text-slate-500">(tekil)</span></td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">haar</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">haar</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">zich</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 bg-slate-800/20">
                    <td className="px-4 py-3 font-bold text-white">het</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">het</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">zijn</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">zich</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">wij / we</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">ons</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">ons, onze</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">ons</td>
                 </tr>
                 <tr className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">jullie</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">jullie</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">jullie</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">je</td>
                 </tr>
                 <tr className="hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-bold text-white">zij / ze <span className="text-xs font-normal text-slate-500">(çoğul)</span></td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-indigo-300">hen, ze</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-sky-300">hun</td>
                    <td className="px-4 py-3 border-l border-slate-700 font-medium text-purple-300">zich</td>
                 </tr>
              </tbody>
           </table>
        </div>

      </div>
    )
  }
];

export default function Grammar() {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTopic, setActiveTopic] = useState(grammarData[0].id);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <i className="fa-solid fa-book-open-reader text-7xl text-indigo-400"></i>
          </div>
          <h2 className="text-xl font-extrabold text-indigo-400 mb-4 flex items-center gap-3 relative z-10">
             <i className="fa-solid fa-spell-check"></i> 
             {isTr ? 'Gramer Referansı' : 'Grammar Reference'}
          </h2>
          <div className="relative z-10">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isTr ? 'Konu ara...' : 'Search topics...'}
              className="w-full bg-slate-900/80 border border-slate-600 rounded-xl pl-10 pr-3 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 shadow-inner"
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
                     className={`text-left px-5 py-4 text-sm font-semibold transition-colors border-l-4 ${activeTopic === topic.id ? 'bg-slate-700/50 text-indigo-300 border-indigo-500' : 'text-slate-400 border-transparent hover:bg-slate-700/30 hover:text-slate-200'}`}
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
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden h-full">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <i className="fa-solid fa-pen-ruler text-9xl text-indigo-400"></i>
             </div>
             
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-700 pb-4 relative z-10">
               <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                 {isTr ? activeContent.titleTr : activeContent.titleEn}
               </h3>
               
               <button 
                 onClick={() => setIsQuizOpen(true)}
                 className="flex-shrink-0 flex items-center justify-center gap-2 bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-500/50 hover:border-indigo-500 px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm group"
               >
                 <i className="fa-solid fa-dumbbell group-hover:animate-bounce"></i> 
                 {isTr ? 'Çalış & Test Et' : 'Practice'}
               </button>
             </div>
             
             <div className="relative z-10">
                {activeContent.content(isTr)}
             </div>

             {/* QUIZ MODAL ÇAĞRISI (Doğru etiketleri dizi olarak gönderir) */}
             {isQuizOpen && (
               <QuizModule 
                 tags={activeContent.tags} 
                 onClose={() => setIsQuizOpen(false)} 
                 title={isTr ? activeContent.titleTr : activeContent.titleEn}
               />
             )}
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