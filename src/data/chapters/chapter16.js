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
    { speaker: "Verteller", text: "Amira gaat naar de bioscoop.", translation: "Amira sinemaya gidiyor." },
    { speaker: "Amira", text: "Goedenavond, mag ik een kaartje voor 'Alles is liefde'?", translation: "İyi akşamlar, 'Alles is liefde' için bir bilet alabilir miyim?" },
    { speaker: "Caissière", text: "Voor wanneer wilt u reserveren?", translation: "Ne zaman için rezervasyon yapmak istiyorsunuz?" },
    { speaker: "Amira", text: "Nee, ik wil niet reserveren. Ik wil graag een kaartje voor vandaag, voor de voorstelling van 20.15 uur.", translation: "Hayır, rezervasyon yapmak istemiyorum. Bugün için, 20.15 seansı (gösterimi) için bir bilet istiyorum lütfen." },
    { speaker: "Caissière", text: "Het spijt me, maar 'Alles is liefde' is al om 19.45 uur begonnen. U mag nog wel naar binnen.", translation: "Üzgünüm, ama 'Alles is liefde' saat 19.45'te çoktan başladı. Yine de içeri girebilirsiniz." },
    { speaker: "Amira", text: "Wat stom. Ik heb verkeerd gekeken, denk ik. Het is nu, even kijken, 20.00 uur, dus de film is al een kwartier bezig. Nee, dat wil ik niet want ik heb het begin gemist, dat vind ik niet leuk. Draaien er nog andere films?", translation: "Ne aptallık (Ne aptalım). Yanlış baktım sanırım. Saat şu an, bir bakayım, 20.00, yani film başlayalı bir çeyrek (15 dakika) olmuş. Hayır, bunu istemiyorum çünkü başını kaçırdım, bu hoşuma gitmez. Başka filmler oynuyor mu?" },
    { speaker: "Caissière", text: "Eh, ja hoor. Om 20.45 uur draait 'Zomerhitte' en om 21.30 uur 'De Nieuwe Wildernis'. Eerder niet.", translation: "Ih, evet tabii. Saat 20.45'te 'Zomerhitte' ve 21.30'da 'De Nieuwe Wildernis' oynuyor. Daha erken yok." },
    { speaker: "Amira", text: "Hm, ze zeggen me allebei niets.", translation: "Hm, ikisi de bana hiçbir şey ifade etmiyor (İkisini de bilmiyorum)." },
    { speaker: "Caissière", text: "'Zomerhitte' is een Nederlandse film. Hij is op Texel opgenomen, naar een verhaal van Jan Wolkers, en 'De Nieuwe Wildernis' is een natuurdocumentaire. Hij draait al heel lang, iedereen vindt hem erg mooi.", translation: "'Zomerhitte' bir Hollanda filmi. Texel'de çekildi, Jan Wolkers'ın bir hikayesinden uyarlandı ve 'De Nieuwe Wildernis' bir doğa belgeseli. Çok uzun zamandır oynuyor, herkes onu çok güzel buluyor." },
    { speaker: "Amira", text: "Zijn de films Nederlands gesproken of hebben ze ondertiteling?", translation: "Filmler Hollandaca seslendirmeli mi yoksa altyazıları var mı?" },
    { speaker: "Caissière", text: "'Zomerhitte' en 'De Nieuwe Wildernis' zijn beide Nederlands gesproken en dus niet ondertiteld.", translation: "'Zomerhitte' ve 'De Nieuwe Wildernis' ikisi de Hollandaca seslendirmeli ve bu yüzden altyazılı değil." },
    { speaker: "Amira", text: "Hoelang duurt 'Zomerhitte'?", translation: "'Zomerhitte' ne kadar sürüyor?" },
    { speaker: "Caissière", text: "Bijna 100 minuten, zonder pauze.", translation: "Neredeyse 100 dakika, molasız." },
    { speaker: "Amira", text: "Dan een kaartje voor 'Zomerhitte', eerste rang graag.", translation: "O zaman 'Zomerhitte' için bir bilet, birinci sınıf (en iyi yer) lütfen." },
    { speaker: "Caissière", text: "We hebben geen rangen, alles is hier eerste rang. Dat is dan € 9,-.", translation: "Bizde sınıf/kategori (rang) yok, burada her yer birinci sınıf. O zaman (tutar) 9 Euro." },
    { speaker: "Amira", text: "Alstublieft.", translation: "Buyurun." },
    { speaker: "Caissière", text: "Dit is uw kaartje. Veel plezier.", translation: "İşte biletiniz. İyi eğlenceler." }
  ]
};

export const chapter16Sections = [
  {
    id: "16.1",
    chapter: 16,
    title: "16.1 Dialoog: Naar de bioscoop",
    theory: (
      <>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Kies het goede vervolg: a of b.",
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
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
          <p>Sinema, film izleme ve bilet işlemleriyle ilgili kritik kelimeler bu bölümde yer alıyor. <strong>"Draaien"</strong> fiili normalde "dönmek/çevirmek" anlamına gelse de filmler için "vizyonda olmak / oynamak" anlamında kullanılır.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling?",
        isExtra: true,
        questions: generateSmartQuestions(16, "Woordenlijst", 10, chapter16Vocab)
      }
    ]
  },
  {
    id: "16.3",
    chapter: 16,
    title: "16.3 Conjuncties (Bağlaçlar: en, of, maar, want, dus)",
    theory: (
      <>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Vul in: en, of, maar, want of dus.",
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
        instruction: "Slimme Oefeningen: Zinsbouw (Cümle Yapısı)",
        isExtra: true,
        questions: [
          { id: "16.3_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct?", options: ["Ik ga niet naar buiten, want het regent.", "Ik ga niet naar buiten, want regent het.", "Ik ga niet naar buiten, want het regenen is."], correctAnswer: "Ik ga niet naar buiten, want het regent." },
          { id: "16.3_smart_2", type: "multiple_choice", question: "Vertaal: 'Ben açım, BU YÜZDEN bir elma yiyorum.'", options: ["Ik heb honger, want ik eet een appel.", "Ik heb honger, dus ik eet een appel.", "Ik heb honger, maar ik eet een appel."], correctAnswer: "Ik heb honger, dus ik eet een appel." }
        ]
      }
    ]
  },
  {
    id: "16.4",
    chapter: 16,
    title: "16.4 Tekst: Kijkwijzer",
    theory: (
      <>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Beantwoord de vragen met behulp van de Kijkwijzer.",
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
    theory: (
      <>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak",
        isExtra: true,
        questions: [
          { id: "16.5_smart_1", type: "multiple_choice", question: "Hoe spreek je (telaffuz) het woord 'makkelijk' uit?", options: ["makke-lijk", "makke-lik / makke-luk", "makke-liek"], correctAnswer: "makke-lik / makke-luk" },
          { id: "16.5_smart_2", type: "multiple_choice", question: "Hoe spreek je het woord 'jarig' uit?", options: ["ja-rieg", "ja-rug / ja-rih", "ja-rij"], correctAnswer: "ja-rug / ja-rih" }
        ]
      }
    ]
  }
];