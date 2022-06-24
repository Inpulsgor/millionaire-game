import IntGame from '../typescriptExports/IntGame';
import { games } from '../questions.json';

const getRandowIdx = (array: IntGame[]) => {
  return Math.floor(Math.random() * array.length);
};

const getQuestionsSet = () => {
  const randomIdx = getRandowIdx(games);
  const set = games.find((_, idx) => idx === randomIdx);

  return set?.questions;
};

export default getQuestionsSet;
