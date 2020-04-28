import React from "react";
import Shelf from "./shelf";
import Pdp from "./pdp";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pdp">
            <Pdp />
          </Route>
          <Route path="/">
            <Shelf />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
