import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(String(question), answer);
};

export default () => getGame(gameDescription, getQuestionAnswer);
