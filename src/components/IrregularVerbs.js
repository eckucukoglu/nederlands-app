// src/components/IrregularVerbs.js
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import QuizModule from './QuizModule';

// Kitaptaki listeye dayalı, özel örnek cümlelerle zenginleştirilmiş düzensiz fiiller veritabanı
const irregularVerbsData = [
  { inf: "bakken", imp: "bakte, bakten", perf: "gebakken", aux: "hebben", freq: false, en: "bake, fry", tr: "fırında pişirmek, kızartmak",
    ex: { pres: "Ik bak een taart.", imp: "Hij bakte gisteren vlees.", perf: "Wij hebben een cake gebakken." } },
  { inf: "beginnen", imp: "begon, begonnen", perf: "begonnen", aux: "zijn", freq: true, en: "begin, start", tr: "başlamak",
    ex: { pres: "De les begint om negen uur.", imp: "De film begon te laat.", perf: "Het is al begonnen." } },
  { inf: "begrijpen", imp: "begreep, begrepen", perf: "begrepen", aux: "hebben", freq: true, en: "understand", tr: "anlamak",
    ex: { pres: "Ik begrijp deze vraag niet.", imp: "Zij begreep de leraar goed.", perf: "Heb je het begrepen?" } },
  { inf: "bewegen", imp: "bewoog, bewogen", perf: "bewogen", aux: "hebben", freq: false, en: "move", tr: "hareket etmek",
    ex: { pres: "De hond beweegt niet.", imp: "De takken bewogen in de wind.", perf: "Ik heb vandaag veel bewogen." } },
  { inf: "bidden", imp: "bad, baden", perf: "gebeden", aux: "hebben", freq: true, en: "pray", tr: "dua etmek",
    ex: { pres: "Mijn oma bidt elke dag.", imp: "Ze baden voor een goede reis.", perf: "Hij heeft voor haar gebeden." } },
  { inf: "bieden", imp: "bood, boden", perf: "geboden", aux: "hebben", freq: true, en: "offer", tr: "teklif etmek",
    ex: { pres: "Ik bied honderd euro.", imp: "Hij bood me een drankje aan.", perf: "Ze hebben veel geld geboden." } },
  { inf: "bijten", imp: "beet, beten", perf: "gebeten", aux: "hebben", freq: true, en: "bite", tr: "ısırmak",
    ex: { pres: "De hond bijt niet.", imp: "De mug beet me.", perf: "Ik ben door een hond gebeten." } },
  { inf: "binden", imp: "bond, bonden", perf: "gebonden", aux: "hebben", freq: true, en: "tie", tr: "bağlamak",
    ex: { pres: "Ik bind de touwen vast.", imp: "Hij bond zijn schoenen.", perf: "Ze hebben het pakket vastgebonden." } },
  { inf: "blazen", imp: "blies, bliezen", perf: "geblazen", aux: "hebben", freq: true, en: "blow", tr: "üflemek, esmek",
    ex: { pres: "De wind blaast hard.", imp: "Hij blies de kaarsjes uit.", perf: "De storm heeft hard geblazen." } },
  { inf: "blijken", imp: "bleek, bleken", perf: "gebleken", aux: "zijn", freq: true, en: "appear", tr: "ortaya çıkmak, belli olmak",
    ex: { pres: "Het blijkt een fout te zijn.", imp: "Dat bleek een goed idee.", perf: "Het is gebleken dat hij gelijk had." } },
  { inf: "blijven", imp: "bleef, bleven", perf: "gebleven", aux: "zijn", freq: true, en: "stay, remain", tr: "kalmak",
    ex: { pres: "Ik blijf vandaag thuis.", imp: "Hij bleef lang praten.", perf: "Wij zijn in Amsterdam gebleven." } },
  { inf: "breken", imp: "brak, braken", perf: "gebroken", aux: "hebben/zijn", freq: true, en: "break", tr: "kırmak",
    ex: { pres: "Het glas breekt snel.", imp: "Ik brak mijn been.", perf: "Hij heeft het raam gebroken." } },
  { inf: "brengen", imp: "bracht, brachten", perf: "gebracht", aux: "hebben", freq: true, en: "bring", tr: "getirmek",
    ex: { pres: "Ik breng je naar het station.", imp: "Zij bracht een taart mee.", perf: "Heb je de auto gebracht?" } },
  { inf: "denken", imp: "dacht, dachten", perf: "gedacht", aux: "hebben", freq: true, en: "think", tr: "düşünmek",
    ex: { pres: "Ik denk aan jou.", imp: "Zij dacht dat het zondag was.", perf: "Ik heb er niet aan gedacht." } },
  { inf: "doen", imp: "deed, deden", perf: "gedaan", aux: "hebben", freq: true, en: "do", tr: "yapmak",
    ex: { pres: "Wat doe je morgen?", imp: "Ik deed gisteren boodschappen.", perf: "Dat heb je heel goed gedaan." } },
  { inf: "dragen", imp: "droeg, droegen", perf: "gedragen", aux: "hebben", freq: true, en: "carry, wear", tr: "giymek, taşımak",
    ex: { pres: "Zij draagt een mooie jas.", imp: "Hij droeg de zware doos.", perf: "Ik heb dit shirt nooit gedragen." } },
  { inf: "drinken", imp: "dronk, dronken", perf: "gedronken", aux: "hebben", freq: true, en: "drink", tr: "içmek",
    ex: { pres: "Ik drink graag koffie.", imp: "We dronken bier in het café.", perf: "Heb je genoeg water gedronken?" } },
  { inf: "eten", imp: "at, aten", perf: "gegeten", aux: "hebben", freq: true, en: "eat", tr: "yemek",
    ex: { pres: "Wij eten vanavond pizza.", imp: "Ik at een lekkere appel.", perf: "Heb je al gegeten?" } },
  { inf: "gaan", imp: "ging, gingen", perf: "gegaan", aux: "zijn", freq: true, en: "go", tr: "gitmek",
    ex: { pres: "Ik ga naar de stad.", imp: "We gingen gisteren sporten.", perf: "Zij is naar huis gegaan." } },
  { inf: "geven", imp: "gaf, gaven", perf: "gegeven", aux: "hebben", freq: true, en: "give", tr: "vermek",
    ex: { pres: "Ik geef hem een cadeau.", imp: "Hij gaf me zijn telefoonnummer.", perf: "Wat heb je haar gegeven?" } },
  { inf: "hangen", imp: "hing, hingen", perf: "gehangen", aux: "hebben", freq: true, en: "hang", tr: "asmak, asılı durmak",
    ex: { pres: "De jas hangt in de hal.", imp: "Het schilderij hing scheef.", perf: "Ik heb de lamp opgehangen." } },
  { inf: "hebben", imp: "had, hadden", perf: "gehad", aux: "hebben", freq: true, en: "have", tr: "sahip olmak",
    ex: { pres: "Ik heb een vraag.", imp: "Wij hadden gisteren geen tijd.", perf: "Ik heb een drukke dag gehad." } },
  { inf: "helpen", imp: "hielp, hielpen", perf: "geholpen", aux: "hebben", freq: true, en: "help", tr: "yardım etmek",
    ex: { pres: "Kan je me even helpen?", imp: "Zij hielp mij met de oefening.", perf: "Bedankt dat je me hebt geholpen." } },
  { inf: "houden", imp: "hield, hielden", perf: "gehouden", aux: "hebben", freq: true, en: "hold, like (van)", tr: "tutmak, sevmek (van)",
    ex: { pres: "Ik hou van chocolade.", imp: "Hij hield de deur open.", perf: "Ik heb altijd van katten gehouden." } },
  { inf: "kiezen", imp: "koos, kozen", perf: "gekozen", aux: "hebben", freq: true, en: "choose", tr: "seçmek",
    ex: { pres: "Ik kies de rode auto.", imp: "Ze kozen een leuk restaurant.", perf: "Welke film heb je gekozen?" } },
  { inf: "kijken", imp: "keek, keken", perf: "gekeken", aux: "hebben", freq: true, en: "look", tr: "bakmak, izlemek",
    ex: { pres: "Ik kijk naar een serie.", imp: "We keken gisteren tv.", perf: "Ik heb die documentaire al gekeken." } },
  { inf: "komen", imp: "kwam, kwamen", perf: "gekomen", aux: "zijn", freq: true, en: "come", tr: "gelmek",
    ex: { pres: "Hij komt morgen op bezoek.", imp: "Ik kwam gisteren te laat.", perf: "Ze is niet naar school gekomen." } },
  { inf: "kopen", imp: "kocht, kochten", perf: "gekocht", aux: "hebben", freq: true, en: "buy", tr: "satın almak",
    ex: { pres: "Ik koop verse groenten.", imp: "Hij kocht een nieuw huis.", perf: "Wat heb je in de stad gekocht?" } },
  { inf: "krijgen", imp: "kreeg, kregen", perf: "gekregen", aux: "hebben", freq: true, en: "get, receive", tr: "almak, edinmek",
    ex: { pres: "Ik krijg een mooi cadeau.", imp: "We kregen veel korting.", perf: "Ik heb je e-mail gekregen." } },
  { inf: "kunnen", imp: "kon, konden", perf: "gekund", aux: "hebben", freq: true, en: "be able", tr: "-ebilmek",
    ex: { pres: "Ik kan niet komen.", imp: "Hij kon het adres niet vinden.", perf: "Ik heb dat vroeger wel gekund." } },
  { inf: "lachen", imp: "lachte, lachten", perf: "gelachen", aux: "hebben", freq: true, en: "laugh", tr: "gülmek",
    ex: { pres: "Zij lacht heel hard.", imp: "We lachten om zijn grapje.", perf: "Ik heb gisteren veel gelachen." } },
  { inf: "laten", imp: "liet, lieten", perf: "gelaten", aux: "hebben", freq: true, en: "let", tr: "bırakmak, izin vermek",
    ex: { pres: "Ik laat de hond buiten.", imp: "Zij liet de deur open.", perf: "Hij heeft zijn tas in de auto gelaten." } },
  { inf: "lezen", imp: "las, lazen", perf: "gelezen", aux: "hebben", freq: true, en: "read", tr: "okumak",
    ex: { pres: "Ik lees de krant.", imp: "Zij las een goed boek.", perf: "Heb je dit bericht al gelezen?" } },
  { inf: "liggen", imp: "lag, lagen", perf: "gelegen", aux: "hebben", freq: true, en: "lie", tr: "yatmak, bulunmak",
    ex: { pres: "De kat ligt op de bank.", imp: "Ik lag gisteren vroeg in bed.", perf: "Het boek heeft hier de hele dag gelegen." } },
  { inf: "lijken", imp: "leek, leken", perf: "geleken", aux: "hebben", freq: true, en: "appear, seem", tr: "benzemek, görünmek",
    ex: { pres: "Je lijkt op je vader.", imp: "Het leek wel zomer gisteren.", perf: "Het heeft erop geleken." } },
  { inf: "lopen", imp: "liep, liepen", perf: "gelopen", aux: "hebben/zijn", freq: true, en: "walk", tr: "yürümek",
    ex: { pres: "Wij lopen naar het station.", imp: "Hij liep heel snel.", perf: "Ik heb tien kilometer gelopen." } },
  { inf: "moeten", imp: "moest, moesten", perf: "gemoeten", aux: "hebben", freq: true, en: "must, should", tr: "zorunda olmak",
    ex: { pres: "Ik moet nu weg.", imp: "We moesten lang wachten.", perf: "Dat heeft gemoeten." } },
  { inf: "mogen", imp: "mocht, mochten", perf: "gemogen", aux: "hebben", freq: true, en: "be allowed to", tr: "izinli olmak",
    ex: { pres: "Mag ik hier parkeren?", imp: "Hij mocht niet naar het feest.", perf: "Ik heb dat nooit gemogen." } },
  { inf: "nemen", imp: "nam, namen", perf: "genomen", aux: "hebben", freq: true, en: "take", tr: "almak",
    ex: { pres: "Ik neem een kopje thee.", imp: "Ze nam de bus naar huis.", perf: "Wie heeft de laatste koek genomen?" } },
  { inf: "rijden", imp: "reed, reden", perf: "gereden", aux: "hebben/zijn", freq: true, en: "ride, drive", tr: "sürmek",
    ex: { pres: "Ik rijd in een snelle auto.", imp: "Wij reden gisteren naar zee.", perf: "Heb je weleens in een vrachtwagen gereden?" } },
  { inf: "roepen", imp: "riep, riepen", perf: "geroepen", aux: "hebben", freq: true, en: "call", tr: "bağırmak, seslenmek",
    ex: { pres: "De leraar roept mijn naam.", imp: "Ik riep je gisteren nog.", perf: "Heeft iemand de politie geroepen?" } },
  { inf: "schrijven", imp: "schreef, schreven", perf: "geschreven", aux: "hebben", freq: true, en: "write", tr: "yazmak",
    ex: { pres: "Ik schrijf een brief.", imp: "Hij schreef een mooi boek.", perf: "Heb je het adres opgeschreven?" } },
  { inf: "slapen", imp: "sliep, sliepen", perf: "geslapen", aux: "hebben", freq: true, en: "sleep", tr: "uyumak",
    ex: { pres: "Ik slaap altijd acht uur.", imp: "Zij sliep heel slecht.", perf: "Heb je lekker geslapen?" } },
  { inf: "sluiten", imp: "sloot, sloten", perf: "gesloten", aux: "hebben", freq: true, en: "close", tr: "kapatmak",
    ex: { pres: "De winkel sluit om zes uur.", imp: "Hij sloot de deur.", perf: "Is de deur gesloten?" } },
  { inf: "snijden", imp: "sneed, sneden", perf: "gesneden", aux: "hebben", freq: true, en: "cut", tr: "kesmek",
    ex: { pres: "Ik snijd de groenten.", imp: "Ze sneed het brood.", perf: "Ik heb mijn vinger gesneden." } },
  { inf: "spreken", imp: "sprak, spraken", perf: "gesproken", aux: "hebben", freq: true, en: "speak", tr: "konuşmak",
    ex: { pres: "Ik spreek Nederlands.", imp: "We spraken over de vakantie.", perf: "Heb je met hem gesproken?" } },
  { inf: "staan", imp: "stond, stonden", perf: "gestaan", aux: "hebben", freq: true, en: "stand", tr: "ayakta durmak",
    ex: { pres: "Ik sta in de rij.", imp: "Het bed stond in de hoek.", perf: "We hebben een uur gestaan." } },
  { inf: "vallen", imp: "viel, vielen", perf: "gevallen", aux: "zijn", freq: true, en: "fall", tr: "düşmek",
    ex: { pres: "Pas op dat je niet valt.", imp: "De boom viel om.", perf: "Hij is van de trap gevallen." } },
  { inf: "vergeten", imp: "vergat, vergaten", perf: "vergeten", aux: "zijn/hebben", freq: true, en: "forget", tr: "unutmak",
    ex: { pres: "Ik vergeet soms namen.", imp: "Ze vergat haar jas.", perf: "Oeps, ik ben het helemaal vergeten!" } },
  { inf: "verliezen", imp: "verloor, verloren", perf: "verloren", aux: "hebben", freq: true, en: "lose", tr: "kaybetmek",
    ex: { pres: "We verliezen de wedstrijd.", imp: "Hij verloor zijn sleutels.", perf: "Ik heb mijn telefoon verloren." } },
  { inf: "vertrekken", imp: "vertrok, vertrokken", perf: "vertrokken", aux: "zijn", freq: true, en: "leave", tr: "ayrılmak, hareket etmek",
    ex: { pres: "De trein vertrekt nu.", imp: "Ze vertrokken gisteren vroeg.", perf: "Is hij al vertrokken?" } },
  { inf: "vinden", imp: "vond, vonden", perf: "gevonden", aux: "hebben", freq: true, en: "find", tr: "bulmak",
    ex: { pres: "Ik vind dit een mooi huis.", imp: "Ze vonden het niet leuk.", perf: "Ik heb mijn sleutels weer gevonden." } },
  { inf: "vliegen", imp: "vloog, vlogen", perf: "gevlogen", aux: "hebben/zijn", freq: true, en: "fly", tr: "uçmak",
    ex: { pres: "De vogel vliegt hoog.", imp: "We vlogen naar Spanje.", perf: "Heb je wel eens in een helikopter gevlogen?" } },
  { inf: "vragen", imp: "vroeg, vroegen", perf: "gevraagd", aux: "hebben", freq: true, en: "ask", tr: "sormak",
    ex: { pres: "Ik vraag de weg.", imp: "Hij vroeg naar jou.", perf: "Ik heb het aan de leraar gevraagd." } },
  { inf: "wassen", imp: "waste, wasten", perf: "gewassen", aux: "hebben", freq: true, en: "wash", tr: "yıkamak",
    ex: { pres: "Ik was mijn handen.", imp: "Ze waste de auto.", perf: "Heb je de kleren al gewassen?" } },
  { inf: "weten", imp: "wist, wisten", perf: "geweten", aux: "hebben", freq: true, en: "know", tr: "bilmek",
    ex: { pres: "Ik weet het antwoord niet.", imp: "Wist jij dat al?", perf: "Dat heb ik nooit geweten." } },
  { inf: "willen", imp: "wilde/wou, wilden", perf: "gewild", aux: "hebben", freq: true, en: "want", tr: "istemek",
    ex: { pres: "Ik wil graag een biertje.", imp: "Ik wilde gisteren gaan sporten.", perf: "Ze heeft altijd een hond gewild." } },
  { inf: "worden", imp: "werd, werden", perf: "geworden", aux: "zijn", freq: true, en: "become", tr: "olmak",
    ex: { pres: "Ik word morgen dertig.", imp: "Het weer werd snel slechter.", perf: "Mijn broer is dokter geworden." } },
  { nl: "zeggen", imp: "zei, zeiden", perf: "gezegd", aux: "hebben", freq: true, en: "say", tr: "söylemek",
    ex: { pres: "Wat zeg je?", imp: "Zij zei dat ze ziek was.", perf: "Dat heb ik niet gezegd." } },
  { inf: "zien", imp: "zag, zagen", perf: "gezien", aux: "hebben", freq: true, en: "see", tr: "görmek",
    ex: { pres: "Ik zie een vogel.", imp: "Ik zag je gisteren op straat.", perf: "Heb je die nieuwe film al gezien?" } },
  { inf: "zijn", imp: "was, waren", perf: "geweest", aux: "zijn", freq: true, en: "be", tr: "olmak",
    ex: { pres: "Ik ben ziek.", imp: "Waar was jij gisteren?", perf: "Ik ben in Parijs geweest." } },
  { inf: "zitten", imp: "zat, zitten", perf: "gezeten", aux: "hebben", freq: true, en: "sit", tr: "oturmak",
    ex: { pres: "We zitten in de tuin.", imp: "Hij zat de hele dag binnen.", perf: "We hebben lang in de auto gezeten." } },
  { inf: "zoeken", imp: "zocht, zochten", perf: "gezocht", aux: "hebben", freq: true, en: "search, look", tr: "aramak",
    ex: { pres: "Ik zoek mijn boek.", imp: "Ik zocht je overal.", perf: "Heb je in de kast gezocht?" } },
  { inf: "zullen", imp: "zou, zouden", perf: "-", aux: "-", freq: true, en: "will, would", tr: "olacak, yapacak",
    ex: { pres: "Ik zal je morgen bellen.", imp: "Ik zou het niet weten.", perf: "Geen perfectum vorm." } },
];

export default function IrregularVerbs() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const isTr = lang === 'tr';

  const filteredVerbs = useMemo(() => {
    if (!searchTerm) return irregularVerbsData;
    const lower = searchTerm.toLowerCase();
    return irregularVerbsData.filter(v => 
      v.inf?.toLowerCase().includes(lower) || 
      v.en.toLowerCase().includes(lower) || 
      v.tr.toLowerCase().includes(lower) ||
      v.imp.toLowerCase().includes(lower) ||
      v.perf.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header & Search */}
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
           <i className="fa-solid fa-list-check text-9xl text-sky-400"></i>
        </div>
        
        {/* BAŞLIK VE QUIZ BUTONU */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-400 flex items-center gap-3">
            <i className="fa-solid fa-bolt"></i> 
            {isTr ? 'Onregelmatige Werkwoorden' : 'Irregular Verbs'}
          </h2>
          
          <button 
             onClick={() => setIsQuizOpen(true)}
             className="flex-shrink-0 flex items-center justify-center gap-2 bg-sky-600/20 text-sky-400 hover:bg-sky-600 hover:text-white border border-sky-500/50 hover:border-sky-500 px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm group"
           >
             <i className="fa-solid fa-dumbbell group-hover:animate-bounce"></i> 
             {isTr ? 'Çalış & Test Et' : 'Practice'}
           </button>
        </div>

        <p className="text-sm text-slate-300 mb-6 relative z-10 max-w-2xl">
          {isTr 
            ? 'Bu listedeki fiiller geçmiş zamanda kuralsız (güçlü) olarak değişir. Mavi yıldızlı olanlar günlük hayatta ve diyaloglarda en sık kullanılan fiillerdir.' 
            : 'These verbs change irregularly (strong verbs) in the past tense. The blue starred ones are highly frequent verbs used in daily dialogues.'}
        </p>

        <div className="relative max-w-xl z-10">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isTr ? 'Hollandaca, İngilizce veya Türkçe ara...' : 'Search by Dutch, English, or Turkish...'}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 shadow-inner"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-400">
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredVerbs.length > 0 ? filteredVerbs.map((verb, idx) => (
          <div key={idx} className={`bg-slate-800 rounded-2xl border transition-all shadow-md overflow-hidden flex flex-col ${verb.freq ? 'border-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.1)]' : 'border-slate-700/60'}`}>
            
            {/* Card Header */}
            <div className={`p-4 border-b flex justify-between items-start gap-2 ${verb.freq ? 'bg-sky-900/20 border-sky-800/50' : 'bg-slate-800/80 border-slate-700'}`}>
              <div>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  {verb.inf || verb.nl}
                  {verb.freq && <i className="fa-solid fa-star text-sky-400 text-xs" title="Highly Frequent"></i>}
                </h3>
                <div className="flex gap-2 text-xs font-medium mt-1">
                  <span className="text-slate-400 tracking-wide bg-slate-900/50 px-2 py-0.5 rounded-md border border-slate-700">{isTr ? verb.tr : verb.en}</span>
                  {!isTr && verb.tr && <span className="text-slate-500 tracking-wide bg-slate-900/50 px-2 py-0.5 rounded-md border border-slate-700">{verb.tr}</span>}
                </div>
              </div>
            </div>

            {/* Verb Forms */}
            <div className="p-4 grid grid-cols-2 gap-3 bg-slate-900/30 text-sm border-b border-slate-700/50">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Imperfectum</span>
                  <span className="text-slate-300 font-medium">{verb.imp}</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Perfectum</span>
                  <div className="flex items-center gap-1">
                     <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${verb.aux?.includes('zijn') ? 'bg-rose-900/40 text-rose-300 border border-rose-800' : 'bg-emerald-900/40 text-emerald-300 border border-emerald-800'}`}>
                       {verb.aux === 'zijn' ? 'is' : verb.aux === 'hebben/zijn' ? 'is/heeft' : 'heeft'}
                     </span>
                     <span className="text-slate-200 font-bold">{verb.perf}</span>
                  </div>
               </div>
            </div>

            {/* Example Sentences */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-center bg-slate-800/40">
               <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-slate-700 text-slate-400 text-[10px] font-bold flex-shrink-0 mt-0.5" title="Present">Pr</div>
                  <p className="text-[13px] text-slate-300 leading-snug italic">{verb.ex?.pres || '-'}</p>
               </div>
               <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-indigo-900/50 text-indigo-300 border border-indigo-800/50 text-[10px] font-bold flex-shrink-0 mt-0.5" title="Imperfectum">Im</div>
                  <p className="text-[13px] text-indigo-200/90 leading-snug italic">{verb.ex?.imp || '-'}</p>
               </div>
               <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-900/50 text-emerald-300 border border-emerald-800/50 text-[10px] font-bold flex-shrink-0 mt-0.5" title="Perfectum">Pf</div>
                  <p className="text-[13px] text-emerald-200/90 leading-snug italic">{verb.ex?.perf || '-'}</p>
               </div>
            </div>

          </div>
        )) : (
          <div className="col-span-full py-12 text-center text-slate-500">
             <i className="fa-regular fa-face-frown text-4xl mb-3"></i>
             <p>{isTr ? "Aradığınız fiil bulunamadı." : "No verbs found matching your search."}</p>
          </div>
        )}
      </div>

      {/* QUIZ MODÜLÜ BAĞLANTISI */}
      {isQuizOpen && (
        <QuizModule 
          tags={["irregular_verbs"]} 
          onClose={() => setIsQuizOpen(false)} 
          title={isTr ? "Düzensiz Fiiller Testi" : "Irregular Verbs Quiz"}
        />
      )}
    </div>
  );
}