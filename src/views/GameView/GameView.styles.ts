import styled from 'styled-components';

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

export const GameScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black5};

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;
