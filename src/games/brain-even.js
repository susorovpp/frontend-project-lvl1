import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const num = getRandomNum();
  const answer = getEven(num) ? 'yes' : 'no';

  return cons(String(num), answer);
};

export default () => getGame(gameDescription, getQuestionAnswer);
