import { createSelector } from '@reduxjs/toolkit';
import IntQuestion from '../typescriptExports/IntQuestion';

interface IntState {
  quizSet: IntQuestion[];
  currentIdx: number;
  score: number;
  showAnswer: boolean;
}

const gameSelectors = createSelector(
  (state: IntState) => ({
    quizSet: state.quizSet,
    currentIdx: state.currentIdx,
    score: state.score,
    showAnswer: state.showAnswer,
  }),
  state => state,
);

export default gameSelectors;
