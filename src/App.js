import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/signup">
        <SignUp setAuthenticated={setAuthenticated} />
      </Route>
      <Route path="/login">
        <Login setAuthenticated={setAuthenticated} />
      </Route>
      <Route path="/home">
        {authenticated ? (
          <Home setAuthenticated={setAuthenticated} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
    </Router>
  );
};

export default App;
