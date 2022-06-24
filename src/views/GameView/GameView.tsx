import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import gameSlice from '../../redux/gameSlice';
import gameSelectors from '../../redux/gameSelectors';
import Menu from '../../components/Menu/Menu';
import Question from '../../components/Question/Question';
import AnswersBlock from '../../components/AnswersBlock/AnswerBlock';
import routes from '../../routes';
import getQuestionsSet from '../../helpers/getQuestionsSet';
import {
  GameScreen,
  GameViewContainer,
  GameContainer,
} from './GameView.styles';

const GameView = () => {
  const { quizSet } = useSelector(gameSelectors);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(gameSlice.quizSet.actions.setQuizSet(getQuestionsSet()));
    dispatch(gameSlice.currentIdx.actions.setCurrentIdx(0));
    dispatch(gameSlice.score.actions.setScore(0));
  }, [dispatch]);

  return (
    <>
      {quizSet && quizSet.length > 0 ? (
        <GameViewContainer>
          <GameScreen>
            <GameContainer>
              <Question />
              <AnswersBlock />
            </GameContainer>
          </GameScreen>

          <Menu />
        </GameViewContainer>
      ) : (
        <>
          <p>Whooops...something went wrong</p>
          <p>
            <Link to={routes.gameStart}>Go back</Link>
          </p>
        </>
      )}
    </>
  );
};

export default GameView;
