import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import ZoomMeeting from "./pages/ZoomMeeting";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/zoom-meeting" component={ZoomMeeting} />
      </Switch>
    </Router>
  );
}


export default App;
