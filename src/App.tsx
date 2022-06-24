import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GameStartView from './views/GameStartView/GameStartView';
import GameView from './views/GameView/GameView';
import GameOverView from './views/GameOverView/GameOverView';
import routes from './routes';
import theme from './theme';
import GlobalStyle from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path={routes.gameStart} exact component={GameStartView} />
            <Route path={routes.game} exact component={GameView} />
            <Route path={routes.gameOver} component={GameOverView} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
