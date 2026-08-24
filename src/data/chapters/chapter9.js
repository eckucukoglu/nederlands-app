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
    { speaker: "Verteller", text: "De makelaar, meneer Smit, heeft een afspraak bij de huisarts.", translation: "Emlakçı Bay Smit'in aile hekiminde randevusu var." },
    { speaker: "Meneer Smit", text: "Goedemorgen dokter.", translation: "Günaydın doktor." },
    { speaker: "Huisarts", text: "Goedemorgen meneer Smit, wat is er aan de hand?", translation: "Günaydın Bay Smit, sorun nedir?" },
    { speaker: "Meneer Smit", text: "Zoals u ziet, zit ik onder de rode bultjes. Ze zitten op mijn armen, benen, buik en rug, alleen niet op mijn gezicht. Ze jeuken verschrikkelijk. Ik heb van alles geprobeerd, maar niets heeft geholpen.", translation: "Gördüğünüz gibi, kırmızı lekelerle kaplıyım. Kollarımda, bacaklarımda, karnımda ve sırtımdalar, sadece yüzümde yoklar. Korkunç kaşınıyorlar. Her şeyi denedim ama hiçbir şey işe yaramadı." },
    { speaker: "Huisarts", text: "Wanneer is dat begonnen? Sinds wanneer hebt u ze?", translation: "Bu ne zaman başladı? Ne zamandan beri varlar?" },
    { speaker: "Meneer Smit", text: "Sinds gisteravond.", translation: "Dün akşamdan beri." },
    { speaker: "Huisarts", text: "Kunt u vertellen wat u gisteren hebt gedaan?", translation: "Dün ne yaptığınızı söyleyebilir misiniz?" },
    { speaker: "Meneer Smit", text: "Overdag heb ik gewerkt, ik heb met klanten een huis bekeken. En gisteravond ben ik naar de voetbalvereniging geweest, ik heb een wedstrijdje gespeeld en daarna hebben we nog een biertje gedronken.", translation: "Gündüz çalıştım, müşterilerle bir eve baktım. Ve dün akşam futbol kulübüne gittim, bir maç oynadım ve sonrasında bir bira içtik." },
    { speaker: "Huisarts", text: "Hebt u iets bijzonders gegeten?", translation: "Özel bir şey yediniz mi?" },
    { speaker: "Meneer Smit", text: "Nee, eigenlijk niet.", translation: "Hayır, aslında değil." },
    { speaker: "Huisarts", text: "En de afgelopen dagen?", translation: "Peki ya geçen günlerde?" },
    { speaker: "Meneer Smit", text: "O, dat ben ik vergeten, even denken. O ja, in het weekend hebben we heel veel aardbeien gegeten. De aardbeien in de tuin zijn rijp en we hebben emmers vol met aardbeien. Veel meer dan vorig jaar.", translation: "Oh, bunu unuttum, bir düşüneyim. Oh evet, hafta sonu çok fazla çilek yedik. Bahçedeki çilekler olgunlaştı ve kova dolusu çileğimiz var. Geçen yıldan çok daha fazla." },
    { speaker: "Huisarts", text: "Hebt u nog andere klachten?", translation: "Başka şikayetiniz var mı?" },
    { speaker: "Meneer Smit", text: "Nee, verder niet.", translation: "Hayır, başka yok." },
    { speaker: "Huisarts", text: "Het lijkt op een allergische reactie. Ik geef u een zalf mee tegen de jeuk, anders krabt u uw huid kapot. Ik wil graag voor volgende week een nieuwe afspraak maken. Sterkte.", translation: "Alerjik bir reaksiyona benziyor. Kaşıntıya karşı size bir merhem vereceğim, yoksa cildinizi kaşıyarak parçalayacaksınız. Gelecek hafta için yeni bir randevu almak istiyorum. Geçmiş olsun." },
    { speaker: "Meneer Smit", text: "Bedankt, tot volgende week.", translation: "Teşekkürler, haftaya görüşürüz." }
  ]
};

export const chapter9Sections = [
  {
    id: "9.1", chapter: 9, title: "9.1 Dialoog",
    theory: (
      <>
        <h3>🗣️ Dialoog: Bij de huisarts</h3>
        <p>De makelaar, meneer Smit, heeft een afspraak bij de huisarts. Lees de dialoog bovenaan de pagina of beluister hem via de knop.</p>
      </>
    ),
    exerciseGroups: [{ instruction: "Extra Oefeningen: Begrip van de dialoog", isExtra: true, questions: generateSmartQuestions(9, "Dialoog Woordenschat", 5, chapter9Vocab) }]
  },
  {
    id: "9.2", chapter: 9, title: "9.2 Woordenlijst & Opdracht 1",
    theory: (
      <>
        <h3>📖 Woordenlijst</h3>
        <p>Bestudeer deze woorden aandachtig voordat je aan Opdracht 1 begint.</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Bedenk zelf vragen bij de dialoog. Gebruik de gegeven woorden.",
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
    theory: (
      <>
        <h3>🩺 Zinnen voor bij de huisarts</h3>
        <p><strong>Huisarts:</strong> Wat is er aan de hand? Wat zijn de klachten? Hoelang hebt u die al? Hebt u koorts?</p>
        <p><strong>Patiënt:</strong> Ik heb last van mijn keel. De bultjes jeuken verschrikkelijk. Ik voel me niet goed. Ik ben ziek.</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Jullie zijn allemaal ziek! Bedenk een probleem en vertel dat aan de dokter.",
        isExtra: false,
        questions: [
          { id: "9.3_opd2_1", type: "fill_in", question: "Dokter: Wat is er aan de hand? (Cevap: başım ağrıyor)", correctAnswer: "Ik heb hoofdpijn." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Gelişmiş Sorular)",
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
    theory: (
      <>
        <h3>🧍 Lichaamsdelen (Vücut Bölümleri)</h3>
        <p>het hoofd, de nek, de buik, de rug, de arm, de schouder, de pols, de hand, de vinger, het been, de knie, de enkel, de voet, het gezicht, de mond, het oog, de neus, het oor.</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Lichaamsdelen in de context",
        isExtra: true,
        questions: [
          { id: "9.4_smart_1", type: "fill_in", question: "Je draagt een horloge (saat) om je ________.", correctAnswer: "pols" },
          { id: "9.4_smart_2", type: "fill_in", question: "Je gebruikt je ________ om te kijken/zien.", correctAnswer: "ogen" },
          { id: "9.4_smart_3", type: "multiple_choice", question: "Wat is het meervoud (plural) van 'het been'?", options: ["de beens", "de benen", "de beenen"], correctAnswer: "de benen" }
        ]
      }
    ]
  },
  {
    id: "9.5", chapter: 9, title: "9.5 Reacties",
    theory: (
      <>
        <h3>💬 Reacties (Geçmiş olsun dilekleri)</h3>
        <p>Beterschap. Sterkte. Ik wens u het (aller)beste.</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Reageren op zieke mensen",
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
    theory: (
      <>
        <h3>🕒 Dagdelen (Zaman Dilimleri)</h3>
        <p>gisterochtend, vanochtend, morgenochtend, 's ochtends, gisteravond, vannacht...</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Welk dagdeel hoort bij de volgende zinnen?",
        isExtra: false,
        questions: [
          { id: "9.6_opd3_1", type: "fill_in", question: "1 De markt is elke dag. Hij begint om 8.00 uur.", correctAnswer: "'s ochtends" },
          { id: "9.6_opd3_2", type: "fill_in", question: "2 Ik wil dit even met mijn vriend overleggen. Ik bel u morgen om 12.00 uur.", correctAnswer: "morgenmiddag" },
          { id: "9.6_opd3_3", type: "fill_in", question: "3 Jasper was gisteren met Christine in een restaurant. Hij was om 23.00 uur thuis.", correctAnswer: "gisteravond" },
          { id: "9.6_opd3_4", type: "fill_in", question: "4 Na 18.00 uur moet u niet dit nummer bellen maar een ander telefoonnummer.", correctAnswer: "'s avonds" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Begrip van dagdelen",
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
    theory: (
      <>
        <h3>📌 Perfectum (Geçmiş Zaman)</h3>
        <p><strong>Formule:</strong> <code>hebben / zijn + participium van een werkwoord</code></p>
        <p><strong>Soft Ketchup Kuralı:</strong> Als de stam eindigt op <strong>s, f, t, k, ch of p</strong>, schrijf je een <strong>-t</strong>. Anders een <strong>-d</strong>.</p>
        
        <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #3b82f6' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Spreekopdrachten (Konuşma Görevleri)</h4>
          <p><strong>Opdracht 6:</strong> Loop rond en stel elkaar vragen: <em>Wie heb je gisteren gebeld? Waar heb je gewoond?</em></p>
          <p><strong>Opdracht 8:</strong> Werk in tweetallen. Vraag elkaar: <em>Wat heb je gistermorgen gedaan? Waar ben je op vakantie geweest?</em></p>
          <p><strong>Opdracht 10:</strong> A begint met een vraag. B antwoordt. A stelt een nieuwe vraag met een woord uit het antwoord van B.</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Kies het goede werkwoord.",
        isExtra: false,
        questions: [
          { id: "9.7_opd4_1", type: "multiple_choice", question: "1 Julia en Martin zijn in België op vakantie ___.", options: ["geweest", "gekregen"], correctAnswer: "geweest" },
          { id: "9.7_opd4_2", type: "multiple_choice", question: "2 We zijn vandaag met les 9 ___.", options: ["gemaakt", "begonnen"], correctAnswer: "begonnen" }
        ]
      },
      {
        instruction: "Opdracht 5: Vul het participium in van het werkwoord tussen haakjes.",
        isExtra: false,
        questions: [
          { id: "9.7_opd5_1", type: "fill_in", question: "1 Heb je gisteren een wedstrijdje ________ (spelen)?", correctAnswer: "gespeeld" },
          { id: "9.7_opd5_2", type: "fill_in", question: "2 Hij heeft zijn docent een prettig weekend ________ (wensen).", correctAnswer: "gewenst" },
          { id: "9.7_opd5_6", type: "fill_in", question: "6 Heeft de heer Smit aan de bultjes ________ (krabben)?", correctAnswer: "gekrabd" }
        ]
      },
      {
        instruction: "Opdracht 7: Vul een vorm in van 'hebben' of 'zijn'.",
        isExtra: false,
        questions: [
          { id: "9.7_opd7_1", type: "fill_in", question: "1 Gisteren ________ mijn collega tot 01.00 uur gewerkt.", correctAnswer: "heeft" },
          { id: "9.7_opd7_2", type: "fill_in", question: "2 Na de les ________ we een biertje gedronken.", correctAnswer: "hebben" },
          { id: "9.7_opd7_15", type: "fill_in", question: "15 Sebastian en ik ________ om 11.00 uur naar de makelaar gegaan.", correctAnswer: "zijn" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Begrip van het Perfectum",
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
    theory: (
      <>
        <h3>🔍 Iets / Niets + Adjectief + s</h3>
        <p>Je kunt <strong>iets</strong> of <strong>niets</strong> combineren met een adjectief, maar dan schrijf je een <strong>-s</strong> aan het eind van het adjectief (iets lekkers, niets bijzonders).</p>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 11: Reageer met iets/niets + adjectief + s.",
        isExtra: false,
        questions: [
          { id: "9.8_opd11_1", type: "fill_in", question: "1 Heb je gisteren iets (leuk) gezien of gehoord?", correctAnswer: "iets leuks" },
          { id: "9.8_opd11_2", type: "fill_in", question: "2 Wanneer wil je iets (warm) drinken?", correctAnswer: "iets warms" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Iets en Niets",
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
    theory: (
      <>
        <h3>📄 Tekst: Verkouden zijn of griep hebben?</h3>
        <p>Lees de teksten over Jenny en Peter in je boek.</p>
        
        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #10b981' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#34d399' }}>✍️ Schrijfopdracht (Yazma Görevi)</h4>
          <p><strong>Opdracht 15: Klachten beschrijven.</strong> Je gaat naar de huisarts, want je voelt je niet goed. Schrijf een briefje voor jezelf met je klachten.</p>
          <ul style={{ color: 'var(--text-muted)' }}>
            <li>1. Wat zijn je klachten?</li>
            <li>2. Wanneer heb je die klachten?</li>
            <li>3. Hoelang heb je die klachten al?</li>
            <li>4. Welke vragen heb je?</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 13: Preposities invullen uit de dialoog van Meneer Smit.",
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
    theory: (
      <>
        <h3>🗣️ Uitspraak: eindklank -t en verbonden spraak</h3>
        <p>Denk om de uitspraak van de laatste klank, de -t: <em>hoofd, mond, gezicht, bed, kast, overhemd, T-shirt, wit.</em></p>
        <p><strong>Opdracht 17:</strong> Luister naar de volgende zinnen. Welke woorden zijn met elkaar verbonden?</p>
        <ul style={{ color: 'var(--text-muted)' }}>
          <li>1. Ik weet het niet.</li>
          <li>2. Hoe laat is het eigenlijk?</li>
          <li>3. Gisteren was het woensdag.</li>
          <li>4. Zegt u het maar.</li>
          <li>5. Dat is goed.</li>
          <li>6. Wie is er aan de beurt?</li>
        </ul>

        <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }}/>

        <h3>🇳🇱 Cultuur: Praktijktijden</h3>
        <p>De praktijk is op werkdagen geopend van 8.00 tot 12.00 uur en van 13.30 tot 17.00 uur. Voor spoedgevallen, ook buiten deze tijden, kunt u de dienstdoende arts bereiken via de spoedlijn: 2317647.</p>
        
        <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', marginTop: '20px', borderLeft: '4px solid #6366f1' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#6366f1' }}>🎭 In de praktijk & Rollenspel</h4>
          <p><strong>Opdracht 16 (Rollenspel):</strong> Werk in tweetallen. De een is huisarts, de ander is patiënt. De huisarts stelt vragen: <em>Waar hebt u last van? Wat hebt u gedaan?</em> enz.</p>
          <p><strong>Reflectie:</strong> Kun je bij een dokter vertellen wat je klachten zijn? Kun je een tekst over griep en verkoudheid begrijpen?</p>
          <p><em>Verdiepingsmateriaal: Op www.coutinho.nl/nederlandsingang3 kun je aan de slag met extra opdrachten.</em></p>
        </div>
      </>
    ),
    exerciseGroups: []
  },
  {
    id: "On-Class-9", chapter: 9, title: "On-Class Herhaling",
    theory: (
      <>
        <h3>🎓 On-Class Samenvatting Hoofdstuk 9</h3>
        <p><strong>Geen / Niet:</strong></p>
        <ul>
          <li><strong>niet:</strong> Focus op verbs, adjectives of locaties (bijv. Ik kan dan niet. Het is niet mooi.)</li>
          <li><strong>geen:</strong> Focus op nouns met 'een' of zonder lidwoord (bijv. Ik heb geen katten. Ik heb geen hond.)</li>
        </ul>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen: Geen vs Niet",
        isExtra: true,
        questions: [
          { id: "9_onclass_1", type: "multiple_choice", question: "Kies de juiste vorm: Ik heb ___ auto.", options: ["niet", "geen", "niets"], correctAnswer: "geen" },
          { id: "9_onclass_2", type: "multiple_choice", question: "Kies de juiste vorm: Mijn huis is ___ groot.", options: ["niet", "geen", "niets"], correctAnswer: "niet" },
          { id: "9_onclass_3", type: "multiple_choice", question: "Waar staat TEMPO voor?", options: ["Tijd - Eten - Manier - Plaats", "Tijd - Manier - Plaats - Object", "Tempo - Extra - Meer - Procent"], correctAnswer: "Tijd - Manier - Plaats - Object" }
        ]
      }
    ]
  }
];