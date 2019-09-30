import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const num = getRandomNum();
  const even = num % 2;
  const answer = even === 0 ? 'yes' : 'no';

  return cons(String(num), answer);
};

export default () => getGame(gameDescription, getQuestionAnswer);
