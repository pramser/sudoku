import React, { Component } from 'react';

// Components
import Cell from './Cell';

// CSS
import '../css/Board.css';

export default class Board extends Component {
  /* PROPS:
        data - board array passed in
        size - size of board in dimension
        type - square, pentagon, etc.
    */

  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };

    this.onClickCell = this.onClickCell.bind(this);
  }

  onClickCell(r, c) {
    const _data = this.state.data;
    var val = _data[r][c];
    _data[r][c] = val === this.props.size ? 0 : val + 1;

    this.setState({
      data: _data
    });
  }

  render() {
    return (
      <div className="board">
        {this.state.data.map((row, r) => (
          <div className="row" key={r}>
            {row.map((col, c) => (
              <Cell
                key={c}
                value={col}
                isLocked={col < 0}
                onClick={() => this.onClickCell(r, c)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
