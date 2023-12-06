import { getAnswerForQuestion } from '../answerForQuestion.js';
import getRandomNumber from '../randomNumber.js';

export default (rules) => {
  const Answer = {
    YES: 'yes',
    NO: 'no',
  };

  function next() {
    const num = getRandomNumber(99);
    const rightAnswer = num % 2 === 0 ? Answer.YES : Answer.NO;
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start() {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      next();
    },
  };
};
