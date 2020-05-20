import React, { Component } from "react";
import Board from "./board";
import { getPuzzle } from "../data/puzzle_loader";
import { Difficulty } from "../types/puzzle";

export default class Game extends Component<
  { match: { params: { size: number } } },
  { solutionType: any; puz: any; sol: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      solutionType: "new",
      puz: [],
      sol: [],
    };
  }

  componentDidMount() {
    const size = this.props.match.params.size;
    getPuzzle(Difficulty.Medium, size, (puz: any, sol: any) => {
      this.setState({ puz, sol });
    });
  }

  checkGame() {
    var puz = this.state.puz;
    var sol = this.state.sol;
    var zero_count = 0;

    for (var r = 0; r < puz.length; r++) {
      // row
      var puz_row = puz[r];
      var sol_row = sol[r];

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
            solutionType: "incorrect",
          });
          return;
        }
      }
    }

    if (zero_count > 0) {
      this.setState({ solutionType: "partial" });
    } else {
      this.setState({ solutionType: "success" });
    }
  }

  handleBoardUpdate = (puz: any) => {
    this.setState({ puz });
  };

  render() {
    const { size } = this.props.match.params;

    return (
      <div className="Game">
        <Board
          data={this.state.puz}
          size={size}
          onBoardUpdate={this.handleBoardUpdate}
        />
        <div
          className={"infoPanel " + this.state.solutionType}
          onClick={() => this.checkGame()}
        >
          <div className="info">
            {this.state.solutionType.toString().toUpperCase()}
          </div>
          <div>&#10004;</div>
        </div>
      </div>
    );
  }
}
