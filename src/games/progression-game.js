import { getAnswerForQuestion } from '../answerForQuestion.js';
import getRandomNumber from '../randomNumber.js';

const game = (rules) => {
  const createProgression = (first, base, count) => {
    const createProg = [...Array(count)].map((_, i) => first + base * i);
    return createProg;
  };
  const hideProgressionNumberByIndex = (progression, index) => {
    const p = [...progression];
    p[index] = '..';
    return p;
  };
  const next = () => {
    const first = getRandomNumber(19);
    const base = getRandomNumber(5) + 1;
    const count = getRandomNumber(5) + 5;
    const progression = createProgression(first, base, count);
    const rightAnswerIndex = getRandomNumber(count - 1);
    const rightAnswer = progression[rightAnswerIndex];
    const progToShow = hideProgressionNumberByIndex(progression, rightAnswerIndex)
      .join(' ');
    console.log(`Question: ${progToShow}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  };
  return {
    start() {
      console.log('What number is missing in the progression?');
      next();
    },
  };
};
export default game;
