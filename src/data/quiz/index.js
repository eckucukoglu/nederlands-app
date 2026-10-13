// src/data/quiz/index.js
import { matchingQuestions } from './matchingQuestions.js';
import { chapters1_5 } from './chapters1_5.js';
import { chapters6_10 } from './chapters6_10.js';
import { chapters11_15 } from './chapters11_15.js';
import { chapters16_18 } from './chapters16_18.js';
import { irregularVerbs } from './irregularVerbs.js';
import { grammarTenses } from './grammarTenses.js';
import { grammarSyntax } from './grammarSyntax.js';
import { grammarForms } from './grammarForms.js';
import { dialoguesReading } from './dialoguesReading.js';

export const quizQuestions = [
  ...matchingQuestions,
  ...chapters1_5,
  ...chapters6_10,
  ...chapters11_15,
  ...chapters16_18,
  ...irregularVerbs,
  ...grammarTenses,
  ...grammarSyntax,
  ...grammarForms,
  ...dialoguesReading
];

export {
  matchingQuestions,
  chapters1_5,
  chapters6_10,
  chapters11_15,
  chapters16_18,
  irregularVerbs,
  grammarTenses,
  grammarSyntax,
  grammarForms,
  dialoguesReading
};
