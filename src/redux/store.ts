import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import gameSlice from './gameSlice';

const store = configureStore({
  reducer: combineReducers({
    [gameSlice.quizSet.name]: gameSlice.quizSet.reducer,
    [gameSlice.currentIdx.name]: gameSlice.currentIdx.reducer,
    [gameSlice.score.name]: gameSlice.score.reducer,
    [gameSlice.showAnswer.name]: gameSlice.showAnswer.reducer,
  }),

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export default store;
