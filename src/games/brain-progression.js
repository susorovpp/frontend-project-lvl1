import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const getArithmeticProg = (begin, iters, diff, box) => {
  if (iters === 0) {
    return box;
  }
  box.push(begin);
  return getArithmeticProg(begin + diff, iters - 1, diff, box);
};

const progressionLength = 10;

const getQuestionAnswer = () => {
  const firstElement = getRandomNum(0, 100);
  const diffElement = getRandomNum(1, 10);
  const members = [];
  const randomElement = getRandomNum(0, progressionLength);
  const progression = getArithmeticProg(firstElement, progressionLength, diffElement, members);
  const answer = progression[randomElement];
  progression.splice(randomElement, 1, '..');
  const question = members.join(' ');

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
