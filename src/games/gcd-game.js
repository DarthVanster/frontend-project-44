import { getAnswerForQuestion } from '../answerForQuestion.js';
import getGCD from '../gcd.js';
import getRandomNumber from '../randomNumber.js';

export default (rules) => {
  function next() {
    const num1 = getRandomNumber(9);
    const num2 = getRandomNumber(9);
    const rightAnswer = getGCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  }
  return {
    start() {
      console.log('Find the greatest common divisor of given numbers.');
      next();
    },
  };
};
