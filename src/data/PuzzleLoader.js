const puzzles = {
  easy: {
    1: [[0], [1]],
    2: [[[0, -1], [0, -2]], [[2, 1], [1, 2]]],
    3: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]]]
  },
  med: {
    2: [
      [
        [[0, -3, 0, -1], [-4, 0, 0, 0], [0, 0, 0, -2], [-3, 0, -1, 0]],
        [[2, 3, 4, 1], [4, 1, 2, 3], [1, 4, 3, 2], [3, 2, 1, 4]]
      ],
      [
        [[0, -2, 0, -4], [0, 0, -3, 0], [0, -1, 0, 0], [-2, 0, -4, 0]],
        [[3, 2, 1, 4], [1, 4, 3, 2], [4, 1, 2, 3], [2, 3, 4, 1]]
      ],
      [
        [[0, -1, 0, 0], [-4, 0, 0, -2], [-1, 0, 0, -3], [0, 0, -2, 0]],
        [[2, 1, 3, 4], [4, 3, 1, 2], [1, 2, 4, 3], [3, 4, 2, 1]]
      ],
      [
        [[-1, 0, 0, -3], [0, 0, -2, 0], [0, -1, 0, 0], [-4, 0, 0, -2]],
        [[1, 2, 4, 3], [3, 4, 2, 1], [2, 1, 3, 4], [4, 3, 1, 2]]
      ]
    ]
  }
};

export function getPuzzle(difficulty, size, callback) {
  // Puzzles are always even, solutions are odd.

  /*
  1. Find out how many puzzles there are.
  2. Pick a random integer out of the amount.
  3. Grab the puzzle node.
  4. Ship it back.
  */
  const puzzleAmt = puzzles[difficulty][size].length / 2;
  const puzzleSel = Math.floor(Math.random() * puzzleAmt);

  var puzzleNode = puzzles[difficulty][size][puzzleSel];
  var puzzle = puzzleNode[0].slice();
  var solution = puzzleNode[1].slice();

  if (callback) {
    callback(puzzle, solution);
  }
}
