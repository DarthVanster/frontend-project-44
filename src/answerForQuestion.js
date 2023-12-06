import readlineSync from 'readline-sync';

export const getAnswerForQuestion = (question) => readlineSync.question(`${question} `);
export const getUserName = () => getAnswerForQuestion('May i have your name?');
