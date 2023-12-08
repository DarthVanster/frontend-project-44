### Hexlet tests and linter status:
[![Actions Status](https://github.com/DarthVanster/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/DarthVanster/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/ef8de75b60091c5879db/maintainability)](https://codeclimate.com/github/DarthVanster/frontend-project-44/maintainability)

# Instructions for installing and running the game:
1) Create a directory where you place the project and navigate to this directory.
2) Run git pull to transfer all files from the remote repository to your local repository.
3) While in the root directory of the project, run npm publish --dry-run to update packages in the RPM repository.
4) To install the package globally from the local directory, run the npm link command.
5) Run any game with the brain-(name of the game) command, for example: brain-games, brain-calc, brain-even.

# Game: "Parity Check"
It is necessary to implement the "Parity Check" game. The essence of the game is as follows: a random number is shown to the user. And he needs to answer yes if the number is even, or no if it is odd:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
If the user gives an incorrect answer, it is necessary to output:
```
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
```
and complete the game. If the user entered the correct answer, you need to display:
```
Correct!
```
and proceed to the next number.

The user must give the correct answer to three questions in a row. After a successful game, you need to withdraw:
```
Congratulations, Bill!
```
The output should be as follows:
```
$ brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
```
- Any incorrect input is considered an error (for example, n) and is equivalent to an incorrect answer.

# Game: "Calculator"
It is necessary to implement the Calculator game. The essence of the game is as follows: the user is shown a random mathematical expression, for example 35 + 16, which needs to be calculated and written down the correct answer.

The output should be as follows:
```
$ brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
- It is enough to implement the following operations: +, - and *.
- Operations, like numbers, are randomly selected.

If the user gives an incorrect answer, it is necessary to output:
```
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```
and complete the game.

# The NODE game
It is necessary to implement the game "the greatest common divisor (NODE)". The essence of the game is as follows: the user is shown two random numbers, for example, 25 50. The user must calculate and enter the largest common divisor of these numbers.

The output should be as follows:
```
$ brain-gcd

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
If the user gives an incorrect answer, it is necessary to output:
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```
# The Arithmetic Progression game
We show the player a series of numbers forming an arithmetic progression by replacing any of the numbers with two dots. The player must determine this number.

The recommended length of the progression is 10 numbers. The length can be generated randomly, but must contain at least 5 numbers!
The position of the hidden element changes each time (randomly selected).
Example:
```
$ brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```
If the user gives an incorrect answer, it is necessary to output:
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```
# Is the game "Is it a prime number?"
Example:
```
$ brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
All the output and logic in the case of a correct and incorrect answer repeat the previous steps.
