import React from 'react';
import GlobalStyle from 'styles/global';
import Routes from 'routes/Routes';
import AppContainer from 'components/AppContainer';
import { StylesProvider } from '@material-ui/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <AppContainer>
          <Routes />
        </AppContainer>
      </StylesProvider>
    </>
  );
}

export default App;
