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
    { speaker: "Verteller", text: "Edit viert haar verjaardag in het café, samen met haar broer Andres en Susy.", translation: { tr: "Edit doğum gününü kafede kardeşi Andres ve Susy ile birlikte kutluyor.", en: "Edit celebrates her birthday in the café, together with her brother Andres and Susy." } },
    { speaker: "Susy", text: "Hoi Edit. Gefeliciteerd met je verjaardag.", translation: { tr: "Selam Edit. Doğum günün kutlu olsun.", en: "Hi Edit. Happy birthday." } },
    { speaker: "Edit", text: "Dank je wel. Dit is mijn broer Andres.", translation: { tr: "Teşekkür ederim. Bu erkek kardeşim Andres.", en: "Thank you. This is my brother Andres." } },
    { speaker: "Susy", text: "Dag, ik ben Susy. Prettig met je kennis te maken.", translation: { tr: "Merhaba, ben Susy. Tanıştığıma memnun oldum.", en: "Hello, I am Susy. Pleased to meet you." } },
    { speaker: "Andres", text: "Hoi. Hoe kennen jullie elkaar eigenlijk?", translation: { tr: "Selam. Siz birbirinizi nereden tanıyorsunuz aslında?", en: "Hi. How do you actually know each other?" } },
    { speaker: "Susy", text: "Van de cursus Nederlands.", translation: { tr: "Hollandaca kursundan.", en: "From the Dutch course." } },
    { speaker: "Edit", text: "Wat willen jullie drinken? Ik trakteer.", translation: { tr: "Ne içmek istersiniz? Ben ısmarlıyorum (Benden).", en: "What do you want to drink? It's my treat." } },
    { speaker: "Andres", text: "Ik wil graag cola.", translation: { tr: "Ben bir kola isterim.", en: "I would like a cola." } },
    { speaker: "Susy", text: "Doe mij maar een biertje.", translation: { tr: "Bana bir bira lütfen.", en: "I'll have a beer." } },
    { speaker: "Edit", text: "Ik neem rode wijn. Ik roep de ober. Mag ik bestellen?", translation: { tr: "Ben kırmızı şarap alıyorum. Garsonu çağırıyorum. Sipariş verebilir miyim?", en: "I'll take red wine. I'll call the waiter. Can I order?" } },
    { speaker: "Ober", text: "Zegt u het maar.", translation: { tr: "Buyurun söyleyin (Dinliyorum).", en: "Go ahead and tell me. (I'm listening)." } },
    { speaker: "Edit", text: "Een cola, een rode wijn en een biertje alstublieft.", translation: { tr: "Bir kola, bir kırmızı şarap ve bir bira lütfen.", en: "A cola, a red wine and a beer please." } },
    { speaker: "Ober", text: "Een Franse, Spaanse of Zuid-Afrikaanse wijn?", translation: { tr: "Fransız, İspanyol mu yoksa Güney Afrika şarabı mı?", en: "A French, Spanish or South African wine?" } },
    { speaker: "Edit", text: "Hm, ik weet het niet. Doe de Spaanse maar.", translation: { tr: "Hm, bilmiyorum. İspanyol olanı getirin.", en: "Hm, I don't know. Make it the Spanish one." } },
    { speaker: "Susy en Andres", text: "Nou, Edit. Proost. Op je verjaardag!", translation: { tr: "Eh, Edit. Şerefe. Doğum gününe!", en: "Well, Edit. Cheers. To your birthday!" } },
    { speaker: "Edit", text: "Bedankt.", translation: { tr: "Teşekkürler.", en: "Thanks." } },
    { speaker: "Verteller", text: "(een poosje later)", translation: { tr: "(kısa bir süre sonra)", en: "(a short while later)" } },
    { speaker: "Edit", text: "Zullen we nog een keer bestellen?", translation: { tr: "Bir kez daha sipariş verelim mi?", en: "Shall we order again?" } },
    { speaker: "Andres", text: "Dat is een goed idee.", translation: { tr: "Bu iyi bir fikir.", en: "That is a good idea." } },
    { speaker: "Edit", text: "Willen jullie hetzelfde?", translation: { tr: "Aynısını mı istersiniz?", en: "Do you want the same?" } },
    { speaker: "Susy", text: "Ja, graag.", translation: { tr: "Evet, lütfen.", en: "Yes, please." } },
    { speaker: "Andres", text: "Nu wil ik ook een biertje. Dit rondje betaal ik. Wat wil jij, Edit?", translation: { tr: "Şimdi ben de bir bira istiyorum. Bu turu (içkileri) ben ödüyorum. Sen ne istersin Edit?", en: "Now I also want a beer. I'll pay for this round. What do you want, Edit?" } },
    { speaker: "Edit", text: "Geef mij nog maar een glas rode wijn.", translation: { tr: "Bana bir kadeh daha kırmızı şarap verin.", en: "Just give me another glass of red wine." } },
    { speaker: "Verteller", text: "(nog weer later)", translation: { tr: "(yine biraz sonra)", en: "(again a bit later)" } },
    { speaker: "Edit", text: "Ober, mogen we afrekenen?", translation: { tr: "Garson, hesabı ödeyebilir miyiz?", en: "Waiter, can we pay the bill?" } },
    { speaker: "Ober", text: "Alles samen?", translation: { tr: "Hepsi birlikte mi?", en: "Everything together?" } },
    { speaker: "Edit", text: "Nee, ik ben jarig, daarom betaal ik het eerste rondje. Het tweede rondje betaalt hij.", translation: { tr: "Hayır, benim doğum günüm, bu yüzden ilk turu ben ödüyorum. İkinci turu o ödüyor.", en: "No, it's my birthday, that's why I pay for the first round. He pays for the second round." } }
  ]
};

export const chapter3Sections = [
  {
    id: "3.1",
    chapter: 3,
    title: "3.1 Dialoog",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In het café</h3>
            <p>Edit viert haar verjaardag in het café. Ze is samen met haar broer Andres en haar medecursist Susy. (Edit kafede kardeşi ve kurs arkadaşıyla doğum gününü kutluyor).</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
              <li><strong>Ik trakteer:</strong> Ben ısmarlıyorum.</li>
              <li><strong>Zegt u het maar:</strong> (Garson sipariş alırken) Buyurun, dinliyorum.</li>
              <li><strong>Dit rondje betaal ik:</strong> Bu turu ben ödüyorum.</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: In the café</h3>
            <p>Edit celebrates her birthday in the café. She is together with her brother Andres and her fellow student Susy.</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
              <li><strong>Ik trakteer:</strong> It's my treat / I'm paying.</li>
              <li><strong>Zegt u het maar:</strong> (When a waiter takes an order) Go ahead and tell me / What can I get you?</li>
              <li><strong>Dit rondje betaal ik:</strong> I'm paying for this round.</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Kies het goede vervolg: a of b. (Choose the correct continuation: a or b.)",
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
        instruction: "Slimme Oefeningen (Smart Exercises): Woorden en Begrip",
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
    id: "3.2",
    chapter: 3,
    title: "Vocabulary",
    theory: null,
    exerciseGroups: []
  },
  {
    id: "3.3",
    chapter: 3,
    title: "3.3 Bestellen, Afrekenen en Bedanken",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☕ Bestellen (Ordering)</h3>
              <p>The most common phrases used when ordering in a café are:</p>
              <ul style={{ marginTop: '10px', color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><strong>Mag ik</strong> een biertje? (May I have a beer?)</li>
                <li><strong>Ik wil graag</strong> een cola. (I would like a cola please.)</li>
                <li>Een biertje, <strong>alstublieft</strong>. (A beer please.)</li>
                <li><strong>Voor mij</strong> een biertje. (A beer for me.)</li>
                <li><strong>Doe mij maar</strong> een cola. (I'll have a cola / make it a cola.)</li>
                <li><strong>Ik neem</strong> rode wijn. (I'll take red wine.)</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💳 Afrekenen (Paying the bill)</h3>
                <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li><strong>Mag ik de rekening (alstublieft)?</strong> (May I have the bill please?)</li>
                  <li><strong>Ik wil graag afrekenen / betalen.</strong> (I would like to pay/settle the bill.)</li>
                  <li><strong>Mogen / Kunnen we betalen / afrekenen?</strong> (Can we pay/settle the bill?)</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🙏 Bedanken (Thanking)</h3>
                <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>dank je</li>
                  <li>dank je wel</li>
                  <li>dank u (wel) - Formal</li>
                  <li>bedankt</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: De tekst compleet maken. Vul de zinnen in. (Complete the text. Fill in the sentences.)",
        isExtra: false,
        questions: [
          { id: "3.3_opd4_1", type: "fill_in", question: "Henk: Wat willen jullie ________? (drinken/drink)", correctAnswer: "drinken" },
          { id: "3.3_opd4_2", type: "fill_in", question: "Raiza: Ik ________ cola. (neem/take)", correctAnswer: "neem" },
          { id: "3.3_opd4_3", type: "fill_in", question: "Henk: En jij, Ella? Wat ________ jij? (wil/want)", correctAnswer: "wil" },
          { id: "3.3_opd4_4", type: "fill_in", question: "Ella: O, ik ________ het niet. Ik neem ook wijn. Of koffie? Ja, ik ________ koffie. (weet, wil graag)", correctAnswer: "weet, wil graag" },
          { id: "3.3_opd4_5", type: "fill_in", question: "Raiza: Daar is de ober. Meneer! Kunnen wij ________? (bestellen/order)", correctAnswer: "bestellen" },
          { id: "3.3_opd4_6", type: "fill_in", question: "Henk: Een biertje, een ________ en ________. (cola, een rode wijn)", correctAnswer: "cola, een rode wijn" },
          { id: "3.3_opd4_7", type: "fill_in", question: "Raiza: Hoe laat is het? Henk: Het is ________. (elf uur/11:00)", correctAnswer: "elf uur" },
          { id: "3.3_opd4_8", type: "fill_in", question: "Ella: Ik ________. (betaal/pay)", correctAnswer: "betaal" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Bestellen & Afrekenen",
        isExtra: true,
        questions: [
          { id: "3.3_smart_1", type: "multiple_choice", question: "Welke zin gebruik je als je wilt betalen? (Which sentence do you use when you want to pay?)", options: ["Mag ik bestellen?", "Zegt u het maar.", "Mag ik de rekening?"], correctAnswer: "Mag ik de rekening?" },
          { id: "3.3_smart_2", type: "fill_in", question: "Vertaal (Translate): 'Benim için bir kola lütfen.' (A cola for me please) -> ________ mij een cola, alstublieft.", correctAnswer: "Voor" }
        ]
      }
    ]
  },
  {
    id: "3.4",
    legacyId: "3.6",
    chapter: 3,
    title: "3.4 Artikel (Definiet en Indefiniet)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📚 Artikel (Belirli ve Belirsiz Harfi Tarifler)</h3>
            <p className="text-sm text-slate-300">İngilizcedeki 'the' kelimesinin Hollandacada iki karşılığı vardır: <strong>de</strong> ve <strong>het</strong> (Definiet). İngilizcedeki 'a / an' kelimesinin karşılığı ise <strong>een</strong> (Indefiniet)'dir.</p>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Type</th><th className="text-left">Definiet (Belirli - The)</th><th className="text-left">Indefiniet (Belirsiz - A/An)</th></tr></thead>
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📚 Artikel (Definite and Indefinite Articles)</h3>
            <p className="text-sm text-slate-300">In Dutch, 'the' has two translations: <strong>de</strong> and <strong>het</strong> (Definite). The translation for 'a / an' is <strong>een</strong> (Indefinite).</p>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Type</th><th className="text-left">Definiet (Definite - The)</th><th className="text-left">Indefiniet (Indefinite - A/An)</th></tr></thead>
              <tbody>
                <tr><td><strong>de-woord</strong></td><td>de cursus</td><td>een cursus</td></tr>
                <tr><td><strong>het-woord</strong></td><td>het café</td><td>een café</td></tr>
              </tbody>
            </table>

            <div className="bg-amber-900/30 p-4 rounded-xl mt-5 border border-amber-500/50">
              <h4 className="text-amber-300 font-bold mb-2">💡 ON-CLASS TIPS (Strict Rules!):</h4>
              <ul className="text-sm text-amber-100 space-y-2 list-disc pl-5">
                <li><strong>Diminutief (Diminutives):</strong> ALL words ending in <em>-je, -tje, -pje</em> take the article <strong>"het"</strong> without exception!<br/>
                <em>(het rondje, het biertje, het kopje, het sapje)</em></li>
                <li><strong>Pluralis (Plurals):</strong> ALL plural words take the article <strong>"de"</strong> without exception! Even if the singular word is a 'het' word, the plural becomes 'de'.<br/>
                <em>(de cursussen, de rondjes, de mannen, de biertjes)</em></li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 5: Kies bij elk woord het goede artikel: de of het. (Choose the correct article for each word: de or het.)",
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
        instruction: "Slimme Oefeningen (Smart Exercises): Pluralis en Diminutief",
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
    id: "3.5",
    legacyId: "3.7",
    chapter: 3,
    title: "3.5 Hoofdzin met inversie (Devrik Cümle / Inversion)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>🔄 Hoofdzin met inversie (Rule of Inversion)</h3>
            <p className="text-sm text-slate-300 mb-3">A normal Dutch sentence starts with <strong>Subject + Verb</strong>.</p>
            <p className="text-sm text-slate-300 italic">"<strong>Ik</strong> (subject) <strong>ga</strong> (verb) naar het park."</p>

            <div className="bg-rose-900/30 p-4 rounded-xl mt-4 border border-rose-500/50">
              <h4 className="text-rose-300 font-bold mb-2">⚠️ GOLDEN RULE (Inversie):</h4>
              <p className="text-sm text-rose-100">If you start a sentence with anything OTHER THAN THE SUBJECT (like an adverb of time or place), <strong>the Verb and Subject swap places!</strong> The verb must always remain in the 2nd position.</p>
              <p className="text-sm italic mt-3 font-semibold text-white">Vandaag (Time) + ga (Verb) + ik (Subject) + naar het park.</p>
              <p className="text-sm italic text-slate-300 mt-1">"Vandaag ik ga" is STRICTLY INCORRECT!</p>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Lees de zin, maar begin met het blauwe deel. (Read the sentence, but start with the blue part - Apply inversion!)",
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
        instruction: "Slimme Oefeningen (Smart Exercises): Inversie Test",
        isExtra: true,
        questions: [
          { id: "3.7_smart_1", type: "multiple_choice", question: "Welke zin is correct? (Which sentence is correct?)", options: ["Morgen ik wil een biertje.", "Morgen wil ik een biertje.", "Ik morgen wil een biertje."], correctAnswer: "Morgen wil ik een biertje." },
          { id: "3.7_smart_2", type: "fill_in", question: "Maak een zin met inversie: Ik koop vandaag een appel. -> Vandaag ________ ik een appel.", correctAnswer: "koop" },
          { id: "3.7_smart_3", type: "multiple_choice", question: "Welke regel is belangrijk bij inversie in een hoofdzin? (Which rule is important for inversion?)", options: ["Het werkwoord (verb) staat altijd op de tweede plaats.", "Het subject (özne/subject) staat altijd op de eerste plaats.", "Er is geen regel."], correctAnswer: "Het werkwoord (verb) staat altijd op de tweede plaats." }
        ]
      }
    ]
  },
  {
    id: "3.6",
    legacyId: "3.8",
    chapter: 3,
    title: "3.6 Rangtelwoorden (Sıra Sayıları / Ordinal Numbers)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🔢 Rangtelwoorden (First, Second, Third...)</h3>
            <p className="text-sm text-slate-300">In Dutch, ordinal numbers are usually formed by adding <strong>-de</strong> or <strong>-ste</strong> to the number. "1st" and "3rd" are irregular.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm text-slate-200">
              <div>1e <strong>eerste</strong><br/>2e <strong>tweede</strong><br/>3e <strong>derde</strong><br/>4e vier<strong>de</strong><br/>5e vijf<strong>de</strong></div>
              <div>6e zes<strong>de</strong><br/>7e zeven<strong>de</strong><br/>8e acht<strong>ste</strong><br/>9e negen<strong>de</strong><br/>10e tien<strong>de</strong></div>
              <div>11e elf<strong>de</strong><br/>12e twaalf<strong>de</strong><br/>13e dertien<strong>de</strong><br/>14e veertien<strong>de</strong><br/>19e negentien<strong>de</strong></div>
              <div>20e twintig<strong>ste</strong><br/>21e eenentwintig<strong>ste</strong><br/>100e honderd<strong>ste</strong></div>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Beantwoord de vragen met rangtelwoorden. (Answer the questions using ordinal numbers.)",
        isExtra: false,
        questions: [
          { id: "3.8_opd7_1", type: "multiple_choice", question: "Welke dag van de week is maandag?", options: ["De eerste dag.", "De tweede dag.", "De derde dag."], correctAnswer: "De eerste dag." },
          { id: "3.8_opd7_2", type: "multiple_choice", question: "Welke maand van het jaar is juli?", options: ["De zesde maand.", "De zevende maand.", "De achtste maand."], correctAnswer: "De zevende maand." },
          { id: "3.8_opd7_3", type: "multiple_choice", question: "Welke letter van het alfabet is de d?", options: ["De derde letter.", "De vierde letter.", "De vijfde letter."], correctAnswer: "De vierde letter." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Rangtelwoorden Test",
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
    id: "3.7",
    legacyId: "3.9",
    chapter: 3,
    title: "3.7 Cultuur, Tekst & Uitspraak",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🎉 Nederlandse Cultuur: Trakteren & De Kringverjaardag</h3>
              <p className="text-sm text-slate-300 mb-3">
                Hollanda'da doğum günü kutlamaları ve kafe kültürü hakkında bilmeniz gereken çok önemli iki gelenek:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200">
                <div className="bg-amber-950/30 p-4 rounded-xl border border-amber-500/20">
                  <h4 className="font-bold text-amber-300 mb-2">🍰 Wie jarig is, trakteert! (Doğum günü olan ısmarlar!)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Türkiye'den farklı olarak, Hollanda'da doğum gününüz olduğunda iş arkadaşlarınız veya arkadaşlarınız size hediye/yemek ısmarlamaz; <strong>siz herkese pasta/ikram (gebak/taart) götürürsünüz</strong> veya kafede ilk tur içkileri siz ısmarlarsınız (<em>"een rondje geven"</em>). Buna <strong>trakteren</strong> denir.
                  </p>
                </div>
                <div className="bg-indigo-950/30 p-4 rounded-xl border border-indigo-500/20">
                  <h4 className="font-bold text-indigo-300 mb-2">⭕ De Kringverjaardag (Daire Doğum Günü)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tipik bir Hollanda ev doğum gününde konuklar oturma odasında büyük bir daire şeklinde otururlar. İçeri giren kişi herkesin elini tek tek sıkarak ev sahibini kutlar: <em>"Gefeliciteerd met Jan!"</em> (Jan'ın doğum gününü tebrik ederim!). Kahve eşliğinde tam 1 dilim pasta ikram edilir.
                  </p>
                </div>
              </div>
            </div>

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
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🎉 Dutch Culture: Trakteren & The Circle Birthday</h3>
              <p className="text-sm text-slate-300 mb-3">
                Two essential Dutch cultural traditions regarding birthdays and social gatherings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200">
                <div className="bg-amber-950/30 p-4 rounded-xl border border-amber-500/20">
                  <h4 className="font-bold text-amber-300 mb-2">🍰 The Birthday Person Treats! (Trakteren)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    In the Netherlands, when it is YOUR birthday, <strong>YOU bring cake or pastries to work</strong> or buy the first round of drinks at the cafe (<em>"een rondje geven"</em>). This custom is called <strong>trakteren</strong>.
                  </p>
                </div>
                <div className="bg-indigo-950/30 p-4 rounded-xl border border-indigo-500/20">
                  <h4 className="font-bold text-indigo-300 mb-2">⭕ De Kringverjaardag (The Circle Birthday)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    At a traditional Dutch birthday at home, chairs are arranged in a big circle. When arriving, each guest shakes hands with everyone in the room and congratulates the whole family: <em>"Gefeliciteerd met Jan!"</em> (Congratulations on Jan's birthday!).
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Op het terras (On the terrace)</h3>
              <p className="text-sm text-slate-200 italic p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
                "Bij goed weer kun je op dit terras zitten. Je drinkt dan buiten een lekker kopje koffie, een biertje of cola. In de zomer kijk je naar de boten in het water." (In good weather you can sit on this terrace. You then drink a nice cup of coffee, a beer or cola outside. In the summer you look at the boats in the water.)
              </p>
              <p className="text-xs text-slate-400 mt-2"><em>(Opdracht 10: Welke foto hoort bij deze tekst? Antwoord: De foto met een terras bij het water en boten - Foto C).</em></p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Woordaccent en o - oo (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Woordaccent (Word Stress):</strong> Every word in Dutch has a stressed syllable (klemtoon). (Ex: voor-<strong>naam</strong>, <strong>do</strong>-cent, Ne-der-<strong>lands</strong>).</p>
              <hr className="my-3 border-rose-500/30"/>
              <p className="text-sm text-slate-300"><strong>Vocalen (o vs oo):</strong> The difference between a short 'o' (ex: donderdag, donker, stoppen) and a long 'oo' (ex: voor, ook, woon, zomer) can completely change the meaning of a word in Dutch. (Ex: bot = bone, boot = boat).</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Cultuur & Begrip: Verjaardagstradities in Nederland",
        isExtra: false,
        questions: [
          { id: "3.9_cult_1", type: "multiple_choice", question: "Je bent jarig in Nederland en je gaat naar je werk. Wat is de gewoonte?", options: ["Je collega's kopen een grote lunch voor jou.", "Je neemt zelf taart of gebak mee om te trakteren.", "Je blijft verplicht thuis."], correctAnswer: "Je neemt zelf taart of gebak mee om te trakteren." },
          { id: "3.9_cult_2", type: "multiple_choice", question: "Wat betekent de uitdrukking 'een rondje geven' in een café?", options: ["Een rondje hardlopen om het café.", "Voor iedereen aan tafel een drankje bestellen en betalen.", "De ober een fooi geven."], correctAnswer: "Voor iedereen aan tafel een drankje bestellen en betalen." }
        ]
      },
      {
        instruction: "Uitspraak Test: Korte 'o' of Lange 'oo'? (Short 'o' or Long 'oo'?)",
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
    id: "Reading-3",
    chapter: 3,
    title: {
      tr: "Okuma & Anlama",
      en: "Reading Comprehension"
    },
    readingPassage: {
      title: "Een gezellige verjaardag op het terras",
      level: "Niveau A1 • 18 Zinnen",
      intro: {
        tr: "Aşağıdaki okuma parçasını dikkatlice okuyunuz. Bu parça 3. Bölümde öğrendiğiniz kafe ve sipariş kalıpları (ik trakteer, dit rondje betaal ik, proost), 'de/het' artikelleri, devrik cümle (inversie), sıra sayıları (eerste, tweede...) ve içecek çeşitleri kullanılarak bir öğretmen titizliğiyle hazırlanmıştır. Metni dinleyebilir, kelimelerin anlamlarına tıklayarak bakabilir ve alttaki 20 soruluk anlama testini çözebilirsiniz.",
        en: "Read the following reading passage carefully. It incorporates cafe and ordering expressions (ik trakteer, dit rondje betaal ik, proost), definite and indefinite articles (de/het), sentence inversion, ordinal numbers (eerste, tweede...), and beverage vocabulary learned in Chapter 3. Listen to the text, click words to check meanings, and answer the 20 comprehension questions below."
      },
      paragraphs: [
        "Het is een zonnige vrijdagmiddag in Utrecht. De temperatuur is aangenaam en de terrassen bij de oude gracht zitten vol met vrolijke mensen. Edit viert vandaag haar vijfentwintigste verjaardag in café De Dom. Samen met haar broer Andres zit ze aan een ronde tafel buiten op het terras bij het water. Om vier uur komt Susy aanlopen. Susy lacht breed en zegt: \"Hoi Edit, van harte gefeliciteerd met je verjaardag!\" Edit bedankt haar enthousiast en stelt haar broer voor: \"Dank je wel Susy! Dit is mijn broer Andres.\" Susy geeft Andres een hand en zegt beleefd: \"Dag Andres, prettig met je kennis te maken!\"",
        "Andres vraagt nieuwsgierig: \"Hoe kennen jullie elkaar eigenlijk?\" Susy antwoordt met een glimlach: \"Wij kennen elkaar van de cursus Nederlands bij meneer De Vries.\" Dan zegt Edit vrolijk: \"Wat willen jullie drinken vanmiddag? Ik ben vandaag jarig, dus ik trakteer!\" Andres wil graag een koud glas cola met ijs. Susy kiest een lekker vers getapt biertje. Edit besluit zelf een glas rode wijn te nemen. Edit roept de ober en vraagt: \"Pardon meneer, mag ik bestellen?\" De vriendelijke ober knikt en zegt: \"Zegt u het maar. Wilt u een Franse, een Spaanse of een Zuid-Afrikaanse rode wijn?\" Edit kiest de Spaanse wijn.",
        "Kort daarna brengt de ober de drankjes naar de tafel. Susy en Andres heffen hun glazen en roepen luid: \"Nou Edit, proost! Op jouw verjaardag en op een mooi nieuw levensjaar!\" Ze klinken de glazen en genieten van het mooie uitzicht op de boten in het water. Andres vertelt dat dit zijn eerste bezoek aan Utrecht is, maar zijn tweede vakantie in Nederland. Een poosje later zijn alle glazen leeg. Andres zegt direct: \"Zullen we nog een keer bestellen? Dit tweede rondje betaal ik! Edit, wil jij nog hetzelfde?\" Edit antwoordt blij: \"Geef mij nog maar een glas Spaanse rode wijn, dat smaakt heerlijk!\" Susy neemt nog een biertje en Andres kiest nu ook een biertje.",
        "Om half zes roept Edit de ober om af te rekenen: \"Ober, mogen we de rekening alstublieft?\" De ober komt met de bon en vraagt netjes: \"Wilt u alles samen betalen of apart?\" Edit legt rustig uit: \"Apart alstublieft. Ik trakteer op het eerste rondje, daarom betaal ik de eerste bestelling. Het tweede rondje betaalt mijn broer.\" Nadat alles netjes is afgerekend met de pinpas, verlaten de vrienden het terras voor een gezellige wandeling door de historische binnenstad."
      ],
      hints: [
        {
          title: { tr: "Kafe & Sipariş Kalıpları", en: "Cafe & Ordering Expressions" },
          icon: "fa-mug-hot",
          items: [
            { term: "ik trakteer", tr: "ben ısmarlıyorum (benden)", en: "it's my treat / I'm paying" },
            { term: "zegt u het maar", tr: "buyurun, sizi dinliyorum (sipariş alırken)", en: "go ahead / what can I get you" },
            { term: "dit rondje betaal ik", tr: "bu turu (içkileri) ben ödüyorum", en: "I'll pay for this round" },
            { term: "afrekenen", tr: "hesap ödemek", en: "to settle the bill" },
            { term: "proost!", tr: "şerefe!", en: "cheers!" }
          ]
        },
        {
          title: { tr: "Sıra Sayıları (Rangtelwoorden)", en: "Ordinal Numbers" },
          icon: "fa-list-ol",
          items: [
            { term: "het eerste rondje", tr: "ilk tur (1. içkiler)", en: "the first round" },
            { term: "het tweede rondje", tr: "ikinci tur (2. içkiler)", en: "the second round" },
            { term: "de eerste keer", tr: "ilk defa / ilk kez", en: "the first time" },
            { term: "de vijfentwintigste (25ste)", tr: "yirmi beşinci", en: "the twenty-fifth" }
          ]
        },
        {
          title: { tr: "Artikeller & Devrik Cümle", en: "Articles & Inversion" },
          icon: "fa-language",
          items: [
            { term: "de / het / een", tr: "het café, de gracht, het bier, de wijn, het terras", en: "the / a" },
            { term: "inversie (V-S-O)", tr: "Om vier uur komt Susy... / Dit tweede rondje betaal ik.", en: "verb before subject after time/object" }
          ]
        }
      ]
    },
    exerciseGroups: [
      {
        instruction: "Deel 1: Direct Begrip & Gebeurtenissen (1-7: Doğrudan Bilgi ve Olaylar / Direct Facts)",
        isExtra: false,
        questions: [
          {
            id: "reading_3_1",
            type: "multiple_choice",
            question: "Waar viert Edit haar vijfentwintigste verjaardag?",
            options: [
              "In de klas van meneer De Vries",
              "Buiten op het terras van café De Dom bij het water",
              "In een duur restaurant in Amsterdam",
              "Bij haar ouders thuis in Indonesië"
            ],
            correctAnswer: "Buiten op het terras van café De Dom bij het water"
          },
          {
            id: "reading_3_2",
            type: "multiple_choice",
            question: "Wie stelt Edit aan Susy voor als ze aankomt?",
            options: [
              "Haar vader",
              "Haar docent meneer De Vries",
              "Haar broer Andres",
              "De ober van het café"
            ],
            correctAnswer: "Haar broer Andres"
          },
          {
            id: "reading_3_3",
            type: "multiple_choice",
            question: "Hoe kennen Susy en Edit elkaar volgens de tekst?",
            options: [
              "Ze wonen in dezelfde straat in Utrecht.",
              "Ze werken bij hetzelfde internationale bedrijf.",
              "Ze kennen elkaar van de cursus Nederlands.",
              "Ze zijn samen op vakantie geweest in Spanje."
            ],
            correctAnswer: "Ze kennen elkaar van de cursus Nederlands."
          },
          {
            id: "reading_3_4",
            type: "multiple_choice",
            question: "Wat drinken de drie vrienden tijdens het EERSTE rondje?",
            options: [
              "Drie biertjes",
              "Cola voor Andres, bier voor Susy en Spaanse rode wijn voor Edit",
              "Witte wijn voor Edit, thee voor Susy en koffie voor Andres",
              "Drie glazen koud water met citroen"
            ],
            correctAnswer: "Cola voor Andres, bier voor Susy en Spaanse rode wijn voor Edit"
          },
          {
            id: "reading_3_5",
            type: "multiple_choice",
            question: "Welke rode wijn kiest Edit als de ober de opties noemt?",
            options: [
              "De Franse rode wijn",
              "De Zuid-Afrikaanse rode wijn",
              "De Spaanse rode wijn",
              "De Chileense rode wijn"
            ],
            correctAnswer: "De Spaanse rode wijn"
          },
          {
            id: "reading_3_6",
            type: "multiple_choice",
            question: "Wat roepen Susy en Andres als ze klinken met hun glazen?",
            options: [
              "\"Tot ziens en tot morgen!\"",
              "\"Proost! Op jouw verjaardag!\"",
              "\"Smakelijk eten allemaal!\"",
              "\"Prettig met u kennis te maken!\""
            ],
            correctAnswer: "\"Proost! Op jouw verjaardag!\""
          },
          {
            id: "reading_3_7",
            type: "multiple_choice",
            question: "Wat zien de vrienden vanaf het terras bij de oude gracht?",
            options: [
              "Veel auto's en bussen in het verkeer",
              "De boten die over het water varen",
              "Een grote markt met kramen",
              "Het treinstation van Utrecht"
            ],
            correctAnswer: "De boten die over het water varen"
          }
        ]
      },
      {
        instruction: "Deel 2: Rondjes, Tijd & Rangtelwoorden (8-13: Sıra Sayıları ve Hesap / Numbers & Rounds)",
        isExtra: false,
        questions: [
          {
            id: "reading_3_8",
            type: "multiple_choice",
            question: "De hoeveelste verjaardag viert Edit vandaag?",
            options: [
              "Haar twintigste (20ste) verjaardag",
              "Haar vierentwintigste (24ste) verjaardag",
              "Haar vijfentwintigste (25ste) verjaardag",
              "Haar dertigste (30ste) verjaardag"
            ],
            correctAnswer: "Haar vijfentwintigste (25ste) verjaardag"
          },
          {
            id: "reading_3_9",
            type: "multiple_choice",
            question: "Voor de hoeveelste keer bezoekt Andres de stad Utrecht?",
            options: [
              "Het is zijn eerste bezoek aan Utrecht.",
              "Het is zijn tweede bezoek aan Utrecht.",
              "Het is al zijn vijfde bezoek.",
              "Hij woont al tien jaar in Utrecht."
            ],
            correctAnswer: "Het is zijn eerste bezoek aan Utrecht."
          },
          {
            id: "reading_3_10",
            type: "multiple_choice",
            question: "Wie betaalt het TWEEDE rondje drankjes?",
            options: [
              "Susy",
              "Andres",
              "Edit",
              "De ober geeft het gratis"
            ],
            correctAnswer: "Andres"
          },
          {
            id: "reading_3_11",
            type: "multiple_choice",
            question: "Wat drinkt Andres in het tweede rondje (in tegenstelling tot het eerste rondje)?",
            options: [
              "Weer een glas cola",
              "Een glas rode wijn",
              "Een biertje",
              "Een kopje zwarte koffie"
            ],
            correctAnswer: "Een biertje"
          },
          {
            id: "reading_3_12",
            type: "multiple_choice",
            question: "Hoe laat roepen ze de ober om af te rekenen?",
            options: [
              "Om vier uur (16:00)",
              "Om kwart voor vijf (16:45)",
              "Om half zes (17:30)",
              "Om zes uur (18:00)"
            ],
            correctAnswer: "Om half zes (17:30)"
          },
          {
            id: "reading_3_13",
            type: "multiple_choice",
            question: "Hoe betalen de vrienden de rekening bij de ober?",
            options: [
              "Contant met briefgeld",
              "Met de pinpas (pinnen)",
              "Ze betalen niet omdat Edit jarig is",
              "Met een cadeaubon van de universiteit"
            ],
            correctAnswer: "Met de pinpas (pinnen)"
          }
        ]
      },
      {
        instruction: "Deel 3: Taalgebruik, Grammatica & Synthese (14-20: Dilbilgisi ve Anlama / Grammar & Synthesis)",
        isExtra: false,
        questions: [
          {
            id: "reading_3_14",
            type: "multiple_choice",
            question: "Wat betekent de uitdrukking 'Ik trakteer' in het Nederlands?",
            options: [
              "Ik wil graag naar huis.",
              "Ik betaal de kosten / het is mijn traktatie.",
              "Ik lust geen alcohol.",
              "Ik ben te laat voor de afspraak."
            ],
            correctAnswer: "Ik betaal de kosten / het is mijn traktatie."
          },
          {
            id: "reading_3_15",
            type: "multiple_choice",
            question: "Wat zegt een ober vaak in het Nederlands wanneer hij klaar is om je bestelling op te nemen?",
            options: [
              "\"Tot ziens alstublieft.\"",
              "\"Zegt u het maar.\"",
              "\"Geen dank hoor.\"",
              "\"Mag het ietsje meer zijn?\""
            ],
            correctAnswer: "\"Zegt u het maar.\""
          },
          {
            id: "reading_3_16",
            type: "multiple_choice",
            question: "Waarom wil Edit de rekening APART betalen en niet alles samen?",
            options: [
              "Omdat ze ruzie hebben over het geld.",
              "Omdat zij jarig is en daarom alleen het eerste rondje betaalt, en Andres het tweede.",
              "Omdat Susy haar portemonnee is vergeten.",
              "Omdat de ober geen groepstransacties accepteert."
            ],
            correctAnswer: "Omdat zij jarig is en daarom alleen het eerste rondje betaalt, en Andres het tweede."
          },
          {
            id: "reading_3_17",
            type: "multiple_choice",
            question: "Welk lidwoord hoort bij de woorden 'café', 'terras' en 'bier'?",
            options: [
              "Altijd 'de'",
              "Altijd 'het'",
              "Geen lidwoord",
              "'de' voor terras en 'het' voor bier"
            ],
            correctAnswer: "Altijd 'het'"
          },
          {
            id: "reading_3_18",
            type: "multiple_choice",
            question: "Kijk naar de zinsbouw: \"Dit tweede rondje betaal ik.\" Welke grammaticale regel zien we hier?",
            options: [
              "Inversie: het lijdend voorwerp staat voorop, daarom komt het werkwoord (betaal) vóór het onderwerp (ik).",
              "Een ontkenning met 'geen'.",
              "Een vraagzin zonder vraagteken.",
              "Een voltooid deelwoord."
            ],
            correctAnswer: "Inversie: het lijdend voorwerp staat voorop, daarom komt het werkwoord (betaal) vóór het onderwerp (ik)."
          },
          {
            id: "reading_3_19",
            type: "multiple_choice",
            question: "Wat gaan Edit, Andres en Susy doen nadat ze hebben afgerekend?",
            options: [
              "Ze gaan meteen slapen.",
              "Ze gaan naar de bibliotheek om huiswerk te maken.",
              "Ze maken een gezellige wandeling door de historische binnenstad.",
              "Ze nemen de trein terug naar Spanje."
            ],
            correctAnswer: "Ze maken een gezellige wandeling door de historische binnenstad."
          },
          {
            id: "reading_3_20",
            type: "multiple_choice",
            question: "Welke bewering over de tekst is NIET waar (onjuist)?",
            options: [
              "Edit viert haar 25ste verjaardag buiten op een terras.",
              "Andres drinkt in beide rondjes uitsluitend cola met ijs.",
              "Susy drinkt zowel in het eerste als in het tweede rondje bier.",
              "Andres is de broer van Edit."
            ],
            correctAnswer: "Andres drinkt in beide rondjes uitsluitend cola met ijs."
          }
        ]
      }
    ]
  },
{
    id: "On-Class-3",
    chapter: 3,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 2 (Tekrar)</h3>
              <p className="text-sm text-slate-300 mb-2">Önceki derste öğrenilen temel soru ve cevapların tekrarı:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Hoe gaat het met jou?</strong> ➔ Het gaat goed. / Alles goed.</li>
                <li><strong>Heb jij broers of zussen?</strong> ➔ Nee, ik heb geen broers of zussen.</li>
                <li><strong>Wanneer ben jij jarig?</strong> ➔ Ik ben jarig op 13 december.</li>
                <li><strong>Hoe laat is het nu?</strong> ➔ Het is vier uur. / Het is 12 over vier.</li>
                <li><strong>Welk seizoen is het nu?</strong> ➔ Het is zomer.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☕ In het café (Bestellen & Afrekenen)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Handige Zinnen (Kullanışlı Cümleler)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Gefeliciteerd met je verjaardag.</strong> = Happy birthday.</li>
                    <li><strong>Dank je wel.</strong> = Thank you.</li>
                    <li><strong>Zegt u het maar.</strong> = Expression: Go ahead and tell / Buyurun söyleyin.</li>
                    <li><strong>Zullen we nog een keer bestellen?</strong> = Shall we order again? (nog een keer = again)</li>
                    <li><strong>Mogen we afrekenen?</strong> = Can we pay / settle the bill?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Bestellen (Sipariş Vermek)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Ik wil graag cola.</strong> = I would like cola.</li>
                    <li><strong>Doe mij maar een biertje.</strong> = Expression: I'll have a beer.</li>
                    <li><strong>Ik neem rode wijn.</strong> = I get red wine.</li>
                    <li><strong>Mag ik bestellen?</strong> = May I order?</li>
                    <li><strong>Mag ik een cola?</strong> = May I have a cola/coke?</li>
                    <li><strong>Een cola, alstublieft.</strong> = One cola, please.</li>
                    <li><strong>Voor mij een cola.</strong> = One cola for me.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 mt-4 text-sm text-purple-100">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Extra Woorden (Ekstra Kelimeler):</h4>
                <ul className="list-disc pl-5">
                  <li><strong>wat voor:</strong> what kind of (Ne tür/çeşit)</li>
                  <li><strong>hetzelfde:</strong> the same (Aynısı)</li>
                  <li><strong>eigenlijk:</strong> actually / by the way (Aslında)</li>
                  <li><strong>kennis te maken:</strong> to make acquaintance (Tanışmak)</li>
                  <li><strong>aangenaam:</strong> nice to meet you (Memnun oldum)</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📚 Grammatica: Artikel (De / Het)</h3>
              <p className="text-sm text-slate-300 mb-2">İngilizcedeki 'the' kelimesinin Hollandacada iki karşılığı vardır: <strong>de</strong> ve <strong>het</strong>.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Altijd 'HET' (Her Zaman HET)</h4>
                  <p className="text-sm text-emerald-100">Bir nesne küçük olduğunda (diminutive form: -je, -tje, -pje ile bitiyorsa) HER ZAMAN <strong>'het'</strong> artikeli alır.</p>
                  <ul className="text-sm text-white mt-1 list-disc pl-5">
                    <li>het biertje</li>
                    <li>het wijntje</li>
                    <li>het sapje</li>
                    <li>het rondje</li>
                  </ul>
                </div>
                <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Altijd 'DE' (Her Zaman DE)</h4>
                  <p className="text-sm text-emerald-100">Bir kelime çoğul (plural) olduğunda HER ZAMAN <strong>'de'</strong> artikeli alır. Kelime normalde 'het' olsa bile çoğul olunca 'de' olur.</p>
                  <ul className="text-sm text-white mt-1 list-disc pl-5">
                    <li>de mannen</li>
                    <li>de computers</li>
                    <li>de biertjes</li>
                    <li>de zussen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔄 Grammatica: Inversie (Devrik Cümle)</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada cümleye özne (subject) DIŞINDA bir kelimeyle (örneğin zaman veya yer) başladığımızda <strong>inversie</strong> yaparız. Bu durumda <strong>Fiil (Verb) ve Özne (Subject) yer değiştirir.</strong></p>
              
              <div className="bg-amber-900/30 p-4 rounded-xl border border-amber-500/30 mb-4">
                <h4 className="font-bold text-amber-300 text-sm mb-2">Hoe werkt het? (Nasıl çalışır?)</h4>
                <p className="text-sm text-amber-100 mb-2">Özneyi bulmak için: Eylemi/fiili yapan kim? sorusunu sorun (Who does the action?).<br/><em>Ik ga naar het park. ➔ Who goes to the park? ➔ IK!</em></p>
                <ul className="text-sm text-white list-disc pl-5 space-y-2">
                  <li><strong>Normal sentence:</strong> Ik ga naar het park.</li>
                  <li><strong>Inversie (YANLIŞ):</strong> <span className="text-rose-400 line-through">Vandaag ik ga naar het park.</span></li>
                  <li><strong>Inversie (DOĞRU):</strong> <span className="text-emerald-400 font-bold">Vandaag ga ik naar het park.</span></li>
                </ul>
              </div>

              <h4 className="font-bold text-amber-300 text-sm mb-1">Voorbeelden (Örnekler)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li>Today I buy an apple. = <strong>Vandaag koop ik</strong> een appel.</li>
                <li>Tomorrow I want a beer. = <strong>Morgen wil ik</strong> een biertje.</li>
                <li>Next week I drink cola. = <strong>Volgende week drink ik</strong> cola.</li>
                <li>Now I am here. = <strong>Nu ben ik</strong> hier.</li>
                <li>Today I study Dutch. = <strong>Vandaag studeer ik</strong> Nederlands.</li>
                <li>Now I have a dog. = <strong>Nu heb ik</strong> een hond.</li>
                <li>On Monday I go to school. = <strong>Op maandag ga ik</strong> naar school.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Q&A Samenvatting</h3>
              <ul className="text-sm text-slate-200 space-y-1 list-disc pl-5">
                <li><strong>Waar zijn Edit, Andres en Susy?</strong> ➔ Zij zijn in een café.</li>
                <li><strong>Waarom zijn ze in het café?</strong> ➔ Het is de verjaardag van Edit.</li>
                <li><strong>Wie is Andres?</strong> ➔ Andres is de broer van Edit.</li>
                <li><strong>Wat voor wijn wil Edit?</strong> ➔ Edit wil rode wijn. (wat voor = what kind of)</li>
                <li><strong>Wie betaalt het eerste rondje?</strong> ➔ Edit betaalt het eerste rondje.</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 2 (Review)</h3>
              <p className="text-sm text-slate-300 mb-2">Review of basic questions and answers learned in the previous lesson:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Hoe gaat het met jou?</strong> ➔ Het gaat goed. / Alles goed.</li>
                <li><strong>Heb jij broers of zussen?</strong> ➔ Nee, ik heb geen broers of zussen.</li>
                <li><strong>Wanneer ben jij jarig?</strong> ➔ Ik ben jarig op 13 december.</li>
                <li><strong>Hoe laat is het nu?</strong> ➔ Het is vier uur. / Het is 12 over vier.</li>
                <li><strong>Welk seizoen is het nu?</strong> ➔ Het is zomer.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☕ In het café (Ordering & Paying)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Handige Zinnen (Useful Phrases)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Gefeliciteerd met je verjaardag.</strong> = Happy birthday.</li>
                    <li><strong>Dank je wel.</strong> = Thank you.</li>
                    <li><strong>Zegt u het maar.</strong> = Expression: Go ahead and tell / What can I get you?</li>
                    <li><strong>Zullen we nog een keer bestellen?</strong> = Shall we order again?</li>
                    <li><strong>Mogen we afrekenen?</strong> = Can we pay / settle the bill?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Bestellen (Ordering)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Ik wil graag cola.</strong> = I would like cola.</li>
                    <li><strong>Doe mij maar een biertje.</strong> = Expression: I'll have a beer.</li>
                    <li><strong>Ik neem rode wijn.</strong> = I'll get red wine.</li>
                    <li><strong>Mag ik bestellen?</strong> = May I order?</li>
                    <li><strong>Mag ik een cola?</strong> = May I have a cola/coke?</li>
                    <li><strong>Een cola, alstublieft.</strong> = One cola, please.</li>
                    <li><strong>Voor mij een cola.</strong> = One cola for me.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 mt-4 text-sm text-purple-100">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Extra Woorden (Extra Words):</h4>
                <ul className="list-disc pl-5">
                  <li><strong>wat voor:</strong> what kind of</li>
                  <li><strong>hetzelfde:</strong> the same</li>
                  <li><strong>eigenlijk:</strong> actually / by the way</li>
                  <li><strong>kennis te maken:</strong> to make acquaintance</li>
                  <li><strong>aangenaam:</strong> nice to meet you</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📚 Grammatica: Artikel (De / Het)</h3>
              <p className="text-sm text-slate-300 mb-2">In Dutch, 'the' has two translations: <strong>de</strong> and <strong>het</strong>.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Altijd 'HET' (Always HET)</h4>
                  <p className="text-sm text-emerald-100">When an object is small (diminutive form: ending in -je, -tje, -pje), it ALWAYS takes the <strong>'het'</strong> article.</p>
                  <ul className="text-sm text-white mt-1 list-disc pl-5">
                    <li>het biertje</li>
                    <li>het wijntje</li>
                    <li>het sapje</li>
                    <li>het rondje</li>
                  </ul>
                </div>
                <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Altijd 'DE' (Always DE)</h4>
                  <p className="text-sm text-emerald-100">When a word is plural, it ALWAYS takes the <strong>'de'</strong> article. Even if the singular word is a 'het' word, it becomes 'de' when plural.</p>
                  <ul className="text-sm text-white mt-1 list-disc pl-5">
                    <li>de mannen</li>
                    <li>de computers</li>
                    <li>de biertjes</li>
                    <li>de zussen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔄 Grammatica: Inversie (Rule of Inversion)</h3>
              <p className="text-sm text-slate-300 mb-2">In Dutch, when we start a sentence with anything OTHER THAN the subject (like time or place), we use <strong>inversion</strong>. In this case, <strong>the Verb and Subject swap places.</strong></p>
              
              <div className="bg-amber-900/30 p-4 rounded-xl border border-amber-500/30 mb-4">
                <h4 className="font-bold text-amber-300 text-sm mb-2">Hoe werkt het? (How does it work?)</h4>
                <p className="text-sm text-amber-100 mb-2">To find the subject, ask: Who does the action?<br/><em>Ik ga naar het park. ➔ Who goes to the park? ➔ IK!</em></p>
                <ul className="text-sm text-white list-disc pl-5 space-y-2">
                  <li><strong>Normal sentence:</strong> Ik ga naar het park.</li>
                  <li><strong>Inversie (INCORRECT):</strong> <span className="text-rose-400 line-through">Vandaag ik ga naar het park.</span></li>
                  <li><strong>Inversie (CORRECT):</strong> <span className="text-emerald-400 font-bold">Vandaag ga ik naar het park.</span></li>
                </ul>
              </div>

              <h4 className="font-bold text-amber-300 text-sm mb-1">Voorbeelden (Examples)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li>Today I buy an apple. = <strong>Vandaag koop ik</strong> een appel.</li>
                <li>Tomorrow I want a beer. = <strong>Morgen wil ik</strong> een biertje.</li>
                <li>Next week I drink cola. = <strong>Volgende week drink ik</strong> cola.</li>
                <li>Now I am here. = <strong>Nu ben ik</strong> hier.</li>
                <li>Today I study Dutch. = <strong>Vandaag studeer ik</strong> Nederlands.</li>
                <li>Now I have a dog. = <strong>Nu heb ik</strong> een hond.</li>
                <li>On Monday I go to school. = <strong>Op maandag ga ik</strong> naar school.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Q&A Samenvatting (Summary)</h3>
              <ul className="text-sm text-slate-200 space-y-1 list-disc pl-5">
                <li><strong>Waar zijn Edit, Andres en Susy?</strong> ➔ Zij zijn in een café.</li>
                <li><strong>Waarom zijn ze in het café?</strong> ➔ Het is de verjaardag van Edit.</li>
                <li><strong>Wie is Andres?</strong> ➔ Andres is de broer van Edit.</li>
                <li><strong>Wat voor wijn wil Edit?</strong> ➔ Edit wil rode wijn.</li>
                <li><strong>Wie betaalt het eerste rondje?</strong> ➔ Edit betaalt het eerste rondje.</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Repetitie (Tijd & Basisvragen)",
        isExtra: false,
        questions: [
          { id: "3_onclass_1_1", type: "fill_in", question: "Hoe laat is het? Het is 12 ________ vier. (past)", correctAnswer: "over" },
          { id: "3_onclass_1_2", type: "multiple_choice", question: "Welk seizoen is het in juli?", options: ["Het is zomer.", "Het is winter.", "Het is lente."], correctAnswer: "Het is zomer." },
          { id: "3_onclass_1_3", type: "fill_in", question: "Wanneer ben jij ________? (birthday/born)", correctAnswer: "jarig" },
          { id: "3_onclass_1_4", type: "multiple_choice", question: "Heb jij broers of zussen?", options: ["Nee, ik ben jarig op 13 december.", "Nee, ik heb geen broers of zussen.", "Het gaat goed."], correctAnswer: "Nee, ik heb geen broers of zussen." }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Bestellen en Afrekenen (Opdracht 4 Woorden)",
        isExtra: false,
        questions: [
          { id: "3_onclass_2_1", type: "fill_in", question: "Een cola, ________. (please)", correctAnswer: "alstublieft" },
          { id: "3_onclass_2_2", type: "fill_in", question: "Zullen we nog een keer ________? (order)", correctAnswer: "bestellen" },
          { id: "3_onclass_2_3", type: "multiple_choice", question: "Hoe zeg je 'Can we pay the bill?'", options: ["Mogen we bestellen?", "Mogen we afrekenen?", "Mag ik een cola?"], correctAnswer: "Mogen we afrekenen?" },
          { id: "3_onclass_2_4", type: "fill_in", question: "________ mij maar een biertje. (I'll have / make it a...)", correctAnswer: "Doe" },
          { id: "3_onclass_2_5", type: "fill_in", question: "________ mij een sinaasappelsap. (For me)", correctAnswer: "Voor" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Artikel (De of Het? - Opdracht 5)",
        isExtra: true,
        questions: [
          { id: "3_onclass_3_1", type: "multiple_choice", question: "Wat is het juiste artikel voor 'adres'?", options: ["de", "het"], correctAnswer: "het" },
          { id: "3_onclass_3_2", type: "multiple_choice", question: "Wat is het juiste artikel voor 'biertje' (klein / diminutief)?", options: ["de", "het"], correctAnswer: "het" },
          { id: "3_onclass_3_3", type: "multiple_choice", question: "Wat is het juiste artikel voor 'pauze'?", options: ["de", "het"], correctAnswer: "de" },
          { id: "3_onclass_3_4", type: "multiple_choice", question: "Wat is het juiste artikel voor 'gezin'?", options: ["de", "het"], correctAnswer: "het" },
          { id: "3_onclass_3_5", type: "multiple_choice", question: "Wat is het juiste artikel voor meervoud (plural), bijvoorbeeld 'biertjes'?", options: ["de", "het"], correctAnswer: "de" },
          { id: "3_onclass_3_6", type: "multiple_choice", question: "Wat is het juiste artikel voor 'rondje'?", options: ["de", "het"], correctAnswer: "het" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Inversie (Opdracht 6 Regels)",
        isExtra: true,
        questions: [
          { id: "3_onclass_4_1", type: "multiple_choice", question: "Kies de juiste zin (Inversie met 'Vandaag'):", options: ["Vandaag studeer ik Nederlands.", "Vandaag ik studeer Nederlands.", "Ik vandaag studeer Nederlands."], correctAnswer: "Vandaag studeer ik Nederlands." },
          { id: "3_onclass_4_2", type: "fill_in", question: "Donderdag ________ Joyce jarig. (is)", correctAnswer: "is" },
          { id: "3_onclass_4_3", type: "fill_in", question: "In de kantine ________ we koffie. (drinken)", correctAnswer: "drinken" },
          { id: "3_onclass_4_4", type: "fill_in", question: "Nu ________ ik hier. (ben)", correctAnswer: "ben" },
          { id: "3_onclass_4_5", type: "multiple_choice", question: "Kies de juiste zin (Inversie met 'Morgen'):", options: ["Morgen we beginnen met tekst 3.", "Morgen beginnen we met tekst 3.", "Morgen tekst 3 beginnen we."], correctAnswer: "Morgen beginnen we met tekst 3." },
          { id: "3_onclass_4_6", type: "fill_in", question: "Op maandag ________ ik naar school. (gaan)", correctAnswer: "ga" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Dialoog en Extra Woorden",
        isExtra: true,
        questions: [
          { id: "3_onclass_5_1", type: "multiple_choice", question: "Wat betekent 'wat voor'?", options: ["What kind of", "Where for", "Why"], correctAnswer: "What kind of" },
          { id: "3_onclass_5_2", type: "multiple_choice", question: "Waarom zijn Edit, Andres en Susy in het café?", options: ["Het is de verjaardag van Edit.", "Ze drinken koffie.", "Andres is jarig."], correctAnswer: "Het is de verjaardag van Edit." },
          { id: "3_onclass_5_3", type: "fill_in", question: "Prettig om ________ te maken. (Nice to meet you / make acquaintance)", correctAnswer: "kennis" },
          { id: "3_onclass_5_4", type: "fill_in", question: "Edit betaalt het eerste ________. (round of drinks)", correctAnswer: "rondje" }
        ]
      }
    ]
  }
];