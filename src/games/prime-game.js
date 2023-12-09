import { getAnswerForQuestion } from '../answerForQuestion.js';
import getRandomNumber from '../randomNumber.js';

const game = (rules) => {
  const next = () => {
    const isPrime = (num) => {
      if (num === 1) return false;
      if (num % 2 === 0 && num > 2) return false;
      const s = Math.sqrt(num);
      for (let i = 3; i <= s; i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const num = getRandomNumber(7) + 2;
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  };
  return {
    start() {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      next();
    },
  };
};
export default game;
