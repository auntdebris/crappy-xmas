import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Meeting from "./pages/Meeting";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/zoom-meeting" component={Meeting} />
      </Switch>
    </Router>
  );
}


export default App;
