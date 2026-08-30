// src/data/chapters/chapter10.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter10Vocab = [
  { id: "10_1", chapter: 10, nl: "de fiets", en: "bike / bicycle", example: "Ik ga met de fiets." },
  { id: "10_2", chapter: 10, nl: "de fietsenmaker", en: "cycle repairman", example: "De fietsenmaker repareert mijn fiets." },
  { id: "10_3", chapter: 10, nl: "inderdaad", en: "indeed", example: "Dat is inderdaad waar." },
  { id: "10_4", chapter: 10, nl: "duidelijk", en: "clear", example: "Het is heel duidelijk." },
  { id: "10_5", chapter: 10, nl: "lijkt", en: "seems / appears", example: "Mijn fiets lijkt wel total loss." },
  { id: "10_6", chapter: 10, nl: "total loss", en: "a write-off", example: "De auto is total loss." },
  { id: "10_7", chapter: 10, nl: "gebeurd", en: "happened", example: "Wat is er gebeurd?" },
  { id: "10_8", chapter: 10, nl: "gevallen", en: "fallen", example: "Ik ben gisteren gevallen." },
  { id: "10_9", chapter: 10, nl: "regende", en: "was raining", example: "Het regende de hele dag." },
  { id: "10_10", chapter: 10, nl: "glad", en: "slippery", example: "De weg is erg glad." },
  { id: "10_11", chapter: 10, nl: "fietste weg", en: "cycled away", example: "Ik fietste weg van de praktijk." },
  { id: "10_12", chapter: 10, nl: "fietsen", en: "cycle", example: "Wij fietsen naar school." },
  { id: "10_13", chapter: 10, nl: "de praktijk", en: "practice", example: "De arts is in de praktijk." },
  { id: "10_14", chapter: 10, nl: "wilde", en: "wanted", example: "Ik wilde naar huis gaan." },
  { id: "10_15", chapter: 10, nl: "rechts afslaan", en: "turn right", example: "Je moet hier rechts afslaan." },
  { id: "10_16", chapter: 10, nl: "gleed weg", en: "slipped", example: "Ik gleed weg op het ijs." },
  { id: "10_17", chapter: 10, nl: "mankeerde", en: "was wrong", example: "Ik mankeerde zelf niets." },
  { id: "10_18", chapter: 10, nl: "zelf", en: "myself", example: "Ik doe het zelf." },
  { id: "10_19", chapter: 10, nl: "een slag in het wiel", en: "the wheel is crooked", example: "Er zit een slag in het wiel." },
  { id: "10_20", chapter: 10, nl: "het wiel", en: "wheel", example: "Mijn fiets heeft twee wielen." },
  { id: "10_21", chapter: 10, nl: "het stuur", en: "handlebars", example: "Houd het stuur goed vast." },
  { id: "10_22", chapter: 10, nl: "het zadel", en: "seat", example: "Het zadel is te hoog." },
  { id: "10_23", chapter: 10, nl: "staan", en: "are (stand)", example: "De fietsen staan buiten." },
  { id: "10_24", chapter: 10, nl: "scheef", en: "crooked", example: "Het stuur staat scheef." },
  { id: "10_25", chapter: 10, nl: "het ding", en: "thing", example: "Wat is dat voor een ding?" },
  { id: "10_26", chapter: 10, nl: "zo'n", en: "such a", example: "Hoe heet zo'n ding?" },
  { id: "10_27", chapter: 10, nl: "de bagagedrager", en: "carrier", example: "Mijn tas zit op de bagagedrager." },
  { id: "10_28", chapter: 10, nl: "afgebroken", en: "broken", example: "De sleutel is afgebroken." },
  { id: "10_29", chapter: 10, nl: "bedoelt", en: "mean", example: "Wat bedoelt u?" },
  { id: "10_30", chapter: 10, nl: "de trapper", en: "pedal", example: "De trapper is kapot." },
  { id: "10_31", chapter: 10, nl: "kapot", en: "broken", example: "Mijn telefoon is kapot." },
  { id: "10_32", chapter: 10, nl: "banden", en: "tyres", example: "De banden zijn erg glad." },
  { id: "10_33", chapter: 10, nl: "verstaan", en: "heard", example: "Sorry, ik heb u niet verstaan." },
  { id: "10_34", chapter: 10, nl: "logisch", en: "logical", example: "Dat is een logische vraag." },
  { id: "10_35", chapter: 10, nl: "helemaal", en: "completely", example: "Het is helemaal fout." },
  { id: "10_36", chapter: 10, nl: "rijdt", en: "goes (rides)", example: "De auto rijdt snel." },
  { id: "10_37", chapter: 10, nl: "remmen", en: "brakes", example: "De remmen deden het niet goed." },
  { id: "10_38", chapter: 10, nl: "deden", en: "worked", example: "Ze deden gisteren nog prima." },
  { id: "10_39", chapter: 10, nl: "controleren", en: "check", example: "Ik zal de fiets controleren." },
  { id: "10_40", chapter: 10, nl: "in orde maken", en: "fix", example: "Ik maak uw fiets in orde." },
  { id: "10_41", chapter: 10, nl: "tiptop in orde", en: "in tip-top condition", example: "De fiets is tiptop in orde." },
  { id: "10_42", chapter: 10, nl: "leer", en: "learn", example: "Ik leer veel nieuwe woorden." },
  { id: "10_43", chapter: 10, nl: "uitdrukkingen", en: "expression", example: "Dat is een Nederlandse uitdrukking." },
  { id: "10_44", chapter: 10, nl: "klaar", en: "ready", example: "Wanneer is het klaar?" },
  { id: "10_45", chapter: 10, nl: "Koningsdag", en: "King's Day", example: "Morgen is het Koningsdag." },
  { id: "10_46", chapter: 10, nl: "de feestdag", en: "public holiday", example: "Het is een nationale feestdag." },
  { id: "10_47", chapter: 10, nl: "het feest", en: "party / celebration", example: "We hebben een feest." },
  { id: "10_48", chapter: 10, nl: "betekent", en: "means", example: "Wat betekent dat woord?" },
  { id: "10_49", chapter: 10, nl: "gesloten", en: "closed", example: "De winkel is gesloten." },
  { id: "10_50", chapter: 10, nl: "het einde", en: "end", example: "Aan het einde van de dag." },
  { id: "10_51", chapter: 10, nl: "ophalen", en: "collect", example: "U kunt de fiets morgen ophalen." }
];

export const chapter10Dialogues = {
  "10.1": [
    { speaker: "Verteller", text: "Mevrouw Kirbas, de huisarts, komt met haar fiets bij de fietsenmaker.", translation: { tr: "Aile hekimi Bayan Kirbas, bisikletiyle bisiklet tamircisine gelir.", en: "Mrs. Kirbas, the general practitioner, arrives at the bicycle repair shop with her bike." } },
    { speaker: "Fietsenmaker", text: "Nou, ik hoef u niet te vragen wat u hier komt doen!", translation: { tr: "Şey, buraya ne yapmaya geldiğinizi sormama gerek yok!", en: "Well, I don't need to ask you what you're doing here!" } },
    { speaker: "Mevrouw Kirbas", text: "Nee, dat is inderdaad wel duidelijk, mijn fiets lijkt wel total loss.", translation: { tr: "Hayır, bu gerçekten oldukça açık, bisikletim hurdaya dönmüş (pert olmuş) gibi görünüyor.", en: "No, that is indeed quite clear, my bike looks like a total write-off." } },
    { speaker: "Fietsenmaker", text: "Wat is er gebeurd?", translation: { tr: "Ne oldu?", en: "What happened?" } },
    { speaker: "Mevrouw Kirbas", text: "Ik ben gevallen. Het regende gisteren en het was een beetje glad. Ik fietste weg van onze praktijk, wilde rechts afslaan en gleed weg. Ik mankeerde zelf niets, maar mijn fiets wel. Er zit een slag in het wiel, het stuur en het zadel staan scheef en dat ... dat ding – hoe zeg je dat in het Nederlands? – is afgebroken. Hoe heet zo’n ding?", translation: { tr: "Düştüm. Dün yağmur yağıyordu ve biraz kaygandı. Muayenehanemizden bisikletle ayrıldım, sağa dönmek istedim ve kaydım. Bende bir şey yok ama bisikletimde var. Tekerlek yamulmuş, gidon ve sele eğri duruyor ve şu... şu şey - Hollandacada nasıl dersiniz? - kırılmış. Böyle bir şeye ne ad verilir?", en: "I fell. It was raining yesterday and it was a bit slippery. I cycled away from our practice, wanted to turn right and slipped. I wasn't hurt myself, but my bike is. There's a buckle in the wheel, the handlebars and the saddle are crooked and that... that thing – how do you say that in Dutch? – is broken off. What is such a thing called?" } },
    { speaker: "Fietsenmaker", text: "U bedoelt de bagagedrager. De trapper is ook kapot en de banden zijn erg glad.", translation: { tr: "Bagaj taşıyıcısını kastediyorsunuz. Pedal da kırık ve lastikler çok kaygan (kabaklaşmış).", en: "You mean the luggage carrier. The pedal is also broken and the tires are very slippery/bald." } },
    { speaker: "Mevrouw Kirbas", text: "Sorry, ik heb u niet verstaan. Wat zegt u?", translation: { tr: "Özür dilerim, sizi duyamadım (anlayamadım). Ne dediniz?", en: "Sorry, I didn't hear/understand you. What did you say?" } },
    { speaker: "Fietsenmaker", text: "De banden zijn erg oud, dus het is wel logisch dat u bent gevallen.", translation: { tr: "Lastikler çok eski, bu yüzden düşmeniz çok mantıklı (doğal).", en: "The tires are very old, so it's quite logical that you fell." } },
    { speaker: "Mevrouw Kirbas", text: "Ja, het zijn inderdaad oude banden. Het is helemaal een oude fiets, maar hij reed nog prima. Misschien kunt u ook even naar de remmen kijken? Ze deden het vanmorgen niet goed.", translation: { tr: "Evet, gerçekten de eski lastikler. Tamamen eski bir bisiklet, ama hala harika gidiyordu. Belki frenlere de bir bakabilirsiniz? Bu sabah iyi çalışmıyorlardı.", en: "Yes, they are indeed old tires. It's a completely old bike, but it still rode fine. Maybe you can also take a look at the brakes? They weren't working well this morning." } },
    { speaker: "Fietsenmaker", text: "Ik zal de hele fiets even controleren. Ik maak hem weer tiptop in orde.", translation: { tr: "Tüm bisikleti kontrol edeceğim. Onu tekrar en iyi (tiptop) duruma getireceğim.", en: "I will check the whole bike. I'll get it back in tip-top shape." } },
    { speaker: "Mevrouw Kirbas", text: "Wat bedoelt u?", translation: { tr: "Ne demek istiyorsunuz?", en: "What do you mean?" } },
    { speaker: "Fietsenmaker", text: "Ik maak uw fiets weer als nieuw.", translation: { tr: "Bisikletinizi tekrar yeni gibi yapacağım.", en: "I'll make your bike like new again." } },
    { speaker: "Mevrouw Kirbas", text: "Nou, heel graag. Ik leer hier veel nieuwe woorden en uitdrukkingen. Wanneer is hij klaar?", translation: { tr: "Şey, çok isterim. Burada birçok yeni kelime ve ifade öğreniyorum. Ne zaman hazır olur?", en: "Well, I'd love that. I'm learning a lot of new words and expressions here. When will it be ready?" } },
    { speaker: "Fietsenmaker", text: "Morgen is het Koningsdag, een feestdag. Dat betekent dat we dan gesloten zijn. Overmorgen aan het einde van de dag kunt u hem weer ophalen.", translation: { tr: "Yarın Kral Günü, resmi bir tatil. Bu, o zaman kapalı olduğumuz anlamına gelir. Yarından sonraki gün, gün sonunda onu tekrar alabilirsiniz.", en: "Tomorrow is King's Day, a public holiday. That means we will be closed then. The day after tomorrow at the end of the day you can pick it up again." } }
  ]
};

export const chapter10Sections = [
  {
    id: "10.1",
    chapter: 10,
    title: "10.1 Dialoog",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🗣️ Dialoog: Bij de fietsenmaker (Bisiklet tamircisinde)</h3>
            <p>Aile hekimi Bayan Kirbas, bisikletiyle bisiklet tamircisine gelir. Sayfanın başındaki diyaloğu okuyun veya dinleyin.</p>
          </>
        ) : (
          <>
            <h3>🗣️ Dialogue: Bij de fietsenmaker (At the bicycle repair shop)</h3>
            <p>Mrs. Kirbas, the general practitioner, arrives at the bicycle repair shop with her bike. Read or listen to the dialogue at the top of the page.</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Extra Oefeningen (20 vragen) - Dialoog Test (Dialogue Test)",
        isExtra: true,
        questions: generateSmartQuestions(10, "Dialoog", 20, chapter10Vocab)
      }
    ]
  },
  {
    id: "10.2",
    chapter: 10,
    title: "10.2 Woordenlijst & Opdracht 1",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>📖 Woordenlijst (Kelime Listesi)</h3>
            <p>Opdracht 1'e başlamadan önce bu kelimeleri dikkatlice çalışın.</p>
          </>
        ) : (
          <>
            <h3>📖 Woordenlijst (Vocabulary)</h3>
            <p>Study these words carefully before starting Exercise 1.</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zijn de volgende zinnen waar of niet waar? (Are the following sentences true or false?)",
        isExtra: false,
        questions: [
          { id: "10.2_opd1_1", type: "multiple_choice", question: "1. Mevrouw Kirbas gaat met haar fiets naar de fietsenmaker.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "10.2_opd1_2", type: "multiple_choice", question: "2. Mevrouw Kirbas gaat een nieuwe fiets kopen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "10.2_opd1_3", type: "multiple_choice", question: "3. Mevrouw Kirbas is met haar fiets tegen een huis gereden.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "10.2_opd1_4", type: "multiple_choice", question: "4. De fiets van mevrouw Kirbas is al oud.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "10.2_opd1_5", type: "multiple_choice", question: "5. De fietsenmaker kan de fiets niet meer in orde maken.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "10.2_opd1_6", type: "multiple_choice", question: "6. Mevrouw Kirbas kan de fiets morgen ophalen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Begrip van de dialoog",
        isExtra: true,
        questions: [
          { id: "10.1_smart_1", type: "multiple_choice", question: "Wat betekent 'total loss' in deze context?", options: ["De fiets is gestolen.", "De fiets is helemaal kapot en kan niet worden gerepareerd.", "De fiets is erg duur."], correctAnswer: "De fiets is helemaal kapot en kan niet worden gerepareerd." },
          { id: "10.1_smart_2", type: "multiple_choice", question: "Waarom viel mevrouw Kirbas?", options: ["Omdat ze te snel fietste.", "Omdat het regende en de weg een beetje glad was.", "Omdat haar remmen kapot waren."], correctAnswer: "Omdat het regende en de weg een beetje glad was." },
          { id: "10.1_smart_3", type: "fill_in", question: "Wat betekent de uitdrukking 'tiptop in orde'? (Tip: één woord)", correctAnswer: "perfect" },
          { id: "10.1_smart_4", type: "multiple_choice", question: "Vertaal de zin uit de tekst (Translate): 'Ik mankeerde zelf niets'.", options: ["Ik had zelf geen pijn/probleem.", "Mijn fiets was kapot.", "Ik ben niet gevallen."], correctAnswer: "Ik had zelf geen pijn/probleem." }
        ]
      },
      {
        instruction: "Extra Oefeningen (Woordenlijst Test / Vocabulary Test)",
        isExtra: true,
        questions: generateSmartQuestions(10, "Woordenlijst", 10, chapter10Vocab)
      }
    ]
  },
  {
    id: "10.3",
    chapter: 10,
    title: "10.3 / 10.4 Begrijpen & Bedoelen",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🗣️ Verstaan vs Begrijpen</h3>
              <p><strong>Niet verstaan (Fiziksel olarak duyamamak/anlayamamak):</strong> Ortamda çok gürültü varsa veya ses kısıksa kullanılır. <em>(Sorry, ik versta u niet goed. Kunt u het herhalen?)</em></p>
              <p><strong>Niet begrijpen (Zihinsel olarak kavrayamamak):</strong> Söylenen kelimelerin veya dilbilgisinin manasını anlamadığınızda kullanılır. <em>(Sorry, ik begrijp het niet.)</em></p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>🔍 Bedoelen vs Betekenen</h3>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Bedoelen:</strong> Bir <em>kişinin</em> ne söylemek istediği veya niyeti (Kastetmek). <em>(Wat bedoelt u daarmee?)</em></li>
                <li><strong>Betekenen:</strong> Bir <em>kelimenin veya durumun</em> tanımı (Anlamına gelmek). <em>(Wat betekent het woord 'zadel'?)</em></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🗣️ Verstaan vs Begrijpen</h3>
              <p><strong>Niet verstaan (Physically not hearing/understanding):</strong> Used when the sound is too soft or there is a lot of noise. <em>(Sorry, ik versta u niet goed. Kunt u het herhalen?)</em></p>
              <p><strong>Niet begrijpen (Mentally not grasping the meaning):</strong> Used when you don't understand the meaning of the words or the grammar. <em>(Sorry, ik begrijp het niet.)</em></p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>🔍 Bedoelen vs Betekenen</h3>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Bedoelen:</strong> What a <em>person</em> wants to say or intends (To mean/intend). <em>(Wat bedoelt u daarmee?)</em></li>
                <li><strong>Betekenen:</strong> What a <em>word or situation</em> is (To mean/signify). <em>(Wat betekent het woord 'zadel'?)</em></li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Je begrijpt of verstaat het niet. Maak de zinnen compleet. (Fill in the blanks)",
        isExtra: false,
        questions: [
          { id: "10.3_opd2_1", type: "fill_in", question: "1. Sorry, er zijn hier veel mensen. Ik ________ je niet goed. Wat zeg je? Kun je dat nog een keer ________?", correctAnswer: "versta, zeggen" },
          { id: "10.3_opd2_2", type: "fill_in", question: "2. Kun je dat even ________? (repeat)", correctAnswer: "herhalen" },
          { id: "10.3_opd2_3", type: "fill_in", question: "3. Wat ________ je? (do you mean)", correctAnswer: "bedoel" },
          { id: "10.3_opd2_4", type: "fill_in", question: "4. Wat ________ dat? (does that mean)", correctAnswer: "betekent" },
          { id: "10.3_opd2_5", type: "fill_in", question: "5. Hoe ________ in het Nederlands? (do you say that)", correctAnswer: "zeg je dat" },
          { id: "10.3_opd2_6", type: "fill_in", question: "6. Proost. ________ in het Nederlands?", correctAnswer: "Zeg je dat zo" }
        ]
      },
      {
        instruction: "Opdracht 3: Vul een vorm in van bedoelen of betekenen.",
        isExtra: false,
        questions: [
          { id: "10.4_opd3_1", type: "fill_in", question: "1. De buurman zei iets, maar ik wist niet wat hij ________.", correctAnswer: "bedoelde" },
          { id: "10.4_opd3_2", type: "fill_in", question: "2. Hij is allergisch. Dat ________ dat hij geen tomaten mag eten.", correctAnswer: "betekent" },
          { id: "10.4_opd3_3", type: "fill_in", question: "3. Ik neem een bakje champignons. Wat ________ 'bakje' eigenlijk?", correctAnswer: "betekent" },
          { id: "10.4_opd3_4", type: "fill_in", question: "4. Mag ik dat groene...? O, u ________ peterselie.", correctAnswer: "bedoelt" },
          { id: "10.4_opd3_5", type: "fill_in", question: "5. Wat ________ p.p.? Per persoon.", correctAnswer: "betekent" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Begrijp je het verschil?",
        isExtra: true,
        questions: [
          { id: "10.3_smart_1", type: "multiple_choice", question: "De radio staat te hard. Ik kan je niet ________.", options: ["verstaan", "begrijpen", "bedoelen"], correctAnswer: "verstaan" },
          { id: "10.3_smart_2", type: "multiple_choice", question: "Deze theorie is moeilijk. Ik ________ het niet.", options: ["versta", "begrijp", "beteken"], correctAnswer: "begrijp" },
          { id: "10.3_smart_3", type: "multiple_choice", question: "Wat ________ het woord 'fietsenmaker' in het Engels?", options: ["bedoelt", "betekent", "verstaat"], correctAnswer: "betekent" },
          { id: "10.3_smart_4", type: "multiple_choice", question: "Hij is boos, maar ik weet niet wat hij precies ________.", options: ["bedoelt", "betekent", "begrijpt"], correctAnswer: "bedoelt" }
        ]
      }
    ]
  },
  {
    id: "10.5",
    chapter: 10,
    title: "10.5 Fietsonderdelen & Imperfectum",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🚲 Fietsonderdelen (Bisiklet Parçaları)</h3>
              <p>bagagedrager (bagaj), band (lastik), bel (zil), trapper (pedal), stuur (gidon), wiel (tekerlek), zadel (sele), remmen (frenler), voorlicht (ön far), achterlicht (arka far), slot (kilit), standaard (ayaklık).</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📌 Imperfectum (Geçmiş Zaman Hikayesi)</h3>
              <p><strong>Regelmatig (Düzenli Fiiller):</strong> <code>stam + te(n) / de(n)</code></p>
              <p><strong>Soft Ketchup Kuralı:</strong> Fiilin kökü (stam) <strong>s, f, t, k, ch veya p</strong> harflerinden biriyle bitiyorsa <strong>-te(n)</strong> alır. Diğer tüm durumlarda <strong>-de(n)</strong> alır.</p>
              <ul style={{ margin: '10px 0 0 0' }}>
                <li><strong>Fietsen:</strong> stam = fiets ➔ 's' harfi kuralda var ➔ Ik fiets<strong>te</strong>. Wij fiets<strong>ten</strong>.</li>
                <li><strong>Mankeren:</strong> stam = mankeer ➔ 'r' harfi kuralda YOK ➔ Het mankeer<strong>de</strong>.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🗣️ Spreekopdrachten & Rollenspel (Kitaptaki Görsel Detaylar)</h4>
              <p><strong>Opdracht 5:</strong> Bisiklet tamircisi-müşteri rol yapma oyunu. Bisikletinizle ilgili bir sorununuz var. Sorunun ne olduğunu açıklayın.</p>
              <p><strong>Opdracht 6: İkinci el bisiklet satın almak.</strong> Tabloyu inceleyin ve bir avantaj ile bir dezavantaj belirtin:</p>
              <table style={{ width: '100%', fontSize: '0.9rem', marginTop: '10px' }}>
                <thead><tr className="text-left"><th>kleur</th><th>model</th><th>hoe oud</th><th>prijs</th><th>bijzonderheden</th><th>problemen</th></tr></thead>
                <tbody>
                  <tr><td>wit</td><td>herenfiets</td><td>3 jaar</td><td>€ 200</td><td>licht op batterij</td><td>geen versnellingen</td></tr>
                  <tr><td>zwart</td><td>racefiets</td><td>10 jaar</td><td>€ 100</td><td>rijdt soepel</td><td>gladde banden</td></tr>
                  <tr><td>groen</td><td>mountainbike</td><td>4 jaar</td><td>€ 150</td><td>10 versnellingen</td><td>remmen doen het niet goed</td></tr>
                  <tr><td>roze</td><td>damesfiets</td><td>6 jaar</td><td>€ 75</td><td>leren zadel</td><td>geen bagagedrager</td></tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🚲 Fietsonderdelen (Bicycle Parts)</h3>
              <p>bagagedrager (carrier), band (tire), bel (bell), trapper (pedal), stuur (handlebars), wiel (wheel), zadel (saddle/seat), remmen (brakes), voorlicht (front light), achterlicht (tail light), slot (lock), standaard (kickstand).</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📌 Imperfectum (Past Simple Tense)</h3>
              <p><strong>Regelmatig (Regular Verbs):</strong> <code>stam + te(n) / de(n)</code></p>
              <p><strong>'t Kofschip (Soft Ketchup) Rule:</strong> If the stem ends in <strong>s, f, t, k, ch or p</strong>, you write <strong>-te(n)</strong>. Otherwise <strong>-de(n)</strong>.</p>
              <ul style={{ margin: '10px 0 0 0' }}>
                <li><strong>Fietsen:</strong> stam = fiets ➔ 's' is in soft ketchup ➔ Ik fiets<strong>te</strong>. Wij fiets<strong>ten</strong>.</li>
                <li><strong>Mankeren:</strong> stam = mankeer ➔ 'r' is NOT in soft ketchup ➔ Het mankeer<strong>de</strong>.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🗣️ Spreekopdrachten & Rollenspel (Book Image Details)</h4>
              <p><strong>Opdracht 5:</strong> Roleplay bicycle repairman-customer. You have a problem with your bike. Explain what the problem is.</p>
              <p><strong>Opdracht 6: Buying a second-hand bike.</strong> Study the table and name one advantage and one disadvantage:</p>
              <table style={{ width: '100%', fontSize: '0.9rem', marginTop: '10px' }}>
                <thead><tr className="text-left"><th>kleur</th><th>model</th><th>hoe oud</th><th>prijs</th><th>bijzonderheden</th><th>problemen</th></tr></thead>
                <tbody>
                  <tr><td>wit</td><td>herenfiets</td><td>3 jaar</td><td>€ 200</td><td>licht op batterij</td><td>geen versnellingen</td></tr>
                  <tr><td>zwart</td><td>racefiets</td><td>10 jaar</td><td>€ 100</td><td>rijdt soepel</td><td>gladde banden</td></tr>
                  <tr><td>groen</td><td>mountainbike</td><td>4 jaar</td><td>€ 150</td><td>10 versnellingen</td><td>remmen doen het niet goed</td></tr>
                  <tr><td>roze</td><td>damesfiets</td><td>6 jaar</td><td>€ 75</td><td>leren zadel</td><td>geen bagagedrager</td></tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Fietsonderdelen (Vul het juiste fietsonderdeel in / Fill in the correct bicycle part)",
        isExtra: false,
        questions: [
          { id: "10.5_opd4_1", type: "fill_in", question: "1. Waar je bagage op zit achterop:", correctAnswer: "bagagedrager" },
          { id: "10.5_opd4_2", type: "fill_in", question: "2. Het rubber op het wiel:", correctAnswer: "band" },
          { id: "10.5_opd4_3", type: "fill_in", question: "3. Om te waarschuwen, ring ring:", correctAnswer: "bel" },
          { id: "10.5_opd4_4", type: "fill_in", question: "4. Waar je je voeten op zet:", correctAnswer: "trapper" },
          { id: "10.5_opd4_5", type: "fill_in", question: "5. Om de fiets te sturen:", correctAnswer: "stuur" },
          { id: "10.5_opd4_6", type: "fill_in", question: "6. Het ronde ding dat draait:", correctAnswer: "wiel" },
          { id: "10.5_opd4_7", type: "fill_in", question: "7. Waar je op zit:", correctAnswer: "zadel" },
          { id: "10.5_opd4_8", type: "fill_in", question: "8. Om te stoppen gebruik je de:", correctAnswer: "remmen" }
        ]
      },
      {
        instruction: "Opdracht 7: Maak de zin in het Imperfectum (A = Vandaag, B = Gisteren)",
        isExtra: false,
        questions: [
          { id: "10.5_opd7_1", type: "fill_in", question: "1 Vandaag bestel ik koffie. -> Gisteren ________ ik ook koffie.", correctAnswer: "bestelde" },
          { id: "10.5_opd7_2", type: "fill_in", question: "2 Vandaag wil ik cappuccino. -> Gisteren ________ ik ook cappuccino.", correctAnswer: "wilde" },
          { id: "10.5_opd7_3", type: "fill_in", question: "3 Vandaag luister ik naar de tekst. -> Gisteren ________ ik ook.", correctAnswer: "luisterde" },
          { id: "10.5_opd7_4", type: "fill_in", question: "4 Vandaag werk ik tot 16.00 uur. -> Gisteren ________ ik ook.", correctAnswer: "werkte" },
          { id: "10.5_opd7_5", type: "fill_in", question: "5 Vandaag voel ik me niet lekker. -> Gisteren ________ ik me ook niet lekker.", correctAnswer: "voelde" },
          { id: "10.5_opd7_6", type: "fill_in", question: "6 Vandaag regent het. -> Gisteren ________ het ook.", correctAnswer: "regende" },
          { id: "10.5_opd7_7", type: "fill_in", question: "7 Vandaag lukt het. -> Gisteren ________ het ook.", correctAnswer: "lukte" },
          { id: "10.5_opd7_8", type: "fill_in", question: "8 Vandaag trakteert Aafke. -> Gisteren ________ Aafke ook.", correctAnswer: "trakteerde" },
          { id: "10.5_opd7_9", type: "fill_in", question: "9 Vandaag betaal ik. -> Gisteren ________ ik ook.", correctAnswer: "betaalde" },
          { id: "10.5_opd7_10", type: "fill_in", question: "10 Vandaag gebruik ik jouw boek. -> Gisteren ________ ik jouw boek ook.", correctAnswer: "gebruikte" },
          { id: "10.5_opd7_11", type: "fill_in", question: "11 Vandaag beginnen we om 9.00 uur. -> Gisteren ________ we ook om 9.00 uur.", correctAnswer: "begonnen" },
          { id: "10.5_opd7_12", type: "fill_in", question: "12 Vandaag neem ik tomatensoep. -> Gisteren ________ ik ook tomatensoep.", correctAnswer: "nam" },
          { id: "10.5_opd7_13", type: "fill_in", question: "13 Vandaag blijf ik tot 14.00 uur. -> Gisteren ________ ik ook tot 14.00 uur.", correctAnswer: "bleef" },
          { id: "10.5_opd7_14", type: "fill_in", question: "14 Vandaag denk ik aan de vakantie. -> Gisteren ________ ik ook aan de vakantie.", correctAnswer: "dacht" },
          { id: "10.5_opd7_15", type: "fill_in", question: "15 Vandaag doe ik niets. -> Gisteren ________ ik ook niets.", correctAnswer: "deed" },
          { id: "10.5_opd7_16", type: "fill_in", question: "16 Vandaag geeft zij een rondje. -> Gisteren ________ zij ook een rondje.", correctAnswer: "gaf" },
          { id: "10.5_opd7_17", type: "fill_in", question: "17 Vandaag zie ik Ellen. -> Gisteren ________ ik Ellen ook.", correctAnswer: "zag" },
          { id: "10.5_opd7_18", type: "fill_in", question: "18 Vandaag is het hier leuk. -> Gisteren ________ het hier ook leuk.", correctAnswer: "was" },
          { id: "10.5_opd7_19", type: "fill_in", question: "19 Vandaag zeg ik niets. -> Gisteren ________ ik ook niets.", correctAnswer: "zei" },
          { id: "10.5_opd7_20", type: "fill_in", question: "20 Vandaag vraagt hij veel. -> Gisteren ________ hij ook veel.", correctAnswer: "vroeg" }
        ]
      },
      {
        instruction: "Opdracht 8: Vul de imperfectumvorm in van het werkwoord tussen haakjes.",
        isExtra: false,
        questions: [
          { id: "10.5_opd8_1", type: "fill_in", question: "1 Hij ________ (voelen) zich niet zo goed.", correctAnswer: "voelde" },
          { id: "10.5_opd8_2", type: "fill_in", question: "2 Hans en Paul ________ (stoppen) na twee maanden.", correctAnswer: "stopten" },
          { id: "10.5_opd8_3", type: "fill_in", question: "3 Ik ________ (vieren) mijn verjaardag altijd met mijn familie.", correctAnswer: "vierde" },
          { id: "10.5_opd8_4", type: "fill_in", question: "4 Alberto ________ (bedanken) ons voor de leuke dag.", correctAnswer: "bedankte" },
          { id: "10.5_opd8_5", type: "fill_in", question: "5 ________ (wonen) jullie vroeger ook in een stad?", correctAnswer: "woonden" },
          { id: "10.5_opd8_6", type: "fill_in", question: "6 Eerst ________ (vertellen) hij over zijn reis.", correctAnswer: "vertelde" },
          { id: "10.5_opd8_7", type: "fill_in", question: "7 In Parijs ________ (werken) hij in een groot café.", correctAnswer: "werkte" },
          { id: "10.5_opd8_8", type: "fill_in", question: "8 Het ________ (regenen) de hele week!", correctAnswer: "regende" },
          { id: "10.5_opd8_9", type: "fill_in", question: "9 Hij ________ (missen) zijn ouders en zijn zusje.", correctAnswer: "miste" },
          { id: "10.5_opd8_10", type: "fill_in", question: "10 De kinderen ________ (fietsen) elke dag naar school.", correctAnswer: "fietsten" },
          { id: "10.5_opd8_11", type: "fill_in", question: "11 Tom ________ (vragen) iets aan zijn buurvrouw.", correctAnswer: "vroeg" },
          { id: "10.5_opd8_12", type: "fill_in", question: "12 Dat ________ (weten) ik niet!", correctAnswer: "wist" },
          { id: "10.5_opd8_13", type: "fill_in", question: "13 Waar ________ (staan) je fiets?", correctAnswer: "stond" },
          { id: "10.5_opd8_14", type: "fill_in", question: "14 Ik ________ (slapen) al heel lang zo slecht.", correctAnswer: "sliep" },
          { id: "10.5_opd8_15", type: "fill_in", question: "15 Wesley ________ (vinden) de aardbeien heerlijk.", correctAnswer: "vond" },
          { id: "10.5_opd8_16", type: "fill_in", question: "16 Hij ________ (zeggen) niets over onze afspraak.", correctAnswer: "zei" },
          { id: "10.5_opd8_17", type: "fill_in", question: "17 ________ (zien) jullie mij niet?", correctAnswer: "zagen" },
          { id: "10.5_opd8_18", type: "fill_in", question: "18 John en Marga ________ (kijken) naar de wedstrijd.", correctAnswer: "keken" },
          { id: "10.5_opd8_19", type: "fill_in", question: "19 Julia ________ (drinken) thee met suiker.", correctAnswer: "dronk" },
          { id: "10.5_opd8_20", type: "fill_in", question: "20 We ________ (komen) te laat in de les.", correctAnswer: "kwamen" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Imperfectum Regels (Soft Ketchup) en Fietstabel",
        isExtra: true,
        questions: [
          { id: "10.5_smart_1", type: "multiple_choice", question: "Waarom krijgt 'fietsen' in het imperfectum een -t (fietste) en geen -d?", options: ["Omdat de 's' in 'soft ketchup' zit.", "Omdat de 'e' een klinker is.", "Omdat het een onregelmatig werkwoord is."], correctAnswer: "Omdat de 's' in 'soft ketchup' zit." },
          { id: "10.5_smart_2", type: "multiple_choice", question: "Wat is de stam van 'mankeren' en welke uitgang krijgt het?", options: ["mankeer -> mankeerde", "mankeer -> mankeerte", "mank -> mankte"], correctAnswer: "mankeer -> mankeerde" },
          { id: "10.5_smart_3", type: "fill_in", question: "Wat is het meervoud (wij) imperfectum van 'werken'?", correctAnswer: "werkten" },
          { id: "10.5_smart_4", type: "multiple_choice", question: "Kijk naar de tabel (Opdracht 6): Wat is een nadeel (dezavantaj / disadvantage) van de groene mountainbike?", options: ["Heeft geen versnellingen.", "Remmen doen het niet goed.", "Leren zadel is kapot."], correctAnswer: "Remmen doen het niet goed." },
          { id: "10.5_smart_5", type: "multiple_choice", question: "Kijk naar de tabel: Welke fiets kost € 100 en heeft gladde banden?", options: ["De witte herenfiets.", "De roze damesfiets.", "De zwarte racefiets."], correctAnswer: "De zwarte racefiets." }
        ]
      }
    ]
  },
  {
    id: "10.6",
    chapter: 10,
    title: "10.6 Imperfectum modale werkwoorden",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>📌 Modale Werkwoorden in het Imperfectum</h3>
            <table className="w-full text-left mt-2 mb-4">
              <thead>
                <tr className="border-b border-slate-700"><th>Pronoun</th><th>mogen</th><th>willen</th><th>moeten</th><th>kunnen</th><th>zullen</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-sm">
                <tr><td>ik / jij / hij</td><td>mocht</td><td>wilde / wou</td><td>moest</td><td>kon</td><td>zou</td></tr>
                <tr><td>wij / jullie / zij</td><td>mochten</td><td>wilden</td><td>moesten</td><td>konden</td><td>zouden</td></tr>
              </tbody>
            </table>
            <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#f59e0b' }}>🗣️ Spreekopdracht: Modale Werkwoorden</h4>
              <p><strong>Opdracht 9:</strong> İkili çalışın. Soruları cevaplayın:</p>
              <ul style={{ color: 'var(--text-muted)' }}>
                <li>1. Welke talen konden jullie vroeger leren op school? (Eskiden okulda hangi dilleri öğrenebiliyordunuz?)</li>
                <li>2. Mocht jij met 16 jaar alleen op vakantie? (16 yaşında yalnız tatile gitmene izin var mıydı?)</li>
                <li>3. Wat wilde jij worden als kind? (Çocukken ne olmak istiyordun?)</li>
                <li>4. Moest jij vorig weekend eten koken? (Geçen hafta sonu yemek pişirmek zorunda mıydın?)</li>
                <li>5. Op welke leeftijd kon jij lezen? (Kaç yaşında okuyabiliyordun?)</li>
                <li>6. Moest jij vroeger op zaterdag naar school? (Eskiden cumartesileri okula gitmek zorunda mıydın?)</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <h3>📌 Modale Werkwoorden in het Imperfectum (Modal Verbs in Past Tense)</h3>
            <table className="w-full text-left mt-2 mb-4">
              <thead>
                <tr className="border-b border-slate-700"><th>Pronoun</th><th>mogen</th><th>willen</th><th>moeten</th><th>kunnen</th><th>zullen</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-sm">
                <tr><td>ik / jij / hij</td><td>mocht</td><td>wilde / wou</td><td>moest</td><td>kon</td><td>zou</td></tr>
                <tr><td>wij / jullie / zij</td><td>mochten</td><td>wilden</td><td>moesten</td><td>konden</td><td>zouden</td></tr>
              </tbody>
            </table>
            <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#f59e0b' }}>🗣️ Spreekopdracht: Modale Werkwoorden</h4>
              <p><strong>Opdracht 9:</strong> Work in pairs. Answer the questions:</p>
              <ul style={{ color: 'var(--text-muted)' }}>
                <li>1. Welke talen konden jullie vroeger leren op school? (Which languages could you learn at school in the past?)</li>
                <li>2. Mocht jij met 16 jaar alleen op vakantie? (Were you allowed to go on holiday alone at 16?)</li>
                <li>3. Wat wilde jij worden als kind? (What did you want to be as a child?)</li>
                <li>4. Moest jij vorig weekend eten koken? (Did you have to cook last weekend?)</li>
                <li>5. Op welke leeftijd kon jij lezen? (At what age could you read?)</li>
                <li>6. Moest jij vroeger op zaterdag naar school? (Did you have to go to school on Saturdays in the past?)</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9 (Omgezet naar invuloefening / Converted to fill-in): Vul het juiste modale werkwoord in.",
        isExtra: false,
        questions: [
          { id: "10.6_opd9_1", type: "fill_in", question: "1. Welke talen ________ (kunnen - jullie) vroeger leren op school?", correctAnswer: "konden" },
          { id: "10.6_opd9_2", type: "fill_in", question: "2. ________ (mogen - jij) met 16 jaar alleen op vakantie?", correctAnswer: "mocht" },
          { id: "10.6_opd9_3", type: "fill_in", question: "3. Wat ________ (willen - jij) worden als kind?", correctAnswer: "wilde" },
          { id: "10.6_opd9_4", type: "fill_in", question: "4. ________ (moeten - jij) vorig weekend eten koken?", correctAnswer: "moest" },
          { id: "10.6_opd9_5", type: "fill_in", question: "5. Op welke leeftijd ________ (kunnen - jij) lezen?", correctAnswer: "kon" },
          { id: "10.6_opd9_6", type: "fill_in", question: "6. ________ (moeten - jij) vroeger op zaterdag naar school?", correctAnswer: "moest" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Modale Werkwoorden Trainen",
        isExtra: true,
        questions: [
          { id: "10.6_smart_1", type: "multiple_choice", question: "Wat is het imperfectum van 'zullen' voor 'wij/jullie/zij'?", options: ["zulden", "zouden", "zou"], correctAnswer: "zouden" },
          { id: "10.6_smart_2", type: "multiple_choice", question: "Welke twee vormen zijn correct voor 'ik willen' in het imperfectum?", options: ["wilde / wouden", "wilde / wou", "wilde / wilden"], correctAnswer: "wilde / wou" },
          { id: "10.6_smart_3", type: "fill_in", question: "Vroeger ________ (kunnen) ik heel goed voetballen.", correctAnswer: "kon" }
        ]
      }
    ]
  },
  {
    id: "10.7",
    chapter: 10,
    title: "10.7 Perfectum en Imperfectum",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>⚖️ Perfectum of Imperfectum?</h3>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Perfectum:</strong> Geçmişte olmuş ve bitmiş eylemler (afgesloten) için kullanılır. <em>(Wat heb je gedaan? Ik heb lang geslapen.)</em></li>
                <li><strong>Imperfectum:</strong> Geçmişteki durumları tasvir etmek (beschrijvingen), alışkanlıkları anlatmak için kullanılır. <em>(Waar ging de film over? Het was een prachtige film. Hij had een bril.)</em></li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✍️ Spreek- en Schrijfopdracht</h4>
              <p><strong>Opdracht 11: Over fietsen spreken.</strong> Birbirinizle bisikletiniz ve bisiklet sürmek hakkında konuşun. Bisiklet sürebiliyor musun? Bisikletin var mı? Ne tür bir bisikletin var? Bisikletin senin için önemli mi?</p>
              <p><strong>Opdracht 12: Een elfje schrijven.</strong> Bisikletler hakkında bir "elfje" (on bir kelimelik bir şiir) yazın. Örneğin: <em>fiets / mijn fiets / mijn eerste fiets / ik ben heel blij / tingeling!</em></p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>⚖️ Perfectum of Imperfectum?</h3>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Perfectum:</strong> Use for events that are closed/finished in the past. <em>(Wat heb je gedaan? Ik heb lang geslapen. / What have you done? I have slept long.)</em></li>
                <li><strong>Imperfectum:</strong> Use for descriptions, states, or habits in the past. <em>(Waar ging de film over? Het was een prachtige film. Hij had een bril. / What was the film about? It was a beautiful film. He had glasses.)</em></li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✍️ Spreek- en Schrijfopdracht</h4>
              <p><strong>Opdracht 11: Over fietsen spreken.</strong> Talk to each other about your bike and cycling. Can you cycle? Do you have a bike? What kind of bike do you have? Is your bike important to you?</p>
              <p><strong>Opdracht 12: Een elfje schrijven.</strong> Write an 'elfje' (an eleven-word poem) about bicycles. For example: <em>fiets / mijn fiets / mijn eerste fiets / ik ben heel blij / tingeling!</em></p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 10: Kies de goede reactie. (Choose the right reaction.)",
        isExtra: false,
        questions: [
          { id: "10.7_opd10_1", type: "multiple_choice", question: "1 Hoe was de film?", options: ["a) Ik vond de film heel bijzonder.", "b) Ik heb de film heel bijzonder gevonden."], correctAnswer: "a) Ik vond de film heel bijzonder." },
          { id: "10.7_opd10_2", type: "multiple_choice", question: "2 Waarom ging je met de bus?", options: ["a) Het regende.", "b) Het heeft geregend."], correctAnswer: "a) Het regende." },
          { id: "10.7_opd10_3", type: "multiple_choice", question: "3 Heeft Elke al een kamer?", options: ["a) Ja, ze vond een kamer.", "b) Ja, ze heeft een kamer gevonden."], correctAnswer: "b) Ja, ze heeft een kamer gevonden." },
          { id: "10.7_opd10_4", type: "multiple_choice", question: "4 Is je fiets weer in orde?", options: ["a) Ja, de fietsenmaker controleerde alles.", "b) Ja, de fietsenmaker heeft alles gecontroleerd."], correctAnswer: "b) Ja, de fietsenmaker heeft alles gecontroleerd." },
          { id: "10.7_opd10_5", type: "multiple_choice", question: "5 Vertel eens iets over die man.", options: ["a) Hij was ongeveer 40 jaar en hij had een bril.", "b) Hij is ongeveer 40 jaar geweest en hij heeft een bril gehad."], correctAnswer: "a) Hij was ongeveer 40 jaar en hij had een bril." },
          { id: "10.7_opd10_6", type: "multiple_choice", question: "6 Waarom trakteerde Aafke?", options: ["a) Ze was jarig.", "b) Ze is jarig geweest."], correctAnswer: "a) Ze was jarig." },
          { id: "10.7_opd10_7", type: "multiple_choice", question: "7 Wat is er met je arm gebeurd?", options: ["a) Ik viel.", "b) Ik ben gevallen."], correctAnswer: "b) Ik ben gevallen." },
          { id: "10.7_opd10_8", type: "multiple_choice", question: "8 Heb je dorst?", options: ["a) Nee, ik dronk al iets.", "b) Nee, ik heb al iets gedronken."], correctAnswer: "b) Nee, ik heb al iets gedronken." },
          { id: "10.7_opd10_9", type: "multiple_choice", question: "9 Begint de les morgen om 8.30 uur?", options: ["a) Ja, ik vroeg het de docent.", "b) Ja, ik heb het de docent gevraagd."], correctAnswer: "b) Ja, ik heb het de docent gevraagd." },
          { id: "10.7_opd10_10", type: "multiple_choice", question: "10 Is de mosterdsoep lekker?", options: ["a) Ik probeerde hem niet.", "b) Ik heb hem niet geprobeerd."], correctAnswer: "b) Ik heb hem niet geprobeerd." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Beschrijving vs Afgesloten actie",
        isExtra: true,
        questions: [
          { id: "10.7_smart_1", type: "multiple_choice", question: "Kies de juiste tijd: 'Het ________ (zijn) gisteren heel mooi weer.' (Dit is een beschrijving/durum/description).", options: ["was", "is geweest"], correctAnswer: "was" },
          { id: "10.7_smart_2", type: "multiple_choice", question: "Kies de juiste tijd: 'Ik ________ (kopen) gisteren een nieuwe fiets.' (Dit is een afgesloten actie/bitmiş olay/finished action).", options: ["kocht", "heb gekocht"], correctAnswer: "heb gekocht" }
        ]
      }
    ]
  },
  {
    id: "10.8",
    chapter: 10,
    title: "10.8 Tekst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Bij de fietsenmaker</h3>
            <p><strong>Jarno (26):</strong> 'Ik heb een omafiets en ben daar heel blij mee. Mijn ouders wilden geen andere fiets voor me kopen. Op een ochtend was hij weg. Via de gemeente heb ik toen een nieuwe gekocht. Het was een soort droom die uitkwam, deze omafiets.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Çeviri: 'Oma tarzı bir bisikletim var ve onunla çok mutluyum. Annem ve babam benim için başka bir bisiklet almak istemediler. Bir sabah bisikletim yoktu (kaybolmuştu). Sonra belediye aracılığıyla yeni bir tane aldım. Bu oma bisikleti gerçek olan bir rüya gibiydi.'</em></p>
            
            <hr style={{ borderColor: 'var(--border-color)', margin: '15px 0' }}/>
            
            <p><strong>Ronald (19):</strong> 'Het mooiste aan mijn fiets vind ik de bel. Deze bel heeft een heel vrolijk geluid. Het is een soort van mini-kerktoren, en dan kijken de mensen altijd naar mij.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Çeviri: 'Bisikletimle ilgili en iyi şey zili. Bu zilin çok neşeli bir sesi var. Küçük bir kilise çanı (mini-kerktoren) gibi, ve o çalınca insanlar her zaman bana bakıyor.'</em></p>
            
            <hr style={{ borderColor: 'var(--border-color)', margin: '15px 0' }}/>
            
            <p><strong>Andreas (22):</strong> 'Deze fiets is van mijn vriendin. Zelf heb ik geen fiets. Ik heb er wel drie gehad in mijn eerste jaar. Ze zijn allemaal gestolen. Ik loop nu altijd. Ik heb vandaag een examen en ik wilde niet te laat komen. Anders was ik ook te voet gekomen.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Çeviri: 'Bu bisiklet kız arkadaşıma ait. Benim kendi bisikletim yok. İlk yılımda üç tane bisikletim oldu ama hepsi çalındı (gestolen). Artık her yere yürüyorum. Bugün bir sınavım var ve geç kalmak istemedim. Yoksa buraya da yürüyerek (te voet) gelirdim.'</em></p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Text: Bij de fietsenmaker</h3>
            <p><strong>Jarno (26):</strong> 'Ik heb een omafiets en ben daar heel blij mee. Mijn ouders wilden geen andere fiets voor me kopen. Op een ochtend was hij weg. Via de gemeente heb ik toen een nieuwe gekocht. Het was een soort droom die uitkwam, deze omafiets.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Translation: 'I have a granny bike (omafiets) and I am very happy with it. My parents didn't want to buy another bike for me. One morning it was gone. Through the municipality I then bought a new one. It was a kind of dream come true, this granny bike.'</em></p>
            
            <hr style={{ borderColor: 'var(--border-color)', margin: '15px 0' }}/>
            
            <p><strong>Ronald (19):</strong> 'Het mooiste aan mijn fiets vind ik de bel. Deze bel heeft een heel vrolijk geluid. Het is een soort van mini-kerktoren, en dan kijken de mensen altijd naar mij.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Translation: 'The best thing about my bike is the bell. This bell has a very cheerful sound. It is a kind of mini church tower, and then people always look at me.'</em></p>
            
            <hr style={{ borderColor: 'var(--border-color)', margin: '15px 0' }}/>
            
            <p><strong>Andreas (22):</strong> 'Deze fiets is van mijn vriendin. Zelf heb ik geen fiets. Ik heb er wel drie gehad in mijn eerste jaar. Ze zijn allemaal gestolen. Ik loop nu altijd. Ik heb vandaag een examen en ik wilde niet te laat komen. Anders was ik ook te voet gekomen.'</p>
            <p className="text-sm text-slate-400 mt-1 mb-4"><em>Translation: 'This bike belongs to my girlfriend. I don't have a bike myself. I did have three in my first year. They were all stolen. I always walk now. I have an exam today and I didn't want to be late. Otherwise I would have come on foot.'</em></p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Zijn de volgende zinnen waar of niet waar? (Are the following sentences true or false?)",
        isExtra: false,
        questions: [
          { id: "10.8_opd13_1", type: "multiple_choice", question: "1 Jarno heeft zijn fiets van zijn oma gekregen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "10.8_opd13_2", type: "multiple_choice", question: "2 De bel van Ronalds fiets heeft een speciale klank.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "10.8_opd13_3", type: "multiple_choice", question: "3 Andreas rijdt altijd op de fiets van zijn vriendin.", options: ["waar", "niet waar"], correctAnswer: "niet waar" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Tekstbegrip",
        isExtra: true,
        questions: [
          { id: "10.8_smart_1", type: "multiple_choice", question: "Waarom heeft Andreas zelf geen fiets meer?", options: ["Hij fietst niet graag.", "Ze zijn allemaal gestolen.", "Hij is te voet."], correctAnswer: "Ze zijn allemaal gestolen." },
          { id: "10.8_smart_2", type: "multiple_choice", question: "Wat vinden mensen van de bel van Ronald?", options: ["Het is te luid.", "Het klinkt als een mini-kerktoren.", "Het is gestolen."], correctAnswer: "Het klinkt als een mini-kerktoren." },
          { id: "10.8_smart_3", type: "fill_in", question: "Hoe is Jarno aan zijn nieuwe fiets gekomen? Via de ________.", correctAnswer: "gemeente" }
        ]
      }
    ]
  },
  {
    id: "10.9",
    chapter: 10,
    title: "10.9 Uitspraak & Cultuur",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ui - ij / ei - eu</h3>
              <p><strong>Opdracht 14:</strong> Bu kelimeleri dikkatlice dinleyin ve tekrar edin.</p>
              <p><em>ruilen, zuid, Duits, gebruiken, ruim, thuis, tuin, bruin, uit.</em></p>
              <p><em>neus, ruilen, grijs, beurt, blijven, deur, seizoen, ruim, allebei, zuid.</em></p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur & Praktijk</h3>
              <p><strong>Cultuur:</strong> Hollanda'da çocuktan profesöre kadar herkes bisiklete biner. Bunu nasıl buluyorsunuz: leuk / normaal / vreemd / ...? (eğlenceli / normal / tuhaf)</p>
              <p><strong>In de praktijk:</strong> Mahallenizde bir bisiklet kiralamak istiyorsunuz. Seçenekler nelerdir? Bir bisiklet tamircisine sorun veya internete bakın.</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ui - ij / ei - eu (Pronunciation)</h3>
              <p><strong>Opdracht 14:</strong> Listen closely to these words and repeat them.</p>
              <p><em>ruilen, zuid, Duits, gebruiken, ruim, thuis, tuin, bruin, uit.</em></p>
              <p><em>neus, ruilen, grijs, beurt, blijven, deur, seizoen, ruim, allebei, zuid.</em></p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur & Praktijk (Culture & Practice)</h3>
              <p><strong>Cultuur:</strong> In the Netherlands everyone cycles, from children to professors. Do you find that: leuk (fun) / normaal (normal) / vreemd (strange) / ...?</p>
              <p><strong>In de praktijk:</strong> You want to rent a bike in your neighborhood. What are the possibilities? Ask the bicycle repair shop and look on the internet.</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: []
  },
  {
    id: "On-Class-10",
    chapter: 10,
    title: "Extra Oefeningen (On-Class)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Samenvatting Hoofdstuk 10</h3>
              
              <h4 style={{ color: '#a78bfa' }}>1. Verstaan en begrijpen</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><strong>verstaan:</strong> fiziksel olarak duymak / kelimeleri seçebilmek. <em>Sorry ik versta u niet goed.</em></li>
                <li><strong>begrijpen:</strong> manasını anlamak / kavramak. <em>Sorry ik begrijp het niet. Wat bedoelt u met tiptop?</em></li>
              </ul>

              <h4 style={{ color: '#f472b6', marginTop: '15px' }}>2. Bedoelen vs Betekenen</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><strong>bedoelen:</strong> bir kişinin ne anlatmak / kastetmek istediği.</li>
                <li><strong>betekenen:</strong> bir kelimenin, işaretin veya durumun sözlük anlamı.</li>
              </ul>

              <h4 style={{ color: '#38bdf8', marginTop: '15px' }}>3. Fietsonderdelen (Bisiklet Parçaları)</h4>
              <p>het wiel (tekerlek), de band (lastik), het stuur (gidon), het zadel (sele), de bagagedrager (bagaj), de trapper (pedal), de rem (fren), de bel (zil), het voorlicht (ön far), het achterlicht (arka far), de ketting (zincir).</p>

              <h4 style={{ color: '#fbbf24', marginTop: '15px' }}>4. Modale Werkwoorden in Imperfectum</h4>
              <p>zullen = zou/zouden (yapacaktı), kunnen = kon/konden (yapabiliyordu), moeten = moest/moesten (zorundaydı), willen = wilde/wou (istiyordu).</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>👂 Verstaan vs. Begrijpen</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada "anlamak" için iki farklı kelime kullanılır ve bağlamları tamamen farklıdır:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Verstaan (Fiziksel Duyma)</h4>
                  <p className="text-sm text-blue-100 mb-2">Fiziksel olarak birini duymak veya kelimeleri seçebilmekle ilgilidir.</p>
                  <ul className="text-sm text-slate-300 list-disc pl-5">
                    <li><em>Sorry ik versta u niet goed.</em> (Özür dilerim sizi iyi duyamıyorum/anlayamıyorum.)</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Begrijpen (Anlamı Kavrama)</h4>
                  <p className="text-sm text-blue-100 mb-2">Söylenen kelimeleri duydunuz ancak manasını/ne demek istendiğini bilmiyorsanız kullanılır.</p>
                  <ul className="text-sm text-slate-300 list-disc pl-5">
                    <li><em>Sorry ik begrijp het niet. Wat bedoelt u met 'tiptop'?</em> (Özür dilerim anlamadım. 'Tiptop' ile ne kastediyorsunuz?)</li>
                  </ul>
                </div>
              </div>
              <h4 className="font-bold text-slate-200 text-xs uppercase mt-3 mb-1">Anlaşılmadığında Kullanılan Cümleler:</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Kan u het nog een keer zeggen?</strong> (Bunu bir kez daha söyleyebilir misiniz?)</li>
                <li><strong>Kunt u het even herhalen?</strong> (Bir saniye tekrar edebilir misiniz?)</li>
                <li><strong>Wat zegt u?</strong> (Ne dediniz?)</li>
                <li><strong>Hoe heet dat?</strong> (Bunun adı ne?)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🤔 Bedoelen vs. Betekenen (To Mean)</h3>
              <p className="text-sm text-slate-300 mb-2">İngilizcedeki "to mean" kelimesi Hollandacada ikiye ayrılır:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li><strong>Bedoelen:</strong> Bir <em>kişinin</em> ne söylemek istediğini (niyetini) ifade ederken kullanılır.<br/><span className="text-slate-400">Örn: Wat <strong>bedoelt</strong> u? (Siz ne kastediyorsunuz/demek istiyorsunuz?)</span></li>
                <li><strong>Betekenen:</strong> Bir <em>kelimenin, işaretin veya durumun</em> kelime anlamını/manasını ifade ederken kullanılır.<br/><span className="text-slate-400">Örn: Wat <strong>betekent</strong> 'proost'? ('Proost' kelimesi ne anlama gelir?)</span></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🚲 De Fiets (Bisiklet Parçaları)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-200">
                <div><strong className="text-emerald-300">het wiel:</strong> tekerlek</div>
                <div><strong className="text-emerald-300">de band:</strong> lastik</div>
                <div><strong className="text-emerald-300">het stuur:</strong> direksiyon/gidon</div>
                <div><strong className="text-emerald-300">het zadel:</strong> sele</div>
                <div><strong className="text-emerald-300">de bagagedrager:</strong> bagaj taşıyıcı</div>
                <div><strong className="text-emerald-300">de trapper:</strong> pedal</div>
                <div><strong className="text-emerald-300">de rem:</strong> fren</div>
                <div><strong className="text-emerald-300">de bel:</strong> zil</div>
                <div><strong className="text-emerald-300">de ketting:</strong> zincir</div>
                <div><strong className="text-emerald-300">het voorlicht:</strong> ön far</div>
                <div><strong className="text-emerald-300">het achterlicht:</strong> arka lamba</div>
              </div>
              <p className="text-xs text-slate-400 mt-3 italic">Ekstra Kelimeler: vogelbekdier (platypus/ornitorenk), lieveheersbeestje (ladybug/uğur böceği).</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⏳ Imperfectum (Past Simple / Geçmiş Zaman)</h3>
              <p className="text-sm text-slate-300 mb-3">Imperfectum, geçmişteki durumları veya alışkanlıkları anlatmak için kullanılır (Örn: <em>Het was goed gisteren / Ik werkte</em>).</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Regelmatige Werkwoorden (Düzenli Fiiller)</h4>
                  <p className="text-xs text-slate-400 mb-2">Kökün son harfi 'soft ketchup' (t, k, f, s, c, h, p) harflerinden biriyse <strong>-te/-ten</strong>, değilse <strong>-de/-den</strong> alır.</p>
                  <table className="w-full text-sm text-left text-slate-300 border-collapse mb-2">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-1">Persoon</th>
                        <th className="py-1">Pattern (te/de)</th>
                        <th className="py-1">werken</th>
                        <th className="py-1">fietsen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700/50"><td>ik, jij, hij</td><td>stem + te / de</td><td>werk<strong>te</strong></td><td>fiets<strong>te</strong></td></tr>
                      <tr><td>wij, jullie, zij</td><td>stem + ten / den</td><td>werk<strong>ten</strong></td><td>fiets<strong>ten</strong></td></tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Onregelmatige Vormen (Düzensizler)</h4>
                  <ul className="text-xs text-slate-300 list-disc pl-5 space-y-1">
                    <li><strong>zijn (to be):</strong> was / waren</li>
                    <li><strong>hebben (to have):</strong> had / hadden</li>
                    <li><strong>gaan (to go):</strong> ging / gingen</li>
                    <li><strong>komen (to come):</strong> kwam / kwamen</li>
                    <li><strong>zien (to see):</strong> zag / zagen</li>
                    <li><strong>vinden (to find):</strong> vond / vonden</li>
                    <li><strong>doen (to do):</strong> deed / deden</li>
                    <li><strong>staan (to stand):</strong> stond / stonden</li>
                    <li><strong>vallen (to fall):</strong> viel / vielen</li>
                    <li><strong>zeggen (to say):</strong> zei / zeiden</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30 mt-4">
                <h4 className="text-amber-300 font-bold text-sm mb-2">Modale Werkwoorden in Imperfectum (Modal Fiiller)</h4>
                <div className="grid grid-cols-5 gap-1 text-xs text-amber-100">
                  <div className="font-bold border-b border-amber-500/50 pb-1">Person</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">mogen (may)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">willen (want)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">moeten (must)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">kunnen (can)</div>
                  
                  <div className="py-1">ik/jij/hij</div>
                  <div className="py-1">mocht</div>
                  <div className="py-1">wilde / wou</div>
                  <div className="py-1">moest</div>
                  <div className="py-1">kon</div>
                  
                  <div className="py-1">wij/jullie/zij</div>
                  <div className="py-1">mochten</div>
                  <div className="py-1">wilden</div>
                  <div className="py-1">moesten</div>
                  <div className="py-1">konden</div>
                </div>
                <p className="text-sm font-bold text-white mt-2">zullen (will) ➔ zou / zouden (would)</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Q&A</h3>
              <ul className="text-sm text-slate-200 space-y-1 list-disc pl-5">
                <li><strong>Wat is kapot?</strong> ➔ Het voorlicht, het achterlicht en de trapper van de fiets zijn kapot.</li>
                <li><strong>Wat is er gebeurd? (Ne oldu?)</strong> ➔ Ik ben met mijn fiets tegen een huis gereden.</li>
                <li><strong>Reactie van de fietsenmaker:</strong> ➔ Dat is niet heel slim... (Bu pek zekice değil...) Geen probleem, ik kan de fiets repareren. Kom over drie dagen terug.</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Summary Chapter 10</h3>
              
              <h4 style={{ color: '#a78bfa' }}>1. Verstaan en begrijpen (To understand)</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><strong>verstaan:</strong> to understand (physically hearing someone / making out the words). <em>Sorry ik versta u niet goed.</em></li>
                <li><strong>begrijpen:</strong> to understand (meaning / comprehension). <em>Sorry ik begrijp het niet. Wat bedoelt u met tiptop?</em></li>
              </ul>

              <h4 style={{ color: '#f472b6', marginTop: '15px' }}>2. Bedoelen vs Betekenen (To mean)</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><strong>bedoelen:</strong> to mean (what a person intended to say).</li>
                <li><strong>betekenen:</strong> to mean (a dictionary definition of a word, a sign or a situation).</li>
              </ul>

              <h4 style={{ color: '#38bdf8', marginTop: '15px' }}>3. Fietsonderdelen (Bicycle Parts)</h4>
              <p>het wiel (wheel), de band (tire), het stuur (steering wheel/handlebars), het zadel (saddle), de bagagedrager (rear rack), de trapper (pedal), de rem (brake), de bel (bell), het voorlicht (front light), het achterlicht (back light), de ketting (chain).</p>

              <h4 style={{ color: '#fbbf24', marginTop: '15px' }}>4. Modale Werkwoorden in Imperfectum (Modal Verbs in Past Tense)</h4>
              <p>zullen = zou/zouden (would), kunnen = kon/konden (could), moeten = moest/moesten (had to), willen = wilde/wou (wanted to).</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>👂 Verstaan vs. Begrijpen</h3>
              <p className="text-sm text-slate-300 mb-2">In Dutch, two different words are used for "to understand", and their contexts are completely different:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Verstaan (Physical hearing)</h4>
                  <p className="text-sm text-blue-100 mb-2">Used when physically hearing someone or making out words.</p>
                  <ul className="text-sm text-slate-300 list-disc pl-5">
                    <li><em>Sorry ik versta u niet goed.</em> (Sorry I can't hear/understand you well.)</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Begrijpen (Grasping meaning)</h4>
                  <p className="text-sm text-blue-100 mb-2">Used when you heard the words but don't know what they mean.</p>
                  <ul className="text-sm text-slate-300 list-disc pl-5">
                    <li><em>Sorry ik begrijp het niet. Wat bedoelt u met 'tiptop'?</em> (Sorry I don't understand. What do you mean by 'tiptop'?)</li>
                  </ul>
                </div>
              </div>
              <h4 className="font-bold text-slate-200 text-xs uppercase mt-3 mb-1">Phrases used when you don't understand:</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Kan u het nog een keer zeggen?</strong> (Can you say it one more time?)</li>
                <li><strong>Kunt u het even herhalen?</strong> (Can you repeat?)</li>
                <li><strong>Wat zegt u?</strong> (What are you saying?)</li>
                <li><strong>Hoe heet dat?</strong> (What is that called?)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🤔 Bedoelen vs. Betekenen (To Mean)</h3>
              <p className="text-sm text-slate-300 mb-2">The English word "to mean" is split into two words in Dutch:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li><strong>Bedoelen:</strong> Used to express what a <em>person</em> wants to say (their intention).<br/><span className="text-slate-400">Ex: Wat <strong>bedoelt</strong> u? (What do you mean / intend to say?)</span></li>
                <li><strong>Betekenen:</strong> Used to express the literal meaning/definition of a <em>word, sign, or situation</em>.<br/><span className="text-slate-400">Ex: Wat <strong>betekent</strong> 'proost'? (What does the word 'proost' mean?)</span></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🚲 De Fiets (Bicycle Parts)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-200">
                <div><strong className="text-emerald-300">het wiel:</strong> wheel</div>
                <div><strong className="text-emerald-300">de band:</strong> tire</div>
                <div><strong className="text-emerald-300">het stuur:</strong> handlebars</div>
                <div><strong className="text-emerald-300">het zadel:</strong> saddle/seat</div>
                <div><strong className="text-emerald-300">de bagagedrager:</strong> luggage carrier</div>
                <div><strong className="text-emerald-300">de trapper:</strong> pedal</div>
                <div><strong className="text-emerald-300">de rem:</strong> brake</div>
                <div><strong className="text-emerald-300">de bel:</strong> bell</div>
                <div><strong className="text-emerald-300">de ketting:</strong> chain</div>
                <div><strong className="text-emerald-300">het voorlicht:</strong> front light</div>
                <div><strong className="text-emerald-300">het achterlicht:</strong> rear light</div>
              </div>
              <p className="text-xs text-slate-400 mt-3 italic">Extra Words: vogelbekdier (platypus), lieveheersbeestje (ladybug).</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⏳ Imperfectum (Past Simple Tense)</h3>
              <p className="text-sm text-slate-300 mb-3">Imperfectum is used to describe past states or habits (Ex: <em>Het was goed gisteren / Ik werkte</em>).</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Regelmatige Werkwoorden (Regular Verbs)</h4>
                  <p className="text-xs text-slate-400 mb-2">If the last letter of the stem is one of the 'soft ketchup' letters (t, k, f, s, c, h, p), it takes <strong>-te/-ten</strong>, otherwise <strong>-de/-den</strong>.</p>
                  <table className="w-full text-sm text-left text-slate-300 border-collapse mb-2">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-1">Persoon</th>
                        <th className="py-1">Pattern (te/de)</th>
                        <th className="py-1">werken</th>
                        <th className="py-1">fietsen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700/50"><td>ik, jij, hij</td><td>stem + te / de</td><td>werk<strong>te</strong></td><td>fiets<strong>te</strong></td></tr>
                      <tr><td>wij, jullie, zij</td><td>stem + ten / den</td><td>werk<strong>ten</strong></td><td>fiets<strong>ten</strong></td></tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Onregelmatige Vormen (Irregular Verbs)</h4>
                  <ul className="text-xs text-slate-300 list-disc pl-5 space-y-1">
                    <li><strong>zijn (to be):</strong> was / waren</li>
                    <li><strong>hebben (to have):</strong> had / hadden</li>
                    <li><strong>gaan (to go):</strong> ging / gingen</li>
                    <li><strong>komen (to come):</strong> kwam / kwamen</li>
                    <li><strong>zien (to see):</strong> zag / zagen</li>
                    <li><strong>vinden (to find):</strong> vond / vonden</li>
                    <li><strong>doen (to do):</strong> deed / deden</li>
                    <li><strong>staan (to stand):</strong> stond / stonden</li>
                    <li><strong>vallen (to fall):</strong> viel / vielen</li>
                    <li><strong>zeggen (to say):</strong> zei / zeiden</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30 mt-4">
                <h4 className="text-amber-300 font-bold text-sm mb-2">Modale Werkwoorden in Imperfectum (Modal Verbs)</h4>
                <div className="grid grid-cols-5 gap-1 text-xs text-amber-100">
                  <div className="font-bold border-b border-amber-500/50 pb-1">Person</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">mogen (may)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">willen (want)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">moeten (must)</div>
                  <div className="font-bold border-b border-amber-500/50 pb-1">kunnen (can)</div>
                  
                  <div className="py-1">ik/jij/hij</div>
                  <div className="py-1">mocht</div>
                  <div className="py-1">wilde / wou</div>
                  <div className="py-1">moest</div>
                  <div className="py-1">kon</div>
                  
                  <div className="py-1">wij/jullie/zij</div>
                  <div className="py-1">mochten</div>
                  <div className="py-1">wilden</div>
                  <div className="py-1">moesten</div>
                  <div className="py-1">konden</div>
                </div>
                <p className="text-sm font-bold text-white mt-2">zullen (will) ➔ zou / zouden (would)</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Q&A</h3>
              <ul className="text-sm text-slate-200 space-y-1 list-disc pl-5">
                <li><strong>Wat is kapot?</strong> ➔ Het voorlicht, het achterlicht en de trapper van de fiets zijn kapot.</li>
                <li><strong>Wat is er gebeurd? (What happened?)</strong> ➔ Ik ben met mijn fiets tegen een huis gereden. (I rode my bike into a house).</li>
                <li><strong>Reactie van de fietsenmaker:</strong> ➔ Dat is niet heel slim... (That is not very smart...) Geen probleem, ik kan de fiets repareren. Kom over drie dagen terug.</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): On-Class Grammatica Test",
        isExtra: true,
        questions: [
          { id: "10_onclass_1", type: "multiple_choice", question: "Wat is de verleden tijd (imperfectum) van het onregelmatige werkwoord 'zijn' (ik)?", options: ["had", "was", "ben"], correctAnswer: "was" },
          { id: "10_onclass_2", type: "multiple_choice", question: "Wat is de verleden tijd van 'hebben' (wij)?", options: ["hebben", "hadden", "haddden"], correctAnswer: "hadden" },
          { id: "10_onclass_3", type: "fill_in", question: "Vertaal de zin: 'Wat bedoelt u met tiptop?' -> 'What do you ________ by tiptop?'", correctAnswer: "mean" }
        ]
      },
      {
        instruction: "On-Class Oefening 1: Verstaan of Begrijpen?",
        isExtra: false,
        questions: [
          { id: "10_onclass_1_1", type: "fill_in", question: "Ik hoor je niet door de muziek. Sorry, ik ________ u niet goed.", correctAnswer: "versta" },
          { id: "10_onclass_1_2", type: "fill_in", question: "Ik weet niet wat dat woord betekent. Sorry, ik ________ het niet.", correctAnswer: "begrijp" },
          { id: "10_onclass_1_3", type: "multiple_choice", question: "Wat zeg je als je de spreker fysiek niet goed hoort? (What do you say if you physically can't hear the speaker well?)", options: ["Sorry, ik begrijp het niet.", "Sorry, ik versta u niet.", "Wat betekent dat?"], correctAnswer: "Sorry, ik versta u niet." }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Bedoelen of Betekenen?",
        isExtra: false,
        questions: [
          { id: "10_onclass_2_1", type: "fill_in", question: "Wat ________ het woord 'voorlicht'? (anlamına gelmek / to mean)", correctAnswer: "betekent" },
          { id: "10_onclass_2_2", type: "fill_in", question: "Ik snap je niet. Wat ________ u met 'tiptop'? (kastetmek/demek istemek / intend to say)", correctAnswer: "bedoelt" },
          { id: "10_onclass_2_3", type: "multiple_choice", question: "Vertaal: 'What do you mean by that?'", options: ["Wat beteken je daarmee?", "Wat bedoel je daarmee?", "Wat versta je daarmee?"], correctAnswer: "Wat bedoel je daarmee?" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: De Fiets (Bicycle Parts)",
        isExtra: false,
        questions: [
          { id: "10_onclass_3_1", type: "fill_in", question: "The wheel = het ________", correctAnswer: "wiel" },
          { id: "10_onclass_3_2", type: "fill_in", question: "The steering wheel = het ________", correctAnswer: "stuur" },
          { id: "10_onclass_3_3", type: "fill_in", question: "The pedal = de ________", correctAnswer: "trapper" },
          { id: "10_onclass_3_4", type: "multiple_choice", question: "Hoe zeg je 'the brake' in het Nederlands?", options: ["de band", "de ketting", "de rem"], correctAnswer: "de rem" },
          { id: "10_onclass_3_5", type: "fill_in", question: "The parcel shelf / rear rack = de ________", correctAnswer: "bagagedrager" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Imperfectum (Düzensiz ve Modal Fiiller / Irregular and Modal Verbs)",
        isExtra: true,
        questions: [
          { id: "10_onclass_4_1", type: "fill_in", question: "Ik ________ (zijn) gisteren ziek.", correctAnswer: "was" },
          { id: "10_onclass_4_2", type: "fill_in", question: "Wij ________ (hebben) een probleem met de fiets.", correctAnswer: "hadden" },
          { id: "10_onclass_4_3", type: "fill_in", question: "Hij ________ (gaan) naar de supermarkt.", correctAnswer: "ging" },
          { id: "10_onclass_4_4", type: "fill_in", question: "Zij (they) ________ (doen) hun huiswerk niet.", correctAnswer: "deden" },
          { id: "10_onclass_4_5", type: "multiple_choice", question: "Wat is het imperfectum (ik-vorm) van 'kunnen' (can)?", options: ["kon", "moest", "wilde"], correctAnswer: "kon" },
          { id: "10_onclass_4_6", type: "fill_in", question: "Ik ________ (willen) een nieuwe fiets kopen. (I wanted)", correctAnswer: "wilde" },
          { id: "10_onclass_4_7", type: "multiple_choice", question: "Wat is de verleden tijd (past tense) van 'zullen' (will)?", options: ["mocht", "zou", "kon"], correctAnswer: "zou" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Situaties in het Nederlands (Situations in Dutch)",
        isExtra: true,
        questions: [
          { id: "10_onclass_5_1", type: "multiple_choice", question: "Wat zeg je als je vraagt om herhaling? (Ask to repeat)", options: ["Hoe heet dat?", "Wat is er gebeurd?", "Kunt u het nog een keer zeggen?"], correctAnswer: "Kunt u het nog een keer zeggen?" },
          { id: "10_onclass_5_2", type: "fill_in", question: "Vertaal: 'What happened?' -> Wat is er ________?", correctAnswer: "gebeurd" },
          { id: "10_onclass_5_3", type: "multiple_choice", question: "Waarom is de fiets van de klant kapot?", options: ["Hij is gevallen.", "Hij is tegen een huis gereden.", "De fiets is heel oud."], correctAnswer: "Hij is tegen een huis gereden." }
        ]
      }
    ]
  }
];