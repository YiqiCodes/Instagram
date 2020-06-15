import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Camera from "./pages/Camera/Camera";
import Activity from "./pages/Activity/Activity";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/camera">
          <Camera />
        </Route>
        <Route exact path="/activity">
          <Activity />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
