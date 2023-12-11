import getRandomNumber from '../randomNumber.js';
import { getAnswerForQuestion } from '../answerForQuestion.js';

const game = (rules) => {
  const operators = ['+', '-', '*'];
  const getAnswer = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        break;
    }
    return false;
  };
  const generateQuestionAnswer = () => {
    const a = getRandomNumber(99);
    const b = getRandomNumber(99);
    const operator = operators[getRandomNumber(2)];
    const question = `${a} ${operator} ${b}`;
    const rightAnswer = String(getAnswer(a, b, operator));
    console.log(`Question: ${question}`);
    const answer = getAnswerForQuestion('Your answer:');
    rules.check({ rightAnswer, answer }, generateQuestionAnswer);
  };
  return {
    start() {
      console.log('What is the result of the expression?');
      generateQuestionAnswer();
    },
  };
};
export default game;
