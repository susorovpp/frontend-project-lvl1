import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isPrime(question);

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
