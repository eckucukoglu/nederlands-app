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
    { speaker: "Verteller", text: "Kirsten, de Duitse logopediestudente, is op het station in Amsterdam en gaat naar de Wandelbeurs in de Evenementenhal.", translation: { tr: "Alman logopedi öğrencisi Kirsten, Amsterdam'daki istasyonda ve Evenementenhal'daki Yürüyüş Fuarı'na gidiyor.", en: "Kirsten, the German speech therapy student, is at the station in Amsterdam and is going to the Walking Fair in the Evenementenhal." } },
    { speaker: "Kirsten", text: "Goedemorgen meneer, mag ik u iets vragen? Bent u hier bekend? Weet u waar de Evenementenhal is?", translation: { tr: "Günaydın beyefendi, size bir şey sorabilir miyim? Buraları biliyor musunuz (Buralara aşina mısınız)? Evenementenhal'ın nerede olduğunu biliyor musunuz?", en: "Good morning sir, may I ask you something? Do you know your way around here? Do you know where the Evenementenhal is?" } },
    { speaker: "Voorbijganger", text: "Nee, sorry, ik woon hier niet. Dat kunt u beter aan die buschauffeur vragen.", translation: { tr: "Hayır, üzgünüm, burada yaşamıyorum. Onu şu otobüs şoförüne sorsanız daha iyi olur.", en: "No, sorry, I don't live here. You'd better ask that bus driver." } },
    { speaker: "Kirsten", text: "Goedemorgen, ik moet naar de Evenementenhal. Kan ik dat lopen of is dat te ver?", translation: { tr: "Günaydın, Evenementenhal'a gitmem gerekiyor. Oraya yürüyebilir miyim yoksa çok mu uzak?", en: "Good morning, I need to go to the Evenementenhal. Can I walk that or is it too far?" } },
    { speaker: "Buschauffeur", text: "Het is zeker een uur lopen vanaf hier. U kunt beter met de tram gaan, lijn 25. U hebt geluk, daar komt hij net aan, u kunt direct instappen.", translation: { tr: "Buradan kesinlikle bir saatlik yürüme mesafesinde. Tramvayla, 25 numaralı hatla gitseniz daha iyi olur. Şanslısınız, işte tam da geliyor, hemen binebilirsiniz.", en: "It is certainly an hour's walk from here. You'd better take the tram, line 25. You are lucky, it is just arriving there, you can get in straight away." } },
    { speaker: "Kirsten", text: "Stopt de tram bij de Evenementenhal of moet ik nog een stuk lopen?", translation: { tr: "Tramvay Evenementenhal'da mı duruyor yoksa biraz daha yürümem mi gerekecek?", en: "Does the tram stop at the Evenementenhal or do I still have to walk a bit?" } },
    { speaker: "Buschauffeur", text: "De tram stopt tegenover de ingang van de Evenementenhal, u hoeft alleen maar de straat over te steken.", translation: { tr: "Tramvay Evenementenhal girişinin tam karşısında duruyor, sadece sokağın karşısına geçmeniz yeterli.", en: "The tram stops opposite the entrance of the Evenementenhal, you only have to cross the street." } },
    { speaker: "Verteller", text: "(bij de balie van de Evenementenhal)", translation: { tr: "(Evenementenhal'ın bilgi masasında)", en: "(at the information desk of the Evenementenhal)" } },
    { speaker: "Kirsten", text: "Goedemorgen, kunt u mij vertellen in welke hal de Wandelbeurs is?", translation: { tr: "Günaydın, Yürüyüş Fuarı'nın hangi salonda olduğunu söyleyebilir misiniz?", en: "Good morning, can you tell me in which hall the Walking Fair is?" } },
    { speaker: "Portier", text: "Ja, boven, op de eerste verdieping, in hal 3. Ga hier de trap op. Loop rechtdoor tot het restaurant. Dat herkent u aan de blauwe ramen. Dan gaat u linksaf en aan het eind van de gang rechts, daar is hal 3. Neemt u deze plattegrond maar mee.", translation: { tr: "Evet, yukarıda, birinci katta, 3 numaralı salonda. Buradan merdivenleri çıkın. Restorana kadar dümdüz yürüyün. Onu mavi camlarından tanıyabilirsiniz. Sonra sola dönün ve koridorun sonunda sağa dönün, 3 numaralı salon oradadır. Siz en iyisi bu haritayı yanınıza alın.", en: "Yes, upstairs, on the first floor, in hall 3. Go up the stairs here. Walk straight ahead until the restaurant. You can recognize it by the blue windows. Then you turn left and at the end of the corridor to the right, there is hall 3. Just take this map with you." } },
    { speaker: "Kirsten", text: "Dank u wel. Ik zoek ook de toiletten.", translation: { tr: "Teşekkür ederim. Tuvaletleri de arıyorum.", en: "Thank you. I am also looking for the toilets." } },
    { speaker: "Portier", text: "De toiletten zijn beneden. Ga hier rechts de hoek om en dan de trap af, de gang uit lopen en dan weer naar rechts. Dan ziet u de toiletten vanzelf. U kunt ook de bordjes volgen, dat is misschien makkelijker.", translation: { tr: "Tuvaletler aşağıdadır. Buradan sağa köşeyi dönün ve sonra merdivenlerden inin, koridoru sonuna kadar yürüyün ve sonra tekrar sağa dönün. O zaman tuvaletleri kendiliğinden göreceksiniz. Tabelaları da takip edebilirsiniz, bu belki daha kolay olur.", en: "The toilets are downstairs. Turn the corner to the right here and then go down the stairs, walk to the end of the corridor and then right again. Then you will see the toilets automatically. You can also follow the signs, that might be easier." } },
    { speaker: "Kirsten", text: "Bedankt.", translation: { tr: "Teşekkürler.", en: "Thanks." } }
  ]
};

export const chapter12Sections = [
  {
    id: "12.1",
    chapter: 12,
    title: "12.1 Dialoog: De weg vragen",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Naar de Evenementenhal</h3>
            <p>Kirsten, Amsterdam'da Evenementenhal'a gitmek istiyor ve yolda çeşitli kişilere yol soruyor. Yol tarifi (De weg vragen en wijzen) için kullanılan şu kalıplara dikkat edin:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Bent u hier bekend?</strong> (Buraları biliyor musunuz? / Aşina mısınız?)</li>
              <li><strong>Loop rechtdoor tot het restaurant.</strong> (Restorana kadar dümdüz yürüyün.)</li>
              <li><strong>Dan gaat u linksaf / rechtsaf.</strong> (Sonra sola/sağa dönersiniz.)</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: To the Evenementenhal</h3>
            <p>Kirsten wants to go to the Evenementenhal in Amsterdam and asks various people for directions on the way. Pay attention to these phrases used for asking and giving directions:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Bent u hier bekend?</strong> (Do you know your way around here? / Are you familiar with this area?)</li>
              <li><strong>Loop rechtdoor tot het restaurant.</strong> (Walk straight ahead until the restaurant.)</li>
              <li><strong>Dan gaat u linksaf / rechtsaf.</strong> (Then you turn left/right.)</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de dialoog (Eşleştirme / Matching).",
        isExtra: false,
        questions: [
          { id: "12.1_opd1_1", type: "multiple_choice", question: "Waar is Kirsten aan het begin van de dialoog?", options: ["Op de Wandelbeurs", "Op het station in Amsterdam", "In het restaurant"], correctAnswer: "Op het station in Amsterdam" },
          { id: "12.1_opd1_2", type: "multiple_choice", question: "Wat vraagt Kirsten aan de buschauffeur?", options: ["Of de tram stopt.", "Of ze naar de Evenementenhal kan lopen of dat het te ver is.", "Waar ze de plattegrond kan vinden."], correctAnswer: "Of ze naar de Evenementenhal kan lopen of dat het te ver is." },
          { id: "12.1_opd1_3", type: "multiple_choice", question: "Hoe gaat ze naar de Evenementenhal?", options: ["Met de bus", "Lopend", "Met de tram (lijn 25)"], correctAnswer: "Met de tram (lijn 25)" },
          { id: "12.1_opd1_4", type: "multiple_choice", question: "Waar stopt lijn 25?", options: ["Ver weg van de hal.", "Tegenover de ingang van de Evenementenhal.", "Bij het restaurant."], correctAnswer: "Tegenover de ingang van de Evenementenhal." },
          { id: "12.1_opd1_5", type: "multiple_choice", question: "Waar is de Wandelbeurs precies?", options: ["Beneden in hal 1.", "Boven, op de eerste verdieping, in hal 3.", "Buiten het gebouw."], correctAnswer: "Boven, op de eerste verdieping, in hal 3." },
          { id: "12.1_opd1_6", type: "multiple_choice", question: "Wat geeft de portier aan Kirsten?", options: ["Een ticket.", "Een plattegrond (harita / map).", "Geld."], correctAnswer: "Een plattegrond (harita / map)." },
          { id: "12.1_opd1_7", type: "multiple_choice", question: "Waar zijn de toiletten?", options: ["Beneden.", "Naast het restaurant.", "Boven, bij hal 3."], correctAnswer: "Beneden." }
        ]
      }
    ]
  },
  {
    id: "12.2",
    chapter: 12,
    title: "12.2 Woordenlijst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
            <p>Yol sorma ve tarif etme kelimeleri çok spesifiktir. Lütfen bu bölümdeki kelimeleri dikkatle çalışın. Menüdeki Flashcards kısmından pratik yapabilirsiniz.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Vocabulary Analysis</h3>
            <p>Words for asking and giving directions are very specific. Please study the words in this section carefully. You can practice them using the Flashcards section in the menu.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling? (What is the correct translation?)",
        isExtra: true,
        questions: generateSmartQuestions(12, "Woordenlijst", 10, chapter12Vocab)
      }
    ]
  },
  {
    id: "12.3",
    chapter: 12,
    title: "12.3 De weg vragen en wijzen (Yol Tarifi / Directions)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>❓ De weg vragen (Asking for directions)</h3>
              <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                <li><strong>Mag ik u iets vragen?</strong> (May I ask you something?)</li>
                <li><strong>Bent u hier bekend?</strong> (Do you know your way around here?)</li>
                <li><strong>Weet u waar ... is?</strong> (Do you know where ... is?)</li>
                <li><strong>Ik zoek ...</strong> (I am looking for ...)</li>
                <li><strong>Zijn er / is er ook ergens ...?</strong> (Are there / is there also somewhere ...?)</li>
              </ul>
              <p className="text-xs text-cyan-200 mt-2">When you don't understand: <em>Kunt u dat nog een keer zeggen? / Wilt u dat herhalen? / Sorry, ik begrijp het niet.</em></p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>👉 De weg wijzen (Giving directions)</h3>
              <ul style={{ color: '#cbd5e1', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><strong>U gaat hier rechtdoor.</strong> (You go straight ahead here.)</li>
                <li><strong>U gaat linksaf / rechtsaf.</strong> (You turn left / right.)</li>
                <li><strong>U steekt de straat over.</strong> (You cross the street.)</li>
                <li><strong>U neemt de eerste / tweede straat rechts.</strong> (You take the first / second street on the right.)</li>
                <li><strong>Aan de linkerkant / rechterkant.</strong> (On the left side / right side.)</li>
                <li><strong>Volg de bordjes.</strong> (Follow the signs.)</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): De Weg Vragen",
        isExtra: true,
        questions: [
          { id: "12.3_smart_1", type: "multiple_choice", question: "Je bent op straat en je bent verdwaald (lost). Wat is de meest beleefde (kibar / polite) manier om iemand aan te spreken?", options: ["Waar is het station?", "Mag ik u iets vragen? Bent u hier bekend?", "Ik zoek het station."], correctAnswer: "Mag ik u iets vragen? Bent u hier bekend?" },
          { id: "12.3_smart_2", type: "multiple_choice", question: "Je begrijpt niet wat de man zegt. Wat zeg je?", options: ["Kunt u dat nog een keer zeggen?", "Wat is dit?", "Ik zoek het niet."], correctAnswer: "Kunt u dat nog een keer zeggen?" },
          { id: "12.3_smart_3", type: "fill_in", question: "Vertaal 'Dümdüz gidin / Go straight': U gaat hier ________.", correctAnswer: "rechtdoor" },
          { id: "12.3_smart_4", type: "fill_in", question: "Vertaal 'İlk sokaktan sağa dönün / Take the first street right': U neemt de ________ straat rechts.", correctAnswer: "eerste" }
        ]
      }
    ]
  },
  {
    id: "12.4",
    chapter: 12,
    title: "12.4 Scheidbare werkwoorden (Ayrılabilen Fiiller / Separable Verbs)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>✂️ Scheidbare werkwoorden (Separable Verbs - VERY IMPORTANT!)</h3>
            <p className="text-sm text-slate-300">In Dutch, some verbs (<strong>aankomen, instappen, oversteken, meenemen</strong>) consist of two parts. When used in a sentence, they either <strong>separate</strong> or <strong>stay together</strong> depending on the situation. You must learn these rules very well!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-500/30">
                <h4 className="text-rose-300 font-bold mb-1">1. Present Tense (Presens)</h4>
                <p className="text-xs text-rose-100 mb-2">The main part of the verb is conjugated and placed 2nd. The prefix is thrown to the <strong>very end of the sentence</strong>!</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>(aankomen) De tram <strong>komt</strong> om 12.00 uur <strong>aan</strong>.</li>
                  <li>(instappen) Hij <strong>stapt</strong> bij het station <strong>in</strong>.</li>
                  <li>(meenemen) Ik <strong>neem</strong> de plattegrond <strong>mee</strong>.</li>
                </ul>
              </div>

              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <h4 className="text-amber-300 font-bold mb-1">2. With Modal Verbs (Kan, Wil, Moet...)</h4>
                <p className="text-xs text-amber-100 mb-2">If there is a modal verb in the sentence, the separable verb <strong>does not separate</strong> and goes to the <strong>end of the sentence</strong> as an infinitive.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>U <strong>kunt</strong> direct <strong>instappen</strong>.</li>
                  <li>Ik <strong>wil</strong> de plattegrond <strong>meenemen</strong>.</li>
                </ul>
              </div>

              <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/30">
                <h4 className="text-emerald-300 font-bold mb-1">3. Past Tense (Perfectum)</h4>
                <p className="text-xs text-emerald-100 mb-2">When making the past tense, the <strong>ge-</strong> is placed between the prefix and the verb, and the word goes to the end of the sentence as <strong>one single word</strong>.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>(in + stappen) Hij is <strong>ingestapt</strong>.</li>
                  <li>(mee + nemen) Ik heb het <strong>meegenomen</strong>.</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/30">
                <h4 className="text-cyan-300 font-bold mb-1">4. Use with 'te'</h4>
                <p className="text-xs text-cyan-100 mb-2">If the verb needs to take 'te' (like 'to' in English), the word 'te' goes between the prefix and the verb. They are written separately (or sometimes attached).</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>U hoeft nog niet <strong>in te stappen</strong>.</li>
                  <li>...de straat <strong>over te steken</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Maak de zinnen compleet. Gebruik de goede vorm van het werkwoord. Let op de tijd! (Complete the sentences. Use the correct form of the verb. Pay attention to the tense!)",
        isExtra: false,
        questions: [
          { id: "12.4_opd4_1", type: "fill_in", question: "1. oversteken (presens) - Kirsten ________ de straat ________.", correctAnswer: "steekt, over" },
          { id: "12.4_opd4_2", type: "fill_in", question: "2. meenemen (presens) - Ik ________ een plattegrond ________.", correctAnswer: "neem, mee" },
          { id: "12.4_opd4_3", type: "fill_in", question: "3. samenwonen (presens) - Patricia ________ ________.", correctAnswer: "woont, samen" },
          { id: "12.4_opd4_4", type: "fill_in", question: "4. afspreken (presens) - Hoe laat ________ we ________?", correctAnswer: "spreken, af" },
          { id: "12.4_opd4_5", type: "fill_in", question: "5. afgaan (presens) - U ________ hier de trap ________.", correctAnswer: "gaat, af" },
          { id: "12.4_opd4_6", type: "fill_in", question: "6. tegenkomen (imperfectum / dı'lı geçmiş / past simple) - Gisteren ________ ik Peter in de supermarkt ________.", correctAnswer: "kwam, tegen" },
          { id: "12.4_opd4_7", type: "fill_in", question: "7. verdergaan (imperfectum / dı'lı geçmiş / past simple) - We ________ met opdracht 14 ________.", correctAnswer: "gingen, verder" },
          { id: "12.4_opd4_8", type: "fill_in", question: "8. meenemen (perfectum / miş'li geçmiş / present perfect) - Wie heeft een cadeau voor Marit ________?", correctAnswer: "meegenomen" },
          { id: "12.4_opd4_9", type: "fill_in", question: "9. aankomen (perfectum) - Kirsten is om 11.00 uur in Amsterdam ________.", correctAnswer: "aangekomen" },
          { id: "12.4_opd4_10", type: "fill_in", question: "10. instappen (perfectum) - Waar ben je ________?", correctAnswer: "ingestapt" },
          { id: "12.4_opd4_11", type: "fill_in", question: "11. afrekenen (perfectum) - Ik heb de koffie al ________.", correctAnswer: "afgerekend" },
          { id: "12.4_opd4_12", type: "fill_in", question: "12. samenwonen (perfectum) - We hebben in de Verenigde Staten ook ________.", correctAnswer: "samengewoond" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Test Je Kennis over Scheidbare Werkwoorden (Test Your Knowledge on Separable Verbs)",
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Text: Fiets en Wandelbeurs Nederland</h3>
            <p className="text-sm text-slate-300 mb-2">Practical information about the Bicycle and Walking Fair (Fiets en Wandelbeurs), one of the biggest events in the Netherlands:</p>
            <ul className="text-sm text-slate-200 bg-amber-900/20 p-4 rounded-xl border border-amber-500/30 space-y-1">
              <li><strong>Wanneer:</strong> 11 februari tot en met 12 februari (from February 11th up to and including February 12th).</li>
              <li><strong>Locatie:</strong> Jaarbeurs Utrecht.</li>
              <li><strong>Openingstijden:</strong> Beide dagen geopend van 10.00 tot 17.00 (Both days open from 10:00 to 17:00).</li>
              <li><strong>Entreeprijs:</strong> Kassa € 15,00. Jongeren (13-25 jaar): € 7,50. Kinderen (tot 12 jaar onder begeleiding): gratis (free under supervision).</li>
              <li><strong>Parkeren:</strong> € 3,50 per uur tot een maximum van € 14,00 per dag.</li>
              <li><strong>Honden:</strong> Toegestaan mits aangelijnd (Allowed provided they are on a leash).</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 9: Geef een reactie op de vragen over de tekst. (Respond to the questions about the text.)",
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
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
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
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: ou / au - ui (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 10 & 11:</strong> In Dutch, the letters <strong>ou</strong> and <strong>au</strong> produce exactly the same sound (like 'ow' in English, e.g.: now/how). However, the <strong>ui</strong> sound is different; it's a sound produced with slightly pursed lips that doesn't have an exact equivalent in many languages (e.g.: huis, uit, buiten).</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Beurzen (Fairs)</h3>
              <p className="text-sm text-slate-300">In Nederland zijn veel soorten beurzen (There are many types of fairs in the Netherlands):</p>
              <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
                <li><strong>De Fiets en Wandelbeurs:</strong> Bicycle and Walking Fair.</li>
                <li><strong>De Woonbeurs:</strong> Home/Decoration Fair.</li>
                <li><strong>De Vakantiebeurs:</strong> Holiday/Tourism Fair.</li>
                <li><strong>De Huishoudbeurs:</strong> Household Fair.</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Cultuur Oefening: Welke beurs? (Culture Exercise: Which fair?)",
        isExtra: true,
        questions: [
          { id: "12.6_cult_1", type: "multiple_choice", question: "Je wilt volgend jaar naar Spanje op vakantie en zoekt inspiratie. Naar welke beurs ga je?", options: ["De Woonbeurs", "De Vakantiebeurs", "De Huishoudbeurs"], correctAnswer: "De Vakantiebeurs" },
          { id: "12.6_cult_2", type: "multiple_choice", question: "Je zoekt nieuwe meubels voor je woonkamer. Naar welke beurs ga je?", options: ["De Woonbeurs", "De Vakantiebeurs", "De Fiets en Wandelbeurs"], correctAnswer: "De Woonbeurs" }
        ]
      }
    ]
  },
  {
    id: "On-Class-12",
    chapter: 12,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Herhaling (Les 11) & Wederkerende Werkwoorden</h3>
              <p className="text-sm text-slate-300 mb-2">Refleksif (Dönüşlü) Fiillerin tekrarı:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1 mb-3">
                <li><strong>zich wassen:</strong> Ik was <em>me</em>. (Yıkanıyorum)</li>
                <li><strong>zich voorbereiden:</strong> Ik bereid <em>me</em> voor. (Hazırlanıyorum / to get prepared/ready)</li>
                <li><strong>Ik ben vandaag jarig.</strong> (Bugün benim doğum günüm / It's my birthday today)</li>
              </ul>
              <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 font-bold text-xs uppercase mb-1">zich vergissen (to be mistaken / yanılmak)</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-100">
                  <div>ik vergis <strong>me</strong></div>
                  <div>wij vergissen <strong>ons</strong></div>
                  <div>jij vergist <strong>je</strong></div>
                  <div>jullie vergissen <strong>je</strong></div>
                  <div>hij vergist <strong>zich</strong></div>
                  <div>zij vergissen <strong>zich</strong></div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📍 Plaats vs. Beweging (Location vs. Movement)</h3>
              <p className="text-sm text-slate-300 mb-3">Yön tariflerinde "Bulunma/Konum (Plaats)" ile "Hareket (Beweging)" ifadelerini ayırt etmek önemlidir.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Plaats (Konum/Yer)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>boven en beneden:</strong> upstairs and downstairs (yukarısı ve aşağısı)</li>
                    <li><strong>op de eerste verdieping:</strong> on the first floor (birinci katta)</li>
                    <li><strong>aan de linkerkant / aan de rechterkant:</strong> on the left side / on the right side</li>
                    <li><strong>tegenover de ingang:</strong> opposite the entrance (girişin karşısında)</li>
                    <li><strong>aan het eind van de gang:</strong> at the end of the hallway (koridorun sonunda)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Beweging (Hareket)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>de trap op/af gaan:</strong> go upstairs/downstairs (merdiven inmek/çıkmak)</li>
                    <li><strong>rechtdoor lopen:</strong> walk straight (düz yürümek)</li>
                    <li><strong>linksaf/rechtsaf gaan:</strong> turn left/right (sağa/sola dönmek)</li>
                    <li><strong>de hoek om gaan:</strong> to go around the corner (köşeyi dönmek)</li>
                    <li><strong>de gang uit lopen:</strong> walk until the end of the hallway (koridoru bitene kadar yürümek)</li>
                    <li><strong>de bordjes volgen:</strong> follow the signs (tabelaları takip etmek)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✂️ Separable Verbs (Scheidbare Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">Ayrılabilen fiillerde, fiil çekimlendiğinde ilk parça (prefix) cümlenin <strong>en sonuna</strong> gider.</p>
              
              <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30 mb-3">
                <h4 className="text-emerald-300 font-bold text-sm mb-1">Voorbeeld: in-stappen (to get on the train/bus)</h4>
                <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                  <li><strong>Present:</strong> Hij <span className="font-bold text-white">stapt</span> bij het centraal station <span className="font-bold text-white">in</span>.</li>
                  <li><strong>Imperfectum:</strong> Hij <span className="font-bold text-white">stapte</span> bij het centraal station <span className="font-bold text-white">in</span>.</li>
                  <li><strong>Perfectum:</strong> Hij is bij het station <span className="font-bold text-white">in</span>ge<span className="font-bold text-white">stapt</span>. (Araya 'ge' girer)</li>
                  <li><strong>Infinitive/Basic:</strong> U kunt direct <span className="font-bold text-white">instappen</span>. (Yardımcı fiil ile ayrılmaz)</li>
                  <li><strong>Met te (with hoeven):</strong> U hoeft nog niet <span className="font-bold text-white">in te stappen</span>. (Araya 'te' girer)</li>
                </ul>
              </div>
              <p className="text-xs text-slate-400"><em>Andere voorbeelden:</em> Ik kan de fles opendoen. ➔ Ik <strong>doe</strong> de fles <strong>open</strong>.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🗺️ De weg vragen en een route controleren</h3>
              <p className="text-sm text-slate-300 mb-3">Yol sormak ve tarifi teyit etmek için faydalı ifadeler:</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse">
                <tbody className="divide-y divide-slate-700/50">
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Pardon, mag ik u iets vragen?</td>
                    <td className="py-2">Excuse me, can I ask you something? (iets = something)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kunt u mij helpen?</td>
                    <td className="py-2">Can you help me?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Weet u waar ... is? / Ik zoek ...</td>
                    <td className="py-2">Do you know where ... is? / I am looking for ...</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Zijn er hier ook ergens toiletten?</td>
                    <td className="py-2">Are there any toilets around here too? (ergens = somewhere)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kan ik dat lopen? / Is dat ver?</td>
                    <td className="py-2">Can I walk that? / Is that far?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Welke bus of tram moet ik nemen?</td>
                    <td className="py-2">Which bus or tram should I take?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kunt u dat nog een keer zeggen?</td>
                    <td className="py-2">Can you repeat that? (nog een keer = one more time/again)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Sorry, ik begrijp het niet.</td>
                    <td className="py-2">Sorry, I don't understand.</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Bedoelt u de eerste straat links?</td>
                    <td className="py-2">Do you mean the first street on the left? (Kontrol etme)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Dus eerst rechtdoor en dan rechts?</td>
                    <td className="py-2">So first straight ahead and then to the right?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Ja, dat klopt. / Klopt dat?</td>
                    <td className="py-2">Yes, that is correct. / Is that correct?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Dank u wel. / Bedankt voor uw hulp.</td>
                    <td className="py-2">Thank you. / Thank you for your help. (Afsluiten/Closing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Lesson 12 (Q&A)</h3>
              <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                <li><strong>Waar is Kirsten?</strong> ➔ Kirsten is op het station.</li>
                <li><strong>Wat vraagt Kirsten aan de buschauffeur?</strong> ➔ Zij vraagt of zij kan lopen.</li>
                <li><strong>Kan zij naar de evenementenhal lopen of moet zij met de tram gaan?</strong> ➔ (Zij moet met de tram gaan/het is te ver).</li>
                <li><strong>Waar is de wandelbeurs?</strong> ➔ De wandelbeurs is in hal drie.</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Review (Lesson 11) & Reflexive Verbs</h3>
              <p className="text-sm text-slate-300 mb-2">Review of Reflexive Verbs:</p>
              <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1 mb-3">
                <li><strong>zich wassen:</strong> Ik was <em>me</em>. (I wash myself)</li>
                <li><strong>zich voorbereiden:</strong> Ik bereid <em>me</em> voor. (I get prepared/ready)</li>
                <li><strong>Ik ben vandaag jarig.</strong> (It's my birthday today)</li>
              </ul>
              <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 font-bold text-xs uppercase mb-1">zich vergissen (to be mistaken)</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-100">
                  <div>ik vergis <strong>me</strong></div>
                  <div>wij vergissen <strong>ons</strong></div>
                  <div>jij vergist <strong>je</strong></div>
                  <div>jullie vergissen <strong>je</strong></div>
                  <div>hij vergist <strong>zich</strong></div>
                  <div>zij vergissen <strong>zich</strong></div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📍 Plaats vs. Beweging (Location vs. Movement)</h3>
              <p className="text-sm text-slate-300 mb-3">When giving directions, it is important to distinguish between phrases indicating "Location (Plaats)" and "Movement (Beweging)".</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Plaats (Location)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>boven en beneden:</strong> upstairs and downstairs</li>
                    <li><strong>op de eerste verdieping:</strong> on the first floor</li>
                    <li><strong>aan de linkerkant / aan de rechterkant:</strong> on the left side / on the right side</li>
                    <li><strong>tegenover de ingang:</strong> opposite the entrance</li>
                    <li><strong>aan het eind van de gang:</strong> at the end of the hallway</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 text-sm mb-1">Beweging (Movement)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>de trap op/af gaan:</strong> go upstairs/downstairs</li>
                    <li><strong>rechtdoor lopen:</strong> walk straight</li>
                    <li><strong>linksaf/rechtsaf gaan:</strong> turn left/right</li>
                    <li><strong>de hoek om gaan:</strong> to go around the corner</li>
                    <li><strong>de gang uit lopen:</strong> walk until the end of the hallway</li>
                    <li><strong>de bordjes volgen:</strong> follow the signs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✂️ Separable Verbs (Scheidbare Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">With separable verbs, when the verb is conjugated, the first part (prefix) goes to the <strong>very end</strong> of the sentence.</p>
              
              <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/30 mb-3">
                <h4 className="text-emerald-300 font-bold text-sm mb-1">Example: in-stappen (to get on the train/bus)</h4>
                <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                  <li><strong>Present:</strong> Hij <span className="font-bold text-white">stapt</span> bij het centraal station <span className="font-bold text-white">in</span>.</li>
                  <li><strong>Imperfectum:</strong> Hij <span className="font-bold text-white">stapte</span> bij het centraal station <span className="font-bold text-white">in</span>.</li>
                  <li><strong>Perfectum:</strong> Hij is bij het station <span className="font-bold text-white">in</span>ge<span className="font-bold text-white">stapt</span>. ('ge' goes in between)</li>
                  <li><strong>Infinitive/Basic:</strong> U kunt direct <span className="font-bold text-white">instappen</span>. (Does not separate with an auxiliary verb)</li>
                  <li><strong>Met te (with hoeven):</strong> U hoeft nog niet <span className="font-bold text-white">in te stappen</span>. ('te' goes in between)</li>
                </ul>
              </div>
              <p className="text-xs text-slate-400"><em>Other examples:</em> Ik kan de fles opendoen. ➔ Ik <strong>doe</strong> de fles <strong>open</strong>.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🗺️ Asking for directions and checking a route</h3>
              <p className="text-sm text-slate-300 mb-3">Useful expressions to ask for and verify directions:</p>
              
              <table className="w-full text-sm text-left text-slate-300 border-collapse">
                <tbody className="divide-y divide-slate-700/50">
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Pardon, mag ik u iets vragen?</td>
                    <td className="py-2">Excuse me, can I ask you something? (iets = something)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kunt u mij helpen?</td>
                    <td className="py-2">Can you help me?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Weet u waar ... is? / Ik zoek ...</td>
                    <td className="py-2">Do you know where ... is? / I am looking for ...</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Zijn er hier ook ergens toiletten?</td>
                    <td className="py-2">Are there any toilets around here too? (ergens = somewhere)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kan ik dat lopen? / Is dat ver?</td>
                    <td className="py-2">Can I walk that? / Is that far?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Welke bus of tram moet ik nemen?</td>
                    <td className="py-2">Which bus or tram should I take?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Kunt u dat nog een keer zeggen?</td>
                    <td className="py-2">Can you repeat that? (nog een keer = one more time/again)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Sorry, ik begrijp het niet.</td>
                    <td className="py-2">Sorry, I don't understand.</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Bedoelt u de eerste straat links?</td>
                    <td className="py-2">Do you mean the first street on the left? (Checking)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Dus eerst rechtdoor en dan rechts?</td>
                    <td className="py-2">So first straight ahead and then to the right?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Ja, dat klopt. / Klopt dat?</td>
                    <td className="py-2">Yes, that is correct. / Is that correct?</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-amber-300">Dank u wel. / Bedankt voor uw hulp.</td>
                    <td className="py-2">Thank you. / Thank you for your help. (Closing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Lesson 12 (Q&A)</h3>
              <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                <li><strong>Waar is Kirsten?</strong> ➔ Kirsten is op het station.</li>
                <li><strong>Wat vraagt Kirsten aan de buschauffeur?</strong> ➔ Zij vraagt of zij kan lopen.</li>
                <li><strong>Kan zij naar de evenementenhal lopen of moet zij met de tram gaan?</strong> ➔ (Zij moet met de tram gaan/het is te ver).</li>
                <li><strong>Waar is de wandelbeurs?</strong> ➔ De wandelbeurs is in hal drie.</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Zich Vergissen (Reflexive Verbs)",
        isExtra: false,
        questions: [
          { id: "12_onclass_1_1", type: "fill_in", question: "Ik vergis ________. (I am mistaken)", correctAnswer: "me" },
          { id: "12_onclass_1_2", type: "fill_in", question: "Hij vergist ________. (He is mistaken)", correctAnswer: "zich" },
          { id: "12_onclass_1_3", type: "fill_in", question: "Wij vergissen ________. (We are mistaken)", correctAnswer: "ons" },
          { id: "12_onclass_1_4", type: "fill_in", question: "Ik bereid ________ voor. (I get prepared)", correctAnswer: "me" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Plaats of Beweging? (Location or Movement?)",
        isExtra: false,
        questions: [
          { id: "12_onclass_2_1", type: "multiple_choice", question: "Is 'tegenover de ingang' een plaats of een beweging?", options: ["Plaats (Location)", "Beweging (Movement)"], correctAnswer: "Plaats (Location)" },
          { id: "12_onclass_2_2", type: "multiple_choice", question: "Is 'de bordjes volgen' een plaats of een beweging?", options: ["Plaats (Location)", "Beweging (Movement)"], correctAnswer: "Beweging (Movement)" },
          { id: "12_onclass_2_3", type: "multiple_choice", question: "Is 'aan het eind van de gang' een plaats of een beweging?", options: ["Plaats (Location)", "Beweging (Movement)"], correctAnswer: "Plaats (Location)" },
          { id: "12_onclass_2_4", type: "multiple_choice", question: "Is 'de hoek om gaan' een plaats of een beweging?", options: ["Plaats (Location)", "Beweging (Movement)"], correctAnswer: "Beweging (Movement)" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Separable Verbs (Ayrılabilen Fiiller / Separable Verbs - Opdracht 4)",
        isExtra: false,
        questions: [
          { id: "12_onclass_3_1", type: "fill_in", question: "Kirsten ________ de straat ________. (oversteken - to cross)", correctAnswer: "steekt, over" },
          { id: "12_onclass_3_2", type: "fill_in", question: "Ik ________ een plattegrond ________. (meenemen - to take along)", correctAnswer: "neem, mee" },
          { id: "12_onclass_3_3", type: "fill_in", question: "Hoe laat ________ we ________? (afspreken - to meet up)", correctAnswer: "spreken, af" },
          { id: "12_onclass_3_4", type: "fill_in", question: "Gisteren ________ ik Peter in de supermarkt ________. (tegenkomen - to bump into / past tense)", correctAnswer: "kwam, tegen" },
          { id: "12_onclass_3_5", type: "fill_in", question: "Waar ben je ________? (instappen - perfectum)", correctAnswer: "ingestapt" },
          { id: "12_onclass_3_6", type: "fill_in", question: "Ik heb de koffie al ________. (afrekenen - perfectum)", correctAnswer: "afgerekend" },
          { id: "12_onclass_3_7", type: "multiple_choice", question: "Kies de juiste zin met 'opendoen':", options: ["Ik opendoe de fles.", "Ik doe de fles open.", "Ik doe open de fles."], correctAnswer: "Ik doe de fles open." }
        ]
      },
      {
        instruction: "On-Class Oefening 4: De weg vragen en controleren (Asking and checking directions)",
        isExtra: true,
        questions: [
          { id: "12_onclass_4_1", type: "fill_in", question: "Pardon, ________ ik u iets vragen? (May I ask you something?)", correctAnswer: "mag" },
          { id: "12_onclass_4_2", type: "fill_in", question: "Zijn er hier ook ________ toiletten? (somewhere)", correctAnswer: "ergens" },
          { id: "12_onclass_4_3", type: "multiple_choice", question: "Je verstaat het niet goed. Wat zeg je? (You didn't hear it well. What do you say?)", options: ["Kunt u dat nog een keer zeggen?", "Is dat ver?", "Bedankt voor uw hulp."], correctAnswer: "Kunt u dat nog een keer zeggen?" },
          { id: "12_onclass_4_4", type: "fill_in", question: "________ u de eerste straat links? (Do you mean...)", correctAnswer: "Bedoelt" },
          { id: "12_onclass_4_5", type: "multiple_choice", question: "Je checkt de route: 'Dus eerst rechtdoor en dan rechts?' De persoon antwoordt: 'Ja, dat ________.'", options: ["loopt", "klopt", "is"], correctAnswer: "klopt" },
          { id: "12_onclass_4_6", type: "fill_in", question: "Bedankt ________ uw hulp. (Thank you for your help)", correctAnswer: "voor" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Dialogue Q&A",
        isExtra: true,
        questions: [
          { id: "12_onclass_5_1", type: "multiple_choice", question: "Waar is Kirsten aan het begin van de dialoog?", options: ["In hal drie", "Op het station", "In de trein"], correctAnswer: "Op het station" },
          { id: "12_onclass_5_2", type: "multiple_choice", question: "Wat vraagt Kirsten aan de buschauffeur?", options: ["Hoe laat het is.", "Waar de toiletten zijn.", "Of zij kan lopen naar de evenementenhal."], correctAnswer: "Of zij kan lopen naar de evenementenhal." },
          { id: "12_onclass_5_3", type: "fill_in", question: "Waar is de wandelbeurs? -> De wandelbeurs is in ________ drie.", correctAnswer: "hal" }
        ]
      }
    ]
  }
];