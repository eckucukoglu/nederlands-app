// src/data/quizData.js

export const quizQuestions = [
  {
    id: "q_verb_pres_1",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (werken) vandaag thuis.",
    options: ["werk", "werkt", "werken"],
    correctAnswer: "werk",
    explanationTr: "'ik' (ben) zamirinde fiil sadece kök (stam) halindedir. '-t' almaz.",
    explanationEn: "For 'ik' (I), the verb is just the stem. It does not take a '-t'."
  },
  {
    id: "q_verb_pres_2",
    type: "fill_in",
    tags: ["verbs_present", "word_order"], // İki farklı konuyu aynı anda test eder!
    questionNl: "___ (komen) jij uit Turkije?",
    correctAnswer: "Kom",
    explanationTr: "Soru cümlesinde 'jij' fiilden SONRA gelirse, fiildeki '-t' düşer!",
    explanationEn: "When 'jij' comes AFTER the verb in a question, the '-t' is dropped!"
  },
  {
    id: "q_verb_pres_3",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Mijn ouders ___ (zijn) op vakantie.",
    options: ["is", "ben", "zijn"],
    correctAnswer: "zijn",
    explanationTr: "'Mijn ouders' (ailem) çoğul olduğu için 'zijn' kullanılır.",
    explanationEn: "'Mijn ouders' (my parents) is plural, so 'zijn' is used."
  },
  {
    id: "q_word_order_1",
    type: "multiple_choice",
    tags: ["word_order"],
    questionNl: "Morgen ___ we naar Amsterdam.",
    options: ["gaan", "wij gaan", "gaan wij"],
    correctAnswer: "gaan",
    explanationTr: "Cümleye zaman (Morgen) ile başladığımız için devrik cümle (inversie) olur. Fiil 2. sıraya geçer.",
    explanationEn: "Starting with time (Morgen) causes inversion. The verb goes to the 2nd position."
  },
  {
    id: "q_adjectives_1",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Dit is een ___ (mooi) huis.",
    options: ["mooie", "mooi", "mooiste"],
    correctAnswer: "mooi",
    explanationTr: "Altın kural! 'Huis' bir het-woord'dur ve önünde 'een' olduğu için sıfat '-e' ALMAZ.",
    explanationEn: "Golden rule! 'Huis' is a het-word and preceded by 'een', so the adjective gets NO '-e'."
  },
  {
    id: "q_adjectives_2",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Ik heb de ___ (lekker) taart gekocht.",
    correctAnswer: "lekkere",
    explanationTr: "'de' artikeli olduğu için sıfat '-e' takısı alır.",
    explanationEn: "With the 'de' article, the adjective gets an '-e'."
  },
  // DÜZENSİZ FİİLLER (IRREGULAR VERBS) SORULARI
  {
    id: "q_irreg_verb_1",
    type: "fill_in",
    tags: ["irregular_verbs"],
    questionNl: "Gisteren ___ (kijken) ik naar een leuke film.",
    correctAnswer: "keek",
    explanationTr: "'Kijken' düzensiz bir fiildir. Hikaye geçmiş zaman (imperfectum) 'ik' formu 'keek' şeklindedir.",
    explanationEn: "'Kijken' is an irregular verb. The imperfectum 'ik' form is 'keek'."
  },
  {
    id: "q_irreg_verb_2",
    type: "multiple_choice",
    tags: ["irregular_verbs"],
    questionNl: "Wij hebben gisteren pizza ___ (eten).",
    options: ["gegeten", "geëten", "aten"],
    correctAnswer: "gegeten",
    explanationTr: "'Eten' fiilinin 3. hali (perfectum) 'gegeten'dir ve yardımcı fiil olarak 'hebben' ile kullanılır.",
    explanationEn: "The past participle (perfectum) of 'eten' is 'gegeten' and it is used with 'hebben'."
  },
  {
    id: "q_irreg_verb_3",
    type: "fill_in",
    tags: ["irregular_verbs"],
    questionNl: "Zij is vanmorgen vroeg naar Amsterdam ___ (gaan).",
    correctAnswer: "gegaan",
    explanationTr: "'Gaan' fiili yönelme ve hareket bildirdiği için perfectum'da 'zijn' (is) ile kullanılır. 3. hali 'gegaan'dır.",
    explanationEn: "'Gaan' indicates motion/direction, so it uses 'zijn' in perfectum. Its past participle is 'gegaan'."
  },
  {
    id: "q_irreg_verb_4",
    type: "multiple_choice",
    tags: ["irregular_verbs"],
    questionNl: "Hij ___ (zoeken) zijn sleutels de hele dag.",
    options: ["zoekt", "zocht", "zochten"],
    correctAnswer: "zocht",
    explanationTr: "Cümle geçmiş zamandan (de hele dag) bahsediyor. 'Zoeken' düzensiz bir fiildir ve 'hij' için imperfectum hali 'zocht' olur.",
    explanationEn: "The sentence is in the past. 'Zoeken' is irregular and its imperfectum form for 'hij' is 'zocht'."
  },
  
    
  {
    id: "q_pres_001",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (werken) elke ochtend thuis.",
    correctAnswer: "werk",
    explanationTr: "'Ik' (ben) zamiri için fiilin sadece kök (stam) hali kullanılır. 'werken' fiilinin kökü 'werk'tir.",
    explanationEn: "For the pronoun 'ik' (I), we only use the stem (stam) of the verb. The stem of 'werken' is 'werk'."
  },
  {
    id: "q_pres_002",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Jij ___ (lezen) een interessant boek.",
    options: ["lees", "leest", "lezen"],
    correctAnswer: "leest",
    explanationTr: "'Jij' (sen) zamiri için fiil köküne '-t' harfi eklenir (stam + t). Kök: 'lees' -> 'leest'.",
    explanationEn: "For the pronoun 'jij' (you), a '-t' is added to the verb stem (stam + t). Stem: 'lees' -> 'leest'."
  },
  {
    id: "q_pres_003",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Mijn vader ___ (slapen) 's middags vaak op de bank.",
    correctAnswer: "slaapt",
    explanationTr: "'Mijn vader' (hij/o) 3. tekil şahıstır. Bu yüzden 'stam + t' kuralı uygulanır. Kök: 'slaap' -> 'slaapt'.",
    explanationEn: "'Mijn vader' is 3rd person singular (hij). Therefore, the 'stam + t' rule applies. Stem: 'slaap' -> 'slaapt'."
  },
  {
    id: "q_pres_004",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Wij ___ (eten) vanavond samen pizza.",
    options: ["eet", "eetst", "eten"],
    correctAnswer: "eten",
    explanationTr: "Çoğul zamirlerde (wij, jullie, zij) fiil her zaman mastar (infinitief) halinde kalır.",
    explanationEn: "With plural pronouns (wij, jullie, zij), the verb always remains in its infinitive form."
  },
  {
    id: "q_pres_005",
    type: "fill_in",
    tags: ["verbs_present", "word_order"],
    questionNl: "Morgen ___ (drinken) jullie koffie in het café.",
    correctAnswer: "drinken",
    explanationTr: "Cümleye zaman zarfı (Morgen) ile başlansa da, 'jullie' çoğul olduğu için fiil yine mastar (drinken) halindedir.",
    explanationEn: "Even with inversion starting with time (Morgen), for 'jullie' the verb is always in the infinitive (drinken)."
  },
  {
    id: "q_pres_006",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (praten) met mijn docent.",
    correctAnswer: "praat",
    explanationTr: "'Praten' fiilinin kökü 'praat'tır. 'Ik' öznesi için ek almaz.",
    explanationEn: "The stem of 'praten' is 'praat'. For the subject 'ik', it takes no suffix."
  },
  {
    id: "q_pres_007",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Zij (tekil/o) ___ (praten) heel snel.",
    options: ["praat", "praatt", "praten"],
    correctAnswer: "praat",
    explanationTr: "Fiil kökü zaten 't' harfi ile bitiyorsa (praat), 3. tekil şahısta (hij/zij/het) fazladan bir 't' daha eklenmez.",
    explanationEn: "If the stem already ends in 't' (praat), no extra 't' is added for the 3rd person singular (hij/zij/het)."
  },
  {
    id: "q_pres_008",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (antwoorden) de e-mail van mijn baas.",
    correctAnswer: "antwoord",
    explanationTr: "'Antwoorden' fiilinin kökü 'antwoord' kelimesidir. 'Ik' için hiçbir ek almaz.",
    explanationEn: "The stem of 'antwoorden' is 'antwoord'. For 'ik', it gets no suffix."
  },
  {
    id: "q_pres_009",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "De docent ___ (antwoorden) op de moeilijke vraag.",
    options: ["antwoord", "antwoordt", "antwoorden"],
    correctAnswer: "antwoordt",
    explanationTr: "'De docent' (hij/zij) olduğu için köke 't' eklenir. (antwoord + t = antwoordt). Yazılışta 'dt' olur.",
    explanationEn: "'De docent' is 3rd person singular, so we add a 't' to the stem. (antwoord + t = antwoordt)."
  },
  {
    id: "q_pres_010",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Wat ___ (vinden) ik van deze schoenen?",
    correctAnswer: "vind",
    explanationTr: "'Ik' öznesi için sadece kök (vind) kullanılır.",
    explanationEn: "For the subject 'ik', only the stem (vind) is used."
  },
  {
    id: "q_pres_011",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Mijn zus ___ (vinden) dat een heel goed idee.",
    options: ["vind", "vindt", "vinden"],
    correctAnswer: "vindt",
    explanationTr: "'Mijn zus' (zij) olduğu için köke 't' eklenir. (vind + t = vindt).",
    explanationEn: "'Mijn zus' is 3rd person singular, so 't' is added. (vind + t = vindt)."
  },
  {
    id: "q_pres_012",
    type: "fill_in",
    tags: ["verbs_present", "word_order"],
    questionNl: "Wat ___ (vinden) jij van deze kleur?",
    correctAnswer: "vind",
    explanationTr: "ALTIN KURAL! Soru cümlesinde 'jij' veya 'je' fiilden SONRA gelirse, fiildeki 't' eki DÜŞER. Sadece kök kullanılır (vind).",
    explanationEn: "GOLDEN RULE! In a question, if 'jij/je' comes AFTER the verb, the 't' is DROPPED. Only the stem is used (vind)."
  },
  {
    id: "q_pres_013",
    type: "multiple_choice",
    tags: ["verbs_present", "word_order"],
    questionNl: "Wat ___ (vinden) u van ons nieuwe huis?",
    options: ["vind", "vindt", "vinden"],
    correctAnswer: "vindt",
    explanationTr: "Dikkat! Devrik yapıda 't' düşme kuralı SADECE 'jij/je' için geçerlidir. 'u' zamirinde 't' harfi daima kalır.",
    explanationEn: "Attention! The rule of dropping the 't' ONLY applies to 'jij/je'. With the formal 'u', the 't' always stays."
  },
  {
    id: "q_pres_014",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Later ___ (worden) ik piloot.",
    correctAnswer: "word",
    explanationTr: "'Worden' fiilinin kökü 'word' kelimesidir. 'Ik' için kök değişmez.",
    explanationEn: "The stem of 'worden' is 'word'. For 'ik', it remains the stem."
  },
  {
    id: "q_pres_015",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "De situatie ___ (worden) steeds gevaarlijker.",
    options: ["word", "wordt", "worden"],
    correctAnswer: "wordt",
    explanationTr: "'De situatie' (het/o) olduğu için köke 't' eklenir (wordt).",
    explanationEn: "'De situatie' acts as 3rd person singular (it), so a 't' is added (wordt)."
  },
  {
    id: "q_pres_016",
    type: "fill_in",
    tags: ["verbs_present", "word_order"],
    questionNl: "Hoe oud ___ (worden) jij morgen?",
    correctAnswer: "word",
    explanationTr: "'jij' fiilden sonra geldiği için 't' düşer (wordt -> word).",
    explanationEn: "Because 'jij' comes after the verb, the 't' drops (wordt -> word)."
  },
  {
    id: "q_pres_017",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (zijn) een student aan de universiteit.",
    options: ["ben", "is", "zijn"],
    correctAnswer: "ben",
    explanationTr: "'Zijn' (olmak) düzensiz bir fiildir. 'Ik' için 'ben' kullanılır.",
    explanationEn: "'Zijn' (to be) is highly irregular. For 'ik', it is 'ben'."
  },
  {
    id: "q_pres_018",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Jij ___ (zijn) mijn beste vriend.",
    correctAnswer: "bent",
    explanationTr: "'Zijn' fiilinde 'jij' çekimi 'bent' şeklindedir.",
    explanationEn: "The 'jij' form of the verb 'zijn' is 'bent'."
  },
  {
    id: "q_pres_019",
    type: "multiple_choice",
    tags: ["verbs_present", "word_order"],
    questionNl: "Waarom ___ (zijn) jij vandaag te laat?",
    options: ["ben", "bent", "is"],
    correctAnswer: "ben",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 't' düşer (bent -> ben).",
    explanationEn: "When 'jij' follows the verb in inversion, the 't' drops (bent -> ben)."
  },
  {
    id: "q_pres_020",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Mevrouw, ___ (zijn) u klaar om te bestellen?",
    correctAnswer: "bent",
    explanationTr: "'u' zamirinde devrik cümlede bile 't' düşmez, bu yüzden 'bent u' doğrudur.",
    explanationEn: "For 'u', the 't' never drops in inversion, so it is 'bent u'."
  },
  {
    id: "q_pres_021",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Het ___ (zijn) vandaag erg warm buiten.",
    options: ["ben", "is", "zijn"],
    correctAnswer: "is",
    explanationTr: "3. tekil şahıslar (hij, zij, het) için 'zijn' fiili 'is' olur.",
    explanationEn: "For 3rd person singular (hij, zij, het), the verb 'zijn' becomes 'is'."
  },
  {
    id: "q_pres_022",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Ik ___ (hebben) een nieuwe computer gekocht.",
    correctAnswer: "heb",
    explanationTr: "'Hebben' (sahip olmak) düzensizdir. 'Ik' için 'heb' kullanılır.",
    explanationEn: "'Hebben' (to have) is irregular. For 'ik', it is 'heb'."
  },
  {
    id: "q_pres_023",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Jij ___ (hebben) mooie blauwe ogen.",
    options: ["heb", "hebt", "heeft"],
    correctAnswer: "hebt",
    explanationTr: "'Hebben' fiilinde 'jij' çekimi 'hebt' şeklindedir.",
    explanationEn: "The 'jij' form of 'hebben' is 'hebt'."
  },
  {
    id: "q_pres_024",
    type: "fill_in",
    tags: ["verbs_present", "word_order"],
    questionNl: "Hoeveel broers ___ (hebben) jij?",
    correctAnswer: "heb",
    explanationTr: "'jij' fiilden sonra gelirse 't' düşer (hebt -> heb).",
    explanationEn: "When 'jij' is after the verb, the 't' drops (hebt -> heb)."
  },
  {
    id: "q_pres_025",
    type: "multiple_choice",
    tags: ["verbs_present"],
    questionNl: "Mijn broer ___ (hebben) drie katten in zijn huis.",
    options: ["heb", "hebt", "heeft"],
    correctAnswer: "heeft",
    explanationTr: "3. tekil şahıs (hij, zij, het) için 'hebben' fiili düzensiz olarak 'heeft' olur.",
    explanationEn: "For 3rd person singular (hij, zij, het), 'hebben' irregularly becomes 'heeft'."
  },
  {
    id: "q_pronouns_026",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Ik zie de man. Ik zie ___ (hij) elke dag.",
    correctAnswer: "hem",
    explanationTr: "Nesne durumundaki 'hij' (o), 'hem' (onu/ona) şekline dönüşür.",
    explanationEn: "The object form of 'hij' (he) is 'hem' (him)."
  },
  {
    id: "q_pronouns_027",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "Hij belt zijn moeder. Hij belt ___ nu.",
    options: ["haar", "zij", "ze"],
    correctAnswer: "haar",
    explanationTr: "Nesne durumundaki 'zij/ze' (dişil - o), 'haar' (onu/ona) olur.",
    explanationEn: "The object form of 'zij/ze' (she) is 'haar' (her)."
  },
  {
    id: "q_pronouns_028",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "De leraar praat met ___ (ik) na de les.",
    correctAnswer: "mij",
    explanationTr: "'ik' (ben) zamiri nesne durumunda veya bir edattan (met) sonra 'mij/me' olur. Vurgulu form 'mij'dir.",
    explanationEn: "'ik' (I) becomes 'mij/me' as an object or after a preposition. 'mij' is the emphasized form."
  },
  {
    id: "q_pronouns_029",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "We kijken naar de kinderen. We zien ___ in de tuin spelen.",
    options: ["hen", "zij", "hun"],
    correctAnswer: "hen",
    explanationTr: "Çoğul 'zij' (onlar) zamiri nesne konumunda vurgulu olarak 'hen' (onları) şeklini alır. ('ze' de kullanılabilir).",
    explanationEn: "The plural 'zij' (they) becomes 'hen' or 'ze' (them) when used as an object."
  },
  {
    id: "q_pronouns_030",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Ik geef het boek aan ___ (jij).",
    correctAnswer: "jou",
    explanationTr: "'jij' zamiri edattan (aan) sonra veya nesne durumunda 'jou/je' olur. Vurgulu kullanıldığı için 'jou' doğru yanıttır.",
    explanationEn: "After a preposition (aan), 'jij' becomes 'jou/je'. 'jou' is used for emphasis."
  },
  {
    id: "q_pronouns_031",
    type: "multiple_choice",
    tags: ["pronouns_possessive"],
    questionNl: "Ik heb een fiets. Dit is ___ fiets.",
    options: ["mij", "ik", "mijn"],
    correctAnswer: "mijn",
    explanationTr: "'Benim' anlamını veren iyelik zamiri 'mijn' kelimesidir.",
    explanationEn: "The possessive pronoun for 'my' is 'mijn'."
  },
  {
    id: "q_pronouns_032",
    type: "fill_in",
    tags: ["pronouns_possessive"],
    questionNl: "Jij hebt een tas. Dat is ___ (jij) tas.",
    correctAnswer: "jouw",
    explanationTr: "'Senin' anlamını veren vurgulu iyelik zamiri 'jouw' kelimesidir. ('je' de yazılabilir ama vurgu için 'jouw' öğretilir).",
    explanationEn: "The emphasized possessive pronoun for 'your' is 'jouw'."
  },
  {
    id: "q_pronouns_033",
    type: "multiple_choice",
    tags: ["pronouns_possessive"],
    questionNl: "Hij heeft een grote auto. Dat is ___ auto.",
    options: ["hem", "zijn", "haar"],
    correctAnswer: "zijn",
    explanationTr: "'Onun' (eril) anlamını veren iyelik zamiri 'zijn' kelimesidir.",
    explanationEn: "The possessive pronoun for 'his' is 'zijn'."
  },
  {
    id: "q_pronouns_034",
    type: "fill_in",
    tags: ["pronouns_possessive"],
    questionNl: "Zij heeft een nieuwe jas. Dat is ___ (zij) jas.",
    correctAnswer: "haar",
    explanationTr: "'Onun' (dişil) anlamını veren iyelik zamiri 'haar' kelimesidir.",
    explanationEn: "The possessive pronoun for 'her' is 'haar'."
  },
  {
    id: "q_pronouns_035",
    type: "multiple_choice",
    tags: ["pronouns_possessive", "articles_plurals"],
    questionNl: "Wij hebben een huis. Dat is ___ huis.",
    options: ["onze", "ons", "wij"],
    correctAnswer: "ons",
    explanationTr: "'Huis' bir het-woord olduğu için 'bizim' derken 'ons' kullanılır. De-woorden için 'onze' kullanılır.",
    explanationEn: "Because 'huis' is a het-word, we use 'ons' for 'our'. For de-words, we use 'onze'."
  },
  {
    id: "q_pronouns_036",
    type: "fill_in",
    tags: ["pronouns_possessive", "articles_plurals"],
    questionNl: "Wij hebben een tuin. Dat is ___ (wij) tuin.",
    correctAnswer: "onze",
    explanationTr: "'Tuin' bir de-woord (de tuin) olduğu için 'bizim' derken 'onze' kullanılır.",
    explanationEn: "Because 'tuin' is a de-word (de tuin), we use 'onze' for 'our'."
  },
  {
    id: "q_pronouns_037",
    type: "multiple_choice",
    tags: ["pronouns_possessive"],
    questionNl: "Jullie hebben een goede docent. Dit is ___ docent.",
    options: ["jullie", "hun", "jouw"],
    correctAnswer: "jullie",
    explanationTr: "'Jullie' zamirinin iyelik (sizin) hali de aynen 'jullie' şeklindedir.",
    explanationEn: "The possessive form of 'jullie' (yours - plural) is also 'jullie'."
  },
  {
    id: "q_pronouns_038",
    type: "fill_in",
    tags: ["pronouns_possessive"],
    questionNl: "De studenten hebben morgen een test. Het is ___ (zij - pluralis) test.",
    correctAnswer: "hun",
    explanationTr: "Çoğul (onlar) için iyelik zamiri (onların) 'hun' kelimesidir.",
    explanationEn: "The possessive pronoun for plural 'they' (their) is 'hun'."
  },
  {
    id: "q_reading_039",
    type: "multiple_choice",
    tags: ["reading_comprehension", "verbs_present"],
    questionNl: "Lees de tekst: 'Hallo, ik ben Sanne. Ik ben 25 jaar en ik woon in Rotterdam. Ik werk als verpleegkundige in een groot ziekenhuis. Mijn vriend heet Luuk. Hij studeert informatica.'\n\nWaar ___ (wonen) Sanne?",
    options: ["woon", "woont", "wonen"],
    correctAnswer: "woont",
    explanationTr: "Metne göre özne Sanne (zij). Bu yüzden 'stam + t' (woon+t) kullanılır.",
    explanationEn: "Based on the text, the subject is Sanne (zij). Therefore, we use 'stam + t' (woon+t)."
  },
  {
    id: "q_reading_040",
    type: "fill_in",
    tags: ["reading_comprehension", "verbs_present"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat ___ (doen) Sanne in het ziekenhuis?",
    correctAnswer: "werkt",
    explanationTr: "Metinde 'Ik werk als verpleegkundige' diyor. Sanne (zij) için 'werkt' doğru cevaptır. ('doet' de gramer olarak doğrudur ama bağlam 'werkt' fiilini istiyor).",
    explanationEn: "The text says 'Ik werk...'. For Sanne (zij), 'werkt' is the correct answer."
  },
  {
    id: "q_reading_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "pronouns_subject"],
    questionNl: "Lees de tekst opnieuw: 'Mijn vriend heet Luuk. Hij studeert informatica.'\n\nLuuk is de vriend van Sanne. ___ studeert informatica.",
    options: ["Hij", "Zij", "Hem"],
    correctAnswer: "Hij",
    explanationTr: "Luuk bir erkek ismi olduğu için özne olarak 'Hij' (O) kullanılır.",
    explanationEn: "Luuk is a male name, so the subject pronoun 'Hij' (He) is used."
  },
  {
    id: "q_reading_042",
    type: "fill_in",
    tags: ["reading_comprehension", "pronouns_possessive"],
    questionNl: "Is dit het ziekenhuis van Sanne? Ja, dat is ___ (zij) ziekenhuis.",
    correctAnswer: "haar",
    explanationTr: "Sanne (dişil) için 'onun' anlamına gelen iyelik zamiri 'haar' kullanılır.",
    explanationEn: "For Sanne (female), the possessive pronoun 'her' is 'haar'."
  },
  {
    id: "q_reading_043",
    type: "multiple_choice",
    tags: ["reading_comprehension", "verbs_present"],
    questionNl: "Lees de tekst: 'Wij zijn de familie De Jong. We hebben een mooi huis in Utrecht. Op zondag gaan we vaak naar het bos. Onze kinderen, Sem en Emma, spelen dan met de hond. De hond heet Max.'\n\nDe familie De Jong ___ (hebben) een mooi huis.",
    options: ["heb", "heeft", "hebben"],
    correctAnswer: "heeft",
    explanationTr: "Hollandacada 'familie' (aile) kelimesi tekil bir kelimedir (de familie). Bu yüzden 'heeft' kullanılır.",
    explanationEn: "In Dutch, 'familie' (family) is a singular noun (de familie). Therefore, 'heeft' is used."
  },
  {
    id: "q_reading_044",
    type: "fill_in",
    tags: ["reading_comprehension", "verbs_present"],
    questionNl: "Waar ___ (gaan) de familie naartoe op zondag volgens de tekst?",
    correctAnswer: "gaat",
    explanationTr: "'De familie' tekil olduğu için 'gaat' kullanılır. Metindeki 'gaan we' bizi yanıltmamalı, çünkü orada özne 'we'dir.",
    explanationEn: "Since 'de familie' is singular, 'gaat' is used. Don't be confused by 'gaan we' in the text, where the subject is 'we'."
  },
  {
    id: "q_reading_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "verbs_present"],
    questionNl: "De kinderen ___ (spelen) met de hond.",
    options: ["speel", "speelt", "spelen"],
    correctAnswer: "spelen",
    explanationTr: "'De kinderen' (çocuklar) çoğul bir öznedir (zij). Çoğul öznelerde fiil mastar (spelen) halinde kalır.",
    explanationEn: "'De kinderen' (the children) is a plural subject (zij). With plural subjects, the verb remains in the infinitive (spelen)."
  },
  {
    id: "q_reading_046",
    type: "fill_in",
    tags: ["reading_comprehension", "pronouns_subject"],
    questionNl: "De hond heet Max en ___ (de hond) blaft heel veel.",
    correctAnswer: "hij",
    explanationTr: "'De hond' bir de-woord olduğu için zamir olarak 'hij' ile işaret edilir.",
    explanationEn: "Since 'de hond' is a de-word, it is referred to with the pronoun 'hij'."
  },
  {
    id: "q_reading_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "pronouns_possessive"],
    questionNl: "Het huis is van de familie De Jong. Het is ___ huis.",
    options: ["zijn", "hun", "onze"],
    correctAnswer: "hun",
    explanationTr: "'Onların evi' demek için çoğul iyelik zamiri olan 'hun' kullanılır.",
    explanationEn: "To say 'their house', the plural possessive pronoun 'hun' is used."
  },
  {
    id: "q_pres_048",
    type: "fill_in",
    tags: ["verbs_present", "word_order"],
    questionNl: "Vanavond ___ (maken) ik mijn huiswerk.",
    correctAnswer: "maak",
    explanationTr: "Cümleye zaman (Vanavond) ile başladık, devrik cümle oldu ama özne 'ik' olduğu için fiil yine sadece kök (maak) halindedir.",
    explanationEn: "Inversion happens because we start with time (Vanavond), but since the subject is 'ik', the verb is still just the stem (maak)."
  },
  {
    id: "q_pres_049",
    type: "multiple_choice",
    tags: ["verbs_present", "word_order"],
    questionNl: "___ (Zien) je die grote vogel daar?",
    options: ["Ziet", "Zien", "Zie"],
    correctAnswer: "Zie",
    explanationTr: "Soru cümlesinde 'je/jij' fiilden sonra gelince 't' düşer. (Ziet -> Zie).",
    explanationEn: "In a question, when 'je/jij' follows the verb, the 't' drops. (Ziet -> Zie)."
  },
  {
    id: "q_pres_050",
    type: "fill_in",
    tags: ["verbs_present"],
    questionNl: "Jullie ___ (weten) alles over grammatica!",
    correctAnswer: "weten",
    explanationTr: "Çoğul şahıs 'jullie' için fiil daima mastar halindedir.",
    explanationEn: "For the plural person 'jullie', the verb is always in its infinitive form."
  },
  
  
  {
    id: "q_wo_001",
    type: "multiple_choice",
    tags: ["word_order", "verbs_present"],
    questionNl: "Ik ___ (gaan) morgen naar de markt.",
    options: ["ga", "gaat", "gaan"],
    correctAnswer: "ga",
    explanationTr: "Normal cümle dizilimi (Hoofdzin): Özne + Fiil + Zaman + Yer. 'Ik' için fiil sadece kök (ga) halindedir.",
    explanationEn: "Normal main clause order: Subject + Verb + Time + Place. For 'Ik', the verb is just the stem (ga)."
  },
  {
    id: "q_wo_002",
    type: "fill_in",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Morgen ___ (gaan) ik naar de markt.",
    correctAnswer: "ga",
    explanationTr: "Devrik cümle (Inversie)! Cümleye zaman (Morgen) ile başladığımız için fiil 2. sıraya, özne 3. sıraya geçer. 'Ik' öznesi için fiil çekimi değişmez (ga).",
    explanationEn: "Inversion! Because the sentence starts with time (Morgen), the verb moves to the 2nd position and the subject to the 3rd. The conjugation for 'Ik' remains 'ga'."
  },
  {
    id: "q_wo_003",
    type: "multiple_choice",
    tags: ["word_order", "verbs_present"],
    questionNl: "Mijn vader ___ (komen) uit Spanje.",
    options: ["kom", "komt", "komen"],
    correctAnswer: "komt",
    explanationTr: "Normal dizilim. Özne 3. tekil şahıs (hij) olduğu için fiile '-t' eklenir (kom + t).",
    explanationEn: "Normal order. The subject is 3rd person singular (hij), so '-t' is added to the verb (kom + t)."
  },
  {
    id: "q_wo_004",
    type: "fill_in",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Uit Spanje ___ (komen) mijn vader.",
    correctAnswer: "komt",
    explanationTr: "Cümleye yer (Uit Spanje) ile başlandığı için inversie (devrik yapı) olur. Özne 3. tekil şahıs olduğu için '-t' kalır.",
    explanationEn: "Starting with a place (Uit Spanje) causes inversion. The '-t' stays because the subject is 3rd person singular."
  },
  {
    id: "q_wo_005",
    type: "multiple_choice",
    tags: ["word_order", "verbs_present"],
    questionNl: "Wij ___ (eten) vanavond pizza.",
    options: ["eet", "eetst", "eten"],
    correctAnswer: "eten",
    explanationTr: "Çoğul özne (wij) ile normal cümle. Fiil mastar halinde (eten) kullanılır.",
    explanationEn: "Normal sentence with a plural subject (wij). The verb is in its infinitive form (eten)."
  },
  {
    id: "q_wo_006",
    type: "fill_in",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Zondag ___ (werken) jij in het café.",
    correctAnswer: "werk",
    explanationTr: "ALTIN KURAL! Inversie var. 'jij' öznesi fiilden SONRA geldiği için fiildeki '-t' harfi DÜŞER. (werkt -> werk).",
    explanationEn: "GOLDEN RULE! There is inversion. Because the subject 'jij' comes AFTER the verb, the '-t' is DROPPED. (werkt -> werk)."
  },
  {
    id: "q_wo_007",
    type: "multiple_choice",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Zondag ___ (werken) u in het café.",
    options: ["werk", "werkt", "werken"],
    correctAnswer: "werkt",
    explanationTr: "İstisna: Devrik cümlede '-t' harfinin düşmesi SADECE 'jij/je' için geçerlidir. Resmi 'u' zamirinde '-t' her zaman kalır.",
    explanationEn: "Exception: Dropping the '-t' in inversion ONLY applies to 'jij/je'. With the formal 'u', the '-t' always remains."
  },
  {
    id: "q_wo_008",
    type: "fill_in",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Zondag ___ (werken) hij in het café.",
    correctAnswer: "werkt",
    explanationTr: "Inversie durumunda 'hij, zij, het' zamirleri için '-t' kuralı değişmez. Fiil '-t' almaya devam eder.",
    explanationEn: "In inversion, the rule doesn't change for 'hij, zij, het'. The verb still takes a '-t'."
  },
  {
    id: "q_wo_009",
    type: "multiple_choice",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Vaak ___ (zijn) ik op zondag vrij.",
    options: ["ben", "bent", "is"],
    correctAnswer: "ben",
    explanationTr: "Cümleye 'vaak' (sıklıkla) zarfı ile başladık, bu yüzden fiil 2. sıradadır. 'Ik' için 'zijn' fiili 'ben' olur.",
    explanationEn: "Started with the adverb 'vaak' (often), so the verb is 2nd. For 'Ik', the verb 'zijn' is 'ben'."
  },
  {
    id: "q_wo_010",
    type: "fill_in",
    tags: ["word_order", "inversion", "verbs_present"],
    questionNl: "Meestal ___ (hebben) we geen tijd.",
    correctAnswer: "hebben",
    explanationTr: "Inversie var ama özne 'we' (çoğul) olduğu için fiil her halükarda mastar (hebben) halinde kalır.",
    explanationEn: "Inversion is applied, but since the subject is 'we' (plural), the verb remains in the infinitive (hebben)."
  },
  {
    id: "q_wo_011",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Zijn) ik te laat?",
    correctAnswer: "Ben",
    explanationTr: "Evet/Hayır sorularında fiil başa gelir. 'Ik' için 'zijn' fiilinin çekimi 'Ben'dir.",
    explanationEn: "In yes/no questions, the verb comes first. For 'Ik', the conjugation of 'zijn' is 'Ben'."
  },
  {
    id: "q_wo_012",
    type: "multiple_choice",
    tags: ["questions", "verbs_present", "word_order"],
    questionNl: "___ (Wonen) jij in Amsterdam?",
    options: ["Woon", "Woont", "Wonen"],
    correctAnswer: "Woon",
    explanationTr: "ALTIN KURAL! Soru cümlesinde 'jij' fiilden SONRA geldiği için fiildeki '-t' harfi düşer.",
    explanationEn: "GOLDEN RULE! In a question, because 'jij' comes AFTER the verb, the '-t' is dropped."
  },
  {
    id: "q_wo_013",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Wonen) u in Rotterdam?",
    correctAnswer: "Woont",
    explanationTr: "Soru cümlesi olsa da 'u' zamirinde '-t' düşmez. O yüzden 'Woont u' olur.",
    explanationEn: "Even in a question, the '-t' doesn't drop for 'u'. So it remains 'Woont u'."
  },
  {
    id: "q_wo_014",
    type: "multiple_choice",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Werken) hij vandaag?",
    options: ["Werk", "Werkt", "Werken"],
    correctAnswer: "Werkt",
    explanationTr: "3. tekil şahıs (hij) soru cümlesinde de olsa fiilin '-t' harfi kalır.",
    explanationEn: "For 3rd person singular (hij), the verb keeps its '-t' even in a question."
  },
  {
    id: "q_wo_015",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Gaan) wij naar de bioscoop?",
    correctAnswer: "Gaan",
    explanationTr: "Çoğul öznelerde (wij) soru cümlesi de olsa fiil mastar halindedir.",
    explanationEn: "With plural subjects (wij), the verb stays in the infinitive even in a question."
  },
  {
    id: "q_wo_016",
    type: "multiple_choice",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Hebben) jullie zin in koffie?",
    options: ["Heb", "Hebt", "Hebben"],
    correctAnswer: "Hebben",
    explanationTr: "'Jullie' çoğul bir özne olduğu için fiil mastar halinde (hebben) başa gelir.",
    explanationEn: "'Jullie' is a plural subject, so the verb comes first in its infinitive form (hebben)."
  },
  {
    id: "q_wo_017",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Hebben) zij (tekil) een auto?",
    correctAnswer: "Heeft",
    explanationTr: "Tekil 'zij' (o - kadın) öznesi için 'hebben' fiilinin çekimi 'heeft' olur.",
    explanationEn: "For the singular subject 'zij' (she), the conjugation of 'hebben' is 'heeft'."
  },
  {
    id: "q_wo_018",
    type: "multiple_choice",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Zijn) de kinderen op school?",
    options: ["Ben", "Is", "Zijn"],
    correctAnswer: "Zijn",
    explanationTr: "'De kinderen' (çocuklar) çoğul olduğu için yardımcı fiil 'zijn' başa gelir.",
    explanationEn: "'De kinderen' (the children) is plural, so the auxiliary verb 'zijn' comes first."
  },
  {
    id: "q_wo_019",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "___ (Zijn) u meneer Bakker?",
    correctAnswer: "Bent",
    explanationTr: "Soru cümlesinde 'u' zamiri için 'zijn' fiilinin çekimi 'Bent'tir.",
    explanationEn: "In a question, the conjugation of 'zijn' for the pronoun 'u' is 'Bent'."
  },
  {
    id: "q_wo_020",
    type: "multiple_choice",
    tags: ["questions", "verbs_present", "word_order"],
    questionNl: "___ (Hebben) jij een leuke vakantie gehad?",
    options: ["Heb", "Hebt", "Heeft"],
    correctAnswer: "Heb",
    explanationTr: "'jij' fiilden sonra geldiği için 'hebben' fiilindeki '-t' düşer (hebt -> heb).",
    explanationEn: "Because 'jij' follows the verb, the '-t' on 'hebben' drops (hebt -> heb)."
  },
  {
    id: "q_wo_021",
    type: "fill_in",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Wat ___ (drinken) jij?",
    correctAnswer: "drink",
    explanationTr: "Soru kelimesi (Wat) + Fiil + Özne. 'jij' fiilden sonra geldiği için 't' düştü.",
    explanationEn: "Question word (Wat) + Verb + Subject. Because 'jij' is after the verb, 't' is dropped."
  },
  {
    id: "q_wo_022",
    type: "multiple_choice",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Waar ___ (wonen) je ouders?",
    options: ["woon", "woont", "wonen"],
    correctAnswer: "wonen",
    explanationTr: "'Je ouders' (senin ailen) çoğul bir öznedir. Bu yüzden fiil mastar (wonen) halindedir.",
    explanationEn: "'Je ouders' (your parents) is a plural subject. Thus, the verb is in the infinitive (wonen)."
  },
  {
    id: "q_wo_023",
    type: "fill_in",
    tags: ["questions", "verbs_present"],
    questionNl: "Wie ___ (hebben) mijn boek?",
    correctAnswer: "heeft",
    explanationTr: "'Wie' (kim) soru kelimesi özne görevindeyse, her zaman 3. tekil şahıs (hij/zij) gibi işlem görür. Bu yüzden 'heeft' kullanılır.",
    explanationEn: "When 'Wie' (who) acts as the subject, it is always treated as 3rd person singular. So 'heeft' is used."
  },
  {
    id: "q_wo_024",
    type: "multiple_choice",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Wanneer ___ (komen) de trein aan?",
    options: ["kom", "komt", "komen"],
    correctAnswer: "komt",
    explanationTr: "'De trein' tekil bir öznedir (hij/het). Bu yüzden fiil '-t' alır (komt).",
    explanationEn: "'De trein' is a singular subject (it). Therefore, the verb takes a '-t' (komt)."
  },
  {
    id: "q_wo_025",
    type: "fill_in",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Waarom ___ (lachen) hij?",
    correctAnswer: "lacht",
    explanationTr: "Soru kelimesi + Fiil + Özne. Özne 'hij' olduğu için '-t' kalır.",
    explanationEn: "Question word + Verb + Subject. The subject is 'hij', so the '-t' stays."
  },
  {
    id: "q_wo_026",
    type: "multiple_choice",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Hoe ___ (heten) je zus?",
    options: ["heet", "heett", "heten"],
    correctAnswer: "heet",
    explanationTr: "'Je zus' (kız kardeşin) 3. tekil şahıstır. Fiil kökü zaten 't' ile bittiği için ekstra 't' almaz (heet).",
    explanationEn: "'Je zus' is 3rd person singular. The stem already ends in 't', so it takes no extra 't' (heet)."
  },
  {
    id: "q_wo_027",
    type: "fill_in",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Welke talen ___ (spreken) jij?",
    correctAnswer: "spreek",
    explanationTr: "'Welke' soru grubu başa gelir. 'jij' fiilden sonra geldiği için 't' düşer.",
    explanationEn: "'Welke' question group comes first. Because 'jij' is after the verb, the 't' drops."
  },
  {
    id: "q_wo_028",
    type: "multiple_choice",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Welk boek ___ (lezen) jij op dit moment?",
    options: ["lees", "leest", "lezen"],
    correctAnswer: "lees",
    explanationTr: "Soru grubu (Welk boek) + Fiil + Özne (jij). Fiilden sonraki 'jij' kuralı işler ve 't' düşer.",
    explanationEn: "Question group + Verb + Subject (jij). The post-verb 'jij' rule applies, dropping the 't'."
  },
  {
    id: "q_wo_029",
    type: "fill_in",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Hoeveel broers ___ (hebben) jij?",
    correctAnswer: "heb",
    explanationTr: "'Hoeveel broers' başa gelir, sonra fiil, sonra özne. 'jij' fiilin sağına düştüğü için 'hebt' yerine 'heb' olur.",
    explanationEn: "'Hoeveel broers' is first, then the verb, then subject. Since 'jij' is to the right of the verb, 'hebt' becomes 'heb'."
  },
  {
    id: "q_wo_030",
    type: "multiple_choice",
    tags: ["questions", "word_order", "verbs_present"],
    questionNl: "Wat ___ (doen) jij morgenavond?",
    options: ["doe", "doet", "doen"],
    correctAnswer: "doe",
    explanationTr: "'Wat' başa gelir, sonra fiil. 'jij' fiilden sonra olduğu için 't' düşer.",
    explanationEn: "'Wat' comes first, then the verb. Because 'jij' is after the verb, the 't' drops."
  },
  {
    id: "q_wo_031",
    type: "fill_in",
    tags: ["word_order", "modal_verbs"],
    questionNl: "Ik wil vanavond een boek ___ (lezen).",
    correctAnswer: "lezen",
    explanationTr: "Cümlede bir kipli fiil (modaal werkwoord - wil) varsa, asıl eylemi bildiren fiil mastar (infinitief) halinde cümlenin en sonuna gider.",
    explanationEn: "If there is a modal verb (wil) in the sentence, the main action verb goes to the very end of the sentence in its infinitive form."
  },
  {
    id: "q_wo_032",
    type: "multiple_choice",
    tags: ["word_order", "modal_verbs"],
    questionNl: "Morgen moet ik om 8 uur ___ (werken).",
    options: ["werk", "werkt", "werken"],
    correctAnswer: "werken",
    explanationTr: "'moet' (zorunda olmak) kipli fiili nedeniyle asıl fiil cümlenin en sonunda ve mastar halindedir.",
    explanationEn: "Due to the modal verb 'moet' (must), the main verb goes to the end of the sentence in the infinitive."
  },
  {
    id: "q_wo_033",
    type: "fill_in",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Kan jij mij even ___ (helpen)?",
    correctAnswer: "helpen",
    explanationTr: "Soru cümlesinde de kural değişmez. Kipli fiil (Kan) başa gelir, asıl fiil (helpen) cümlenin en sonuna gider.",
    explanationEn: "The rule remains in a question. The modal verb (Kan) is at the front, and the main verb (helpen) goes to the very end."
  },
  {
    id: "q_wo_034",
    type: "multiple_choice",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Wat wil je vanavond ___ (eten)?",
    options: ["eet", "eten", "gegeten"],
    correctAnswer: "eten",
    explanationTr: "Soru kelimesi (Wat) + Modal Fiil (wil) + Özne + Zaman + Ana Fiil (Sonda ve mastar).",
    explanationEn: "Question word (Wat) + Modal (wil) + Subject + Time + Main Verb (At the end, infinitive)."
  },
  {
    id: "q_wo_035",
    type: "fill_in",
    tags: ["word_order", "modal_verbs"],
    questionNl: "Hij zal het raam voor me ___ (sluiten).",
    correctAnswer: "sluiten",
    explanationTr: "'Zal' (zullen) kullanıldığında diğer fiil daima mastar halinde sona gider.",
    explanationEn: "When 'zal' (zullen) is used, the other verb always goes to the end in the infinitive form."
  },
  {
    id: "q_wo_036",
    type: "multiple_choice",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Mag ik mijn fiets hier ___ (parkeren)?",
    options: ["parkeer", "parkeert", "parkeren"],
    correctAnswer: "parkeren",
    explanationTr: "'Mag' (mogen) izin fiilidir, ana eylemi bildiren 'parkeren' cümlenin sonunda mastar halinde yer alır.",
    explanationEn: "'Mag' (mogen) is a modal verb of permission, the main action 'parkeren' stays at the end in the infinitive."
  },
  {
    id: "q_wo_037",
    type: "fill_in",
    tags: ["word_order", "modal_verbs"],
    questionNl: "Wij moeten eerst de grammatica ___ (leren).",
    correctAnswer: "leren",
    explanationTr: "'Moeten' modal fiiliyle kullanıldığı için 'leren' sona gider.",
    explanationEn: "Used with the modal verb 'moeten', so 'leren' goes to the end."
  },
  {
    id: "q_wo_038",
    type: "multiple_choice",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Wilt u nog iets ___ (drinken)?",
    options: ["drink", "drinkt", "drinken"],
    correctAnswer: "drinken",
    explanationTr: "Modal fiil (Wilt) cümlenin ikinci sırasında veya soru olduğu için en başındadır, asıl fiil sonda mastar halindedir.",
    explanationEn: "The modal verb is in the 2nd position or 1st in a question, the main verb is infinitive at the end."
  },
  {
    id: "q_wo_039",
    type: "fill_in",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Zullen we samen naar huis ___ (gaan)?",
    correctAnswer: "gaan",
    explanationTr: "'Zullen' ile öneri sunarken de ana eylem (gaan) cümlenin sonunda yer alır.",
    explanationEn: "When making a suggestion with 'Zullen', the main action (gaan) is also placed at the end of the sentence."
  },
  {
    id: "q_wo_040",
    type: "multiple_choice",
    tags: ["questions", "word_order", "modal_verbs"],
    questionNl: "Waar kan ik de auto ___ (parkeren)?",
    options: ["parkeer", "parkeert", "parkeren"],
    correctAnswer: "parkeren",
    explanationTr: "Soru kelimesi (Waar) + modal fiil (kan) + özne (ik) + nesne (de auto) + ana fiil (parkeren).",
    explanationEn: "Question word (Waar) + modal verb (kan) + subject (ik) + object (de auto) + main verb (parkeren)."
  },
  {
    id: "q_wo_041",
    type: "fill_in",
    tags: ["reading_comprehension", "word_order", "inversion"],
    questionNl: "Lees de tekst: 'Ik ben Anna. Normaal sta ik om 7 uur op. Vandaag slaap ik lang uit. Om 10 uur drink ik koffie.'\n\nElke dag ___ (fietsen) Anna naar haar werk.",
    correctAnswer: "fietst",
    explanationTr: "Cümleye 'Elke dag' zaman zarfıyla başlandığı için devrik (inversie) olur. Anna (zij) için 'stam+t' kuralı ile 'fietst' olur.",
    explanationEn: "Starting with 'Elke dag' causes inversion. For Anna (zij), we use 'stam+t' resulting in 'fietst'."
  },
  {
    id: "q_wo_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "questions", "word_order"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom ___ (slapen) ze vandaag lang uit?",
    options: ["slaap", "slaapt", "slapen"],
    correctAnswer: "slaapt",
    explanationTr: "Soru cümlesinde 'ze' (o-kadın) zamirinden önce fiil gelir. 'Ze' için '-t' harfi düşmez, bu yüzden 'slaapt'.",
    explanationEn: "In the question, the verb precedes 'ze' (she). The '-t' does not drop for 'ze', so it's 'slaapt'."
  },
  {
    id: "q_wo_043",
    type: "fill_in",
    tags: ["reading_comprehension", "questions", "word_order"],
    questionNl: "Hoe laat ___ (drinken) Anna koffie?",
    correctAnswer: "drinkt",
    explanationTr: "Anna (zij) 3. tekil şahıstır. Fiil 'drink + t = drinkt' olur.",
    explanationEn: "Anna (zij) is 3rd person singular. The verb becomes 'drink + t = drinkt'."
  },
  {
    id: "q_wo_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "questions", "verbs_present"],
    questionNl: "___ (Vinden) Anna koffie lekker?",
    options: ["Vind", "Vindt", "Vinden"],
    correctAnswer: "Vindt",
    explanationTr: "Anna (zij) öznesi olduğu için soru cümlesinde bile '-t' düşmez. ('Vind' köküne 't' eklenir: Vindt).",
    explanationEn: "Because the subject is Anna (zij), the '-t' doesn't drop even in a question. ('t' is added to 'Vind': Vindt)."
  },
  {
    id: "q_wo_045",
    type: "fill_in",
    tags: ["reading_comprehension", "word_order"],
    questionNl: "Anna ___ (wonen) in Amsterdam.",
    correctAnswer: "woont",
    explanationTr: "Standart düz cümle dizilimi (Hoofdzin). Anna (zij) -> woont.",
    explanationEn: "Standard main clause order. Anna (zij) -> woont."
  },
  {
    id: "q_wo_046",
    type: "fill_in",
    tags: ["reading_comprehension", "questions", "word_order"],
    questionNl: "Lees de dialoog: 'Anna: Hoi, ga je mee naar de stad? Bart: Nee, ik moet vandaag werken. Anna: Werk je in de supermarkt? Bart: Ja, daar werk ik elke zaterdag.'\n\n___ (Gaan) je mee naar de stad?",
    correctAnswer: "Ga",
    explanationTr: "Diyalogdaki ilk cümle! 'je' fiilden sonra geldiği için 't' düştü ve 'Ga' oldu.",
    explanationEn: "First sentence in the dialogue! Because 'je' follows the verb, the 't' drops becoming 'Ga'."
  },
  {
    id: "q_wo_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Bart ___ (moeten) vandaag werken.",
    options: ["moet", "moeten", "moetst"],
    correctAnswer: "moet",
    explanationTr: "Bart (hij) için 'moeten' modal fiilinin çekimi 'moet' şeklindedir.",
    explanationEn: "For Bart (hij), the conjugation of the modal verb 'moeten' is 'moet'."
  },
  {
    id: "q_wo_048",
    type: "fill_in",
    tags: ["reading_comprehension", "questions", "word_order"],
    questionNl: "___ (Werken) je in de supermarkt?",
    correctAnswer: "Werk",
    explanationTr: "Yine altın kural: Soru cümlesi olduğu için 'je' (sen) fiilden sonra gelir ve fiildeki '-t' düşer.",
    explanationEn: "Golden rule again: As it's a question, 'je' (you) follows the verb, and the '-t' drops."
  },
  {
    id: "q_wo_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "word_order", "inversion"],
    questionNl: "Daar ___ (werken) ik elke zaterdag.",
    options: ["werk", "werkt", "werken"],
    correctAnswer: "werk",
    explanationTr: "Cümle 'Daar' (orada) yer zarfıyla başladığı için inversie olur. 'ik' için fiil her halükarda sadece 'werk' şeklindedir.",
    explanationEn: "Starting with 'Daar' (there) causes inversion. For 'ik', the verb is just 'werk' in any case."
  },
  {
    id: "q_wo_050",
    type: "fill_in",
    tags: ["reading_comprehension", "modal_verbs", "word_order"],
    questionNl: "Bart moet vandaag heel hard ___ (werken).",
    correctAnswer: "werken",
    explanationTr: "Cümlede 'moet' modal fiili olduğu için asıl fiil (werken) mastar halinde cümlenin sonunda yer alır.",
    explanationEn: "Because the modal verb 'moet' is in the sentence, the main verb (werken) is in the infinitive at the end."
  },
  {
    id: "q_art_plur_001",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "___ (artikel) cursus is erg interessant.",
    options: ["De", "Het", "Een"],
    correctAnswer: "De",
    explanationTr: "'Cursus' kelimesi bir de-woord'dur. Belirli (definiet) durumlarda 'de' artikeli alır.",
    explanationEn: "The word 'cursus' is a de-word. In definite situations, it takes the article 'de'."
  },
  {
    id: "q_art_plur_002",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "Wij zitten in ___ (artikel) café.",
    options: ["de", "het"],
    correctAnswer: "het",
    explanationTr: "'Café' kelimesi bir het-woord'dur.",
    explanationEn: "The word 'café' is a het-word."
  },
  {
    id: "q_art_plur_003",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "___ (artikel) cursussen beginnen morgen.",
    options: ["De", "Het", "Een"],
    correctAnswer: "De",
    explanationTr: "ALTIN KURAL: Tüm çoğul kelimeler (pluralis) İSTİSNASIZ 'de' artikeli alır.",
    explanationEn: "GOLDEN RULE: All plural words (pluralis) ALWAYS take the article 'de' without exception."
  },
  {
    id: "q_art_plur_004",
    type: "multiple_choice",
    tags: ["articles_plurals", "diminutives"],
    questionNl: "Ik bestel ___ (artikel) rondje voor iedereen.",
    options: ["de", "het"],
    correctAnswer: "het",
    explanationTr: "ALTIN KURAL: Tüm küçültme ekli kelimeler (diminutieven) tekil formdayken İSTİSNASIZ 'het' artikeli alır.",
    explanationEn: "GOLDEN RULE: All diminutives in the singular form ALWAYS take the article 'het' without exception."
  },
  {
    id: "q_art_plur_005",
    type: "multiple_choice",
    tags: ["articles_plurals", "diminutives"],
    questionNl: "Waar zijn ___ (artikel) rondjes?",
    options: ["de", "het", "een"],
    correctAnswer: "de",
    explanationTr: "Kelime küçültme eki (-je) alsa bile, ÇOĞUL (-s) olduğu an 'de' artikeli alır. (Çoğul kuralı daima baskındır).",
    explanationEn: "Even if a word has a diminutive suffix (-je), the moment it becomes PLURAL (-s), it takes the article 'de'."
  },
  {
    id: "q_art_plur_006",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Alle woorden in pluralis (meervoud) krijgen ALTIJD het artikel ___.",
    correctAnswer: "de",
    explanationTr: "Tüm çoğul isimler 'de' artikeli ile kullanılır.",
    explanationEn: "All plural nouns use the article 'de'."
  },
  {
    id: "q_art_plur_007",
    type: "fill_in",
    tags: ["articles_plurals", "diminutives"],
    questionNl: "Alle diminutieven (küçültme ekli kelimeler) in singularis (enkelvoud) krijgen ALTIJD het artikel ___.",
    correctAnswer: "het",
    explanationTr: "Tekil haldeki tüm küçültme kelimeleri 'het' artikeli alır.",
    explanationEn: "All singular diminutives take the article 'het'."
  },
  {
    id: "q_art_plur_008",
    type: "fill_in",
    tags: ["diminutives"],
    questionNl: "Maak een diminutief (küçültme) van het woord 'dag': ___",
    correctAnswer: "dagje",
    explanationTr: "Hollandacada en yaygın küçültme eki '-je' dir. 'dag' kelimesi 'dagje' olur.",
    explanationEn: "The most common diminutive suffix in Dutch is '-je'. 'dag' becomes 'dagje'."
  },
  {
    id: "q_art_plur_009",
    type: "fill_in",
    tags: ["diminutives"],
    questionNl: "Maak een diminutief van het woord 'film': ___",
    correctAnswer: "filmpje",
    explanationTr: "Bazı kelimeler ses uyumuna göre '-pje' eki alır. 'film' -> 'filmpje'.",
    explanationEn: "Some words take the suffix '-pje' based on phonetics. 'film' -> 'filmpje'."
  },
  {
    id: "q_art_plur_010",
    type: "fill_in",
    tags: ["diminutives"],
    questionNl: "Maak een diminutief van het woord 'broer': ___",
    correctAnswer: "broertje",
    explanationTr: "Bazı kelimeler ses uyumuna göre '-tje' eki alır. 'broer' -> 'broertje'.",
    explanationEn: "Some words take the suffix '-tje' based on phonetics. 'broer' -> 'broertje'."
  },
  {
    id: "q_art_plur_011",
    type: "multiple_choice",
    tags: ["diminutives"],
    questionNl: "Wat is het correcte diminutief van 'huis'?",
    options: ["huisje", "huispje", "huistje"],
    correctAnswer: "huisje",
    explanationTr: "Normal bir kelime çoğunlukla sadece '-je' eki alır. 'huis' -> 'huisje'.",
    explanationEn: "A normal word mostly just takes the '-je' suffix. 'huis' -> 'huisje'."
  },
  {
    id: "q_art_plur_012",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud (pluralis) van 'fiets': ___",
    correctAnswer: "fietsen",
    explanationTr: "Hollandacada tek heceli kelimelerin büyük çoğunluğu '-en' eki ile çoğul yapılır.",
    explanationEn: "The vast majority of one-syllable words in Dutch are made plural with '-en'."
  },
  {
    id: "q_art_plur_013",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'boek': ___",
    correctAnswer: "boeken",
    explanationTr: "'boek' kelimesi tek hecelidir ve düzenli olarak '-en' eki alır.",
    explanationEn: "The word 'boek' has one syllable and regularly takes the '-en' suffix."
  },
  {
    id: "q_art_plur_014",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'student': ___",
    correctAnswer: "studenten",
    explanationTr: "Sonu ünsüz harflerle biten standart Hollandaca kelimelerin çoğu '-en' ile çoğul olur.",
    explanationEn: "Most standard Dutch words ending in consonants become plural with '-en'."
  },
  {
    id: "q_art_plur_015",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'aardappel': ___",
    correctAnswer: "aardappels",
    explanationTr: "KURAL: İki veya daha fazla heceli olup sonu '-el' ile biten kelimeler '-s' eki alır.",
    explanationEn: "RULE: Words with two or more syllables ending in '-el' take the '-s' suffix."
  },
  {
    id: "q_art_plur_016",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'jongen': ___",
    correctAnswer: "jongens",
    explanationTr: "KURAL: İki veya daha fazla heceli olup sonu '-en' ile biten kelimeler (fiil değilse) '-s' eki alır.",
    explanationEn: "RULE: Nouns with two or more syllables ending in '-en' take the '-s' suffix."
  },
  {
    id: "q_art_plur_017",
    type: "fill_in",
    tags: ["articles_plurals", "diminutives"],
    questionNl: "Maak het meervoud van 'biertje': ___",
    correctAnswer: "biertjes",
    explanationTr: "KURAL: Küçültme ekleri (-je, -pje, -tje) HER ZAMAN sonlarına sadece '-s' alarak çoğul yapılırlar.",
    explanationEn: "RULE: Diminutives (-je, -pje, -tje) ALWAYS become plural by simply adding an '-s'."
  },
  {
    id: "q_art_plur_018",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'kantine': ___",
    correctAnswer: "kantines",
    explanationTr: "KURAL: Birden fazla hecesi olup sonu vurgusuz '-e' ile biten kelimeler '-s' eki ile çoğul olur.",
    explanationEn: "RULE: Words with more than one syllable ending in an unaccented '-e' become plural with '-s'."
  },
  {
    id: "q_art_plur_019",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "Waarom krijgt het woord 'modem' een -s in het meervoud (modems)?",
    options: ["Omdat het op -em eindigt", "Omdat het op een klinker eindigt", "Omdat het onregelmatig is"],
    correctAnswer: "Omdat het op -em eindigt",
    explanationTr: "Sonu '-em' ile biten çok heceli kelimeler '-s' eki alarak çoğul olur.",
    explanationEn: "Polysyllabic words ending in '-em' become plural by taking the '-s' suffix."
  },
  {
    id: "q_art_plur_020",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'champignon': ___",
    correctAnswer: "champignons",
    explanationTr: "Yabancı kökenli (Fransızca, İngilizce vb.) kelimeler Hollandacada genellikle '-s' eki alır.",
    explanationEn: "Words of foreign origin (French, English, etc.) generally take the '-s' suffix in Dutch."
  },
  {
    id: "q_art_plur_021",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'film': ___",
    correctAnswer: "films",
    explanationTr: "'Film' tek heceli olmasına rağmen yabancı kökenli olduğu için istisnai olarak '-s' alır.",
    explanationEn: "Although 'film' has one syllable, it takes an '-s' because it is a foreign word."
  },
  {
    id: "q_art_plur_022",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "Waarom krijgen 'films' en 'champignons' een -s in het meervoud?",
    options: ["Het zijn buitenlandse woorden", "Ze eindigen op een klinker", "Het zijn diminutieven"],
    correctAnswer: "Het zijn buitenlandse woorden",
    explanationTr: "Buitenlandse woorden (Yabancı kelimeler) genellikle '-s' ile çoğul yapılır.",
    explanationEn: "Foreign words usually form their plurals with an '-s'."
  },
  {
    id: "q_art_plur_023",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'paprika': ___",
    correctAnswer: "paprika's",
    explanationTr: "KURAL: Sonu a, i, o, u veya y sesli harfleriyle biten kelimeler, okunuşun bozulmaması için kesme işareti ile çoğul olur (-'s).",
    explanationEn: "RULE: Words ending in vowels a, i, o, u, or y take an apostrophe-s (-'s) to preserve pronunciation."
  },
  {
    id: "q_art_plur_024",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'kiwi': ___",
    correctAnswer: "kiwi's",
    explanationTr: "Sonu '-i' ile bittiği için '-s' takısı kesme işareti ile eklenir.",
    explanationEn: "Because it ends with '-i', the '-s' suffix is added with an apostrophe."
  },
  {
    id: "q_art_plur_025",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'auto': ___",
    correctAnswer: "auto's",
    explanationTr: "Sonu '-o' ile bittiği için '-s' takısı kesme işareti ile eklenir.",
    explanationEn: "Because it ends with '-o', the '-s' suffix is added with an apostrophe."
  },
  {
    id: "q_art_plur_026",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'menu': ___",
    correctAnswer: "menu's",
    explanationTr: "Sonu '-u' ile bittiği için '-s' takısı kesme işareti ile eklenir.",
    explanationEn: "Because it ends with '-u', the '-s' suffix is added with an apostrophe."
  },
  {
    id: "q_art_plur_027",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het meervoud van 'hobby': ___",
    correctAnswer: "hobby's",
    explanationTr: "Sonu '-y' ile bittiği için '-s' takısı kesme işareti ile eklenir.",
    explanationEn: "Because it ends with '-y', the '-s' suffix is added with an apostrophe."
  },
  {
    id: "q_art_plur_028",
    type: "multiple_choice",
    tags: ["articles_plurals"],
    questionNl: "Waarom krijgt 'auto' een apostrof-s ('s) in het meervoud?",
    options: ["Omdat het eindigt op de klinker -o", "Omdat het een buitenlands woord is", "Omdat het op -s moet eindigen"],
    correctAnswer: "Omdat het eindigt op de klinker -o",
    explanationTr: "Uzun ünlü sesini (o) korumak için, a, i, o, u, y ile biten kelimeler apostrof alır.",
    explanationEn: "To preserve the long vowel sound, words ending in a, i, o, u, y take an apostrophe."
  },
  {
    id: "q_art_plur_029",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het onregelmatige (düzensiz) meervoud van 'stad': ___",
    correctAnswer: "steden",
    explanationTr: "'Stad' (şehir) kelimesinin çoğulu kurala uymaz, 'steden' olarak ezberlenmelidir.",
    explanationEn: "The plural of 'stad' (city) is irregular and must be memorized as 'steden'."
  },
  {
    id: "q_art_plur_030",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het onregelmatige meervoud van 'kind': ___",
    correctAnswer: "kinderen",
    explanationTr: "'Kind' (çocuk) kelimesinin çoğulu 'kinderen' şeklindedir. Çok sık kullanılır, kesinlikle bilinmelidir.",
    explanationEn: "The plural of 'kind' (child) is 'kinderen'. It is highly frequent and must be known."
  },
  {
    id: "q_art_plur_031",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "Maak het onregelmatige meervoud van 'ei': ___",
    correctAnswer: "eieren",
    explanationTr: "'Ei' (yumurta) kelimesinin çoğulu 'eieren' şeklindedir.",
    explanationEn: "The plural of 'ei' (egg) is 'eieren'."
  },
  {
    id: "q_art_plur_032",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns"],
    questionNl: "___ (Welk / Welke) auto is van jou?",
    options: ["Welk", "Welke"],
    correctAnswer: "Welke",
    explanationTr: "'Auto' bir de-woord'dur (de auto). Bu yüzden 'Welke' kullanılır.",
    explanationEn: "'Auto' is a de-word (de auto). Therefore, 'Welke' is used."
  },
  {
    id: "q_art_plur_033",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns"],
    questionNl: "___ (Welk / Welke) boek lees jij nu?",
    options: ["Welk", "Welke"],
    correctAnswer: "Welk",
    explanationTr: "'Boek' bir het-woord'dur (het boek). Bu yüzden 'Welk' kullanılır.",
    explanationEn: "'Boek' is a het-word (het boek). Therefore, 'Welk' is used."
  },
  {
    id: "q_art_plur_034",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns"],
    questionNl: "Dit is ___ (ons / onze) nieuwe adres.",
    options: ["ons", "onze"],
    correctAnswer: "ons",
    explanationTr: "'Adres' bir het-woord'dur (het adres). Bu yüzden 'ons' kullanılır.",
    explanationEn: "'Adres' is a het-word (het adres). Therefore, 'ons' is used."
  },
  {
    id: "q_art_plur_035",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns"],
    questionNl: "Morgen hebben we ___ (ons / onze) laatste les.",
    options: ["ons", "onze"],
    correctAnswer: "onze",
    explanationTr: "'Les' bir de-woord'dur (de les). Bu yüzden 'onze' kullanılır.",
    explanationEn: "'Les' is a de-word (de les). Therefore, 'onze' is used."
  },
  {
    id: "q_art_plur_036",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns", "diminutives"],
    questionNl: "Ik vind ___ (die / dat) meisje erg leuk.",
    options: ["die", "dat"],
    correctAnswer: "dat",
    explanationTr: "'Meisje' bir küçültme (diminutief) olduğu için HER ZAMAN het-woord'dur. Bu yüzden işaret zamiri 'dat' olur.",
    explanationEn: "'Meisje' is a diminutive, so it is ALWAYS a het-word. Therefore, the demonstrative pronoun is 'dat'."
  },
  {
    id: "q_art_plur_037",
    type: "multiple_choice",
    tags: ["articles_plurals", "pronouns"],
    questionNl: "___ (Deze / Dit) boeken zijn erg zwaar.",
    options: ["Deze", "Dit"],
    correctAnswer: "Deze",
    explanationTr: "'Boeken' çoğuldur (pluralis). Çoğul kelimeler daima de-woord olduğu için 'deze' kullanılır.",
    explanationEn: "'Boeken' is plural. Plurals are always de-words, so 'deze' is used."
  },
  {
    id: "q_art_plur_038",
    type: "multiple_choice",
    tags: ["articles_plurals", "verbs_present"],
    questionNl: "De cursussen ___ (is / zijn) een beetje te duur.",
    options: ["is", "zijn"],
    correctAnswer: "zijn",
    explanationTr: "'De cursussen' çoğul bir özne olduğu için fiil de çoğul formda (zijn) olmalıdır.",
    explanationEn: "'De cursussen' is a plural subject, so the verb must be plural (zijn)."
  },
  {
    id: "q_art_plur_039",
    type: "multiple_choice",
    tags: ["articles_plurals", "diminutives"],
    questionNl: "Ik heb een klein ___ (bosje / bosjes) peterselie nodig.",
    options: ["bosje", "bosjes"],
    correctAnswer: "bosje",
    explanationTr: "Cümlede 'een' (bir tane) geçtiği için kelime tekil olmalıdır: bosje.",
    explanationEn: "Since the sentence uses 'een' (a/one), the word must be singular: bosje."
  },
  {
    id: "q_art_plur_040",
    type: "fill_in",
    tags: ["articles_plurals"],
    questionNl: "We hebben nieuwe ___ (modem) nodig voor kantoor.",
    correctAnswer: "modems",
    explanationTr: "'modem' kelimesi '-em' ile biten çok heceli kelimelerdendir ve '-s' ile çoğul olur.",
    explanationEn: "'modem' ends in '-em' and thus takes '-s' in the plural."
  },
  {
    id: "q_reading_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "articles_plurals", "diminutives"],
    questionNl: "Lees de tekst: 'Ik heb veel hobby's. Ik lees boeken, ik kijk films en ik eet graag kiwi's. Mijn broertje houdt van auto's.'\n\nWelk woord in de tekst is een diminutief (küçültme)?",
    options: ["hobby's", "boeken", "broertje"],
    correctAnswer: "broertje",
    explanationTr: "'-tje' küçültme ekidir. 'broertje' küçük erkek kardeş demektir.",
    explanationEn: "'-tje' is a diminutive suffix. 'broertje' means little brother."
  },
  {
    id: "q_reading_042",
    type: "fill_in",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'Ik heb veel hobby's. Ik lees boeken, ik kijk films en ik eet graag kiwi's. Mijn broertje houdt van auto's.'\n\nWat is het enkelvoud (tekil) van 'kiwi's'?",
    correctAnswer: "kiwi",
    explanationTr: "Çoğul eki olan -'s atıldığında geriye tekil olan 'kiwi' kelimesi kalır.",
    explanationEn: "Removing the plural suffix -'s leaves the singular word 'kiwi'."
  },
  {
    id: "q_reading_043",
    type: "multiple_choice",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'Ik heb veel hobby's. Ik lees boeken, ik kijk films en ik eet graag kiwi's. Mijn broertje houdt van auto's.'\n\nWaarom hebben 'hobby's', 'kiwi's' en 'auto's' een apostrof ('s)?",
    options: ["Ze eindigen op a, i, o, u of y", "Het zijn de-woorden", "Het zijn buitenlandse woorden"],
    correctAnswer: "Ze eindigen op a, i, o, u of y",
    explanationTr: "Kurala göre, a, i, o, u veya y ile biten isimler çoğul yapılırken apostrof alır.",
    explanationEn: "According to the rule, nouns ending in a, i, o, u, or y take an apostrophe when made plural."
  },
  {
    id: "q_reading_044",
    type: "fill_in",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de steden wonen veel mensen. Sommige gezinnen hebben drie kinderen. Ze eten vaak eieren bij het ontbijt.'\n\nWat is het enkelvoud (tekil) van 'steden'?",
    correctAnswer: "stad",
    explanationTr: "'Steden' kelimesi 'stad' (şehir) kelimesinin düzensiz çoğuludur.",
    explanationEn: "'Steden' is the irregular plural of 'stad' (city)."
  },
  {
    id: "q_reading_045",
    type: "fill_in",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de steden wonen veel mensen. Sommige gezinnen hebben drie kinderen. Ze eten vaak eieren bij het ontbijt.'\n\nWat is het enkelvoud van 'kinderen'?",
    correctAnswer: "kind",
    explanationTr: "'Kinderen' kelimesi 'kind' (çocuk) kelimesinin düzensiz çoğuludur.",
    explanationEn: "'Kinderen' is the irregular plural of 'kind' (child)."
  },
  {
    id: "q_reading_046",
    type: "fill_in",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de steden wonen veel mensen. Sommige gezinnen hebben drie kinderen. Ze eten vaak eieren bij het ontbijt.'\n\nWat is het enkelvoud van 'eieren'?",
    correctAnswer: "ei",
    explanationTr: "'Eieren' kelimesi 'ei' (yumurta) kelimesinin düzensiz çoğuludur.",
    explanationEn: "'Eieren' is the irregular plural of 'ei' (egg)."
  },
  {
    id: "q_reading_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de steden wonen veel mensen. Sommige gezinnen hebben drie kinderen. Ze eten vaak eieren bij het ontbijt.'\n\nWat voor soort meervouden zijn 'steden', 'kinderen' en 'eieren'?",
    options: ["Onregelmatige vormen", "Buitenlandse vormen", "Reguliere vormen"],
    correctAnswer: "Onregelmatige vormen",
    explanationTr: "Bu üç kelime Hollandacada standart -en, -s kurallarına uymayan 'düzensiz formlar'dır (Onregelmatige vormen).",
    explanationEn: "These three words are 'irregular forms' (Onregelmatige vormen) because they don't follow the standard -en, -s rules."
  },
  {
    id: "q_reading_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de kantines van de universiteit kun je veel kopen. Er zijn appels, paprika's en lekkere broodjes.'\n\nWaarom krijgt 'kantines' een -s?",
    options: ["Omdat het eindigt op een onbeklemtoonde -e", "Omdat het eindigt op -s", "Omdat het onregelmatig is"],
    correctAnswer: "Omdat het eindigt op een onbeklemtoonde -e",
    explanationTr: "Kantine gibi sonu vurgusuz '-e' ile biten kelimeler, çoğul olurken '-s' eki alırlar.",
    explanationEn: "Words ending with an unaccented '-e' like kantine, take an '-s' suffix in the plural."
  },
  {
    id: "q_reading_049",
    type: "fill_in",
    tags: ["reading_comprehension", "articles_plurals"],
    questionNl: "Lees de tekst: 'In de kantines van de universiteit kun je veel kopen. Er zijn appels, paprika's en lekkere broodjes.'\n\nWat is het enkelvoud (tekil) van 'paprika's'?",
    correctAnswer: "paprika",
    explanationTr: "Çoğul eki olan -'s silindiğinde tekil hal olan 'paprika' bulunur.",
    explanationEn: "Removing the plural -'s suffix leaves the singular form 'paprika'."
  },
  {
    id: "q_reading_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "articles_plurals", "diminutives"],
    questionNl: "Lees de tekst: 'In de kantines van de universiteit kun je veel kopen. Er zijn appels, paprika's en lekkere broodjes.'\n\nWelk artikel krijgt het woord 'broodjes' (meervoud) ALTIJD?",
    options: ["de", "het", "een"],
    correctAnswer: "de",
    explanationTr: "'Broodje' (küçük ekmek) tekil halde 'het' alsa bile, çoğul olduğu an ('broodjes') daima 'de' artikeli alır.",
    explanationEn: "Although 'broodje' takes 'het' in the singular, the moment it becomes plural ('broodjes') it always takes 'de'."
  },
  
  {
    id: "q_adj_001",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Ik koop de ___ (mooi) auto.",
    options: ["mooi", "mooie", "mooiste"],
    correctAnswer: "mooie",
    explanationTr: "'Auto' bir de-woord'dur. İsmin önündeki sıfatlar genellikle '-e' takısı alır.",
    explanationEn: "'Auto' is a de-word. Adjectives before a noun generally take the '-e' suffix."
  },
  {
    id: "q_adj_002",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Zij heeft een ___ (groot) tuin.",
    correctAnswer: "grote",
    explanationTr: "'Tuin' bir de-woord'dur (de tuin). 'een' ile kullanılsa bile de-woord olduğu için sıfat '-e' alır. (Yazım kuralı: groot -> grote).",
    explanationEn: "'Tuin' is a de-word (de tuin). Even with 'een', since it's a de-word, the adjective gets an '-e'. (Spelling rule: groot -> grote)."
  },
  {
    id: "q_adj_003",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "De ___ (snel) trein vertrekt nu.",
    correctAnswer: "snelle",
    explanationTr: "'Trein' bir de-woord'dur. Sıfat '-e' alır. (Yazım kuralı: tek heceli kısa sesli harflerde ünsüz ikileşir: snel -> snelle).",
    explanationEn: "'Trein' is a de-word. The adjective gets an '-e'. (Spelling rule: short vowel in a single syllable doubles the consonant: snel -> snelle)."
  },
  {
    id: "q_adj_004",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "We eten een ___ (lekker) pizza.",
    options: ["lekker", "lekkere", "lekkerste"],
    correctAnswer: "lekkere",
    explanationTr: "'Pizza' de-woord'dur. Bu yüzden sıfat her zaman '-e' takısı alır.",
    explanationEn: "'Pizza' is a de-word. Therefore, the adjective always gets the '-e' suffix."
  },
  {
    id: "q_adj_005",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Die ___ (klein) man is mijn oom.",
    options: ["klein", "kleine"],
    correctAnswer: "kleine",
    explanationTr: "'Die' işaret zamiri belirli (definiet) yapar ve 'man' bir de-woord'dur. Sıfat '-e' alır.",
    explanationEn: "The demonstrative pronoun 'die' makes it definite, and 'man' is a de-word. The adjective gets an '-e'."
  },
  {
    id: "q_adj_006",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Het ___ (groot) huis is verkocht.",
    options: ["groot", "grote"],
    correctAnswer: "grote",
    explanationTr: "'Huis' bir het-woord'dur. Belirli (definiet) olduğu için ('Het' artikeli var) sıfat '-e' takısı ALIR.",
    explanationEn: "'Huis' is a het-word. Because it is definite (has the article 'Het'), the adjective TAKES an '-e'."
  },
  {
    id: "q_adj_007",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Zij wonen in een ___ (groot) huis.",
    options: ["groot", "grote"],
    correctAnswer: "groot",
    explanationTr: "ALTIN KURAL! 'Huis' bir het-woord'dur VE önünde belirsiz artikel ('een') vardır. Bu durumda sıfat '-e' takısı ALMAZ!",
    explanationEn: "GOLDEN RULE! 'Huis' is a het-word AND has an indefinite article ('een') before it. In this case, the adjective does NOT take an '-e'!"
  },
  {
    id: "q_adj_008",
    type: "fill_in",
    tags: ["adjectives", "diminutives"],
    questionNl: "Het ___ (mooi) meisje fietst naar school.",
    correctAnswer: "mooie",
    explanationTr: "'Meisje' küçültme eki aldığı için het-woord'dur. Ancak önünde 'Het' (belirli) olduğu için sıfat '-e' alır.",
    explanationEn: "'Meisje' is a het-word because of the diminutive. But since it is preceded by 'Het' (definite), the adjective gets an '-e'."
  },
  {
    id: "q_adj_009",
    type: "fill_in",
    tags: ["adjectives", "diminutives"],
    questionNl: "Ik zie een ___ (mooi) meisje.",
    correctAnswer: "mooi",
    explanationTr: "Altın kural! 'Meisje' het-woord'dur ve önünde 'een' vardır. Bu yüzden sıfat ek almaz.",
    explanationEn: "Golden rule! 'Meisje' is a het-word and preceded by 'een'. Therefore, the adjective gets no suffix."
  },
  {
    id: "q_adj_010",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Hij drinkt geen ___ (lekker) bier.",
    options: ["lekker", "lekkere"],
    correctAnswer: "lekker",
    explanationTr: "Altın kural! 'Bier' bir het-woord'dur. 'geen' kelimesi de belirsiz (indefiniet) kabul edilir. Sıfat ek almaz.",
    explanationEn: "Golden rule! 'Bier' is a het-word. 'geen' makes it indefinite. The adjective gets no suffix."
  },
  {
    id: "q_adj_011",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Ik drink graag ___ (koud) water.",
    correctAnswer: "koud",
    explanationTr: "'Water' het-woord'dur. Önünde hiçbir artikel yok (geen artikel). Bu yüzden sıfat ek almaz.",
    explanationEn: "'Water' is a het-word. There is no article before it. Therefore, the adjective takes no suffix."
  },
  {
    id: "q_adj_012",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Mag ik het ___ (koud) water, alsjeblieft?",
    correctAnswer: "koude",
    explanationTr: "Yine 'water' kelimesi ama bu kez önünde 'het' var (belirli). O zaman sıfat '-e' alır.",
    explanationEn: "Same word 'water', but this time it is preceded by 'het' (definite). So the adjective gets an '-e'."
  },
  {
    id: "q_adj_013",
    type: "multiple_choice",
    tags: ["adjectives", "pronouns_possessive"],
    questionNl: "Dit is zijn ___ (nieuw) boek.",
    options: ["nieuw", "nieuwe"],
    correctAnswer: "nieuwe",
    explanationTr: "'zijn' (onun) iyelik zamiri belirli (definiet) etki yaratır. Bu yüzden het-woord olan 'boek' kelimesinin sıfatı '-e' alır.",
    explanationEn: "The possessive pronoun 'zijn' (his) acts as definite. Therefore, the adjective for the het-word 'boek' gets an '-e'."
  },
  {
    id: "q_adj_014",
    type: "multiple_choice",
    tags: ["adjectives", "pronouns"],
    questionNl: "Ik koop dit ___ (oud) boek.",
    options: ["oud", "oude"],
    correctAnswer: "oude",
    explanationTr: "İşaret zamirleri (dit, dat) belirli (definiet) yapar. Sıfat her zaman '-e' alır.",
    explanationEn: "Demonstrative pronouns (dit, dat) make it definite. The adjective always gets an '-e'."
  },
  {
    id: "q_adj_015",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Ik koop een ___ (oud) boek.",
    correctAnswer: "oud",
    explanationTr: "Altın kural! 'Boek' het-woord'dur ve önünde 'een' var. Sıfat ek almaz.",
    explanationEn: "Golden rule! 'Boek' is a het-word preceded by 'een'. The adjective takes no suffix."
  },
  {
    id: "q_adj_016",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "De ___ (nieuw) boeken liggen op tafel.",
    options: ["nieuw", "nieuwe"],
    correctAnswer: "nieuwe",
    explanationTr: "Çoğul (pluralis) kelimeler her zaman de-woord'dur. Bu yüzden sıfat her zaman '-e' alır.",
    explanationEn: "Plural words are always de-words. Therefore, the adjective always gets an '-e'."
  },
  {
    id: "q_adj_017",
    type: "fill_in",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Ik lees graag ___ (leuk) boeken.",
    correctAnswer: "leuke",
    explanationTr: "Çoğul kelimeler önünde artikel olmasa bile (geen artikel) de-woord oldukları için sıfat '-e' almaya devam eder.",
    explanationEn: "Plural words, even without an article, are de-words and continue to take the '-e' suffix."
  },
  {
    id: "q_adj_018",
    type: "fill_in",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "Hij heeft twee ___ (mooi) auto's.",
    correctAnswer: "mooie",
    explanationTr: "Çoğul isimlerin önündeki sıfatlar '-e' alır.",
    explanationEn: "Adjectives before plural nouns take an '-e'."
  },
  {
    id: "q_adj_019",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals"],
    questionNl: "We zien ___ (groot) huizen in deze straat.",
    options: ["groot", "grote", "groten"],
    correctAnswer: "grote",
    explanationTr: "Çoğul ('huizen') olduğu için artikel olmasa da sıfat '-e' alır (grote).",
    explanationEn: "Because it is plural ('huizen'), the adjective takes an '-e' (grote) even without an article."
  },
  {
    id: "q_adj_020",
    type: "multiple_choice",
    tags: ["adjectives", "articles_plurals", "diminutives"],
    questionNl: "De ___ (klein) meisjes spelen buiten.",
    options: ["klein", "kleine"],
    correctAnswer: "kleine",
    explanationTr: "Küçültme kelimeleri tekilken het-woord olsa da, çoğul olunca (meisjes) de-woord'a dönüşür ve sıfat kesinlikle '-e' alır.",
    explanationEn: "Though diminutives are het-words in singular, when plural (meisjes) they become de-words and the adjective definitely takes an '-e'."
  },
  {
    id: "q_adj_021",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Zij draagt de ___ (duur) schoenen.",
    correctAnswer: "dure",
    explanationTr: "'Schoenen' çoğuldur. Sıfat '-e' alır. (Yazım kuralı: uzun sesli harf hece sonunda tek yazılır: duur -> dure).",
    explanationEn: "'Schoenen' is plural. The adjective takes an '-e'. (Spelling rule: long vowel in open syllable is written with one letter: duur -> dure)."
  },
  {
    id: "q_adj_022",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Wij kopen ___ (vers) groenten op de markt.",
    correctAnswer: "verse",
    explanationTr: "'Groenten' çoğuldur. Sıfat '-e' alır. (Yazım kuralı: 's', sesli harf gelince 'z' ye dönüşmez çünkü vers istisnadır. Ancak normal '-e' alır: verse).",
    explanationEn: "'Groenten' is plural. The adjective gets '-e'. 'vers' becomes 'verse'."
  },
  {
    id: "q_adj_023",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Hebben jullie nog ___ (goed) ideeën?",
    options: ["goed", "goede", "goeden"],
    correctAnswer: "goede",
    explanationTr: "'Ideeën' çoğuldur. Sıfat '-e' alır.",
    explanationEn: "'Ideeën' is plural. The adjective takes an '-e'."
  },
  {
    id: "q_adj_024",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "De ___ (lang) dagen van de zomer zijn heerlijk.",
    correctAnswer: "lange",
    explanationTr: "'Dagen' çoğuldur. Sıfat '-e' alır.",
    explanationEn: "'Dagen' is plural. The adjective gets an '-e'."
  },
  {
    id: "q_adj_025",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "In de winter hebben we ___ (kort) nachten.",
    options: ["kort", "korte"],
    correctAnswer: "korte",
    explanationTr: "'Nachten' çoğuldur. Sıfat '-e' alır.",
    explanationEn: "'Nachten' is plural. The adjective gets an '-e'."
  },
  {
    id: "q_adj_026",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "De auto is ___ (snel).",
    correctAnswer: "snel",
    explanationTr: "KURAL: Sıfat, nitelediği isimden SONRA (predicative) geliyorsa HİÇBİR ZAMAN '-e' eklenmez.",
    explanationEn: "RULE: If the adjective comes AFTER the noun it describes (predicative), it NEVER gets an '-e'."
  },
  {
    id: "q_adj_027",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Het huis is erg ___ (groot).",
    options: ["groot", "grote"],
    correctAnswer: "groot",
    explanationTr: "Sıfat isimden sonra gelmektedir, bu yüzden ek almaz.",
    explanationEn: "The adjective comes after the noun, so it takes no suffix."
  },
  {
    id: "q_adj_028",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Die boeken zijn erg ___ (duur).",
    correctAnswer: "duur",
    explanationTr: "Sıfat isimden sonra gelmektedir, bu yüzden ek almaz.",
    explanationEn: "The adjective comes after the noun, so it takes no suffix."
  },
  {
    id: "q_adj_029",
    type: "multiple_choice",
    tags: ["adjectives", "word_order"],
    questionNl: "Ik vind de les een beetje ___ (saai).",
    options: ["saai", "saaie"],
    correctAnswer: "saai",
    explanationTr: "Sıfat (saai), isimden (de les) sonra gelmektedir. Ek almaz.",
    explanationEn: "The adjective (saai) comes after the noun (de les). It gets no suffix."
  },
  {
    id: "q_adj_030",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Het eten is helemaal ___ (koud).",
    correctAnswer: "koud",
    explanationTr: "Sıfat (koud) isimden sonra geldiği için mastar/yalın halinde kalır.",
    explanationEn: "Because the adjective (koud) comes after the noun, it stays in its base form."
  },
  {
    id: "q_adj_031",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Deze film is heel ___ (leuk).",
    options: ["leuk", "leuke"],
    correctAnswer: "leuk",
    explanationTr: "İsim (film) başta, sıfat sonda. Ek almaz.",
    explanationEn: "Noun (film) is first, adjective is after. No suffix."
  },
  {
    id: "q_adj_032",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "De docent is erg ___ (aardig).",
    correctAnswer: "aardig",
    explanationTr: "Sıfat isimden sonradır, ek almaz.",
    explanationEn: "The adjective follows the noun, no suffix."
  },
  {
    id: "q_adj_033",
    type: "multiple_choice",
    tags: ["adjectives", "questions"],
    questionNl: "Zijn de kamers in het hotel ___ (schoon)?",
    options: ["schoon", "schone"],
    correctAnswer: "schoon",
    explanationTr: "Soru cümlesinde de olsa, sıfat nitelediği isimden (de kamers) sonra gelmektedir.",
    explanationEn: "Even in a question, the adjective comes after the noun it describes (de kamers)."
  },
  {
    id: "q_adj_034",
    type: "fill_in",
    tags: ["adjectives", "diminutives"],
    questionNl: "Het meisje is heel ___ (klein).",
    correctAnswer: "klein",
    explanationTr: "Sıfat isimden sonradır, '-e' almaz.",
    explanationEn: "Adjective is after the noun, no '-e'."
  },
  {
    id: "q_adj_035",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Dat idee is heel ___ (goed).",
    options: ["goed", "goede", "goeden"],
    correctAnswer: "goed",
    explanationTr: "Sıfat (goed) isimden (Dat idee) sonra gelmektedir.",
    explanationEn: "The adjective (goed) comes after the noun (Dat idee)."
  },
  {
    id: "q_adj_036",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Zij kopen een ___ (hout) tafel.",
    correctAnswer: "houten",
    explanationTr: "KURAL: Materyal/malzeme bildiren sıfatlar '-en' takısı alır. (hout -> houten)",
    explanationEn: "RULE: Adjectives indicating material take the '-en' suffix. (hout -> houten)"
  },
  {
    id: "q_adj_037",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Hij draagt een ___ (katoen) T-shirt.",
    options: ["katoen", "katoene", "katoenen"],
    correctAnswer: "katoenen",
    explanationTr: "Materyal bildiren sıfatlar (pamuklu) '-en' eki ile kullanılır.",
    explanationEn: "Adjectives describing material (cotton) are used with the '-en' suffix."
  },
  {
    id: "q_adj_038",
    type: "fill_in",
    tags: ["adjectives"],
    questionNl: "Hij loopt tegen een ___ (open) deur.",
    correctAnswer: "open",
    explanationTr: "KURAL: Kendi kökü '-en' ile biten sıfatlar (open, eigen) fazladan bir '-e' almaz.",
    explanationEn: "RULE: Adjectives that inherently end in '-en' (open, eigen) do not get an extra '-e'."
  },
  {
    id: "q_adj_039",
    type: "multiple_choice",
    tags: ["adjectives"],
    questionNl: "Zij heeft nu een ___ (eigen) huis.",
    options: ["eigen", "eigene"],
    correctAnswer: "eigen",
    explanationTr: "'eigen' (kendi) sıfatı '-en' ile bittiği için ekstra bir ek almaz.",
    explanationEn: "The adjective 'eigen' (own) ends in '-en', so it takes no extra suffix."
  },
  {
    id: "q_adj_040",
    type: "fill_in",
    tags: ["adjectives", "past_tenses"],
    questionNl: "Ik vind de ___ (gebakken) vis heel lekker.",
    correctAnswer: "gebakken",
    explanationTr: "KURAL: Sıfat olarak kullanılan '-en' ile biten 3. hal fiiller (perfectumvormen) '-e' almaz.",
    explanationEn: "RULE: Past participles ending in '-en' used as adjectives do not take an '-e'."
  },
  {
    id: "q_adj_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Ik woon in een oud huis in het centrum. Het huis is erg groot. Ik heb ook een nieuwe fiets. Mijn fiets is heel snel.'\n\nWaarom krijgt 'oud' geen -e in 'een oud huis'?",
    options: ["'huis' is een het-woord en het is indefiniet (een)", "'huis' is een de-woord", "Omdat 'oud' een uitzondering is"],
    correctAnswer: "'huis' is een het-woord en het is indefiniet (een)",
    explanationTr: "Metinde geçen 'een oud huis' kuralı: het-woord + een = sıfata ek yok.",
    explanationEn: "The rule for 'een oud huis' in the text: het-word + een = no suffix for adjective."
  },
  {
    id: "q_adj_042",
    type: "fill_in",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Ik woon in een oud huis in het centrum. Het huis is erg groot. Ik heb ook een nieuwe fiets. Mijn fiets is heel snel.'\n\nVul in (volgens de tekst): 'Mijn fiets is heel ___ (snel)'.",
    correctAnswer: "snel",
    explanationTr: "Metinde sıfat (snel) isimden (fiets) sonra geldiği için ek almaz.",
    explanationEn: "In the text, the adjective (snel) comes after the noun (fiets), so it takes no suffix."
  },
  {
    id: "q_adj_043",
    type: "fill_in",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Ik woon in een oud huis in het centrum. Het huis is erg groot. Ik heb ook een nieuwe fiets. Mijn fiets is heel snel.'\n\nVul de zin in: 'Ik heb ook een ___ (nieuw) fiets'.",
    correctAnswer: "nieuwe",
    explanationTr: "'Fiets' bir de-woord'dur. 'een' olsa bile de-woord olduğu için sıfat '-e' alır.",
    explanationEn: "'Fiets' is a de-word. Even with 'een', the adjective takes an '-e' because it is a de-word."
  },
  {
    id: "q_adj_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Vandaag eten we verse groenten en gebakken aardappels. Ik drink altijd koud water bij het eten. Het koude water is heel verfrissend.'\n\nWaarom is het 'koud water' maar 'het koude water'?",
    options: ["Omdat 'het' definiet (bepaald) is", "Omdat 'water' meervoud is", "Omdat 'koud' onregelmatig is"],
    correctAnswer: "Omdat 'het' definiet (bepaald) is",
    explanationTr: "Aynı kelime (water). Önünde artikel yoksa belirsiz (koud water). Önünde 'het' varsa belirlidir ve sıfat '-e' alır (het koude water).",
    explanationEn: "Same word (water). No article means indefinite (koud water). 'het' makes it definite, so the adjective gets an '-e' (het koude water)."
  },
  {
    id: "q_adj_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Vandaag eten we verse groenten en gebakken aardappels. Ik drink altijd koud water bij het eten. Het koude water is heel verfrissend.'\n\nHet woord 'gebakken' krijgt geen extra -e. Waarom?",
    options: ["Het is een perfectumvorm op -en", "Het is een het-woord", "Het staat na het substantief"],
    correctAnswer: "Het is een perfectumvorm op -en",
    explanationTr: "'-en' ile biten fiil çekimleri (gebakken) sıfat olarak kullanıldığında ek almaz.",
    explanationEn: "Past participles ending in '-en' (gebakken) do not take a suffix when used as adjectives."
  },
  {
    id: "q_adj_046",
    type: "fill_in",
    tags: ["reading_comprehension", "adjectives", "articles_plurals"],
    questionNl: "Lees de tekst: 'Vandaag eten we verse groenten en gebakken aardappels. Ik drink altijd koud water bij het eten. Het koude water is heel verfrissend.'\n\nVul de zin in: 'We eten ___ (vers) groenten'.",
    correctAnswer: "verse",
    explanationTr: "'Groenten' çoğuldur. Çoğul isimlerin önündeki sıfatlar daima '-e' alır.",
    explanationEn: "'Groenten' is plural. Adjectives before plural nouns always get an '-e'."
  },
  {
    id: "q_adj_047",
    type: "fill_in",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Mijn broer heeft een dure auto gekocht. De auto is rood. Hij heeft geen groot budget, dus het was een verrassing. Nu heeft hij een eigen auto.'\n\nVul in: 'Hij heeft een ___ (duur) auto gekocht.'",
    correctAnswer: "dure",
    explanationTr: "'Auto' de-woord'dur. Sıfat '-e' alır. (Yazılışı: dure).",
    explanationEn: "'Auto' is a de-word. The adjective gets an '-e'. (Spelling: dure)."
  },
  {
    id: "q_adj_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Mijn broer heeft een dure auto gekocht. De auto is rood. Hij heeft geen groot budget, dus het was een verrassing. Nu heeft hij een eigen auto.'\n\nWaarom is het 'geen groot budget'?",
    options: ["'budget' is een het-woord en 'geen' is indefiniet", "'budget' is een de-woord", "Het staat na het substantief"],
    correctAnswer: "'budget' is een het-woord en 'geen' is indefiniet",
    explanationTr: "Altın Kural: 'budget' het-woord'dur. 'geen' belirsiz yapar, bu yüzden sıfat ek almaz.",
    explanationEn: "Golden Rule: 'budget' is a het-word. 'geen' makes it indefinite, so the adjective gets no suffix."
  },
  {
    id: "q_adj_049",
    type: "fill_in",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Mijn broer heeft een dure auto gekocht. De auto is rood. Hij heeft geen groot budget, dus het was een verrassing. Nu heeft hij een eigen auto.'\n\nVul in: 'De auto is ___ (rood).'",
    correctAnswer: "rood",
    explanationTr: "Sıfat isimden sonra gelmektedir, bu yüzden mastar halindedir.",
    explanationEn: "The adjective comes after the noun, so it stays in its base form."
  },
  {
    id: "q_adj_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "adjectives"],
    questionNl: "Lees de tekst: 'Mijn broer heeft een dure auto gekocht. De auto is rood. Hij heeft geen groot budget, dus het was een verrassing. Nu heeft hij een eigen auto.'\n\nWaarom krijgt 'eigen' geen extra -e in 'een eigen auto'?",
    options: ["Omdat het al op -en eindigt", "Omdat 'auto' een het-woord is", "Omdat het meervoud is"],
    correctAnswer: "Omdat het al op -en eindigt",
    explanationTr: "Kendi yapısında '-en' ile biten sıfatlar (eigen, open) ekstra '-e' takısı almaz.",
    explanationEn: "Adjectives that inherently end in '-en' (eigen, open) do not take an extra '-e' suffix."
  },
  
  {
    id: "q_mod_001",
    type: "fill_in",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Ik ___ (mogen) hier mijn auto parkeren.",
    correctAnswer: "mag",
    explanationTr: "'mogen' (izinli olmak) düzensiz bir modal fiildir. 'Ik' için çekimi 'mag'dır.",
    explanationEn: "'mogen' (to be allowed to) is an irregular modal verb. The conjugation for 'Ik' is 'mag'."
  },
  {
    id: "q_mod_002",
    type: "multiple_choice",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Jij ___ (willen) vanavond een film kijken.",
    options: ["wil", "wilt", "wil / wilt"],
    correctAnswer: "wil / wilt",
    explanationTr: "'willen' (istemek) fiilinin 'jij/je' için iki çekimi vardır: 'wil' veya 'wilt'. İkisi de doğrudur.",
    explanationEn: "The verb 'willen' (to want) has two conjugations for 'jij/je': 'wil' or 'wilt'. Both are correct."
  },
  {
    id: "q_mod_003",
    type: "fill_in",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Hij ___ (moeten) morgen vroeg opstaan.",
    correctAnswer: "moet",
    explanationTr: "'moeten' (zorunda olmak) fiili 3. tekil şahıs (hij, zij, het) için 'moet' olarak çekimlenir.",
    explanationEn: "The verb 'moeten' (must) is conjugated as 'moet' for 3rd person singular (hij, zij, het)."
  },
  {
    id: "q_mod_004",
    type: "multiple_choice",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Wij ___ (kunnen) heel goed Nederlands spreken.",
    options: ["kan", "kunt", "kunnen"],
    correctAnswer: "kunnen",
    explanationTr: "Çoğul şahıslarda (wij, jullie, zij) modal fiiller her zaman mastar (infinitief) halindedir.",
    explanationEn: "For plural subjects (wij, jullie, zij), modal verbs are always in their infinitive form."
  },
  {
    id: "q_mod_005",
    type: "fill_in",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Jullie ___ (zullen) volgende week het examen maken.",
    correctAnswer: "zullen",
    explanationTr: "'Jullie' çoğul bir özne olduğu için 'zullen' fiili mastar halinde kullanılır.",
    explanationEn: "'Jullie' is a plural subject, so the verb 'zullen' remains in the infinitive."
  },
  {
    id: "q_mod_006",
    type: "multiple_choice",
    tags: ["modal_verbs", "verbs_present", "questions"],
    questionNl: "___ (Kunnen) u mij alstublieft helpen?",
    options: ["Kan", "Kunt", "Kunnen"],
    correctAnswer: "Kunt",
    explanationTr: "Soru cümlesinde 'u' (siz) zamiri için 'kunnen' fiilinin çekimi 'kunt' veya 'kan' olabilir, ancak kibar formda 'kunt u' daha yaygındır.",
    explanationEn: "In a question with 'u', the conjugation of 'kunnen' is usually 'Kunt' (Kunt u...?). 'Kan u' is also possible but 'Kunt u' is standard."
  },
  {
    id: "q_mod_007",
    type: "fill_in",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Het ___ (kunnen) vandaag erg warm worden.",
    correctAnswer: "kan",
    explanationTr: "'Het' (3. tekil şahıs) için 'kunnen' fiili 'kan' şeklindedir.",
    explanationEn: "For 'Het' (3rd person singular), the verb 'kunnen' is 'kan'."
  },
  {
    id: "q_mod_008",
    type: "multiple_choice",
    tags: ["modal_verbs", "verbs_present"],
    questionNl: "Zij (tekil) ___ (willen) een nieuwe auto kopen.",
    options: ["wil", "wilt", "willen"],
    correctAnswer: "wil",
    explanationTr: "'Zij' (tekil - o) için 'willen' fiilinin çekimi 'wil'dir.",
    explanationEn: "For 'Zij' (singular - she), the conjugation of 'willen' is 'wil'."
  },
  {
    id: "q_mod_009",
    type: "fill_in",
    tags: ["modal_verbs", "verbs_present", "questions"],
    questionNl: "___ (Mogen) ik hier zitten?",
    correctAnswer: "Mag",
    explanationTr: "Soru cümlesinde 'ik' için 'mogen' fiili 'Mag' olur.",
    explanationEn: "In a question, 'mogen' for 'ik' becomes 'Mag'."
  },
  {
    id: "q_mod_010",
    type: "multiple_choice",
    tags: ["modal_verbs", "verbs_present", "questions"],
    questionNl: "___ (Zullen) ik het raam opendoen?",
    options: ["Zal", "Zul", "Zult"],
    correctAnswer: "Zal",
    explanationTr: "'ik' için 'zullen' fiili daima 'zal'dır.",
    explanationEn: "For 'ik', the verb 'zullen' is always 'zal'."
  },
  {
    id: "q_mod_011",
    type: "fill_in",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Ik wil vanavond een boek ___ (lezen).",
    correctAnswer: "lezen",
    explanationTr: "Cümlede modal fiil (wil) olduğunda, ana fiil MASTAR halinde cümlenin EN SONUNA gider.",
    explanationEn: "When there is a modal verb (wil), the main verb goes to the END of the sentence in its INFINITIVE form."
  },
  {
    id: "q_mod_012",
    type: "multiple_choice",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Morgen moet ik om 8 uur ___ (opstaan).",
    options: ["opsta", "opstaat", "opstaan"],
    correctAnswer: "opstaan",
    explanationTr: "'Moet' kullanıldığı için asıl eylem 'opstaan' sona gider ve mastar halinde kalır.",
    explanationEn: "Because 'moet' is used, the main action 'opstaan' goes to the end and remains in the infinitive."
  },
  {
    id: "q_mod_013",
    type: "fill_in",
    tags: ["modal_verbs", "word_order", "questions"],
    questionNl: "Kan jij me even met mijn huiswerk ___ (helpen)?",
    correctAnswer: "helpen",
    explanationTr: "Soru cümlesinde de kural aynıdır: Modal fiil başta, ana fiil (helpen) mastar olarak sonda.",
    explanationEn: "The rule is the same in questions: Modal verb at the front, main verb (helpen) as infinitive at the end."
  },
  {
    id: "q_mod_014",
    type: "multiple_choice",
    tags: ["modal_verbs", "word_order", "questions"],
    questionNl: "Mag ik hier een sigaret ___ (roken)?",
    options: ["rook", "rookt", "roken"],
    correctAnswer: "roken",
    explanationTr: "'Mag' izin fiilidir, asıl eylem 'roken' (içmek) mastar olarak sona gider.",
    explanationEn: "'Mag' is the modal for permission, the main action 'roken' goes to the end in the infinitive."
  },
  {
    id: "q_mod_015",
    type: "fill_in",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Waarom wil hij morgen niet ___ (komen)?",
    correctAnswer: "komen",
    explanationTr: "Modal fiilli (wil) bir cümlede asıl eylem daima sona gider: 'komen'.",
    explanationEn: "In a sentence with a modal (wil), the main action always goes to the end: 'komen'."
  },
  {
    id: "q_mod_016",
    type: "multiple_choice",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Wij zullen dat document later naar jou ___ (sturen).",
    options: ["sturen", "stuurt", "stuur"],
    correctAnswer: "sturen",
    explanationTr: "'Zullen' kullanıldığında diğer fiil daima sona mastar olarak (sturen) gider.",
    explanationEn: "When 'zullen' is used, the other verb always goes to the end as an infinitive (sturen)."
  },
  {
    id: "q_mod_017",
    type: "fill_in",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Je moet je kamer vandaag nog ___ (opruimen).",
    correctAnswer: "opruimen",
    explanationTr: "Asıl fiil (opruimen) mastar halinde sonda yer alır.",
    explanationEn: "The main verb (opruimen) is placed at the end in the infinitive."
  },
  {
    id: "q_mod_018",
    type: "multiple_choice",
    tags: ["modal_verbs", "word_order"],
    questionNl: "Ik moet naar het toilet. (Welk woord is hier weggelaten?)",
    options: ["gaan", "maken", "doen"],
    correctAnswer: "gaan",
    explanationTr: "Hollandacada bağlamdan çok net anlaşılan 'gaan' (gitmek) gibi fiiller modal fiillerden sonra düşürülebilir.",
    explanationEn: "In Dutch, obvious verbs like 'gaan' (to go) can be omitted after modal verbs if the context is clear."
  },
  {
    id: "q_mod_019",
    type: "fill_in",
    tags: ["modal_verbs", "word_order", "questions"],
    questionNl: "Zullen we samen een pizza ___ (eten)?",
    correctAnswer: "eten",
    explanationTr: "Teklif cümlesi: 'Zullen' başta, asıl eylem 'eten' sonda.",
    explanationEn: "Proposal sentence: 'Zullen' at the beginning, main action 'eten' at the end."
  },
  {
    id: "q_mod_020",
    type: "multiple_choice",
    tags: ["modal_verbs", "word_order", "inversion"],
    questionNl: "Vandaag kan ik helaas niet ___ (sporten).",
    options: ["sport", "sporten", "gesport"],
    correctAnswer: "sporten",
    explanationTr: "Devrik cümle (inversie) olsa da kural değişmez: ana fiil (sporten) sona gider.",
    explanationEn: "Even with inversion, the rule stands: the main verb (sporten) goes to the end."
  },
  {
    id: "q_imp_021",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Kijken) naar dit mooie schilderij!",
    correctAnswer: "Kijk",
    explanationTr: "Emir kipinde (Imperatief) standart formda fiilin sadece KÖKÜ (stam) kullanılır.",
    explanationEn: "In the imperative (Imperatief), the standard form uses only the STEM (stam) of the verb."
  },
  {
    id: "q_imp_022",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Luisteren) goed naar de leraar!",
    correctAnswer: "Luister",
    explanationTr: "Emir vermek için fiilin kökü kullanılır. 'Luisteren' -> 'Luister'.",
    explanationEn: "To give a command, use the stem of the verb. 'Luisteren' -> 'Luister'."
  },
  {
    id: "q_imp_023",
    type: "multiple_choice",
    tags: ["imperative"],
    questionNl: "___ (Komen) u alstublieft binnen.",
    options: ["Kom", "Komt", "Komen"],
    correctAnswer: "Komt",
    explanationTr: "Kibar (beleefde) emir formunda 'stam + t + u' kuralı geçerlidir. Bu yüzden 'Komt u'.",
    explanationEn: "In the polite imperative form, the rule is 'stam + t + u'. Therefore, 'Komt u'."
  },
  {
    id: "q_imp_024",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Gaan) u maar even zitten.",
    correctAnswer: "Gaat",
    explanationTr: "Resmi/Kibar form (u) kullanıldığında emir kipi 'stam + t' olur. 'Gaan' -> 'Gaat u'.",
    explanationEn: "When using the formal form (u), the imperative is 'stam + t'. 'Gaan' -> 'Gaat u'."
  },
  {
    id: "q_imp_025",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Pakken) een stoel en ga zitten.",
    correctAnswer: "Pak",
    explanationTr: "Normal emir kipi sadece fiil köküdür. 'Pakken' -> 'Pak'.",
    explanationEn: "Normal imperative is just the verb stem. 'Pakken' -> 'Pak'."
  },
  {
    id: "q_imp_026",
    type: "multiple_choice",
    tags: ["imperative"],
    questionNl: "Hoe maak je een imperatief vriendelijker (daha dostça/kibar)?",
    options: ["Door 'maar', 'even' of 'eens' toe te voegen", "Door het woord 'moeten' te gebruiken", "Door in het meervoud te praten"],
    correctAnswer: "Door 'maar', 'even' of 'eens' toe te voegen",
    explanationTr: "Emir kiplerini yumuşatmak için cümleye 'maar', 'maar even' veya 'eens' kelimeleri eklenir.",
    explanationEn: "To soften an imperative and make it friendly, words like 'maar', 'maar even', or 'eens' are added."
  },
  {
    id: "q_imp_027",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Geven) me dat boek eens.",
    correctAnswer: "Geef",
    explanationTr: "Standart emir kipi, fiil kökü (Geef). 'eens' cümleyi yumuşatır.",
    explanationEn: "Standard imperative, verb stem (Geef). 'eens' softens the command."
  },
  {
    id: "q_imp_028",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Lezen) deze tekst zorgvuldig.",
    correctAnswer: "Lees",
    explanationTr: "Standart emir kipi. 'Lezen' kökü 'lees'tir.",
    explanationEn: "Standard imperative. The stem of 'Lezen' is 'lees'."
  },
  {
    id: "q_imp_029",
    type: "multiple_choice",
    tags: ["imperative"],
    questionNl: "___ (Schrijven) u uw naam hier.",
    options: ["Schrijf", "Schrijft", "Schrijven"],
    correctAnswer: "Schrijft",
    explanationTr: "Cümlede 'u' (kibar) olduğu için 'stam + t' kuralı uygulanır: Schrijft u.",
    explanationEn: "Because 'u' (polite) is in the sentence, the 'stam + t' rule applies: Schrijft u."
  },
  {
    id: "q_imp_030",
    type: "fill_in",
    tags: ["imperative"],
    questionNl: "___ (Wachten) even, ik kom eraan!",
    correctAnswer: "Wacht",
    explanationTr: "Fiil kökü zaten 't' ile bitiyor (wacht). Emir kipi için aynen kalır.",
    explanationEn: "The verb stem already ends in 't' (wacht). It stays the same for the imperative."
  },
  {
    id: "q_mod_031",
    type: "fill_in",
    tags: ["modal_verbs", "questions"],
    questionNl: "___ (Zullen) ik de deur even opendoen?",
    correctAnswer: "Zal",
    explanationTr: "Birisine yardım teklif ederken (Zal ik...?) kalıbı kullanılır.",
    explanationEn: "When offering help, the structure (Zal ik...?) is used."
  },
  {
    id: "q_mod_032",
    type: "fill_in",
    tags: ["modal_verbs", "questions"],
    questionNl: "___ (Zullen) we vanavond naar de bioscoop gaan?",
    correctAnswer: "Zullen",
    explanationTr: "Bir öneri (voorstel) sunarken 'Zullen we...?' (Yapalım mı?) yapısı kullanılır.",
    explanationEn: "When making a suggestion, the structure 'Zullen we...?' (Shall we...?) is used."
  },
  {
    id: "q_mod_033",
    type: "multiple_choice",
    tags: ["modal_verbs", "negation"],
    questionNl: "- Moet ik betalen?\n- Nee, u ___ niet te betalen.",
    options: ["moet", "hoeft", "hoeft niet"],
    correctAnswer: "hoeft",
    explanationTr: "'Moeten' (zorunda olmak) sorusunun OLUMSUZU 'hoeven niet te' (gerek yok) yapısıdır.",
    explanationEn: "The NEGATIVE of 'moeten' (must) is 'hoeven niet te' (don't have to)."
  },
  {
    id: "q_mod_034",
    type: "fill_in",
    tags: ["modal_verbs", "negation"],
    questionNl: "- Moeten wij buiten wachten?\n- Nee, jullie ___ niet te wachten.",
    correctAnswer: "hoeven",
    explanationTr: "'Jullie' çoğul olduğu için 'hoeven' mastar halinde kullanılır. (hoeven niet te wachten = beklemenize gerek yok).",
    explanationEn: "Because 'jullie' is plural, 'hoeven' is in the infinitive. (hoeven niet te wachten = you don't have to wait)."
  },
  {
    id: "q_mod_035",
    type: "multiple_choice",
    tags: ["modal_verbs"],
    questionNl: "Ik ___ (zullen) je morgen zeker helpen.",
    options: ["zal", "wil", "moet"],
    correctAnswer: "zal",
    explanationTr: "'Zullen' gayriresmi durumlarda bir SÖZ/VAAT (belofte) ifade eder. 'Sana kesinlikle yardım edeceğim'.",
    explanationEn: "'Zullen' expresses a PROMISE (belofte) in informal situations. 'I will definitely help you'."
  },
  {
    id: "q_mod_036",
    type: "multiple_choice",
    tags: ["modal_verbs", "negation"],
    questionNl: "Je ___ hier niet parkeren! Het is verboden.",
    options: ["mag", "wil", "hoeft"],
    correctAnswer: "mag",
    explanationTr: "Bir şeyin yasak olduğunu belirtmek için 'mag niet' (izin yok / yapamazsın) kullanılır.",
    explanationEn: "To indicate that something is forbidden, 'mag niet' (not allowed) is used."
  },
  {
    id: "q_mod_037",
    type: "fill_in",
    tags: ["modal_verbs"],
    questionNl: "Mijn broer ___ (kunnen) heel goed voetballen.",
    correctAnswer: "kan",
    explanationTr: "Yetenek belirtirken 'kunnen' fiili kullanılır. 'Hij' için 'kan' çekimi doğrudur.",
    explanationEn: "The verb 'kunnen' is used to express ability. The conjugation for 'Hij' is 'kan'."
  },
  {
    id: "q_mod_038",
    type: "fill_in",
    tags: ["modal_verbs"],
    questionNl: "Het meisje ___ (willen) later dokter worden.",
    correctAnswer: "wil",
    explanationTr: "'Het meisje' (zij/o) için 'willen' fiilinin çekimi 'wil'dir. (İstek/Arzu belirtir).",
    explanationEn: "For 'Het meisje' (she/it), the conjugation of 'willen' is 'wil'. (Expresses desire)."
  },
  {
    id: "q_mod_039",
    type: "multiple_choice",
    tags: ["modal_verbs"],
    questionNl: "Het ___ wel koud zijn buiten. Iedereen draagt een jas.",
    options: ["zal", "kan", "moet"],
    correctAnswer: "zal",
    explanationTr: "'zal wel ... zijn' yapısı güçlü bir ihtimal/tahmin (waarschijnlijkheid) belirtir: 'Dışarısı soğuk olmalı.'",
    explanationEn: "The 'zal wel ... zijn' structure expresses a strong probability: 'It must be cold outside.'"
  },
  {
    id: "q_mod_040",
    type: "multiple_choice",
    tags: ["modal_verbs", "negation"],
    questionNl: "U ___ mij niet bellen. Wij bellen u wel!",
    options: ["hoeft", "moet", "mag"],
    correctAnswer: "moet",
    explanationTr: "Eğer bir şeyin yapılması istenmiyorsa/kötüyse 'moet niet' kullanılır. 'Bizi aramanıza gerek yok/aramayın, BİZ sizi ararız!'",
    explanationEn: "If something is strongly discouraged or forbidden, use 'moet niet'. 'You shouldn't call us, WE will call you!'"
  },
  {
    id: "q_read_mod_041",
    type: "fill_in",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Lees de tekst: 'Hallo, ik ben Lisa. Ik kan heel goed zingen. Vanavond wil ik een liedje zingen op het feest. Maar ik moet eerst mijn huiswerk maken. Kom maar luisteren als je tijd hebt!'\n\nWat ___ (willen) Anna vanavond doen?",
    correctAnswer: "wil",
    explanationTr: "Metne göre özne Anna/Lisa (zij) olduğu için 'willen' çekimi 'wil' olur.",
    explanationEn: "Based on the text, the subject is Anna/Lisa (zij), so the conjugation of 'willen' is 'wil'."
  },
  {
    id: "q_read_mod_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "word_order"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nIn de zin 'Vanavond wil ik een liedje zingen', waarom staat 'zingen' aan het einde?",
    options: ["Omdat er een modaal werkwoord ('wil') in de zin staat.", "Omdat het een vraag is.", "Omdat 'zingen' onregelmatig is."],
    correctAnswer: "Omdat er een modaal werkwoord ('wil') in de zin staat.",
    explanationTr: "Cümlede kipli (modal) fiil varsa, asıl fiil (zingen) cümlenin en sonuna gider.",
    explanationEn: "If there is a modal verb in the sentence, the main verb (zingen) goes to the very end."
  },
  {
    id: "q_read_mod_043",
    type: "fill_in",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Wat ___ (moeten) ze eerst doen?",
    correctAnswer: "moet",
    explanationTr: "'zij' (o) zamiri için 'moeten' fiili 'moet' olarak çekimlenir.",
    explanationEn: "For the pronoun 'zij' (she), 'moeten' is conjugated as 'moet'."
  },
  {
    id: "q_read_mod_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "imperative"],
    questionNl: "Wat voor soort zin is: 'Kom maar luisteren als je tijd hebt!'?",
    options: ["Een imperatief (emir cümlesi)", "Een vraag (soru)", "Een inversie (devrik cümle)"],
    correctAnswer: "Een imperatief (emir cümlesi)",
    explanationTr: "Fiil köküyle (Kom) başlayan cümleler emir kipi (imperatief) cümleleridir. 'maar' kelimesiyle yumuşatılmıştır.",
    explanationEn: "Sentences starting with the verb stem (Kom) are imperatives. It is softened with the word 'maar'."
  },
  {
    id: "q_read_mod_045",
    type: "fill_in",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Lees de tekst: 'In het museum mag je niet rennen. Je moet je tas bij de ingang laten. Wilt u een rondleiding? Vraag het aan de gids. Gaat u alstublieft naar binnen.'\n\nWat ___ (mogen) je niet doen in het museum?",
    correctAnswer: "mag",
    explanationTr: "'je' zamiri için 'mogen' fiilinin çekimi 'mag'dır. (mag je niet rennen).",
    explanationEn: "For the pronoun 'je', the conjugation of 'mogen' is 'mag'. (mag je niet rennen)."
  },
  {
    id: "q_read_mod_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "imperative"],
    questionNl: "In de tekst staat: 'Gaat u alstublieft naar binnen.' Waarom wordt 'Gaat u' gebruikt en niet 'Ga'?",
    options: ["Omdat het de beleefde vorm (kibar form) is met 'u'", "Omdat het meervoud is", "Omdat het een vraag is"],
    correctAnswer: "Omdat het de beleefde vorm (kibar form) is met 'u'",
    explanationTr: "'u' (siz) hitabıyla resmi/kibar emir verilirken 'stam + t' (Gaat u) kullanılır.",
    explanationEn: "When giving a polite/formal command to 'u', the structure 'stam + t' (Gaat u) is used."
  },
  {
    id: "q_read_mod_047",
    type: "fill_in",
    tags: ["reading_comprehension", "imperative"],
    questionNl: "In de tekst staat: '___ (Vragen) het aan de gids.'",
    correctAnswer: "Vraag",
    explanationTr: "Standart emir kipi, sadece fiil köküdür. 'Vragen' -> 'Vraag'.",
    explanationEn: "Standard imperative is just the verb stem. 'Vragen' -> 'Vraag'."
  },
  {
    id: "q_read_mod_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Lees de tekst: 'Tom: Zal ik vanavond koken? Anna: Ja, lekker! Tom: Moet ik de boodschappen doen? Anna: Nee, dat hoeft niet. Ik ga zo naar de supermarkt.'\n\nWat is de functie van 'Zal ik vanavond koken?'",
    options: ["Een voorstel (Öneri / Teklif)", "Een waarschijnlijkheid (Olasılık)", "Een belofte (Söz)"],
    correctAnswer: "Een voorstel (Öneri / Teklif)",
    explanationTr: "'Zal ik...' (Yapayım mı?) yapısı, birine bir şey teklif ederken (voorstel) kullanılır.",
    explanationEn: "The structure 'Zal ik...' (Shall I...?) is used when making a proposal or offering something."
  },
  {
    id: "q_read_mod_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "modal_verbs", "negation"],
    questionNl: "Tom vraagt: 'Moet ik de boodschappen doen?' Anna zegt: 'Nee, dat hoeft niet.' Wat betekent dit?",
    options: ["Het is niet nodig (Gerek yok)", "Het is verboden (Yasak)", "Hij moet het wel doen (Yapmalı)"],
    correctAnswer: "Het is niet nodig (Gerek yok)",
    explanationTr: "'Hoeft niet', bir zorunluluğun olmadığını (gerek yok) belirtir. 'Moet niet' ise yasak belirtirdi.",
    explanationEn: "'Hoeft niet' means there is no obligation (don't have to). 'Moet niet' would mean forbidden."
  },
  {
    id: "q_read_mod_050",
    type: "fill_in",
    tags: ["reading_comprehension", "modal_verbs"],
    questionNl: "Tom en Anna ___ (zullen) vanavond thuis eten.",
    correctAnswer: "zullen",
    explanationTr: "Özne 'Tom en Anna' (zij/çoğul) olduğu için 'zullen' fiili mastar halinde kalır.",
    explanationEn: "Because the subject is 'Tom en Anna' (plural), the verb 'zullen' remains in the infinitive."
  },
  
  {
    id: "q_comp_001",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Mijn auto is ___ (klein) dan jouw auto.",
    options: ["klein", "kleiner", "het kleinst"],
    correctAnswer: "kleiner",
    explanationTr: "Karşılaştırma (comparatief) yaparken sıfatın sonuna '-er' eklenir. 'klein' -> 'kleiner'.",
    explanationEn: "When comparing (comparative), we add '-er' to the adjective. 'klein' -> 'kleiner'."
  },
  {
    id: "q_comp_002",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Mijn huis is ___ (groot) dan jouw huis.",
    correctAnswer: "groter",
    explanationTr: "Karşılaştırma formunda '-er' eklenir. Yazım kuralı: 'groot' kelimesi açık heceye dönüştüğü için bir 'o' harfi düşer -> 'groter'.",
    explanationEn: "Add '-er' for the comparative. Spelling rule: one 'o' drops because it becomes an open syllable -> 'groter'."
  },
  {
    id: "q_comp_003",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Dit is ___ (mooi) schilderij van het museum.",
    options: ["mooier", "mooiste", "het mooist"],
    correctAnswer: "het mooist",
    explanationTr: "En üstünlük (superlatief) derecesinde sıfatın sonuna '-st' eklenir ve fiilden sonra zarf gibi kullanılıyorsa başına 'het' gelir.",
    explanationEn: "In the superlative, '-st' is added. When used as an adverb after the verb, it is preceded by 'het'."
  },
  {
    id: "q_comp_004",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "In de winter is het ___ (koud) dan in de lente.",
    correctAnswer: "kouder",
    explanationTr: "Karşılaştırma (daha soğuk) için 'koud' sıfatına '-er' eklenir.",
    explanationEn: "To compare (colder), '-er' is added to the adjective 'koud'."
  },
  {
    id: "q_comp_005",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Vandaag is het ___ (warm) dan gisteren.",
    options: ["warmer", "warmst", "warm"],
    correctAnswer: "warmer",
    explanationTr: "İki günü karşılaştırıyoruz ('dan' kelimesinden de anlıyoruz), bu yüzden comparatief (warmer) kullanılır.",
    explanationEn: "We are comparing two days (indicated by 'dan'), so we use the comparative (warmer)."
  },
  {
    id: "q_comp_006",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Mijn oma is ___ (oud) persoon in onze familie.",
    correctAnswer: "de oudste",
    explanationTr: "Burada 'persoon' isminden önce kullanılmış bir superlatief var. İsimden önce geldiği için 'de oudste' şeklinde ek alarak kullanılır.",
    explanationEn: "Here we have a superlative before the noun 'persoon'. Because it precedes a noun, it inflects as 'de oudste'."
  },
  {
    id: "q_comp_007",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Tom is ___ (jong) dan zijn broer.",
    correctAnswer: "jonger",
    explanationTr: "'jong' (genç) sıfatı karşılaştırma durumunda '-er' alır: 'jonger'.",
    explanationEn: "The adjective 'jong' (young) takes '-er' in the comparative form: 'jonger'."
  },
  {
    id: "q_comp_008",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "De trein is ___ (snel) dan de bus.",
    options: ["sneler", "sneller", "snelst"],
    correctAnswer: "sneller",
    explanationTr: "Yazım kuralı: 'snel' kısa sesli harfe sahip tek heceli bir kelimedir. Ek aldığında son ünsüz harf ikileşir: 'sneller'.",
    explanationEn: "Spelling rule: 'snel' has a short vowel in a closed syllable. The final consonant doubles when adding a suffix: 'sneller'."
  },
  {
    id: "q_comp_009",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Dit boek is ___ (dik) dan het andere boek.",
    correctAnswer: "dikker",
    explanationTr: "Yazım kuralı: Kısa sesli (i) harfi korumak için 'k' harfi ikileşir: 'dik' -> 'dikker'.",
    explanationEn: "Spelling rule: To preserve the short vowel (i), the 'k' is doubled: 'dik' -> 'dikker'."
  },
  {
    id: "q_comp_010",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Gezondheid is ___ (belangrijk) dan geld.",
    options: ["belangrijker", "belangrijkst", "meer belangrijk"],
    correctAnswer: "belangrijker",
    explanationTr: "Hollandacada uzun kelimeler bile (İngilizcedeki 'more' yerine) genellikle sonuna '-er' alarak karşılaştırılır.",
    explanationEn: "In Dutch, even long adjectives usually take '-er' for the comparative (instead of using 'more' like in English)."
  },
  {
    id: "q_comp_011",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Deze telefoon is ___ (duur) dan die laptop.",
    correctAnswer: "duurder",
    explanationTr: "İSTİSNA KURALI: Eğer sıfat '-r' harfiyle bitiyorsa, '-er' yerine '-der' eklenir. 'duur' -> 'duurder'.",
    explanationEn: "EXCEPTION RULE: If the adjective ends in '-r', add '-der' instead of '-er'. 'duur' -> 'duurder'."
  },
  {
    id: "q_comp_012",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Mijn koffer is ___ (zwaar) dan jouw koffer.",
    options: ["zwaarer", "zwaarder", "het zwaarst"],
    correctAnswer: "zwaarder",
    explanationTr: "Sıfat '-r' ile bittiği için '-der' alır. Ayrıca yazım kuralı gereği uzun sesli (aa) açık hecede teke düşer: zwaar -> zwaarder.",
    explanationEn: "Ends in '-r', so it gets '-der'. Also, the long vowel 'aa' simplifies to one 'a' in the open syllable: zwaar -> zwaarder."
  },
  {
    id: "q_comp_013",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Amsterdam is ___ (ver) dan Utrecht vanaf hier.",
    correctAnswer: "verder",
    explanationTr: "'-r' ile bittiği için '-der' eklenir. 'ver' (uzak) -> 'verder' (daha uzak).",
    explanationEn: "Ends in '-r', so add '-der'. 'ver' (far) -> 'verder' (further)."
  },
  {
    id: "q_comp_014",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Ik vind deze soep ___ (lekker) dan de pasta.",
    options: ["lekkerer", "lekkerder", "het lekkerst"],
    correctAnswer: "lekkerder",
    explanationTr: "Sıfat '-r' ile bittiği için karşılaştırma yapılırken '-der' alır. 'lekker' -> 'lekkerder'.",
    explanationEn: "The adjective ends in '-r', so it takes '-der' for the comparative. 'lekker' -> 'lekkerder'."
  },
  {
    id: "q_comp_015",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "In de winter is het ___ (donker) dan in de zomer.",
    correctAnswer: "donkerder",
    explanationTr: "Sonu '-r' ile biten sıfatlar '+der' alır. 'donker' -> 'donkerder'.",
    explanationEn: "Adjectives ending in '-r' take '+der'. 'donker' -> 'donkerder'."
  },
  {
    id: "q_comp_016",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Mijn auto is ___ groot als jouw auto.",
    options: ["even", "net", "dan"],
    correctAnswer: "even",
    explanationTr: "Eşitlik durumunda 'even ... als' yapısı kullanılır.",
    explanationEn: "To show equality, the structure 'even ... als' is used."
  },
  {
    id: "q_comp_017",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Jouw broer is net ___ snel als mijn broer.",
    correctAnswer: "zo",
    explanationTr: "Eşitlik durumunda kullanılan diğer bir yapı 'net zo ... als' yapısıdır.",
    explanationEn: "Another structure used for equality is 'net zo ... als'."
  },
  {
    id: "q_comp_018",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Zij is even oud ___ ik.",
    options: ["dan", "als", "zo"],
    correctAnswer: "als",
    explanationTr: "Eşitlik durumlarında daima 'als' kullanılır. (Karşılaştırma durumlarında ise 'dan' kullanılır: ouder dan).",
    explanationEn: "In cases of equality, 'als' is always used. (For comparatives, 'dan' is used: ouder dan)."
  },
  {
    id: "q_comp_019",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Deze jas is even duur ___ die broek.",
    correctAnswer: "als",
    explanationTr: "'even ...' yapısı her zaman 'als' ile tamamlanır. (even duur als).",
    explanationEn: "The 'even ...' structure is always completed with 'als'. (even duur als)."
  },
  {
    id: "q_comp_020",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Mijn kamer is ___ zo groot als jouw kamer.",
    options: ["even", "net", "dan"],
    correctAnswer: "net",
    explanationTr: "'zo' kelimesinden önce eşitlik belirtirken 'net' kullanılır (net zo groot als).",
    explanationEn: "Before the word 'zo', 'net' is used to indicate equality (net zo groot als)."
  },
  {
    id: "q_comp_021",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Ik vind deze film ___ (goed) dan die andere.",
    correctAnswer: "beter",
    explanationTr: "DÜZENSİZ: 'goed' (iyi) kelimesinin karşılaştırmalı hali 'beter' (daha iyi) olur.",
    explanationEn: "IRREGULAR: The comparative of 'goed' (good) is 'beter' (better)."
  },
  {
    id: "q_comp_022",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Dit is ___ (goed) boek van de wereld.",
    options: ["het best", "het beste", "het goedst"],
    correctAnswer: "het beste",
    explanationTr: "DÜZENSİZ: 'goed' -> 'best'. İsimden önce (boek) geldiği için ve 'het' ile başladığı için '-e' alır: 'het beste boek'.",
    explanationEn: "IRREGULAR: 'goed' -> 'best'. Because it precedes the noun (boek) with 'het', it takes an '-e': 'het beste boek'."
  },
  {
    id: "q_comp_023",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Hij drinkt ___ (veel) koffie dan ik.",
    correctAnswer: "meer",
    explanationTr: "DÜZENSİZ: 'veel' (çok) kelimesinin karşılaştırma hali 'meer' (daha çok) olur.",
    explanationEn: "IRREGULAR: The comparative form of 'veel' (much/many) is 'meer' (more)."
  },
  {
    id: "q_comp_024",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Opa eet van ons allemaal ___ (veel).",
    options: ["het meer", "het meest", "het veelst"],
    correctAnswer: "het meest",
    explanationTr: "DÜZENSİZ: 'veel' -> 'meer' -> 'het meest' (en çok).",
    explanationEn: "IRREGULAR: 'veel' -> 'meer' -> 'het meest' (the most)."
  },
  {
    id: "q_comp_025",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Ik heb ___ (weinig) tijd dan jij.",
    correctAnswer: "minder",
    explanationTr: "DÜZENSİZ: 'weinig' (az) kelimesinin karşılaştırma hali 'minder' (daha az) olur.",
    explanationEn: "IRREGULAR: The comparative form of 'weinig' (little) is 'minder' (less)."
  },
  {
    id: "q_comp_026",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Van al mijn vrienden heeft Ali ___ (weinig) geld.",
    options: ["het minst", "het mindere", "het weinigst"],
    correctAnswer: "het minst",
    explanationTr: "DÜZENSİZ: 'weinig' -> 'minder' -> 'het minst' (en az).",
    explanationEn: "IRREGULAR: 'weinig' -> 'minder' -> 'het minst' (the least)."
  },
  {
    id: "q_comp_027",
    type: "fill_in",
    tags: ["comparative_superlative"],
    questionNl: "Ik wandel graag, maar ik fiets ___ (graag).",
    correctAnswer: "liever",
    explanationTr: "DÜZENSİZ: 'graag' (memnuniyetle/severek) kelimesinin karşılaştırma hali 'liever' (daha çok severek) olur.",
    explanationEn: "IRREGULAR: The comparative of 'graag' (gladly/like to) is 'liever' (prefer to)."
  },
  {
    id: "q_comp_028",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Ik drink graag thee, liever koffie, maar ik drink ___ (graag) fruitsap.",
    options: ["het lieverst", "het liefst", "het graagst"],
    correctAnswer: "het liefst",
    explanationTr: "DÜZENSİZ: 'graag' -> 'liever' -> 'het liefst' (en çok severek / tercihen).",
    explanationEn: "IRREGULAR: 'graag' -> 'liever' -> 'het liefst' (most preferably)."
  },
  {
    id: "q_comp_029",
    type: "multiple_choice",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Peter vindt biefstuk met frietjes ___ (lekkerst / het lekkerst).",
    options: ["lekkerst", "het lekkerst"],
    correctAnswer: "lekkerst",
    explanationTr: "ÇOK ÖNEMLİ İSTİSNA: 'vinden' fiili kullanıldığında superlatief formunun başında 'het' KULLANILMAZ!",
    explanationEn: "CRUCIAL EXCEPTION: When using the verb 'vinden', the superlative form is NOT preceded by 'het'!"
  },
  {
    id: "q_comp_030",
    type: "fill_in",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Ik vind deze film ___ (mooi) van allemaal.",
    correctAnswer: "mooist",
    explanationTr: "'vinden' fiili kullanıldığı için 'het mooist' yerine sadece 'mooist' yazılır.",
    explanationEn: "Because the verb 'vinden' is used, we write just 'mooist' instead of 'het mooist'."
  },
  {
    id: "q_comp_031",
    type: "multiple_choice",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Zij heeft een ___ (mooi) auto dan ik.",
    options: ["mooier", "mooiere"],
    correctAnswer: "mooiere",
    explanationTr: "Sıfat ismin önündeyse ve karşılaştırma durumundaysa da genel kurallar (burada de-woord kuralı) geçerlidir. 'een mooiere auto'.",
    explanationEn: "If the adjective precedes a noun in comparative form, general inflection rules apply (here de-word rule). 'een mooiere auto'."
  },
  {
    id: "q_comp_032",
    type: "fill_in",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Hij wil in een ___ (groot) huis wonen dan dit huis.",
    correctAnswer: "groter",
    explanationTr: "'Huis' het-woord'dur ve önünde 'een' vardır. Bu yüzden sıfat '-e' takısı almaz. 'een groter huis'.",
    explanationEn: "'Huis' is a het-word preceded by 'een'. Therefore, the adjective does not get an '-e'. 'een groter huis'."
  },
  {
    id: "q_comp_033",
    type: "multiple_choice",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Hij kocht de ___ (duur) broek uit de winkel.",
    options: ["duurst", "duurste"],
    correctAnswer: "duurste",
    explanationTr: "Sıfat (superlatief formda) isimden önce gelirse '-e' eklenir. 'de duurste broek'.",
    explanationEn: "When a superlative adjective precedes a noun, it takes an '-e'. 'de duurste broek'."
  },
  {
    id: "q_comp_034",
    type: "fill_in",
    tags: ["comparative_superlative", "adjectives"],
    questionNl: "Dit is het ___ (lekker) broodje van de bakker.",
    correctAnswer: "lekkerste",
    explanationTr: "Sıfat (superlatief formda) isimden önce gelir. 'het' artikeli ile belirlidir. Bu yüzden '-e' eklenir: 'het lekkerste broodje'.",
    explanationEn: "Superlative adjective precedes the noun. It's definite with 'het'. Thus, it takes an '-e': 'het lekkerste broodje'."
  },
  {
    id: "q_comp_035",
    type: "multiple_choice",
    tags: ["comparative_superlative"],
    questionNl: "Wie kan van ons allemaal ___ (snel) rennen?",
    options: ["de snelste", "snelst", "het snelst"],
    correctAnswer: "het snelst",
    explanationTr: "Fiili niteleyen (zarf olarak) superlatief formlarda 'het ...st' kullanılır. 'het snelst rennen'.",
    explanationEn: "When modifying a verb (as an adverb), the superlative takes the 'het ...st' form. 'het snelst rennen'."
  },
  {
    id: "q_read_comp_036",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst: 'Mijn fiets is oud, maar de fiets van Jan is ouder. De fiets van Marie is het oudst. Ik fiets graag, maar Jan fietst liever. Marie fietst het liefst. Mijn fiets was duur, maar die van Marie was duurder.'\n\nVul de zin in (kijk naar de tekst): 'De fiets van Jan is ___ (oud) dan mijn fiets.'",
    correctAnswer: "ouder",
    explanationTr: "Metne göre Jan'ın bisikleti 'daha eski' (ouder). 'Oud' kelimesinin karşılaştırmalı hali '-er' alır.",
    explanationEn: "According to the text, Jan's bike is 'older' (ouder). The comparative of 'oud' takes '-er'."
  },
  {
    id: "q_read_comp_037",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWie heeft de oudste fiets?",
    options: ["Ik", "Jan", "Marie"],
    correctAnswer: "Marie",
    explanationTr: "Metinde açıkça 'De fiets van Marie is het oudst' (En eski bisiklet Marie'nin) yazmaktadır.",
    explanationEn: "The text explicitly states 'De fiets van Marie is het oudst' (Marie's bike is the oldest)."
  },
  {
    id: "q_read_comp_038",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat is het comparatief van 'graag' (zoals gebruikt voor Jan)?",
    options: ["grager", "liever", "het liefst"],
    correctAnswer: "liever",
    explanationTr: "Düzensiz 'graag' zarfının comparatief hali metinde de görüldüğü gibi 'liever'dır.",
    explanationEn: "The comparative of the irregular adverb 'graag' is 'liever', as seen in the text."
  },
  {
    id: "q_read_comp_039",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Marie fietst ___ (graag).' (Superlatief form)",
    correctAnswer: "het liefst",
    explanationTr: "'graag' (seve seve/memnuniyetle) kelimesinin en üstünlük derecesi 'het liefst' olur.",
    explanationEn: "The superlative degree of 'graag' (gladly/prefer) is 'het liefst'."
  },
  {
    id: "q_read_comp_040",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'De fiets van Marie was ___ (duur) dan mijn fiets.'",
    correctAnswer: "duurder",
    explanationTr: "Sıfat '-r' ile bittiği için karşılaştırma durumunda '+der' eklenir. 'duur' -> 'duurder'.",
    explanationEn: "Since the adjective ends in '-r', '+der' is added in the comparative. 'duur' -> 'duurder'."
  },
  {
    id: "q_read_comp_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst: 'In onze klas is Thomas 20 jaar en Ali is 25 jaar. Ali is ouder dan Thomas. Lisa is ook 20 jaar. Zij is even oud als Thomas. Sarah is 30 jaar en zij is de oudste student. Thomas heeft weinig boeken, Ali heeft er minder, maar Sarah heeft het minst.'\n\nIs Lisa jonger dan Thomas?",
    options: ["Ja, ze is jonger", "Nee, ze is ouder", "Nee, ze is even oud als Thomas"],
    correctAnswer: "Nee, ze is even oud als Thomas",
    explanationTr: "Metinde 'Zij is even oud als Thomas' (O Thomas ile aynı yaşta) yazmaktadır. Eşitlik durumu vardır.",
    explanationEn: "The text says 'Zij is even oud als Thomas' (She is as old as Thomas). It shows equality."
  },
  {
    id: "q_read_comp_042",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Lisa is net zo ___ (oud) als Thomas.'",
    correctAnswer: "oud",
    explanationTr: "'even ... als' veya 'net zo ... als' kalıplarının arasına sıfatın YALIN (basis) hali gelir. Ek almaz.",
    explanationEn: "Between the patterns 'even ... als' or 'net zo ... als', the adjective is in its BASE form. It takes no suffix."
  },
  {
    id: "q_read_comp_043",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom schrijven we 'de oudste student' en niet 'de oudst student'?",
    options: ["Omdat 'student' een de-woord is.", "Omdat het superlatief voor een substantief staat.", "Omdat het meervoud is."],
    correctAnswer: "Omdat het superlatief voor een substantief staat.",
    explanationTr: "Superlatief bir ismin önüne geldiğinde her zaman '-e' takısı alır. (de oudst + e = de oudste).",
    explanationEn: "When a superlative precedes a noun, it always takes the '-e' suffix. (de oudst + e = de oudste)."
  },
  {
    id: "q_read_comp_044",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in (Düzensiz sıfat): 'Ali heeft ___ (weinig) boeken dan Thomas.'",
    correctAnswer: "minder",
    explanationTr: "Düzensiz 'weinig' (az) sıfatının comparatief hali metinde de geçtiği gibi 'minder' (daha az) olur.",
    explanationEn: "The comparative of the irregular adjective 'weinig' (little/few) is 'minder' (less), as shown in the text."
  },
  {
    id: "q_read_comp_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWie heeft 'het minst' (en az) boeken?",
    options: ["Thomas", "Ali", "Sarah"],
    correctAnswer: "Sarah",
    explanationTr: "Metnin sonunda 'maar Sarah heeft het minst' (ama Sarah'ın en az var) denmektedir.",
    explanationEn: "At the end of the text, it says 'maar Sarah heeft het minst' (but Sarah has the least)."
  },
  {
    id: "q_read_comp_046",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst: 'Ik vind koffie lekker. Thee vind ik beter, maar warme chocolademelk vind ik lekkerst. We eten vandaag veel, want we hebben honger. Gisteren aten we meer. Morgen gaan we naar een groot restaurant. Dat is een groter restaurant dan vandaag.'\n\nVul in (Düzensiz sıfat): 'Thee vind ik ___ (goed) dan koffie.'",
    correctAnswer: "beter",
    explanationTr: "Düzensiz 'goed' (iyi) sıfatının karşılaştırma hali 'beter' (daha iyi) olur.",
    explanationEn: "The comparative form of the irregular adjective 'goed' (good) is 'beter' (better)."
  },
  {
    id: "q_read_comp_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative", "adjectives"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom staat er 'vind ik lekkerst' en NIET 'vind ik het lekkerst'?",
    options: ["Omdat chocolademelk vrouwelijk is.", "Omdat het woord 'vinden' een uitzondering is en geen 'het' krijgt voor een superlatief.", "Omdat het in de verleden tijd staat."],
    correctAnswer: "Omdat het woord 'vinden' een uitzondering is en geen 'het' krijgt voor een superlatief.",
    explanationTr: "'Vinden' fiili kullanıldığında, kendisinden sonra gelen superlatief kelimesi (lekkerst) 'het' artikeli almaz. Bu bir istisnadır.",
    explanationEn: "When using the verb 'vinden', the superlative word that follows (lekkerst) does not take the article 'het'. This is an exception."
  },
  {
    id: "q_read_comp_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWanneer aten ze 'het meest' (en çok)? (Let op het woord 'meer' en 'veel' in de tekst).",
    options: ["Vandaag", "Gisteren", "Morgen"],
    correctAnswer: "Gisteren",
    explanationTr: "Metinde 'Bugün çok yiyoruz... Dün daha çok (meer) yedik' diyor. Yani en çok yenen zaman 'dün'.",
    explanationEn: "The text says 'Today we eat a lot... Yesterday we ate more (meer)'. So the most was eaten 'yesterday'."
  },
  {
    id: "q_read_comp_049",
    type: "fill_in",
    tags: ["reading_comprehension", "comparative_superlative"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Gisteren aten we ___ (veel).'",
    correctAnswer: "meer",
    explanationTr: "'Veel' kelimesinin karşılaştırma (comparatief) derecesi düzensizdir ve 'meer' olur.",
    explanationEn: "The comparative degree of 'veel' is irregular and becomes 'meer'."
  },
  {
    id: "q_read_comp_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "comparative_superlative", "adjectives"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nIn de zin 'Dat is een groter restaurant dan vandaag', waarom krijgt 'groter' GEEN -e (grotere)?",
    options: ["Omdat 'restaurant' een het-woord is, en er staat 'een' voor.", "Omdat 'groter' onregelmatig is.", "Omdat het een comparatief is."],
    correctAnswer: "Omdat 'restaurant' een het-woord is, en er staat 'een' voor.",
    explanationTr: "Altın Sıfat Kuralı: 'Restaurant' bir het-woord'dur ve önünde belirsiz artikel 'een' vardır. Bu durumda sıfat (comparatief de olsa) '-e' takısı almaz.",
    explanationEn: "Golden Adjective Rule: 'Restaurant' is a het-word and is preceded by the indefinite article 'een'. In this case, the adjective (even comparative) does not take an '-e' suffix."
  },
  
  {
    id: "q_obj_001",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "De leraar ziet ___ (ik) in de gang.",
    correctAnswer: "mij",
    explanationTr: "'Ik' (ben) zamirinin nesne (object) hali 'mij' veya 'me'dir. İkisi de doğrudur, 'mij' vurguludur.",
    explanationEn: "The object form of 'ik' (I) is 'mij' or 'me'. Both are correct; 'mij' is the emphasized form."
  },
  {
    id: "q_obj_002",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "Ik heb een cadeautje voor ___ (jij).",
    options: ["jou", "jij", "jezelf"],
    correctAnswer: "jou",
    explanationTr: "Bir edattan (voor) sonra nesne zamiri kullanılır. 'Jij'in nesne ve vurgulu hali 'jou'dur. ('je' de kullanılabilir).",
    explanationEn: "After a preposition (voor), the object pronoun is used. The object and emphasized form of 'jij' is 'jou' (or 'je')."
  },
  {
    id: "q_obj_003",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Meneer, ik kan ___ (u) niet goed horen.",
    correctAnswer: "u",
    explanationTr: "Resmi hitap olan 'u' (siz) zamirinin özne hali de, nesne hali de 'u'dur.",
    explanationEn: "For the formal 'u' (you), the subject form and the object form are exactly the same: 'u'."
  },
  {
    id: "q_obj_004",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "Kijk naar John! Zie je ___ (hij) ook?",
    options: ["hij", "zijn", "hem"],
    correctAnswer: "hem",
    explanationTr: "Eril 'hij' (o) zamirinin nesne (onu/ona) hali 'hem'dir.",
    explanationEn: "The object form (him) of the masculine pronoun 'hij' (he) is 'hem'."
  },
  {
    id: "q_obj_005",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Dit is Anna. Ik ken ___ (zij) al heel lang.",
    correctAnswer: "haar",
    explanationTr: "Dişil 'zij/ze' (o) zamirinin nesne (onu/ona) hali 'haar'dır.",
    explanationEn: "The object form (her) of the feminine pronoun 'zij/ze' (she) is 'haar'."
  },
  {
    id: "q_obj_006",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "Het regent. De docent wacht op ___ (wij) in de klas.",
    options: ["we", "ons", "onze"],
    correctAnswer: "ons",
    explanationTr: "'Wij/we' (biz) zamirinin nesne (bizi/bize) hali 'ons'tur.",
    explanationEn: "The object form (us) of the pronoun 'wij/we' (we) is 'ons'."
  },
  {
    id: "q_obj_007",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Hebben jullie de sleutels? Ik kan ___ (jullie) niet vinden.",
    correctAnswer: "jullie",
    explanationTr: "Çoğul 'jullie' (siz) zamirinin özne hali de nesne hali de 'jullie'dir.",
    explanationEn: "For the plural 'jullie' (you all), both the subject and object forms are 'jullie'."
  },
  {
    id: "q_obj_008",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "De studenten zijn te laat. De docent is boos op ___ (zij - pluralis).",
    options: ["hun", "hen", "zij"],
    correctAnswer: "hen",
    explanationTr: "Çoğul 'zij/ze' (onlar) zamirinin vurgulu nesne hali 'hen' (onlara/onları) şeklindedir. ('ze' de kullanılabilir, ancak 'hun' iyelik belirtir).",
    explanationEn: "The emphasized object form for plural 'zij/ze' (they) is 'hen' (them). ('ze' is also possible, but 'hun' means 'their')."
  },
  {
    id: "q_obj_009",
    type: "fill_in",
    tags: ["pronouns_object"],
    questionNl: "Hij heeft ___ (jou) en mij gisteren in het park gezien.",
    correctAnswer: "jou",
    explanationTr: "ÖZEL KURAL: Eğer 'en' (ve) ile iki kişiyi bağlıyorsanız (seni ve beni), her zaman vurgulu formları (jou en mij) kullanmalısınız.",
    explanationEn: "SPECIAL RULE: When connecting two people with 'en' (you and me), you must always use the emphasized forms (jou en mij)."
  },
  {
    id: "q_obj_010",
    type: "multiple_choice",
    tags: ["pronouns_object"],
    questionNl: "Het is mijn jas. Geef het aan ___!",
    options: ["me", "mij", "ik"],
    correctAnswer: "mij",
    explanationTr: "Cümlenin sonunda ve bir edattan (aan) sonra özel bir vurgu yapıldığında her zaman vurgulu form 'mij' tercih edilir.",
    explanationEn: "At the end of a sentence and after a preposition (aan) where there is emphasis, the emphasized form 'mij' is always preferred."
  },
  {
    id: "q_obj_011",
    type: "fill_in",
    tags: ["pronouns_object", "articles_plurals"],
    questionNl: "Dit is mijn nieuwe computer (de-woord). Ik heb ___ gisteren gekocht.",
    correctAnswer: "hem",
    explanationTr: "De-woorden (eril/dişil kabul edilir) nesne durumunda 'hem' ile ifade edilir.",
    explanationEn: "De-words (considered masculine/feminine) are referred to with 'hem' in the object position."
  },
  {
    id: "q_obj_012",
    type: "multiple_choice",
    tags: ["pronouns_object", "articles_plurals"],
    questionNl: "Dit is een mooi boek (het-woord). Ik lees ___ elke avond.",
    options: ["hem", "het", "haar"],
    correctAnswer: "het",
    explanationTr: "Het-woorden nesne durumunda daima 'het' ile ifade edilir.",
    explanationEn: "Het-words are always referred to with 'het' in the object position."
  },
  {
    id: "q_obj_013",
    type: "fill_in",
    tags: ["pronouns_object", "articles_plurals"],
    questionNl: "Wat een leuke schoenen (pluralis)! Mag ik ___ even passen?",
    correctAnswer: "ze",
    explanationTr: "Çoğul cansız varlıklar (schoenen) nesne durumunda 'ze' ile ifade edilir.",
    explanationEn: "Plural inanimate objects (schoenen) are referred to with 'ze' in the object position."
  },
  {
    id: "q_obj_014",
    type: "multiple_choice",
    tags: ["pronouns_object", "articles_plurals"],
    questionNl: "Waar is de sleutel? Ik kan ___ nergens vinden.",
    options: ["hem", "het", "ze"],
    correctAnswer: "hem",
    explanationTr: "'Sleutel' bir de-woord'dur (de sleutel). Bu yüzden 'hem' kullanılır.",
    explanationEn: "'Sleutel' is a de-word (de sleutel). Therefore, 'hem' is used."
  },
  {
    id: "q_obj_015",
    type: "fill_in",
    tags: ["pronouns_object", "articles_plurals"],
    questionNl: "Ik heb een nieuw horloge (het-woord). Ik draag ___ altijd.",
    correctAnswer: "het",
    explanationTr: "'Horloge' bir het-woord olduğu için nesne zamiri olarak 'het' alır.",
    explanationEn: "Because 'horloge' is a het-word, it takes 'het' as its object pronoun."
  },
  {
    id: "q_dem_016",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "___ (Deze / Dit) broek is te groot voor mij.",
    options: ["Deze", "Dit"],
    correctAnswer: "Deze",
    explanationTr: "'Broek' bir de-woord'dur (de broek). Yakındaki de-woord'lar için 'Deze' (bu) kullanılır.",
    explanationEn: "'Broek' is a de-word (de broek). For nearby de-words, 'Deze' (this) is used."
  },
  {
    id: "q_dem_017",
    type: "fill_in",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "___ (Die / Dat) shirt daar is erg mooi.",
    correctAnswer: "Dat",
    explanationTr: "'Shirt' bir het-woord'dur (het shirt). Uzaktaki (daar) het-woord'lar için 'Dat' (şu/o) kullanılır.",
    explanationEn: "'Shirt' is a het-word (het shirt). For far away (daar) het-words, 'Dat' (that) is used."
  },
  {
    id: "q_dem_018",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "Ik wil graag ___ (deze / dit) schoenen kopen.",
    options: ["deze", "dit"],
    correctAnswer: "deze",
    explanationTr: "'Schoenen' çoğuldur (pluralis). Çoğul kelimeler daima de-woord olduğu için 'deze' veya 'die' kullanılır.",
    explanationEn: "'Schoenen' is plural. Because plurals are always de-words, 'deze' or 'die' is used."
  },
  {
    id: "q_dem_019",
    type: "fill_in",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "___ (Dit / Deze) boek hier is van mijn docent.",
    correctAnswer: "Dit",
    explanationTr: "'Boek' bir het-woord'dur. Yakındaki (hier) het-woord'lar için 'Dit' (bu) kullanılır.",
    explanationEn: "'Boek' is a het-word. For nearby (hier) het-words, 'Dit' (this) is used."
  },
  {
    id: "q_dem_020",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "Zie je ___ (die / dat) auto's daar?",
    options: ["die", "dat"],
    correctAnswer: "die",
    explanationTr: "'Auto's' çoğuldur. Çoğul kelimelerde 'die' (uzaktaki) veya 'deze' (yakındaki) kullanılır. 'dat' kullanılmaz.",
    explanationEn: "'Auto's' is plural. With plurals, 'die' (far) or 'deze' (near) is used. 'dat' is not used."
  },
  {
    id: "q_dem_021",
    type: "fill_in",
    tags: ["pronouns_demonstrative"],
    questionNl: "Wat vind je van de kaas? ___ (Die/Dat) vind ik lekker.",
    correctAnswer: "Die",
    explanationTr: "Bağımsız kullanım: 'Kaas' bir de-woord'dur. Kendisine atıfta bulunurken bağımsız işaret zamiri 'Die' kullanılır.",
    explanationEn: "Independent use: 'Kaas' is a de-word. When referring back to it, the independent demonstrative 'Die' is used."
  },
  {
    id: "q_dem_022",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative"],
    questionNl: "Waar is tante Lena? ___ moest helaas werken.",
    options: ["Die", "Dat"],
    correctAnswer: "Die",
    explanationTr: "Bağımsız kullanım: Kişilere atıfta bulunurken genellikle 'Die' kullanılır.",
    explanationEn: "Independent use: When referring back to persons, 'Die' is generally used."
  },
  {
    id: "q_dem_023",
    type: "fill_in",
    tags: ["pronouns_demonstrative"],
    questionNl: "We zien het Naardermeer. ___ (Dat/Die) is een prachtig natuurgebied.",
    correctAnswer: "Dat",
    explanationTr: "Bağımsız kullanım: 'Het Naardermeer' bir het-woord'dur. Atıfta bulunurken 'Dat' kullanılır.",
    explanationEn: "Independent use: 'Het Naardermeer' is a het-word. When referring back to it, 'Dat' is used."
  },
  {
    id: "q_dem_024",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative"],
    questionNl: "Je hebt toch wel koffie meegenomen? Ja natuurlijk heb ik ___ gedaan.",
    options: ["dat", "die", "dit"],
    correctAnswer: "dat",
    explanationTr: "Bağımsız kullanım: Bütün bir cümleye veya eyleme ('kahve getirme' eylemi) atıfta bulunurken 'dat' kullanılır.",
    explanationEn: "Independent use: When referring back to a whole sentence or action (the act of bringing coffee), 'dat' is used."
  },
  {
    id: "q_dem_025",
    type: "fill_in",
    tags: ["pronouns_demonstrative"],
    questionNl: "Waar zijn Tom en Marit? ___ (Die/Dat) zijn naar de beurs.",
    correctAnswer: "Die",
    explanationTr: "Kişilere veya çoğul varlıklara bağımsız atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to people or plural entities, 'Die' is used."
  },
  {
    id: "q_dem_026",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative"],
    questionNl: "___ (Dit / Deze) is Katharina, mijn zus.",
    options: ["Dit", "Deze"],
    correctAnswer: "Dit",
    explanationTr: "SUNUM YAPMAK (Presenteren): Birini veya bir şeyi tanıtırken / sunarken daima 'Dit is / Dat is' kalıbı kullanılır.",
    explanationEn: "PRESENTING: When introducing or presenting someone/something, the structure 'Dit is / Dat is' is always used."
  },
  {
    id: "q_dem_027",
    type: "fill_in",
    tags: ["pronouns_demonstrative", "articles_plurals"],
    questionNl: "___ (Dit / Deze) zijn leuke dvd's.",
    correctAnswer: "Dit",
    explanationTr: "ALTIN KURAL: Sunum yaparken nesneler ÇOĞUL olsa bile 'Dit zijn / Dat zijn' kalıbı kullanılır ('Deze zijn' denmez).",
    explanationEn: "GOLDEN RULE: When presenting, even if the objects are PLURAL, the structure 'Dit zijn / Dat zijn' is used (not 'Deze zijn')."
  },
  {
    id: "q_dem_028",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative"],
    questionNl: "___ is het boek voor de cursus.",
    options: ["Dat", "Die"],
    correctAnswer: "Dat",
    explanationTr: "Sunum yapmak için 'Dat is' kullanılır.",
    explanationEn: "To present something, 'Dat is' is used."
  },
  {
    id: "q_dem_029",
    type: "fill_in",
    tags: ["pronouns_demonstrative"],
    questionNl: "Kijk, ___ (dat / die) zijn mijn docenten Karin en Paul.",
    correctAnswer: "dat",
    explanationTr: "İnsanları tanıtıyor/sunuyorsunuz (Çoğul olsalar bile). Bu yüzden 'Dat zijn' kullanılır.",
    explanationEn: "You are presenting/introducing people (even though they are plural). Thus, 'Dat zijn' is used."
  },
  {
    id: "q_dem_030",
    type: "multiple_choice",
    tags: ["pronouns_demonstrative"],
    questionNl: "Welk pronomen gebruik je om mensen of dingen te presenteren? (Bijv: ___ is Ali.)",
    options: ["Dit of Dat", "Deze of Die", "Hij of Zij"],
    correctAnswer: "Dit of Dat",
    explanationTr: "Sunum/tanıtım (presenteren) cümleleri her zaman 'Dit is/zijn' veya 'Dat is/zijn' ile başlar.",
    explanationEn: "Sentences for presenting/introducing always start with 'Dit is/zijn' or 'Dat is/zijn'."
  },
  {
    id: "q_neg_031",
    type: "fill_in",
    tags: ["negation"],
    questionNl: "Ik heb ___ (niet / geen) auto.",
    correctAnswer: "geen",
    explanationTr: "Belirsiz isimleri (önünde artikel olmayan veya 'een' olan isimleri) olumsuz yapmak için 'geen' kullanılır.",
    explanationEn: "To negate indefinite nouns (nouns without an article or with 'een'), 'geen' is used."
  },
  {
    id: "q_neg_032",
    type: "multiple_choice",
    tags: ["negation"],
    questionNl: "De kamer is ___ zonnig.",
    options: ["geen", "niet"],
    correctAnswer: "niet",
    explanationTr: "Sıfatları (zonnig) olumsuz yapmak için 'niet' kullanılır.",
    explanationEn: "To negate adjectives (zonnig), 'niet' is used."
  },
  {
    id: "q_neg_033",
    type: "fill_in",
    tags: ["negation"],
    questionNl: "Wij drinken ___ (niet / geen) koffie in de avond.",
    correctAnswer: "geen",
    explanationTr: "'Koffie' belirsiz bir isimdir (geen artikel). Bu yüzden 'geen' ile olumsuz yapılır.",
    explanationEn: "'Koffie' is an indefinite noun (no article). Therefore, it is negated with 'geen'."
  },
  {
    id: "q_neg_034",
    type: "multiple_choice",
    tags: ["negation", "adjectives"],
    questionNl: "Het is ___ grote kamer.",
    options: ["geen", "niet"],
    correctAnswer: "geen",
    explanationTr: "Burada 'kamer' belirsiz bir isimdir, sıfat (grote) almış olması kuralı değiştirmez. 'geen grote kamer' denir.",
    explanationEn: "Here 'kamer' is an indefinite noun, the fact that it has an adjective (grote) doesn't change the rule. We say 'geen grote kamer'."
  },
  {
    id: "q_neg_035",
    type: "fill_in",
    tags: ["negation"],
    questionNl: "Hij woont ___ (niet / geen) in Amsterdam.",
    correctAnswer: "niet",
    explanationTr: "Edatlı (in) yapıları ve fiilleri (wonen) olumsuz yapmak için 'niet' kullanılır.",
    explanationEn: "To negate prepositional phrases (in) and verbs (wonen), 'niet' is used."
  },
  {
    id: "q_neg_036",
    type: "multiple_choice",
    tags: ["negation", "pronouns_demonstrative"],
    questionNl: "Ik ken die man ___.",
    options: ["geen", "niet"],
    correctAnswer: "niet",
    explanationTr: "İsim 'die' işaret zamiri ile belirli (definiet) hale gelmiştir. Belirli isimler 'niet' ile olumsuz yapılır.",
    explanationEn: "The noun has become definite with the demonstrative 'die'. Definite nouns are negated with 'niet'."
  },
  {
    id: "q_neg_037",
    type: "fill_in",
    tags: ["negation"],
    questionNl: "Zij hebben ___ (niet / geen) kinderen.",
    correctAnswer: "geen",
    explanationTr: "'Kinderen' belirsiz çoğul bir isimdir. Bu yüzden 'geen' kullanılır.",
    explanationEn: "'Kinderen' is an indefinite plural noun. Therefore, 'geen' is used."
  },
  {
    id: "q_neg_038",
    type: "multiple_choice",
    tags: ["negation", "pronouns_possessive"],
    questionNl: "Dat is ___ mijn boek!",
    options: ["geen", "niet"],
    correctAnswer: "niet",
    explanationTr: "İyelik zamirleri (mijn) ismi belirli yapar. Belirli isimler 'niet' ile olumsuz yapılır.",
    explanationEn: "Possessive pronouns (mijn) make the noun definite. Definite nouns are negated with 'niet'."
  },
  {
    id: "q_neg_039",
    type: "fill_in",
    tags: ["negation"],
    questionNl: "Ik wil ___ (niet / geen) thee, ik wil water.",
    correctAnswer: "geen",
    explanationTr: "Belirsiz isim ('thee') olumsuzlanıyor. Bu yüzden 'geen' kullanılır.",
    explanationEn: "An indefinite noun ('thee') is being negated. Therefore, 'geen' is used."
  },
  {
    id: "q_neg_040",
    type: "multiple_choice",
    tags: ["negation", "word_order"],
    questionNl: "Ik fiets vandaag ___ naar school.",
    options: ["geen", "niet"],
    correctAnswer: "niet",
    explanationTr: "Fiil/eylem (fietsen) ve yön (naar school) olumsuzlanmaktadır, bu yüzden 'niet' kullanılır.",
    explanationEn: "The action (fietsen) and direction (naar school) are being negated, so 'niet' is used."
  },
  {
    id: "q_neg_041",
    type: "fill_in",
    tags: ["negation", "modal_verbs"],
    questionNl: "Vraag: Moeten we wachten?\nAntwoord: Nee, jullie ___ (hoeven) niet te wachten.",
    correctAnswer: "hoeven",
    explanationTr: "'Moeten' (zorunda olmak) fiiline 'gerek yok' anlamında olumsuz cevap verirken 'hoeven niet te' kalıbı kullanılır.",
    explanationEn: "When answering a 'moeten' (must) question negatively to mean 'don't have to', the 'hoeven niet te' structure is used."
  },
  {
    id: "q_neg_042",
    type: "multiple_choice",
    tags: ["negation", "modal_verbs"],
    questionNl: "Moet ik u bellen?\nNee, je ___ me niet te bellen.",
    options: ["moet", "hoeft", "mag"],
    correctAnswer: "hoeft",
    explanationTr: "'Beni aramana gerek yok' anlamındadır. 'Hoeven' fiili daima 'te + infinitief' ile çalışır.",
    explanationEn: "It means 'you don't have to call me'. The verb 'Hoeven' always works with 'te + infinitive'."
  },
  {
    id: "q_neg_043",
    type: "fill_in",
    tags: ["negation", "modal_verbs"],
    questionNl: "U ___ mij niet bellen! Het is verboden om privénummers te bellen. Wij bellen u wel.",
    correctAnswer: "moet",
    explanationTr: "DİKKAT: Eğer bir eylem YASAK ise veya kesinlikle yapılmamalıysa 'moet niet' kullanılır ('hoeven niet' kullanılmaz).",
    explanationEn: "ATTENTION: If an action is FORBIDDEN or strongly advised against, 'moet niet' is used (not 'hoeven niet')."
  },
  {
    id: "q_neg_044",
    type: "multiple_choice",
    tags: ["negation", "modal_verbs"],
    questionNl: "Je ___ dat eten niet weggooien, ik kan het nog opeten.",
    options: ["hoeft", "moet"],
    correctAnswer: "hoeft",
    explanationTr: "Burada 'atmana gerek yok' anlamı vardır ('hoeft niet te weggooien' yerine bazen konuşma dilinde te düşebilir, ama 'hoeft' mantığı aynıdır). Asıl kullanım: 'Je hoeft dat niet weg te gooien'.",
    explanationEn: "It means 'you don't have to throw it away'. (Standard structure: Je hoeft dat niet weg te gooien)."
  },
  {
    id: "q_neg_045",
    type: "fill_in",
    tags: ["negation", "modal_verbs"],
    questionNl: "___ ik betalen voor het water? Nee, dat is gratis.",
    correctAnswer: "Moet",
    explanationTr: "Zorunluluk soruluyor: 'Su için ödeme yapmalı mıyım?' -> 'Moet'. Cevapta ise 'dat hoeft niet' (gerek yok) denebilir.",
    explanationEn: "Asking about an obligation: 'Do I have to pay for the water?' -> 'Moet'. The answer could be 'dat hoeft niet' (you don't have to)."
  },
  {
    id: "q_read_neg_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "pronouns_object"],
    questionNl: "Lees de tekst: 'Dit is mijn nieuwe auto. Hij is erg snel. Ik heb hem gisteren gekocht. De auto was niet goedkoop. Ik heb geen spijt van mijn aankoop.'\n\nWaarom gebruikt de schrijver 'hem' in 'Ik heb hem gisteren gekocht'?",
    options: ["Omdat 'auto' een de-woord is.", "Omdat 'auto' een het-woord is.", "Omdat het meervoud is."],
    correctAnswer: "Omdat 'auto' een de-woord is.",
    explanationTr: "'Auto' bir de-woord'dur. De-woorden nesne durumundayken 'hem' ile işaret edilir.",
    explanationEn: "'Auto' is a de-word. De-words are referred to with 'hem' in the object position."
  },
  {
    id: "q_read_neg_047",
    type: "fill_in",
    tags: ["reading_comprehension", "negation"],
    questionNl: "Lees de tekst: 'Dit is mijn nieuwe auto. Hij is erg snel. Ik heb hem gisteren gekocht. De auto was niet goedkoop. Ik heb geen spijt van mijn aankoop.'\n\nVul de ontbrekende negatie in: 'De auto was ___ (niet/geen) goedkoop.'",
    correctAnswer: "niet",
    explanationTr: "'Goedkoop' (ucuz) bir sıfattır. Sıfatlar 'niet' ile olumsuz yapılır.",
    explanationEn: "'Goedkoop' (cheap) is an adjective. Adjectives are negated with 'niet'."
  },
  {
    id: "q_read_neg_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "pronouns_demonstrative"],
    questionNl: "Lees de tekst: 'Dit is mijn nieuwe auto. Hij is erg snel. Ik heb hem gisteren gekocht. De auto was niet goedkoop. Ik heb geen spijt van mijn aankoop.'\n\nWaarom zegt de schrijver 'Dit is' in de eerste zin, ook al is 'auto' een de-woord?",
    options: ["Om iets of iemand te presenteren gebruiken we altijd 'dit' of 'dat'.", "Omdat 'auto' een uitzondering is.", "Omdat het woord 'nieuwe' er staat."],
    correctAnswer: "Om iets of iemand te presenteren gebruiken we altijd 'dit' of 'dat'.",
    explanationTr: "Sunum (presenteren) yaparken nesnenin de/het veya çoğul olmasına bakılmaksızın daima 'Dit is/zijn' veya 'Dat is/zijn' kalıbı kullanılır.",
    explanationEn: "When presenting/introducing, the structure 'Dit is/zijn' or 'Dat is/zijn' is always used, regardless of whether the noun is de/het or plural."
  },
  {
    id: "q_read_neg_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "pronouns_demonstrative"],
    questionNl: "Lees de tekst: 'Waar zijn Tom en Emma? Die zijn naar de bioscoop gegaan. Ze wilden een film zien. Moeten we ook gaan? Nee, we hoeven vandaag niet te gaan.'\n\nNaar wie of wat verwijst het woord 'Die' in de tweede zin?",
    options: ["Tom en Emma", "De bioscoop", "De film"],
    correctAnswer: "Tom en Emma",
    explanationTr: "Bağımsız işaret zamiri 'Die' burada kendinden önceki cümlede sorulan kişileri (Tom ve Emma) işaret etmektedir.",
    explanationEn: "The independent demonstrative pronoun 'Die' here refers back to the people asked about in the previous sentence (Tom and Emma)."
  },
  {
    id: "q_read_neg_050",
    type: "fill_in",
    tags: ["reading_comprehension", "negation", "modal_verbs"],
    questionNl: "Lees de tekst: 'Waar zijn Tom en Emma? Die zijn naar de bioscoop gegaan. Ze wilden een film zien. Moeten we ook gaan? Nee, we hoeven vandaag niet te gaan.'\n\nVul de negatie van 'moeten' in: 'Nee, we ___ (hoeven) vandaag niet te gaan.'",
    correctAnswer: "hoeven",
    explanationTr: "'Moeten' (zorunda mıyız?) sorusuna verilen 'hayır gerek yok' cevabı için 'hoeven' kullanılır.",
    explanationEn: "For the 'no, we don't have to' answer to a 'moeten' (must we?) question, 'hoeven' is used."
  },
  
  {
    id: "q_past_001",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "soft_ketchup"],
    questionNl: "Ik heb gisteren hard ___ (werken).",
    correctAnswer: "gewerkt",
    explanationTr: "Perfectum (Geçmiş Zaman). 'werken' fiilinin kökü 'werk'. Son harfi 'k' (soft ketchup içinde var), bu yüzden '+t' alır: gewerkt.",
    explanationEn: "Perfectum (Present Perfect). The stem of 'werken' is 'werk'. The last letter 'k' is in 'soft ketchup', so it takes '+t': gewerkt."
  },
  {
    id: "q_past_002",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Vroeger ___ (werken) hij in een restaurant.",
    options: ["werkde", "werkte", "gewerkt"],
    correctAnswer: "werkte",
    explanationTr: "Imperfectum (Hikaye Geçmiş Zaman). 'werk' kökünün sonu 'k' ile bittiği için '+te' eklenir: werkte.",
    explanationEn: "Imperfectum (Simple Past). The stem 'werk' ends in 'k', so '+te' is added: werkte."
  },
  {
    id: "q_past_003",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "soft_ketchup"],
    questionNl: "De kinderen hebben in de tuin ___ (spelen).",
    correctAnswer: "gespeeld",
    explanationTr: "Perfectum. 'spelen' kökü 'speel'. Son harfi 'l' (soft ketchup içinde YOK), bu yüzden '+d' alır: gespeeld.",
    explanationEn: "Perfectum. Stem of 'spelen' is 'speel'. The last letter 'l' is NOT in 'soft ketchup', so it takes '+d': gespeeld."
  },
  {
    id: "q_past_004",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Zij ___ (spelen) vroeger vaak tennis.",
    options: ["speelde", "speelte", "gespeeld"],
    correctAnswer: "speelde",
    explanationTr: "Imperfectum. 'speel' kökü 'soft ketchup' kuralına uymaz, bu yüzden '+de' eklenir: speelde.",
    explanationEn: "Imperfectum. The stem 'speel' does not fall under the 'soft ketchup' rule, so '+de' is added: speelde."
  },
  {
    id: "q_past_005",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Toen ik kind was, ___ (wonen) ik in Utrecht.",
    correctAnswer: "woonde",
    explanationTr: "Imperfectum. 'wonen' kökü 'woon'. 'n' harfi 'soft ketchup' içinde yoktur, bu yüzden '+de' eklenir.",
    explanationEn: "Imperfectum. Stem of 'wonen' is 'woon'. 'n' is not in 'soft ketchup', so '+de' is added."
  },
  {
    id: "q_past_006",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "soft_ketchup"],
    questionNl: "Heb je naar de leraar ___ (luisteren)?",
    correctAnswer: "geluisterd",
    explanationTr: "Perfectum. 'luisteren' kökü 'luister'. 'r' harfi 'soft ketchup' içinde olmadığı için '+d' alır.",
    explanationEn: "Perfectum. Stem of 'luisteren' is 'luister'. 'r' is not in 'soft ketchup', so it takes '+d'."
  },
  {
    id: "q_past_007",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "soft_ketchup"],
    questionNl: "Wij hebben gisteren een uur ___ (fietsen).",
    options: ["gefietst", "gefietste", "gefietstd"],
    correctAnswer: "gefietst",
    explanationTr: "Perfectum. 'fietsen' kökü 'fiets'. Son harf 's' (soft ketchup içinde VAR), bu yüzden '+t' alır.",
    explanationEn: "Perfectum. Stem of 'fietsen' is 'fiets'. 's' is in 'soft ketchup', so it takes '+t'."
  },
  {
    id: "q_past_008",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "soft_ketchup"],
    questionNl: "Wie heeft deze lekkere soep ___ (koken)?",
    correctAnswer: "gekookt",
    explanationTr: "Perfectum. 'koken' kökü 'kook'. Son harf 'k' (soft ketchup içinde var), bu yüzden '+t' alır.",
    explanationEn: "Perfectum. Stem of 'koken' is 'kook'. 'k' is in 'soft ketchup', so it takes '+t'."
  },
  {
    id: "q_past_009",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Gisteren ___ (praten) ik met mijn buurman.",
    options: ["praat", "praatte", "praatde"],
    correctAnswer: "praatte",
    explanationTr: "Imperfectum. 'praten' kökü 'praat'. Kök zaten 't' ile bitiyor ve 't' harfi soft ketchup kuralında '+te' almasını gerektiriyor. İki 't' yan yana gelir: praatte.",
    explanationEn: "Imperfectum. Stem is 'praat'. Ends in 't' (takes '+te'). Two t's are written together: praatte."
  },
  {
    id: "q_past_010",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Wij ___ (leren) veel nieuwe woorden in de les.",
    correctAnswer: "leerden",
    explanationTr: "Imperfectum ÇOĞUL. 'leren' kökü 'leer'. 'r' harfi soft ketchup içinde yoktur (+de). Çoğul olduğu için '+den' alır: leerden.",
    explanationEn: "Imperfectum PLURAL. Stem is 'leer'. 'r' is not in soft ketchup (+de). Since it's plural (wij), it gets '+den': leerden."
  },
  {
    id: "q_past_011",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Ik ___ gisteren naar huis gefietst.",
    options: ["heb", "ben"],
    correctAnswer: "ben",
    explanationTr: "Perfectum (zijn vs hebben). Fiil bir YÖN (richting) bildirdiğinde 'zijn' (ben) kullanılır. (naar huis = eve doğru).",
    explanationEn: "Perfectum. When the verb indicates a DIRECTION (richting), 'zijn' (ben) is used. (naar huis = towards home)."
  },
  {
    id: "q_past_012",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "We ___ gisteren een uur in het park gefietst.",
    options: ["hebben", "zijn"],
    correctAnswer: "hebben",
    explanationTr: "Fiil bir yön belirTmiyorsa (sadece eylemin kendisi vurgulanıyorsa), hareket fiili olsa bile 'hebben' kullanılır.",
    explanationEn: "If the verb does NOT indicate a direction (just the activity itself), 'hebben' is used even for motion verbs."
  },
  {
    id: "q_past_013",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "De les is om 9.00 uur ___ (beginnen).",
    correctAnswer: "begonnen",
    explanationTr: "Perfectum. 'beginnen' (başlamak) bir durum değişikliği (verandering van situatie) olduğu için 'zijn' (is) ile kullanılır. Düzensizdir: begonnen.",
    explanationEn: "Perfectum. 'beginnen' (to start) indicates a change of situation, so it uses 'zijn' (is). It is irregular: begonnen."
  },
  {
    id: "q_past_014",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Zij is met haar cursus ___ (stoppen).",
    correctAnswer: "gestopt",
    explanationTr: "Perfectum. 'stoppen' (durmak/bırakmak) durum değişikliği olduğu için 'zijn' ile kullanılır.",
    explanationEn: "Perfectum. 'stoppen' (to stop) indicates a change of state, so it is used with 'zijn'."
  },
  {
    id: "q_past_015",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Hij ___ tot 22.00 uur op kantoor gebleven.",
    options: ["heeft", "is"],
    correctAnswer: "is",
    explanationTr: "KURAL: 'zijn' ve 'blijven' fiilleri perfectumda her zaman 'zijn' yardımcı fiili ile kullanılır.",
    explanationEn: "RULE: The verbs 'zijn' (to be) and 'blijven' (to stay) ALWAYS use the auxiliary 'zijn' in the perfectum."
  },
  {
    id: "q_past_016",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Wij ___ gisteren een lekkere pizza gegeten.",
    options: ["hebben", "zijn"],
    correctAnswer: "hebben",
    explanationTr: "Nesne alan normal eylemler (eten, drinken, maken vb.) perfectumda 'hebben' ile kullanılır.",
    explanationEn: "Normal action verbs that take objects (eten, drinken, maken, etc.) use 'hebben' in the perfectum."
  },
  {
    id: "q_past_017",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Mijn zoon is gisteren 10 jaar ___ (worden).",
    correctAnswer: "geworden",
    explanationTr: "Perfectum. 'worden' (olmak) bir durum değişikliğidir ve 'zijn' ile kullanılır. 3. hali 'geworden'dir.",
    explanationEn: "Perfectum. 'worden' (to become) is a change of state and uses 'zijn'. Its past participle is 'geworden'."
  },
  {
    id: "q_past_018",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Ik heb mijn moeder gisteren ___ (bellen).",
    correctAnswer: "gebeld",
    explanationTr: "'bellen' kökü 'bel' -> l harfi soft ketchup'ta yok -> +d (gebeld).",
    explanationEn: "Stem of 'bellen' is 'bel' -> l is not in soft ketchup -> +d (gebeld)."
  },
  {
    id: "q_past_019",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Wat ___ er gisteren gebeurd?",
    options: ["heeft", "is"],
    correctAnswer: "is",
    explanationTr: "'gebeuren' (olmak/meydana gelmek) fiili 'zijn' ile kullanılır.",
    explanationEn: "The verb 'gebeuren' (to happen) is used with 'zijn'."
  },
  {
    id: "q_past_020",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Ik ben nog nooit in Parijs ___ (zijn).",
    options: ["geweest", "gezijn", "geworden"],
    correctAnswer: "geweest",
    explanationTr: "'zijn' (olmak) fiilinin 3. hali (perfectum) 'geweest'tir ve kendisi yine 'zijn' ile kullanılır.",
    explanationEn: "The past participle of 'zijn' (to be) is 'geweest', and it is used with the auxiliary 'zijn'."
  },
  {
    id: "q_past_021",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Ik heb de rekening gisteren ___ (betalen).",
    correctAnswer: "betaald",
    explanationTr: "ALTIN KURAL: Fiil be-, ge-, her-, ver-, ont- eklerinden biriyle başlıyorsa, perfectumda başına 'ge-' ALMAZ. (betalen -> betaald).",
    explanationEn: "GOLDEN RULE: If a verb starts with be-, ge-, her-, ver-, ont-, it does NOT get a 'ge-' prefix in the perfectum. (betalen -> betaald)."
  },
  {
    id: "q_past_022",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Hij heeft het boek in het Engels ___ (vertalen).",
    options: ["gevertaald", "vertaald", "vertaalde"],
    correctAnswer: "vertaald",
    explanationTr: "'ver-' ile başlayan fiiller 'ge-' takısı almaz. (vertalen -> vertaald).",
    explanationEn: "Verbs starting with 'ver-' do not take the 'ge-' prefix. (vertalen -> vertaald)."
  },
  {
    id: "q_past_023",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Heb je de grammatica goed ___ (herhalen)?",
    correctAnswer: "herhaald",
    explanationTr: "'her-' ile başlayan fiiller 'ge-' almaz. Kök 'herhaal' + d = herhaald.",
    explanationEn: "Verbs starting with 'her-' don't get 'ge-'. Stem 'herhaal' + d = herhaald."
  },
  {
    id: "q_past_024",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Zij hebben een oude hut ___ (ontdekken).",
    options: ["geontdekt", "ontdekkt", "ontdekt"],
    correctAnswer: "ontdekt",
    explanationTr: "'ont-' ile başlayan fiiller 'ge-' almaz. Kök 'ontdek' + t = ontdekt.",
    explanationEn: "Verbs starting with 'ont-' don't get 'ge-'. Stem 'ontdek' + t = ontdekt."
  },
  {
    id: "q_past_025",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Het ongeluk is gisteren ___ (gebeuren).",
    correctAnswer: "gebeurd",
    explanationTr: "'ge-' ile başlayan fiiller fazladan bir 'ge-' daha almaz. (gebeuren -> gebeurd).",
    explanationEn: "Verbs already starting with 'ge-' do not get an extra 'ge-'. (gebeuren -> gebeurd)."
  },
  {
    id: "q_past_026",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Heb je de leraar goed ___ (begrijpen)?",
    options: ["gebegrepen", "begrepen", "begrijpt"],
    correctAnswer: "begrepen",
    explanationTr: "'begrijpen' düzensizdir (begreep, begrepen). 'be-' ile başladığı için 'ge-' almaz.",
    explanationEn: "'begrijpen' is irregular (begreep, begrepen). Since it starts with 'be-', it gets no 'ge-'."
  },
  {
    id: "q_past_027",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Hij heeft zijn auto gisteren ___ (verkopen).",
    correctAnswer: "verkocht",
    explanationTr: "'verkopen' düzensizdir (kocht -> verkocht). 'ver-' ile başladığı için 'ge-' almaz.",
    explanationEn: "'verkopen' is irregular (kocht -> verkocht). Starts with 'ver-', so no 'ge-'."
  },
  {
    id: "q_past_028",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "De trein is om 10 uur ___ (vertrekken).",
    options: ["gevertrokken", "vertrokken", "vertrekt"],
    correctAnswer: "vertrokken",
    explanationTr: "'vertrekken' düzensizdir. 'ver-' ile başlar, 'ge-' almaz.",
    explanationEn: "'vertrekken' is irregular. Starts with 'ver-', gets no 'ge-'."
  },
  {
    id: "q_past_029",
    type: "fill_in",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Ik heb mijn vriend in de stad ___ (ontmoeten).",
    correctAnswer: "ontmoet",
    explanationTr: "'ontmoeten' (buluşmak) fiili 'ont-' ile başlar, bu yüzden 'ge-' almaz. Kökü 'ontmoet' t ile bittiği için aynen kalır.",
    explanationEn: "'ontmoeten' starts with 'ont-', so no 'ge-'. Stem ends in 't', so it stays 'ontmoet'."
  },
  {
    id: "q_past_030",
    type: "multiple_choice",
    tags: ["past_tenses", "perfectum", "prefixes"],
    questionNl: "Oeps! Ik ben mijn sleutels ___ (vergeten).",
    options: ["gevergeten", "vergeten", "vergeet"],
    correctAnswer: "vergeten",
    explanationTr: "'vergeten' düzensizdir ve 3. hali yine 'vergeten'dır. 'ver-' ile başladığı için 'ge-' almaz.",
    explanationEn: "'vergeten' is irregular and its past participle is also 'vergeten'. Starts with 'ver-', gets no 'ge-'."
  },
  {
    id: "q_past_031",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "irregular"],
    questionNl: "Gisteren ___ (zijn) ik heel erg ziek.",
    correctAnswer: "was",
    explanationTr: "DÜZENSİZ (Imperfectum): 'zijn' fiilinin 'ik/jij/hij' için hikaye geçmiş zaman hali 'was'tır.",
    explanationEn: "IRREGULAR (Imperfectum): The simple past of 'zijn' for 'ik/jij/hij' is 'was'."
  },
  {
    id: "q_past_032",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "irregular"],
    questionNl: "Wij ___ (hebben) vroeger een kleine hond.",
    correctAnswer: "hadden",
    explanationTr: "DÜZENSİZ (Imperfectum): 'hebben' fiilinin çoğul (wij/jullie/zij) geçmiş zaman hali 'hadden'dır.",
    explanationEn: "IRREGULAR (Imperfectum): The plural simple past of 'hebben' is 'hadden'."
  },
  {
    id: "q_past_033",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "modal_verbs"],
    questionNl: "Hij ___ (willen) gisteren naar de film gaan.",
    options: ["wilde", "wilte", "woude"],
    correctAnswer: "wilde",
    explanationTr: "Modal fiil (Imperfectum): 'willen' fiilinin geçmiş zamanı 'wilde' veya konuşma dilinde 'wou'dur.",
    explanationEn: "Modal verb (Imperfectum): The past of 'willen' is 'wilde' (or 'wou' informally)."
  },
  {
    id: "q_past_034",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "modal_verbs"],
    questionNl: "Jullie ___ (kunnen) de oefening niet begrijpen.",
    correctAnswer: "konden",
    explanationTr: "Modal fiil (Imperfectum): 'kunnen' çoğul için 'konden' olur.",
    explanationEn: "Modal verb (Imperfectum): 'kunnen' becomes 'konden' for plural."
  },
  {
    id: "q_past_035",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "modal_verbs"],
    questionNl: "Ik ___ (moeten) vandaag om 6 uur opstaan.",
    options: ["moeste", "moest", "moesten"],
    correctAnswer: "moest",
    explanationTr: "Modal fiil (Imperfectum): 'moeten' tekil için 'moest' olur.",
    explanationEn: "Modal verb (Imperfectum): 'moeten' becomes 'moest' for singular."
  },
  {
    id: "q_past_036",
    type: "multiple_choice",
    tags: ["past_tenses", "usage"],
    questionNl: "Welke tijd (tense) gebruik je voor BESCRIJVINGEN (tasvirler / background info) in het verleden?",
    options: ["Perfectum", "Imperfectum", "Futurum"],
    correctAnswer: "Imperfectum",
    explanationTr: "Geçmişte olan bir olayın arka planını tasvir ederken veya hikaye anlatırken (Beschrijvingen) genellikle Imperfectum kullanılır.",
    explanationEn: "When describing the background of a past event or storytelling (Beschrijvingen), the Imperfectum is generally used."
  },
  {
    id: "q_past_037",
    type: "multiple_choice",
    tags: ["past_tenses", "usage"],
    questionNl: "Welke tijd gebruik je voor AFGESLOTEN ZAKEN (tamamlanmış tekil olaylar) in het verleden?",
    options: ["Perfectum", "Imperfectum", "Futurum"],
    correctAnswer: "Perfectum",
    explanationTr: "Geçmişte anlık olarak olup bitmiş, tamamlanmış olaylar (Afgesloten zaken) için Perfectum (hebben/zijn + 3. hal) kullanılır.",
    explanationEn: "For single, completed actions in the past (Afgesloten zaken), the Perfectum is used."
  },
  {
    id: "q_past_038",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "irregular"],
    questionNl: "Ik ___ (zoeken) gisteren mijn sleutels overal.",
    correctAnswer: "zocht",
    explanationTr: "DÜZENSİZ: 'zoeken' (aramak) fiilinin tekil imperfectum hali 'zocht' olur.",
    explanationEn: "IRREGULAR: The singular imperfectum of 'zoeken' (to search) is 'zocht'."
  },
  {
    id: "q_past_039",
    type: "fill_in",
    tags: ["past_tenses", "imperfectum", "irregular"],
    questionNl: "Zij (zij-singularis) ___ (kopen) een nieuw huis.",
    correctAnswer: "kocht",
    explanationTr: "DÜZENSİZ: 'kopen' (satın almak) fiilinin tekil imperfectum hali 'kocht' olur.",
    explanationEn: "IRREGULAR: The singular imperfectum of 'kopen' (to buy) is 'kocht'."
  },
  {
    id: "q_past_040",
    type: "multiple_choice",
    tags: ["past_tenses", "imperfectum", "irregular"],
    questionNl: "Hij ___ (vragen) mij naar de weg.",
    options: ["vraagde", "vroeg", "gevraagd"],
    correctAnswer: "vroeg",
    explanationTr: "DÜZENSİZ: 'vragen' (sormak) fiilinin imperfectum hali 'vroeg' olur.",
    explanationEn: "IRREGULAR: The imperfectum of 'vragen' (to ask) is 'vroeg'."
  },
  {
    id: "q_read_past_041",
    type: "fill_in",
    tags: ["reading_comprehension", "past_tenses", "perfectum"],
    questionNl: "Lees de tekst: 'Gisteren ___ (gaan) ik naar Amsterdam. Het weer was erg mooi. Ik heb een vriend ontmoet. We dronken koffie en we praatten over vroeger.'\n\nVul de correcte perfectumvorm in: 'Gisteren ben ik naar Amsterdam ___ (gaan).'",
    correctAnswer: "gegaan",
    explanationTr: "Metnin ilk cümlesinde yönelim (Amsterdam'a) olduğu için 'ben gegaan' (gittim) kalıbı kullanılıyor.",
    explanationEn: "The first sentence indicates direction (to Amsterdam), so 'ben gegaan' (went) is used."
  },
  {
    id: "q_read_past_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "past_tenses", "usage"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom wordt 'was' gebruikt in 'Het weer was erg mooi' en niet 'is geweest'?",
    options: ["Omdat het een beschrijving (tasvir) is van het verleden.", "Omdat het een afgesloten actie is.", "Omdat 'zijn' onregelmatig is."],
    correctAnswer: "Omdat het een beschrijving (tasvir) is van het verleden.",
    explanationTr: "'Hava güzeldi' cümlesi geçmişteki bir durumu/ortamı tasvir ettiği (beschrijving) için Imperfectum (was) kullanılır.",
    explanationEn: "'The weather was nice' describes a past state/background (beschrijving), so Imperfectum (was) is used."
  },
  {
    id: "q_read_past_043",
    type: "fill_in",
    tags: ["reading_comprehension", "past_tenses", "perfectum"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Ik heb een vriend ___ (ontmoeten).'",
    correctAnswer: "ontmoet",
    explanationTr: "'ont-' ile başladığı için 'ge-' almaz. Kökü 't' ile bittiği için 'ontmoet' olarak kalır.",
    explanationEn: "Starts with 'ont-', so no 'ge-'. Stem ends in 't', so it remains 'ontmoet'."
  },
  {
    id: "q_read_past_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "past_tenses", "imperfectum"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat is het infinitief van het woord 'dronken' in de tekst?",
    options: ["drinken", "dronken", "drink"],
    correctAnswer: "drinken",
    explanationTr: "Diyalogdaki 'We dronken' (İçtik), düzensiz 'drinken' fiilinin çoğul hikaye geçmiş zaman halidir.",
    explanationEn: "'We dronken' (We drank) is the plural simple past of the irregular verb 'drinken'."
  },
  {
    id: "q_read_past_045",
    type: "fill_in",
    tags: ["reading_comprehension", "past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de imperfectumvorm in: 'We ___ (praten) over vroeger.'",
    correctAnswer: "praatten",
    explanationTr: "'praten' kökü 'praat'. Imperfectum çoğul (we) olduğu için '+ten' eklenir: praatten.",
    explanationEn: "Stem of 'praten' is 'praat'. Plural imperfectum (we) adds '+ten': praatten."
  },
  {
    id: "q_read_past_046",
    type: "fill_in",
    tags: ["reading_comprehension", "past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Lees de tekst: 'Toen ik klein was, ___ (wonen) ik in een dorp. Ik speelde vaak buiten. Op een dag zijn we naar het bos gefietst. We hebben een oude hut ontdekt. We moesten voor het donker thuis zijn.'\n\nVul in: 'Toen ik klein was, ___ (wonen) ik in een dorp.'",
    correctAnswer: "woonde",
    explanationTr: "Hikaye anlatımı (Imperfectum). 'wonen' kökü 'woon' + de = woonde.",
    explanationEn: "Storytelling (Imperfectum). Stem 'woon' + de = woonde."
  },
  {
    id: "q_read_past_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "past_tenses", "imperfectum", "soft_ketchup"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom krijgt 'speelde' in de tekst een -de en niet -te?",
    options: ["Omdat de letter 'l' niet in soft ketchup zit.", "Omdat het een onregelmatig werkwoord is.", "Omdat het meervoud is."],
    correctAnswer: "Omdat de letter 'l' niet in soft ketchup zit.",
    explanationTr: "'speel' kökünün son harfi olan 'l', soft ketchup ünsüzlerinden biri olmadığı için '+de' alır.",
    explanationEn: "The last letter of the stem 'speel' is 'l', which is not in soft ketchup, so it takes '+de'."
  },
  {
    id: "q_read_past_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "past_tenses", "perfectum", "zijn_hebben"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom zegt men 'zijn we gefietst' en niet 'hebben we gefietst'?",
    options: ["Omdat er richting is (naar het bos).", "Omdat 'fietsen' altijd met 'zijn' is.", "Omdat het meervoud is."],
    correctAnswer: "Omdat er richting is (naar het bos).",
    explanationTr: "Cümlede 'naar het bos' (ormana doğru) diyerek YÖN belirtildiği için 'zijn' kullanılmıştır.",
    explanationEn: "Because the sentence specifies a DIRECTION 'naar het bos' (to the forest), 'zijn' is used."
  },
  {
    id: "q_read_past_049",
    type: "fill_in",
    tags: ["reading_comprehension", "past_tenses", "perfectum", "prefixes"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'We hebben een oude hut ___ (ontdekken).'",
    correctAnswer: "ontdekt",
    explanationTr: "'ontdekken' fiili 'ont-' ile başladığı için 'ge-' almaz. Kök (ontdek) 'k' ile bittiği için sonuna 't' alır.",
    explanationEn: "'ontdekken' starts with 'ont-', so no 'ge-'. The stem (ontdek) ends in 'k', so it gets a 't'."
  },
  {
    id: "q_read_past_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "past_tenses", "imperfectum", "modal_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nIn de zin 'We moesten voor het donker thuis zijn', van welk werkwoord komt 'moesten'?",
    options: ["moeten", "mogen", "maken"],
    correctAnswer: "moeten",
    explanationTr: "'moesten', 'moeten' (zorunda olmak) modal fiilinin çoğul geçmiş zaman halidir.",
    explanationEn: "'moesten' is the plural simple past of the modal verb 'moeten' (must)."
  },
  
  {
    id: "q_sep_001",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present", "word_order"],
    questionNl: "Ik ___ (opstaan) elke dag om zeven uur op.",
    correctAnswer: "sta",
    explanationTr: "'opstaan' ayrılabilen bir fiildir. Şimdiki zamanda ilk parça (op) cümlenin sonuna gider, ana fiil (staan) ise özneden sonra çekimlenir.",
    explanationEn: "'opstaan' is a separable verb. In the present tense, the prefix (op) goes to the end, while the main verb (staan) is conjugated after the subject."
  },
  {
    id: "q_sep_002",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present", "word_order"],
    questionNl: "Wij ___ (afrekenen) onze drankjes aan de bar af.",
    correctAnswer: "rekenen",
    explanationTr: "'afrekenen' ayrılabilen bir fiildir. 'Wij' için fiil mastar (rekenen) kalır, 'af' cümlenin sonundadır.",
    explanationEn: "'afrekenen' is a separable verb. For 'Wij', the verb stays infinitive (rekenen), and 'af' is at the end."
  },
  {
    id: "q_sep_003",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present", "word_order"],
    questionNl: "Hij ___ (meenemen) zijn laptop elke dag mee naar het werk.",
    correctAnswer: "neemt",
    explanationTr: "'meenemen' fiilinin ana kısmı 'nemen'dir. 'Hij' için 'neemt' olur, prefix 'mee' sona gider.",
    explanationEn: "The main part of 'meenemen' is 'nemen'. For 'Hij', it becomes 'neemt', and the prefix 'mee' goes to the end."
  },
  {
    id: "q_sep_004",
    type: "fill_in",
    tags: ["separable_verbs", "questions", "word_order"],
    questionNl: "___ (Schoonmaken) jij het huis in het weekend schoon?",
    correctAnswer: "Maak",
    explanationTr: "Soru cümlesi: 'Schoonmaken'. Ana fiil 'maken' başa gelir, 'jij' fiilden sonra olduğu için 't' düşer (Maak jij). Prefix 'schoon' sonda kalır.",
    explanationEn: "Question: 'Schoonmaken'. Main verb 'maken' comes first, 't' drops because 'jij' follows (Maak jij). Prefix 'schoon' stays at the end."
  },
  {
    id: "q_sep_005",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present", "word_order"],
    questionNl: "Waarom ___ (uitnodigen) zij hem niet uit voor het feest?",
    correctAnswer: "nodigt",
    explanationTr: "'Uitnodigen' (davet etmek). Soru kelimesinden sonra fiil gelir (nodigt), 'uit' eki ise cümlenin en sonuna gider.",
    explanationEn: "'Uitnodigen' (to invite). The verb follows the question word (nodigt), and the prefix 'uit' goes to the very end."
  },
  {
    id: "q_sep_006",
    type: "multiple_choice",
    tags: ["separable_verbs", "word_order"],
    questionNl: "Waar staat het eerste deel (prefix) van een scheidbaar werkwoord in de presens en imperfectum?",
    options: ["Voor de persoonsvorm", "Aan het einde van de zin", "Direct na het subject"],
    correctAnswer: "Aan het einde van de zin",
    explanationTr: "Ayrılabilen fiillerin ilk parçası (prefix) şimdiki zaman ve hikaye geçmiş zamanda her zaman cümlenin EN SONUNA gider.",
    explanationEn: "The first part (prefix) of a separable verb always goes to the VERY END of the sentence in the present and simple past tense."
  },
  {
    id: "q_sep_007",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "imperfectum"],
    questionNl: "Toen ik jong was, ___ (opstaan) ik heel vroeg op.",
    correctAnswer: "stond",
    explanationTr: "Imperfectum. 'opstaan' -> 'staan' fiilinin geçmiş zamanı 'stond'dur. 'op' cümlenin sonundadır.",
    explanationEn: "Imperfectum. 'opstaan' -> the past of 'staan' is 'stond'. 'op' is at the end."
  },
  {
    id: "q_sep_008",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "imperfectum"],
    questionNl: "Gisteren ___ (schoonmaken) we de hele keuken schoon.",
    correctAnswer: "maakten",
    explanationTr: "Imperfectum. Çoğul özne (we) için 'maken' fiilinin geçmiş zamanı 'maakten' olur. 'schoon' sondadır.",
    explanationEn: "Imperfectum. The past plural of 'maken' is 'maakten'. 'schoon' is at the end."
  },
  {
    id: "q_sep_009",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present", "inversion"],
    questionNl: "Vandaag ___ (meenemen) ik mijn eigen lunch mee.",
    correctAnswer: "neem",
    explanationTr: "Inversie. 'Vandaag' ile başlandığı için fiil 2. sıradadır. 'ik' için 'neem' olur, 'mee' sonda.",
    explanationEn: "Inversion. Starting with 'Vandaag', the verb is 2nd. For 'ik' it's 'neem', 'mee' is at the end."
  },
  {
    id: "q_sep_010",
    type: "fill_in",
    tags: ["separable_verbs", "verbs_present"],
    questionNl: "De trein ___ (aankomen) om 10.00 uur aan op het station.",
    correctAnswer: "komt",
    explanationTr: "'aankomen' (varmak/ulaşmak). 'De trein' tekil olduğu için 'komt' olur, 'aan' sonda yer alır.",
    explanationEn: "'aankomen' (to arrive). 'De trein' is singular so it becomes 'komt', 'aan' is placed at the end."
  },
  {
    id: "q_sep_011",
    type: "multiple_choice",
    tags: ["separable_verbs", "modal_verbs", "word_order"],
    questionNl: "Ik wil morgen uitslapen, dus ik ga niet vroeg ___.",
    options: ["opstaan", "staan op", "opgestaan"],
    correctAnswer: "opstaan",
    explanationTr: "Cümlede modal/yardımcı fiil (wil/ga) varsa, ayrılabilen fiil AYRILMAZ ve mastar halinde cümlenin sonuna bütün olarak gider.",
    explanationEn: "If there is a modal/auxiliary verb (wil/ga), the separable verb does NOT split and goes to the end of the sentence as a whole infinitive."
  },
  {
    id: "q_sep_012",
    type: "multiple_choice",
    tags: ["separable_verbs", "modal_verbs", "word_order"],
    questionNl: "Moeten we de rekening aan de bar ___?",
    options: ["rekenen af", "afrekenen", "afgerekend"],
    correctAnswer: "afrekenen",
    explanationTr: "'Moeten' modal fiili kullanıldığı için 'afrekenen' ayrılmadan mastar halinde sonda kullanılır.",
    explanationEn: "Because the modal verb 'Moeten' is used, 'afrekenen' stays together as an infinitive at the end."
  },
  {
    id: "q_sep_013",
    type: "fill_in",
    tags: ["separable_verbs", "modal_verbs"],
    questionNl: "Zij zal hem zeker voor haar verjaardagsfeest ___ (uitnodigen).",
    correctAnswer: "uitnodigen",
    explanationTr: "'Zal' (gelecek zaman/teklif) fiili asıl eylemi sona mastar halinde atar. Ayrılabilen fiiller bu durumda ayrılmaz.",
    explanationEn: "The verb 'Zal' pushes the main action to the end as an infinitive. Separable verbs do not split in this case."
  },
  {
    id: "q_sep_014",
    type: "fill_in",
    tags: ["separable_verbs", "modal_verbs"],
    questionNl: "Kan je even de deur voor me ___ (dichtdoen)?",
    correctAnswer: "dichtdoen",
    explanationTr: "'Kan' (kunnen) modal fiili sebebiyle 'dichtdoen' ayrılmadan sona gider.",
    explanationEn: "Because of the modal verb 'Kan' (kunnen), 'dichtdoen' goes to the end without splitting."
  },
  {
    id: "q_sep_015",
    type: "multiple_choice",
    tags: ["separable_verbs", "modal_verbs", "word_order"],
    questionNl: "Waarom staat het scheidbare werkwoord helemaal aan het einde in de zin: 'Ik wil mijn boek meenemen'?",
    options: ["Omdat er een modaal werkwoord ('wil') in de zin staat.", "Omdat het in de verleden tijd is.", "Omdat het een vraag is."],
    correctAnswer: "Omdat er een modaal werkwoord ('wil') in de zin staat.",
    explanationTr: "Modal fiiller (willen, moeten, kunnen vb.) ayrılabilen fiillerin ayrılmasını engeller ve onları mastar olarak sona atar.",
    explanationEn: "Modal verbs (willen, moeten, kunnen etc.) prevent separable verbs from splitting and push them as infinitives to the end."
  },
  {
    id: "q_sep_016",
    type: "multiple_choice",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Waar komt de '-ge-' in het perfectum van een scheidbaar werkwoord? (Bijv. meenemen)",
    options: ["Helemaal vooraan (gemeenomen)", "Tussen de twee delen (meegenomen)", "Aan het einde (meenomenge)"],
    correctAnswer: "Tussen de twee delen (meenomen)",
    explanationTr: "Ayrılabilen fiillerin Perfectum (3. hal) çekiminde '-ge-' eki prefix ile asıl fiilin ARASINA girer (mee + ge + nomen).",
    explanationEn: "In the Perfectum (past participle) of separable verbs, the '-ge-' is placed BETWEEN the prefix and the main verb (mee + ge + nomen)."
  },
  {
    id: "q_sep_017",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb mijn vrienden voor zaterdag ___ (uitnodigen).",
    correctAnswer: "uitgenodigd",
    explanationTr: "Perfectum. 'uitnodigen' -> uit + ge + nodigd = uitgenodigd.",
    explanationEn: "Perfectum. 'uitnodigen' -> uit + ge + nodigd = uitgenodigd."
  },
  {
    id: "q_sep_018",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "We hebben de rekening al ___ (afrekenen).",
    correctAnswer: "afgerekend",
    explanationTr: "Perfectum. 'afrekenen' -> af + ge + rekend = afgerekend.",
    explanationEn: "Perfectum. 'afrekenen' -> af + ge + rekend = afgerekend."
  },
  {
    id: "q_sep_019",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij is vanmorgen heel vroeg ___ (opstaan).",
    correctAnswer: "opgestaan",
    explanationTr: "Perfectum. 'opstaan' durum/konum değişikliği bildirdiği için 'zijn' (is) ile kullanılır. 3. hali: op + ge + staan = opgestaan.",
    explanationEn: "Perfectum. 'opstaan' indicates a change of state, so it uses 'zijn' (is). Past participle: op + ge + staan = opgestaan."
  },
  {
    id: "q_sep_020",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb jij je paraplu ___ (meenemen)?",
    correctAnswer: "meegenomen",
    explanationTr: "Perfectum. 'nemen' düzensizdir (genomen). mee + ge + nomen = meegenomen.",
    explanationEn: "Perfectum. 'nemen' is irregular (genomen). mee + ge + nomen = meegenomen."
  },
  {
    id: "q_sep_021",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Zij hebben de kamer netjes ___ (schoonmaken).",
    correctAnswer: "schoongemaakt",
    explanationTr: "Perfectum. 'schoonmaken' -> schoon + ge + maakt = schoongemaakt.",
    explanationEn: "Perfectum. 'schoonmaken' -> schoon + ge + maakt = schoongemaakt."
  },
  {
    id: "q_sep_022",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "De leraar is net ___ (binnenkomen).",
    correctAnswer: "binnengekomen",
    explanationTr: "Perfectum. 'komen' hareket/yönelme bildirdiği için 'zijn' (is) ile kullanılır. binnen + ge + komen = binnengekomen.",
    explanationEn: "Perfectum. 'komen' implies motion, so it uses 'zijn' (is). binnen + ge + komen = binnengekomen."
  },
  {
    id: "q_sep_023",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Het was koud, dus hij heeft zijn jas ___ (aandoen).",
    correctAnswer: "aangedaan",
    explanationTr: "Perfectum. 'doen' düzensizdir (gedaan). aan + ge + daan = aangedaan.",
    explanationEn: "Perfectum. 'doen' is irregular (gedaan). aan + ge + daan = aangedaan."
  },
  {
    id: "q_sep_024",
    type: "fill_in",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "We hebben een heel leuk plan ___ (voorstellen).",
    correctAnswer: "voorgesteld",
    explanationTr: "Perfectum. 'voorstellen' (önermek) -> voor + ge + steld = voorgesteld.",
    explanationEn: "Perfectum. 'voorstellen' (to propose) -> voor + ge + steld = voorgesteld."
  },
  {
    id: "q_sep_025",
    type: "multiple_choice",
    tags: ["separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Is hij al van zijn vakantie ___ (terugkomen)?",
    options: ["teruggekomen", "geterugkomen", "terugkomen"],
    correctAnswer: "teruggekomen",
    explanationTr: "Perfectum. 'terugkomen' -> terug + ge + komen = teruggekomen.",
    explanationEn: "Perfectum. 'terugkomen' -> terug + ge + komen = teruggekomen."
  },
  {
    id: "q_ref_026",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Ik was ___ elke ochtend met koud water.",
    options: ["me", "je", "zich"],
    correctAnswer: "me",
    explanationTr: "Dönüşlü fiiller (Reflexieve werkwoorden). 'Ik' (ben) öznesi için dönüşlü zamir 'me' veya 'mij'dir.",
    explanationEn: "Reflexive verbs. For the subject 'Ik' (I), the reflexive pronoun is 'me' or 'mij'."
  },
  {
    id: "q_ref_027",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Jij vergist ___ in de datum van de vergadering.",
    correctAnswer: "je",
    explanationTr: "Dönüşlü fiiller. 'Jij/Je' (sen) öznesi için dönüşlü zamir 'je'dir.",
    explanationEn: "Reflexive verbs. For the subject 'Jij/Je' (you), the reflexive pronoun is 'je'."
  },
  {
    id: "q_ref_028",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "U kunt ___ hier inschrijven voor de cursus.",
    options: ["je", "u", "ons"],
    correctAnswer: "u",
    explanationTr: "Resmi 'u' (siz) öznesi için dönüşlü zamir olarak yine 'u' kullanılır (bazen 'zich' de kullanılır).",
    explanationEn: "For the formal subject 'u' (you), the reflexive pronoun is also 'u' (sometimes 'zich' is used)."
  },
  {
    id: "q_ref_029",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Hij haast ___ naar het station om de trein te halen.",
    correctAnswer: "zich",
    explanationTr: "3. tekil şahıslar (hij, zij, het) için dönüşlü zamir 'zich'tir.",
    explanationEn: "For 3rd person singular (hij, zij, het), the reflexive pronoun is 'zich'."
  },
  {
    id: "q_ref_030",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Zij (she) verveelt ___ op het feestje.",
    correctAnswer: "zich",
    explanationTr: "'Zij' (tekil/o kadın) için dönüşlü zamir 'zich'tir.",
    explanationEn: "For 'Zij' (singular/she), the reflexive pronoun is 'zich'."
  },
  {
    id: "q_ref_031",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Wij herinneren ___ die mooie dag in Spanje heel goed.",
    correctAnswer: "ons",
    explanationTr: "Çoğul 'Wij' (biz) öznesi için dönüşlü zamir 'ons'tur.",
    explanationEn: "For the plural subject 'Wij' (we), the reflexive pronoun is 'ons'."
  },
  {
    id: "q_ref_032",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Jullie moeten ___ goed voorbereiden op de test.",
    correctAnswer: "je",
    explanationTr: "Çoğul 'Jullie' (siz) öznesi için dönüşlü zamir 'je'dir.",
    explanationEn: "For the plural subject 'Jullie' (you all), the reflexive pronoun is 'je'."
  },
  {
    id: "q_ref_033",
    type: "fill_in",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Zij (pluralis) schamen ___ voor hun grote fout.",
    correctAnswer: "zich",
    explanationTr: "Çoğul 'Zij' (onlar) öznesi için dönüşlü zamir 'zich'tir.",
    explanationEn: "For the plural subject 'Zij' (they), the reflexive pronoun is 'zich'."
  },
  {
    id: "q_ref_034",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "pronouns"],
    questionNl: "Welk reflexief pronomen hoort bij het subject 'wij'?",
    options: ["zich", "ons", "je"],
    correctAnswer: "ons",
    explanationTr: "'Wij' (biz) zamiri dönüşlü yapıda 'ons' (kendimizi) şeklini alır.",
    explanationEn: "The pronoun 'Wij' (we) takes the reflexive form 'ons' (ourselves)."
  },
  {
    id: "q_ref_035",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "pronouns", "reciprocal"],
    questionNl: "We kennen ___ al meer dan vijf jaar.",
    options: ["elkaar", "ons", "zich"],
    correctAnswer: "elkaar",
    explanationTr: "Karşılıklı yapılan (reciprocal) eylemlerde (birbirimizi/birbirlerini vb.) 'elkaar' kelimesi kullanılır.",
    explanationEn: "For reciprocal actions (each other/one another), the word 'elkaar' is used."
  },
  {
    id: "q_ref_036",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "pronouns", "reciprocal"],
    questionNl: "Zullen we vanavond iets met ___ afspreken?",
    options: ["ons", "zich", "elkaar"],
    correctAnswer: "elkaar",
    explanationTr: "Birlikte/Karşılıklı bir şeyler yapmak (birbirimizle buluşmak) için 'elkaar' kullanılır.",
    explanationEn: "To do something together/reciprocally (meet with each other), 'elkaar' is used."
  },
  {
    id: "q_ref_037",
    type: "fill_in",
    tags: ["reflexive_verbs", "modal_verbs", "word_order"],
    questionNl: "Ik ben te laat. Ik moet ___ snel aankleden!",
    correctAnswer: "me",
    explanationTr: "Cümlede modal fiil (moet) olsa da, dönüşlü zamir (me) özneden hemen sonra veya cümlenin uygun bir yerinde kalır. Ana fiil (aankleden) sona gider.",
    explanationEn: "Even with a modal verb (moet), the reflexive pronoun (me) stays early in the sentence. The main verb (aankleden) goes to the end."
  },
  {
    id: "q_ref_038",
    type: "fill_in",
    tags: ["reflexive_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij heeft ___ gisteren geschoren.",
    correctAnswer: "zich",
    explanationTr: "Perfectum cümlesi. 'Hij' için dönüşlü zamir 'zich'tir. Yardımcı fiil 'heeft' kullanılmıştır.",
    explanationEn: "Perfectum sentence. For 'Hij', the reflexive pronoun is 'zich'. The auxiliary verb is 'heeft'."
  },
  {
    id: "q_ref_039",
    type: "multiple_choice",
    tags: ["reflexive_verbs", "questions", "word_order"],
    questionNl: "Meneer, vergist u ___ niet?",
    options: ["zich", "u"],
    correctAnswer: "zich",
    explanationTr: "Devrik cümle veya sorularda 'u' zamiri fiilden sonra geldiğinde, ikinci bir 'u' kullanmak kafa karıştırıcı olabilir (Vergist u u niet?). Bu yüzden genellikle 'zich' tercih edilir.",
    explanationEn: "In inversion or questions, using 'u' twice can be confusing (Vergist u u niet?). Therefore, 'zich' is often preferred here."
  },
  {
    id: "q_ref_040",
    type: "fill_in",
    tags: ["reflexive_verbs", "past_tenses", "perfectum"],
    questionNl: "Wij hebben ___ vanmorgen erg gehaast.",
    correctAnswer: "ons",
    explanationTr: "Geçmiş zaman cümlesinde 'wij' öznesi için dönüşlü zamir 'ons' kullanılır.",
    explanationEn: "In a past tense sentence, for the subject 'wij', the reflexive pronoun 'ons' is used."
  },
  {
    id: "q_read_sep_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "separable_verbs"],
    questionNl: "Lees de tekst: 'Elke maandag sta ik om zeven uur op. Ik doe mijn kleren aan en maak ontbijt klaar. Ik neem vaak een broodje mee. Gisteren heb ik ook soep meegenomen. Morgen moet ik eerder opstaan.'\n\nWat is de infinitief van 'sta ... op' in de tekst?",
    options: ["opstaan", "staan op", "opgestaan"],
    correctAnswer: "opstaan",
    explanationTr: "Metinde geçen 'sta ... op' ayrılabilen fiilinin mastar hali 'opstaan'dır (kalkmak).",
    explanationEn: "The infinitive form of the separable verb 'sta ... op' in the text is 'opstaan' (to get up)."
  },
  {
    id: "q_read_sep_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "separable_verbs", "modal_verbs", "word_order"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWaarom staat 'opstaan' helemaal aan het eind in de zin: 'Morgen moet ik eerder opstaan'?",
    options: ["Omdat er een modaal werkwoord ('moet') in de zin staat.", "Omdat het in de toekomst is.", "Omdat het de laatste zin is."],
    correctAnswer: "Omdat er een modaal werkwoord ('moet') in de zin staat.",
    explanationTr: "Cümlede 'moet' modal fiili olduğu için ayrılabilen fiil ayrılmaz ve mastar halinde cümlenin sonuna gider.",
    explanationEn: "Because the modal verb 'moet' is in the sentence, the separable verb doesn't split and goes to the end as an infinitive."
  },
  {
    id: "q_read_sep_043",
    type: "fill_in",
    tags: ["reading_comprehension", "separable_verbs", "past_tenses", "perfectum"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul het ontbrekende woord in (kijk naar de tekst): 'Gisteren heb ik ook soep ___ (meenemen).'",
    correctAnswer: "meegenomen",
    explanationTr: "Metindeki Perfectum (geçmiş zaman) cümlesinde 'meenemen' fiili 'meegenomen' olmuştur.",
    explanationEn: "In the Perfectum (past tense) sentence from the text, the verb 'meenemen' becomes 'meegenomen'."
  },
  {
    id: "q_read_sep_044",
    type: "fill_in",
    tags: ["reading_comprehension", "separable_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul het eerste deel in: 'Ik ___ (klaarmaken) ontbijt klaar.'",
    correctAnswer: "maak",
    explanationTr: "Metindeki 'klaarmaken' (hazırlamak) fiilinin çekimli hali özneden (ik) sonra gelir: 'maak'.",
    explanationEn: "The conjugated part of 'klaarmaken' (to prepare) comes after the subject (ik): 'maak'."
  },
  {
    id: "q_read_sep_045",
    type: "fill_in",
    tags: ["reading_comprehension", "separable_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul het eerste deel in: 'Ik ___ (aandoen) mijn kleren aan.'",
    correctAnswer: "doe",
    explanationTr: "Metinde 'aandoen' (giymek) fiili 'Ik doe ... aan' şeklinde kullanılmıştır.",
    explanationEn: "In the text, the verb 'aandoen' (to put on) is used as 'Ik doe ... aan'."
  },
  {
    id: "q_read_ref_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "reflexive_verbs"],
    questionNl: "Lees de tekst: 'Mijn man en ik vervelen ons nooit. In de ochtend haast hij zich altijd. Hij doucht zich snel. Ik bereid me rustig voor. Wij helpen elkaar veel. Vroeger vergisten we ons vaak in de tijd, maar nu niet meer.'\n\nWelk reflexief pronomen wordt gebruikt bij 'Mijn man en ik' (wij)?",
    options: ["zich", "ons", "me"],
    correctAnswer: "ons",
    explanationTr: "'Mijn man en ik' = 'Wij' (biz) anlamına gelir. Metinde de görüldüğü gibi 'wij' için 'ons' kullanılır.",
    explanationEn: "'Mijn man en ik' means 'Wij' (we). As seen in the text, 'ons' is used for 'wij'."
  },
  {
    id: "q_read_ref_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "reflexive_verbs", "reciprocal"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWaarom zegt de tekst 'Wij helpen elkaar' en NIET 'Wij helpen ons'?",
    options: ["Omdat de actie wederkerig (reciprocal/karşılıklı) is.", "Omdat 'helpen' geen reflexief werkwoord is.", "Beide antwoorden zijn correct."],
    correctAnswer: "Beide antwoorden zijn correct.",
    explanationTr: "Hem 'helpen' fiili dönüşlü (reflexive) değildir, hem de eylem karşılıklı yapıldığı için (birbirimize yardım ediyoruz) 'elkaar' kullanılmalıdır.",
    explanationEn: "Both are correct: 'helpen' is not a reflexive verb, and since the action is reciprocal (we help each other), 'elkaar' must be used."
  },
  {
    id: "q_read_ref_048",
    type: "fill_in",
    tags: ["reading_comprehension", "reflexive_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul in (kijk naar de tekst): 'Hij doucht ___ snel.'",
    correctAnswer: "zich",
    explanationTr: "Metne göre 'Hij' (o) için dönüşlü zamir 'zich'tir.",
    explanationEn: "According to the text, the reflexive pronoun for 'Hij' (he) is 'zich'."
  },
  {
    id: "q_read_ref_049",
    type: "fill_in",
    tags: ["reading_comprehension", "reflexive_verbs", "separable_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul het juiste woord in: 'Ik bereid ___ rustig voor.'",
    correctAnswer: "me",
    explanationTr: "Metinde 'zich voorbereiden' (hazırlanmak) fiili 'ik' için kullanılmış. Dönüşlü zamir 'me' olur.",
    explanationEn: "In the text, 'zich voorbereiden' (to prepare oneself) is used for 'ik'. The reflexive pronoun is 'me'."
  },
  {
    id: "q_read_ref_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "reflexive_verbs", "past_tenses", "imperfectum"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nIn welke tijd staat het werkwoord in de zin: 'Vroeger vergisten we ons vaak in de tijd'?",
    options: ["Perfectum", "Presens", "Imperfectum"],
    correctAnswer: "Imperfectum",
    explanationTr: "'vergisten we ons', 'zich vergissen' fiilinin hikaye geçmiş zamanıdır (Imperfectum).",
    explanationEn: "'vergisten we ons' is the simple past (Imperfectum) of the verb 'zich vergissen'."
  },
  
  {
    id: "q_fut_001",
    type: "fill_in",
    tags: ["future_tenses", "future_presens"],
    questionNl: "Ik ___ (zijn) volgend weekend in Londen.",
    correctAnswer: "ben",
    explanationTr: "Gelecek zamandan (volgend weekend) bahsederken şimdiki zaman (presens) fiili kullanılabilir. 'ik' için 'zijn' çekimi 'ben'dir.",
    explanationEn: "You can use the present tense (presens) with a future time word (volgend weekend). The 'ik' form of 'zijn' is 'ben'."
  },
  {
    id: "q_fut_002",
    type: "multiple_choice",
    tags: ["future_tenses", "future_presens"],
    questionNl: "Hans ___ (komen) volgende week niet naar de les.",
    options: ["kom", "komt", "komen"],
    correctAnswer: "komt",
    explanationTr: "Gelecek zamanı belirtmek için şimdiki zaman kullanılmış. Hans (hij) 3. tekil şahıs olduğu için 'komt' olur.",
    explanationEn: "Present tense is used to indicate the future. Hans (hij) is 3rd person singular, so it becomes 'komt'."
  },
  {
    id: "q_fut_003",
    type: "fill_in",
    tags: ["future_tenses", "future_presens", "word_order"],
    questionNl: "Morgen ___ (werken) ik gewoon thuis.",
    correctAnswer: "werk",
    explanationTr: "Cümleye zaman (morgen) ile başlandığı için devrik yapı (inversie) var. 'ik' fiilden sonra gelse de ek almaz (werk).",
    explanationEn: "Inversion because it starts with time (morgen). For 'ik', the verb takes no suffix even when it precedes the subject (werk)."
  },
  {
    id: "q_fut_004",
    type: "multiple_choice",
    tags: ["future_tenses", "future_presens"],
    questionNl: "Wij ___ (reizen) in juli naar Spanje.",
    options: ["reizen", "reist", "reis"],
    correctAnswer: "reizen",
    explanationTr: "'Wij' (biz) çoğul olduğu için fiil mastar (reizen) olarak kalır. Gelecekteki bir planı (in juli) şimdiki zamanla anlatıyoruz.",
    explanationEn: "'Wij' (we) is plural so the verb stays in the infinitive (reizen). A future plan (in juli) is expressed using present tense."
  },
  {
    id: "q_fut_005",
    type: "fill_in",
    tags: ["future_tenses", "future_presens", "word_order"],
    questionNl: "Volgend jaar ___ (kopen) ik een nieuwe auto.",
    correctAnswer: "koop",
    explanationTr: "Devrik cümle (inversie). 'ik' için 'kopen' fiili 'koop' olarak çekimlenir.",
    explanationEn: "Inversion. The verb 'kopen' is conjugated as 'koop' for 'ik'."
  },
  {
    id: "q_fut_006",
    type: "fill_in",
    tags: ["future_tenses", "future_gaan"],
    questionNl: "Eva ___ (gaan) een jaar in Engeland studeren.",
    correctAnswer: "gaat",
    explanationTr: "Planlanmış niyet (intentie) için 'gaan' kullanılır. Eva (zij) için 'gaat' olur.",
    explanationEn: "For planned intentions, 'gaan' is used. For Eva (zij), it becomes 'gaat'."
  },
  {
    id: "q_fut_007",
    type: "multiple_choice",
    tags: ["future_tenses", "future_gaan"],
    questionNl: "We ___ (gaan) nu even koffiedrinken.",
    options: ["gaan", "gaat", "ga"],
    correctAnswer: "gaan",
    explanationTr: "Yakın gelecek/niyet için 'gaan'. 'We' çoğul olduğu için 'gaan' mastar olarak kalır.",
    explanationEn: "For near future/intentions, 'gaan' is used. Because 'We' is plural, it remains 'gaan'."
  },
  {
    id: "q_fut_008",
    type: "fill_in",
    tags: ["future_tenses", "future_gaan", "word_order"],
    questionNl: "___ (Gaan) jij vanavond koken?",
    correctAnswer: "Ga",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 'gaan' fiilindeki 't' düşer: Ga.",
    explanationEn: "In a question, when 'jij' comes after the verb, the 't' in 'gaan' drops: Ga."
  },
  {
    id: "q_fut_009",
    type: "multiple_choice",
    tags: ["future_tenses", "future_gaan", "word_order"],
    questionNl: "Wat ___ (gaan) jullie in het weekend doen?",
    options: ["ga", "gaat", "gaan"],
    correctAnswer: "gaan",
    explanationTr: "'jullie' çoğul bir şahıs olduğu için fiil çekimi her zaman mastar (gaan) olur.",
    explanationEn: "'jullie' is a plural person, so the verb conjugation is always the infinitive (gaan)."
  },
  {
    id: "q_fut_010",
    type: "fill_in",
    tags: ["future_tenses", "future_gaan"],
    questionNl: "Ik ___ (gaan) morgen mijn kamer opruimen.",
    correctAnswer: "ga",
    explanationTr: "'ik' için 'gaan' fiili 'ga' olarak çekimlenir.",
    explanationEn: "For 'ik', the verb 'gaan' is conjugated as 'ga'."
  },
  {
    id: "q_fut_011",
    type: "multiple_choice",
    tags: ["future_tenses", "future_gaan"],
    questionNl: "Zij (pluralis) ___ (gaan) een nieuw huis kopen.",
    options: ["gaat", "gaan", "ga"],
    correctAnswer: "gaan",
    explanationTr: "'Zij' çoğul (onlar) olduğu için 'gaan' kullanılır.",
    explanationEn: "'Zij' is plural (they), so 'gaan' is used."
  },
  {
    id: "q_fut_012",
    type: "fill_in",
    tags: ["future_tenses", "future_gaan", "questions"],
    questionNl: "___ (Gaan) u vanmiddag rusten?",
    correctAnswer: "Gaat",
    explanationTr: "Resmi 'u' zamirinde soru cümlesi de olsa '-t' kalır. 'Gaat u'.",
    explanationEn: "With the formal pronoun 'u', the '-t' remains even in a question. 'Gaat u'."
  },
  {
    id: "q_fut_013",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen"],
    questionNl: "De koning ___ (zullen) de beurs openen.",
    options: ["zult", "zal", "zullen"],
    correctAnswer: "zal",
    explanationTr: "Resmi/kesin gelecek eylemlerde 'zullen' kullanılır. 3. tekil şahıs (hij) için 'zal' olur.",
    explanationEn: "For formal/certain future actions, 'zullen' is used. For 3rd person singular (hij), it is 'zal'."
  },
  {
    id: "q_fut_014",
    type: "fill_in",
    tags: ["future_tenses", "zullen"],
    questionNl: "Over enkele ogenblikken ___ (zullen) we aankomen op station Utrecht Centraal.",
    correctAnswer: "zullen",
    explanationTr: "Çoğul (we) olduğu için 'zullen' mastar halinde kalır. Resmi bir anons ifadesidir.",
    explanationEn: "Because it is plural (we), 'zullen' remains in the infinitive. It's a formal announcement expression."
  },
  {
    id: "q_fut_015",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_proposal"],
    questionNl: "___ (Zullen) ik het raam opendoen?",
    options: ["Zal", "Zul", "Zult"],
    correctAnswer: "Zal",
    explanationTr: "Bir teklif (voorstel) sunuluyor. Öznesi 'ik' olduğu için 'Zal' kullanılır.",
    explanationEn: "A proposal (voorstel) is being made. Since the subject is 'ik', 'Zal' is used."
  },
  {
    id: "q_fut_016",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_proposal"],
    questionNl: "___ (Zullen) we vanavond naar de bioscoop gaan?",
    correctAnswer: "Zullen",
    explanationTr: "Öneri/Teklif. 'we' çoğul özne olduğu için 'Zullen' kullanılır.",
    explanationEn: "Proposal/Suggestion. Because 'we' is a plural subject, 'Zullen' is used."
  },
  {
    id: "q_fut_017",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen"],
    questionNl: "Jij ___ (zullen) morgen de resultaten van de test horen.",
    options: ["zult", "zal", "zult / zal"],
    correctAnswer: "zult / zal",
    explanationTr: "'Jij' için 'zullen' fiilinin çekimi 'zult' veya 'zal' olabilir. İkisi de doğrudur.",
    explanationEn: "For 'Jij', the conjugation of 'zullen' can be 'zult' or 'zal'. Both are correct."
  },
  {
    id: "q_fut_018",
    type: "fill_in",
    tags: ["future_tenses", "zullen"],
    questionNl: "Hij ___ (zullen) het document morgen naar u sturen.",
    correctAnswer: "zal",
    explanationTr: "3. tekil şahıs (hij/zij/het) için 'zullen' çekimi her zaman 'zal'dır.",
    explanationEn: "For the 3rd person singular (hij/zij/het), the conjugation of 'zullen' is always 'zal'."
  },
  {
    id: "q_fut_019",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen"],
    questionNl: "Wij ___ (zullen) u zo snel mogelijk bellen.",
    options: ["zal", "zult", "zullen"],
    correctAnswer: "zullen",
    explanationTr: "Çoğul (wij) özne ile 'zullen' mastar olarak kullanılır. Bu resmi bir gelecek eylemidir.",
    explanationEn: "With the plural (wij) subject, 'zullen' is used as an infinitive. This is a formal future action."
  },
  {
    id: "q_fut_020",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "questions"],
    questionNl: "___ (Zullen) u even wachten, alstublieft?",
    correctAnswer: "Zult",
    explanationTr: "'u' (resmi siz) için 'zullen' çekimi 'zult' şeklindedir (zal u da duyulabilir ama zult u daha doğrudur).",
    explanationEn: "For 'u' (formal you), the conjugation of 'zullen' is 'zult' (zal u can also be heard, but zult u is more precise)."
  },
  {
    id: "q_fut_021",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "Ik ___ (zullen) vanavond het eten maken. Maak je geen zorgen!",
    options: ["zal", "ga", "wil"],
    correctAnswer: "zal",
    explanationTr: "Burada bir söz verme / vaat (belofte) durumu vardır. 'Ben yapacağım' (Söz veriyorum). 'Zullen' kullanılır.",
    explanationEn: "There is a promise (belofte) here. 'I will do it' (I promise). 'Zullen' is used."
  },
  {
    id: "q_fut_022",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "We ___ (zullen) je altijd helpen met je huiswerk.",
    correctAnswer: "zullen",
    explanationTr: "Bir vaat/söz (belofte). 'We' için 'zullen' kullanılır.",
    explanationEn: "A promise (belofte). For 'We', 'zullen' is used."
  },
  {
    id: "q_fut_023",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "Wat is de functie van 'zullen' in deze zin? 'Ik zal je geheim aan niemand vertellen.'",
    options: ["Een voorstel (Teklif)", "Een waarschijnlijkheid (Olasılık)", "Een belofte (Söz/Vaat)"],
    correctAnswer: "Een belofte (Söz/Vaat)",
    explanationTr: "'Sırrını kimseye söylemeyeceğim' demek, açıkça bir söz vermektir (belofte).",
    explanationEn: "Saying 'I will not tell your secret to anyone' is clearly making a promise (belofte)."
  },
  {
    id: "q_fut_024",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "Zij (zij-singularis) ___ (zullen) het boek morgen teruggeven. (Het is een belofte).",
    correctAnswer: "zal",
    explanationTr: "Söz verildiği (belofte) için 'zullen' kullanılır. 'Zij' (tekil) için çekim 'zal'dır.",
    explanationEn: "Because it's a promise (belofte), 'zullen' is used. The conjugation for 'Zij' (singular) is 'zal'."
  },
  {
    id: "q_fut_025",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "Kies het juiste woord: Ik ___ mijn kamer vandaag schoonmaken, beloofd!",
    options: ["ga", "zal", "ben"],
    correctAnswer: "zal",
    explanationTr: "Cümlenin sonundaki 'beloofd!' (söz veriyorum) kelimesi, burada 'zal' kullanılmasını gerektirir.",
    explanationEn: "The word 'beloofd!' (promised!) at the end of the sentence requires the use of 'zal' here."
  },
  {
    id: "q_fut_026",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_promise"],
    questionNl: "Ik ___ (zullen) op tijd zijn, wacht maar op mij!",
    correctAnswer: "zal",
    explanationTr: "'Zamanında orada olacağım' bir sözdür. 'ik' için 'zal' kullanılır.",
    explanationEn: "'I will be on time' is a promise. 'zal' is used for 'ik'."
  },
  {
    id: "q_fut_027",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Paul heeft gisteren veel gesport. Hij ___ morgen wel spierpijn hebben.",
    options: ["zal", "gaat", "komt"],
    correctAnswer: "zal",
    explanationTr: "'wel' kelimesiyle birlikte 'zullen' kullanımı yüksek ihtimal/olasılık (waarschijnlijkheid) belirtir: 'Muhtemelen kas ağrısı çekecek.'",
    explanationEn: "The use of 'zullen' with the word 'wel' indicates high probability (waarschijnlijkheid): 'He will probably have muscle pain.'"
  },
  {
    id: "q_fut_028",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Het ___ (zullen) morgen wel mooi weer zijn volgens het nieuws.",
    correctAnswer: "zal",
    explanationTr: "Tahmin/ihtimal. 'Het' için 'zal' kullanılır.",
    explanationEn: "Guess/probability. 'zal' is used for 'Het'."
  },
  {
    id: "q_fut_029",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Ze is heel laat. Ze ___ de trein wel gemist hebben.",
    options: ["zal", "heeft", "is"],
    correctAnswer: "zal",
    explanationTr: "Olasılık belirtiyor: 'Trenini kaçırmış olmalı.' Bu yüzden 'zal' kullanılır.",
    explanationEn: "Indicates probability: 'She must have missed her train.' Therefore 'zal' is used."
  },
  {
    id: "q_fut_030",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Waar is Ali? Hij ___ (zullen) wel thuis zijn.",
    correctAnswer: "zal",
    explanationTr: "'Ali nerede? Muhtemelen evdedir.' anlamı veren 'zal wel' kalıbı kullanılmıştır.",
    explanationEn: "'Where is Ali? He is probably at home.' The 'zal wel' pattern gives this meaning."
  },
  {
    id: "q_fut_031",
    type: "multiple_choice",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Wat is de functie van 'zullen' in: 'Dat zal wel veel geld kosten!'?",
    options: ["Een belofte (Söz/Vaat)", "Een waarschijnlijkheid (Olasılık/Tahmin)", "Een voorstel (Teklif)"],
    correctAnswer: "Een waarschijnlijkheid (Olasılık/Tahmin)",
    explanationTr: "'Bu muhtemelen çok paraya mal olur!' güçlü bir tahmin/olasılık ifade eder.",
    explanationEn: "'That will probably cost a lot of money!' expresses a strong guess/probability."
  },
  {
    id: "q_fut_032",
    type: "fill_in",
    tags: ["future_tenses", "zullen", "zullen_probability"],
    questionNl: "Het ___ (zullen) wel kloppen, hij is immers de expert.",
    correctAnswer: "zal",
    explanationTr: "'Muhtemelen doğrudur' anlamında bir olasılık. 'Het' için 'zal' kullanılır.",
    explanationEn: "A probability meaning 'It's probably correct'. For 'Het', 'zal' is used."
  },
  {
    id: "q_fut_033",
    type: "fill_in",
    tags: ["future_tenses", "word_order", "zullen"],
    questionNl: "Ik zal je morgen in de klas het boek ___ (geven).",
    correctAnswer: "geven",
    explanationTr: "'Zal' yardımcı fiil olduğu için asıl fiil olan 'geven' cümlenin EN SONUNA mastar olarak gider.",
    explanationEn: "Because 'Zal' is an auxiliary verb, the main verb 'geven' goes to the VERY END of the sentence as an infinitive."
  },
  {
    id: "q_fut_034",
    type: "multiple_choice",
    tags: ["future_tenses", "word_order", "future_gaan"],
    questionNl: "Morgen ga ik met mijn vrienden in de stad ___.",
    options: ["eten", "gegeten", "eet"],
    correctAnswer: "eten",
    explanationTr: "Gelecek zamanı yapan 'ga' (gaan) yardımcı fiildir, asıl fiil olan 'eten' cümlenin sonunda mastar halinde bulunur.",
    explanationEn: "The auxiliary 'ga' (gaan) creates the future tense, so the main verb 'eten' is at the end of the sentence as an infinitive."
  },
  {
    id: "q_fut_035",
    type: "fill_in",
    tags: ["future_tenses", "word_order", "zullen"],
    questionNl: "Waarom zal de trein vandaag te laat ___ (aankomen)?",
    correctAnswer: "aankomen",
    explanationTr: "'Zal' kullanıldığı için 'aankomen' (ayrılabilen bir fiil olsa da) ayrılmadan cümlenin sonuna gider.",
    explanationEn: "Because 'Zal' is used, 'aankomen' (even though it's a separable verb) goes to the end of the sentence without splitting."
  },
  {
    id: "q_fut_036",
    type: "multiple_choice",
    tags: ["future_tenses", "word_order", "future_gaan"],
    questionNl: "Zij gaan het oude huis aan de rivier ___ (verkopen).",
    options: ["verkoopt", "verkocht", "verkopen"],
    correctAnswer: "verkopen",
    explanationTr: "'Gaan' yardımcı fiili asıl eylemi sona (verkopen) atar.",
    explanationEn: "The auxiliary verb 'Gaan' pushes the main action to the end (verkopen)."
  },
  {
    id: "q_fut_037",
    type: "fill_in",
    tags: ["future_tenses", "word_order", "zullen", "questions"],
    questionNl: "Zal ik je straks even ___ (bellen)?",
    correctAnswer: "bellen",
    explanationTr: "Soru cümlesinde (Zal ik...) ana eylem cümlenin sonunda olur (bellen).",
    explanationEn: "In a question sentence (Zal ik...), the main action is at the end of the sentence (bellen)."
  },
  {
    id: "q_fut_038",
    type: "multiple_choice",
    tags: ["future_tenses", "word_order", "zullen"],
    questionNl: "We zullen de hele avond naar goede muziek ___.",
    options: ["luister", "luisteren", "geluisterd"],
    correctAnswer: "luisteren",
    explanationTr: "Yardımcı fiil 'zullen', ana fiili 'luisteren' mastar olarak cümlenin sonuna atar.",
    explanationEn: "The auxiliary verb 'zullen' pushes the main verb 'luisteren' as an infinitive to the end of the sentence."
  },
  {
    id: "q_fut_039",
    type: "fill_in",
    tags: ["future_tenses", "word_order", "future_gaan"],
    questionNl: "Gaat hij volgende week donderdag op vakantie ___ (vertrekken)?",
    correctAnswer: "vertrekken",
    explanationTr: "'Gaat' fiili kullanıldığı için 'vertrekken' sonda ve mastar (infinitief) olmalıdır.",
    explanationEn: "Because the verb 'Gaat' is used, 'vertrekken' must be at the end and as an infinitive."
  },
  {
    id: "q_fut_040",
    type: "multiple_choice",
    tags: ["future_tenses", "word_order", "zullen", "zullen_proposal"],
    questionNl: "Zullen we hier op deze bank ___?",
    options: ["zitten", "gezeten", "zit"],
    correctAnswer: "zitten",
    explanationTr: "Bir teklif olan 'Zullen we...' yapısında ana eylem cümlenin sonunda yer alır (zitten).",
    explanationEn: "In the proposal structure 'Zullen we...', the main action is placed at the end of the sentence (zitten)."
  },
  {
    id: "q_read_fut_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "future_tenses", "future_gaan"],
    questionNl: "Lees de tekst: 'Hoi, ik ben Tim. Volgende week is mijn vriendin jarig. Ik ga een groot feest voor haar organiseren. Ik zal de boodschappen doen en ik zal ook een taart bakken. Ze zal wel heel blij zijn! We gaan al onze vrienden uitnodigen.'\n\nWat is Tim van plan? (Niyeti nedir?)",
    options: ["Hij gaat een feest organiseren", "Hij gaat op vakantie", "Hij gaat verhuizen"],
    correctAnswer: "Hij gaat een feest organiseren",
    explanationTr: "Metinde 'Ik ga een groot feest voor haar organiseren' (Onun için büyük bir parti organize edeceğim) yazıyor.",
    explanationEn: "The text says 'Ik ga een groot feest voor haar organiseren' (I am going to organize a big party for her)."
  },
  {
    id: "q_read_fut_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "future_tenses", "zullen_promise"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat is de functie van 'zullen' in de zin: 'Ik zal de boodschappen doen'?",
    options: ["Een belofte (Söz vermek)", "Een waarschijnlijkheid (Olasılık)", "Een gewoonte (Alışkanlık)"],
    correctAnswer: "Een belofte (Söz vermek)",
    explanationTr: "'Alışverişi ben yapacağım' diyerek kız arkadaşına veya okuyucuya bir nevi söz vermektedir (belofte).",
    explanationEn: "By saying 'I will do the groceries', he is essentially making a promise (belofte) to his girlfriend or the reader."
  },
  {
    id: "q_read_fut_043",
    type: "multiple_choice",
    tags: ["reading_comprehension", "future_tenses", "zullen_probability"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat betekent de zin: 'Ze zal wel heel blij zijn!'?",
    options: ["Het is heel waarschijnlijk (olası) dat ze blij is.", "Ik beloof dat ze blij is.", "Ze was gisteren blij."],
    correctAnswer: "Het is heel waarschijnlijk (olası) dat ze blij is.",
    explanationTr: "'zal wel' yapısı, güçlü bir ihtimal/tahmin (waarschijnlijkheid) belirtir: 'Kesin çok mutlu olacak!'.",
    explanationEn: "The 'zal wel' structure indicates a strong probability/guess (waarschijnlijkheid): 'She will surely be very happy!'."
  },
  {
    id: "q_read_fut_044",
    type: "fill_in",
    tags: ["reading_comprehension", "future_tenses", "future_gaan"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul de zin aan (kijk naar de tekst): 'We ___ (gaan) al onze vrienden uitnodigen.'",
    correctAnswer: "gaan",
    explanationTr: "Özne 'We' olduğu için plan belirten 'gaan' yardımcı fiili mastar halinde kullanılır.",
    explanationEn: "Because the subject is 'We', the auxiliary verb 'gaan' indicating a plan is used in the infinitive."
  },
  {
    id: "q_read_fut_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "word_order", "future_gaan"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWaarom staat het woord 'organiseren' helemaal aan het einde van de zin 'Ik ga een groot feest voor haar organiseren'?",
    options: ["Omdat 'gaan' als hulpwerkwoord wordt gebruikt.", "Omdat het in de verleden tijd staat.", "Omdat het een bijzin is."],
    correctAnswer: "Omdat 'gaan' als hulpwerkwoord wordt gebruikt.",
    explanationTr: "'Gaan' yardımcı fiil olarak kullanıldığında asıl eylem her zaman cümlenin sonuna gider.",
    explanationEn: "When 'Gaan' is used as an auxiliary verb, the main action always goes to the end of the sentence."
  },
  {
    id: "q_read_fut_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "future_tenses", "future_presens"],
    questionNl: "Lees de tekst: 'De directeur is ziek vandaag. De vergadering gaat niet door. Morgen komt hij wel naar kantoor. We zullen de vergadering dan houden. Ik denk dat het een lange vergadering zal worden. Zullen we koffie meenemen? Ja, dat is een goed idee.'\n\nWelke zin gebruikt het presens (şimdiki zaman) om over de toekomst te praten?",
    options: ["Morgen komt hij wel naar kantoor.", "De directeur is ziek vandaag.", "Ik denk dat het een lange vergadering zal worden."],
    correctAnswer: "Morgen komt hij wel naar kantoor.",
    explanationTr: "'Morgen' (Yarın) kelimesi ile gelecek belirtilirken 'komt' (şimdiki zaman) fiili kullanılmıştır.",
    explanationEn: "While 'Morgen' (Tomorrow) indicates the future, the present tense verb 'komt' is used."
  },
  {
    id: "q_read_fut_047",
    type: "fill_in",
    tags: ["reading_comprehension", "future_tenses", "zullen"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul aan: 'We ___ (zullen) de vergadering dan houden.'",
    correctAnswer: "zullen",
    explanationTr: "'We' çoğul özne olduğu için resmi bir kararı ifade eden 'zullen' mastar olarak kullanılır.",
    explanationEn: "Because 'We' is a plural subject, 'zullen' expressing a formal decision is used as an infinitive."
  },
  {
    id: "q_read_fut_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "future_tenses", "zullen_proposal"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat is de functie van de vraag: 'Zullen we koffie meenemen?'",
    options: ["Een voorstel (Öneri / Teklif)", "Een waarschijnlijkheid (Olasılık)", "Een belofte (Söz)"],
    correctAnswer: "Een voorstel (Öneri / Teklif)",
    explanationTr: "'Zullen we...?' (Yapalım mı?) kalıbı her zaman birisine teklif veya öneri sunarken kullanılır.",
    explanationEn: "The pattern 'Zullen we...?' (Shall we...?) is always used when making a proposal or suggestion to someone."
  },
  {
    id: "q_read_fut_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "word_order", "zullen"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nIn de zin 'Ik denk dat het een lange vergadering zal worden', waarom staat 'worden' op het einde?",
    options: ["Omdat 'zal' (zullen) het andere werkwoord naar het einde van de zin stuurt.", "Omdat het woord 'denk' in de zin staat.", "Omdat het een vraag is."],
    correctAnswer: "Omdat 'zal' (zullen) het andere werkwoord naar het einde van de zin stuurt.",
    explanationTr: "'Zal' yardımcı fiil olduğu için asıl fiil olan 'worden'i cümlenin sonuna itmiştir.",
    explanationEn: "Because 'Zal' is an auxiliary verb, it pushed the main verb 'worden' to the end of the sentence."
  },
  {
    id: "q_read_fut_050",
    type: "fill_in",
    tags: ["reading_comprehension", "future_tenses", "future_presens"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul in: 'Morgen ___ (komen) hij wel naar kantoor.'",
    correctAnswer: "komt",
    explanationTr: "'Morgen' (zaman) ile başlayan devrik (inversie) cümlede 'hij' için 'komt' çekimi kullanılır.",
    explanationEn: "In the inversion starting with 'Morgen' (time), the conjugation 'komt' is used for 'hij'."
  },
  
  {
    id: "q_er_cont_001",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "___ (Er/Daar) is geen plaats meer in het restaurant.",
    correctAnswer: "Er",
    explanationTr: "Cümlede belirli bir özne yoksa ve belirsiz bir durumdan ('geen plaats' - yer yok) bahsediliyorsa cümleye 'Er' ile başlanır. (İngilizcedeki 'There is' gibi).",
    explanationEn: "If the sentence lacks a definite subject and talks about an indefinite situation ('geen plaats' - no room), the sentence starts with 'Er'. (Like 'There is' in English)."
  },
  {
    id: "q_er_cont_002",
    type: "multiple_choice",
    tags: ["er_daar", "verbs_present"],
    questionNl: "___ zijn veel problemen met het nieuwe programma.",
    options: ["Er", "Daar", "Het"],
    correctAnswer: "Er",
    explanationTr: "Özne 'veel problemen' (belirsiz ve çoğul) olduğu için cümlenin başında 'Er' kullanılır.",
    explanationEn: "Because the subject is 'veel problemen' (indefinite and plural), 'Er' is used at the beginning of the sentence."
  },
  {
    id: "q_er_cont_003",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "Er ___ (zitten) vijf studenten in de groep.",
    correctAnswer: "zitten",
    explanationTr: "'Er' cümleye başlar ama asıl özne 'vijf studenten' (çoğul) olduğu için fiil de çoğul (zitten) olur.",
    explanationEn: "'Er' starts the sentence, but the real subject is 'vijf studenten' (plural), so the verb is plural (zitten)."
  },
  {
    id: "q_er_cont_004",
    type: "multiple_choice",
    tags: ["er_daar", "word_order"],
    questionNl: "Waarom gebruiken we 'Er' in de zin: 'Er loopt een kat in de tuin.'?",
    options: ["Omdat 'een kat' een indefiniet subject is.", "Omdat we nadruk (vurgu) leggen op de tuin.", "Omdat de kat specifiek is."],
    correctAnswer: "Omdat 'een kat' een indefiniet subject is.",
    explanationTr: "'een kat' (bir kedi) belirsiz bir öznedir. Belirsiz öznelerle Hollandacada genellikle 'Er' yapısı kullanılır.",
    explanationEn: "'een kat' (a cat) is an indefinite subject. With indefinite subjects, the 'Er' structure is typically used in Dutch."
  },
  {
    id: "q_er_cont_005",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "Er ___ (staan) een man voor de deur. Ken jij hem?",
    correctAnswer: "staat",
    explanationTr: "Özne 'een man' (tekil ve belirsiz). Bu yüzden 'staan' fiili 3. tekil şahıs formunda 'staat' olur.",
    explanationEn: "The subject is 'een man' (singular and indefinite). Therefore, the verb 'staan' becomes 'staat' in the 3rd person singular form."
  },
  {
    id: "q_er_cont_006",
    type: "multiple_choice",
    tags: ["er_daar", "negation"],
    questionNl: "Er is ___ (geen/niet) suiker meer in huis.",
    options: ["geen", "niet"],
    correctAnswer: "geen",
    explanationTr: "'suiker' (şeker) belirsiz bir kelime olduğu için 'geen' ile olumsuz yapılır. 'Er is geen suiker' (Şeker yok).",
    explanationEn: "Because 'suiker' (sugar) is an indefinite word, it is negated with 'geen'. 'Er is geen suiker' (There is no sugar)."
  },
  {
    id: "q_er_cont_007",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "___ (Er) liggen twee boeken op de tafel.",
    correctAnswer: "Er",
    explanationTr: "'twee boeken' (iki kitap) belirsiz bir öznedir (hangi iki kitap olduğu belli değil). 'Er' ile başlanır.",
    explanationEn: "'twee boeken' (two books) is an indefinite subject (we don't know which two). It starts with 'Er'."
  },
  {
    id: "q_er_cont_008",
    type: "multiple_choice",
    tags: ["er_daar"],
    questionNl: "Kies de juiste zin:",
    options: ["Er zijn een probleem.", "Er is veel problemen.", "Er is een probleem."],
    correctAnswer: "Er is een probleem.",
    explanationTr: "'een probleem' tekil olduğu için 'is' kullanılır. 'veel problemen' çoğul olduğu için 'zijn' gerektirirdi.",
    explanationEn: "'een probleem' is singular, so 'is' is used. 'veel problemen' is plural and would require 'zijn'."
  },
  {
    id: "q_er_cont_009",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "Er ___ (werken) hier twintig mensen.",
    correctAnswer: "werken",
    explanationTr: "'twintig mensen' (yirmi insan) çoğul bir özne olduğu için fiil mastar (werken) halindedir.",
    explanationEn: "'twintig mensen' (twenty people) is a plural subject, so the verb is in the infinitive (werken)."
  },
  {
    id: "q_er_cont_010",
    type: "multiple_choice",
    tags: ["er_daar", "word_order"],
    questionNl: "In welke zin is 'Er' correct gebruikt?",
    options: ["Er is de man ziek.", "Er zijn de studenten hier.", "Er zit een vogel in de boom."],
    correctAnswer: "Er zit een vogel in de boom.",
    explanationTr: "'Er' yapısı BELİRLİ öznelerle (de man, de studenten) KULLANILMAZ. 'een vogel' (bir kuş) belirsizdir, bu yüzden doğrudur.",
    explanationEn: "The 'Er' structure is NOT USED with DEFINITE subjects (de man, de studenten). 'een vogel' (a bird) is indefinite, so it's correct."
  },
  {
    id: "q_er_cont_011",
    type: "multiple_choice",
    tags: ["er_daar"],
    questionNl: "Ik ga naar Parijs. ___ (Daar/Er) is het nu heel gezellig.",
    options: ["Daar", "Er"],
    correctAnswer: "Daar",
    explanationTr: "Cümlenin başında yer (Parijs) için VURGU (accent) yapmak isteniyorsa 'Daar' (Orada) kullanılır. 'Er' cümlenin başına yer anlamıyla gelemez.",
    explanationEn: "If you want to put EMPHASIS on the place (Paris) at the beginning of the sentence, 'Daar' (There) is used. 'Er' cannot start a sentence to mean a place."
  },
  {
    id: "q_er_cont_012",
    type: "fill_in",
    tags: ["er_daar"],
    questionNl: "Ik ben ___ (er/daar) morgenochtend niet.",
    correctAnswer: "er",
    explanationTr: "Yer bildirirken vurgu yoksa ve cümlenin ortasında yer alıyorsa 'er' (orada) kullanılır.",
    explanationEn: "When indicating a place without emphasis and in the middle of the sentence, 'er' (there) is used."
  },
  {
    id: "q_er_cont_013",
    type: "multiple_choice",
    tags: ["er_daar", "word_order"],
    questionNl: "Kan 'Er' op de eerste plaats van de zin staan om een PLAATS (yer) aan te geven?",
    options: ["Ja", "Nee"],
    correctAnswer: "Nee",
    explanationTr: "Hayır. Eğer cümlenin başına 'Orada' anlamında bir kelime koyacaksanız, bu DAİMA 'Daar' olmalıdır. 'Er' vurgusuzdur ve başa gelemez.",
    explanationEn: "No. If you want to start a sentence with a word meaning 'There' as a place, it MUST be 'Daar'. 'Er' is unstressed and cannot be first."
  },
  {
    id: "q_er_cont_014",
    type: "fill_in",
    tags: ["er_daar", "inversion"],
    questionNl: "___ (Daar/Er) in Thailand is het zes uur later.",
    correctAnswer: "Daar",
    explanationTr: "Cümlenin en başında Tayland'a özel bir vurgu yapılıyor. Bu yüzden 'Daar' kullanılır.",
    explanationEn: "There is a specific emphasis on Thailand at the very beginning of the sentence. Therefore, 'Daar' is used."
  },
  {
    id: "q_er_cont_015",
    type: "multiple_choice",
    tags: ["er_daar"],
    questionNl: "Ga je vanavond naar het feest? Ja, ik ben ___ zeker!",
    options: ["daar", "er"],
    correctAnswer: "er",
    explanationTr: "Özel bir vurgu yok, 'Evet, orada olacağım' anlamında cümlenin ortasında 'er' kullanılır.",
    explanationEn: "No special emphasis, meaning 'Yes, I'll be there'. In the middle of the sentence, 'er' is used."
  },
  {
    id: "q_er_cont_016",
    type: "fill_in",
    tags: ["er_daar"],
    questionNl: "Waar zijn mijn sleutels? Oh, ze liggen ___ (daar) op tafel!",
    correctAnswer: "daar",
    explanationTr: "Masadaki spesifik bir yeri işaret edip gösterdiğimiz için (İşte orada!) 'daar' kelimesi daha uygundur.",
    explanationEn: "Because we are pointing to a specific place on the table (Right there!), 'daar' is more appropriate."
  },
  {
    id: "q_er_cont_017",
    type: "multiple_choice",
    tags: ["er_daar", "past_tenses"],
    questionNl: "Ben je wel eens in Londen geweest? Ja, ik ben ___ vorig jaar geweest.",
    options: ["er", "daar", "het"],
    correctAnswer: "er",
    explanationTr: "Londen hakkında konuşulurken vurgusuz yer bildirmek için cümlenin ortasında 'er' kullanılır.",
    explanationEn: "When talking about London, 'er' is used in the middle of the sentence to indicate the place without emphasis."
  },
  {
    id: "q_er_cont_018",
    type: "fill_in",
    tags: ["er_daar", "inversion"],
    questionNl: "___ (Daar) woont de koning van Nederland.",
    correctAnswer: "Daar",
    explanationTr: "'Orada Hollanda kralı yaşıyor.' Cümle başına vurgulu yer geldiği için 'Daar' kullanılır.",
    explanationEn: "'There lives the king of the Netherlands.' Because it starts with a stressed place, 'Daar' is used."
  },
  {
    id: "q_er_cont_019",
    type: "multiple_choice",
    tags: ["er_daar", "word_order"],
    questionNl: "Ik woon al tien jaar in Utrecht. Ik woon ___ heel erg graag.",
    options: ["daar", "er", "hier"],
    correctAnswer: "er",
    explanationTr: "'er', cümlenin ortasında Utrecht'e atıfta bulunarak 'orada' (vurgusuz) anlamına gelir.",
    explanationEn: "'er' refers back to Utrecht in the middle of the sentence meaning 'there' (unstressed)."
  },
  {
    id: "q_er_cont_020",
    type: "fill_in",
    tags: ["er_daar"],
    questionNl: "Heb je suiker? Nee, ik heb ___ (er) geen.",
    correctAnswer: "er",
    explanationTr: "'Er', miktar veya sayı belirtirken de kullanılır ('Bende ondan hiç yok'). 'Ik heb er geen' çok yaygın bir kalıptır.",
    explanationEn: "'Er' is also used when indicating quantity/number ('I have none of it'). 'Ik heb er geen' is a very common phrase."
  },
  {
    id: "q_cont_021",
    type: "multiple_choice",
    tags: ["continuous", "verbs_present"],
    questionNl: "Wat doe je? Ik ___ aan het koken.",
    options: ["ben", "is", "heb"],
    correctAnswer: "ben",
    explanationTr: "Şimdiki zaman hikayesi (Şu an yapıyorum) 'zijn + aan het + infinitief' ile yapılır. 'Ik' için 'ben' kullanılır.",
    explanationEn: "Present continuous (I am doing right now) is formed with 'zijn + aan het + infinitive'. For 'Ik', 'ben' is used."
  },
  {
    id: "q_cont_022",
    type: "fill_in",
    tags: ["continuous", "verbs_present"],
    questionNl: "We zijn aan het ___ (fietsen).",
    correctAnswer: "fietsen",
    explanationTr: "'Aan het' kalıbından sonra asıl eylem her zaman MASTAR (infinitief) halinde yazılır.",
    explanationEn: "After the 'aan het' structure, the main action is always written in the INFINITIVE form."
  },
  {
    id: "q_cont_023",
    type: "fill_in",
    tags: ["continuous", "word_order"],
    questionNl: "Wat ___ (zijn) je aan het doen?",
    correctAnswer: "ben",
    explanationTr: "Soru cümlesinde 'je' (sen) için 'zijn' fiilinin çekimi 'ben' olur. (Ben je aan het...).",
    explanationEn: "In a question, the conjugation of 'zijn' for 'je' (you) is 'ben'. (Ben je aan het...)."
  },
  {
    id: "q_cont_024",
    type: "multiple_choice",
    tags: ["continuous"],
    questionNl: "Wat betekent: 'Hij is aan het slapen'?",
    options: ["Hij gaat morgen slapen.", "Hij slaapt precies op dit moment.", "Hij heeft gisteren geslapen."],
    correctAnswer: "Hij slaapt precies op dit moment.",
    explanationTr: "'aan het' kalıbı eylemin TAM OLARAK ŞU ANDA (precies op dit moment) devam ettiğini gösterir.",
    explanationEn: "The 'aan het' structure shows that the action is ongoing EXACTLY RIGHT NOW (precies op dit moment)."
  },
  {
    id: "q_cont_025",
    type: "fill_in",
    tags: ["continuous", "verbs_present"],
    questionNl: "Jullie ___ (zijn) aan het studeren voor het examen.",
    correctAnswer: "zijn",
    explanationTr: "Çoğul (Jullie) özne için 'zijn' yardımcı fiili 'zijn' olarak kalır.",
    explanationEn: "For the plural (Jullie) subject, the auxiliary verb 'zijn' remains 'zijn'."
  },
  {
    id: "q_cont_026",
    type: "multiple_choice",
    tags: ["continuous", "verbs_present"],
    questionNl: "Zij (zij-singularis) ___ aan het lezen in de tuin.",
    options: ["ben", "is", "zijn"],
    correctAnswer: "is",
    explanationTr: "Tekil 'Zij' (o kadın) için 'zijn' fiili 'is' olur.",
    explanationEn: "For the singular 'Zij' (she), the verb 'zijn' becomes 'is'."
  },
  {
    id: "q_cont_027",
    type: "multiple_choice",
    tags: ["continuous", "word_order"],
    questionNl: "Kies de juiste woordvolgorde (cümle dizilimi):",
    options: ["Ik ben aan het schoonmaken mijn kamer.", "Ik ben mijn kamer aan het schoonmaken.", "Ik aan het schoonmaken ben mijn kamer."],
    correctAnswer: "Ik ben mijn kamer aan het schoonmaken.",
    explanationTr: "Nesne (mijn kamer), yardımcı fiil (ben) ile 'aan het' yapısının ARASINA girer.",
    explanationEn: "The object (mijn kamer) goes BETWEEN the auxiliary verb (ben) and the 'aan het' structure."
  },
  {
    id: "q_cont_028",
    type: "fill_in",
    tags: ["continuous"],
    questionNl: "Mijn broer is de auto aan het ___ (wassen).",
    correctAnswer: "wassen",
    explanationTr: "'Aan het' kalıbından sonra fiil mastar (wassen) halindedir.",
    explanationEn: "After the 'aan het' pattern, the verb is in the infinitive (wassen)."
  },
  {
    id: "q_cont_029",
    type: "fill_in",
    tags: ["continuous", "word_order", "verbs_present"],
    questionNl: "Wat ___ (doen) je? Ik ben aan het eten.",
    correctAnswer: "doe",
    explanationTr: "Soru kısmı: 'Wat doe je?' (Ne yapıyorsun?). 'je' fiilden sonra olduğu için 't' düştü.",
    explanationEn: "Question part: 'Wat doe je?' (What are you doing?). 't' is dropped because 'je' follows the verb."
  },
  {
    id: "q_cont_030",
    type: "multiple_choice",
    tags: ["continuous", "questions"],
    questionNl: "___ de kinderen buiten aan het spelen?",
    options: ["Ben", "Is", "Zijn"],
    correctAnswer: "Zijn",
    explanationTr: "'De kinderen' (çocuklar) çoğul olduğu için soru cümlesine 'Zijn' ile başlanır.",
    explanationEn: "Because 'De kinderen' (the children) is plural, the question starts with 'Zijn'."
  },
  {
    id: "q_cont_031",
    type: "fill_in",
    tags: ["continuous", "er_daar"],
    questionNl: "Er ___ (zijn) iemand aan de deur aan het kloppen.",
    correctAnswer: "is",
    explanationTr: "Hem 'Er' kullanımı hem de continuous var. Özne 'iemand' (biri) tekil olduğu için 'is' kullanılır.",
    explanationEn: "Both 'Er' and continuous usage. The subject 'iemand' (someone) is singular, so 'is' is used."
  },
  {
    id: "q_cont_032",
    type: "fill_in",
    tags: ["continuous"],
    questionNl: "We zijn naar muziek ___ (aan) het luisteren.",
    correctAnswer: "aan",
    explanationTr: "'Aan het' kalıbının ayrılmaz bir parçası olan 'aan' kelimesi boşluğa gelmelidir.",
    explanationEn: "The word 'aan', which is an inseparable part of the 'aan het' pattern, should fill the blank."
  },
  {
    id: "q_cont_033",
    type: "multiple_choice",
    tags: ["continuous", "negation"],
    questionNl: "Er is niemand. We zijn alleen aan het ___.",
    options: ["wacht", "wachten", "gewacht"],
    correctAnswer: "wachten",
    explanationTr: "'Aan het' yapısı her zaman fiilin mastarını (infinitief) ister: 'wachten'.",
    explanationEn: "The 'aan het' structure always requires the infinitive of the verb: 'wachten'."
  },
  {
    id: "q_cont_034",
    type: "multiple_choice",
    tags: ["continuous", "er_daar"],
    questionNl: "Waar is de kat? Hij is daar aan het ___.",
    options: ["slapen", "slaapt", "slaap"],
    correctAnswer: "slapen",
    explanationTr: "Hem yer bildiren 'daar' hem de continuous kalıbı 'aan het' var. 'Aan het' mastar ister (slapen).",
    explanationEn: "Contains both the place indicator 'daar' and the continuous pattern 'aan het'. 'Aan het' takes the infinitive (slapen)."
  },
  {
    id: "q_cont_035",
    type: "fill_in",
    tags: ["er_daar", "negation"],
    questionNl: "___ (Er) is geen suiker meer in de koffie.",
    correctAnswer: "Er",
    explanationTr: "Belirsiz 'geen suiker' (şeker yok) durumundan bahsederken cümleye 'Er' ile başlanır.",
    explanationEn: "When talking about the indefinite 'geen suiker' (no sugar), the sentence starts with 'Er'."
  },
  {
    id: "q_cont_036",
    type: "fill_in",
    tags: ["continuous"],
    questionNl: "Wat ben jij aan ___ (het) doen?",
    correctAnswer: "het",
    explanationTr: "Şimdiki zamanın devamlılığı 'zijn + aan + het + infinitief' formülüyle sağlanır.",
    explanationEn: "Present continuous is formed with the formula 'zijn + aan + het + infinitive'."
  },
  {
    id: "q_cont_037",
    type: "multiple_choice",
    tags: ["continuous", "verbs_present"],
    questionNl: "Ik heb geen tijd, ik ___ aan het werken.",
    options: ["ben", "is", "heb"],
    correctAnswer: "ben",
    explanationTr: "'Ik' için yardımcı fiil 'ben'dir.",
    explanationEn: "The auxiliary verb for 'Ik' is 'ben'."
  },
  {
    id: "q_cont_038",
    type: "fill_in",
    tags: ["er_daar", "verbs_present"],
    questionNl: "Er ___ (staan) een grote boom in onze tuin.",
    correctAnswer: "staat",
    explanationTr: "Özne 'een grote boom' (tekil) olduğu için 'staan' fiili 'staat' olur.",
    explanationEn: "Since the subject is 'een grote boom' (singular), the verb 'staan' becomes 'staat'."
  },
  {
    id: "q_cont_039",
    type: "multiple_choice",
    tags: ["er_daar", "continuous"],
    questionNl: "Wat is het verschil tussen 'Er is een man aan het koken' en 'Daar is een man aan het koken'?",
    options: ["'Daar' legt de nadruk (vurgu) op de plaats.", "'Er' is meervoud.", "Er is geen verschil."],
    correctAnswer: "'Daar' legt de nadruk (vurgu) op de plaats.",
    explanationTr: "'Daar' kullanıldığında 'ORADA' diyerek yere özel bir vurgu yapılmış olur.",
    explanationEn: "When 'Daar' is used, it means 'THERE', placing special emphasis on the location."
  },
  {
    id: "q_cont_040",
    type: "fill_in",
    tags: ["continuous", "questions"],
    questionNl: "___ (Zijn) u een boek aan het lezen, meneer?",
    correctAnswer: "Bent",
    explanationTr: "Resmi 'u' zamiri için 'zijn' fiili soru cümlesinde 'Bent' şeklindedir.",
    explanationEn: "For the formal pronoun 'u', the verb 'zijn' takes the form 'Bent' in a question."
  },
  {
    id: "q_read_ercont_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "er_daar"],
    questionNl: "Lees de tekst: 'Hoi, ik ben Lotte. Er is vandaag een groot feest in de stad. Daar zijn veel mensen. Ik ben me nu aan het klaarmaken. Mijn vriend is al aan het wachten.'\n\nWaarom gebruikt men 'Er is' in 'Er is vandaag een groot feest'?",
    options: ["Omdat 'een groot feest' een indefiniet (belirsiz) subject is.", "Omdat het in de stad is.", "Omdat Lotte spreekt."],
    correctAnswer: "Omdat 'een groot feest' een indefiniet (belirsiz) subject is.",
    explanationTr: "'Bir parti var' derken 'een groot feest' belirsizdir, bu yüzden cümleye 'Er' ile başlanmıştır.",
    explanationEn: "When saying 'There is a big party', 'een groot feest' is indefinite, so the sentence starts with 'Er'."
  },
  {
    id: "q_read_ercont_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "er_daar"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nNaar welke plaats verwijst het woord 'Daar' in de zin 'Daar zijn veel mensen'?",
    options: ["Lotte's huis", "De stad", "Het feest"],
    correctAnswer: "De stad",
    explanationTr: "'Daar' (Orada), bir önceki cümlede bahsedilen 'de stad' (şehir) lokasyonuna vurgu yapmaktadır.",
    explanationEn: "'Daar' (There) emphasizes the location 'de stad' (the city) mentioned in the previous sentence."
  },
  {
    id: "q_read_ercont_043",
    type: "fill_in",
    tags: ["reading_comprehension", "continuous", "reflexive_verbs"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul in: Lotte is zich aan het ___ (klaarmaken).",
    correctAnswer: "klaarmaken",
    explanationTr: "Metinde 'Ik ben me nu aan het klaarmaken' diyor. 'Aan het' kalıbından sonra fiil mastar (klaarmaken) olur.",
    explanationEn: "The text says 'Ik ben me nu aan het klaarmaken'. After the 'Aan het' pattern, the verb is in the infinitive (klaarmaken)."
  },
  {
    id: "q_read_ercont_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "continuous"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat is de vriend van Lotte op dit moment aan het doen?",
    options: ["Hij is aan het wachten.", "Hij is zich aan het klaarmaken.", "Hij is op het feest."],
    correctAnswer: "Hij is aan het wachten.",
    explanationTr: "Metnin son cümlesi 'Mijn vriend is al aan het wachten' (Erkek arkadaşım zaten bekliyor) diyor.",
    explanationEn: "The last sentence of the text says 'Mijn vriend is al aan het wachten' (My boyfriend is already waiting)."
  },
  {
    id: "q_read_ercont_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "er_daar"],
    questionNl: "Lees de tekst: 'In mijn straat is een nieuw restaurant. Er werken veel mensen. We eten daar vaak. Nu zijn we er pizza aan het eten. Het is erg lekker.'\n\nWaarom zegt men 'Er werken veel mensen' en niet 'Daar werken veel mensen' in deze specifieke zin?",
    options: ["Omdat 'veel mensen' indefiniet is en er geen extra nadruk op de plaats is in deze nieuwe zin.", "Omdat het meervoud is.", "Omdat 'Er' altijd na 'restaurant' komt."],
    correctAnswer: "Omdat 'veel mensen' indefiniet is en er geen extra nadruk op de plaats is in deze nieuwe zin.",
    explanationTr: "Buradaki odak 'çok insanın çalışmasıdır' (belirsiz özne), mekanın kendisine özel bir vurgu yapmaya gerek duyulmamıştır.",
    explanationEn: "The focus here is on 'many people working' (indefinite subject), there is no need for extra emphasis on the place itself."
  },
  {
    id: "q_read_ercont_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "er_daar"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat betekent 'Daar' in de zin 'We eten daar vaak'?",
    options: ["In de straat", "In het nieuwe restaurant", "Pizza"],
    correctAnswer: "In het nieuwe restaurant",
    explanationTr: "'Daar' (Orada) kelimesi bahsedilen yeni restoranı işaret etmektedir.",
    explanationEn: "The word 'Daar' (There) points back to the new restaurant mentioned."
  },
  {
    id: "q_read_ercont_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "continuous"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat is de functie van de structuur 'zijn we er pizza aan het eten'?",
    options: ["Het geeft een gewoonte (alışkanlık) aan.", "Het geeft aan dat de actie NU (op dit moment) bezig is.", "Het is verleden tijd."],
    correctAnswer: "Het geeft aan dat de actie NU (op dit moment) bezig is.",
    explanationTr: "'aan het' kalıbı eylemin TAM OLARAK ŞU ANDA gerçekleştiğini gösterir. (Şu an pizza yiyoruz).",
    explanationEn: "The 'aan het' structure indicates that the action is happening EXACTLY RIGHT NOW. (We are eating pizza right now)."
  },
  {
    id: "q_read_ercont_048",
    type: "fill_in",
    tags: ["reading_comprehension", "continuous"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul in (kijk naar de tekst): 'Nu ___ (zijn) we er pizza aan het eten.'",
    correctAnswer: "zijn",
    explanationTr: "'we' (biz) çoğul öznesi için yardımcı fiil 'zijn' olarak kalır.",
    explanationEn: "For the plural subject 'we', the auxiliary verb remains 'zijn'."
  },
  {
    id: "q_read_ercont_049",
    type: "fill_in",
    tags: ["reading_comprehension", "er_daar", "verbs_present"],
    questionNl: "Lees de tekst: 'Waar is mijn telefoon? Er ligt een telefoon op de tafel. Is dat hem? Nee, daar ligt mijn oude telefoon. Ik ben nu overal aan het zoeken.'\n\nVul de zin in: '___ (Liggen) er een telefoon op de tafel?'",
    correctAnswer: "Ligt",
    explanationTr: "'een telefoon' tekil olduğu için 'liggen' fiili 'Ligt' olur.",
    explanationEn: "Because 'een telefoon' is singular, the verb 'liggen' becomes 'Ligt'."
  },
  {
    id: "q_read_ercont_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "continuous"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nWat is de ik-persoon precies nu aan het doen?",
    options: ["Aan het bellen", "Overal aan het zoeken", "De telefoon aan het verkopen"],
    correctAnswer: "Overal aan het zoeken",
    explanationTr: "Metnin sonunda 'Ik ben nu overal aan het zoeken' (Şu an her yerde arıyorum) diyor.",
    explanationEn: "At the end of the text, it says 'Ik ben nu overal aan het zoeken' (I am searching everywhere right now)."
  },
  
  {
    id: "q_conj_pron_001",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik koop koffie ___ ik koop brood.",
    options: ["en", "want", "dus"],
    correctAnswer: "en",
    explanationTr: "'En' (ve) bağlacı iki ana cümleyi birbirine bağlar ve kelime dizilimini (word order) değiştirmez.",
    explanationEn: "'En' (and) connects two main clauses and does not change the word order."
  },
  {
    id: "q_conj_pron_002",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Ik ga op vakantie naar Frankrijk ___ (ve) naar Spanje.",
    correctAnswer: "en",
    explanationTr: "Benzer fikirleri veya öğeleri bağlamak için 'en' kullanılır.",
    explanationEn: "To connect similar ideas or items, 'en' (and) is used."
  },
  {
    id: "q_conj_pron_003",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ga je vandaag naar de markt ___ blijf je thuis?",
    options: ["of", "en", "maar"],
    correctAnswer: "of",
    explanationTr: "'Of' (veya) iki seçenek sunan ana cümleleri birbirine bağlar. Dizilim değişmez.",
    explanationEn: "'Of' (or) connects main clauses presenting alternatives. Word order remains unchanged."
  },
  {
    id: "q_conj_pron_004",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Wil je thee ___ (veya) liever warme chocolademelk?",
    correctAnswer: "of",
    explanationTr: "Seçenek sunarken 'of' kullanılır.",
    explanationEn: "When offering choices, 'of' (or) is used."
  },
  {
    id: "q_conj_pron_005",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik heb niet veel geld, ___ ik ga dit jaar toch op vakantie.",
    options: ["maar", "want", "dus"],
    correctAnswer: "maar",
    explanationTr: "'Maar' (ama/fakat) zıtlık bildiren iki ana cümleyi bağlar. Dizilim (Subject + Verb) aynen kalır.",
    explanationEn: "'Maar' (but) connects contrasting main clauses. Word order (Subject + Verb) remains identical."
  },
  {
    id: "q_conj_pron_006",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Het huis is erg mooi, ___ (ama) het is veel te duur.",
    correctAnswer: "maar",
    explanationTr: "Zıtlık ifade eden iki cümleyi bağlamak için 'maar' kullanılır.",
    explanationEn: "To connect two contrasting clauses, 'maar' (but) is used."
  },
  {
    id: "q_conj_pron_007",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik ga niet mee naar de bioscoop, ___ ik voel me niet lekker.",
    options: ["want", "dus", "en"],
    correctAnswer: "want",
    explanationTr: "'Want' (çünkü) bir gerekçe/sebep bildirir. Arkasından gelen cümlede kelime dizilimi DEĞİŞMEZ (Hoofdzin yapısıdır).",
    explanationEn: "'Want' (because) expresses a reason. The clause following it retains standard main clause word order (unlike 'omdat')."
  },
  {
    id: "q_conj_pron_008",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Hij is vandaag heel moe, ___ (çünkü) hij heeft gisteren niet geslapen.",
    correctAnswer: "want",
    explanationTr: "Gerekçe belirtirken 'want' kullanılır ve ardından normal cümle dizilimi gelir.",
    explanationEn: "To state a reason, 'want' is used followed by normal sentence order."
  },
  {
    id: "q_conj_pron_009",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik heb zin in koffie, ___ ik ga naar de kantine.",
    options: ["dus", "want", "maar"],
    correctAnswer: "dus",
    explanationTr: "'Dus' (bu yüzden/öyleyse) bir sonuç bildirir. İki ana cümleyi bağlar ve dizilimi değiştirmez.",
    explanationEn: "'Dus' (so/therefore) indicates a consequence. It connects main clauses without changing word order."
  },
  {
    id: "q_conj_pron_010",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Het regent hard, ___ (bu yüzden) neem ik een paraplu mee.",
    correctAnswer: "dus",
    explanationTr: "Sonuç bildiren ana cümleleri birbirine bağlamak için 'dus' kullanılır.",
    explanationEn: "To connect main clauses indicating a result, 'dus' (so) is used."
  },
  {
    id: "q_conj_pron_011",
    type: "multiple_choice",
    tags: ["conjunctions", "word_order"],
    questionNl: "Wat is het belangrijkste kenmerk van de voegwoorden 'en, of, maar, want, dus' wat betreft de woordvolgorde?",
    options: ["Ze veranderen de woordvolgorde niet (ze verbinden hoofdzin + hoofdzin).", "Ze sturen de persoonsvorm naar het einde van de zin.", "Ze dwingen inversie af."],
    correctAnswer: "Ze veranderen de woordvolgorde niet (ze verbinden hoofdzin + hoofdzin).",
    explanationTr: "Bu 5 bağlaç iki ana cümleyi (hoofdzin) birbirine bağlar; dolayısıyla sonraki cümlede Özne + Fiil dizilimi bozulmaz.",
    explanationEn: "These 5 conjunctions connect two main clauses; thus, the Subject + Verb order in the following clause is preserved."
  },
  {
    id: "q_conj_pron_012",
    type: "multiple_choice",
    tags: ["independent_pronouns", "articles_plurals"],
    questionNl: "Wat vind je van deze kaas? ___ vind ik erg lekker.",
    options: ["Die", "Dat", "Dit"],
    correctAnswer: "Die",
    explanationTr: "Bağımsız işaret zamiri: 'Kaas' bir de-woord'dur (de kaas). Tekil bir de-woord ismin yerine geçerken 'Die' kullanılır.",
    explanationEn: "Independent demonstrative pronoun: 'Kaas' is a de-word. When replacing a singular de-word noun, 'Die' is used."
  },
  {
    id: "q_conj_pron_013",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Waar is tante Lena? ___ (O) moest helaas tot laat werken.",
    correctAnswer: "Die",
    explanationTr: "Kişilere (tante Lena) bağımsız olarak atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to people (tante Lena), 'Die' is used."
  },
  {
    id: "q_conj_pron_014",
    type: "multiple_choice",
    tags: ["independent_pronouns", "articles_plurals"],
    questionNl: "We zien zo het Naardermeer. ___ is een prachtig natuurgebied.",
    options: ["Die", "Dat", "Deze"],
    correctAnswer: "Dat",
    explanationTr: "Bağımsız işaret zamiri: 'Naardermeer' bir het-woord'dur (het meer). Tekil het-woord yerine 'Dat' kullanılır.",
    explanationEn: "Independent demonstrative pronoun: 'Naardermeer' is a het-word. 'Dat' is used to replace a singular het-word."
  },
  {
    id: "q_conj_pron_015",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Waar zijn Tom en Marit? ___ (Onlar) zijn naar de boekhandel.",
    correctAnswer: "Die",
    explanationTr: "Çoğul kişilere veya varlıklara bağımsız atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to plural people or entities, 'Die' is used."
  },
  {
    id: "q_conj_pron_016",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "Je hebt gisteren je huiswerk niet gemaakt? Jawel, ___ heb ik vanmiddag gedaan.",
    options: ["dat", "die", "dit"],
    correctAnswer: "dat",
    explanationTr: "Bütün bir eyleme veya cümleye ('ev ödevi yapma' eylemi) bağımsız olarak atıfta bulunurken 'dat' kullanılır.",
    explanationEn: "When independently referring back to an entire action or sentence (doing homework), 'dat' is used."
  },
  {
    id: "q_conj_pron_017",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Wanneer maak je je huiswerk? ___ (Bunu) doe ik morgenochtend.",
    correctAnswer: "Dat",
    explanationTr: "Önceki cümlede bahsedilen konuya/eyleme atıfta bulunmak için 'Dat' kullanılır.",
    explanationEn: "To refer back to the topic/action mentioned in the previous sentence, 'Dat' is used."
  },
  {
    id: "q_conj_pron_018",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "___ is Katharina, mijn zus.",
    options: ["Dit", "Deze", "Die"],
    correctAnswer: "Dit",
    explanationTr: "SUNUM YAPMAK (Presenteren): Birini veya bir şeyi tanıtırken / sunarken daima 'Dit is' veya 'Dat is' kullanılır.",
    explanationEn: "PRESENTING: When introducing or presenting someone/something, always use 'Dit is' or 'Dat is'."
  },
  {
    id: "q_conj_pron_019",
    type: "fill_in",
    tags: ["independent_pronouns", "articles_plurals"],
    questionNl: "___ (Bu) zijn leuke dvd's.",
    correctAnswer: "Dit",
    explanationTr: "SUNUM KURALI: Nesneler ÇOĞUL ('dvd's') olsa bile sunum yaparken 'Dit zijn' kalıbı kullanılır.",
    explanationEn: "PRESENTING RULE: Even if objects are PLURAL ('dvd's'), the presentation structure is 'Dit zijn'."
  },
  {
    id: "q_conj_pron_020",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "___ is het boek voor de cursus Nederlands.",
    options: ["Dat", "Die", "Deze"],
    correctAnswer: "Dat",
    explanationTr: "Bir kitabı sunarken/işaret ederken uzakta/genel bağlamdaysa 'Dat is' kullanılır.",
    explanationEn: "When presenting/pointing out a book in a general context, 'Dat is' is used."
  },
  {
    id: "q_conj_pron_021",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Kijk, ___ (bunlar) zijn mijn docenten Karin en Paul.",
    correctAnswer: "dat",
    explanationTr: "İnsanları sunarken çoğul olsalar dahi 'Dat zijn' kalıbı tercih edilir.",
    explanationEn: "When presenting people, even in plural, the structure 'Dat zijn' is used."
  },
  {
    id: "q_conj_pron_022",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "Wat is de juiste vorm bij het presenteren van personen of zaken?",
    options: ["Dit is / Dat is (of meervoud zijn)", "Deze is / Die is", "Hij is / Zij is"],
    correctAnswer: "Dit is / Dat is (of meervoud zijn)",
    explanationTr: "Tanıtım ve sunumlarda (presenteren) 'Dit is/zijn' veya 'Dat is/zijn' standart kalıptır.",
    explanationEn: "For introductions and presentations (presenteren), 'Dit is/zijn' or 'Dat is/zijn' is the standard pattern."
  },
  {
    id: "q_conj_pron_023",
    type: "fill_in",
    tags: ["independent_pronouns", "articles_plurals"],
    questionNl: "Wat vind je van deze appels? ___ (Die) zijn erg zoet.",
    correctAnswer: "Die",
    explanationTr: "Çoğul bir isme ('appels') bağımsız olarak atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to a plural noun ('appels'), 'Die' is used."
  },
  {
    id: "q_conj_pron_024",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "Waar is mijn pen? ___ ligt op de tafel.",
    options: ["Die", "Dat", "Dit"],
    correctAnswer: "Die",
    explanationTr: "'Pen' bir de-woord'dur (de pen). Tekil de-woord yerine bağımsız zamir olarak 'Die' kullanılır.",
    explanationEn: "'Pen' is a de-word (de pen). As an independent pronoun replacing a singular de-word, 'Die' is used."
  },
  {
    id: "q_conj_pron_025",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Heb je het nieuwe museum gezien? ___ (Dat) is echt indrukwekkend.",
    correctAnswer: "Dat",
    explanationTr: "'Museum' het-woord'dur (het museum). Bağımsız atıf için 'Dat' kullanılır.",
    explanationEn: "'Museum' is a het-word (het museum). For independent reference, 'Dat' is used."
  },
  {
    id: "q_conj_pron_026",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik lust geen vis, ___ ik eet vandaag vegetarisch.",
    options: ["dus", "want", "maar"],
    correctAnswer: "dus",
    explanationTr: "Balık sevmediği için sonuç olarak vejetaryen yiyor ('dus' - bu yüzden/öyleyse).",
    explanationEn: "Since he doesn't like fish, as a consequence he eats vegetarian ('dus' - so/therefore)."
  },
  {
    id: "q_conj_pron_027",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "We gaan naar buiten, ___ (ama) het begint te regenen.",
    correctAnswer: "maar",
    explanationTr: "Dışarı çıkma durumu ile yağmurun başlaması zıtlık oluşturduğu için 'maar' kullanılır.",
    explanationEn: "Since going outside and starting to rain form a contrast, 'maar' (but) is used."
  },
  {
    id: "q_conj_pron_028",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Wil je koffie ___ thee?",
    options: ["of", "en", "dus"],
    correctAnswer: "of",
    explanationTr: "İki içecek arasında seçim sunuluyor ('of' - veya).",
    explanationEn: "Offering a choice between two drinks ('of' - or)."
  },
  {
    id: "q_conj_pron_029",
    type: "fill_in",
    tags: ["conjunctions"],
    questionNl: "Hij leest een boek ___ (ve) hij luistert naar muziek.",
    correctAnswer: "en",
    explanationTr: "İki eylem aynı anda yapılıyor, 'en' ile bağlanır.",
    explanationEn: "Two actions happening together, connected with 'en' (and)."
  },
  {
    id: "q_conj_pron_030",
    type: "multiple_choice",
    tags: ["conjunctions"],
    questionNl: "Ik ben blij, ___ ik heb mijn examen gehaald!",
    options: ["want", "dus", "maar"],
    correctAnswer: "want",
    explanationTr: "Mutlu olmasının GEREKÇESİ sınavı geçmiş olmasıdır ('want' - çünkü).",
    explanationEn: "The REASON for being happy is passing the exam ('want' - because)."
  },
  {
    id: "q_conj_pron_031",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Wie is die man daar? ___ (O) is onze nieuwe directeur.",
    correctAnswer: "Die",
    explanationTr: "Bir kişiye (o adam) bağımsız olarak atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to a person (that man), 'Die' is used."
  },
  {
    id: "q_conj_pron_032",
    type: "multiple_choice",
    tags: ["independent_pronouns"],
    questionNl: "Heb je die auto's gezien? ___ zijn heel snel.",
    options: ["Die", "Dat", "Dit"],
    correctAnswer: "Die",
    explanationTr: "'auto's' çoğul olduğu için bağımsız zamir 'Die' olur.",
    explanationEn: "Since 'auto's' is plural, the independent pronoun is 'Die'."
  },
  {
    id: "q_conj_pron_033",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Wat is dit voor een gebouw? ___ (Bu) is het stadhuis.",
    correctAnswer: "Dit",
    explanationTr: "Yakındaki bir yapıyı sunarken/tanıtırken 'Dit is' kullanılır.",
    explanationEn: "When presenting/introducing a nearby building, 'Dit is' is used."
  },
  {
    id: "q_conj_pron_034",
    type: "multiple_choice",
    tags: ["conjunctions", "word_order"],
    questionNl: "Welke voegwoorden veranderen de normale hoofdzin-volgorde (Subject + Verb) NIET?",
    options: ["en, of, maar, want, dus", "omdat, als, terwijl, voordat", "geen van alle"],
    correctAnswer: "en, of, maar, want, dus",
    explanationTr: "Bu beşli ana cümleleri birbirine bağlar ve kelime sırasını değiştirmez.",
    explanationEn: "These five connect main clauses and do not alter the word order."
  },
  {
    id: "q_conj_pron_035",
    type: "fill_in",
    tags: ["independent_pronouns"],
    questionNl: "Waar zijn mijn schoenen? ___ (Onlar) staan in de gang.",
    correctAnswer: "Die",
    explanationTr: "Çoğul bir nesne grubuna ('schoenen') bağımsız atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to a plural group of objects ('schoenen'), 'Die' is used."
  },
  {
    id: "q_read_conj_036",
    type: "multiple_choice",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst: 'Anna wil graag naar Italië op vakantie, maar ze heeft niet genoeg geld. Ze werkt daarom extra in het weekend, want ze wil geld sparen. Ze koopt geen nieuwe kleren en ze gaat niet uit.'\n\nWaarom gebruikt de schrijver 'maar' in de eerste zin?",
    options: ["Om een contrast / zıtlık te tonen tussen de wens en de realiteit.", "Om een reden te geven.", "Om een keuze te presenteren."],
    correctAnswer: "Om een contrast / zıtlık te tonen tussen de wens en de realiteit.",
    explanationTr: "İtalya'ya gitmek istemesi ile yeterli paraya sahip olmaması arasında bir zıtlık vardır; bu yüzden 'maar' kullanılır.",
    explanationEn: "There is a contrast between wanting to go to Italy and not having enough money; hence 'maar' is used."
  },
  {
    id: "q_read_conj_037",
    type: "fill_in",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul de juiste voegwoord in: 'Ze werkt daarom extra in het weekend, ___ ze wil geld sparen.'",
    correctAnswer: "want",
    explanationTr: "Ekstra çalışmasının GEREKÇESİNİ açıklıyor ('want' - çünkü).",
    explanationEn: "It explains the REASON for working extra ('want' - because)."
  },
  {
    id: "q_read_conj_038",
    type: "multiple_choice",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst: 'Mijn broer heeft een oude motor. Die maakt heel veel geluid. Hij heeft ook een sportauto. Dat is een heel snel voertuig. Dit zijn zijn autosleutels.'\n\nWaar verwijst het woord 'Die' in de tweede zin ('Die maakt heel veel geluid') naar?",
    options: ["De motor", "De broer", "De auto"],
    correctAnswer: "De motor",
    explanationTr: "Bağımsız işaret zamiri 'Die', bir önceki cümlede geçen tekil de-woord olan 'de motor' kelimesine atıfta bulunur.",
    explanationEn: "The independent demonstrative pronoun 'Die' refers back to the singular de-word 'de motor' from the previous sentence."
  },
  {
    id: "q_read_conj_039",
    type: "fill_in",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de zin aan: 'Hij heeft ook een sportauto. ___ is een heel snel voertuig.'",
    correctAnswer: "Dat",
    explanationTr: "'sportauto' veya 'het voertuig' gibi kavramlara ya da het-woord'lere bağımsız atıfta bulunurken 'Dat' kullanılır.",
    explanationEn: "When independently referring back to concepts like 'sportauto' or het-words, 'Dat' is used."
  },
  {
    id: "q_read_conj_040",
    type: "multiple_choice",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom wordt in de laatste zin 'Dit zijn' gebruikt?",
    options: ["Om de autosleutels te presenteren / introduceren.", "Omdat sleutels een de-woord zijn.", "Omdat het in de verleden tijd staat."],
    correctAnswer: "Om de autosleutels te presenteren / introduceren.",
    explanationTr: "Anahtarları sunmak/tanıtmak (presenteren) amacıyla 'Dit zijn' kalıbı kullanılmıştır (Çoğul olmalarına rağmen).",
    explanationEn: "The structure 'Dit zijn' is used to present/introduce the keys (even though they are plural)."
  },
  {
    id: "q_read_conj_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst: 'Tom wilde gisteren naar de voetbalwedstrijd gaan, maar het begon hard te regenen. Hij had geen zin om nat te worden, dus hij bleef thuis. Hij keek de wedstrijd op televisie en hij dronkte warme chocolademelk.'\n\nWat is het gevolg (sonuç) van het feit dat het hard begon te regenen?",
    options: ["Tom bleef thuis.", "Tom ging naar de wedstrijd.", "Tom ging in de regen voetballen."],
    correctAnswer: "Tom bleef thuis.",
    explanationTr: "Yağmurun başlaması ve evde kalması 'dus' (bu yüzden) bağlacıyla birbirine bağlanan bir sonuçtur.",
    explanationEn: "The rain starting and staying home are connected as a consequence using 'dus' (so)."
  },
  {
    id: "q_read_conj_042",
    type: "fill_in",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst uit de vorige vraag.\n\nVul in: 'Hij had geen zin om nat te worden, ___ hij bleef thuis.'",
    correctAnswer: "dus",
    explanationTr: "Sonuç bildirdiği için boşluğa 'dus' gelmelidir.",
    explanationEn: "Since it indicates a result/consequence, 'dus' (so) should fill the blank."
  },
  {
    id: "q_read_conj_043",
    type: "multiple_choice",
    tags: ["reading_conj_pron", "conjunctions"],
    questionNl: "Verandert de woordvolgorde (Subject + Verb) na het woord 'dus' in de zin 'Hij bleef thuis, dus hij keek tv'?",
    options: ["Nee, de volgorde blijft gelijk (Hoofdzin).", "Ja, de persoonsvorm gaat naar het einde.", "Ja, er is sprake van inversie."],
    correctAnswer: "Nee, de volgorde blijft gelijk (Hoofdzin).",
    explanationTr: "'Dus' bir ana cümle bağlacıdır; arkasından gelen cümlede Özne + Fiil sıralaması bozulmaz.",
    explanationEn: "'Dus' is a main clause conjunction; the Subject + Verb order in the following clause is not disrupted."
  },
  {
    id: "q_read_conj_044",
    type: "fill_in",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst: 'Dit is mijn kat. Die slaapt altijd op de stoel. Dat is mijn hond. Die rent graag in de tuin. En dit zijn mijn twee vogels.'\n\nVul aan: 'Dit is mijn kat. ___ slaapt altijd op de stoel.'",
    correctAnswer: "Die",
    explanationTr: "Tekil de-woord olan 'kat' (kedi) kelimesine bağımsız olarak atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to the singular de-word 'kat' (cat), 'Die' is used."
  },
  {
    id: "q_read_conj_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom wordt in de laatste zin 'Dit zijn' niet gebruikt, maar wel 'Dit zijn mijn twee vogels'?",
    options: ["Omdat vogels meervoud zijn en we hier een presentatie/introductie doen.", "Omdat vogels het-woorden zijn.", "Omdat het in de verleden tijd staat."],
    correctAnswer: "Omdat vogels meervoud zijn en we hier een presentatie/introductie doen.",
    explanationEn: "Because birds are plural and we are doing a presentation/introduction here."
  },
  {
    id: "q_read_conj_046",
    type: "fill_in",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst: 'Ik ga vandaag naar de markt, want ik wil verse groenten kopen. Ik kan ook naar de supermarkt gaan, maar de groenten op de markt zijn lekkerder.'\n\nVul de zin aan: 'Ik ga vandaag naar de markt, ___ ik wil verse groenten kopen.'",
    correctAnswer: "want",
    explanationTr: "Pazara gitme sebebini açıkladığı için 'want' (çünkü) kullanılır.",
    explanationEn: "Because it explains the reason for going to the market, 'want' (because) is used."
  },
  {
    id: "q_read_conj_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat is het verschil in betekenis tussen 'want' en 'maar' in deze tekst?",
    options: ["'Want' geeft een reden, 'maar' geeft een tegenstelling (zıtlık) aan.", "'Want' geeft een gevolg, 'maar' geeft een keuze.", "Er is geen verschil."],
    correctAnswer: "'Want' geeft een reden, 'maar' geeft een tegenstelling (zıtlık) aan.",
    explanationTr: "'Want' sebep bildirirken, 'maar' iki durum arasındaki zıtlığı vurgular.",
    explanationEn: "'Want' gives a reason, while 'maar' emphasizes the contrast between two situations."
  },
  {
    id: "q_read_conj_048",
    type: "fill_in",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst: 'Mijn zus heeft een mooie jurk gekocht. Die heeft ze gisteren meteen aangetrokken. Ook heeft ze nieuwe schoenen gekocht. Die glanzen heel mooi.'\n\nVul in: 'Mijn zus heeft een mooie jurk gekocht. ___ heeft ze gisteren meteen aangetrokken.'",
    correctAnswer: "Die",
    explanationTr: "Tekil de-woord olan 'jurk' (elbise) kelimesine bağımsız atıfta bulunurken 'Die' kullanılır.",
    explanationEn: "When independently referring back to the singular de-word 'jurk' (dress), 'Die' is used."
  },
  {
    id: "q_read_conj_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "independent_pronouns"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom wordt bij 'schoenen' in de laatste zin ook het woord 'Die' gebruikt?",
    options: ["Omdat 'schoenen' meervoud is (en meervoud is altijd de-woord).", "Omdat 'schoenen' een het-woord is.", "Omdat het om personen gaat."],
    correctAnswer: "Omdat 'schoenen' meervoud is (en meervoud is altijd de-woord).",
    explanationEn: "Because 'schoenen' is plural (and plurals are always de-words)."
  },
  {
    id: "q_read_conj_050",
    type: "fill_in",
    tags: ["reading_comprehension", "conjunctions"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de ontbrekende voegwoord in: 'Ze wilde eigenlijk thuisblijven, ___ (maar) ze moest toch naar haar werk gaan.'",
    correctAnswer: "maar",
    explanationTr: "Evde kalmak istemesi ile işe gitmek zorunda olması bir zıtlıktır ('maar').",
    explanationEn: "Wanting to stay home versus having to go to work is a contrast ('maar')."
  },
  
  {
    id: "q_bijz_001",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "Ik doe deze cursus omdat ik goed op het examen voorbereid ___.",
    options: ["ben", "is", "zijn"],
    correctAnswer: "ben",
    explanationTr: "Yan cümlede (bijzin) 'omdat' bağlacından sonra fiiller EN SONA gider. 'ik' için 'zijn' çekimi 'ben'dir.",
    explanationEn: "In a subclause (bijzin) after 'omdat', verbs go to the END. The 'ik' conjugation of 'zijn' is 'ben'."
  },
  {
    id: "q_bijz_002",
    type: "fill_in",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "Ik luister naar muziek terwijl ik mijn huiswerk ___ (maken).",
    correctAnswer: "maak",
    explanationTr: "'terwijl' bir yan cümle bağlacıdır. Fiil sona gider ve 'ik' için 'maak' olur.",
    explanationEn: "'terwijl' is a subclause conjunction. The verb goes to the end, becoming 'maak' for 'ik'."
  },
  {
    id: "q_bijz_003",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "We gaan naar huis zodra de film ___.",
    options: ["is afgelopen", "afgelopen is", "afgelopen zijn"],
    correctAnswer: "is afgelopen",
    explanationTr: "Yan cümlede 'zodra' sonrasında fiiller sona gider. Ayrılabilen birleşik fiilin perfectum hali sonda yer alır: 'is afgelopen'.",
    explanationEn: "In a subclause after 'zodra', verbs go to the end. The perfectum of the separable verb is at the end: 'is afgelopen'."
  },
  {
    id: "q_bijz_004",
    type: "fill_in",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "Ik bel je op als ik morgen in Amsterdam ___ (zijn).",
    correctAnswer: "ben",
    explanationTr: "'als' (eğer/ne zaman ki) bir yan cümle başlatır. Fiil 'ben' olarak en sonda yer alır.",
    explanationEn: "'als' (if/when) starts a subclause. The verb 'ben' is placed at the very end."
  },
  {
    id: "q_bijz_005",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "Wat is de belangrijkste regel voor de woordvolgorde in een bijzin (yan cümle)?",
    options: ["Alle werkwoorden gaan naar het einde van de zin.", "De persoonsvorm staat altijd op de tweede plaats.", "Er is sprake van inversie in de bijzin."],
    correctAnswer: "Alle werkwoorden gaan naar het einde van de zin.",
    explanationTr: "Yan cümlenin (bijzin) altın kuralı: Çekimli fiil ve diğer tüm fiiller cümlenin en sonuna gider.",
    explanationEn: "The golden rule of a subclause: The conjugated verb and all other verbs go to the end of the sentence."
  },
  {
    id: "q_bijz_006",
    type: "fill_in",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Nadat mijn fiets gestolen ___, ben ik naar de politie gegaan.",
    correctAnswer: "was",
    explanationTr: "Yan cümle başa gelirse ana cümlede inversie (devrik yapı) olur. Yan cümlede ise fiil sona gider: 'was'.",
    explanationEn: "If the subclause is at the start, the main clause has inversion. In the subclause, the verb goes to the end: 'was'."
  },
  {
    id: "q_bijz_007",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Voordat we naar huis gaan, ___ ik graag nog iets drinken.",
    options: ["wil", "wille", "wilt"],
    correctAnswer: "wil",
    explanationTr: "Yan cümle ('Voordat we naar huis gaan') başa geldiği için, virgülünden sonraki ana cümlede inversie (fiir öznenin önüne geçer) olur: 'wil ik'.",
    explanationEn: "Since the subclause ('Voordat...') is at the start, the main clause after the comma has inversion: 'wil ik'."
  },
  {
    id: "q_bijz_008",
    type: "fill_in",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Toen ik 20 jaar ___ (worden), heb ik een groot feest gegeven.",
    correctAnswer: "werd",
    explanationTr: "'toen' (geçmişte bir anda) yan cümle bağlacıdır. Fiil sona gider (werd). Başlangıçta olduğu için ana cümlede inversie vardır (heb ik).",
    explanationEn: "'toen' starts a subclause. The verb goes to the end (werd). Because it starts the sentence, the main clause has inversion (heb ik)."
  },
  {
    id: "q_bijz_009",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Zodra we in Amsterdam zijn, ___ we een museum bezoeken.",
    options: ["gaan", "zullen", "bezoeken"],
    correctAnswer: "zullen",
    explanationTr: "Yan cümleyle başlayan yapılarda ana cümle devrik (inversie) olur: 'zullen we'.",
    explanationEn: "In structures starting with a subclause, the main clause is inverted: 'zullen we'."
  },
  {
    id: "q_bijz_010",
    type: "fill_in",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Hoewel het hard ___ (regenen), gingen we toch wandelen.",
    correctAnswer: "regende",
    explanationTr: "'hoewel' (rağmen) yan cümle bağlacıdır. Fiil imperfectum geçmiş zamanda sona gider: 'regende'.",
    explanationEn: "'hoewel' (although) is a subclause conjunction. The verb goes to the end in simple past: 'regende'."
  },
  {
    id: "q_bijz_011",
    type: "multiple_choice",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Wat is het grammaticale verschil tussen 'want' en 'omdat'?",
    options: ["Na 'want' volgt een hoofdzin (normale volgorde), na 'omdat' volgt een bijzin (werkwoorden naar achter).", "Na 'omdat' volgt een hoofdzin, na 'want' volgt een bijzin.", "Er is geen gramaticaal verschil."],
    correctAnswer: "Na 'want' volgt een hoofdzin (normale volgorde), na 'omdat' volgt een bijzin (werkwoorden naar achter).",
    explanationTr: "İkisi de 'çünkü' demektir ancak 'want' ana cümle (hoofdzin) bağlar, 'omdat' ise yan cümle (bijzin) bağlayıp fiilleri sona atar.",
    explanationEn: "Both mean 'because', but 'want' connects a main clause, while 'omdat' connects a subclause sending verbs to the end."
  },
  {
    id: "q_bijz_012",
    type: "fill_in",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Ik doe deze cursus want ik ___ (willen) graag Nederlands leren.",
    correctAnswer: "wil",
    explanationTr: "'want' bir hoofdzin (ana cümle) bağlacıdır, bu yüzden kelime dizilimi değişmez (Özne + Fiil): 'ik wil'.",
    explanationEn: "'want' is a main clause conjunction, so the word order does not change (Subject + Verb): 'ik wil'."
  },
  {
    id: "q_bijz_013",
    type: "fill_in",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Ik doe deze cursus omdat ik graag Nederlands ___ (leren / willen).",
    correctAnswer: "wil leren",
    explanationTr: "'omdat' bir bijzin (yan cümle) bağlacıdır. Tüm fiiller (wil, leren) cümlenin EN SONUNA gider.",
    explanationEn: "'omdat' is a subclause conjunction. All verbs (wil, leren) go to the VERY END of the sentence."
  },
  {
    id: "q_bijz_014",
    type: "multiple_choice",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Kies de correcte zin:",
    options: ["Ik blijf thuis, omdat ik ben ziek.", "Ik blijf thuis, omdat ik ziek ben.", "Ik blijf thuis, want ik ziek ben."],
    correctAnswer: "Ik blijf thuis, omdat ik ziek ben.",
    explanationTr: "'omdat' yan cümle yarattığı için fiil ('ben') en sonda olmalıdır.",
    explanationEn: "Because 'omdat' creates a subclause, the verb ('ben') must be at the end."
  },
  {
    id: "q_bijz_015",
    type: "fill_in",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Hij komt vandaag niet naar kantoor, ___ (çünkü) hij heeft griep.",
    correctAnswer: "want",
    explanationTr: "Aradaki virgül ve normal kelime dizilimi ('hij heeft') 'want' bağlacının kullanıldığını gösterir.",
    explanationEn: "The comma and normal word order ('hij heeft') indicate that the conjunction 'want' is used."
  },
  {
    id: "q_bijz_016",
    type: "multiple_choice",
    tags: ["subclauses", "want_omdat"],
    questionNl: "Welke zin drukt exact hetzelfde uit als: 'We gaan niet naar het strand, omdat het regent.'?",
    options: ["We gaan niet naar het strand, want het regent.", "We gaan niet naar het strand, want regent het.", "We gaan niet naar het strand, omdat regent het."],
    correctAnswer: "We gaan niet naar het strand, want het regent.",
    explanationTr: "Anlam aynıdır ('çünkü'), ancak 'want' sonrasında normal sıra ('het regent') yer alır.",
    explanationEn: "The meaning is the same ('because'), but after 'want' we use normal word order ('het regent')."
  },
  {
    id: "q_bijz_017",
    type: "fill_in",
    tags: ["subclauses", "modal_verbs"],
    questionNl: "Je kunt me altijd bellen als ik je ___ (kunnen) helpen.",
    correctAnswer: "kan",
    explanationTr: "Yan cümlede modal fiil ('kan') da dahil tüm fiiller sona gider. 'ik' için 'kan'.",
    explanationEn: "In a subclause, all verbs including the modal ('kan') go to the end. For 'ik', it's 'kan'."
  },
  {
    id: "q_bijz_018",
    type: "multiple_choice",
    tags: ["subclauses", "modal_verbs"],
    questionNl: "Omdat we op de trein moeten wachten, ___ we even een kopje koffie.",
    options: ["gaan", "gaat", "staan"],
    correctAnswer: "gaan",
    explanationTr: "Yan cümleyle (Omdat...) başlandığı için ana cümlede inversie (devrik yapı) olur: 'gaan we'.",
    explanationEn: "Starting with a subclause (Omdat...) requires inversion in the main clause: 'gaan we'."
  },
  {
    id: "q_bijz_019",
    type: "fill_in",
    tags: ["subclauses", "past_tenses", "perfectum"],
    questionNl: "Zodra uw portemonnee gevonden ___ (zijn), bellen we u op.",
    correctAnswer: "is",
    explanationTr: "Yan cümlede perfectum yapısında yardımcı fiil ('is') cümlenin en sonundaki participium'dan ('gevonden') ÖNCE veya SONRA gelebilir, ancak burada standart olarak 'gevonden is' veya 'is gevonden' şeklindedir. Boşluğa yardımcı fiil olan 'is' gelir.",
    explanationEn: "In a subclause perfectum, the auxiliary verb ('is') comes together with the past participle at the end. Here the auxiliary 'is' fills the blank."
  },
  {
    id: "q_bijz_020",
    type: "multiple_choice",
    tags: ["subclauses", "past_tenses", "perfectum"],
    questionNl: "Welke volgorde is juist aan het einde van een bijzin in de verleden tijd (perfectum)?",
    options: ["Zowel 'gevonden is' als 'is gevonden' zijn toegestaan.", "Alleen 'is gevonden' is correct.", "Alleen 'gevonden is' is correct."],
    correctAnswer: "Zowel 'gevonden is' als 'is gevonden' zijn toegestaan.",
    explanationTr: "Hollandacada yan cümlenin sonunda hem 'participle + yardımcı fiil' hem de 'yardımcı fiil + participle' kabul edilir.",
    explanationEn: "In Dutch subclauses at the end, both 'participle + auxiliary' and 'auxiliary + participle' orders are accepted."
  },
  {
    id: "q_bijz_021",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Ik doe de deur dicht, ___ (zodat) het binnen warm wordt.",
    correctAnswer: "zodat",
    explanationTr: "'zodat' (öyle ki / -sın diye) yan cümle başlatan bir bağlaçtır.",
    explanationEn: "'zodat' (so that) is a conjunction that introduces a subclause."
  },
  {
    id: "q_bijz_022",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "word_order"],
    questionNl: "We vertrekken vroeg, ___ we geen file willen missen. (Kies de juiste voegwoord)",
    options: ["omdat", "want", "zodat"],
    correctAnswer: "omdat",
    explanationTr: "Cümlenin devamında fiiller sonda yer almaktadır ('willen missen'), bu yüzden 'omdat' (yan cümle bağlacı) gereklidir.",
    explanationEn: "The verbs are at the end ('willen missen'), which requires the subclause conjunction 'omdat'."
  },
  {
    id: "q_bijz_023",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Hij slaapt slecht, ___ (terwijl) hij heel moe is.",
    correctAnswer: "terwijl",
    explanationTr: "'terwijl' (-ken / iken) yan cümle bağlacıdır ve fiili sona iter.",
    explanationEn: "'terwijl' (while) is a subclause conjunction and pushes the verb to the end."
  },
  {
    id: "q_bijz_024",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions"],
    questionNl: "___ ik ziek ben, ga ik toch naar kantoor.",
    options: ["Hoewel", "Omdat", "Zodat"],
    correctAnswer: "Hoewel",
    explanationTr: "'Hasta olmama rağmen' anlamı için 'Hoewel' (although/rağmen) kullanılır.",
    explanationEn: "For the meaning 'Although I am sick', 'Hoewel' is used."
  },
  {
    id: "q_bijz_025",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Voordat we gaan eten, ___ (wassen) we onze handen.",
    correctAnswer: "wassen",
    explanationTr: "Yan cümle baştadır ('Voordat...'), bu yüzden ana cümlede inversie (devrik yapı) olur. Özne 'we' olduğu için 'wassen' fiili aynı kalır.",
    explanationEn: "The subclause is at the start, so the main clause has inversion. With subject 'we', the verb 'wassen' stays the same."
  },
  {
    id: "q_bijz_026",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Wat betekent het voegwoord 'zodra'?",
    options: ["As soon as (Ne olur olmaz / -ar -mez)", "Although (Rağmen)", "Before (Önce)"],
    correctAnswer: "As soon as (Ne olur olmaz / -ar -mez)",
    explanationTr: "'zodra' kelimesi Türkçeye '-ar -mez' veya 'ne zaman ki hemen' olarak çevrilir.",
    explanationEn: "'zodra' translates to 'as soon as'."
  },
  {
    id: "q_bijz_027",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Nadat ik mijn ontbijt op ___ (hebben), ging ik naar buiten.",
    correctAnswer: "had",
    explanationTr: "Geçmiş zamanda yan cümlede perfectum/imperfectum kuralı gereği 'hebben' fiilinin geçmiş zamanı 'had' en sonda yer alır.",
    explanationEn: "In the past tense subclause, the simple past of 'hebben' ('had') goes to the end."
  },
  {
    id: "q_bijz_028",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Welk voegwoord drukt een doel uit (-sın diye / öyle ki)?",
    options: ["zodat", "omdat", "terwijl"],
    correctAnswer: "zodat",
    explanationTr: "'zodat' amacı veya sonucu (so that) ifade eder.",
    explanationEn: "'zodat' expresses a goal or result (so that)."
  },
  {
    id: "q_bijz_029",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Ik herken hem niet meer, ___ (toen) ik hem voor het laatst zag, was hij heel jong.",
    correctAnswer: "toen",
    explanationTr: "Geçmişteki spesifik bir zaman dilimine atıfta bulunan 'toen' yan cümle başlatır.",
    explanationEn: "'toen' refers to a specific moment in the past and introduces a subclause."
  },
  {
    id: "q_bijz_030",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Waar staat de persoonsvorm in een bijzin?",
    options: ["Aan het einde van de bijzin", "Direct na het voegwoord", "Op de tweede plaats"],
    correctAnswer: "Aan het einde van de bijzin",
    explanationTr: "Yan cümlede çekimli fiil (persoonsvorm) en arkasındaki diğer fiiller her zaman en sondadır.",
    explanationEn: "In a subclause, the conjugated verb and other verbs are always at the end."
  },
  {
    id: "q_bijz_031",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Zodra de zon ___ (schijnen), gaan we naar het strand.",
    correctAnswer: "schijnt",
    explanationTr: "'zodra' yan cümle bağlacıdır. 'de zon' 3. tekil şahıs olduğu için fiil sona gidip 'schijnt' olur.",
    explanationEn: "'zodra' is a subclause conjunction. For 'de zon' (3rd person singular), the verb goes to the end becoming 'schijnt'."
  },
  {
    id: "q_bijz_032",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions", "inversion"],
    questionNl: "Zodra de zon schijnt, ___ we naar het strand.",
    options: ["gaan", "gaat", "zijn"],
    correctAnswer: "gaan",
    explanationTr: "Yan cümle öne geçtiği için ana cümlede inversie (devrik yapı) olur: 'gaan we'.",
    explanationEn: "The subclause is upfront, so the main clause is inverted: 'gaan we'."
  },
  {
    id: "q_bijz_033",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Ik neem een paraplu mee, voor het ___ (regenen).",
    correctAnswer: "regent",
    explanationTr: "'voordat' yerine bazen kısaca 'voor het...' yapısı da benzer mantıkla fiili sona iter (regent).",
    explanationEn: "Similar to 'voordat', this structure pushes the verb to the end (regent)."
  },
  {
    id: "q_bijz_034",
    type: "multiple_choice",
    tags: ["subclauses", "conjunctions"],
    questionNl: "Wat is de betekenis van 'hoewel'?",
    options: ["Although (Rağmen / -e rağmen)", "Because (Çünkü)", "As soon as (-ar -mez)"],
    correctAnswer: "Although (Rağmen / -e rağmen)",
    explanationTr: "'hoewel' kelimesi Türkçeye '-e rağmen' olarak çevrilir.",
    explanationEn: "'hoewel' translates to 'although'."
  },
  {
    id: "q_bijz_035",
    type: "fill_in",
    tags: ["subclauses", "conjunctions"],
    questionNl: "We konden niet buiten slapen, omdat het te koud ___ (zijn).",
    correctAnswer: "was",
    explanationTr: "Geçmiş zamanda 'zijn' fiili yan cümlede en sona 'was' olarak gider.",
    explanationEn: "In the past tense, the verb 'zijn' goes to the end of the subclause as 'was'."
  },
  {
    id: "q_read_bijz_036",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst: 'Omdat het vandaag regent, blijf ik lekker binnen. Ik lees een goed boek terwijl de kat op de bank slaapt. Zodra de zon weer schijnt, ga ik een wandeling maken.'\n\nWaarom blijft de spreker binnen?",
    options: ["Omdat het regent.", "Omdat de kat slaapt.", "Omdat de zon schijnt."],
    correctAnswer: "Omdat het regent.",
    explanationTr: "Metnin ilk cümlesinde 'Omdat het vandaag regent, blijf ik lekker binnen' yazmaktadır.",
    explanationEn: "The first sentence of the text states 'Omdat het vandaag regent, blijf ik lekker binnen'."
  },
  {
    id: "q_read_bijz_037",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses", "inversion"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom staat er 'blijf ik' (inversie) na de komma in de eerste zin?",
    options: ["Omdat de zin begint met een bijzin (Omdat het vandaag regent).", "Omdat het een vraag is.", "Omdat er 'want' wordt gebruikt."],
    correctAnswer: "Omdat de zin begint met een bijzin (Omdat het vandaag regent).",
    explanationTr: "Yan cümle ('Omdat...') ile başlayan cümlelerde ana cümlede her zaman inversie (devrik yapı) olur.",
    explanationEn: "Sentences starting with a subclause ('Omdat...') always have inversion in the main clause."
  },
  {
    id: "q_read_bijz_038",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Ik lees een goed boek terwijl de kat op de bank ___ (slapen).'",
    correctAnswer: "slaapt",
    explanationTr: "'terwijl' yan cümle başlatır. Özne 'de kat' (hij) olduğu için fiil sona gidip 'slaapt' olur.",
    explanationEn: "'terwijl' starts a subclause. With subject 'de kat' (it), the verb goes to the end becoming 'slaapt'."
  },
  {
    id: "q_read_bijz_039",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat gaat de spreker doen zodra de zon weer schijnt?",
    options: ["Een wandeling maken", "Binnen blijven", "Een boek lezen"],
    correctAnswer: "Een wandeling maken",
    explanationTr: "Metnin son cümlesinde 'ga ik een wandeling maken' denmektedir.",
    explanationEn: "The last sentence says 'ga ik een wandeling maken'."
  },
  {
    id: "q_read_bijz_040",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de conjunctie in die aangeeft 'ne olur olmaz / -ar -mez': '___ de zon weer schijnt, ga ik een wandeling maken.'",
    correctAnswer: "Zodra",
    explanationTr: "Metinde geçen '-ar -mez' anlamındaki bağlaç 'Zodra' (As soon as) kelimesidir.",
    explanationEn: "The conjunction in the text meaning 'as soon as' is 'Zodra'."
  },
  {
    id: "q_read_bijz_041",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses", "want_omdat"],
    questionNl: "Lees de tekst: 'Tom is erg blij, want hij heeft zijn examen gehaald. Hij wil dat meteen vieren met zijn vrienden. Hoewel hij morgen vroeg moet opstaan, gaat hij toch naar het feestje.'\n\nWaarom is Tom blij?",
    options: ["Omdat hij zijn examen heeft gehaald.", "Omdat hij naar het feestje gaat.", "Omdat hij vroeg moet opstaan."],
    correctAnswer: "Omdat hij zijn examen heeft gehaald.",
    explanationTr: "Metinde 'want hij heeft zijn examen gehaald' diyerek mutluluğunun sebebi açıklanmıştır.",
    explanationEn: "The text explains the reason for his happiness with 'want hij heeft zijn examen gehaald'."
  },
  {
    id: "q_read_bijz_042",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Hoewel hij morgen vroeg moet ___ (opstaan), gaat hij toch naar het feestje.'",
    correctAnswer: "opstaan",
    explanationTr: "'Hoewel' yan cümle bağlacıdır. Cümlede modal fiil olduğu için tüm fiiller ('moet opstaan') en sona gider.",
    explanationEn: "'Hoewel' is a subclause conjunction. Since there is a modal verb, all verbs ('moet opstaan') go to the end."
  },
  {
    id: "q_read_bijz_043",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat betekent 'Hoewel hij morgen vroeg moet opstaan'?",
    options: ["Yarın erken kalkması gerekmesine rağmen", "Yarın erken kalkacağı için", "Yarın erken kalkana kadar"],
    correctAnswer: "Yarın erken kalkması gerekmesine rağmen",
    explanationTr: "'Hoewel' kelimesi 'rağmen' (although) anlamı katmaktadır.",
    explanationEn: "'Hoewel' adds the meaning of 'although'."
  },
  {
    id: "q_read_bijz_044",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses", "want_omdat"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nMaak van de zin 'Tom is erg blij, want hij heeft zijn examen gehaald' een zin met 'omdat'.\n'Tom is erg blij, ___ hij zijn examen heeft gehaald.'",
    correctAnswer: "omdat",
    explanationTr: "‘want’ yerine ‘omdat’ kullanıldığında yapı yan cümleye (bijzin) dönüştüğü için yardımcı fiil ‘heeft’ en sona gider.",
    explanationEn: "When replacing 'want' with 'omdat', it becomes a subclause, sending the auxiliary verb 'heeft' to the end."
  },
  {
    id: "q_read_bijz_045",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses", "want_omdat"],
    questionNl: "Als je 'want' vervangt door 'omdat' in een zin, wat gebeurt er dan met de positie van het werkwoord in dat zinsdeel?",
    options: ["Het werkwoord verschuift naar het einde van het zinsdeel.", "Het werkwoord blijft op de tweede plaats.", "Het werkwoord verdwijnt helemaal."],
    correctAnswer: "Het werkwoord verschuift naar het einde van het zinsdeel.",
    explanationTr: "'want' ana cümle bağlar (fiil ortada kalır), 'omdat' yan cümle bağlar (fiil sona gider).",
    explanationEn: "'want' connects a main clause (verb stays middle), 'omdat' connects a subclause (verb goes to the end)."
  },
  {
    id: "q_read_bijz_046",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst: 'Voordat ik naar mijn werk ga, drink ik altijd een kopje koffie. Nadat ik mijn koffie op heb, vertrek ik. Ik luister naar de radio terwijl ik in de auto zit.'\n\nVul in: 'Voordat ik naar mijn werk ___ (gaan), drink ik altijd een kopje koffie.'",
    correctAnswer: "ga",
    explanationTr: "'Voordat' yan cümle başlatır. 'ik' için 'gaan' çekimi 'ga' olur ve sonda yer alır.",
    explanationEn: "'Voordat' introduces a subclause. For 'ik', the conjugation of 'gaan' is 'ga' at the end."
  },
  {
    id: "q_read_bijz_047",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses", "inversion"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom staat er 'drink ik' (inversie) in de zin 'Voordat ik naar mijn werk ga, drink ik altijd een kopje koffie'?",
    options: ["Omdat de zin begint met een bijzin.", "Omdat het een vraag is.", "Omdat er 'want' staat."],
    correctAnswer: "Omdat de zin begint met een bijzin.",
    explanationTr: "Cümlenin ilk kısmı yan cümle olduğu için ana cümle devriktir (drink ik).",
    explanationEn: "Because the first part of the sentence is a subclause, the main clause is inverted (drink ik)."
  },
  {
    id: "q_read_bijz_048",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in: 'Ik luister naar de radio terwijl ik in de auto ___ (zitten).'",
    correctAnswer: "zit",
    explanationTr: "'terwijl' yan cümle başlatır. 'ik' için 'zitten' fiili sona gidip 'zit' olur.",
    explanationEn: "'terwijl' starts a subclause. For 'ik', the verb 'zitten' goes to the end becoming 'zit'."
  },
  {
    id: "q_read_bijz_049",
    type: "multiple_choice",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWanneer vertrekt de spreker naar zijn werk?",
    options: ["Nadat hij zijn koffie op heeft", "Voordat hij op staat", "Tijdens het koken"],
    correctAnswer: "Nadat hij zijn koffie op heeft",
    explanationTr: "Metinde 'Nadat ik mijn koffie op heb, vertrek ik' şeklinde açıkça belirtilmiştir.",
    explanationEn: "The text explicitly states 'Nadat ik mijn koffie op heb, vertrek ik'."
  },
  {
    id: "q_read_bijz_050",
    type: "fill_in",
    tags: ["reading_comprehension", "subclauses"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de conjunctie in die 'sonrasında / -dikten sonra' anlamına gelir: '___ ik mijn koffie op heb, vertrek ik.'",
    correctAnswer: "Nadat",
    explanationTr: "Metinde 'sonrasında / -dikten sonra' anlamı veren bağlaç 'Nadat' (After) kelimesidir.",
    explanationEn: "The conjunction in the text meaning 'after' is 'Nadat'."
  },
  {
    id: "q_pron_sum_001",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Wat is de objectvorm (nesne hali) van het persoonlijke voornaamwoord 'ik'?",
    options: ["mij / me", "mijn", "me"],
    correctAnswer: "mij / me",
    explanationTr: "'ik' (ben) zamirinin nesne durumu (beni/bana) 'mij' veya 'me'dir.",
    explanationEn: "The object form of the personal pronoun 'ik' (I) is 'mij' or 'me'."
  },
  {
    id: "q_pron_sum_002",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Dit is mijn auto. Wat is de possessief pronomen (iyelik) bij 'ik'?",
    correctAnswer: "mijn",
    explanationTr: "'ik' zamiri için iyelik (benim) zamiri 'mijn' kelimesidir.",
    explanationEn: "The possessive pronoun for 'ik' (my) is 'mijn'."
  },
  {
    id: "q_pron_sum_003",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Welk reflexief pronomen (dönüşlü zamir) hoort bij het subject 'ik'?",
    options: ["me", "zich", "ons"],
    correctAnswer: "me",
    explanationTr: "'ik' öznesi ile kullanılan dönüşlü zamir 'me'dir.",
    explanationEn: "The reflexive pronoun used with the subject 'ik' is 'me'."
  },
  {
    id: "q_pron_sum_004",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Ik zie jou niet, maar zie jij ___ (mij / me)?",
    correctAnswer: "mij",
    explanationTr: "Cümle içinde vurgulu nesne zamiri olarak 'mij' kullanılır.",
    explanationEn: "'mij' is used as an emphasized object pronoun within a sentence."
  },
  {
    id: "q_pron_sum_005",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Jij hebt een nieuwe tas. Wat is de possessief pronomen (senin) bij 'jij / je'?",
    options: ["jouw / je", "jou", "jij"],
    correctAnswer: "jouw / je",
    explanationTr: "'jij / je' (sen) için iyelik zamiri (senin) 'jouw' veya 'je'dir.",
    explanationEn: "The possessive pronoun for 'jij / je' (your) is 'jouw' or 'je'."
  },
  {
    id: "q_pron_sum_006",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Ik geef dit cadeau aan ___ (jij / je -> objectvorm).",
    correctAnswer: "jou",
    explanationTr: "Edattan (aan) sonra 'jij' zamirinin nesne hali olan 'jou' (veya je) kullanılır.",
    explanationEn: "After the preposition (aan), the object form of 'jij', which is 'jou' (or 'je'), is used."
  },
  {
    id: "q_pron_sum_007",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Vergis ___ (jij) je niet in de tijd?",
    options: ["je", "me", "zich"],
    correctAnswer: "je",
    explanationTr: "'jij / je' (sen) öznesi için dönüşlü zamir 'je'dir.",
    explanationEn: "The reflexive pronoun for the subject 'jij / je' is 'je'."
  },
  {
    id: "q_pron_sum_008",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Meneer, is dit ___ (u) jas? (Possessief pronomen)",
    correctAnswer: "uw",
    explanationTr: "Resmi 'u' (siz) zamiri için iyelik zamiri (sizin) 'uw'dur.",
    explanationEn: "The possessive pronoun for the formal 'u' (your) is 'uw'."
  },
  {
    id: "q_pron_sum_009",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Meneer, vergist u ___ niet?",
    options: ["u", "zich", "je"],
    correctAnswer: "zich",
    explanationTr: "Resmi 'u' zamirinde dönüşlü zamir olarak 'u' veya 'zich' kullanılabilir ('zich' çok yaygındır).",
    explanationEn: "For the formal pronoun 'u', either 'u' or 'zich' can be used as a reflexive pronoun ('zich' is very common)."
  },
  {
    id: "q_pron_sum_010",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Waar is Jan? Ik heb ___ (hij) gisteren nog gezien.",
    correctAnswer: "hem",
    explanationTr: "Eril 'hij' (o) zamirinin nesne hali 'hem'dir.",
    explanationEn: "The object form of the masculine pronoun 'hij' (he) is 'hem' (him)."
  },
  {
    id: "q_pron_sum_011",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Dit is de auto van Jan. Dat is ___ auto.",
    options: ["zijn", "haar", "hun"],
    correctAnswer: "zijn",
    explanationTr: "Eril tekil (hij/Jan) için iyelik zamiri 'zijn' (onun) olur.",
    explanationEn: "For masculine singular (hij/Jan), the possessive pronoun is 'zijn' (his)."
  },
  {
    id: "q_pron_sum_012",
    type: "fill_in",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Hij scheert ___ (hij) elke ochtend.",
    correctAnswer: "zich",
    explanationTr: "3. tekil şahıs 'hij' için dönüşlü zamir 'zich'tir.",
    explanationEn: "For the 3rd person singular 'hij', the reflexive pronoun is 'zich'."
  },
  {
    id: "q_pron_sum_013",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Waar is Anna? Ik kan ___ niet vinden.",
    options: ["hem", "haar", "het"],
    correctAnswer: "haar",
    explanationTr: "Dişil 'zij / ze' (o - kadın) zamirinin nesne hali 'haar'dır.",
    explanationEn: "The object form of the feminine pronoun 'zij / ze' (she) is 'haar' (her)."
  },
  {
    id: "q_pron_sum_014",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Dit is de tas van Anna. Het is ___ tas.",
    correctAnswer: "haar",
    explanationTr: "Dişil tekil (zij/Anna) için iyelik zamiri 'haar' (onun) olur.",
    explanationEn: "For feminine singular (zij/Anna), the possessive pronoun is 'haar' (her)."
  },
  {
    id: "q_pron_sum_015",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Zij (tekil) verveelt ___ tijdens de saaie les.",
    options: ["zich", "haar", "me"],
    correctAnswer: "zich",
    explanationTr: "Tekil 'zij' için dönüşlü zamir 'zich'tir.",
    explanationEn: "For singular 'zij', the reflexive pronoun is 'zich'."
  },
  {
    id: "q_pron_sum_016",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_object", "articles_plurals"],
    questionNl: "Heb je het boek gelezen? Ja, ik heb ___ (het) uit.",
    correctAnswer: "het",
    explanationTr: "Het-woord nesne durumunda daima 'het' kalır.",
    explanationEn: "Het-words always remain 'het' in the object position."
  },
  {
    id: "q_pron_sum_017",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Het paard heeft een lange staart. Dat is ___ staart.",
    options: ["zijn", "haar", "het"],
    correctAnswer: "zijn",
    explanationTr: "Het-woorden ('het paard') için iyelik zamiri 'zijn' olarak kullanılır.",
    explanationEn: "For het-words ('het paard'), the possessive pronoun is 'zijn'."
  },
  {
    id: "q_pron_sum_018",
    type: "fill_in",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Het kind wast ___ (het kind) in bad.",
    correctAnswer: "zich",
    explanationTr: "Het-woord veya 3. tekil özne için dönüşlü zamir 'zich'tir.",
    explanationEn: "For a het-word or 3rd person singular subject, the reflexive pronoun is 'zich'."
  },
  {
    id: "q_pron_sum_019",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "De leraar helpt ___ (wij) met de oefening.",
    options: ["ons", "we", "onze"],
    correctAnswer: "ons",
    explanationTr: "'wij / we' (biz) zamirinin nesne hali 'ons'tur.",
    explanationEn: "The object form of 'wij / we' (we) is 'ons' (us)."
  },
  {
    id: "q_pron_sum_020",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive", "articles_plurals"],
    questionNl: "Dit is ___ (wij) huis (het-woord).",
    correctAnswer: "ons",
    explanationTr: "'huis' bir het-woord olduğu için iyelik zamiri 'ons'tur.",
    explanationEn: "Because 'huis' is a het-word, the possessive pronoun is 'ons'."
  },
  {
    id: "q_pron_sum_021",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_possessive", "articles_plurals"],
    questionNl: "Dit is ___ (wij) auto (de-woord).",
    options: ["ons", "onze", "mijn"],
    correctAnswer: "onze",
    explanationTr: "'auto' bir de-woord olduğu için iyelik zamiri 'onze'dir.",
    explanationEn: "Because 'auto' is a de-word, the possessive pronoun is 'onze'."
  },
  {
    id: "q_pron_sum_022",
    type: "fill_in",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Wij verheugen ___ (wij) op de vakantie.",
    correctAnswer: "ons",
    explanationTr: "'wij' öznesi için dönüşlü zamir 'ons'tur.",
    explanationEn: "The reflexive pronoun for the subject 'wij' is 'ons'."
  },
  {
    id: "q_pron_sum_023",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Ik zie jullie straks. Ik wacht op ___.",
    options: ["jullie", "ons", "hen"],
    correctAnswer: "jullie",
    explanationTr: "'jullie' (siz) zamirinin nesne hali yine 'jullie'dir.",
    explanationEn: "The object form of 'jullie' (you all) is also 'jullie'."
  },
  {
    id: "q_pron_sum_024",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Is dit ___ (jullie) huis?",
    correctAnswer: "jullie",
    explanationTr: "'jullie' için iyelik zamiri (sizin) yine 'jullie'dir.",
    explanationEn: "The possessive pronoun for 'jullie' (your) is also 'jullie'."
  },
  {
    id: "q_pron_sum_025",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Jullie moeten ___ goed concentreren.",
    options: ["je", "ons", "zich"],
    correctAnswer: "je",
    explanationTr: "'jullie' öznesi için dönüşlü zamir 'je'dir.",
    explanationEn: "The reflexive pronoun for the subject 'jullie' is 'je'."
  },
  {
    id: "q_pron_sum_026",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Waar zijn de studenten? Ik ken ___ (zij - pluralis) niet.",
    correctAnswer: "hen",
    explanationTr: "Çoğul (onlar) için nesne zamiri vurgulu olarak 'hen' (veya ze) şeklindedir.",
    explanationEn: "The emphasized object pronoun for plural (they) is 'hen' (or 'ze')."
  },
  {
    id: "q_pron_sum_027",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "De studenten maken ___ huiswerk.",
    options: ["hun", "zijn", "haar"],
    correctAnswer: "hun",
    explanationTr: "Çoğul (onlar) için iyelik zamiri (onların) 'hun'dur.",
    explanationEn: "The possessive pronoun for plural (their) is 'hun'."
  },
  {
    id: "q_pron_sum_028",
    type: "fill_in",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "De kinderen amuseren ___ (de kinderen) in de speeltuin.",
    correctAnswer: "zich",
    explanationTr: "Çoğul 3. şahıs (zij) için dönüşlü zamir 'zich'tir.",
    explanationEn: "For 3rd person plural (they), the reflexive pronoun is 'zich'."
  },
  {
    id: "q_pron_sum_029",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Wat is de objectvorm van het persoonlijk voornaamwoord 'u'?",
    options: ["u", "uw", "zich"],
    correctAnswer: "u",
    explanationTr: "Resmi 'u' zamirinin nesne hali de 'u'dur.",
    explanationEn: "The object form of the formal pronoun 'u' is 'u'."
  },
  {
    id: "q_pron_sum_030",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Wat is de possessief pronomen bij de subjectvorm 'hij'?",
    correctAnswer: "zijn",
    explanationTr: "'hij' için iyelik zamiri 'zijn'dir.",
    explanationEn: "The possessive pronoun for 'hij' is 'zijn'."
  },
  {
    id: "q_pron_sum_031",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Welk woord vult de tabel correct aan? Subject: wij -> Object: ...",
    options: ["ons", "we", "onze"],
    correctAnswer: "ons",
    explanationTr: "'wij' zamirinin objectvorm karşılığı 'ons'tur.",
    explanationEn: "The object form equivalent of 'wij' is 'ons'."
  },
  {
    id: "q_pron_sum_032",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive", "articles_plurals"],
    questionNl: "Vul het juiste possessief pronomen in voor een de-woord bij 'wij': ___ vrienden.",
    correctAnswer: "onze",
    explanationTr: "'vrienden' çoğul bir kelimedir (de-woord), bu yüzden 'onze' kullanılır.",
    explanationEn: "'vrienden' is a plural word (de-word), so 'onze' is used."
  },
  {
    id: "q_pron_sum_033",
    type: "multiple_choice",
    tags: ["schema_pronomina", "reflexive_verbs"],
    questionNl: "Welk reflexief pronomen hoort bij 'u'?",
    options: ["zich, u", "me, je", "ons"],
    correctAnswer: "zich, u",
    explanationTr: "'u' zamiri için hem 'zich' hem de 'u' dönüşlü zamir olarak kullanılabilir.",
    explanationEn: "For the pronoun 'u', both 'zich' and 'u' can be used as reflexive pronouns."
  },
  {
    id: "q_pron_sum_034",
    type: "fill_in",
    tags: ["schema_pronomina", "pronouns_possessive"],
    questionNl: "Wat is de possessief pronomen bij de subjectvorm 'zij' (dişil - tekil)?",
    correctAnswer: "haar",
    explanationTr: "Tekil dişil 'zij' için iyelik zamiri 'haar'dır.",
    explanationEn: "The possessive pronoun for singular feminine 'zij' is 'haar'."
  },
  {
    id: "q_pron_sum_035",
    type: "multiple_choice",
    tags: ["schema_pronomina", "pronouns_object"],
    questionNl: "Wat is de objectvorm bij 'jij / je'?",
    options: ["jou / je", "jouw", "jullie"],
    correctAnswer: "jou / je",
    explanationTr: "'jij / je' zamirinin nesne hali 'jou' veya 'je'dir.",
    explanationEn: "The object form of 'jij / je' is 'jou' or 'je'."
  },
  {
    id: "q_read_pron_036",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst: 'Dit is Mark. Hij woont in Den Haag. Ik ken hem al heel lang. Zijn vrouw heet Sarah. Haar broer woont bij hen.'\n\nNaar wie verwijst het woord 'hem' in de derde zin?",
    options: ["Mark", "De broer van Sarah", "Ik"],
    correctAnswer: "Mark",
    explanationTr: "Metinde 'hem' kelimesi Mark'ı (eril nesne - hem) temsil etmektedir.",
    explanationEn: "In the text, 'hem' represents Mark (masculine object form)."
  },
  {
    id: "q_read_pron_037",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de possessief pronomen in: 'Zijn vrouw heet Sarah. ___ (Sarah) broer woont bij hen.'",
    correctAnswer: "Haar",
    explanationTr: "Sarah (dişil) için iyelik zamiri 'haar' (onun) olur.",
    explanationEn: "For Sarah (feminine), the possessive pronoun is 'haar' (her)."
  },
  {
    id: "q_read_pron_038",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaar verwijst 'hen' in de laatste zin naar ('bij hen')?",
    options: ["Mark en zijn vrouw Sarah", "De broer", "Ik"],
    correctAnswer: "Mark en zijn vrouw Sarah",
    explanationTr: "'hen' burada çoğul/çift olan Mark ve Sarah'yı (onları/onlarda) belirtmektedir.",
    explanationEn: "'hen' here refers to the couple Mark and Sarah (them/at their place)."
  },
  {
    id: "q_read_pron_039",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst: 'Wij hebben een prachtig huis. Ons huis is heel groot. Onze tuin is ook erg mooi. We amuseren ons daar altijd.'\n\nVul de juiste possessief pronomen in bij het het-woord 'huis': '___ huis is heel groot.'",
    correctAnswer: "Ons",
    explanationTr: "'huis' bir het-woord olduğu için 'wij' zamirine ait iyelik 'ons' olur.",
    explanationEn: "Since 'huis' is a het-word, the possessive pronoun for 'wij' is 'ons'."
  },
  {
    id: "q_read_pron_040",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom is het 'Onze tuin' en niet 'Ons tuin'?",
    options: ["Omdat 'tuin' een de-woord is.", "Omdat 'tuin' meervoud is.", "Omdat het in de verleden tijd staat."],
    correctAnswer: "Omdat 'tuin' een de-woord is.",
    explanationTr: "'tuin' bir de-woord olduğu için 'onze' kullanılır.",
    explanationEn: "Because 'tuin' is a de-word, 'onze' is used."
  },
  {
    id: "q_read_pron_041",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul het reflexief pronomen in: 'We amuseren ___ daar altijd.'",
    correctAnswer: "ons",
    explanationTr: "'We' öznesi için dönüşlü zamir tablosunda 'ons' yer alır.",
    explanationEn: "In the reflexive pronoun table, 'ons' corresponds to the subject 'We'."
  },
  {
    id: "q_read_pron_042",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst: 'Jullie hebben een mooie hond. Jullie zorgen goed voor hem. Zijn naam is Max. Hij wast zich elke dag in de vijver.'\n\nWelk woord uit de tekst is de objectvorm van 'hij'?",
    options: ["hem", "zijn", "zich"],
    correctAnswer: "hem",
    explanationTr: "Metindeki 'voor hem' ifadesi 'hij' zamirinin nesne halidir.",
    explanationEn: "The expression 'voor hem' in the text is the object form of 'hij'."
  },
  {
    id: "q_read_pron_043",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul in (possessief pronomen bij de hond/hij): '___ naam is Max.'",
    correctAnswer: "Zijn",
    explanationTr: "Eril tekil hayvan için iyelik zamiri 'Zijn' (onun adı) olur.",
    explanationEn: "For a masculine singular animal, the possessive pronoun is 'Zijn' (His name)."
  },
  {
    id: "q_read_pron_044",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWaarom wordt 'zich' gebruikt in 'Hij wast zich'?",
    options: ["Omdat 'zich' het reflexieve pronomen is bij 'hij'.", "Omdat 'hij' een object is.", "Omdat het meervoud is."],
    correctAnswer: "Omdat 'zich' het reflexieve pronomen is bij 'hij'.",
    explanationTr: "'hij' öznesi dönüştü eylemde 'zich' zamirini gerektirir.",
    explanationEn: "The subject 'hij' requires the reflexive pronoun 'zich' in a reflexive action."
  },
  {
    id: "q_read_pron_045",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst: 'Maria en Paul zijn getrouwd. Hun huis staat in Haarlem. Ze hebben hun auto gisteren verkocht. Nu reizen ze met de trein.'\n\nVul het juiste possessief pronomen in: '___ huis staat in Haarlem.'",
    correctAnswer: "Hun",
    explanationTr: "Çoğul 'Ze/Zij' (onlar) için iyelik zamiri (onların) 'Hun'dur.",
    explanationEn: "The possessive pronoun for plural 'Ze/Zij' (their) is 'Hun'."
  },
  {
    id: "q_read_pron_046",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWat is de subjectvorm in de zin: 'Ze reizen met de trein'?",
    options: ["Ze", "hun", "haar"],
    correctAnswer: "Ze",
    explanationTr: "'Ze' (zij) burada özne konumundadır (subjectvorm).",
    explanationEn: "'Ze' (they) is in the subject position here (subjectvorm)."
  },
  {
    id: "q_read_pron_047",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst: 'Ik ben docent. Mijn naam is Karin. Ik bereid me voor op de les. Mijn studenten wachten op mij.'\n\nVul de objectvorm in: 'Mijn studenten wachten op ___.'",
    correctAnswer: "mij",
    explanationTr: "Edattan sonra 'ik' zamirinin vurgulu nesne hali 'mij' kullanılır.",
    explanationEn: "After a preposition, the emphasized object form of 'ik', which is 'mij', is used."
  },
  {
    id: "q_read_pron_048",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nWelk reflexief pronomen gebruikt de docent voor zichzelf?",
    options: ["me", "je", "zich"],
    correctAnswer: "me",
    explanationTr: "'Ik bereid me voor' cümlesinde 'me' dönüşlü zamir olarak kullanılmıştır.",
    explanationEn: "In the sentence 'Ik bereid me voor', 'me' is used as a reflexive pronoun."
  },
  {
    id: "q_read_pron_049",
    type: "fill_in",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "Lees de tekst uit de vorige vraag opnieuw.\n\nVul de possessief pronomen in: '___ naam is Karin.'",
    correctAnswer: "Mijn",
    explanationTr: "'ik' öznesi için iyelik zamiri (benim) 'Mijn'dir.",
    explanationEn: "The possessive pronoun for 'ik' (my) is 'Mijn'."
  },
  {
    id: "q_read_pron_050",
    type: "multiple_choice",
    tags: ["reading_comprehension", "schema_pronomina"],
    questionNl: "In welke categorie van de pronomina-tabel vind je de woorden: mijn, jouw, zijn, haar, ons, jullie, hun?",
    options: ["Possessief pronomen (İyelik)", "Objectvorm (Nesne)", "Reflexief pronomen (Dönüşlü)"],
    correctAnswer: "Possessief pronomen (İyelik)",
    explanationTr: "Bu kelimeler kime ait olduğunu gösteren 'possessief pronomen' (iyelik zamirleri) sütununda yer alır.",
    explanationEn: "These words belong to the 'possessief pronomen' (possessive pronouns) column indicating ownership."
  },
  
  // BİTİRİLMİŞ DÜZENSİZ FİİLLER (IRREGULAR VERBS) QUIZ VERİLERİ (HER FİİL İÇİN PRESENT, IMPERFECTUM VE PERFECTUM - 2'ŞER SORU)

  // 1. bakken
  {
    id: "q_irreg_bakken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (bakken) een taart voor het feest.",
    correctAnswer: "bak",
    explanationTr: "'ik' öznesi ile düzenli/düzensiz tüm fiiller sadece kök (stam) halindedir.",
    explanationEn: "With the pronoun 'ik', verbs are in their stem form."
  },
  {
    id: "q_irreg_bakken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Mijn vader ___ (bakken) elke zondag brood.",
    options: ["bak", "bakt", "bakken"],
    correctAnswer: "bakt",
    explanationTr: "'Mijn vader' (hij) 3. tekil şahıs olduğu için köke '-t' eklenir (bakt).",
    explanationEn: "'Mijn vader' is 3rd person singular, so '-t' is added to the stem (bakt)."
  },
  {
    id: "q_irreg_bakken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (bakken) gisteren vlees in de pan.",
    correctAnswer: "bakte",
    explanationTr: "'bakken' fiilinin tekil imperfectum (hikaye geçmiş zaman) hali 'bakte'dir.",
    explanationEn: "The singular imperfectum form of 'bakken' is 'bakte'."
  },
  {
    id: "q_irreg_bakken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (bakken) vroeger elke week koekjes.",
    options: ["bakte", "bakten", "gebakken"],
    correctAnswer: "bakten",
    explanationTr: "Çoğul öznelerde (wij) imperfectum eki '-ten' olur: bakten.",
    explanationEn: "For plural subjects (wij), the imperfectum suffix is '-ten': bakten."
  },
  {
    id: "q_irreg_bakken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wij hebben een lekkere cake ___ (bakken).",
    correctAnswer: "gebakken",
    explanationTr: "'bakken' fiilinin 3. hali (perfectum) 'gebakken'dir.",
    explanationEn: "The past participle (perfectum) of 'bakken' is 'gebakken'."
  },
  {
    id: "q_irreg_bakken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je al brood ___ (bakken)?",
    options: ["gebakken", "bakte", "bakken"],
    correctAnswer: "gebakken",
    explanationTr: "Perfectum yapısında 'hebben' ile birlikte 'gebakken' kullanılır.",
    explanationEn: "In the perfectum, 'gebakken' is used with 'hebben'."
  },

  // 2. beginnen
  {
    id: "q_irreg_beginnen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De les ___ (beginnen) om precies negen uur.",
    correctAnswer: "begint",
    explanationTr: "'De les' (het) 3. tekil şahıstır, bu yüzden köke '-t' eklenir (begint).",
    explanationEn: "'De les' is 3rd person singular, so '-t' is added to the stem (begint)."
  },
  {
    id: "q_irreg_beginnen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wanneer ___ (beginnen) jullie met de cursus?",
    options: ["begint", "beginnen", "begon"],
    correctAnswer: "beginnen",
    explanationTr: "Çoğul 'jullie' zamiri ile fiil mastar (beginnen) halinde kalır.",
    explanationEn: "With the plural pronoun 'jullie', the verb remains in the infinitive (beginnen)."
  },
  {
    id: "q_irreg_beginnen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De film ___ (beginnen) gisteren te laat.",
    correctAnswer: "begon",
    explanationTr: "'beginnen' düzensiz bir fiildir; tekil imperfectum hali 'begon'dur.",
    explanationEn: "'beginnen' is irregular; its singular imperfectum form is 'begon'."
  },
  {
    id: "q_irreg_beginnen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De lessen ___ (beginnen) om acht uur vanmorgen.",
    options: ["begon", "begonnen", "begint"],
    correctAnswer: "begonnen",
    explanationTr: "Çoğul (de lessen) için imperfectum hali 'begonnen' olur.",
    explanationEn: "The plural imperfectum for 'de lessen' is 'begonnen'."
  },
  {
    id: "q_irreg_beginnen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Het feest is al ___ (beginnen).",
    correctAnswer: "begonnen",
    explanationTr: "'beginnen' fiili durum değişikliği bildirdiği için 'zijn' ile kullanılır ve 3. hali 'begonnen'dir.",
    explanationEn: "'beginnen' indicates a state change, uses 'zijn', and its past participle is 'begonnen'."
  },
  {
    id: "q_irreg_beginnen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Is de vergadering al ___ (beginnen)?",
    options: ["begonnen", "begon", "beginnen"],
    correctAnswer: "begonnen",
    explanationTr: "Perfectum formunda 'begonnen' kullanılır.",
    explanationEn: "'begonnen' is used in the perfectum form."
  },

  // 3. begrijpen
  {
    id: "q_irreg_begrijpen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (begrijpen) deze moeilijke vraag niet.",
    correctAnswer: "begrijp",
    explanationTr: "'ik' öznesi ile fiil kök halindedir (begrijp).",
    explanationEn: "With the subject 'ik', the verb is in its stem form (begrijp)."
  },
  {
    id: "q_irreg_begrijpen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Jij ___ (begrijpen) de uitleg heel goed.",
    options: ["begrijp", "begrijpt", "begrijpen"],
    correctAnswer: "begrijpt",
    explanationTr: "'jij' öznesi için fiil köküne '-t' eklenir (begrijpt).",
    explanationEn: "For the subject 'jij', '-t' is added to the stem (begrijpt)."
  },
  {
    id: "q_irreg_begrijpen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (begrijpen) de leraar meteen.",
    correctAnswer: "begreep",
    explanationTr: "'begrijpen' düzensiz fiilinin tekil imperfectum hali 'begreep'dir.",
    explanationEn: "The singular imperfectum of the irregular verb 'begrijpen' is 'begreep'."
  },
  {
    id: "q_irreg_begrijpen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De studenten ___ (begrijpen) de regel direct.",
    options: ["begreep", "begrepen", "begrijpen"],
    correctAnswer: "begrepen",
    explanationTr: "Çoğul (de studenten) için imperfectum hali 'begrepen' olur.",
    explanationEn: "The plural imperfectum for 'de studenten' is 'begrepen'."
  },
  {
    id: "q_irreg_begrijpen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de grammaticaregel ___ (begrijpen)?",
    correctAnswer: "begrepen",
    explanationTr: "'begrijpen' fiilinin 3. hali 'begrepen'dir.",
    explanationEn: "The past participle of 'begrijpen' is 'begrepen'."
  },
  {
    id: "q_irreg_begrijpen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb het niet goed ___ (begrijpen).",
    options: ["begrepen", "begreep", "begrijpen"],
    correctAnswer: "begrepen",
    explanationTr: "Hebben + begrepen kalıbı kullanılır.",
    explanationEn: "The combination hebben + begrepen is used."
  },

  // 4. bewegen
  {
    id: "q_irreg_bewegen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De hond ___ (bewegen) vandaag bijna niet.",
    correctAnswer: "beweegt",
    explanationTr: "'De hond' (hij) 3. tekil şahıstır, bu yüzden köke '-t' gelir (beweegt).",
    explanationEn: "'De hond' is 3rd person singular, so '-t' is added to the stem (beweegt)."
  },
  {
    id: "q_irreg_bewegen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (bewegen) te weinig op een dag.",
    options: ["beweeg", "beweegt", "bewegen"],
    correctAnswer: "beweeg",
    explanationTr: "'ik' öznesi için fiil kökü (beweeg) kullanılır.",
    explanationEn: "For the subject 'ik', the stem (beweeg) is used."
  },
  {
    id: "q_irreg_bewegen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De takken ___ (bewegen) hevig in de wind.",
    correctAnswer: "bewogen",
    explanationTr: "Çoğul (de takken) için imperfectum hali 'bewogen' olur.",
    explanationEn: "The plural imperfectum for 'de takken' is 'bewogen'."
  },
  {
    id: "q_irreg_bewegen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (bewegen) zijn arm langzaam.",
    options: ["bewoog", "bewogen", "beweegt"],
    correctAnswer: "bewoog",
    explanationTr: "Tekil 'hij' için imperfectum hali 'bewoog'dur.",
    explanationEn: "The singular imperfectum for 'hij' is 'bewoog'."
  },
  {
    id: "q_irreg_bewegen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb vandaag heel veel ___ (bewegen).",
    correctAnswer: "bewogen",
    explanationTr: "'bewegen' fiilinin 3. hali 'bewogen'dir.",
    explanationEn: "The past participle of 'bewegen' is 'bewogen'."
  },
  {
    id: "q_irreg_bewegen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je genoeg ___ (bewegen) deze week?",
    options: ["bewogen", "bewoog", "bewegen"],
    correctAnswer: "bewogen",
    explanationTr: "Perfectum formunda 'bewogen' kullanılır.",
    explanationEn: "'bewogen' is used in the perfectum form."
  },

  // 5. bidden
  {
    id: "q_irreg_bidden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Mijn oma ___ (bidden) elke avond voor het slapen.",
    correctAnswer: "bidt",
    explanationTr: "'Mijn oma' (zij) 3. tekil şahıstır, kök 'bid' + t = bidt.",
    explanationEn: "'Mijn oma' is 3rd person singular, stem 'bid' + t = bidt."
  },
  {
    id: "q_irreg_bidden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wij ___ (bidden) voor vrede in de wereld.",
    options: ["bid", "bidt", "bidden"],
    correctAnswer: "bidden",
    explanationTr: "Çoğul 'wij' için fiil mastar (bidden) kalır.",
    explanationEn: "For the plural 'wij', the verb remains in the infinitive (bidden)."
  },
  {
    id: "q_irreg_bidden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (bidden) vroeger voor een goede reis.",
    correctAnswer: "baden",
    explanationTr: "Çoğul imperfectum hali 'baden'dir.",
    explanationEn: "The plural imperfectum form is 'baden'."
  },
  {
    id: "q_irreg_bidden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De oude man ___ (bidden) stil in de kerk.",
    options: ["bad", "baden", "bidt"],
    correctAnswer: "bad",
    explanationTr: "Tekil imperfectum hali 'bad'dir.",
    explanationEn: "The singular imperfectum form is 'bad'."
  },
  {
    id: "q_irreg_bidden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij heeft voor haar gezondheid ___ (bidden).",
    correctAnswer: "gebeden",
    explanationTr: "'bidden' fiilinin 3. hali 'gebeden'dir.",
    explanationEn: "The past participle of 'bidden' is 'gebeden'."
  },
  {
    id: "q_irreg_bidden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je in de tempel ___ (bidden)?",
    options: ["gebeden", "bad", "bidden"],
    correctAnswer: "gebeden",
    explanationTr: "Hebben + gebeden yapısı kullanılır.",
    explanationEn: "The combination hebben + gebeden is used."
  },

  // 6. bieden
  {
    id: "q_irreg_bieden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (bieden) honderd euro voor deze fiets.",
    correctAnswer: "bied",
    explanationTr: "'ik' öznesi için fiil kökü 'bied' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'bied' is used."
  },
  {
    id: "q_irreg_bieden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (bieden) zijn hulp aan.",
    options: ["bied", "biedt", "bieden"],
    correctAnswer: "biedt",
    explanationTr: "3. tekil şahıs (hij) için kök 'bied' + t = biedt.",
    explanationEn: "For 3rd person singular (hij), stem 'bied' + t = biedt."
  },
  {
    id: "q_irreg_bieden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (bieden) me gisteren een gratis drankje aan.",
    correctAnswer: "bood",
    explanationTr: "Tekil imperfectum hali 'bood'dur.",
    explanationEn: "The singular imperfectum form is 'bood'."
  },
  {
    id: "q_irreg_bieden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kopers ___ (bieden) veel geld op de veiling.",
    options: ["bood", "boden", "biedt"],
    correctAnswer: "boden",
    explanationTr: "Çoğul imperfectum hali 'boden'dir.",
    explanationEn: "The plural imperfectum form is 'boden'."
  },
  {
    id: "q_irreg_bieden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ze hebben veel geld ___ (bieden) voor het schilderij.",
    correctAnswer: "geboden",
    explanationTr: "'bieden' fiilinin 3. hali 'geboden'dir.",
    explanationEn: "The past participle of 'bieden' is 'geboden'."
  },
  {
    id: "q_irreg_bieden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wat heb je voor dit huis ___ (bieden)?",
    options: ["geboden", "bood", "bieden"],
    correctAnswer: "geboden",
    explanationTr: "Perfectum formunda 'geboden' kullanılır.",
    explanationEn: "'geboden' is used in the perfectum form."
  },

  // 7. bijten
  {
    id: "q_irreg_bijten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Onze hond ___ (bijten) gelukkig niet.",
    correctAnswer: "bijt",
    explanationTr: "'Onze hond' (hij) için kök 'bijt' (zaten t ile bittiği için ekstra t almaz).",
    explanationEn: "For 'Onze hond', the stem is 'bijt' (no extra t needed since it ends in t)."
  },
  {
    id: "q_irreg_bijten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (bijten) je in die zure appel?",
    options: ["bijt", "bijten", "beet"],
    correctAnswer: "bijt",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra geldiği için 't' düşer: bijt.",
    explanationEn: "In a question where 'jij' follows the verb, the 't' drops: bijt."
  },
  {
    id: "q_irreg_bijten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Gisteren ___ (bijten) een insect in mijn arm.",
    correctAnswer: "beet",
    explanationTr: "Tekil imperfectum hali 'beet'dir.",
    explanationEn: "The singular imperfectum form is 'beet'."
  },
  {
    id: "q_irreg_bijten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Sommige honden ___ (bijten) als ze bang zijn.",
    options: ["beet", "beten", "bijt"],
    correctAnswer: "beten",
    explanationTr: "Çoğul imperfectum hali 'beten'dir.",
    explanationEn: "The plural imperfectum form is 'beten'."
  },
  {
    id: "q_irreg_bijten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik ben gisteren door een hond ___ (bijten).",
    correctAnswer: "gebeten",
    explanationTr: "'bijten' fiili 'zijn' ile kurulur, 3. hali 'gebeten'dir.",
    explanationEn: "'bijten' uses 'zijn', and its past participle is 'gebeten'."
  },
  {
    id: "q_irreg_bijten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je ooit door een slang ___ (bijten)?",
    options: ["gebeten", "beet", "bijten"],
    correctAnswer: "gebeten",
    explanationTr: "Perfectum formunda 'gebeten' kullanılır.",
    explanationEn: "'gebeten' is used in the perfectum form."
  },

  // 8. binden
  {
    id: "q_irreg_binden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (binden) de touwen stevig vast.",
    correctAnswer: "bind",
    explanationTr: "'ik' öznesi için fiil kökü 'bind' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'bind' is used."
  },
  {
    id: "q_irreg_binden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (binden) zijn sjaal om zijn nek.",
    options: ["bind", "bindt", "binden"],
    correctAnswer: "bindt",
    explanationTr: "3. tekil şahıs için kök 'bind' + t = bindt.",
    explanationEn: "For 3rd person singular, stem 'bind' + t = bindt."
  },
  {
    id: "q_irreg_binden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (binden) snel zijn schoenen vast.",
    correctAnswer: "bond",
    explanationTr: "Tekil imperfectum hali 'bond'dur.",
    explanationEn: "The singular imperfectum form is 'bond'."
  },
  {
    id: "q_irreg_binden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De mannen ___ (binden) de dozen samen.",
    options: ["bond", "bonden", "bindt"],
    correctAnswer: "bonden",
    explanationTr: "Çoğul imperfectum hali 'bonden'dir.",
    explanationEn: "The plural imperfectum form is 'bonden'."
  },
  {
    id: "q_irreg_binden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ze hebben het pakket stevig vast___ (binden).",
    correctAnswer: "gebonden",
    explanationTr: "'binden' fiilinin 3. hali 'gebonden'dir.",
    explanationEn: "The past participle of 'binden' is 'gebonden'."
  },
  {
    id: "q_irreg_binden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de knoop goed ___ (binden)?",
    options: ["gebonden", "bond", "binden"],
    correctAnswer: "gebonden",
    explanationTr: "Perfectum formunda 'gebonden' kullanılır.",
    explanationEn: "'gebonden' is used in the perfectum form."
  },

  // 9. blazen
  {
    id: "q_irreg_blazen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De koude wind ___ (blazen) erg hard vandaag.",
    correctAnswer: "blaast",
    explanationTr: "'De wind' (hij) 3. tekil şahıstır, kök 'blaas' + t = blaast.",
    explanationEn: "'De wind' is 3rd person singular, stem 'blaas' + t = blaast."
  },
  {
    id: "q_irreg_blazen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (blazen) de kaarsjes uit.",
    options: ["blaas", "blaast", "blazen"],
    correctAnswer: "blaas",
    explanationTr: "'ik' öznesi için fiil kökü 'blaas' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'blaas' is used."
  },
  {
    id: "q_irreg_blazen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (blazen) gisteren alle kaarsjes op de taart uit.",
    correctAnswer: "blies",
    explanationTr: "Tekil imperfectum hali 'blies'dir.",
    explanationEn: "The singular imperfectum form is 'blies'."
  },
  {
    id: "q_irreg_blazen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De stormwinden ___ (blazen) de daken eraf.",
    options: ["blies", "bliezen", "blaast"],
    correctAnswer: "bliezen",
    explanationTr: "Çoğul imperfectum hali 'bliezen'dir.",
    explanationEn: "The plural imperfectum form is 'bliezen'."
  },
  {
    id: "q_irreg_blazen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "De storm heeft gisteren heel hard ___ (blazen).",
    correctAnswer: "geblazen",
    explanationTr: "'blazen' fiilinin 3. hali 'geblazen'dir.",
    explanationEn: "The past participle of 'blazen' is 'geblazen'."
  },
  {
    id: "q_irreg_blazen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je op het warme eten ___ (blazen)?",
    options: ["geblazen", "blies", "blazen"],
    correctAnswer: "geblazen",
    explanationTr: "Hebben + geblazen yapısı kullanılır.",
    explanationEn: "The combination hebben + geblazen is used."
  },

  // 10. blijken
  {
    id: "q_irreg_blijken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Het ___ (blijken) een grote vergissing te zijn.",
    correctAnswer: "blijkt",
    explanationTr: "'Het' (3. tekil şahıs) için kök 'blijck/blijk' + t = blijkt.",
    explanationEn: "For 'Het' (3rd person singular), stem + t = blijkt."
  },
  {
    id: "q_irreg_blijken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Dat ___ (blijken) wel uit de resultaten.",
    options: ["blijk", "blijkt", "blijken"],
    correctAnswer: "blijkt",
    explanationTr: "'Dat' (het) için fiil çekimi 'blijkt' olur.",
    explanationEn: "For 'Dat' (it), the verb conjugation is 'blijkt'."
  },
  {
    id: "q_irreg_blijken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Dat ___ (blijken) achteraf een heel goed idee.",
    correctAnswer: "bleek",
    explanationTr: "Tekil imperfectum hali 'bleek'dir.",
    explanationEn: "The singular imperfectum form is 'bleek'."
  },
  {
    id: "q_irreg_blijken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De plannen ___ (blijken) niet te werken.",
    options: ["bleek", "bleken", "blijkt"],
    correctAnswer: "bleken",
    explanationTr: "Çoğul imperfectum hali 'bleken'dir.",
    explanationEn: "The plural imperfectum form is 'bleken'."
  },
  {
    id: "q_irreg_blijken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Het is gebleken dat hij gelijk ___ (zijn).",
    correctAnswer: "had", // or was, let's keep it simple: Het is gebleken dat hij gelijk had.
    explanationTr: "Bu cümlede 'gebleken' perfectum formudur.",
    explanationEn: "In this sentence, 'gebleken' is the perfectum form."
  },
  {
    id: "q_irreg_blijken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wat is er achteraf ___ (blijken)?",
    options: ["gebleken", "bleek", "blijken"],
    correctAnswer: "gebleken",
    explanationTr: "'blijken' fiili 'zijn' ile kullanılır, 3. hali 'gebleken'dir.",
    explanationEn: "'blijken' uses 'zijn', and its past participle is 'gebleken'."
  },

  // 11. blijven
  {
    id: "q_irreg_blijven_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (blijven) vandaag lekker thuis.",
    correctAnswer: "blijf",
    explanationTr: "'ik' öznesi için fiil kökü 'blijf' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'blijf' is used."
  },
  {
    id: "q_irreg_blijven_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (blijven) jullie zo lang?",
    options: ["blijf", "blijft", "blijven"],
    correctAnswer: "blijven",
    explanationTr: "Çoğul 'jullie' için fiil mastar (blijven) halindedir.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (blijven)."
  },
  {
    id: "q_irreg_blijven_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (blijven) gisteren heel lang praten.",
    correctAnswer: "bleef",
    explanationTr: "Tekil imperfectum hali 'bleef'dir.",
    explanationEn: "The singular imperfectum form is 'bleef'."
  },
  {
    id: "q_irreg_blijven_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (blijven) vorig jaar in Amsterdam.",
    options: ["bleef", "bleven", "blijft"],
    correctAnswer: "bleven",
    explanationTr: "Çoğul imperfectum hali 'bleven'dir.",
    explanationEn: "The plural imperfectum form is 'bleven'."
  },
  {
    id: "q_irreg_blijven_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wij zijn vorig jaar in Amsterdam ___ (blijven).",
    correctAnswer: "gebleven",
    explanationTr: "'blijven' durum değişikliği/konum bildirdiği için 'zijn' ile kurulur, 3. hali 'gebleven'dir.",
    explanationEn: "'blijven' uses 'zijn', and its past participle is 'gebleven'."
  },
  {
    id: "q_irreg_blijven_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je lang in het hotel ___ (blijven)?",
    options: ["gebleven", "bleef", "blijven"],
    correctAnswer: "gebleven",
    explanationTr: "Perfectum formunda 'gebleven' kullanılır.",
    explanationEn: "'gebleven' is used in the perfectum form."
  },

  // 12. breken
  {
    id: "q_irreg_breken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Het dunne glas ___ (breken) heel erg snel.",
    correctAnswer: "breekt",
    explanationTr: "'Het glas' (het) 3. tekil şahıstır, kök 'breek' + t = breekt.",
    explanationEn: "'Het glas' is 3rd person singular, stem 'breek' + t = breekt."
  },
  {
    id: "q_irreg_breken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (breken) deze tak in twee stukken.",
    options: ["breek", "breekt", "breken"],
    correctAnswer: "breek",
    explanationTr: "'ik' öznesi için fiil kökü 'breek' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'breek' is used."
  },
  {
    id: "q_irreg_breken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Tijdens het skiën ___ (breken) ik mijn been.",
    correctAnswer: "brak",
    explanationTr: "Tekil imperfectum hali 'brak'dir.",
    explanationEn: "The singular imperfectum form is 'brak'."
  },
  {
    id: "q_irreg_breken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kinderen ___ (breken) per ongeluk het raam.",
    options: ["brak", "braken", "breekt"],
    correctAnswer: "braken",
    explanationTr: "Çoğul imperfectum hali 'braken'dir.",
    explanationEn: "The plural imperfectum form is 'braken'."
  },
  {
    id: "q_irreg_breken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij heeft per ongeluk het raam ___ (breken).",
    correctAnswer: "gebroken",
    explanationTr: "'breken' fiilinin 3. hali 'gebroken'dir.",
    explanationEn: "The past participle of 'breken' is 'gebroken'."
  },
  {
    id: "q_irreg_breken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Is het glas ___ (breken)?",
    options: ["gebroken", "brak", "breken"],
    correctAnswer: "gebroken",
    explanationTr: "Perfectum formunda 'gebroken' kullanılır.",
    explanationEn: "'gebroken' is used in the perfectum form."
  },

  // 13. brengen
  {
    id: "q_irreg_brengen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (brengen) je straks naar het station.",
    correctAnswer: "breng",
    explanationTr: "'ik' öznesi için fiil kökü 'breng' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'breng' is used."
  },
  {
    id: "q_irreg_brengen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (brengen) vandaag de kinderen naar school?",
    options: ["breng", "brengt", "brengen"],
    correctAnswer: "brengt",
    explanationTr: "'Wie' (kim) soru kelimesi tekil işlem görür, kök 'breng' + t = brengt.",
    explanationEn: "'Wie' (who) is treated as singular, stem 'breng' + t = brengt."
  },
  {
    id: "q_irreg_brengen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (brengen) gisteren een lekkere taart mee.",
    correctAnswer: "bracht",
    explanationTr: "Tekil imperfectum hali 'bracht'tir.",
    explanationEn: "The singular imperfectum form is 'bracht'."
  },
  {
    id: "q_irreg_brengen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De bezorgers ___ (brengen) het pakket op tijd.",
    options: ["bracht", "brachten", "brengt"],
    correctAnswer: "brachten",
    explanationTr: "Çoğul imperfectum hali 'brachten'dir.",
    explanationEn: "The plural imperfectum form is 'brachten'."
  },
  {
    id: "q_irreg_brengen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de auto naar de garage ___ (brengen)?",
    correctAnswer: "gebracht",
    explanationTr: "'brengen' fiilinin 3. hali 'gebracht'tir.",
    explanationEn: "The past participle of 'brengen' is 'gebracht'."
  },
  {
    id: "q_irreg_brengen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb goed nieuws ___ (brengen).",
    options: ["gebracht", "bracht", "brengen"],
    correctAnswer: "gebracht",
    explanationTr: "Hebben + gebracht yapısı kullanılır.",
    explanationEn: "The combination hebben + gebracht is used."
  },

  // 14. denken
  {
    id: "q_irreg_denken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (denken) heel vaak aan jou.",
    correctAnswer: "denk",
    explanationTr: "'ik' öznesi için fiil kökü 'denk' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'denk' is used."
  },
  {
    id: "q_irreg_denken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (denken) jij van dit plan?",
    options: ["denk", "denkt", "denken"],
    correctAnswer: "denkt",
    explanationTr: "'jij' öznesi için kök 'denk' + t = denkt.",
    explanationEn: "For the subject 'jij', stem 'denk' + t = denkt."
  },
  {
    id: "q_irreg_denken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (denken) dat het al zondag was.",
    correctAnswer: "dacht",
    explanationTr: "Tekil imperfectum hali 'dacht'tir.",
    explanationEn: "The singular imperfectum form is 'dacht'."
  },
  {
    id: "q_irreg_denken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (denken) aan onze mooie vakantie.",
    options: ["dacht", "dachten", "denkt"],
    correctAnswer: "dachten",
    explanationTr: "Çoğul imperfectum hali 'dachten'dir.",
    explanationEn: "The plural imperfectum form is 'dachten'."
  },
  {
    id: "q_irreg_denken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb er echt niet aan ___ (denken).",
    correctAnswer: "gedacht",
    explanationTr: "'denken' fiilinin 3. hali 'gedacht'tir.",
    explanationEn: "The past participle of 'denken' is 'gedacht'."
  },
  {
    id: "q_irreg_denken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je aan je afspraak ___ (denken)?",
    options: ["gedacht", "dacht", "denken"],
    correctAnswer: "gedacht",
    explanationTr: "Perfectum formunda 'gedacht' kullanılır.",
    explanationEn: "'gedacht' is used in the perfectum form."
  },

  // 15. doen
  {
    id: "q_irreg_doen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (doen) jij morgen in de stad?",
    correctAnswer: "doe",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 't' düşer: doe.",
    explanationEn: "In a question where 'jij' follows the verb, the 't' drops: doe."
  },
  {
    id: "q_irreg_doen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (doen) altijd erg hard zijn best.",
    options: ["doe", "doet", "doen"],
    correctAnswer: "doet",
    explanationTr: "3. tekil şahıs (hij) için 'doen' fiili 'doet' olur.",
    explanationEn: "For 3rd person singular (hij), the verb 'doen' becomes 'doet'."
  },
  {
    id: "q_irreg_doen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (doen) gisteren al mijn boodschappen.",
    correctAnswer: "deed",
    explanationTr: "Tekil imperfectum hali 'deed'dir.",
    explanationEn: "The singular imperfectum form is 'deed'."
  },
  {
    id: "q_irreg_doen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (doen) de deur meteen open.",
    options: ["deed", "deden", "doet"],
    correctAnswer: "deden",
    explanationTr: "Çoğul imperfectum hali 'deden'dir.",
    explanationEn: "The plural imperfectum form is 'deden'."
  },
  {
    id: "q_irreg_doen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Dat heb je echt heel goed ___ (doen).",
    correctAnswer: "gedaan",
    explanationTr: "'doen' fiilinin 3. hali 'gedaan'dır.",
    explanationEn: "The past participle of 'doen' is 'gedaan'."
  },
  {
    id: "q_irreg_doen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je je huiswerk al ___ (doen)?",
    options: ["gedaan", "deed", "doen"],
    correctAnswer: "gedaan",
    explanationTr: "Hebben + gedaan kalıbı kullanılır.",
    explanationEn: "The combination hebben + gedaan is used."
  },

  // 16. dragen
  {
    id: "q_irreg_dragen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Zij ___ (dragen) vandaag een erg mooie jas.",
    correctAnswer: "draagt",
    explanationTr: "3. tekil şahıs (zij) için kök 'draag' + t = draagt.",
    explanationEn: "For 3rd person singular (zij), stem 'draag' + t = draagt."
  },
  {
    id: "q_irreg_dragen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (dragen) nooit een pak naar haar werk.",
    options: ["draag", "draagt", "dragen"],
    correctAnswer: "draag",
    explanationTr: "'ik' öznesi için fiil kökü 'draag' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'draag' is used."
  },
  {
    id: "q_irreg_dragen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (dragen) gisteren een zware doos naar boven.",
    correctAnswer: "droeg",
    explanationTr: "Tekil imperfectum hali 'droeg'dür.",
    explanationEn: "The singular imperfectum form is 'droeg'."
  },
  {
    id: "q_irreg_dragen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De sterke mannen ___ (dragen) de piano.",
    options: ["droeg", "droegen", "draagt"],
    correctAnswer: "droegen",
    explanationTr: "Çoğul imperfectum hali 'droegen'dir.",
    explanationEn: "The plural imperfectum form is 'droegen'."
  },
  {
    id: "q_irreg_dragen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb dit groene shirt nooit ___ (dragen).",
    correctAnswer: "gedragen",
    explanationTr: "'dragen' fiilinin 3. hali 'gedragen'dir.",
    explanationEn: "The past participle of 'dragen' is 'gedragen'."
  },
  {
    id: "q_irreg_dragen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je een helm ___ (dragen) tijdens het fietsen?",
    options: ["gedragen", "droeg", "dragen"],
    correctAnswer: "gedragen",
    explanationTr: "Perfectum formunda 'gedragen' kullanılır.",
    explanationEn: "'gedragen' is used in the perfectum form."
  },

  // 17. drinken
  {
    id: "q_irreg_drinken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (drinken) elke ochtend twee koppen koffie.",
    correctAnswer: "drink",
    explanationTr: "'ik' öznesi için fiil kökü 'drink' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'drink' is used."
  },
  {
    id: "q_irreg_drinken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (drinken) te veel frisdrank op een dag.",
    options: ["drink", "drinkt", "drinken"],
    correctAnswer: "drinkt",
    explanationTr: "3. tekil şahıs (hij) için kök 'drink' + t = drinkt.",
    explanationEn: "For 3rd person singular (hij), stem 'drink' + t = drinkt."
  },
  {
    id: "q_irreg_drinken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (drinken) gisteren gezellig bier in het café.",
    correctAnswer: "dronken",
    explanationTr: "Çoğul imperfectum hali 'dronken'dir.",
    explanationEn: "The plural imperfectum form is 'dronken'."
  },
  {
    id: "q_irreg_drinken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wie ___ (drinken) al de melk op?",
    options: ["dronk", "dronken", "drinkt"],
    correctAnswer: "dronk",
    explanationTr: "Tekil imperfectum hali 'dronk'tir.",
    explanationEn: "The singular imperfectum form is 'dronk'."
  },
  {
    id: "q_irreg_drinken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je vandaag genoeg water ___ (drinken)?",
    correctAnswer: "gedronken",
    explanationTr: "'drinken' fiilinin 3. hali 'gedronken'dir.",
    explanationEn: "The past participle of 'drinken' is 'gedronken'."
  },
  {
    id: "q_irreg_drinken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb verse sinaasappelsap ___ (drinken).",
    options: ["gedronken", "dronk", "drinken"],
    correctAnswer: "gedronken",
    explanationTr: "Hebben + gedronken yapısı kullanılır.",
    explanationEn: "The combination hebben + gedronken is used."
  },

  // 18. eten
  {
    id: "q_irreg_eten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wij ___ (eten) vanavond gezellig samen pizza.",
    correctAnswer: "eten",
    explanationTr: "Çoğul 'wij' öznesi ile fiil mastar (eten) kalır.",
    explanationEn: "With the plural subject 'wij', the verb remains in the infinitive (eten)."
  },
  {
    id: "q_irreg_eten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (eten) jij graag als ontbijt?",
    options: ["eet", "eten", "at"],
    correctAnswer: "eet",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 't' düşer: eet.",
    explanationEn: "In a question where 'jij' follows the verb, the 't' drops: eet."
  },
  {
    id: "q_irreg_eten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (eten) gisteren een erg lekkere appel.",
    correctAnswer: "at",
    explanationTr: "Tekil imperfectum hali 'at'tir.",
    explanationEn: "The singular imperfectum form is 'at'."
  },
  {
    id: "q_irreg_eten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (eten) samen taart op het feest.",
    options: ["at", "aten", "eet"],
    correctAnswer: "aten",
    explanationTr: "Çoğul imperfectum hali 'aten'dir.",
    explanationEn: "The plural imperfectum form is 'aten'."
  },
  {
    id: "q_irreg_eten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je al warm ___ (eten)?",
    correctAnswer: "gegeten",
    explanationTr: "'eten' fiilinin 3. hali 'gegeten'dir.",
    explanationEn: "The past participle of 'eten' is 'gegeten'."
  },
  {
    id: "q_irreg_eten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wij hebben gisteren sushi ___ (eten).",
    options: ["gegeten", "at", "eten"],
    correctAnswer: "gegeten",
    explanationTr: "Perfectum formunda 'gegeten' kullanılır.",
    explanationEn: "'gegeten' is used in the perfectum form."
  },

  // 19. gaan
  {
    id: "q_irreg_gaan_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (gaan) vanmiddag naar de stad.",
    correctAnswer: "ga",
    explanationTr: "'ik' öznesi için 'gaan' fiili 'ga' olur.",
    explanationEn: "For the subject 'ik', the verb 'gaan' becomes 'ga'."
  },
  {
    id: "q_irreg_gaan_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waar ___ (gaan) jij naartoe?",
    options: ["ga", "gaat", "gaan"],
    correctAnswer: "gaat",
    explanationTr: "'jij' öznesi fiilden ÖNCE geldiğinde 't' alır (gaat).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (gaat)."
  },
  {
    id: "q_irreg_gaan_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (gaan) gisteren met z'n allen sporten.",
    correctAnswer: "gingen",
    explanationTr: "Çoğul imperfectum hali 'gingen'dir.",
    explanationEn: "The plural imperfectum form is 'gingen'."
  },
  {
    id: "q_irreg_gaan_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (gaan) vorig jaar naar Frankrijk.",
    options: ["ging", "gingen", "gaat"],
    correctAnswer: "ging",
    explanationTr: "Tekil imperfectum hali 'ging'dir.",
    explanationEn: "The singular imperfectum form is 'ging'."
  },
  {
    id: "q_irreg_gaan_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Zij is gisteren heel vroeg naar huis ___ (gaan).",
    correctAnswer: "gegaan",
    explanationTr: "'gaan' hareket bildirdiği için 'zijn' ile kurulur, 3. hali 'gegaan'dır.",
    explanationEn: "'gaan' indicates motion, uses 'zijn', and its past participle is 'gegaan'."
  },
  {
    id: "q_irreg_gaan_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je wel eens naar Parijs ___ (gaan)?",
    options: ["gegaan", "ging", "gaan"],
    correctAnswer: "gegaan",
    explanationTr: "Perfectum formunda 'gegaan' kullanılır.",
    explanationEn: "'gegaan' is used in the perfectum form."
  },

  // 20. geven
  {
    id: "q_irreg_geven_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (geven) mijn vriend een mooi cadeau.",
    correctAnswer: "geef",
    explanationTr: "'ik' öznesi için fiil kökü 'geef' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'geef' is used."
  },
  {
    id: "q_irreg_geven_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (geven) jou dat advies?",
    options: ["geef", "geeft", "geven"],
    correctAnswer: "geeft",
    explanationTr: "3. tekil şahıs için kök 'geef' + t = geeft.",
    explanationEn: "For 3rd person singular, stem 'geef' + t = geeft."
  },
  {
    id: "q_irreg_geven_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (geven) me zijn persoonlijke nummer.",
    correctAnswer: "gaf",
    explanationTr: "Tekil imperfectum hali 'gaf'tir.",
    explanationEn: "The singular imperfectum form is 'gaf'."
  },
  {
    id: "q_irreg_geven_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De ouders ___ (geven) een feest voor hun zoon.",
    options: ["gaf", "gaven", "geeft"],
    correctAnswer: "gaven",
    explanationTr: "Çoğul imperfectum hali 'gaven'dir.",
    explanationEn: "The plural imperfectum form is 'gaven'."
  },
  {
    id: "q_irreg_geven_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wat heb je haar voor haar verjaardag ___ (geven)?",
    correctAnswer: "gegeven",
    explanationTr: "'geven' fiilinin 3. hali 'gegeven'dir.",
    explanationEn: "The past participle of 'geven' is 'gegeven'."
  },
  {
    id: "q_irreg_geven_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb je al antwoord ___ (geven).",
    options: ["gegeven", "gaf", "geven"],
    correctAnswer: "gegeven",
    explanationTr: "Hebben + gegeven yapısı kullanılır.",
    explanationEn: "The combination hebben + gegeven is used."
  },

  // 21. hangen
  {
    id: "q_irreg_hangen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De nieuwe jas ___ (hangen) netjes in de hal.",
    correctAnswer: "hangt",
    explanationTr: "3. tekil şahıs (het/de jas) için kök 'hang' + t = hangt.",
    explanationEn: "For 3rd person singular, stem 'hang' + t = hangt."
  },
  {
    id: "q_irreg_hangen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waar ___ (hangen) we dit schilderij op?",
    options: ["hang", "hangt", "hangen"],
    correctAnswer: "hangen",
    explanationTr: "Çoğul 'we' için fiil mastar (hangen) kalır.",
    explanationEn: "For the plural 'we', the verb remains in the infinitive (hangen)."
  },
  {
    id: "q_irreg_hangen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Het schilderij ___ (hangen) gisteren nog erg scheef.",
    correctAnswer: "hing",
    explanationTr: "Tekil imperfectum hali 'hing'dir.",
    explanationEn: "The singular imperfectum form is 'hing'."
  },
  {
    id: "q_irreg_hangen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De jassen ___ (hangen) aan de haak in de gang.",
    options: ["hing", "hingen", "hangt"],
    correctAnswer: "hingen",
    explanationTr: "Çoğul imperfectum hali 'hingen'dir.",
    explanationEn: "The plural imperfectum form is 'hingen'."
  },
  {
    id: "q_irreg_hangen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb de nieuwe lamp in de woonkamer op___ (hangen).",
    correctAnswer: "gehangen",
    explanationTr: "'hangen' fiilinin 3. hali 'gehangen'dir.",
    explanationEn: "The past participle of 'hangen' is 'gehangen'."
  },
  {
    id: "q_irreg_hangen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Waar heeft die jas vroeger ___ (hangen)?",
    options: ["gehangen", "hing", "hangen"],
    correctAnswer: "gehangen",
    explanationTr: "Perfectum formunda 'gehangen' kullanılır.",
    explanationEn: "'gehangen' is used in the perfectum form."
  },

  // 22. hebben
  {
    id: "q_irreg_hebben_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (hebben) een heel belangrijk vraag.",
    correctAnswer: "heb",
    explanationTr: "'ik' öznesi için 'hebben' fiili 'heb' olur.",
    explanationEn: "For the subject 'ik', the verb 'hebben' becomes 'heb'."
  },
  {
    id: "q_irreg_hebben_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Mijn broer ___ (hebben) een mooie sportauto.",
    options: ["heb", "hebt", "heeft"],
    correctAnswer: "heeft",
    explanationTr: "3. tekil şahıs (hij) için 'hebben' düzensiz olarak 'heeft' olur.",
    explanationEn: "For 3rd person singular (hij), 'hebben' irregularly becomes 'heeft'."
  },
  {
    id: "q_irreg_hebben_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (hebben) gisteren helaas geen tijd.",
    correctAnswer: "hadden",
    explanationTr: "Çoğul imperfectum hali 'hadden'dir.",
    explanationEn: "The plural imperfectum form is 'hadden'."
  },
  {
    id: "q_irreg_hebben_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (hebben) vorig jaar een drukke periode.",
    options: ["had", "hadden", "heeft"],
    correctAnswer: "had",
    explanationTr: "Tekil imperfectum hali 'had'dir.",
    explanationEn: "The singular imperfectum form is 'had'."
  },
  {
    id: "q_irreg_hebben_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb gisteren een erg drukke dag ___ (hebben).",
    correctAnswer: "gehad",
    explanationTr: "'hebben' fiilinin 3. hali 'gehad'dir.",
    explanationEn: "The past participle of 'hebben' is 'gehad'."
  },
  {
    id: "q_irreg_hebben_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je een leuke vakantie ___ (hebben)?",
    options: ["gehad", "had", "hebben"],
    correctAnswer: "gehad",
    explanationTr: "Hebben + gehad yapısı kullanılır.",
    explanationEn: "The combination hebben + gehad is used."
  },

  // 23. helpen
  {
    id: "q_irreg_helpen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Kan jij mij even ___ (helpen)?",
    correctAnswer: "helpen",
    explanationTr: "Modal fiil (kan) olduğu için asıl fiil mastar (helpen) kalır.",
    explanationEn: "Since there is a modal verb (kan), the main verb stays in the infinitive (helpen)."
  },
  {
    id: "q_irreg_helpen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (helpen) mij met deze zware tas?",
    options: ["help", "helpt", "helpen"],
    correctAnswer: "helpt",
    explanationTr: "3. tekil şahıs işlem gören 'Wie' için kök 'help' + t = helpt.",
    explanationEn: "For 'Wie' treated as 3rd person singular, stem 'help' + t = helpt."
  },
  {
    id: "q_irreg_helpen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (helpen) mij gisteren erg goed met de oefening.",
    correctAnswer: "hielp",
    explanationTr: "Tekil imperfectum hali 'hielp'tir.",
    explanationEn: "The singular imperfectum form is 'hielp'."
  },
  {
    id: "q_irreg_helpen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De buren ___ (helpen) ons met de verhuizing.",
    options: ["hielp", "hielpen", "helpt"],
    correctAnswer: "hielpen",
    explanationTr: "Çoğul imperfectum hali 'hielpen'dir.",
    explanationEn: "The plural imperfectum form is 'hielpen'."
  },
  {
    id: "q_irreg_helpen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Bedankt dat je me zo goed hebt ___ (helpen).",
    correctAnswer: "geholpen",
    explanationTr: "'helpen' fiilinin 3. hali 'geholpen'dir.",
    explanationEn: "The past participle of 'helpen' is 'geholpen'."
  },
  {
    id: "q_irreg_helpen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je je moeder in de keuken ___ (helpen)?",
    options: ["geholpen", "hielp", "helpen"],
    correctAnswer: "geholpen",
    explanationTr: "Perfectum formunda 'geholpen' kullanılır.",
    explanationEn: "'geholpen' is used in the perfectum form."
  },

  // 24. houden
  {
    id: "q_irreg_houden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (houden) ontzettend veel van chocolade.",
    correctAnswer: "houd",
    explanationTr: "'ik' öznesi için fiil kökü 'houd' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'houd' is used."
  },
  {
    id: "q_irreg_houden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (houden) de deur voor me open.",
    options: ["houd", "houdt", "houden"],
    correctAnswer: "houdt",
    explanationTr: "3. tekil şahıs için kök 'houd' + t = houdt.",
    explanationEn: "For 3rd person singular, stem 'houd' + t = houdt."
  },
  {
    id: "q_irreg_houden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (houden) de deur netjes voor haar open.",
    correctAnswer: "hield",
    explanationTr: "Tekil imperfectum hali 'hield'dir.",
    explanationEn: "The singular imperfectum form is 'hield'."
  },
  {
    id: "q_irreg_houden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De ouders ___ (houden) een feest voor hun kind.",
    options: ["hield", "hielden", "houdt"],
    correctAnswer: "hielden",
    explanationTr: "Çoğul imperfectum hali 'hielden'dir.",
    explanationEn: "The plural imperfectum form is 'hielden'."
  },
  {
    id: "q_irreg_houden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb altijd van katten ___ (houden).",
    correctAnswer: "gehouden",
    explanationTr: "'houden' fiilinin 3. hali 'gehouden'dir.",
    explanationEn: "The past participle of 'houden' is 'gehouden'."
  },
  {
    id: "q_irreg_houden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je van deze mooie film ___ (houden)?",
    options: ["gehouden", "hield", "houden"],
    correctAnswer: "gehouden",
    explanationTr: "Hebben + gehouden yapısı kullanılır.",
    explanationEn: "The combination hebben + gehouden is used."
  },

  // 25. kiezen
  {
    id: "q_irreg_kiezen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (kiezen) vandaag voor de rode auto.",
    correctAnswer: "kies",
    explanationTr: "'ik' öznesi için kök 'kies' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'kies' is used."
  },
  {
    id: "q_irreg_kiezen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Welke optie ___ (kiezen) jij?",
    options: ["kies", "kiest", "kiezen"],
    correctAnswer: "kiest",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (kiest).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (kiest)."
  },
  {
    id: "q_irreg_kiezen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (kiezen) gisteren een heel leuk restaurant uit.",
    correctAnswer: "kozen",
    explanationTr: "Çoğul imperfectum hali 'kozen'dir.",
    explanationEn: "The plural imperfectum form is 'kozen'."
  },
  {
    id: "q_irreg_kiezen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (kiezen) voor een opleiding in Amsterdam.",
    options: ["koos", "kozen", "kiest"],
    correctAnswer: "koos",
    explanationTr: "Tekil imperfectum hali 'koos'dur.",
    explanationEn: "The singular imperfectum form is 'koos'."
  },
  {
    id: "q_irreg_kiezen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Welke film heb jij eigenlijk ___ (kiezen)?",
    correctAnswer: "gekozen",
    explanationTr: "'kiezen' fiilinin 3. hali 'gekozen'dir.",
    explanationEn: "The past participle of 'kiezen' is 'gekozen'."
  },
  {
    id: "q_irreg_kiezen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je al een cadeau ___ (kiezen)?",
    options: ["gekozen", "koos", "kiezen"],
    correctAnswer: "gekozen",
    explanationTr: "Perfectum formunda 'gekozen' kullanılır.",
    explanationEn: "'gekozen' is used in the perfectum form."
  },

  // 26. kijken
  {
    id: "q_irreg_kijken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (kijken) elke avond naar een leuke serie.",
    correctAnswer: "kijk",
    explanationTr: "'ik' öznesi için fiil kökü 'kijk' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'kijk' is used."
  },
  {
    id: "q_irreg_kijken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (kijken) je zo boos?",
    options: ["kijk", "kijkt", "kijken"],
    correctAnswer: "kijkt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (kijkt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (kijkt)."
  },
  {
    id: "q_irreg_kijken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (kijken) gisterenavond naar een spannende film.",
    correctAnswer: "keken",
    explanationTr: "Çoğul imperfectum hali 'keken'dir.",
    explanationEn: "The plural imperfectum form is 'keken'."
  },
  {
    id: "q_irreg_kijken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (kijken) uit het raam naar buiten.",
    options: ["keek", "keken", "kijkt"],
    correctAnswer: "keek",
    explanationTr: "Tekil imperfectum hali 'keek'tir.",
    explanationEn: "The singular imperfectum form is 'keek'."
  },
  {
    id: "q_irreg_kijken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb die interessante documentaire al ___ (kijken).",
    correctAnswer: "gekeken",
    explanationTr: "'kijken' fiilinin 3. hali 'gekeken'dir.",
    explanationEn: "The past participle of 'kijken' is 'gekeken'."
  },
  {
    id: "q_irreg_kijken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je naar de voetbalwedstrijd ___ (kijken)?",
    options: ["gekeken", "keek", "kijken"],
    correctAnswer: "gekeken",
    explanationTr: "Hebben + gekeken yapısı kullanılır.",
    explanationEn: "The combination hebben + gekeken is used."
  },

  // 27. komen
  {
    id: "q_irreg_komen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (komen) morgen heel graag op bezoek.",
    correctAnswer: "komt",
    explanationTr: "3. tekil şahıs (hij) için kök 'kom' + t = komt.",
    explanationEn: "For 3rd person singular (hij), stem 'kom' + t = komt."
  },
  {
    id: "q_irreg_komen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hoe laat ___ (komen) jullie morgen aan?",
    options: ["kom", "komt", "komen"],
    correctAnswer: "komen",
    explanationTr: "Çoğul 'jullie' için fiil mastar (komen) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (komen)."
  },
  {
    id: "q_irreg_komen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (komen) gisteren door de file te laat.",
    correctAnswer: "kwam",
    explanationTr: "Tekil imperfectum hali 'kwam'dir.",
    explanationEn: "The singular imperfectum form is 'kwam'."
  },
  {
    id: "q_irreg_komen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De gasten ___ (komen) gisteravond op tijd.",
    options: ["kwam", "kwamen", "komt"],
    correctAnswer: "kwamen",
    explanationTr: "Çoğul imperfectum hali 'kwamen'dir.",
    explanationEn: "The plural imperfectum form is 'kwamen'."
  },
  {
    id: "q_irreg_komen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ze is door ziekte niet naar school ___ (komen).",
    correctAnswer: "gekomen",
    explanationTr: "'komen' hareket bildirdiği için 'zijn' ile kurulur, 3. hali 'gekomen'dir.",
    explanationEn: "'komen' implies motion, uses 'zijn', and its past participle is 'gekomen'."
  },
  {
    id: "q_irreg_komen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je gisteren op het feest ___ (komen)?",
    options: ["gekomen", "kwam", "komen"],
    correctAnswer: "gekomen",
    explanationTr: "Perfectum formunda 'gekomen' kullanılır.",
    explanationEn: "'gekomen' is used in the perfectum form."
  },

  // 28. kopen
  {
    id: "q_irreg_kopen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (kopen) elke zaterdag verse groenten.",
    correctAnswer: "koop",
    explanationTr: "'ik' öznesi için fiil kökü 'koop' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'koop' is used."
  },
  {
    id: "q_irreg_kopen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (kopen) een prachtig nieuw huis.",
    options: ["koop", "koopt", "kopen"],
    correctAnswer: "koopt",
    explanationTr: "3. tekil şahıs için kök 'koop' + t = koopt.",
    explanationEn: "For 3rd person singular, stem 'koop' + t = koopt."
  },
  {
    id: "q_irreg_kopen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (kopen) vorig jaar een nieuwe auto.",
    correctAnswer: "kocht",
    explanationTr: "Tekil imperfectum hali 'kocht'tur.",
    explanationEn: "The singular imperfectum form is 'kocht'."
  },
  {
    id: "q_irreg_kopen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (kopen) fruit op de lokale markt.",
    options: ["kocht", "kochten", "koopt"],
    correctAnswer: "kochten",
    explanationTr: "Çoğul imperfectum hali 'kochten'dir.",
    explanationEn: "The plural imperfectum form is 'kochten'."
  },
  {
    id: "q_irreg_kopen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wat heb je in de stad allemaal ___ (kopen)?",
    correctAnswer: "gekocht",
    explanationTr: "'kopen' fiilinin 3. hali 'gekocht'tur.",
    explanationEn: "The past participle of 'kopen' is 'gekocht'."
  },
  {
    id: "q_irreg_kopen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb nieuwe schoenen ___ (kopen).",
    options: ["gekocht", "kocht", "kopen"],
    correctAnswer: "gekocht",
    explanationTr: "Hebben + gekocht yapısı kullanılır.",
    explanationEn: "The combination hebben + gekocht is used."
  },

  // 29. krijgen
  {
    id: "q_irreg_krijgen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (krijgen) vandaag een heel mooi cadeau.",
    correctAnswer: "krijg",
    explanationTr: "'ik' öznesi için fiil kökü 'krijg' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'krijg' is used."
  },
  {
    id: "q_irreg_krijgen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (krijgen) zij van jou voor haar verjaardag?",
    options: ["krijg", "krijgt", "krijgen"],
    correctAnswer: "krijgt",
    explanationTr: "3. tekil şahıs için kök 'krijg' + t = krijgt.",
    explanationEn: "For 3rd person singular, stem 'krijg' + t = krijgt."
  },
  {
    id: "q_irreg_krijgen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (krijgen) gisteren veel korting op de laptop.",
    correctAnswer: "kregen",
    explanationTr: "Çoğul imperfectum hali 'kregen'dir.",
    explanationEn: "The plural imperfectum form is 'kregen'."
  },
  {
    id: "q_irreg_krijgen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (krijgen) een officiële brief van de gemeente.",
    options: ["kreeg", "kregen", "krijgt"],
    correctAnswer: "kreeg",
    explanationTr: "Tekil imperfectum hali 'kreeg'dir.",
    explanationEn: "The singular imperfectum form is 'kreeg'."
  },
  {
    id: "q_irreg_krijgen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb je belangrijke e-mail in goede orde ___ (krijgen).",
    correctAnswer: "gekregen",
    explanationTr: "'krijgen' fiilinin 3. hali 'gekregen'dir.",
    explanationEn: "The past participle of 'krijgen' is 'gekregen'."
  },
  {
    id: "q_irreg_krijgen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je een prijs ___ (krijgen)?",
    options: ["gekregen", "kreeg", "krijgen"],
    correctAnswer: "gekregen",
    explanationTr: "Perfectum formunda 'gekregen' kullanılır.",
    explanationEn: "'gekregen' is used in the perfectum form."
  },

  // 30. kunnen
  {
    id: "q_irreg_kunnen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (kunnen) vandaag helaas niet komen.",
    correctAnswer: "kan",
    explanationTr: "'ik' öznesi için 'kunnen' fiili 'kan' olur.",
    explanationEn: "For the subject 'ik', the verb 'kunnen' becomes 'kan'."
  },
  {
    id: "q_irreg_kunnen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "___ (Kunnen) jij mij even helpen met dit werk?",
    options: ["Kan", "Kunt", "Kunnen"],
    correctAnswer: "Kan",
    explanationTr: "'jij' zamiri ile 'kunnen' fiili 'kan' veya 'kunnen' olabilir, soru formunda 'Kan jij' kullanılır.",
    explanationEn: "With 'jij', 'kunnen' can be 'kan', in questions 'Kan jij' is used."
  },
  {
    id: "q_irreg_kunnen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (kunnen) het juiste adres niet vinden.",
    correctAnswer: "kon",
    explanationTr: "Tekil imperfectum hali 'kon'dur.",
    explanationEn: "The singular imperfectum form is 'kon'."
  },
  {
    id: "q_irreg_kunnen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (kunnen) gisteren niet slapen door de herrie.",
    options: ["kon", "konden", "kan"],
    correctAnswer: "konden",
    explanationTr: "Çoğul imperfectum hali 'konden'dir.",
    explanationEn: "The plural imperfectum form is 'konden'."
  },
  {
    id: "q_irreg_kunnen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb dat vroeger heel goed ___ (kunnen) doen.",
    correctAnswer: "gekund",
    explanationTr: "'kunnen' fiilinin 3. hali 'gekund'dür.",
    explanationEn: "The past participle of 'kunnen' is 'gekund'."
  },
  {
    id: "q_irreg_kunnen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dat niet ___ (kunnen) voorzien?",
    options: ["gekund", "kon", "kunnen"],
    correctAnswer: "gekund",
    explanationTr: "Hebben + gekund yapısı kullanılır.",
    explanationEn: "The combination hebben + gekund is used."
  },

  // 31. lachen
  {
    id: "q_irreg_lachen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Zij ___ (lachen) altijd erg hard om zijn grappen.",
    correctAnswer: "lacht",
    explanationTr: "3. tekil şahıs için kök 'lach' + t = lacht.",
    explanationEn: "For 3rd person singular, stem 'lach' + t = lacht."
  },
  {
    id: "q_irreg_lachen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (lachen) jij nu?",
    options: ["lach", "lacht", "lachen"],
    correctAnswer: "lacht",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (lacht).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (lacht)."
  },
  {
    id: "q_irreg_lachen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (lachen) gisteren om al zijn grappen.",
    correctAnswer: "lachten",
    explanationTr: "Çoğul imperfectum hali 'lachten'dir.",
    explanationEn: "The plural imperfectum form is 'lachten'."
  },
  {
    id: "q_irreg_lachen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (lachen) toen hij het goede nieuws hoorde.",
    options: ["lachte", "lachten", "lacht"],
    correctAnswer: "lachte",
    explanationTr: "Tekil imperfectum hali 'lachte'dir.",
    explanationEn: "The singular imperfectum form is 'lachte'."
  },
  {
    id: "q_irreg_lachen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb gisteren avond heel veel ___ (lachen).",
    correctAnswer: "gelachen",
    explanationTr: "'lachen' fiilinin 3. hali 'gelachen'dir.",
    explanationEn: "The past participle of 'lachen' is 'gelachen'."
  },
  {
    id: "q_irreg_lachen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je om dat grappige verhaal ___ (lachen)?",
    options: ["gelachen", "lachte", "lachen"],
    correctAnswer: "gelachen",
    explanationTr: "Perfectum formunda 'gelachen' kullanılır.",
    explanationEn: "'gelachen' is used in the perfectum form."
  },

  // 32. laten
  {
    id: "q_irreg_laten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (laten) de hond elke avond buiten uit.",
    correctAnswer: "laat",
    explanationTr: "'ik' öznesi için kök 'laat' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'laat' is used."
  },
  {
    id: "q_irreg_laten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (laten) jullie de deur open?",
    options: ["laat", "laatst", "laten"],
    correctAnswer: "laten",
    explanationTr: "Çoğul 'jullie' için fiil mastar (laten) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (laten)."
  },
  {
    id: "q_irreg_laten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (laten) per ongeluk de sleutels binnen liggen.",
    correctAnswer: "liet",
    explanationTr: "Tekil imperfectum hali 'liet'tir.",
    explanationEn: "The singular imperfectum form is 'liet'."
  },
  {
    id: "q_irreg_laten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kinderen ___ (laten) de bal vallen.",
    options: ["liet", "lieten", "laat"],
    correctAnswer: "lieten",
    explanationTr: "Çoğul imperfectum hali 'lieten'dir.",
    explanationEn: "The plural imperfectum form is 'lieten'."
  },
  {
    id: "q_irreg_laten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij heeft zijn tas in de auto ___ (laten).",
    correctAnswer: "gelaten",
    explanationTr: "'laten' fiilinin 3. hali 'gelaten'dir.",
    explanationEn: "The past participle of 'laten' is 'gelaten'."
  },
  {
    id: "q_irreg_laten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je je jas op school ___ (laten)?",
    options: ["gelaten", "liet", "laten"],
    correctAnswer: "gelaten",
    explanationTr: "Hebben + gelaten yapısı kullanılır.",
    explanationEn: "The combination hebben + gelaten is used."
  },

  // 33. lezen
  {
    id: "q_irreg_lezen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (lezen) elke ochtend de krant.",
    correctAnswer: "lees",
    explanationTr: "'ik' öznesi için fiil kökü 'lees' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'lees' is used."
  },
  {
    id: "q_irreg_lezen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (lezen) jij voor een boek?",
    options: ["lees", "leest", "lezen"],
    correctAnswer: "leest",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (leest).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (leest)."
  },
  {
    id: "q_irreg_lezen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (lezen) gisteren een heel spannend boek.",
    correctAnswer: "las",
    explanationTr: "Tekil imperfectum hali 'las'tır.",
    explanationEn: "The singular imperfectum form is 'las'."
  },
  {
    id: "q_irreg_lezen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (lezen) de brief samen in de klas.",
    options: ["las", "lazen", "leest"],
    correctAnswer: "lazen",
    explanationTr: "Çoğul imperfectum hali 'lazen'dir.",
    explanationEn: "The plural imperfectum form is 'lazen'."
  },
  {
    id: "q_irreg_lezen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dit spannende bericht al ___ (lezen)?",
    correctAnswer: "gelezen",
    explanationTr: "'lezen' fiilinin 3. hali 'gelezen'dir.",
    explanationEn: "The past participle of 'lezen' is 'gelezen'."
  },
  {
    id: "q_irreg_lezen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb dat boek vorig jaar ___ (lezen).",
    options: ["gelezen", "las", "lezen"],
    correctAnswer: "gelezen",
    explanationTr: "Perfectum formunda 'gelezen' kullanılır.",
    explanationEn: "'gelezen' is used in the perfectum form."
  },

  // 34. liggen
  {
    id: "q_irreg_liggen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De luie kat ___ (liggen) lekker op de bank.",
    correctAnswer: "ligt",
    explanationTr: "3. tekil şahıs için kök 'lig' + t = ligt.",
    explanationEn: "For 3rd person singular, stem 'lig' + t = ligt."
  },
  {
    id: "q_irreg_liggen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waar ___ (liggen) mijn sleutels nu weer?",
    options: ["ligt", "liggen", "lag"],
    correctAnswer: "liggen",
    explanationTr: "Çoğul 'sleutels' için fiil mastar (liggen) olur.",
    explanationEn: "For the plural 'sleutels', the verb is in the infinitive (liggen)."
  },
  {
    id: "q_irreg_liggen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (liggen) gisteren al heel vroeg in bed.",
    correctAnswer: "lag",
    explanationTr: "Tekil imperfectum hali 'lag'dır.",
    explanationEn: "The singular imperfectum form is 'lag'."
  },
  {
    id: "q_irreg_liggen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De boeken ___ (liggen) overal op de grond.",
    options: ["lag", "lagen", "ligt"],
    correctAnswer: "lagen",
    explanationTr: "Çoğul imperfectum hali 'lagen'dir.",
    explanationEn: "The plural imperfectum form is 'lagen'."
  },
  {
    id: "q_irreg_liggen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Het boek heeft hier de hele dag ___ (liggen).",
    correctAnswer: "gelegen",
    explanationTr: "'liggen' fiilinin 3. hali 'gelegen'dir.",
    explanationEn: "The past participle of 'liggen' is 'gelegen'."
  },
  {
    id: "q_irreg_liggen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je lang in het gras ___ (liggen)?",
    options: ["gelegen", "lag", "liggen"],
    correctAnswer: "gelegen",
    explanationTr: "Hebben + gelegen yapısı kullanılır.",
    explanationEn: "The combination hebben + gelegen is used."
  },

  // 35. lijken
  {
    id: "q_irreg_lijken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Je ___ (lijken) erg veel op je vader.",
    correctAnswer: "lijkt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (lijkt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (lijkt)."
  },
  {
    id: "q_irreg_lijken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Dit plan ___ (lijken) me een goed idee.",
    options: ["lijk", "lijkt", "lijken"],
    correctAnswer: "lijkt",
    explanationTr: "3. tekil şahıs için kök 'lijk' + t = lijkt.",
    explanationEn: "For 3rd person singular, stem 'lijk' + t = lijkt."
  },
  {
    id: "q_irreg_lijken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Het ___ (lijken) gisteren wel hartje zomer.",
    correctAnswer: "leek",
    explanationTr: "Tekil imperfectum hali 'leek'tir.",
    explanationEn: "The singular imperfectum form is 'leek'."
  },
  {
    id: "q_irreg_lijken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De wolken ___ (lijken) op enge monsters.",
    options: ["leek", "leken", "lijkt"],
    correctAnswer: "leken",
    explanationTr: "Çoğul imperfectum hali 'leken'dir.",
    explanationEn: "The plural imperfectum form is 'leken'."
  },
  {
    id: "q_irreg_lijken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Het heeft er lange tijd op ___ (lijken).",
    correctAnswer: "geleken",
    explanationTr: "'lijken' fiilinin 3. hali 'geleken'dir.",
    explanationEn: "The past participle of 'lijken' is 'geleken'."
  },
  {
    id: "q_irreg_lijken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heeft het erg ___ (lijken) op het origineel?",
    options: ["geleken", "leek", "lijken"],
    correctAnswer: "geleken",
    explanationTr: "Perfectum formunda 'geleken' kullanılır.",
    explanationEn: "'geleken' is used in the perfectum form."
  },

  // 36. lopen
  {
    id: "q_irreg_lopen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wij ___ (lopen) elke dag naar het station.",
    correctAnswer: "lopen",
    explanationTr: "Çoğul 'wij' öznesi için fiil mastar (lopen) kalır.",
    explanationEn: "For the plural subject 'wij', the verb remains in the infinitive (lopen)."
  },
  {
    id: "q_irreg_lopen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (lopen) jij zo hard?",
    options: ["loop", "loopt", "lopen"],
    correctAnswer: "loopt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (loopt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (loopt)."
  },
  {
    id: "q_irreg_lopen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (lopen) gisteren heel snel naar huis.",
    correctAnswer: "liep",
    explanationTr: "Tekil imperfectum hali 'liep'tir.",
    explanationEn: "The singular imperfectum form is 'liep'."
  },
  {
    id: "q_irreg_lopen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De toeristen ___ (lopen) door de oude stad.",
    options: ["liep", "liepen", "loopt"],
    correctAnswer: "liepen",
    explanationTr: "Çoğul imperfectum hali 'liepen'dir.",
    explanationEn: "The plural imperfectum form is 'liepen'."
  },
  {
    id: "q_irreg_lopen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb vandaag tien kilometer ___ (lopen).",
    correctAnswer: "gelopen",
    explanationTr: "'lopen' fiilinin 3. hali 'gelopen'dur.",
    explanationEn: "The past participle of 'lopen' is 'gelopen'."
  },
  {
    id: "q_irreg_lopen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je naar school ___ (lopen)?",
    options: ["gelopen", "liep", "lopen"],
    correctAnswer: "gelopen",
    explanationTr: "Hareket bildirdiği için 'zijn' ile birlikte 'gelopen' kullanılır.",
    explanationEn: "Indicates motion, uses 'zijn' with 'gelopen'."
  },

  // 37. moeten
  {
    id: "q_irreg_moeten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (moeten) nu echt heel snel weg.",
    correctAnswer: "moet",
    explanationTr: "'ik' öznesi için 'moeten' fiili 'moet' olur.",
    explanationEn: "For the subject 'ik', the verb 'moeten' becomes 'moet'."
  },
  {
    id: "q_irreg_moeten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (moeten) wij nu doen?",
    options: ["moet", "moeten", "moest"],
    correctAnswer: "moeten",
    explanationTr: "Çoğul 'wij' için 'moeten' mastar halindedir.",
    explanationEn: "For the plural 'wij', 'moeten' is in the infinitive."
  },
  {
    id: "q_irreg_moeten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (moeten) gisteren erg lang wachten.",
    correctAnswer: "moesten",
    explanationTr: "Çoğul imperfectum hali 'moesten'dir.",
    explanationEn: "The plural imperfectum form is 'moesten'."
  },
  {
    id: "q_irreg_moeten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (moeten) vroeg opstaan voor zijn werk.",
    options: ["moest", "moesten", "moet"],
    correctAnswer: "moest",
    explanationTr: "Tekil imperfectum hali 'moest'tir.",
    explanationEn: "The singular imperfectum form is 'moest'."
  },
  {
    id: "q_irreg_moeten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Dat heeft vroeger echt zo ___ (moeten).",
    correctAnswer: "gemoeten",
    explanationTr: "'moeten' fiilinin 3. hali 'gemoeten'dir.",
    explanationEn: "The past participle of 'moeten' is 'gemoeten'."
  },
  {
    id: "q_irreg_moeten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dat echt ___ (moeten) doen?",
    options: ["gemoeten", "moest", "moeten"],
    correctAnswer: "gemoeten",
    explanationTr: "Perfectum formunda 'gemoeten' kullanılır.",
    explanationEn: "'gemoeten' is used in the perfectum form."
  },

  // 38. mogen
  {
    id: "q_irreg_mogen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "___ (Mogen) ik hier mijn auto parkeren?",
    correctAnswer: "Mag",
    explanationTr: "Soru cümlesinde 'ik' için 'mogen' fiili 'Mag' olur.",
    explanationEn: "In a question for 'ik', 'mogen' becomes 'Mag'."
  },
  {
    id: "q_irreg_mogen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wij ___ (mogen) vandaag eerder naar huis.",
    options: ["mag", "mogen", "mocht"],
    correctAnswer: "mogen",
    explanationTr: "Çoğul 'wij' için fiil 'mogen' şeklindedir.",
    explanationEn: "For the plural 'wij', the verb is 'mogen'."
  },
  {
    id: "q_irreg_mogen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (mogen) gisteren niet naar het feest gaan.",
    correctAnswer: "mocht",
    explanationTr: "Tekil imperfectum hali 'mocht'tur.",
    explanationEn: "The singular imperfectum form is 'mocht'."
  },
  {
    id: "q_irreg_mogen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kinderen ___ (mogen) geen snoep eten.",
    options: ["mocht", "mochten", "mag"],
    correctAnswer: "mochten",
    explanationTr: "Çoğul imperfectum hali 'mochten'dir.",
    explanationEn: "The plural imperfectum form is 'mochten'."
  },
  {
    id: "q_irreg_mogen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb dat vroeger nooit ___ (mogen) doen.",
    correctAnswer: "gemogen",
    explanationTr: "'mogen' fiilinin 3. hali 'gemogen'dir.",
    explanationEn: "The past participle of 'mogen' is 'gemogen'."
  },
  {
    id: "q_irreg_mogen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dat van je ouders ___ (mogen)?",
    options: ["gemogen", "mocht", "mogen"],
    correctAnswer: "gemogen",
    explanationTr: "Perfectum formunda 'gemogen' kullanılır.",
    explanationEn: "'gemogen' is used in the perfectum form."
  },

  // 39. nemen
  {
    id: "q_irreg_nemen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (nemen) even een lekker kopje thee.",
    correctAnswer: "neem",
    explanationTr: "'ik' öznesi için kök 'neem' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'neem' is used."
  },
  {
    id: "q_irreg_nemen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (nemen) jij in het restaurant?",
    options: ["neem", "neemt", "nemen"],
    correctAnswer: "neemt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (neemt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (neemt)."
  },
  {
    id: "q_irreg_nemen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (nemen) gisteren de bus naar huis.",
    correctAnswer: "nam",
    explanationTr: "Tekil imperfectum hali 'nam'dır.",
    explanationEn: "The singular imperfectum form is 'nam'."
  },
  {
    id: "q_irreg_nemen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De toeristen ___ (nemen) veel foto's.",
    options: ["nam", "namen", "neemt"],
    correctAnswer: "namen",
    explanationTr: "Çoğul imperfectum hali 'namen'dir.",
    explanationEn: "The plural imperfectum form is 'namen'."
  },
  {
    id: "q_irreg_nemen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wie heeft de laatste koek ___ (nemen)?",
    correctAnswer: "genomen",
    explanationTr: "'nemen' fiilinin 3. hali 'genomen'dir.",
    explanationEn: "The past participle of 'nemen' is 'genomen'."
  },
  {
    id: "q_irreg_nemen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de tram ___ (nemen) naar het station?",
    options: ["genomen", "nam", "nemen"],
    correctAnswer: "genomen",
    explanationTr: "Hebben + genomen yapısı kullanılır.",
    explanationEn: "The combination hebben + genomen is used."
  },

  // 40. rijden
  {
    id: "q_irreg_rijden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (rijden) in een hele snelle auto.",
    correctAnswer: "rijd",
    explanationTr: "'ik' öznesi için kök 'rijd' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'rijd' is used."
  },
  {
    id: "q_irreg_rijden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (rijden) er vandaag naar Rotterdam?",
    options: ["rijd", "rijdt", "rijden"],
    correctAnswer: "rijdt",
    explanationTr: "3. tekil şahıs 'Wie' için kök 'rijd' + t = rijdt.",
    explanationEn: "For 'Wie' as 3rd person singular, stem 'rijd' + t = rijdt."
  },
  {
    id: "q_irreg_rijden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (rijden) gisteren in één stuk naar zee.",
    correctAnswer: "reden",
    explanationTr: "Çoğul imperfectum hali 'reden'dir.",
    explanationEn: "The plural imperfectum form is 'reden'."
  },
  {
    id: "q_irreg_rijden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (rijden) veel te hard op de snelweg.",
    options: ["reed", "reden", "rijdt"],
    correctAnswer: "reed",
    explanationTr: "Tekil imperfectum hali 'reed'dir.",
    explanationEn: "The singular imperfectum form is 'reed'."
  },
  {
    id: "q_irreg_rijden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je weleens in een vrachtwagen ___ (rijden)?",
    correctAnswer: "gereden",
    explanationTr: "'rijden' fiilinin 3. hali 'gereden'dir.",
    explanationEn: "The past participle of 'rijden' is 'gereden'."
  },
  {
    id: "q_irreg_rijden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb naar Parijs ___ (rijden).",
    options: ["gereden", "reed", "rijden"],
    correctAnswer: "gereden",
    explanationTr: "Perfectum formunda 'gereden' kullanılır.",
    explanationEn: "'gereden' is used in the perfectum form."
  },

  // 41. roepen
  {
    id: "q_irreg_roepen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De leraar ___ (roepen) hard mijn naam in de gang.",
    correctAnswer: "roept",
    explanationTr: "3. tekil şahıs için kök 'roep' + t = roept.",
    explanationEn: "For 3rd person singular, stem 'roep' + t = roept."
  },
  {
    id: "q_irreg_roepen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (roepen) mij daar?",
    options: ["roep", "roept", "roepen"],
    correctAnswer: "roept",
    explanationTr: "'Wie' tekil kabul edilir, kök 'roep' + t = roept.",
    explanationEn: "'Wie' is treated as singular, stem 'roep' + t = roept."
  },
  {
    id: "q_irreg_roepen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (roepen) je gisteren nog heel hard.",
    correctAnswer: "riep",
    explanationTr: "Tekil imperfectum hali 'riep'tir.",
    explanationEn: "The singular imperfectum form is 'riep'."
  },
  {
    id: "q_irreg_roepen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kinderen ___ (roepen) om hulp.",
    options: ["riep", "riepen", "roept"],
    correctAnswer: "riepen",
    explanationTr: "Çoğul imperfectum hali 'riepen'dir.",
    explanationEn: "The plural imperfectum form is 'riepen'."
  },
  {
    id: "q_irreg_roepen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heeft iemand de politie ___ (roepen)?",
    correctAnswer: "geroepen",
    explanationTr: "'roepen' fiilinin 3. hali 'geroepen'dir.",
    explanationEn: "The past participle of 'roepen' is 'geroepen'."
  },
  {
    id: "q_irreg_roepen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je mij ___ (roepen)?",
    options: ["geroepen", "riep", "roepen"],
    correctAnswer: "geroepen",
    explanationTr: "Hebben + geroepen yapısı kullanılır.",
    explanationEn: "The combination hebben + geroepen is used."
  },

  // 42. schrijven
  {
    id: "q_irreg_schrijven_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (schrijven) een lange brief naar huis.",
    correctAnswer: "schrijf",
    explanationTr: "'ik' öznesi için fiil kökü 'schrijf' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'schrijf' is used."
  },
  {
    id: "q_irreg_schrijven_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (schrijven) dit mooie gedicht?",
    options: ["schrijf", "schrijft", "schrijven"],
    correctAnswer: "schrijft",
    explanationTr: "3. tekil şahıs için kök 'schrijf' + t = schrijft.",
    explanationEn: "For 3rd person singular, stem 'schrijf' + t = schrijft."
  },
  {
    id: "q_irreg_schrijven_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (schrijven) vorig jaar een spannend boek.",
    correctAnswer: "schreef",
    explanationTr: "Tekil imperfectum hali 'schreef'dir.",
    explanationEn: "The singular imperfectum form is 'schreef'."
  },
  {
    id: "q_irreg_schrijven_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De studenten ___ (schrijven) een toets.",
    options: ["schreef", "schreven", "schrijft"],
    correctAnswer: "schreven",
    explanationTr: "Çoğul imperfectum hali 'schreven'dir.",
    explanationEn: "The plural imperfectum form is 'schreven'."
  },
  {
    id: "q_irreg_schrijven_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je het nieuwe adres al op___ (schrijven)?",
    correctAnswer: "geschreven",
    explanationTr: "'schrijven' fiilinin 3. hali 'geschreven'dir.",
    explanationEn: "The past participle of 'schrijven' is 'geschreven'."
  },
  {
    id: "q_irreg_schrijven_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb een brief naar de baas ___ (schrijven).",
    options: ["geschreven", "schreef", "schrijven"],
    correctAnswer: "geschreven",
    explanationTr: "Perfectum formunda 'geschreven' kullanılır.",
    explanationEn: "'geschreven' is used in the perfectum form."
  },

  // 43. slapen
  {
    id: "q_irreg_slapen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (slapen) altijd minstens acht uur per nacht.",
    correctAnswer: "slaap",
    explanationTr: "'ik' öznesi için fiil kökü 'slaap' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'slaap' is used."
  },
  {
    id: "q_irreg_slapen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hoe laat ___ (slapen) jij meestal in het weekend?",
    options: ["slaap", "slaapt", "slapen"],
    correctAnswer: "slaapt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (slaapt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (slaapt)."
  },
  {
    id: "q_irreg_slapen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (slapen) vannacht door de herrie heel slecht.",
    correctAnswer: "sliep",
    explanationTr: "Tekil imperfectum hali 'sliep'tir.",
    explanationEn: "The singular imperfectum form is 'sliep'."
  },
  {
    id: "q_irreg_slapen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De honden ___ (slapen) de hele middag in de mand.",
    options: ["sliep", "sliepen", "slaapt"],
    correctAnswer: "sliepen",
    explanationTr: "Çoğul imperfectum hali 'sliepen'dir.",
    explanationEn: "The plural imperfectum form is 'sliepen'."
  },
  {
    id: "q_irreg_slapen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je vannacht lekker ___ (slapen)?",
    correctAnswer: "geslapen",
    explanationTr: "'slapen' fiilinin 3. hali 'geslapen'dir.",
    explanationEn: "The past participle of 'slapen' is 'geslapen'."
  },
  {
    id: "q_irreg_slapen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb acht uur lang ___ (slapen).",
    options: ["geslapen", "sliep", "slapen"],
    correctAnswer: "geslapen",
    explanationTr: "Hebben + geslapen yapısı kullanılır.",
    explanationEn: "The combination hebben + geslapen is used."
  },

  // 44. sluiten
  {
    id: "q_irreg_sluiten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De supermarkt ___ (sluiten) om precies zes uur.",
    correctAnswer: "sluit",
    explanationTr: "3. tekil şahıs için kök 'sluit' (zaten t ile bittiği için ekstra t almaz).",
    explanationEn: "For 3rd person singular, stem 'sluit' (no extra t needed)."
  },
  {
    id: "q_irreg_sluiten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (sluiten) jullie de ramen?",
    options: ["sluit", "sluitst", "sluiten"],
    correctAnswer: "sluiten",
    explanationTr: "Çoğul 'jullie' için fiil mastar (sluiten) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (sluiten)."
  },
  {
    id: "q_irreg_sluiten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (sluiten) gisteravond de voordeur op slot.",
    correctAnswer: "sloot",
    explanationTr: "Tekil imperfectum hali 'sloot'tur.",
    explanationEn: "The singular imperfectum form is 'sloot'."
  },
  {
    id: "q_irreg_sluiten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Alle winkels ___ (sluiten) vandaag erg vroeg.",
    options: ["sloot", "sloten", "sluit"],
    correctAnswer: "sloten",
    explanationTr: "Çoğul imperfectum hali 'sloten'dir.",
    explanationEn: "The plural imperfectum form is 'sloten'."
  },
  {
    id: "q_irreg_sluiten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Is de voordeur goed ___ (sluiten)?",
    correctAnswer: "gesloten",
    explanationTr: "'sluiten' fiilinin 3. hali 'gesloten'dir.",
    explanationEn: "The past participle of 'sluiten' is 'gesloten'."
  },
  {
    id: "q_irreg_sluiten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je alle ramen ___ (sluiten)?",
    options: ["gesloten", "sloot", "sluiten"],
    correctAnswer: "gesloten",
    explanationTr: "Perfectum formunda 'gesloten' kullanılır.",
    explanationEn: "'gesloten' is used in the perfectum form."
  },

  // 45. snijden
  {
    id: "q_irreg_snijden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (snijden) verse groenten voor de soep.",
    correctAnswer: "snijd",
    explanationTr: "'ik' öznesi için fiil kökü 'snijd' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'snijd' is used."
  },
  {
    id: "q_irreg_snijden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (snijden) het brood voor het ontbijt?",
    options: ["snijd", "snijdt", "snijden"],
    correctAnswer: "snijdt",
    explanationTr: "3. tekil şahıs için kök 'snijd' + t = snijdt.",
    explanationEn: "For 3rd person singular, stem 'snijd' + t = snijdt."
  },
  {
    id: "q_irreg_snijden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (snijden) gisteren dikke plakken brood.",
    correctAnswer: "sneed",
    explanationTr: "Tekil imperfectum hali 'sneed'dir.",
    explanationEn: "The singular imperfectum form is 'sneed'."
  },
  {
    id: "q_irreg_snijden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De koks ___ (snijden) alle groenten heel fijn.",
    options: ["sneed", "sneden", "snijdt"],
    correctAnswer: "sneden",
    explanationTr: "Çoğul imperfectum hali 'sneden'dir.",
    explanationEn: "The plural imperfectum form is 'sneden'."
  },
  {
    id: "q_irreg_snijden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb per ongeluk in mijn vinger ___ (snijden).",
    correctAnswer: "gesneden",
    explanationTr: "'snijden' fiilinin 3. hali 'gesneden'dir.",
    explanationEn: "The past participle of 'snijden' is 'gesneden'."
  },
  {
    id: "q_irreg_snijden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de taart al ___ (snijden)?",
    options: ["gesneden", "sneed", "snijden"],
    correctAnswer: "gesneden",
    explanationTr: "Hebben + gesneden yapısı kullanılır.",
    explanationEn: "The combination hebben + gesneden is used."
  },

  // 46. spreken
  {
    id: "q_irreg_spreken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (spreken) inmiddels een beetje Nederlands.",
    correctAnswer: "spreek",
    explanationTr: "'ik' öznesi için fiil kökü 'spreek' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'spreek' is used."
  },
  {
    id: "q_irreg_spreken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Welke talen ___ (spreken) jij allemaal?",
    options: ["spreek", "spreekt", "spreken"],
    correctAnswer: "spreekt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (spreekt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (spreekt)."
  },
  {
    id: "q_irreg_spreken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (spreken) lang over onze plannen voor de vakantie.",
    correctAnswer: "spraken",
    explanationTr: "Çoğul imperfectum hali 'spraken'dir.",
    explanationEn: "The plural imperfectum form is 'spraken'."
  },
  {
    id: "q_irreg_spreken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (spreken) gisteren met de directeur.",
    options: ["sprak", "spraken", "spreekt"],
    correctAnswer: "sprak",
    explanationTr: "Tekil imperfectum hali 'sprak'tır.",
    explanationEn: "The singular imperfectum form is 'sprak'."
  },
  {
    id: "q_irreg_spreken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je al met de manager ___ (spreken)?",
    correctAnswer: "gesproken",
    explanationTr: "'spreken' fiilinin 3. hali 'gesproken'dür.",
    explanationEn: "The past participle of 'spreken' is 'gesproken'."
  },
  {
    id: "q_irreg_spreken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb met hem over de zaak ___ (spreken).",
    options: ["gesproken", "sprak", "spreken"],
    correctAnswer: "gesproken",
    explanationTr: "Perfectum formunda 'gesproken' kullanılır.",
    explanationEn: "'gesproken' is used in the perfectum form."
  },

  // 47. staan
  {
    id: "q_irreg_staan_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (staan) al een tijdje in de koude rij.",
    correctAnswer: "sta",
    explanationTr: "'ik' öznesi için 'staan' fiili 'sta' olur.",
    explanationEn: "For the subject 'ik', the verb 'staan' becomes 'sta'."
  },
  {
    id: "q_irreg_staan_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waar ___ (staan) mijn nieuwe auto geparkeerd?",
    options: ["sta", "staat", "staan"],
    correctAnswer: "staat",
    explanationTr: "3. tekil şahıs (auto) için kök 'staa' + t = staat.",
    explanationEn: "For 3rd person singular, stem + t = staat."
  },
  {
    id: "q_irreg_staan_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Het oude bed ___ (staan) vroeger in de hoek.",
    correctAnswer: "stond",
    explanationTr: "Tekil imperfectum hali 'stond'dur.",
    explanationEn: "The singular imperfectum form is 'stond'."
  },
  {
    id: "q_irreg_staan_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De mensen ___ (staan) te wachten op de bus.",
    options: ["stond", "stonden", "staat"],
    correctAnswer: "stonden",
    explanationTr: "Çoğul imperfectum hali 'stonden'dir.",
    explanationEn: "The plural imperfectum form is 'stonden'."
  },
  {
    id: "q_irreg_staan_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "We hebben zeker een uur in de rij ___ (staan).",
    correctAnswer: "gestaan",
    explanationTr: "'staan' fiilinin 3. hali 'gestaan'dır.",
    explanationEn: "The past participle of 'staan' is 'gestaan'."
  },
  {
    id: "q_irreg_staan_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je lang te wachten ___ (staan)?",
    options: ["gestaan", "stond", "staan"],
    correctAnswer: "gestaan",
    explanationTr: "Hebben + gestaan yapısı kullanılır.",
    explanationEn: "The combination hebben + gestaan is used."
  },

  // 48. vallen
  {
    id: "q_irreg_vallen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Pas goed op dat je niet ___ (vallen).",
    correctAnswer: "valt",
    explanationTr: "3. tekil şahıs (jij) için kök 'val' + t = valt.",
    explanationEn: "For 3rd person singular (you), stem 'val' + t = valt."
  },
  {
    id: "q_irreg_vallen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (vallen) al die bladeren van de boom?",
    options: ["valt", "vallen", "viel"],
    correctAnswer: "vallen",
    explanationTr: "Çoğul 'bladeren' için fiil mastar (vallen) halindedir.",
    explanationEn: "For the plural 'bladeren', the verb is in the infinitive (vallen)."
  },
  {
    id: "q_irreg_vallen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De oude boom ___ (vallen) gisteren door de storm om.",
    correctAnswer: "viel",
    explanationTr: "Tekil imperfectum hali 'viel'dir.",
    explanationEn: "The singular imperfectum form is 'viel'."
  },
  {
    id: "q_irreg_vallen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De appels ___ (vallen) allemaal uit de boom.",
    options: ["viel", "vielen", "valt"],
    correctAnswer: "vielen",
    explanationTr: "Çoğul imperfectum hali 'vielen'dir.",
    explanationEn: "The plural imperfectum form is 'vielen'."
  },
  {
    id: "q_irreg_vallen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Hij is gisteren hard van de trap ___ (vallen).",
    correctAnswer: "gevallen",
    explanationTr: "'vallen' durum değişikliği bildirdiği için 'zijn' ile kurulur, 3. hali 'gevallen'dir.",
    explanationEn: "'vallen' indicates a change of state, uses 'zijn', and its past participle is 'gevallen'."
  },
  {
    id: "q_irreg_vallen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je van je fiets ___ (vallen)?",
    options: ["gevallen", "viel", "vallen"],
    correctAnswer: "gevallen",
    explanationTr: "Perfectum formunda 'gevallen' kullanılır.",
    explanationEn: "'gevallen' is used in the perfectum form."
  },

  // 49. vergeten
  {
    id: "q_irreg_vergeten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (vergeten) de laatste tijd soms wat namen.",
    correctAnswer: "vergeet",
    explanationTr: "'ik' öznesi için kök 'vergeet' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'vergeet' is used."
  },
  {
    id: "q_irreg_vergeten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (vergeten) jij altijd je sleutels?",
    options: ["vergeet", "vergeetst", "vergeten"],
    correctAnswer: "vergeet",
    explanationTr: "'jij' öznesi fiilden sonra gelince 't' düşer: vergeet.",
    explanationEn: "When 'jij' follows the verb, the 't' drops: vergeet."
  },
  {
    id: "q_irreg_vergeten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (vergeten) per ongeluk haar warme jas.",
    correctAnswer: "vergat",
    explanationTr: "Tekil imperfectum hali 'vergat'tır.",
    explanationEn: "The singular imperfectum form is 'vergat'."
  },
  {
    id: "q_irreg_vergeten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (vergeten) onze afspraak bij de tandarts.",
    options: ["vergat", "vergaten", "vergeet"],
    correctAnswer: "vergaten",
    explanationTr: "Çoğul imperfectum hali 'vergaten'dir.",
    explanationEn: "The plural imperfectum form is 'vergaten'."
  },
  {
    id: "q_reg_vergeten_f1", // corrected ID to match pattern
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Oeps, ik ben mijn portemonnee helemaal ___ (vergeten)!",
    correctAnswer: "vergeten",
    explanationTr: "'vergeten' fiilinin 3. hali yine 'vergeten'dır ve 'zijn' ile kurulur.",
    explanationEn: "The past participle of 'vergeten' is also 'vergeten' and uses 'zijn'."
  },
  {
    id: "q_irreg_vergeten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je je tas op school ___ (vergeten)?",
    options: ["vergeten", "vergat", "vergeten zijn"],
    correctAnswer: "vergeten",
    explanationTr: "Perfectum formunda 'vergeten' kullanılır.",
    explanationEn: "'vergeten' is used in the perfectum form."
  },

  // 50. verliezen
  {
    id: "q_irreg_verliezen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "We ___ (verliezen) helaas alwéér de belangrijke wedstrijd.",
    correctAnswer: "verliezen",
    explanationTr: "Çoğul 'we' için fiil mastar (verliezen) kalır.",
    explanationEn: "For the plural 'we', the verb remains in the infinitive (verliezen)."
  },
  {
    id: "q_irreg_verliezen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (verliezen) jullie altijd je sleutels?",
    options: ["verliest", "verliezen", "verloor"],
    correctAnswer: "verliezen",
    explanationTr: "Çoğul 'jullie' için fiil mastar (verliezen) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (verliezen)."
  },
  {
    id: "q_irreg_verliezen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (verliezen) gisteren al zijn geld in het casino.",
    correctAnswer: "verloor",
    explanationTr: "Tekil imperfectum hali 'verloor'dur.",
    explanationEn: "The singular imperfectum form is 'verloor'."
  },
  {
    id: "q_irreg_verliezen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De spelers ___ (verliezen) de finale met 2-1.",
    options: ["verloor", "verloren", "verliest"],
    correctAnswer: "verloren",
    explanationTr: "Çoğul imperfectum hali 'verloren'dir.",
    explanationEn: "The plural imperfectum form is 'verloren'."
  },
  {
    id: "q_irreg_verliezen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb mijn mobiele telefoon helaas ___ (verliezen).",
    correctAnswer: "verloren",
    explanationTr: "'verliezen' fiilinin 3. hali 'verloren'dir.",
    explanationEn: "The past participle of 'verliezen' is 'verloren'."
  },
  {
    id: "q_irreg_verliezen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je je portemonnee ___ (verliezen)?",
    options: ["verloren", "verloor", "verliezen"],
    correctAnswer: "verloren",
    explanationTr: "Hebben + verloren yapısı kullanılır.",
    explanationEn: "The combination hebben + verloren is used."
  },

  // 51. vertrekken
  {
    id: "q_irreg_vertrekken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De snelle trein ___ (vertrekken) over precies vijf minuten.",
    correctAnswer: "vertrekt",
    explanationTr: "3. tekil şahıs için kök 'vertrek' + t = vertrekt.",
    explanationEn: "For 3rd person singular, stem 'vertrek' + t = vertrekt."
  },
  {
    id: "q_irreg_vertrekken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hoe laat ___ (vertrekken) jullie naar Spanje?",
    options: ["vertrekt", "vertrekken", "vertrok"],
    correctAnswer: "vertrekken",
    explanationTr: "Çoğul 'jullie' için fiil mastar (vertrekken) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (vertrekken)."
  },
  {
    id: "q_irreg_vertrekken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (vertrekken) gisteren al heel vroeg in de ochtend.",
    correctAnswer: "vertrokken",
    explanationTr: "Çoğul imperfectum hali 'vertrokken'dür.",
    explanationEn: "The plural imperfectum form is 'vertrokken'."
  },
  {
    id: "q_irreg_vertrekken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (vertrekken) zonder iets te zeggen.",
    options: ["vertrok", "vertrokken", "vertrekt"],
    correctAnswer: "vertrok",
    explanationTr: "Tekil imperfectum hali 'vertrok'tür.",
    explanationEn: "The singular imperfectum form is 'vertrok'."
  },
  {
    id: "q_irreg_vertrekken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Is de trein naar Amsterdam al ___ (vertrekken)?",
    correctAnswer: "vertrokken",
    explanationTr: "'vertrekken' hareket bildirdiği için 'zijn' ile kurulur, 3. hali 'vertrokken'dür.",
    explanationEn: "'vertrekken' indicates motion, uses 'zijn', and its past participle is 'vertrokken'."
  },
  {
    id: "q_irreg_vertrekken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je al naar kantoor ___ (vertrekken)?",
    options: ["vertrokken", "vertrok", "vertrekken"],
    correctAnswer: "vertrokken",
    explanationTr: "Perfectum formunda 'vertrokken' kullanılır.",
    explanationEn: "'vertrokken' is used in the perfectum form."
  },

  // 52. vinden
  {
    id: "q_irreg_vinden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (vinden) dit een erg mooi en gezellig huis.",
    correctAnswer: "vind",
    explanationTr: "'ik' öznesi için fiil kökü 'vind' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'vind' is used."
  },
  {
    id: "q_irreg_vinden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (vinden) jij van deze nieuwe film?",
    options: ["vind", "vindt", "vinden"],
    correctAnswer: "vindt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (vindt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (vindt)."
  },
  {
    id: "q_irreg_vinden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (vinden) het toneelstuk niet erg leuk.",
    correctAnswer: "vonden",
    explanationTr: "Çoğul imperfectum hali 'vonden'dir.",
    explanationEn: "The plural imperfectum form is 'vonden'."
  },
  {
    id: "q_irreg_vinden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (vinden) zijn verloren sleutels terug.",
    options: ["vond", "vonden", "vindt"],
    correctAnswer: "vond",
    explanationTr: "Tekil imperfectum hali 'vond'dur.",
    explanationEn: "The singular imperfectum form is 'vond'."
  },
  {
    id: "q_irreg_vinden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb mijn autosleutels weer ___ (vinden).",
    correctAnswer: "gevonden",
    explanationTr: "'vinden' fiilinin 3. hali 'gevonden'dür.",
    explanationEn: "The past participle of 'vinden' is 'gevonden'."
  },
  {
    id: "q_irreg_vinden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je je paspoort ___ (vinden)?",
    options: ["gevonden", "vond", "vinden"],
    correctAnswer: "gevonden",
    explanationTr: "Hebben + gevonden yapısı kullanılır.",
    explanationEn: "The combination hebben + gevonden is used."
  },

  // 53. vliegen
  {
    id: "q_irreg_vliegen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "De kleine vogel ___ (vliegen) hoog in de blauwe lucht.",
    correctAnswer: "vliegt",
    explanationTr: "3. tekil şahıs için kök 'vlieg' + t = vliegt.",
    explanationEn: "For 3rd person singular, stem 'vlieg' + t = vliegt."
  },
  {
    id: "q_irreg_vliegen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarheen ___ (vliegen) jullie deze zomer?",
    options: ["vliegt", "vliegen", "vloog"],
    correctAnswer: "vliegen",
    explanationTr: "Çoğul 'jullie' için fiil mastar (vliegen) kalır.",
    explanationEn: "For the plural 'jullie', the verb remains in the infinitive (vliegen)."
  },
  {
    id: "q_irreg_vliegen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (vliegen) gisteren comfortabel naar Spanje.",
    correctAnswer: "vlogen",
    explanationTr: "Çoğul imperfectum hali 'vlogen'dür.",
    explanationEn: "The plural imperfectum form is 'vlogen'."
  },
  {
    id: "q_irreg_vliegen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De piloot ___ (vliegen) naar Rome.",
    options: ["vloog", "vlogen", "vliegt"],
    correctAnswer: "vloog",
    explanationTr: "Tekil imperfectum hali 'vloog'dur.",
    explanationEn: "The singular imperfectum form is 'vloog'."
  },
  {
    id: "q_irreg_vliegen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je wel eens in een helikopter ___ (vliegen)?",
    correctAnswer: "gevlogen",
    explanationTr: "'vliegen' fiilinin 3. hali 'gevlogen'dür.",
    explanationEn: "The past participle of 'vliegen' is 'gevlogen'."
  },
  {
    id: "q_irreg_vliegen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik ben naar New York ___ (vliegen).",
    correctAnswer: "gevlogen",
    explanationTr: "Perfectum formunda 'gevlogen' kullanılır.",
    explanationEn: "'gevlogen' is used in the perfectum form."
  },

  // 54. vragen
  {
    id: "q_irreg_vragen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (vragen) de aardige agent even naar de weg.",
    correctAnswer: "vraag",
    explanationTr: "'ik' öznesi için fiil kökü 'vraag' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'vraag' is used."
  },
  {
    id: "q_irreg_vragen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (vragen) jij dat aan mij?",
    options: ["vraag", "vraagt", "vragen"],
    correctAnswer: "vraagt",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' alır (vraagt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (vraagt)."
  },
  {
    id: "q_irreg_vragen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (vragen) gisteren heel lief naar jouw gezondheid.",
    correctAnswer: "vroeg",
    explanationTr: "Tekil imperfectum hali 'vroeg'dür.",
    explanationEn: "The singular imperfectum form is 'vroeg'."
  },
  {
    id: "q_irreg_vragen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De leerlingen ___ (vragen) om extra uitleg.",
    options: ["vroeg", "vroegen", "vraagt"],
    correctAnswer: "vroegen",
    explanationTr: "Çoğul imperfectum hali 'vroegen'dir.",
    explanationEn: "The plural imperfectum form is 'vroegen'."
  },
  {
    id: "q_irreg_vragen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb het al aan de leraar ___ (vragen).",
    correctAnswer: "gevraagd",
    explanationTr: "'vragen' fiilinin 3. hali 'gevraagd'tır.",
    explanationEn: "The past participle of 'vragen' is 'gevraagd'."
  },
  {
    id: "q_irreg_vragen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je naar de prijs ___ (vragen)?",
    options: ["gevraagd", "vroeg", "vragen"],
    correctAnswer: "gevraagd",
    explanationTr: "Hebben + gevraagd yapısı kullanılır.",
    explanationEn: "The combination hebben + gevraagd is used."
  },

  // 55. wassen
  {
    id: "q_irreg_wassen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (wassen) elke zaterdag mijn eigen auto.",
    correctAnswer: "was",
    explanationTr: "'ik' öznesi için fiil kökü 'was' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'was' is used."
  },
  {
    id: "q_irreg_wassen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wie ___ (wassen) vandaag de vuile vaat?",
    options: ["was", "wast", "wassen"],
    correctAnswer: "wast",
    explanationTr: "3. tekil şahıs için kök 'was' + t = wast.",
    explanationEn: "For 3rd person singular, stem 'was' + t = wast."
  },
  {
    id: "q_irreg_wassen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ze ___ (wassen) gisteren de auto in de zon.",
    correctAnswer: "waste",
    explanationTr: "Tekil imperfectum hali 'waste'dir.",
    explanationEn: "The singular imperfectum form is 'waste'."
  },
  {
    id: "q_irreg_wassen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (wassen) alle kleren met de hand.",
    options: ["waste", "wasten", "wast"],
    correctAnswer: "wasten",
    explanationTr: "Çoğul imperfectum hali 'wasten'dir.",
    explanationEn: "The plural imperfectum form is 'wasten'."
  },
  {
    id: "q_irreg_wassen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je alle vuile kleren al ___ (wassen)?",
    correctAnswer: "gewassen",
    explanationTr: "'wassen' fiilinin 3. hali 'gewassen'dir.",
    explanationEn: "The past participle of 'wassen' is 'gewassen'."
  },
  {
    id: "q_irreg_wassen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb mijn handen netjes ___ (wassen).",
    options: ["gewassen", "waste", "wassen"],
    correctAnswer: "gewassen",
    explanationTr: "Perfectum formunda 'gewassen' kullanılır.",
    explanationEn: "'gewassen' is used in the perfectum form."
  },

  // 56. weten
  {
    id: "q_irreg_weten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (weten) het juiste antwoord helaas niet.",
    correctAnswer: "weet",
    explanationTr: "'ik' öznesi için 'weten' fiilinin çekimi 'weet'tir.",
    explanationEn: "For the subject 'ik', the conjugation of 'weten' is 'weet'."
  },
  {
    id: "q_irreg_weten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "___ (Weten) jij dat echt zeker?",
    options: ["Weet", "Weet je", "Weten"],
    correctAnswer: "Weet",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 't' düşer ama 'weten' kökü 'weet' zaten t ile biter: Weet jij.",
    explanationEn: "In questions with 'jij', the stem of 'weten' already ends in 't': Weet jij."
  },
  {
    id: "q_irreg_weten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wist jij dat al? Ja, ik ___ (weten) dat al lang.",
    correctAnswer: "wist",
    explanationTr: "Tekil imperfectum hali 'wist'tir.",
    explanationEn: "The singular imperfectum form is 'wist'."
  },
  {
    id: "q_irreg_weten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (weten) het toen nog niet zeker.",
    options: ["wist", "wisten", "weet"],
    correctAnswer: "wisten",
    explanationTr: "Çoğul imperfectum hali 'wisten'dir.",
    explanationEn: "The plural imperfectum form is 'wisten'."
  },
  {
    id: "q_irreg_weten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Dat heb ik echt nooit ___ (weten).",
    correctAnswer: "geweten",
    explanationTr: "'weten' fiilinin 3. hali 'geweten'dir.",
    explanationEn: "The past participle of 'weten' is 'geweten'."
  },
  {
    id: "q_irreg_weten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dat van tevoren ___ (weten)?",
    options: ["geweten", "wist", "weten"],
    correctAnswer: "geweten",
    explanationTr: "Hebben + geweten yapısı kullanılır.",
    explanationEn: "The combination hebben + geweten is used."
  },

  // 57. willen
  {
    id: "q_irreg_willen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (willen) heel graag een koud biertje.",
    correctAnswer: "wil",
    explanationTr: "'ik' öznesi için 'willen' fiili 'wil' olur.",
    explanationEn: "For the subject 'ik', the verb 'willen' becomes 'wil'."
  },
  {
    id: "q_irreg_willen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (willen) jij vanavond gaan eten?",
    options: ["wil", "wilt", "willen"],
    correctAnswer: "wil",
    explanationTr: "'jij' öznesiyle 'wil' veya 'wilt' kullanılabilir, en yaygını 'wil'dir.",
    explanationEn: "With 'jij', both 'wil' or 'wilt' can be used, 'wil' is most common."
  },
  {
    id: "q_irreg_willen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (willen) gisteren gaan sporten, maar het regende.",
    correctAnswer: "wilde",
    explanationTr: "Tekil imperfectum hali 'wilde' (veya wou) olur.",
    explanationEn: "The singular imperfectum form is 'wilde' (or wou)."
  },
  {
    id: "q_irreg_willen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (willen) niet naar huis gaan.",
    options: ["wilde", "wilden", "wil"],
    correctAnswer: "wilden",
    explanationTr: "Çoğul imperfectum hali 'wilden'dir.",
    explanationEn: "The plural imperfectum form is 'wilden'."
  },
  {
    id: "q_irreg_willen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ze heeft altijd een grote hond ___ (willen).",
    correctAnswer: "gewild",
    explanationTr: "'willen' fiilinin 3. hali 'gewild'dir.",
    explanationEn: "The past participle of 'willen' is 'gewild'."
  },
  {
    id: "q_irreg_willen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je dat echt ___ (willen) doen?",
    options: ["gewild", "wilde", "willen"],
    correctAnswer: "gewild",
    explanationTr: "Perfectum formunda 'gewild' kullanılır.",
    explanationEn: "'gewild' is used in the perfectum form."
  },

  // 58. worden
  {
    id: "q_irreg_worden_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (worden) volgende week woensdag dertig jaar.",
    correctAnswer: "word",
    explanationTr: "'ik' öznesi için fiil kökü 'word' kullanılır.",
    explanationEn: "For the subject 'ik', the stem 'word' is used."
  },
  {
    id: "q_irreg_worden_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Het weer ___ (worden) vandaag snel slechter.",
    options: ["word", "wordt", "worden"],
    correctAnswer: "wordt",
    explanationTr: "3. tekil şahıs için kök 'word' + t = wordt.",
    explanationEn: "For 3rd person singular, stem 'word' + t = wordt."
  },
  {
    id: "q_irreg_worden_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De situatie ___ (worden) gisteren heel erg gevaarlijk.",
    correctAnswer: "werd",
    explanationTr: "Tekil imperfectum hali 'werd'dir.",
    explanationEn: "The singular imperfectum form is 'werd'."
  },
  {
    id: "q_irreg_worden_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De dagen ___ (worden) in de winter steeds korter.",
    options: ["werd", "werden", "wordt"],
    correctAnswer: "werden",
    explanationTr: "Çoğul imperfectum hali 'werden'dir.",
    explanationEn: "The plural imperfectum form is 'werden'."
  },
  {
    id: "q_irreg_worden_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Mijn broer is vorige week arts ___ (worden).",
    correctAnswer: "geworden",
    explanationTr: "'worden' durum değişikliği bildirdiği için 'zijn' ile kurulur, 3. hali 'geworden'dür.",
    explanationEn: "'worden' indicates a state change, uses 'zijn', and its past participle is 'geworden'."
  },
  {
    id: "q_irreg_worden_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je al oom ___ (worden)?",
    options: ["geworden", "werd", "worden"],
    correctAnswer: "geworden",
    explanationTr: "Perfectum formunda 'geworden' kullanılır.",
    explanationEn: "'geworden' is used in the perfectum form."
  },

  // 59. zeggen
  {
    id: "q_irreg_zeggen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (zeggen) je nu eigenlijk precies?",
    correctAnswer: "zeg",
    explanationTr: "'ik' öznesi için 'zeggen' fiilinin kökü 'zeg'dir.",
    explanationEn: "For the subject 'ik', the stem of 'zeggen' is 'zeg'."
  },
  {
    id: "q_irreg_zeggen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Hij ___ (zeggen) dat hij morgen niet komt.",
    options: ["zeg", "zegt", "zeggen"],
    correctAnswer: "zegt",
    explanationTr: "3. tekil şahıs için 'zeggen' çekimi 'zegt' olur.",
    explanationEn: "For 3rd person singular, the conjugation of 'zeggen' is 'zegt'."
  },
  {
    id: "q_irreg_zeggen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Zij ___ (zeggen) gisteren dat ze erg ziek was.",
    correctAnswer: "zei",
    explanationTr: "Tekil imperfectum hali 'zei'dir.",
    explanationEn: "The singular imperfectum form is 'zei'."
  },
  {
    id: "q_irreg_zeggen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De ouders ___ (zeggen) dat het tijd was om te gaan.",
    options: ["zei", "zeiden", "zegt"],
    correctAnswer: "zeiden",
    explanationTr: "Çoğul imperfectum hali 'zeiden'dir.",
    explanationEn: "The plural imperfectum form is 'zeiden'."
  },
  {
    id: "q_irreg_zeggen_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Dat heb ik tegen niemand ___ (zeggen).",
    correctAnswer: "gezegd",
    explanationTr: "'zeggen' fiilinin 3. hali 'gezegd'dir.",
    explanationEn: "The past participle of 'zeggen' is 'gezegd'."
  },
  {
    id: "q_irreg_zeggen_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de waarheid ___ (zeggen)?",
    options: ["gezegd", "zei", "zeggen"],
    correctAnswer: "gezegd",
    explanationTr: "Hebben + gezegd yapısı kullanılır.",
    explanationEn: "The combination hebben + gezegd is used."
  },

  // 60. zien
  {
    id: "q_irreg_zien_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (zien) een prachtige vogel in de boom.",
    correctAnswer: "zie",
    explanationTr: "'ik' öznesi için 'zien' fiili 'zie' olur.",
    explanationEn: "For the subject 'ik', the verb 'zien' becomes 'zie'."
  },
  {
    id: "q_irreg_zien_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "___ (Zien) jij die mooie regenboog ook?",
    options: ["Zie", "Ziet", "Zien"],
    correctAnswer: "Zie",
    explanationTr: "Soru cümlesinde 'jij' fiilden sonra gelince 't' düşer: Zie jij.",
    explanationEn: "In questions with 'jij', the 't' drops: Zie jij."
  },
  {
    id: "q_irreg_zien_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (zien) je gisteren nog op straat lopen.",
    correctAnswer: "zag",
    explanationTr: "Tekil imperfectum hali 'zag'dır.",
    explanationEn: "The singular imperfectum form is 'zag'."
  },
  {
    id: "q_irreg_zien_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "We ___ (zien) de hoge bergen in de verte.",
    options: ["zag", "zagen", "ziet"],
    correctAnswer: "zagen",
    explanationTr: "Çoğul imperfectum hali 'zagen'dir.",
    explanationEn: "The plural imperfectum form is 'zagen'."
  },
  {
    id: "q_irreg_zien_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je die nieuwe bioscoopfilm al ___ (zien)?",
    correctAnswer: "gezien",
    explanationTr: "'zien' fiilinin 3. hali 'gezien'dir.",
    explanationEn: "The past participle of 'zien' is 'gezien'."
  },
  {
    id: "q_irreg_zien_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik heb je gisteren in de stad ___ (zien).",
    options: ["gezien", "zag", "zien"],
    correctAnswer: "gezien",
    explanationTr: "Perfectum formunda 'gezien' kullanılır.",
    explanationEn: "'gezien' is used in the perfectum form."
  },

  // 61. zijn
  {
    id: "q_irreg_zijn_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (zijn) vandaag een beetje moe.",
    correctAnswer: "ben",
    explanationTr: "'ik' öznesi için 'zijn' fiili 'ben' olur.",
    explanationEn: "For the subject 'ik', the verb 'zijn' becomes 'ben'."
  },
  {
    id: "q_irreg_zijn_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Jij ___ (zijn) mijn allerbeste vriend.",
    options: ["ben", "bent", "is"],
    correctAnswer: "bent",
    explanationTr: "'jij' öznesi için 'zijn' fiili 'bent' olur.",
    explanationEn: "For the subject 'jij', the verb 'zijn' becomes 'bent'."
  },
  {
    id: "q_irreg_zijn_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Waar ___ (zijn) jij gisterenavond eigenlijk?",
    correctAnswer: "was",
    explanationTr: "Tekil imperfectum hali 'was'tır.",
    explanationEn: "The singular imperfectum form is 'was'."
  },
  {
    id: "q_irreg_zijn_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wij ___ (zijn) vorige week in Parijs.",
    options: ["was", "waren", "is"],
    correctAnswer: "waren",
    explanationTr: "Çoğul imperfectum hali 'waren'dir.",
    explanationEn: "The plural imperfectum form is 'waren'."
  },
  {
    id: "q_irreg_zijn_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ik ben vorige week in Parijs ___ (zijn).",
    correctAnswer: "geweest",
    explanationTr: "'zijn' fiilinin 3. hali 'geweest'tir ve yine 'zijn' ile kurulur.",
    explanationEn: "The past participle of 'zijn' is 'geweest' and uses 'zijn'."
  },
  {
    id: "q_irreg_zijn_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Ben je daar wel eens ___ (zijn)?",
    options: ["geweest", "was", "zijn"],
    correctAnswer: "geweest",
    explanationTr: "Perfectum formunda 'geweest' kullanılır.",
    explanationEn: "'geweest' is used in the perfectum form."
  },

  // 62. zitten
  {
    id: "q_irreg_zitten_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "We ___ (zitten) heerlijk in de zonnige tuin.",
    correctAnswer: "zitten",
    explanationTr: "Çoğul 'we' için fiil mastar (zitten) kalır.",
    explanationEn: "For the plural 'we', the verb remains in the infinitive (zitten)."
  },
  {
    id: "q_irreg_zitten_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waar ___ (zitten) jij nu weer?",
    options: ["zit", "zitten", "zat"],
    correctAnswer: "zit",
    explanationTr: "'jij' öznesi fiilden ÖNCE gelince '-t' düşmez ama kök 'zit' zaten t ile biter: zit.",
    explanationEn: "The stem of 'zitten' is 'zit', which already ends in 't'."
  },
  {
    id: "q_irreg_zitten_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Hij ___ (zitten) gisteren de hele dag binnen.",
    correctAnswer: "zat",
    explanationTr: "Tekil imperfectum hali 'zat'tır.",
    explanationEn: "The singular imperfectum form is 'zat'."
  },
  {
    id: "q_irreg_zitten_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De studenten ___ (zitten) rustig in de klas.",
    options: ["zat", "zaten", "zit"],
    correctAnswer: "zaten",
    explanationTr: "Çoğul imperfectum hali 'zaten'dir.",
    explanationEn: "The plural imperfectum form is 'zaten'."
  },
  {
    id: "q_irreg_zitten_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "We hebben lang in de file ___ (zitten).",
    correctAnswer: "gezeten",
    explanationTr: "'zitten' fiilinin 3. hali 'gezeten'dir.",
    explanationEn: "The past participle of 'zitten' is 'gezeten'."
  },
  {
    id: "q_irreg_zitten_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je de hele dag binnen ___ (zitten)?",
    options: ["gezeten", "zat", "zitten"],
    correctAnswer: "gezeten",
    explanationTr: "Hebben + gezeten yapısı kullanılır.",
    explanationEn: "The combination hebben + gezeten is used."
  },

 // YENİ EKLENEN DÜZENSİZ FİİRLER (ZOEKEN & ZULLEN) QUIZ VERİLERİ (HER FİİL İÇİN PRESENT, IMPERFECTUM VE PERFECTUM - 2'ŞER SORU)

  // 1. zoeken (Present)
  {
    id: "q_irreg_zoeken_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (zoeken) mijn verloren sleutels in de woonkamer.",
    correctAnswer: "zoek",
    explanationTr: "'ik' öznesi ile düzenli/düzensiz tüm fiiller sadece kök (stam) halindedir. 'zoeken' kökü 'zoek'tir.",
    explanationEn: "With the subject 'ik', verbs are in their stem form. The stem of 'zoeken' is 'zoek'."
  },
  {
    id: "q_irreg_zoeken_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Waarom ___ (zoeken) jij je jas overal?",
    options: ["zoek", "zoekt", "zoeken"],
    correctAnswer: "zoekt",
    explanationTr: "'jij' öznesi fiilden ÖNCE geldiğinde düzenli/düzensiz fark etmez, köke '-t' eklenir (zoekt).",
    explanationEn: "When the subject 'jij' comes BEFORE the verb, it takes '-t' (zoekt)."
  },

  // zoeken (Imperfectum / Past)
  {
    id: "q_irreg_zoeken_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Gisteren ___ (zoeken) ik mijn telefoon overal in het huis.",
    correctAnswer: "zocht",
    explanationTr: "'zoeken' düzensiz bir fiildir. Tekil imperfectum (hikaye geçmiş zaman) hali 'zocht'tur.",
    explanationEn: "'zoeken' is an irregular verb. The singular imperfectum form is 'zocht'."
  },
  {
    id: "q_irreg_zoeken_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "De kinderen ___ (zoeken) hun speelgoed in de tuin.",
    options: ["zocht", "zochten", "zoekt"],
    correctAnswer: "zochten",
    explanationTr: "Çoğul öznelerde (de kinderen) imperfectum hali 'zochten' olur.",
    explanationEn: "The plural imperfectum form for 'de kinderen' is 'zochten'."
  },

  // zoeken (Perfectum)
  {
    id: "q_irreg_zoeken_f1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heb je al in de kast ___ (zoeken)?",
    correctAnswer: "gezocht",
    explanationTr: "'zoeken' fiilinin 3. hali (perfectum) 'gezocht'dür ve 'hebben' ile kullanılır.",
    explanationEn: "The past participle (perfectum) of 'zoeken' is 'gezocht' and it is used with 'hebben'."
  },
  {
    id: "q_irreg_zoeken_f2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Waar heb je mijn boek ___ (zoeken)?",
    options: ["gezocht", "zocht", "zoeken"],
    correctAnswer: "gezocht",
    explanationTr: "Perfectum yapısında yardımcı fiilden sonra fiilin 3. hali olan 'gezocht' gelir.",
    explanationEn: "In the perfectum structure, the past participle 'gezocht' follows the auxiliary verb."
  },

  // 2. zullen (Present)
  {
    id: "q_irreg_zullen_p1",
    type: "fill_in",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Ik ___ (zullen) je morgen om negen uur opbellen.",
    correctAnswer: "zal",
    explanationTr: "'zullen' modal (kipli) bir fiildir. 'ik' öznesi için çekimi 'zal'dır.",
    explanationEn: "'zullen' is a modal verb. The conjugation for the subject 'ik' is 'zal'."
  },
  {
    id: "q_irreg_zullen_p2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "verbs_present"],
    questionNl: "Wat ___ (zullen) we vanavond gaan eten?",
    options: ["zal", "zullen", "zult"],
    correctAnswer: "zullen",
    explanationTr: "Çoğul 'we' öznesi ile 'zullen' fiili aynen 'zullen' olarak kalır.",
    explanationEn: "With the plural subject 'we', the verb 'zullen' remains 'zullen'."
  },

  // zullen (Imperfectum / Past)
  {
    id: "q_irreg_zullen_i1",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Ik ___ (zullen) het antwoord op die vraag echt niet weten.",
    correctAnswer: "zou",
    explanationTr: "'zullen' fiilinin tekil imperfectum hali 'zou'dur.",
    explanationEn: "The singular imperfectum form of 'zullen' is 'zou'."
  },
  {
    id: "q_irreg_zullen_i2",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "imperfectum"],
    questionNl: "Wat ___ (zullen) jij in zo'n moeilijke situatie doen?",
    options: ["zou", "zouden", "zal"],
    correctAnswer: "zou",
    explanationTr: "Tekil 'jij' için imperfectum hali 'zou'dur.",
    explanationEn: "The imperfectum form for singular 'jij' is 'zou'."
  },

  // zullen (Perfectum - addressing the absence of a perfectum form)
  {
    id: "q_irreg_zullen_f1",
    type: "multiple_choice",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Wat is de perfectum vorm (3. hali) van het hulpwerkwoord 'zullen'?",
    options: ["Geen perfectum vorm (-)", "Gezuld", "Hebben gezuld"],
    correctAnswer: "Geen perfectum vorm (-)",
    explanationTr: "'zullen' yardımcı bir fiildir ve Hollandacada perfectum (voltooid deelwoord) formu yoktur.",
    explanationEn: "'zullen' is an auxiliary verb and does not have a perfectum form in Dutch."
  },
  {
    id: "q_irreg_zullen_f2",
    type: "fill_in",
    tags: ["irregular_verbs", "past_tenses", "perfectum"],
    questionNl: "Heeft het werkwoord 'zullen' een perfectum vorm? Zo nee, vul '-' in: ___",
    correctAnswer: "-",
    explanationTr: "'zullen' fiilinin perfectum formu bulunmadığı için listede '-' olarak belirtilmiştir.",
    explanationEn: "Since the verb 'zullen' has no perfectum form, it is indicated as '-' in the list."
  }
];