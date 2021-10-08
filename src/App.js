import React from "react";
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "./Components/Header";
import Master from "./Components/Master";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Master />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/explore">
            <Header />
            <Explore />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
