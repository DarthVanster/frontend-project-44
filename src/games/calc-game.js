import getRandomNumber from '../randomNumber.js';
import executeGame from '../index.js';

const operatorsCounts = 3;

const getRandomOperator = () => {
  const operators = ['*','-','+'];
  const randomOperator = Math.floor(Math.random() * (operators.length));
  const result = operators[randomOperator];
  return result;
};

const calculateExpresion = (numberLeft, operator, numberRigth) => {
  switch (operator) {
    case '+':
      return (Number.parseInt(numberLeft, 10) + Number.parseInt(numberRigth, 10)).toString(10);
    case '-':
      return (Number.parseInt(numberLeft, 10) - Number.parseInt(numberRigth, 10)).toString(10);
    case '*':
      return (Number.parseInt(numberLeft, 10) * Number.parseInt(numberRigth, 10)).toString(10);
  }
};

const taskGame = 'What is the result of the expression?';

const maxRangeNumbers = 30;

const getQuestionAndRigthAnswer = () => {
  const numberLeft = getRandomNumber(0, maxRangeNumbers);
  const numberRigth = getRandomNumber(0, maxRangeNumbers);
  const operator = getRandomOperator();
  const rigthAnswer = calculateExpresion(numberLeft, operator, numberRigth);
  return [`${numberLeft} ${operator} ${numberRigth}`, rigthAnswer];
};

const calculateGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default calculateGame;
