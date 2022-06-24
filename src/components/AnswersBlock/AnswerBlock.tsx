import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import gameSelectors from '../../redux/gameSelectors';
import AnswerBox from './AnswerBox/AnswerBox';
import Answers from './AnswersBlock.styles';

const OPTIONS = ['A', 'B', 'C', 'D'];

const AnswersBlock = () => {
  const { quizSet, currentIdx } = useSelector(gameSelectors);

  const [disabled, setDisabled] = useState(false);

  return (
    <Answers>
      {quizSet[currentIdx].content.map((answer, idx) => {
        return (
          <AnswerBox
            key={OPTIONS[idx]}
            option={OPTIONS[idx]}
            answer={answer}
            disabled={disabled}
            setDisabled={setDisabled}
            isCorrect={idx === quizSet[currentIdx].correct}
          />
        );
      })}
    </Answers>
  );
};

export default AnswersBlock;
