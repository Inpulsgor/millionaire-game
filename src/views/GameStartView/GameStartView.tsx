import React from 'react';
import AppButton from '../../components/AppButton/AppButton';
import Layout from '../../components/Layout/Layout';
import { backgroundSound } from '../../helpers/sounds';
import routes from '../../routes';
import {
  GameTitle,
  HomeViewBackground,
  StyledLink,
} from './GameStartView.styles';

const HomeView = () => {
  return (
    <HomeViewBackground>
      <Layout>
        <>
          <GameTitle>Who wants to be a millionaire?</GameTitle>
          <StyledLink to={routes.game}>
            <AppButton onClick={() => backgroundSound.play()}>Start</AppButton>
          </StyledLink>
        </>
      </Layout>
    </HomeViewBackground>
  );
};

export default HomeView;
