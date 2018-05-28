import React, { Component } from 'react';

import '../css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="header">
          <h1>Super Sudoku DX</h1>
        </div>
        <button className="newGame" onClick={() => alert('Start new game.')}>
          New Game
        </button>
      </div>
    );
  }
}
