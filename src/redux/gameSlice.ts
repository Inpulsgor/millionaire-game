import { createSlice } from '@reduxjs/toolkit';

const quizSet = createSlice({
  name: 'quizSet',
  initialState: [],
  reducers: {
    setQuizSet: (_, { payload }) => payload,
  },
});

const currentIdx = createSlice({
  name: 'currentIdx',
  initialState: 0,
  reducers: {
    setCurrentIdx: (_, { payload }) => payload,
  },
});

const score = createSlice({
  name: 'score',
  initialState: 0,
  reducers: {
    setScore: (_, { payload }) => payload,
  },
});

const showAnswer = createSlice({
  name: 'showAnswer',
  initialState: false,
  reducers: {
    setShowAnswer: (_, { payload }) => payload,
  },
});

export default { quizSet, currentIdx, score, showAnswer };
