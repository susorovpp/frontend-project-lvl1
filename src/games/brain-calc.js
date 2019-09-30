import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = '+-*';
  const index = getRandomNum(0, 3);
  return operators[index];
};

const getAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return null;
};

const getQuestionAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator);

  return cons(question, String(answer));
};

export default () => getGame(gameDescription, getQuestionAnswer);
