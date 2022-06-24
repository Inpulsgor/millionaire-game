import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    padding: 0 20px;
    max-width: 800px;
  }
`;

export const QuestionText = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 142px;

  @media (min-width: 1024px) {
    font-size: 32px;
    text-align: left;
  }
`;
