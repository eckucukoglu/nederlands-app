// src/data/chapters/chapter2.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter2Vocab = [
  { id: "2_1", chapter: 2, nl: "zitten (zitten)", en: "are sitting", example: "Susy en Edit zitten in de kantine." },
  { id: "2_2", chapter: 2, nl: "de kantine", en: "canteen", example: "We eten in de kantine." },
  { id: "2_3", chapter: 2, nl: "deze", en: "this", example: "Is deze plaats vrij?" },
  { id: "2_4", chapter: 2, nl: "de plaats", en: "seat / place", example: "Dit is mijn plaats." },
  { id: "2_5", chapter: 2, nl: "vrij", en: "free", example: "Is deze plaats vrij?" },
  { id: "2_6", chapter: 2, nl: "ja hoor", en: "yes", example: "Ja hoor, ga zitten." },
  { id: "2_7", chapter: 2, nl: "zo", en: "okay / right", example: "Zo, een lekker kopje koffie." },
  { id: "2_8", chapter: 2, nl: "een", en: "a(n)", example: "Ik wil een appel." },
  { id: "2_9", chapter: 2, nl: "lekker", en: "nice / delicious", example: "De koffie is lekker." },
  { id: "2_10", chapter: 2, nl: "het kopje (de kop)", en: "cup", example: "Een kopje thee." },
  { id: "2_11", chapter: 2, nl: "de koffie", en: "coffee", example: "Ik drink graag koffie." },
  { id: "2_12", chapter: 2, nl: "al lang", en: "for a long time", example: "Woon je al lang in Utrecht?" },
  { id: "2_13", chapter: 2, nl: "pas", en: "only", example: "Nee, pas drie dagen." },
  { id: "2_14", chapter: 2, nl: "of", en: "or", example: "Drie of vier dagen." },
  { id: "2_15", chapter: 2, nl: "welke", en: "what / which", example: "Welke dag is het vandaag?" },
  { id: "2_16", chapter: 2, nl: "eigenlijk", en: "actually / really", example: "Welke dag is het eigenlijk?" },
  { id: "2_17", chapter: 2, nl: "vandaag", en: "today", example: "Vandaag is het donderdag." },
  { id: "2_18", chapter: 2, nl: "donderdag", en: "Thursday", example: "Het is donderdag 20 augustus." },
  { id: "2_19", chapter: 2, nl: "augustus", en: "August", example: "Augustus is in de zomer." },
  { id: "2_20", chapter: 2, nl: "morgen", en: "tomorrow", example: "Morgen ben ik jarig." },
  { id: "2_21", chapter: 2, nl: "ik ben jarig (jarig zijn)", en: "it's my birthday", example: "Hoera, ik ben jarig!" },
  { id: "2_22", chapter: 2, nl: "wat leuk", en: "how nice", example: "Wat leuk voor je!" },
  { id: "2_23", chapter: 2, nl: "december", en: "December", example: "Ik ben in december jarig." },
  { id: "2_24", chapter: 2, nl: "dus", en: "so / therefore", example: "Dus in de winter." },
  { id: "2_25", chapter: 2, nl: "de winter", en: "winter", example: "Het is koud in de winter." },
  { id: "2_26", chapter: 2, nl: "krijg (krijgen)", en: "get / receive", example: "Krijg je nog bezoek?" },
  { id: "2_27", chapter: 2, nl: "nog", en: "any / still", example: "Heb je nog vragen?" },
  { id: "2_28", chapter: 2, nl: "het bezoek", en: "visit / visitors", example: "We krijgen vanavond bezoek." },
  { id: "2_29", chapter: 2, nl: "de broer", en: "brother", example: "Mijn broer komt langs." },
  { id: "2_30", chapter: 2, nl: "jonger (jong)", en: "younger", example: "Wie is jonger?" },
  { id: "2_31", chapter: 2, nl: "maar", en: "but", example: "Hij is jonger, maar wel langer." },
  { id: "2_32", chapter: 2, nl: "wel", en: "certainly / indeed", example: "Dat is wel zo." },
  { id: "2_33", chapter: 2, nl: "langer (lang)", en: "taller", example: "Hij is langer dan ik." },
  { id: "2_34", chapter: 2, nl: "nog meer", en: "any more", example: "Heb je nog meer broers?" },
  { id: "2_35", chapter: 2, nl: "broers (broer)", en: "brothers", example: "Ik heb twee broers." },
  { id: "2_36", chapter: 2, nl: "zussen (zus)", en: "sisters", example: "Heb je zussen?" },
  { id: "2_37", chapter: 2, nl: "de zus", en: "sister", example: "Ik heb nog een zus." },
  { id: "2_38", chapter: 2, nl: "kijk (kijken)", en: "look", example: "Kijk, hier is een foto." },
  { id: "2_39", chapter: 2, nl: "de foto", en: "photo", example: "Dit is een mooie foto." },
  { id: "2_40", chapter: 2, nl: "goh", en: "oh", example: "Goh, ze is een heel ander type." },
  { id: "2_41", chapter: 2, nl: "heel", en: "very", example: "Dat is heel mooi." },
  { id: "2_42", chapter: 2, nl: "ander", en: "different / other", example: "Zij is een ander type." },
  { id: "2_43", chapter: 2, nl: "het type", en: "type", example: "Welk type auto is dat?" },
  { id: "2_44", chapter: 2, nl: "kort", en: "short", example: "Ze heeft kort haar." },
  { id: "2_45", chapter: 2, nl: "blond", en: "blonde", example: "Zij is blond." },
  { id: "2_46", chapter: 2, nl: "het haar", en: "hair", example: "Hij heeft donker haar." },
  { id: "2_47", chapter: 2, nl: "donker", en: "dark", example: "Het is donker buiten." },
  { id: "2_48", chapter: 2, nl: "de ouders", en: "parents", example: "Mijn ouders wonen in Spanje." },
  { id: "2_49", chapter: 2, nl: "komen op bezoek", en: "pay a visit", example: "Komen ze op bezoek?" },
  { id: "2_50", chapter: 2, nl: "op dit moment", en: "at the moment", example: "Nee, ze zijn op dit moment thuis." },
  { id: "2_51", chapter: 2, nl: "Indonesië", en: "Indonesia", example: "Ze zijn in Indonesië." },
  { id: "2_52", chapter: 2, nl: "doen (doen)", en: "are doing", example: "Wat doen ze daar?" },
  { id: "2_53", chapter: 2, nl: "daar", en: "there", example: "Ze wonen daar." },
  { id: "2_54", chapter: 2, nl: "op vakantie", en: "on holiday", example: "Zijn ze op vakantie?" },
  { id: "2_55", chapter: 2, nl: "de vakantie", en: "holiday", example: "De vakantie is leuk." },
  { id: "2_56", chapter: 2, nl: "de vader", en: "father", example: "Mijn vader werkt daar." },
  { id: "2_57", chapter: 2, nl: "voor", en: "for", example: "Hij is daar voor zijn werk." },
  { id: "2_58", chapter: 2, nl: "zijn", en: "his", example: "Dat is zijn auto." },
  { id: "2_59", chapter: 2, nl: "het werk", en: "work", example: "Mijn werk is ver." },
  { id: "2_60", chapter: 2, nl: "het seizoen", en: "season", example: "Welk seizoen is het daar?" },
  { id: "2_61", chapter: 2, nl: "wanneer", en: "when", example: "Wanneer is het zomer?" },
  { id: "2_62", chapter: 2, nl: "de zomer", en: "summer", example: "In de zomer is het warm." },
  { id: "2_63", chapter: 2, nl: "weet (weten)", en: "know", example: "Ik weet het niet." },
  { id: "2_64", chapter: 2, nl: "niet", en: "not", example: "Dat is niet waar." },
  { id: "2_65", chapter: 2, nl: "vertel (vertellen)", en: "tell", example: "Vertel eens over je familie." },
  { id: "2_66", chapter: 2, nl: "eens", en: "just / for a moment", example: "Kom eens hier." },
  { id: "2_67", chapter: 2, nl: "over", en: "about", example: "Vertel over je vakantie." },
  { id: "2_68", chapter: 2, nl: "de familie", en: "family", example: "Mijn familie is groot." },
  { id: "2_69", chapter: 2, nl: "dat", en: "that", example: "Dat wil ik wel." },
  { id: "2_70", chapter: 2, nl: "wil (willen)", en: "want / would like", example: "Ik wil koffie." },
  { id: "2_71", chapter: 2, nl: "laat", en: "late", example: "Hoe laat is het?" },
  { id: "2_72", chapter: 2, nl: "11.00 uur", en: "11 o'clock", example: "Het is elf uur." },
  { id: "2_73", chapter: 2, nl: "moeten (moeten)", en: "should / have to", example: "We moeten naar de les." },
  { id: "2_74", chapter: 2, nl: "weer", en: "again", example: "We moeten weer werken." },
  { id: "2_75", chapter: 2, nl: "naar", en: "to", example: "Naar school." }
];

export const chapter2Dialogues = {
  "2.1": [
    { speaker: "Verteller", text: "Susy en Edit hebben pauze en zitten in de kantine.", translation: "Susy ve Edit moladalar ve kantinde oturuyorlar." },
    { speaker: "Susy", text: "Is deze plaats vrij?", translation: "Bu yer boş mu?" },
    { speaker: "Edit", text: "Ja hoor.", translation: "Evet tabii ki." },
    { speaker: "Susy", text: "Zo, een lekker kopje koffie.", translation: "Öyleyse, lezzetli bir fincan kahve." },
    { speaker: "Edit", text: "Woon je al lang in Utrecht?", translation: "Utrecht'te uzun zamandır mı yaşıyorsun?" },
    { speaker: "Susy", text: "Nee, pas drie dagen, of vier. Welke dag is het eigenlijk vandaag?", translation: "Hayır, henüz sadece üç veya dört gün. Bugün aslında hangi gün?" },
    { speaker: "Edit", text: "Het is donderdag 20 augustus. Morgen ben ik jarig.", translation: "Bugün Perşembe, 20 Ağustos. Yarın benim doğum günüm." },
    { speaker: "Susy", text: "Wat leuk! Ik ben in december jarig, dus in de winter. Krijg je nog bezoek?", translation: "Ne güzel! Benim doğum günüm Aralık'ta, yani kışın. Ziyaretçi alacak mısın (misafirin gelecek mi)?" },
    { speaker: "Edit", text: "Ja, mijn broer komt.", translation: "Evet, erkek kardeşim geliyor." },
    { speaker: "Susy", text: "Wie is jonger? Hij of jij?", translation: "Kim daha genç? O mu sen mi?" },
    { speaker: "Edit", text: "Hij is jonger, maar wel langer.", translation: "O daha genç, ama kesinlikle daha uzun." },
    { speaker: "Susy", text: "Heb je nog meer broers of zussen?", translation: "Daha fazla erkek veya kız kardeşin var mı?" },
    { speaker: "Edit", text: "Ja, ik heb nog een zus. Kijk, hier is een foto.", translation: "Evet, bir kız kardeşim daha var. Bak, işte bir fotoğraf." },
    { speaker: "Susy", text: "Goh, ze is een heel ander type. Ze heeft kort, blond haar en jij donker haar. Komen je ouders ook op bezoek?", translation: "Vay canına, o tamamen farklı bir tip. Onun kısa sarı saçları var, senin ise koyu saçların. Ebeveynlerin de ziyarete geliyor mu?" },
    { speaker: "Edit", text: "Nee, ze zijn op dit moment in Indonesië.", translation: "Hayır, şu an Endonezya'dalar." },
    { speaker: "Susy", text: "Wat doen ze daar? Zijn ze daar op vakantie?", translation: "Orada ne yapıyorlar? Orada tatildeler mi?" },
    { speaker: "Edit", text: "Ja, en mijn vader is daar ook voor zijn werk.", translation: "Evet, ve babam da işi için orada." },
    { speaker: "Susy", text: "Welk seizoen is het daar nu? Wanneer is het daar zomer?", translation: "Şu an orada hangi mevsim? Orada yaz ne zaman?" },
    { speaker: "Edit", text: "Ik weet het niet. Maar vertel eens over jouw familie.", translation: "Bilmiyorum. Ama hadi biraz ailenden bahset." },
    { speaker: "Susy", text: "Dat wil ik wel, maar hoe laat is het eigenlijk?", translation: "Bunu isterim, ama aslında saat kaç?" },
    { speaker: "Edit", text: "Het is 11.00 uur. We moeten weer naar de les.", translation: "Saat 11.00. Tekrar derse dönmeliyiz." }
  ]
};

export const chapter2Sections = [
  {
    id: "2.1",
    chapter: 2,
    title: "2.1 & 2.2 Dialoog en Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In de kantine</h3>
          <p>Susy en Edit hebben pauze en zitten in de kantine. Ze praten over verjaardagen, familie en de tijd. (Susy ve Edit kantinde mola veriyorlar. Doğum günleri, aile ve saat hakkında konuşuyorlar.)</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Geef een reactie op de vragen (Wat weet je van de tekst?).",
        isExtra: false,
        questions: [
          { id: "2.1_opd1_1", type: "multiple_choice", question: "Waar zijn Susy en Edit?", options: ["In de les.", "In de kantine.", "In Indonesië."], correctAnswer: "In de kantine." },
          { id: "2.1_opd1_2", type: "multiple_choice", question: "Wat drinkt Susy?", options: ["Koffie", "Thee", "Water"], correctAnswer: "Koffie" },
          { id: "2.1_opd1_3", type: "multiple_choice", question: "Woont Susy al lang in Utrecht?", options: ["Ja, al 10 jaar.", "Nee, pas drie dagen of vier.", "Nee, ze woont in Amsterdam."], correctAnswer: "Nee, pas drie dagen of vier." },
          { id: "2.1_opd1_4", type: "multiple_choice", question: "Welke dag is het in de tekst?", options: ["Maandag 20 augustus", "Donderdag 20 augustus", "Vrijdag 21 augustus"], correctAnswer: "Donderdag 20 augustus" },
          { id: "2.1_opd1_5", type: "multiple_choice", question: "Wanneer is Edit jarig?", options: ["Vandaag", "Morgen", "In december"], correctAnswer: "Morgen" },
          { id: "2.1_opd1_6", type: "multiple_choice", question: "Krijgt Edit bezoek?", options: ["Ja, haar broer komt.", "Nee, niemand komt.", "Ja, haar ouders komen."], correctAnswer: "Ja, haar broer komt." },
          { id: "2.1_opd1_7", type: "multiple_choice", question: "Heeft Edit broers en zussen?", options: ["Ja, een broer en een zus.", "Nee, ze is enig kind.", "Ja, twee broers."], correctAnswer: "Ja, een broer en een zus." },
          { id: "2.1_opd1_8", type: "multiple_choice", question: "Heeft Edit kort, blond haar?", options: ["Ja", "Nee, ze heeft donker haar."], correctAnswer: "Nee, ze heeft donker haar." },
          { id: "2.1_opd1_9", type: "multiple_choice", question: "Komen de ouders van Edit op bezoek?", options: ["Ja, morgen.", "Nee, ze zijn in Indonesië."], correctAnswer: "Nee, ze zijn in Indonesië." },
          { id: "2.1_opd1_10", type: "multiple_choice", question: "Hoe laat is het in de tekst?", options: ["10.00 uur", "11.00 uur", "12.00 uur"], correctAnswer: "11.00 uur" }
        ]
      },
      {
        instruction: "Extra Oefeningen (Woordenlijst Test)",
        isExtra: true,
        questions: generateSmartQuestions(2, "Woordenlijst", 10, chapter2Vocab)
      }
    ]
  },
  {
    id: "2.3",
    chapter: 2,
    title: "2.3 / 2.4 Familierelaties en Mensen beschrijven",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👨‍👩‍👧 Familierelaties (Aile İlişkileri)</h3>
          <p className="text-sm text-slate-300 mb-4"><strong>Önemli Fark:</strong> Hollandacada <strong>"het gezin"</strong> sadece çekirdek aileyi (anne, baba ve çocuklar) ifade ederken, <strong>"de familie"</strong> sülaleyi/geniş aileyi (kuzenler, amcalar vb.) kapsar.</p>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
            <div>
              <strong>het gezin</strong> (çekirdek aile)<br/>
              <strong>de ouders</strong> (ebeveynler)<br/>
              <strong>de vader / moeder</strong> (baba/anne)<br/>
              <strong>de man / vrouw</strong> (koca/eş)<br/>
              <strong>het kind</strong> (çocuk)
            </div>
            <div>
              <strong>de broer / de zus</strong> (erkek/kız kardeş)<br/>
              <strong>de opa / de oma</strong> (dede/nine)<br/>
              <strong>de oom / de tante</strong> (amca/dayı - hala/teyze)<br/>
              <strong>de neef / de nicht</strong> (kuzen/yeğen)<br/>
              <strong>de zwager / de schoonzus</strong> (kayınbirader/baldız)
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>👤 Beschrijven van mensen (İnsanları Tanımlamak)</h3>
          <ul className="text-sm text-slate-300 space-y-1 list-disc pl-5">
            <li>Hij is <strong>jonger</strong>. (O daha genç). / Ik ben <strong>ouder</strong>. (Ben daha yaşlıyım).</li>
            <li>Hij is <strong>lang</strong>. (O uzun). / Ze is <strong>klein</strong>. (O kısa/küçük).</li>
            <li>Ze heeft <strong>kort, blond haar</strong>. (Onun kısa, sarı saçları var).</li>
            <li>Ik heb <strong>lang, donker haar</strong>. (Benim uzun, koyu saçlarım var).</li>
            <li>Hij heeft een <strong>bril</strong>. (Onun gözlüğü var).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Een persoon beschrijven. (Vertaal en combineer)",
        isExtra: false,
        questions: [
          { id: "2.3_opd2_1", type: "multiple_choice", question: "Kies de juiste omschrijving: 'O kısa, sarı saçlara sahip.'", options: ["Ze is kort en blond.", "Ze heeft kort, blond haar.", "Ze heeft lang, donker haar."], correctAnswer: "Ze heeft kort, blond haar." },
          { id: "2.3_opd2_2", type: "multiple_choice", question: "Kies de juiste relatie: De broer van je moeder is je...", options: ["neef", "oom", "opa"], correctAnswer: "oom" },
          { id: "2.3_opd2_3", type: "multiple_choice", question: "Kies de juiste relatie: Het kind van je dochter is je...", options: ["kleinkind", "neef", "zwager"], correctAnswer: "kleinkind" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Gezin vs Familie",
        isExtra: true,
        questions: [
          { id: "2.3_smart_1", type: "multiple_choice", question: "Wat is het verschil tussen 'gezin' en 'familie'?", options: ["Gezin is alleen vader, moeder en kinderen. Familie is iedereen (ooms, tantes, etc).", "Familie is alleen vader en moeder. Gezin is iedereen.", "Er is geen verschil."], correctAnswer: "Gezin is alleen vader, moeder en kinderen. Familie is iedereen (ooms, tantes, etc)." },
          { id: "2.3_smart_2", type: "fill_in", question: "Mijn vader en mijn moeder zijn mijn ________.", correctAnswer: "ouders" }
        ]
      }
    ]
  },
  {
    id: "2.5",
    chapter: 2,
    title: "2.5 - 2.7 Zinnen en Vragen (Cümle ve Soru Yapısı)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📌 Cümle Dizilimi (Zinsbouw)</h3>
          
          <h4 className="font-bold text-white mt-3">1. Hoofdzin (Düz Cümle):</h4>
          <p className="text-sm text-slate-300">Özne her zaman birinci sıradadır, fiil ikinci sırada gelir. (S - V - O)<br/>
          <em><strong>Ik</strong> (1) <strong>woon</strong> (2) nu in Utrecht.</em></p>

          <h4 className="font-bold text-white mt-4">2. Ja / Nee - vragen (Evet/Hayır Soruları):</h4>
          <p className="text-sm text-slate-300">Fiil başa geçer (Inversiyon). (V - S - O)<br/>
          <em><strong>Woon</strong> (1) <strong>je</strong> (2) al lang in Utrecht?</em><br/>
          <em><strong>Krijg</strong> (1) <strong>je</strong> (2) nog bezoek?</em></p>

          <h4 className="font-bold text-white mt-4">3. Vraagwoordvragen (Soru Kelimeli Sorular):</h4>
          <p className="text-sm text-slate-300">Önce Soru Kelimesi, sonra Fiil, sonra Özne gelir. (QW - V - S - O)<br/>
          <strong>Wie</strong> ben jij?<br/>
          <strong>Waar</strong> woon je?<br/>
          <strong>Wanneer</strong> is het in jouw land zomer?</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-xs font-mono text-emerald-200">
            <div>Wie? (Kim)</div><div>Wat? (Ne)</div><div>Waar? (Nerede)</div><div>Wanneer? (Ne zaman)</div>
            <div>Waarom? (Neden)</div><div>Hoe? (Nasıl)</div><div>Hoeveel? (Ne kadar/Kaç tane)</div><div>Welk / Welke? (Hangi)</div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Vul een vraagwoord in (wie, wat, waar, wanneer, welke, hoe, hoeveel, waarom). Kijk naar het antwoord!",
        isExtra: false,
        questions: [
          { id: "2.7_opd3_1", type: "multiple_choice", question: "_______ heet jouw zus? -> Mijn zus heet Sandra.", options: ["Wat", "Hoe", "Wie"], correctAnswer: "Hoe" },
          { id: "2.7_opd3_2", type: "multiple_choice", question: "_______ doe je vandaag? -> Ik ga naar de cursus.", options: ["Waar", "Wanneer", "Wat"], correctAnswer: "Wat" },
          { id: "2.7_opd3_3", type: "multiple_choice", question: "_______ woont Astrid? -> Astrid woont in de Brugstraat.", options: ["Waar", "Hoe", "Welke"], correctAnswer: "Waar" },
          { id: "2.7_opd3_4", type: "multiple_choice", question: "_______ cursus doe je? -> Ik doe nu cursus 1.", options: ["Wat", "Welke", "Hoe"], correctAnswer: "Welke" },
          { id: "2.7_opd3_5", type: "multiple_choice", question: "_______ heeft mijn boek? -> Ik. Ik heb jouw boek.", options: ["Wie", "Wat", "Waarom"], correctAnswer: "Wie" },
          { id: "2.7_opd3_6", type: "multiple_choice", question: "_______ laat is het? -> Het is nu tien voor twee.", options: ["Wat", "Hoe", "Wanneer"], correctAnswer: "Hoe" },
          { id: "2.7_opd3_7", type: "multiple_choice", question: "_______ zijn de docenten? -> De docenten zijn in de kantine.", options: ["Wie", "Waar", "Wat"], correctAnswer: "Waar" },
          { id: "2.7_opd3_8", type: "multiple_choice", question: "_______ komen uit Australië? -> Peter en Alice komen uit Australië.", options: ["Wie", "Waar", "Welke"], correctAnswer: "Wie" },
          { id: "2.7_opd3_9", type: "multiple_choice", question: "_______ komt Patrick vandaan? -> Patrick komt uit Maastricht.", options: ["Waarom", "Waar", "Hoe"], correctAnswer: "Waar" },
          { id: "2.7_opd3_10", type: "multiple_choice", question: "_______ dag is het? -> Het is vandaag maandag.", options: ["Welke", "Wat", "Wanneer"], correctAnswer: "Welke" },
          { id: "2.7_opd3_11", type: "multiple_choice", question: "Over _______ vakantie vertelt Jeroen? -> Hij vertelt over zijn zomervakantie.", options: ["welke", "wie", "wat"], correctAnswer: "welke" },
          { id: "2.7_opd3_12", type: "multiple_choice", question: "Met _______ zit je in de kantine? -> Ik zit met Petra in de kantine.", options: ["waar", "wie", "welke"], correctAnswer: "wie" },
          { id: "2.7_opd3_13", type: "multiple_choice", question: "_______ is je broer in China? -> Hij is daar voor zijn werk.", options: ["Wanneer", "Waar", "Waarom"], correctAnswer: "Waarom" },
          { id: "2.7_opd3_14", type: "multiple_choice", question: "_______ zussen heb je? -> Ik heb twee zussen.", options: ["Hoeveel", "Welke", "Hoe"], correctAnswer: "Hoeveel" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Vraagzinnen Maken)",
        isExtra: true,
        questions: [
          { id: "2.7_smart_1", type: "fill_in", question: "Maak een ja/nee-vraag van: 'Jij komt uit Nederland.' -> ________ jij uit Nederland?", correctAnswer: "Kom" },
          { id: "2.7_smart_2", type: "fill_in", question: "Vertaal: 'Neden ağlıyorsun?' -> ________ huil je?", correctAnswer: "Waarom" }
        ]
      }
    ]
  },
  {
    id: "2.8",
    chapter: 2,
    title: "2.8 Possessief pronomen (İyelik Zamirleri)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🔑 Possessief pronomen (Benim, Senin, Onun...)</h3>
          
          <table style={{ width: '100%', marginTop: '10px' }}>
            <thead><tr><th>Subject (Özne)</th><th>Possessief pronomen (İyelik)</th></tr></thead>
            <tbody>
              <tr><td>ik</td><td><strong>mijn</strong> (benim)</td></tr>
              <tr><td>jij / je</td><td><strong>jouw / je</strong> (senin)</td></tr>
              <tr><td>u</td><td><strong>uw</strong> (sizin - resmi)</td></tr>
              <tr><td>hij (o - erkek)</td><td><strong>zijn</strong> (onun)</td></tr>
              <tr><td>zij / ze (o - kadın)</td><td><strong>haar</strong> (onun)</td></tr>
              <tr><td>wij / we</td><td><strong>onze / ons</strong> (bizim)</td></tr>
              <tr><td>jullie</td><td><strong>jullie</strong> (sizin)</td></tr>
              <tr><td>zij / ze (onlar)</td><td><strong>hun</strong> (onların)</td></tr>
            </tbody>
          </table>

          <div className="bg-rose-900/30 p-4 rounded-xl mt-4 border border-rose-500/30">
            <h4 className="font-bold text-rose-300 mb-1">⚠️ ONZE mi, ONS mu?</h4>
            <p className="text-sm text-slate-300">"Bizim" demek için iki kelime vardır. Hangisini seçeceğimiz, kelimenin artikeline bağlıdır:</p>
            <ul className="text-sm text-slate-300 mt-2 list-disc pl-5">
              <li>Kelime <strong>"het"</strong> kelimesiyse ➔ <strong>ons</strong> kullanılır. (<em>het huis ➔ ons huis</em>)</li>
              <li>Kelime <strong>"de"</strong> kelimesiyse VEYA çoğulsa ➔ <strong>onze</strong> kullanılır. (<em>de auto ➔ onze auto / de kinderen ➔ onze kinderen</em>)</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Vul een possessief pronomen in (mijn, jouw/je, uw, zijn, haar, onze/ons, jullie, hun).",
        isExtra: false,
        questions: [
          { id: "2.8_opd4_1", type: "multiple_choice", question: "1. Wij wonen nu in Zwolle. _______ adres is Rozenstraat 8.", options: ["Onze", "Ons", "Wij"], correctAnswer: "Ons" },
          { id: "2.8_opd4_2", type: "fill_in", question: "2. Ik woon in Amersfoort en _______ zus woont in Rotterdam.", correctAnswer: "mijn" },
          { id: "2.8_opd4_3", type: "fill_in", question: "3. Mevrouw Jansen, gaat u met _______ broer op vakantie?", correctAnswer: "uw" },
          { id: "2.8_opd4_4", type: "fill_in", question: "4. Vera en Hilda, vertellen jullie eens over _______ vakantie.", correctAnswer: "jullie" },
          { id: "2.8_opd4_5", type: "fill_in", question: "5. Dit is Farah en _______ achternaam is Ahmany.", correctAnswer: "haar" },
          { id: "2.8_opd4_6", type: "fill_in", question: "6. Herman, de docent, spreekt met _______ buurman over de cursus.", correctAnswer: "zijn" },
          { id: "2.8_opd4_7", type: "multiple_choice", question: "7. Wij komen uit Polen en _______ cursus begint maandag.", options: ["ons", "onze"], correctAnswer: "onze" },
          { id: "2.8_opd4_8", type: "fill_in", question: "8. Edit en Ning (zij - meervoud) zitten met _______ docent in de kantine.", correctAnswer: "hun" },
          { id: "2.8_opd4_9", type: "multiple_choice", question: "9. Theresa, woont _______ familie ook in Nederland?", options: ["jouw / je", "haar", "zijn"], correctAnswer: "jouw / je" },
          { id: "2.8_opd4_10", type: "fill_in", question: "10. Peter moet voor _______ werk naar Indonesië.", correctAnswer: "zijn" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Onze vs Ons",
        isExtra: true,
        questions: [
          { id: "2.8_smart_1", type: "multiple_choice", question: "Kies de juiste vorm voor 'boek' (het boek):", options: ["onze boek", "ons boek"], correctAnswer: "ons boek" },
          { id: "2.8_smart_2", type: "multiple_choice", question: "Kies de juiste vorm voor 'kat' (de kat):", options: ["onze kat", "ons kat"], correctAnswer: "onze kat" },
          { id: "2.8_smart_3", type: "multiple_choice", question: "Kies de juiste vorm voor 'kinderen' (meervoud):", options: ["ons kinderen", "onze kinderen"], correctAnswer: "onze kinderen" }
        ]
      }
    ]
  },
  {
    id: "2.9",
    chapter: 2,
    title: "2.9 De klok (Saatler)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⏱️ Hoe laat is het? (Saat Kaç?)</h3>
          <p className="text-sm text-slate-300">Hollandacada saatler "buçuk (half)" merkez alınarak okunur. <strong>"Half"</strong> her zaman bir sonraki saati işaret eder. (Örn: 11:30 = half 12 ➔ 12'ye yarım var).</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-slate-200 bg-slate-800/50 p-4 rounded-xl">
            <div>
              <ul className="space-y-2">
                <li><strong>11.00:</strong> Het is elf uur.</li>
                <li><strong>11.05:</strong> Het is vijf over elf.</li>
                <li><strong>11.10:</strong> Het is tien over elf.</li>
                <li><strong>11.15:</strong> Het is kwart over elf. (11'i çeyrek geçiyor)</li>
                <li><strong>11.20:</strong> Het is tien voor half twaalf. <br/><span className="text-amber-400 text-xs">(12 buçuğa 10 var)</span></li>
                <li><strong>11.25:</strong> Het is vijf voor half twaalf.</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><strong>11.30:</strong> Het is half twaalf. <br/><span className="text-amber-400 text-xs">(11 buçuk)</span></li>
                <li><strong>11.35:</strong> Het is vijf over half twaalf.</li>
                <li><strong>11.40:</strong> Het is tien over half twaalf. <br/><span className="text-amber-400 text-xs">(12 buçuğu 10 geçiyor)</span></li>
                <li><strong>11.45:</strong> Het is kwart voor twaalf. (12'ye çeyrek var)</li>
                <li><strong>11.50:</strong> Het is tien voor twaalf.</li>
                <li><strong>11.55:</strong> Het is vijf voor twaalf.</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 5: Hoe laat is het nu? (Pratik)",
        isExtra: false,
        questions: [
          { id: "2.9_opd5_1", type: "multiple_choice", question: "Hoe zeg je 11:30 in het Nederlands?", options: ["Het is half elf.", "Het is half twaalf.", "Het is dertig over elf."], correctAnswer: "Het is half twaalf." },
          { id: "2.9_opd5_2", type: "multiple_choice", question: "Hoe zeg je 05:50 in het Nederlands?", options: ["Het is tien voor zes.", "Het is tien over zes.", "Het is vijftig na vijf."], correctAnswer: "Het is tien voor zes." },
          { id: "2.9_opd5_3", type: "multiple_choice", question: "Hoe zeg je 11:20 in het Nederlands?", options: ["Het is twintig over elf.", "Het is tien voor half twaalf.", "Beide zijn correct (Her ikisi de doğru)."], correctAnswer: "Beide zijn correct (Her ikisi de doğru)." }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Klokkijken (Saat Okuma Testi)",
        isExtra: true,
        questions: [
          { id: "2.9_smart_1", type: "multiple_choice", question: "Hoe zeg je 08:45?", options: ["Het is kwart over acht.", "Het is kwart voor negen.", "Het is half negen."], correctAnswer: "Het is kwart voor negen." },
          { id: "2.9_smart_2", type: "multiple_choice", question: "Hoe zeg je 10:40?", options: ["Het is tien voor half elf.", "Het is tien over half elf.", "Het is twintig voor tien."], correctAnswer: "Het is tien over half elf." }
        ]
      }
    ]
  },
  {
    id: "2.10",
    chapter: 2,
    title: "2.10 & 2.11 Dagen, Maanden, Seizoenen & Preposities",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>📅 Tijd, Dagen, Maanden en Seizoenen</h3>
          <p className="text-sm text-slate-300"><strong>Dagen:</strong> maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag.</p>
          <p className="text-sm text-slate-300"><strong>Tijdsverloop:</strong> eergisteren (evvelsi gün), gisteren (dün), vandaag (bugün), morgen (yarın), overmorgen (yarından sonraki gün).</p>
          <p className="text-sm text-slate-300"><strong>Maanden:</strong> januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december.</p>
          <p className="text-sm text-slate-300"><strong>Seizoenen:</strong> de winter, de lente/het voorjaar (ilkbahar), de zomer, de herfst/het najaar (sonbahar).</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>📍 Preposities: in, op, om (Zaman Edatları)</h3>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li><strong>in:</strong> Aylarda, yıllarda ve mevsimlerde kullanılır. <em>(in januari, in 2017, in de winter)</em></li>
            <li><strong>op:</strong> Günlerde ve tam tarihlerde kullanılır. <em>(op maandag, op 12 augustus)</em></li>
            <li><strong>om:</strong> Saatlerde kullanılır. <em>(om drie uur)</em></li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7, 8 & 9: Begrip (Sınıf Pratiği / Okuma Anlaması)",
        isExtra: false,
        questions: [
          { id: "2.10_opd7_1", type: "multiple_choice", question: "Als vandaag donderdag is, welke dag was het gisteren?", options: ["Vrijdag", "Woensdag", "Dinsdag"], correctAnswer: "Woensdag" },
          { id: "2.10_opd7_2", type: "multiple_choice", question: "In welk seizoen valt de maand juli meestal in Nederland?", options: ["De winter", "De zomer", "De lente"], correctAnswer: "De zomer" }
        ]
      },
      {
        instruction: "Opdracht 10: Een prepositie invullen. Vul in: op, om of in.",
        isExtra: false,
        questions: [
          { id: "2.11_opd10_1", type: "multiple_choice", question: "1. De cursus begint _______ maandag 8 april, _______ 9.00 uur.", options: ["in / om", "op / om", "om / op"], correctAnswer: "op / om" },
          { id: "2.11_opd10_2", type: "fill_in", question: "2. Heb jij ook les _______ dinsdag?", correctAnswer: "op" },
          { id: "2.11_opd10_3", type: "fill_in", question: "3. De tweede cursus begint _______ januari.", correctAnswer: "in" },
          { id: "2.11_opd10_4", type: "fill_in", question: "4. We zijn _______ 9.45 uur in Amsterdam.", correctAnswer: "om" },
          { id: "2.11_opd10_5", type: "fill_in", question: "5. Fred is _______ 12 augustus jarig.", correctAnswer: "op" },
          { id: "2.11_opd10_6", type: "fill_in", question: "6. Ben jij ook _______ de zomer jarig?", correctAnswer: "in" },
          { id: "2.11_opd10_7", type: "fill_in", question: "7. Bart en Eva zijn _______ 2017 getrouwd.", correctAnswer: "in" },
          { id: "2.11_opd10_8", type: "fill_in", question: "8. _______ welke datum zijn ze getrouwd?", correctAnswer: "Op" },
          { id: "2.11_opd10_9", type: "fill_in", question: "9. Ze zijn _______ 7 juli getrouwd.", correctAnswer: "op" },
          { id: "2.11_opd10_10", type: "fill_in", question: "10. We gaan _______ 10.30 uur naar de kantine.", correctAnswer: "om" },
          { id: "2.11_opd10_11", type: "fill_in", question: "11. Gerard en Senna gaan _______ oktober op vakantie.", correctAnswer: "in" },
          { id: "2.11_opd10_12", type: "fill_in", question: "12. Hij is _______ 23 mei 1991 geboren.", correctAnswer: "op" }
        ]
      }
    ]
  },
  {
    id: "2.12",
    chapter: 2,
    title: "2.12 Tekst & 2.13 Uitspraak",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: 1-1-2</h3>
          <p className="text-sm text-slate-300">Afbeelding in het boek: <strong>"1-1-2 ALS ELKE SECONDE TELT"</strong> (Her saniye önemli olduğunda 1-1-2).</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: a – aa & Cultuur</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 14, 15, 16 (Vocals):</strong> Hollandacada kısa 'a' (örn: dag, was, land) ile uzun 'aa' (örn: jaar, naam, plaats) arasında anlam değiştiren çok büyük bir telaffuz farkı vardır.</p>
          <hr className="my-3 border-rose-500/30"/>
          <p className="text-sm text-slate-300"><strong>Cultuur:</strong> Een vrouw in Nederland krijgt gemiddeld 1,7 kinderen. Hoeveel kinderen krijgt een vrouw gemiddeld in jouw land? (Hollanda'da bir kadın ortalama 1,7 çocuk sahibidir).</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Wat is dit (1-1-2)?",
        isExtra: false,
        questions: [
          { id: "2.12_opd13_1", type: "multiple_choice", question: "Wat is 1-1-2 in Nederland?", options: ["een adres", "een postcode", "een telefoonnummer (voor nood)"], correctAnswer: "een telefoonnummer (voor nood)" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Uitspraak begrip)",
        isExtra: true,
        questions: [
          { id: "2.13_smart_1", type: "multiple_choice", question: "Welk woord heeft een LANGE 'aa' klank?", options: ["dag", "was", "jaar"], correctAnswer: "jaar" },
          { id: "2.13_smart_2", type: "multiple_choice", question: "Welk woord heeft een KORTE 'a' klank?", options: ["naam", "land", "plaats"], correctAnswer: "land" }
        ]
      }
    ]
  },
  {
    id: "On-Class-2",
    chapter: 2,
    title: "On-Class Extra & Repetitie",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Repetitie: Extra Vragen</h3>
          
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Wie is jonger?</strong> (Kim daha genç?)</li>
            <li><strong>Wanneer is het in jouw land zomer?</strong> (Senin ülkende yaz ne zaman?)</li>
            <li><strong>Hoe oud ben jij?</strong> (Kaç yaşındasın?)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Begrip",
        isExtra: true,
        questions: [
          { id: "2_onclass_1", type: "fill_in", question: "Vertaal: 'Benim adım...' -> ________ naam is...", correctAnswer: "Mijn" },
          { id: "2_onclass_2", type: "multiple_choice", question: "Hoe vraag je iemand naar zijn leeftijd (yaş)?", options: ["Hoe laat is het?", "Hoe oud ben jij?", "Wanneer ben je jarig?"], correctAnswer: "Hoe oud ben jij?" }
        ]
      }
    ]
  }
];