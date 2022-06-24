import React from 'react';
import { useSelector } from 'react-redux';
import gameSelectors from '../../redux/gameSelectors';
import { QuestionText, QuestionContainer } from './Question.styles';

const Question = () => {
  const { quizSet, currentIdx } = useSelector(gameSelectors);

  return (
    <QuestionContainer>
      <QuestionText>{quizSet[currentIdx].question}</QuestionText>
    </QuestionContainer>
  );
};

export default Question;
