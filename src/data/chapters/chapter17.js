// src/data/chapters/chapter17.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter17Vocab = [
  { id: "17_1", chapter: 17, nl: "het studentenhuis", en: "student house", example: "Tina woont in een studentenhuis." },
  { id: "17_2", chapter: 17, nl: "de filosofie", en: "philosophy", example: "Tina studeert filosofie." },
  { id: "17_3", chapter: 17, nl: "de informatietechnologie", en: "information technology", example: "Sam studeert informatietechnologie." },
  { id: "17_4", chapter: 17, nl: "de technologie", en: "technology", example: "Moderne technologie." },
  { id: "17_5", chapter: 17, nl: "de wekker", en: "alarm clock", example: "De wekker gaat om 7.15 uur." },
  { id: "17_6", chapter: 17, nl: "de schat", en: "darling", example: "Goedemorgen schat." },
  { id: "17_7", chapter: 17, nl: "heerlijk", en: "wonderful / delicious", example: "Ik heb heerlijk gedroomd." },
  { id: "17_8", chapter: 17, nl: "gedroomd (dromen)", en: "dreamt", example: "Ik heb over een eiland gedroomd." },
  { id: "17_9", chapter: 17, nl: "tropisch", en: "tropical", example: "Een tropisch eiland." },
  { id: "17_10", chapter: 17, nl: "het eiland", en: "island", example: "Vakantie op een eiland." },
  { id: "17_11", chapter: 17, nl: "vogels (de vogel)", en: "birds (bird)", example: "Prachtige vogels op het eiland." },
  { id: "17_12", chapter: 17, nl: "helemaal", en: "at all / completely", example: "Ik kon helemaal niet slapen." },
  { id: "17_13", chapter: 17, nl: "wakker", en: "awake", example: "Ben je al wakker?" },
  { id: "17_14", chapter: 17, nl: "ben uitgerust (uitgerust zijn)", en: "feel well-rested", example: "Ben je wel uitgerust?" },
  { id: "17_15", chapter: 17, nl: "sta op (opstaan)", en: "get up", example: "Ik sta nu op." },
  { id: "17_16", chapter: 17, nl: "douchen", en: "shower", example: "Ik ga douchen." },
  { id: "17_17", chapter: 17, nl: "het ontbijtje (het ontbijt)", en: "breakfast", example: "Een lekker ontbijtje maken." },
  { id: "17_18", chapter: 17, nl: "tijdens", en: "during", example: "Tijdens het ontbijt praten we." },
  { id: "17_19", chapter: 17, nl: "gewoon", en: "ordinary / just", example: "Gewoon, niets bijzonders." },
  { id: "17_20", chapter: 17, nl: "het programma", en: "program", example: "Ik ga verder met dat nieuwe programma." },
  { id: "17_21", chapter: 17, nl: "het college", en: "lecture / class", example: "Ik heb om 9.00 uur college." },
  { id: "17_22", chapter: 17, nl: "de bibliotheek", en: "library", example: "Daarna ga ik naar de bibliotheek." },
  { id: "17_23", chapter: 17, nl: "het tentamen", en: "examination", example: "Volgende week is dat tentamen." },
  { id: "17_24", chapter: 17, nl: "de filosofiegeschiedenis", en: "history of philosophy", example: "Tentamen filosofiegeschiedenis." },
  { id: "17_25", chapter: 17, nl: "de geschiedenis", en: "history", example: "Geschiedenis is interessant." },
  { id: "17_26", chapter: 17, nl: "de bank", en: "bank / couch", example: "De bank bellen over de hypotheek." },
  { id: "17_27", chapter: 17, nl: "de hypotheek", en: "mortgage", example: "Vragen over de hypotheek." },
  { id: "17_28", chapter: 17, nl: "het avondeten", en: "dinner / evening meal", example: "Wat eten we voor het avondeten?" },
  { id: "17_29", chapter: 17, nl: "de pasta", en: "pasta", example: "Pasta met gehaktballetjes." },
  { id: "17_30", chapter: 17, nl: "gehaktballetjes (het gehaktballetje)", en: "meatballs", example: "Gehaktballetjes in tomatensaus." },
  { id: "17_31", chapter: 17, nl: "de tomatensaus", en: "tomato sauce", example: "Huisgemaakte tomatensaus." },
  { id: "17_32", chapter: 17, nl: "de saus", en: "sauce", example: "De saus is pittig." },
  { id: "17_33", chapter: 17, nl: "wassen", en: "wash", example: "Eerst even mijn handen wassen." },
  { id: "17_34", chapter: 17, nl: "de storing", en: "fault / breakdown", example: "Er was een storing in het systeem." },
  { id: "17_35", chapter: 17, nl: "het systeem", en: "system", example: "Het computersysteem werkt niet." },
  { id: "17_36", chapter: 17, nl: "ben kwijt (kwijt zijn)", en: "lost", example: "Ik ben veel gegevens kwijt." },
  { id: "17_37", chapter: 17, nl: "gegevens (het gegeven)", en: "data / details", example: "Al mijn gegevens zijn weg." },
  { id: "17_38", chapter: 17, nl: "vreemd", en: "strange", example: "Dat is heel vreemd." },
  { id: "17_39", chapter: 17, nl: "gekookt (koken)", en: "cooked", example: "Heb je gekookt?" },
  { id: "17_40", chapter: 17, nl: "pittig", en: "spicy / strong", example: "Het eten is lekker pittig." },
  { id: "17_41", chapter: 17, nl: "ontzettend", en: "really / very", example: "De docent kan ontzettend goed vertellen." },
  { id: "17_42", chapter: 17, nl: "de zaal", en: "room / hall", example: "In de donkere zaal van de bibliotheek." },
  { id: "17_43", chapter: 17, nl: "geluncht (lunchen)", en: "had lunch", example: "We hebben samen geluncht." },
  { id: "17_44", chapter: 17, nl: "komt terug (terugkomen)", en: "coming back", example: "Vladimir komt terug naar Nederland." },
  { id: "17_45", chapter: 17, nl: "mooi", en: "great / beautiful", example: "Mooi! Morgen om 19.00 uur afgesproken." },
  { id: "17_46", chapter: 17, nl: "lust (lusten)", en: "fancy / like to eat/drink", example: "Ik lust wel een kopje thee." },
  { id: "17_47", chapter: 17, nl: "de thee", en: "tea", example: "Een kopje thee drinken." },
  { id: "17_48", chapter: 17, nl: "rustig", en: "quiet", example: "Het is rustig in de bibliotheek." },
  { id: "17_49", chapter: 17, nl: "behalve", en: "besides / except", example: "Behalve de vaste publiek." },
  { id: "17_50", chapter: 17, nl: "vaste (vast)", en: "regular", example: "Het vaste publiek." },
  { id: "17_51", chapter: 17, nl: "het publiek", en: "audience", example: "Er was weinig publiek." },
  { id: "17_52", chapter: 17, nl: "niemand", en: "nobody", example: "Er was bijna niemand." },
  { id: "17_53", chapter: 17, nl: "het deel", en: "part / episode", example: "Ik heb deel 1 en 2 gezien." },
  { id: "17_54", chapter: 17, nl: "de serie", en: "series", example: "Een spannende serie." },
  { id: "17_55", chapter: 17, nl: "uitgenodigd (uitnodigen)", en: "invited", example: "Ik heb Max uitgenodigd." },
  { id: "17_56", chapter: 17, nl: "de lieverd", en: "sweetheart", example: "Welterusten lieverd." }
];

export const chapter17Dialogues = {
  "17.2": [
    { speaker: "Sam", text: "Goedemorgen schat, heb je lekker geslapen?", translation: "Günaydın sevgilim, iyi uyudun mu?" },
    { speaker: "Tina", text: "Ja heel goed, en ik heb zo heerlijk gedroomd. We waren op vakantie op een tropisch eiland met prachtige vogels. Het was geweldig. En jij?", translation: "Evet çok iyi, ve rüyamda harika şeyler gördüm. Muhteşem kuşların olduğu tropikal bir adada tatildeydik. Harikaydı. Ya sen?" },
    { speaker: "Sam", text: "Ik kon helemaal niet slapen. Ik heb de halve nacht wakker gelegen.", translation: "Hiç uyuyamadım. Gecenin yarısı uyanık yattım." },
    { speaker: "Tina", text: "Wat vervelend. Ben je wel uitgerust?", translation: "Ne kadar sinir bozucu. Dinlenebildin mi?" },
    { speaker: "Sam", text: "Ja hoor, ik ben nog jong. Ik sta op. Ik ga douchen en een lekker ontbijtje voor je maken.", translation: "Evet ya, ben hala gencim. Kalkıyorum. Duş alıp sana lezzetli bir kahvaltı hazırlayacağım." }
  ]
};

export const chapter17Sections = [
  {
    id: "17.1",
    chapter: 17,
    title: "17.1 Tekst: De dag van Tina en Sam",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>📄 Tekst: Een dag uit het leven van Tina en Sam</h3>
          <p>Sinema kasiyeri Tina ve bilgisayar programcısı Sam'in bir gününü saat saat takip ediyoruz[cite: 15]:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>07.15 uur:</strong> Uyanma, kahvaltı hazırlama, planlar[cite: 15].</li>
            <li><strong>08.35 uur:</strong> Otobüsle yola çıkış, fakülte, kütüphane ve tentamen (sınav) dönemi[cite: 15].</li>
            <li><strong>13.00 uur:</strong> İş yerinde öğle yemeği ve sistem arızası (storing)[cite: 15].</li>
            <li><strong>17.30 uur:</strong> Eve dönüş ve akşam yemeği hazırlığı (pasta met gehaktballetjes)[cite: 15].</li>
            <li><strong>18.45 uur:</strong> Tina'nın sinemadaki iş mesaisi[cite: 15].</li>
            <li><strong>23.00 uur:</strong> Eve dönüş, çay molası ve Sam'in iş yerindeki problemi düşünmesi[cite: 15].</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de tekst (Okuduğunu Anlama).",
        isExtra: false,
        questions: [
          { id: "17.1_opd1_1", type: "multiple_choice", question: "Wat studeert Tina?", options: ["Informatietechnologie", "Filosofie", "Geschiedenis"], correctAnswer: "Filosofie" },
          { id: "17.1_opd1_2", type: "multiple_choice", question: "Wat is het beroep van Sam?", options: ["Computerprogrammateur / IT", "Caissère in de bioscoop", "Makelaar"], correctAnswer: "Computerprogrammateur / IT" },
          { id: "17.1_opd1_3", type: "multiple_choice", question: "Waarom heeft Sam slecht geslapen?", options: ["Omdat hij ziek is", "Omdat hij nadenkt over een probleem op zijn werk", "Omdat het te warm is"], correctAnswer: "Omdat hij nadenkt over een probleem op zijn werk" }
        ]
      }
    ]
  },
  {
    id: "17.2",
    chapter: 17,
    title: "17.2 Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
          <p>Günlük rutinler, üniversite terimleri (college, tentamen, bibliotheek) ve teknoloji/iş dünyası kelimeleri bu ünitenin odak noktasıdır[cite: 15]. Flashcards bölümünden pratik yapabilirsiniz.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling?",
        isExtra: true,
        questions: generateSmartQuestions(17, "Woordenlijst", 10, chapter17Vocab)
      }
    ]
  },
  {
    id: "17.4",
    chapter: 17,
    title: "17.4 Er / Daar (Yer ve Konum Zamirleri)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>📍 Er vs Daar (Var / Orada)</h3>
          <p className="text-sm text-slate-300">Hollandacada <strong>"Er is / Er zijn"</strong> kalıbı İngilizcedeki "There is / There are" (Var) anlamını verir.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
            <li><strong>Er is</strong> een ongeluk gebeurd. (Bir kaza gerçekleşti/oldu).</li>
            <li><strong>Er zijn</strong> veel buitenlanders. (Çok sayıda yabancı var).</li>
          </ul>

          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-300 mb-1">ER mi, DAAR mı?</h4>
            <p className="text-sm text-cyan-100"><strong>Er:</strong> Belirtisiz bir durumu veya genel varoluşu söylerken kullanılır (There is...).<br/>
            <strong>Daar:</strong> Spesifik bir yeri (uzaktaki bir noktayı) parmakla gösterir gibi işaret ederken kullanılır (Over there / Orada).</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Geef antwoord op de volgende vragen. Gebruik er of daar.",
        isExtra: false,
        questions: [
          { id: "17.4_opd6_1", type: "multiple_choice", question: "1. Is er een sportschool? -> Ja, ________ is een sportschool in de straat.", options: ["er", "daar"], correctAnswer: "er" },
          { id: "17.4_opd6_2", type: "multiple_choice", question: "2. Zijn er bananen? -> Nee, ________ (op de markt) zijn geen bananen.", options: ["er", "daar"], correctAnswer: "daar" },
          { id: "17.4_opd6_3", type: "multiple_choice", question: "3. Is er nog plaats in de bibliotheek? -> Ja, ________ is nog plaats.", options: ["er", "daar"], correctAnswer: "er" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Er vs Daar",
        isExtra: true,
        questions: [
          { id: "17.4_smart_1", type: "multiple_choice", question: "Kies de correcte vorm: 'Look at that building! ________ is an old church.'", options: ["Er", "Daar"], correctAnswer: "Daar" },
          { id: "17.4_smart_2", type: "multiple_choice", question: "Kies de correcte vorm: '______ is a problem with the system.'", options: ["Er", "Daar"], correctAnswer: "Er" }
        ]
      }
    ]
  },
  {
    id: "17.5",
    chapter: 17,
    title: "17.5 Zijn – aan het + infinitief (Şimdiki Zaman - Sürüp Giden Eylem)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>⏳ Şimdiki Zaman Vurgusu: "Aan het + Infinitief"</h3>
          <p className="text-sm text-slate-300">Hollandacada normal şimdiki zaman (Presens) hem geniş zamanı hem de o an yapılan eylemi karşılar (Örn: *Ik werk* = Çalışıyorum veya Çalışırım).</p>
          <p className="text-sm text-slate-300 mt-2">Ancak karşıdakine <strong>"Şu anda tam bu saniyede bu eylemi yapmaktayım"</strong> vurgusunu (İngilizcedeki Present Continuous: *I am working*) vermek istiyorsanız <strong>"zijn + aan het + mastar fiil"</strong> kalıbını kullanırsınız.</p>

          <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
            <h4 className="text-emerald-300 font-bold mb-2">Formül ve Örnekler:</h4>
            <p className="text-sm font-mono text-white bg-black/20 p-2 rounded mb-2">[Özne] + [Zijn çekimi] + [aan het] + [Mastar Fiil]</p>
            <ul className="text-sm text-emerald-100 space-y-1 list-disc pl-5">
              <li>Sam <strong>is</strong> met een collega in Engeland <strong>aan het telefoneren</strong>. (Sam şu an telefonla konuşuyor).</li>
              <li>Tina <strong>is</strong> boodschappen <strong>aan het doen</strong>. (Tina şu an alışveriş yapıyor).</li>
              <li>Wij <strong>zijn</strong> Nederlands <strong>aan het leren</strong>. (Biz şu an Hollandaca öğreniyoruz).</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Gebruik voor deze zin de constructie zijn – aan het + infinitief.",
        isExtra: false,
        questions: [
          { id: "17.5_opd8_1", type: "fill_in", question: "1. Hans traint. -> Hans ________ aan het ________.", correctAnswer: "is, trainen" },
          { id: "17.5_opd8_2", type: "fill_in", question: "2. We kijken naar een film over Amsterdam. -> We ________ aan het ________.", correctAnswer: "zijn, kijken" },
          { id: "17.5_opd8_3", type: "fill_in", question: "3. Sam belt zijn collega in Londen. -> Sam ________ aan het ________.", correctAnswer: "is, bellen" },
          { id: "17.5_opd8_4", type: "fill_in", question: "4. Ik leer Nederlands. -> Ik ________ aan het ________.", correctAnswer: "ben, leren" },
          { id: "17.5_opd8_5", type: "fill_in", question: "5. Wat doe je nu? -> Wat ________ je aan het ________?", correctAnswer: "ben, doen" },
          { id: "17.5_opd8_6", type: "fill_in", question: "6. Ze studeert in de bibliotheek. -> Ze ________ aan het ________.", correctAnswer: "is, studeren" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Aan het + Infinitief",
        isExtra: true,
        questions: [
          { id: "17.5_smart_1", type: "multiple_choice", question: "Welke zin drukt uit dat een handeling *nu op dit exact moment* aan de gang is?", options: ["Ik kook pasta.", "Ik ben pasta aan het koken.", "Ik ga pasta koken."], correctAnswer: "Ik ben pasta aan het koken." },
          { id: "17.5_smart_2", type: "multiple_choice", question: "Kies de correcte vorm voor 'wij':", options: ["Wij zijn koffie aan het drinken.", "Wij is koffie aan het drinken.", "Wij ben koffie aan het drinken."], correctAnswer: "Wij zijn koffie aan het drinken." }
        ]
      }
    ]
  },
  {
    id: "17.6",
    chapter: 17,
    title: "17.6 Uitspraak & Cultuur (Wonen)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: r – l</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 12 & 13:</strong> Hollandacada <strong>r</strong> ile <strong>l</strong> seslerinin ayrımı çok önemlidir (Örn: rug vs lug, roepen vs lopen). Özellikle kelime başında veya sonunda bu iki akıcı ünsüzün karıştırılmaması gerekir.</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa'}}>🇳🇱 Cultuur: Samen uit of samen thuis? (Misafirlik Alışkanlıkları)</h3>
          <p className="text-sm text-slate-300">Hollanda'da arkadaşlarla buluşma yeri genellikle ev değil, <strong>café veya restaurant</strong>tur. Evde misafirlik ağırlamak daha samimi/özel bir çember (aile veya çok yakın arkadaşlar) için geçerlidir. Birçok Hollandalı evlerinin "fazla özel" (privé) olduğuna inanır.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "17.6_smart_1", type: "multiple_choice", question: "Waar spreken Nederlanders af met vrienden (meestal)?", options: ["Alleen thuis achter closed doors", "In een café of restaurant", "Op het station"], correctAnswer: "In een café of restaurant" },
          { id: "17.6_smart_2", type: "multiple_choice", question: "Welk woord heeft een duidelijke 'r' klank vooraan?", options: ["lopen", "roepen", "lezen"], correctAnswer: "roepen" }
        ]
      }
    ]
  }
];