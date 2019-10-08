import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const getProgression = (firstTerm, amountTerms, difference, sumOfTerms) => {
  if (amountTerms === 0) {
    return sumOfTerms;
  }
  sumOfTerms.push(firstTerm);
  return getProgression(firstTerm + difference, amountTerms - 1, difference, sumOfTerms);
};

const getQuestionAnswer = () => {
  const firstTerm = getRandomNum(0, 100);
  const difference = getRandomNum(1, 10);
  const sumOfTerms = [];
  const amountTerms = 10;
  const hiddenTermIndex = getRandomNum(0, amountTerms);
  const progression = getProgression(firstTerm, amountTerms, difference, sumOfTerms);
  const answer = progression[hiddenTermIndex];
  progression.splice(hiddenTermIndex, 1, '..');
  const question = sumOfTerms.join(' ');

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
