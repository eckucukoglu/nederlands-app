// src/data/chapters/chapter5.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter5Vocab = [
  { id: "5_1", chapter: 5, nl: "boodschappen doen", en: "go shopping", example: "Hans gaat boodschappen doen op de markt." },
  { id: "5_2", chapter: 5, nl: "de markt", en: "market", example: "We kopen groente op de markt." },
  { id: "5_3", chapter: 5, nl: "de groenteboer", en: "greengrocer", example: "Hij praat met Jasper, de groenteboer." },
  { id: "5_4", chapter: 5, nl: "er", en: "there", example: "Wie is er aan de beurt?" },
  { id: "5_5", chapter: 5, nl: "wie is er aan de beurt?", en: "who's next?", example: "Wie is er aan de beurt? Ik." },
  { id: "5_6", chapter: 5, nl: "de beurt", en: "turn", example: "Het is mijn beurt." },
  { id: "5_7", chapter: 5, nl: "alsjeblieft", en: "please", example: "Mag ik alsjeblieft tomaten?" },
  { id: "5_8", chapter: 5, nl: "kleine (klein)", en: "small", example: "Een kleine courgette." },
  { id: "5_9", chapter: 5, nl: "de courgette", en: "courgette", example: "Ik wil een courgette." },
  { id: "5_10", chapter: 5, nl: "gele (geel)", en: "yellow", example: "Twee gele paprika's." },
  { id: "5_11", chapter: 5, nl: "paprika's (de paprika)", en: "bell peppers / sweet peppers", example: "Rode en gele paprika's." },
  { id: "5_12", chapter: 5, nl: "mooie (mooi)", en: "nice / beautiful", example: "Zes mooie tomaten." },
  { id: "5_13", chapter: 5, nl: "tomaten (de tomaat)", en: "tomatoes", example: "De tomaten zijn altijd mooi." },
  { id: "5_14", chapter: 5, nl: "altijd", en: "always", example: "Ze zijn hier altijd vers." },
  { id: "5_15", chapter: 5, nl: "sorry", en: "sorry", example: "Sorry. Tuurlijk!" },
  { id: "5_16", chapter: 5, nl: "(na)tuurlijk", en: "of course", example: "Natuurlijk, zeg het maar." },
  { id: "5_17", chapter: 5, nl: "anders nog iets?", en: "anything else?", example: "Anders nog iets? Ja, knoflook." },
  { id: "5_18", chapter: 5, nl: "typisch", en: "typical", example: "Een typisch Nederlands gerecht." },
  { id: "5_19", chapter: 5, nl: "het gerecht", en: "dish", example: "Stamppot is een lekker gerecht." },
  { id: "5_20", chapter: 5, nl: "buitenlanders (de buitenlander)", en: "foreigners", example: "Buitenlanders vinden het heerlijk." },
  { id: "5_21", chapter: 5, nl: "de andijvie", en: "endive", example: "Ik wil graag andijvie." },
  { id: "5_22", chapter: 5, nl: "de stamppot", en: "mashed potato and vegetables", example: "We maken stamppot andijvie." },
  { id: "5_23", chapter: 5, nl: "spekjes (het spekje)", en: "bacon", example: "Stamppot met spekjes." },
  { id: "5_24", chapter: 5, nl: "vaak", en: "often", example: "Dat eten we vaak in de winter." },
  { id: "5_25", chapter: 5, nl: "heerlijk", en: "delicious", example: "Dat is echt heerlijk." },
  { id: "5_26", chapter: 5, nl: "goedkope (goedkoop)", en: "cheap", example: "Mooie, goedkope andijvie." },
  { id: "5_27", chapter: 5, nl: "hoeveel", en: "how much", example: "Hoeveel heb ik nodig?" },
  { id: "5_28", chapter: 5, nl: "heb nodig (nodig hebben)", en: "need", example: "Ik heb een kilo aardappels nodig." },
  { id: "5_29", chapter: 5, nl: "personen (de persoon)", en: "people", example: "Voor vier personen." },
  { id: "5_30", chapter: 5, nl: "ongeveer", en: "about / approximately", example: "Ongeveer een halve kilo." },
  { id: "5_31", chapter: 5, nl: "halve (half)", en: "half", example: "Een halve kilo, alstublieft." },
  { id: "5_32", chapter: 5, nl: "de kilo", en: "kilo", example: "Een kilo aardappels." },
  { id: "5_33", chapter: 5, nl: "aardappels (de aardappel)", en: "potatoes", example: "Aardappels koken." },
  { id: "5_34", chapter: 5, nl: "de slager", en: "butcher", example: "Voor spekjes moet je naar de slager." },
  { id: "5_35", chapter: 5, nl: "was (zijn)", en: "was", example: "Dat was het?" },
  { id: "5_36", chapter: 5, nl: "de bloemkool", en: "cauliflower", example: "Een kleine bloemkool." },
  { id: "5_37", chapter: 5, nl: "het bakje (de bak)", en: "punnet / small box", example: "Een bakje champignons." },
  { id: "5_38", chapter: 5, nl: "champignons (de champignon)", en: "mushrooms", example: "Verse champignons." },
  { id: "5_39", chapter: 5, nl: "de peterselie", en: "parsley", example: "En een bosje peterselie." },
  { id: "5_40", chapter: 5, nl: "het bosje (de bos)", en: "bunch", example: "Een bosje uien." },
  { id: "5_41", chapter: 5, nl: "verder nog iets?", en: "anything else?", example: "Nee, verder niets." },
  { id: "5_42", chapter: 5, nl: "boontjes (het boontje)", en: "beans", example: "Fijne boontjes." },
  { id: "5_43", chapter: 5, nl: "verse (vers)", en: "fresh", example: "Verse knoflook." },
  { id: "5_44", chapter: 5, nl: "de knoflook", en: "garlic", example: "Ik kook met knoflook." },
  { id: "5_45", chapter: 5, nl: "komkommers (de komkommer)", en: "cucumbers", example: "Drie komkommers." },
  { id: "5_46", chapter: 5, nl: "de euro", en: "euro", example: "Drie voor één euro." },
  { id: "5_47", chapter: 5, nl: "wel", en: "quite / well", example: "Zo is het wel genoeg." },
  { id: "5_48", chapter: 5, nl: "genoeg", en: "enough", example: "Dat is genoeg." },
  { id: "5_49", chapter: 5, nl: "waarnaartoe", en: "where to", example: "Waarnaartoe ga je op vakantie?" },
  { id: "5_50", chapter: 5, nl: "de cent", en: "cent", example: "Dertig cent." },
  { id: "5_51", chapter: 5, nl: "erbij", en: "with it", example: "Heb je er dertig cent bij?" },
  { id: "5_52", chapter: 5, nl: "geeft niet", en: "doesn't matter", example: "Geeft niet, hier is uw wisselgeld." },
  { id: "5_53", chapter: 5, nl: "prettig", en: "nice", example: "Prettig weekend." },
  { id: "5_54", chapter: 5, nl: "het weekend", en: "weekend", example: "Prettig weekend!" }
];

export const chapter5Dialogues = {
  "5.1": [
    { speaker: "Verteller", text: "Hans gaat boodschappen doen op de markt. Hij gaat naar Jasper, de groenteboer.", translation: "Hans pazarda alışveriş yapmaya gidiyor. Manav Jasper'a gidiyor." },
    { speaker: "Jasper", text: "Wie is er aan de beurt?", translation: "Sıra kimde?" },
    { speaker: "Hans", text: "Ik.", translation: "Bende." },
    { speaker: "Jasper", text: "Zeg het maar.", translation: "Söyleyin bakalım (Dinliyorum)." },
    { speaker: "Hans", text: "Mag ik alsjeblieft een kleine courgette, twee gele paprika's en zes mooie tomaten?", translation: "Lütfen bir küçük kabak, iki sarı dolmalık biber ve altı güzel domates alabilir miyim?" },
    { speaker: "Jasper", text: "Hé! De tomaten zijn hier altijd mooi!", translation: "Hey! Burada domatesler her zaman güzeldir!" },
    { speaker: "Hans", text: "Sorry. Tuurlijk!", translation: "Özür dilerim. Elbette!" },
    { speaker: "Jasper", text: "Anders nog iets?", translation: "Başka bir şey (istiyor musunuz)?" },
    { speaker: "Hans", text: "Ja, ik wil graag een typisch Nederlands gerecht maken. Onze buren komen morgen eten. Ze komen niet uit Nederland.", translation: "Evet, tipik bir Hollanda yemeği yapmak istiyorum. Komşularımız yarın yemeğe geliyor. Hollandalı değiller." },
    { speaker: "Jasper", text: "Buitenlanders vinden stamppot andijvie met spekjes vaak heerlijk. En ik heb vandaag mooie, goedkope andijvie.", translation: "Yabancılar genellikle pastırmalı hindiba püresini (stamppot andijvie) lezzetli bulurlar. Ve bugün elimde güzel, ucuz hindiba var." },
    { speaker: "Hans", text: "Dat is een goed idee. Hoeveel heb ik nodig voor vier personen?", translation: "Bu iyi bir fikir. Dört kişi için ne kadara ihtiyacım var?" },
    { speaker: "Jasper", text: "Ongeveer een halve kilo andijvie en een kilo aardappels. Voor de spekjes moet je naar de slager.", translation: "Yaklaşık yarım kilo hindiba ve bir kilo patates. Pastırma için kasaba gitmelisin." },
    { speaker: "Hans", text: "Prima, doe maar.", translation: "Harika, verin/yapın o zaman." },
    { speaker: "Jasper", text: "Dat was het?", translation: "Hepsi bu kadar mı(ydı)?" },
    { speaker: "Hans", text: "Nee. Doe ook maar een bloemkool. Een kleine bloemkool. En ook graag een klein bakje champignons. En peterselie. Dat kleine bosje graag.", translation: "Hayır. Bir de karnabahar verin. Küçük bir karnabahar. Ve lütfen küçük bir paket (kutu) mantar. Ve maydanoz. O küçük demeti lütfen." },
    { speaker: "Jasper", text: "Verder nog iets? Ik heb mooie, fijne boontjes, verse knoflook, drie komkommers voor één euro ...", translation: "Başka bir şey var mı? Güzel, ince fasulyelerim, taze sarımsağım, bir euroya üç salatalığım var..." },
    { speaker: "Hans", text: "Nee, zo is het wel genoeg. Ik ga volgende week op vakantie.", translation: "Hayır, bu kadarı yeterli. Haftaya tatile gidiyorum." },
    { speaker: "Jasper", text: "O, lekker. Waarnaartoe?", translation: "Oh, ne güzel. Nereye?" },
    { speaker: "Hans", text: "Venetië.", translation: "Venedik'e." },
    { speaker: "Jasper", text: "Prachtig. Dat is dan acht dertig. (...) Heb je er dertig cent bij?", translation: "Muhteşem. O zaman (tutar) sekiz otuz. (...) Üzerinde otuz sentin var mı?" },
    { speaker: "Hans", text: "Nee, sorry.", translation: "Hayır, üzgünüm." },
    { speaker: "Jasper", text: "Geeft niet. Acht vijftig, negen en dat is tien. Nou, prettige vakantie!", translation: "Önemli değil. Sekiz elli, dokuz ve on. Peki, iyi tatiller!" },
    { speaker: "Hans", text: "Dank je wel. Prettig weekend. Dag!", translation: "Teşekkür ederim. İyi hafta sonları. İyi günler!" }
  ]
};

export const chapter5Sections = [
  {
    id: "5.1",
    chapter: 5,
    title: "5.1 Dialoog: Op de markt",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Op de markt (Pazarda)</h3>
          <p>Hans, manav Jasper'dan sebze alışverişi yapıyor. Pazarda kullanılan en yaygın kalıplara dikkat edin:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Wie is er aan de beurt?</strong> (Sıra kimde?)</li>
            <li><strong>Zeg het maar / Doe maar.</strong> (Söyleyin / Verin-Yapın bakalım).</li>
            <li><strong>Anders/Verder nog iets?</strong> (Başka bir şey ister misiniz?)</li>
            <li><strong>Dat was het?</strong> (Hepsi bu kadar mıydı?)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Geef een reactie op de vragen (Okuduğunu Anlama).",
        isExtra: false,
        questions: [
          { id: "5.1_opd1_1", type: "multiple_choice", question: "Waar is Hans?", options: ["In de supermarkt", "Op de markt", "In de kantine"], correctAnswer: "Op de markt" },
          { id: "5.1_opd1_2", type: "multiple_choice", question: "Met wie praat Hans?", options: ["Met de slager", "Met de docent", "Met Jasper, de groenteboer"], correctAnswer: "Met Jasper, de groenteboer" },
          { id: "5.1_opd1_3", type: "multiple_choice", question: "Wanneer komen de buren bij Hans eten?", options: ["Volgende week", "Morgen", "Vandaag"], correctAnswer: "Morgen" },
          { id: "5.1_opd1_4", type: "multiple_choice", question: "Wat gaan ze eten?", options: ["Spaghetti carbonara", "Stamppot andijvie met spekjes", "Alleen groenten"], correctAnswer: "Stamppot andijvie met spekjes" },
          { id: "5.1_opd1_5", type: "multiple_choice", question: "Waar moet Hans de spekjes kopen?", options: ["Bij de groenteboer", "Bij de slager", "In Venetië"], correctAnswer: "Bij de slager" },
          { id: "5.1_opd1_6", type: "multiple_choice", question: "Koopt Hans komkommers?", options: ["Ja, drie stuks", "Nee, hij gaat op vakantie", "Nee, hij vindt ze niet lekker"], correctAnswer: "Nee, hij gaat op vakantie" },
          { id: "5.1_opd1_7", type: "multiple_choice", question: "Hoeveel moet Hans betalen?", options: ["Acht euro dertig (€8,30)", "Tien euro (€10,00)", "Acht euro vijftig (€8,50)"], correctAnswer: "Acht euro dertig (€8,30)" }
        ]
      }
    ]
  },
  {
    id: "5.2",
    chapter: 5,
    title: "5.2 Woordenlijst & 5.3 Groente en fruit",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🥦 Groente en Fruit (Sebze ve Meyve)</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
            <div>
              <h4 className="font-bold text-purple-300 border-b border-purple-500/30 pb-1 mb-2">Groente (Sebzeler)</h4>
              <ul className="space-y-1">
                <li>de courgette (kabak), de aubergine (patlıcan)</li>
                <li>de paprika (biber), de tomaat (domates)</li>
                <li>de andijvie (hindiba), de aardappel (patates)</li>
                <li>de bloemkool (karnabahar), de ui (soğan)</li>
                <li>de champignon (mantar), de peterselie (maydanoz)</li>
                <li>de knoflook (sarımsak), de komkommer (salatalık)</li>
                <li>de wortel (havuç)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-300 border-b border-indigo-500/30 pb-1 mb-2">Fruit (Meyveler)</h4>
              <ul className="space-y-1">
                <li>de aardbei (çilek), de druif (üzüm)</li>
                <li>de perzik (şeftali), de pruim (erik)</li>
                <li>de kers (kiraz), de appel (elma)</li>
                <li>de peer (armut), de sinaasapppel (portakal)</li>
                <li>de mandarijn (mandalina), de kiwi (kivi)</li>
                <li>de banaan (muz)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Anagrammen. Welke woorden (groente en fruit) vind je hier terug?",
        isExtra: false,
        questions: [
          { id: "5.3_opd2_1", type: "fill_in", question: "lapderaap (ipucu: pata...)", correctAnswer: "aardappel" },
          { id: "5.3_opd2_2", type: "fill_in", question: "ifrud (ipucu: üzüm)", correctAnswer: "druif" },
          { id: "5.3_opd2_3", type: "fill_in", question: "kippara (ipucu: biber)", correctAnswer: "paprika" },
          { id: "5.3_opd2_4", type: "fill_in", question: "weltro (ipucu: havuç)", correctAnswer: "wortel" },
          { id: "5.3_opd2_5", type: "fill_in", question: "ommokmerk (ipucu: salatalık)", correctAnswer: "komkommer" },
          { id: "5.3_opd2_6", type: "fill_in", question: "noklofok (ipucu: sarımsak)", correctAnswer: "knoflook" },
          { id: "5.3_opd2_7", type: "fill_in", question: "omatat (ipucu: domates)", correctAnswer: "tomaat" }
        ]
      },
      {
        instruction: "Extra Oefeningen (Woordenlijst Test)",
        isExtra: true,
        questions: generateSmartQuestions(5, "Woordenlijst", 10, chapter5Vocab)
      }
    ]
  },
  {
    id: "5.4",
    chapter: 5,
    title: "5.4 Pluralis (Çoğul Yapma Kuralları)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📦 Pluralis (-en vs -s)</h3>
          <p className="text-sm text-slate-300">Hollandacada kelimeleri çoğul yapmak için genellikle sonuna <strong>-en</strong> veya <strong>-s</strong> eklenir. Kurallara bakalım:</p>
          
          <h4 className="font-bold text-white mt-4">1. Ne zaman '-s' eklenir?</h4>
          <ul className="text-sm text-slate-300 list-disc pl-5 mt-2 space-y-1">
            <li>Son hecesinde vurgu olmayan <strong>-el, -em, -en, -er</strong> ile biten kelimeler: <em>tafels, bezems, jongens, kamers, buitenlanders.</em></li>
            <li>Tüm küçültme (Diminutief) ekleri <strong>-je</strong> ile biten kelimeler: <em>meisjes, boontjes, spekjes.</em></li>
            <li>İngilizce/Fransızca gibi yabancı dillerden gelen kelimeler: <em>computers, cafés, champignons.</em></li>
          </ul>

          <h4 className="font-bold text-white mt-4">2. Ne zaman -'s (Kesme işareti) eklenir?</h4>
          <p className="text-sm text-slate-300 mt-2">Sesli harflerle (a, i, o, u, y) biten uzun sesli kelimelerde, sesi korumak için kesme işareti konur: <em>foto ➔ foto's, paprika ➔ paprika's, menu ➔ menu's.</em> (Eğer sadece -s koysaydık fotos diye kısa okunurdu).</p>

          <h4 className="font-bold text-white mt-4">3. Geri Kalan Çoğu Kelime '-en' alır:</h4>
          <p className="text-sm text-slate-300 mt-2"><em>de boodschap ➔ de boodschappen, de tomaat ➔ de tomaten.</em></p>
          
          <div className="bg-emerald-900/40 p-4 rounded-xl mt-5 border border-emerald-500/50">
            <h4 className="text-emerald-300 font-bold mb-1">⚠️ BÜYÜK İSTİSNA (ÖLÇÜ BİRİMLERİ)</h4>
            <p className="text-sm text-emerald-100">Hollandacada bir sayıdan sonra gelen <strong>cent, jaar, uur, euro, kilo</strong> kelimeleri ASLA ÇOĞUL EKLERİ ALMAZ!</p>
            <p className="text-sm italic mt-2 text-white">"Ik heb twee uur les" (twee uren DEĞİL!) <br/> "Dat is acht euro" (acht euro's DEĞİL!) <br/> "Mag ik twee kilo andijvie?" (twee kilo's DEĞİL!)</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Opschepper! (Gösteriş Yap!). Maak het woord meervoud (plural).",
        isExtra: false,
        questions: [
          { id: "5.4_opd3_1", type: "fill_in", question: "Ik heb een foto. -> Ik heb ________.", correctAnswer: "foto's" },
          { id: "5.4_opd3_2", type: "fill_in", question: "Ik heb een bril. -> Ik heb ________.", correctAnswer: "brillen" },
          { id: "5.4_opd3_3", type: "fill_in", question: "Ik heb een paprika. -> Ik heb ________.", correctAnswer: "paprika's" },
          { id: "5.4_opd3_4", type: "fill_in", question: "Wij hebben een kantine. -> Wij hebben ________.", correctAnswer: "kantines" },
          { id: "5.4_opd3_5", type: "fill_in", question: "Ik eet een tomaat. -> Ik eet ________.", correctAnswer: "tomaten" },
          { id: "5.4_opd3_6", type: "fill_in", question: "Ik eet een komkommer. -> Ik eet ________.", correctAnswer: "komkommers" },
          { id: "5.4_opd3_7", type: "fill_in", question: "Ik heb een broer. -> Ik heb ________.", correctAnswer: "broers" },
          { id: "5.4_opd3_8", type: "fill_in", question: "Ik woon hier een week. -> Ik woon hier ________.", correctAnswer: "weken" },
          { id: "5.4_opd3_9", type: "fill_in", question: "Ik drink een biertje. -> Ik drink ________.", correctAnswer: "biertjes" },
          { id: "5.4_opd3_10", type: "fill_in", question: "Ik eet een aardappel. -> Ik eet ________.", correctAnswer: "aardappels" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Pluralis Uitzonderingen",
        isExtra: true,
        questions: [
          { id: "5.4_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct?", options: ["Dat kost drie euro's.", "Ik woon hier vijf jaren.", "Ik heb twee uur pauze."], correctAnswer: "Ik heb twee uur pauze." },
          { id: "5.4_smart_2", type: "multiple_choice", question: "Waarom krijgt 'paprika' een apostrof-s (paprika's)?", options: ["Omdat het een Engels woord is.", "Om de lange 'a' klank (ses) te behouden.", "Omdat het een klein woord is."], correctAnswer: "Om de lange 'a' klank (ses) te behouden." }
        ]
      }
    ]
  },
  {
    id: "5.5",
    chapter: 5,
    title: "5.5 Adjectief (Sıfatların Çekimi)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🎨 Adjectief (Sıfatlara -e eklemek)</h3>
          <p className="text-sm text-slate-300 mb-3">Hollandacada sıfatlar ismin <strong>önüne</strong> geldiğinde genellikle sonuna <strong>-e</strong> harfi alırlar.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-500/30">
              <p className="text-xs text-rose-300 font-bold mb-1">DE-woorden (Her zaman -e alır!)</p>
              <ul className="text-sm text-slate-200">
                <li>de groot ➔ de grot<strong>e</strong> komkommer</li>
                <li>een groot ➔ een grot<strong>e</strong> komkommer</li>
              </ul>
            </div>
            <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
              <p className="text-xs text-amber-300 font-bold mb-1">Meervoud / Çoğullar (Her zaman -e alır!)</p>
              <ul className="text-sm text-slate-200">
                <li>grote komkommers</li>
                <li>grote café's</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl mt-4 border border-white/30">
            <h4 className="font-bold text-white mb-2">🚨 BÜYÜK İSTİSNA: Sadece ne zaman '-e' almaz?</h4>
            <p className="text-sm text-rose-200 font-medium">Eğer kelime <strong>"het-woord"</strong> ise VE başında <strong>"een" (veya hiç artikel yoksa)</strong> varsa, SIFATA '-e' EKLENMEZ!</p>
            <p className="text-sm text-slate-300 mt-2"><em>Het-kelimesi:</em> het huis (ev), het café (kafe)</p>
            <ul className="text-sm text-white mt-1 list-disc pl-5">
              <li><strong>het</strong> groot huis ➔ het grot<strong>e</strong> huis (het olduğu için -e alır)</li>
              <li className="text-rose-300 font-bold"><strong>een</strong> groot huis (İşte İstisna! 'een' ve 'het-kelimesi' bir araya gelirse -e almaz!)</li>
              <li className="text-rose-300 font-bold"><strong>een</strong> groot café</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Kies de goede vorm van het adjectief.",
        isExtra: false,
        questions: [
          { id: "5.5_opd4_1", type: "multiple_choice", question: "1. Dat is een _________ idee. (idee = het-woord)", options: ["goed", "goede"], correctAnswer: "goed" },
          { id: "5.5_opd4_2", type: "multiple_choice", question: "2. Dit is een _________ film. (film = de-woord)", options: ["fantastisch", "fantastische"], correctAnswer: "fantastische" },
          { id: "5.5_opd4_3", type: "multiple_choice", question: "3. Je hebt een _________ bril! (bril = de-woord)", options: ["leuk", "leuke"], correctAnswer: "leuke" },
          { id: "5.5_opd4_4", type: "multiple_choice", question: "4. Tot maandag! _________ weekend. (weekend = het-woord, geen artikel)", options: ["Prettig", "Prettige"], correctAnswer: "Prettig" },
          { id: "5.5_opd4_5", type: "multiple_choice", question: "5. Ha, een _________ kopje koffie! (kopje = het-woord (diminutief))", options: ["lekker", "lekkere"], correctAnswer: "lekker" },
          { id: "5.5_opd4_6", type: "multiple_choice", question: "6. _________ koffie, heerlijk! (koffie = de-woord)", options: ["Vers", "Verse"], correctAnswer: "Verse" },
          { id: "5.5_opd4_7", type: "multiple_choice", question: "7. Irene heeft een _________ achternaam. (achternaam = de-woord)", options: ["Arabisch", "Arabische"], correctAnswer: "Arabische" },
          { id: "5.5_opd4_8", type: "multiple_choice", question: "8. Hans komt uit een _________ gezin. (gezin = het-woord)", options: ["groot", "grote"], correctAnswer: "groot" },
          { id: "5.5_opd4_9", type: "multiple_choice", question: "9. We hebben _________ tomaten. (meervoud / çoğul)", options: ["mooi", "mooie"], correctAnswer: "mooie" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Adjectief Uitzonderingen",
        isExtra: true,
        questions: [
          { id: "5.5_smart_1", type: "multiple_choice", question: "Waarom zeg je 'een klein huis' en NIET 'een kleine huis'?", options: ["Omdat huis een de-woord is.", "Omdat huis meervoud is.", "Omdat huis een het-woord is, en bij 'een' krijgt het geen -e."], correctAnswer: "Omdat huis een het-woord is, en bij 'een' krijgt het geen -e." },
          { id: "5.5_smart_2", type: "fill_in", question: "Vul in (mooi): Ik koop een ________ auto (de auto).", correctAnswer: "mooie" }
        ]
      }
    ]
  },
  {
    id: "5.6",
    chapter: 5,
    title: "5.6 t/m 5.8 In gesprek op de markt & De prijs",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🛒 Gesprek en Prijs (Pazarda Konuşma ve Fiyat)</h3>
          <p className="text-sm text-slate-300">Pazarda veya markette alışveriş yaparken sık duyulan kalıplar:</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Verder / Anders nog iets?</strong> (Başka bir şey?) ➔ Nee, dat was het. (Hayır, hepsi buydu.)</li>
            <li><strong>Tasje erbij?</strong> (Poşet ister misiniz?) ➔ Ja, graag. / Nee hoor.</li>
            <li><strong>Gaat het zo mee?</strong> (Böyle elinizde götürür müsünüz? / Poşetsiz alır mısınız?)</li>
          </ul>

          <h4 className="font-bold text-cyan-300 mt-4 border-b border-cyan-500/30 pb-1">💸 Prijzen vragen (Fiyat sormak)</h4>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Wat kost</strong> de andijvie? ➔ Drie komkommers voor één euro.</li>
            <li><strong>Hoe duur zijn</strong> de boontjes? ➔ Dat is dan acht dertig. (€8,30)</li>
            <li><strong>Hebt u er dertig cent bij?</strong> (Bozukluk olarak 30 sentin var mı/üzerine ekleyebilir misin?)</li>
          </ul>
        </div>
        
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>☝️ Imperatief (Emir Kipi)</h3>
          <p className="text-sm text-slate-300">Hollandacada emir kipi direkt fiilin kökü (stam) kullanılarak yapılır. Ancak kulağa kaba gelmemesi için cümlenin içine <strong>maar, even, eens</strong> gibi yumuşatıcı kelimeler eklenir.</p>
          <p className="text-sm italic text-slate-200 mt-2">Nötr: Zeg het. (Söyle.)<br/>Kibar: Zeg het <strong>maar</strong>. (Söyleyin bakalım.)<br/>Vertel <strong>eens</strong> over je familie. (Ailenden biraz bahset.)</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Maak het gesprek bij de groenteboer compleet.",
        isExtra: false,
        questions: [
          { id: "5.6_opd7_1", type: "fill_in", question: "Groenteboer: Wie is er aan ________?", correctAnswer: "de beurt" },
          { id: "5.6_opd7_2", type: "fill_in", question: "Klant: Ik. / Groenteboer: ________ het maar.", correctAnswer: "Zeg" },
          { id: "5.6_opd7_3", type: "fill_in", question: "Klant: Ik wil graag twee komkommers. En een bloemkool. / Groenteboer: Natuurlijk! Grote of kleine? / Klant: Kleine. En ________ die maar.", correctAnswer: "doe" },
          { id: "5.6_opd7_4", type: "fill_in", question: "Groenteboer: ________ was het?", correctAnswer: "Dat" },
          { id: "5.6_opd7_5", type: "fill_in", question: "Klant: Nee, ik wil ________ een bakje champignons.", correctAnswer: "ook nog" },
          { id: "5.6_opd7_6", type: "fill_in", question: "Groenteboer: Alstublieft. Verder ________ iets?", correctAnswer: "nog" },
          { id: "5.6_opd7_7", type: "fill_in", question: "Klant: Nee, ________ was het.", correctAnswer: "dat" },
          { id: "5.6_opd7_8", type: "fill_in", question: "Groenteboer: (de klant geeft €50,-) Hebt u ________ twintig cent bij?", correctAnswer: "er" },
          { id: "5.6_opd7_9", type: "fill_in", question: "Klant: Nee, sorry. / Groenteboer: Hebt u een ________?", correctAnswer: "tasje" },
          { id: "5.6_opd7_10", type: "fill_in", question: "Klant: Ja, alstublieft. / Groenteboer: Prettig weekend. / Klant: ________.", correctAnswer: "Hetzelfde" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Imperatief en Prijs",
        isExtra: true,
        questions: [
          { id: "5.8_smart_1", type: "multiple_choice", question: "Hoe maak je een commando/imperatief vriendelijk (kibar)?", options: ["Je gebruikt het hele werkwoord.", "Je gebruikt woorden zoals 'maar', 'even' of 'eens'.", "Je zegt altijd 'alstublieft' twee keer."], correctAnswer: "Je gebruikt woorden zoals 'maar', 'even' of 'eens'." },
          { id: "5.8_smart_2", type: "fill_in", question: "Vertaal de vraag: 'Ne kadar tutuyor? / Fiyatı ne kadar?' -> Hoeveel ________ het?", correctAnswer: "kost" }
        ]
      }
    ]
  },
  {
    id: "5.9",
    chapter: 5,
    title: "5.9 Tekst: Echte Hollandse winterkost",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Stamppot Andijvie met Spekjes</h3>
          <p className="text-sm text-slate-300">Hollanda'nın klasik kış yemeği *Stamppot*'un tarifini okuyoruz.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Ingrediënten:</strong> Aardappels, andijvie, spekjes, cherrytomaten, kaas in blokjes, melk, rookworst, boter, peper en zout.</li>
            <li><strong>Bereiding:</strong> Schil de aardappels en kook ze in 20 minuten gaar. Maak de andijvie schoon en snijd de bladeren. Bak de spekjes. Stamp de aardappels tot puree. Voeg de andijvie, spekjes, kaas en tomaten toe.</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 12: Begrip van het recept (Tarif okuma anlama).",
        isExtra: false,
        questions: [
          { id: "5.9_opd12_1", type: "multiple_choice", question: "Je maakt stamppot andijvie. Hoelang duurt dit ongeveer (koken, bakken, stampen)?", options: ["20 minuten", "3 kwartier (45 dk)", "2 uur"], correctAnswer: "3 kwartier (45 dk)" }
        ]
      }
    ]
  },
  {
    id: "5.10",
    chapter: 5,
    title: "5.10 Uitspraak & Cultuur",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: u – uu</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 15 & 16:</strong> Hollandacada kısa 'u' (örn: dus, cursus, lukken, zus) ile uzun 'uu' (örn: uur, buurman, minuut, natuur) sesi arasında çok büyük bir fark vardır.</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur & In de praktijk: Eten in Nederland</h3>
          <p className="text-sm text-slate-300"><strong>De Eetcultuur (Yemek Kültürü):</strong></p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li>Hollandalılar öğle yemeğinde (lunch) genellikle ekmek arası peynir veya şarküteri (boterhammen) yerler. Öğle molası genellikle sadece 30 dakikadır!</li>
            <li>Akşam yemeği (het avondeten) ise genellikle çok erken saatte, <strong>18:00 (zes uur)</strong> civarında yenir.</li>
            <li>Eğer bir yemeği beğendiklerinde yanlarındaki kişinin yüzüne bakarak elleriyle yüzlerini yelpazeler gibi sallarlar (Wapperen). Bu <em>'heerlijk / lekker'</em> demektir!</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "5.10_smart_1", type: "multiple_choice", question: "Welk woord heeft een LANGE 'uu' klank?", options: ["cursus", "buurman", "lukken"], correctAnswer: "buurman" },
          { id: "5.10_smart_2", type: "multiple_choice", question: "Hoe laat eten de meeste Nederlanders hun avondeten?", options: ["Rond 18.00 uur", "Rond 20.00 uur", "Rond 22.00 uur"], correctAnswer: "Rond 18.00 uur" },
          { id: "5.10_smart_3", type: "multiple_choice", question: "Wat eten Nederlanders vaak tijdens de lunch?", options: ["Een warme maaltijd (bijv. pasta)", "Boterhammen (sandviç/ekmek)", "Alleen een appel"], correctAnswer: "Boterhammen (sandviç/ekmek)" }
        ]
      }
    ]
  },
  {
    id: "On-Class-5",
    chapter: 5,
    title: "Extra Oefeningen (On-Class)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 4 (Afspreken & Zullen)</h3>
          <p className="text-sm text-slate-300 mb-2">Buluşma ayarlamak ve teklifte bulunmak için kullanılan ifadeler:</p>
          <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
            <li><strong>Zullen we naar Parijs gaan?</strong> (Shall we go to Paris?)</li>
            <li><strong>Zullen we na de les koffie drinken?</strong> ➔ Ja, leuk!</li>
            <li><strong>Kun je vanavond?</strong> ➔ Nee, dan kan ik niet. (Can you tonight? No, I can't then.)</li>
            <li><strong>Hoe laat zullen we afspreken?</strong> ➔ Zullen we om kwart over vijf afspreken? (What time shall we meet? Shall we meet at a quarter past five?)</li>
            <li><strong>Waar zullen we afspreken?</strong> ➔ Zullen we in het café afspreken?</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🥦 Kernwoorden: Groente en Fruit</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-200 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
            <div><strong className="text-purple-300">de aardappel:</strong> potato</div>
            <div><strong className="text-purple-300">de tomaat:</strong> tomato</div>
            <div><strong className="text-purple-300">de komkommer:</strong> cucumber</div>
            <div><strong className="text-purple-300">de paprika:</strong> pepper</div>
            <div><strong className="text-purple-300">de courgette:</strong> zucchini</div>
            <div><strong className="text-purple-300">de bloemkool:</strong> cauliflower</div>
            <div><strong className="text-purple-300">de champignon:</strong> mushroom</div>
            <div><strong className="text-purple-300">de ui:</strong> onion</div>
            <div><strong className="text-purple-300">de wortel:</strong> carrot</div>
            <div><strong className="text-purple-300">de appel:</strong> apple</div>
            <div><strong className="text-purple-300">de banaan:</strong> banana</div>
            <div><strong className="text-purple-300">de sinaasappel:</strong> orange</div>
            <div><strong className="text-purple-300">de aardbei:</strong> strawberry</div>
            <div><strong className="text-purple-300">de druif:</strong> grape</div>
            <div className="col-span-2 mt-2 pt-2 border-t border-purple-500/30">
              <strong className="text-purple-300">een krop sla:</strong> a head of lettuce (bir marul)
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📦 Meervoud (Plural in Dutch)</h3>
          <p className="text-sm text-slate-300 mb-2">Hollandacada çoğul yapmak için genellikle ismin sonuna <strong>-s</strong> veya <strong>-en</strong> ekleriz.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-emerald-300 text-sm mb-1">Ne zaman sadece "-s" eklenir? (No Apostrophe)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li>Vurgusuz son hecesi <strong>-el, -em, -en, -er</strong> ile bitenler:<br/><em>tafel ➔ tafels, bezem ➔ bezems, jongen ➔ jongens, kamer ➔ kamers</em></li>
                <li>Tüm küçültme (diminutive) kelimeleri <strong>(-je)</strong>:<br/><em>meisje ➔ meisjes</em></li>
                <li>Modern yabancı kökenli kelimeler:<br/><em>computer ➔ computers, café ➔ cafés</em></li>
              </ul>
            </div>
            <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30">
              <h4 className="font-bold text-emerald-300 text-sm mb-1">Uitzonderingen (İstisnalar)</h4>
              <p className="text-sm text-emerald-100 mb-1">Bazı kelimeler sayılardan sonra <strong>tekil</strong> kalır!</p>
              <ul className="text-sm text-white list-disc pl-5 space-y-1">
                <li>dertig <strong>cent</strong></li>
                <li>acht <strong>euro</strong></li>
                <li>twee <strong>kilo</strong> aardappels</li>
                <li>drie <strong>uur</strong></li>
                <li>twintig <strong>jaar</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🎨 Het Adjectief (Sıfatların Çekimi: +e kuralı)</h3>
          <p className="text-sm text-slate-300 mb-2">Sıfat bir ismi tanımlar (groot, klein, lekker, stom vb.). Sıfat isimden <strong>önce</strong> geldiğinde genellikle sonuna <strong>-e</strong> eklenir. Ancak önemli bir istisna vardır!</p>
          
          <ul className="text-sm text-slate-200 list-disc pl-5 mb-3 space-y-1">
            <li><strong>Kural 1:</strong> Sıfat isimden <em>sonra</em> (arada 'is' gibi bir fiil varsa) gelirse '-e' EKLENMEZ. <br/>➔ <em>Het eten is lekker.</em></li>
            <li><strong>Kural 2:</strong> Tüm <strong>'de'</strong> kelimeleri için sıfata her zaman '-e' EKLENİR.<br/>➔ <em>de grote komkommer, een grote komkommer</em></li>
            <li><strong>Kural 3 (İSTİSNA!):</strong> <strong>'het'</strong> kelimelerinde, eğer kelimenin önünde <strong>'een'</strong> varsa veya <strong>hiçbir artikel yoksa</strong> sıfata '-e' EKLENMEZ!</li>
          </ul>

          <table className="w-full text-sm text-left text-slate-300 border-collapse mt-2">
            <thead>
              <tr className="border-b border-slate-700 text-slate-200">
                <th className="py-2">Artikel / Situatie</th>
                <th className="py-2">de-words (de komkommer)</th>
                <th className="py-2 text-amber-300">het-words (het café)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr>
                <td className="py-2 font-semibold">de of het</td>
                <td className="py-2">de grot<strong>e</strong> komkommer</td>
                <td className="py-2">het grot<strong>e</strong> café</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-rose-300">'een' of geen artikel</td>
                <td className="py-2">een grot<strong>e</strong> komkommer</td>
                <td className="py-2 text-rose-300 font-bold">een groot café<br/>(groot café)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">meervoud (plural)</td>
                <td className="py-2">de grot<strong>e</strong> komkommers</td>
                <td className="py-2">de grot<strong>e</strong> cafés</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>⚙️ Werkwoorden (Fiiller) & Inversie</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-rose-300 text-sm mb-2">Conjugation (werken vs gebruiken)</h4>
              <ul className="text-sm text-slate-200 space-y-1 font-mono bg-rose-900/20 p-3 rounded-lg">
                <li>ik werk / gebruik</li>
                <li>jij werkt / gebruikt</li>
                <li>hij/zij/het werkt / gebruikt</li>
                <li>wij werken / gebruiken</li>
                <li>jullie werken / gebruiken</li>
                <li>zij werken / gebruiken</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-rose-300 text-sm mb-2">Inversie (Devrik Cümle)</h4>
              <p className="text-sm text-slate-300 mb-2">Cümleye zaman gibi başka bir öğe ile başlarsak fiil ve özne yer değiştirir (Fiil hep 2. sıradadır).</p>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li><em>Wij hebben vanavond een feestje.</em></li>
                <li>➔ <strong>Vanavond hebben wij</strong> een feestje.</li>
                <li><em>Ik wil nu pizza.</em></li>
                <li>➔ <strong>Nu wil ik</strong> pizza.</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Q&A: Hans op de markt</h3>
          <ul className="text-sm text-slate-200 space-y-1 list-disc pl-5">
            <li><strong>Hoeveel tomaten koopt Hans?</strong> ➔ Hans koopt zes tomaten.</li>
            <li><strong>Wanneer komen de buren bij Hans eten?</strong> ➔ Morgen komen de buren bij Hans eten.</li>
            <li><strong>Wat gaan ze eten?</strong> ➔ Hans en de buren eten stamppot.</li>
            <li><strong>Is de andijvie goedkoop?</strong> ➔ Ja, de andijvie is goedkoop.</li>
            <li><strong>Koopt Hans komkommers?</strong> ➔ Nee, Hans koopt geen komkommers.</li>
            <li><strong>Hoeveel moet Hans betalen?</strong> ➔ Hans betaalt acht euro dertig. (8,30)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Herhaling Les 4 (Zullen & Afspreken)",
        isExtra: false,
        questions: [
          { id: "5_onclass_1_1", type: "fill_in", question: "Zullen we naar Parijs ________? (go)", correctAnswer: "gaan" },
          { id: "5_onclass_1_2", type: "fill_in", question: "Hoe laat zullen we ________? (meet up)", correctAnswer: "afspreken" },
          { id: "5_onclass_1_3", type: "multiple_choice", question: "Wat antwoord je op: 'Zullen we na de les koffie drinken?'", options: ["Ja, leuk!", "Nee, dan kan ik niet.", "Ik weet het niet."], correctAnswer: "Ja, leuk!" },
          { id: "5_onclass_1_4", type: "fill_in", question: "Kun je vanavond? Nee, dan ________ ik niet. (can)", correctAnswer: "kan" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Groente en Fruit (Kernwoorden)",
        isExtra: false,
        questions: [
          { id: "5_onclass_2_1", type: "fill_in", question: "The cucumber = de ________", correctAnswer: "komkommer" },
          { id: "5_onclass_2_2", type: "fill_in", question: "The onion = de ________", correctAnswer: "ui" },
          { id: "5_onclass_2_3", type: "fill_in", question: "The strawberry = de ________", correctAnswer: "aardbei" },
          { id: "5_onclass_2_4", type: "fill_in", question: "A head of lettuce = een krop ________", correctAnswer: "sla" },
          { id: "5_onclass_2_5", type: "multiple_choice", question: "Wat is 'cauliflower' in het Nederlands?", options: ["de courgette", "de bloemkool", "de champignon"], correctAnswer: "de bloemkool" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Meervoud (Plural)",
        isExtra: false,
        questions: [
          { id: "5_onclass_3_1", type: "fill_in", question: "Eén jongen, twee ________", correctAnswer: "jongens" },
          { id: "5_onclass_3_2", type: "fill_in", question: "Eén meisje, twee ________", correctAnswer: "meisjes" },
          { id: "5_onclass_3_3", type: "fill_in", question: "Eén kamer, twee ________", correctAnswer: "kamers" },
          { id: "5_onclass_3_4", type: "multiple_choice", question: "Hoe zeg je 'eight euros' in het Nederlands?", options: ["acht euros", "acht euro's", "acht euro"], correctAnswer: "acht euro" },
          { id: "5_onclass_3_5", type: "multiple_choice", question: "Hoe zeg je 'two kilos of potatoes'?", options: ["twee kilo's aardappels", "twee kilo aardappels", "twee kilos aardappel"], correctAnswer: "twee kilo aardappels" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Het Adjectief (+e of geen +e?)",
        isExtra: true,
        questions: [
          { id: "5_onclass_4_1", type: "multiple_choice", question: "Het woord is 'de tomaat'. Je gebruikt 'lekker'.", options: ["de lekker tomaat", "de lekkere tomaat", "een lekker tomaat"], correctAnswer: "de lekkere tomaat" },
          { id: "5_onclass_4_2", type: "multiple_choice", question: "Het woord is 'het café'. Je gebruikt 'groot'.", options: ["het grote café", "het groot café", "een grote café"], correctAnswer: "het grote café" },
          { id: "5_onclass_4_3", type: "multiple_choice", question: "LET OP! Het woord is 'het huis'. Je gebruikt 'een' en 'mooi'.", options: ["een mooi huis", "een mooie huis", "het mooie huis"], correctAnswer: "een mooi huis" },
          { id: "5_onclass_4_4", type: "fill_in", question: "Het eten ________ lekker. (Sıfat isimden sonra, '+e' yok).", correctAnswer: "is" },
          { id: "5_onclass_4_5", type: "fill_in", question: "De man is groot. ➔ Het is de ________ man.", correctAnswer: "grote" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Dialoog en Inversie",
        isExtra: true,
        questions: [
          { id: "5_onclass_5_1", type: "multiple_choice", question: "Wat gaan Hans en de buren eten?", options: ["Pizza", "Stamppot", "Andijvie"], correctAnswer: "Stamppot" },
          { id: "5_onclass_5_2", type: "fill_in", question: "Koopt Hans komkommers? Nee, Hans koopt ________ komkommers.", correctAnswer: "geen" },
          { id: "5_onclass_5_3", type: "multiple_choice", question: "Maak de zin correct met inversie: 'Wij hebben vanavond een feestje.' ➔ Vanavond...", options: ["Vanavond wij hebben een feestje.", "Vanavond hebben wij een feestje.", "Vanavond een feestje hebben wij."], correctAnswer: "Vanavond hebben wij een feestje." },
          { id: "5_onclass_5_4", type: "fill_in", question: "Nu ________ ik pizza. (willen)", correctAnswer: "wil" }
        ]
      }
    ]
  }
];