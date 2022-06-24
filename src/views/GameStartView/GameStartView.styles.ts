import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeViewBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.white100} 0%,
    ${({ theme }) => theme.colors.white100} 50%,
    ${({ theme }) => theme.colors.orange5} 50%,
    ${({ theme }) => theme.colors.orange5} 100%
  );
`;

export const GameTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 70px;

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 46px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
