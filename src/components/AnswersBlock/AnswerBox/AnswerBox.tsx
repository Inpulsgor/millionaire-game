import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import gameSlice from '../../../redux/gameSlice';
import gameSelectors from '../../../redux/gameSelectors';
import AnswerDisplay from './AnswerDisplay/AnswerDisplay';
import handleSound from '../../../helpers/handleSound';
import {
  backgroundSound,
  clickedSound,
  correctSound,
  incorrectSound,
} from '../../../helpers/sounds';
import EnumAnswerStatus from '../../../typescriptExports/EnumAnswerStatus';
import IntTheme from '../../../typescriptExports/IntTheme';
import routes from '../../../routes';
import scores from '../../../scores.json';

const TIMEOUT = 4000;

interface IntAnswerBox {
  option: string;
  answer: string;
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  isCorrect: boolean;
}

const AnswerBox = ({
  option,
  answer,
  disabled,
  setDisabled,
  isCorrect,
}: IntAnswerBox) => {
  const [status, setStatus] = useState(EnumAnswerStatus.Initial);

  const { quizSet, currentIdx, showAnswer } = useSelector(gameSelectors);

  const dispatch: AppDispatch = useDispatch();

  // HANDLE FINISH GAME
  const history = useHistory();

  const handleFinishGame = () => {
    setTimeout(() => {
      setStatus(EnumAnswerStatus.Initial);
      dispatch(gameSlice.showAnswer.actions.setShowAnswer(false));
      history.push(routes.gameOver);
    }, TIMEOUT);
  };

  // HANDLE NEXT QUESTION
  const handleNextQuestion = () => {
    const nextIndex = currentIdx + 1;

    if (quizSet && nextIndex > quizSet.length - 1) {
      handleFinishGame();
    }

    setTimeout(() => {
      dispatch(gameSlice.currentIdx.actions.setCurrentIdx(nextIndex));
      dispatch(gameSlice.score.actions.setScore(scores.rewards[nextIndex]));
      setStatus(EnumAnswerStatus.Initial);
      setDisabled(false);

      if (quizSet && nextIndex <= quizSet.length - 1) {
        backgroundSound.play();
      }
    }, TIMEOUT);
  };

  // HANDLE CLICK
  const handleClick = () => {
    if (disabled) return;

    handleSound(backgroundSound, clickedSound);
    setStatus(EnumAnswerStatus.Clicked);
    setDisabled(true);

    setTimeout(() => {
      if (isCorrect) {
        handleSound(clickedSound, correctSound);
        setStatus(EnumAnswerStatus.Correct);
        handleNextQuestion();
      }

      if (!isCorrect) {
        handleSound(clickedSound, incorrectSound);
        setStatus(EnumAnswerStatus.Incorrect);
        dispatch(gameSlice.showAnswer.actions.setShowAnswer(true));
        handleFinishGame();
      }
    }, TIMEOUT);
  };

  // SET COLORS
  const { colors } = useContext<IntTheme>(ThemeContext);

  const getColorScheme = (): { fill: string; stroke: string } => {
    if (status === EnumAnswerStatus.Clicked)
      return {
        fill: colors.orange5,
        stroke: colors.orange100,
      };

    if (
      status === EnumAnswerStatus.Correct ||
      (disabled && isCorrect && showAnswer)
    )
      return {
        fill: colors.green5,
        stroke: colors.green100,
      };

    if (status === EnumAnswerStatus.Incorrect)
      return {
        fill: colors.red5,
        stroke: colors.red100,
      };

    return {
      fill: colors.white100,
      stroke: colors.black40,
    };
  };

  const colorScheme = getColorScheme();

  // RENDER
  return (
    <AnswerDisplay
      handleClick={handleClick}
      disabled={disabled}
      stroke={colorScheme.stroke}
      fill={colorScheme.fill}
      option={option}
      answer={answer}
    />
  );
};

export default AnswerBox;
