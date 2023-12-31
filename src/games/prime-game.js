import getRandomNumber from '../randomNumber.js';
import executeGame from '../index.js';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const maxRangePrimeNumbers = 100;

const getQuestionAndRigthAnswer = () => {
  const questionPrimeNumber = getRandomNumber(2, maxRangePrimeNumbers);
  const rigthAnswer = isPrimeNumber(questionPrimeNumber) ? 'yes' : 'no';
  return [`${questionPrimeNumber}`, rigthAnswer];
};

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default startPrimeGame;
