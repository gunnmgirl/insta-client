import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import SignUp from "./features/auth/components/SignUp";
import LogIn from "./features/auth/components/LogIn";
import Feed from "./features/posts/components/Feed";
import Explore from "./features/posts/components/Explore";
import history from "./routing/history";
import themes from "./themes";
import GlobalStyle from "./GlobalStyle";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const theme = themes.light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/explore" component={Explore} />
            <Route path="/" exact component={Feed} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/" exact component={SignUp} />
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
