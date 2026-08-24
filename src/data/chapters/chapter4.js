// src/data/chapters/chapter4.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter4Vocab = [
  { id: "4_1", chapter: 4, nl: "de straat", en: "street", example: "Bert komt Hans op straat tegen." },
  { id: "4_2", chapter: 4, nl: "vriend", en: "friend", example: "Hans is een vriend van Bert." },
  { id: "4_3", chapter: 4, nl: "komt tegen (tegenkomen)", en: "meets", example: "Ik kom mijn vriend tegen." },
  { id: "4_4", chapter: 4, nl: "hé", en: "hey", example: "Hé Hans, hallo!" },
  { id: "4_5", chapter: 4, nl: "geleden", en: "ago", example: "Dat is lang geleden." },
  { id: "4_6", chapter: 4, nl: "leuk", en: "nice", example: "Wat leuk om je te zien." },
  { id: "4_7", chapter: 4, nl: "prima", en: "wonderful", example: "Met mij gaat het prima." },
  { id: "4_8", chapter: 4, nl: "jou", en: "you", example: "En met jou?" },
  { id: "4_9", chapter: 4, nl: "het gaat wel", en: "all right / so so", example: "Het gaat wel." },
  { id: "4_10", chapter: 4, nl: "problemen (het probleem)", en: "problems", example: "Ik heb problemen met de buren." },
  { id: "4_11", chapter: 4, nl: "buren", en: "neighbours", example: "Mijn buren maken veel lawaai." },
  { id: "4_12", chapter: 4, nl: "niet zo", en: "not so", example: "Dat is nu niet zo belangrijk." },
  { id: "4_13", chapter: 4, nl: "belangrijk", en: "important", example: "Dit is een belangrijk examen." },
  { id: "4_14", chapter: 4, nl: "gaan (gaan)", en: "go", example: "We gaan naar de bioscoop." },
  { id: "4_15", chapter: 4, nl: "de week", en: "week", example: "Deze week heb ik vakantie." },
  { id: "4_16", chapter: 4, nl: "een paar dagen (dag)", en: "a few days", example: "We gaan een paar dagen weg." },
  { id: "4_17", chapter: 4, nl: "Venetië", en: "Venice", example: "We gaan naar Venetië." },
  { id: "4_18", chapter: 4, nl: "wauw", en: "wow", example: "Wauw, Venetië is prachtig." },
  { id: "4_19", chapter: 4, nl: "prachtig", en: "fine / splendid", example: "Het is prachtig weer." },
  { id: "4_20", chapter: 4, nl: "veel", en: "many", example: "Ga je veel foto's maken?" },
  { id: "4_21", chapter: 4, nl: "foto's maken", en: "take photos", example: "Ik wil graag foto's maken." },
  { id: "4_22", chapter: 4, nl: "sinds", en: "since", example: "We hebben sinds gisteren een camera." },
  { id: "4_23", chapter: 4, nl: "nieuw", en: "new", example: "Het is een nieuwe camera." },
  { id: "4_24", chapter: 4, nl: "de camera", en: "camera", example: "Ik heb een camera gekocht." },
  { id: "4_25", chapter: 4, nl: "romantische (romantisch)", en: "romantic", example: "We maken een romantische film." },
  { id: "4_26", chapter: 4, nl: "de film", en: "film", example: "Dat is een goede film." },
  { id: "4_27", chapter: 4, nl: "na", en: "after", example: "Na de vakantie spreken we af." },
  { id: "4_28", chapter: 4, nl: "kijken naar", en: "look at", example: "Kom je kijken naar de film?" },
  { id: "4_29", chapter: 4, nl: "direct", en: "right now", example: "Zullen we direct iets afspreken?" },
  { id: "4_30", chapter: 4, nl: "iets", en: "something", example: "Wil je iets eten?" },
  { id: "4_31", chapter: 4, nl: "afspreken", en: "set a date / make an appointment", example: "Laten we afspreken om 8 uur." },
  { id: "4_32", chapter: 4, nl: "goed", en: "okay / good", example: "Goed, we spreken af." },
  { id: "4_33", chapter: 4, nl: "thuis", en: "at home", example: "Zullen we bij ons thuis afspreken?" },
  { id: "4_34", chapter: 4, nl: "de afspraak", en: "date / appointment", example: "Ik heb al een afspraak." },
  { id: "4_35", chapter: 4, nl: "maken", en: "to make", example: "Zullen we een afspraak maken?" },
  { id: "4_36", chapter: 4, nl: "de datum", en: "date", example: "Welke datum is het dan?" },
  { id: "4_37", chapter: 4, nl: "dat lukt niet (lukken)", en: "that doesn't work", example: "Nee, dat lukt helaas niet." },
  { id: "4_38", chapter: 4, nl: "dan", en: "then", example: "Dan kan ik wel." },
  { id: "4_39", chapter: 4, nl: "kan (kunnen)", en: "can", example: "Zondag kan ik wel." },
  { id: "4_40", chapter: 4, nl: "blijf (blijven)", en: "stay", example: "Blijf je ook eten?" },
  { id: "4_41", chapter: 4, nl: "eten", en: "eat", example: "Wat gaan we eten?" },
  { id: "4_42", chapter: 4, nl: "zal (zullen)", en: "will / shall", example: "Zal ik spaghetti maken?" },
  { id: "4_43", chapter: 4, nl: "de spaghetti carbonara", en: "spaghetti carbonara", example: "Ik maak spaghetti carbonara." },
  { id: "4_44", chapter: 4, nl: "het plan", en: "plan", example: "Ja, lekker. Goed plan." },
  { id: "4_45", chapter: 4, nl: "schrijf (schrijven)", en: "write", example: "Ik schrijf het in mijn agenda." },
  { id: "4_46", chapter: 4, nl: "de agenda", en: "diary / planner", example: "Staat het in je agenda?" },
  { id: "4_47", chapter: 4, nl: "hartstikke", en: "very / completely", example: "Ik ben hartstikke moe." },
  { id: "4_48", chapter: 4, nl: "hartstikke leuk", en: "terrific / fantastic", example: "Dat is hartstikke leuk!" },
  { id: "4_49", chapter: 4, nl: "vind ik ook (vinden)", en: "I think so too", example: "Ja, dat vind ik ook." },
  { id: "4_50", chapter: 4, nl: "ik moet ervandoor", en: "I have to go", example: "Sorry, ik moet ervandoor." },
  { id: "4_51", chapter: 4, nl: "ervandoor", en: "away / off", example: "Ik ga ervandoor." },
  { id: "4_52", chapter: 4, nl: "gauw", en: "quickly", example: "Ik moet nog gauw naar de winkel." },
  { id: "4_53", chapter: 4, nl: "de winkel", en: "shop", example: "Ik ga naar de winkel." },
  { id: "4_54", chapter: 4, nl: "wens (wensen)", en: "wish", example: "Ik wens jullie een fijne vakantie." },
  { id: "4_55", chapter: 4, nl: "jullie", en: "you (plural)", example: "Ik wens jullie succes." },
  { id: "4_56", chapter: 4, nl: "fijne (fijn)", en: "nice / good", example: "Een fijne dag nog!" },
  { id: "4_57", chapter: 4, nl: "doe de groeten aan", en: "give my regards to", example: "Doe de groeten aan Wilma." },
  { id: "4_58", chapter: 4, nl: "volgende", en: "next", example: "Tot volgende week." },
  { id: "4_59", chapter: 4, nl: "tot dan", en: "until then", example: "Tot dan. Doeg." }
];

export const chapter4Dialogues = {
  "4.1": [
    { speaker: "Verteller", text: "De ober, Bert, komt op straat zijn vriend Hans tegen.", translation: "Garson Bert, sokakta arkadaşı Hans ile karşılaşır." },
    { speaker: "Bert", text: "Hé Hans, hallo!", translation: "Hey Hans, merhaba!" },
    { speaker: "Hans", text: "Hé Bert, hoi. Dat is lang geleden, zeg. Wat leuk! Alles goed?", translation: "Hey Bert, selam. Görüşmeyeli uzun zaman oldu. Ne güzel! Her şey yolunda mı?" },
    { speaker: "Bert", text: "Ja, prima. En met jou, hoe is het met jou?", translation: "Evet, harika. Ya seninle, sen nasılsın?" },
    { speaker: "Hans", text: "Het gaat wel. Ik heb problemen met de buren, maar dat is nu niet zo belangrijk. Ik heb vakantie en Wilma en ik gaan deze week een paar dagen naar Venetië.", translation: "İdare eder. Komşularla problemlerim var ama bu şu an pek önemli değil. Tatilim var ve Wilma ile ben bu hafta birkaç günlüğüne Venedik'e gidiyoruz." },
    { speaker: "Bert", text: "Wauw! Venetië is prachtig. Ga je veel foto's maken?", translation: "Vay canına! Venedik muhteşem. Çok fotoğraf çekecek misin?" },
    { speaker: "Hans", text: "Nee, we hebben sinds gisteren een nieuwe camera, dus we gaan een romantische film maken. Kom je na de vakantie naar de film kijken?", translation: "Hayır, dünden beri yeni bir kameramız var, o yüzden romantik bir film çekeceğiz. Tatilden sonra filmi izlemeye gelir misin?" },
    { speaker: "Bert", text: "Ja, leuk. Zullen we direct iets afspreken?", translation: "Evet, güzel. Hemen sözleşelim/randevulaşalım mı?" },
    { speaker: "Hans", text: "Goed. We zijn op vrijdag weer thuis. Zullen we voor zaterdag een afspraak maken?", translation: "Tamam. Cuma günü tekrar evdeyiz. Cumartesi için bir randevu (söz) yapalım mı?" },
    { speaker: "Bert", text: "Welke datum is het dan?", translation: "O gün hangi tarih?" },
    { speaker: "Hans", text: "De 29ste.", translation: "29'u." },
    { speaker: "Bert", text: "Nee, dat lukt niet. Dan heb ik al een afspraak. Zondag 30 augustus kan ik wel.", translation: "Hayır, o olmuyor. O zaman zaten bir randevum var. 30 Ağustos Pazar yapabilirim." },
    { speaker: "Hans", text: "Dat kan ook. Zullen we om 16.00 uur bij ons thuis afspreken? Blijf je ook eten? Zal ik dan spaghetti carbonara maken?", translation: "O da olur. Saat 16.00'da bizim evde sözleşelim mi? Yemeğe de kalır mısın? O zaman spagetti carbonara yapayım mı?" },
    { speaker: "Bert", text: "Ja, lekker. Goed plan. Ik schrijf het straks in mijn agenda. Hartstikke leuk.", translation: "Evet, lezzetli. İyi plan. Bunu birazdan ajandama yazacağım. Çok güzel." },
    { speaker: "Hans", text: "Ja, vind ik ook.", translation: "Evet, ben de öyle düşünüyorum." },
    { speaker: "Bert", text: "Ik moet ervandoor. Ik moet nog gauw even naar de winkel. Ik wens jullie een fijne vakantie. Doe de groeten aan Wilma en tot volgende week zondag.", translation: "Ben kaçmalıyım (gitmeliyim). Çabucak mağazaya gitmem lazım. Size iyi tatiller dilerim. Wilma'ya selam söyle, haftaya pazar görüşürüz." },
    { speaker: "Hans", text: "Doe ik. Tot dan. Doeg.", translation: "Söylerim. O zamana kadar görüşürüz. Hoşça kal." }
  ]
};

export const chapter4Sections = [
  {
    id: "4.1",
    chapter: 4,
    title: "4.1 & 4.2 Dialoog en Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Op straat (Sokakta)</h3>
          <p>Garson Bert, sokakta arkadaşı Hans ile karşılaşır. Birbirlerine hal hatır sorup ("Hoe gaat het?") bir görüşme ayarlarlar (Afspraak maken).</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1' }}>
            <li><strong>Doe de groeten aan...</strong> (Birine) Selam söyle.</li>
            <li><strong>Dat is lang geleden, zeg.</strong> Görüşmeyeli uzun zaman oldu!</li>
            <li><strong>Ik moet ervandoor.</strong> Ben kaçayım / Benim gitmem lazım.</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zijn de volgende zinnen waar of niet waar?",
        isExtra: false,
        questions: [
          { id: "4.1_opd1_1", type: "multiple_choice", question: "1. Bert en Hans hebben elkaar lang niet gezien.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "4.1_opd1_2", type: "multiple_choice", question: "2. Hans en Wilma gaan in Venetië wonen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "4.1_opd1_3", type: "multiple_choice", question: "3. Hans gaat een film maken in de vakantie.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "4.1_opd1_4", type: "multiple_choice", question: "4. Hans en Bert maken een afspraak om samen te eten.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "4.1_opd1_5", type: "multiple_choice", question: "5. Hans en Wilma komen 30 augustus bij Bert eten.", options: ["waar", "niet waar"], correctAnswer: "niet waar" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagojik Okuma Anlaması)",
        isExtra: true,
        questions: [
          { id: "4.1_smart_1", type: "multiple_choice", question: "Waarom gaan Hans en Bert op zondag afspreken en niet op zaterdag?", options: ["Omdat Hans op zaterdag nog in Venetië is.", "Omdat Bert op zaterdag al een afspraak heeft.", "Omdat ze zaterdag geen zin hebben."], correctAnswer: "Omdat Bert op zaterdag al een afspraak heeft." },
          { id: "4.1_smart_2", type: "fill_in", question: "Vertaal uit de tekst: 'Ben kaçayım / Gitmem lazım' -> Ik moet ________.", correctAnswer: "ervandoor" },
          ...generateSmartQuestions(4, "Woordenlijst", 8, chapter4Vocab)
        ]
      }
    ]
  },
  {
    id: "4.3",
    chapter: 4,
    title: "4.3 Vragen en vertellen hoe het gaat",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👋 Nasılsın? (Hoe gaat het?)</h3>
          <p>Hollandacada hal hatır sormak ve cevap vermek için belli kalıplar vardır. <strong>'Het' (O)</strong> kelimesi durumu/hayatı temsil eder.</p>
          
          <h4 className="font-bold text-white mt-4">Vragen (Sormak):</h4>
          <ul style={{ margin: '5px 0', color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Alles goed? (Her şey yolunda mı?)</li>
            <li>Hoe gaat het (met jou / met u)? (Nasıl gidiyor?)</li>
            <li>Hoe is het (met jou / met u)? (Nasılsın?)</li>
          </ul>

          <h4 className="font-bold text-white mt-4">Antwoorden (Cevaplamak):</h4>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-500/30 text-emerald-100 text-sm">
              <p><strong>++ (Çok İyi)</strong></p>
              <p>uitstekend (mükemmel)</p>
              <p>hartstikke goed (harika)</p>
              <p>fantastisch / prima</p>
              <p>heel goed</p>
            </div>
            <div className="bg-rose-900/30 p-3 rounded-xl border border-rose-500/30 text-rose-100 text-sm">
              <p><strong>+ / - (İdare Eder / Kötü)</strong></p>
              <p>goed / best goed (iyi)</p>
              <p>het gaat wel (idare eder, şöyle böyle)</p>
              <p>niet zo (goed) (pek iyi değil)</p>
              <p>slecht (kötü)</p>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Vraag en antwoord in de klas. (Kies de logische reactie)",
        isExtra: false,
        questions: [
          { id: "4.3_opd2_1", type: "multiple_choice", question: "A: Hoe gaat het? -> B: __________. Hoe is het met jou?", options: ["Het gaat wel", "Mijn naam is Bert", "Ik ben 20 jaar"], correctAnswer: "Het gaat wel" },
          { id: "4.3_opd2_2", type: "multiple_choice", question: "C: Prima. En met jou? -> A: _________.", options: ["Ik ben op straat", "Niet zo goed", "Ik kom uit China"], correctAnswer: "Niet zo goed" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Hoe gaat het?",
        isExtra: true,
        questions: [
          { id: "4.3_smart_1", type: "multiple_choice", question: "Iemand vraagt: 'Hoe gaat het met Hans?'. Welk antwoord is correct?", options: ["Hans is goed.", "Het gaat goed met Hans.", "Hans gaat goed."], correctAnswer: "Het gaat goed met Hans." },
          { id: "4.3_smart_2", type: "fill_in", question: "Je voelt je fantastisch. A: 'Alles goed?' -> B: 'Ja, ________!'", correctAnswer: "prima" }
        ]
      }
    ]
  },
  {
    id: "4.4",
    chapter: 4,
    title: "4.4 Zullen (1) - Voorstel (Öneri/Teklif)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>💡 Zullen we...? / Zal ik...? (Yapalım mı? / Yapayım mı?)</h3>
          <p>Karşımızdakine bir fikir sunarken veya teklifte bulunurken <strong>zullen</strong> (we) veya <strong>zal</strong> (ik) modal fiilini kullanırız.</p>
          <p className="mt-2 text-sm text-slate-300"><em>(Not: Zullen kelimesi normalde 'will' (gelecek zaman) anlamına gelse de, soru cümlesinde 'shall' (teklif) anlamına gelir.)</em></p>
          
          <ul className="mt-3 text-sm text-slate-200 list-disc pl-5 space-y-2">
            <li><strong>Zullen we</strong> iets afspreken? (Bir şeyler planlayalım mı? / Randevulaşalım mı?)</li>
            <li><strong>Zullen we</strong> om 16.00 uur afspreken? (Saat 16.00'da buluşalım mı?)</li>
            <li><strong>Zal ik</strong> dan spaghetti maken? (O zaman spagetti yapayım mı?)</li>
          </ul>

          <div className="bg-emerald-900/30 p-3 rounded-xl mt-4 border border-emerald-500/50">
            <h4 className="font-bold text-emerald-300">⚠️ KURAL: Modal Fiil (Zullen) + Sonda Mastar (Infinitief)</h4>
            <p className="text-sm text-emerald-100">Modal fiil ('zullen' veya 'zal') her zaman 1. veya 2. sıradadır. Asıl fiil (afspreken, maken) cümlenin <strong>en sonuna</strong> ve çekimlenmemiş (mastar/infinitief) haliyle gider.</p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Reageer met Zal ik...? / Zullen we...? (Gebruik de woorden)",
        isExtra: false,
        questions: [
          { id: "4.4_opd3_1", type: "fill_in", question: "1. Ik wil op vakantie! -> ________ een paar dagen naar Parijs gaan?", correctAnswer: "Zullen we" },
          { id: "4.4_opd3_2", type: "fill_in", question: "2. Dit is een leuk café! -> ________ hier iets drinken?", correctAnswer: "Zullen we" },
          { id: "4.4_opd3_3", type: "fill_in", question: "3. Waar zijn Bart en Astrid? -> ________ in de kantine kijken?", correctAnswer: "Zullen we" },
          { id: "4.4_opd3_4", type: "fill_in", question: "4. Ik wil afrekenen. -> ________ de ober roepen?", correctAnswer: "Zal ik" },
          { id: "4.4_opd3_5", type: "fill_in", question: "5. Wat zeg je? Wat is je naam? -> ________ mijn naam spellen?", correctAnswer: "Zal ik" },
          { id: "4.4_opd3_6", type: "fill_in", question: "6. Hé Hans, lang niet gezien! -> ________ een afspraak maken?", correctAnswer: "Zullen we" },
          { id: "4.4_opd3_7", type: "fill_in", question: "7. Wat eten we? -> ________ spaghetti maken?", correctAnswer: "Zal ik" },
          { id: "4.4_opd3_8", type: "fill_in", question: "8. Edit is jarig. -> ________ een boek geven?", correctAnswer: "Zullen we" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Zullen & Zal",
        isExtra: true,
        questions: [
          { id: "4.4_smart_1", type: "multiple_choice", question: "Kies de juiste zin (Let op de positie van het tweede werkwoord):", options: ["Zullen we maken een afspraak?", "Zullen we een afspraak maken?", "We zullen een afspraak maken?"], correctAnswer: "Zullen we een afspraak maken?" },
          { id: "4.4_smart_2", type: "fill_in", question: "Je ziet dat je docent het koud heeft. Je wilt het raam (pencere) sluiten. Je vraagt: '________ het raam sluiten?'", correctAnswer: "Zal ik" }
        ]
      }
    ]
  },
  {
    id: "4.5",
    chapter: 4,
    title: "4.5 & 4.6 Een afspraak maken en Reageren",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>📅 Een afspraak maken (Randevu ayarlamak)</h3>
          <p className="text-sm text-slate-300">Birini davet etmek veya beraber bir şey yapmayı sormak:</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Ga je mee</strong> naar het café? (Kafeye (benimle) gelir misin?)</li>
            <li><strong>Heb je zin om</strong> te eten? (Yemek yemeye canın istiyor mu / hevesin var mı?)</li>
          </ul>

          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-300 mb-2">💡 ON-CLASS: "Ik vind leuk" vs "Ik heb zin in"</h4>
            <p className="text-sm text-cyan-100"><strong>Ik vind leuk = I like</strong> (Genel beğeni. Örn: "Ik vind zwemmen leuk" - Yüzmeyi severim).</p>
            <p className="text-sm text-cyan-100 mt-1"><strong>Ik heb zin in = I feel like</strong> (Şu anki istek/heves. Örn: "Ik heb zin in koffie" - Canım kahve çekiyor / "Heb je zin om naar de bioscoop te gaan?" - Sinemaya gitmek ister misin?).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-900/20 p-4 rounded-xl border-l-4 border-emerald-500">
            <h4 className="font-bold text-emerald-300 mb-2">✅ Positief reageren</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>Ja, leuk!</li>
              <li>Ja, goed idee.</li>
              <li>Ja, dat kan.</li>
              <li>Ja, dat is goed.</li>
              <li>Hartstikke leuk.</li>
            </ul>
          </div>
          <div className="bg-rose-900/20 p-4 rounded-xl border-l-4 border-rose-500">
            <h4 className="font-bold text-rose-300 mb-2">❌ Negatief reageren</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>Nee, dat lukt (helaas) niet. (Olmuyor/Mümkün değil)</li>
              <li>Nee, dan kan ik niet. (O zaman yapamam)</li>
              <li>Nee, ik heb al een afspraak. (Zaten randevum var)</li>
              <li>Nee, ik heb geen zin. (Canım istemiyor)</li>
              <li>Nee, dat vind ik niet zo leuk.</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Reageer positief of negatief op de voorstellen.",
        isExtra: false,
        questions: [
          { id: "4.6_opd4_1", type: "multiple_choice", question: "Zal ik spaghetti carbonara maken? (reageer positief)", options: ["Ja, lekker / Goed idee.", "Nee, dat lukt niet."], correctAnswer: "Ja, lekker / Goed idee." },
          { id: "4.6_opd4_2", type: "multiple_choice", question: "Zullen we voor zaterdag een afspraak maken? (reageer negatief)", options: ["Ja, dat is goed.", "Nee, dan kan ik niet / dat lukt niet."], correctAnswer: "Nee, dan kan ik niet / dat lukt niet." },
          { id: "4.6_opd4_3", type: "multiple_choice", question: "Heb je zin om naar de bioscoop te gaan? (negatief)", options: ["Ja, hartstikke leuk.", "Nee, ik heb geen zin."], correctAnswer: "Nee, ik heb geen zin." }
        ]
      },
      {
        instruction: "Opdracht 6: Woorden invullen (Welke woorden passen in deze zinnen?)",
        isExtra: false,
        questions: [
          { id: "4.6_opd6_1", type: "fill_in", question: "1. Kun je om 16.00 uur komen? Ja, ________ kan.", correctAnswer: "dat" },
          { id: "4.6_opd6_2", type: "fill_in", question: "2. Ik moet ervandoor. ________ de groeten aan je ouders.", correctAnswer: "Doe" },
          { id: "4.6_opd6_3", type: "fill_in", question: "3. Kun je woensdag de 8ste? Nee, ________ kan ik niet.", correctAnswer: "dan" },
          { id: "4.6_opd6_4", type: "fill_in", question: "4. Ik ga naar het café. Gaat Susy ________ naar het café?", correctAnswer: "mee" },
          { id: "4.6_opd6_5", type: "fill_in", question: "5. Alles goed? Ja, prima. En ________ jou?", correctAnswer: "met" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Zin hebben in vs Leuk vinden",
        isExtra: true,
        questions: [
          { id: "4.6_smart_1", type: "multiple_choice", question: "Je bent heel moe. Je vriend vraagt: 'Ga je mee naar het café?'. Wat antwoord je?", options: ["Nee, ik vind het café niet leuk.", "Nee, ik heb geen zin.", "Nee, dat is een goed idee."], correctAnswer: "Nee, ik heb geen zin." },
          { id: "4.6_smart_2", type: "multiple_choice", question: "Wat is het verschil tussen 'Ik vind koffie lekker' en 'Ik heb zin in koffie'?", options: ["'Zin in' means I want it right now. 'Lekker' means I generally like it.", "There is no difference.", "'Lekker' is only for food, 'zin in' is for drinks."], correctAnswer: "'Zin in' means I want it right now. 'Lekker' means I generally like it." }
        ]
      }
    ]
  },
  {
    id: "4.7",
    chapter: 4,
    title: "4.7 Tekst: Openingstijden (Açılış Saatleri)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Secretariaat Talencentrum</h3>
          <p className="text-sm text-slate-200 p-4 bg-amber-900/20 rounded-xl border border-amber-500/30">
            <strong>Secretariaat Talencentrum, Rijksuniversiteit Groningen</strong><br/>
            Openingstijden van het secretariaat: maandag t/m vrijdag 12.00-16.00 uur, donderdag 12.00-20.00 uur.<br/>
            Het secretariaat is op werkdagen van 9.00 tot 17.00 uur telefonisch bereikbaar, tel. 050-3635802.
          </p>
          <p className="text-xs text-slate-400 mt-2"><em>Not: "t/m" (tot en met) = 'den 'e kadar (pazartesiden cumaya kadar) anlamına gelir.</em></p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Je werkt elke dag tot 17.00 uur. Wanneer kun je naar het secretariaat?",
        isExtra: false,
        questions: [
          { id: "4.7_opd8_1", type: "multiple_choice", question: "Je werkt tot 17.00 uur. Wanneer is het secretariaat nog open voor jou om langs te gaan?", options: ["Op woensdag", "Op donderdag", "In het weekend"], correctAnswer: "Op donderdag" },
          { id: "4.7_opd8_2", type: "multiple_choice", question: "Kun je op dinsdag om 10.00 uur het secretariaat bellen (telefoneren)?", options: ["Ja", "Nee"], correctAnswer: "Ja" }
        ]
      }
    ]
  },
  {
    id: "4.8",
    chapter: 4,
    title: "4.8 Uitspraak & Cultuur",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: e – ee</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 9 & 10:</strong> Hollandacada kısa 'e' (örn: zes, wel, hebben, tekst, zeggen) ile uzun 'ee' (örn: twee, wensen, geven, tegen, nemen) arasındaki fark çok belirgindir. 
          <br/><em>Not: "nemen, geven" gibi kelimeler yazılışta tek 'e' gibi görünse de (açık hece olduğu için) uzun 'ee' olarak okunurlar!</em></p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur & In de praktijk: Afspraken</h3>
          <p className="text-sm text-slate-300"><strong>De Afspraakencultuur (Randevu Kültürü):</strong> Hollanda'da spontane (habersiz) ziyaretler yaygın değildir. Arkadaşla kahve içmek, aileyle yemek yemek ve hatta büyükanneyi ziyaret etmek için bile önceden <strong>afspraak (randevu)</strong> yapılır.</p>
          <ul className="mt-3 text-sm text-slate-200 list-disc pl-5">
            <li>Voor welke activiteiten maak je een afspraak in jouw land? (Kendi ülkende hangileri için randevu yaparsın?)</li>
            <li><em>naar een café gaan met een vriend (ja/nee)</em></li>
            <li><em>eten bij vrienden / familie (ja/nee)</em></li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "4.8_smart_1", type: "multiple_choice", question: "Welk woord heeft een KORTE 'e' klank?", options: ["geven", "zes", "tegen"], correctAnswer: "zes" },
          { id: "4.8_smart_2", type: "multiple_choice", question: "In Nederland ga je op zondag bij je vriendin op bezoek. Wat is de regel?", options: ["Je gaat gewoon naar haar huis (spontaan).", "Je maakt eerst een afspraak (bellen/appen).", "Je neemt altijd bloemen mee."], correctAnswer: "Je maakt eerst een afspraak (bellen/appen)." }
        ]
      }
    ]
  },
  {
    id: "On-Class-4",
    chapter: 4,
    title: "On-Class Extra: Inversie & Zinsbouw",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Grammatica: Inversie (Tersine Çevirme)</h3>
          
          <p className="text-sm text-slate-300 mb-2">Hollandacada sorular için VE cümleye <strong>özne olmayan</strong> bir şeyle (Örn: Vandaag, Morgen, Deze week) başladığımızda inversiyon (devrik yapı) kullanırız.</p>
          
          <h4 className="font-bold text-white mt-4">Kural (Pattern):</h4>
          <p className="text-sm font-mono text-emerald-300 bg-emerald-900/30 p-2 rounded border border-emerald-500/30">
            [Moment/Place] + [Verb] + [Subject] + [Rest]
          </p>
          
          <ul className="text-sm text-slate-300 mt-3 space-y-1 list-disc pl-5">
            <li><strong>Vandaag</strong> (moment) <strong>studeer</strong> (verb) <strong>ik</strong> (subject) Nederlands.</li>
            <li><strong>Morgen</strong> (moment) <strong>drink</strong> (verb) <strong>ik</strong> (subject) een biertje.</li>
            <li><strong>Deze week</strong> (moment) <strong>ga</strong> (verb) <strong>ik</strong> (subject) naar het park.</li>
          </ul>

          <h4 className="font-bold text-rose-400 mt-5">Hoe vind je het subject? (Özneyi nasıl buluruz?)</h4>
          <p className="text-sm text-slate-300">Özne (Subject), fiili yapan kişidir. "Ik ga naar het park." -> Kim gidiyor? <strong>IK!</strong> Demek ki özne 'ik'. Eğer cümlenin başına 'Vandaag' koyarsak, 'ik' ile 'ga' yer değiştirir ➔ <em>Vandaag ga ik naar het park.</em></p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen: Maak de zin met Inversie!",
        isExtra: true,
        questions: [
          { id: "4_onclass_1", type: "fill_in", question: "Normaal: Ik koop vandaag een appel. Begin met Vandaag: 'Vandaag ________ ik een appel.'", correctAnswer: "koop" },
          { id: "4_onclass_2", type: "fill_in", question: "Normaal: Ik studeer vandaag Nederlands. Begin met Vandaag: 'Vandaag ________ ik Nederlands.'", correctAnswer: "studeer" },
          { id: "4_onclass_3", type: "fill_in", question: "Normaal: Ik ga op maandag naar school. Begin met Op maandag: 'Op maandag ________ ik naar school.'", correctAnswer: "ga" }
        ]
      }
    ]
  }
];