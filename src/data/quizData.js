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
  }
];