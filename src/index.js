import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (gameDescription, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const sumOfRounds = 3;

  for (let i = 1; i <= sumOfRounds; i += 1) {
    const gameData = getQuestionAnswer();
    const question = car(gameData);
    const answer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
