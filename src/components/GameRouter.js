import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Components
import Menu from './Menu';
import Game from './Game';

export default class GameRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{ textAlign: 'center', marginTop: 20, fontSize: 50 }}>
            <Link to="/">Super Sudoku DX</Link>
          </div>
          <div>
            <Route exact path="/" component={Menu} />
            <Route path="/game" component={Game} />
          </div>
        </div>
      </Router>
    );
  }
}