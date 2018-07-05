import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Link className="menuLink" to="/game">
          2 x 2 (Square)
        </Link>
        <Link className="menuLink" to="/game">
          3 x 3 (Square)
        </Link>
      </div>
    );
  }
}
