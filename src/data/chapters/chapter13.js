// src/data/chapters/chapter13.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter13Vocab = [
  { id: "13_1", chapter: 13, nl: "bezoekt (bezoeken)", en: "is visiting", example: "Bas bezoekt zijn nieuwe vrienden." },
  { id: "13_2", chapter: 13, nl: "kom binnen (binnenkomen)", en: "come in", example: "Hallo Bas, welkom, kom binnen." },
  { id: "13_3", chapter: 13, nl: "de kerk", en: "church", example: "Het huis naast de kerk." },
  { id: "13_4", chapter: 13, nl: "zei (zeggen)", en: "said", example: "Dat zei je gisteren." },
  { id: "13_5", chapter: 13, nl: "kon (kunnen)", en: "could", example: "Dat kon niet missen." },
  { id: "13_6", chapter: 13, nl: "missen", en: "go wrong / fail", example: "De weg was makkelijk, dat kon niet missen." },
  { id: "13_7", chapter: 13, nl: "gelukkig", en: "fortunately", example: "Gelukkig ben je er." },
  { id: "13_8", chapter: 13, nl: "meegenomen (meenemen)", en: "brought", example: "Heb je Maria niet meegenomen?" },
  { id: "13_9", chapter: 13, nl: "moest (moeten)", en: "had to", example: "Ze moest de auto naar de garage brengen." },
  { id: "13_10", chapter: 13, nl: "de auto", en: "car", example: "Mijn auto is kapot." },
  { id: "13_11", chapter: 13, nl: "brengen", en: "take / bring", example: "Ik moet de auto weg brengen." },
  { id: "13_12", chapter: 13, nl: "lekker", en: "well", example: "Ze voelde zich niet zo lekker." },
  { id: "13_13", chapter: 13, nl: "groeten", en: "greetings", example: "Ik moest de groeten doen." },
  { id: "13_14", chapter: 13, nl: "Doe haar de groeten terug", en: "Give her our regards", example: "Doe haar de groeten terug!" },
  { id: "13_15", chapter: 13, nl: "vroeg", en: "early", example: "Ik ben wel een beetje vroeg." },
  { id: "13_16", chapter: 13, nl: "verontschuldigen", en: "apologize", example: "Je hoeft je niet te verontschuldigen." },
  { id: "13_17", chapter: 13, nl: "doe uit (uitdoen)", en: "take off", example: "Doe je jas maar gauw uit." },
  { id: "13_18", chapter: 13, nl: "het weer", en: "weather", example: "Wat een weer, hè?" },
  { id: "13_19", chapter: 13, nl: "hè", en: "isn't it", example: "Koud hè?" },
  { id: "13_20", chapter: 13, nl: "Zeg dat wel!", en: "You can say that again!", example: "Zeg dat wel! Het regent hard." },
  { id: "13_21", chapter: 13, nl: "koud", en: "cold", example: "Het is koud buiten." },
  { id: "13_22", chapter: 13, nl: "nat", en: "wet", example: "Het is koud en nat." },
  { id: "13_23", chapter: 13, nl: "ben verkouden", en: "have a cold", example: "Ik ben al twee weken verkouden." },
  { id: "13_24", chapter: 13, nl: "ik ben toe aan (toe zijn aan)", en: "I need", example: "Ik ben toe aan mooi weer." },
  { id: "13_25", chapter: 13, nl: "hebben aan (aanhebben)", en: "have on", example: "We hebben de verwarming aan." },
  { id: "13_26", chapter: 13, nl: "de verwarming", en: "heating", example: "De verwarming staat hoog." },
  { id: "13_27", chapter: 13, nl: "belachelijk", en: "ridiculous", example: "Belachelijk hè, in juni!" },
  { id: "13_28", chapter: 13, nl: "geloof (geloven)", en: "believe", example: "Ik geloof het nog niet." },
  { id: "13_29", chapter: 13, nl: "schijnt (schijnen)", en: "seems / shines", example: "Het schijnt morgen mooi weer te worden." },
  { id: "13_30", chapter: 13, nl: "kom verder (verderkomen)", en: "come in / step inside", example: "Hallo Bas, kom verder." },
  { id: "13_31", chapter: 13, nl: "ah", en: "ah", example: "Ah, hier is het lekker warm." },
  { id: "13_32", chapter: 13, nl: "lekker warm", en: "nice and warm", example: "Binnen is het lekker warm." },
  { id: "13_33", chapter: 13, nl: "warm", en: "warm", example: "Ik heb het warm." },
  { id: "13_34", chapter: 13, nl: "de doos", en: "box", example: "Een doos bonbons." },
  { id: "13_35", chapter: 13, nl: "bonbons (de bonbon)", en: "chocolates", example: "Heerlijke bonbons." },
  { id: "13_36", chapter: 13, nl: "de bos", en: "bunch", example: "Een bos bloemen." },
  { id: "13_37", chapter: 13, nl: "bloemen (de bloem)", en: "flowers", example: "Mooie bloemen." },
  { id: "13_38", chapter: 13, nl: "de vaas", en: "vase", example: "Wil jij de bloemen in een vaas zetten?" },
  { id: "13_39", chapter: 13, nl: "zetten", en: "put", example: "Ik zet de vaas op tafel." },
  { id: "13_40", chapter: 13, nl: "snijd (snijden)", en: "cut", example: "Ik snijd het brood." },
  { id: "13_41", chapter: 13, nl: "schuin", en: "at an angle", example: "Je moet de bloemen schuin afsnijden." },
  { id: "13_42", chapter: 13, nl: "afsnijden", en: "cut off", example: "Ik zal ze schuin afsnijden." },
  { id: "13_43", chapter: 13, nl: "houden van", en: "like / fond of / love", example: "Jullie houden wel van dieren." },
  { id: "13_44", chapter: 13, nl: "dieren (het dier)", en: "animals", example: "Ik vind dieren gezellig." },
  { id: "13_45", chapter: 13, nl: "de hond", en: "dog", example: "We hebben één hond." },
  { id: "13_46", chapter: 13, nl: "katten (de kat)", en: "cats", example: "En drie katten." },
  { id: "13_47", chapter: 13, nl: "vissen (de vis)", en: "fish", example: "We hebben ook vissen." },
  { id: "13_48", chapter: 13, nl: "jawel", en: "oh yes", example: "Vind je dat niet leuk? Jawel." },
  { id: "13_49", chapter: 13, nl: "meestal", en: "usually", example: "Ik vind dieren meestal heel leuk." },
  { id: "13_50", chapter: 13, nl: "gezellig", en: "pleasant / sociable", example: "Dieren in huis is gezellig." },
  { id: "13_51", chapter: 13, nl: "hadden (hebben)", en: "used to have / had", example: "Wij hadden ook een kat." },
  { id: "13_52", chapter: 13, nl: "het ongeluk", en: "accident", example: "Hij heeft een ongeluk gehad." },
  { id: "13_53", chapter: 13, nl: "hebben gehad (hebben)", en: "had", example: "Hij heeft een ongeluk gehad." },
  { id: "13_54", chapter: 13, nl: "onder de auto gekomen", en: "was run over", example: "Onze kat is onder de auto gekomen." },
  { id: "13_55", chapter: 13, nl: "hebben verdriet gehad om", en: "grieved for", example: "We hebben veel verdriet gehad." },
  { id: "13_56", chapter: 13, nl: "het verdriet", en: "grief / sorrow", example: "Dat was veel verdriet." },
  { id: "13_57", chapter: 13, nl: "de dood", en: "death", example: "Verdriet om zijn dood." },
  { id: "13_58", chapter: 13, nl: "volgens mij", en: "in my opinion", example: "Volgens mij is dat goed." },
  { id: "13_59", chapter: 13, nl: "volgens", en: "according to", example: "Volgens de docent." },
  { id: "13_60", chapter: 13, nl: "de gezondheid", en: "health", example: "Goed voor je gezondheid." },
  { id: "13_61", chapter: 13, nl: "lachen", en: "laugh", example: "Je kunt om ze lachen." },
  { id: "13_62", chapter: 13, nl: "gezond", en: "healthy", example: "Lachen is gezond." },
  { id: "13_63", chapter: 13, nl: "kom mee (meekomen)", en: "come (with me)", example: "Kom dan maar even mee." },
  { id: "13_64", chapter: 13, nl: "de schuur", en: "shed", example: "Naar de schuur." },
  { id: "13_65", chapter: 13, nl: "twee weken geleden", en: "two weeks ago", example: "Twee weken geleden geboren." },
  { id: "13_66", chapter: 13, nl: "jongen (het jong)", en: "litter (young animals)", example: "Onze poes heeft jongen gekregen." },
  { id: "13_67", chapter: 13, nl: "gekregen (krijgen)", en: "had (received)", example: "Ze heeft jongen gekregen." },
  { id: "13_68", chapter: 13, nl: "iemand", en: "someone", example: "We zoeken nog iemand." },
  { id: "13_69", chapter: 13, nl: "laatste (laatst)", en: "last", example: "Voor het laatste katje." }
];

export const chapter13Dialogues = {
  "13.1": [
    { speaker: "Verteller", text: "De portier van de Evenementenhal in Amsterdam, Bas, bezoekt voor het eerst zijn nieuwe vrienden Paul en Janine.", translation: "Amsterdam'daki Evenementenhal'ın kapıcısı Bas, yeni arkadaşları Paul ve Janine'i ilk kez ziyaret ediyor." },
    { speaker: "Paul", text: "Hallo Bas, welkom, kom binnen. Kon je het makkelijk vinden?", translation: "Merhaba Bas, hoş geldin, içeri gel. Kolayca bulabildin mi?" },
    { speaker: "Bas", text: "Ja, het was geen probleem. Het huis naast de kerk, zei je. Dat kon niet missen.", translation: "Evet, hiç sorun olmadı. Kilisenin yanındaki ev, demiştin. Kaçırılamazdı (Gözden kaçacak gibi değildi)." },
    { speaker: "Paul", text: "Gelukkig. Heb je Maria niet meegenomen?", translation: "Çok şükür. Maria'yı getirmedin mi?" },
    { speaker: "Bas", text: "Nee, ze moest de auto naar de garage brengen en ze voelde zich niet zo lekker. Jullie moeten de groeten hebben.", translation: "Hayır, arabayı servise götürmesi gerekiyordu ve kendini pek iyi hissetmiyordu. Size selamı var." },
    { speaker: "Paul", text: "Bedankt, doe haar de groeten terug.", translation: "Teşekkürler, sen de ona selam söyle." },
    { speaker: "Bas", text: "Dat zal ik doen. Ik ben wel een beetje vroeg.", translation: "Söylerim (Bunu yapacağım). Biraz erken geldim galiba." },
    { speaker: "Paul", text: "O, je hoeft je niet te verontschuldigen. Leuk dat je er bent. Doe je jas maar gauw uit. Wat een weer, hè?", translation: "Oh, özür dilemene gerek yok. Burada olman ne güzel. Montunu hemen çıkar. Bu ne biçim hava, değil mi?" },
    { speaker: "Bas", text: "Zeg dat wel! Het is koud en nat. Ik ben al twee weken verkouden. Ik ben toe aan mooi weer.", translation: "Sorma (Haklısın)! Hava soğuk ve ıslak. İki haftadır nezleyim. Güzel bir havaya ihtiyacım var." },
    { speaker: "Paul", text: "Ja, ik ook. We hebben de verwarming aan en het is juni! Belachelijk hè? Ik geloof het nog niet, maar het schijnt morgen mooi weer te worden.", translation: "Evet, benim de. Haziran ayındayız ve kalorifer açık! Saçma değil mi? Henüz inanamıyorum ama görünüşe göre yarın hava güzel olacakmış." },
    { speaker: "Janine", text: "Hallo Bas, kom verder.", translation: "Merhaba Bas, buyur geç." },
    { speaker: "Bas", text: "Hallo Janine. Ah, hier is het lekker warm. Alsjeblieft, ik heb iets voor jullie meegenomen.", translation: "Merhaba Janine. Ah, burası çok güzel sıcakmış. Buyurun, sizin için bir şeyler getirdim." },
    { speaker: "Janine", text: "O, wat lekker, een doos bonbons, en een mooie bos bloemen. Dank je wel. Paul, wil jij de bloemen in een vaas zetten? Snijd je ze wel ...?", translation: "Oh, ne kadar lezzetli, bir kutu çikolata ve güzel bir buket çiçek. Teşekkür ederim. Paul, çiçekleri vazoya koyar mısın? Onları kesersin değil mi...?" },
    { speaker: "Paul", text: "Ja, ja, ik zal ze schuin afsnijden.", translation: "Evet, evet, onları çapraz (eğik) keseceğim." },
    { speaker: "Bas", text: "Wat een mooie kamer! Jullie houden wel van dieren zie ik; een hond, twee, nee drie katten en vissen.", translation: "Ne güzel bir oda! Görüyorum ki hayvanları seviyorsunuz; bir köpek, iki, hayır üç kedi ve balıklar." },
    { speaker: "Janine", text: "Ja, vind je dat niet leuk?", translation: "Evet, bunu sevmiyor musun?" },
    { speaker: "Bas", text: "Jawel, ik vind dieren meestal heel leuk en gezellig. Wij hadden ook een kat, Tony, maar hij heeft een ongeluk gehad, hij is onder een auto gekomen. We hebben veel verdriet om zijn dood gehad. Maar we willen nu graag weer een nieuwe kat. Volgens mij zijn dieren heel goed voor je gezondheid. Je kunt om ze lachen en lachen is gezond.", translation: "Yok canım (severim), bence hayvanlar genellikle çok tatlı ve eğlencelidir. Bizim de Tony adında bir kedimiz vardı ama bir kaza geçirdi, arabanın altında kaldı. Ölümü üzerine çok üzüldük. Ama şimdi tekrar yeni bir kedi istiyoruz. Bence hayvanlar sağlığınız için çok iyi. Onlara gülebilirsiniz ve gülmek sağlıklıdır." },
    { speaker: "Paul", text: "Kom dan maar even mee naar de schuur. Onze Minoes heeft twee weken geleden jongen gekregen en we zoeken nog iemand voor het laatste katje.", translation: "Öyleyse benimle kulübeye gel. Bizim Minoes iki hafta önce yavrular doğurdu ve son yavru kedi için hala birini arıyoruz." }
  ]
};

export const chapter13Sections = [
  {
    id: "13.1",
    chapter: 13,
    title: "13.1 Dialoog: Bij vrienden",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Op bezoek (Misafirlikte)</h3>
          <p>Bas, yeni arkadaşları Paul ve Janine'i evlerinde ziyaret ediyor (op bezoek). Hollandacada birine misafirliğe gidildiğinde kapıda yapılan konuşmalara (hava durumu, yol vb.) dikkat edin:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Kon je het makkelijk vinden?</strong> (Evi kolay bulabildin mi?)</li>
            <li><strong>Doe je jas maar gauw uit.</strong> (Montunu hemen çıkar).</li>
            <li><strong>Ik heb iets voor jullie meegenomen.</strong> (Sizin için bir şeyler getirdim ➔ Hollanda'da misafirliğe giderken çiçek veya çikolata götürmek yaygındır).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Kies het goede vervolg: a of b.",
        isExtra: false,
        questions: [
          { id: "13.1_opd1_1", type: "multiple_choice", question: "1. Bas gaat op bezoek bij...", options: ["a) zijn vrienden.", "b) zijn broer."], correctAnswer: "a) zijn vrienden." },
          { id: "13.1_opd1_2", type: "multiple_choice", question: "2. De route naar Paul en Janine was...", options: ["a) niet zo gemakkelijk te vinden.", "b) gemakkelijk te vinden."], correctAnswer: "b) gemakkelijk te vinden." },
          { id: "13.1_opd1_3", type: "multiple_choice", question: "3. Maria, de vriendin van Bas,...", options: ["a) komt niet.", "b) komt later."], correctAnswer: "a) komt niet." },
          { id: "13.1_opd1_4", type: "multiple_choice", question: "4. Bas heeft...", options: ["a) bloemen en bonbons meegenomen.", "b) bonbons en een vaas met bloemen meegenomen."], correctAnswer: "a) bloemen en bonbons meegenomen." },
          { id: "13.1_opd1_5", type: "multiple_choice", question: "5. Paul en Janine hebben...", options: ["a) veel dieren.", "b) alleen nog een kat."], correctAnswer: "a) veel dieren." },
          { id: "13.1_opd1_6", type: "multiple_choice", question: "6. Bas heeft geen kat, want...", options: ["a) Maria houdt niet van dieren.", "b) zijn kat is doodgegaan."], correctAnswer: "b) zijn kat is doodgegaan." }
        ]
      }
    ]
  },
  {
    id: "13.2",
    chapter: 13,
    title: "13.2 Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
          <p>Günlük sohbetler (small talk) ve duyguları ifade etmeyle ilgili kelimeleri içerir. <strong>Gelukkig</strong> (çok şükür/neyse ki), <strong>verdriet</strong> (üzüntü) ve <strong>verkoudheid</strong> (soğuk algınlığı) kelimelerine dikkat edin.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling?",
        isExtra: true,
        questions: generateSmartQuestions(13, "Woordenlijst", 10, chapter13Vocab)
      }
    ]
  },
  {
    id: "13.3",
    chapter: 13,
    title: "13.3 Mening vragen en geven",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>💭 Mening vragen en geven (Fikir Sormak ve Söylemek)</h3>
          
          <h4 className="font-bold text-white mt-2">Mening vragen (Sormak):</h4>
          <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
            <li><strong>Wat vind je van ...?</strong> (... hakkında ne düşünüyorsun?)</li>
            <li><strong>Hoe vind je ...?</strong> (... nasıl buldun?)</li>
          </ul>

          <h4 className="font-bold text-white mt-4">Mening geven (Cevaplamak):</h4>
          <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Ik vind ... (leuk/mooi/lekker).</strong> (Ben ... güzel buluyorum).</li>
            <li><strong>Volgens mij ...</strong> (Bana göre / Bence ...) ➔ <em>Volgens mij zijn dieren goed voor de gezondheid.</em></li>
          </ul>

          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-300 mb-2">💡 Jawel (Yok canım / Aksine)</h4>
            <p className="text-sm text-cyan-100">Birisi size olumsuz bir soru sorduğunda ("Bunu sevmiyor musun?" gibi), cevabınız olumluysa "Ja" yerine <strong>"Jawel"</strong> denir.<br/>
            <em>Vind je dat niet leuk? ➔ <strong>Jawel</strong>, ik vind dieren heel leuk.</em></p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Vul in deze dialogen het goede woord in.",
        isExtra: false,
        questions: [
          { id: "13.3_opd2_1", type: "fill_in", question: "1. ________ vind je van dit boek? (Ik vind het erg interessant).", correctAnswer: "Wat" },
          { id: "13.3_opd2_2", type: "fill_in", question: "2. ________ vond je de film? (Heel goed!).", correctAnswer: "Hoe" },
          { id: "13.3_opd2_3", type: "fill_in", question: "3. Wat vind je ________ dit restaurant? (Het is heel gezellig).", correctAnswer: "van" },
          { id: "13.3_opd2_4", type: "fill_in", question: "4. Kijk eens, we hebben jonge katjes. ________ je ze niet lief? (Ja, heel lief).", correctAnswer: "Vind" },
          { id: "13.3_opd2_5", type: "fill_in", question: "5. Waarom wil je niet in de Bloemenbuurt wonen? ________ mij is die buurt niet zo leuk. (Bence)", correctAnswer: "Volgens" }
        ]
      }
    ]
  },
  {
    id: "13.4",
    chapter: 13,
    title: "13.4 Praten over koetjes en kalfjes (Small Talk)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>🗣️ Praten over koetjes en kalfjes (Havadan Sudan Konuşmak)</h3>
          <p className="text-sm text-slate-300">Kelime anlamı "İnekler ve buzağılar hakkında konuşmak" olsa da, bu deyim Hollandacada <strong>Small Talk</strong> (Havadan sudan / önemsiz konulardan sohbet etmek) anlamına gelir. En popüler konular: Hava durumu, trafik ve hal-hatır sormaktır.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-pink-900/20 p-3 rounded border border-pink-500/20">
              <h4 className="text-pink-300 font-bold mb-1">Het weer (Hava Durumu)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>Wat een weer, hè? (Bu ne biçim hava, değil mi?) ➔ <strong>Zeg dat wel!</strong> (Sorma / Aynen öyle!)</li>
                <li>Het wordt nu echt voorjaar. (Artık gerçekten ilkbahar oluyor.) ➔ Ja, lekker hè!</li>
              </ul>
            </div>
            <div className="bg-pink-900/20 p-3 rounded border border-pink-500/20">
              <h4 className="text-pink-300 font-bold mb-1">Het verkeer (Trafik)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>Was het druk op de weg? (Yolda trafik var mıydı?) ➔ Nee, het was niet zo druk.</li>
                <li>Ja, op de A28 stond twaalf kilometer file! (Evet, 12 kilometre kuyruk vardı!)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Kies het beste woord. De gesprekken zijn steeds dialogen.",
        isExtra: false,
        questions: [
          { id: "13.4_opd4_1", type: "multiple_choice", question: "1. Wil je koffie? Ja, ________.", options: ["graag", "oké"], correctAnswer: "graag" },
          { id: "13.4_opd4_2", type: "multiple_choice", question: "2. Ik was erg ziek, maar nu voel ik me weer beter. ________. Ik vond het zo vervelend voor je.", options: ["Prima", "Gelukkig"], correctAnswer: "Gelukkig" },
          { id: "13.4_opd4_3", type: "multiple_choice", question: "3. Lang niet gezien! Nee, ________.", options: ["niet", "klopt"], correctAnswer: "klopt" },
          { id: "13.4_opd4_4", type: "multiple_choice", question: "4. Hoe is het met jou? Prima. ________ jou ook?", options: ["Met", "Van"], correctAnswer: "Met" },
          { id: "13.4_opd4_5", type: "multiple_choice", question: "5. Slecht weer, hè? Zeg ________ wel.", options: ["dat", "het"], correctAnswer: "dat" },
          { id: "13.4_opd4_6", type: "multiple_choice", question: "6. Mmmm, heerlijke chocola. Ja, lekker ________?", options: ["hè", "nu"], correctAnswer: "hè" },
          { id: "13.4_opd4_7", type: "multiple_choice", question: "7. Mooie film hè? Ja, ________ mooi.", options: ["goed", "heel"], correctAnswer: "heel" },
          { id: "13.4_opd4_8", type: "multiple_choice", question: "8. Was het druk op de weg? Nee, het was niet ________ druk.", options: ["te", "zo"], correctAnswer: "zo" }
        ]
      },
      {
        instruction: "Opdracht 5: Welke reactie uit het rechterrijtje past bij de zin of vraag? (Eşleştirme)",
        isExtra: false,
        questions: [
          { id: "13.4_opd5_1", type: "multiple_choice", question: "1. Ik ben toe aan koffie.", options: ["d) Ja, ik ook.", "h) Prima. En met jou?", "c) Zeg dat wel."], correctAnswer: "d) Ja, ik ook." },
          { id: "13.4_opd5_2", type: "multiple_choice", question: "2. Hoe gaat het met je?", options: ["h) Prima. En met jou?", "e) Wat lekker!", "g) Gelukkig."], correctAnswer: "h) Prima. En met jou?" },
          { id: "13.4_opd5_3", type: "multiple_choice", question: "3. Ik moest de groeten aan jullie doen.", options: ["a) Bedankt.", "b) Dat zal ik doen.", "f) Dat is geen probleem."], correctAnswer: "a) Bedankt." },
          { id: "13.4_opd5_4", type: "multiple_choice", question: "4. Ik ben wel een beetje vroeg.", options: ["f) Dat is geen probleem.", "c) Zeg dat wel.", "e) Wat lekker!"], correctAnswer: "f) Dat is geen probleem." },
          { id: "13.4_opd5_5", type: "multiple_choice", question: "5. Het adres was niet moeilijk te vinden.", options: ["g) Gelukkig.", "a) Bedankt.", "h) Prima. En met jou?"], correctAnswer: "g) Gelukkig." },
          { id: "13.4_opd5_6", type: "multiple_choice", question: "6. Ik heb een doos bonbons meegenomen.", options: ["e) Wat lekker!", "b) Dat zal ik doen.", "c) Zeg dat wel."], correctAnswer: "e) Wat lekker!" },
          { id: "13.4_opd5_7", type: "multiple_choice", question: "7. Wat een weer, hè?", options: ["c) Zeg dat wel.", "d) Ja, ik ook.", "f) Dat is geen probleem."], correctAnswer: "c) Zeg dat wel." },
          { id: "13.4_opd5_8", type: "multiple_choice", question: "8. Doe haar de groeten terug.", options: ["b) Dat zal ik doen.", "a) Bedankt.", "g) Gelukkig."], correctAnswer: "b) Dat zal ik doen." }
        ]
      }
    ]
  },
  {
    id: "13.5",
    chapter: 13,
    title: "13.5 Zullen (2) - Belofte (Söz Vermek)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🤝 Zullen: Belofte (Söz Vermek)</h3>
          <p className="text-sm text-slate-300">Daha önce <em>zullen</em> fiilini bir teklif yaparken (Zullen we afspreken? - Buluşalım mı?) kullanmıştık. Şimdi ise gelecekte bir şeyi yapacağımıza <strong>söz verirken (belofte)</strong> kullanıyoruz.</p>
          
          <div className="bg-emerald-900/30 p-4 rounded-xl mt-4 border border-emerald-500/40">
            <h4 className="font-bold text-emerald-300 mb-2">Voorbeelden (Örnekler):</h4>
            <ul className="text-sm text-emerald-100 space-y-2 list-disc pl-5">
              <li>"Doe je de groeten aan je vriend?" ➔ "Ja, dat <strong>zal</strong> ik doen." (Evet, yapacağım/söyleyeceğim).</li>
              <li>"Wil jij de bloemen in de vaas zetten?" ➔ "Ik <strong>zal</strong> de bloemen schuin afsnijden." (Çiçekleri eğik keseceğim).</li>
            </ul>
            <p className="text-xs text-slate-300 mt-3 border-t border-emerald-500/30 pt-2"><em>Not: Modale werkwoorden kuralı aynen geçerlidir; 'zal' veya 'zullen' 2. sırada olur, asıl fiil ise cümlenin en sonuna (mastar halinde) gider.</em></p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Maak van de zin een belofte. Je gebruikt Ik zal / We zullen.",
        isExtra: false,
        questions: [
          { id: "13.5_opd8_1", type: "fill_in", question: "We kopen een cadeau voor Nadja. -> We ________ een cadeau voor Nadja ________.", correctAnswer: "zullen, kopen" },
          { id: "13.5_opd8_2", type: "fill_in", question: "Ik betaal het volgende rondje. -> Ik ________ het volgende rondje ________.", correctAnswer: "zal, betalen" },
          { id: "13.5_opd8_3", type: "fill_in", question: "Ik schrijf het in mijn agenda. -> Ik ________ het in mijn agenda ________.", correctAnswer: "zal, schrijven" },
          { id: "13.5_opd8_4", type: "fill_in", question: "Ik spel mijn naam even. -> Ik ________ mijn naam even ________.", correctAnswer: "zal, spellen" },
          { id: "13.5_opd8_5", type: "fill_in", question: "We brengen de vakantiefoto's mee. -> We ________ de vakantiefoto's ________.", correctAnswer: "zullen, meebrengen" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Zullen als Belofte",
        isExtra: true,
        questions: [
          { id: "13.5_smart_1", type: "multiple_choice", question: "Iemand zegt: 'Vergeet niet te bellen!' (Aramayı unutma). Wat is een goede belofte?", options: ["Dat zal ik doen.", "Dat wil ik doen.", "Zullen we bellen?"], correctAnswer: "Dat zal ik doen." },
          { id: "13.5_smart_2", type: "fill_in", question: "Maak een belofte: Ik ruim de kamer op. -> Ik ________ de kamer ________.", correctAnswer: "zal, opruimen" }
        ]
      }
    ]
  },
  {
    id: "13.6",
    chapter: 13,
    title: "13.6 Tekst: Mijn passie!",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Mijn passie!</h3>
          <p className="text-sm text-slate-300">Sanat akademisi öğrencisi Evelyn Koster'in müzik tutkusu hakkında okuma parçası:</p>
          <p className="text-sm text-slate-200 mt-2 italic bg-amber-900/20 p-3 rounded border border-amber-500/30">
            "Vroeger wilde ik graag in een koor popliedjes zingen, maar van mijn zangdocent moest ik met klassiek beginnen. Ik vond het vreselijk, want mijn ouders houden van klassieke muziek. Als puber wil je niets liever dan je daartegen afzetten. Maar er waren klassieke stukken die ik echt heel leuk vond. Toen ben ik gaan solliciteren... en aangenomen bij een operakoor... Zingen is mijn passie."
          </p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 12: Zijn de volgende zinnen waar of niet waar?",
        isExtra: false,
        questions: [
          { id: "13.6_opd12_1", type: "multiple_choice", question: "1. Evelyn begon met popliedjes, later zong ze klassiek.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "13.6_opd12_2", type: "multiple_choice", question: "2. De ouders van Evelyn houden van klassieke muziek.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "13.6_opd12_3", type: "multiple_choice", question: "3. Evelyn ontdekte dat ze klassieke muziek ook mooi vond.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "13.6_opd12_4", type: "multiple_choice", question: "4. Evelyn is gestopt met school.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "13.6_opd12_5", type: "multiple_choice", question: "5. Evelyn zingt nu bij de Noord-Nederlandse Opera.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "13.6_opd12_6", type: "multiple_choice", question: "6. Evelyn stopt met zingen, want ze heeft het druk met haar studie.", options: ["waar", "niet waar"], correctAnswer: "niet waar" }
        ]
      }
    ]
  },
  {
    id: "13.7",
    chapter: 13,
    title: "13.7 Uitspraak & Cultuur (Cadeaus)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🇳🇱 Cultuur: Op bezoek gaan (Misafirliğe Gitmek)</h3>
          <p className="text-sm text-slate-300">Hollanda kültüründe birine misafirliğe (özellikle ilk kez veya akşam yemeği için) gittiğinizde eli boş gidilmez.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Wat geef je als je bij iemand op bezoek gaat?</strong> (Birisini ziyaret ettiğinizde ne verirsiniz?)</li>
            <li>En yaygın hediyeler: <strong>Een bos bloemen</strong> (bir buket çiçek), <strong>een doosje bonbons</strong> (bir kutu çikolata) veya <strong>een fles wijn</strong> (bir şişe şarap).</li>
            <li>Hollandalılar çiçek almayı çok severler ve genellikle hemen bir vazoya koyarlar (in een vaas zetten).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Cultuur Oefening: Typische cadeaus in Nederland",
        isExtra: true,
        questions: [
          { id: "13.7_cult_1", type: "multiple_choice", question: "Je bent uitgenodigd voor een etentje (dinner) bij Nederlandse vrienden. Wat neem je mee?", options: ["Kleding (kıyafet)", "Geld (para)", "Een bos bloemen of wijn (çiçek veya şarap)"], correctAnswer: "Een bos bloemen of wijn (çiçek of şarap)" }
        ]
      }
    ]
  },
  {
    id: "On-Class-13",
    chapter: 13,
    title: "13.9 Extra Oefeningen (On-Class)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 12 & Uitspraak</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-blue-300 text-sm mb-1">Indirecte Vragen & Perfectum</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Waar is het station?</strong> ➔ Weet je <em>waar het station is</em>? (Fiil sona gider)</li>
                <li><strong>Ga rechtdoor:</strong> Düz git (Go straight ahead)</li>
                <li><strong>Kan je herhalen?:</strong> Tekrar edebilir misin?</li>
                <li><strong>Perfectum:</strong> Ik heb ge + stem + t/d ➔ <em>Ik heb gewerkt.</em> (I have worked)</li>
                <li><strong>Aan-komen (Ayrılabilen Fiil):</strong> Ik kom aan (I arrive) ➔ Ik <em>ben</em> aan+ge+komen ➔ <em>Ik ben aangekomen.</em> (I have arrived)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-300 text-sm mb-1">Uitspraak (Telaffuz)</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Korte vs Lange vocalen:</strong> man-maan, bed-beet, bos-boos, put-puur</li>
                <li><strong>ie:</strong> İngilizcedeki 'freeze' gibi okunur (vis vs <em>vies</em>)</li>
                <li><strong>ui:</strong> 'a' ve 'ü' seslerinin hızlı birleşimi gibidir (reis-reus, hout-<em>huid</em>)</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☕ Praten over koetjes en kalfjes (Small talk)</h3>
          <p className="text-sm text-slate-300 mb-2">Hollandacada havadan sudan konuşmak (small talk) ve misafirlikte kullanılan ifadeler:</p>
          <ul className="text-sm text-slate-200 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc pl-5">
            <li><strong>Welkom, kom binnen.</strong> (Welcome, come in)</li>
            <li><strong>Kon je het makkelijk vinden?</strong> (Could you find it easily?)</li>
            <li><strong>Jullie moeten de groeten hebben.</strong> (I have to say hi to you / Size selamı var)</li>
            <li><strong>Doe haar de groeten terug.</strong> (Say hi back to her / Aleykümselam)</li>
            <li><strong>Ik ben wel een beetje vroeg.</strong> (I am a bit early though)</li>
            <li><strong>Je hoeft je niet te verontschuldigen.</strong> (You do not have to apologize)</li>
            <li><strong>Wat een weer, hè?</strong> (What a weather, right?)</li>
            <li><strong>Zeg dat wel!</strong> (For sure! / Kesinlikle!)</li>
            <li><strong>Alsjeblieft, ik heb iets voor jullie meegenomen.</strong> (Here you go, I brought something for you)</li>
            <li><strong>O, wat lekker. Dank je wel.</strong> (Oh how tasty. Thank you)</li>
            <li><strong>Ja, lekker hè.</strong> (Yeah, nice huh?)</li>
            <li><strong>Nee klopt.</strong> (No, correct)</li>
            <li><strong>Prima. Met jou ook?</strong> (Fine. You too?)</li>
            <li><strong>Gelukkig.</strong> (Thank god! / Expression of relief)</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✅ Zullen as a Promise</h3>
          <p className="text-sm text-slate-300 mb-2"><strong>Zullen</strong> fiili (shall/will) gelecekteki niyetleri veya başkasına verilen sözleri ifade etmek için kullanılır. Asıl fiil cümlenin <strong>en sonuna mastar (infinitief)</strong> olarak gider.</p>
          
          <table className="w-full text-sm text-left text-slate-300 border-collapse mb-3">
            <thead>
              <tr className="border-b border-slate-700 text-slate-200">
                <th className="py-2">Onderwerp / Subject</th>
                <th className="py-2">Zullen</th>
                <th className="py-2">Rest</th>
                <th className="py-2">Infinitief (Mastar)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-2">Ik</td>
                <td className="py-2 text-emerald-400 font-bold">zal</td>
                <td className="py-2">de bloemen schuin</td>
                <td className="py-2 font-bold">afsnijden</td>
              </tr>
              <tr>
                <td className="py-2">We / wij</td>
                <td className="py-2 text-emerald-400 font-bold">zullen</td>
                <td className="py-2">een cadeau</td>
                <td className="py-2 font-bold">kopen</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
            <h4 className="text-emerald-300 font-bold text-xs uppercase mb-1">Yaygın Örnekler:</h4>
            <ul className="text-sm text-emerald-100 list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-1">
              <li>Ik zal het volgende rondje betalen.</li>
              <li>Ik zal het in mijn agenda schrijven.</li>
              <li>We zullen de vakantiefoto's meebrengen.</li>
              <li>Ik zal dit met mijn vriend overleggen.</li>
              <li>We zullen het proberen.</li>
              <li>We zullen je naar huis brengen.</li>
              <li>Ik zal het adres even opschrijven.</li>
            </ul>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🤔 Ask / Express Opinions (Fikir Sormak ve Belirtmek)</h3>
          <p className="text-sm text-slate-300 mb-2">Bir konu veya nesne hakkındaki fikrinizi ifade etmek için belirli kalıplar kullanılır:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-amber-300 text-sm mb-1">Mening vragen (Fikir Sormak)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Wat vind je van</strong> deze film?</li>
                <li><strong>Hoe vind je</strong> mijn nieuwe broek?</li>
                <li><strong>Vind je</strong> jonge dieren leuk?</li>
                <li><strong>Vind je</strong> dat niet duur?</li>
              </ul>
              <p className="text-xs text-slate-400 mt-2">Pattern: Wat vind je van ...? / Hoe vind je ...?</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-300 text-sm mb-1">Mening geven (Fikir Belirtmek)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Ik vind</strong> de film interessant.</li>
                <li><strong>Ik vind</strong> hem een beetje saai.</li>
                <li><strong>Volgens mij</strong> is die buurt heel gezellig. (According to me...)</li>
                <li><em>Ja, dat vind ik ook.</em> (Yes, I think so too.)</li>
                <li><em>Nee, dat vind ik niet.</em> (No, I don't think so.)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Meningen Vragen en Geven",
        isExtra: false,
        questions: [
          { id: "13_onclass_1_1", type: "fill_in", question: "________ vind je van deze film? (What do you think of this movie?)", correctAnswer: "Wat" },
          { id: "13_onclass_1_2", type: "fill_in", question: "________ vind je mijn nieuwe broek? (How do you find my new pants?)", correctAnswer: "Hoe" },
          { id: "13_onclass_1_3", type: "fill_in", question: "________ mij is die buurt heel gezellig. (According to me...)", correctAnswer: "Volgens" },
          { id: "13_onclass_1_4", type: "multiple_choice", question: "Je bent het eens (You agree). Iemand zegt: 'Ik vind hem een beetje saai.' Wat zeg jij?", options: ["Nee, dat vind ik niet.", "Ja, dat vind ik ook.", "Volgens mij ook niet."], correctAnswer: "Ja, dat vind ik ook." }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Zullen as a Promise",
        isExtra: false,
        questions: [
          { id: "13_onclass_2_1", type: "fill_in", question: "Ik ________ het in mijn agenda ________. (I will write it in my agenda - schrijven)", correctAnswer: "zal, schrijven" },
          { id: "13_onclass_2_2", type: "fill_in", question: "Wij ________ de buren ook ________. (We will also ask the neighbors - vragen)", correctAnswer: "zullen, vragen" },
          { id: "13_onclass_2_3", type: "fill_in", question: "Ik ________ het volgende rondje ________. (I will pay the next round - betalen)", correctAnswer: "zal, betalen" },
          { id: "13_onclass_2_4", type: "multiple_choice", question: "Vertaal: 'We will bring the vacation photos.'", options: ["We zullen de vakantiefoto's meebrengen.", "We meebrengen de vakantiefoto's zullen.", "Ik zal de vakantiefoto's meebrengen."], correctAnswer: "We zullen de vakantiefoto's meebrengen." },
          { id: "13_onclass_2_5", type: "fill_in", question: "We ________ uw fiets weer in orde ________. (We will fix your bike - maken)", correctAnswer: "zullen, maken" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Praten over koetjes en kalfjes (Small Talk)",
        isExtra: true,
        questions: [
          { id: "13_onclass_3_1", type: "multiple_choice", question: "Je vriend zegt: 'Jullie moeten de groeten hebben van mijn moeder.' Wat antwoord je?", options: ["Doe haar de groeten terug.", "Zeg dat wel!", "Kon je het makkelijk vinden?"], correctAnswer: "Doe haar de groeten terug." },
          { id: "13_onclass_3_2", type: "multiple_choice", question: "Je bent heel opgelucht (relieved) dat iets goed is gegaan. Welk woord gebruik je?", options: ["Gelukkig", "Alsjeblieft", "Prima"], correctAnswer: "Gelukkig" },
          { id: "13_onclass_3_3", type: "fill_in", question: "Je geeft een cadeau. Je zegt: 'Alsjeblieft, ik heb iets voor jullie ________.' (meenemen - brought along)", correctAnswer: "meegenomen" },
          { id: "13_onclass_3_4", type: "multiple_choice", question: "Iemand zegt: 'Wat een weer, hè?' Jij bent het er héél erg mee eens. Wat zeg je?", options: ["Zeg dat wel!", "Je hoeft je niet te verontschuldigen.", "Welkom, kom binnen."], correctAnswer: "Zeg dat wel!" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Repetitie (Perfectum & Indirecte Vraag)",
        isExtra: true,
        questions: [
          { id: "13_onclass_4_1", type: "fill_in", question: "Ik kom aan. -> Ik ________ ________. (I have arrived)", correctAnswer: "ben, aangekomen" },
          { id: "13_onclass_4_2", type: "fill_in", question: "Waar is het station? -> Weet je waar het station ________?", correctAnswer: "is" },
          { id: "13_onclass_4_3", type: "multiple_choice", question: "Welk woordpaar laat het verschil zien tussen een korte en lange klinker (vowel)?", options: ["vis - vies", "man - maan", "reis - reus"], correctAnswer: "man - maan" }
        ]
      }
    ]
  }
];