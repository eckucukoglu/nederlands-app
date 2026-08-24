// src/data/chapters/chapter3.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter3Vocab = [
  { id: "3_1", chapter: 3, nl: "viert (vieren)", en: "is celebrating", example: "Edit viert haar verjaardag." },
  { id: "3_2", chapter: 3, nl: "de verjaardag", en: "birthday", example: "Gefeliciteerd met je verjaardag." },
  { id: "3_3", chapter: 3, nl: "het café", en: "café / pub", example: "Ze zijn in het café." },
  { id: "3_4", chapter: 3, nl: "samen", en: "together", example: "We gaan samen drinken." },
  { id: "3_5", chapter: 3, nl: "gefeliciteerd", en: "happy birthday / congratulations", example: "Gefeliciteerd met je verjaardag!" },
  { id: "3_6", chapter: 3, nl: "dank je wel", en: "thank you", example: "Dank je wel voor het cadeau." },
  { id: "3_7", chapter: 3, nl: "dit is", en: "this is", example: "Dit is mijn broer Andres." },
  { id: "3_8", chapter: 3, nl: "prettig met je kennis te maken", en: "pleased to meet you", example: "Prettig met je kennis te maken, Susy." },
  { id: "3_9", chapter: 3, nl: "kennen (kennen)", en: "know (people)", example: "Hoe kennen jullie elkaar?" },
  { id: "3_10", chapter: 3, nl: "elkaar", en: "one another / each other", example: "Wij kennen elkaar van de cursus." },
  { id: "3_11", chapter: 3, nl: "drinken", en: "drink", example: "Wat willen jullie drinken?" },
  { id: "3_12", chapter: 3, nl: "ik trakteer (trakteren)", en: "it's my treat", example: "Ik trakteer vandaag." },
  { id: "3_13", chapter: 3, nl: "wil graag (graag willen)", en: "would like", example: "Ik wil graag een biertje." },
  { id: "3_14", chapter: 3, nl: "de cola", en: "cola", example: "Mag ik een cola?" },
  { id: "3_15", chapter: 3, nl: "biertje (het bier)", en: "beer", example: "Doe mij maar een biertje." },
  { id: "3_16", chapter: 3, nl: "neem (nemen)", en: "have (take)", example: "Ik neem rode wijn." },
  { id: "3_17", chapter: 3, nl: "rode (rood)", en: "red", example: "Een glas rode wijn." },
  { id: "3_18", chapter: 3, nl: "de wijn", en: "wine", example: "De Spaanse wijn is lekker." },
  { id: "3_19", chapter: 3, nl: "roep (roepen)", en: "call", example: "Ik roep de ober." },
  { id: "3_20", chapter: 3, nl: "de ober", en: "waiter", example: "De ober komt eraan." },
  { id: "3_21", chapter: 3, nl: "mag (mogen)", en: "may / can", example: "Mag ik bestellen?" },
  { id: "3_22", chapter: 3, nl: "bestellen", en: "order", example: "Zullen we nog een keer bestellen?" },
  { id: "3_23", chapter: 3, nl: "alstublieft", en: "please / here you go", example: "Een biertje alstublieft." },
  { id: "3_24", chapter: 3, nl: "Franse (Frans)", en: "French", example: "Een Franse wijn." },
  { id: "3_25", chapter: 3, nl: "Spaanse (Spaans)", en: "Spanish", example: "Doe de Spaanse maar." },
  { id: "3_26", chapter: 3, nl: "Zuid-Afrikaanse", en: "South African", example: "Of een Zuid-Afrikaanse wijn?" },
  { id: "3_27", chapter: 3, nl: "de", en: "the", example: "De ober." },
  { id: "3_28", chapter: 3, nl: "nou", en: "well then", example: "Nou Edit, proost!" },
  { id: "3_29", chapter: 3, nl: "proost", en: "cheers", example: "Proost, op je verjaardag!" },
  { id: "3_30", chapter: 3, nl: "op je verjaardag", en: "to your birthday", example: "Proost, op je verjaardag!" },
  { id: "3_31", chapter: 3, nl: "bedankt", en: "thanks", example: "Bedankt voor het drankje." },
  { id: "3_32", chapter: 3, nl: "het poosje", en: "short while", example: "Een poosje later..." },
  { id: "3_33", chapter: 3, nl: "later (laat)", en: "later", example: "Tot later." },
  { id: "3_34", chapter: 3, nl: "zullen (zullen)", en: "shall", example: "Zullen we bestellen?" },
  { id: "3_35", chapter: 3, nl: "nog een keer", en: "once more", example: "Willen jullie nog een keer?" },
  { id: "3_36", chapter: 3, nl: "dat is", en: "that is", example: "Dat is een goed idee." },
  { id: "3_37", chapter: 3, nl: "goed", en: "good", example: "Goed idee." },
  { id: "3_38", chapter: 3, nl: "het idee", en: "idea", example: "Wat een goed idee." },
  { id: "3_39", chapter: 3, nl: "hetzelfde", en: "the same", example: "Willen jullie hetzelfde?" },
  { id: "3_40", chapter: 3, nl: "ja, graag", en: "yes please", example: "Een biertje? Ja, graag." },
  { id: "3_41", chapter: 3, nl: "dit", en: "this", example: "Dit rondje betaal ik." },
  { id: "3_42", chapter: 3, nl: "het rondje", en: "round (of drinks)", example: "Ik betaal dit rondje." },
  { id: "3_43", chapter: 3, nl: "betaal (betalen)", en: "pay", example: "Ik betaal de rekening." },
  { id: "3_44", chapter: 3, nl: "geef (geven)", en: "give", example: "Geef mij nog maar een glas." },
  { id: "3_45", chapter: 3, nl: "nog maar", en: "another / just another", example: "Doe mij nog maar een cola." },
  { id: "3_46", chapter: 3, nl: "het glas", en: "glass", example: "Een glas wijn." },
  { id: "3_47", chapter: 3, nl: "afrekenen", en: "pay / settle the bill", example: "Ober, mogen we afrekenen?" },
  { id: "3_48", chapter: 3, nl: "alles", en: "everything", example: "Alles samen?" },
  { id: "3_49", chapter: 3, nl: "daarom", en: "that's why", example: "Ik ben jarig, daarom betaal ik." },
  { id: "3_50", chapter: 3, nl: "eerste", en: "first", example: "Het eerste rondje." },
  { id: "3_51", chapter: 3, nl: "tweede", en: "second", example: "Het tweede rondje betaalt hij." }
];

export const chapter3Dialogues = {
  "3.1": [
    { speaker: "Verteller", text: "Edit viert haar verjaardag in het café, samen met haar broer Andres en Susy.", translation: "Edit doğum gününü kafede kardeşi Andres ve Susy ile birlikte kutluyor." },
    { speaker: "Susy", text: "Hoi Edit. Gefeliciteerd met je verjaardag.", translation: "Selam Edit. Doğum günün kutlu olsun." },
    { speaker: "Edit", text: "Dank je wel. Dit is mijn broer Andres.", translation: "Teşekkür ederim. Bu erkek kardeşim Andres." },
    { speaker: "Susy", text: "Dag, ik ben Susy. Prettig met je kennis te maken.", translation: "Merhaba, ben Susy. Tanıştığıma memnun oldum." },
    { speaker: "Andres", text: "Hoi. Hoe kennen jullie elkaar eigenlijk?", translation: "Selam. Siz birbirinizi nereden tanıyorsunuz aslında?" },
    { speaker: "Susy", text: "Van de cursus Nederlands.", translation: "Hollandaca kursundan." },
    { speaker: "Edit", text: "Wat willen jullie drinken? Ik trakteer.", translation: "Ne içmek istersiniz? Ben ısmarlıyorum (Benden)." },
    { speaker: "Andres", text: "Ik wil graag cola.", translation: "Ben bir kola isterim." },
    { speaker: "Susy", text: "Doe mij maar een biertje.", translation: "Bana bir bira lütfen." },
    { speaker: "Edit", text: "Ik neem rode wijn. Ik roep de ober. Mag ik bestellen?", translation: "Ben kırmızı şarap alıyorum. Garsonu çağırıyorum. Sipariş verebilir miyim?" },
    { speaker: "Ober", text: "Zegt u het maar.", translation: "Buyurun söyleyin (Dinliyorum)." },
    { speaker: "Edit", text: "Een cola, een rode wijn en een biertje alstublieft.", translation: "Bir kola, bir kırmızı şarap ve bir bira lütfen." },
    { speaker: "Ober", text: "Een Franse, Spaanse of Zuid-Afrikaanse wijn?", translation: "Fransız, İspanyol mu yoksa Güney Afrika şarabı mı?" },
    { speaker: "Edit", text: "Hm, ik weet het niet. Doe de Spaanse maar.", translation: "Hm, bilmiyorum. İspanyol olanı getirin." },
    { speaker: "Susy en Andres", text: "Nou, Edit. Proost. Op je verjaardag!", translation: "Eh, Edit. Şerefe. Doğum gününe!" },
    { speaker: "Edit", text: "Bedankt.", translation: "Teşekkürler." },
    { speaker: "Verteller", text: "(een poosje later)", translation: "(kısa bir süre sonra)" },
    { speaker: "Edit", text: "Zullen we nog een keer bestellen?", translation: "Bir kez daha sipariş verelim mi?" },
    { speaker: "Andres", text: "Dat is een goed idee.", translation: "Bu iyi bir fikir." },
    { speaker: "Edit", text: "Willen jullie hetzelfde?", translation: "Aynısını mı istersiniz?" },
    { speaker: "Susy", text: "Ja, graag.", translation: "Evet, lütfen." },
    { speaker: "Andres", text: "Nu wil ik ook een biertje. Dit rondje betaal ik. Wat wil jij, Edit?", translation: "Şimdi ben de bir bira istiyorum. Bu turu (içkileri) ben ödüyorum. Sen ne istersin Edit?" },
    { speaker: "Edit", text: "Geef mij nog maar een glas rode wijn.", translation: "Bana bir kadeh daha kırmızı şarap verin." },
    { speaker: "Verteller", text: "(nog weer later)", translation: "(yine biraz sonra)" },
    { speaker: "Edit", text: "Ober, mogen we afrekenen?", translation: "Garson, hesabı ödeyebilir miyiz?" },
    { speaker: "Ober", text: "Alles samen?", translation: "Hepsi birlikte mi?" },
    { speaker: "Edit", text: "Nee, ik ben jarig, daarom betaal ik het eerste rondje. Het tweede rondje betaalt hij.", translation: "Hayır, benim doğum günüm, bu yüzden ilk turu ben ödüyorum. İkinci turu o ödüyor." }
  ]
};

export const chapter3Sections = [
  {
    id: "3.1",
    chapter: 3,
    title: "3.1 & 3.2 Dialoog en Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In het café</h3>
          <p>Edit viert haar verjaardag in het café. Ze is samen met haar broer Andres en haar medecursist Susy. (Edit kafede kardeşi ve kurs arkadaşıyla doğum gününü kutluyor).</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Ik trakteer:</strong> Ben ısmarlıyorum.</li>
            <li><strong>Zegt u het maar:</strong> (Garson sipariş alırken) Buyurun, dinliyorum.</li>
            <li><strong>Dit rondje betaal ik:</strong> Bu turu ben ödüyorum.</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Kies het goede vervolg: a of b.",
        isExtra: false,
        questions: [
          { id: "3.1_opd1_1", type: "multiple_choice", question: "1. Edit, Andres en Susy zijn...", options: ["a) in een café.", "b) in de les."], correctAnswer: "a) in een café." },
          { id: "3.1_opd1_2", type: "multiple_choice", question: "2. Andres is...", options: ["a) de zus van Edit.", "b) de broer van Edit."], correctAnswer: "b) de broer van Edit." },
          { id: "3.1_opd1_3", type: "multiple_choice", question: "3. Edit en Susy kennen elkaar...", options: ["a) van de cursus.", "b) van het werk."], correctAnswer: "a) van de cursus." },
          { id: "3.1_opd1_4", type: "multiple_choice", question: "4. Edit is jarig en zij geeft...", options: ["a) een rondje.", "b) een glas wijn."], correctAnswer: "a) een rondje." },
          { id: "3.1_opd1_5", type: "multiple_choice", question: "5. Andres betaalt...", options: ["a) alles.", "b) het tweede rondje."], correctAnswer: "b) het tweede rondje." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Woorden en Begrip",
        isExtra: true,
        questions: [
          { id: "3.1_smart_1", type: "multiple_choice", question: "Waarom betaalt Edit het eerste rondje?", options: ["Omdat Andres geen geld heeft.", "Omdat ze jarig is.", "Omdat ze de ober kent."], correctAnswer: "Omdat ze jarig is." },
          { id: "3.1_smart_2", type: "fill_in", question: "Wat zegt Susy als ze Edit ziet? '________ met je verjaardag!'", correctAnswer: "Gefeliciteerd" },
          ...generateSmartQuestions(3, "Woordenlijst", 5, chapter3Vocab)
        ]
      }
    ]
  },
  {
    id: "3.3",
    chapter: 3,
    title: "3.3 - 3.5 Bestellen, Afrekenen en Bedanken",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☕ Bestellen (Sipariş Vermek)</h3>
          <p>Kafede sipariş verirken kullanılan en yaygın kalıplar şunlardır:</p>
          <ul style={{ marginTop: '10px', color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Mag ik</strong> een biertje? (Bir bira alabilir miyim?)</li>
            <li><strong>Ik wil graag</strong> een cola. (Bir kola istiyorum lütfen.)</li>
            <li>Een biertje, <strong>alstublieft</strong>. (Bir bira lütfen.)</li>
            <li><strong>Voor mij</strong> een biertje. (Benim için bir bira.)</li>
            <li><strong>Doe mij maar</strong> een cola. (Bana bir kola yap/ver.)</li>
            <li><strong>Ik neem</strong> rode wijn. (Kırmızı şarap alıyorum.)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💳 Afrekenen (Hesap Ödemek)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
              <li><strong>Mag ik de rekening (alstublieft)?</strong> (Hesabı alabilir miyim?)</li>
              <li><strong>Ik wil graag afrekenen / betalen.</strong> (Ödeme yapmak istiyorum.)</li>
              <li><strong>Mogen / Kunnen we betalen / afrekenen?</strong> (Hesabı ödeyebilir miyiz?)</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🙏 Bedanken (Teşekkür Etmek)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>dank je</li>
              <li>dank je wel</li>
              <li>dank u (wel) - Resmi (Formeel)</li>
              <li>bedankt</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: De tekst compleet maken. Vul de zinnen in.",
        isExtra: false,
        questions: [
          { id: "3.3_opd4_1", type: "fill_in", question: "Henk: Wat willen jullie ________? (içmek)", correctAnswer: "drinken" },
          { id: "3.3_opd4_2", type: "fill_in", question: "Raiza: Ik ________ cola. (alıyorum)", correctAnswer: "neem" },
          { id: "3.3_opd4_3", type: "fill_in", question: "Henk: En jij, Ella? Wat ________ jij? (istiyorsun)", correctAnswer: "wil" },
          { id: "3.3_opd4_4", type: "fill_in", question: "Ella: O, ik ________ het niet. Ik neem ook wijn. Of koffie? Ja, ik ________ koffie. (bilmiyorum / istiyorum)", correctAnswer: "weet, wil graag" },
          { id: "3.3_opd4_5", type: "fill_in", question: "Raiza: Daar is de ober. Meneer! Kunnen wij ________? (sipariş vermek)", correctAnswer: "bestellen" },
          { id: "3.3_opd4_6", type: "fill_in", question: "Henk: Een biertje, een ________ en ________. (kola / kırmızı şarap)", correctAnswer: "cola, een rode wijn" },
          { id: "3.3_opd4_7", type: "fill_in", question: "Raiza: Hoe laat is het? Henk: Het is ________. (11.00)", correctAnswer: "elf uur" },
          { id: "3.3_opd4_8", type: "fill_in", question: "Ella: Ik ________. (ödüyorum)", correctAnswer: "betaal" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Bestellen & Afrekenen",
        isExtra: true,
        questions: [
          { id: "3.3_smart_1", type: "multiple_choice", question: "Welke zin gebruik je als je wilt betalen?", options: ["Mag ik bestellen?", "Zegt u het maar.", "Mag ik de rekening?"], correctAnswer: "Mag ik de rekening?" },
          { id: "3.3_smart_2", type: "fill_in", question: "Vertaal: 'Benim için bir kola lütfen.' -> ________ mij een cola, alstublieft.", correctAnswer: "Voor" }
        ]
      }
    ]
  },
  {
    id: "3.6",
    chapter: 3,
    title: "3.6 Artikel (Definiet en Indefiniet)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📚 Artikel (Belirli ve Belirsiz Harfi Tarifler)</h3>
          <p className="text-sm text-slate-300">İngilizcedeki 'the' kelimesinin Hollandacada iki karşılığı vardır: <strong>de</strong> ve <strong>het</strong> (Definiet). İngilizcedeki 'a / an' kelimesinin karşılığı ise <strong>een</strong> (Indefiniet)'dir.</p>
          
          <table style={{ width: '100%', marginTop: '15px' }}>
            <thead><tr><th>Type</th><th>Definiet (Belirli - The)</th><th>Indefiniet (Belirsiz - A/An)</th></tr></thead>
            <tbody>
              <tr><td><strong>de-woord</strong></td><td>de cursus</td><td>een cursus</td></tr>
              <tr><td><strong>het-woord</strong></td><td>het café</td><td>een café</td></tr>
            </tbody>
          </table>

          <div className="bg-amber-900/30 p-4 rounded-xl mt-5 border border-amber-500/50">
            <h4 className="text-amber-300 font-bold mb-2">💡 ON-CLASS İPUÇLARI (Kesin Kurallar!):</h4>
            <ul className="text-sm text-amber-100 space-y-2 list-disc pl-5">
              <li><strong>Diminutief (Küçültme Ekleri):</strong> Sonuna <em>-je, -tje, -pje</em> alan TÜM kelimeler istisnasız <strong>"het"</strong> artikeli alır!<br/>
              <em>(het rondje, het biertje, het kopje, het sapje)</em></li>
              <li><strong>Pluralis (Çoğullar):</strong> Çoğul olan TÜM kelimeler istisnasız <strong>"de"</strong> artikeli alır! Hatta kelime normalde 'het' olsa bile çoğul olunca 'de' olur.<br/>
              <em>(de cursussen, de rondjes, de mannen, de biertjes)</em></li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 5: Kies bij elk woord het goede artikel: de of het.",
        isExtra: false,
        questions: [
          { id: "3.6_opd5_1", type: "multiple_choice", question: "adres", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_2", type: "multiple_choice", question: "broer", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_3", type: "multiple_choice", question: "café", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_4", type: "multiple_choice", question: "cursus", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_5", type: "multiple_choice", question: "rondje (let op: diminutief!)", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_6", type: "multiple_choice", question: "foto", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_7", type: "multiple_choice", question: "gezin", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_8", type: "multiple_choice", question: "haar", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_9", type: "multiple_choice", question: "zomer", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_10", type: "multiple_choice", question: "kantine", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_11", type: "multiple_choice", question: "koffie", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_12", type: "multiple_choice", question: "biertje (let op: diminutief!)", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_13", type: "multiple_choice", question: "zus", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_14", type: "multiple_choice", question: "seizoen", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_15", type: "multiple_choice", question: "maand", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_16", type: "multiple_choice", question: "land", options: ["de", "het"], correctAnswer: "het" },
          { id: "3.6_opd5_17", type: "multiple_choice", question: "pauze", options: ["de", "het"], correctAnswer: "de" },
          { id: "3.6_opd5_18", type: "multiple_choice", question: "tekst", options: ["de", "het"], correctAnswer: "de" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Pluralis en Diminutief",
        isExtra: true,
        questions: [
          { id: "3.6_smart_1", type: "multiple_choice", question: "Wat is het artikel voor 'biertjes' (meervoud / plural)?", options: ["het", "de", "een"], correctAnswer: "de" },
          { id: "3.6_smart_2", type: "multiple_choice", question: "Het woord is 'wijntje' (diminutief). Wat is het artikel?", options: ["de", "het", "een"], correctAnswer: "het" },
          { id: "3.6_smart_3", type: "multiple_choice", question: "Wat is de regel voor meervoud (plural) woorden in het Nederlands?", options: ["Ze krijgen altijd 'het'.", "Ze krijgen altijd 'de'.", "Het hangt af van het woord."], correctAnswer: "Ze krijgen altijd 'de'." }
        ]
      }
    ]
  },
  {
    id: "3.7",
    chapter: 3,
    title: "3.7 Hoofdzin met inversie (Devrik Cümle)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>🔄 Hoofdzin met inversie (Tersine Çevirme Kuralı)</h3>
          <p className="text-sm text-slate-300 mb-3">Normal bir Hollandaca cümlesi <strong>Özne (Subject) + Fiil (Verb)</strong> ile başlar.</p>
          <p className="text-sm text-slate-300 italic">"<strong>Ik</strong> (özne) <strong>ga</strong> (fiil) naar het park."</p>

          <div className="bg-rose-900/30 p-4 rounded-xl mt-4 border border-rose-500/50">
            <h4 className="text-rose-300 font-bold mb-2">⚠️ ALTIN KURAL (Inversie):</h4>
            <p className="text-sm text-rose-100">Eğer cümleye ÖZNE DIŞINDA bir kelimeyle (Örneğin zaman veya yer zarfıyla) başlarsanız, <strong>Fiil ve Özne yer değiştirir!</strong> Fiil her zaman 2. sırada kalmak zorundadır.</p>
            <p className="text-sm italic mt-3 font-semibold text-white">Vandaag (Zaman) + ga (Fiil) + ik (Özne) + naar het park.</p>
            <p className="text-sm italic text-slate-300 mt-1">"Vandaag ik ga" KESİNLİKLE YANLIŞTIR!</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Lees de zin, maar begin met het blauwe deel. (Cümleyi baştaki kelimeyle yeniden yazıp Inversie yapın!)",
        isExtra: false,
        questions: [
          { id: "3.7_opd6_1", type: "fill_in", question: "Joyce is donderdag jarig. (Begin met: Donderdag...)", correctAnswer: "Donderdag is Joyce jarig." },
          { id: "3.7_opd6_2", type: "fill_in", question: "We drinken koffie in de kantine. (Begin met: In de kantine...)", correctAnswer: "In de kantine drinken we koffie." },
          { id: "3.7_opd6_3", type: "fill_in", question: "Ze zijn op dit moment in Indonesië. (Begin met: Op dit moment...)", correctAnswer: "Op dit moment zijn ze in Indonesië." },
          { id: "3.7_opd6_4", type: "fill_in", question: "Ik weet dat niet. (Begin met: Dat...)", correctAnswer: "Dat weet ik niet." },
          { id: "3.7_opd6_5", type: "fill_in", question: "Ze wonen in de winter in Barcelona. (Begin met: In de winter...)", correctAnswer: "In de winter wonen ze in Barcelona." },
          { id: "3.7_opd6_6", type: "fill_in", question: "We gaan na de pauze verder. (Begin met: Na de pauze...)", correctAnswer: "Na de pauze gaan we verder." },
          { id: "3.7_opd6_7", type: "fill_in", question: "Ik heb Susy's adres niet. (Begin met: Susy's adres...)", correctAnswer: "Susy's adres heb ik niet." },
          { id: "3.7_opd6_8", type: "fill_in", question: "We spreken later over de tekst. (Begin met: Later...)", correctAnswer: "Later spreken we over de tekst." },
          { id: "3.7_opd6_9", type: "fill_in", question: "Ik neem nu ook wijn. (Begin met: Nu...)", correctAnswer: "Nu neem ik ook wijn." },
          { id: "3.7_opd6_10", type: "fill_in", question: "Eddy geeft vandaag les. (Begin met: Vandaag...)", correctAnswer: "Vandaag geeft Eddy les." },
          { id: "3.7_opd6_11", type: "fill_in", question: "We beginnen morgen met tekst 3. (Begin met: Morgen...)", correctAnswer: "Morgen beginnen we met tekst 3." },
          { id: "3.7_opd6_12", type: "fill_in", question: "De tekst begint op bladzijde 2. (Begin met: Op bladzijde 2...)", correctAnswer: "Op bladzijde 2 begint de tekst." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Inversie Test",
        isExtra: true,
        questions: [
          { id: "3.7_smart_1", type: "multiple_choice", question: "Welke zin is correct?", options: ["Morgen ik wil een biertje.", "Morgen wil ik een biertje.", "Ik morgen wil een biertje."], correctAnswer: "Morgen wil ik een biertje." },
          { id: "3.7_smart_2", type: "fill_in", question: "Maak een zin met inversie: Ik koop vandaag een appel. -> Vandaag ________ ik een appel.", correctAnswer: "koop" },
          { id: "3.7_smart_3", type: "multiple_choice", question: "Welke regel is belangrijk bij inversie in een hoofdzin?", options: ["Het werkwoord (verb) staat altijd op de tweede plaats.", "Het subject (özne) staat altijd op de eerste plaats.", "Er is geen regel."], correctAnswer: "Het werkwoord (verb) staat altijd op de tweede plaats." }
        ]
      }
    ]
  },
  {
    id: "3.8",
    chapter: 3,
    title: "3.8 Rangtelwoorden (Sıra Sayıları)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🔢 Rangtelwoorden (Birinci, İkinci, Üçüncü...)</h3>
          <p className="text-sm text-slate-300">Hollandacada sıra sayıları genellikle sayının sonuna <strong>-de</strong> veya <strong>-ste</strong> eklenerek oluşturulur. "1." ve "3." düzensizdir.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm text-slate-200">
            <div>1e <strong>eerste</strong><br/>2e <strong>tweede</strong><br/>3e <strong>derde</strong><br/>4e vier<strong>de</strong><br/>5e vijf<strong>de</strong></div>
            <div>6e zes<strong>de</strong><br/>7e zeven<strong>de</strong><br/>8e acht<strong>ste</strong><br/>9e negen<strong>de</strong><br/>10e tien<strong>de</strong></div>
            <div>11e elf<strong>de</strong><br/>12e twaalf<strong>de</strong><br/>13e dertien<strong>de</strong><br/>14e veertien<strong>de</strong><br/>19e negentien<strong>de</strong></div>
            <div>20e twintig<strong>ste</strong><br/>21e eenentwintig<strong>ste</strong><br/>100e honderd<strong>ste</strong></div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Beantwoord de vragen met rangtelwoorden.",
        isExtra: false,
        questions: [
          { id: "3.8_opd7_1", type: "multiple_choice", question: "Welke dag van de week is maandag?", options: ["De eerste dag.", "De tweede dag.", "De derde dag."], correctAnswer: "De eerste dag." },
          { id: "3.8_opd7_2", type: "multiple_choice", question: "Welke maand van het jaar is juli?", options: ["De zesde maand.", "De zevende maand.", "De achtste maand."], correctAnswer: "De zevende maand." },
          { id: "3.8_opd7_3", type: "multiple_choice", question: "Welke letter van het alfabet is de d?", options: ["De derde letter.", "De vierde letter.", "De vijfde letter."], correctAnswer: "De vierde letter." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Rangtelwoorden Test",
        isExtra: true,
        questions: [
          { id: "3.8_smart_1", type: "fill_in", question: "Schrijf '3e' als woord:", correctAnswer: "derde" },
          { id: "3.8_smart_2", type: "fill_in", question: "Schrijf '8e' als woord:", correctAnswer: "achtste" },
          { id: "3.8_smart_3", type: "multiple_choice", question: "Hoe zeg je 'twentieth' (20.) in het Nederlands?", options: ["twintigste", "twintigde", "tweede"], correctAnswer: "twintigste" }
        ]
      }
    ]
  },
  {
    id: "3.9",
    chapter: 3,
    title: "3.9 Tekst & 3.10 Uitspraak",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Op het terras</h3>
          <p className="text-sm text-slate-200 italic p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
            "Bij goed weer kun je op dit terras zitten. Je drinkt dan buiten een lekker kopje koffie, een biertje of cola. In de zomer kijk je naar de boten in het water."
          </p>
          <p className="text-xs text-slate-400 mt-2"><em>(Opdracht 10: Welke foto hoort bij deze tekst? Antwoord: De foto met een terras bij het water en boten - Foto C).</em></p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Woordaccent en o - oo</h3>
          <p className="text-sm text-slate-300"><strong>Woordaccent:</strong> Hollandacada her kelimenin vurgulu bir hecesi (klemtoon) vardır. (Örn: voor-<strong>naam</strong>, <strong>do</strong>-cent, Ne-der-<strong>lands</strong>).</p>
          <hr className="my-3 border-rose-500/30"/>
          <p className="text-sm text-slate-300"><strong>Vocalen (o vs oo):</strong> Kısa 'o' (örn: donderdag, donker, stoppen) ile uzun 'oo' (örn: voor, ook, woon, zomer) sesleri Hollandacada anlamı tamamen değiştirebilir. (Örn: bot = kemik, boot = tekne).</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Uitspraak Test: Korte 'o' of Lange 'oo'?",
        isExtra: true,
        questions: [
          { id: "3.10_smart_1", type: "multiple_choice", question: "Welk woord heeft een LANGE 'oo' klank?", options: ["donker", "stoppen", "zomer"], correctAnswer: "zomer" },
          { id: "3.10_smart_2", type: "multiple_choice", question: "Welk woord heeft een KORTE 'o' klank?", options: ["woon", "koffie", "ook"], correctAnswer: "koffie" },
          { id: "3.10_smart_3", type: "multiple_choice", question: "Waar ligt het accent (klemtoon) in het woord 'Nederlands'?", options: ["Ne-der-lands", "Ne-der-lands (op 'lands')", "Ne-der-lands (op 'Ne')"], correctAnswer: "Ne-der-lands (op 'Ne')" }
        ]
      }
    ]
  },
  {
    id: "On-Class-3",
    chapter: 3,
    title: "On-Class Extra",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Extra Grammatica & Zinnen</h3>
          
          <h4 style={{ color: '#a78bfa' }}>'Wat voor' (Ne tür / Ne çeşit)</h4>
          <p className="text-sm text-slate-300"><strong>Wat voor</strong> wijn wil Edit? ➔ Edit wil rode wijn. (Ne tür şarap istiyor?)</p>

          <h4 style={{ color: '#f472b6', marginTop: '15px' }}>Familie Constructies (Tamlamalar)</h4>
          <p className="text-sm text-slate-300">İngilizcedeki 's takısı (Edit's brother) Hollandacada da vardır ama genellikle <strong>'van'</strong> (of) kullanılır.<br/>
          <em>de broer <strong>van</strong> mijn zussen</em> (kız kardeşlerimin abisi).</p>
          
          <h4 style={{ color: '#38bdf8', marginTop: '15px' }}>Bestellen (Sipariş Alternatifleri)</h4>
          <ul className="text-sm text-slate-300 list-disc pl-5">
            <li>Ik wil graag een cola.</li>
            <li>Een biertje, alstublieft.</li>
            <li>Voor mij een sapje (juice).</li>
            <li>Doe mij maar een sinaasappelsap (orange juice).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen",
        isExtra: true,
        questions: [
          { id: "3_onclass_1", type: "multiple_choice", question: "Vertaal: 'What kind of wine?'", options: ["Welke wijn?", "Wat voor wijn?", "Waarom wijn?"], correctAnswer: "Wat voor wijn?" },
          { id: "3_onclass_2", type: "multiple_choice", question: "Hoe zeg je 'The brother of my sisters' in het Nederlands?", options: ["Mijn zussen broer", "De broer van mijn zussen", "De zussen van mijn broer"], correctAnswer: "De broer van mijn zussen" },
          { id: "3_onclass_3", type: "fill_in", question: "Vertaal de bestelling: 'Bana bir portakal suyu (ver)'. -> ________ mij maar een sinaasappelsap.", correctAnswer: "Doe" }
        ]
      }
    ]
  }
];