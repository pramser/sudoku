import React from 'react';
import Cell from './cell';

export default function Board(props: {
  data: any;
  size: number;
  onBoardUpdate: any;
}) {
  const onClickCell = (row: number, col: number) => {
    const board = props.data.slice();
    var val = board[row][col] as number;

    board[row][col] = val.toString() === props.size.toString() ? 0 : val + 1;
    props.onBoardUpdate(board);
  };

  return (
    <div className="board">
      {props.data.map((row: any, r: any) => (
        <div className="row" key={r}>
          {row.map((col: any, c: any) => (
            <Cell
              key={c}
              value={col}
              isLocked={col < 0}
              onClick={() => onClickCell(r, c)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
