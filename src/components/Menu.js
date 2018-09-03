import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        {/* <Link className="menuLink" to="/game">
          Marathon
        </Link> */}
        <Link className="menuLink" to="/game">
          Square 2 x 2
        </Link>
        {/* <Link className="menuLink" to="/game">
          3 x 3 - Square
        </Link> */}
      </div>
    );
  }
}
