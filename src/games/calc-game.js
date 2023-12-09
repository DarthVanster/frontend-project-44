import { getAnswerForQuestion } from '../answerForQuestion.js';
import getRandomNumber from '../randomNumber.js';

const game = (rules) => {
  const Operations = ['+', '-', '*'];
  const getOperation = () => {
    const getOperat = Operations[getRandomNumber(2)];
    return getOperat;
  };
  const next = () => {
    const num1 = getRandomNumber(99);
    const num2 = getRandomNumber(99);
    const operation = getOperation();
    const expression = `${num1} ${operation} ${num2}`;
    const rightAnswer = eval(expression);
    console.log(`Question: ${expression}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, next);
  };
  return {
    start() {
      console.log('What is the result of the expression?');
      next();
    },
  };
};
export default game;
