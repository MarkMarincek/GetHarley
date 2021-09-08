import React from 'react';
import GlobalStyle from 'styles/global';
import Routes from 'routes/Routes';
import AppContainer from 'components/AppContainer';

function App() {
  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Routes />
      </AppContainer>
    </>
  );
}

export default App;
