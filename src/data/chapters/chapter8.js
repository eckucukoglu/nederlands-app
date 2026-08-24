// src/data/chapters/chapter8.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter8Vocab = [
  { id: "8_1", chapter: 8, nl: "de makelaar", en: "real estate agent", example: "We gaan naar de makelaar." },
  { id: "8_2", chapter: 8, nl: "de woonruimte", en: "accommodation / somewhere to live", example: "Ik zoek woonruimte in de stad." },
  { id: "8_3", chapter: 8, nl: "de stad", en: "city / town", example: "Woon jij in de stad?" },
  { id: "8_4", chapter: 8, nl: "mezelf", en: "myself", example: "Voor mezelf en mijn vriend." },
  { id: "8_5", chapter: 8, nl: "de vriend", en: "(boy)friend", example: "Hij is mijn vriend." },
  { id: "8_6", chapter: 8, nl: "samenwonen", en: "live together", example: "Wij gaan samenwonen." },
  { id: "8_7", chapter: 8, nl: "bepaald", en: "certain / specific", example: "Zoekt u een bepaald type woning?" },
  { id: "8_8", chapter: 8, nl: "de woning", en: "house / dwelling", example: "Een mooie woning." },
  { id: "8_9", chapter: 8, nl: "de tuin", en: "garden", example: "Een huis met een tuin." },
  { id: "8_10", chapter: 8, nl: "de bovenwoning", en: "upstairs flat", example: "Zij huurt een bovenwoning." },
  { id: "8_11", chapter: 8, nl: "het appartement", en: "apartment", example: "Een appartement in het centrum." },
  { id: "8_12", chapter: 8, nl: "mogelijkheden (de mogelijkheid)", en: "possibilities / options", example: "Wat zijn de mogelijkheden?" },
  { id: "8_13", chapter: 8, nl: "zie (zien)", en: "see", example: "Ik zie uw formulier." },
  { id: "8_14", chapter: 8, nl: "het formulier", en: "form", example: "U moet dit formulier invullen." },
  { id: "8_15", chapter: 8, nl: "maximale (maximaal)", en: "maximum", example: "De maximale huurprijs is 1000 euro." },
  { id: "8_16", chapter: 8, nl: "de huurprijs", en: "rent (price)", example: "Wat is de huurprijs?" },
  { id: "8_17", chapter: 8, nl: "huren", en: "rent", example: "Wij willen een huis huren." },
  { id: "8_18", chapter: 8, nl: "laten zien", en: "show", example: "Ik zal u een paar woningen laten zien." },
  { id: "8_19", chapter: 8, nl: "de computer", en: "computer", example: "Op de computer." },
  { id: "8_20", chapter: 8, nl: "derde", en: "third", example: "Op de derde verdieping." },
  { id: "8_21", chapter: 8, nl: "de verdieping", en: "floor / storey", example: "Wij wonen op de eerste verdieping." },
  { id: "8_22", chapter: 8, nl: "oude (oud)", en: "old", example: "In een oude buurt." },
  { id: "8_23", chapter: 8, nl: "de buurt", en: "neighbourhood", example: "Het is een gezellige buurt." },
  { id: "8_24", chapter: 8, nl: "ver", en: "far", example: "Niet ver van het centrum." },
  { id: "8_25", chapter: 8, nl: "het centrum", en: "city centre", example: "Ik woon in het centrum." },
  { id: "8_26", chapter: 8, nl: "dicht bij", en: "close to", example: "Het huis is dicht bij het park." },
  { id: "8_27", chapter: 8, nl: "het park", en: "park", example: "Ik wandel vaak in het park." },
  { id: "8_28", chapter: 8, nl: "de woonkamer", en: "living room", example: "Een grote woonkamer." },
  { id: "8_29", chapter: 8, nl: "de vierkante meter", en: "square metres", example: "De kamer is 35 vierkante meter." },
  { id: "8_30", chapter: 8, nl: "vierkante (vierkant)", en: "square", example: "Een vierkante tafel." },
  { id: "8_31", chapter: 8, nl: "de meter", en: "metre", example: "Tien meter lang." },
  { id: "8_32", chapter: 8, nl: "open", en: "open", example: "Een open keuken." },
  { id: "8_33", chapter: 8, nl: "de keuken", en: "kitchen", example: "Wij koken in de keuken." },
  { id: "8_34", chapter: 8, nl: "ruime (ruim)", en: "spacious", example: "Twee ruime slaapkamers." },
  { id: "8_35", chapter: 8, nl: "slaapkamers (de slaapkamer)", en: "bedroom", example: "Het huis heeft drie slaapkamers." },
  { id: "8_36", chapter: 8, nl: "het balkon", en: "balcony", example: "Een klein balkon op het westen." },
  { id: "8_37", chapter: 8, nl: "het westen", en: "west", example: "Op het westen." },
  { id: "8_38", chapter: 8, nl: "de gang", en: "passage(way)", example: "De wc is in de gang." },
  { id: "8_39", chapter: 8, nl: "de wc", en: "toilet", example: "Waar is de wc?" },
  { id: "8_40", chapter: 8, nl: "eenvoudige (eenvoudig)", en: "simple", example: "Een eenvoudige badkamer." },
  { id: "8_41", chapter: 8, nl: "de badkamer", en: "bathroom", example: "De badkamer is klein." },
  { id: "8_42", chapter: 8, nl: "de douche", en: "shower", example: "Er is alleen een douche." },
  { id: "8_43", chapter: 8, nl: "hoeven", en: "need", example: "Wij hoeven geen bad." },
  { id: "8_44", chapter: 8, nl: "het bad", en: "bath", example: "Hebben jullie een bad?" },
  { id: "8_45", chapter: 8, nl: "gebruiken", en: "use", example: "Dat gebruiken we toch niet." },
  { id: "8_46", chapter: 8, nl: "geschikte (geschikt)", en: "suitable", example: "Hebt u nog meer geschikte huizen?" },
  { id: "8_47", chapter: 8, nl: "huizen (het huis)", en: "houses", example: "Er staan veel huizen in deze straat." },
  { id: "8_48", chapter: 8, nl: "te huur", en: "to let", example: "Staat dit huis te huur?" },
  { id: "8_49", chapter: 8, nl: "huur (huren)", en: "rent", example: "Ik huur een kamer." },
  { id: "8_50", chapter: 8, nl: "het huisje (het huis)", en: "small house", example: "Dit huisje is erg leuk." },
  { id: "8_51", chapter: 8, nl: "want", en: "because", example: "Het is duurder want het is gemeubileerd." },
  { id: "8_52", chapter: 8, nl: "verhuren", en: "to let out", example: "Wij verhuren dit huis." },
  { id: "8_53", chapter: 8, nl: "gemeubileerd", en: "furnished", example: "Een gemeubileerde flat." },
  { id: "8_54", chapter: 8, nl: "kasten (de kast)", en: "cupboards / closets", example: "Met veel kasten." },
  { id: "8_55", chapter: 8, nl: "bedden (het bed)", en: "beds", example: "Twee bedden." },
  { id: "8_56", chapter: 8, nl: "stoelen (de stoel)", en: "chairs", example: "Een tafel met vier stoelen." },
  { id: "8_57", chapter: 8, nl: "het bureau", en: "desk", example: "Er is ook een bureau." },
  { id: "8_58", chapter: 8, nl: "de bank", en: "sofa / couch", example: "We zitten op de bank." },
  { id: "8_59", chapter: 8, nl: "het voordeel", en: "advantage", example: "Dat is wel een voordeel." },
  { id: "8_60", chapter: 8, nl: "niets", en: "nothing", example: "Want we hebben nog niets." },
  { id: "8_61", chapter: 8, nl: "zonnige (zonnig)", en: "sunny", example: "Een mooie, zonnige kamer." },
  { id: "8_62", chapter: 8, nl: "de kamer", en: "living room / room", example: "Een kamer zoeken." },
  { id: "8_63", chapter: 8, nl: "benedenwoning", en: "ground-floor flat", example: "Is het een benedenwoning?" },
  { id: "8_64", chapter: 8, nl: "dat lijkt me fantastisch", en: "that sounds great", example: "Met een tuin? Dat lijkt me fantastisch!" },
  { id: "8_65", chapter: 8, nl: "waar", en: "true", example: "Dat is waar." },
  { id: "8_66", chapter: 8, nl: "overleggen", en: "discuss", example: "Ik wil dit even met mijn vriend overleggen." },
  { id: "8_67", chapter: 8, nl: "bel (bellen)", en: "phone / call", example: "Ik bel u." },
  { id: "8_68", chapter: 8, nl: "zo snel mogelijk", en: "as soon as possible", example: "Ik bel u zo snel mogelijk." },
  { id: "8_69", chapter: 8, nl: "nieuwe (nieuw)", en: "new", example: "Voor een nieuwe afspraak." }
];

export const chapter8Dialogues = {
  "8.1": [
    { speaker: "Verteller", text: "De verkoopster, Patricia, is bij een makelaar om woonruimte te zoeken.", translation: "Satış danışmanı Patricia, ev/yaşam alanı aramak için bir emlakçıdadır." },
    { speaker: "Makelaar", text: "Dus u zoekt woonruimte in de stad. Voor hoeveel personen?", translation: "Demek şehirde bir ev/yaşam alanı arıyorsunuz. Kaç kişi için?" },
    { speaker: "Patricia", text: "Twee. Voor mezelf en mijn vriend. Wij gaan samenwonen.", translation: "İki. Kendim ve erkek arkadaşım için. Biz birlikte yaşayacağız." },
    { speaker: "Makelaar", text: "Zoekt u een bepaald type woning? Met een tuin? Of een bovenwoning? Of een appartement?", translation: "Belirli bir ev tipi mi arıyorsunuz? Bahçeli mi? Yoksa üst kat daire mi? Ya da bir apartman dairesi mi?" },
    { speaker: "Patricia", text: "Ik heb geen idee. Wat zijn de mogelijkheden?", translation: "Hiçbir fikrim yok. Seçenekler nelerdir?" },
    { speaker: "Makelaar", text: "Ik zie op uw formulier de maximale huurprijs. Ik zal u een paar woningen laten zien op de computer. Dit is een leuke bovenwoning op de derde verdieping, in een oude buurt, niet ver van het centrum. Het is dicht bij het park. De woning heeft een woonkamer van 35 vierkante meter, een open keuken, twee ruime slaapkamers en een balkon op het westen. In de gang is de wc en een eenvoudige badkamer, met alleen een douche.", translation: "Formunuzda maksimum kira bedelini görüyorum. Size bilgisayarda birkaç ev göstereceğim. Bu, üçüncü katta, eski bir mahallede, merkeze uzak olmayan güzel bir üst kat dairesi. Parka yakın. Evin 35 metrekarelik bir oturma odası, açık mutfağı, iki geniş yatak odası ve batıya bakan bir balkonu var. Koridorda tuvalet ve sadece duşu olan basit bir banyo var." },
    { speaker: "Patricia", text: "O, wij hoeven geen bad. Dat gebruiken we toch niet. Hebt u nog meer geschikte huizen te huur?", translation: "Oh, bizim küvete ihtiyacımız yok. Onu zaten kullanmıyoruz. Kiralık başka uygun evleriniz var mı?" },
    { speaker: "Makelaar", text: "Ja, dit huisje is erg leuk voor twee personen. Het is wat duurder want we verhuren dit gemeubileerd.", translation: "Evet, bu küçük ev iki kişi için çok güzel. Biraz daha pahalı çünkü bunu mobilyalı (eşyalı) olarak kiralıyoruz." },
    { speaker: "Patricia", text: "O, dus met kasten, bedden, een tafel en stoelen?", translation: "Oh, yani dolaplar, yataklar, bir masa ve sandalyelerle birlikte mi?" },
    { speaker: "Makelaar", text: "Ja, en een bureau en een bank.", translation: "Evet, ayrıca bir çalışma masası ve bir kanepe/koltuk." },
    { speaker: "Patricia", text: "Dat is wel een voordeel want we hebben nog niets. En het heeft een mooie, zonnige kamer! Is het een benedenwoning? Met een tuin? Dat lijkt me fantastisch! Ja, het is duurder, dat is waar. Ik wil dit even met mijn vriend overleggen. Ik bel u zo snel mogelijk voor een nieuwe afspraak.", translation: "Bu bir avantaj çünkü henüz hiçbir şeyimiz yok. Ve güzel, güneşli bir odası var! Bu bir zemin kat dairesi mi? Bahçeli mi? Bu bana harika (fantastik) görünüyor! Evet, daha pahalı, bu doğru. Bunu erkek arkadaşımla biraz görüşmek (tartışmak) istiyorum. Yeni bir randevu için sizi en kısa sürede arayacağım." }
  ]
};

export const chapter8Sections = [
  {
    id: "8.1",
    chapter: 8,
    title: "8.1 Dialoog: Bij de makelaar",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Bij de makelaar (Emlakçıda)</h3>
          <p>Patricia, erkek arkadaşıyla birlikte yaşamak (samenwonen) için kiralık bir ev aramaktadır. Emlakçı (makelaar) ona iki seçenek sunar. Ev ararken kullanılan terimlere dikkat edin:</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
            <li><strong>Te huur:</strong> Kiralık</li>
            <li><strong>Gemeubileerd:</strong> Mobilyalı (Eşyalı)</li>
            <li><strong>Zo snel mogelijk:</strong> En kısa sürede (As soon as possible)</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Geef een reactie op de vragen over de dialoog.",
        isExtra: false,
        questions: [
          { id: "8.1_opd1_1", type: "multiple_choice", question: "Waar is Patricia? Waarom?", options: ["In de supermarkt om eten te kopen.", "Bij een makelaar, ze zoekt woonruimte.", "In het ziekenhuis."], correctAnswer: "Bij een makelaar, ze zoekt woonruimte." },
          { id: "8.1_opd1_2", type: "multiple_choice", question: "Zoekt Patricia een bepaald type woning?", options: ["Ja, een villa.", "Nee, ze heeft geen idee.", "Ja, een boerderij."], correctAnswer: "Nee, ze heeft geen idee." },
          { id: "8.1_opd1_3", type: "multiple_choice", question: "Is de eerste bovenwoning in het centrum?", options: ["Ja, in het centrum.", "Nee, het is ver van het centrum.", "Niet ver van het centrum."], correctAnswer: "Niet ver van het centrum." },
          { id: "8.1_opd1_4", type: "multiple_choice", question: "Hoeveel kamers heeft de eerste bovenwoning?", options: ["Drie (woonkamer + 2 slaapkamers)", "Twee (woonkamer + 1 slaapkamer)", "Vier"], correctAnswer: "Drie (woonkamer + 2 slaapkamers)" },
          { id: "8.1_opd1_5", type: "multiple_choice", question: "Wat zijn de verschillen tussen de bovenwoning en de benedenwoning?", options: ["Bovenwoning: ongemeubileerd, balkon. Benedenwoning: gemeubileerd, duurder, tuin.", "Ze zijn precies hetzelfde.", "Bovenwoning is duurder en heeft een tuin."], correctAnswer: "Bovenwoning: ongemeubileerd, balkon. Benedenwoning: gemeubileerd, duurder, tuin." }
        ]
      }
    ]
  },
  {
    id: "8.2",
    chapter: 8,
    title: "8.2 Woordenlijst & 8.3 Soorten woonruimte",
    theory: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🏠 Soorten woonruimte (Ev Tipleri)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><strong>het huis / de woning:</strong> Ev (Genel terim)</li>
              <li><strong>de flat / het appartement:</strong> Apartman dairesi</li>
              <li><strong>de bovenwoning:</strong> Üst kat dairesi</li>
              <li><strong>de benedenwoning:</strong> Zemin kat dairesi</li>
              <li><strong>de begane grond:</strong> Zemin kat (Ground floor)</li>
              <li><strong>de verdieping:</strong> Kat (Floor/Storey)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>🛋️ In en bij het huis (Ev bölümleri)</h3>
            <ul style={{ color: '#cbd5e1', listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><strong>de woonkamer / slaapkamer:</strong> Oturma / yatak odası</li>
              <li><strong>de keuken:</strong> Mutfak</li>
              <li><strong>de badkamer / de wc:</strong> Banyo / Tuvalet</li>
              <li><strong>de gang:</strong> Koridor</li>
              <li><strong>de deur / het raam:</strong> Kapı / Pencere</li>
              <li><strong>het balkon / de tuin:</strong> Balkon / Bahçe</li>
            </ul>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2 & Woordenlijst Oefeningen",
        isExtra: true,
        questions: [
          { id: "8.2_smart_1", type: "multiple_choice", question: "Wat is 'de begane grond' in het Engels of Turks?", options: ["The basement / Bodrum", "The roof / Çatı", "The ground floor / Zemin kat"], correctAnswer: "The ground floor / Zemin kat" },
          { id: "8.2_smart_2", type: "fill_in", question: "Vertaal: 'Ben bir apartman dairesi kiralıyorum.' -> Ik huur een ________.", correctAnswer: "appartement" },
          ...generateSmartQuestions(8, "Woordenlijst", 6, chapter8Vocab)
        ]
      }
    ]
  },
  {
    id: "8.6",
    chapter: 8,
    title: "8.6 Negatie: Geen vs Niet (Olumsuzluk)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>🚫 Geen vs Niet (Hangisi Ne Zaman Kullanılır?)</h3>
          <p className="text-sm text-slate-300">Hollandacada olumsuzluk yapmak (İngilizcedeki 'not' veya 'no' karşılığı) öğrencilerin en çok hata yaptığı konudur. Kurallar çok nettir:</p>
          
          <h4 className="font-bold text-white mt-4 border-b border-rose-500/30 pb-1">1. GEEN (Sadece Belirsiz İsimlerle Kullanılır)</h4>
          <p className="text-sm text-slate-300 mt-2"><strong>Geen</strong> kelimesi İngilizcedeki "no" veya "not a/an" anlamına gelir. Sadece önünde artikel (de/het) veya iyelik eki (mijn/jouw) OLMAYAN, genel geçer isimleri olumsuz yaparken kullanılır. İsmin hemen <strong>önüne</strong> gelir.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li>Ik heb <strong>een</strong> auto. ➔ Ik heb <strong>geen</strong> auto. (Ik heb niet een auto DENMEZ!)</li>
            <li>Zij drinkt koffie. ➔ Zij drinkt <strong>geen</strong> koffie. (Koffie belirsiz bir isimdir).</li>
            <li>Wij hebben kinderen. ➔ Wij hebben <strong>geen</strong> kinderen.</li>
          </ul>

          <h4 className="font-bold text-white mt-5 border-b border-rose-500/30 pb-1">2. NIET (Geri Kalan Her Şey İçin Kullanılır)</h4>
          <p className="text-sm text-slate-300 mt-2"><strong>Niet</strong> kelimesi fiilleri, sıfatları, yer zarflarını ve BELİRLİ isimleri (önünde de/het, mijn, jouw, deze, dit olan isimler) olumsuz yapar.</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-2">
            <li><strong>Sıfatlarla (Önce gelir):</strong> Ik ben <strong>niet</strong> moe. (Yorgun değilim).</li>
            <li><strong>Yer Zarflarıyla (Önce gelir):</strong> Ik woon <strong>niet</strong> in Amsterdam. (Amsterdam'da yaşamıyorum).</li>
            <li><strong>Belirli İsimlerle (Önce gelir):</strong> Dat is <strong>niet</strong> mijn fiets. (Bu benim bisikletim değil. - <em>Geen mijn fiets DENMEZ!</em>) / Dat is <strong>niet</strong> de auto.</li>
            <li><strong>Basit Fiillerle (Sonra gelir):</strong> Ik werk <strong>niet</strong>. (Çalışmıyorum). / Ik slaap <strong>niet</strong>.</li>
            <li><strong>Zaman Zarflarıyla (Fiilden sonra, zamandan önce):</strong> Ik werk <strong>niet</strong> vandaag.</li>
          </ul>

          <div className="bg-rose-900/40 p-3 rounded-xl mt-4 border border-rose-500/40 text-center text-sm font-bold text-rose-200">
            Kıyaslayın: <br/>
            "Ik heb GEEN fiets." (Bisikletim yok - Genel) <br/>
            "Dat is NIET mijn fiets." (O benim bisikletim değil - Belirli)
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Maak de zin negatief. B leest de ontkennende zin.",
        isExtra: false,
        questions: [
          { id: "8.6_opd3_1", type: "fill_in", question: "Ik bestel een toetje. -> Ik bestel ________ toetje.", correctAnswer: "geen" },
          { id: "8.6_opd3_2", type: "fill_in", question: "Hij krijgt een lepel. -> Hij krijgt ________ lepel.", correctAnswer: "geen" },
          { id: "8.6_opd3_3", type: "fill_in", question: "Ik help hem. -> Ik help hem ________.", correctAnswer: "niet" },
          { id: "8.6_opd3_4", type: "fill_in", question: "Ik vind kip lekker. -> Ik vind kip ________ lekker.", correctAnswer: "niet" },
          { id: "8.6_opd3_5", type: "fill_in", question: "Ahmet drinkt koffie. -> Ahmet drinkt ________ koffie.", correctAnswer: "geen" },
          { id: "8.6_opd3_6", type: "fill_in", question: "Jullie mogen het boek gebruiken. -> Jullie mogen het boek ________ gebruiken.", correctAnswer: "niet" },
          { id: "8.6_opd3_7", type: "fill_in", question: "We gebruiken een boek. -> We gebruiken ________ boek.", correctAnswer: "geen" },
          { id: "8.6_opd3_8", type: "fill_in", question: "Die computer is van mij. -> Die computer is ________ van mij.", correctAnswer: "niet" },
          { id: "8.6_opd3_9", type: "fill_in", question: "In mijn straat is een café. -> In mijn straat is ________ café.", correctAnswer: "geen" },
          { id: "8.6_opd3_10", type: "fill_in", question: "Mijn ouders hebben vakantie. -> Mijn ouders hebben ________ vakantie.", correctAnswer: "geen" }
        ]
      },
      {
        instruction: "Opdracht 4: Geef een reactie op de vragen. Gebruik niet en geen.",
        isExtra: false,
        questions: [
          { id: "8.6_opd4_1", type: "fill_in", question: "Is de flat ver van het centrum? -> Nee, de flat is ________ ver van het centrum.", correctAnswer: "niet" },
          { id: "8.6_opd4_2", type: "fill_in", question: "Heb je een balkon? -> Nee, ik heb ________ balkon.", correctAnswer: "geen" },
          { id: "8.6_opd4_3", type: "fill_in", question: "Is jullie tuin groot? -> Nee, onze tuin is ________ groot.", correctAnswer: "niet" },
          { id: "8.6_opd4_4", type: "fill_in", question: "Ga je samenwonen? -> Nee, ik ga ________ samenwonen.", correctAnswer: "niet" },
          { id: "8.6_opd4_5", type: "fill_in", question: "Moet je mijn naam spellen? -> Nee, je moet je naam ________ spellen.", correctAnswer: "niet" },
          { id: "8.6_opd4_6", type: "fill_in", question: "Heb je blond haar? -> Nee, ik heb ________ blond haar.", correctAnswer: "geen" },
          { id: "8.6_opd4_7", type: "fill_in", question: "Is het huis gemeubileerd? -> Nee, het huis is ________ gemeubileerd.", correctAnswer: "niet" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): NIET of GEEN?",
        isExtra: true,
        questions: [
          { id: "8.6_smart_1", type: "multiple_choice", question: "Vertaal: 'Bu benim köpeğim değil.'", options: ["Dat is geen mijn hond.", "Dat is niet mijn hond.", "Dat is mijn hond niet."], correctAnswer: "Dat is niet mijn hond." },
          { id: "8.6_smart_2", type: "multiple_choice", question: "Waarom gebruik je GEEN in de zin: 'Ik heb geen tijd'?", options: ["Omdat tijd een werkwoord is.", "Omdat tijd een substantief (isim) is zonder artikel of bezittelijk voornaamwoord.", "Omdat het in de toekomst is."], correctAnswer: "Omdat tijd een substantief (isim) is zonder artikel of bezittelijk voornaamwoord." }
        ]
      }
    ]
  },
  {
    id: "8.7",
    chapter: 8,
    title: "8.7 Preposities (Yer Bildiren Edatlar)",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>📍 Preposities (Edatlar)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200">
            <div>
              <ul className="space-y-1">
                <li><strong>in:</strong> içinde <em>(in de slaapkamer)</em></li>
                <li><strong>op:</strong> üstünde <em>(op het balkon)</em></li>
                <li><strong>aan:</strong> asılı/bitişik <em>(aan de muur)</em></li>
                <li><strong>naast:</strong> yanında <em>(naast het huis)</em></li>
                <li><strong>voor:</strong> önünde <em>(voor de lamp)</em></li>
                <li><strong>achter:</strong> arkasında <em>(achter het huis)</em></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><strong>boven:</strong> yukarısında <em>(boven de keuken)</em></li>
                <li><strong>onder:</strong> altında <em>(onder het balkon)</em></li>
                <li><strong>bij:</strong> yanında/civarında <em>(bij de tafel)</em></li>
                <li><strong>tussen:</strong> arasında <em>(tussen keuken en zolder)</em></li>
                <li><strong>tegenover:</strong> karşısında <em>(tegenover de deur)</em></li>
                <li><strong>tegen:</strong> yaslanmış/karşı <em>(tegen de muur)</em></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Vul de prepositie in (in de dialoog van de makelaar).",
        isExtra: false,
        questions: [
          { id: "8.7_opd7_1", type: "fill_in", question: "Makelaar: Dus u zoekt woonruimte ________ de stad.", correctAnswer: "in" },
          { id: "8.7_opd7_2", type: "fill_in", question: "Patricia: Twee. ________ mezelf en mijn vriend. Wij gaan samenwonen.", correctAnswer: "Voor" },
          { id: "8.7_opd7_3", type: "fill_in", question: "Makelaar: Zoekt u een bepaald type woning? ________ een tuin?", correctAnswer: "Met" },
          { id: "8.7_opd7_4", type: "fill_in", question: "Makelaar: Ik zie op uw formulier de maximale huurprijs. Ik zal u een paar woningen laten zien ________ de computer.", correctAnswer: "op" },
          { id: "8.7_opd7_5", type: "fill_in", question: "Makelaar: Dit is een leuke bovenwoning ________ de derde verdieping.", correctAnswer: "op" },
          { id: "8.7_opd7_6", type: "fill_in", question: "Makelaar: Niet ver van het centrum. Het is dicht ________ het park.", correctAnswer: "bij" },
          { id: "8.7_opd7_7", type: "fill_in", question: "Makelaar: Een balkon ________ het westen. (Batıya bakan)", correctAnswer: "op" },
          { id: "8.7_opd7_8", type: "fill_in", question: "Makelaar: ________ de gang is de wc.", correctAnswer: "In" },
          { id: "8.7_opd7_9", type: "fill_in", question: "Makelaar: Een eenvoudige badkamer, ________ alleen een douche.", correctAnswer: "met" },
          { id: "8.7_opd7_10", type: "fill_in", question: "Patricia: Dat lijkt me fantastisch! Ik wil dit even ________ mijn vriend overleggen.", correctAnswer: "met" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Pedagogisch): Preposities",
        isExtra: true,
        questions: [
          { id: "8.7_smart_1", type: "multiple_choice", question: "De foto hangt ________ de muur (duvar).", options: ["op", "in", "aan"], correctAnswer: "aan" },
          { id: "8.7_smart_2", type: "multiple_choice", question: "De wasmachine staat ________ de deur (kapının karşısında).", options: ["naast", "tegenover", "tussen"], correctAnswer: "tegenover" }
        ]
      }
    ]
  },
  {
    id: "8.8",
    chapter: 8,
    title: "8.8 Tekst & 8.9 Uitspraak",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: Hart van mijn huis</h3>
          <p className="text-sm text-slate-300">11 yaşındaki Anne Koning, evdeki favori alanını (de wc) anlatıyor. Eskiden tuvaletleri mavi, beyaz ve gri renkliymiş ve çok çirkinmiş (lelijk). Şimdi ise kırmızı ve beyaz noktalıymış (rood met witte stippen). Anne kırmızıyı çok sevse de babası ve kardeşi sevmiyormuş. Tuvalet rulo tutucusu (toiletrolhouder) ise İspanyol bir kadını tasvir ediyormuş.</p>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Cultuur: Huizen in Nederland</h3>
          <p className="text-sm text-slate-300">Yabancılar Hollanda evleri hakkında ne düşünüyor?</p>
          <ul className="text-sm text-slate-200 mt-2 list-disc pl-5">
            <li><strong>Julia (İrlanda):</strong> Evler çok küçük, merdivenler çok dik (steile trappen).</li>
            <li><strong>Hannah (Çekya):</strong> Pencereler çok büyük, içerisi çok aydınlık ama mahremiyet (privacy) yok. İnsanlar akşamları içeri bakabiliyor.</li>
            <li><strong>Margaret (ABD):</strong> Tuvaletler çok küçük (piepklein).</li>
          </ul>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 11: Begrip over de tekst 'Hart van mijn huis'.",
        isExtra: false,
        questions: [
          { id: "8.8_opd11_1", type: "multiple_choice", question: "Hoe ziet de wc er nu uit?", options: ["Blauw, wit en grijs", "Rood met witte stippen", "Helemaal zwart"], correctAnswer: "Rood met witte stippen" },
          { id: "8.8_opd11_2", type: "multiple_choice", question: "Wat is de favoriete kleur van de vader en broer van Anne?", options: ["Rood", "Ze houden niet van rood. Ze vinden paars mooi.", "Geel"], correctAnswer: "Ze houden niet van rood. Ze vinden paars mooi." }
        ]
      },
      {
        instruction: "Cultuur Test: Wat vinden buitenlanders van de huizen in Nederland?",
        isExtra: true,
        questions: [
          { id: "8.9_cult_1", type: "multiple_choice", question: "Wat is een typisch kenmerk van Hollandse huizen volgens buitenlanders?", options: ["De trappen zijn erg makkelijk.", "Grote ramen met veel licht, maar geen privacy 's avonds.", "De wc's zijn erg groot."], correctAnswer: "Grote ramen met veel licht, maar geen privacy 's avonds." }
        ]
      }
    ]
  },
  {
    id: "On-Class-8",
    chapter: 8,
    title: "On-Class Extra: Geen vs Niet Deep Dive",
    theory: (
      <>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎓 On-Class Grammatica: Geen vs Niet</h3>
          
          <h4 className="font-bold text-emerald-300 mt-2 border-b border-emerald-500/30 pb-1">Geen:</h4>
          <p className="text-sm text-slate-300 mt-1">Sadece ve sadece <strong>belirsiz isimleri (artikelsiz veya 'een' artikeli alan isimler)</strong> olumsuz yaparken kullanılır.</p>
          <p className="text-sm italic text-emerald-100 mt-1">"Ik heb een fiets -> Ik heb <strong>geen</strong> fiets."</p>

          <h4 className="font-bold text-emerald-300 mt-4 border-b border-emerald-500/30 pb-1">Niet:</h4>
          <p className="text-sm text-slate-300 mt-1">Belirli isimleri (de/het, mijn/jouw/zijn, deze/die) olumsuz yaparken <strong>niet</strong> kullanılır!</p>
          <p className="text-sm italic text-emerald-100 mt-1">"Dat is <strong>niet</strong> mijn auto." (Geen mijn auto YANLIŞTIR!).</p>
        </div>
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefeningen: De Ultieme Negatie Test",
        isExtra: true,
        questions: [
          { id: "8_onclass_1", type: "fill_in", question: "Ik spreek ________ Engels. (Engels is a specific language/concept).", correctAnswer: "geen" },
          { id: "8_onclass_2", type: "multiple_choice", question: "Kies de juiste ontkenning: 'Dat is ________ de docent.'", options: ["niet", "geen"], correctAnswer: "niet" },
          { id: "8_onclass_3", type: "multiple_choice", question: "Kies de juiste ontkenning: 'Hij koopt ________ auto.' (belirsiz/indefinite)", options: ["niet", "geen"], correctAnswer: "geen" },
          { id: "8_onclass_4", type: "multiple_choice", question: "Kies de juiste ontkenning: 'Ik woon ________ in Amsterdam.'", options: ["niet", "geen"], correctAnswer: "niet" }
        ]
      }
    ]
  }
];