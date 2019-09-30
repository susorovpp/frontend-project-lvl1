import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getAnswer = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getAnswer(b, a % b);
};

const getQuestionAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = getAnswer(num1, num2);

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
