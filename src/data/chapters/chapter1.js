// src/data/chapters/chapter1.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter1Vocab = [
  { id: "1_1", chapter: 1, nl: "welkom (in)", en: "welcome (to)", example: "Welkom in de cursus." },
  { id: "1_2", chapter: 1, nl: "goedemorgen", en: "good morning", example: "Goedemorgen allemaal." },
  { id: "1_3", chapter: 1, nl: "allemaal", en: "everyone", example: "Dag allemaal." },
  { id: "1_4", chapter: 1, nl: "de cursus", en: "course", example: "De cursus begint." },
  { id: "1_5", chapter: 1, nl: "de", en: "the", example: "De docent is hier." },
  { id: "1_6", chapter: 1, nl: "Nederlands", en: "Dutch", example: "Ik spreek Nederlands." },
  { id: "1_7", chapter: 1, nl: "ik", en: "I", example: "Ik ben Susy." },
  { id: "1_8", chapter: 1, nl: "ben (zijn)", en: "am", example: "Ik ben docent." },
  { id: "1_9", chapter: 1, nl: "en", en: "and", example: "Karin en Paul." },
  { id: "1_10", chapter: 1, nl: "jullie", en: "your (plural)", example: "Ik ben jullie docent." },
  { id: "1_11", chapter: 1, nl: "de docent", en: "teacher", example: "Wie is de docent?" },
  { id: "1_12", chapter: 1, nl: "docenten (docent)", en: "teachers", example: "Jullie hebben twee docenten." },
  { id: "1_13", chapter: 1, nl: "jullie", en: "you (plural)", example: "Komen jullie uit Spanje?" },
  { id: "1_14", chapter: 1, nl: "hebben (hebben)", en: "have", example: "Wij hebben een boek." },
  { id: "1_15", chapter: 1, nl: "twee", en: "two", example: "Ik heb twee docenten." },
  { id: "1_16", chapter: 1, nl: "andere", en: "other", example: "Dit is de andere docent." },
  { id: "1_17", chapter: 1, nl: "is (zijn)", en: "is", example: "Hij is de docent." },
  { id: "1_18", chapter: 1, nl: "hij", en: "he", example: "Hij geeft les." },
  { id: "1_19", chapter: 1, nl: "geeft les (lesgeven)", en: "teaches", example: "Hij geeft twee dagen les." },
  { id: "1_20", chapter: 1, nl: "dagen (de dag)", en: "days", example: "Twee dagen in de week." },
  { id: "1_21", chapter: 1, nl: "drie", en: "three", example: "Ik heb drie boeken." },
  { id: "1_22", chapter: 1, nl: "we", en: "we", example: "We beginnen nu." },
  { id: "1_23", chapter: 1, nl: "beginnen (beginnen)", en: "begin / start", example: "We beginnen met kennismaken." },
  { id: "1_24", chapter: 1, nl: "met", en: "with", example: "Met wie praat je?" },
  { id: "1_25", chapter: 1, nl: "kennismaken", en: "get to know", example: "Prettig kennismaken." },
  { id: "1_26", chapter: 1, nl: "wie", en: "who", example: "Wie ben jij?" },
  { id: "1_27", chapter: 1, nl: "ben (zijn)", en: "are", example: "Waar ben je?" },
  { id: "1_28", chapter: 1, nl: "jij", en: "you", example: "Waar woon jij?" },
  { id: "1_29", chapter: 1, nl: "wat", en: "what", example: "Wat is je adres?" },
  { id: "1_30", chapter: 1, nl: "jouw", en: "your (singular)", example: "Wat is jouw naam?" },
  { id: "1_31", chapter: 1, nl: "de naam", en: "name", example: "Mijn naam is Wall." },
  { id: "1_32", chapter: 1, nl: "mijn", en: "my", example: "Mijn adres is Hofstraat." },
  { id: "1_33", chapter: 1, nl: "dag", en: "hello / day", example: "Dag Susy!" },
  { id: "1_34", chapter: 1, nl: "je", en: "your (singular)", example: "Wat is je voornaam?" },
  { id: "1_35", chapter: 1, nl: "de voornaam", en: "first name", example: "Mijn voornaam is Susy." },
  { id: "1_36", chapter: 1, nl: "de achternaam", en: "surname", example: "Mijn achternaam is Wall." },
  { id: "1_37", chapter: 1, nl: "uit", en: "from", example: "Ik kom uit Engeland." },
  { id: "1_38", chapter: 1, nl: "welk", en: "which", example: "Uit welk land kom je?" },
  { id: "1_39", chapter: 1, nl: "het land", en: "country", example: "Nederland is een land." },
  { id: "1_40", chapter: 1, nl: "Engeland", en: "England", example: "Zij komt uit Engeland." },
  { id: "1_41", chapter: 1, nl: "kom (komen)", en: "come", example: "Ik kom uit China." },
  { id: "1_42", chapter: 1, nl: "de buurman", en: "neighbour (m)", example: "De buurman van Susy." },
  { id: "1_43", chapter: 1, nl: "van", en: "of", example: "De docent van de cursus." },
  { id: "1_44", chapter: 1, nl: "hoe", en: "how (what)", example: "Hoe heet je?" },
  { id: "1_45", chapter: 1, nl: "hoe heet jij?", en: "what's your name?", example: "Hallo, hoe heet jij?" },
  { id: "1_46", chapter: 1, nl: "heet (heten)", en: "is called", example: "Ik heet Ning." },
  { id: "1_47", chapter: 1, nl: "waar ... vandaan", en: "where ... from", example: "Waar kom je vandaan?" },
  { id: "1_48", chapter: 1, nl: "waar", en: "where", example: "Waar woon je?" },
  { id: "1_49", chapter: 1, nl: "China", en: "China", example: "Ning komt uit China." },
  { id: "1_50", chapter: 1, nl: "woon (wonen)", en: "live", example: "Ik woon in Utrecht." },
  { id: "1_51", chapter: 1, nl: "nu", en: "now", example: "Ik woon nu in Nederland." },
  { id: "1_52", chapter: 1, nl: "in", en: "in", example: "Ik woon in de stad." },
  { id: "1_53", chapter: 1, nl: "het adres", en: "address", example: "Wat is je adres?" },
  { id: "1_54", chapter: 1, nl: "het nummer", en: "number", example: "Op welk nummer?" },
  { id: "1_55", chapter: 1, nl: "het antwoord", en: "answer", example: "Wat is je antwoord?" },
  { id: "1_56", chapter: 1, nl: "nee", en: "no", example: "Nee, op 22." },
  { id: "1_57", chapter: 1, nl: "de postcode", en: "postal code", example: "Mijn postcode is 3581 TW." },
  { id: "1_58", chapter: 1, nl: "u", en: "you (formal)", example: "En u, mevrouw?" },
  { id: "1_59", chapter: 1, nl: "mevrouw", en: "Ms / Mrs", example: "Dag mevrouw." },
  { id: "1_60", chapter: 1, nl: "woont (wonen)", en: "live", example: "Woont u ook in Utrecht?" },
  { id: "1_61", chapter: 1, nl: "ook", en: "also", example: "Ik woon ook in Utrecht." },
  { id: "1_62", chapter: 1, nl: "zeg (zeggen)", en: "call (say)", example: "Zeg maar jij, hoor." },
  { id: "1_63", chapter: 1, nl: "maar", en: "but (just)", example: "Ik woon hier, maar ik kom uit China." },
  { id: "1_64", chapter: 1, nl: "hoor", en: "just (friendly particle)", example: "Zeg maar jij, hoor." },
  { id: "1_65", chapter: 1, nl: "ja", en: "yes", example: "Ja, ik heb het boek." },
  { id: "1_66", chapter: 1, nl: "hier", en: "here", example: "Ik woon hier." },
  { id: "1_67", chapter: 1, nl: "al", en: "already", example: "Ik woon hier al twintig jaar." },
  { id: "1_68", chapter: 1, nl: "twintig", en: "twenty", example: "Twintig jaar." },
  { id: "1_69", chapter: 1, nl: "het jaar", en: "year", example: "Een jaar heeft 365 dagen." },
  { id: "1_70", chapter: 1, nl: "gaan verder (verdergaan)", en: "go on (continue)", example: "We gaan verder met de les." },
  { id: "1_71", chapter: 1, nl: "de les", en: "lesson", example: "De les is begonnen." },
  { id: "1_72", chapter: 1, nl: "heeft (hebben)", en: "has", example: "Heeft iedereen het boek?" },
  { id: "1_73", chapter: 1, nl: "iedereen", en: "everyone", example: "Iedereen is hier." },
  { id: "1_74", chapter: 1, nl: "het boek", en: "book", example: "Dit is mijn boek." },
  { id: "1_75", chapter: 1, nl: "het", en: "the", example: "Het adres." },
  { id: "1_76", chapter: 1, nl: "de tekst", en: "text", example: "We gaan de tekst lezen." },
  { id: "1_77", chapter: 1, nl: "één", en: "one", example: "Nummer één." },
  { id: "1_78", chapter: 1, nl: "op", en: "on", example: "Op bladzijde acht." },
  { id: "1_79", chapter: 1, nl: "de bladzijde", en: "page", example: "Kijk op bladzijde tien." },
  { id: "1_80", chapter: 1, nl: "acht", en: "eight", example: "Acht." },
  { id: "1_81", chapter: 1, nl: "luisteren", en: "listen", example: "We gaan luisteren." },
  { id: "1_82", chapter: 1, nl: "naar", en: "to", example: "We luisteren naar de tekst." },
  { id: "1_83", chapter: 1, nl: "lezen", en: "read", example: "We gaan de tekst lezen." },
  { id: "1_84", chapter: 1, nl: "stoppen (stoppen)", en: "stop", example: "We stoppen even." },
  { id: "1_85", chapter: 1, nl: "even", en: "for a moment", example: "Wacht even." },
  { id: "1_86", chapter: 1, nl: "het is", en: "it is", example: "Het is pauze." },
  { id: "1_87", chapter: 1, nl: "de pauze", en: "break", example: "We hebben nu pauze." },
  { id: "1_88", chapter: 1, nl: "tot straks", en: "see you later", example: "Tot straks na de pauze!" },
  { id: "1_89", chapter: 1, nl: "straks", en: "soon / later", example: "Ik kom straks." }
];

export const chapter1Dialogues = {
  "1.1": [
    { speaker: "Verteller", text: "De cursus begint.", translation: "Kurs başlıyor." },
    { speaker: "Docent", text: "Goedemorgen allemaal. Welkom in de cursus Nederlands. Ik ben Karin Dijkstra en ik ben jullie docent. Jullie hebben twee docenten. De andere docent is Paul de Vries. Hij geeft twee dagen les en ik drie. We beginnen met kennismaken. Wie ben jij? Wat is jouw naam?", translation: "Herkese günaydın. Hollandaca kursuna hoş geldiniz. Ben Karin Dijkstra ve ben sizin öğretmeninizim. Sizin iki öğretmeniniz var. Diğer öğretmen Paul de Vries. O iki gün ders veriyor ve ben üç gün. Tanışmayla başlıyoruz. Sen kimsin? Senin adın ne?" },
    { speaker: "Cursist", text: "Ik ben Susy. Mijn naam is Susy.", translation: "Ben Susy. Benim adım Susy." },
    { speaker: "Docent", text: "Dag Susy. Susy is je voornaam. En wat is je achternaam?", translation: "Merhaba Susy. Susy senin ilk adın. Peki soyadın nedir?" },
    { speaker: "Susy", text: "Mijn achternaam is Wall.", translation: "Soyadım Wall." },
    { speaker: "Docent", text: "Uit welk land kom je?", translation: "Hangi ülkeden geliyorsun?" },
    { speaker: "Susy", text: "Ik kom uit Engeland.", translation: "Ben İngiltere'den geliyorum." },
    { speaker: "Docent", text: "De buurman van Susy: Wie ben jij? Hoe heet jij?", translation: "Susy'nin yanındaki (komşusu): Sen kimsin? Adın ne?" },
    { speaker: "Buurman", text: "Ik heet Ning.", translation: "Benim adım Ning." },
    { speaker: "Docent", text: "Dag Ning. En waar kom je vandaan?", translation: "Merhaba Ning. Peki sen nereden geliyorsun?" },
    { speaker: "Ning", text: "Ik kom uit China.", translation: "Çin'den geliyorum." },
    { speaker: "Docent", text: "Waar woon je?", translation: "Nerede yaşıyorsun?" },
    { speaker: "Ning", text: "Ik woon nu in Utrecht.", translation: "Şimdi Utrecht'te yaşıyorum." },
    { speaker: "Docent", text: "Wat is je adres?", translation: "Adresin nedir?" },
    { speaker: "Ning", text: "Mijn adres is Hofstraat 22.", translation: "Adresim Hofstraat 22." },
    { speaker: "Docent", text: "Op welk nummer? Wat is je antwoord? 23?", translation: "Hangi numarada? Cevabın ne? 23 mü?" },
    { speaker: "Ning", text: "Nee, op 22. En mijn postcode is 3581 TW in Utrecht. En u, mevrouw? Woont u ook in Utrecht?", translation: "Hayır, 22 numarada. Ve posta kodum Utrecht'te 3581 TW. Peki ya siz hanımefendi? Siz de mi Utrecht'te yaşıyorsunuz?" },
    { speaker: "Docent", text: "Zeg maar jij, hoor. Ja, ik woon hier al twintig jaar. Oké, we gaan verder met de les. Heeft iedereen het boek? We beginnen met tekst 1 op bladzijde 8. We gaan naar de tekst luisteren. We gaan de tekst ook lezen.", translation: "Bana sen diyebilirsin. Evet, ben yirmi yıldır burada yaşıyorum. Tamam, derse devam ediyoruz. Herkeste kitap var mı? Sayfa 8'deki metin 1 ile başlıyoruz. Metni dinleyeceğiz. Metni de okuyacağız." },
    { speaker: "Verteller", text: "(...)", translation: "(...)" },
    { speaker: "Docent", text: "We stoppen even, het is pauze. Tot straks.", translation: "Biraz duruyoruz, şimdi mola. Birazdan görüşürüz." }
  ]
};

export const chapter1Sections = [
  {
    id: "1.1",
    chapter: 1,
    title: "1.1 Dialoog",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Welkom</h3>
          <p>Hollandaca kursu başlıyor. Öğretmen ve öğrenciler tanışıyorlar. Diyalogdaki soruları ve cevapları dikkatle dinle.</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li>Dikkat: <em>"Uit welk land kom je?"</em> (Hangi ülkeden geliyorsun?) ve <em>"Waar kom je vandaan?"</em> (Nereden geliyorsun?) soruları aynı anlama gelir.</li>
            <li>Hollandalılar genellikle birbirlerine sen (jij) diye hitap ederler: <em>"Zeg maar jij, hoor" (Bana sen diyebilirsin).</em></li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Pedagojik Okuma Anlaması)",
        isExtra: true,
        questions: [
          { id: "1.1_smart_1", type: "multiple_choice", question: "Hoeveel docenten hebben de cursisten?", options: ["Eén docent", "Twee docenten", "Drie docenten"], correctAnswer: "Twee docenten" },
          { id: "1.1_smart_2", type: "multiple_choice", question: "Uit welk land komt Susy?", options: ["Uit Nederland", "Uit China", "Uit Engeland"], correctAnswer: "Uit Engeland" },
          { id: "1.1_smart_3", type: "multiple_choice", question: "Waarom zegt de docent 'Zeg maar jij, hoor' tegen Ning?", options: ["Omdat ze 'u' (siz) te formeel vindt. Ze wil tutoyeren (senli benli konuşmak).", "Omdat ze boos is.", "Omdat Ning geen Nederlands spreekt."], correctAnswer: "Omdat ze 'u' (siz) te formeel vindt. Ze wil tutoyeren (senli benli konuşmak)." }
        ]
      }
    ]
  },
  {
    id: "1.2",
    chapter: 1,
    title: "1.2 Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
          <p>Bu bölümde, 1. ünitenin kelime haznesini (Woordenlijst) çalışacağız. Sağ üstteki <strong>Flashcards</strong> bölümünden bu kelimeleri pratik etmeyi unutmayın!</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling?",
        isExtra: true,
        questions: generateSmartQuestions(1, "Woordenlijst", 15, chapter1Vocab)
      }
    ]
  },
  {
    id: "1.3",
    chapter: 1,
    title: "1.3 Zich voorstellen / informatie vragen / landen",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👋 Zich voorstellen (Kendini tanıtmak)</h3>
          <p>Kendinizi tanıtmak ve temel sorular sormak için şu kalıpları ezberleyin:</p>
          <ul style={{ marginTop: '10px', color: '#cbd5e1' }}>
            <li><strong>Wie ben jij?</strong> ➔ Ik ben Susy Wall.</li>
            <li><strong>Wat is jouw naam? / Hoe heet jij?</strong> ➔ Mijn naam is Susy Wall / Ik heet Susy.</li>
            <li><strong>Wat is je voornaam? / Wat is je achternaam?</strong> ➔ Mijn voornaam is Susy. / Mijn achternaam is Wall.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>📍 Informatie vragen: adres en land van herkomst</h3>
          <ul style={{ marginTop: '10px', color: '#cbd5e1' }}>
            <li><strong>Wat is jouw / je adres?</strong> ➔ Mijn adres is Hofstraat 22, 3581 TW Utrecht.</li>
            <li><strong>Waar woon jij / je?</strong> ➔ Ik woon in Utrecht.</li>
            <li><strong>Uit welk land kom je? / Waar kom je vandaan?</strong> ➔ Ik kom uit Engeland. / Ik kom uit China.</li>
          </ul>
        </div>
        
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>🌍 Landen / Talen / Nationaliteiten</h3>
          <p>Ülke, dil ve milliyet belirtme kalıpları:</p>
          <table style={{ width: '100%', marginTop: '10px' }}>
            <thead><tr><th>Land (Ülke)</th><th>Taal (Dil)</th><th>Nationaliteit (Milliyet)</th></tr></thead>
            <tbody>
              <tr><td>Nederland</td><td>Nederlands</td><td>Nederlander / Nederlandse</td></tr>
              <tr><td>Engeland</td><td>Engels</td><td>Engelsman / Engelse</td></tr>
              <tr><td>China</td><td>Chinees</td><td>Chinees / Chinese</td></tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm text-slate-400"><em>Ik kom uit Nederland. Ik spreek Nederlands. Ik ben Nederlander.</em></p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Vul de juiste vraag in (Praat met je buurman of buurvrouw).",
        isExtra: false,
        questions: [
          { id: "1.3_opd1_1", type: "multiple_choice", question: "Je wilt weten wie de persoon is. Wat vraag je?", options: ["Wie ben jij?", "Waar woon je?", "Welke taal spreek je?"], correctAnswer: "Wie ben jij?" },
          { id: "1.3_opd1_2", type: "multiple_choice", question: "Je wilt het adres weten. Wat vraag je?", options: ["Wat is je adres?", "Waar kom je vandaan?", "Hoe heet je?"], correctAnswer: "Wat is je adres?" },
          { id: "1.3_opd1_3", type: "multiple_choice", question: "Je wilt weten uit welk land de persoon komt. Wat vraag je?", options: ["Uit welk land kom je?", "Waar woon je?", "Wat is je voornaam?"], correctAnswer: "Uit welk land kom je?" },
          { id: "1.3_opd1_4", type: "multiple_choice", question: "Je wilt weten welke taal de persoon spreekt. Wat vraag je?", options: ["Welke taal spreek je?", "Wat is je adres?", "Wie ben jij?"], correctAnswer: "Welke taal spreek je?" },
          { id: "1.3_opd1_5", type: "multiple_choice", question: "Je wilt de nationaliteit weten. Wat vraag je?", options: ["Wat is je nationaliteit?", "Waar woon je?", "Hoe heet je?"], correctAnswer: "Wat is je nationaliteit?" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Landen en Vragen)",
        isExtra: true,
        questions: [
          { id: "1.3_smart_1", type: "fill_in", question: "Vertaal: 'Ben İngilizce konuşuyorum.' -> Ik ________ Engels.", correctAnswer: "spreek" },
          { id: "1.3_smart_2", type: "fill_in", question: "Vertaal: 'Nereden geliyorsun?' -> Waar kom je ________?", correctAnswer: "vandaan" }
        ]
      }
    ]
  },
  {
    id: "1.4",
    chapter: 1,
    title: "1.4 Personaal pronomen + werkwoord",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📌 Şahıs Zamirleri ve Fiil Çekimleri (Present Tense)</h3>
          <p>Hollandacada şahıs zamirleri (ik, jij, hij, wij vb.) fiilin nasıl çekimleneceğini belirler. Düzenli fiillerin kuralı çok basittir:</p>
          <ul style={{ margin: '10px 0', color: '#cbd5e1' }}>
            <li><strong>ik</strong> ➔ Sadece fiil kökü (stam). Örn: <em>ik luister, ik werk</em>.</li>
            <li><strong>jij/je, u, hij, zij/ze, het</strong> (Tekiller) ➔ Kök + <strong>t</strong>. Örn: <em>hij luistert, u werkt</em>.</li>
            <li><strong>wij/we, jullie, zij/ze</strong> (Çoğullar) ➔ Tam fiil (kök + en). Örn: <em>wij luisteren, jullie werken</em>.</li>
          </ul>
          
          <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
            <h4 className="text-emerald-300 font-bold mb-2">⚠️ ÖNEMLİ KURAL: INVERSIE (Tersine Çevirme)</h4>
            <p className="text-sm text-emerald-100">Soru cümlelerinde <strong>'jij / je' (sen)</strong> öznesi fiilden <u>sonra</u> gelirse, fiilin sonundaki <strong>-t</strong> harfi düşer!</p>
            <p className="text-sm italic mt-2">Düz Cümle: Jij woon<strong>t</strong> in Utrecht. <br/>Soru Cümlesi: Woon <strong>jij</strong> in Utrecht? (woon<u>t</u> değil!)</p>
            <p className="text-sm italic mt-2 text-rose-300">Not: Bu kural 'u' (siz) veya 'hij' (o) için geçerli değildir! ➔ Woont u in Utrecht? (T düşmez).</p>
          </div>
          
          <table style={{ width: '100%', marginTop: '15px' }}>
            <thead><tr><th>Pronoun</th><th>luisteren</th><th>hebben</th><th>zijn</th></tr></thead>
            <tbody>
              <tr><td>ik</td><td>luister</td><td>heb</td><td>ben</td></tr>
              <tr><td>jij / je</td><td>luistert (<em>luister je?</em>)</td><td>hebt (<em>heb je?</em>)</td><td>bent (<em>ben je?</em>)</td></tr>
              <tr><td>u</td><td>luistert</td><td>heeft / hebt</td><td>bent</td></tr>
              <tr><td>hij, zij/ze, het</td><td>luistert</td><td>heeft</td><td>is</td></tr>
              <tr><td>wij / we</td><td>luisteren</td><td>hebben</td><td>zijn</td></tr>
              <tr><td>jullie</td><td>luisteren</td><td>hebben</td><td>zijn</td></tr>
              <tr><td>zij / ze (mv)</td><td>luisteren</td><td>hebben</td><td>zijn</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Vul een personaal pronomen in (ik, jij/je, hij, zij/ze, wij/we, jullie, u).",
        isExtra: false,
        questions: [
          { id: "1.4_opd2_1", type: "fill_in", question: "1. Dit is Mustafa, mijn buurman. ________ woont in de Emmastraat.", correctAnswer: "Hij" },
          { id: "1.4_opd2_2", type: "fill_in", question: "2. Sonja, kun ________ je achternaam spellen?", correctAnswer: "jij" },
          { id: "1.4_opd2_3", type: "fill_in", question: "3. Sara en ik gaan naar een cursus. ________ hebben twee docenten.", correctAnswer: "Wij" },
          { id: "1.4_opd2_4", type: "fill_in", question: "4. Juha en Arto, komen ________ uit Finland?", correctAnswer: "jullie" },
          { id: "1.4_opd2_5", type: "fill_in", question: "5. Mijn naam is Shirley en ________ kom uit Australië.", correctAnswer: "ik" },
          { id: "1.4_opd2_6", type: "fill_in", question: "6. Mevrouw Govers, hebt ________ het boek?", correctAnswer: "u" },
          { id: "1.4_opd2_7", type: "fill_in", question: "7. Dit is de andere docent. ________ heet Anne-Marie.", correctAnswer: "Zij" },
          { id: "1.4_opd2_8", type: "fill_in", question: "8. Jullie docenten zijn Herman en Anne-Marie. ________ geven les.", correctAnswer: "Zij" },
          { id: "1.4_opd2_9", type: "fill_in", question: "9. Ning komt uit China. En ________, Yin? Kom ________ ook uit China?", correctAnswer: "jij, jij" },
          { id: "1.4_opd2_10", type: "fill_in", question: "10. ________ bent nu twee dagen in Nederland en ________ spreekt al Nederlands!", correctAnswer: "Jij, je" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Inversie en Pronomen",
        isExtra: true,
        questions: [
          { id: "1.4_smart_1", type: "multiple_choice", question: "Kies de grammaticaal correcte zin (Let op Inversie!)", options: ["Waart woont jij?", "Waar woon jij?", "Waar woont je?"], correctAnswer: "Waar woon jij?" },
          { id: "1.4_smart_2", type: "multiple_choice", question: "Waarom zeg je 'Waar woont u?' en niet 'Waar woon u?'", options: ["Omdat 'u' altijd meervoud is.", "Omdat de -t alleen wegvalt bij 'jij/je', niet bij 'u'.", "Omdat 'wonen' onregelmatig is."], correctAnswer: "Omdat de -t alleen wegvalt bij 'jij/je', niet bij 'u'." },
          { id: "1.4_smart_3", type: "multiple_choice", question: "Kies de grammaticaal correcte zin voor 'zijn' (to be):", options: ["Ik is docent.", "Wij ben studenten.", "Jullie zijn docenten."], correctAnswer: "Jullie zijn docenten." }
        ]
      }
    ]
  },
  {
    id: "1.5",
    chapter: 1,
    title: "1.5 Telwoorden",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔢 Telwoorden (Sayılar 0-1000)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-200">
            <div>0 nul<br/>1 één<br/>2 twee<br/>3 drie<br/>4 vier<br/>5 vijf<br/>6 zes<br/>7 zeven<br/>8 acht<br/>9 negen<br/>10 tien</div>
            <div>11 elf<br/>12 twaalf<br/>13 dertien<br/>14 veertien<br/>15 vijftien<br/>16 zestien<br/>17 zeventien<br/>18 achttien<br/>19 negentien<br/>20 twintig</div>
            <div>21 eenentwintig<br/>22 tweeëntwintig<br/>30 dertig<br/>40 veertig<br/>50 vijftig<br/>60 zestig<br/>70 zeventig<br/>80 tachtig<br/>90 negentig<br/>100 honderd</div>
            <div>124 honderdvieren<br/>twintig<br/><br/>1000 duizend</div>
          </div>
          <div className="bg-amber-900/40 p-3 rounded-lg mt-4 border border-amber-500/30">
            <p className="text-amber-200 text-sm font-bold">💡 İpucu: Hollandacada 21'den itibaren sayılar TERSTEN okunur.</p>
            <p className="text-sm text-amber-100">Örneğin 21 = <em>een-en-twintig</em> (bir-ve-yirmi). 45 = <em>vijf-en-veertig</em> (beş-ve-kırk).</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Kies de goede vorm van het werkwoord.",
        isExtra: false,
        questions: [
          { id: "1.5_opd3_1", type: "multiple_choice", question: "1. ________ jullie al pauze?", options: ["Hebben", "Hebt"], correctAnswer: "Hebben" },
          { id: "1.5_opd3_2", type: "multiple_choice", question: "2. We ________ verder met de tekst.", options: ["ga", "gaan"], correctAnswer: "gaan" },
          { id: "1.5_opd3_3", type: "multiple_choice", question: "3. ________ u naar de docent?", options: ["Luister", "Luistert"], correctAnswer: "Luistert" },
          { id: "1.5_opd3_4", type: "multiple_choice", question: "4. ________ Richard ook les?", options: ["Geef", "Geeft"], correctAnswer: "Geeft" },
          { id: "1.5_opd3_5", type: "multiple_choice", question: "5. De docent ________ uit Nederland.", options: ["komt", "komen"], correctAnswer: "komt" },
          { id: "1.5_opd3_6", type: "multiple_choice", question: "6. Hij ________ mijn boek.", options: ["heeft", "hebt"], correctAnswer: "heeft" },
          { id: "1.5_opd3_7", type: "multiple_choice", question: "7. We ________ even.", options: ["stopt", "stoppen"], correctAnswer: "stoppen" },
          { id: "1.5_opd3_8", type: "multiple_choice", question: "8. ________ je verder met Nederlands? (Dikkat: Inversie!)", options: ["Ga", "Gaat"], correctAnswer: "Ga" },
          { id: "1.5_opd3_9", type: "multiple_choice", question: "9. Diego en Maria ________ uit Spanje.", options: ["komt", "komen"], correctAnswer: "komen" },
          { id: "1.5_opd3_10", type: "multiple_choice", question: "10. U ________ met de les.", options: ["begint", "beginnen"], correctAnswer: "begint" },
          { id: "1.5_opd3_11", type: "multiple_choice", question: "11. Wij ________ nu in Nederland.", options: ["woon", "wonen"], correctAnswer: "wonen" },
          { id: "1.5_opd3_12", type: "multiple_choice", question: "12. Mevrouw Halvers ________ jullie docent.", options: ["is", "zijn"], correctAnswer: "is" }
        ]
      },
      {
        instruction: "Opdracht 4: Beantwoord de vragen over getallen.",
        isExtra: false,
        questions: [
          { id: "1.5_opd4_1", type: "fill_in", question: "Schrijf het getal 18 als woord:", correctAnswer: "achttien" },
          { id: "1.5_opd4_2", type: "fill_in", question: "Schrijf het getal 40 als woord:", correctAnswer: "veertig" }
        ]
      },
      {
        instruction: "Opdracht 5: Je krijgt een blad van je docent. (Klassikale oefening)",
        isExtra: false,
        questions: [
          { id: "1.5_opd5_1", type: "multiple_choice", question: "Dit is een spreekopdracht voor in de klas. Begrijp je hoe je getallen moet zeggen?", options: ["Ja, ik begrijp het.", "Nee, ik moet nog oefenen."], correctAnswer: "Ja, ik begrijp het." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Getallen)",
        isExtra: true,
        questions: [
          { id: "1.5_smart_1", type: "fill_in", question: "Schrijf het getal 58 als woord (yazıyla yaz):", correctAnswer: "achtenvijftig" },
          { id: "1.5_smart_2", type: "fill_in", question: "Schrijf het getal 23 als woord:", correctAnswer: "drieëntwintig" },
          { id: "1.5_smart_3", type: "fill_in", question: "Hoe zeg je 100 in het Nederlands?", correctAnswer: "honderd" }
        ]
      }
    ]
  },
  {
    id: "1.6",
    chapter: 1,
    title: "1.6 Het alfabet",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🔤 Het alfabet en Spellen (Alfabe ve Kodlama)</h3>
          <p className="text-slate-200 tracking-wide mb-3">a – b – c – d – e – f – g – h – i – j – k – l – m – n – o – p – q – r – s – t – u – v – w – x – y – z</p>
          <ul style={{ margin: '10px 0', color: '#cbd5e1' }}>
            <li><strong>ij</strong> = lange ij (uzun ij)</li>
            <li><strong>ei</strong> = korte ei (kısa ei)</li>
            <li><strong>y</strong> = Griekse ij / y-grec (Yunan ij - y harfi)</li>
          </ul>
          
          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/20">
            <h4 className="font-bold text-cyan-300 mb-2">🎤 Harflerin Okunuşları (On-Class Notları):</h4>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs text-slate-300 font-mono">
              <div>A ➔ AA</div><div>B ➔ bay</div><div>C ➔ say</div><div>D ➔ day</div><div>E ➔ ay</div>
              <div>F ➔ ef</div><div>G ➔ G-ay</div><div>H ➔ Ha</div><div>I ➔ ee</div><div>J ➔ y-ay</div>
              <div>K ➔ Kaa</div><div>L ➔ el</div><div>M ➔ em</div><div>N ➔ en</div><div>O ➔ O</div>
              <div>P ➔ P-ay</div><div>Q ➔ Kue(kü)</div><div>R ➔ er</div><div>S ➔ es</div><div>T ➔ T-ay</div>
              <div>U ➔ Uu</div><div>V ➔ V-ay</div><div>W ➔ W-ay</div><div>X ➔ ix</div><div>Y ➔ y-grec</div>
              <div>Z ➔ Zet</div>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Alfabet (Sınıf Pratikleri)",
        isExtra: false,
        questions: [
          { id: "1.6_opd6_1", type: "multiple_choice", question: "Wat is de 'voorletter' (eerste letter) van Susy Wall?", options: ["W", "S", "u"], correctAnswer: "S" },
          { id: "1.6_opd6_2", type: "multiple_choice", question: "Hoe noem je de letter 'y' in het Nederlands?", options: ["Korte ei", "Lange ij", "Griekse ij"], correctAnswer: "Griekse ij" }
        ]
      },
      {
        instruction: "Opdracht 7: Ga in alfabetische volgorde staan.",
        isExtra: false,
        questions: [
          { id: "1.6_opd7_1", type: "multiple_choice", question: "Dit is een klasopdracht. Weet je hoe het alfabet werkt?", options: ["Ja", "Nee"], correctAnswer: "Ja" }
        ]
      }
    ]
  },
  {
    id: "1.7",
    chapter: 1,
    title: "1.7 Spellen",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>🗣️ Spellen (Harf Harf Kodlamak)</h3>
          <p className="text-sm text-slate-300 mb-2">Hollandacada isminizi veya adresinizi söylerken kodlamanız (spellen) istenebilir:</p>
          <ul style={{ margin: '10px 0', color: '#cbd5e1' }}>
            <li><em>Kun je dat spellen? / Kunt u dat spellen? / Hoe spel je dat?</em> (Nasıl hecelenir/yazılır?)</li>
          </ul>
          
          <div className="bg-slate-800/50 p-3 rounded mt-2 text-sm italic border-l-2 border-slate-500">
            <p>"Wall, hoe spel je dat?" ➔ "Met dubbel l." (Çift L ile)</p>
            <p>"Susy, is dat met een s of een z?" ➔ "Met een s, en met een Griekse y."</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Vraag de voornaam en achternaam aan cursisten. Hoe spel je die?",
        isExtra: false,
        questions: [
          { id: "1.7_opd8_1", type: "fill_in", question: "Vertaal de vraag: 'Bunu heceleyebilir/kodlayabilir misin?' -> Kun je dat ________?", correctAnswer: "spellen" },
          { id: "1.7_opd8_2", type: "multiple_choice", question: "Je naam is 'Vries'. Hoe zeg je dat je een 'V' gebruikt en geen 'F'?", options: ["Met een V", "Met een F", "Met een W"], correctAnswer: "Met een V" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Spelling",
        isExtra: true,
        questions: [
          { id: "1.6_smart_1", type: "multiple_choice", question: "Hoe spel je het woord 'muur'?", options: ["Met een u en een r.", "Met dubbel u en een r.", "Met een w en een r."], correctAnswer: "Met dubbel u en een r." },
          { id: "1.6_smart_2", type: "fill_in", question: "Vertaal de vraag: 'Bunu heceleyebilir/kodlayabilir misin?' -> Kun je dat ________?", correctAnswer: "spellen" },
          { id: "1.6_smart_3", type: "multiple_choice", question: "Je naam is 'Vries'. Hoe zeg je dat je een 'V' gebruikt en geen 'F'?", options: ["Met een V", "Met een F", "Met een W"], correctAnswer: "Met een V" }
        ]
      }
    ]
  },
  {
    id: "1.8",
    chapter: 1,
    title: "1.8 Begroeten en afscheid nemen",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👋 Begroeten (Selamlaşma) en Afscheid nemen (Vedalaşma)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-purple-300 mb-3 border-b border-purple-500/30 pb-1">Begroeten (Greetings):</h4>
              <ul className="text-sm space-y-2 text-slate-300">
                <li><strong>goedemorgen</strong> (good morning)</li>
                <li><strong>goedemiddag</strong> (good afternoon)</li>
                <li><strong>goedenavond</strong> (good evening)</li>
                <li><strong>goedendag / dag</strong> (good day / hello)</li>
                <li><strong>hoi / hallo</strong> (hi / hello)</li>
              </ul>
            </div>
            <div className="bg-indigo-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-indigo-300 mb-3 border-b border-indigo-500/30 pb-1">Afscheid nemen (Saying goodbye):</h4>
              <ul className="text-sm space-y-2 text-slate-300">
                <li><strong>goedemorgen/middag/avond</strong> (vedalaşırken de söylenebilir)</li>
                <li><strong>dag / daag / doeg / doei</strong> (bye)</li>
                <li><strong>tot zo / tot straks</strong> (see you later/soon)</li>
                <li><strong>tot morgen</strong> (see you tomorrow)</li>
                <li><strong>tot ziens</strong> (goodbye, so long)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9 & 10: Begroet een cursist en bedenk vragen voor een interview.",
        isExtra: false,
        questions: [
          { id: "1.8_opd10_1", type: "multiple_choice", question: "Wat is een logische vervolgvraag na 'Ik woon in Nijmegen'?", options: ["Hoe heet je?", "Wat is je adres?", "Tot ziens!"], correctAnswer: "Wat is je adres?" }
        ]
      },
      {
        instruction: "Opdracht 11: Een formulier invullen (Form Doldurma).",
        isExtra: false,
        questions: [
          { id: "1.8_opd11_1", type: "multiple_choice", question: "Wat vul je in bij 'Voornaam'?", options: ["Jouw eerste naam (bijv. Jan).", "Jouw familienaam (bijv. Smit).", "Jouw straat."], correctAnswer: "Jouw eerste naam (bijv. Jan)." },
          { id: "1.8_opd11_2", type: "multiple_choice", question: "Wat vul je in bij 'Woonplaats'?", options: ["De straat waar je woont.", "De stad of het dorp waar je woont (bijv. Utrecht).", "Je telefoonnummer."], correctAnswer: "De stad of het dorp waar je woont (bijv. Utrecht)." },
          { id: "1.8_opd11_3", type: "multiple_choice", question: "Wat is 'Geslacht' op een formulier?", options: ["Man of Vrouw", "Jouw geboortedatum", "Je nationaliteit"], correctAnswer: "Man of Vrouw" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Begroeten",
        isExtra: true,
        questions: [
          { id: "1.8_smart_1", type: "multiple_choice", question: "Het is 14:00 uur. Wat zeg je als je de docent ziet?", options: ["Goedemorgen", "Goedemiddag", "Goedenavond"], correctAnswer: "Goedemiddag" },
          { id: "1.8_smart_2", type: "multiple_choice", question: "Je ziet je docent morgen weer. Wat zeg je als je weggaat?", options: ["Tot morgen", "Goedendag", "Hoi"], correctAnswer: "Tot morgen" },
          { id: "1.8_smart_3", type: "multiple_choice", question: "Je ziet je vriend over een uur weer (kısa süre sonra). Wat zeg je?", options: ["Tot morgen", "Tot ziens", "Tot straks / Tot zo"], correctAnswer: "Tot straks / Tot zo" }
        ]
      }
    ]
  },
  {
    id: "1.9",
    chapter: 1,
    title: "1.9 Uitspraak & Cultuur",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Zinsaccent (Cümle Vurgusu)</h3>
          <p><strong>Opdracht 12:</strong> Hollandacada cümlenin vurgusu (sesin yükseldiği yer) genellikle <strong>yeni veya zıt bir bilgi (antwoord)</strong> üzerine düşer. Aşağıdaki diyalogları sesli okuyarak kalın yazılmış kelimeleri vurgulayın:</p>
          <ul className="italic text-sm text-slate-300 mt-4 space-y-2">
            <li>1. Kom je uit Nederland? ➔ Nee, ik kom uit <strong>Hongarije</strong>.</li>
            <li>2. Heet je buurman Peter? ➔ Nee, mijn <strong>docent</strong> heet Peter.</li>
            <li>3. Woon je in de Hofstraat? ➔ Nee, ik woon in de <strong>Kerkstraat</strong>.</li>
            <li>4. Woon je in Groningen? ➔ Nee, ik woon in <strong>Leeuwarden</strong>.</li>
            <li>5. Woont u hier al twintig jaar? ➔ Nee, ik woon hier al <strong>dertig</strong> jaar.</li>
            <li>6. Is je postcode 3581 TB? ➔ Nee, mijn postcode is 3581 <strong>TW</strong>.</li>
            <li>7. Ben jij Lily Lander? ➔ Nee, ik ben <strong>Sara</strong> Lander.</li>
            <li>8. Beginnen we met tekst 2? ➔ Nee, we beginnen met tekst <strong>1</strong>.</li>
            <li>9. Is Abdul je voornaam? ➔ Nee, Abdul is mijn <strong>achternaam</strong>.</li>
            <li>10. Is het pauze? ➔ <strong>Ja</strong>, het is pauze.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: U of Jij? (Siz mi, Sen mi?)</h3>
          <p>Hollanda hiyerarşinin çok düşük olduğu, oldukça rahat (informeel) bir toplumdur. Ancak yaşlılara ve resmiyet gerektiren durumlara her zaman dikkat edilir.</p>
          <ul className="text-sm text-slate-300 mt-3 list-disc pl-5 space-y-2">
            <li><strong>Docent:</strong> Genellikle 'jij' denir. Ancak tanışırken saygıdan 'u' ile başlanabilir, hoca genelde "Zeg maar jij" (Sen diyebilirsin) der.</li>
            <li><strong>Buurvrouw van 82:</strong> Kesinlikle 'u' (Yaşlılara her zaman saygı gösterilir).</li>
            <li><strong>Buurman van 20:</strong> 'jij' (Genç komşulara sen denir).</li>
            <li><strong>Mevrouw / meneer Smit:</strong> 'u' (Eğer birine soyadıyla hitap ediyorsanız, bu resmi bir durumdur, 'u' kullanılır).</li>
            <li><strong>Susy / Ning:</strong> 'jij' (Sınıf arkadaşları her zaman birbirine sen der).</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>👥 In de praktijk: Top 10 van familienamen in Nederland</h3>
          <p className="text-sm text-slate-300 mb-2">Hollanda'daki en yaygın 10 soyisim şunlardır:</p>
          <ol className="text-sm text-slate-200 list-decimal pl-5 grid grid-cols-2 gap-x-4">
            <li>de Jong</li><li>Jansen</li><li>de Vries</li><li>van de / den / der Berg</li><li>van Dijk</li>
            <li>Bakker</li><li>Janssen</li><li>Visser</li><li>Smit</li><li>Meijer / Meyer</li>
          </ol>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Cultuur Oefening: U of Jij?",
        isExtra: false,
        questions: [
          { id: "1.9_cultuur_1", type: "multiple_choice", question: "Tegen wie zeg je u of jij? Je praat met je buurvrouw van 82 jaar.", options: ["u", "jij"], correctAnswer: "u" },
          { id: "1.9_cultuur_2", type: "multiple_choice", question: "Je praat met je medecursist (sınıf arkadaşı) Susy.", options: ["u", "jij"], correctAnswer: "jij" },
          { id: "1.9_cultuur_3", type: "multiple_choice", question: "Je praat met de docent (in Nederland).", options: ["vaak 'jij'", "altijd 'u'"], correctAnswer: "vaak 'jij'" },
          { id: "1.9_cultuur_4", type: "multiple_choice", question: "Je praat met je buurman van 20 jaar.", options: ["u", "jij"], correctAnswer: "jij" },
          { id: "1.9_cultuur_5", type: "multiple_choice", question: "Je praat met mevrouw / meneer Smit.", options: ["u", "jij"], correctAnswer: "u" }
        ]
      },
      {
        instruction: "Opdracht 12: Zinsaccent (Cümle Vurgusu)",
        isExtra: false,
        questions: [
          { id: "1.9_opd12_1", type: "multiple_choice", question: "Vraag: 'Woon je in de Hofstraat?' Welk woord krijgt het accent in het antwoord: 'Nee, ik woon in de Kerkstraat.'?", options: ["Nee", "woon", "Kerkstraat"], correctAnswer: "Kerkstraat" },
          { id: "1.9_opd12_2", type: "multiple_choice", question: "Vraag: 'Woont u hier al twintig jaar?' Welk woord krijgt het accent in het antwoord: 'Nee, ik woon hier al dertig jaar.'?", options: ["woon", "dertig", "jaar"], correctAnswer: "dertig" }
        ]
      }
    ]
  },
  {
    id: "On-Class-1",
    chapter: 1,
    title: "On-Class Extra",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Extra Zinnen & Hobby's</h3>
          
          <h4 style={{ color: '#a78bfa' }}>Extra vragen en groeten (Nasılsın?):</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Hoe gaat het met jou?</strong> ➔ Alles goed. / Het gaat goed. (Nasılsın? Her şey yolunda).</li>
            <li><strong>Tot later!</strong> (Sonra görüşürüz).</li>
          </ul>

          <h4 style={{ color: '#f472b6', marginTop: '20px' }}>Hobby's (Hobiler):</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Mijn hobby is...</strong> (Benim hobim...)</li>
            <li><strong>hardlopen</strong> (koşmak/running)</li>
            <li><strong>basketbal</strong> (Ik speel basketbal)</li>
            <li><strong>lezen</strong> (okumak ➔ <em>De krant lezen = reading the newspaper</em>)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen",
        isExtra: true,
        questions: [
          { id: "1_onclass_1", type: "multiple_choice", question: "A: 'Hoe gaat het met jou?' B: '________'", options: ["Ik ben Maria.", "Alles goed / Het gaat goed.", "Ik speel basketbal."], correctAnswer: "Alles goed / Het gaat goed." },
          { id: "1_onclass_2", type: "fill_in", question: "Vertaal: 'Mijn hobby is ________.' (Koşmak)", correctAnswer: "hardlopen" },
          { id: "1_onclass_3", type: "fill_in", question: "Vertaal: 'De krant ________' (Gazete okumak)", correctAnswer: "lezen" }
        ]
      }
    ]
  }
];