// src/data/questionGenerator.js

export const generateSmartQuestions = (targetChapter, topic, count, chapterVocab) => {
  const getWrongAnswers = (correctNl) => {
    let wrong = [];
    while (wrong.length < 2) {
      let rand = chapterVocab[Math.floor(Math.random() * chapterVocab.length)].nl;
      if (rand !== correctNl && !wrong.includes(rand)) wrong.push(rand);
    }
    return wrong;
  };

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  let questions = [];
  for (let i = 0; i < count; i++) {
    let wordObj = chapterVocab[Math.floor(Math.random() * chapterVocab.length)];
    let type = i % 2 === 0 ? 'multiple_choice' : 'fill_in';
    
    if (type === 'multiple_choice') {
      let wrongOptions = getWrongAnswers(wordObj.nl);
      questions.push({
        id: `extra_h${targetChapter}_${topic}_${i}`,
        type: "multiple_choice",
        question: `Wat is de Nederlandse vertaling van: "${wordObj.en}"?`,
        options: shuffle([wordObj.nl, ...wrongOptions]),
        correctAnswer: wordObj.nl
      });
    } else {
      questions.push({
        id: `extra_h${targetChapter}_${topic}_${i}`,
        type: "fill_in",
        question: `Vertaal naar het Nederlands: "${wordObj.en}"`,
        correctAnswer: wordObj.nl
      });
    }
  }
  return questions;
};