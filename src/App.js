import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import SignUp from "./features/auth/components/SignUp";
import history from "./routing/history";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router history={history}>
      {isLoggedIn ? (
        <Switch>
          <Route path="/signup" component={SignUp} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup" component={SignUp} />
        </Switch>
      )}
    </Router>
  );
}

export default App;
