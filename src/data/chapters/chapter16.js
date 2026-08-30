// src/data/chapters/chapter16.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter16Vocab = [
  { id: "16_1", chapter: 16, nl: "de caissère", en: "box office assistant / cashier", example: "Amira praat met de caissère." },
  { id: "16_2", chapter: 16, nl: "reserveren", en: "book / reserve", example: "Voor wanneer wilt u reserveren?" },
  { id: "16_3", chapter: 16, nl: "de voorstelling", en: "show / session", example: "Een kaartje voor de voorstelling van 20.15 uur." },
  { id: "16_4", chapter: 16, nl: "wat stom", en: "how stupid", example: "Wat stom van mij." },
  { id: "16_5", chapter: 16, nl: "verkeerd", en: "wrong", example: "Ik heb verkeerd gekeken." },
  { id: "16_6", chapter: 16, nl: "gekeken (kijken)", en: "looked", example: "Ik heb op de website gekeken." },
  { id: "16_7", chapter: 16, nl: "is al bezig", en: "has started / is already showing", example: "De film is al bezig." },
  { id: "16_8", chapter: 16, nl: "het begin", en: "beginning", example: "Ik heb het begin gemist." },
  { id: "16_9", chapter: 16, nl: "gemist (missen)", en: "missed", example: "We hebben de trein gemist." },
  { id: "16_10", chapter: 16, nl: "draaien", en: "are showing", example: "Draaien er nog andere films?" },
  { id: "16_11", chapter: 16, nl: "de zomerhitte", en: "summer heat", example: "De film heet Zomerhitte." },
  { id: "16_12", chapter: 16, nl: "de zomer", en: "summer", example: "In de zomer is het warm." },
  { id: "16_13", chapter: 16, nl: "de hitte", en: "heat", example: "Ik houd niet van de hitte." },
  { id: "16_14", chapter: 16, nl: "eerder", en: "earlier", example: "Kan het niet eerder?" },
  { id: "16_15", chapter: 16, nl: "opgenomen (opnemen)", en: "filmed / recorded", example: "De film is op Texel opgenomen." },
  { id: "16_16", chapter: 16, nl: "naar een verhaal van", en: "based on a story by", example: "Naar een verhaal van Jan Wolkers." },
  { id: "16_17", chapter: 16, nl: "de natuurdocumentaire", en: "nature documentary", example: "Het is een mooie natuurdocumentaire." },
  { id: "16_18", chapter: 16, nl: "de documentaire", en: "documentary", example: "Kijk je graag naar een documentaire?" },
  { id: "16_19", chapter: 16, nl: "gesproken (spreken)", en: "spoken", example: "De film is Nederlands gesproken." },
  { id: "16_20", chapter: 16, nl: "de ondertiteling", en: "subtitles", example: "Heeft de film ondertiteling?" },
  { id: "16_21", chapter: 16, nl: "ondertiteld (ondertitelen)", en: "subtitled", example: "De film is niet ondertiteld." },
  { id: "16_22", chapter: 16, nl: "bijna", en: "almost", example: "De film duurt bijna 100 minuten." },
  { id: "16_23", chapter: 16, nl: "de rang", en: "class / rank", example: "We hebben geen rangen." }
];

export const chapter16Dialogues = {
  "16.1": [
    { speaker: "Verteller", text: "Amira gaat naar de bioscoop.", translation: { tr: "Amira sinemaya gidiyor.", en: "Amira goes to the cinema." } },
    { speaker: "Amira", text: "Goedenavond, mag ik een kaartje voor 'Alles is liefde'?", translation: { tr: "İyi akşamlar, 'Alles is liefde' için bir bilet alabilir miyim?", en: "Good evening, may I have a ticket for 'Alles is liefde'?" } },
    { speaker: "Caissière", text: "Voor wanneer wilt u reserveren?", translation: { tr: "Ne zaman için rezervasyon yapmak istiyorsunuz?", en: "For when would you like to reserve/book?" } },
    { speaker: "Amira", text: "Nee, ik wil niet reserveren. Ik wil graag een kaartje voor vandaag, voor de voorstelling van 20.15 uur.", translation: { tr: "Hayır, rezervasyon yapmak istemiyorum. Bugün için, 20.15 seansı (gösterimi) için bir bilet istiyorum lütfen.", en: "No, I don't want to reserve. I would like a ticket for today, for the 8:15 PM show." } },
    { speaker: "Caissière", text: "Het spijt me, maar 'Alles is liefde' is al om 19.45 uur begonnen. U mag nog wel naar binnen.", translation: { tr: "Üzgünüm, ama 'Alles is liefde' saat 19.45'te çoktan başladı. Yine de içeri girebilirsiniz.", en: "I'm sorry, but 'Alles is liefde' already started at 7:45 PM. You may still go inside though." } },
    { speaker: "Amira", text: "Wat stom. Ik heb verkeerd gekeken, denk ik. Het is nu, even kijken, 20.00 uur, dus de film is al een kwartier bezig. Nee, dat wil ik niet want ik heb het begin gemist, dat vind ik niet leuk. Draaien er nog andere films?", translation: { tr: "Ne aptallık (Ne aptalım). Yanlış baktım sanırım. Saat şu an, bir bakayım, 20.00, yani film başlayalı bir çeyrek (15 dakika) olmuş. Hayır, bunu istemiyorum çünkü başını kaçırdım, bu hoşuma gitmez. Başka filmler oynuyor mu?", en: "How stupid. I looked wrong, I think. It is now, let me see, 8:00 PM, so the film has already been playing for 15 minutes. No, I don't want that because I missed the beginning, I don't like that. Are there any other films showing?" } },
    { speaker: "Caissière", text: "Eh, ja hoor. Om 20.45 uur draait 'Zomerhitte' en om 21.30 uur 'De Nieuwe Wildernis'. Eerder niet.", translation: { tr: "Ih, evet tabii. Saat 20.45'te 'Zomerhitte' ve 21.30'da 'De Nieuwe Wildernis' oynuyor. Daha erken yok.", en: "Er, yes sure. At 8:45 PM 'Zomerhitte' is showing and at 9:30 PM 'De Nieuwe Wildernis'. Not earlier." } },
    { speaker: "Amira", text: "Hm, ze zeggen me allebei niets.", translation: { tr: "Hm, ikisi de bana hiçbir şey ifade etmiyor (İkisini de bilmiyorum).", en: "Hm, neither of them means anything to me (I don't know either of them)." } },
    { speaker: "Caissière", text: "'Zomerhitte' is een Nederlandse film. Hij is op Texel opgenomen, naar een verhaal van Jan Wolkers, en 'De Nieuwe Wildernis' is een natuurdocumentaire. Hij draait al heel lang, iedereen vindt hem erg mooi.", translation: { tr: "'Zomerhitte' bir Hollanda filmi. Texel'de çekildi, Jan Wolkers'ın bir hikayesinden uyarlandı ve 'De Nieuwe Wildernis' bir doğa belgeseli. Çok uzun zamandır oynuyor, herkes onu çok güzel buluyor.", en: "'Zomerhitte' is a Dutch film. It was filmed on Texel, based on a story by Jan Wolkers, and 'De Nieuwe Wildernis' is a nature documentary. It has been showing for a long time, everyone thinks it's very beautiful." } },
    { speaker: "Amira", text: "Zijn de films Nederlands gesproken of hebben ze ondertiteling?", translation: { tr: "Filmler Hollandaca seslendirmeli mi yoksa altyazıları var mı?", en: "Are the films spoken in Dutch or do they have subtitles?" } },
    { speaker: "Caissière", text: "'Zomerhitte' en 'De Nieuwe Wildernis' zijn beide Nederlands gesproken en dus niet ondertiteld.", translation: { tr: "'Zomerhitte' ve 'De Nieuwe Wildernis' ikisi de Hollandaca seslendirmeli ve bu yüzden altyazılı değil.", en: "'Zomerhitte' and 'De Nieuwe Wildernis' are both spoken in Dutch and thus not subtitled." } },
    { speaker: "Amira", text: "Hoelang duurt 'Zomerhitte'?", translation: { tr: "'Zomerhitte' ne kadar sürüyor?", en: "How long does 'Zomerhitte' last?" } },
    { speaker: "Caissière", text: "Bijna 100 minuten, zonder pauze.", translation: { tr: "Neredeyse 100 dakika, molasız.", en: "Almost 100 minutes, without a break." } },
    { speaker: "Amira", text: "Dan een kaartje voor 'Zomerhitte', eerste rang graag.", translation: { tr: "O zaman 'Zomerhitte' için bir bilet, birinci sınıf (en iyi yer) lütfen.", en: "Then a ticket for 'Zomerhitte', first class please." } },
    { speaker: "Caissière", text: "We hebben geen rangen, alles is hier eerste rang. Dat is dan € 9,-.", translation: { tr: "Bizde sınıf/kategori (rang) yok, burada her yer birinci sınıf. O zaman (tutar) 9 Euro.", en: "We have no classes/ranks, everything is first class here. That will be € 9,-." } },
    { speaker: "Amira", text: "Alstublieft.", translation: { tr: "Buyurun.", en: "Here you go." } },
    { speaker: "Caissière", text: "Dit is uw kaartje. Veel plezier.", translation: { tr: "İşte biletiniz. İyi eğlenceler.", en: "This is your ticket. Have fun." } }
  ]
};

export const chapter16Sections = [
  {
    id: "16.1",
    chapter: 16,
    title: "16.1 Dialoog: Naar de bioscoop",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Naar de bioscoop (Sinemaya Gidiş)</h3>
            <p>Amira sinemaya gidiyor ancak saati yanlış anladığı için filmi kaçırıyor. Gişe görevlisi (de caissère) ile arasında geçen şu kalıplara dikkat edin:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Draaien er nog andere films?</strong> (Başka filmler oynuyor / dönüyor mu?)</li>
              <li><strong>De film is al bezig.</strong> (Film çoktan başladı / şu an oynuyor).</li>
              <li><strong>Ze zeggen me allebei niets.</strong> (İkisi de bana bir şey ifade etmiyor / İkisini de bilmiyorum).</li>
              <li><strong>Nederlands gesproken of ondertiteld?</strong> (Hollandaca seslendirmeli mi yoksa altyazılı mı?)</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: Naar de bioscoop (Going to the cinema)</h3>
            <p>Amira goes to the cinema but misses the movie because she got the time wrong. Pay attention to the phrases used with the box office assistant (de caissère):</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Draaien er nog andere films?</strong> (Are there any other films showing?)</li>
              <li><strong>De film is al bezig.</strong> (The film has already started / is currently showing).</li>
              <li><strong>Ze zeggen me allebei niets.</strong> (Neither of them mean anything to me / I don't know either of them).</li>
              <li><strong>Nederlands gesproken of ondertiteld?</strong> (Spoken in Dutch or subtitled?)</li>
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
          { id: "16.1_opd1_1", type: "multiple_choice", question: "1. Amira wil...", options: ["a) vandaag een film zien.", "b) reserveren voor een film."], correctAnswer: "a) vandaag een film zien." },
          { id: "16.1_opd1_2", type: "multiple_choice", question: "2. Amira gaat niet naar 'Alles is liefde'.", options: ["a) Dat mag niet want de film is al begonnen.", "b) Dat wil ze niet want ze heeft het begin gemist."], correctAnswer: "b) Dat wil ze niet want ze heeft het begin gemist." },
          { id: "16.1_opd1_3", type: "multiple_choice", question: "3. 'De Nieuwe Wildernis' is een Nederlandse film, dus...", options: ["a) ze spreken Nederlands.", "b) hij is niet ondertiteld."], correctAnswer: "a) ze spreken Nederlands." },
          { id: "16.1_opd1_4", type: "multiple_choice", question: "4. 'Zomerhitte' is...", options: ["a) een Nederlandse film.", "b) een natuurdocumentaire."], correctAnswer: "a) een Nederlandse film." },
          { id: "16.1_opd1_5", type: "multiple_choice", question: "5. Amira koopt een kaartje voor...", options: ["a) De Nieuwe Wildernis.", "b) Zomerhitte."], correctAnswer: "b) Zomerhitte." }
        ]
      }
    ]
  },
  {
    id: "16.2",
    chapter: 16,
    title: "16.2 Woordenlijst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
            <p>Sinema, film izleme ve bilet işlemleriyle ilgili kritik kelimeler bu bölümde yer alıyor. <strong>"Draaien"</strong> fiili normalde "dönmek/çevirmek" anlamına gelse de filmler için "vizyonda olmak / oynamak" anlamında kullanılır.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Vocabulary Analysis</h3>
            <p>Critical words related to cinema, watching movies, and ticketing are in this section. Although the verb <strong>"draaien"</strong> normally means "to turn", for movies it means "to be showing / to be screened".</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling? (What is the correct translation?)",
        isExtra: true,
        questions: generateSmartQuestions(16, "Woordenlijst", 10, chapter16Vocab)
      }
    ]
  },
  {
    id: "16.3",
    chapter: 16,
    title: "16.3 Conjuncties (Bağlaçlar: en, of, maar, want, dus)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🔗 Conjuncties (Bağlaçlar)</h3>
            <p className="text-sm text-slate-300">Hollandacada iki normal cümleyi (Hoofdzin + Hoofdzin) birbirine bağlamak için kullanılan 5 temel bağlaç vardır: <strong>en</strong> (ve), <strong>of</strong> (veya), <strong>maar</strong> (ama), <strong>want</strong> (çünkü), <strong>dus</strong> (bu yüzden).</p>
            
            <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
              <h4 className="font-bold text-emerald-300 mb-2">🚨 ALTIN KURAL: Kelime Dizilimi Değişmez!</h4>
              <p className="text-sm text-emerald-100">Bu 5 bağlaçtan (Koördinerend voegwoord) biri kullanıldığında cümlelerdeki kelime sırası <strong>ASLA DEĞİŞMEZ</strong>. Her iki cümle de kendi normal sırasını (Özne + Fiil) korur. İnversiyon (devrik yapı) veya fiili sona atma işlemi YAPILMAZ!</p>
              <ul className="text-sm text-white mt-3 space-y-2 list-disc pl-5">
                <li>Zomerhitte is Nederlands gesproken <strong>en</strong> De Nieuwe Wildernis is ook niet ondertiteld.</li>
                <li>Zijn de films Nederlands gesproken <strong>of</strong> hebben ze ondertiteling?</li>
                <li>Het spijt me, <strong>maar</strong> Alles is liefde is al begonnen.</li>
                <li>Dat wil ik niet, <strong>want</strong> ik heb het begin gemist.</li>
                <li>Het is nu 20.00 uur, <strong>dus</strong> de film is al een half uur bezig.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🔗 Conjuncties (Conjunctions)</h3>
            <p className="text-sm text-slate-300">In Dutch, there are 5 basic conjunctions used to connect two normal sentences (Main clause + Main clause): <strong>en</strong> (and), <strong>of</strong> (or), <strong>maar</strong> (but), <strong>want</strong> (because), <strong>dus</strong> (so/therefore).</p>
            
            <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
              <h4 className="font-bold text-emerald-300 mb-2">🚨 GOLDEN RULE: Word Order Doesn't Change!</h4>
              <p className="text-sm text-emerald-100">When one of these 5 conjunctions (Coordinating conjunction) is used, the word order in the sentences <strong>NEVER CHANGES</strong>. Both sentences keep their normal order (Subject + Verb). You DO NOT use inversion or move the verb to the end!</p>
              <ul className="text-sm text-white mt-3 space-y-2 list-disc pl-5">
                <li>Zomerhitte is Nederlands gesproken <strong>en</strong> De Nieuwe Wildernis is ook niet ondertiteld.</li>
                <li>Zijn de films Nederlands gesproken <strong>of</strong> hebben ze ondertiteling?</li>
                <li>Het spijt me, <strong>maar</strong> Alles is liefde is al begonnen.</li>
                <li>Dat wil ik niet, <strong>want</strong> ik heb het begin gemist.</li>
                <li>Het is nu 20.00 uur, <strong>dus</strong> de film is al een half uur bezig.</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Vul in: en, of, maar, want of dus. (Fill in: en, of, maar, want or dus.)",
        isExtra: false,
        questions: [
          { id: "16.3_opd2_1", type: "multiple_choice", question: "1. Je kunt een kaartje kopen bij de automaat ________ je kunt het online kopen.", options: ["en", "of", "want"], correctAnswer: "of" },
          { id: "16.3_opd2_2", type: "multiple_choice", question: "2. Het wiel van mijn fiets staat scheef ________ de rem doet het niet goed.", options: ["en", "maar", "dus"], correctAnswer: "en" },
          { id: "16.3_opd2_3", type: "multiple_choice", question: "3. Het is een Nederlandse film ________ je moet goed luisteren en opletten.", options: ["want", "dus", "of"], correctAnswer: "dus" },
          { id: "16.3_opd2_4", type: "multiple_choice", question: "4. Mijn zus is getrouwd ________ ze woont nu in Peru.", options: ["en", "maar", "of"], correctAnswer: "en" },
          { id: "16.3_opd2_5", type: "multiple_choice", question: "5. Ik wil u graag helpen ________ ik ben hier helaas ook niet bekend.", options: ["en", "maar", "want"], correctAnswer: "maar" },
          { id: "16.3_opd2_6", type: "multiple_choice", question: "6. We moesten heel lang wachten ________ Cecilia's vliegtuig kwam veel te laat aan.", options: ["want", "dus", "of"], correctAnswer: "want" },
          { id: "16.3_opd2_7", type: "multiple_choice", question: "7. We kunnen hier nog een kopje koffie nemen ________ we kunnen naar een ander café gaan.", options: ["of", "en", "want"], correctAnswer: "of" },
          { id: "16.3_opd2_8", type: "multiple_choice", question: "8. Dit is een leuk eetcafé ________ je kunt hier niet vegetarisch eten.", options: ["dus", "maar", "want"], correctAnswer: "maar" },
          { id: "16.3_opd2_9", type: "multiple_choice", question: "9. Je hoeft niet met de bus te gaan ________ de bioscoop is hier dichtbij.", options: ["want", "dus", "maar"], correctAnswer: "want" },
          { id: "16.3_opd2_10", type: "multiple_choice", question: "10. Studenten krijgen korting op het abonnement. Jij bent student, ________ je krijgt korting.", options: ["want", "dus", "en"], correctAnswer: "dus" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Zinsbouw (Cümle Yapısı / Word Order)",
        isExtra: true,
        questions: [
          { id: "16.3_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct? (Which sentence is grammatically correct?)", options: ["Ik ga niet naar buiten, want het regent.", "Ik ga niet naar buiten, want regent het.", "Ik ga niet naar buiten, want het regenen is."], correctAnswer: "Ik ga niet naar buiten, want het regent." },
          { id: "16.3_smart_2", type: "multiple_choice", question: "Vertaal (Translate): 'Ben açım, BU YÜZDEN bir elma yiyorum. / I'm hungry, SO I am eating an apple.'", options: ["Ik heb honger, want ik eet een appel.", "Ik heb honger, dus ik eet een appel.", "Ik heb honger, maar ik eet een appel."], correctAnswer: "Ik heb honger, dus ik eet een appel." }
        ]
      }
    ]
  },
  {
    id: "16.4",
    chapter: 16,
    title: "16.4 Tekst: Kijkwijzer",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Kijkwijzer (İzleyici Rehberi)</h3>
            <p className="text-sm text-slate-300">Hollanda'da filmlerin ve televizyon programlarının yaş sınırlarını ve olumsuz içeriklerini gösteren sisteme <strong>Kijkwijzer</strong> denir.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-1">Leeftijden (Yaş Sınırları):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>AL:</strong> Alle Leeftijden (Her yaşa uygun)</li>
                  <li><strong>6, 9, 12, 16:</strong> Let op met kinderen tot ... jaar. (O yaşa kadar dikkat et).</li>
                </ul>
              </div>
              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-1">Pictogrammen (Simgeler):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>Geweld:</strong> Şiddet</li>
                  <li><strong>Angst:</strong> Korku</li>
                  <li><strong>Seks:</strong> Cinsellik</li>
                  <li><strong>Grof taalgebruik:</strong> Küfür / Kötü söz</li>
                  <li><strong>Drugs- en alcoholmisbruik:</strong> Uyuşturucu/Alkol</li>
                  <li><strong>Discriminatie:</strong> Ayrımcılık</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">Not: Kijkwijzer filmin kalitesi hakkında bilgi vermez (informeert niet over kwaliteit). Ebeveynler kendileri sorumludur (Ouders zijn zelf verantwoordelijk).</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Text: Kijkwijzer (Viewing Guide)</h3>
            <p className="text-sm text-slate-300">The system in the Netherlands that indicates age limits and negative content for films and television programs is called <strong>Kijkwijzer</strong>.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-1">Leeftijden (Age limits):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>AL:</strong> Alle Leeftijden (All Ages)</li>
                  <li><strong>6, 9, 12, 16:</strong> Let op met kinderen tot ... jaar. (Be careful with children up to ... years).</li>
                </ul>
              </div>
              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-1">Pictogrammen (Icons):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>Geweld:</strong> Violence</li>
                  <li><strong>Angst:</strong> Fear/Scary</li>
                  <li><strong>Seks:</strong> Sex</li>
                  <li><strong>Grof taalgebruik:</strong> Coarse language / Swearing</li>
                  <li><strong>Drugs- en alcoholmisbruik:</strong> Drug and alcohol abuse</li>
                  <li><strong>Discriminatie:</strong> Discrimination</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">Note: Kijkwijzer does not provide information about the quality of the film (informeert niet over kwaliteit). Parents are responsible themselves (Ouders zijn zelf verantwoordelijk).</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Beantwoord de vragen met behulp van de Kijkwijzer. (Answer the questions using the Kijkwijzer.)",
        isExtra: false,
        questions: [
          { id: "16.4_opd9_1", type: "multiple_choice", question: "1. Je wil niet naar een film met discriminatie. Naar welke film op de poster ga je dan NIET?", options: ["Date Night", "Sneak Preview", "Robin Hood"], correctAnswer: "Sneak Preview" },
          { id: "16.4_opd9_2", type: "multiple_choice", question: "2. Je wil naar een actiefilm met geweld (violence). Dat vind je geen probleem. Naar welke film kun je gaan?", options: ["Planet 51", "Bride Flight", "Centurion (16)"], correctAnswer: "Centurion (16)" }
        ]
      }
    ]
  },
  {
    id: "16.5",
    chapter: 16,
    title: "16.5 Uitspraak: ig - lijk",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ig – lijk</h3>
            <p className="text-sm text-slate-300">Hollandacada kelime sonuna gelen <strong>-ig</strong> ve <strong>-lijk</strong> ekleri YAZILDIĞI GİBİ OKUNMAZLAR. Bu öğrencilerin en sık yaptığı telaffuz hatalarından biridir!</p>
            <ul className="text-sm text-slate-200 mt-3 list-disc pl-5 space-y-2">
              <li><strong>-ig</strong> eki, <strong>"uhg" (ıh)</strong> gibi okunur.<br/>
                <em>Örnek: twintig (tvintıh), veilig (feylıh), prachtig (prahtıh).</em></li>
              <li><strong>-lijk</strong> eki, <strong>"luk" (lık)</strong> gibi okunur.<br/>
                <em>Örnek: moeilijk (muylık), natuurlijk (natürlük), heerlijk (heerlık).</em></li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ig – lijk (Pronunciation)</h3>
            <p className="text-sm text-slate-300">In Dutch, the suffixes <strong>-ig</strong> and <strong>-lijk</strong> at the end of a word ARE NOT PRONOUNCED AS THEY ARE WRITTEN. This is one of the most common pronunciation mistakes students make!</p>
            <ul className="text-sm text-slate-200 mt-3 list-disc pl-5 space-y-2">
              <li>The <strong>-ig</strong> suffix is pronounced like <strong>"uhg" (with a soft g/ch sound)</strong>.<br/>
                <em>Example: twintig (twin-tuhg), veilig (vey-luhg), prachtig (prahch-tuhg).</em></li>
              <li>The <strong>-lijk</strong> suffix is pronounced like <strong>"luk"</strong>.<br/>
                <em>Example: moeilijk (mooy-luk), natuurlijk (nah-tuur-luk), heerlijk (heer-luk).</em></li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Uitspraak",
        isExtra: true,
        questions: [
          { id: "16.5_smart_1", type: "multiple_choice", question: "Hoe spreek je (telaffuz / pronounce) het woord 'makkelijk' uit?", options: ["makke-lijk", "makke-lik / makke-luk", "makke-liek"], correctAnswer: "makke-lik / makke-luk" },
          { id: "16.5_smart_2", type: "multiple_choice", question: "Hoe spreek je het woord 'jarig' uit?", options: ["ja-rieg", "ja-rug / ja-rih", "ja-rij"], correctAnswer: "ja-rug / ja-rih" }
        ]
      }
    ]
  }
];