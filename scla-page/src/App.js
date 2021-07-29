import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// css
import "./App.css";

// pages
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
