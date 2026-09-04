// src/data/chapters/chapter17.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter17Vocab = [
  { id: "17_1", chapter: 17, nl: "het studentenhuis", en: "student house", example: "Tina woont in een studentenhuis." },
  { id: "17_2", chapter: 17, nl: "de filosofie", en: "philosophy", example: "Tina studeert filosofie." },
  { id: "17_3", chapter: 17, nl: "de informatietechnologie", en: "information technology", example: "Sam studeert informatietechnologie." },
  { id: "17_4", chapter: 17, nl: "de technologie", en: "technology", example: "Moderne technologie." },
  { id: "17_5", chapter: 17, nl: "de wekker", en: "alarm clock", example: "De wekker gaat om 7.15 uur." },
  { id: "17_6", chapter: 17, nl: "de schat", en: "darling", example: "Goedemorgen schat." },
  { id: "17_7", chapter: 17, nl: "heerlijk", en: "wonderful / delicious", example: "Ik heb heerlijk gedroomd." },
  { id: "17_8", chapter: 17, nl: "gedroomd (dromen)", en: "dreamt", example: "Ik heb over een eiland gedroomd." },
  { id: "17_9", chapter: 17, nl: "tropisch", en: "tropical", example: "Een tropisch eiland." },
  { id: "17_10", chapter: 17, nl: "het eiland", en: "island", example: "Vakantie op een eiland." },
  { id: "17_11", chapter: 17, nl: "vogels (de vogel)", en: "birds (bird)", example: "Prachtige vogels op het eiland." },
  { id: "17_12", chapter: 17, nl: "helemaal", en: "at all / completely", example: "Ik kon helemaal niet slapen." },
  { id: "17_13", chapter: 17, nl: "wakker", en: "awake", example: "Ben je al wakker?" },
  { id: "17_14", chapter: 17, nl: "ben uitgerust (uitgerust zijn)", en: "feel well-rested", example: "Ben je wel uitgerust?" },
  { id: "17_15", chapter: 17, nl: "sta op (opstaan)", en: "get up", example: "Ik sta nu op." },
  { id: "17_16", chapter: 17, nl: "douchen", en: "shower", example: "Ik ga douchen." },
  { id: "17_17", chapter: 17, nl: "het ontbijtje (het ontbijt)", en: "breakfast", example: "Een lekker ontbijtje maken." },
  { id: "17_18", chapter: 17, nl: "tijdens", en: "during", example: "Tijdens het ontbijt praten we." },
  { id: "17_19", chapter: 17, nl: "gewoon", en: "ordinary / just", example: "Gewoon, niets bijzonders." },
  { id: "17_20", chapter: 17, nl: "het programma", en: "program", example: "Ik ga verder met dat nieuwe programma." },
  { id: "17_21", chapter: 17, nl: "het college", en: "lecture / class", example: "Ik heb om 9.00 uur college." },
  { id: "17_22", chapter: 17, nl: "de bibliotheek", en: "library", example: "Daarna ga ik naar de bibliotheek." },
  { id: "17_23", chapter: 17, nl: "het tentamen", en: "examination", example: "Volgende week is dat tentamen." },
  { id: "17_24", chapter: 17, nl: "de filosofiegeschiedenis", en: "history of philosophy", example: "Tentamen filosofiegeschiedenis." },
  { id: "17_25", chapter: 17, nl: "de geschiedenis", en: "history", example: "Geschiedenis is interessant." },
  { id: "17_26", chapter: 17, nl: "de bank", en: "bank / couch", example: "De bank bellen over de hypotheek." },
  { id: "17_27", chapter: 17, nl: "de hypotheek", en: "mortgage", example: "Vragen over de hypotheek." },
  { id: "17_28", chapter: 17, nl: "het avondeten", en: "dinner / evening meal", example: "Wat eten we voor het avondeten?" },
  { id: "17_29", chapter: 17, nl: "de pasta", en: "pasta", example: "Pasta met gehaktballetjes." },
  { id: "17_30", chapter: 17, nl: "gehaktballetjes (het gehaktballetje)", en: "meatballs", example: "Gehaktballetjes in tomatensaus." },
  { id: "17_31", chapter: 17, nl: "de tomatensaus", en: "tomato sauce", example: "Huisgemaakte tomatensaus." },
  { id: "17_32", chapter: 17, nl: "de saus", en: "sauce", example: "De saus is pittig." },
  { id: "17_33", chapter: 17, nl: "wassen", en: "wash", example: "Eerst even mijn handen wassen." },
  { id: "17_34", chapter: 17, nl: "de storing", en: "fault / breakdown", example: "Er was een storing in het systeem." },
  { id: "17_35", chapter: 17, nl: "het systeem", en: "system", example: "Het computersysteem werkt niet." },
  { id: "17_36", chapter: 17, nl: "ben kwijt (kwijt zijn)", en: "lost", example: "Ik ben veel gegevens kwijt." },
  { id: "17_37", chapter: 17, nl: "gegevens (het gegeven)", en: "data / details", example: "Al mijn gegevens zijn weg." },
  { id: "17_38", chapter: 17, nl: "vreemd", en: "strange", example: "Dat is heel vreemd." },
  { id: "17_39", chapter: 17, nl: "gekookt (koken)", en: "cooked", example: "Heb je gekookt?" },
  { id: "17_40", chapter: 17, nl: "pittig", en: "spicy / strong", example: "Het eten is lekker pittig." },
  { id: "17_41", chapter: 17, nl: "ontzettend", en: "really / very", example: "De docent kan ontzettend goed vertellen." },
  { id: "17_42", chapter: 17, nl: "de zaal", en: "room / hall", example: "In de donkere zaal van de bibliotheek." },
  { id: "17_43", chapter: 17, nl: "geluncht (lunchen)", en: "had lunch", example: "We hebben samen geluncht." },
  { id: "17_44", chapter: 17, nl: "komt terug (terugkomen)", en: "coming back", example: "Vladimir komt terug naar Nederland." },
  { id: "17_45", chapter: 17, nl: "mooi", en: "great / beautiful", example: "Mooi! Morgen om 19.00 uur afgesproken." },
  { id: "17_46", chapter: 17, nl: "lust (lusten)", en: "fancy / like to eat/drink", example: "Ik lust wel een kopje thee." },
  { id: "17_47", chapter: 17, nl: "de thee", en: "tea", example: "Een kopje thee drinken." },
  { id: "17_48", chapter: 17, nl: "rustig", en: "quiet", example: "Het is rustig in de bibliotheek." },
  { id: "17_49", chapter: 17, nl: "behalve", en: "besides / except", example: "Behalve de vaste publiek." },
  { id: "17_50", chapter: 17, nl: "vaste (vast)", en: "regular", example: "Het vaste publiek." },
  { id: "17_51", chapter: 17, nl: "het publiek", en: "audience", example: "Er was weinig publiek." },
  { id: "17_52", chapter: 17, nl: "niemand", en: "nobody", example: "Er was bijna niemand." },
  { id: "17_53", chapter: 17, nl: "het deel", en: "part / episode", example: "Ik heb deel 1 en 2 gezien." },
  { id: "17_54", chapter: 17, nl: "de serie", en: "series", example: "Een spannende serie." },
  { id: "17_55", chapter: 17, nl: "uitgenodigd (uitnodigen)", en: "invited", example: "Ik heb Max uitgenodigd." },
  { id: "17_56", chapter: 17, nl: "de lieverd", en: "sweetheart", example: "Welterusten lieverd." }
];

export const chapter17Dialogues = {
  "17.1": [
    { speaker: "Sam", text: "Goedemorgen schat, heb je lekker geslapen?", translation: { tr: "Günaydın sevgilim, iyi uyudun mu?", en: "Good morning darling, did you sleep well?" } },
    { speaker: "Tina", text: "Ja heel goed, en ik heb zo heerlijk gedroomd. We waren op vakantie op een tropisch eiland met prachtige vogels. Het was geweldig. En jij?", translation: { tr: "Evet çok iyi, ve rüyamda harika şeyler gördüm. Muhteşem kuşların olduğu tropikal bir adada tatildeydik. Harikaydı. Ya sen?", en: "Yes very well, and I had such a wonderful dream. We were on holiday on a tropical island with beautiful birds. It was amazing. And you?" } },
    { speaker: "Sam", text: "Ik kon helemaal niet slapen. Ik heb de halve nacht wakker gelegen.", translation: { tr: "Hiç uyuyamadım. Gecenin yarısı uyanık yattım.", en: "I couldn't sleep at all. I lay awake for half the night." } },
    { speaker: "Tina", text: "Wat vervelend. Ben je wel uitgerust?", translation: { tr: "Ne kadar sinir bozucu. Dinlenebildin mi?", en: "How annoying. Are you well-rested though?" } },
    { speaker: "Sam", text: "Ja hoor, ik ben nog jong. Ik sta op. Ik ga douchen en een lekker ontbijtje voor je maken.", translation: { tr: "Evet ya, ben hala gencim. Kalkıyorum. Duş alıp sana lezzetli bir kahvaltı hazırlayacağım.", en: "Yes sure, I'm still young. I'm getting up. I'm going to shower and make a nice breakfast for you." } },
    { speaker: "Tina", text: "Wat ga je vandaag doen? Heb je een leuke dag?", translation: { tr: "Bugün ne yapacaksın? Güzel bir gün planın var mı?", en: "What are you going to do today? Do you have a nice day planned?" } },
    { speaker: "Sam", text: "Gewoon, niets bijzonders, hoop ik. Ik ga verder met dat nieuwe programma. Wat ga jij doen?", translation: { tr: "Her zamanki gibi, özel bir şey yok umarım. O yeni programa devam edeceğim. Sen ne yapacaksın?", en: "Just the usual, nothing special, I hope. I will continue with that new program. What are you going to do?" } },
    { speaker: "Tina", text: "Ik heb om 9.00 uur college en daarna ga ik naar de bibliotheek. Volgende week is dat tentamen over filosofiegeschiedenis.", translation: { tr: "Saat 9.00'da dersim var ve sonrasında kütüphaneye gideceğim. Haftaya felsefe tarihi üzerine şu sınav var.", en: "I have a lecture at 9:00 AM and afterwards I'm going to the library. Next week is that exam on the history of philosophy." } },
    { speaker: "Sam", text: "Wil jij de bank nog even bellen over de hypotheek?", translation: { tr: "İpotek hakkında bankayı tekrar aramak ister misin?", en: "Do you want to call the bank about the mortgage?" } },
    { speaker: "Tina", text: "Doe ik. Ik zal meteen de afspraak veranderen.", translation: { tr: "Yaparım. Randevuyu hemen değiştireceğim.", en: "I will. I'll change the appointment right away." } },
    { speaker: "Sam", text: "Wat eten we?", translation: { tr: "Ne yiyoruz?", en: "What are we eating?" } },
    { speaker: "Tina", text: "Pasta met gehaktballetjes in tomatensaus en een salade. Het is klaar. Ga maar gauw zitten.", translation: { tr: "Domates soslu köfteli makarna ve salata. Hazır. Hadi çabuk otur.", en: "Pasta with meatballs in tomato sauce and a salad. It's ready. Go sit down quickly." } },
    { speaker: "Sam", text: "Nog even mijn handen wassen.", translation: { tr: "Önce ellerimi yıkayayım.", en: "Just washing my hands first." } },
    { speaker: "Tina", text: "Hoe was je dag?", translation: { tr: "Günün nasıldı?", en: "How was your day?" } },
    { speaker: "Sam", text: "Niet zo best. Er was een storing in het systeem en ik ben veel gegevens kwijt. Heel vreemd. Ik kon niet verder werken aan mijn programma. Ik ben de hele dag bezig geweest met die storing. Je hebt weer heerlijk gekookt, lekker pittig. Was jouw dag beter?", translation: { tr: "Çok iyi değildi. Sistemde bir arıza vardı ve çok fazla veri kaybettim. Çok tuhaf. Programım üzerinde çalışmaya devam edemedim. Bütün gün o arızayla uğraştım. Yine harika yemek yapmışsın, güzel ve baharatlı. Senin günün daha mı iyiydi?", en: "Not so good. There was a malfunction in the system and I lost a lot of data. Very strange. I couldn't continue working on my program. I spent all day dealing with that malfunction. You cooked deliciously again, nice and spicy. Was your day better?" } },
    { speaker: "Tina", text: "Ja, ik denk het wel. Het college was heel interessant want de docent kan ontzettend goed vertellen. In de bibliotheek was het druk. Er was alleen nog plaats op de zesde verdieping, je weet wel, in die donkere zaal. Het was daar gelukkig minder druk. Ik heb veel gedaan. Marina en Tatiana waren er ook en we hebben samen geluncht. Weet je wat ze zeiden? Vladimir komt terug naar Nederland! O, en ik heb gebeld met de bank over de hypotheek. We hebben morgenavond om 19.00 uur een afspraak.", translation: { tr: "Evet, sanırım öyle. Ders çok ilginçti çünkü hoca inanılmaz iyi anlatıyor. Kütüphane kalabalıktı. Sadece altıncı katta yer kalmıştı, bilirsin işte, o karanlık salonda. Orası neyse ki daha az kalabalıktı. Çok iş hallettim. Marina ve Tatiana da oradaydı ve birlikte öğle yemeği yedik. Ne dediler biliyor musun? Vladimir Hollanda'ya geri dönüyor! Oh, ve ipotek için bankayı aradım. Yarın akşam saat 19.00'da randevumuz var.", en: "Yes, I think so. The lecture was very interesting because the teacher explains incredibly well. The library was busy. There was only space on the sixth floor, you know, in that dark hall. Fortunately, it was less busy there. I got a lot done. Marina and Tatiana were there too and we had lunch together. Do you know what they said? Vladimir is coming back to the Netherlands! Oh, and I called the bank about the mortgage. We have an appointment tomorrow evening at 7:00 PM." } },
    { speaker: "Sam", text: "Mooi.", translation: { tr: "Güzel.", en: "Great." } },
    { speaker: "Sam", text: "Zullen we nog iets drinken?", translation: { tr: "Bir şeyler daha içelim mi?", en: "Shall we have something to drink?" } },
    { speaker: "Tina", text: "Ik lust wel een kopje thee.", translation: { tr: "Bir fincan çay alırım.", en: "I'd like a cup of tea." } },
    { speaker: "Sam", text: "Hoe was het in de bioscoop?", translation: { tr: "Sinema nasıldı?", en: "How was it at the cinema?" } },
    { speaker: "Tina", text: "Rustig. Het regent en dan komen er altijd weinig mensen. Behalve het vaste publiek op maandag was er bijna niemand. Hoe was het hier?", translation: { tr: "Sakin. Yağmur yağıyor ve o zaman her zaman az insan gelir. Pazartesi günkü sabit izleyici dışında neredeyse kimse yoktu. Burada nasıldı?", en: "Quiet. It's raining and then there are always few people. Except for the regular Monday audience, there was almost no one. How was it here?" } },
    { speaker: "Sam", text: "Ik heb deel 1 en 2 van Studentenhuis gekeken. Ga je die serie ook volgen?", translation: { tr: "Studentenhuis'in 1. ve 2. bölümünü izledim. Sen de bu diziyi takip edecek misin?", en: "I watched parts 1 and 2 of Studentenhuis. Are you going to follow that series too?" } },
    { speaker: "Tina", text: "Die serie lijkt me niet zo leuk, dus ik denk het niet.", translation: { tr: "O dizi bana pek eğlenceli görünmüyor, bu yüzden sanmıyorum.", en: "That series doesn't seem that fun to me, so I don't think so." } },
    { speaker: "Sam", text: "Vladimir heeft gebeld. Hij heeft nieuws voor je, maar dat wist je dus al van Marina en Tatiana. Ik heb niets gezegd. Dan kan hij het je zelf vertellen. En ik heb Max vrijdag voor het eten uitgenodigd.", translation: { tr: "Vladimir aradı. Senin için haberleri var ama sen bunu zaten Marina ve Tatiana'dan öğrenmiştin. Ben hiçbir şey söylemedim. Böylece sana kendisi anlatabilir. Ve cuma günü yemeğe Max'i davet ettim.", en: "Vladimir called. He has news for you, but you already knew that from Marina and Tatiana. I didn't say anything. That way he can tell you himself. And I invited Max over for dinner on Friday." } },
    { speaker: "Tina", text: "Leuk! Ik heb je broer al een hele tijd niet meer gesproken.", translation: { tr: "Harika! Abinle uzun zamandır konuşmamıştım.", en: "Nice! I haven't spoken to your brother in a long time." } },
    { speaker: "Sam", text: "Zullen we zo naar bed gaan? Ik ben moe.", translation: { tr: "Birazdan yatalım mı? Yoruldum.", en: "Shall we go to bed soon? I'm tired." } },
    { speaker: "Tina", text: "Ja, ik heb ook zin om te slapen.", translation: { tr: "Evet, benim de uyuyasım var.", en: "Yes, I feel like sleeping too." } },
    { speaker: "Sam", text: "Welterusten schat.", translation: { tr: "İyi geceler sevgilim.", en: "Goodnight darling." } },
    { speaker: "Tina", text: "Welterusten lieverd.", translation: { tr: "İyi geceler canım.", en: "Goodnight sweetheart." } }
  ]
};

export const chapter17Sections = [
  {
    id: "17.1",
    chapter: 17,
    title: "17.1 Tekst: De dag van Tina en Sam",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>📄 Tekst: Een dag uit het leven van Tina en Sam</h3>
            <p>Sinema kasiyeri Tina ve bilgisayar programcısı Sam'in bir gününü saat saat takip ediyoruz:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>07.15 uur:</strong> Uyanma, kahvaltı hazırlama, planlar.</li>
              <li><strong>08.35 uur:</strong> Otobüsle yola çıkış, fakülte, kütüphane ve tentamen (sınav) dönemi.</li>
              <li><strong>13.00 uur:</strong> İş yerinde öğle yemeği ve sistem arızası (storing).</li>
              <li><strong>17.30 uur:</strong> Eve dönüş ve akşam yemeği hazırlığı (pasta met gehaktballetjes).</li>
              <li><strong>18.45 uur:</strong> Tina'nın sinemadaki iş mesaisi.</li>
              <li><strong>23.00 uur:</strong> Eve dönüş, çay molası ve Sam'in iş yerindeki problemi düşünmesi.</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>📄 Text: A day in the life of Tina and Sam</h3>
            <p>We follow a day in the life of cinema cashier Tina and computer programmer Sam, hour by hour:</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>07.15 uur:</strong> Waking up, preparing breakfast, plans.</li>
              <li><strong>08.35 uur:</strong> Leaving by bus, faculty, library and exam (tentamen) period.</li>
              <li><strong>13.00 uur:</strong> Lunch at work and system breakdown (storing).</li>
              <li><strong>17.30 uur:</strong> Return home and dinner preparation (pasta met gehaktballetjes).</li>
              <li><strong>18.45 uur:</strong> Tina's work shift at the cinema.</li>
              <li><strong>23.00 uur:</strong> Return home, tea break and Sam thinking about the problem at work.</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de tekst (Okuduğunu Anlama / Reading Comprehension).",
        isExtra: false,
        questions: [
          { id: "17.1_opd1_1", type: "multiple_choice", question: "Wat studeert Tina?", options: ["Informatietechnologie", "Filosofie", "Geschiedenis"], correctAnswer: "Filosofie" },
          { id: "17.1_opd1_2", type: "multiple_choice", question: "Wat is het beroep van Sam?", options: ["Computerprogrammateur / IT", "Caissère in de bioscoop", "Makelaar"], correctAnswer: "Computerprogrammateur / IT" },
          { id: "17.1_opd1_3", type: "multiple_choice", question: "Waarom heeft Sam slecht geslapen?", options: ["Omdat hij ziek is", "Omdat hij nadenkt over een probleem op zijn werk", "Omdat het te warm is"], correctAnswer: "Omdat hij nadenkt over een probleem op zijn werk" }
        ]
      }
    ]
  },
  {
    id: "17.2",
    chapter: 17,
    title: "17.2 Woordenlijst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
            <p>Günlük rutinler, üniversite terimleri (college, tentamen, bibliotheek) ve teknoloji/iş dünyası kelimeleri bu ünitenin odak noktasıdır. Flashcards bölümünden pratik yapabilirsiniz.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Vocabulary Analysis</h3>
            <p>Daily routines, university terms (college, tentamen, bibliotheek), and technology/business words are the focus of this unit. You can practice in the Flashcards section.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling? (What is the correct translation?)",
        isExtra: true,
        questions: generateSmartQuestions(17, "Woordenlijst", 10, chapter17Vocab)
      }
    ]
  },
  {
    id: "17.4",
    chapter: 17,
    title: "17.4 Er / Daar (Yer ve Konum Zamirleri / Pronouns of Place)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>📍 Er vs Daar (Var / Orada)</h3>
            <p className="text-sm text-slate-300">Hollandacada <strong>"Er is / Er zijn"</strong> kalıbı İngilizcedeki "There is / There are" (Var) anlamını verir.</p>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
              <li><strong>Er is</strong> een ongeluk gebeurd. (Bir kaza gerçekleşti/oldu).</li>
              <li><strong>Er zijn</strong> veel buitenlanders. (Çok sayıda yabancı var).</li>
            </ul>

            <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-1">ER mi, DAAR mı?</h4>
              <p className="text-sm text-cyan-100"><strong>Er:</strong> Belirtisiz bir durumu veya genel varoluşu söylerken kullanılır (There is...).<br/>
              <strong>Daar:</strong> Spesifik bir yeri (uzaktaki bir noktayı) parmakla gösterir gibi işaret ederken kullanılır (Over there / Orada).</p>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>📍 Er vs Daar (There is / Over there)</h3>
            <p className="text-sm text-slate-300">In Dutch, the pattern <strong>"Er is / Er zijn"</strong> gives the meaning of "There is / There are".</p>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
              <li><strong>Er is</strong> een ongeluk gebeurd. (An accident has happened / There was an accident).</li>
              <li><strong>Er zijn</strong> veel buitenlanders. (There are many foreigners).</li>
            </ul>

            <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-1">ER or DAAR?</h4>
              <p className="text-sm text-cyan-100"><strong>Er:</strong> Used when stating an indefinite situation or general existence (There is...).<br/>
              <strong>Daar:</strong> Used when pointing to a specific place (a distant point) as if pointing with a finger (Over there).</p>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Geef antwoord op de volgende vragen. Gebruik er of daar. (Answer the following questions. Use er or daar.)",
        isExtra: false,
        questions: [
          { id: "17.4_opd6_1", type: "multiple_choice", question: "1. Is er een sportschool? -> Ja, ________ is een sportschool in de straat.", options: ["er", "daar"], correctAnswer: "er" },
          { id: "17.4_opd6_2", type: "multiple_choice", question: "2. Zijn er bananen? -> Nee, ________ (op de markt) zijn geen bananen.", options: ["er", "daar"], correctAnswer: "daar" },
          { id: "17.4_opd6_3", type: "multiple_choice", question: "3. Is er nog plaats in de bibliotheek? -> Ja, ________ is nog plaats.", options: ["er", "daar"], correctAnswer: "er" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Er vs Daar",
        isExtra: true,
        questions: [
          { id: "17.4_smart_1", type: "multiple_choice", question: "Kies de correcte vorm: 'Look at that building! ________ is an old church.'", options: ["Er", "Daar"], correctAnswer: "Daar" },
          { id: "17.4_smart_2", type: "multiple_choice", question: "Kies de correcte vorm: '______ is a problem with the system.'", options: ["Er", "Daar"], correctAnswer: "Er" }
        ]
      }
    ]
  },
  {
    id: "17.5",
    chapter: 17,
    title: "17.5 Zijn – aan het + infinitief (Şimdiki Zaman - Sürüp Giden Eylem / Present Continuous)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>⏳ Şimdiki Zaman Vurgusu: "Aan het + Infinitief"</h3>
            <p className="text-sm text-slate-300">Hollandacada normal şimdiki zaman (Presens) hem geniş zamanı hem de o an yapılan eylemi karşılar (Örn: *Ik werk* = Çalışıyorum veya Çalışırım).</p>
            <p className="text-sm text-slate-300 mt-2">Ancak karşıdakine <strong>"Şu anda tam bu saniyede bu eylemi yapmaktayım"</strong> vurgusunu (İngilizcedeki Present Continuous: *I am working*) vermek istiyorsanız <strong>"zijn + aan het + mastar fiil"</strong> kalıbını kullanırsınız.</p>

            <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
              <h4 className="text-emerald-300 font-bold mb-2">Formül ve Örnekler:</h4>
              <p className="text-sm font-mono text-white bg-black/20 p-2 rounded mb-2">[Özne] + [Zijn çekimi] + [aan het] + [Mastar Fiil]</p>
              <ul className="text-sm text-emerald-100 space-y-1 list-disc pl-5">
                <li>Sam <strong>is</strong> met een collega in Engeland <strong>aan het telefoneren</strong>. (Sam şu an telefonla konuşuyor).</li>
                <li>Tina <strong>is</strong> boodschappen <strong>aan het doen</strong>. (Tina şu an alışveriş yapıyor).</li>
                <li>Wij <strong>zijn</strong> Nederlands <strong>aan het leren</strong>. (Biz şu an Hollandaca öğreniyoruz).</li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>⏳ Present Continuous: "Aan het + Infinitive"</h3>
            <p className="text-sm text-slate-300">In Dutch, the normal present tense (Presens) covers both the simple present and the present continuous (Ex: *Ik werk* = I work or I am working).</p>
            <p className="text-sm text-slate-300 mt-2">However, if you want to emphasize to the listener <strong>"I am doing this action right now at this exact second"</strong> (Present Continuous in English: *I am working*), you use the <strong>"zijn + aan het + infinitive verb"</strong> pattern.</p>

            <div className="bg-emerald-900/40 p-4 rounded-xl mt-4 border border-emerald-500/50">
              <h4 className="text-emerald-300 font-bold mb-2">Formula and Examples:</h4>
              <p className="text-sm font-mono text-white bg-black/20 p-2 rounded mb-2">[Subject] + [Conjugation of zijn] + [aan het] + [Infinitive Verb]</p>
              <ul className="text-sm text-emerald-100 space-y-1 list-disc pl-5">
                <li>Sam <strong>is</strong> met een collega in Engeland <strong>aan het telefoneren</strong>. (Sam is currently talking on the phone with a colleague).</li>
                <li>Tina <strong>is</strong> boodschappen <strong>aan het doen</strong>. (Tina is currently grocery shopping).</li>
                <li>Wij <strong>zijn</strong> Nederlands <strong>aan het leren</strong>. (We are currently learning Dutch).</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Gebruik voor deze zin de constructie zijn – aan het + infinitief. (Use the construction zijn - aan het + infinitive for this sentence.)",
        isExtra: false,
        questions: [
          { id: "17.5_opd8_1", type: "fill_in", question: "1. Hans traint. -> Hans ________ aan het ________.", correctAnswer: "is, trainen" },
          { id: "17.5_opd8_2", type: "fill_in", question: "2. We kijken naar een film over Amsterdam. -> We ________ aan het ________.", correctAnswer: "zijn, kijken" },
          { id: "17.5_opd8_3", type: "fill_in", question: "3. Sam belt zijn collega in Londen. -> Sam ________ aan het ________.", correctAnswer: "is, bellen" },
          { id: "17.5_opd8_4", type: "fill_in", question: "4. Ik leer Nederlands. -> Ik ________ aan het ________.", correctAnswer: "ben, leren" },
          { id: "17.5_opd8_5", type: "fill_in", question: "5. Wat doe je nu? -> Wat ________ je aan het ________?", correctAnswer: "ben, doen" },
          { id: "17.5_opd8_6", type: "fill_in", question: "6. Ze studeert in de bibliotheek. -> Ze ________ aan het ________.", correctAnswer: "is, studeren" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Aan het + Infinitief",
        isExtra: true,
        questions: [
          { id: "17.5_smart_1", type: "multiple_choice", question: "Welke zin drukt uit dat een handeling *nu op dit exact moment* aan de gang is?", options: ["Ik kook pasta.", "Ik ben pasta aan het koken.", "Ik ga pasta koken."], correctAnswer: "Ik ben pasta aan het koken." },
          { id: "17.5_smart_2", type: "multiple_choice", question: "Kies de correcte vorm voor 'wij':", options: ["Wij zijn koffie aan het drinken.", "Wij is koffie aan het drinken.", "Wij ben koffie aan het drinken."], correctAnswer: "Wij zijn koffie aan het drinken." }
        ]
      }
    ]
  },
  {
    id: "17.6",
    chapter: 17,
    title: "17.6 Uitspraak & Cultuur (Wonen)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: r – l</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 12 & 13:</strong> Hollandacada <strong>r</strong> ile <strong>l</strong> seslerinin ayrımı çok önemlidir (Örn: rug vs lug, roepen vs lopen). Özellikle kelime başında veya sonunda bu iki akıcı ünsüzün karıştırılmaması gerekir.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa'}}>🇳🇱 Cultuur: Samen uit of samen thuis? (Misafirlik Alışkanlıkları)</h3>
              <p className="text-sm text-slate-300">Hollanda'da arkadaşlarla buluşma yeri genellikle ev değil, <strong>café veya restaurant</strong>tur. Evde misafirlik ağırlamak daha samimi/özel bir çember (aile veya çok yakın arkadaşlar) için geçerlidir. Birçok Hollandalı evlerinin "fazla özel" (privé) olduğuna inanır.</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: r – l (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 12 & 13:</strong> In Dutch, the distinction between the <strong>r</strong> and <strong>l</strong> sounds is very important (e.g. rug vs lug, roepen vs lopen). Especially at the beginning or end of a word, these two liquid consonants should not be mixed up.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa'}}>🇳🇱 Cultuur: Samen uit of samen thuis? (Hosting habits)</h3>
              <p className="text-sm text-slate-300">In the Netherlands, the meeting place with friends is usually not at home, but a <strong>café or restaurant</strong>. Hosting guests at home applies to a more intimate/private circle (family or very close friends). Many Dutch people believe their homes are "too private" (privé).</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Uitspraak en Cultuur (Pronunciation and Culture)",
        isExtra: true,
        questions: [
          { id: "17.6_smart_1", type: "multiple_choice", question: "Waar spreken Nederlanders af met vrienden (meestal)?", options: ["Alleen thuis achter closed doors", "In een café of restaurant", "Op het station"], correctAnswer: "In een café of restaurant" },
          { id: "17.6_smart_2", type: "multiple_choice", question: "Welk woord heeft een duidelijke 'r' klank vooraan?", options: ["lopen", "roepen", "lezen"], correctAnswer: "roepen" }
        ]
      }
    ]
  },
  {
    id: "On-Class-17",
    chapter: 17,
    title: "Summary",
    theory: (lang) => (
      <div className="space-y-6">
        {lang === 'tr' ? (
          <>
            {/* 1. Conjunctions (Bağlaçlar) */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-indigo-500/30">
              <h3 className="text-lg font-bold text-indigo-400 mb-3 border-b border-indigo-500/20 pb-2">
                <i className="fa-solid fa-link mr-2"></i> 1. Conjunctions (Bağlaçlar: en, of, want, dus, maar)
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                İki ana cümleyi birbirine bağlayan temel bağlaçlardır. Bu bağlaçlardan sonra normal cümle dizilimi (Özne + Fiil) devam eder.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li><span className="text-indigo-300 font-bold">maar (ama):</span> Ik wilde naar de bioscoop gaan, <strong className="text-white">maar</strong> ik had geen tijd.</li>
                <li><span className="text-indigo-300 font-bold">en (ve):</span> Ik ben op kantoor <strong className="text-white">en</strong> ik eet pizza.</li>
                <li><span className="text-indigo-300 font-bold">want (çünkü):</span> Ik ga naar huis <strong className="text-white">want</strong> ik ben moe. <span className="text-slate-400 italic">(Sebep bildirir)</span></li>
                <li><span className="text-indigo-300 font-bold">dus (bu yüzden):</span> Ik ben moe <strong className="text-white">dus</strong> ik ga naar huis. <span className="text-slate-400 italic">(Sonuç bildirir)</span></li>
              </ul>
              <div className="bg-indigo-900/30 p-3 rounded-lg mt-3 text-xs text-indigo-200">
                <strong>💡 İpucu:</strong> Sebep-sonuç ilişkisine dikkat edin. "Hasta olduğum için (want) gelemiyorum" ile "Hastayım bu yüzden (dus) gelemiyorum" ifadeleri farklı bağlaçlar gerektirir.
              </div>
            </div>

            {/* 2. Er / Daar */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/30">
              <h3 className="text-lg font-bold text-sky-400 mb-3 border-b border-sky-500/20 pb-2">
                <i className="fa-solid fa-location-dot mr-2"></i> 2. Het gebruik van "Er" (Er Kullanımı)
              </h3>
              <p className="text-sm text-slate-300 mb-3">Sınıf notlarına göre "er" kullanımının iki temel kuralı:</p>
              <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-200">
                <li>
                  <strong className="text-sky-300">Belirtisiz Özne (A/An kuralı):</strong> İngilizcede cümlenin öznesi "a" veya "an" (belirtisiz) ile başlıyorsa, Hollandacada cümleye "Er" ile başlarız.
                  <ul className="list-disc pl-5 mt-1 text-slate-300">
                    <li><span className="text-slate-400 italic">An</span> accident has happened. = <strong className="text-white">Er</strong> is een ongeluk gebeurd.</li>
                    <li><span className="text-slate-400 italic">A</span> storm is coming. = <strong className="text-white">Er</strong> komt een storm.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-sky-300">Konum Bildirme (Location):</strong> İngilizcedeki "there" (orada) anlamında, daha önce bahsedilmiş bir yeri belirtmek için kullanılır.
                  <ul className="list-disc pl-5 mt-1 text-slate-300">
                    <li>Het is <strong className="text-white">er</strong> druk. <span className="text-slate-400 italic">(Orası kalabalık.)</span></li>
                    <li>Ik ben in Rome. → Ik was <strong className="text-white">er</strong> ook. <span className="text-slate-400 italic">(Ben de oradaydım.)</span></li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* 3. Zijn + aan het + infinitief */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-3 border-b border-emerald-500/20 pb-2">
                <i className="fa-solid fa-spinner mr-2"></i> 3. [zijn] [...] [aan het + infinitief] (Şimdiki Zaman Dizilimi)
              </h3>
              <p className="text-sm text-slate-300 mb-3">Bir eylemin <strong>şu anda</strong> yapıldığını belirtir. Sınıf notlarındaki en önemli detay, nesnenin veya yerin <strong>"zijn"</strong> ile <strong>"aan het"</strong> arasına girmesidir:</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>Ik <strong className="text-emerald-300">ben</strong> een pizza <strong className="text-emerald-300">aan het eten</strong>. <span className="text-slate-400 italic">(I am eating a pizza.)</span></li>
                <li>Ik <strong className="text-emerald-300">ben</strong> de cola <strong className="text-emerald-300">aan het drinken</strong>.</li>
                <li>Ik <strong className="text-emerald-300">ben</strong> een reservering in het hotel <strong className="text-emerald-300">aan het maken</strong>.</li>
                <li>Ik <strong className="text-emerald-300">ben</strong> in de bar <strong className="text-emerald-300">aan het dansen</strong>.</li>
              </ul>
            </div>

            {/* 4. Imperfectum Sneak Peek */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-400 mb-3 border-b border-amber-500/20 pb-2">
                <i className="fa-solid fa-clock-rotate-left mr-2"></i> 4. Intro: Imperfectum (Geçmiş Zamana Giriş)
              </h3>
              <p className="text-sm text-slate-300">Düzenli fiillerin (örneğin <em>werken</em>) geçmiş zaman (imperfectum) çekim ekleri şunlardır:</p>
              <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-slate-200 font-mono bg-slate-900/50 p-3 rounded-xl">
                <div>
                  <p>ik werk<strong className="text-amber-400">-te</strong></p>
                  <p>jij werk<strong className="text-amber-400">-te</strong></p>
                  <p>hij werk<strong className="text-amber-400">-te</strong></p>
                </div>
                <div>
                  <p>wij werk<strong className="text-amber-400">-ten</strong></p>
                  <p>jullie werk<strong className="text-amber-400">-ten</strong></p>
                  <p>zij werk<strong className="text-amber-400">-ten</strong></p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 1. Conjunctions */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-indigo-500/30">
              <h3 className="text-lg font-bold text-indigo-400 mb-3 border-b border-indigo-500/20 pb-2">
                <i className="fa-solid fa-link mr-2"></i> 1. Conjunctions (en, of, want, dus, maar)
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                These are coordinating conjunctions connecting two main clauses. Normal word order (Subject + Verb) applies after them.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li><span className="text-indigo-300 font-bold">maar (but):</span> Ik wilde naar de bioscoop gaan, <strong className="text-white">maar</strong> ik had geen tijd.</li>
                <li><span className="text-indigo-300 font-bold">en (and):</span> Ik ben op kantoor <strong className="text-white">en</strong> ik eet pizza.</li>
                <li><span className="text-indigo-300 font-bold">want (because):</span> Ik ga naar huis <strong className="text-white">want</strong> ik ben moe. <span className="text-slate-400 italic">(Provides reason)</span></li>
                <li><span className="text-indigo-300 font-bold">dus (so):</span> Ik ben moe <strong className="text-white">dus</strong> ik ga naar huis. <span className="text-slate-400 italic">(Provides conclusion/result)</span></li>
              </ul>
              <div className="bg-indigo-900/30 p-3 rounded-lg mt-3 text-xs text-indigo-200">
                <strong>💡 Tip:</strong> Pay attention to cause and effect. "I can't come because (want) I am sick" vs "I am sick so (dus) I can't come".
              </div>
            </div>

            {/* 2. Er / Daar */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/30">
              <h3 className="text-lg font-bold text-sky-400 mb-3 border-b border-sky-500/20 pb-2">
                <i className="fa-solid fa-location-dot mr-2"></i> 2. The use of "Er"
              </h3>
              <p className="text-sm text-slate-300 mb-3">According to the class notes, two main rules for "er":</p>
              <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-200">
                <li>
                  <strong className="text-sky-300">Indefinite Subject (A/An rule):</strong> If the subject of a sentence in English starts with "a" or "an", in Dutch we start with "Er".
                  <ul className="list-disc pl-5 mt-1 text-slate-300">
                    <li><span className="text-slate-400 italic">An</span> accident has happened. = <strong className="text-white">Er</strong> is een ongeluk gebeurd.</li>
                    <li><span className="text-slate-400 italic">A</span> storm is coming. = <strong className="text-white">Er</strong> komt een storm.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-sky-300">Replacing Location:</strong> It replaces a location, i.e., like "there" in English.
                  <ul className="list-disc pl-5 mt-1 text-slate-300">
                    <li>Het is <strong className="text-white">er</strong> druk. <span className="text-slate-400 italic">(It is busy there.)</span></li>
                    <li>Ik ben in Rome. → Ik was <strong className="text-white">er</strong> ook. <span className="text-slate-400 italic">(I was there too.)</span></li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* 3. Zijn + aan het + infinitief */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-3 border-b border-emerald-500/20 pb-2">
                <i className="fa-solid fa-spinner mr-2"></i> 3. [zijn] [...] [aan het + infinitief] (Word Order)
              </h3>
              <p className="text-sm text-slate-300 mb-3">Indicates an action is happening <strong>right now</strong>. The crucial detail from class is that the object or location goes <strong>between "zijn" and "aan het"</strong>:</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>Ik <strong className="text-emerald-300">ben</strong> een pizza <strong className="text-emerald-300">aan het eten</strong>. <span className="text-slate-400 italic">(I am eating a pizza.)</span></li>
                <li>Ik <strong className="text-emerald-300">ben</strong> de cola <strong className="text-emerald-300">aan het drinken</strong>.</li>
                <li>Ik <strong className="text-emerald-300">ben</strong> een reservering in het hotel <strong className="text-emerald-300">aan het maken</strong>.</li>
                <li>Ik <strong className="text-emerald-300">ben</strong> in de bar <strong className="text-emerald-300">aan het dansen</strong>.</li>
              </ul>
            </div>

            {/* 4. Imperfectum Sneak Peek */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-400 mb-3 border-b border-amber-500/20 pb-2">
                <i className="fa-solid fa-clock-rotate-left mr-2"></i> 4. Intro: Imperfectum (Past Tense)
              </h3>
              <p className="text-sm text-slate-300">The past tense suffixes for regular verbs (like <em>werken</em>) are as follows:</p>
              <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-slate-200 font-mono bg-slate-900/50 p-3 rounded-xl">
                <div>
                  <p>ik werk<strong className="text-amber-400">-te</strong></p>
                  <p>jij werk<strong className="text-amber-400">-te</strong></p>
                  <p>hij werk<strong className="text-amber-400">-te</strong></p>
                </div>
                <div>
                  <p>wij werk<strong className="text-amber-400">-ten</strong></p>
                  <p>jullie werk<strong className="text-amber-400">-ten</strong></p>
                  <p>zij werk<strong className="text-amber-400">-ten</strong></p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    ),
    exerciseGroups: [
      {
        instruction: "1. Conjunctions: Kies het juiste woord (want, dus, maar, en, of).",
        isExtra: true,
        questions: [
          { id: "oc17_1_1", type: "multiple_choice", question: "Ik ga naar bed, ______ ik ben erg moe.", options: ["maar", "want", "dus"], correctAnswer: "want" },
          { id: "oc17_1_2", type: "multiple_choice", question: "Ik ben ziek, ______ ik ga niet naar kantoor.", options: ["of", "maar", "dus"], correctAnswer: "dus" },
          { id: "oc17_1_3", type: "multiple_choice", question: "Ik wil iets eten, ______ ik heb helaas geen geld.", options: ["maar", "want", "en"], correctAnswer: "maar" },
          { id: "oc17_1_4", type: "multiple_choice", question: "In het weekend ben ik op kantoor ______ ik eet een pizza.", options: ["en", "of", "want"], correctAnswer: "en" }
        ]
      },
      {
        instruction: "2. Er of Daar? (Kies op basis van de a/an regel of specifieke locatie).",
        isExtra: true,
        questions: [
          { id: "oc17_2_1", type: "multiple_choice", question: "A storm is coming. = ______ komt een storm.", options: ["Er", "Daar"], correctAnswer: "Er" },
          { id: "oc17_2_2", type: "multiple_choice", question: "An accident has happened. = ______ is een ongeluk gebeurd.", options: ["Er", "Daar"], correctAnswer: "Er" },
          { id: "oc17_2_3", type: "multiple_choice", question: "Ik woon in Amsterdam. Het is ______ druk.", options: ["er", "daar"], correctAnswer: "er" },
          { id: "oc17_2_4", type: "multiple_choice", question: "Zie je dat grote gebouw? ______ woont mijn baas.", options: ["Er", "Daar"], correctAnswer: "Daar" }
        ]
      },
      {
        instruction: "3. Woordvolgorde (Word order): Zijn ... aan het + infinitief.",
        isExtra: true,
        questions: [
          { id: "oc17_3_1", type: "multiple_choice", question: "Wat is de juiste zin? (I am eating a pizza)", options: ["Ik ben aan het eten een pizza.", "Ik ben een pizza aan het eten.", "Ik een pizza ben aan het eten."], correctAnswer: "Ik ben een pizza aan het eten." },
          { id: "oc17_3_2", type: "multiple_choice", question: "Wat is de juiste zin? (I am dancing in the bar)", options: ["Ik ben in de bar aan het dansen.", "Ik ben aan het dansen in de bar.", "Ik in de bar ben aan het dansen."], correctAnswer: "Ik ben in de bar aan het dansen." },
          { id: "oc17_3_3", type: "multiple_choice", question: "Wat is de juiste zin? (We are making a reservation in the hotel)", options: ["Wij zijn aan het maken een reservering in het hotel.", "Wij zijn een reservering in het hotel aan het maken.", "Wij maken zijn een reservering in het hotel."], correctAnswer: "Wij zijn een reservering in het hotel aan het maken." }
        ]
      }
    ]
  }
];