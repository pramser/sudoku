import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/Menu.css';

// Components
import Game from './Game';

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="Menu">
          <div className="header">
            <h1>Super Sudoku DX</h1>
          </div>
          <Link className="newGame" to="/game">
            New Game
          </Link>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}
