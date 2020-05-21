import React, { Component } from "react";
import Board from "./board";
import { getPuzzle } from "../data/puzzle_loader";
import { Difficulty, SolutionType } from "../types/puzzle";
import InfoPanel from "./info_panel";

interface GameProps {
  match: { params: { size: number } };
}

interface GameState {
  solutionType: SolutionType;
  puzzle: any;
  solution: any;
}

export default class Game extends Component<GameProps, GameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      solutionType: SolutionType.New,
      puzzle: [],
      solution: [],
    };
  }

  componentDidMount() {
    const size: number = this.props.match.params.size;
    getPuzzle(
      Difficulty.Medium,
      size,
      (puzzle: number[], solution: number[]) => {
        this.setState({ puzzle, solution });
      }
    );
  }

  checkGame() {
    var puzzle: number[][] = this.state.puzzle;
    var solution: number[][] = this.state.solution;
    var zero_count = 0;

    for (var r = 0; r < puzzle.length; r++) {
      // row
      var puz_row = puzzle[r];
      var sol_row = solution[r];

      for (var c = 0; c < puz_row.length; c++) {
        // col
        var puz_col = puz_row[c];
        var sol_col = sol_row[c];

        if (puz_col === 0) {
          zero_count++;
          continue;
        }

        var temp = puz_col < 0 ? puz_col * -1 : puz_col;
        if (temp !== sol_col) {
          this.setState({
            solutionType: SolutionType.Incorrect,
          });
          return;
        }
      }
    }

    if (zero_count > 0) {
      this.setState({ solutionType: SolutionType.Partial });
    } else {
      this.setState({ solutionType: SolutionType.Success });
    }
  }

  handleBoardUpdate = (puzzle: number[]) => {
    this.setState({ puzzle });
    this.checkGame();
  };

  render() {
    const { size } = this.props.match.params;

    return (
      <div className="Game">
        <Board
          data={this.state.puzzle}
          size={size}
          onBoardUpdate={this.handleBoardUpdate}
        />
        <InfoPanel solutionType={this.state.solutionType} />
      </div>
    );
  }
}
