// src/data/chapters/chapter7.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter7Vocab = [
  { id: "7_1", chapter: 7, nl: "de kledingzaak", en: "clothes shop", example: "Sandra is in een kledingzaak." },
  { id: "7_2", chapter: 7, nl: "de kleding", en: "clothes", example: "Ik koop nieuwe kleding." },
  { id: "7_3", chapter: 7, nl: "de zaak", en: "shop / store", example: "Deze zaak heeft mooie kleren." },
  { id: "7_4", chapter: 7, nl: "om ... te", en: "(in order) to", example: "Ik ben hier om een broek te kopen." },
  { id: "7_5", chapter: 7, nl: "de broek", en: "trousers", example: "Ik zoek een mooie broek." },
  { id: "7_6", chapter: 7, nl: "kopen", en: "buy", example: "Ik wil deze schoenen kopen." },
  { id: "7_7", chapter: 7, nl: "de verkoopster", en: "saleswoman", example: "De verkoopster helpt mij." },
  { id: "7_8", chapter: 7, nl: "helpen", en: "help", example: "Kan ik jullie helpen?" },
  { id: "7_9", chapter: 7, nl: "het meisje", en: "girl", example: "Het meisje kijkt alleen even." },
  { id: "7_10", chapter: 7, nl: "de jongen", en: "boy", example: "De jongen zoekt een T-shirt." },
  { id: "7_11", chapter: 7, nl: "zoek (zoeken)", en: "am looking", example: "Ik zoek een spijkerbroek." },
  { id: "7_12", chapter: 7, nl: "de spijkerbroek", en: "jeans", example: "Een blauwe spijkerbroek." },
  { id: "7_13", chapter: 7, nl: "de maat", en: "size", example: "Welke maat hebt u?" },
  { id: "7_14", chapter: 7, nl: "normaal", en: "usually", example: "Ik heb normaal maat 40." },
  { id: "7_15", chapter: 7, nl: "soms", en: "sometimes", example: "Soms groter, soms kleiner." },
  { id: "7_16", chapter: 7, nl: "groter (groot)", en: "larger", example: "Hebt u een grotere maat?" },
  { id: "7_17", chapter: 7, nl: "de kleur", en: "colour", example: "Welke kleur wilt u?" },
  { id: "7_18", chapter: 7, nl: "wat voor", en: "what kind of", example: "Wat voor model zoekt u?" },
  { id: "7_19", chapter: 7, nl: "het model", en: "style / model", example: "Een laag model." },
  { id: "7_20", chapter: 7, nl: "lichte (licht)", en: "light", example: "Ik wil een lichte spijkerbroek." },
  { id: "7_21", chapter: 7, nl: "laag", en: "low", example: "Een laag model." },
  { id: "7_22", chapter: 7, nl: "verschillende (verschillend)", en: "different", example: "Twee verschillende merken." },
  { id: "7_23", chapter: 7, nl: "merken (het merk)", en: "brand", example: "Ik heb spijkerbroeken van twee merken." },
  { id: "7_24", chapter: 7, nl: "probeert (proberen)", en: "try on", example: "Probeert u ze allebei maar." },
  { id: "7_25", chapter: 7, nl: "allebei", en: "both", example: "Ik pas ze allebei." },
  { id: "7_26", chapter: 7, nl: "ergens", en: "somewhere", example: "Waar kan ik ze ergens passen?" },
  { id: "7_27", chapter: 7, nl: "passen", en: "try on / fit", example: "Kan ik dit passen?" },
  { id: "7_28", chapter: 7, nl: "paskamers (de paskamer)", en: "changing rooms", example: "Daar zijn de paskamers." },
  { id: "7_29", chapter: 7, nl: "zitten", en: "fit", example: "Hoe zitten ze?" },
  { id: "7_30", chapter: 7, nl: "beter (goed)", en: "better", example: "Deze zit beter dan de andere." },
  { id: "7_31", chapter: 7, nl: "dan", en: "than", example: "Beter dan die." },
  { id: "7_32", chapter: 7, nl: "die", en: "that", example: "Die andere broek." },
  { id: "7_33", chapter: 7, nl: "hem", en: "it (him)", example: "Ik vind hem wel een beetje wijd." },
  { id: "7_34", chapter: 7, nl: "wijd", en: "wide / loose", example: "De broek is te wijd." },
  { id: "7_35", chapter: 7, nl: "kleinere (klein)", en: "smaller", example: "Hebt u een kleinere maat?" },
  { id: "7_36", chapter: 7, nl: "het spijt me", en: "I'm sorry", example: "Het spijt me, we hebben hem niet meer." },
  { id: "7_37", chapter: 7, nl: "kleinste (klein)", en: "smallest", example: "Dit is de kleinste maat." },
  { id: "7_38", chapter: 7, nl: "dit", en: "this", example: "Dit model is mooi." },
  { id: "7_39", chapter: 7, nl: "eventueel", en: "if necessary", example: "Kan ik hem eventueel nog ruilen?" },
  { id: "7_40", chapter: 7, nl: "ruilen", en: "exchange", example: "Je kunt de kleding ruilen." },
  { id: "7_41", chapter: 7, nl: "binnen", en: "within", example: "Binnen veertien dagen." },
  { id: "7_42", chapter: 7, nl: "de bon", en: "receipt", example: "Met de bon kun je ruilen." },
  { id: "7_43", chapter: 7, nl: "T-shirts (het T-shirt)", en: "T-shirts", example: "Ik wil ook graag een paar T-shirts." },
  { id: "7_44", chapter: 7, nl: "liggen", en: "are (lie)", example: "Hier liggen de T-shirts." },
  { id: "7_45", chapter: 7, nl: "allerlei", en: "all kinds of", example: "We hebben ze in allerlei kleuren." },
  { id: "7_46", chapter: 7, nl: "wit", en: "white", example: "Een wit T-shirt." },
  { id: "7_47", chapter: 7, nl: "zwart", en: "black", example: "Een zwarte broek." },
  { id: "7_48", chapter: 7, nl: "roze", en: "pink", example: "Een roze trui." },
  { id: "7_49", chapter: 7, nl: "groen", en: "green", example: "Ik vind groen mooi." },
  { id: "7_50", chapter: 7, nl: "blauw", en: "blue", example: "Een donkerblauwe jas." },
  { id: "7_51", chapter: 7, nl: "beslissen", en: "decide", example: "Ik kan altijd zo moeilijk beslissen." },
  { id: "7_52", chapter: 7, nl: "staat me het best (staan)", en: "suits me best", example: "Dit shirt staat me het best." },
  { id: "7_53", chapter: 7, nl: "het best (goed)", en: "best", example: "Dat is het best." },
  { id: "7_54", chapter: 7, nl: "pinnen", en: "pay by debit card", example: "Kan ik pinnen?" }
];

export const chapter7Dialogues = {
  "7.1": [
    { speaker: "Verteller", text: "De serveerster, Sandra, is in een kledingzaak om een broek te kopen.", translation: "Garson olan Sandra, bir pantolon satın almak için giyim mağazasındadır." },
    { speaker: "Verkoopster", text: "Kan ik jullie helpen?", translation: "Size (çoğul) yardım edebilir miyim?" },
    { speaker: "Meisje en jongen", text: "Nee, we kijken alleen even.", translation: "Hayır, biz sadece bakıyoruz." },
    { speaker: "Sandra", text: "Kunt u mij helpen? Ik zoek een spijkerbroek.", translation: "Bana yardım edebilir misiniz? Bir kot pantolon arıyorum." },
    { speaker: "Verkoopster", text: "Welke maat hebt u?", translation: "Bedeniniz nedir? (Hangi bedene sahipsiniz?)" },
    { speaker: "Sandra", text: "Ik heb normaal maat 40, soms groter.", translation: "Normalde 40 bedenim, bazen daha büyük." },
    { speaker: "Verkoopster", text: "Welke kleur en wat voor model wilt u?", translation: "Hangi renk ve nasıl bir model istiyorsunuz?" },
    { speaker: "Sandra", text: "Ik wil graag een lichte spijkerbroek, een laag model.", translation: "Açık renkli, düşük bel (düşük model) bir kot pantolon istiyorum lütfen." },
    { speaker: "Verkoopster", text: "Ik geef u twee spijkerbroeken van twee verschillende merken. Probeert u ze allebei maar even.", translation: "Size iki farklı markadan iki kot pantolon veriyorum. İkisini de bir deneyin." },
    { speaker: "Sandra", text: "Waar kan ik ze ergens passen?", translation: "Bunları nerede deneyebilirim?" },
    { speaker: "Verkoopster", text: "Daar zijn de paskamers.", translation: "Deneme kabinleri orada." },
    { speaker: "Verkoopster", text: "En, hoe zitten ze?", translation: "(Biraz sonra) Ee, nasıl oldular? (Nasıl oturdular?)" },
    { speaker: "Sandra", text: "Deze broek zit beter dan die andere broek. Ik vind hem wel een beetje wijd. Hebt u hem in een kleinere maat?", translation: "Bu pantolon diğer pantolondan daha iyi oldu. Ama onu biraz bol buldum. Bunun daha küçük bedeni var mı?" },
    { speaker: "Verkoopster", text: "Het spijt me. Ik heb hem niet in een kleinere maat. Dit is de kleinste maat van dit model.", translation: "Üzgünüm. Bunun daha küçük bedeni elimde yok. Bu modelin en küçük bedeni bu." },
    { speaker: "Sandra", text: "Ik neem hem toch. Kan ik hem eventueel nog ruilen?", translation: "Onu yine de (her şeye rağmen) alıyorum. Gerekirse onu değiştirebilir miyim?" },
    { speaker: "Verkoopster", text: "Ja hoor. Binnen 14 dagen, met de bon.", translation: "Evet tabii ki. Fişiyle birlikte 14 gün içinde." },
    { speaker: "Sandra", text: "Ik wil ook nog graag een paar T-shirts.", translation: "Bir de birkaç tişört istiyorum lütfen." },
    { speaker: "Verkoopster", text: "Hier liggen de T-shirts. Ik heb ze in allerlei kleuren: wit, zwart, rood, roze, groen en blauw.", translation: "Tişörtler burada duruyor. Onların her türlü rengi elimde var: beyaz, siyah, kırmızı, pembe, yeşil ve mavi." },
    { speaker: "Sandra", text: "Ik neem een wit en een rood T-shirt. Of toch een roze? Ik kan altijd zo moeilijk beslissen. Dit roze shirt staat me het best. Ik neem dus deze spijkerbroek en deze twee T-shirts. Kan ik pinnen?", translation: "Bir beyaz ve bir kırmızı tişört alıyorum. Ya da vazgeçtim pembe mi olsa? Her zaman karar vermekte o kadar zorlanıyorum ki. Bu pembe tişört bana en iyi yakıştı. Yani bu kot pantolonu ve bu iki tişörtü alıyorum. Kartla (pin ile) ödeyebilir miyim?" }
  ]
};

export const chapter7Sections = [
  {
    id: "7.1",
    chapter: 7,
    title: "7.1 & 7.2 Dialoog en Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In een kledingzaak (Giyim Mağazasında)</h3>
          <p>Sandra giyim mağazasında bir kot pantolon (spijkerbroek) ve tişört arıyor. Mağaza çalışanının (verkoopster) sorduğu kalıplara dikkat et:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Kan ik jullie helpen?</strong> (Size yardım edebilir miyim?) ➔ <em>Nee, we kijken alleen even. (Hayır, sadece bakıyoruz.)</em></li>
            <li><strong>Welke maat hebt u?</strong> (Bedeniniz nedir?) ➔ <em>Ik heb normaal maat 40.</em></li>
            <li><strong>Kan ik pinnen?</strong> (Kartla ödeyebilir miyim?)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Kies het goede vervolg: a of b.",
        isExtra: false,
        questions: [
          { id: "7.1_opd1_1", type: "multiple_choice", question: "1. Sandra wil...", options: ["a) een spijkerbroek kopen.", "b) alleen even kijken."], correctAnswer: "a) een spijkerbroek kopen." },
          { id: "7.1_opd1_2", type: "multiple_choice", question: "2. Sandra heeft...", options: ["a) maat 42.", "b) maat 40."], correctAnswer: "b) maat 40." },
          { id: "7.1_opd1_3", type: "multiple_choice", question: "3. Sandra past...", options: ["a) twee spijkerbroeken.", "b) een lichte spijkerbroek."], correctAnswer: "a) twee spijkerbroeken." },
          { id: "7.1_opd1_4", type: "multiple_choice", question: "4. Sandra vindt de tweede broek...", options: ["a) een beetje wijd.", "b) een beetje klein."], correctAnswer: "a) een beetje wijd." },
          { id: "7.1_opd1_5", type: "multiple_choice", question: "5. Sandra koopt uiteindleijk...", options: ["a) een wit en een roze T-shirt.", "b) een wit, een rood en een roze T-shirt."], correctAnswer: "a) een wit en een roze T-shirt." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Woorden in de context",
        isExtra: true,
        questions: [
          { id: "7.1_smart_1", type: "fill_in", question: "Als je iets terug naar de winkel wilt brengen, vraag je: Kan ik hem eventueel nog ________?", correctAnswer: "ruilen" },
          { id: "7.1_smart_2", type: "fill_in", question: "Als je gaat ruilen, moet je het papiertje laten zien. Dat is de ________.", correctAnswer: "bon" },
          ...generateSmartQuestions(7, "Woordenlijst", 4, chapter7Vocab)
        ]
      }
    ]
  },
  {
    id: "7.3",
    chapter: 7,
    title: "7.3 Kleuren en 7.4 Kleding",
    theory: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🎨 Kleuren (Renkler)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><strong>wit</strong> (beyaz), <strong>zwart</strong> (siyah)</li>
              <li><strong>grijs</strong> (gri), <strong>bruin</strong> (kahverengi)</li>
              <li><strong>rood</strong> (kırmızı), <strong>roze</strong> (pembe)</li>
              <li><strong>blauw</strong> (mavi), <strong>paars</strong> (mor)</li>
              <li><strong>geel</strong> (sarı), <strong>oranje</strong> (turuncu)</li>
              <li><strong>groen</strong> (yeşil)</li>
            </ul>
            <p className="mt-3 text-xs text-purple-200"><strong>Extra:</strong> donkerblauw (koyu mavi), lichtgeel (açık sarı), effen (düz renk), geruit (kareli), gestreept (çizgili).</p>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>👕 Kleding (Kıyafetler)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><strong>de broek / de spijkerbroek</strong> (pantolon / kot)</li>
              <li><strong>het T-shirt / het overhemd</strong> (tişört / gömlek)</li>
              <li><strong>de trui</strong> (kazak / kazak)</li>
              <li><strong>de bloes</strong> (bluz)</li>
              <li><strong>de rok / de jurk</strong> (etek / elbise)</li>
              <li><strong>de jas / het pak</strong> (mont / takım elbise)</li>
              <li><strong>de schoenen</strong> (ayakkabılar)</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Kleur en Kleding",
        isExtra: true,
        questions: [
          { id: "7.3_smart_1", type: "fill_in", question: "Vertaal: 'Ben pembe bir elbise arıyorum.' -> Ik zoek een ________ jurk.", correctAnswer: "roze" },
          { id: "7.3_smart_2", type: "multiple_choice", question: "Wat is 'de jas' in het Engels of Turks?", options: ["the dress / elbise", "the coat / mont", "the skirt / etek"], correctAnswer: "the coat / mont" },
          { id: "7.3_smart_3", type: "multiple_choice", question: "Welke kleding draag je op je benen?", options: ["De trui", "De bloes", "De spijkerbroek"], correctAnswer: "De spijkerbroek" }
        ]
      }
    ]
  },
  {
    id: "7.5",
    chapter: 7,
    title: "7.5 t/m 7.6 De maat, model, en passen",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>👖 Winkelen Zinnen (Alışveriş Cümleleri)</h3>
          <p className="text-sm text-slate-300">Mağazada kendinizi ifade etmek için bu kalıpları mutlaka bilin:</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
            <li><strong>Welke maat hebt u?</strong> ➔ Ik heb maat 40.</li>
            <li><strong>Hebt u hem in een kleinere / grotere maat?</strong> (Bunun daha küçük/büyük bedeni var mı?)</li>
            <li><strong>Hebt u deze broek ook in het zwart?</strong> (Bu pantolonun siyahı da var mı?)</li>
            <li><strong>Waar kan ik ze passen?</strong> (Bunları nerede deneyebilirim?) ➔ Daar zijn de <strong>paskamers</strong>.</li>
            <li><strong>Hoe zitten ze?</strong> (Nasıl oturdular / oldular?)</li>
            <li>Hij is te <strong>wijd</strong> (bol), te <strong>strak</strong> (dar), hij <strong>zit goed</strong> (iyi oldu).</li>
            <li>Dit shirt <strong>staat me</strong> het best. (Bu tişört bana en iyi <strong>yakıştı</strong>.)</li>
          </ul>

          <div className="bg-emerald-900/40 p-3 rounded mt-4 border border-emerald-500/40">
            <h4 className="font-bold text-emerald-300">💡 ON-CLASS: 'Zitten' vs 'Staan'</h4>
            <p className="text-xs text-emerald-100"><strong>Zitten:</strong> Kıyafetin fiziksel olarak bedenine nasıl oturduğunu (dar/bol vb.) belirtir. <em>(Hij zit te strak).</em></p>
            <p className="text-xs text-emerald-100"><strong>Staan:</strong> Kıyafetin sana görsel olarak yakışıp yakışmadığını belirtir. <em>(Dat shirt staat me goed! - O tişört bana çok yakıştı).</em></p>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Bedenk vragen bij de volgende antwoorden.",
        isExtra: false,
        questions: [
          { id: "7.6_opd4_1", type: "multiple_choice", question: "Antwoord: 'Ik heb maat 42.' Wat was de vraag?", options: ["Waar kan ik dit passen?", "Welke maat hebt u?", "Hebt u deze ook in het zwart?"], correctAnswer: "Welke maat hebt u?" },
          { id: "7.6_opd4_2", type: "multiple_choice", question: "Antwoord: 'Nee, het spijt me, dit is de grootste maat.' Wat was de vraag?", options: ["Hebt u deze in een grotere maat?", "Hoe zit de broek?", "Wat voor model zoekt u?"], correctAnswer: "Hebt u deze in een grotere maat?" },
          { id: "7.6_opd4_3", type: "multiple_choice", question: "Antwoord: 'De paskamers zijn daar, bij het raam.' Wat was de vraag?", options: ["Waar kan ik dit passen?", "Kan ik pinnen?", "Welk merk zoekt u?"], correctAnswer: "Waar kan ik dit passen?" },
          { id: "7.6_opd4_4", type: "multiple_choice", question: "Antwoord: 'Nee, de jurk zit niet goed, hij is te klein.' Wat was de vraag?", options: ["Welke kleur jurk wilt u?", "Zit de jurk goed? / Hoe zit hij?", "Hebt u hem in een kleinere maat?"], correctAnswer: "Zit de jurk goed? / Hoe zit hij?" }
        ]
      },
      {
        instruction: "Opdracht 5: Modale werkwoorden invullen (kan, wil, zal, kunt, enz.)",
        isExtra: false,
        questions: [
          { id: "7.6_opd5_1", type: "fill_in", question: "________ ik u helpen? Nee, wij kijken alleen even.", correctAnswer: "Kan" },
          { id: "7.6_opd5_2", type: "fill_in", question: "________ u een donkere of lichte spijkerrok? Liever een lichte.", correctAnswer: "Wilt" },
          { id: "7.6_opd5_3", type: "fill_in", question: "Dat is dan €44,90. ________ ik pinnen?", correctAnswer: "Kan" },
          { id: "7.6_opd5_4", type: "fill_in", question: "Hebt u deze broek in het zwart? Ik ________ even kijken. (Ik ga kijken)", correctAnswer: "zal" },
          { id: "7.6_opd5_5", type: "fill_in", question: "Zit deze broek goed? Nee, ik ________ een kleinere maat hebben. (I want to have)", correctAnswer: "wil" },
          { id: "7.6_opd5_6", type: "fill_in", question: "________ ik deze trui in maat 38 bestellen? Ja, dat kan. (U)", correctAnswer: "Kunt" }
        ]
      }
    ]
  },
  {
    id: "7.7",
    chapter: 7,
    title: "7.7 Comparatief en Superlatief",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⚖️ Karşılaştırma ve En Üstünlük (Daha... / En...)</h3>
          <p className="text-sm text-slate-300">Hollandacada bir şeyi karşılaştırırken (comparatief) kelimenin sonuna <strong>-er</strong>, "en" üstün (superlatief) olduğunu belirtirken <strong>-st</strong> eklenir. Karşılaştırma yaparken "dan" (than) kullanılır.</p>
          
          <h4 className="font-bold text-white mt-4">Regelmatig (Düzenli):</h4>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li>klein ➔ klein<strong>er</strong> (dan) ➔ het klein<strong>st</strong></li>
            <li>groot ➔ grot<strong>er</strong> (dan) ➔ het groot<strong>st</strong></li>
            <li>duur ➔ duurd<strong>er</strong> (dan) ➔ het duur<strong>st</strong></li>
          </ul>
          <p className="text-sm text-amber-200 italic mt-1">"Deze broek is <strong>duurder dan</strong> die broek."</p>
          <p className="text-sm text-amber-200 italic">"Deze broek is <strong>even duur als</strong> het t-shirt." (Eşitlik durumunda 'even...als' kullanılır).</p>

          <h4 className="font-bold text-rose-400 mt-4">Onregelmatig (Düzensiz - EZBERLE!):</h4>
          <table className="w-full text-sm text-slate-200 mt-2">
            <thead><tr className="text-left text-rose-300"><th>Normal</th><th>Comparatief (+er)</th><th>Superlatief (En)</th></tr></thead>
            <tbody>
              <tr><td>goed (iyi)</td><td>beter (daha iyi)</td><td>het best (en iyi)</td></tr>
              <tr><td>veel (çok)</td><td>meer (daha çok)</td><td>het meest (en çok)</td></tr>
              <tr><td>weinig (az)</td><td>minder (daha az)</td><td>het minst (en az)</td></tr>
              <tr><td>graag (severek)</td><td>liever (tercihen)</td><td>het liefst (en çok severek)</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Kies het goede woord.",
        isExtra: false,
        questions: [
          { id: "7.7_opd6_1", type: "multiple_choice", question: "1. Vind je rood ________ dan blauw?", options: ["mooi", "mooier"], correctAnswer: "mooier" },
          { id: "7.7_opd6_2", type: "multiple_choice", question: "2. Is les 6 ________ dan les 7?", options: ["leuker", "het leukst"], correctAnswer: "leuker" },
          { id: "7.7_opd6_3", type: "multiple_choice", question: "3. Vind je paella ________ ?", options: ["lekker", "lekkerder"], correctAnswer: "lekker" },
          { id: "7.7_opd6_4", type: "multiple_choice", question: "4. Welke cursist is ________ in de les?", options: ["vaker", "het vaakst"], correctAnswer: "het vaakst" },
          { id: "7.7_opd6_5", type: "multiple_choice", question: "5. Welke spijkerbroek is ________ ?", options: ["goedkoop", "het goedkoopst"], correctAnswer: "het goedkoopst" },
          { id: "7.7_opd6_6", type: "multiple_choice", question: "6. Zijn de tomaten op de markt ________ dan in de winkel?", options: ["rood", "roder"], correctAnswer: "roder" },
          { id: "7.7_opd6_7", type: "multiple_choice", question: "7. Vind je een laag model ________ dan een hoog model?", options: ["prettiger", "het prettigst"], correctAnswer: "prettiger" },
          { id: "7.7_opd6_8", type: "multiple_choice", question: "8. Is de cappuccino ________ of ________?", options: ["duurder", "het duurst"], correctAnswer: "het duurst" },
          { id: "7.7_opd6_9", type: "multiple_choice", question: "9. Spreek je ________ Engels dan Nederlands?", options: ["beter", "het best"], correctAnswer: "beter" },
          { id: "7.7_opd6_10", type: "multiple_choice", question: "10. Houd je ________ van groente dan van fruit?", options: ["meer", "het meest"], correctAnswer: "meer" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Düzensizler Testi)",
        isExtra: true,
        questions: [
          { id: "7.7_smart_1", type: "fill_in", question: "Wat eet je ________, stamppot of spaghetti? (graag -> comparatief)", correctAnswer: "liever" },
          { id: "7.7_smart_2", type: "fill_in", question: "Naar welk land ga je ________ op vakantie? (graag -> superlatief)", correctAnswer: "het liefst" }
        ]
      }
    ]
  },
  {
    id: "7.8",
    chapter: 7,
    title: "7.8 Demonstratief pronomen (İşaret Zamirleri)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>👉 Dit, Dat, Deze, Die (Bu ve Şu)</h3>
          <p className="text-sm text-slate-300">Hollandacada nesneleri işaret ederken, kelimenin <strong>de-woord</strong> mu yoksa <strong>het-woord</strong> mu olduğu hayati önem taşır!</p>
          
          <table className="w-full text-sm text-slate-200 mt-4 border border-cyan-500/20">
            <thead>
              <tr className="bg-cyan-900/40 text-cyan-200">
                <th>Artikel</th><th>Dichtbij (Yakın - BU)</th><th>Verder weg (Uzak - ŞU/O)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-bold text-rose-300">de-woord</td><td><strong>deze</strong> (deze broek)</td><td><strong>die</strong> (die broek)</td></tr>
              <tr><td className="font-bold text-amber-300">het-woord</td><td><strong>dit</strong> (dit shirt)</td><td><strong>dat</strong> (dat shirt)</td></tr>
              <tr className="bg-white/5"><td className="font-bold text-emerald-300">Meervoud (Tüm Çoğullar)</td><td><strong>deze</strong> (deze broeken)</td><td><strong>die</strong> (die broeken)</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-slate-400 mt-3">İpucu: 'de' artikeli alan kelimeler her zaman D harfiyle başlayan işaret zamirlerini alır (deze/die). 'het' artikeli alan kelimeler ise T ile bitenleri alır (dit/dat).</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8 & 9: Vul in: deze, die, dit of dat. (Let op het artikel van het woord!)",
        isExtra: false,
        questions: [
          { id: "7.8_opd8_1", type: "multiple_choice", question: "Neem je _______ rode paprika (de) of _______ groene?", options: ["deze / die", "dit / dat"], correctAnswer: "deze / die" },
          { id: "7.8_opd8_2", type: "multiple_choice", question: "Ober, _______ biefstuk (de) is niet vers!", options: ["deze", "dit"], correctAnswer: "deze" },
          { id: "7.8_opd8_3", type: "multiple_choice", question: "Wie is _______ docent (de), daar in de kantine?", options: ["die", "dat"], correctAnswer: "die" },
          { id: "7.8_opd8_4", type: "multiple_choice", question: "Ik houd van ijs, maar _______ ijs (het) vind ik niet lekker.", options: ["dit / dat", "deze / die"], correctAnswer: "dit / dat" },
          { id: "7.8_opd8_5", type: "multiple_choice", question: "Kijk, _______ boek (het) vind ik leuker.", options: ["dit", "deze"], correctAnswer: "dit" },
          { id: "7.8_opd8_6", type: "multiple_choice", question: "Ik betaal _______ rondje (het). Wat wil je drinken?", options: ["dit", "deze"], correctAnswer: "dit" },
          { id: "7.8_opd8_7", type: "multiple_choice", question: "_______ spijkerbroek (de) is te wijd.", options: ["Deze", "Dit"], correctAnswer: "Deze" },
          { id: "7.8_opd8_8", type: "multiple_choice", question: "Waarom is _______ T-shirt (het) goedkoper dan _______ T-shirt?", options: ["dit / dat", "deze / die"], correctAnswer: "dit / dat" },
          { id: "7.8_opd8_9", type: "multiple_choice", question: "Hebt u _______ schoenen (meervoud) daar ook een maat groter?", options: ["die", "dat"], correctAnswer: "die" },
          { id: "7.8_opd8_10", type: "multiple_choice", question: "Ik koop _______ jurk (de) en _______ bloesje (het).", options: ["deze / dit", "dit / deze"], correctAnswer: "deze / dit" }
        ]
      }
    ]
  },
  {
    id: "7.9",
    chapter: 7,
    title: "7.9 Objectvorm van het personaal pronomen (Nesne Zamirleri)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>👤 Nesne Zamirleri (Beni, Seni, Onu...)</h3>
          
          <table className="w-full text-sm text-slate-200 mt-2 border border-indigo-500/20 mb-4">
            <thead><tr className="text-left text-indigo-300"><th>Subject (Özne - Ben, Sen)</th><th>Object (Nesne - Beni, Bana)</th></tr></thead>
            <tbody>
              <tr><td>ik</td><td>mij / me</td></tr>
              <tr><td>jij / je</td><td>jou / je</td></tr>
              <tr><td>u</td><td>u</td></tr>
              <tr><td>hij / zij(ze) / het</td><td>hem / haar / het</td></tr>
              <tr><td>wij / we</td><td>ons</td></tr>
              <tr><td>jullie</td><td>jullie</td></tr>
              <tr><td>zij / ze (onlar)</td><td>hen / ze / hun</td></tr>
            </tbody>
          </table>

          <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/50">
            <h4 className="font-bold text-indigo-300 mb-2">🚨 ÇOK ÖNEMLİ KURAL: Cansız Nesnelerde "O" Nasıl Denir?</h4>
            <p className="text-sm text-indigo-100 mb-2">Türkçede eşyalara "O" (Onu masaya koy) deriz. Hollandacada ise eşyaların artikel cinsiyetine göre "O" (hij/hem veya het) değişir!</p>
            <ul className="text-sm text-white space-y-2 list-disc pl-5">
              <li><strong>DE-woord (Erkek gibi davranır):</strong> Özne ise <strong className="text-rose-400">hij</strong>, nesne ise <strong className="text-rose-400">hem</strong> olur.<br/>
              <em>De deur -> Waar is <strong>hij</strong>?</em><br/>
              <em>De telefoon -> Ik heb <strong>hem</strong> in mijn hand.</em> (Telefon de-woord olduğu için onu derken 'hem' diyoruz!)</li>
              
              <li><strong>HET-woord (Nötr):</strong> Her zaman <strong className="text-amber-400">het</strong> olur.<br/>
              <em>Het huis -> Waar is <strong>het</strong>?</em><br/>
              <em>Het glas -> Ik heb <strong>het</strong> in mijn hand.</em></li>
              
              <li><strong>MEERVOUD (Çoğul):</strong> Her zaman <strong className="text-emerald-400">ze</strong> olur.<br/>
              <em>De glazen -> Waar zijn <strong>ze</strong>? / Ik heb <strong>ze</strong> in mijn hand.</em></li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 11: Vul een personaal pronomen in (mij, hem, haar, het, ons, jullie, ze).",
        isExtra: false,
        questions: [
          { id: "7.9_opd11_1", type: "multiple_choice", question: "1. Wat een leuke broek (de)! Kan ik ________ even passen?", options: ["het", "hem", "haar"], correctAnswer: "hem" },
          { id: "7.9_opd11_2", type: "fill_in", question: "2. Mevrouw, ik heb een vraag. Kunt u ________ helpen?", correctAnswer: "mij / me" },
          { id: "7.9_opd11_3", type: "multiple_choice", question: "3. Patricia woont hier ook. Ik kom ________ vaak tegen.", options: ["hem", "haar", "ze"], correctAnswer: "haar" },
          { id: "7.9_opd11_4", type: "multiple_choice", question: "4. Ik heb dit shirt (het) nog in een kleinere maat. Ik zal ________ halen.", options: ["hem", "het", "ze"], correctAnswer: "het" },
          { id: "7.9_opd11_5", type: "multiple_choice", question: "5. Waar zijn Jenny en Johan? Ik haal ________ uit de kantine.", options: ["hem", "ze", "het"], correctAnswer: "ze" },
          { id: "7.9_opd11_6", type: "multiple_choice", question: "6. Ik houd van tomaten (meervoud). Ik koop ________ op de markt.", options: ["hem", "ze", "het"], correctAnswer: "ze" },
          { id: "7.9_opd11_7", type: "multiple_choice", question: "7. Wij spreken geen Nederlands! Wie kan ________ helpen?", options: ["ons", "jullie", "mij"], correctAnswer: "ons" },
          { id: "7.9_opd11_8", type: "fill_in", question: "8. Ja, Simon is thuis. Ik zal ________ even roepen.", correctAnswer: "hem" },
          { id: "7.9_opd11_9", type: "multiple_choice", question: "9. Wat een leuk boek (het)! Ik ga ________ ook kopen.", options: ["hem", "het", "ze"], correctAnswer: "het" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Obectvorm Uitzonderingen",
        isExtra: true,
        questions: [
          { id: "7.9_smart_1", type: "multiple_choice", question: "Je ziet een mooie tas (de tas). Je wilt de tas kopen. Wat zeg je?", options: ["Ik koop het.", "Ik koop hem.", "Ik koop ze."], correctAnswer: "Ik koop hem." }
        ]
      }
    ]
  },
  {
    id: "7.10",
    chapter: 7,
    title: "7.10 Tekst & 7.11 Uitspraak",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>📄 Tekst: Oud & Fijn - Dunne, zachte en warme trui</h3>
          <p className="text-sm text-slate-300">Erkek modası direktörü Jos Schomaker anlatıyor:</p>
          <p className="text-sm text-slate-200 mt-2 italic bg-rose-900/20 p-3 rounded border border-rose-500/20">"Ik heb deze trui al twintig jaar. Hij is eigenlijk van m'n vader. Het is zo'n lekkere trui. Hij is van angorawol en daarom is hij dun, zacht en warm. Ik draag de trui nu een week, na een week is hij heel wijd. In de wasmachine komt hij weer mooi in model... Mensen moeten hun kleren niet te lang dragen. Dat is niet goed voor mijn winkel. Ze moeten vaak iets nieuws kopen."</p>
          
          <h3 style={{ margin: '20px 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Eindklank -e</h3>
          <p className="text-sm text-slate-300">Hollandacada kelimenin sonundaki -e harfi (de grot<strong>e</strong>, de mooi<strong>e</strong>) genellikle zayıf, yutulan bir 'ı / uh' (Sjwa) sesi gibi okunur. Asla net bir "E" sesi çıkarılmaz.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 14: Zijn de volgende zinnen over de tekst waar of niet waar?",
        isExtra: false,
        questions: [
          { id: "7.10_opd14_1", type: "multiple_choice", question: "1. De trui is oud (twintig jaar).", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "7.10_opd14_2", type: "multiple_choice", question: "2. Na het wassen zit de trui niet goed.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "7.10_opd14_3", type: "multiple_choice", question: "3. Jos Schomaker wil dat mensen vaak nieuwe kleren kopen (anders is het niet goed voor zijn winkel).", options: ["waar", "niet waar"], correctAnswer: "waar" }
        ]
      }
    ]
  },
  {
    id: "On-Class-7",
    chapter: 7,
    title: "On-Class Extra: Small Talk & Mening",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Small Talk</h3>
          
          <h4 className="font-bold text-emerald-300 mt-2 border-b border-emerald-500/30 pb-1">Hoe was je dag? (Günün nasıldı?)</h4>
          <ul className="text-sm text-slate-200 mt-2 space-y-1">
            <li>Hoe was jouw dag vandaag? ➔ Mijn dag was oké. / Niks speciaals (Özel bir şey yok).</li>
            <li>Dat is niet leuk. (Bu eğlenceli/güzel değil).</li>
          </ul>

          <h4 className="font-bold text-emerald-300 mt-4 border-b border-emerald-500/30 pb-1">Meningen Uiten (Sevmek ve Nefret Etmek)</h4>
          <ul className="text-sm text-slate-200 mt-2 space-y-1">
            <li><strong>Ik vind ... leuk</strong> = I like ... (Ik vind auto's leuk).</li>
            <li><strong>Ik hou van ...</strong> = I love ...</li>
            <li><strong>Ik haat ...</strong> = I hate ...</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen",
        isExtra: true,
        questions: [
          { id: "7_onclass_1", type: "multiple_choice", question: "A: 'Hoe was jouw dag vandaag?' B: '________'", options: ["Ik hou van koffie.", "Niks speciaals.", "Wat vervelend!"], correctAnswer: "Niks speciaals." },
          { id: "7_onclass_2", type: "fill_in", question: "Vertaal 'I hate ...' naar het Nederlands: Ik ________ ...", correctAnswer: "haat" },
          { id: "7_onclass_3", type: "fill_in", question: "Vertaal: 'Ben arabaları seviyorum' -> Ik ________ auto's leuk.", correctAnswer: "vind" }
        ]
      }
    ]
  }
];