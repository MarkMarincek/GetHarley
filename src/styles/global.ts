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
    margin: 0;
    padding: 0;
    height: 100vh;
    height: 100%;
    overflow: auto;
  }
`;
