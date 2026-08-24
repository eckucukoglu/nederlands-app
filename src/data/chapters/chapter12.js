// src/data/chapters/chapter12.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter12Vocab = [
  { id: "12_1", chapter: 12, nl: "het station", en: "train station", example: "Kirsten is op het station in Amsterdam." },
  { id: "12_2", chapter: 12, nl: "Bent u hier bekend?", en: "Do you know your way around here?", example: "Pardon, bent u hier bekend?" },
  { id: "12_3", chapter: 12, nl: "bekend", en: "known / familiar", example: "Ik ben hier niet bekend." },
  { id: "12_4", chapter: 12, nl: "de voorbijganger", en: "passer-by", example: "Ze vraagt het aan een voorbijganger." },
  { id: "12_5", chapter: 12, nl: "de buschauffeur", en: "bus driver", example: "Vraag het aan de buschauffeur." },
  { id: "12_6", chapter: 12, nl: "de bus", en: "bus", example: "Ik ga met de bus." },
  { id: "12_7", chapter: 12, nl: "de chauffeur", en: "driver", example: "De chauffeur helpt mij." },
  { id: "12_8", chapter: 12, nl: "lopen", en: "walk", example: "Kan ik dat lopen?" },
  { id: "12_9", chapter: 12, nl: "te", en: "too", example: "Is dat te ver?" },
  { id: "12_10", chapter: 12, nl: "zeker", en: "certainly / definitely", example: "Het is zeker een uur lopen." },
  { id: "12_11", chapter: 12, nl: "vanaf", en: "from", example: "Vanaf hier is het 10 minuten." },
  { id: "12_12", chapter: 12, nl: "de tram", en: "tram", example: "U kunt beter met de tram gaan." },
  { id: "12_13", chapter: 12, nl: "de lijn", en: "line (number)", example: "U moet lijn 25 hebben." },
  { id: "12_14", chapter: 12, nl: "hebt geluk (geluk hebben)", en: "are lucky", example: "U hebt geluk, de tram komt eraan." },
  { id: "12_15", chapter: 12, nl: "komt aan (aankomen)", en: "is arriving", example: "De trein komt nu aan." },
  { id: "12_16", chapter: 12, nl: "net", en: "just", example: "Daar komt hij net aan." },
  { id: "12_17", chapter: 12, nl: "direct", en: "straightaway / directly", example: "U kunt direct instappen." },
  { id: "12_18", chapter: 12, nl: "instappen", en: "get in", example: "Iedereen instappen, alsjeblieft." },
  { id: "12_19", chapter: 12, nl: "het stuk", en: "short distance", example: "Moet ik nog een stuk lopen?" },
  { id: "12_20", chapter: 12, nl: "de ingang", en: "entrance", example: "Tegenover de ingang." },
  { id: "12_21", chapter: 12, nl: "over... steken (oversteken)", en: "cross", example: "U hoeft alleen de straat over te steken." },
  { id: "12_22", chapter: 12, nl: "de balie", en: "information desk", example: "Ze vraagt het bij de balie." },
  { id: "12_23", chapter: 12, nl: "de hal", en: "hall", example: "In welke hal is de beurs?" },
  { id: "12_24", chapter: 12, nl: "de portier", en: "porter / door attendant", example: "De portier wijst de weg." },
  { id: "12_25", chapter: 12, nl: "boven", en: "upstairs", example: "De hal is boven." },
  { id: "12_26", chapter: 12, nl: "ga op (opgaan)", en: "go up", example: "Ga hier de trap op." },
  { id: "12_27", chapter: 12, nl: "de trap", en: "stairs", example: "Neem de trap." },
  { id: "12_28", chapter: 12, nl: "rechtdoor", en: "straight ahead", example: "Loop rechtdoor." },
  { id: "12_29", chapter: 12, nl: "tot", en: "as far as", example: "Tot het restaurant." },
  { id: "12_30", chapter: 12, nl: "herkent (herkennen)", en: "recognize", example: "Dat herkent u aan de ramen." },
  { id: "12_31", chapter: 12, nl: "linksaf", en: "to the left", example: "Dan gaat u linksaf." },
  { id: "12_32", chapter: 12, nl: "het eind", en: "end", example: "Aan het eind van de gang." },
  { id: "12_33", chapter: 12, nl: "rechts", en: "on the right", example: "Daarna gaat u naar rechts." },
  { id: "12_34", chapter: 12, nl: "neemt mee (meenemen)", en: "take (with you)", example: "Neemt u deze plattegrond maar mee." },
  { id: "12_35", chapter: 12, nl: "de plattegrond", en: "map", example: "Kijk op de plattegrond." },
  { id: "12_36", chapter: 12, nl: "toiletten (het toilet)", en: "toilets", example: "Ik zoek ook de toiletten." },
  { id: "12_37", chapter: 12, nl: "beneden", en: "downstairs", example: "De toiletten zijn beneden." },
  { id: "12_38", chapter: 12, nl: "de hoek", en: "corner", example: "Ga hier rechts de hoek om." },
  { id: "12_39", chapter: 12, nl: "ga... om (omgaan)", en: "turn (around a corner)", example: "Ga de hoek om." },
  { id: "12_40", chapter: 12, nl: "ga... af (afgaan)", en: "go down", example: "Ga de trap af." },
  { id: "12_41", chapter: 12, nl: "uitlopen", en: "walk down (to the end)", example: "De gang uitlopen." },
  { id: "12_42", chapter: 12, nl: "vanzelf", en: "automatically / as a matter of course", example: "Dan ziet u de toiletten vanzelf." },
  { id: "12_43", chapter: 12, nl: "bordjes (het bordje)", en: "signs", example: "U kunt ook de bordjes volgen." },
  { id: "12_44", chapter: 12, nl: "volgen", en: "follow", example: "Volg de bordjes." },
  { id: "12_45", chapter: 12, nl: "makkelijker (gemakkelijk)", en: "easier", example: "Dat is misschien makkelijker." }
];

export const chapter12Dialogues = {
  "12.1": [
    { speaker: "Verteller", text: "Kirsten, de Duitse logopediestudente, is op het station in Amsterdam en gaat naar de Wandelbeurs in de Evenementenhal.", translation: "Alman logopedi öğrencisi Kirsten, Amsterdam'daki istasyonda ve Evenementenhal'daki Yürüyüş Fuarı'na gidiyor." },
    { speaker: "Kirsten", text: "Goedemorgen meneer, mag ik u iets vragen? Bent u hier bekend? Weet u waar de Evenementenhal is?", translation: "Günaydın beyefendi, size bir şey sorabilir miyim? Buraları biliyor musunuz (Buralara aşina mısınız)? Evenementenhal'ın nerede olduğunu biliyor musunuz?" },
    { speaker: "Voorbijganger", text: "Nee, sorry, ik woon hier niet. Dat kunt u beter aan die buschauffeur vragen.", translation: "Hayır, üzgünüm, burada yaşamıyorum. Onu şu otobüs şoförüne sorsanız daha iyi olur." },
    { speaker: "Kirsten", text: "Goedemorgen, ik moet naar de Evenementenhal. Kan ik dat lopen of is dat te ver?", translation: "Günaydın, Evenementenhal'a gitmem gerekiyor. Oraya yürüyebilir miyim yoksa çok mu uzak?" },
    { speaker: "Buschauffeur", text: "Het is zeker een uur lopen vanaf hier. U kunt beter met de tram gaan, lijn 25. U hebt geluk, daar komt hij net aan, u kunt direct instappen.", translation: "Buradan kesinlikle bir saatlik yürüme mesafesinde. Tramvayla, 25 numaralı hatla gitseniz daha iyi olur. Şanslısınız, işte tam da geliyor, hemen binebilirsiniz." },
    { speaker: "Kirsten", text: "Stopt de tram bij de Evenementenhal of moet ik nog een stuk lopen?", translation: "Tramvay Evenementenhal'da mı duruyor yoksa biraz daha yürümem mi gerekecek?" },
    { speaker: "Buschauffeur", text: "De tram stopt tegenover de ingang van de Evenementenhal, u hoeft alleen maar de straat over te steken.", translation: "Tramvay Evenementenhal girişinin tam karşısında duruyor, sadece sokağın karşısına geçmeniz yeterli." },
    { speaker: "Verteller", text: "(bij de balie van de Evenementenhal)", translation: "(Evenementenhal'ın bilgi masasında)" },
    { speaker: "Kirsten", text: "Goedemorgen, kunt u mij vertellen in welke hal de Wandelbeurs is?", translation: "Günaydın, Yürüyüş Fuarı'nın hangi salonda olduğunu söyleyebilir misiniz?" },
    { speaker: "Portier", text: "Ja, boven, op de eerste verdieping, in hal 3. Ga hier de trap op. Loop rechtdoor tot het restaurant. Dat herkent u aan de blauwe ramen. Dan gaat u linksaf en aan het eind van de gang rechts, daar is hal 3. Neemt u deze plattegrond maar mee.", translation: "Evet, yukarıda, birinci katta, 3 numaralı salonda. Buradan merdivenleri çıkın. Restorana kadar dümdüz yürüyün. Onu mavi camlarından tanıyabilirsiniz. Sonra sola dönün ve koridorun sonunda sağa dönün, 3 numaralı salon oradadır. Siz en iyisi bu haritayı yanınıza alın." },
    { speaker: "Kirsten", text: "Dank u wel. Ik zoek ook de toiletten.", translation: "Teşekkür ederim. Tuvaletleri de arıyorum." },
    { speaker: "Portier", text: "De toiletten zijn beneden. Ga hier rechts de hoek om en dan de trap af, de gang uit lopen en dan weer naar rechts. Dan ziet u de toiletten vanzelf. U kunt ook de bordjes volgen, dat is misschien makkelijker.", translation: "Tuvaletler aşağıdadır. Buradan sağa köşeyi dönün ve sonra merdivenlerden inin, koridoru sonuna kadar yürüyün ve sonra tekrar sağa dönün. O zaman tuvaletleri kendiliğinden göreceksiniz. Tabelaları da takip edebilirsiniz, bu belki daha kolay olur." },
    { speaker: "Kirsten", text: "Bedankt.", translation: "Teşekkürler." }
  ]
};

export const chapter12Sections = [
  {
    id: "12.1",
    chapter: 12,
    title: "12.1 Dialoog: De weg vragen",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Naar de Evenementenhal</h3>
          <p>Kirsten, Amsterdam'da Evenementenhal'a gitmek istiyor ve yolda çeşitli kişilere yol soruyor. Yol tarifi (De weg vragen en wijzen) için kullanılan şu kalıplara dikkat edin:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Bent u hier bekend?</strong> (Buraları biliyor musunuz? / Aşina mısınız?)</li>
            <li><strong>Loop rechtdoor tot het restaurant.</strong> (Restorana kadar dümdüz yürüyün.)</li>
            <li><strong>Dan gaat u linksaf / rechtsaf.</strong> (Sonra sola/sağa dönersiniz.)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de dialoog (Eşleştirme).",
        isExtra: false,
        questions: [
          { id: "12.1_opd1_1", type: "multiple_choice", question: "Waar is Kirsten aan het begin van de dialoog?", options: ["Op de Wandelbeurs", "Op het station in Amsterdam", "In het restaurant"], correctAnswer: "Op het station in Amsterdam" },
          { id: "12.1_opd1_2", type: "multiple_choice", question: "Wat vraagt Kirsten aan de buschauffeur?", options: ["Of de tram stopt.", "Of ze naar de Evenementenhal kan lopen of dat het te ver is.", "Waar ze de plattegrond kan vinden."], correctAnswer: "Of ze naar de Evenementenhal kan lopen of dat het te ver is." },
          { id: "12.1_opd1_3", type: "multiple_choice", question: "Hoe gaat ze naar de Evenementenhal?", options: ["Met de bus", "Lopend", "Met de tram (lijn 25)"], correctAnswer: "Met de tram (lijn 25)" },
          { id: "12.1_opd1_4", type: "multiple_choice", question: "Waar stopt lijn 25?", options: ["Ver weg van de hal.", "Tegenover de ingang van de Evenementenhal.", "Bij het restaurant."], correctAnswer: "Tegenover de ingang van de Evenementenhal." },
          { id: "12.1_opd1_5", type: "multiple_choice", question: "Waar is de Wandelbeurs precies?", options: ["Beneden in hal 1.", "Boven, op de eerste verdieping, in hal 3.", "Buiten het gebouw."], correctAnswer: "Boven, op de eerste verdieping, in hal 3." },
          { id: "12.1_opd1_6", type: "multiple_choice", question: "Wat geeft de portier aan Kirsten?", options: ["Een ticket.", "Een plattegrond (harita).", "Geld."], correctAnswer: "Een plattegrond (harita)." },
          { id: "12.1_opd1_7", type: "multiple_choice", question: "Waar zijn de toiletten?", options: ["Beneden.", "Naast het restaurant.", "Boven, bij hal 3."], correctAnswer: "Beneden." }
        ]
      }
    ]
  },
  {
    id: "12.2",
    chapter: 12,
    title: "12.2 Woordenlijst",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
          <p>Yol sorma ve tarif etme kelimeleri çok spesifiktir. Lütfen bu bölümdeki kelimeleri dikkatle çalışın. Sağ üstteki Flashcards kısmından pratik yapabilirsiniz.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling?",
        isExtra: true,
        questions: generateSmartQuestions(12, "Woordenlijst", 10, chapter12Vocab)
      }
    ]
  },
  {
    id: "12.3",
    chapter: 12,
    title: "12.3 De weg vragen en wijzen (Yol Tarifi)",
    theory: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>❓ De weg vragen (Yol Sormak)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
              <li><strong>Mag ik u iets vragen?</strong> (Size bir şey sorabilir miyim?)</li>
              <li><strong>Bent u hier bekend?</strong> (Buraları biliyor musunuz?)</li>
              <li><strong>Weet u waar ... is?</strong> (... nerede biliyor musunuz?)</li>
              <li><strong>Ik zoek ...</strong> (... arıyorum.)</li>
              <li><strong>Zijn er / is er ook ergens ...?</strong> (Buralarda bir yerde ... var mı?)</li>
            </ul>
            <p className="text-xs text-cyan-200 mt-2">Anlamadığınızda: <em>Kunt u dat nog een keer zeggen? / Wilt u dat herhalen? / Sorry, ik begrijp het niet.</em></p>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>👉 De weg wijzen (Yol Tarif Etmek)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
              <li><strong>U gaat hier rechtdoor.</strong> (Buradan dümdüz gidersiniz.)</li>
              <li><strong>U gaat linksaf / rechtsaf.</strong> (Sola/Sağa dönersiniz.)</li>
              <li><strong>U steekt de straat over.</strong> (Sokağın karşısına geçersiniz.)</li>
              <li><strong>U neemt de eerste / tweede straat rechts.</strong> (Birinci/İkinci sokaktan sağa dönersiniz.)</li>
              <li><strong>Aan de linkerkant / rechterkant.</strong> (Sol tarafta / Sağ tarafta.)</li>
              <li><strong>Volg de bordjes.</strong> (Tabelaları takip edin.)</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Pedagogisch): De Weg Vragen",
        isExtra: true,
        questions: [
          { id: "12.3_smart_1", type: "multiple_choice", question: "Je bent op straat en je bent verdwaald (lost). Wat is de meest beleefde (kibar) manier om iemand aan te spreken?", options: ["Waar is het station?", "Mag ik u iets vragen? Bent u hier bekend?", "Ik zoek het station."], correctAnswer: "Mag ik u iets vragen? Bent u hier bekend?" },
          { id: "12.3_smart_2", type: "multiple_choice", question: "Je begrijpt niet wat de man zegt. Wat zeg je?", options: ["Kunt u dat nog een keer zeggen?", "Wat is dit?", "Ik zoek het niet."], correctAnswer: "Kunt u dat nog een keer zeggen?" },
          { id: "12.3_smart_3", type: "fill_in", question: "Vertaal 'Dümdüz gidin': U gaat hier ________.", correctAnswer: "rechtdoor" },
          { id: "12.3_smart_4", type: "fill_in", question: "Vertaal 'İlk sokaktan sağa dönün': U neemt de ________ straat rechts.", correctAnswer: "eerste" }
        ]
      }
    ]
  },
  {
    id: "12.4",
    chapter: 12,
    title: "12.4 Scheidbare werkwoorden (Ayrılabilen Fiiller)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>✂️ Scheidbare werkwoorden (Ayrılabilen Fiiller - ÇOK ÖNEMLİ!)</h3>
          <p className="text-sm text-slate-300">Hollandacada bazı fiiller (<strong>aankomen, instappen, oversteken, meenemen</strong>) iki parçadan oluşur. Bu fiiller cümlede kullanılırken durumuna göre <strong>ayrılırlar</strong> veya <strong>birleşirler</strong>. Bu kuralları çok iyi öğrenmelisiniz!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-500/30">
              <h4 className="text-rose-300 font-bold mb-1">1. Şimdiki Zaman (Presens)</h4>
              <p className="text-xs text-rose-100 mb-2">Fiilin ana kısmı özneye göre çekimlenir ve 2. sırada yer alır. Öneki (prefix) ise <strong>cümlenin en sonuna</strong> atılır!</p>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>(aankomen) De tram <strong>komt</strong> om 12.00 uur <strong>aan</strong>.</li>
                <li>(instappen) Hij <strong>stapt</strong> bij het station <strong>in</strong>.</li>
                <li>(meenemen) Ik <strong>neem</strong> de plattegrond <strong>mee</strong>.</li>
              </ul>
            </div>

            <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
              <h4 className="text-amber-300 font-bold mb-1">2. Modal Fiillerle (Kan, Wil, Moet...)</h4>
              <p className="text-xs text-amber-100 mb-2">Eğer cümlede bir modal fiil varsa, ayrılabilen fiil <strong>ayrılmaz</strong> ve mastar halinde <strong>cümleninen sonuna</strong> gider.</p>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>U <strong>kunt</strong> direct <strong>instappen</strong>.</li>
                <li>Ik <strong>wil</strong> de plattegrond <strong>meenemen</strong>.</li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/30">
              <h4 className="text-emerald-300 font-bold mb-1">3. Geçmiş Zaman (Perfectum)</h4>
              <p className="text-xs text-emerald-100 mb-2">Geçmiş zaman yapılırken <strong>ge-</strong> eki, ayrılan önek ile fiilin arasına girer ve kelime <strong>tek parça halinde</strong> cümlenin sonuna gider.</p>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>(in + stappen) Hij is <strong>ingestapt</strong>.</li>
                <li>(mee + nemen) Ik heb het <strong>meegenomen</strong>.</li>
              </ul>
            </div>

            <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/30">
              <h4 className="text-cyan-300 font-bold mb-1">4. 'Te' ile kullanım</h4>
              <p className="text-xs text-cyan-100 mb-2">Eğer fiil 'te' (İngilizcedeki 'to') alması gerekiyorsa, 'te' kelimesi önek ile fiilin arasına girer. Hepsi ayrı yazılır (veya bazen bitişik).</p>
              <ul className="text-sm text-slate-200 list-disc pl-5">
                <li>U hoeft nog niet <strong>in te stappen</strong>.</li>
                <li>...de straat <strong>over te steken</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Maak de zinnen compleet. Gebruik de goede vorm van het werkwoord. Let op de tijd!",
        isExtra: false,
        questions: [
          { id: "12.4_opd4_1", type: "fill_in", question: "1. oversteken (presens) - Kirsten ________ de straat ________.", correctAnswer: "steekt, over" },
          { id: "12.4_opd4_2", type: "fill_in", question: "2. meenemen (presens) - Ik ________ een plattegrond ________.", correctAnswer: "neem, mee" },
          { id: "12.4_opd4_3", type: "fill_in", question: "3. samenwonen (presens) - Patricia ________ ________.", correctAnswer: "woont, samen" },
          { id: "12.4_opd4_4", type: "fill_in", question: "4. afspreken (presens) - Hoe laat ________ we ________?", correctAnswer: "spreken, af" },
          { id: "12.4_opd4_5", type: "fill_in", question: "5. afgaan (presens) - U ________ hier de trap ________.", correctAnswer: "gaat, af" },
          { id: "12.4_opd4_6", type: "fill_in", question: "6. tegenkomen (imperfectum / dı'lı geçmiş) - Gisteren ________ ik Peter in de supermarkt ________.", correctAnswer: "kwam, tegen" },
          { id: "12.4_opd4_7", type: "fill_in", question: "7. verdergaan (imperfectum / dı'lı geçmiş) - We ________ met opdracht 14 ________.", correctAnswer: "gingen, verder" },
          { id: "12.4_opd4_8", type: "fill_in", question: "8. meenemen (perfectum / miş'li geçmiş) - Wie heeft een cadeau voor Marit ________?", correctAnswer: "meegenomen" },
          { id: "12.4_opd4_9", type: "fill_in", question: "9. aankomen (perfectum) - Kirsten is om 11.00 uur in Amsterdam ________.", correctAnswer: "aangekomen" },
          { id: "12.4_opd4_10", type: "fill_in", question: "10. instappen (perfectum) - Waar ben je ________?", correctAnswer: "ingestapt" },
          { id: "12.4_opd4_11", type: "fill_in", question: "11. afrekenen (perfectum) - Ik heb de koffie al ________.", correctAnswer: "afgerekend" },
          { id: "12.4_opd4_12", type: "fill_in", question: "12. samenwonen (perfectum) - We hebben in de Verenigde Staten ook ________.", correctAnswer: "samengewoond" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Test Je Kennis over Scheidbare Werkwoorden",
        isExtra: true,
        questions: [
          { id: "12.4_smart_1", type: "multiple_choice", question: "Welke zin is correct? (Werkwoord: meenemen)", options: ["Ik meeneem de plattegrond.", "Ik neem de plattegrond mee.", "Ik neem mee de plattegrond."], correctAnswer: "Ik neem de plattegrond mee." },
          { id: "12.4_smart_2", type: "multiple_choice", question: "Welke zin is correct? (Met modaal werkwoord: 'kan')", options: ["Ik kan de plattegrond meenemen.", "Ik kan meeneem de plattegrond.", "Ik kan neem de plattegrond mee."], correctAnswer: "Ik kan de plattegrond meenemen." },
          { id: "12.4_smart_3", type: "multiple_choice", question: "Wat is het perfectum (past tense) van 'instappen'?", options: ["geinstapt", "ingestapt", "ingestapen"], correctAnswer: "ingestapt" }
        ]
      }
    ]
  },
  {
    id: "12.5",
    chapter: 12,
    title: "12.5 Tekst: Fiets en Wandelbeurs",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Fiets en Wandelbeurs Nederland</h3>
          <p className="text-sm text-slate-300 mb-2">Hollanda'nın en büyük etkinliklerinden biri olan Bisiklet ve Yürüyüş Fuarı (Fiets en Wandelbeurs) hakkında pratik bilgiler:</p>
          <ul className="text-sm text-slate-200 bg-amber-900/20 p-4 rounded-xl border border-amber-500/30 space-y-1">
            <li><strong>Wanneer:</strong> 11 februari tot en met 12 februari (11 Şubat'tan 12 Şubat'a kadar).</li>
            <li><strong>Locatie:</strong> Jaarbeurs Utrecht.</li>
            <li><strong>Openingstijden:</strong> Beide dagen geopend van 10.00 tot 17.00.</li>
            <li><strong>Entreeprijs:</strong> Kassa € 15,00. Jongeren (13-25 jaar): € 7,50. Kinderen (tot 12 jaar onder begeleiding): gratis.</li>
            <li><strong>Parkeren:</strong> € 3,50 per uur tot een maximum van € 14,00 per dag.</li>
            <li><strong>Honden:</strong> Toegestaan mits aangelijnd (Tasmalı olması şartıyla izinli).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Geef een reactie op de vragen over de tekst.",
        isExtra: false,
        questions: [
          { id: "12.5_opd9_1", type: "multiple_choice", question: "1. Vanaf welke leeftijd moet je een kaartje (ticket) kopen?", options: ["Vanaf 12 jaar", "Vanaf 13 jaar (daarvoor is het gratis onder begeleiding)", "Voor iedereen is het gratis"], correctAnswer: "Vanaf 13 jaar (daarvoor is het gratis onder begeleiding)" },
          { id: "12.5_opd9_2", type: "multiple_choice", question: "2. Kun je bij de Fiets en Wandelbeurs parkeren?", options: ["Ja, voor € 3,50 per uur.", "Nee, er is geen parkeerplaats.", "Ja, het is gratis."], correctAnswer: "Ja, voor € 3,50 per uur." },
          { id: "12.5_opd9_3", type: "multiple_choice", question: "3. Hoelang duurt de Fiets en Wandelbeurs?", options: ["Twee dagen (11 t/m 12 februari).", "Een week.", "Één dag."], correctAnswer: "Twee dagen (11 t/m 12 februari)." }
        ]
      }
    ]
  },
  {
    id: "12.6",
    chapter: 12,
    title: "12.6 Uitspraak & Cultuur (Beurzen)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ou / au - ui</h3>
          <p className="text-sm text-slate-300"><strong>Opdracht 10 & 11:</strong> Hollandacada <strong>ou</strong> ve <strong>au</strong> harfleri tamamen aynı sesi verir (İngilizcedeki 'ow' gibi, örn: now/how). Ancak <strong>ui</strong> sesi farklıdır; dudaklar hafif büzülerek çıkarılan, Türkçede tam karşılığı olmayan bir sestir (Örn: huis, uit, buiten).</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Beurzen (Fuarlar)</h3>
          <p className="text-sm text-slate-300">In Nederland zijn veel soorten beurzen (Hollanda'da birçok fuar çeşidi vardır):</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>De Fiets en Wandelbeurs:</strong> Bisiklet ve Yürüyüş Fuarı.</li>
            <li><strong>De Woonbeurs:</strong> Ev/Dekorasyon Fuarı.</li>
            <li><strong>De Vakantiebeurs:</strong> Tatil/Turizm Fuarı.</li>
            <li><strong>De Huishoudbeurs:</strong> Ev Eşyaları/Ev İşleri Fuarı.</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Cultuur Oefening: Welke beurs?",
        isExtra: true,
        questions: [
          { id: "12.6_cult_1", type: "multiple_choice", question: "Je wilt volgend jaar naar Spanje op vakantie en zoekt inspiratie. Naar welke beurs ga je?", options: ["De Woonbeurs", "De Vakantiebeurs", "De Huishoudbeurs"], correctAnswer: "De Vakantiebeurs" },
          { id: "12.6_cult_2", type: "multiple_choice", question: "Je zoekt nieuwe meubels voor je woonkamer. Naar welke beurs ga je?", options: ["De Woonbeurs", "De Vakantiebeurs", "De Fiets en Wandelbeurs"], correctAnswer: "De Woonbeurs" }
        ]
      }
    ]
  }
];