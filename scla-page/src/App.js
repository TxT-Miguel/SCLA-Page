import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// css
import "./App.css";
import "./Fonts.css";

// pages
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/home/:id">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home/0" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
