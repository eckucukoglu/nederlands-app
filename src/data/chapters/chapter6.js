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
    { speaker: "Verteller", text: "De groenteboer, Jasper, gaat met zijn vriendin Christine in een restaurant eten.", translation: "Manav Jasper, kız arkadaşı Christine ile bir restoranda yemeğe gidiyor." },
    { speaker: "Serveerster", text: "Goedenavond, twee personen?", translation: "İyi akşamlar, iki kişi misiniz?" },
    { speaker: "Jasper", text: "Ja, hebt u een tafel voor ons? Mogen we bij het raam zitten?", translation: "Evet, bizim için bir masanız var mı? Cam kenarında oturabilir miyiz?" },
    { speaker: "Serveerster", text: "Ja hoor, jullie kunnen daar gaan zitten. Hier is de menukaart. Willen jullie alvast iets te drinken bestellen?", translation: "Evet tabii ki, oraya geçip oturabilirsiniz. İşte menü. Şimdiden (bu arada) içecek bir şeyler sipariş etmek ister misiniz?" },
    { speaker: "Jasper", text: "Mag ik een mineraalwater alstublieft? Ik heb dorst.", translation: "Bir maden suyu alabilir miyim lütfen? Susadım." },
    { speaker: "Christine", text: "Voor mij ook graag.", translation: "Benim için de lütfen." },
    { speaker: "Jasper", text: "Nemen we alleen een hoofdgerecht?", translation: "Sadece ana yemek mi alıyoruz?" },
    { speaker: "Christine", text: "Ik heb honger, ik wil ook graag een voorgerecht en misschien ook een nagerecht.", translation: "Açım, ben bir başlangıç ve belki bir de tatlı (nagerecht) istiyorum." },
    { speaker: "Jasper", text: "Dan neem ik ook een voorgerecht. De mosterdsoep is hier altijd erg lekker. Als hoofdgerecht wil ik de biefstuk met frietjes. Weet jij het ook al?", translation: "O zaman ben de bir başlangıç alıyorum. Buradaki hardal çorbası her zaman çok lezzetli. Ana yemek olarak patates kızartmalı biftek istiyorum. Sen de (ne yiyeceğini) biliyor musun?" },
    { speaker: "Christine", text: "Eh, ik neem de Spaanse salade en kip met rijst. O nee, ik wil geen vlees, doe toch maar de vegetarische dagschotel. Moeten we het nagerecht nu al kiezen?", translation: "Ih, ben İspanyol salatası ile tavuklu pilav alıyorum. Oh hayır, et istemiyorum, onun yerine vejetaryen günün menüsünü (dagschotel) verin. Tatlıyı şimdiden seçmek zorunda mıyız?" },
    { speaker: "Jasper", text: "Nee, zullen we dat later doen?", translation: "Hayır, onu sonra yapalım mı?" },
    { speaker: "Verteller", text: "(even later)", translation: "(biraz sonra)" },
    { speaker: "Serveerster", text: "Alstublieft, een mosterdsoep en een Spaanse salade. Eet smakelijk. O, jullie hebben alleen een mes en vork. Momentje, ik moet even een lepel halen.", translation: "Buyurun, bir hardal çorbası ve bir İspanyol salatası. Afiyet olsun. Oh, sadece bıçağınız ve çatalınız var. Bir saniye, hemen bir kaşık getirmeliyim (almalıyım)." },
    { speaker: "Jasper", text: "Ja, graag. Soep eten met een vork is een beetje moeilijk.", translation: "Evet, lütfen. Çorbayı çatalla yemek biraz zor." },
    { speaker: "Verteller", text: "(even later)", translation: "(biraz sonra)" },
    { speaker: "Christine", text: "Hoe vind je de soep?", translation: "Çorbayı nasıl buldun?" },
    { speaker: "Jasper", text: "Heerlijk! En hoe is jouw salade?", translation: "Harika (Lezzetli)! Peki senin salatan nasıl?" },
    { speaker: "Christine", text: "Hm, het gaat wel. Het is een soort paella en ik houd niet zo van mosselen. Hier, proef maar wat.", translation: "Hm, fena değil (idare eder). Bu bir çeşit paella ve ben midyeden pek hoşlanmıyorum (sevmiyorum). Al, biraz tat." },
    { speaker: "Jasper", text: "Mmm, ik vind het lekker, maar wel een beetje vet.", translation: "Mmm, bence lezzetli, ama biraz yağlı." },
    { speaker: "Verteller", text: "(even later)", translation: "(yine biraz sonra)" },
    { speaker: "Christine", text: "Kan ik een toetje bestellen? Ik wil graag ijs met vruchten en chocola.", translation: "Bir tatlı (toetje) sipariş edebilir miyim? Meyveli ve çikolatalı dondurma istiyorum." },
    { speaker: "Serveerster", text: "Met slagroom?", translation: "Krem şantili mi?" },
    { speaker: "Christine", text: "Nee, zonder slagroom.", translation: "Hayır, krem şantisiz." },
    { speaker: "Jasper", text: "Voor mij alleen een cappuccino.", translation: "Benim için sadece bir cappuccino." },
    { speaker: "Verteller", text: "(even later)", translation: "(biraz sonra)" },
    { speaker: "Jasper", text: "Mogen we de rekening?", translation: "Hesabı alabilir miyiz?" },
    { speaker: "Serveerster", text: "Alstublieft, het is € 65,-.", translation: "Buyurun, 65 Euro." },
    { speaker: "Jasper", text: "Alstublieft, zeventig euro. Laat de rest maar zitten.", translation: "Buyurun, yetmiş euro. Üstü kalsın (gerisini bırakın)." },
    { speaker: "Serveerster", text: "Dank u wel en een fijne avond verder.", translation: "Teşekkür ederim ve iyi akşamlar." },
    { speaker: "Jasper", text: "Bedankt, u ook. Tot ziens!", translation: "Teşekkürler, size de. Görüşmek üzere!" }
  ]
};

export const chapter6Sections = [
  {
    id: "6.1",
    chapter: 6,
    title: "6.1 Dialoog: In een restaurant",
    theory: (
      <>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zijn de volgende zinnen waar of niet waar?",
        isExtra: false,
        questions: [
          { id: "6.1_opd1_1", type: "multiple_choice", question: "1. Jasper en Christine willen bij het raam zitten.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_2", type: "multiple_choice", question: "2. Jasper neemt alleen een hoofdgerecht.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "6.1_opd1_3", type: "multiple_choice", question: "3. Christine neemt de Spaanse salade als voorgerecht.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_4", type: "multiple_choice", question: "4. De serveerster moet nog een vork halen.", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "6.1_opd1_5", type: "multiple_choice", question: "5. Jasper vindt de soep erg lekker.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_6", type: "multiple_choice", question: "6. Christine neemt een nagerecht.", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "6.1_opd1_7", type: "multiple_choice", question: "7. Jasper geeft een fooi (bahşiş).", options: ["waar", "niet waar"], correctAnswer: "waar" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Woorden en Begrip",
        isExtra: true,
        questions: [
          { id: "6.1_smart_1", type: "multiple_choice", question: "Wat mist de serveerster (wat moet ze halen)?", options: ["een mes", "een vork", "een lepel"], correctAnswer: "een lepel" },
          { id: "6.1_smart_2", type: "multiple_choice", question: "Waarmee (ne ile) eet je soep?", options: ["Met een vork", "Met een mes", "Met een lepel"], correctAnswer: "Met een lepel" },
          ...generateSmartQuestions(6, "Woordenlijst", 5, chapter6Vocab)
        ]
      }
    ]
  },
  {
    id: "6.3",
    chapter: 6,
    title: "6.3 Meningen (Fikir Belirtmek)",
    theory: (
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
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2 (Aangepast): Reageer op de vragen over eten en drinken.",
        isExtra: false,
        questions: [
          { id: "6.3_opd2_1", type: "multiple_choice", question: "Houd je van kip? (Positief antwoord)", options: ["Het gaat wel.", "Ja, ik houd van kip.", "Nee, ik vind het vies."], correctAnswer: "Ja, ik houd van kip." },
          { id: "6.3_opd2_2", type: "multiple_choice", question: "Vind je koffie lekker? (Negatief antwoord)", options: ["Nee, ik vind koffie vies.", "Ja, ik vind het heerlijk.", "Ja, ik houd van koffie."], correctAnswer: "Nee, ik vind koffie vies." },
          { id: "6.3_opd2_3", type: "multiple_choice", question: "Wat vind je van vlees? (+- Neutraal/So so)", options: ["Ik ben er gek op.", "Het gaat wel. Ik eet niet zoveel vlees.", "Het is hartstikke vies."], correctAnswer: "Het gaat wel. Ik eet niet zoveel vlees." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Mening geven",
        isExtra: true,
        questions: [
          { id: "6.3_smart_1", type: "multiple_choice", question: "Je eet een pizza, maar hij is heel slecht (very bad). Wat zeg je?", options: ["Ik vind de pizza heerlijk.", "Ik vind de pizza vies.", "Het gaat wel."], correctAnswer: "Ik vind de pizza vies." },
          { id: "6.3_smart_2", type: "fill_in", question: "Vertaal: 'Tavuk sever misin?' -> ________ je van kip?", correctAnswer: "Houd" }
        ]
      }
    ]
  },
  {
    id: "6.5",
    chapter: 6,
    title: "6.5 Modale werkwoorden (Kiplik Fiiller)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔑 Modale Werkwoorden (Çok Önemli Kural!)</h3>
          <p className="text-sm text-slate-300">Hollandacada 5 adet temel "Modal Fiil" vardır: <strong>mogen</strong> (izinli olmak/may), <strong>willen</strong> (istemek), <strong>moeten</strong> (zorunda olmak/must), <strong>kunnen</strong> (yapabilmek/can), <strong>zullen</strong> (yapalım mı?/shall/will).</p>
          
          <table style={{ width: '100%', marginTop: '15px' }}>
            <thead><tr><th>Pronoun</th><th>mogen</th><th>willen</th><th>moeten</th><th>kunnen</th><th>zullen</th></tr></thead>
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
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Welk werkwoord is logisch in de zin? (Kies de juiste modal verb)",
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
        instruction: "Opdracht 5: Vul een vorm in van mogen, willen, moeten, kunnen of zullen. Wat is logisch?",
        isExtra: false,
        questions: [
          { id: "6.5_opd5_1", type: "fill_in", question: "1. _________ je in dit café ook iets eten?", correctAnswer: "Kun" },
          { id: "6.5_opd5_2", type: "fill_in", question: "2. Je _________ deze soep eens proeven. Heerlijk!", correctAnswer: "moet" },
          { id: "6.5_opd5_3", type: "fill_in", question: "3. Je _________ ook alleen een voorgerecht nemen. Dat is goed.", correctAnswer: "mag" },
          { id: "6.5_opd5_4", type: "fill_in", question: "4. Ik houd van vis. Ik _________ de paella.", correctAnswer: "wil" },
          { id: "6.5_opd5_5", type: "fill_in", question: "5. _________ je nu al Nederlands spreken? Wat goed!", correctAnswer: "Kun" },
          { id: "6.5_opd5_6", type: "fill_in", question: "6. Mijn achternaam is Alasadi. _________ ik het even spellen? (Teklif)", correctAnswer: "Zal" },
          { id: "6.5_opd5_7", type: "fill_in", question: "7. _________ ik twee koffie en een glas water alstublieft? (İzin/Rica)", correctAnswer: "Mag" },
          { id: "6.5_opd5_8", type: "fill_in", question: "8. Jonas is zestien jaar. Hij _________ bier bestellen in een café. (Yasak)", correctAnswer: "mag geen" }
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
        instruction: "Slimme Oefeningen (Pedagogisch): Woordvolgorde (Word Order)",
        isExtra: true,
        questions: [
          { id: "6.5_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct? (Let op de positie van het tweede werkwoord)", options: ["Ik wil bestellen een soep.", "Ik wil een soep bestellen.", "Ik bestel wil een soep."], correctAnswer: "Ik wil een soep bestellen." },
          { id: "6.5_smart_2", type: "multiple_choice", question: "Vertaal: 'Garson bir kaşık getirmek zorunda.'", options: ["De serveerster halen moet een lepel.", "De serveerster moet halen een lepel.", "De serveerster moet een lepel halen."], correctAnswer: "De serveerster moet een lepel halen." }
        ]
      }
    ]
  },
  {
    id: "6.6",
    chapter: 6,
    title: "6.6 Tekst: Eetafspraak",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>📄 Tekst: Eetafspraak</h3>
          <p className="text-sm text-slate-300">"Ik ben veel te laat voor een eetafspraak met studievrienden. Mijn hoofd is rood van het fietsen. Niet één tafeltje is vrij in het restaurant. Ik zie mijn vrienden niet direct. Ik moet even zoeken. Ik pak een stoel en wil aan de tafel bij mijn vrienden gaan zitten. De serveerster komt bij mij. Ze vraagt: 'Kan ik u helpen?' Ik zeg: 'Ik wil graag bij die mensen aan tafel zitten.' Ze kijkt naar mij en zegt: 'Dat moet u eerst aan die mensen vragen, meneer!'"</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Wat denkt de serveerster over de ik-persoon?",
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
    theory: (
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
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur",
        isExtra: true,
        questions: [
          { id: "6.7_smart_1", type: "multiple_choice", question: "Welk woord heeft een LANGE 'ie' klank?", options: ["kip", "misschien", "zitten"], correctAnswer: "misschien" },
          { id: "6.7_smart_2", type: "multiple_choice", question: "Hoeveel fooi geef je in een Nederlands restaurant als je tevreden bent?", options: ["Je geeft geen fooi, dat is onbeleefd.", "Tussen de 5 en 10 procent.", "Altijd 20 procent."], correctAnswer: "Tussen de 5 en 10 procent." },
          { id: "6.7_smart_3", type: "fill_in", question: "De rekening is €28. Je geeft €30 en zegt: 'Laat de ________ maar zitten.' (Üstü kalsın).", correctAnswer: "rest" }
        ]
      }
    ]
  },
  {
    id: "On-Class-6",
    chapter: 6,
    title: "On-Class Extra: In het restaurant",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Grammatica & Vocabulaire Extra</h3>
          
          <h4 className="font-bold text-emerald-300 mt-2 border-b border-emerald-500/30 pb-1">Waarmee? (Ne ile?)</h4>
          <p className="text-sm text-slate-300 mt-2">Araç/gereç sorarken <strong>Waarmee</strong> kullanılır.</p>
          <ul className="text-sm text-slate-200 list-disc pl-5 mt-1">
            <li>Waarmee eet je soep? ➔ Met een lepel.</li>
            <li>Waarmee eet je een salade? ➔ Met een vork.</li>
          </ul>

          <h4 className="font-bold text-emerald-300 mt-4 border-b border-emerald-500/30 pb-1">Gangen (Yemek Kursları):</h4>
          <ul className="text-sm text-slate-200 list-disc pl-5 mt-1">
            <li><strong>het voorgerecht</strong> = starter (başlangıç)</li>
            <li><strong>het hoofdgerecht</strong> = main course (ana yemek)</li>
            <li><strong>het nagerecht / het toetje</strong> = dessert (tatlı)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen: Vragen en Bestek",
        isExtra: true,
        questions: [
          { id: "6_onclass_1", type: "fill_in", question: "Vertaal: 'Çorbayı ne ile yersin?' -> ________ eet je soep?", correctAnswer: "Waarmee" },
          { id: "6_onclass_2", type: "multiple_choice", question: "Welk woord hoort NIET bij de gangen (courses)?", options: ["het nagerecht", "het voorgerecht", "het bestek", "het hoofdgerecht"], correctAnswer: "het bestek" },
          { id: "6_onclass_3", type: "multiple_choice", question: "Waarmee snijd je vlees (et kesmek)?", options: ["Met een lepel", "Met een mes", "Met een vork"], correctAnswer: "Met een mes" }
        ]
      }
    ]
  }
];