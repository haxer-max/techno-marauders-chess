import React from "react";
import "./App.css";
import Game from "./components/Game/game.js";
import Join from "./components/join.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
        <Route path="/" exact component={Join} />
        <Route path="/game" component={Game} />
        </Router>
    </div>
  );
}

export default App;
