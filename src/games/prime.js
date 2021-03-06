import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
