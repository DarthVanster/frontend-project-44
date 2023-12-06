#!/usr/bin/env node

import rules from '../src/index.js';
import { getUserName } from '../src/answerForQuestion.js';
import game from '../src/games/prime-game.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

const gameRules = rules();
gameRules.setUserName(userName);
gameRules.reset();
game(gameRules).start();
