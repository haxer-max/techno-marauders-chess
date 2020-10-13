import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/game.js";
//import Game from "./components/Game/chat.js";
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
