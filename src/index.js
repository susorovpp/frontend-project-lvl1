import readlineSync from 'readline-sync';

export const getRandomNum = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
};

export const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const getGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  let iter = 0;

  while (iter < 3) {
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const answerUser = readlineSync.question('Your answer:');

    if ((randomNum % 2 === 0 && answerUser === 'yes') || (randomNum % 2 !== 0 && answerUser === 'no')) {
      console.log('Correct!');
      iter += 1;
    } else if (randomNum % 2 === 0 && answerUser === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!'`);
      break;
    } else if (randomNum % 2 !== 0 && answerUser === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`${answerUser} is wrong answer ;(.`);
      break;
    }
    if (iter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default getUserName;
