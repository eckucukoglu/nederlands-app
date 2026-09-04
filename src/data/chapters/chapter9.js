// src/data/chapters/chapter9.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter9Vocab = [
  { id: "9_1", chapter: 9, nl: "meneer", en: "Mr", example: "Dag meneer Smit." },
  { id: "9_2", chapter: 9, nl: "de huisarts", en: "doctor/gp", example: "De huisarts onderzoekt de patiënt." },
  { id: "9_3", chapter: 9, nl: "de dokter", en: "doctor", example: "Ik ga naar de dokter." },
  { id: "9_4", chapter: 9, nl: "wat is er aan de hand?", en: "what's wrong?", example: "Vertel me, wat is er aan de hand?" },
  { id: "9_5", chapter: 9, nl: "zoals", en: "as", example: "Zoals u ziet, ben ik ziek." },
  { id: "9_6", chapter: 9, nl: "zit ik onder de bultjes", en: "I'm covered in lumps / a rash", example: "Ik zit onder de bultjes." },
  { id: "9_7", chapter: 9, nl: "bultjes (de bult)", en: "lumps", example: "De rode bultjes jeuken." },
  { id: "9_8", chapter: 9, nl: "armen (de arm)", en: "arms", example: "Mijn armen doen pijn." },
  { id: "9_9", chapter: 9, nl: "benen (het been)", en: "legs", example: "Ik heb lange benen." },
  { id: "9_10", chapter: 9, nl: "de buik", en: "stomach", example: "Ik heb pijn in mijn buik." },
  { id: "9_11", chapter: 9, nl: "de rug", en: "back", example: "Mijn rug is stijf." },
  { id: "9_12", chapter: 9, nl: "het gezicht", en: "face", example: "Was je gezicht met koud water." },
  { id: "9_13", chapter: 9, nl: "jeuken", en: "itch", example: "Mijn armen jeuken verschrikkelijk." },
  { id: "9_14", chapter: 9, nl: "verschrikkelijk", en: "terrible", example: "De pijn is verschrikkelijk." },
  { id: "9_15", chapter: 9, nl: "van alles", en: "everything", example: "Ik heb van alles geprobeerd." },
  { id: "9_16", chapter: 9, nl: "geprobeerd (proberen)", en: "tried", example: "Heb je deze zalf geprobeerd?" },
  { id: "9_17", chapter: 9, nl: "geholpen (helpen)", en: "helped", example: "Niets heeft geholpen." },
  { id: "9_18", chapter: 9, nl: "begonnen (beginnen)", en: "begun", example: "Wanneer is het begonnen?" },
  { id: "9_19", chapter: 9, nl: "gisteravond", en: "last night", example: "Ik ben gisteravond thuisgebleven." },
  { id: "9_20", chapter: 9, nl: "gedaan (doen)", en: "done", example: "Wat heb je gisteren gedaan?" },
  { id: "9_21", chapter: 9, nl: "overdag", en: "during the day", example: "Overdag heb ik gewerkt." },
  { id: "9_22", chapter: 9, nl: "gewerkt (werken)", en: "worked", example: "Ik heb de hele dag gewerkt." },
  { id: "9_23", chapter: 9, nl: "klanten (de klant)", en: "clients", example: "Ik sprak met veel klanten." },
  { id: "9_24", chapter: 9, nl: "bekeken (bekijken)", en: "looked at", example: "We hebben een huis bekeken." },
  { id: "9_25", chapter: 9, nl: "de voetbalvereniging", en: "football club", example: "Ik ben naar de voetbalvereniging geweest." },
  { id: "9_26", chapter: 9, nl: "geweest (zijn)", en: "been", example: "Ben je daar geweest?" },
  { id: "9_27", chapter: 9, nl: "het wedstrijdje", en: "match", example: "We hebben een wedstrijdje gespeeld." },
  { id: "9_28", chapter: 9, nl: "gespeeld (spelen)", en: "played", example: "Heb je voetbal gespeeld?" },
  { id: "9_29", chapter: 9, nl: "daarna", en: "after that", example: "Daarna gingen we naar huis." },
  { id: "9_30", chapter: 9, nl: "gedronken (drinken)", en: "drunk", example: "We hebben een biertje gedronken." },
  { id: "9_31", chapter: 9, nl: "bijzonders", en: "special", example: "Hebt u iets bijzonders gegeten?" },
  { id: "9_32", chapter: 9, nl: "gegeten (eten)", en: "eaten", example: "Ik heb te veel gegeten." },
  { id: "9_33", chapter: 9, nl: "afgelopen", en: "past / last few", example: "En de afgelopen dagen?" },
  { id: "9_34", chapter: 9, nl: "vergeten", en: "forgotten", example: "Dat ben ik vergeten." },
  { id: "9_35", chapter: 9, nl: "denken", en: "think", example: "Even denken..." },
  { id: "9_36", chapter: 9, nl: "o ja", en: "oh yes", example: "O ja, nu weet ik het weer." },
  { id: "9_37", chapter: 9, nl: "rijp", en: "ripe", example: "De aardbeien zijn rijp." },
  { id: "9_38", chapter: 9, nl: "emmers (de emmer)", en: "buckets", example: "We hebben emmers vol water." },
  { id: "9_39", chapter: 9, nl: "vol", en: "full", example: "Mijn maag zit vol." },
  { id: "9_40", chapter: 9, nl: "vorig", en: "last", example: "Veel meer dan vorig jaar." },
  { id: "9_41", chapter: 9, nl: "klachten", en: "complaints", example: "Hebt u nog andere klachten?" },
  { id: "9_42", chapter: 9, nl: "lijkt op", en: "looks like", example: "Het lijkt op een allergie." },
  { id: "9_43", chapter: 9, nl: "allergische", en: "allergic", example: "Het is een allergische reactie." },
  { id: "9_44", chapter: 9, nl: "de reactie", en: "reaction", example: "Een snelle reactie." },
  { id: "9_45", chapter: 9, nl: "geef mee", en: "give", example: "Ik geef u een zalf mee." },
  { id: "9_46", chapter: 9, nl: "de zalf", en: "ointment", example: "Gebruik deze zalf tweemaal per dag." },
  { id: "9_47", chapter: 9, nl: "tegen", en: "against", example: "Een zalf tegen de jeuk." },
  { id: "9_48", chapter: 9, nl: "de jeuk", en: "itch", example: "De jeuk is erg vervelend." },
  { id: "9_49", chapter: 9, nl: "anders", en: "otherwise", example: "Doe het, anders wordt het erger." },
  { id: "9_50", chapter: 9, nl: "krabt (krabben)", en: "scratch", example: "Je krabt je huid kapot." },
  { id: "9_51", chapter: 9, nl: "de huid", en: "skin", example: "Mijn huid is droog." },
  { id: "9_52", chapter: 9, nl: "kapot", en: "open / broken", example: "Mijn huid is kapot." },
  { id: "9_53", chapter: 9, nl: "sterkte", en: "good luck / stay strong", example: "Sterkte met uw examen!" }
];

export const chapter9Dialogues = {
  "9.1": [
    { speaker: "Verteller", text: "De makelaar, meneer Smit, heeft een afspraak bij de huisarts.", translation: { tr: "Emlakçı Bay Smit'in aile hekiminde randevusu var.", en: "The real estate agent, Mr. Smit, has an appointment at the doctor's." } },
    { speaker: "Meneer Smit", text: "Goedemorgen dokter.", translation: { tr: "Günaydın doktor.", en: "Good morning doctor." } },
    { speaker: "Huisarts", text: "Goedemorgen meneer Smit, wat is er aan de hand?", translation: { tr: "Günaydın Bay Smit, sorun nedir?", en: "Good morning Mr. Smit, what's the matter?" } },
    { speaker: "Meneer Smit", text: "Zoals u ziet, zit ik onder de rode bultjes. Ze zitten op mijn armen, benen, buik en rug, alleen niet op mijn gezicht. Ze jeuken verschrikkelijk. Ik heb van alles geprobeerd, maar niets heeft geholpen.", translation: { tr: "Gördüğünüz gibi, kırmızı lekelerle kaplıyım. Kollarımda, bacaklarımda, karnımda ve sırtımdalar, sadece yüzümde yoklar. Korkunç kaşınıyorlar. Her şeyi denedim ama hiçbir şey işe yaramadı.", en: "As you can see, I am covered in red bumps. They are on my arms, legs, stomach, and back, just not on my face. They itch terribly. I have tried everything, but nothing has helped." } },
    { speaker: "Huisarts", text: "Wanneer is dat begonnen? Sinds wanneer hebt u ze?", translation: { tr: "Bu ne zaman başladı? Ne zamandan beri varlar?", en: "When did that start? Since when have you had them?" } },
    { speaker: "Meneer Smit", text: "Sinds gisteravond.", translation: { tr: "Dün akşamdan beri.", en: "Since last night." } },
    { speaker: "Huisarts", text: "Kunt u vertellen wat u gisteren hebt gedaan?", translation: { tr: "Dün ne yaptığınızı söyleyebilir misiniz?", en: "Can you tell me what you did yesterday?" } },
    { speaker: "Meneer Smit", text: "Overdag heb ik gewerkt, ik heb met klanten een huis bekeken. En gisteravond ben ik naar de voetbalvereniging geweest, ik heb een wedstrijdje gespeeld en daarna hebben we nog een biertje gedronken.", translation: { tr: "Gündüz çalıştım, müşterilerle bir eve baktım. Ve dün akşam futbol kulübüne gittim, bir maç oynadım ve sonrasında bir bira içtik.", en: "During the day I worked, I looked at a house with clients. And last night I went to the football club, played a match, and afterwards we had a beer." } },
    { speaker: "Huisarts", text: "Hebt u iets bijzonders gegeten?", translation: { tr: "Özel bir şey yediniz mi?", en: "Did you eat anything special?" } },
    { speaker: "Meneer Smit", text: "Nee, eigenlijk niet.", translation: { tr: "Hayır, aslında değil.", en: "No, not really." } },
    { speaker: "Huisarts", text: "En de afgelopen dagen?", translation: { tr: "Peki ya geçen günlerde?", en: "And the past few days?" } },
    { speaker: "Meneer Smit", text: "O, dat ben ik vergeten, even denken. O ja, in het weekend hebben we heel veel aardbeien gegeten. De aardbeien in de tuin zijn rijp en we hebben emmers vol met aardbeien. Veel meer dan vorig jaar.", translation: { tr: "Oh, bunu unuttum, bir düşüneyim. Oh evet, hafta sonu çok fazla çilek yedik. Bahçedeki çilekler olgunlaştı ve kova dolusu çileğimiz var. Geçen yıldan çok daha fazla.", en: "Oh, I forgot about that, let me think. Oh yes, we ate a lot of strawberries over the weekend. The strawberries in the garden are ripe and we have buckets full of strawberries. Much more than last year." } },
    { speaker: "Huisarts", text: "Hebt u nog andere klachten?", translation: { tr: "Başka şikayetiniz var mı?", en: "Do you have any other complaints?" } },
    { speaker: "Meneer Smit", text: "Nee, verder niet.", translation: { tr: "Hayır, başka yok.", en: "No, nothing else." } },
    { speaker: "Huisarts", text: "Het lijkt op een allergische reactie. Ik geef u een zalf mee tegen de jeuk, anders krabt u uw huid kapot. Ik wil graag voor volgende week een nieuwe afspraak maken. Sterkte.", translation: { tr: "Alerjik bir reaksiyona benziyor. Kaşıntıya karşı size bir merhem vereceğim, yoksa cildinizi kaşıyarak parçalayacaksınız. Gelecek hafta için yeni bir randevu almak istiyorum. Geçmiş olsun.", en: "It looks like an allergic reaction. I'll give you an ointment for the itch, otherwise you'll scratch your skin open. I would like to make a new appointment for next week. Take care." } },
    { speaker: "Meneer Smit", text: "Bedankt, tot volgende week.", translation: { tr: "Teşekkürler, haftaya görüşürüz.", en: "Thanks, see you next week." } }
  ]
};

export const chapter9Sections = [
  {
    id: "9.1", chapter: 9, title: "9.1 Dialoog",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🗣️ Dialoog: Bij de huisarts (Doktorda)</h3>
            <p>Emlakçı Bay Smit'in aile hekiminde randevusu var. Sayfanın başındaki diyaloğu okuyun veya dinleyin.</p>
          </>
        ) : (
          <>
            <h3>🗣️ Dialogue: Bij de huisarts (At the doctor)</h3>
            <p>The real estate agent, Mr. Smit, has an appointment at the doctor's. Read the dialogue at the top of the page or listen to it.</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [{ instruction: "Extra Oefeningen: Begrip van de dialoog (Dialogue Comprehension)", isExtra: true, questions: generateSmartQuestions(9, "Dialoog Woordenschat", 5, chapter9Vocab) }]
  },
  {
    id: "9.2", chapter: 9, title: "9.2 Woordenlijst & Opdracht 1",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>📖 Woordenlijst (Kelime Listesi)</h3>
            <p>Opdracht 1'e başlamadan önce bu kelimeleri dikkatlice çalışın.</p>
          </>
        ) : (
          <>
            <h3>📖 Woordenlijst (Vocabulary)</h3>
            <p>Study these words carefully before starting Exercise 1.</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de dialoog. Gebruik de gegeven woorden. (Create your own questions for the dialogue. Use the given words.)",
        isExtra: false,
        questions: [
          { id: "9.2_opd1_1", type: "fill_in", question: "1 Waarom – huisarts?", correctAnswer: "Waarom is meneer Smit bij de huisarts?" },
          { id: "9.2_opd1_2", type: "fill_in", question: "2 Waar – bultjes?", correctAnswer: "Waar heeft meneer Smit bultjes?" },
          { id: "9.2_opd1_3", type: "fill_in", question: "3 Hoelang – klachten?", correctAnswer: "Hoelang heeft meneer Smit de klachten?" },
          { id: "9.2_opd1_4", type: "fill_in", question: "4 Wat – gedaan?", correctAnswer: "Wat heeft meneer Smit gisteren gedaan?" },
          { id: "9.2_opd1_5", type: "fill_in", question: "5 Wat – gegeten?", correctAnswer: "Wat heeft meneer Smit gegeten?" },
          { id: "9.2_opd1_6", type: "fill_in", question: "6 Wat – geeft?", correctAnswer: "Wat geeft de huisarts aan meneer Smit?" },
          { id: "9.2_opd1_7", type: "fill_in", question: "7 Waarom – zalf?", correctAnswer: "Waarom geeft de huisarts zalf?" }
        ]
      }
    ]
  },
  {
    id: "9.3", chapter: 9, title: "9.3 Bij de huisarts",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🩺 Zinnen voor bij de huisarts (Doktordaki Cümleler)</h3>
            <p><strong>Huisarts (Doktor):</strong> Wat is er aan de hand? (Sorun nedir?) Wat zijn de klachten? (Şikayetleriniz neler?) Hoelang hebt u die al? (Ne zamandır böyle?) Hebt u koorts? (Ateşiniz var mı?)</p>
            <p><strong>Patiënt (Hasta):</strong> Ik heb last van mijn keel. (Boğazımdan rahatsızım). De bultjes jeuken verschrikkelijk. (Kabartılar korkunç kaşınıyor). Ik voel me niet goed. (Kendimi iyi hissetmiyorum). Ik ben ziek. (Hastayım).</p>
          </>
        ) : (
          <>
            <h3>🩺 Zinnen voor bij de huisarts (Phrases at the doctor)</h3>
            <p><strong>Huisarts (Doctor):</strong> Wat is er aan de hand? (What's the matter?) Wat zijn de klachten? (What are the symptoms?) Hoelang hebt u die al? (How long have you had them?) Hebt u koorts? (Do you have a fever?)</p>
            <p><strong>Patiënt (Patient):</strong> Ik heb last van mijn keel. (My throat is bothering me). De bultjes jeuken verschrikkelijk. (The bumps itch terribly). Ik voel me niet goed. (I don't feel well). Ik ben ziek. (I'm sick).</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Jullie zijn allemaal ziek! Bedenk een probleem en vertel dat aan de dokter. (You are all sick! Think of a problem and tell the doctor.)",
        isExtra: false,
        questions: [
          { id: "9.3_opd2_1", type: "fill_in", question: "Dokter: Wat is er aan de hand? (Cevap/Answer: başım ağrıyor / I have a headache)", correctAnswer: "Ik heb hoofdpijn." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Symptomen en Klachten",
        isExtra: true,
        questions: [
          { id: "9.3_smart_1", type: "multiple_choice", question: "Als de dokter vraagt 'Waar hebt u pijn?', wat is een logisch antwoord?", options: ["Ik heb gisteren gewerkt.", "Mijn rug doet heel veel pijn.", "Ik wil graag een zalf."], correctAnswer: "Mijn rug doet heel veel pijn." },
          { id: "9.3_smart_2", type: "multiple_choice", question: "Hoe zeg je 'My throat hurts' in het Nederlands?", options: ["Mijn arm doet zeer.", "Ik voel me niet goed.", "Mijn keel doet pijn."], correctAnswer: "Mijn keel doet pijn." }
        ]
      }
    ]
  },
  {
    id: "9.4", chapter: 9, title: "9.4 Lichaamsdelen",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🧍 Lichaamsdelen (Vücut Bölümleri)</h3>
            <p>het hoofd (baş), de nek (boyun), de buik (karın), de rug (sırt), de arm (kol), de schouder (omuz), de pols (bilek), de hand (el), de vinger (parmak), het been (bacak), de knie (diz), de enkel (ayak bileği), de voet (ayak), het gezicht (yüz), de mond (ağız), het oog (göz), de neus (burun), het oor (kulak).</p>
          </>
        ) : (
          <>
            <h3>🧍 Lichaamsdelen (Body Parts)</h3>
            <p>het hoofd (head), de nek (neck), de buik (belly/stomach), de rug (back), de arm (arm), de schouder (shoulder), de pols (wrist), de hand (hand), de vinger (finger), het been (leg), de knie (knee), de enkel (ankle), de voet (foot), het gezicht (face), de mond (mouth), het oog (eye), de neus (nose), het oor (ear).</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Lichaamsdelen in de context (Body parts in context)",
        isExtra: true,
        questions: [
          { id: "9.4_smart_1", type: "fill_in", question: "Je draagt een horloge (saat/watch) om je ________.", correctAnswer: "pols" },
          { id: "9.4_smart_2", type: "fill_in", question: "Je gebruikt je ________ om te kijken/zien. (to see/look)", correctAnswer: "ogen" },
          { id: "9.4_smart_3", type: "multiple_choice", question: "Wat is het meervoud (plural) van 'het been'?", options: ["de beens", "de benen", "de beenen"], correctAnswer: "de benen" }
        ]
      }
    ]
  },
  {
    id: "9.5", chapter: 9, title: "9.5 Reacties",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>💬 Reacties (Geçmiş olsun dilekleri)</h3>
            <p>Beterschap. (Geçmiş olsun). Sterkte. (Güçlü kal/Geçmiş olsun). Ik wens u het (aller)beste. (Size en iyisini diliyorum).</p>
          </>
        ) : (
          <>
            <h3>💬 Reacties (Get well wishes)</h3>
            <p>Beterschap. (Get well soon). Sterkte. (Stay strong/Good luck). Ik wens u het (aller)beste. (I wish you all the best).</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Reageren op zieke mensen (Responding to sick people)",
        isExtra: true,
        questions: [
          { id: "9.5_smart_1", type: "multiple_choice", question: "Je collega zegt: 'Ik heb hoofdpijn en koorts.' Wat zeg jij?", options: ["Gefeliciteerd!", "Beterschap!", "Tot ziens!"], correctAnswer: "Beterschap!" },
          { id: "9.5_smart_2", type: "fill_in", question: "Vertaal: 'Stay strong' -> ________", correctAnswer: "Sterkte" }
        ]
      }
    ]
  },
  {
    id: "9.6", chapter: 9, title: "9.6 Dagdelen",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🕒 Dagdelen (Zaman Dilimleri)</h3>
            <p>gisterochtend (dün sabah), vanochtend (bu sabah), morgenochtend (yarın sabah), 's ochtends (sabahları), gisteravond (dün akşam), vannacht (dün gece / bu gece)...</p>
          </>
        ) : (
          <>
            <h3>🕒 Dagdelen (Parts of the Day)</h3>
            <p>gisterochtend (yesterday morning), vanochtend (this morning), morgenochtend (tomorrow morning), 's ochtends (in the mornings), gisteravond (yesterday evening), vannacht (last night / tonight)...</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Welk dagdeel hoort bij de volgende zinnen? (Which part of the day belongs to the following sentences?)",
        isExtra: false,
        questions: [
          { id: "9.6_opd3_1", type: "fill_in", question: "1 De markt is elke dag. Hij begint om 8.00 uur.", correctAnswer: "'s ochtends" },
          { id: "9.6_opd3_2", type: "fill_in", question: "2 Ik wil dit even met mijn vriend overleggen. Ik bel u morgen om 12.00 uur.", correctAnswer: "morgenmiddag" },
          { id: "9.6_opd3_3", type: "fill_in", question: "3 Jasper was gisteren met Christine in een restaurant. Hij was om 23.00 uur thuis.", correctAnswer: "gisteravond" },
          { id: "9.6_opd3_4", type: "fill_in", question: "4 Na 18.00 uur moet u niet dit nummer bellen maar een ander telefoonnummer.", correctAnswer: "'s avonds" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Begrip van dagdelen (Understanding parts of the day)",
        isExtra: true,
        questions: [
          { id: "9.6_smart_1", type: "multiple_choice", question: "Welk dagdeel is tussen 00:00 en 06:00 uur?", options: ["de ochtend", "de nacht", "de avond"], correctAnswer: "de nacht" },
          { id: "9.6_smart_2", type: "fill_in", question: "Hoe zeg je 'yesterday afternoon' in het Nederlands?", correctAnswer: "gistermiddag" }
        ]
      }
    ]
  },
  {
    id: "9.7", chapter: 9, title: "9.7 Perfectum",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>📌 Perfectum (Geçmiş Zaman)</h3>
            <p><strong>Formule:</strong> <code>hebben / zijn + participium van een werkwoord (fiilin 3. hali)</code></p>
            <p><strong>Soft Ketchup Kuralı:</strong> Fiilin kökü (stam) <strong>s, f, t, k, ch veya p</strong> harflerinden biriyle bitiyorsa <strong>-t</strong> alır. Diğer tüm durumlarda <strong>-d</strong> alır.</p>
            
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #3b82f6' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Spreekopdrachten (Konuşma Görevleri)</h4>
              <p><strong>Opdracht 6:</strong> Ayağa kalkın ve birbirinize sorular sorun: <em>Wie heb je gisteren gebeld? (Dün kimi aradın?) Waar heb je gewoond? (Nerede yaşadın?)</em></p>
              <p><strong>Opdracht 8:</strong> İkili çalışın. Birbirinize sorun: <em>Wat heb je gistermorgen gedaan? Waar ben je op vakantie geweest?</em></p>
              <p><strong>Opdracht 10:</strong> A bir soruyla başlar. B cevaplar. A, B'nin cevabından bir kelime alarak yeni bir soru sorar.</p>
            </div>
          </>
        ) : (
          <>
            <h3>📌 Perfectum (Present Perfect Tense)</h3>
            <p><strong>Formula:</strong> <code>hebben / zijn + participium van een werkwoord (past participle)</code></p>
            <p><strong>'t Kofschip (Soft Ketchup) Rule:</strong> If the verb stem ends with <strong>s, f, t, k, ch or p</strong>, you write a <strong>-t</strong>. Otherwise, you use a <strong>-d</strong>.</p>
            
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #3b82f6' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Spreekopdrachten (Speaking Tasks)</h4>
              <p><strong>Opdracht 6:</strong> Walk around and ask each other questions: <em>Wie heb je gisteren gebeld? (Who did you call yesterday?) Waar heb je gewoond? (Where did you live?)</em></p>
              <p><strong>Opdracht 8:</strong> Work in pairs. Ask each other: <em>Wat heb je gistermorgen gedaan? Waar ben je op vakantie geweest?</em></p>
              <p><strong>Opdracht 10:</strong> A starts with a question. B answers. A asks a new question using a word from B's answer.</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Kies het goede werkwoord. (Choose the correct verb.)",
        isExtra: false,
        questions: [
          { id: "9.7_opd4_1", type: "multiple_choice", question: "1 Julia en Martin zijn in België op vakantie ___.", options: ["geweest", "gekregen"], correctAnswer: "geweest" },
          { id: "9.7_opd4_2", type: "multiple_choice", question: "2 We zijn vandaag met les 9 ___.", options: ["gemaakt", "begonnen"], correctAnswer: "begonnen" }
        ]
      },
      {
        instruction: "Opdracht 5: Vul het participium in van het werkwoord tussen haakjes. (Fill in the past participle of the verb in brackets.)",
        isExtra: false,
        questions: [
          { id: "9.7_opd5_1", type: "fill_in", question: "1 Heb je gisteren een wedstrijdje ________ (spelen)?", correctAnswer: "gespeeld" },
          { id: "9.7_opd5_2", type: "fill_in", question: "2 Hij heeft zijn docent een prettig weekend ________ (wensen).", correctAnswer: "gewenst" },
          { id: "9.7_opd5_6", type: "fill_in", question: "6 Heeft de heer Smit aan de bultjes ________ (krabben)?", correctAnswer: "gekrabd" }
        ]
      },
      {
        instruction: "Opdracht 7: Vul een vorm in van 'hebben' of 'zijn'. (Fill in a form of 'hebben' or 'zijn'.)",
        isExtra: false,
        questions: [
          { id: "9.7_opd7_1", type: "fill_in", question: "1 Gisteren ________ mijn collega tot 01.00 uur gewerkt.", correctAnswer: "heeft" },
          { id: "9.7_opd7_2", type: "fill_in", question: "2 Na de les ________ we een biertje gedronken.", correctAnswer: "hebben" },
          { id: "9.7_opd7_15", type: "fill_in", question: "15 Sebastian en ik ________ om 11.00 uur naar de makelaar gegaan.", correctAnswer: "zijn" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Begrip van het Perfectum",
        isExtra: true,
        questions: [
          { id: "9.7_smart_1", type: "multiple_choice", question: "Waarom krijgt 'werken' een -t (gewerkt)?", options: ["Omdat het een onregelmatig werkwoord is.", "Omdat de stam (werk) op een 'k' eindigt (soft ketchup).", "Omdat het met 'hebben' wordt gebruikt."], correctAnswer: "Omdat de stam (werk) op een 'k' eindigt (soft ketchup)." },
          { id: "9.7_smart_2", type: "multiple_choice", question: "Waarom krijgt 'spelen' een -d (gespeeld)?", options: ["Omdat de 'l' niet in 'soft ketchup' zit.", "Omdat het onregelmatig is.", "Omdat de 'e' een klinker is."], correctAnswer: "Omdat de 'l' niet in 'soft ketchup' zit." },
          { id: "9.7_smart_3", type: "fill_in", question: "Vul het juiste participium in van 'bellen': Ik heb mijn moeder ________.", correctAnswer: "gebeld" }
        ]
      }
    ]
  },
  {
    id: "9.8", chapter: 9, title: "9.8 Iets / Niets",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🔍 Iets / Niets + Adjectief + s</h3>
            <p><strong>iets</strong> veya <strong>niets</strong> kelimelerini bir sıfatla birleştirebilirsiniz, ancak bu durumda sıfatın sonuna <strong>-s</strong> yazmanız gerekir (iets lekkers, niets bijzonders).</p>
          </>
        ) : (
          <>
            <h3>🔍 Iets / Niets + Adjective + s</h3>
            <p>You can combine <strong>iets</strong> (something) or <strong>niets</strong> (nothing) with an adjective, but then you add an <strong>-s</strong> to the end of the adjective (iets lekkers, niets bijzonders).</p>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 11: Reageer met iets/niets + adjectief + s. (Respond using iets/niets + adjective + s.)",
        isExtra: false,
        questions: [
          { id: "9.8_opd11_1", type: "fill_in", question: "1 Heb je gisteren iets (leuk) gezien of gehoord?", correctAnswer: "iets leuks" },
          { id: "9.8_opd11_2", type: "fill_in", question: "2 Wanneer wil je iets (warm) drinken?", correctAnswer: "iets warms" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Iets en Niets",
        isExtra: true,
        questions: [
          { id: "9.8_smart_1", type: "multiple_choice", question: "Kies de juiste vorm:", options: ["iets mooi", "iets moois", "iets mooie"], correctAnswer: "iets moois" },
          { id: "9.8_smart_2", type: "fill_in", question: "We hebben vandaag niets ________ (bijzonder) gedaan.", correctAnswer: "bijzonders" }
        ]
      }
    ]
  },
  {
    id: "9.9", chapter: 9, title: "9.9 Tekst & Preposities",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>📄 Tekst: Verkouden zijn of griep hebben? (Soğuk algınlığı mı yoksa grip mi?)</h3>
            <p>Kitabınızdaki Jenny ve Peter hakkındaki metinleri okuyun.</p>
            
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✍️ Schrijfopdracht (Yazma Görevi)</h4>
              <p><strong>Opdracht 15: Klachten beschrijven.</strong> Kendinizi iyi hissetmediğiniz için doktora gidiyorsunuz. Kendi şikayetlerinizi anlatan küçük bir not yazın.</p>
              <ul style={{ color: 'var(--text-muted)' }}>
                <li>1. Şikayetleriniz (semptomlarınız) neler?</li>
                <li>2. Bu şikayetleri ne zaman yaşıyorsunuz?</li>
                <li>3. Ne zamandır bu şikayetleriniz var?</li>
                <li>4. Sorularınız neler?</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <h3>📄 Text: Verkouden zijn of griep hebben? (Having a cold or having the flu?)</h3>
            <p>Read the texts about Jenny and Peter in your book.</p>
            
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✍️ Schrijfopdracht (Writing Task)</h4>
              <p><strong>Opdracht 15: Klachten beschrijven.</strong> You are going to the doctor because you don't feel well. Write a short note for yourself describing your symptoms.</p>
              <ul style={{ color: 'var(--text-muted)' }}>
                <li>1. What are your complaints/symptoms?</li>
                <li>2. When do you have these symptoms?</li>
                <li>3. How long have you had them?</li>
                <li>4. What questions do you have?</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Preposities invullen uit de dialoog van Meneer Smit. (Fill in the prepositions from the dialogue.)",
        isExtra: false,
        questions: [
          { id: "9.9_opd13_1", type: "fill_in", question: "Huisarts: wat is er _____ de hand?", correctAnswer: "aan" },
          { id: "9.9_opd13_2", type: "fill_in", question: "Meneer Smit: zit ik _____ de rode bultjes...", correctAnswer: "onder" }
        ]
      }
    ]
  },
  {
    id: "9.10", chapter: 9, title: "9.10 Uitspraak & Cultuur",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <h3>🗣️ Uitspraak: eindklank -t en verbonden spraak (Sondaki -t sesi ve ulama)</h3>
            <p>Kelimenin sonundaki -t sesinin telaffuzuna dikkat edin: <em>hoofd, mond, gezicht, bed, kast, overhemd, T-shirt, wit.</em></p>
            <p><strong>Opdracht 17:</strong> Aşağıdaki cümleleri dinleyin. Hangi kelimeler birbiriyle birleşiyor (ulama)?</p>
            <ul style={{ color: 'var(--text-muted)' }}>
              <li>1. Ik weet het niet.</li>
              <li>2. Hoe laat is het eigenlijk?</li>
              <li>3. Gisteren was het woensdag.</li>
              <li>4. Zegt u het maar.</li>
              <li>5. Dat is goed.</li>
              <li>6. Wie is er aan de beurt?</li>
            </ul>

            <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }}/>

            <h3>🇳🇱 Cultuur: Praktijktijden (Klinik Çalışma Saatleri)</h3>
            <p>Klinik iş günlerinde 8.00 ile 12.00 ve 13.30 ile 17.00 saatleri arasında açıktır. Acil durumlar için (spoedgevallen), bu saatler dışında da nöbetçi doktora (dienstdoende arts) acil durum hattı (spoedlijn) üzerinden ulaşabilirsiniz: 2317647.</p>
            
            <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #6366f1' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6366f1' }}>🎭 In de praktijk & Rollenspel (Pratik & Rol Yapma)</h4>
              <p><strong>Opdracht 16 (Rollenspel):</strong> İkili çalışın. Biri aile hekimi, diğeri hasta olsun. Aile hekimi sorular sorar: <em>Waar hebt u last van? (Neyiniz var?) Wat hebt u gedaan? (Ne yaptınız?)</em> vb.</p>
              <p><strong>Reflectie:</strong> Bir doktora gittiğinizde şikayetlerinizi anlatabiliyor musunuz? Grip ve soğuk algınlığı hakkında bir metni anlayabiliyor musunuz?</p>
              <p><em>Ek Materyal: www.coutinho.nl/nederlandsingang3 adresinde ekstra alıştırmalar bulabilirsiniz.</em></p>
            </div>
          </>
        ) : (
          <>
            <h3>🗣️ Uitspraak: eindklank -t en verbonden spraak (Final -t sound and connected speech)</h3>
            <p>Pay attention to the pronunciation of the final sound, the -t: <em>hoofd, mond, gezicht, bed, kast, overhemd, T-shirt, wit.</em></p>
            <p><strong>Opdracht 17:</strong> Listen to the following sentences. Which words are connected to each other?</p>
            <ul style={{ color: 'var(--text-muted)' }}>
              <li>1. Ik weet het niet.</li>
              <li>2. Hoe laat is het eigenlijk?</li>
              <li>3. Gisteren was het woensdag.</li>
              <li>4. Zegt u het maar.</li>
              <li>5. Dat is goed.</li>
              <li>6. Wie is er aan de beurt?</li>
            </ul>

            <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }}/>

            <h3>🇳🇱 Cultuur: Praktijktijden (Clinic Hours)</h3>
            <p>The clinic is open on weekdays from 8:00 AM to 12:00 PM and from 1:30 PM to 5:00 PM. For emergencies (spoedgevallen), even outside these hours, you can reach the doctor on duty (dienstdoende arts) via the emergency line (spoedlijn): 2317647.</p>
            
            <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #6366f1' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6366f1' }}>🎭 In de praktijk & Rollenspel (In practice & Roleplay)</h4>
              <p><strong>Opdracht 16 (Rollenspel):</strong> Work in pairs. One is the doctor, the other is the patient. The doctor asks questions: <em>Waar hebt u last van? (What's bothering you?) Wat hebt u gedaan? (What have you done?)</em> etc.</p>
              <p><strong>Reflectie:</strong> Can you tell a doctor what your symptoms are? Can you understand a text about the flu and colds?</p>
              <p><em>Additional Material: You can find extra exercises at www.coutinho.nl/nederlandsingang3.</em></p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: []
  },
  {
    id: "On-Class-9",
    chapter: 9,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Herhaling Les 8: Geen vs. Niet</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada olumsuzluk (negation) yaparken <strong>geen</strong> ve <strong>niet</strong> kuralları şöyledir:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Niet (Değil)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Fiilleri olumsuz yaparken:</strong> Ik kan dan <em>niet</em>. (O zaman gelemem/yapamam).</li>
                    <li><strong>Sıfatları olumsuz yaparken:</strong> Het huis is <em>niet</em> mooi. (Ev güzel değil).</li>
                    <li><strong>Lokasyon/Yer bildirirken:</strong> Amsterdam is <em>niet</em> in Frankrijk.</li>
                    <li><strong>Belirli isimlerden önce:</strong> İsimden önce de, het, deze, die, mijn, jouw varsa <em>niet</em> kullanılır.<br/>➔ Ik heb <em>de</em> hond <em>niet</em>.</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Geen (Hiç / Yok)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Odak isimdeyse ve ismin önünde <strong>'een'</strong> varsa veya <strong>hiçbir şey yoksa</strong> (belirsiz isimler) <em>geen</em> kullanılır.</li>
                    <li>➔ Ik heb <em>katten</em>. ➔ Ik heb <strong>geen</strong> katten. (Hiç kedim yok).</li>
                    <li>➔ Ik heb <em>een hond</em>. ➔ Ik heb <strong>geen</strong> hond.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🧍 Lichaamsdelen (Vücut Bölümleri)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-200 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <div><strong className="text-purple-300">het hoofd:</strong> baş</div>
                <div><strong className="text-purple-300">de nek:</strong> boyun</div>
                <div><strong className="text-purple-300">het gezicht:</strong> yüz</div>
                <div><strong className="text-purple-300">de mond:</strong> ağız</div>
                <div><strong className="text-purple-300">het oog:</strong> göz</div>
                <div><strong className="text-purple-300">de neus:</strong> burun</div>
                <div><strong className="text-purple-300">het oor:</strong> kulak</div>
                <div><strong className="text-purple-300">de keel:</strong> boğaz</div>
                <div><strong className="text-purple-300">de buik:</strong> karın</div>
                <div><strong className="text-purple-300">de rug:</strong> sırt</div>
                <div><strong className="text-purple-300">de arm:</strong> kol</div>
                <div><strong className="text-purple-300">de schouder:</strong> omuz</div>
                <div><strong className="text-purple-300">de pols:</strong> bilek</div>
                <div><strong className="text-purple-300">de hand:</strong> el</div>
                <div><strong className="text-purple-300">de vinger:</strong> parmak</div>
                <div><strong className="text-purple-300">het been:</strong> bacak</div>
                <div><strong className="text-purple-300">de knie:</strong> diz</div>
                <div><strong className="text-purple-300">de enkel:</strong> ayak bileği</div>
                <div><strong className="text-purple-300">de voet:</strong> ayak</div>
                <div><strong className="text-purple-300">de huid:</strong> cilt/deri</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🩺 Bij de Huisarts (Doktorda)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-2">De Huisarts (Doktor) vraagt:</h4>
                  <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                    <li><strong>Wat is er aan de hand?</strong> (Sorun nedir?)</li>
                    <li><strong>Wat zijn de klachten?</strong> (Şikayetleriniz / semptomlarınız neler?)</li>
                    <li><strong>Hoelang hebt u dat al?</strong> (Ne zamandır böyle?)</li>
                    <li><strong>Wanneer is dat begonnen?</strong> (Ne zaman başladı?)</li>
                    <li><strong>Hebt u koorts?</strong> (Ateşiniz var mı?)</li>
                    <li><strong>Waar hebt u pijn?</strong> (Nereniz ağrıyor?)</li>
                    <li><strong>Het lijkt op een allergische reactie.</strong> (Alerjik bir reaksiyona benziyor.)</li>
                    <li><strong>Ik geef u een zalf mee tegen de jeuk.</strong> (Size kaşıntı için bir merhem veriyorum.)</li>
                    <li><strong>Ik geef u een recept voor de apotheek.</strong> (Eczane için size bir reçete veriyorum.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-2">De Patiënt (Hasta) zegt:</h4>
                  <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                    <li><strong>Ik heb last van mijn keel.</strong> (Boğazım beni rahatsız ediyor.)</li>
                    <li><strong>Mijn keel doet pijn / zeer.</strong> (Boğazım ağrıyor / acıyor.)</li>
                    <li><strong>De bultjes jeuken verschrikkelijk.</strong> (Kızarıklıklar / kabartılar korkunç derecede kaşınıyor.)</li>
                    <li><strong>Ik voel me niet goed.</strong> (Kendimi iyi hissetmiyorum.)</li>
                    <li><strong>Ik ben ziek.</strong> (Hastayım.)</li>
                    <li><strong>Ik slaap slecht.</strong> (Kötü uyuyorum.)</li>
                    <li><strong>Ik heb hoofdpijn.</strong> (Başım ağrıyor.)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>☀️ Dagdelen (Günün Bölümleri) & Tijdwoorden</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <h4 className="font-bold text-amber-300 mb-1">Dagdelen:</h4>
                  <ul className="space-y-1">
                    <li>06.00 - 12.00: <strong>de ochtend</strong> (sabah)</li>
                    <li>12.00 - 18.00: <strong>de middag</strong> (öğle)</li>
                    <li>18.00 - 24.00: <strong>de avond</strong> (akşam)</li>
                    <li>00.00 - 06.00: <strong>de nacht</strong> (gece)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 mb-1">Zaman İfadeleri:</h4>
                  <ul className="space-y-1">
                    <li><strong>gisterochtend:</strong> dün sabah</li>
                    <li><strong>gistermiddag:</strong> dün öğle</li>
                    <li><strong>gisteravond:</strong> dün akşam</li>
                    <li><strong>vannacht:</strong> dün gece / bu gece</li>
                    <li><strong>vanochtend:</strong> bu sabah</li>
                    <li><strong>vanmiddag:</strong> bu öğle</li>
                    <li><strong>vanavond:</strong> bu akşam</li>
                    <li><strong>morgenochtend:</strong> yarın sabah</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>⏳ Present Perfect (Voltooid Tegenwoordige Tijd)</h3>
              <p className="text-sm text-slate-300 mb-3">Geçmişte olan ve biten olayları anlatmak için kullanılır. (Örn: I have worked / Çalıştım).</p>
              
              <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/30">
                <h4 className="font-bold text-indigo-300 text-sm mb-2">Formül: Hebben / Zijn + Participium (Past Participle)</h4>
                <p className="text-sm text-indigo-100 mb-2">Düzenli fiillerin 3. halini (participium) yapmak için: <strong>ge + stam (kök) + t/d</strong></p>
                
                <h5 className="font-bold text-white text-xs mt-3">Ne zaman 't', ne zaman 'd'? ('Soft Ketchup' kuralı)</h5>
                <p className="text-sm text-slate-300 mb-2">Fiilin kökünün son harfi <strong>s, o, f, t, k, e, c, h, p</strong> harflerinden biriyse <strong>+ t</strong> gelir. Diğer tüm durumlarda <strong>+ d</strong> gelir.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5 mb-3">
                  <li>werken ➔ stam: werk (k ile bitiyor) ➔ ge + werk + t = <strong>gewerkt</strong></li>
                  <li>rennen (koşmak) ➔ stam: ren (n ile bitiyor) ➔ ge + ren + d = <strong>gerend</strong></li>
                  <li>bellen ➔ stam: bel ➔ ge + bel + d = <strong>gebeld</strong></li>
                </ul>

                <h5 className="font-bold text-white text-xs mt-3">Ne zaman 'Hebben', Ne zaman 'Zijn'?</h5>
                <p className="text-sm text-slate-300 mb-2">Hareket veya durum değişikliği bildiren fiillerde (gaan, komen, stoppen vb.) <strong>zijn</strong> çekimi (ben, bent, is, zijn) kullanılır. Diğerlerinde <strong>hebben</strong> (heb, hebt, heeft, hebben) kullanılır.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>Ik <strong>heb</strong> gewerkt. (Çalıştım).</li>
                  <li>Wij <strong>zijn</strong> gegaan. (Gittik).</li>
                  <li>Jullie <strong>zijn</strong> gekomen. (Geldiniz).</li>
                  <li>Ik <strong>ben</strong> met de cursus <strong>gestopt</strong>. (Kursa son verdim/bıraktım).</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Review Lesson 8: Geen vs. Niet</h3>
              <p className="text-sm text-slate-300 mb-2">The rules for negation in Dutch using <strong>geen</strong> and <strong>niet</strong> are as follows:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Niet (Not)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Negating verbs:</strong> Ik kan dan <em>niet</em>. (I can't do it then).</li>
                    <li><strong>Negating adjectives:</strong> Het huis is <em>niet</em> mooi. (The house is not beautiful).</li>
                    <li><strong>Indicating location:</strong> Amsterdam is <em>niet</em> in Frankrijk.</li>
                    <li><strong>Before definite nouns:</strong> If the noun is preceded by de, het, deze, die, mijn, jouw, you use <em>niet</em>.<br/>➔ Ik heb <em>de</em> hond <em>niet</em>.</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 text-sm mb-1">Geen (No / Not a)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>If the focus is on a noun and it is preceded by <strong>'een'</strong> or <strong>nothing at all</strong> (indefinite nouns), <em>geen</em> is used.</li>
                    <li>➔ Ik heb <em>katten</em>. ➔ Ik heb <strong>geen</strong> katten. (I have no cats).</li>
                    <li>➔ Ik heb <em>een hond</em>. ➔ Ik heb <strong>geen</strong> hond.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🧍 Lichaamsdelen (Body Parts)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-200 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                <div><strong className="text-purple-300">het hoofd:</strong> head</div>
                <div><strong className="text-purple-300">de nek:</strong> neck</div>
                <div><strong className="text-purple-300">het gezicht:</strong> face</div>
                <div><strong className="text-purple-300">de mond:</strong> mouth</div>
                <div><strong className="text-purple-300">het oog:</strong> eye</div>
                <div><strong className="text-purple-300">de neus:</strong> nose</div>
                <div><strong className="text-purple-300">het oor:</strong> ear</div>
                <div><strong className="text-purple-300">de keel:</strong> throat</div>
                <div><strong className="text-purple-300">de buik:</strong> belly</div>
                <div><strong className="text-purple-300">de rug:</strong> back</div>
                <div><strong className="text-purple-300">de arm:</strong> arm</div>
                <div><strong className="text-purple-300">de schouder:</strong> shoulder</div>
                <div><strong className="text-purple-300">de pols:</strong> wrist</div>
                <div><strong className="text-purple-300">de hand:</strong> hand</div>
                <div><strong className="text-purple-300">de vinger:</strong> finger</div>
                <div><strong className="text-purple-300">het been:</strong> leg</div>
                <div><strong className="text-purple-300">de knie:</strong> knee</div>
                <div><strong className="text-purple-300">de enkel:</strong> ankle</div>
                <div><strong className="text-purple-300">de voet:</strong> foot</div>
                <div><strong className="text-purple-300">de huid:</strong> skin</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🩺 Bij de Huisarts (At the Doctor's)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-2">De Huisarts (The Doctor) asks:</h4>
                  <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                    <li><strong>Wat is er aan de hand?</strong> (What's the matter?)</li>
                    <li><strong>Wat zijn de klachten?</strong> (What are your symptoms?)</li>
                    <li><strong>Hoelang hebt u dat al?</strong> (How long have you had that?)</li>
                    <li><strong>Wanneer is dat begonnen?</strong> (When did that start?)</li>
                    <li><strong>Hebt u koorts?</strong> (Do you have a fever?)</li>
                    <li><strong>Waar hebt u pijn?</strong> (Where does it hurt?)</li>
                    <li><strong>Het lijkt op een allergische reactie.</strong> (It looks like an allergic reaction.)</li>
                    <li><strong>Ik geef u een zalf mee tegen de jeuk.</strong> (I'll give you an ointment for the itch.)</li>
                    <li><strong>Ik geef u een recept voor de apotheek.</strong> (I'll give you a prescription for the pharmacy.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-300 text-sm mb-2">De Patiënt (The Patient) says:</h4>
                  <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                    <li><strong>Ik heb last van mijn keel.</strong> (My throat is bothering me.)</li>
                    <li><strong>Mijn keel doet pijn / zeer.</strong> (My throat hurts / is sore.)</li>
                    <li><strong>De bultjes jeuken verschrikkelijk.</strong> (The bumps itch terribly.)</li>
                    <li><strong>Ik voel me niet goed.</strong> (I don't feel well.)</li>
                    <li><strong>Ik ben ziek.</strong> (I am sick.)</li>
                    <li><strong>Ik slaap slecht.</strong> (I am sleeping poorly.)</li>
                    <li><strong>Ik heb hoofdpijn.</strong> (I have a headache.)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>☀️ Dagdelen (Parts of the Day) & Time Words</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <h4 className="font-bold text-amber-300 mb-1">Dagdelen:</h4>
                  <ul className="space-y-1">
                    <li>06.00 - 12.00: <strong>de ochtend</strong> (morning)</li>
                    <li>12.00 - 18.00: <strong>de middag</strong> (afternoon)</li>
                    <li>18.00 - 24.00: <strong>de avond</strong> (evening)</li>
                    <li>00.00 - 06.00: <strong>de nacht</strong> (night)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 mb-1">Time Expressions:</h4>
                  <ul className="space-y-1">
                    <li><strong>gisterochtend:</strong> yesterday morning</li>
                    <li><strong>gistermiddag:</strong> yesterday afternoon</li>
                    <li><strong>gisteravond:</strong> yesterday evening</li>
                    <li><strong>vannacht:</strong> last night / tonight</li>
                    <li><strong>vanochtend:</strong> this morning</li>
                    <li><strong>vanmiddag:</strong> this afternoon</li>
                    <li><strong>vanavond:</strong> this evening / tonight</li>
                    <li><strong>morgenochtend:</strong> tomorrow morning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>⏳ Present Perfect (Voltooid Tegenwoordige Tijd)</h3>
              <p className="text-sm text-slate-300 mb-3">Used to describe events that happened and finished in the past. (Ex: I have worked).</p>
              
              <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/30">
                <h4 className="font-bold text-indigo-300 text-sm mb-2">Formula: Hebben / Zijn + Participium (Past Participle)</h4>
                <p className="text-sm text-indigo-100 mb-2">To make the 3rd form (participium) of regular verbs: <strong>ge + stam (stem) + t/d</strong></p>
                
                <h5 className="font-bold text-white text-xs mt-3">When 't', when 'd'? ('Soft Ketchup' rule)</h5>
                <p className="text-sm text-slate-300 mb-2">If the last letter of the verb stem is one of <strong>s, o, f, t, k, e, c, h, p</strong>, you add <strong>+ t</strong>. In all other cases, you add <strong>+ d</strong>.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5 mb-3">
                  <li>werken ➔ stam: werk (ends with k) ➔ ge + werk + t = <strong>gewerkt</strong></li>
                  <li>rennen (to run) ➔ stam: ren (ends with n) ➔ ge + ren + d = <strong>gerend</strong></li>
                  <li>bellen ➔ stam: bel ➔ ge + bel + d = <strong>gebeld</strong></li>
                </ul>

                <h5 className="font-bold text-white text-xs mt-3">When 'Hebben', when 'Zijn'?</h5>
                <p className="text-sm text-slate-300 mb-2">For verbs indicating movement or a change of state (gaan, komen, stoppen etc.), the conjugation of <strong>zijn</strong> (ben, bent, is, zijn) is used. For all others, <strong>hebben</strong> (heb, hebt, heeft, hebben) is used.</p>
                <ul className="text-sm text-slate-200 list-disc pl-5">
                  <li>Ik <strong>heb</strong> gewerkt. (I have worked).</li>
                  <li>Wij <strong>zijn</strong> gegaan. (We have gone).</li>
                  <li>Jullie <strong>zijn</strong> gekomen. (You have come).</li>
                  <li>Ik <strong>ben</strong> met de cursus <strong>gestopt</strong>. (I have stopped with the course).</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Geen of Niet?",
        isExtra: false,
        questions: [
          { id: "9_onclass_1_1", type: "multiple_choice", question: "Ik heb ________ katten.", options: ["geen", "niet"], correctAnswer: "geen" },
          { id: "9_onclass_1_2", type: "multiple_choice", question: "Het huis is ________ mooi.", options: ["geen", "niet"], correctAnswer: "niet" },
          { id: "9_onclass_1_3", type: "multiple_choice", question: "Ik heb ________ hond. (I have no dog).", options: ["geen", "niet"], correctAnswer: "geen" },
          { id: "9_onclass_1_4", type: "multiple_choice", question: "Amsterdam is ________ in Frankrijk.", options: ["geen", "niet"], correctAnswer: "niet" },
          { id: "9_onclass_1_5", type: "multiple_choice", question: "Ik heb de pen ________.", options: ["geen", "niet"], correctAnswer: "niet" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Lichaamsdelen & De Huisarts (Body Parts & The Doctor)",
        isExtra: false,
        questions: [
          { id: "9_onclass_2_1", type: "fill_in", question: "The throat = de ________", correctAnswer: "keel" },
          { id: "9_onclass_2_2", type: "fill_in", question: "The face = het ________", correctAnswer: "gezicht" },
          { id: "9_onclass_2_3", type: "fill_in", question: "The belly/stomach = de ________", correctAnswer: "buik" },
          { id: "9_onclass_2_4", type: "fill_in", question: "Dokter: Wat is er aan de ________? (What is the matter?)", correctAnswer: "hand" },
          { id: "9_onclass_2_5", type: "fill_in", question: "Patiënt: Ik heb last van mijn keel. Mijn keel doet ________. (hurts)", correctAnswer: "pijn" },
          { id: "9_onclass_2_6", type: "multiple_choice", question: "Vertaal: 'I don't feel well.'", options: ["Ik ben ziek.", "Ik voel me niet goed.", "Ik slaap slecht."], correctAnswer: "Ik voel me niet goed." },
          { id: "9_onclass_2_7", type: "fill_in", question: "Dokter: Ik geef u een recept voor de ________. (pharmacy)", correctAnswer: "apotheek" }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Dagdelen & Tijd (Parts of the day & Time)",
        isExtra: true,
        questions: [
          { id: "9_onclass_3_1", type: "multiple_choice", question: "Het is 14:00 uur. Het is de...", options: ["ochtend", "middag", "avond", "nacht"], correctAnswer: "middag" },
          { id: "9_onclass_3_2", type: "fill_in", question: "Yesterday morning = ________", correctAnswer: "gisterochtend" },
          { id: "9_onclass_3_3", type: "fill_in", question: "Tonight / Last night = ________", correctAnswer: "vannacht" },
          { id: "9_onclass_3_4", type: "multiple_choice", question: "Wat betekent 'vanochtend'?", options: ["tomorrow morning", "this morning", "yesterday morning"], correctAnswer: "this morning" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Perfectum (Voltooid Tegenwoordige Tijd)",
        isExtra: false,
        questions: [
          { id: "9_onclass_4_1", type: "fill_in", question: "spelen ➔ ge + speel + d = ________", correctAnswer: "gespeeld" },
          { id: "9_onclass_4_2", type: "fill_in", question: "stoppen ➔ ge + stop + t = ________", correctAnswer: "gestopt" },
          { id: "9_onclass_4_3", type: "fill_in", question: "Ik ________ gisteren mijn zus gebeld. (heb / ben)", correctAnswer: "heb" },
          { id: "9_onclass_4_4", type: "fill_in", question: "Ja, ik ________ met de cursus gestopt. (heb / ben)", correctAnswer: "ben" },
          { id: "9_onclass_4_5", type: "fill_in", question: "Ik heb in Amsterdam ________. (wonen ➔ past participle)", correctAnswer: "gewoond" },
          { id: "9_onclass_4_6", type: "fill_in", question: "Wij ________ naar huis gegaan. (hebben / zijn)", correctAnswer: "zijn" },
          { id: "9_onclass_4_7", type: "multiple_choice", question: "Krijgt 'proeven' (stam: proef) een 't' of een 'd' in het perfectum?", options: ["een 't' (geproeft)", "een 'd' (geproefd)"], correctAnswer: "een 'd' (geproefd)" },
          { id: "9_onclass_4_8", type: "fill_in", question: "Ik ________ een salade besteld. (hebben of zijn?)", correctAnswer: "heb" },
          { id: "9_onclass_4_9", type: "multiple_choice", question: "Wat is het juiste participium van drinken (irregular)?", options: ["gedrinkt", "gedronken", "gedronkt"], correctAnswer: "gedronken" }
        ]
      }
    ]
  }
];