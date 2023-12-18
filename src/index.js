import readlineSync from 'readline-sync';

const answersCount = 3;

const brainGame = (taskGame, questionAndARigthAnswerGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  console.log(`${taskGame}\n`);
  for (let attemptsCount = 0; attemptsCount < answersCount; attemptsCount += 1) {
    const [question, rigthAnswer] = questionAndARigthAnswerGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainGame;
