// Dependencies
import React, { Component } from 'react';

// CSS
import '../css/Cell.css';

export default class Cell extends Component {
  render() {
    var value = this.props.value;
    const isLocked = this.props.isLocked;

    if (isLocked) {
      value = value * -1;
    }

    return (
      <div
        className={isLocked ? 'locked-cell' : 'cell light-cell'}
        onClick={isLocked ? null : this.props.onClick}
      >
        <span>{value === 0 ? '' : value}</span>
      </div>
    );
  }
}
