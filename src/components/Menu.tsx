import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        {/* <Link className="menuLink" to="/game/1">
          Square 1 x 1
        </Link>
        <Link className="menuLink" to="/game/2">
          Square 2 x 2
        </Link>
        <Link className="menuLink" to="/game/3">
          Square 3 x 3
        </Link> */}
        <Link className="menuLink" to="/game/4">
          Square 4 x 4
        </Link>
      </div>
    );
  }
}
