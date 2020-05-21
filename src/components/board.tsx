import React from "react";
import Cell from "./cell";

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
          {row.map((col: any, c: any) => {
            // Square root of size
            const sqrt = Math.sqrt(props.size);

            // All third positions are highlighted
            var isHighlighted = calculateHighlighted(c + 1, sqrt);

            isHighlighted = calculateHighlighted(r + 1, sqrt)
              ? isHighlighted
              : !isHighlighted;

            return (
              <Cell
                key={c}
                value={col}
                style={isHighlighted ? "light" : "dark"}
                size={props.size}
                onClick={() => onClickCell(r, c)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

const calculateHighlighted: any = (pos, sqrt) => {
  return pos - sqrt <= 0 || pos - sqrt > sqrt;
};
