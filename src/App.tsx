import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme } from 'themes/main/theme';
import { GlobalStyles } from 'themes/main/global-style';
import { LOGIN_URL } from 'screens/login/login.type';
import Login from 'screens/login/login';
import store from 'store/store/store';
import Guard from 'components/guard/guard';
import { SHOWS_URL } from 'screens/shows/shows.type';
import Shows from 'screens/shows/shows';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Guard><Shows /></Guard>} path={SHOWS_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
