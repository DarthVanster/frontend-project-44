import { getAnswerForQuestion } from '../answerForQuestion.js';
import isPrime from '../isPrime.js';
import getRandomNumber from '../randomNumber.js';

export default (rules) => {
  function next() {
    const num = getRandomNumber(7) + 2;
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  }
  return {
    start() {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      next();
    },
  };
};
