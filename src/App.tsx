import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme } from './themes/main/theme';
import { GlobalStyles } from './themes/main/global-style';
import { LOGIN_URL } from './screens/login/login.type';
import { MOVIES_LIST_URL } from './screens/movies-list/movies.type';
import Login from './screens/login/login';
import MoviesList from './screens/movies-list/movies-list';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
