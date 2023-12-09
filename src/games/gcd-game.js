import { getAnswerForQuestion } from '../answerForQuestion.js';
import getRandomNumber from '../randomNumber.js';

const game = (rules) => {
  const next = () => {
    const gcd = (a, b) => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };
    const num1 = getRandomNumber(9);
    const num2 = getRandomNumber(9);
    const rightAnswer = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  };
  return {
    start() {
      console.log('Find the greatest common divisor of given numbers.');
      next();
    },
  };
};
export default game;
