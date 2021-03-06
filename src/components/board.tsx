import React from "react";
import Cell from "./cell";

interface BoardProps {
  data: number[];
  size: number;
  onBoardUpdate: (puzzle: number[]) => void;
}

export default function Board(props: BoardProps) {
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
            const sqrt: number = Math.sqrt(props.size);

            // All third positions are highlighted
            var isHighlighted: boolean = calculateHighlighted(c + 1, sqrt);

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

/**
 * I spent way too much time figuring this out on
 * my own. This function returns a boolean for the
 * position that occurs every even squared amount
 * of times it traverses the position.
 *
 * @param pos Current position in the row
 * @param sqrt The square root of the board size
 */
const calculateHighlighted = (pos: number, sqrt: number): boolean => {
  if (pos - sqrt > sqrt) {
    return !calculateHighlighted(pos - sqrt, sqrt);
  }

  return pos - sqrt <= 0;
};
