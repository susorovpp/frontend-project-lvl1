import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const getProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i <= length - 1; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const progressionLength = 10;

const getQuestionAnswer = () => {
  const firstTerm = getRandomNum(0, 100);
  const difference = getRandomNum(1, 10);
  const progression = getProgression(firstTerm, difference, progressionLength);
  const answer = progression.splice(getRandomNum(1, progressionLength), 1, '..');
  const question = progression.join(' ');
  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
