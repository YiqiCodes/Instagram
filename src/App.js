import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Activity from "./pages/Activity/Activity";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/activity">
          <Activity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
