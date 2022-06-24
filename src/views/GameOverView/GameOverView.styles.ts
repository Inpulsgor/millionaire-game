import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    margin-bottom: 50px;
  }
`;

export const ScoreText = styled.p`
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    font-size: 37px;
  }
`;

export const TotalScore = styled.p`
  font-size: 32px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 65px;
    text-align: left;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
