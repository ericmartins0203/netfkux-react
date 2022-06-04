import Login from "./screens/login/login";
import { ThemeProvider } from "styled-components";
import { Theme } from "./themes/main/theme";
import { GlobalStyles } from "./themes/main/global-style";
import { Route, Routes } from "react-router-dom";

import { LOGIN_URL } from "./screens/login/login.type";
import { MOVIES_LIST_URL } from "./screens/movies-list/movies.type";
import MoviesList from "./screens/movies-list/movies-list";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
