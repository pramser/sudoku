import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Menu from "./menu";
import Game from "./game";

export default function GameRouter() {
  return (
    <Router>
      <div>
        <div className="titleContainer">
          <Link className="title" to="/">
            Super Sudoku DX
          </Link>
        </div>
        <div>
          <Route exact path="/" component={Menu} />
          <Route path="/game/:size" component={Game} />
        </div>
      </div>
    </Router>
  );
}
