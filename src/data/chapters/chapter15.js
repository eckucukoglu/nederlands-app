// src/data/chapters/chapter15.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter15Vocab = [
  { id: "15_1", chapter: 15, nl: "het openbaar vervoer", en: "public transport", example: "Tjeerd gaat met het openbaar vervoer." },
  { id: "15_2", chapter: 15, nl: "Colombia", en: "Columbia", example: "Amira komt uit Colombia." },
  { id: "15_3", chapter: 15, nl: "ging (gaan)", en: "went", example: "Het ging allemaal prima." },
  { id: "15_4", chapter: 15, nl: "het vliegtuig", en: "aeroplane", example: "Het was niet zo druk in het vliegtuig." },
  { id: "15_5", chapter: 15, nl: "duurde (duren)", en: "took / lasted", example: "De reis duurde een beetje lang." },
  { id: "15_6", chapter: 15, nl: "helaas", en: "unfortunately", example: "Die moest helaas werken." },
  { id: "15_7", chapter: 15, nl: "logeren", en: "stay (as a guest)", example: "Leuk dat je bij ons komt logeren." },
  { id: "15_8", chapter: 15, nl: "pakken (het pak)", en: "packets", example: "Twee pakken lekkere koffie." },
  { id: "15_9", chapter: 15, nl: "veilig", en: "safe", example: "Die zitten veilig in mijn tas." },
  { id: "15_10", chapter: 15, nl: "de trein", en: "train", example: "We gaan naar de trein." },
  { id: "15_11", chapter: 15, nl: "de tas", en: "bag", example: "Mijn tas is zwaar." },
  { id: "15_12", chapter: 15, nl: "geweldig", en: "fantastic", example: "Je bent geweldig." },
  { id: "15_13", chapter: 15, nl: "vertrekt (vertrekken)", en: "leaves / departs", example: "Die vertrekt over een paar minuten." },
  { id: "15_14", chapter: 15, nl: "de koffer", en: "suitcase", example: "Zal ik deze koffer dragen?" },
  { id: "15_15", chapter: 15, nl: "dragen", en: "carry", example: "Kunt u ze allebei dragen?" },
  { id: "15_16", chapter: 15, nl: "het grapje", en: "joke", example: "Nee hoor, grapje!" },
  { id: "15_17", chapter: 15, nl: "het raampje (het raam)", en: "window", example: "Mag ik bij het raampje zitten?" },
  { id: "15_18", chapter: 15, nl: "net als", en: "like / just like", example: "Net als vroeger?" },
  { id: "15_19", chapter: 15, nl: "vroeger", en: "in the old days / previously", example: "Net als vroeger toen ik klein was." },
  { id: "15_20", chapter: 15, nl: "lekker", en: "nicely", example: "Dan kan ik lekker naar buiten kijken." },
  { id: "15_21", chapter: 15, nl: "buiten", en: "outside", example: "Kijk naar buiten." },
  { id: "15_22", chapter: 15, nl: "reis (reizen)", en: "travel", example: "Ik reis weinig met de trein." },
  { id: "15_23", chapter: 15, nl: "het spoor", en: "platform", example: "Spoor 2 naar Enschede." },
  { id: "15_24", chapter: 15, nl: "achter de rug", en: "behind (you) / over with", example: "Je hebt zo'n lange reis achter de rug." },
  { id: "15_25", chapter: 15, nl: "pony's (de pony)", en: "ponies", example: "Kleine pony's in de wei." },
  { id: "15_26", chapter: 15, nl: "de wei", en: "field / meadow", example: "Ze lopen in de wei." },
  { id: "15_27", chapter: 15, nl: "net", en: "like / just as", example: "Het zijn net grote honden." },
  { id: "15_28", chapter: 15, nl: "de shetlandpony", en: "Shetland pony", example: "Dat zijn shetlandpony's." },
  { id: "15_29", chapter: 15, nl: "het landschap", en: "landscape", example: "Wat is het landschap hier anders." },
  { id: "15_30", chapter: 15, nl: "anders", en: "different", example: "Het is heel anders." },
  { id: "15_31", chapter: 15, nl: "plat", en: "flat", example: "Nederland is erg plat." },
  { id: "15_32", chapter: 15, nl: "de berg", en: "mountain", example: "Er is geen berg te zien." },
  { id: "15_33", chapter: 15, nl: "gewend", en: "used to", example: "Dat ben je niet gewend, hè?" },
  { id: "15_34", chapter: 15, nl: "opletten", en: "pay attention", example: "We moeten even goed opletten." },
  { id: "15_35", chapter: 15, nl: "zo meteen", en: "very soon", example: "Dan zien we zo meteen het Naardermeer." },
  { id: "15_36", chapter: 15, nl: "het natuurgebied", en: "nature reserve", example: "Dat is een prachtig natuurgebied." },
  { id: "15_37", chapter: 15, nl: "de natuur", en: "nature", example: "Ik hou van de natuur." },
  { id: "15_38", chapter: 15, nl: "het gebied", en: "area", example: "In dit gebied zijn veel vogels." },
  { id: "15_39", chapter: 15, nl: "echt", en: "real / really", example: "Dat is echt mooi." },
  { id: "15_40", chapter: 15, nl: "de lucht", en: "sky", example: "De Hollandse lucht." },
  { id: "15_41", chapter: 15, nl: "schilderijen (het schilderij)", en: "paintings", example: "De lucht van de schilderijen." },
  { id: "15_42", chapter: 15, nl: "het stukje (het stuk)", en: "piece", example: "Een prachtig stukje Nederland." },
  { id: "15_43", chapter: 15, nl: "de molen", en: "windmill", example: "Daar staat een oude molen." },
  { id: "15_44", chapter: 15, nl: "broodjes (het broodje)", en: "bread rolls", example: "Ik heb broodjes gekocht." },
  { id: "15_45", chapter: 15, nl: "onderweg", en: "on the way", example: "Voor onderweg." },
  { id: "15_46", chapter: 15, nl: "de kaas", en: "cheese", example: "Een broodje met kaas." },
  { id: "15_47", chapter: 15, nl: "moe", en: "tired", example: "Ik ben toch wel moe geworden." },
  { id: "15_48", chapter: 15, nl: "welterusten", en: "sleep well / good night", example: "Welterusten, Amira." },
  { id: "15_49", chapter: 15, nl: "goede reis", en: "have a good trip", example: "Goede reis, oom Tjeerd." },
  { id: "15_50", chapter: 15, nl: "maak wakker (wakker maken)", en: "wake you up", example: "Ik maak je in Enschede wel wakker." }
];

export const chapter15Dialogues = {
  "15.1": [
    { speaker: "Verteller", text: "Tjeerd, de medewerker van de sportschool, gaat met het openbaar vervoer naar Schiphol om zijn nicht, Amira uit Colombia, op te halen.", translation: "Spor salonu çalışanı Tjeerd, Kolombiya'dan gelen yeğeni Amira'yı almak için toplu taşımayla Schiphol'e (Havalimanı) gider." },
    { speaker: "Tjeerd", text: "Hallo Amira, welkom in Nederland. Heb je een goede reis gehad?", translation: "Merhaba Amira, Hollanda'ya hoş geldin. İyi bir yolculuk geçirdin mi?" },
    { speaker: "Amira", text: "Hallo oom Tjeerd. Ja, het ging allemaal prima. Het was niet zo druk in het vliegtuig. De reis duurde alleen een beetje lang. Waar is tante Lena?", translation: "Merhaba Tjeerd amca. Evet, her şey harika geçti. Uçak o kadar kalabalık değildi. Sadece yolculuk biraz uzun sürdü. Lena teyze nerede?" },
    { speaker: "Tjeerd", text: "Die moest helaas werken. Leuk dat je bij ons komt logeren. Je hebt toch wel koffie meegenomen, hè?", translation: "O maalesef çalışmak zorundaydı. Bizde kalmaya (misafirliğe) gelmen çok güzel. Kahve getirdin değil mi?" },
    { speaker: "Amira", text: "Ja, natuurlijk heb ik dat gedaan. Ik heb twee pakken lekkere koffie uit Colombia bij me. Die zitten veilig in mijn tas.", translation: "Evet, tabii ki getirdim (onu yaptım). Yanımda Kolombiya'dan iki paket lezzetli kahve var. Onlar çantamda güvende." },
    { speaker: "Tjeerd", text: "Je bent geweldig. Kom, we gaan gauw naar de trein. Die vertrekt over een paar minuten van spoor 2 naar Enschede. Zal ik deze grote koffer dragen, en jij die?", translation: "Sen harikasın. Gel, çabucak trene gidelim. O (tren) birkaç dakika içinde peron 2'den Enschede'ye kalkıyor. Bu büyük bavulu ben taşıyayım, sen de onu mu?" },
    { speaker: "Amira", text: "Kunt u die allebei niet dragen? Nee hoor, grapje. Mag ik bij het raampje zitten, net als vroeger? Dan kan ik lekker naar buiten kijken. Ik reis in Colombia weinig met de trein.", translation: "İkisini birden taşıyamaz mısınız? Yok canım, şaka yapıyorum. Eskisi gibi cam kenarında oturabilir miyim? O zaman dışarıyı güzelce izleyebilirim. Kolombiya'da trenle çok nadir seyahat ediyorum." },
    { speaker: "Tjeerd", text: "Jij mag alles, je hebt zo'n lange reis achter de rug.", translation: "Sen her şeyi yapabilirsin, arkanda çok uzun bir yolculuk bıraktın (Çok uzun yoldan geldin)." },
    { speaker: "Amira", text: "Kijk eens, oom Tjeerd, daar lopen heel kleine pony's in de wei. Het zijn net grote honden, zo klein zijn ze.", translation: "Şuna bakın Tjeerd amca, orada çayırda çok küçük midilliler dolaşıyor. Tıpkı büyük köpekler gibiler, o kadar küçükler ki." },
    { speaker: "Tjeerd", text: "Ja, dat zijn shetlandpony's. Heb je die in Colombia niet?", translation: "Evet, onlar Shetland midillileri. Onlardan Kolombiya'da yok mu?" },
    { speaker: "Amira", text: "Misschien wel, ik heb ze nog nooit gezien. Wat is het landschap hier toch anders. Het is hier zo plat, geen berg te zien. Dat is een groot verschil met Colombia. Je kunt hier zo ver kijken.", translation: "Belki vardır, ama ben onları hiç görmedim. Buradaki manzara ne kadar da farklı. Burası o kadar düz ki, hiç dağ görünmüyor. Bu Kolombiya ile büyük bir fark. Burada o kadar uzağı görebiliyorsunuz ki." },
    { speaker: "Tjeerd", text: "Ja, dat ben je niet gewend, hè? We moeten even goed opletten, dan zien we zo meteen het Naardermeer. Dat is een prachtig natuurgebied.", translation: "Evet, buna alışık değilsin, değil mi? Biraz dikkat etmeliyiz, o zaman birazdan Naardermeer'i göreceğiz. Orası muhteşem bir doğa koruma alanı." },
    { speaker: "Amira", text: "O ja, wat mooi, en moet je eens zien wat een mooie lucht. Dat is echt de Nederlandse lucht van de schilderijen.", translation: "Ah evet, ne güzel, ve şuna bir bakmalısın ne kadar güzel bir gökyüzü. Bu gerçekten tabloların o Hollanda gökyüzü." },
    { speaker: "Tjeerd", text: "Ja, dit is een prachtig stukje Nederland. Je moet ook even naar rechts kijken, daar staat een heel oude molen.", translation: "Evet, burası Hollanda'nın muhteşem bir parçası. Sağa da biraz bakmalısın, orada çok eski bir yel değirmeni duruyor." },
    { speaker: "Amira", text: "Ja, typisch Nederlands, hè?", translation: "Evet, tipik Hollanda, değil mi?" },
    { speaker: "Tjeerd", text: "Ja. Ik krijg een beetje honger. Jij ook? Ik heb op Schiphol broodjes gekocht voor onderweg. Wil je ook een broodje?", translation: "Evet. Biraz acıktım. Sen de mi? Yolda yemek için Schiphol'den sandviç (ekmek) aldım. Sen de bir sandviç ister misin?" },
    { speaker: "Amira", text: "Ja, lekker. Wil je dit of dat broodje?", translation: "Evet, harika olur. Bu sandviçi mi istersin yoksa şunu mu?" },
    { speaker: "Amira", text: "Ik wil graag dat broodje met kaas. Daarna ga ik even slapen. Ik ben toch wel moe geworden van de reis. Goede reis oom Tjeerd.", translation: "Şu peynirli sandviçi istiyorum lütfen. Ondan sonra biraz uyuyacağım. Yolculuktan yine de epey yoruldum. İyi yolculuklar Tjeerd amca." },
    { speaker: "Tjeerd", text: "Ha ha. Welterusten, Amira. Ik maak je in Enschede wel wakker.", translation: "Ha ha. İyi uykular Amira. Seni Enschede'de uyandırırım." }
  ]
};

export const chapter15Sections = [
  {
    id: "15.1",
    chapter: 15,
    title: "15.1 Dialoog: In de trein",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In de trein (Trende)</h3>
          <p>Tjeerd, Kolombiya'dan gelen yeğeni Amira'yı havaalanından (Schiphol) alıyor. Beraber trene biniyorlar. Amira, Hollanda manzarası karşısında şaşkın. Tren yolculuğu boyunca dışarıyı tasvir ediyorlar.</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Het is hier zo plat, geen berg te zien:</strong> Burası o kadar düz ki, görülecek hiç dağ yok.</li>
            <li><strong>Je hebt zo'n lange reis achter de rug:</strong> Çok uzun bir yolu geride bıraktın.</li>
            <li><strong>Ik maak je wel wakker:</strong> Seni ben uyandırırım (merak etme).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zijn de volgende zinnen waar of niet waar?",
        isExtra: false,
        questions: [
          { id: "15.1_opd1_1", type: "multiple_choice", question: "1. Amira is een nicht van Tjeerd.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "15.1_opd1_2", type: "multiple_choice", question: "2. Amira komt in Nederland wonen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "15.1_opd1_3", type: "multiple_choice", question: "3. Amira brengt koffie mee uit Colombia.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "15.1_opd1_4", type: "multiple_choice", question: "4. Tjeerd moet de koffers van Amira dragen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "15.1_opd1_5", type: "multiple_choice", question: "5. Amira vindt het Nederlandse landschap ongeveer hetzelfde als het landschap in Colombia.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "15.1_opd1_6", type: "multiple_choice", question: "6. Amira en Tjeerd eten een broodje in de trein.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "15.1_opd1_7", type: "multiple_choice", question: "7. Tjeerd gaat slapen in de trein.", options: ["waar", "niet waar"], correctAnswer: "niet waar" }
        ]
      }
    ]
  },
  {
    id: "15.2",
    chapter: 15,
    title: "15.2 Woordenlijst & 15.3 Beschrijven",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👀 Beschrijven wat je ziet (Gördüklerini Tasvir Etmek)</h3>
          <p className="text-sm text-slate-300">Hollandacada birine ilginç bir şeyi göstermek (dikkat çekmek) için şu kalıplar kullanılır:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Kijk eens...</strong> (Baksana / Şuraya bir bak...)</li>
            <li><strong>Moet je eens zien...</strong> (Şunu bir görmelisin... / Şuna bir bak...)</li>
          </ul>
          <p className="text-sm text-slate-400 italic">"Kijk eens, oom Tjeerd, daar lopen heel kleine pony's in de wei." (Baksana Tjeerd amca...)</p>
          <p className="text-sm text-slate-400 italic">"Moet je eens zien wat een mooie lucht." (Şu havanın/gökyüzünün güzelliğine bir bak).</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Oefeningen (Pedagogisch)",
        isExtra: true,
        questions: generateSmartQuestions(15, "Woordenlijst", 10, chapter15Vocab)
      }
    ]
  },
  {
    id: "15.4",
    chapter: 15,
    title: "15.4 Demonstratief pronomen - Zelfstandig (O / Onu)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>👉 Zelfstandig gebruik (Tek Başına İşaret Zamiri)</h3>
          <p className="text-sm text-slate-300">Hollandacada <strong>die</strong> ve <strong>dat</strong> kelimelerini daha önce ismin önüne gelerek "Şu kitap" (Dat boek) veya "Şu araba" (Die auto) derken kullanmıştık.</p>
          <p className="text-sm text-slate-200 mt-2 font-bold">Ancak bu kelimeler ismin yerini tamamen alarak TEK BAŞLARINA da kullanılabilirler! (İngilizcedeki 'That' veya 'Those' gibi).</p>

          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-300 mb-2">1. DIE (De-kelimeleri, İnsanlar ve Çoğullar için)</h4>
            <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
              <li><strong>De-woorden:</strong> Wat vind je van de kaas? <strong>Die</strong> vind ik lekker. (Peyniri nasıl buldun? <strong>Onu</strong> lezzetli buldum.)</li>
              <li><strong>Personen:</strong> Waar is tante Lena? <strong>Die</strong> moest helaas werken. (Lena teyze nerede? <strong>O</strong> maalesef çalışmak zorundaydı.)</li>
              <li><strong>Meervoud (Çoğullar):</strong> Waar zijn Tom en Marit? <strong>Die</strong> zijn naar de Wandelbeurs.</li>
            </ul>
          </div>

          <div className="bg-emerald-900/30 p-4 rounded-xl mt-4 border border-emerald-500/30">
            <h4 className="font-bold text-emerald-300 mb-2">2. DAT (Het-kelimeleri ve Bütün Cümleler için)</h4>
            <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
              <li><strong>Het-woorden:</strong> We zien het Naardermeer. <strong>Dat</strong> is een prachtig natuurgebied.</li>
              <li><strong>Hele zin (Bütün bir fikre atıf):</strong> Je hebt toch wel koffie meegenomen, hè? Ja, natuurlijk heb ik <strong>dat</strong> gedaan. (O eylemi yaptım).</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Vul in: die of dat. (Let goed op het woord!)",
        isExtra: false,
        questions: [
          { id: "15.4_opd4_1", type: "fill_in", question: "1. Kijk, ik heb nieuwe schoenen (meervoud). Leuk, waar heb je ________ gekocht?", correctAnswer: "die" },
          { id: "15.4_opd4_2", type: "fill_in", question: "2. Zullen we zondag samen eten (hele zin/actie)? Ja, ________ is een leuk idee.", correctAnswer: "dat" },
          { id: "15.4_opd4_3", type: "fill_in", question: "3. Ken je de film (de-woord) Superpower? Ja, ________ heb ik samen met Paulien gezien.", correctAnswer: "die" },
          { id: "15.4_opd4_4", type: "fill_in", question: "4. Waar is Bram (persoon)? ________ haalt nog even koffie.", correctAnswer: "Die" },
          { id: "15.4_opd4_5", type: "fill_in", question: "5. Heb je al kaartjes gekocht? Ja, ________ heb ik gisteren direct na de les gedaan. (Het DOEN van een actie)", correctAnswer: "dat" },
          { id: "15.4_opd4_6", type: "fill_in", question: "6. Heb je de tekst (de-woord) al gelezen? Ja, ________ heb ik al gelezen. En jij?", correctAnswer: "die" },
          { id: "15.4_opd4_7", type: "fill_in", question: "7. Was de trein op tijd? Nee, ________ (de trein) was weer te laat. Ik vind ________ (de situatie) zo vervelend!", correctAnswer: "die, dat" },
          { id: "15.4_opd4_8", type: "fill_in", question: "8. Waar zijn je koffers (meervoud)? O, ________ staan daar, in de gang.", correctAnswer: "die" },
          { id: "15.4_opd4_9", type: "fill_in", question: "9. Mag ik even naar de wc? Ja hoor, ________ is goed. (De actie)", correctAnswer: "dat" },
          { id: "15.4_opd4_10", type: "fill_in", question: "10. Zal ik dit boek (het-woord) kopen voor Marga? Ja, ________ (dat idee) is een leuk idee. ________ (het boek) heeft ze nog niet, denk ik.", correctAnswer: "dat, dat" },
          { id: "15.4_opd4_11", type: "fill_in", question: "11. Hoe ken je Pedro en Ali (personen)? ________ ken ik van de cursus.", correctAnswer: "Die" },
          { id: "15.4_opd4_12", type: "fill_in", question: "12. Vraag jij de rekening even? Ja, ________ (die actie) zal ik doen.", correctAnswer: "dat" },
          { id: "15.4_opd4_13", type: "fill_in", question: "13. Heb jij mijn pen (de-woord) gezien? Ja, ________ ligt hier, onder je boek.", correctAnswer: "die" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Zelfstandig Pronomen",
        isExtra: true,
        questions: [
          { id: "15.4_smart_1", type: "multiple_choice", question: "Je vriend zegt: 'Ik heb een nieuwe baan gekregen!'. Jij zegt: 'Gefeliciteerd, _____ is geweldig!'", options: ["dat", "die", "het"], correctAnswer: "dat" },
          { id: "15.4_smart_2", type: "multiple_choice", question: "Waar is de kat (de kat)? _____ ligt te slapen.", options: ["Dat", "Die", "Dit"], correctAnswer: "Die" }
        ]
      }
    ]
  },
  {
    id: "15.5",
    chapter: 15,
    title: "15.5 Dit is / zijn, Dat is / zijn (Tanıtmak / İşaret Etmek)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>👋 Dit is / Dat zijn (Bu / Bunlar)</h3>
          <p className="text-sm text-slate-300">Hollandacada bir kişiyi tanıtırken veya bir nesneyi gösterirken <strong>Dit</strong> (yakındaki) veya <strong>Dat</strong> (uzaktaki) kelimesini sabit olarak kullanırız. Kelimenin tekil/çoğul olması DIT/DAT'ı değiştirmez, <strong>fiili</strong> değiştirir!</p>
          
          <ul className="text-sm text-slate-200 mt-4 list-disc pl-5 space-y-2">
            <li><strong>Dit is</strong> Amira. (Bu Amira'dır.)</li>
            <li><strong>Dit zijn</strong> oom Tjeerd en tante Lena. (Bunlar Tjeerd amca ve Lena teyze. -> <em>Deze zijn DENMEZ!</em>)</li>
            <li><strong>Dat is</strong> een prachtig stukje Nederland. (Şu muhteşem bir parça Hollanda'dır).</li>
            <li><strong>Dat zijn</strong> shetlandpony's. (Şunlar shetland midillileri. -> <em>Die zijn DENMEZ!</em>)</li>
          </ul>

          <div className="bg-rose-900/30 p-3 rounded-lg mt-4 border border-rose-500/30 text-rose-200 text-sm italic">
            <strong>İngilizce Mantığı:</strong> This is... / These are... ➔ Dit is... / Dit zijn...
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 5: Presenteer iets, iemand of meer personen. (Gebruik Dit is... / Dit zijn...)",
        isExtra: false,
        questions: [
          { id: "15.5_opd5_1", type: "multiple_choice", question: "Marina, mijn nichtje. Hoe presenteer je haar?", options: ["Dit is Marina, mijn nichtje.", "Deze is Marina, mijn nichtje.", "Dit zijn Marina."], correctAnswer: "Dit is Marina, mijn nichtje." },
          { id: "15.5_opd5_2", type: "multiple_choice", question: "Andrea en Chris, mijn buren. (Meervoud)", options: ["Deze zijn Andrea en Chris.", "Dit zijn Andrea en Chris, mijn buren."], correctAnswer: "Dit zijn Andrea en Chris, mijn buren." },
          { id: "15.5_opd5_3", type: "fill_in", question: "De zoontjes (meervoud) van mijn vriendin. -> ________ mijn vriendin.", correctAnswer: "Dit zijn de zoontjes van" },
          { id: "15.5_opd5_4", type: "fill_in", question: "De foto's van mijn vakantie. -> ________ mijn vakantie.", correctAnswer: "Dit zijn de foto's van" }
        ]
      },
      {
        instruction: "Opdracht 6: Bedenk een reactie op de vragen. Begin met dat of die.",
        isExtra: false,
        questions: [
          { id: "15.5_opd6_1", type: "multiple_choice", question: "Ken je deze serie (de-woord)?", options: ["Ja, dat ken ik.", "Ja, die ken ik.", "Ja, deze ken ik."], correctAnswer: "Ja, die ken ik." },
          { id: "15.5_opd6_2", type: "multiple_choice", question: "Hoe heet dit ding (het ding)?", options: ["Dat weet ik niet.", "Die weet ik niet."], correctAnswer: "Dat weet ik niet." },
          { id: "15.5_opd6_3", type: "multiple_choice", question: "Zal ik je koffers (meervoud) dragen?", options: ["Nee hoor, dat zijn niet te zwaar.", "Nee hoor, die draag ik zelf wel."], correctAnswer: "Nee hoor, die draag ik zelf wel." },
          { id: "15.5_opd6_4", type: "multiple_choice", question: "Misschien kunnen we samen een huis huren? (Situatie/Actie)", options: ["Dat vind ik een goed idee!", "Die vind ik een goed idee!"], correctAnswer: "Dat vind ik een goed idee!" }
        ]
      }
    ]
  },
  {
    id: "15.6",
    chapter: 15,
    title: "15.6 Tekst: Een mooie reisherinnering",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Een mooie reisherinnering</h3>
          <p className="text-sm text-slate-300">Hollanda Demiryolları (NS) ile yapılan maceralı bir tren yolculuğu:</p>
          <p className="text-sm text-slate-200 mt-2 italic bg-amber-900/20 p-3 rounded border border-amber-500/30">
            "Op zondag 20 december namen mijn vriendin en ik 's morgens de trein van Maastricht naar Amsterdam. Dat was slecht gepland, want net op dat moment lag in het zuiden heel veel sneeuw. In Eindhoven konden we niet verder. We moesten de trein uit om daar te wachten tot er wel een trein ging. Van de NS kregen we gratis koffie en thee en dat hield ons warm. Na lange tijd kwam er een trein, maar verder dan Utrecht ging de reis niet. Onderweg werd duidelijk dat we onze eindbestemming die dag niet konden bereiken... De solidariteit was groot... We hebben nu een mooie reisherinnering. En nieuwe kennissen in Utrecht!"
          </p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Zet de zinnen in de goede volgorde volgens de tekst (Sıralama).",
        isExtra: false,
        questions: [
          { id: "15.6_opd13_1", type: "multiple_choice", question: "Wat gebeurde er als EERSTE in het verhaal?", options: ["In Eindhoven moesten we lang wachten.", "Wij namen de trein van Maastricht naar Amsterdam.", "We kregen koffie en thee van de NS."], correctAnswer: "Wij namen de trein van Maastricht naar Amsterdam." },
          { id: "15.6_opd13_2", type: "multiple_choice", question: "Wat is de juiste logische volgorde in Eindhoven?", options: ["Eerst wachten, dan koffie krijgen, dan de trein naar Utrecht nemen.", "Eerst koffie krijgen, dan wachten, dan de trein nemen.", "Eerst de trein nemen, dan wachten."], correctAnswer: "Eerst wachten, dan koffie krijgen, dan de trein naar Utrecht nemen." },
          { id: "15.6_opd13_3", type: "multiple_choice", question: "Wat was het resultaat aan het eind?", options: ["De stemming was heel negatief.", "Wij hebben nieuwe kennissen in Utrecht.", "Ze bereikten Amsterdam."], correctAnswer: "Wij hebben nieuwe kennissen in Utrecht." }
        ]
      }
    ]
  },
  {
    id: "15.7",
    chapter: 15,
    title: "15.7 Uitspraak & Cultuur (Treinen)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🗣️ Uitspraak: ng – ing – nk</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 14:</strong> Hollandacada ng/nk sesleri genizden çıkar (İngilizcedeki 'sing' veya 'bank' gibi).</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>ng:</strong> lang, jong, belangrijk, Engeland, brengen.</li>
            <li><strong>ing:</strong> verdieping, rekening, kleding.</li>
            <li><strong>nk:</strong> bedankt, denken, donker, drinken.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Treinen in Nederland (NS)</h3>
          <p className="text-sm text-slate-300">Hollanda Demiryolları (NS - Nederlandse Spoorwegen) dünyanın en yoğun ağlarından biridir.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li>In de meeste landen zijn de treinen donkerrood of donkergroen (Çoğu ülkede trenler koyu kırmızı veya koyu yeşildir).</li>
            <li>In Nederland zijn de treinen fel <strong>geel</strong> met <strong>blauw</strong> (Hollanda'da trenler parlak <strong>sarı</strong> ve <strong>mavi</strong> renktedir).</li>
            <li>Hollandalılar trenleriyle gurur duyarlar ancak 5 dakikalık gecikmelerde bile şikayet etmeyi severler!</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "15.7_smart_1", type: "multiple_choice", question: "Welke kleuren hebben de treinen (van de NS) in Nederland?", options: ["Donkergroen en wit", "Rood en zwart", "Geel en blauw"], correctAnswer: "Geel en blauw" },
          { id: "15.7_smart_2", type: "multiple_choice", question: "Waarvoor staat de afkorting 'NS' in Nederland?", options: ["Nieuwe Spoorwegen", "Nederlandse Spoorwegen", "Noordelijke Spoorwegen"], correctAnswer: "Nederlandse Spoorwegen" }
        ]
      }
    ]
  }
];