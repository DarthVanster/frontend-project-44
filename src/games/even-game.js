import getRandomNumber from '../randomNumber.js';
import executeGame from '../execute.js';

const isEven = (number) => (number % 2 === 0);

const taskGame = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndRigthAnswer = () => {
  const question = getRandomNumber(0, 99);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  return [`${question}`, rigthAnswer];
};

const evenGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default evenGame;
