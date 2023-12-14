import readlineSync from 'readline-sync';

function gameplay(getQuestionAnswer, quest) =
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(quest);
  for (let questionOrder = 0; questionOrder < 3; questionOrder += 1) {
    const [questions, correctAnswers] = getQuestionAnswer();
    console.log(`Question: ${questions}`);
    const answer = readlineSync.question('Your answer: ');

    const correct = `${correctAnswers}`;

    if (correct === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is a wrong answer ;(. Correct answer was "${correct}"`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
gameplay();
export default gameplay();
