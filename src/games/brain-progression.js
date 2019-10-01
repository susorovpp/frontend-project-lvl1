import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const getArray = (begin, iters, diff, box) => {
  if (iters === 0) {
    return box;
  }
  box.push(begin);
  return getArray(begin + diff, iters - 1, diff, box);
};

const getQuestionAnswer = () => {
  const firstIndex = getRandomNum(0, 100);
  const diffIndex = getRandomNum(1, 10);
  const quantityIter = 10;
  const arr = [];
  const randomIndex = getRandomNum(0, 10);
  const progression = getArray(firstIndex, quantityIter, diffIndex, arr);
  const answer = progression[randomIndex];
  progression.splice(randomIndex, 1, '..');
  const question = arr.join(' ');

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
