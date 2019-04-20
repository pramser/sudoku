import React, { PureComponent } from 'react';

// Components
import Cell from './Cell';

// CSS
import '../css/Board.css';

export default class Board extends PureComponent<{
  data: any;
  size: any;
  onBoardUpdate: any;
}> {
  /* PROPS:
        data - board array passed in
        size - size of board in dimension
        type - square, pentagon, etc.
    */

  constructor(props: any) {
    super(props);
    this.onClickCell = this.onClickCell.bind(this);
  }

  componentDidMount() {
    // Add in board loader.
  }

  onClickCell(r: any, c: any) {
    const board = this.props.data.slice();
    var val = board[r][c];
    board[r][c] = val === this.props.size ? 0 : val + 1;

    // Callback to props.
    this.props.onBoardUpdate(board);
  }

  render() {
    return (
      <div className="board">
        {this.props.data.map((row: any, r: any) => (
          <div className="row" key={r}>
            {row.map((col: any, c: any) => (
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
