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
    { speaker: "Verteller", text: "Tjeerd, de medewerker van de sportschool, gaat met het openbaar vervoer naar Schiphol om zijn nicht, Amira uit Colombia, op te halen.", translation: { tr: "Spor salonu çalışanı Tjeerd, Kolombiya'dan gelen yeğeni Amira'yı almak için toplu taşımayla Schiphol'e (Havalimanı) gider.", en: "Tjeerd, the gym employee, takes public transport to Schiphol to pick up his niece, Amira from Colombia." } },
    { speaker: "Tjeerd", text: "Hallo Amira, welkom in Nederland. Heb je een goede reis gehad?", translation: { tr: "Merhaba Amira, Hollanda'ya hoş geldin. İyi bir yolculuk geçirdin mi?", en: "Hello Amira, welcome to the Netherlands. Did you have a good trip?" } },
    { speaker: "Amira", text: "Hallo oom Tjeerd. Ja, het ging allemaal prima. Het was niet zo druk in het vliegtuig. De reis duurde alleen een beetje lang. Waar is tante Lena?", translation: { tr: "Merhaba Tjeerd amca. Evet, her şey harika geçti. Uçak o kadar kalabalık değildi. Sadece yolculuk biraz uzun sürdü. Lena teyze nerede?", en: "Hello Uncle Tjeerd. Yes, it all went fine. It wasn't very busy on the plane. The journey just took a bit long. Where is Aunt Lena?" } },
    { speaker: "Tjeerd", text: "Die moest helaas werken. Leuk dat je bij ons komt logeren. Je hebt toch wel koffie meegenomen, hè?", translation: { tr: "O maalesef çalışmak zorundaydı. Bizde kalmaya (misafirliğe) gelmen çok güzel. Kahve getirdin değil mi?", en: "Unfortunately, she had to work. It's nice that you are coming to stay with us. You did bring coffee, right?" } },
    { speaker: "Amira", text: "Ja, natuurlijk heb ik dat gedaan. Ik heb twee pakken lekkere koffie uit Colombia bij me. Die zitten veilig in mijn tas.", translation: { tr: "Evet, tabii ki getirdim (onu yaptım). Yanımda Kolombiya'dan iki paket lezzetli kahve var. Onlar çantamda güvende.", en: "Yes, of course I did that. I have two packets of nice coffee from Colombia with me. They are safely in my bag." } },
    { speaker: "Tjeerd", text: "Je bent geweldig. Kom, we gaan gauw naar de trein. Die vertrekt over een paar minuten van spoor 2 naar Enschede. Zal ik deze grote koffer dragen, en jij die?", translation: { tr: "Sen harikasın. Gel, çabucak trene gidelim. O (tren) birkaç dakika içinde peron 2'den Enschede'ye kalkıyor. Bu büyük bavulu ben taşıyayım, sen de onu mu?", en: "You are fantastic. Come, let's quickly go to the train. It leaves in a few minutes from platform 2 to Enschede. Shall I carry this big suitcase, and you that one?" } },
    { speaker: "Amira", text: "Kunt u die allebei niet dragen? Nee hoor, grapje. Mag ik bij het raampje zitten, net als vroeger? Dan kan ik lekker naar buiten kijken. Ik reis in Colombia weinig met de trein.", translation: { tr: "İkisini birden taşıyamaz mısınız? Yok canım, şaka yapıyorum. Eskisi gibi cam kenarında oturabilir miyim? O zaman dışarıyı güzelce izleyebilirim. Kolombiya'da trenle çok nadir seyahat ediyorum.", en: "Can't you carry them both? No, just joking. Can I sit by the window, just like before? Then I can look outside nicely. I rarely travel by train in Colombia." } },
    { speaker: "Tjeerd", text: "Jij mag alles, je hebt zo'n lange reis achter de rug.", translation: { tr: "Sen her şeyi yapabilirsin, arkanda çok uzun bir yolculuk bıraktın (Çok uzun yoldan geldin).", en: "You can do anything, you've had such a long journey behind you." } },
    { speaker: "Amira", text: "Kijk eens, oom Tjeerd, daar lopen heel kleine pony's in de wei. Het zijn net grote honden, zo klein zijn ze.", translation: { tr: "Şuna bakın Tjeerd amca, orada çayırda çok küçük midilliler dolaşıyor. Tıpkı büyük köpekler gibiler, o kadar küçükler ki.", en: "Look, Uncle Tjeerd, there are very small ponies walking in the meadow. They are like big dogs, that's how small they are." } },
    { speaker: "Tjeerd", text: "Ja, dat zijn shetlandpony's. Heb je die in Colombia niet?", translation: { tr: "Evet, onlar Shetland midillileri. Onlardan Kolombiya'da yok mu?", en: "Yes, those are Shetland ponies. Don't you have those in Colombia?" } },
    { speaker: "Amira", text: "Misschien wel, ik heb ze nog nooit gezien. Wat is het landschap hier toch anders. Het is hier zo plat, geen berg te zien. Dat is een groot verschil met Colombia. Je kunt hier zo ver kijken.", translation: { tr: "Belki vardır, ama ben onları hiç görmedim. Buradaki manzara ne kadar da farklı. Burası o kadar düz ki, hiç dağ görünmüyor. Bu Kolombiya ile büyük bir fark. Burada o kadar uzağı görebiliyorsunuz ki.", en: "Maybe, but I have never seen them. How different the landscape is here. It is so flat here, not a mountain in sight. That is a big difference with Colombia. You can see so far here." } },
    { speaker: "Tjeerd", text: "Ja, dat ben je niet gewend, hè? We moeten even goed opletten, dan zien we zo meteen het Naardermeer. Dat is een prachtig natuurgebied.", translation: { tr: "Evet, buna alışık değilsin, değil mi? Biraz dikkat etmeliyiz, o zaman birazdan Naardermeer'i göreceğiz. Orası muhteşem bir doğa koruma alanı.", en: "Yes, you are not used to that, are you? We have to pay attention for a moment, then we will soon see the Naardermeer. That is a beautiful nature reserve." } },
    { speaker: "Amira", text: "O ja, wat mooi, en moet je eens zien wat een mooie lucht. Dat is echt de Nederlandse lucht van de schilderijen.", translation: { tr: "Ah evet, ne güzel, ve şuna bir bakmalısın ne kadar güzel bir gökyüzü. Bu gerçekten tabloların o Hollanda gökyüzü.", en: "Oh yes, how beautiful, and you should see what a beautiful sky. That is really the Dutch sky from the paintings." } },
    { speaker: "Tjeerd", text: "Ja, dit is een prachtig stukje Nederland. Je moet ook even naar rechts kijken, daar staat een heel oude molen.", translation: { tr: "Evet, burası Hollanda'nın muhteşem bir parçası. Sağa da biraz bakmalısın, orada çok eski bir yel değirmeni duruyor.", en: "Yes, this is a beautiful piece of the Netherlands. You should also look to the right for a moment, there is a very old windmill." } },
    { speaker: "Amira", text: "Ja, typisch Nederlands, hè?", translation: { tr: "Evet, tipik Hollanda, değil mi?", en: "Yes, typically Dutch, right?" } },
    { speaker: "Tjeerd", text: "Ja. Ik krijg een beetje honger. Jij ook? Ik heb op Schiphol broodjes gekocht voor onderweg. Wil je ook een broodje?", translation: { tr: "Evet. Biraz acıktım. Sen de mi? Yolda yemek için Schiphol'den sandviç (ekmek) aldım. Sen de bir sandviç ister misin?", en: "Yes. I'm getting a little hungry. You too? I bought sandwiches at Schiphol for the journey. Do you also want a sandwich?" } },
    { speaker: "Amira", text: "Ja, lekker. Wil je dit of dat broodje?", translation: { tr: "Evet, harika olur. Bu sandviçi mi istersin yoksa şunu mu?", en: "Yes, nice. Do you want this or that sandwich?" } },
    { speaker: "Amira", text: "Ik wil graag dat broodje met kaas. Daarna ga ik even slapen. Ik ben toch wel moe geworden van de reis. Goede reis oom Tjeerd.", translation: { tr: "Şu peynirli sandviçi istiyorum lütfen. Ondan sonra biraz uyuyacağım. Yolculuktan yine de epey yoruldum. İyi yolculuklar Tjeerd amca.", en: "I would like that cheese sandwich. After that I'm going to sleep for a bit. I did get quite tired from the journey. Have a good trip Uncle Tjeerd." } },
    { speaker: "Tjeerd", text: "Ha ha. Welterusten, Amira. Ik maak je in Enschede wel wakker.", translation: { tr: "Ha ha. İyi uykular Amira. Seni Enschede'de uyandırırım.", en: "Ha ha. Sleep well, Amira. I will wake you up in Enschede." } }
  ]
};

export const chapter15Sections = [
  {
    id: "15.1",
    chapter: 15,
    title: "15.1 Dialoog: In de trein",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In de trein (Trende)</h3>
            <p>Tjeerd, Kolombiya'dan gelen yeğeni Amira'yı havaalanından (Schiphol) alıyor. Beraber trene biniyorlar. Amira, Hollanda manzarası karşısında şaşkın. Tren yolculuğu boyunca dışarıyı tasvir ediyorlar.</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Het is hier zo plat, geen berg te zien:</strong> Burası o kadar düz ki, görülecek hiç dağ yok.</li>
              <li><strong>Je hebt zo'n lange reis achter de rug:</strong> Çok uzun bir yolu geride bıraktın.</li>
              <li><strong>Ik maak je wel wakker:</strong> Seni ben uyandırırım (merak etme).</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: In the train</h3>
            <p>Tjeerd picks up his niece Amira, who comes from Colombia, from the airport (Schiphol). They take the train together. Amira is amazed by the Dutch landscape. They describe the outside during the train ride.</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Het is hier zo plat, geen berg te zien:</strong> It is so flat here, not a mountain in sight.</li>
              <li><strong>Je hebt zo'n lange reis achter de rug:</strong> You've got such a long journey behind you.</li>
              <li><strong>Ik maak je wel wakker:</strong> I will wake you up (don't worry).</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zijn de volgende zinnen waar of niet waar? (Are the following sentences true or false?)",
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👀 Beschrijven wat je ziet (Describing what you see)</h3>
            <p className="text-sm text-slate-300">To show someone something interesting (to draw attention) in Dutch, these phrases are used:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Kijk eens...</strong> (Look here... / Have a look...)</li>
              <li><strong>Moet je eens zien...</strong> (You should see this... / Take a look at this...)</li>
            </ul>
            <p className="text-sm text-slate-400 italic">"Kijk eens, oom Tjeerd, daar lopen heel kleine pony's in de wei." (Look, Uncle Tjeerd...)</p>
            <p className="text-sm text-slate-400 italic">"Moet je eens zien wat een mooie lucht." (Look at what a beautiful sky).</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Oefeningen (Vocabulary Exercises)",
        isExtra: true,
        questions: generateSmartQuestions(15, "Woordenlijst", 10, chapter15Vocab)
      }
    ]
  },
  {
    id: "15.4",
    chapter: 15,
    title: "15.4 Demonstratief pronomen - Zelfstandig (O / Onu / It)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>👉 Zelfstandig gebruik (Independent Demonstrative Pronoun)</h3>
            <p className="text-sm text-slate-300">We previously used the words <strong>die</strong> and <strong>dat</strong> in front of a noun to say "That book" (Dat boek) or "That car" (Die auto).</p>
            <p className="text-sm text-slate-200 mt-2 font-bold">However, these words can also be used ON THEIR OWN, completely replacing the noun! (Like 'That' or 'Those' in English).</p>

            <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-2">1. DIE (For De-words, People and Plurals)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li><strong>De-woorden:</strong> Wat vind je van de kaas? <strong>Die</strong> vind ik lekker. (What do you think of the cheese? I find <strong>it</strong> tasty.)</li>
                <li><strong>Personen:</strong> Waar is tante Lena? <strong>Die</strong> moest helaas werken. (Where is Aunt Lena? <strong>She</strong> unfortunately had to work.)</li>
                <li><strong>Meervoud (Plurals):</strong> Waar zijn Tom en Marit? <strong>Die</strong> zijn naar de Wandelbeurs. (Where are Tom and Marit? <strong>They</strong> went to the Walking Fair.)</li>
              </ul>
            </div>

            <div className="bg-emerald-900/30 p-4 rounded-xl mt-4 border border-emerald-500/30">
              <h4 className="font-bold text-emerald-300 mb-2">2. DAT (For Het-words and Whole Sentences)</h4>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li><strong>Het-woorden:</strong> We zien het Naardermeer. <strong>Dat</strong> is een prachtig natuurgebied.</li>
                <li><strong>Hele zin (Referring to a whole idea/action):</strong> Je hebt toch wel koffie meegenomen, hè? Ja, natuurlijk heb ik <strong>dat</strong> gedaan. (Yes, of course I did <strong>that</strong>).</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Vul in: die of dat. (Let goed op het woord! / Pay attention to the word!)",
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
        instruction: "Slimme Oefeningen (Smart Exercises): Zelfstandig Pronomen",
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
    title: "15.5 Dit is / zijn, Dat is / zijn (Tanıtmak / İşaret Etmek / Introducing)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>👋 Dit is / Dat zijn (This is / Those are)</h3>
            <p className="text-sm text-slate-300">In Dutch, when introducing a person or pointing out an object, we use <strong>Dit</strong> (close by) or <strong>Dat</strong> (further away) constantly. Whether the word is singular or plural does not change DIT/DAT, it changes <strong>the verb</strong>!</p>
            
            <ul className="text-sm text-slate-200 mt-4 list-disc pl-5 space-y-2">
              <li><strong>Dit is</strong> Amira. (This is Amira.)</li>
              <li><strong>Dit zijn</strong> oom Tjeerd en tante Lena. (These are Uncle Tjeerd and Aunt Lena. -> <em>You NEVER say Deze zijn!</em>)</li>
              <li><strong>Dat is</strong> een prachtig stukje Nederland. (That is a beautiful piece of the Netherlands.)</li>
              <li><strong>Dat zijn</strong> shetlandpony's. (Those are Shetland ponies. -> <em>You NEVER say Die zijn!</em>)</li>
            </ul>

            <div className="bg-rose-900/30 p-3 rounded-lg mt-4 border border-rose-500/30 text-rose-200 text-sm italic">
              <strong>English Logic:</strong> This is... / These are... ➔ Dit is... / Dit zijn...
            </div>
          </div>
        )}
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Een mooie reisherinnering</h3>
            <p className="text-sm text-slate-300">Hollanda Demiryolları (NS) ile yapılan maceralı bir tren yolculuğu:</p>
            <p className="text-sm text-slate-200 mt-2 italic bg-amber-900/20 p-3 rounded border border-amber-500/30">
              "Op zondag 20 december namen mijn vriendin en ik 's morgens de trein van Maastricht naar Amsterdam. Dat was slecht gepland, want net op dat moment lag in het zuiden heel veel sneeuw. In Eindhoven konden we niet verder. We moesten de trein uit om daar te wachten tot er wel een trein ging. Van de NS kregen we gratis koffie en thee en dat hield ons warm. Na lange tijd kwam er een trein, maar verder dan Utrecht ging de reis niet. Onderweg werd duidelijk dat we onze eindbestemming die dag niet konden bereiken... De solidariteit was groot... We hebben nu een mooie reisherinnering. En nieuwe kennissen in Utrecht!"
            </p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Text: A beautiful travel memory</h3>
            <p className="text-sm text-slate-300">An adventurous train journey with the Dutch Railways (NS):</p>
            <p className="text-sm text-slate-200 mt-2 italic bg-amber-900/20 p-3 rounded border border-amber-500/30">
              "On Sunday, December 20, my girlfriend and I took the train from Maastricht to Amsterdam in the morning. That was poorly planned, because exactly at that moment there was a lot of snow in the south. In Eindhoven we couldn't go any further. We had to get off the train to wait there until a train did run. We got free coffee and tea from the NS and that kept us warm. After a long time a train arrived, but the journey didn't go further than Utrecht. On the way it became clear that we could not reach our final destination that day... The solidarity was great... We now have a beautiful travel memory. And new acquaintances in Utrecht!"
            </p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Zet de zinnen in de goede volgorde volgens de tekst (Sıralama / Order).",
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🗣️ Uitspraak: ng – ing – nk (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 14:</strong> In Dutch, ng/nk sounds are nasal (like 'sing' or 'bank' in English).</p>
              <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
                <li><strong>ng:</strong> lang, jong, belangrijk, Engeland, brengen.</li>
                <li><strong>ing:</strong> verdieping, rekening, kleding.</li>
                <li><strong>nk:</strong> bedankt, denken, donker, drinken.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Treinen in Nederland (NS)</h3>
              <p className="text-sm text-slate-300">The Dutch Railways (NS - Nederlandse Spoorwegen) is one of the busiest networks in the world.</p>
              <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
                <li>In de meeste landen zijn de treinen donkerrood of donkergroen (In most countries, trains are dark red or dark green).</li>
                <li>In Nederland zijn de treinen fel <strong>geel</strong> met <strong>blauw</strong> (In the Netherlands, trains are bright <strong>yellow</strong> and <strong>blue</strong>).</li>
                <li>Dutch people are proud of their trains, but they love to complain even about 5-minute delays!</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "15.7_smart_1", type: "multiple_choice", question: "Welke kleuren hebben de treinen (van de NS) in Nederland?", options: ["Donkergroen en wit", "Rood en zwart", "Geel en blauw"], correctAnswer: "Geel en blauw" },
          { id: "15.7_smart_2", type: "multiple_choice", question: "Waarvoor staat de afkorting 'NS' in Nederland?", options: ["Nieuwe Spoorwegen", "Nederlandse Spoorwegen", "Noordelijke Spoorwegen"], correctAnswer: "Nederlandse Spoorwegen" }
        ]
      }
    ]
  },
  {
    id: "On-Class-15",
    chapter: 15,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Herhaling Les 14: Toekomende Tijd (Gelecek Zaman)</h3>
              <p className="text-sm text-slate-300 mb-2">Gelecek zamanı ifade etmek için <strong>zullen/zal</strong> ve <strong>gaan</strong> kalıplarının tekrarı:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Zullen / Zal (Söz & Tahmin)</h4>
                  <p className="text-xs text-slate-400 mb-1">Pattern: Subject + zullen/zal + rest + infinitive</p>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik <strong>zal</strong> een afspraak <strong>maken</strong>. (Söz / Promise)</li>
                    <li>Het <strong>zal</strong> morgen <strong>regenen</strong>. (Tahmin / Prediction)</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Gaan (Plan & Niyet)</h4>
                  <p className="text-xs text-slate-400 mb-1">Pattern: Subject + ga/gaat/gaan + rest + infinitive</p>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik <strong>ga</strong> pizza <strong>eten</strong>. (Niyet / Plan)</li>
                    <li>Ik <strong>ga</strong> buiten <strong>spelen</strong>. (Dışarıda oynayacağım)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>❓ Indirecte Vragen (Dolaylı Sorular)</h3>
              <p className="text-sm text-slate-300 mb-2">Kibar veya dolaylı soru kalıplarında soru cümlesi aynı kalır, <strong>tek fark fiilin cümlenin EN SONUNA yerleştirilmesidir.</strong></p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li>
                  <span className="text-slate-400">Direct:</span> Waar <strong>is</strong> spoor 2? (Peron 2 nerede?)<br/>
                  <span className="text-purple-300">Indirect:</span> Kun je zeggen waar spoor 2 <strong>is</strong>?
                </li>
                <li>
                  <span className="text-slate-400">Direct:</span> <strong>Vertrekt</strong> de trein op tijd? (Tren zamanında kalkıyor mu? - Evet/Hayır sorusu)<br/>
                  <span className="text-purple-300">Indirect:</span> Weet je <strong>of</strong> de trein op tijd <strong>vertrekt</strong>? (Trenin zamanında kalkıp kalkmadığını biliyor musun?)
                </li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>👉 Die & Dat (Tek Başına İşaret Zamirleri)</h3>
              <p className="text-sm text-slate-300 mb-3"><strong>Die</strong> ve <strong>Dat</strong> kelimelerini, ismin yerine geçecek şekilde tek başlarına kullanarak bir şeye, birine veya bütün bir cümleye atıfta bulunabiliriz.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-900/30 p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 mb-2">DIE (De-kelimeleri & İnsanlar)</h4>
                  <ul className="text-sm text-slate-200 space-y-3">
                    <li>
                      <strong>de-words:</strong> Wat vind je van de kaas? (Peyniri nasıl buldun?)<br/>
                      ➔ <strong>Die</strong> vind ik lekker. VEYA Ik vind <strong>hem</strong> lekker. (O lezzetli / Onu sevdim).
                    </li>
                    <li>
                      <strong>personen (kişiler):</strong> Waar is Ashwini?<br/>
                      ➔ <strong>Die</strong> / zij is in de les. (O derste).
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-900/30 p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 mb-2">DAT (Het-kelimeleri & Bütün Cümleler)</h4>
                  <ul className="text-sm text-slate-200 space-y-3">
                    <li>
                      <strong>het-words:</strong> We zien zo het Naardermeer.<br/>
                      ➔ <strong>Dat</strong> / Het is een prachtig natuurgebied. (O harika bir doğa alanıdır).
                    </li>
                    <li>
                      <strong>een hele zin (bütün bir eylem/cümle):</strong> Je hebt toch wel koffie meegenomen? (Kahve getirdin değil mi?)<br/>
                      ➔ Natuurlijk heb ik <strong>dat</strong> gedaan. (Elbette onu yaptım).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🏙️ Vocabulaire: Opdracht 3</h3>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li><strong>het gebouw:</strong> bina (building)</li>
                <li><strong>de kloktoren:</strong> saat kulesi (clock tower)</li>
                <li><strong>de kerk:</strong> kilise (church)</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Review Lesson 14: Future Tense</h3>
              <p className="text-sm text-slate-300 mb-2">Review of using <strong>zullen/zal</strong> and <strong>gaan</strong> to express the future:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Zullen / Zal (Promise & Prediction)</h4>
                  <p className="text-xs text-slate-400 mb-1">Pattern: Subject + zullen/zal + rest + infinitive</p>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik <strong>zal</strong> een afspraak <strong>maken</strong>. (Promise)</li>
                    <li>Het <strong>zal</strong> morgen <strong>regenen</strong>. (Prediction)</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Gaan (Plan & Intention)</h4>
                  <p className="text-xs text-slate-400 mb-1">Pattern: Subject + ga/gaat/gaan + rest + infinitive</p>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik <strong>ga</strong> pizza <strong>eten</strong>. (Plan)</li>
                    <li>Ik <strong>ga</strong> buiten <strong>spelen</strong>. (I am going to play outside)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>❓ Indirect Questions</h3>
              <p className="text-sm text-slate-300 mb-2">For the polite/indirect form of a question, the sentence stays the same, <strong>the only difference is that we place the verb at the END of the sentence.</strong></p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2">
                <li>
                  <span className="text-slate-400">Direct:</span> Waar <strong>is</strong> spoor 2? (Where is platform 2?)<br/>
                  <span className="text-purple-300">Indirect:</span> Kun je zeggen waar spoor 2 <strong>is</strong>?
                </li>
                <li>
                  <span className="text-slate-400">Direct:</span> <strong>Vertrekt</strong> de trein op tijd? (Does the train leave on time?)<br/>
                  <span className="text-purple-300">Indirect:</span> Weet je <strong>of</strong> de trein op tijd <strong>vertrekt</strong>? (Do you know if the train leaves on time?)
                </li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>👉 Die & Dat (Independent Demonstrative Pronouns)</h3>
              <p className="text-sm text-slate-300 mb-3">We can use <strong>die</strong> and <strong>dat</strong> independently to refer to something, someone, or a whole sentence, acting as the subject or object.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-900/30 p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 mb-2">DIE (De-words & People)</h4>
                  <ul className="text-sm text-slate-200 space-y-3">
                    <li>
                      <strong>de-words:</strong> Wat vind je van de kaas? (What do you think of the cheese?)<br/>
                      ➔ <strong>Die</strong> vind ik lekker. OR Ik vind <strong>hem</strong> lekker. (I like that one / I like it).
                    </li>
                    <li>
                      <strong>personen:</strong> Waar is Ashwini?<br/>
                      ➔ <strong>Die</strong> / zij is in de les. (She is in class).
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-900/30 p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-300 mb-2">DAT (Het-words & Whole Sentences)</h4>
                  <ul className="text-sm text-slate-200 space-y-3">
                    <li>
                      <strong>het-words:</strong> We zien zo het Naardermeer.<br/>
                      ➔ <strong>Dat</strong> / Het is een prachtig natuurgebied. (That is a beautiful nature reserve).
                    </li>
                    <li>
                      <strong>een hele zin (a whole sentence/action):</strong> Je hebt toch wel koffie meegenomen? (You did bring coffee, right?)<br/>
                      ➔ Natuurlijk heb ik <strong>dat</strong> gedaan. (Of course I did that).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🏙️ Vocabulary: Opdracht 3</h3>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li><strong>het gebouw:</strong> building</li>
                <li><strong>de kloktoren:</strong> clock tower</li>
                <li><strong>de kerk:</strong> church</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Future Tense (Zullen vs Gaan)",
        isExtra: false,
        questions: [
          { id: "15_onclass_1_1", type: "fill_in", question: "Ik ________ een afspraak maken. (promise)", correctAnswer: "zal" },
          { id: "15_onclass_1_2", type: "fill_in", question: "Ik ________ pizza eten. (plan)", correctAnswer: "ga" },
          { id: "15_onclass_1_3", type: "fill_in", question: "Het ________ morgen regenen. (prediction)", correctAnswer: "zal" },
          { id: "15_onclass_1_4", type: "fill_in", question: "Ik ________ buiten spelen. (intention)", correctAnswer: "ga" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Indirecte Vragen (Indirect Questions)",
        isExtra: false,
        questions: [
          { id: "15_onclass_2_1", type: "fill_in", question: "Waar is spoor 2? ➔ Kun je zeggen waar spoor 2 ________?", correctAnswer: "is" },
          { id: "15_onclass_2_2", type: "fill_in", question: "Vertrekt de trein op tijd? ➔ Weet je ________ de trein op tijd vertrekt?", correctAnswer: "of" },
          { id: "15_onclass_2_3", type: "fill_in", question: "Waar is het gebouw? ➔ Weet je waar het gebouw ________?", correctAnswer: "is" },
          { id: "15_onclass_2_4", type: "multiple_choice", question: "Vertaal: 'Do you know if the bus leaves on time?'", options: ["Weet je of de bus op tijd vertrekken?", "Weet je of de bus op tijd vertrekt?", "Weet je of vertrekt de bus op tijd?"], correctAnswer: "Weet je of de bus op tijd vertrekt?" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Zelfstandig Die en Dat (Independent Die and Dat)",
        isExtra: true,
        questions: [
          { id: "15_onclass_3_1", type: "fill_in", question: "Wat vind je van de kaas? (de kaas) ➔ ________ vind ik lekker.", correctAnswer: "Die" },
          { id: "15_onclass_3_2", type: "fill_in", question: "Waar is Ashwini? ➔ ________ is in de les.", correctAnswer: "Die" },
          { id: "15_onclass_3_3", type: "fill_in", question: "Je hebt toch koffie meegenomen? (Hele zin) ➔ Natuurlijk heb ik ________ gedaan.", correctAnswer: "dat" },
          { id: "15_onclass_3_4", type: "fill_in", question: "We zien zo het Naardermeer. ➔ ________ is een prachtig natuurgebied.", correctAnswer: "Dat" },
          { id: "15_onclass_3_5", type: "multiple_choice", question: "Je ziet een mooie auto (de auto). Wat zeg je?", options: ["Dat vind ik mooi.", "Die vind ik mooi.", "Het vind ik mooi."], correctAnswer: "Die vind ik mooi." }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Woordenschat (Vocabulary - Opdracht 3)",
        isExtra: true,
        questions: [
          { id: "15_onclass_4_1", type: "fill_in", question: "The building = het ________", correctAnswer: "gebouw" },
          { id: "15_onclass_4_2", type: "fill_in", question: "The clock tower = de ________", correctAnswer: "kloktoren" },
          { id: "15_onclass_4_3", type: "fill_in", question: "The church = de ________", correctAnswer: "kerk" }
        ]
      }
    ]
  }
];