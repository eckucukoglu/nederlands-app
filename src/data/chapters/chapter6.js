// src/data/chapters/chapter6.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter6Vocab = [
  { id: "6_1", chapter: 6, nl: "de vriendin", en: "(girl)friend", example: "Jasper gaat met zijn vriendin eten." },
  { id: "6_2", chapter: 6, nl: "het restaurant", en: "restaurant", example: "We eten in het restaurant." },
  { id: "6_3", chapter: 6, nl: "de serveerster", en: "waitress", example: "De serveerster brengt het eten." },
  { id: "6_4", chapter: 6, nl: "de tafel", en: "table", example: "Hebt u een tafel voor ons?" },
  { id: "6_5", chapter: 6, nl: "ons", en: "us", example: "Een tafel voor ons." },
  { id: "6_6", chapter: 6, nl: "bij", en: "at", example: "Mogen we bij het raam zitten?" },
  { id: "6_7", chapter: 6, nl: "het raam", en: "window", example: "Een tafel bij het raam." },
  { id: "6_8", chapter: 6, nl: "gaan zitten", en: "sit down", example: "Jullie kunnen daar gaan zitten." },
  { id: "6_9", chapter: 6, nl: "de menukaart", en: "menu", example: "Hier is de menukaart." },
  { id: "6_10", chapter: 6, nl: "alvast", en: "in the meantime", example: "Willen jullie alvast iets drinken?" },
  { id: "6_11", chapter: 6, nl: "te", en: "to", example: "Iets te drinken?" },
  { id: "6_12", chapter: 6, nl: "het mineraalwater", en: "mineral water", example: "Mag ik een mineraalwater?" },
  { id: "6_13", chapter: 6, nl: "ik heb dorst", en: "I'm thirsty", example: "Ik neem water, ik heb dorst." },
  { id: "6_14", chapter: 6, nl: "de dorst", en: "thirst", example: "Zij heeft erge dorst." },
  { id: "6_15", chapter: 6, nl: "mij", en: "me", example: "Voor mij ook graag." },
  { id: "6_16", chapter: 6, nl: "alleen", en: "only / just", example: "Nemen we alleen een hoofdgerecht?" },
  { id: "6_17", chapter: 6, nl: "het hoofdgerecht", en: "main course", example: "Als hoofdgerecht wil ik de biefstuk." },
  { id: "6_18", chapter: 6, nl: "ik heb honger", en: "I'm hungry", example: "Ik heb honger, we gaan eten." },
  { id: "6_19", chapter: 6, nl: "de honger", en: "hunger", example: "Hij heeft geen honger." },
  { id: "6_20", chapter: 6, nl: "het voorgerecht", en: "starter", example: "Ik wil ook een voorgerecht." },
  { id: "6_21", chapter: 6, nl: "misschien", en: "perhaps", example: "En misschien ook een nagerecht." },
  { id: "6_22", chapter: 6, nl: "het nagerecht", en: "dessert", example: "Het nagerecht is zoet." },
  { id: "6_23", chapter: 6, nl: "de mosterdsoep", en: "mustard soup", example: "De mosterdsoep is hier lekker." },
  { id: "6_24", chapter: 6, nl: "de mosterd", en: "mustard", example: "Ik eet worst met mosterd." },
  { id: "6_25", chapter: 6, nl: "de soep", en: "soup", example: "Soep eet je met een lepel." },
  { id: "6_26", chapter: 6, nl: "erg", en: "very", example: "Dat is erg lekker." },
  { id: "6_27", chapter: 6, nl: "als", en: "as", example: "Als hoofdgerecht." },
  { id: "6_28", chapter: 6, nl: "de biefstuk", en: "steak", example: "Ik neem de biefstuk." },
  { id: "6_29", chapter: 6, nl: "frietjes (het frietje)", en: "chips / fries", example: "Biefstuk met frietjes." },
  { id: "6_30", chapter: 6, nl: "eh", en: "um", example: "Eh, ik neem de salade." },
  { id: "6_31", chapter: 6, nl: "de salade", en: "salad", example: "Een gezonde salade." },
  { id: "6_32", chapter: 6, nl: "de kip", en: "chicken", example: "Kip met rijst." },
  { id: "6_33", chapter: 6, nl: "de rijst", en: "rice", example: "Eet je de kip met rijst?" },
  { id: "6_34", chapter: 6, nl: "o nee", en: "oh no", example: "O nee, toch niet." },
  { id: "6_35", chapter: 6, nl: "geen", en: "no", example: "Ik wil geen vlees." },
  { id: "6_36", chapter: 6, nl: "het vlees", en: "meat", example: "Zij eet geen vlees." },
  { id: "6_37", chapter: 6, nl: "toch", en: "after all", example: "Doe toch maar de dagschotel." },
  { id: "6_38", chapter: 6, nl: "vegetarische (vegetarisch)", en: "vegetarian", example: "Een vegetarische schotel." },
  { id: "6_39", chapter: 6, nl: "de dagschotel", en: "today's special", example: "Wat is de dagschotel?" },
  { id: "6_40", chapter: 6, nl: "kiezen", en: "choose", example: "Moeten we dat nu al kiezen?" },
  { id: "6_41", chapter: 6, nl: "eet smakelijk", en: "bon appetit / enjoy your meal", example: "Eet smakelijk!" },
  { id: "6_42", chapter: 6, nl: "het mes", en: "knife", example: "Snijd het met een mes." },
  { id: "6_43", chapter: 6, nl: "de vork", en: "fork", example: "Je eet salade met een vork." },
  { id: "6_44", chapter: 6, nl: "momentje (het moment)", en: "one moment", example: "Momentje, alsjeblieft." },
  { id: "6_45", chapter: 6, nl: "de lepel", en: "spoon", example: "Ik moet een lepel halen." },
  { id: "6_46", chapter: 6, nl: "halen", en: "fetch / get", example: "Ik ga koffie halen." },
  { id: "6_47", chapter: 6, nl: "beetje", en: "a little", example: "Een beetje moeilijk." },
  { id: "6_48", chapter: 6, nl: "moeilijk", en: "difficult", example: "Soep eten met een vork is moeilijk." },
  { id: "6_49", chapter: 6, nl: "het gaat wel", en: "it's okay / so so", example: "Het gaat wel." },
  { id: "6_50", chapter: 6, nl: "de soort", en: "kind / type", example: "Het is een soort paella." },
  { id: "6_51", chapter: 6, nl: "de paella", en: "paella", example: "Spaanse paella." },
  { id: "6_52", chapter: 6, nl: "houd van (houden van)", en: "like / love", example: "Ik houd niet zo van mosselen." },
  { id: "6_53", chapter: 6, nl: "de mosselen", en: "mussels", example: "Mosselen met friet." },
  { id: "6_54", chapter: 6, nl: "proef (proeven)", en: "try / taste", example: "Hier, proef maar wat." },
  { id: "6_55", chapter: 6, nl: "wat", en: "a little / a bit", example: "Proef maar wat." },
  { id: "6_56", chapter: 6, nl: "een beetje", en: "a bit", example: "Het is een beetje vet." },
  { id: "6_57", chapter: 6, nl: "vet", en: "greasy / rich / fat", example: "Dit vlees is vet." },
  { id: "6_58", chapter: 6, nl: "het toetje", en: "dessert", example: "Kan ik een toetje bestellen?" },
  { id: "6_59", chapter: 6, nl: "het ijs", en: "ice cream", example: "Ik wil graag ijs." },
  { id: "6_60", chapter: 6, nl: "vruchten (de vrucht)", en: "fruit", example: "IJs met vruchten." },
  { id: "6_61", chapter: 6, nl: "de chocola", en: "chocolate", example: "Chocola is lekker." },
  { id: "6_62", chapter: 6, nl: "de slagroom", en: "whipped cream", example: "Koffie met slagroom." },
  { id: "6_63", chapter: 6, nl: "zonder", en: "without", example: "Nee, zonder slagroom." },
  { id: "6_64", chapter: 6, nl: "de cappuccino", en: "cappuccino", example: "Een cappuccino, alstublieft." },
  { id: "6_65", chapter: 6, nl: "de rekening", en: "bill", example: "Mogen we de rekening?" },
  { id: "6_66", chapter: 6, nl: "laat de rest maar zitten", en: "that's fine / keep the change", example: "Laat de rest maar zitten." },
  { id: "6_67", chapter: 6, nl: "laten", en: "leave", example: "Laat dat maar." },
  { id: "6_68", chapter: 6, nl: "dank u", en: "thank you (formal)", example: "Dank u wel." },
  { id: "6_69", chapter: 6, nl: "de avond", en: "evening", example: "Een fijne avond verder." }
];

export const chapter6Dialogues = {
  "6.1": [
    { speaker: "Verteller", text: "De groenteboer, Jasper, gaat met zijn vriendin Christine in een restaurant eten.", translation: { tr: "Manav Jasper, kız arkadaşı Christine ile bir restoranda yemeğe gidiyor.", en: "The greengrocer, Jasper, goes to eat at a restaurant with his girlfriend Christine." } },
    { speaker: "Serveerster", text: "Goedenavond, twee personen?", translation: { tr: "İyi akşamlar, iki kişi misiniz?", en: "Good evening, for two people?" } },
    { speaker: "Jasper", text: "Ja, hebt u een tafel voor ons? Mogen we bij het raam zitten?", translation: { tr: "Evet, bizim için bir masanız var mı? Cam kenarında oturabilir miyiz?", en: "Yes, do you have a table for us? May we sit by the window?" } },
    { speaker: "Serveerster", text: "Ja hoor, jullie kunnen daar gaan zitten. Hier is de menukaart. Willen jullie alvast iets te drinken bestellen?", translation: { tr: "Evet tabii ki, oraya geçip oturabilirsiniz. İşte menü. Şimdiden (bu arada) içecek bir şeyler sipariş etmek ister misiniz?", en: "Yes sure, you can go sit there. Here is the menu. Would you like to order something to drink in the meantime?" } },
    { speaker: "Jasper", text: "Mag ik een mineraalwater alstublieft? Ik heb dorst.", translation: { tr: "Bir maden suyu alabilir miyim lütfen? Susadım.", en: "May I have a mineral water please? I'm thirsty." } },
    { speaker: "Christine", text: "Voor mij ook graag.", translation: { tr: "Benim için de lütfen.", en: "For me as well, please." } },
    { speaker: "Jasper", text: "Nemen we alleen een hoofdgerecht?", translation: { tr: "Sadece ana yemek mi alıyoruz?", en: "Are we only having a main course?" } },
    { speaker: "Christine", text: "Ik heb honger, ik wil ook graag een voorgerecht en misschien ook een nagerecht.", translation: { tr: "Açım, ben bir başlangıç ve belki bir de tatlı (nagerecht) istiyorum.", en: "I'm hungry, I would also like a starter and maybe a dessert too." } },
    { speaker: "Jasper", text: "Dan neem ik ook een voorgerecht. De mosterdsoep is hier altijd erg lekker. Als hoofdgerecht wil ik de biefstuk met frietjes. Weet jij het ook al?", translation: { tr: "O zaman ben de bir başlangıç alıyorum. Buradaki hardal çorbası her zaman çok lezzetli. Ana yemek olarak patates kızartmalı biftek istiyorum. Sen de (ne yiyeceğini) biliyor musun?", en: "Then I'll take a starter too. The mustard soup here is always very tasty. As a main course I want the steak with fries. Do you already know?" } },
    { speaker: "Christine", text: "Eh, ik neem de Spaanse salade en kip met rijst. O nee, ik wil geen vlees, doe toch maar de vegetarische dagschotel. Moeten we het nagerecht nu al kiezen?", translation: { tr: "Ih, ben İspanyol salatası ile tavuklu pilav alıyorum. Oh hayır, et istemiyorum, onun yerine vejetaryen günün menüsünü (dagschotel) verin. Tatlıyı şimdiden seçmek zorunda mıyız?", en: "Um, I'll have the Spanish salad and chicken with rice. Oh no, I don't want meat, I'll have the vegetarian dish of the day instead. Do we have to choose the dessert now?" } },
    { speaker: "Jasper", text: "Nee, zullen we dat later doen?", translation: { tr: "Hayır, onu sonra yapalım mı?", en: "No, shall we do that later?" } },
    { speaker: "Verteller", text: "(even later)", translation: { tr: "(biraz sonra)", en: "(a moment later)" } },
    { speaker: "Serveerster", text: "Alstublieft, een mosterdsoep en een Spaanse salade. Eet smakelijk. O, jullie hebben alleen een mes en vork. Momentje, ik moet even een lepel halen.", translation: { tr: "Buyurun, bir hardal çorbası ve bir İspanyol salatası. Afiyet olsun. Oh, sadece bıçağınız ve çatalınız var. Bir saniye, hemen bir kaşık getirmeliyim (almalıyım).", en: "Here you go, a mustard soup and a Spanish salad. Enjoy your meal. Oh, you only have a knife and fork. One moment, I need to fetch a spoon." } },
    { speaker: "Jasper", text: "Ja, graag. Soep eten met een vork is een beetje moeilijk.", translation: { tr: "Evet, lütfen. Çorbayı çatalla yemek biraz zor.", en: "Yes, please. Eating soup with a fork is a bit difficult." } },
    { speaker: "Verteller", text: "(even later)", translation: { tr: "(biraz sonra)", en: "(a moment later)" } },
    { speaker: "Christine", text: "Hoe vind je de soep?", translation: { tr: "Çorbayı nasıl buldun?", en: "How do you find the soup?" } },
    { speaker: "Jasper", text: "Heerlijk! En hoe is jouw salade?", translation: { tr: "Harika (Lezzetli)! Peki senin salatan nasıl?", en: "Delicious! And how is your salad?" } },
    { speaker: "Christine", text: "Hm, het gaat wel. Het is een soort paella en ik houd niet zo van mosselen. Hier, proef maar wat.", translation: { tr: "Hm, fena değil (idare eder). Bu bir çeşit paella ve ben midyeden pek hoşlanmıyorum (sevmiyorum). Al, biraz tat.", en: "Hm, it's okay. It's a kind of paella and I don't really like mussels. Here, try some." } },
    { speaker: "Jasper", text: "Mmm, ik vind het lekker, maar wel een beetje vet.", translation: { tr: "Mmm, bence lezzetli, ama biraz yağlı.", en: "Mmm, I think it's tasty, but a bit greasy." } },
    { speaker: "Verteller", text: "(even later)", translation: { tr: "(yine biraz sonra)", en: "(again a moment later)" } },
    { speaker: "Christine", text: "Kan ik een toetje bestellen? Ik wil graag ijs met vruchten en chocola.", translation: { tr: "Bir tatlı (toetje) sipariş edebilir miyim? Meyveli ve çikolatalı dondurma istiyorum.", en: "Can I order a dessert? I would like ice cream with fruit and chocolate." } },
    { speaker: "Serveerster", text: "Met slagroom?", translation: { tr: "Krem şantili mi?", en: "With whipped cream?" } },
    { speaker: "Christine", text: "Nee, zonder slagroom.", translation: { tr: "Hayır, krem şantisiz.", en: "No, without whipped cream." } },
    { speaker: "Jasper", text: "Voor mij alleen een cappuccino.", translation: { tr: "Benim için sadece bir cappuccino.", en: "For me just a cappuccino." } },
    { speaker: "Verteller", text: "(even later)", translation: { tr: "(biraz sonra)", en: "(a moment later)" } },
    { speaker: "Jasper", text: "Mogen we de rekening?", translation: { tr: "Hesabı alabilir miyiz?", en: "May we have the bill?" } },
    { speaker: "Serveerster", text: "Alstublieft, het is € 65,-.", translation: { tr: "Buyurun, 65 Euro.", en: "Here you go, it is € 65,-." } },
    { speaker: "Jasper", text: "Alstublieft, zeventig euro. Laat de rest maar zitten.", translation: { tr: "Buyurun, yetmiş euro. Üstü kalsın (gerisini bırakın).", en: "Here you go, seventy euros. Keep the change (leave the rest)." } },
    { speaker: "Serveerster", text: "Dank u wel en een fijne avond verder.", translation: { tr: "Teşekkür ederim ve iyi akşamlar.", en: "Thank you and have a nice evening." } },
    { speaker: "Jasper", text: "Bedankt, u ook. Tot ziens!", translation: { tr: "Teşekkürler, size de. Görüşmek üzere!", en: "Thanks, you too. Goodbye!" } }
  ]
};

export const chapter6Sections = [
  {
    id: "6.1",
    chapter: 6,
    title: "6.1 Dialoog: In een restaurant",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In een restaurant</h3>
            <p>Manav Jasper ve kız arkadaşı Christine restoranda yemeğe gidiyorlar. Hollandacada restoranda kullanılan temel kelimelere dikkat edin:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Ik heb dorst / Ik heb honger:</strong> Susadım / Açım.</li>
              <li><strong>Gangen (Kurslar):</strong> het voorgerecht (başlangıç), het hoofdgerecht (ana yemek), het nagerecht / het toetje (tatlı).</li>
              <li><strong>Bestek (Çatal Bıçak Takımı):</strong> de lepel (kaşık), het mes (bıçak), de vork (çatal).</li>
              <li><strong>Laat de rest maar zitten:</strong> Üstü kalsın (Bahşiş bırakırken).</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: In a restaurant</h3>
            <p>Greengrocer Jasper and his girlfriend Christine go out to eat in a restaurant. Pay attention to the basic vocabulary used in a restaurant in Dutch:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Ik heb dorst / Ik heb honger:</strong> I'm thirsty / I'm hungry.</li>
              <li><strong>Gangen (Courses):</strong> het voorgerecht (starter), het hoofdgerecht (main course), het nagerecht / het toetje (dessert).</li>
              <li><strong>Bestek (Cutlery):</strong> de lepel (spoon), het mes (knife), de vork (fork).</li>
              <li><strong>Laat de rest maar zitten:</strong> Keep the change (When leaving a tip).</li>
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
          { id: "6.1_opd1_1", type: "multiple_choice", question: "1. Jasper en Christine willen bij het raam zitten.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_2", type: "multiple_choice", question: "2. Jasper neemt alleen een hoofdgerecht.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "6.1_opd1_3", type: "multiple_choice", question: "3. Christine neemt de Spaanse salade als voorgerecht.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_4", type: "multiple_choice", question: "4. De serveerster moet nog een vork halen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "6.1_opd1_5", type: "multiple_choice", question: "5. Jasper vindt de soep erg lekker.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_6", type: "multiple_choice", question: "6. Christine neemt een nagerecht.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_7", type: "multiple_choice", question: "7. Jasper geeft een fooi (bahşiş / tip).", options: ["waar", "niet waar"], correctAnswer: "waar" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Woorden en Begrip",
        isExtra: true,
        questions: [
          { id: "6.1_smart_1", type: "multiple_choice", question: "Wat mist de serveerster (wat moet ze halen)?", options: ["een mes", "een vork", "een lepel"], correctAnswer: "een lepel" },
          { id: "6.1_smart_2", type: "multiple_choice", question: "Waarmee (ne ile / with what) eet je soep?", options: ["Met een vork", "Met een mes", "Met een lepel"], correctAnswer: "Met een lepel" },
          ...generateSmartQuestions(6, "Woordenlijst", 5, chapter6Vocab)
        ]
      }
    ]
  },
  {
    id: "6.3",
    chapter: 6,
    title: "6.3 Meningen (Fikir Belirtmek / Expressing Opinions)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>💭 Vragen hoe iemand iets vindt (Fikir Sormak)</h3>
              <p className="text-sm text-slate-300">Birine bir yemeği veya bir şeyi nasıl bulduğunu sormak için <strong>"Hoe vind je...?"</strong> veya <strong>"Wat vind je van...?"</strong> kalıpları kullanılır.</p>
              <ul style={{ margin: '10px 0', color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Hoe vind je de soep? (Çorbayı nasıl buldun?)</li>
                <li>Wat vind je van de soep? (Çorba hakkında ne düşünüyorsun?)</li>
                <li>Houd je van kip? (Tavuk sever misin?)</li>
              </ul>

              <div className="bg-purple-900/30 p-4 rounded-xl mt-4 border border-purple-500/30">
                <h4 className="font-bold text-purple-300 mb-2">💡 ON-CLASS: "Ik vind ... leuk" vs "Ik houd van"</h4>
                <p className="text-sm text-purple-100">Hollandacada bir yemeğin lezzetini belirtirken <strong>lekker</strong> (lezzetli), <strong>heerlijk</strong> (harika) veya <strong>vies</strong> (iğrenç) sıfatları kullanılır. <br/>
                Eğer bir eşyayı/filmi/durumu değerlendiriyorsanız <strong>leuk</strong> (güzel/eğlenceli) veya <strong>mooi</strong> (güzel/göze hitap eden) kullanılır.</p>
                <p className="text-sm text-slate-300 mt-2 italic">Not: <strong>"Ik houd van" (I like / I love)</strong> genel olarak sevdiğiniz şeyleri belirtirken kullanılır (Örn: Ik houd van kip - Tavuk severim).</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-900/20 p-4 rounded-xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-300 mb-2">✅ Positieve meningen</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>++ (ik vind het) <strong>heerlijk</strong> (harika)</li>
                  <li>+ (ik vind het) <strong>lekker</strong> (lezzetli)</li>
                </ul>
              </div>
              <div className="bg-rose-900/20 p-4 rounded-xl border-l-4 border-rose-500">
                <h4 className="font-bold text-rose-300 mb-2">❌ Negatieve meningen</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>+- <strong>het gaat wel</strong> (idare eder / so so)</li>
                  <li>+- ik houd <strong>niet zo</strong> van... (pek sevmem)</li>
                  <li>-- ik houd <strong>niet</strong> van... (sevmem)</li>
                  <li>-- (ik vind het) <strong>niet lekker</strong> (lezzetsiz)</li>
                  <li>-- (ik vind het) <strong>vies</strong> (iğrenç/kötü)</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>💭 Vragen hoe iemand iets vindt (Asking Opinions)</h3>
              <p className="text-sm text-slate-300">To ask someone how they like a dish or something else, use the patterns <strong>"Hoe vind je...?"</strong> or <strong>"Wat vind je van...?"</strong>.</p>
              <ul style={{ margin: '10px 0', color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Hoe vind je de soep? (How do you find the soup?)</li>
                <li>Wat vind je van de soep? (What do you think of the soup?)</li>
                <li>Houd je van kip? (Do you like chicken?)</li>
              </ul>

              <div className="bg-purple-900/30 p-4 rounded-xl mt-4 border border-purple-500/30">
                <h4 className="font-bold text-purple-300 mb-2">💡 ON-CLASS: "Ik vind ... leuk" vs "Ik houd van"</h4>
                <p className="text-sm text-purple-100">In Dutch, to express the taste of food, adjectives like <strong>lekker</strong> (tasty), <strong>heerlijk</strong> (delicious), or <strong>vies</strong> (disgusting) are used. <br/>
                If you are evaluating an object/movie/situation, <strong>leuk</strong> (fun/nice) or <strong>mooi</strong> (beautiful/nice to look at) are used.</p>
                <p className="text-sm text-slate-300 mt-2 italic">Note: <strong>"Ik houd van" (I like / I love)</strong> is generally used to indicate things you like in general (Ex: Ik houd van kip - I like chicken).</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-900/20 p-4 rounded-xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-300 mb-2">✅ Positive opinions</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>++ (ik vind het) <strong>heerlijk</strong> (delicious/wonderful)</li>
                  <li>+ (ik vind het) <strong>lekker</strong> (tasty)</li>
                </ul>
              </div>
              <div className="bg-rose-900/20 p-4 rounded-xl border-l-4 border-rose-500">
                <h4 className="font-bold text-rose-300 mb-2">❌ Negative opinions</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>+- <strong>het gaat wel</strong> (it's okay / so so)</li>
                  <li>+- ik houd <strong>niet zo</strong> van... (I don't really like...)</li>
                  <li>-- ik houd <strong>niet</strong> van... (I don't like...)</li>
                  <li>-- (ik vind het) <strong>niet lekker</strong> (not tasty)</li>
                  <li>-- (ik vind het) <strong>vies</strong> (disgusting/bad)</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2 (Aangepast): Reageer op de vragen over eten en drinken. (Respond to the questions)",
        isExtra: false,
        questions: [
          { id: "6.3_opd2_1", type: "multiple_choice", question: "Houd je van kip? (Positief antwoord)", options: ["Het gaat wel.", "Ja, ik houd van kip.", "Nee, ik vind het vies."], correctAnswer: "Ja, ik houd van kip." },
          { id: "6.3_opd2_2", type: "multiple_choice", question: "Vind je koffie lekker? (Negatief antwoord)", options: ["Nee, ik vind koffie vies.", "Ja, ik vind het heerlijk.", "Ja, ik houd van koffie."], correctAnswer: "Nee, ik vind koffie vies." },
          { id: "6.3_opd2_3", type: "multiple_choice", question: "Wat vind je van vlees? (+- Neutraal/So so)", options: ["Ik ben er gek op.", "Het gaat wel. Ik eet niet zoveel vlees.", "Het is hartstikke vies."], correctAnswer: "Het gaat wel. Ik eet niet zoveel vlees." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Mening geven (Giving opinions)",
        isExtra: true,
        questions: [
          { id: "6.3_smart_1", type: "multiple_choice", question: "Je eet een pizza, maar hij is heel slecht (very bad). Wat zeg je?", options: ["Ik vind de pizza heerlijk.", "Ik vind de pizza vies.", "Het gaat wel."], correctAnswer: "Ik vind de pizza vies." },
          { id: "6.3_smart_2", type: "fill_in", question: "Vertaal (Translate): 'Tavuk sever misin? / Do you like chicken?' -> ________ je van kip?", correctAnswer: "Houd" }
        ]
      }
    ]
  },
  {
    id: "6.5",
    chapter: 6,
    title: "6.5 Modale werkwoorden (Kiplik Fiiller / Modal Verbs)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔑 Modale Werkwoorden (Çok Önemli Kural!)</h3>
            <p className="text-sm text-slate-300">Hollandacada 5 adet temel "Modal Fiil" vardır: <strong>mogen</strong> (izinli olmak/may), <strong>willen</strong> (istemek), <strong>moeten</strong> (zorunda olmak/must), <strong>kunnen</strong> (yapabilmek/can), <strong>zullen</strong> (yapalım mı?/shall/will).</p>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Pronoun</th><th className="text-left">mogen</th><th className="text-left">willen</th><th className="text-left">moeten</th><th className="text-left">kunnen</th><th className="text-left">zullen</th></tr></thead>
              <tbody>
                <tr><td>ik</td><td><strong>mag</strong></td><td><strong>wil</strong></td><td><strong>moet</strong></td><td><strong>kan</strong></td><td><strong>zal</strong></td></tr>
                <tr><td>jij / je / u</td><td><strong>mag</strong></td><td><strong>wil / wilt</strong></td><td><strong>moet</strong></td><td><strong>kan / kunt</strong></td><td><strong>zal / zult</strong></td></tr>
                <tr><td>hij / zij / het</td><td><strong>mag</strong></td><td><strong>wil</strong></td><td><strong>moet</strong></td><td><strong>kan</strong></td><td><strong>zal</strong></td></tr>
                <tr><td>wij / we / jullie / zij</td><td>mogen</td><td>willen</td><td>moeten</td><td>kunnen</td><td>zullen</td></tr>
              </tbody>
            </table>

            <div className="bg-amber-900/40 p-4 rounded-xl mt-5 border border-amber-500/50">
              <h4 className="text-amber-300 font-bold mb-1">🚨 ALTIN KURAL: Fiillerin Dizilimi</h4>
              <p className="text-sm text-amber-100">Bir cümlede Modal Fiil kullanıyorsanız, <strong>asıl eylemi bildiren fiil (mastar/infinitief halinde) cümlenin EN SONUNA gider!</strong></p>
              <ul className="text-sm italic mt-2 text-white list-disc pl-5">
                <li>Ik <strong>wil</strong> soep <strong>bestellen</strong>. (Soep bestellen wil DENMEZ!)</li>
                <li>De serveerster <strong>moet</strong> een lepel <strong>halen</strong>.</li>
                <li>Jullie <strong>kunnen</strong> daar gaan <strong>zitten</strong>.</li>
                <li><strong>Zullen</strong> we later een nagerecht <strong>kiezen</strong>? (Soru cümlesinde de asıl fiil sondadır!)</li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔑 Modale Werkwoorden (Very Important Rule!)</h3>
            <p className="text-sm text-slate-300">There are 5 basic "Modal Verbs" in Dutch: <strong>mogen</strong> (to be allowed to/may), <strong>willen</strong> (to want), <strong>moeten</strong> (must/to have to), <strong>kunnen</strong> (can/to be able to), <strong>zullen</strong> (shall/will).</p>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Pronoun</th><th className="text-left">mogen</th><th className="text-left">willen</th><th className="text-left">moeten</th><th className="text-left">kunnen</th><th className="text-left">zullen</th></tr></thead>
              <tbody>
                <tr><td>ik</td><td><strong>mag</strong></td><td><strong>wil</strong></td><td><strong>moet</strong></td><td><strong>kan</strong></td><td><strong>zal</strong></td></tr>
                <tr><td>jij / je / u</td><td><strong>mag</strong></td><td><strong>wil / wilt</strong></td><td><strong>moet</strong></td><td><strong>kan / kunt</strong></td><td><strong>zal / zult</strong></td></tr>
                <tr><td>hij / zij / het</td><td><strong>mag</strong></td><td><strong>wil</strong></td><td><strong>moet</strong></td><td><strong>kan</strong></td><td><strong>zal</strong></td></tr>
                <tr><td>wij / we / jullie / zij</td><td>mogen</td><td>willen</td><td>moeten</td><td>kunnen</td><td>zullen</td></tr>
              </tbody>
            </table>

            <div className="bg-amber-900/40 p-4 rounded-xl mt-5 border border-amber-500/50">
              <h4 className="text-amber-300 font-bold mb-1">🚨 GOLDEN RULE: Word Order</h4>
              <p className="text-sm text-amber-100">If you use a Modal Verb in a sentence, <strong>the main verb (in its infinitive form) goes to the VERY END of the sentence!</strong></p>
              <ul className="text-sm italic mt-2 text-white list-disc pl-5">
                <li>Ik <strong>wil</strong> soep <strong>bestellen</strong>. (NOT Soep bestellen wil!)</li>
                <li>De serveerster <strong>moet</strong> een lepel <strong>halen</strong>.</li>
                <li>Jullie <strong>kunnen</strong> daar gaan <strong>zitten</strong>.</li>
                <li><strong>Zullen</strong> we later een nagerecht <strong>kiezen</strong>? (Even in questions, the main verb is at the end!)</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Welk werkwoord is logisch in de zin? (Choose the correct modal verb)",
        isExtra: false,
        questions: [
          { id: "6.5_opd4_1", type: "multiple_choice", question: "1. Wat ________ we drinken? Wijn?", options: ["zullen", "willen"], correctAnswer: "zullen" },
          { id: "6.5_opd4_2", type: "multiple_choice", question: "2. Mijn ouders ________ niet op mijn verjaardag komen.", options: ["kunnen", "moeten"], correctAnswer: "kunnen" },
          { id: "6.5_opd4_3", type: "multiple_choice", question: "3. Hans ________ een jaar in Canada wonen.", options: ["moet", "wil"], correctAnswer: "wil" },
          { id: "6.5_opd4_4", type: "multiple_choice", question: "4. Aan mijn tafel ________ vier personen zitten.", options: ["kunnen", "willen"], correctAnswer: "kunnen" },
          { id: "6.5_opd4_5", type: "multiple_choice", question: "5. Jullie ________ deze opdracht maken.", options: ["willen", "moeten"], correctAnswer: "moeten" },
          { id: "6.5_opd4_6", type: "multiple_choice", question: "6. Jullie ________ samenwerken.", options: ["mogen", "willen"], correctAnswer: "mogen" },
          { id: "6.5_opd4_7", type: "multiple_choice", question: "7. Ik ________ graag een rondje geven.", options: ["wil", "mag"], correctAnswer: "wil" },
          { id: "6.5_opd4_8", type: "multiple_choice", question: "8. ________ ik u iets vragen?", options: ["Mag", "Zal"], correctAnswer: "Mag" },
          { id: "6.5_opd4_9", type: "multiple_choice", question: "9. ________ ik morgen om half negen komen?", options: ["Wil", "Zal"], correctAnswer: "Zal" },
          { id: "6.5_opd4_10", type: "multiple_choice", question: "10. ________ veel Nederlanders Engels spreken?", options: ["Kunnen", "Zullen"], correctAnswer: "Kunnen" }
        ]
      },
      {
        instruction: "Opdracht 5: Vul een vorm in van mogen, willen, moeten, kunnen of zullen. Wat is logisch? (Fill in a form of mogen, willen, moeten, kunnen or zullen.)",
        isExtra: false,
        questions: [
          { id: "6.5_opd5_1", type: "fill_in", question: "1. _________ je in dit café ook iets eten?", correctAnswer: "Kun" },
          { id: "6.5_opd5_2", type: "fill_in", question: "2. Je _________ deze soep eens proeven. Heerlijk!", correctAnswer: "moet" },
          { id: "6.5_opd5_3", type: "fill_in", question: "3. Je _________ ook alleen een voorgerecht nemen. Dat is goed.", correctAnswer: "mag" },
          { id: "6.5_opd5_4", type: "fill_in", question: "4. Ik houd van vis. Ik _________ de paella.", correctAnswer: "wil" },
          { id: "6.5_opd5_5", type: "fill_in", question: "5. _________ je nu al Nederlands spreken? Wat goed!", correctAnswer: "Kun" },
          { id: "6.5_opd5_6", type: "fill_in", question: "6. Mijn achternaam is Alasadi. _________ ik het even spellen? (Teklif/Offer)", correctAnswer: "Zal" },
          { id: "6.5_opd5_7", type: "fill_in", question: "7. _________ ik twee koffie en een glas water alstublieft? (İzin/Rica - Request)", correctAnswer: "Mag" },
          { id: "6.5_opd5_8", type: "fill_in", question: "8. Jonas is zestien jaar. Hij _________ bier bestellen in een café. (Yasak / Not allowed)", correctAnswer: "mag geen" }
        ]
      },
      {
        instruction: "Opdracht 7: Een passend woord invullen.",
        isExtra: false,
        questions: [
          { id: "6.5_opd7_1", type: "fill_in", question: "1. Goedenavond, hebt u nog een tafel ________ twee personen?", correctAnswer: "voor" },
          { id: "6.5_opd7_2", type: "fill_in", question: "2. ________ je dorst?", correctAnswer: "Heb" },
          { id: "6.5_opd7_3", type: "fill_in", question: "3. Mag ________ ik twee biertjes? (Ik)", correctAnswer: "ik" },
          { id: "6.5_opd7_4", type: "fill_in", question: "4. Wat neem jij ________ voorgerecht?", correctAnswer: "als" },
          { id: "6.5_opd7_5", type: "fill_in", question: "5. Soep eet je met een ________.", correctAnswer: "lepel" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Woordvolgorde (Word Order)",
        isExtra: true,
        questions: [
          { id: "6.5_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct? (Let op de positie van het tweede werkwoord / Note the position of the second verb)", options: ["Ik wil bestellen een soep.", "Ik wil een soep bestellen.", "Ik bestel wil een soep."], correctAnswer: "Ik wil een soep bestellen." },
          { id: "6.5_smart_2", type: "multiple_choice", question: "Vertaal: 'Garson bir kaşık getirmek zorunda. / The waitress must fetch a spoon.'", options: ["De serveerster halen moet een lepel.", "De serveerster moet halen een lepel.", "De serveerster moet een lepel halen."], correctAnswer: "De serveerster moet een lepel halen." }
        ]
      }
    ]
  },
  {
    id: "6.6",
    chapter: 6,
    title: "6.6 Tekst: Eetafspraak",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>📄 Tekst: Eetafspraak</h3>
            <p className="text-sm text-slate-300">"Ik ben veel te laat voor een eetafspraak met studievrienden. Mijn hoofd is rood van het fietsen. Niet één tafeltje is vrij in het restaurant. Ik zie mijn vrienden niet direct. Ik moet even zoeken. Ik pak een stoel en wil aan de tafel bij mijn vrienden gaan zitten. De serveerster komt bij mij. Ze vraagt: 'Kan ik u helpen?' Ik zeg: 'Ik wil graag bij die mensen aan tafel zitten.' Ze kijkt naar mij en zegt: 'Dat moet u eerst aan die mensen vragen, meneer!'"</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>📄 Text: Eetafspraak (Dinner appointment)</h3>
            <p className="text-sm text-slate-300">"I am way too late for a dinner appointment with study friends. My head is red from cycling. Not a single table is free in the restaurant. I don't see my friends immediately. I have to look around for a moment. I grab a chair and want to sit at the table with my friends. The waitress comes to me. She asks: 'Can I help you?' I say: 'I would like to sit at the table with those people.' She looks at me and says: 'You must ask those people first, sir!'"</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Wat denkt de serveerster over de ik-persoon? (What does the waitress think?)",
        isExtra: false,
        questions: [
          { id: "6.6_opd9_1", type: "multiple_choice", question: "Waarom zegt de serveerster: 'Dat moet u eerst aan die mensen vragen, meneer!'?", options: ["a) Hij kent de mensen aan die tafel niet.", "b) Hij is niet goed genoeg voor dit restaurant.", "c) Hij wil bij zijn vrienden aan tafel zitten."], correctAnswer: "a) Hij kent de mensen aan die tafel niet." }
        ]
      }
    ]
  },
  {
    id: "6.7",
    chapter: 6,
    title: "6.7 Uitspraak & Cultuur (Fooien)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: i – ie</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 11 & 12:</strong> Hollandacada kısa 'i' (örn: ik, kip, rijst, zitten, vinden) ile uzun 'ie' (örn: biefstuk, frietjes, misschien, bier, vier) sesi arasındaki telaffuz farkı çok önemlidir. Kısa 'i' İngilizcedeki 'sit' kelimesindeki gibi, uzun 'ie' ise İngilizcedeki 'see' kelimesindeki gibi okunur.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Een fooi geven (Bahşiş Vermek)</h3>
              <p className="text-sm text-slate-300">Hollanda'da bahşiş (fooi) vermek zorunlu değildir çünkü servis ücreti hesaba dahildir. Ancak restoranlarda iyi bir servis alındığında genellikle <strong>yüzde 5 ile 10 arasında</strong> bahşiş bırakılır.</p>
              <p className="text-sm text-slate-300 mt-2">Çoğu kişi küsuratlı hesapları yuvarlamayı (afronden) tercih eder. Örneğin hesap €32 ise, "Maak er maar 35 van" (Bunu 35 yapalım) veya "Laat de rest maar zitten" (Üstü kalsın) denir.</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: i – ie (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 11 & 12:</strong> In Dutch, the pronunciation difference between a short 'i' (ex: ik, kip, rijst, zitten, vinden) and a long 'ie' sound (ex: biefstuk, frietjes, misschien, bier, vier) is very important. A short 'i' sounds like the 'i' in the English word 'sit', while a long 'ie' sounds like the 'ee' in the English word 'see'.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Een fooi geven (Tipping)</h3>
              <p className="text-sm text-slate-300">Tipping (een fooi geven) is not mandatory in the Netherlands because service charge is included in the bill. However, when you receive good service in restaurants, it is common to leave a tip of <strong>between 5 and 10 percent</strong>.</p>
              <p className="text-sm text-slate-300 mt-2">Most people prefer to round up the bill (afronden). For example, if the bill is €32, they say "Maak er maar 35 van" (Make it 35) or "Laat de rest maar zitten" (Keep the change).</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "6.7_smart_1", type: "multiple_choice", question: "Welk woord heeft een LANGE 'ie' klank?", options: ["kip", "misschien", "zitten"], correctAnswer: "misschien" },
          { id: "6.7_smart_2", type: "multiple_choice", question: "Hoeveel fooi geef je in een Nederlands restaurant als je tevreden bent?", options: ["Je geeft geen fooi, dat is onbeleefd.", "Tussen de 5 en 10 procent.", "Altijd 20 procent."], correctAnswer: "Tussen de 5 en 10 procent." },
          { id: "6.7_smart_3", type: "fill_in", question: "De rekening is €28. Je geeft €30 en zegt: 'Laat de ________ maar zitten.' (Üstü kalsın / Keep the change).", correctAnswer: "rest" }
        ]
      }
    ]
  },
  {
    id: "On-Class-6",
    chapter: 6,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 5 (Op de markt)</h3>
              <p className="text-sm text-slate-300 mb-2">Geçen dersin tekrarı: Pazardaki temel soru ve cevaplar:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Wat koop je op de markt?</strong> ➔ Ik koop twee kilo tomaten en twee kilo sinaasappels op de markt.</li>
                <li><strong>Hoeveel komkommers wil je?</strong> ➔ Ik wil zes komkommers.</li>
                <li><strong>Wil je ook een kilo aardappels?</strong> ➔ Nee, ik wil 2 kilo aardappels.</li>
                <li><strong>Hoeveel is het? / Hoeveel kost het?</strong> (Ne kadar tutuyor / Fiyatı ne kadar?)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🍽️ In het restaurant (Dialoog, Gangen & Bestek)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Dialoog Samenvatting (Özet)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wie zijn er in het restaurant?</strong> ➔ Hun namen zijn Jasper en Christine. (Onların adları Jasper ve Christine.)</li>
                    <li><strong>Wat drinken ze?</strong> ➔ Jasper drinkt mineraalwater en Christine ook.</li>
                    <li><strong>Wat nemen ze als voorgerecht?</strong> ➔ Ze nemen mosterdsoep en Spaanse salade.</li>
                    <li><strong>Wat neemt Jasper als hoofdgerecht?</strong> ➔ Biefstuk met frietjes.</li>
                    <li className="text-slate-400 italic mt-1">Not: <strong>nemen</strong> = almak / sipariş etmek (get/take).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Gangen (Yemek Kursları) & Cutlery (Çatal Bıçak)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>voorgerecht:</strong> starter (başlangıç)</li>
                    <li><strong>hoofdgerecht:</strong> main course (ana yemek)</li>
                    <li><strong>het nagerecht / toetje:</strong> dessert (tatlı)</li>
                    <li className="mt-2 border-t border-purple-500/30 pt-2"><strong>lepel:</strong> spoon (kaşık)</li>
                    <li><strong>mes:</strong> knife (bıçak)</li>
                    <li><strong>vork:</strong> fork (çatal)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 mt-4 text-sm text-purple-100">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Example sentences:</h4>
                <ul className="list-disc pl-5">
                  <li><strong>Waarmee eet je soep?</strong> (What do you eat soup with? / Çorbayı neyle yersin?)</li>
                  <li><strong>Waarmee eet je een salade?</strong></li>
                  <li><strong>Wat neem je als voorgerecht?</strong></li>
                  <li><strong>Wat wil je als hoofdgerecht?</strong></li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🗣️ Expressing Opinions (Fikir ve Beğeni Belirtmek)</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada bir şeyi beğenip beğenmediğinizi ifade etmek için <strong>"vinden"</strong> (bulmak) veya <strong>"houden van"</strong> (sevmek) kullanılır.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Positief (Olumlu)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik vind het <strong>leuk</strong>. (I like it / fun)</li>
                    <li>Ik vind het <strong>mooi</strong>. (pretty/beautiful)</li>
                    <li>Ik vind het <strong>lekker</strong>. (I find it tasty)</li>
                    <li>Ik vind het <strong>heerlijk</strong>. (I find it delicious)</li>
                    <li>Ja, ik <strong>houd van</strong> kip. (Yes, I like chicken)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-rose-400 text-sm mb-1">Andere of negatieve antwoorden (Diğer/Olumsuz)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Het gaat wel.</strong> (So so / İdare eder)</li>
                    <li>Ik vind het <strong>niet zo lekker</strong>. (I don't find it very tasty)</li>
                    <li>Ik vind het <strong>vies</strong>. (I think it is bad/nasty)</li>
                    <li>Ik vind het <strong>stom</strong>. (stupid)</li>
                    <li>Ik vind het <strong>heet</strong>. (hot)</li>
                    <li>Nee, ik <strong>houd niet van</strong> mosselen. (No, I don't like mussels)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="font-bold text-emerald-300 text-sm mb-1">Vragen (Sorular):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>Hoe vind je de soep? / Wat vind je van de soep?</strong></li>
                  <li><strong>Vind je de koffie lekker?</strong></li>
                  <li><strong>Houd je van kip?</strong> (Do you like chicken?)</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔑 Modal Verbs & Infinitive (Modale Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">Modal fiiller, cümlenin ana fiiline zorunluluk, izin, yetenek veya istek gibi anlamlar katar. Modal fiil çekimlenip 2. sıraya gelirken, asıl fiil cümlenin <strong>en sonuna mastar (infinitief)</strong> halinde gider.</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse mb-4 mt-2">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-200">
                    <th className="py-2 w-1/3">Modaal Werkwoord</th>
                    <th className="py-2">Betekenis (Meaning)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">mogen</td>
                    <td className="py-2">to be allowed to / can have (İzinli olmak, yapabilmek)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">willen</td>
                    <td className="py-2">to want (İstemek)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">moeten</td>
                    <td className="py-2">must (Zorunda olmak)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">kunnen</td>
                    <td className="py-2">can / to be able to (Yapabilmek, yetenek)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">zullen</td>
                    <td className="py-2">will / shall (Gelecek zaman / Teklif)</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Örnekler)</h4>
                <ul className="text-sm text-amber-100 list-disc pl-5 space-y-1">
                  <li>Ik <strong>wil</strong> soep <strong>bestellen</strong>.</li>
                  <li>Wij <strong>mogen</strong> bij het raam <strong>zitten</strong>.</li>
                  <li>De serveerster <strong>moet</strong> een lepel <strong>halen</strong>.</li>
                  <li>Jullie <strong>kunnen</strong> daar gaan <strong>zitten</strong>.</li>
                  <li><strong>Zullen</strong> we later een nagerecht <strong>kiezen</strong>?</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie Les 5 (Review Lesson 5: At the market)</h3>
              <p className="text-sm text-slate-300 mb-2">Review of the previous lesson: Basic questions and answers at the market:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li><strong>Wat koop je op de markt?</strong> ➔ Ik koop twee kilo tomaten en twee kilo sinaasappels op de markt.</li>
                <li><strong>Hoeveel komkommers wil je?</strong> ➔ Ik wil zes komkommers.</li>
                <li><strong>Wil je ook een kilo aardappels?</strong> ➔ Nee, ik wil 2 kilo aardappels.</li>
                <li><strong>Hoeveel is het? / Hoeveel kost het?</strong> (How much is it? / How much does it cost?)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🍽️ In het restaurant (Dialogue, Courses & Cutlery)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Dialoog Samenvatting (Summary)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wie zijn er in het restaurant?</strong> ➔ Hun namen zijn Jasper en Christine. (Their names are Jasper and Christine.)</li>
                    <li><strong>Wat drinken ze?</strong> ➔ Jasper drinkt mineraalwater en Christine ook.</li>
                    <li><strong>Wat nemen ze als voorgerecht?</strong> ➔ Ze nemen mosterdsoep en Spaanse salade.</li>
                    <li><strong>Wat neemt Jasper als hoofdgerecht?</strong> ➔ Biefstuk met frietjes.</li>
                    <li className="text-slate-400 italic mt-1">Note: <strong>nemen</strong> = to take / to order (get).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Gangen (Courses) & Cutlery</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>voorgerecht:</strong> starter</li>
                    <li><strong>hoofdgerecht:</strong> main course</li>
                    <li><strong>het nagerecht / toetje:</strong> dessert</li>
                    <li className="mt-2 border-t border-purple-500/30 pt-2"><strong>lepel:</strong> spoon</li>
                    <li><strong>mes:</strong> knife</li>
                    <li><strong>vork:</strong> fork</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 mt-4 text-sm text-purple-100">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Example sentences:</h4>
                <ul className="list-disc pl-5">
                  <li><strong>Waarmee eet je soep?</strong> (What do you eat soup with?)</li>
                  <li><strong>Waarmee eet je een salade?</strong></li>
                  <li><strong>Wat neem je als voorgerecht?</strong></li>
                  <li><strong>Wat wil je als hoofdgerecht?</strong></li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🗣️ Expressing Opinions</h3>
              <p className="text-sm text-slate-300 mb-2">In Dutch, to express whether you like or dislike something, you use <strong>"vinden"</strong> (to find) or <strong>"houden van"</strong> (to love/like).</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Positief (Positive)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik vind het <strong>leuk</strong>. (I like it / fun)</li>
                    <li>Ik vind het <strong>mooi</strong>. (pretty/beautiful)</li>
                    <li>Ik vind het <strong>lekker</strong>. (I find it tasty)</li>
                    <li>Ik vind het <strong>heerlijk</strong>. (I find it delicious)</li>
                    <li>Ja, ik <strong>houd van</strong> kip. (Yes, I like chicken)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-rose-400 text-sm mb-1">Andere of negatieve antwoorden (Negative)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Het gaat wel.</strong> (So so / It's okay)</li>
                    <li>Ik vind het <strong>niet zo lekker</strong>. (I don't find it very tasty)</li>
                    <li>Ik vind het <strong>vies</strong>. (I think it is bad/nasty)</li>
                    <li>Ik vind het <strong>stom</strong>. (stupid)</li>
                    <li>Ik vind het <strong>heet</strong>. (hot)</li>
                    <li>Nee, ik <strong>houd niet van</strong> mosselen. (No, I don't like mussels)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="font-bold text-emerald-300 text-sm mb-1">Vragen (Questions):</h4>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li><strong>Hoe vind je de soep? / Wat vind je van de soep?</strong></li>
                  <li><strong>Vind je de koffie lekker?</strong></li>
                  <li><strong>Houd je van kip?</strong> (Do you like chicken?)</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔑 Modal Verbs & Infinitive (Modale Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">Modal verbs add meanings like obligation, permission, ability, or desire to the main verb of the sentence. While the modal verb is conjugated and placed 2nd, the main verb goes to the <strong>very end of the sentence as an infinitive</strong>.</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse mb-4 mt-2">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-200">
                    <th className="py-2 w-1/3">Modaal Werkwoord</th>
                    <th className="py-2">Betekenis (Meaning)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">mogen</td>
                    <td className="py-2">to be allowed to / can have</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">willen</td>
                    <td className="py-2">to want</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">moeten</td>
                    <td className="py-2">must</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">kunnen</td>
                    <td className="py-2">can / to be able to</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">zullen</td>
                    <td className="py-2">will / shall</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30">
                <h4 className="font-bold text-white text-xs uppercase mb-1">Voorbeelden (Examples)</h4>
                <ul className="text-sm text-amber-100 list-disc pl-5 space-y-1">
                  <li>Ik <strong>wil</strong> soep <strong>bestellen</strong>.</li>
                  <li>Wij <strong>mogen</strong> bij het raam <strong>zitten</strong>.</li>
                  <li>De serveerster <strong>moet</strong> een lepel <strong>halen</strong>.</li>
                  <li>Jullie <strong>kunnen</strong> daar gaan <strong>zitten</strong>.</li>
                  <li><strong>Zullen</strong> we later een nagerecht <strong>kiezen</strong>?</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Gangen en Bestek (Courses and Cutlery)",
        isExtra: false,
        questions: [
          { id: "6_onclass_1_1", type: "fill_in", question: "Starter = ________", correctAnswer: "voorgerecht" },
          { id: "6_onclass_1_2", type: "fill_in", question: "Dessert = het ________ (of toetje)", correctAnswer: "nagerecht" },
          { id: "6_onclass_1_3", type: "fill_in", question: "Main course = ________", correctAnswer: "hoofdgerecht" },
          { id: "6_onclass_1_4", type: "multiple_choice", question: "Waarmee eet je soep? (What do you eat soup with?)", options: ["met een vork", "met een mes", "met een lepel"], correctAnswer: "met een lepel" },
          { id: "6_onclass_1_5", type: "fill_in", question: "What will you get for the main course? ➔ Wat ________ je als hoofdgerecht?", correctAnswer: "neem" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Meningen Uiten (Expressing Opinions)",
        isExtra: false,
        questions: [
          { id: "6_onclass_2_1", type: "multiple_choice", question: "Vertaal (Translate): 'I think it is delicious.'", options: ["Ik vind het vies.", "Ik vind het heerlijk.", "Het gaat wel."], correctAnswer: "Ik vind het heerlijk." },
          { id: "6_onclass_2_2", type: "multiple_choice", question: "Vertaal (Translate): 'I don't find it very tasty.'", options: ["Ik vind het niet zo lekker.", "Ik vind het stom.", "Ik vind het heet."], correctAnswer: "Ik vind het niet zo lekker." },
          { id: "6_onclass_2_3", type: "fill_in", question: "Do you like chicken? ➔ ________ je van kip?", correctAnswer: "Houd" },
          { id: "6_onclass_2_4", type: "multiple_choice", question: "Als het eten echt heel slecht is (bad), dan zeg je:", options: ["Het gaat wel.", "Ik vind het vies.", "Ik vind het mooi."], correctAnswer: "Ik vind het vies." }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Modale Werkwoorden (Modal Verbs)",
        isExtra: true,
        questions: [
          { id: "6_onclass_3_1", type: "fill_in", question: "Ik ________ soep bestellen. (want to)", correctAnswer: "wil" },
          { id: "6_onclass_3_2", type: "fill_in", question: "Wij ________ bij het raam zitten. (are allowed to)", correctAnswer: "mogen" },
          { id: "6_onclass_3_3", type: "fill_in", question: "De serveerster ________ een lepel halen. (must)", correctAnswer: "moet" },
          { id: "6_onclass_3_4", type: "fill_in", question: "Jullie ________ daar gaan zitten. (can)", correctAnswer: "kunnen" },
          { id: "6_onclass_3_5", type: "fill_in", question: "________ we later een nagerecht kiezen? (shall)", correctAnswer: "Zullen" },
          { id: "6_onclass_3_6", type: "multiple_choice", question: "Welke zin is grammaticaal correct? (Let op de positie van het werkwoord! / Note the verb position!)", options: ["Ik wil bestellen soep.", "Ik wil soep bestellen.", "Ik soep wil bestellen."], correctAnswer: "Ik wil soep bestellen." }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Herhaling Les 5 (Markt / Review)",
        isExtra: true,
        questions: [
          { id: "6_onclass_4_1", type: "fill_in", question: "Vertaal (Translate): 'How much does it cost?' ➔ ________ kost het?", correctAnswer: "Hoeveel" },
          { id: "6_onclass_4_2", type: "fill_in", question: "Ik wil twee ________ tomaten. (kilos)", correctAnswer: "kilo" },
          { id: "6_onclass_4_3", type: "multiple_choice", question: "Wat antwoord je op: 'Wil je ook een kilo aardappels?'", options: ["Nee, ik wil 2 kilo aardappels.", "Ik vind het lekker.", "Met een mes."], correctAnswer: "Nee, ik wil 2 kilo aardappels." }
        ]
      }
    ]
  }
];