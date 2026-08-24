// src/data/chapters/chapter14.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter14Vocab = [
  { id: "14_1", chapter: 14, nl: "de sportschool", en: "sports club / gym", example: "Ik ga drie keer per week naar de sportschool." },
  { id: "14_2", chapter: 14, nl: "de school", en: "school", example: "Mijn kinderen gaan naar school." },
  { id: "14_3", chapter: 14, nl: "zich inschrijven", en: "enrol / register", example: "Kan ik me hier inschrijven?" },
  { id: "14_4", chapter: 14, nl: "mensen (de mens)", en: "people (person)", example: "Er staan veel mensen in de rij." },
  { id: "14_5", chapter: 14, nl: "in de rij staan", en: "queue (up) / stand in line", example: "We moeten in de rij staan." },
  { id: "14_6", chapter: 14, nl: "het lid", en: "member", example: "Ik wil graag lid worden." },
  { id: "14_7", chapter: 14, nl: "het abonnement", en: "subscription", example: "Ik heb een jaarabonnement." },
  { id: "14_8", chapter: 14, nl: "het verschil", en: "difference", example: "Wat is het verschil tussen de abonnementen?" },
  { id: "14_9", chapter: 14, nl: "elke (elk)", en: "each", example: "Je kunt elke maand opzeggen." },
  { id: "14_10", chapter: 14, nl: "opzeggen", en: "cancel", example: "Ik wil mijn abonnement opzeggen." },
  { id: "14_11", chapter: 14, nl: "het bedrag", en: "amount", example: "Je betaalt het hele bedrag in één keer." },
  { id: "14_12", chapter: 14, nl: "beide", en: "both", example: "Met beide kun je onbeperkt sporten." },
  { id: "14_13", chapter: 14, nl: "onbeperkt", en: "unlimited", example: "Onbeperkt internet." },
  { id: "14_14", chapter: 14, nl: "sporten", en: "play sports", example: "Ik ga het hele jaar sporten." },
  { id: "14_15", chapter: 14, nl: "speciale (speciaal)", en: "special", example: "Een speciale aanbieding." },
  { id: "14_16", chapter: 14, nl: "de aanbieding", en: "offer", example: "We hebben een goede aanbieding." },
  { id: "14_17", chapter: 14, nl: "het procent", en: "per cent", example: "Tien procent korting." },
  { id: "14_18", chapter: 14, nl: "de korting", en: "discount", example: "Je krijgt korting." },
  { id: "14_19", chapter: 14, nl: "gratis", en: "free", example: "Een gratis T-shirt." },
  { id: "14_20", chapter: 14, nl: "zeker", en: "sure / certain", example: "Dat weet ik zeker." },
  { id: "14_21", chapter: 14, nl: "de conditie", en: "fitness / condition", example: "Ik wil mijn conditie verbeteren." },
  { id: "14_22", chapter: 14, nl: "verbeteren", en: "improve", example: "Mijn Nederlands verbeteren." },
  { id: "14_23", chapter: 14, nl: "spieren (de spier)", en: "muscles", example: "Je spieren versterken." },
  { id: "14_24", chapter: 14, nl: "versterken", en: "strengthen", example: "Ik wil mijn spieren versterken." },
  { id: "14_25", chapter: 14, nl: "het gewicht", en: "weight", example: "Ik let op mijn gewicht." },
  { id: "14_26", chapter: 14, nl: "verliezen", en: "lose", example: "Ik wil gewicht verliezen." },
  { id: "14_27", chapter: 14, nl: "doelen (het doel)", en: "goals / targets", example: "Dat zijn mijn doelen." },
  { id: "14_28", chapter: 14, nl: "nogal", en: "quite / rather", example: "Je bent nogal wat van plan." },
  { id: "14_29", chapter: 14, nl: "bent van plan (van plan zijn)", en: "intend", example: "Wat ben je van plan?" },
  { id: "14_30", chapter: 14, nl: "trouwen", en: "marry", example: "Ik ga trouwen met Janine." },
  { id: "14_31", chapter: 14, nl: "de liefde", en: "love", example: "Voor de liefde van mijn leven." },
  { id: "14_32", chapter: 14, nl: "het leven", en: "life", example: "Het is een mooi leven." },
  { id: "14_33", chapter: 14, nl: "fitte (fit)", en: "healthy / fit", example: "Een fitte man." },
  { id: "14_34", chapter: 14, nl: "aantrekkelijke", en: "attractive", example: "Een aantrekkelijke man." },
  { id: "14_35", chapter: 14, nl: "de man", en: "man", example: "Hij is een knappe man." },
  { id: "14_36", chapter: 14, nl: "de krachttraining", en: "weight training", example: "Ik doe aan krachttraining." },
  { id: "14_37", chapter: 14, nl: "de kracht", en: "strength / power", example: "Kracht en conditie." },
  { id: "14_38", chapter: 14, nl: "de training", en: "training", example: "Een zware training." },
  { id: "14_39", chapter: 14, nl: "waarschijnlijk", en: "probably", example: "Waarschijnlijk ga ik morgen." },
  { id: "14_40", chapter: 14, nl: "de cardio", en: "cardio fitness", example: "Ik doe cardio voor mijn hart." },
  { id: "14_41", chapter: 14, nl: "de groepsles", en: "group lesson", example: "Doe je mee met de groepsles?" },
  { id: "14_42", chapter: 14, nl: "de groep", en: "group", example: "We werken in een groep." },
  { id: "14_43", chapter: 14, nl: "kijk mee (meekijken)", en: "watch (along)", example: "Kijk maar even mee." },
  { id: "14_44", chapter: 14, nl: "het rooster", en: "schedule", example: "Het rooster staat online." },
  { id: "14_45", chapter: 14, nl: "bieden aan (aanbieden)", en: "offer", example: "Wij bieden ook lessen aan." },
  { id: "14_46", chapter: 14, nl: "virtuele (virtueel)", en: "virtual", example: "Virtuele lessen." },
  { id: "14_47", chapter: 14, nl: "veranderen", en: "change", example: "Het rooster kan veranderen." },
  { id: "14_48", chapter: 14, nl: "de manier", en: "way / manner", example: "Op die manier." },
  { id: "14_49", chapter: 14, nl: "op die manier", en: "in that way", example: "Op die manier blijft het leuk." },
  { id: "14_50", chapter: 14, nl: "regelmatig", en: "regularly", example: "Kijk regelmatig op de site." },
  { id: "14_51", chapter: 14, nl: "sturen", en: "send", example: "We sturen een e-mail." },
  { id: "14_52", chapter: 14, nl: "de nieuwsbrief", en: "newsletter", example: "Onze maandelijkse nieuwsbrief." },
  { id: "14_53", chapter: 14, nl: "het nieuws", en: "news", example: "Heb je het nieuws gehoord?" },
  { id: "14_54", chapter: 14, nl: "de brief", en: "letter", example: "Ik schrijf een brief." },
  { id: "14_55", chapter: 14, nl: "klinkt (klinken)", en: "sound", example: "Dat klinkt goed." },
  { id: "14_56", chapter: 14, nl: "de sportkleren", en: "sports clothes", example: "Ik doe mijn sportkleren aan." },
  { id: "14_57", chapter: 14, nl: "de kleren", en: "clothes", example: "Mooie kleren." },
  { id: "14_58", chapter: 14, nl: "gaat in (ingaan)", en: "becomes effective", example: "Je abonnement gaat vandaag in." },
  { id: "14_59", chapter: 14, nl: "het buikspierkwartier", en: "abs workout (15 mins)", example: "Het buikspierkwartier begint zo." },
  { id: "14_60", chapter: 14, nl: "meteen", en: "straightaway", example: "Je kunt meteen meedoen." },
  { id: "14_61", chapter: 14, nl: "meedoen", en: "join in", example: "Wil je meedoen?" },
  { id: "14_62", chapter: 14, nl: "aandoen", en: "put on", example: "Ik ga mijn sportkleding aandoen." },
  { id: "14_63", chapter: 14, nl: "maak klaar (klaarmaken)", en: "prepare / get ready", example: "Dan maak ik het pasje klaar." },
  { id: "14_64", chapter: 14, nl: "het pasje", en: "card / pass", example: "Je moet je pasje scannen." },
  { id: "14_65", chapter: 14, nl: "verkopen", en: "sell", example: "Verkopen jullie ook water?" },
  { id: "14_66", chapter: 14, nl: "energiedrankjes", en: "energy drinks", example: "Drankjes voor meer energie." },
  { id: "14_67", chapter: 14, nl: "de energie", en: "energy", example: "Ik heb veel energie." },
  { id: "14_68", chapter: 14, nl: "het drankje", en: "drink", example: "Een koud drankje." },
  { id: "14_69", chapter: 14, nl: "de automaat", en: "vending machine", example: "Het staat in de automaat." },
  { id: "14_70", chapter: 14, nl: "het muntgeld", en: "cash / coins", example: "Hij werkt op muntgeld." },
  { id: "14_71", chapter: 14, nl: "het saldo", en: "balance", example: "Je kunt saldo op je pasje laden." },
  { id: "14_72", chapter: 14, nl: "laden", en: "charge / load", example: "Ik moet mijn telefoon laden." },
  { id: "14_73", chapter: 14, nl: "veel plezier", en: "have fun", example: "Veel plezier met sporten!" },
  { id: "14_74", chapter: 14, nl: "het plezier", en: "fun / pleasure", example: "Met veel plezier." },
  { id: "14_75", chapter: 14, nl: "de spierpijn", en: "muscular pain", example: "Ik heb spierpijn van het sporten." },
  { id: "14_76", chapter: 14, nl: "bang", en: "afraid", example: "Daar ben ik ook bang voor." }
];

export const chapter14Dialogues = {
  "14.1": [
    { speaker: "Verteller", text: "Paul, de vriend van Bas, gaat zich inschrijven bij de sportschool.", translation: "Bas'ın arkadaşı Paul, spor salonuna kaydolmaya gidiyor." },
    { speaker: "Paul", text: "Hallo, weet je misschien of ik me hier kan inschrijven?", translation: "Merhaba, acaba buraya kaydolup olamayacağımı biliyor musunuz?" },
    { speaker: "Vrouw", text: "Ja, daar bij de balie, waar al die mensen in de rij staan. Het is een beetje druk.", translation: "Evet, şuradaki danışmada, bütün o insanların sırada beklediği yerde. Biraz kalabalık (yoğun)." },
    { speaker: "Paul", text: "O ja, dank je wel.", translation: "Ah evet, teşekkür ederim." },
    { speaker: "Verteller", text: "(even later)", translation: "(biraz sonra)" },
    { speaker: "Paul", text: "Hallo, ik wil graag lid worden. Kan dat?", translation: "Merhaba, üye olmak istiyorum. Mümkün mü?" },
    { speaker: "Tjeerd", text: "Natuurlijk. Wat voor abonnement wil je, een jaarabonnement of een maandabonnement?", translation: "Elbette. Nasıl bir abonelik istiyorsun, yıllık abonelik mi yoksa aylık abonelik mi?" },
    { speaker: "Paul", text: "Hmm, kun je me zeggen wat het verschil tussen die abonnementen is?", translation: "Hmm, bana bu abonelikler arasındaki farkın ne olduğunu söyleyebilir misin?" },
    { speaker: "Tjeerd", text: "Een maandabonnement kun je elke maand opzeggen. Je betaalt dan per maand. Bij een jaarabonnement betaal je het hele bedrag in één keer. Met beide abonnementen kun je onbeperkt sporten. We hebben op dit moment een speciale aanbieding: tien procent korting op het abonnement en een gratis T-shirt.", translation: "Aylık aboneliği her ay iptal edebilirsin. O zaman ay bazında ödeme yaparsın. Yıllık abonelikte ise tüm tutarı tek seferde ödersin. Her iki abonelikle de sınırsız spor yapabilirsin. Şu anda özel bir teklifimiz var: Abonelikte yüzde on indirim ve ücretsiz bir tişört." },
    { speaker: "Paul", text: "Leuk! Ik wil graag een jaarabonnement. Ik ga het hele jaar sporten. Dat weet ik zeker. Ik wil mijn conditie verbeteren, mijn spieren versterken en ook gewicht verliezen. Dat zijn mijn doelen. Ik heb vier jaar niet gesport. Ik had het te druk met mijn studie.", translation: "Güzel! Bir yıllık abonelik istiyorum. Bütün yıl spor yapacağım. Bundan eminim. Kondisyonumu geliştirmek, kaslarımı güçlendirmek ve ayrıca kilo vermek istiyorum. Bunlar benim hedeflerim. Dört yıldır spor yapmadım. Okulumla (çalışmalarımla) çok meşguldüm." },
    { speaker: "Tjeerd", text: "Je bent nogal wat van plan.", translation: "Epey bir şey planlıyorsun (Niyetlisin)." },
    { speaker: "Paul", text: "Ja. Over twee maanden ga ik trouwen met Janine. Voor de liefde van mijn leven wil ik een fitte en aantrekkelijke man zijn. En een sixpack hebben, haha. Ik wil graag krachttraining en cardio doen en waarschijnlijk groepslessen volgen, kan dat?", translation: "Evet. İki ay sonra Janine ile evleneceğim. Hayatımın aşkı için fit ve çekici bir adam olmak istiyorum. Ve bir sixpack'e sahip olmak, haha. Ağırlık antrenmanı ve kardiyo yapmak ve muhtemelen grup derslerine katılmak istiyorum, bu mümkün mü?" },
    { speaker: "Tjeerd", text: "Dat kan allemaal. Op onze website vind je een rooster met alle groepslessen. We bieden ook virtuele lessen aan. We veranderen het rooster elke drie maanden. Op die manier blijft sporten leuk. Volgende week zal het nieuwe rooster op de website staan. Kijk dus regelmatig op onze site. We sturen je ook onze nieuwsbrief.", translation: "Hepsi mümkün. Web sitemizde tüm grup derslerinin olduğu bir program bulabilirsin. Sanal dersler de sunuyoruz. Programı her üç ayda bir değiştiriyoruz. Bu şekilde spor yapmak eğlenceli kalıyor. Gelecek hafta yeni program web sitesinde olacak (olacaktır). Bu yüzden sitemize düzenli olarak bak. Sana bültenimizi de göndereceğiz." },
    { speaker: "Paul", text: "Dat klinkt allemaal goed.", translation: "Kulağa hep iyi geliyor." },
    { speaker: "Tjeerd", text: "Heb je je sportkleren bij je? Je abonnement gaat vandaag in. Over 20 minuten, om 16.00 uur, begint het buikspierkwartier. Je kunt meteen meedoen.", translation: "Spor kıyafetlerin yanında mı? Aboneliğin bugün başlıyor (yürürlüğe giriyor). 20 dakika içinde, saat 16.00'da, karın kası çeyreği (15 dakikalık idman) başlıyor. Hemen katılabilirsin." },
    { speaker: "Paul", text: "Fijn! Dan ga ik direct mijn sportkleding aandoen.", translation: "Harika! O zaman hemen spor kıyafetlerimi giymeye gideceğim." },
    { speaker: "Tjeerd", text: "Dan maak ik intussen je pasje klaar. Je kunt het straks ophalen.", translation: "O halde ben de bu arada senin kartını hazırlarım. Onu birazdan alabilirsin." },
    { speaker: "Paul", text: "Verkopen jullie ook energiedrankjes?", translation: "Siz enerji içecekleri de satıyor musunuz?" },
    { speaker: "Tjeerd", text: "Ja, daar in de automaat. Hij werkt op muntgeld en met je pasje. Je kunt saldo op je pasje laden. Veel plezier.", translation: "Evet, şuradaki otomat makinesinde. Bozuk parayla ve senin kartınla çalışıyor. Kartına bakiye yükleyebilirsin. İyi eğlenceler." },
    { speaker: "Verteller", text: "(twee uur later)", translation: "(iki saat sonra)" },
    { speaker: "Tjeerd", text: "Je hebt lang gesport. Je zult het morgen wel voelen.", translation: "Uzun süre spor yaptın. Yarın bunu hissedeceksin (acı çekeceksin)." },
    { speaker: "Paul", text: "Wat bedoel je?", translation: "Ne demek istiyorsun?" },
    { speaker: "Tjeerd", text: "Je zult morgen wel spierpijn hebben. Je hebt zo'n tijd niet gesport.", translation: "Muhtemelen yarın kas ağrısı (hamlık) çekeceksin. O kadar zamandır spor yapmadın." },
    { speaker: "Paul", text: "Ja, daar ben ik ook bang voor.", translation: "Evet, ben de ondan korkuyorum." }
  ]
};

export const chapter14Sections = [
  {
    id: "14.1",
    chapter: 14,
    title: "14.1 Dialoog: In de sportschool",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: In de sportschool</h3>
          <p>Paul, spor salonuna (sportschool) üye olmaya (zich inschrijven) karar verir. Dört yıldır spor yapmamıştır ve düğünü için fit olmak istemektedir.</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Je abonnement gaat vandaag in.</strong> (Aboneliğiniz bugün başlıyor/geçerli oluyor).</li>
            <li><strong>Je zult het morgen wel voelen.</strong> (Yarın muhtemelen hissedeceksin/ağrın olacak).</li>
            <li><strong>Zich inschrijven:</strong> Kaydolmak (Dönüşlü bir fiildir, <em>Ik schrijf me in</em> şeklinde çekimlenir).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Geef een reactie op de vragen over de tekst.",
        isExtra: false,
        questions: [
          { id: "14.1_opd1_1", type: "multiple_choice", question: "Waar is Paul?", options: ["In de kantine", "In de sportschool", "In het ziekenhuis"], correctAnswer: "In de sportschool" },
          { id: "14.1_opd1_2", type: "multiple_choice", question: "Waar kan hij zich inschrijven?", options: ["Bij de balie", "Bij de automaat", "In het zwembad"], correctAnswer: "Bij de balie" },
          { id: "14.1_opd1_3", type: "multiple_choice", question: "Wat is het verschil tussen een jaarabonnement en een maandabonnement?", options: ["Een maandabonnement kun je elke maand opzeggen, bij een jaarabonnement betaal je het in één keer.", "Een maandabonnement is gratis.", "Een jaarabonnement heeft geen groepslessen."], correctAnswer: "Een maandabonnement kun je elke maand opzeggen, bij een jaarabonnement betaal je het in één keer." },
          { id: "14.1_opd1_4", type: "multiple_choice", question: "Welke aanbieding heeft de sportschool?", options: ["Tien procent korting op het abonnement en een gratis T-shirt.", "Een gratis maandabonnement.", "Gratis energiedrankjes."], correctAnswer: "Tien procent korting op het abonnement en een gratis T-shirt." },
          { id: "14.1_opd1_5", type: "multiple_choice", question: "Wat wil Paul allemaal in de sportschool doen? (Zijn doelen)", options: ["Alleen een beetje fietsen.", "Conditie verbeteren, spieren versterken en gewicht verliezen.", "Alleen energiedrankjes kopen."], correctAnswer: "Conditie verbeteren, spieren versterken en gewicht verliezen." },
          { id: "14.1_opd1_6", type: "multiple_choice", question: "Wanneer gaat het abonnement van Paul in?", options: ["Volgende week", "Over twee maanden", "Vandaag"], correctAnswer: "Vandaag" },
          { id: "14.1_opd1_7", type: "multiple_choice", question: "Hoelang heeft Paul niet gesport?", options: ["Vier jaar", "Vier maanden", "Twee weken"], correctAnswer: "Vier jaar" }
        ]
      }
    ]
  },
  {
    id: "14.2",
    chapter: 14,
    title: "14.2 Woordenlijst & Sporten",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst & Sporten</h3>
          <p>Hollandacada spor isimleri ve sporla ilgili eylemler (spieren versterken, gewicht verliezen vb.) bu ünitenin temelini oluşturur. Lütfen sağ üstteki "Flashcards" sekmesinden kelimeleri pratik yapın!</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-slate-200">
            <div>
              <ul className="space-y-1">
                <li><strong>wielrennen:</strong> bisiklet sporu</li>
                <li><strong>hardlopen:</strong> koşu</li>
                <li><strong>zwemmen:</strong> yüzme</li>
                <li><strong>voetbal:</strong> futbol</li>
                <li><strong>schoonspringen:</strong> kule atlayışı</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><strong>gewichtheffen:</strong> halter</li>
                <li><strong>boogschieten:</strong> okçuluk</li>
                <li><strong>schermen:</strong> eskrim</li>
                <li><strong>turnen:</strong> jimnastik</li>
                <li><strong>honkbal:</strong> beyzbol</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2 & 3: Praten over sporten en Sporten raden.",
        isExtra: false,
        questions: [
          { id: "14.2_opd2_1", type: "multiple_choice", question: "Welke sport speel je met een bal en voeten op een groot veld?", options: ["voetbal", "honkbal", "tennis"], correctAnswer: "voetbal" },
          { id: "14.2_opd2_2", type: "multiple_choice", question: "Bij welke sport gebruik je een zwaar gewicht (heavy weight)?", options: ["gewichtheffen", "zwemmen", "hardlopen"], correctAnswer: "gewichtheffen" },
          { id: "14.2_opd2_3", type: "multiple_choice", question: "Welke sport doe je in het water?", options: ["schermen", "boogschieten", "zwemmen"], correctAnswer: "zwemmen" },
          { id: "14.2_opd2_4", type: "fill_in", question: "Vertaal: 'Ik wil kilo's afvallen.' -> Ik wil gewicht ________.", correctAnswer: "verliezen" },
          ...generateSmartQuestions(14, "Woordenlijst", 5, chapter14Vocab)
        ]
      }
    ]
  },
  {
    id: "14.3",
    chapter: 14,
    title: "14.3 Informatie vragen (Dolaylı Sorular)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>❓ Indirecte Vragen (Dolaylı Sorular)</h3>
          <p className="text-sm text-slate-300">Hollandacada birine doğrudan soru sormak yerine, daha kibar olmak için <strong>"Weet u of..."</strong> (Biliyor musunuz) veya <strong>"Kunt u me zeggen waar..."</strong> (Bana söyleyebilir misiniz) gibi girişler (inleidende zinnen) kullanırız. Bu girişleri kullandığımızda, asıl sorumuz bir <strong>yan cümleye (bijzin)</strong> dönüşür!</p>
          
          <div className="bg-cyan-900/30 p-4 rounded-xl mt-4 border border-cyan-500/40">
            <h4 className="font-bold text-cyan-300 mb-2">🚨 ALTIN KURAL: Fiili Sona At!</h4>
            <p className="text-sm text-cyan-100">Bir cümleyi "Weet je..." veya "Kun je me zeggen..." ile başlattığınızda, cümlenin asıl fiili (veya fiilleri) <strong>EN SONA GİTMEK ZORUNDADIR!</strong></p>
            <ul className="text-sm text-white mt-3 list-disc pl-5 space-y-3">
              <li>
                <strong>Direct:</strong> Waar <span className="text-rose-400 font-bold">is</span> de sportschool? <em>(Fiil 2. sırada)</em><br/>
                <strong>Indirect:</strong> Kunt u me zeggen waar de sportschool <span className="text-rose-400 font-bold">is</span>? <em>(Fiil en sonda!)</em>
              </li>
              <li>
                <strong>Direct:</strong> Wat <span className="text-rose-400 font-bold">is</span> het verschil? <br/>
                <strong>Indirect:</strong> Kun je me zeggen wat het verschil <span className="text-rose-400 font-bold">is</span>?
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900/30 p-4 rounded-xl mt-4 border border-emerald-500/40">
            <h4 className="font-bold text-emerald-300 mb-2">💡 "OF" Kullanımı (Whether/If)</h4>
            <p className="text-sm text-emerald-100">Eğer soruda 'Waar, Wie, Wat' gibi bir soru kelimesi YOKSA, yani bir "Evet/Hayır" sorusuysa, yan cümleyi bağlamak için <strong>'of'</strong> (olup olmadığı) kelimesini kullanırız.</p>
            <ul className="text-sm text-white mt-2 list-disc pl-5">
              <li><strong>Direct:</strong> Kan ik me hier inschrijven? (Evet/Hayır sorusu)<br/>
              <strong>Indirect:</strong> Weet je misschien <strong className="text-emerald-400">of</strong> ik me hier in kan schrijven?</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 4: Formuleer de vraag op een andere manier. (Let op: Werkwoord naar achteren!)",
        isExtra: false,
        questions: [
          { id: "14.3_opd4_1", type: "fill_in", question: "Waar is de balie? -> Kun je me zeggen waar de balie ________?", correctAnswer: "is" },
          { id: "14.3_opd4_2", type: "fill_in", question: "Is hier een wc in de buurt? -> Weet u ________ hier een wc in de buurt is?", correctAnswer: "of" },
          { id: "14.3_opd4_3", type: "fill_in", question: "Waar ligt Dalfsen? -> Kunt u me zeggen waar Dalfsen ________?", correctAnswer: "ligt" },
          { id: "14.3_opd4_4", type: "fill_in", question: "Staat het rooster op de website? -> Weet je misschien ________ het rooster op de website staat?", correctAnswer: "of" },
          { id: "14.3_opd4_5", type: "fill_in", question: "Wanneer is het pasje klaar? -> Kunt u me zeggen wanneer het pasje klaar ________?", correctAnswer: "is" },
          { id: "14.3_opd4_6", type: "fill_in", question: "Werkt de automaat op muntgeld? -> Weet u misschien ________ de automaat op muntgeld werkt?", correctAnswer: "of" },
          { id: "14.3_opd4_7", type: "fill_in", question: "Hoelang duurt het buikspierkwartier? -> Kunt u me zeggen hoelang het buikspierkwartier ________?", correctAnswer: "duurt" },
          { id: "14.3_opd4_8", type: "fill_in", question: "Is deze sportschool duur? -> Weet je ________ deze sportschool duur is?", correctAnswer: "of" },
          { id: "14.3_opd4_9", type: "fill_in", question: "Waar zijn de virtuele lessen? -> Kunt u me zeggen waar de virtuele lessen ________?", correctAnswer: "zijn" },
          { id: "14.3_opd4_10", type: "fill_in", question: "Kan ik met de bus naar Den Haag? -> Weet u ________ ik met de bus naar Den Haag kan?", correctAnswer: "of" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Indirecte Vragen Test",
        isExtra: true,
        questions: [
          { id: "14.3_smart_1", type: "multiple_choice", question: "Wat is de juiste indirecte vraag voor: 'Hoe laat is het?'", options: ["Kunt u me zeggen hoe laat is het?", "Kunt u me zeggen hoe laat het is?", "Kunt u me zeggen is het hoe laat?"], correctAnswer: "Kunt u me zeggen hoe laat het is?" },
          { id: "14.3_smart_2", type: "multiple_choice", question: "Wat is de juiste indirecte vraag voor: 'Heb je een auto?'", options: ["Weet u of je een auto heb?", "Weet u of je een auto hebt?", "Weet u of hebt je een auto?"], correctAnswer: "Weet u of je een auto hebt?" }
        ]
      }
    ]
  },
  {
    id: "14.4",
    chapter: 14,
    title: "14.4 Zullen (3) - Waarschijnlijkheid (İhtimal)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🤔 Zullen + wel (Muhtemelen / Galiba)</h3>
          <p className="text-sm text-slate-300">"Zullen" fiili Hollandacada 3 farklı anlamda kullanılır:</p>
          <ol className="text-sm text-slate-200 mt-2 list-decimal pl-5 space-y-1">
            <li><strong>Teklif (Voorstel):</strong> <em>Zullen we afspreken?</em> (Buluşalım mı?)</li>
            <li><strong>Söz Verme (Belofte):</strong> <em>Ik zal de bloemen afsnijden.</em> (Çiçekleri keseceğim/Söz veriyorum).</li>
            <li className="text-emerald-300 font-bold"><strong>İhtimal (Waarschijnlijkheid):</strong> "zullen" fiilini "wel" kelimesiyle birlikte kullandığınızda cümle "muhtemelen/galiba" anlamı kazanır!</li>
          </ol>

          <div className="bg-emerald-900/30 p-3 rounded-lg mt-4 border border-emerald-500/40">
            <ul className="text-sm text-white list-disc pl-5">
              <li>Je <strong>zult</strong> het morgen <strong>wel</strong> voelen. (Yarın muhtemelen hissedeceksin).</li>
              <li>Je <strong>zult</strong> morgen <strong>wel</strong> spierpijn hebben. (Yarın muhtemelen kas ağrın olacak).</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Maak deze zinnen bijna zeker. Gebruik zal / zullen + wel.",
        isExtra: false,
        questions: [
          { id: "14.4_opd7_1", type: "multiple_choice", question: "Een jaarabonnement is goedkoper. -> Een jaarabonnement _____ wel goedkoper _____.", options: ["zal / zijn", "zullen / zijn", "zal / is"], correctAnswer: "zal / zijn" },
          { id: "14.4_opd7_2", type: "multiple_choice", question: "Je conditie verbetert snel. -> Je conditie _____ wel snel _____.", options: ["zullen / verbeteren", "zal / verbeteren"], correctAnswer: "zal / verbeteren" },
          { id: "14.4_opd7_3", type: "multiple_choice", question: "Ze hebben ook groepslessen. -> Ze _____ wel ook groepslessen _____.", options: ["zullen / hebben", "zal / hebben"], correctAnswer: "zullen / hebben" },
          { id: "14.4_opd7_4", type: "multiple_choice", question: "Dat vindt ze een goed idee. -> Dat _____ ze wel een goed idee _____.", options: ["zal / vinden", "zullen / vinden"], correctAnswer: "zal / vinden" },
          { id: "14.4_opd7_7", type: "fill_in", question: "Neem de bus van half acht. Dan ________ je wel op tijd ________ (op tijd komen).", correctAnswer: "zul, komen" },
          { id: "14.4_opd7_8", type: "fill_in", question: "Karen heeft een nieuwe baan. Ze ________ wel blij ________ (blij zijn).", correctAnswer: "zal, zijn" },
          { id: "14.4_opd7_9", type: "fill_in", question: "Heb je vijf kilometer gelopen? Je ________ wel dorst ________ (dorst hebben).", correctAnswer: "zult, hebben" },
          { id: "14.4_opd7_10", type: "fill_in", question: "John en Marc hebben in Spanje gewoond. Ze ________ wel Spaans ________ (Spaans spreken).", correctAnswer: "zullen, spreken" }
        ]
      }
    ]
  },
  {
    id: "14.5",
    chapter: 14,
    title: "14.5 Futurum (Gelecek Zaman)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>⏳ Futurum (Gelecek Zamanı İfade Etmenin 3 Yolu)</h3>
          <p className="text-sm text-slate-300">Hollandacada gelecek zamanı ifade etmek İngilizceden ("will") daha farklıdır. Hollandalılar "zullen" kelimesini gelecek zaman için nadiren kullanırlar, bunun yerine şu 3 yöntemi tercih ederler:</p>
          
          <ul className="text-sm text-slate-200 mt-4 space-y-3 list-decimal pl-5">
            <li><strong>Presens + Zaman Zarfı (En yaygın!):</strong> Şimdiki zamanı bir gelecek zaman kelimesiyle (morgen, over 20 minuten) kullanmak.<br/>
            <em>Over 20 minuten <strong>begint</strong> het buikspierkwartier. (20 dakika sonra başlıyor/başlayacak).</em></li>
            <li><strong>Gaan + Infinitief (Niyet):</strong> İngilizcedeki "going to" yapısı. Bir plan veya niyet varsa.<br/>
            <em>Over twee maanden <strong>ga</strong> ik met Janine <strong>trouwen</strong>. (İki ay sonra Janine ile evleneceğim).</em></li>
            <li><strong>Zullen + Infinitief (Resmi/Tahmin):</strong> Formal durumlarda, tahminlerde veya başkası adına konuşurken.<br/>
            <em>Volgende week <strong>zal</strong> het nieuwe rooster op de website <strong>staan</strong>.</em></li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 8: Het plan van Sander voor morgenmiddag. Beantwoord de vragen.",
        isExtra: false,
        questions: [
          { id: "14.5_opd8_1", type: "multiple_choice", question: "Wat doet Sander morgenmiddag om 14.00 uur? (Plan: studeren in de bibliotheek)", options: ["Morgenmiddag gaat hij in de bibliotheek studeren.", "Morgenmiddag studeerde hij.", "Hij studeert gisteren."], correctAnswer: "Morgenmiddag gaat hij in de bibliotheek studeren." },
          { id: "14.5_opd8_2", type: "multiple_choice", question: "Wat is je eigen plan? Wat doe je na de les? (Kies een logisch futurum antwoord)", options: ["Ik ben naar huis gegaan.", "Ik ga naar huis / Ik ga boodschappen doen.", "Ik slaap gisteren."], correctAnswer: "Ik ga naar huis / Ik ga boodschappen doen." }
        ]
      }
    ]
  },
  {
    id: "14.6",
    chapter: 14,
    title: "14.6 Tekst: Waarom ga ik (niet) naar de sportschool?",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Waarom ga ik (niet)?</h3>
          <p className="text-sm text-slate-300">Altı farklı kişinin spor salonuna neden gittiklerini veya gitmediklerini okuyoruz.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
            <li><strong>Arthur (35):</strong> Evliliği için kilo verdi. Haftada 3 kez gidiyor.</li>
            <li><strong>Linda (22):</strong> Öğrenci. Yüksek tempoda çalışıyor. Spor sayesinde kendini iyi hissediyor.</li>
            <li><strong>Mike (23):</strong> Spor salonundaki atmosferden nefret ediyor. Dışarıda futbol, bisiklet ve köpek gezdirme yapıyor.</li>
            <li><strong>Ruud (19):</strong> Arkadaşlarıyla gidiyor. Futbol da oynuyor.</li>
            <li><strong>Nina (33):</strong> Asla spor salonuna gitmedi. Dışarıda koşmayı ve yürümeyi seviyor.</li>
            <li><strong>Babette (27):</strong> Eskiden hep diyetteydi, işe yaramadı. Bir personal trainer (özel antrenör) tuttu ve hedefine ulaştı.</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 11: Welke zin past bij Arthur, Linda, Mike, Ruud, Nina en Babette?",
        isExtra: false,
        questions: [
          { id: "14.6_opd11_1", type: "multiple_choice", question: "1. Ik sport graag samen met mijn vrienden.", options: ["Arthur", "Ruud", "Nina"], correctAnswer: "Ruud" },
          { id: "14.6_opd11_2", type: "multiple_choice", question: "2. Ik haat sporten (de sfeer in een sportschool).", options: ["Mike", "Linda", "Arthur"], correctAnswer: "Mike" },
          { id: "14.6_opd11_3", type: "multiple_choice", question: "3. Ik blijf gemotiveerd door mijn personal trainer.", options: ["Babette", "Nina", "Ruud"], correctAnswer: "Babette" },
          { id: "14.6_opd11_4", type: "multiple_choice", question: "4. Door het sporten voel ik me goed met mijn studie.", options: ["Linda", "Babette", "Mike"], correctAnswer: "Linda" },
          { id: "14.6_opd11_5", type: "multiple_choice", question: "5. Ik houd van buiten sporten (hardlopen, wandelen, nooit in een sportschool).", options: ["Arthur", "Nina", "Ruud"], correctAnswer: "Nina" },
          { id: "14.6_opd11_6", type: "multiple_choice", question: "6. Ik ga drie keer per week naar de sportschool.", options: ["Arthur", "Mike", "Nina"], correctAnswer: "Arthur" }
        ]
      }
    ]
  },
  {
    id: "14.7",
    chapter: 14,
    title: "14.7 Uitspraak: oe – u – uu",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: oe - u - uu</h3>
          <p className="text-sm text-slate-300">Hollandacada sesli harfler arasındaki farklar çok kritiktir:</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>oe</strong> (Türkçedeki net 'U' sesi): groen, bedoelen, moeder, roepen.</li>
            <li><strong>u</strong> (Türkçedeki 'Ö' ile 'Ü' arası kısa yutulan bir ses): bus, nummer, druk.</li>
            <li><strong>uu</strong> (Türkçedeki uzun 'Ü' sesi): buurt, huren, muur, sturen.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Sport in Nederland</h3>
          <p className="text-sm text-slate-300">Hollanda'da 18-50 yaş arası insanların spor istatistikleri şöyledir:</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Fitness (Sportschool):</strong> 25%</li>
            <li><strong>Joggen (Hardlopen):</strong> 17%</li>
            <li><strong>Voetbal:</strong> 8%</li>
            <li><strong>Overig (Diğer):</strong> 50%</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Uitspraak Test)",
        isExtra: true,
        questions: [
          { id: "14.7_smart_1", type: "multiple_choice", question: "Welk woord heeft een 'oe' klank (Türkçedeki 'U' gibi okunur)?", options: ["bus", "buurt", "groen"], correctAnswer: "groen" },
          { id: "14.7_smart_2", type: "multiple_choice", question: "Welke sport doen de meeste Nederlanders (tussen 18-50 jaar) volgens de grafiek?", options: ["Voetbal", "Fitness", "Joggen"], correctAnswer: "Fitness" }
        ]
      }
    ]
  }
];