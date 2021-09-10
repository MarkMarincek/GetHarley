import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};
  
  html {
    overflow: hidden;
      height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    height: 100%;
    overflow: auto;
    background: linear-gradient(45deg, #fcb69f, #ffecd2);
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin: 48px;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;
