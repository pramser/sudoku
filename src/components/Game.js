// Dependencies
import React, { Component } from 'react';

// CSS
import '../css/Game.css';

// Components
import Board from './Board';

var puz = [[0, -3, 0, -1], [-4, 0, 0, 0], [0, 0, 0, -2], [-3, 0, -1, 0]];
var sol = [[2, 3, 4, 1], [4, 1, 2, 3], [1, 4, 3, 2], [3, 2, 1, 4]];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionInfo: 'Unchecked'
    };
  }

  checkGame() {
    var zero_count = 0;

    for (var r = 0; r < puz.length; r++) {
      // row
      var puz_row = puz[r];
      var sol_row = sol[r];

      for (var c = 0; c < puz_row.length; c++) {
        // col
        var puz_col = puz_row[c];
        var sol_col = sol_row[c];
        console.log(
          'Puzzle column: ' + puz_col + ' - Solution col: ' + sol_col
        );

        if (puz_col === 0) {
          zero_count++;
          continue;
        }

        var temp = puz_col < 0 ? puz_col * -1 : puz_col;
        if (temp !== sol_col) {
          this.setState({ solutionInfo: 'Incorrect solution' });
          return;
        }
      }
    }

    if (zero_count > 0) {
      this.setState({ solutionInfo: 'Partial solution' });
    } else {
      this.setState({ solutionInfo: 'Complete solution' });
    }
  }

  render() {
    return (
      <div className="Game">
        <Board data={puz} size={4} type={'square'} />
        <div className="infoWindow">{this.state.solutionInfo}</div>
        <button className="checkGame" onClick={() => this.checkGame()}>
          Check Game
        </button>
      </div>
    );
  }
}

export default Game;
