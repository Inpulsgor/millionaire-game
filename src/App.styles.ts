import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

body {
  margin: 0;  
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.black100};
}  

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;

  &:disabled {
    cursor: auto;
  }
}`;

export default GlobalStyle;
