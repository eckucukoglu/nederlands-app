// src/components/IrregularVerbs.js
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import QuizModule from './QuizModule';

// Kitaptaki listeye dayalı, özel örnek cümlelerle zenginleştirilmiş tam düzensiz fiiller veritabanı
const irregularVerbsData = [
  { inf: "aandoen", imp: "deed aan, deden aan", perf: "aangedaan", aux: "hebben", freq: true, en: "put on", tr: "giymek, takmak",
    ex: { pres: "Ik doe een jas aan.", imp: "Hij deed een jas aan.", perf: "Ik heb een jas aangedaan." } },
  { inf: "aankomen", imp: "kwam aan, kwamen aan", perf: "aangekomen", aux: "zijn", freq: true, en: "arrive", tr: "varmak, ulaşmak",
    ex: { pres: "De trein komt op tijd aan.", imp: "De trein kwam laat aan.", perf: "De trein is op tijd aangekomen." } },
  { inf: "bakken", imp: "bakte, bakten", perf: "gebakken", aux: "hebben", freq: false, en: "bake, fry", tr: "fırında pişirmek, kızartmak",
    ex: { pres: "Ik bak een taart.", imp: "Hij bakte gisteren vlees.", perf: "Wij hebben een cake gebakken." } },
  { inf: "bederven", imp: "bedierf, bedierven", perf: "bedorven", aux: "hebben/zijn", freq: false, en: "spoil", tr: "bozulmak, mahvetmek",
    ex: { pres: "Het vlees bederft snel.", imp: "Het eten bedierf in de hitte.", perf: "De melk is bedorven." } },
  { inf: "beginnen", imp: "begon, begonnen", perf: "begonnen", aux: "zijn", freq: true, en: "begin, start", tr: "başlamak",
    ex: { pres: "De les begint om negen uur.", imp: "De film begon te laat.", perf: "Het is al begonnen." } },
  { inf: "begrijpen", imp: "begreep, begrepen", perf: "begrepen", aux: "hebben", freq: true, en: "understand", tr: "anlamak",
    ex: { pres: "Ik begrijp deze vraag niet.", imp: "Zij begreep de leraar goed.", perf: "Heb je het begrepen?" } },
  { inf: "bezoeken", imp: "bezocht, bezochten", perf: "bezocht", aux: "hebben", freq: true, en: "visit", tr: "ziyaret etmek",
    ex: { pres: "Ik bezoek mijn ouders.", imp: "Hij bezocht zijn vriend.", perf: "We hebben het museum bezocht." } },
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
  { inf: "braden", imp: "braadde, braadden", perf: "gebraden", aux: "hebben", freq: false, en: "roast", tr: "et kızartmak, fırınlamak",
    ex: { pres: "Hij braadt het vlees in de pan.", imp: "Ze braadde een kip.", perf: "We hebben vlees gebraden." } },
  { inf: "breken", imp: "brak, braken", perf: "gebroken", aux: "hebben/zijn", freq: true, en: "break", tr: "kırmak",
    ex: { pres: "Het glas breekt snel.", imp: "Ik brak mijn been.", perf: "Hij heeft het raam gebroken." } },
  { inf: "brengen", imp: "bracht, brachten", perf: "gebracht", aux: "hebben", freq: true, en: "bring", tr: "getirmek",
    ex: { pres: "Ik breng je naar het station.", imp: "Zij bracht een taart mee.", perf: "Heb je de auto gebracht?" } },
  { inf: "buigen", imp: "boog, bogen", perf: "gebogen", aux: "hebben", freq: false, en: "bend", tr: "eğilmek, bükmek",
    ex: { pres: "Hij buigt voor de koning.", imp: "De tak boog door.", perf: "Ze hebben de stang gebogen." } },
  { inf: "denken", imp: "dacht, dachten", perf: "gedacht", aux: "hebben", freq: true, en: "think", tr: "düşünmek",
    ex: { pres: "Ik denk aan jou.", imp: "Zij dacht dat het zondag was.", perf: "Ik heb er niet aan gedacht." } },
  { inf: "doen", imp: "deed, deden", perf: "gedaan", aux: "hebben", freq: true, en: "do", tr: "yapmak",
    ex: { pres: "Wat doe je morgen?", imp: "Ik deed gisteren boodschappen.", perf: "Dat heb je heel goed gedaan." } },
  { inf: "dragen", imp: "droeg, droegen", perf: "gedragen", aux: "hebben", freq: true, en: "carry, wear", tr: "giymek, taşımak",
    ex: { pres: "Zij draagt een mooie jas.", imp: "Hij droeg de zware doos.", perf: "Ik heb dit shirt nooit gedragen." } },
  { inf: "drijven", imp: "dreef, dreven", perf: "gedreven", aux: "hebben/zijn", freq: false, en: "float", tr: "yüzmek, suda durmak",
    ex: { pres: "Het hout drijft op het water.", imp: "De boot dreef weg.", perf: "De bal heeft op het water gedreven." } },
  { inf: "drinken", imp: "dronk, dronken", perf: "gedronken", aux: "hebben", freq: true, en: "drink", tr: "içmek",
    ex: { pres: "Ik drink graag koffie.", imp: "We dronken bier in het café.", perf: "Heb je genoeg water gedronken?" } },
  { inf: "druipen", imp: "droop, dropen", perf: "gedropen", aux: "zijn/hebben", freq: false, en: "drip", tr: "damlamak",
    ex: { pres: "De kraan druipt.", imp: "Het water droop van zijn haar.", perf: "De verf is gedropen." } },
  { inf: "eten", imp: "at, aten", perf: "gegeten", aux: "hebben", freq: true, en: "eat", tr: "yemek",
    ex: { pres: "Wij eten vanavond pizza.", imp: "Ik at een lekkere appel.", perf: "Heb je al gegeten?" } },
  { inf: "fluiten", imp: "floot, floten", perf: "gefloten", aux: "hebben", freq: false, en: "whistle", tr:"çalmak, islık çalmak",
    ex: { pres: "De scheidsrechter fluit.", imp: "Hij floot een liedje.", perf: "De arbiter heeft gefloten." } },
  { inf: "gaan", imp: "ging, gingen", perf: "gegaan", aux: "zijn", freq: true, en: "go", tr: "gitmek",
    ex: { pres: "Ik ga naar de stad.", imp: "We gingen gisteren sporten.", perf: "Zij is naar huis gegaan." } },
  { inf: "gelden", imp: "gold, golden", perf: "gegolden", aux: "hebben", freq: false, en: "apply, be valid", tr: "geçerli olmak",
    ex: { pres: "Deze regel geldt voor iedereen.", imp: "Dit ticket gold gisteren.", perf: "De wet heeft jaren gegolden." } },
  { inf: "genezen", imp: "genas, genazen", perf: "genezen", aux: "hebben/zijn", freq: false, en: "cure, heal", tr: "iyileşmek, iyileştirmek",
    ex: { pres: "De arts geneest de patiënt.", imp: "De wond genas snel.", perf: "Hij is volledig genezen." } },
  { inf: "geven", imp: "gaf, gaven", perf: "gegeven", aux: "hebben", freq: true, en: "give", tr: "vermek",
    ex: { pres: "Ik geef hem een cadeau.", imp: "Hij gaf me zijn telefoonnummer.", perf: "Wat heb je haar gegeven?" } },
  { inf: "gieten", imp: "goot, goten", perf: "gegoten", aux: "hebben", freq: false, en: "pour", tr: "dökmek",
    ex: { pres: "Hij giet water in het glas.", imp: "Het goot van de regen.", perf: "Ze hebben beton gegoten." } },
  { inf: "glijden", imp: "gleed, gleden", perf: "gegleden", aux: "zijn/hebben", freq: false, en: "slip, slide", tr: "kaymak",
    ex: { pres: "De jongen glijdt over het ijs.", imp: "Hij gleed uit op de trap.", perf: "De auto is gegleden." } },
  { inf: "graven", imp: "groef, groeven", perf: "gegraven", aux: "hebben", freq: false, en: "dig", tr: "kazmak",
    ex: { pres: "De hond graaft een gat.", imp: "Ze groeven een diepe kuil.", perf: "We hebben een gat gegraven." } },
  { inf: "grijpen", imp: "greep, grepen", perf: "gegrepen", aux: "hebben", freq: false, en: "grab", tr: "kapmak, yakalamak",
    ex: { pres: "Hij grijpt zijn kans.", imp: "De kat greep de muis.", perf: "De politie heeft de dief gegrepen." } },
  { inf: "hangen", imp: "hing, hingen", perf: "gehangen", aux: "hebben", freq: true, en: "hang", tr: "asmak, asılı durmak",
    ex: { pres: "De jas hangt in de hal.", imp: "Het schilderij hing scheef.", perf: "Ik heb de lamp opgehangen." } },
  { inf: "hebben", imp: "had, hadden", perf: "gehad", aux: "hebben", freq: true, en: "have", tr: "sahip olmak",
    ex: { pres: "Ik heb een vraag.", imp: "Wij hadden gisteren geen tijd.", perf: "Ik heb een drukke dag gehad." } },
  { inf: "helpen", imp: "hielp, hielpen", perf: "geholpen", aux: "hebben", freq: true, en: "help", tr: "yardım etmek",
    ex: { pres: "Kan je me even helpen?", imp: "Zij hielp mij met de oefening.", perf: "Bedankt dat je me hebt geholpen." } },
  { inf: "heten", imp: "heette, heetten", perf: "geheten", aux: "hebben", freq: true, en: "be called", tr: "adı olmak, adlandırılmak",
    ex: { pres: "Hoe heet je?", imp: "Mijn vader heette Jan.", perf: "Hij heeft altijd zo geheten." } },
  { inf: "houden", imp: "hield, hielden", perf: "gehouden", aux: "hebben", freq: true, en: "hold, like (van)", tr: "tutmak, sevmek (van)",
    ex: { pres: "Ik hou van chocolade.", imp: "Hij hield de deur open.", perf: "Ik heb altijd van katten gehouden." } },
  { inf: "jagen", imp: "jaagde, jaagden / joeg, joegen", perf: "gejaagd", aux: "hebben", freq: false, en: "hunt", tr: "avalamak, kovalamak",
    ex: { pres: "De kat jagt op muizen.", imp: "De hond joeg de kat weg.", perf: "Ze hebben op herten gejaagd." } },
  { inf: "kiezen", imp: "koos, kozen", perf: "gekozen", aux: "hebben", freq: true, en: "choose", tr: "seçmek",
    ex: { pres: "Ik kies de rode auto.", imp: "Ze kozen een leuk restaurant.", perf: "Welke film heb je gekozen?" } },
  { inf: "kijken", imp: "keek, keken", perf: "gekeken", aux: "hebben", freq: true, en: "look", tr: "bakmak, izlemek",
    ex: { pres: "Ik kijk naar een serie.", imp: "We keken gisteren tv.", perf: "Ik heb die documentaire al gekeken." } },
  { inf: "klimmen", imp: "klom, klommen", perf: "geklommen", aux: "hebben/zijn", freq: false, en: "climb", tr: "tırmanmak",
    ex: { pres: "De kat klimt in de boom.", imp: "De jongen klom over het hek.", perf: "Hij is naar de top geklommen." } },
  { inf: "klinken", imp: "klonk, klonken", perf: "geklonken", aux: "hebben", freq: false, en: "sound", tr: "ses çıkarmak, kulağa gelmek",
    ex: { pres: "Dat klinkt erg goed.", imp: "De bel klonk luid.", perf: "Het heeft vreemd geklonken." } },
  { inf: "komen", imp: "kwam, kwamen", perf: "gekomen", aux: "zijn", freq: true, en: "come", tr: "gelmek",
    ex: { pres: "Hij komt morgen op bezoek.", imp: "Ik kwam gisteren te laat.", perf: "Ze is niet naar school gekomen." } },
  { inf: "kopen", imp: "kocht, kochten", perf: "gekocht", aux: "hebben", freq: true, en: "buy", tr: "satın almak",
    ex: { pres: "Ik koop verse groenten.", imp: "Hij kocht een nieuw huis.", perf: "Wat heb je in de stad gekocht?" } },
  { inf: "krijgen", imp: "kreeg, kregen", perf: "gekregen", aux: "hebben", freq: true, en: "get, receive", tr: "almak, edinmek",
    ex: { pres: "Ik krijg een mooi cadeau.", imp: "We kregen veel korting.", perf: "Ik heb je e-mail gekregen." } },
  { inf: "krimpen", imp: "kromp, krompen", perf: "gekrompen", aux: "zijn", freq: false, en: "shrink", tr: "küçülmek, çekmek",
    ex: { pres: "Dit shirt krimpt in de was.", imp: "Mijn trui kromp in de hete was.", perf: "De broek is gekrompen." } },
  { inf: "kruipen", imp: "kroop, kropen", perf: "gekropen", aux: "hebben/zijn", freq: false, en: "crawl", tr: "emeklemek",
    ex: { pres: "De baby kruipt over de vloer.", imp: "Een spin kroop over de muur.", perf: "De kat is onder het bed gekropen." } },
  { inf: "kunnen", imp: "kon, konden", perf: "gekund", aux: "hebben", freq: true, en: "be able", tr: "-ebilmek",
    ex: { pres: "Ik kan niet komen.", imp: "Hij kon het adres niet vinden.", perf: "Ik heb dat vroeger wel gekund." } },
  { inf: "lachen", imp: "lachte, lachten", perf: "gelachen", aux: "hebben", freq: true, en: "laugh", tr: "gülmek",
    ex: { pres: "Zij lacht heel hard.", imp: "We lachten om zijn grapje.", perf: "Ik heb gisteren veel gelachen." } },
  { inf: "laten", imp: "liet, lieten", perf: "gelaten", aux: "hebben", freq: true, en: "let", tr: "bırakmak, izin vermek",
    ex: { pres: "Ik laat de hond buiten.", imp: "Zij liet de deur open.", perf: "Hij heeft zijn tas in de auto gelaten." } },
  { inf: "lezen", imp: "las, lazen", perf: "gelezen", aux: "hebben", freq: true, en: "read", tr: "okumak",
    ex: { pres: "Ik lees de krant.", imp: "Zij las een goed boek.", perf: "Heb je dit bericht al gelezen?" } },
  { inf: "liegen", imp: "loog, logen", perf: "gelogen", aux: "hebben", freq: false, en: "lie", tr: "yalan söylemek",
    ex: { pres: "Je liegt tegen me.", imp: "Hij loog over zijn leeftijd.", perf: "Hij heeft nooit gelogen." } },
  { inf: "liggen", imp: "lag, lagen", perf: "gelegen", aux: "hebben", freq: true, en: "lie", tr: "yatmak, bulunmak",
    ex: { pres: "De kat ligt op de bank.", imp: "Ik lag gisteren vroeg in bed.", perf: "Het boek heeft hier de hele dag gelegen." } },
  { inf: "lijden", imp: "leed, leden", perf: "geleden", aux: "hebben", freq: false, en: "suffer", tr: "acı çekmek",
    ex: { pres: "Hij lijdt veel pijn.", imp: "De bevolking leed honger.", perf: "Ze hebben veel geleden." } },
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
  { inf: "ontbijten", imp: "ontbeet, ontbeten", perf: "ontbeten", aux: "hebben", freq: false, en: "have breakfast", tr: "kahvaltı etmek",
    ex: { pres: "Ik ontbijt om acht uur.", imp: "Hij ontbeet snel.", perf: "We hebben al ontbeten." } },
  { inf: "overlijden", imp: "overleed, overleden", perf: "overleden", aux: "zijn", freq: false, en: "pass away", tr: "vefat etmek",
    ex: { pres: "Zijn opa overlijdt op hoge leeftijd.", imp: "Haar kat overleed vorig jaar.", perf: "Zijn vader is vorig jaar overleden." } },
  { inf: "plegen", imp: "placht, plachten", perf: "---", aux: "hebben", freq: false, en: "be in the habit of", tr: "adet edinmek, alışkanlığı olmak",
    ex: { pres: "Hij pleegt vroeg op te staan.", imp: "Hij placht vaak te wandelen.", perf: "---" } },
  { inf: "rijden", imp: "reed, reden", perf: "gereden", aux: "hebben/zijn", freq: true, en: "ride, drive", tr: "sürmek",
    ex: { pres: "Ik rijd in een snelle auto.", imp: "Wij reden gisteren naar zee.", perf: "Heb je weleens in een vrachtwagen gereden?" } },
  { inf: "rijzen", imp: "rees, rezen", perf: "gerezen", aux: "zijn", freq: false, en: "rise", tr: "yükselmek",
    ex: { pres: "De mist rijst op.", imp: "De deken rees omhoog.", perf: "De spanning is gerezen." } },
  { inf: "roepen", imp: "riep, riepen", perf: "geroepen", aux: "hebben", freq: true, en: "call", tr: "bağırmak, seslenmek",
    ex: { pres: "De leraar roept mijn naam.", imp: "Ik riep je gisteren nog.", perf: "Heeft iemand de politie geroepen?" } },
  { inf: "ruiken", imp: "rook, roken", perf: "geroken", aux: "hebben", freq: false, en: "smell", tr: "koklamak, kokmak",
    ex: { pres: "De bloem ruikt lekker.", imp: "Hij rook gas in de keuken.", perf: "Heb je de soep geroken?" } },
  { inf: "scheiden", imp: "scheidde, scheidden", perf: "gescheiden", aux: "hebben/zijn", freq: false, en: "separate", tr: "ayırmak, boşanmak",
    ex: { pres: "Ze scheiden hun wegen.", imp: "Ze scheidden vorig jaar.", perf: "Ze zijn van elkaar gescheiden." } },
  { inf: "schenken", imp: "schonk, schonken", perf: "geschonken", aux: "hebben", freq: false, en: "pour, give", tr: "ikram etmek, dökmek",
    ex: { pres: "Ik schenk wat thee in.", imp: "Hij schonk haar een glas wijn.", perf: "Ze hebben geld geschonken." } },
  { inf: "scheppen", imp: "schiep, schiepen", perf: "geschapen", aux: "hebben", freq: false, en: "create", tr: "yaratmak, oluşturmak",
    ex: { pres: "God schiep de hemel.", imp: "De kunstenaar schiep een meesterwerk.", perf: "Dit heeft nieuwe kansen geschapen." } },
  { inf: "scheren", imp: "schoor, schoren", perf: "geschoren", aux: "hebben", freq: false, en: "shave", tr: "tıraş olmak",
    ex: { pres: "Hij scheert zijn baard.", imp: "Hij schoor zich elke ochtend.", perf: "Hij heeft zich geschoren." } },
  { inf: "schieten", imp: "schoot, schoten", perf: "geschoten", aux: "hebben/zijn", freq: false, en: "shoot", tr: "ateş etmek, vurmak",
    ex: { pres: "De spits schiet op doel.", imp: "De soldaat schoot in de lucht.", perf: "Hij heeft een doelpunt geschoten." } },
  { inf: "schijnen", imp: "scheen, schenen", perf: "geschenen", aux: "hebben", freq: true, en: "shine, appear", tr: "parlamak, görünmek",
    ex: { pres: "De zon schijnt vandaag.", imp: "De maan scheen fel.", perf: "Het heeft de hele dag geschenen." } },
  { inf: "schrijven", imp: "schreef, schreven", perf: "geschreven", aux: "hebben", freq: true, en: "write", tr: "yazmak",
    ex: { pres: "Ik schrijf een brief.", imp: "Hij schreef een mooi boek.", perf: "Heb je het adres opgeschreven?" } },
  { inf: "schrikken", imp: "schrok, schrokken", perf: "geschrokken", aux: "zijn", freq: false, en: "be shocked", tr: "korkmak, ürkmek",
    ex: { pres: "Ik schrik van dat harde geluid.", imp: "Het kind schrok van de hond.", perf: "Ik ben erg geschrokken." } },
  { inf: "schuiven", imp: "schoof, schoven", perf: "geschoven", aux: "hebben/zijn", freq: false, en: "push, shove", tr: "itmek, kaydırmak",
    ex: { pres: "Hij schuift de stoel aan tafel.", imp: "Ze schoof het gordijn open.", perf: "De kast is naar voren geschoven." } },
  { inf: "slaan", imp: "sloeg, sloegen", perf: "geslagen", aux: "hebben", freq: false, en: "hit", tr: "vurmak, dövmek",
    ex: { pres: "De klok slaat twaalf uur.", imp: "Hij sloeg de bal weg.", perf: "De dief heeft geslagen." } },
  { inf: "slapen", imp: "sliep, sliepen", perf: "geslapen", aux: "hebben", freq: true, en: "sleep", tr: "uyumak",
    ex: { pres: "Ik slaap altijd acht uur.", imp: "Zij sliep heel slecht.", perf: "Heb je lekker geslapen?" } },
  { inf: "sluiten", imp: "sloot, sloten", perf: "gesloten", aux: "hebben", freq: true, en: "close", tr: "kapatmak",
    ex: { pres: "De winkel sluit om zes uur.", imp: "Hij sloot de deur.", perf: "Is de deur gesloten?" } },
  { inf: "smelten", imp: "smolt, smolten", perf: "gesmolten", aux: "hebben/zijn", freq: false, en: "melt", tr: "erimek",
    ex: { pres: "De ijsmuts smelt in de zon.", imp: "De sneeuw smolt snel.", perf: "Het ijs is gesmolten." } },
  { inf: "snijden", imp: "sneed, sneden", perf: "gesneden", aux: "hebben", freq: true, en: "cut", tr: "kesmek",
    ex: { pres: "Ik snijd de groenten.", imp: "Ze sneed het brood.", perf: "Ik heb mijn vinger gesneden." } },
  { inf: "spreken", imp: "sprak, spraken", perf: "gesproken", aux: "hebben", freq: true, en: "speak", tr: "konuşmak",
    ex: { pres: "Ik spreek Nederlands.", imp: "We spraken over de vakantie.", perf: "Heb je met hem gesproken?" } },
  { inf: "springen", imp: "sprong, sprongen", perf: "gesprongen", aux: "hebben/zijn", freq: false, en: "jump", tr: "zıplamak",
    ex: { pres: "De kat springt op tafel.", imp: "Hij sprong in het water.", perf: "Het glas is gesprongen." } },
  { inf: "staan", imp: "stond, stonden", perf: "gestaan", aux: "hebben", freq: true, en: "stand", tr: "ayakta durmak",
    ex: { pres: "Ik sta in de rij.", imp: "Het bed stond in de hoek.", perf: "We hebben een uur gestaan." } },
  { inf: "steken", imp: "stak, staken", perf: "gestoken", aux: "hebben", freq: false, en: "sting, poke, put", tr: "sokmak, batırmak, koymak",
    ex: { pres: "De bij steekt.", imp: "Hij stak zijn hand op.", perf: "Ik ben gestoken door een wesp." } },
  { inf: "stelen", imp: "stal, stalen", perf: "gestolen", aux: "hebben", freq: false, en: "steal", tr: "çalmak",
    ex: { pres: "Wie steelt mijn fiets?", imp: "De dief stal de auto.", perf: "Mijn portemonnee is gestolen." } },
  { inf: "sterven", imp: "stierf, stierven", perf: "gestorven", aux: "zijn", freq: false, en: "die", tr: "ölmek",
    ex: { pres: "Bloemen sterven zonder water.", imp: "De oude man stierf rustig.", perf: "Zijn hond is vorig jaar gestorven." } },
  { inf: "stijgen", imp: "steeg, stegen", perf: "gestegen", aux: "zijn", freq: false, en: "rise, increase", tr: "yükselmek, artmak",
    ex: { pres: "De prijzen stijgen snel.", imp: "De temperatuur steeg gisteren.", perf: "De inflatie is gestegen." } },
  { inf: "treden", imp: "trad, traden", perf: "getreden", aux: "hebben/zijn", freq: false, en: "step", tr: "adım atmak",
    ex: { pres: "Hij treedt naar voren.", imp: "Ze traden binnen.", perf: "Hij is in het huwelijk getreden." } },
  { inf: "treffen", imp: "trof, troffen", perf: "getroffen", aux: "hebben", freq: false, en: "hit, meet", tr: "rastlamak, vurmak, etkilemek",
    ex: { pres: "Ik tref een goede vriend.", imp: "De storm trof de kust.", perf: "We hebben elkaar daar getroffen." } },
  { inf: "trekken", imp: "trok, trokken", perf: "getrokken", aux: "hebben/zijn", freq: false, en: "pull", tr: "çekmek",
    ex: { pres: "Hij trekt aan de deur.", imp: "Ze trokken naar het zuiden.", perf: "Heb je aan de touw getrokken?" } },
  { inf: "vallen", imp: "viel, vielen", perf: "gevallen", aux: "zijn", freq: true, en: "fall", tr: "düşmek",
    ex: { pres: "Pas op dat je niet valt.", imp: "De boom viel om.", perf: "Hij is van de trap gevallen." } },
  { inf: "vangen", imp: "ving, vingen", perf: "gevangen", aux: "hebben", freq: false, en: "catch", tr: "yakalamak",
    ex: { pres: "De kat vangt een muis.", imp: "Hij ving de bal.", perf: "De politie heeft de dief gevangen." } },
  { inf: "varen", imp: "voer, voeren", perf: "gevaren", aux: "hebben/zijn", freq: false, en: "sail", tr: "yelken açmak, gemiyle gitmek",
    ex: { pres: "De boot vaart naar Texel.", imp: "Wij voeren over de rivier.", perf: "Ze hebben op zee gevaren." } },
  { inf: "vechten", imp: "vocht, vochten", perf: "gevochten", aux: "hebben", freq: false, en: "fight", tr: "dövüşmek, savaşmak",
    ex: { pres: "De honden vechten om een bot.", imp: "Ze vochten voor hun rechten.", perf: "Ze hebben lang gevochten." } },
  { inf: "verbieden", imp: "verbood, verbooden", perf: "verboden", aux: "hebben", freq: false, en: "forbid", tr: "yasaklamak",
    ex: { pres: "De directie verbiedt roken.", imp: "Het bord verbood toegang.", perf: "Dat is streng verboden." } },
  { inf: "verdwijnen", imp: "verdween, verdwenen", perf: "verdwenen", aux: "zijn", freq: true, en: "disappear", tr: "kaybolmak",
    ex: { pres: "De zon verdwijnt achter de wolken.", imp: "De auto verdween in de verte.", perf: "Mijn portemonnee is verdwenen." } },
  { inf: "vergeten", imp: "vergat, vergaten", perf: "vergeten", aux: "zijn/hebben", freq: true, en: "forget", tr: "unutmak",
    ex: { pres: "Ik vergeet soms namen.", imp: "Ze vergat haar jas.", perf: "Oeps, ik ben het helemaal vergeten!" } },
  { inf: "vermijden", imp: "vermeed, vermeden", perf: "vermeden", aux: "hebben", freq: false, en: "avoid", tr: "kaçınmak",
    ex: { pres: "Ik vermijd drukke plaatsen.", imp: "Hij vermeed elk contact.", perf: "We hebben dat risico vermeden." } },
  { inf: "verliezen", imp: "verloor, verloren", perf: "verloren", aux: "hebben", freq: true, en: "lose", tr: "kaybetmek",
    ex: { pres: "We verliezen de wedstrijd.", imp: "Hij verloor zijn sleutels.", perf: "Ik heb mijn telefoon verloren." } },
  { inf: "vertrekken", imp: "vertrok, vertrokken", perf: "vertrokken", aux: "zijn", freq: true, en: "leave", tr: "ayrılmak, hareket etmek",
    ex: { pres: "De trein vertrekt nu.", imp: "Ze vertrokken gisteren vroeg.", perf: "Is hij al vertrokken?" } },
  { inf: "vinden", imp: "vond, vonden", perf: "gevonden", aux: "hebben", freq: true, en: "find", tr: "bulmak",
    ex: { pres: "Ik vind dit een mooi huis.", imp: "Ze vonden het niet leuk.", perf: "Ik heb mijn sleutels weer gevonden." } },
  { inf: "vliegen", imp: "vloog, vlogen", perf: "gevlogen", aux: "hebben/zijn", freq: true, en: "fly", tr: "uçmak",
    ex: { pres: "De vogel vliegt hoog.", imp: "We vlogen naar Spanje.", perf: "Heb je wel eens in een helikopter gevlogen?" } },
  { inf: "vouwen", imp: "vouwde, vouwden", perf: "gevouwen", aux: "hebben", freq: false, en: "fold", tr: "katlamak",
    ex: { pres: "Ik vouw de schone kleren op.", imp: "Zij vouwde het papier.", perf: "Hij heeft de brief gevouwen." } },
  { inf: "vragen", imp: "vroeg, vroegen", perf: "gevraagd", aux: "hebben", freq: true, en: "ask", tr: "sormak",
    ex: { pres: "Ik vraag de weg.", imp: "Hij vroeg naar jou.", perf: "Ik heb het aan de leraar gevraagd." } },
  { inf: "vriezen", imp: "vroor, vroeren", perf: "gevroren", aux: "hebben/zijn", freq: false, en: "freeze", tr: "donmak",
    ex: { pres: "Het vriest buiten.", imp: "Het vroor vannacht flink.", perf: "Het heeft flink gevroren." } },
  { inf: "waaien", imp: "waaide, waaiden / woei, woeien", perf: "gewaaid", aux: "hebben/zijn", freq: false, en: "blow", tr: "esmek",
    ex: { pres: "Het waait erg hard.", imp: "De wind woei door de bomen.", perf: "De hoed is weggewaaid." } },
  { inf: "wassen", imp: "waste, wasten", perf: "gewassen", aux: "hebben", freq: true, en: "wash", tr: "yıkamak",
    ex: { pres: "Ik was mijn handen.", imp: "Ze waste de auto.", perf: "Heb je de kleren al gewassen?" } },
  { inf: "wegen", imp: "woog, wogen", perf: "gewogen", aux: "hebben", freq: false, en: "weigh", tr: "tartmak, ağırlığında olmak",
    ex: { pres: "Hoeveel weeg je?", imp: "De koffer woog twintig kilo.", perf: "Ik heb me vanmorgen gewogen." } },
  { inf: "werpen", imp: "wierp, wierpen", perf: "geworpen", aux: "hebben", freq: false, en: "throw", tr: "atmak, fırlatmak",
    ex: { pres: "Hij werpt de bal naar zijn hond.", imp: "De jongen wierp een steen in het water.", perf: "Ze hebben een blikje weggeworpen." } },
  { inf: "weten", imp: "wist, wisten", perf: "geweten", aux: "hebben", freq: true, en: "know", tr: "bilmek",
    ex: { pres: "Ik weet het antwoord niet.", imp: "Wist jij dat al?", perf: "Dat heb ik nooit geweten." } },
  { inf: "wijzen", imp: "wees, wezen", perf: "gewezen", aux: "hebben", freq: false, en: "show, point", tr: "göstermek, işaret etmek",
    ex: { pres: "Hij wijst naar de kaart.", imp: "De leraar wees het bord aan.", perf: "Ze hebben de weg gewezen." } },
  { inf: "willen", imp: "wilde/wou, wilden", perf: "gewild", aux: "hebben", freq: true, en: "want", tr: "istemek",
    ex: { pres: "Ik wil graag een biertje.", imp: "Ik wilde gisteren gaan sporten.", perf: "Ze heeft altijd een hond gewild." } },
  { inf: "winnen", imp: "won, wonnen", perf: "gewonnen", aux: "hebben", freq: false, en: "win", tr: "kazanmak",
    ex: { pres: "Ons team wint de wedstrijd.", imp: "Wij wonnen de eerste prijs.", perf: "Ze hebben de hoofdprijs gewonnen." } },
  { inf: "worden", imp: "werd, werden", perf: "geworden", aux: "zijn", freq: true, en: "become", tr: "olmak",
    ex: { pres: "Ik word morgen dertig.", imp: "Het weer werd snel slechter.", perf: "Mijn broer is dokter geworden." } },
  { inf: "wrijven", imp: "wreef, wreven", perf: "gewreven", aux: "hebben", freq: false, en: "rub", tr: "ovuşturmak, ovalamak",
    ex: { pres: "Hij wrijft in zijn ogen.", imp: "Ze wreef haar koude handen warm.", perf: "Hij heeft zalf gewreven." } },
  { inf: "zeggen", imp: "zei, zeiden", perf: "gezegd", aux: "hebben", freq: true, en: "say", tr: "söylemek",
    ex: { pres: "Wat zeg je?", imp: "Zij zei dat ze ziek was.", perf: "Dat heb ik niet gezegd." } },
  { inf: "zenden", imp: "zond, zonden", perf: "gezonden", aux: "hebben", freq: false, en: "send", tr: "gndermek",
    ex: { pres: "Ik zend een pakketje.", imp: "Hij zond een brief.", perf: "Ze hebben een e-mail gezonden." } },
  { inf: "zien", imp: "zag, zagen", perf: "gezien", aux: "hebben", freq: true, en: "see", tr: "görmek",
    ex: { pres: "Ik zie een vogel.", imp: "Ik zag je gisteren op straat.", perf: "Heb je die nieuwe film al gezien?" } },
  { inf: "zijn", imp: "was, waren", perf: "geweest", aux: "zijn", freq: true, en: "be", tr: "olmak",
    ex: { pres: "Ik ben ziek.", imp: "Waar was jij gisteren?", perf: "Ik ben in Parijs geweest." } },
  { inf: "zingen", imp: "zong, zongen", perf: "gezongen", aux: "hebben", freq: true, en: "sing", tr: "şarkı söylemek",
    ex: { pres: "De vogels zingen in de boom.", imp: "Zij zong een mooi lied.", perf: "We hebben samen gezongen." } },
  { inf: "zinken", imp: "zonk, zonken", perf: "gezonken", aux: "hebben/zijn", freq: false, en: "sink", tr: "batmak",
    ex: { pres: "Het schip zinkt langzaam.", imp: "De steen zonk naar de bodem.", perf: "De boot is gezonken." } },
  { inf: "zitten", imp: "zat, zitten", perf: "gezeten", aux: "hebben", freq: true, en: "sit", tr: "oturmak",
    ex: { pres: "We zitten in de tuin.", imp: "Hij zat de hele dag binnen.", perf: "We hebben lang in de auto gezeten." } },
  { inf: "zoeken", imp: "zocht, zochten", perf: "gezocht", aux: "hebben", freq: true, en: "search, look", tr: "aramak",
    ex: { pres: "Ik zoek mijn boek.", imp: "Ik zocht je overal.", perf: "Heb je in de kast gezocht?" } },
  { inf: "zullen", imp: "zou, zouden", perf: "-", aux: "-", freq: true, en: "will, would", tr: "olacak, yapacak",
    ex: { pres: "Ik zal je morgen bellen.", imp: "Ik zou het niet weten.", perf: "Geen perfectum vorm." } },
  { inf: "zwemmen", imp: "zwom, zwommen", perf: "gezwommen", aux: "hebben/zijn", freq: true, en: "swim", tr: "yüzmek",
    ex: { pres: "Ik zwem in de zomer in zee.", imp: "Hij zwom naar de overkant.", perf: "We hebben in het zwembad gezwommen." } },
  { inf: "zweren", imp: "zwoer, zwoeren", perf: "gezworen", aux: "hebben", freq: false, en: "swear", tr: "yemin etmek",
    ex: { pres: "Ik zweer dat het waar is.", imp: "Hij zwoer op zijn moeder.", perf: "Ze hebben trouw gezworen." } },
  { inf: "zwijgen", imp: "zweeg, zwegen", perf: "gezwegen", aux: "hebben", freq: false, en: "be silent", tr: "susmak",
    ex: { pres: "Hij zwijgt tijdens de les.", imp: "De getuige zweeg in alle talen.", perf: "Ze heeft altijd gezwegen." } }
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