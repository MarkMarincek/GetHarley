import React from 'react';
import logo from './logo.svg';
import './App.css';
import httpService from 'services/http.service';
import { getUsers } from 'utils/api';
import GlobalStyle from 'styles/global';
import Routes from 'routes/Routes';

function App() {
  getUsers().then((res) => console.log(res));
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
