import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="menuItem">
          <Link className="newGame" to="/game">
            New Game
          </Link>
        </div>
      </div>
    );
  }
}
