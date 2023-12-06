import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay i have your name? ');
console.log(`Hello, ${userName}!`);
export default userName;
