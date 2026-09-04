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
    { speaker: "Verteller", text: "De serveerster, Sandra, is in een kledingzaak om een broek te kopen.", translation: { tr: "Garson olan Sandra, bir pantolon satın almak için giyim mağazasındadır.", en: "The waitress, Sandra, is in a clothing store to buy a pair of trousers." } },
    { speaker: "Verkoopster", text: "Kan ik jullie helpen?", translation: { tr: "Size (çoğul) yardım edebilir miyim?", en: "Can I help you all?" } },
    { speaker: "Meisje en jongen", text: "Nee, we kijken alleen even.", translation: { tr: "Hayır, biz sadece bakıyoruz.", en: "No, we're just looking." } },
    { speaker: "Sandra", text: "Kunt u mij helpen? Ik zoek een spijkerbroek.", translation: { tr: "Bana yardım edebilir misiniz? Bir kot pantolon arıyorum.", en: "Can you help me? I'm looking for a pair of jeans." } },
    { speaker: "Verkoopster", text: "Welke maat hebt u?", translation: { tr: "Bedeniniz nedir? (Hangi bedene sahipsiniz?)", en: "What is your size?" } },
    { speaker: "Sandra", text: "Ik heb normaal maat 40, soms groter.", translation: { tr: "Normalde 40 bedenim, bazen daha büyük.", en: "I normally wear size 40, sometimes larger." } },
    { speaker: "Verkoopster", text: "Welke kleur en wat voor model wilt u?", translation: { tr: "Hangi renk ve nasıl bir model istiyorsunuz?", en: "What color and what kind of style do you want?" } },
    { speaker: "Sandra", text: "Ik wil graag een lichte spijkerbroek, een laag model.", translation: { tr: "Açık renkli, düşük bel (düşük model) bir kot pantolon istiyorum lütfen.", en: "I would like light blue jeans, a low-rise style." } },
    { speaker: "Verkoopster", text: "Ik geef u twee spijkerbroeken van twee verschillende merken. Probeert u ze allebei maar even.", translation: { tr: "Size iki farklı markadan iki kot pantolon veriyorum. İkisini de bir deneyin.", en: "I'll give you two pairs of jeans from two different brands. Just try them both on." } },
    { speaker: "Sandra", text: "Waar kan ik ze ergens passen?", translation: { tr: "Bunları nerede deneyebilirim?", en: "Where can I try them on?" } },
    { speaker: "Verkoopster", text: "Daar zijn de paskamers.", translation: { tr: "Deneme kabinleri orada.", en: "The fitting rooms are over there." } },
    { speaker: "Verkoopster", text: "En, hoe zitten ze?", translation: { tr: "(Biraz sonra) Ee, nasıl oldular? (Nasıl oturdular?)", en: "So, how do they fit?" } },
    { speaker: "Sandra", text: "Deze broek zit beter dan die andere broek. Ik vind hem wel een beetje wijd. Hebt u hem in een kleinere maat?", translation: { tr: "Bu pantolon diğer pantolondan daha iyi oldu. Ama onu biraz bol buldum. Bunun daha küçük bedeni var mı?", en: "These pants fit better than the other ones. I do find them a bit loose. Do you have them in a smaller size?" } },
    { speaker: "Verkoopster", text: "Het spijt me. Ik heb hem niet in een kleinere maat. Dit is de kleinste maat van dit model.", translation: { tr: "Üzgünüm. Bunun daha küçük bedeni elimde yok. Bu modelin en küçük bedeni bu.", en: "I'm sorry. I don't have them in a smaller size. This is the smallest size of this model." } },
    { speaker: "Sandra", text: "Ik neem hem toch. Kan ik hem eventueel nog ruilen?", translation: { tr: "Onu yine de (her şeye rağmen) alıyorum. Gerekirse onu değiştirebilir miyim?", en: "I'll take them anyway. Can I possibly exchange them later?" } },
    { speaker: "Verkoopster", text: "Ja hoor. Binnen 14 dagen, met de bon.", translation: { tr: "Evet tabii ki. Fişiyle birlikte 14 gün içinde.", en: "Yes, sure. Within 14 days, with the receipt." } },
    { speaker: "Sandra", text: "Ik wil ook nog graag een paar T-shirts.", translation: { tr: "Bir de birkaç tişört istiyorum lütfen.", en: "I would also like a few T-shirts." } },
    { speaker: "Verkoopster", text: "Hier liggen de T-shirts. Ik heb ze in allerlei kleuren: wit, zwart, rood, roze, groen en blauw.", translation: { tr: "Tişörtler burada duruyor. Onların her türlü rengi elimde var: beyaz, siyah, kırmızı, pembe, yeşil ve mavi.", en: "The T-shirts are lying here. I have them in all kinds of colors: white, black, red, pink, green and blue." } },
    { speaker: "Sandra", text: "Ik neem een wit en een rood T-shirt. Of toch een roze? Ik kan altijd zo moeilijk beslissen. Dit roze shirt staat me het best. Ik neem dus deze spijkerbroek en deze twee T-shirts. Kan ik pinnen?", translation: { tr: "Bir beyaz ve bir kırmızı tişört alıyorum. Ya da vazgeçtim pembe mi olsa? Her zaman karar vermekte o kadar zorlanıyorum ki. Bu pembe tişört bana en iyi yakıştı. Yani bu kot pantolonu ve bu iki tişörtü alıyorum. Kartla (pin ile) ödeyebilir miyim?", en: "I'll take a white and a red T-shirt. Or maybe a pink one after all? I always have such a hard time deciding. This pink shirt suits me best. So I'll take these jeans and these two T-shirts. Can I pay by card?" } }
  ]
};

export const chapter7Sections = [
  {
    id: "7.1",
    chapter: 7,
    title: "7.1 & 7.2 Dialoog en Woordenlijst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In een kledingzaak (Giyim Mağazasında)</h3>
            <p>Sandra giyim mağazasında bir kot pantolon (spijkerbroek) ve tişört arıyor. Mağaza çalışanının (verkoopster) sorduğu kalıplara dikkat et:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Kan ik jullie helpen?</strong> (Size yardım edebilir miyim?) ➔ <em>Nee, we kijken alleen even. (Hayır, sadece bakıyoruz.)</em></li>
              <li><strong>Welke maat hebt u?</strong> (Bedeniniz nedir?) ➔ <em>Ik heb normaal maat 40.</em></li>
              <li><strong>Kan ik pinnen?</strong> (Kartla ödeyebilir miyim?)</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: In een kledingzaak (In a clothing store)</h3>
            <p>Sandra is looking for a pair of jeans (spijkerbroek) and T-shirts in a clothing store. Pay attention to the phrases asked by the shop assistant (verkoopster):</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Kan ik jullie helpen?</strong> (Can I help you?) ➔ <em>Nee, we kijken alleen even. (No, we're just looking.)</em></li>
              <li><strong>Welke maat hebt u?</strong> (What is your size?) ➔ <em>Ik heb normaal maat 40.</em></li>
              <li><strong>Kan ik pinnen?</strong> (Can I pay by card?)</li>
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
          { id: "7.1_opd1_1", type: "multiple_choice", question: "1. Sandra wil...", options: ["a) een spijkerbroek kopen.", "b) alleen even kijken."], correctAnswer: "a) een spijkerbroek kopen." },
          { id: "7.1_opd1_2", type: "multiple_choice", question: "2. Sandra heeft...", options: ["a) maat 42.", "b) maat 40."], correctAnswer: "b) maat 40." },
          { id: "7.1_opd1_3", type: "multiple_choice", question: "3. Sandra past...", options: ["a) twee spijkerbroeken.", "b) een lichte spijkerbroek."], correctAnswer: "a) twee spijkerbroeken." },
          { id: "7.1_opd1_4", type: "multiple_choice", question: "4. Sandra vindt de tweede broek...", options: ["a) een beetje wijd.", "b) een beetje klein."], correctAnswer: "a) een beetje wijd." },
          { id: "7.1_opd1_5", type: "multiple_choice", question: "5. Sandra koopt uiteindleijk...", options: ["a) een wit en een roze T-shirt.", "b) een wit, een rood en een roze T-shirt."], correctAnswer: "a) een wit en een roze T-shirt." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Woorden in de context",
        isExtra: true,
        questions: [
          { id: "7.1_smart_1", type: "fill_in", question: "Als je iets terug naar de winkel wilt brengen, vraag je: Kan ik hem eventueel nog ________? (exchange)", correctAnswer: "ruilen" },
          { id: "7.1_smart_2", type: "fill_in", question: "Als je gaat ruilen, moet je het papiertje laten zien. Dat is de ________. (receipt)", correctAnswer: "bon" },
          ...generateSmartQuestions(7, "Woordenlijst", 4, chapter7Vocab)
        ]
      }
    ]
  },
  {
    id: "7.3",
    chapter: 7,
    title: "7.3 Kleuren en 7.4 Kleding",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🎨 Kleuren (Colors)</h3>
              <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
                <li><strong>wit</strong> (white), <strong>zwart</strong> (black)</li>
                <li><strong>grijs</strong> (grey), <strong>bruin</strong> (brown)</li>
                <li><strong>rood</strong> (red), <strong>roze</strong> (pink)</li>
                <li><strong>blauw</strong> (blue), <strong>paars</strong> (purple)</li>
                <li><strong>geel</strong> (yellow), <strong>oranje</strong> (orange)</li>
                <li><strong>groen</strong> (green)</li>
              </ul>
              <p className="mt-3 text-xs text-purple-200"><strong>Extra:</strong> donkerblauw (dark blue), lichtgeel (light yellow), effen (plain/solid), geruit (checkered), gestreept (striped).</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>👕 Kleding (Clothes)</h3>
              <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
                <li><strong>de broek / de spijkerbroek</strong> (trousers / jeans)</li>
                <li><strong>het T-shirt / het overhemd</strong> (T-shirt / button-up shirt)</li>
                <li><strong>de trui</strong> (sweater)</li>
                <li><strong>de bloes</strong> (blouse)</li>
                <li><strong>de rok / de jurk</strong> (skirt / dress)</li>
                <li><strong>de jas / het pak</strong> (coat / suit)</li>
                <li><strong>de schoenen</strong> (shoes)</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Kleur en Kleding",
        isExtra: true,
        questions: [
          { id: "7.3_smart_1", type: "fill_in", question: "Vertaal (Translate): 'Ben pembe bir elbise arıyorum. / I'm looking for a pink dress.' -> Ik zoek een ________ jurk.", correctAnswer: "roze" },
          { id: "7.3_smart_2", type: "multiple_choice", question: "Wat is 'de jas' in het Engels of Turks?", options: ["the dress / elbise", "the coat / mont", "the skirt / etek"], correctAnswer: "the coat / mont" },
          { id: "7.3_smart_3", type: "multiple_choice", question: "Welke kleding draag je op je benen? (Which clothing do you wear on your legs?)", options: ["De trui", "De bloes", "De spijkerbroek"], correctAnswer: "De spijkerbroek" }
        ]
      }
    ]
  },
  {
    id: "7.5",
    chapter: 7,
    title: "7.5 t/m 7.6 De maat, model, en passen",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>👖 Winkelen Zinnen (Shopping Phrases)</h3>
            <p className="text-sm text-slate-300">You must know these phrases to express yourself in a store:</p>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
              <li><strong>Welke maat hebt u?</strong> ➔ Ik heb maat 40.</li>
              <li><strong>Hebt u hem in een kleinere / grotere maat?</strong> (Do you have it in a smaller/larger size?)</li>
              <li><strong>Hebt u deze broek ook in het zwart?</strong> (Do you also have these pants in black?)</li>
              <li><strong>Waar kan ik ze passen?</strong> (Where can I try them on?) ➔ Daar zijn de <strong>paskamers</strong> (fitting rooms).</li>
              <li><strong>Hoe zitten ze?</strong> (How do they fit?)</li>
              <li>Hij is te <strong>wijd</strong> (loose), te <strong>strak</strong> (tight), hij <strong>zit goed</strong> (fits well).</li>
              <li>Dit shirt <strong>staat me</strong> het best. (This shirt <strong>suits</strong> me best.)</li>
            </ul>

            <div className="bg-emerald-900/40 p-3 rounded mt-4 border border-emerald-500/40">
              <h4 className="font-bold text-emerald-300">💡 ON-CLASS: 'Zitten' vs 'Staan'</h4>
              <p className="text-xs text-emerald-100"><strong>Zitten:</strong> Indicates how the clothing physically fits your body (tight/loose etc.). <em>(Hij zit te strak - It's too tight).</em></p>
              <p className="text-xs text-emerald-100"><strong>Staan:</strong> Indicates whether the clothing looks good on you visually. <em>(Dat shirt staat me goed! - That shirt suits me well).</em></p>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Bedenk vragen bij de volgende antwoorden. (Think of questions for the following answers.)",
        isExtra: false,
        questions: [
          { id: "7.6_opd4_1", type: "multiple_choice", question: "Antwoord: 'Ik heb maat 42.' Wat was de vraag?", options: ["Waar kan ik dit passen?", "Welke maat hebt u?", "Hebt u deze ook in het zwart?"], correctAnswer: "Welke maat hebt u?" },
          { id: "7.6_opd4_2", type: "multiple_choice", question: "Antwoord: 'Nee, het spijt me, dit is de grootste maat.' Wat was de vraag?", options: ["Hebt u deze in een grotere maat?", "Hoe zit de broek?", "Wat voor model zoekt u?"], correctAnswer: "Hebt u deze in een grotere maat?" },
          { id: "7.6_opd4_3", type: "multiple_choice", question: "Antwoord: 'De paskamers zijn daar, bij het raam.' Wat was de vraag?", options: ["Waar kan ik dit passen?", "Kan ik pinnen?", "Welk merk zoekt u?"], correctAnswer: "Waar kan ik dit passen?" },
          { id: "7.6_opd4_4", type: "multiple_choice", question: "Antwoord: 'Nee, de jurk zit niet goed, hij is te klein.' Wat was de vraag?", options: ["Welke kleur jurk wilt u?", "Zit de jurk goed? / Hoe zit hij?", "Hebt u hem in een kleinere maat?"], correctAnswer: "Zit de jurk goed? / Hoe zit hij?" }
        ]
      },
      {
        instruction: "Opdracht 5: Modale werkwoorden invullen (kan, wil, zal, kunt, enz. / Fill in modal verbs)",
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⚖️ Comparative and Superlative (More... / Most...)</h3>
            <p className="text-sm text-slate-300">In Dutch, when comparing things (comparative) you add <strong>-er</strong> to the end of the word, and to indicate the "most" (superlative) you add <strong>-st</strong>. When making a comparison, "dan" (than) is used.</p>
            
            <h4 className="font-bold text-white mt-4">Regelmatig (Regular):</h4>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
              <li>klein ➔ klein<strong>er</strong> (dan) ➔ het klein<strong>st</strong></li>
              <li>groot ➔ grot<strong>er</strong> (dan) ➔ het groot<strong>st</strong></li>
              <li>duur ➔ duurd<strong>er</strong> (dan) ➔ het duur<strong>st</strong></li>
            </ul>
            <p className="text-sm text-amber-200 italic mt-1">"Deze broek is <strong>duurder dan</strong> die broek."</p>
            <p className="text-sm text-amber-200 italic">"Deze broek is <strong>even duur als</strong> het t-shirt." (In cases of equality, 'even...als' (as...as) is used).</p>

            <h4 className="font-bold text-rose-400 mt-4">Onregelmatig (Irregular - MEMORIZE!):</h4>
            <table className="w-full text-sm text-slate-200 mt-2">
              <thead><tr className="text-left text-rose-300"><th>Normal</th><th>Comparatief (+er)</th><th>Superlatief (Most)</th></tr></thead>
              <tbody>
                <tr><td>goed (good)</td><td>beter (better)</td><td>het best (best)</td></tr>
                <tr><td>veel (much)</td><td>meer (more)</td><td>het meest (most)</td></tr>
                <tr><td>weinig (little)</td><td>minder (less)</td><td>het minst (least)</td></tr>
                <tr><td>graag (gladly)</td><td>liever (preferably)</td><td>het liefst (most preferably)</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Kies het goede woord. (Choose the correct word.)",
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
        instruction: "Slimme Oefeningen (Smart Exercises: Irregulars Test)",
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
    title: "7.8 Demonstratief pronomen (İşaret Zamirleri / Demonstrative pronouns)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>👉 Dit, Dat, Deze, Die (Bu ve Şu)</h3>
            <p className="text-sm text-slate-300">Hollandacada nesneleri işaret ederken, kelimenin <strong>de-woord</strong> mu yoksa <strong>het-woord</strong> mu olduğu hayati önem taşır!</p>
            
            <table className="w-full text-sm text-slate-200 mt-4 border border-cyan-500/20">
              <thead>
                <tr className="bg-cyan-900/40 text-cyan-200">
                  <th className="text-left">Artikel</th><th className="text-left">Dichtbij (Yakın - BU)</th><th className="text-left">Verder weg (Uzak - ŞU/O)</th>
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>👉 Dit, Dat, Deze, Die (This and That)</h3>
            <p className="text-sm text-slate-300">In Dutch, when pointing at objects, it is crucial whether the word is a <strong>de-word</strong> or a <strong>het-word</strong>!</p>
            
            <table className="w-full text-sm text-slate-200 mt-4 border border-cyan-500/20">
              <thead>
                <tr className="bg-cyan-900/40 text-cyan-200">
                  <th className="text-left">Article</th><th className="text-left">Dichtbij (Close - THIS)</th><th className="text-left">Verder weg (Far away - THAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold text-rose-300">de-word</td><td><strong>deze</strong> (deze broek)</td><td><strong>die</strong> (die broek)</td></tr>
                <tr><td className="font-bold text-amber-300">het-word</td><td><strong>dit</strong> (dit shirt)</td><td><strong>dat</strong> (dat shirt)</td></tr>
                <tr className="bg-white/5"><td className="font-bold text-emerald-300">Meervoud (All Plurals)</td><td><strong>deze</strong> (deze broeken)</td><td><strong>die</strong> (die broeken)</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-400 mt-3">Tip: Words with the article 'de' always take demonstrative pronouns starting with the letter D (deze/die). Words with the article 'het' take the ones ending in T (dit/dat).</p>
          </div>
        )}
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
    title: "7.9 Objectvorm van het personaal pronomen (Nesne Zamirleri / Object Pronouns)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>👤 Object Pronouns (Me, You, Him, Her, It...)</h3>
            
            <table className="w-full text-sm text-slate-200 mt-2 border border-indigo-500/20 mb-4">
              <thead><tr className="text-left text-indigo-300"><th>Subject (I, You)</th><th>Object (Me, To me)</th></tr></thead>
              <tbody>
                <tr><td>ik</td><td>mij / me</td></tr>
                <tr><td>jij / je</td><td>jou / je</td></tr>
                <tr><td>u</td><td>u</td></tr>
                <tr><td>hij / zij(ze) / het</td><td>hem / haar / het</td></tr>
                <tr><td>wij / we</td><td>ons</td></tr>
                <tr><td>jullie</td><td>jullie</td></tr>
                <tr><td>zij / ze (they)</td><td>hen / ze / hun</td></tr>
              </tbody>
            </table>

            <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/50">
              <h4 className="font-bold text-indigo-300 mb-2">🚨 VERY IMPORTANT RULE: How to say "It" for Inanimate Objects?</h4>
              <p className="text-sm text-indigo-100 mb-2">In English, we say "it" for all inanimate objects. In Dutch, "it" (hij/hem or het) changes depending on the article gender of the object!</p>
              <ul className="text-sm text-white space-y-2 list-disc pl-5">
                <li><strong>DE-word (Acts masculine):</strong> As a subject it is <strong className="text-rose-400">hij</strong>, as an object it is <strong className="text-rose-400">hem</strong>.<br/>
                <em>De deur -> Waar is <strong>hij</strong>?</em><br/>
                <em>De telefoon -> Ik heb <strong>hem</strong> in mijn hand.</em> (Because telephone is a de-word, we say 'hem' for 'it'!)</li>
                
                <li><strong>HET-word (Neutral):</strong> Always <strong className="text-amber-400">het</strong>.<br/>
                <em>Het huis -> Waar is <strong>het</strong>?</em><br/>
                <em>Het glas -> Ik heb <strong>het</strong> in mijn hand.</em></li>
                
                <li><strong>PLURAL (Meervoud):</strong> Always <strong className="text-emerald-400">ze</strong>.<br/>
                <em>De glazen -> Waar zijn <strong>ze</strong>? / Ik heb <strong>ze</strong> in mijn hand.</em></li>
              </ul>
            </div>
          </div>
        )}
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
        instruction: "Slimme Oefeningen (Smart Exercises): Objectvorm Uitzonderingen",
        isExtra: true,
        questions: [
          { id: "7.9_smart_1", type: "multiple_choice", question: "Je ziet een mooie tas (de tas). Je wilt de tas kopen. Wat zeg je? (You see a nice bag (de tas). You want to buy it. What do you say?)", options: ["Ik koop het.", "Ik koop hem.", "Ik koop ze."], correctAnswer: "Ik koop hem." }
        ]
      }
    ]
  },
  {
    id: "7.10",
    chapter: 7,
    title: "7.10 Tekst & 7.11 Uitspraak",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>📄 Tekst: Oud & Fijn - Dunne, zachte en warme trui</h3>
            <p className="text-sm text-slate-300">Erkek modası direktörü Jos Schomaker anlatıyor:</p>
            <p className="text-sm text-slate-200 mt-2 italic bg-rose-900/20 p-3 rounded border border-rose-500/20">"Ik heb deze trui al twintig jaar. Hij is eigenlijk van m'n vader. Het is zo'n lekkere trui. Hij is van angorawol en daarom is hij dun, zacht en warm. Ik draag de trui nu een week, na een week is hij heel wijd. In de wasmachine komt hij weer mooi in model... Mensen moeten hun kleren niet te lang dragen. Dat is niet goed voor mijn winkel. Ze moeten vaak iets nieuws kopen."</p>
            
            <h3 style={{ margin: '20px 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Eindklank -e</h3>
            <p className="text-sm text-slate-300">Hollandacada kelimenin sonundaki -e harfi (de grot<strong>e</strong>, de mooi<strong>e</strong>) genellikle zayıf, yutulan bir 'ı / uh' (Sjwa) sesi gibi okunur. Asla net bir "E" sesi çıkarılmaz.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>📄 Text: Oud & Fijn - Thin, soft and warm sweater</h3>
            <p className="text-sm text-slate-300">Men's fashion director Jos Schomaker says:</p>
            <p className="text-sm text-slate-200 mt-2 italic bg-rose-900/20 p-3 rounded border border-rose-500/20">"I've had this sweater for twenty years. It's actually from my father. It's such a nice sweater. It's made of angora wool and therefore it is thin, soft and warm. I wear the sweater for a week now, after a week it is very loose. In the washing machine it gets back into shape... People shouldn't wear their clothes too long. That's not good for my shop. They should often buy something new."</p>
            
            <h3 style={{ margin: '20px 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Eindklank -e (Pronunciation: Final -e)</h3>
            <p className="text-sm text-slate-300">In Dutch, the -e at the end of a word (de grot<strong>e</strong>, de mooi<strong>e</strong>) is usually pronounced as a weak, swallowed 'uh' sound (Schwa). It is never pronounced as a clear "E" sound.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 14: Zijn de volgende zinnen over de tekst waar of niet waar? (True or False?)",
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
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Small Talk & Repetitie Les 6</h3>
              <p className="text-sm text-slate-300 mb-2">Günlük sohbette sık kullanılan ifadeler ve Les 6 tekrarı:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Dagelijkse gesprekken (Günlük)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Hoe was jouw dag vandaag?</strong> (Bugün günün nasıldı?)</li>
                    <li><strong>Mijn dag was oké / Niks speciaals.</strong> (Günüm iyiydi / Özel bir şey yok.)</li>
                    <li><strong>Dat is niet leuk.</strong> (Bu eğlenceli/güzel değil.) / <strong>Leuk</strong> = eğlenceli.</li>
                    <li><strong>Wat hebben wij gisteren geleerd?</strong> (Dün ne öğrendik?)</li>
                    <li><strong>Wij hebben gisteren Nederlands geleerd.</strong> (Dün Hollandaca öğrendik.)</li>
                    <li><strong>Ik vind auto's leuk.</strong> (Arabaları severim.)</li>
                    <li><strong>Ik haat...</strong> (Nefret ederim...) / <strong>Ik hou van...</strong> (Bayılırım/Çok severim...)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Repetitie Les 6 (Tekrar)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wat wil je drinken?</strong> ➔ Ik wil cola drinken.</li>
                    <li><strong>Hoe vind je de soep?</strong> ➔ Ik vind de soep lekker.</li>
                    <li><strong>Mag ik een lepel?</strong> ➔ Ja, hier is jouw lepel.</li>
                    <li><strong>Alsjeblieft</strong> = Buyurun / Rica ederim / Lütfen.</li>
                    <li><strong>Mag ik de rekening?</strong> = Hesabı alabilir miyim?</li>
                    <li><strong>Mag ik pinnen?</strong> = Kartla ödeyebilir miyim?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👗 Kleuren en Kleding (Renkler ve Kıyafetler)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-200 mb-4 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <div><strong className="text-purple-300">wit:</strong> beyaz</div>
                <div><strong className="text-purple-300">zwart:</strong> siyah</div>
                <div><strong className="text-purple-300">grijs:</strong> gri</div>
                <div><strong className="text-purple-300">rood:</strong> kırmızı</div>
                <div><strong className="text-purple-300">blauw:</strong> mavi</div>
                <div><strong className="text-purple-300">geel:</strong> sarı</div>
                <div><strong className="text-purple-300">groen:</strong> yeşil</div>
                <div><strong className="text-purple-300">bruin:</strong> kahverengi</div>
                <div><strong className="text-purple-300">paars:</strong> mor</div>
                <div><strong className="text-purple-300">roze:</strong> pembe</div>
                <div><strong className="text-purple-300">oranje:</strong> turuncu</div>
                <div className="col-span-2"><strong className="text-purple-300">lichtblauw / donkerblauw:</strong> açık/koyu mavi</div>
              </div>
              
              <h4 className="font-bold text-purple-300 text-sm mb-2">Kledingstukken (Kıyafetler)</h4>
              <ul className="text-sm text-slate-200 grid grid-cols-1 md:grid-cols-3 gap-2 list-disc pl-5">
                <li><strong>de broek:</strong> pantolon</li>
                <li><strong>de spijkerbroek:</strong> kot pantolon</li>
                <li><strong>het T-shirt:</strong> tişört</li>
                <li><strong>de trui:</strong> kazak</li>
                <li><strong>de bloes:</strong> bluz</li>
                <li><strong>het overhemd:</strong> gömlek</li>
                <li><strong>de rok:</strong> etek</li>
                <li><strong>de jurk:</strong> elbise</li>
                <li><strong>de jas:</strong> mont/ceket</li>
                <li><strong>de schoenen:</strong> ayakkabı</li>
                <li><strong>het pak:</strong> takım elbise</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🛍️ In de Kledingwinkel (Giyim Mağazasında)</h3>
              
              <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30 mb-4">
                <h4 className="text-emerald-300 font-bold text-xs uppercase mb-1">Dialogue Summary (Les 7)</h4>
                <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                  <li><strong>Waar is Sandra en waarom is ze daar?</strong> ➔ Ze is in de kledingwinkel om een spijkerbroek te kopen.</li>
                  <li><strong>Welke maat (beden) heeft ze?</strong> ➔ Zij heeft maat veertig (40).</li>
                  <li><strong>Welke kleur en welk model spijkerbroek zoekt ze?</strong> ➔ Ze zoekt een lichte spijkerbroek, een laag (low) model.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-400 text-sm mb-1">Belangrijke Zinnen (Önemli Cümleler)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Kunt u mij helpen?</strong> (Bana yardım edebilir misiniz?)</li>
                    <li><strong>Ik zoek een spijkerbroek.</strong> (Bir kot pantolon arıyorum.)</li>
                    <li><strong>Ik wil graag een lichte spijkerbroek.</strong> (Açık renk bir kot pantolon istiyorum.)</li>
                    <li><strong>Waar kan ik ze passen?</strong> (Onları nerede deneyebilirim?)</li>
                    <li><strong>Hebt u hem in een kleinere/grotere maat?</strong> (Bunun daha küçük/büyük bedeni var mı?)</li>
                    <li><strong>Kan ik hem eventueel nog ruilen?</strong> (Bunu sonradan değiştirebilir/iade edebilir miyim?)</li>
                    <li><strong>Contant betalen / Met cash betalen.</strong> (Nakit ödemek.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400 text-sm mb-1">Passen en Maten (Deneme ve Bedenler)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Welke maat hebt u?</strong> ➔ Ik heb maat 40.</li>
                    <li><strong>Welk model zoekt u?</strong> ➔ Ik zoek een laag model.</li>
                    <li><strong>Daar zijn de paskamers.</strong> (Deneme kabinleri şurada.)</li>
                    <li><strong>Hoe zit de broek?</strong> (Pantolon nasıl duruyor/uyuyor?)</li>
                    <li><strong>Hij is te wijd.</strong> (Çok bol.)</li>
                    <li><strong>Hij is te strak.</strong> (Çok dar.)</li>
                    <li><strong>Hij zit goed.</strong> (İyi uyuyor/tam oldu.)</li>
                    <li><strong>Dit shirt staat me goed.</strong> (Bu tişört bana yakıştı.)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⚖️ Comparatief en Superlatief (Karşılaştırma ve Üstünlük)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Regelmatig (Düzenli)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>klein - kleiner - het kleinst (küçük - daha küçük - en küçük)</li>
                    <li>duur - duurder - het duurst (pahalı - daha pahalı - en pahalı)</li>
                    <li>mooi - mooier - het mooist (güzel - daha güzel - en güzel)</li>
                    <li>zwaar - zwaarder - het zwaarst (ağır - daha ağır - en ağır)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Onregelmatig (Düzensiz)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>goed - beter - het best</strong> (iyi - daha iyi - en iyi)</li>
                    <li><strong>veel - meer - het meest</strong> (çok - daha çok - en çok)</li>
                    <li><strong>weinig - minder - het minst</strong> (az - daha az - en az)</li>
                    <li><strong>graag - liever - het liefst</strong> (severek - tercihen - en çok severek)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Örnekler)</h4>
                <ul className="text-sm text-amber-100 list-disc pl-5 space-y-1">
                  <li>Deze broek is duur. (Bu pantolon pahalı.)</li>
                  <li>Deze broek is <strong>duurder dan</strong> die broek. (Bu pantolon o pantolondan daha pahalı.)</li>
                  <li>Deze broek is <strong>het duurst</strong>. (Bu pantolon en pahalısı.)</li>
                  <li>Ik drink <strong>graag</strong> koffie. (Kahve içmeyi severim.)</li>
                  <li>Ik drink <strong>liever</strong> thee. (Çay içmeyi tercih ederim.)</li>
                  <li>Ik drink <strong>het liefst</strong> cappuccino. (En çok cappuccino içmeyi severim.)</li>
                  <li>De broek is <strong>even duur als</strong> het t-shirt. (Pantolon, tişört ile AYNI / EŞİT pahalılıkta.)</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>👉 Aanwijzende Voornaamwoorden (Dit, Dat, Deze, Die)</h3>
              <p className="text-sm text-slate-300 mb-3">İşaret zamirleri (Bu, Şu, O), ismin <strong>de-woord</strong> veya <strong>het-woord</strong> olmasına ve yakınlık/uzaklığına göre değişir. Çoğul (plural) kelimeler her zaman 'de-woord' kurallarına uyar.</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-200">
                    <th className="py-2">Soort Woord</th>
                    <th className="py-2">Dichtbij (Yakın) - BU</th>
                    <th className="py-2">Verder weg (Uzak) - O/ŞU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-semibold text-rose-300">de-woord</td>
                    <td className="py-3"><strong>deze</strong> broek</td>
                    <td className="py-3"><strong>die</strong> broek</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-semibold text-rose-300">het-woord</td>
                    <td className="py-3"><strong>dit</strong> shirt</td>
                    <td className="py-3"><strong>dat</strong> shirt</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-rose-300">meervoud (çoğul)</td>
                    <td className="py-3"><strong>deze</strong> schoenen</td>
                    <td className="py-3"><strong>die</strong> schoenen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>🔄 Objecten Verwijzen (Nesnelere Atıfta Bulunmak)</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada nesnelerden bahsederken "it / they" yerine ismin türüne göre zamir seçeriz:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2 mb-3">
                <li><strong>de-word</strong> için ➔ <strong>hij / hem</strong> kullanırız.</li>
                <li><strong>het-word</strong> için ➔ <strong>het / het</strong> kullanırız.</li>
                <li><strong>meervoud (çoğul)</strong> (birkaç nesne) için ➔ <strong>ze / ze</strong> kullanırız.</li>
              </ul>

              <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Örnekler)</h4>
                <ul className="text-sm text-indigo-100 list-disc pl-5 space-y-1">
                  <li>de deur ➔ Waar is <strong>hij</strong>?</li>
                  <li>het huis ➔ Waar is <strong>het</strong>?</li>
                  <li>de glazen (çoğul) ➔ Waar zijn <strong>ze</strong>?</li>
                  <li>De telefoon (de) ➔ Ik heb <strong>hem</strong> in mijn hand. (Onu elimde tutuyorum).</li>
                  <li>Het glas (het) ➔ Ik heb <strong>het</strong> in mijn hand.</li>
                  <li>De glazen (çoğul) ➔ Ik heb <strong>ze</strong> in mijn hand.</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Small Talk & Repetitie Les 6</h3>
              <p className="text-sm text-slate-300 mb-2">Frequently used phrases in daily conversation and review of Lesson 6:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Dagelijkse gesprekken (Daily talks)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Hoe was jouw dag vandaag?</strong> (How was your day today?)</li>
                    <li><strong>Mijn dag was oké / Niks speciaals.</strong> (My day was okay / Nothing special.)</li>
                    <li><strong>Dat is niet leuk.</strong> (That is not fun.) / <strong>Leuk</strong> = fun.</li>
                    <li><strong>Wat hebben wij gisteren geleerd?</strong> (What have we learned yesterday?)</li>
                    <li><strong>Wij hebben gisteren Nederlands geleerd.</strong></li>
                    <li><strong>Ik vind auto's leuk.</strong> (I like cars.)</li>
                    <li><strong>Ik haat...</strong> (I hate...) / <strong>Ik hou van...</strong> (I love...)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Repetitie Les 6 (Review)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wat wil je drinken?</strong> ➔ Ik wil cola drinken.</li>
                    <li><strong>Hoe vind je de soep?</strong> ➔ Ik vind de soep lekker.</li>
                    <li><strong>Mag ik een lepel?</strong> ➔ Ja, hier is jouw lepel.</li>
                    <li><strong>Alsjeblieft</strong> = Here you go / You're welcome / Please.</li>
                    <li><strong>Mag ik de rekening?</strong> = Can I have the bill?</li>
                    <li><strong>Mag ik pinnen?</strong> = Can I pay by card?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>👗 Kleuren en Kleding (Colors and Clothes)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-200 mb-4 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <div><strong className="text-purple-300">wit:</strong> white</div>
                <div><strong className="text-purple-300">zwart:</strong> black</div>
                <div><strong className="text-purple-300">grijs:</strong> grey</div>
                <div><strong className="text-purple-300">rood:</strong> red</div>
                <div><strong className="text-purple-300">blauw:</strong> blue</div>
                <div><strong className="text-purple-300">geel:</strong> yellow</div>
                <div><strong className="text-purple-300">groen:</strong> green</div>
                <div><strong className="text-purple-300">bruin:</strong> brown</div>
                <div><strong className="text-purple-300">paars:</strong> purple</div>
                <div><strong className="text-purple-300">roze:</strong> pink</div>
                <div><strong className="text-purple-300">oranje:</strong> orange</div>
                <div className="col-span-2"><strong className="text-purple-300">lichtblauw / donkerblauw:</strong> light/dark blue</div>
              </div>
              
              <h4 className="font-bold text-purple-300 text-sm mb-2">Kledingstukken (Clothing items)</h4>
              <ul className="text-sm text-slate-200 grid grid-cols-1 md:grid-cols-3 gap-2 list-disc pl-5">
                <li><strong>de broek:</strong> trousers/pants</li>
                <li><strong>de spijkerbroek:</strong> jeans</li>
                <li><strong>het T-shirt:</strong> t-shirt</li>
                <li><strong>de trui:</strong> jumper/sweater</li>
                <li><strong>de bloes:</strong> blouse</li>
                <li><strong>het overhemd:</strong> button-up shirt</li>
                <li><strong>de rok:</strong> skirt</li>
                <li><strong>de jurk:</strong> dress</li>
                <li><strong>de jas:</strong> coat/jacket</li>
                <li><strong>de schoenen:</strong> shoes</li>
                <li><strong>het pak:</strong> suit</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🛍️ In de Kledingwinkel (In the Clothing Store)</h3>
              
              <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30 mb-4">
                <h4 className="text-emerald-300 font-bold text-xs uppercase mb-1">Dialogue Summary (Les 7)</h4>
                <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                  <li><strong>Waar is Sandra en waarom is ze daar?</strong> ➔ Ze is in de kledingwinkel om een spijkerbroek te kopen.</li>
                  <li><strong>Welke maat (size) heeft ze?</strong> ➔ Zij heeft maat veertig (40).</li>
                  <li><strong>Welke kleur en welk model spijkerbroek zoekt ze?</strong> ➔ Ze zoekt een lichte spijkerbroek, een laag (low) model.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-400 text-sm mb-1">Belangrijke Zinnen (Important Phrases)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Kunt u mij helpen?</strong> (Can you help me?)</li>
                    <li><strong>Ik zoek een spijkerbroek.</strong> (I am looking for jeans.)</li>
                    <li><strong>Ik wil graag een lichte spijkerbroek.</strong> (I would like light jeans.)</li>
                    <li><strong>Waar kan ik ze passen?</strong> (Where can I try them on?)</li>
                    <li><strong>Hebt u hem in een kleinere/grotere maat?</strong> (Do you have it in a smaller/larger size?)</li>
                    <li><strong>Kan ik hem eventueel nog ruilen?</strong> (Can I possibly exchange it?)</li>
                    <li><strong>Contant betalen / Met cash betalen.</strong> (Pay with cash.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400 text-sm mb-1">Passen en Maten (Fitting and Sizes)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Welke maat hebt u?</strong> ➔ Ik heb maat 40.</li>
                    <li><strong>Welk model zoekt u?</strong> ➔ Ik zoek een laag model.</li>
                    <li><strong>Daar zijn de paskamers.</strong> (The fitting rooms are over there.)</li>
                    <li><strong>Hoe zit de broek?</strong> (How do the pants fit?)</li>
                    <li><strong>Hij is te wijd.</strong> (It is too loose.)</li>
                    <li><strong>Hij is te strak.</strong> (It is too tight.)</li>
                    <li><strong>Hij zit goed.</strong> (It fits well.)</li>
                    <li><strong>Dit shirt staat me goed.</strong> (This shirt suits me well.)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⚖️ Comparatief en Superlatief (Comparative & Superlative)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Regelmatig (Regular)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>klein - kleiner - het kleinst (small - smaller - smallest)</li>
                    <li>duur - duurder - het duurst (expensive - more expensive - most expensive)</li>
                    <li>mooi - mooier - het mooist (beautiful - more beautiful - most beautiful)</li>
                    <li>zwaar - zwaarder - het zwaarst (heavy - heavier - heaviest)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Onregelmatig (Irregular)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>goed - beter - het best</strong> (good - better - best)</li>
                    <li><strong>veel - meer - het meest</strong> (much/many - more - most)</li>
                    <li><strong>weinig - minder - het minst</strong> (few/little - fewer/less - least)</li>
                    <li><strong>graag - liever - het liefst</strong> (like - prefer - like the most)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Examples)</h4>
                <ul className="text-sm text-amber-100 list-disc pl-5 space-y-1">
                  <li>Deze broek is duur. (These pants are expensive.)</li>
                  <li>Deze broek is <strong>duurder dan</strong> die broek. (These pants are more expensive than those pants.)</li>
                  <li>Deze broek is <strong>het duurst</strong>. (These pants are the most expensive.)</li>
                  <li>Ik drink <strong>graag</strong> koffie. (I like to drink coffee.)</li>
                  <li>Ik drink <strong>liever</strong> thee. (I prefer to drink tea.)</li>
                  <li>Ik drink <strong>het liefst</strong> cappuccino. (I like drinking cappuccino the most.)</li>
                  <li>De broek is <strong>even duur als</strong> het t-shirt. (The pants are AS expensive AS the t-shirt.)</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>👉 Aanwijzende Voornaamwoorden (Dit, Dat, Deze, Die)</h3>
              <p className="text-sm text-slate-300 mb-3">Demonstrative pronouns change based on whether the noun is a <strong>de-woord</strong> or <strong>het-woord</strong> and its proximity. Plural words always follow the 'de-woord' rules.</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-200">
                    <th className="py-2">Soort Woord</th>
                    <th className="py-2">Dichtbij (Close / Nearby) - THIS</th>
                    <th className="py-2">Verder weg (Far away) - THAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-semibold text-rose-300">de-woord</td>
                    <td className="py-3"><strong>deze</strong> broek</td>
                    <td className="py-3"><strong>die</strong> broek</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-semibold text-rose-300">het-woord</td>
                    <td className="py-3"><strong>dit</strong> shirt</td>
                    <td className="py-3"><strong>dat</strong> shirt</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-rose-300">meervoud (plural)</td>
                    <td className="py-3"><strong>deze</strong> schoenen</td>
                    <td className="py-3"><strong>die</strong> schoenen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>🔄 Objecten Verwijzen (Referring to Objects)</h3>
              <p className="text-sm text-slate-300 mb-2">When talking about objects in Dutch, we choose the pronoun based on the gender of the noun instead of using a generic "it":</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-2 mb-3">
                <li>for a <strong>de-word</strong> ➔ we use <strong>hij / hem</strong>.</li>
                <li>for a <strong>het-word</strong> ➔ we use <strong>het / het</strong>.</li>
                <li>for a <strong>meervoud (plural)</strong> ➔ we use <strong>ze / ze</strong>.</li>
              </ul>

              <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Examples)</h4>
                <ul className="text-sm text-indigo-100 list-disc pl-5 space-y-1">
                  <li>de deur ➔ Waar is <strong>hij</strong>?</li>
                  <li>het huis ➔ Waar is <strong>het</strong>?</li>
                  <li>de glazen (plural) ➔ Waar zijn <strong>ze</strong>?</li>
                  <li>De telefoon (de) ➔ Ik heb <strong>hem</strong> in mijn hand. (I have it in my hand).</li>
                  <li>Het glas (het) ➔ Ik heb <strong>het</strong> in mijn hand.</li>
                  <li>De glazen (plural) ➔ Ik heb <strong>ze</strong> in mijn hand.</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Kleding & Winkelen (Clothes & Shopping)",
        isExtra: false,
        questions: [
          { id: "7_onclass_1_1", type: "multiple_choice", question: "Wat is 'de spijkerbroek' in het Engels of Turks?", options: ["the suit / takım", "jeans / kot pantolon", "the skirt / etek"], correctAnswer: "jeans / kot pantolon" },
          { id: "7_onclass_1_2", type: "fill_in", question: "Ik wil deze broek aandoen (try on). Waar zijn de ________? (fitting rooms)", correctAnswer: "paskamers" },
          { id: "7_onclass_1_3", type: "fill_in", question: "De broek is te klein. Hebt u hem in een ________ maat? (larger)", correctAnswer: "grotere" },
          { id: "7_onclass_1_4", type: "multiple_choice", question: "Hoe zeg je 'It is too wide / O çok bol'?", options: ["Hij is te strak.", "Hij is te wijd.", "Hij zit goed."], correctAnswer: "Hij is te wijd." },
          { id: "7_onclass_1_5", type: "fill_in", question: "Kan ik ________ betalen? (to pay by cash)", correctAnswer: "contant" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Comparatief en Superlatief (Comparative & Superlative)",
        isExtra: false,
        questions: [
          { id: "7_onclass_2_1", type: "fill_in", question: "klein - kleiner - het ________", correctAnswer: "kleinst" },
          { id: "7_onclass_2_2", type: "fill_in", question: "duur - ________ - het duurst", correctAnswer: "duurder" },
          { id: "7_onclass_2_3", type: "fill_in", question: "goed - beter - het ________ (irregular!)", correctAnswer: "best" },
          { id: "7_onclass_2_4", type: "fill_in", question: "graag - liever - het ________ (irregular!)", correctAnswer: "liefst" },
          { id: "7_onclass_2_5", type: "multiple_choice", question: "Welke zin is correct voor 'I prefer to drink tea'?", options: ["Ik drink het liefst thee.", "Ik drink graag thee.", "Ik drink liever thee."], correctAnswer: "Ik drink liever thee." },
          { id: "7_onclass_2_6", type: "fill_in", question: "De broek is ________ duur als het T-shirt. (as expensive as)", correctAnswer: "even" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Aanwijzende Voornaamwoorden (Dit, Dat, Deze, Die)",
        isExtra: true,
        questions: [
          { id: "7_onclass_3_1", type: "multiple_choice", question: "Het woord is 'de broek' (dichtbij / close). Welk woord gebruik je?", options: ["deze", "die", "dit"], correctAnswer: "deze" },
          { id: "7_onclass_3_2", type: "multiple_choice", question: "Het woord is 'het overhemd' (verder weg / far away). Welk woord gebruik je?", options: ["dat", "dit", "die"], correctAnswer: "dat" },
          { id: "7_onclass_3_3", type: "multiple_choice", question: "Het woord is 'de schoenen' (meervoud / plural / dichtbij). Welk woord gebruik je?", options: ["deze", "die", "dit"], correctAnswer: "deze" },
          { id: "7_onclass_3_4", type: "fill_in", question: "Mag ik ________ broek even passen? (die/dat - far away)", correctAnswer: "die" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Objecten Verwijzen (Hij/Hem, Het, Ze)",
        isExtra: true,
        questions: [
          { id: "7_onclass_4_1", type: "multiple_choice", question: "Waar is de deur? Waar is ________?", options: ["hij", "het", "ze"], correctAnswer: "hij" },
          { id: "7_onclass_4_2", type: "multiple_choice", question: "Ik zoek het huis. Ik kan ________ niet vinden.", options: ["hem", "het", "ze"], correctAnswer: "het" },
          { id: "7_onclass_4_3", type: "fill_in", question: "Ik zie de glazen (plural). Waar zijn ________?", correctAnswer: "ze" },
          { id: "7_onclass_4_4", type: "fill_in", question: "Dit is mijn nieuwe telefoon (de-woord). Ik heb ________ in mijn hand.", correctAnswer: "hem" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Dagelijkse Gesprekken (Repetitie / Review)",
        isExtra: true,
        questions: [
          { id: "7_onclass_5_1", type: "multiple_choice", question: "Iemand vraagt: 'Hoe was jouw dag vandaag?'. Wat is een goed antwoord?", options: ["Ik vind de soep lekker.", "Niks speciaals.", "Hier is jouw lepel."], correctAnswer: "Niks speciaals." },
          { id: "7_onclass_5_2", type: "fill_in", question: "Vertaal: 'Can I pay by card?' -> Mag ik ________?", correctAnswer: "pinnen" },
          { id: "7_onclass_5_3", type: "multiple_choice", question: "Hoe zeg je 'I love...' in het Nederlands?", options: ["Ik vind...", "Ik haat...", "Ik hou van..."], correctAnswer: "Ik hou van..." }
        ]
      }
    ]
  }
];