import { cons } from '@hexlet/pairs';
import getRandomNum from '../tools';
import getGame from '..';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';

const getRandomOperator = () => {
  const index = getRandomNum(0, operators.length);
  return operators[index];
};

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
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
