import React from 'react';
import { useSelector } from 'react-redux';
import gameSelectors from '../../redux/gameSelectors';
import AppButton from '../../components/AppButton/AppButton';
import Layout from '../../components/Layout/Layout';
import routes from '../../routes';
import {
  ContentText,
  ScoreText,
  StyledLink,
  TotalScore,
} from './GameOverView.styles';

const GameOverView = () => {
  const { score } = useSelector(gameSelectors);

  return (
    <Layout>
      <>
        <ContentText>
          <ScoreText>Total Score: </ScoreText>
          <TotalScore>${`${score} earned`}</TotalScore>
        </ContentText>

        <StyledLink to={routes.gameStart}>
          <AppButton>Try again</AppButton>
        </StyledLink>
      </>
    </Layout>
  );
};

export default GameOverView;
