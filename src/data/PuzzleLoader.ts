import { Puzzle, Difficulty } from '../types/Puzzle';

const puzzles = [
  { difficulty: Difficulty.Easy, size: 1, puzzle: [0], solution: [1] },
  {
    difficulty: Difficulty.Easy,
    size: 2,
    puzzle: [[0, -1], [0, -2]],
    solution: [[2, 1], [1, 2]]
  },
  {
    difficulty: Difficulty.Easy,
    size: 3,
    puzzle: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    solution: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [[0, -3, 0, -1], [-4, 0, 0, 0], [0, 0, 0, -2], [-3, 0, -1, 0]],
    solution: [[2, 3, 4, 1], [4, 1, 2, 3], [1, 4, 3, 2], [3, 2, 1, 4]]
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [[0, -2, 0, -4], [0, 0, -3, 0], [0, -1, 0, 0], [-2, 0, -4, 0]],
    solution: [[3, 2, 1, 4], [1, 4, 3, 2], [4, 1, 2, 3], [2, 3, 4, 1]]
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [[0, -1, 0, 0], [-4, 0, 0, -2], [-1, 0, 0, -3], [0, 0, -2, 0]],
    solution: [[2, 1, 3, 4], [4, 3, 1, 2], [1, 2, 4, 3], [3, 4, 2, 1]]
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [[-1, 0, 0, -3], [0, 0, -2, 0], [0, -1, 0, 0], [-4, 0, 0, -2]],
    solution: [[1, 2, 4, 3], [3, 4, 2, 1], [2, 1, 3, 4], [4, 3, 1, 2]]
  }
];

export function getPuzzle(difficulty: Difficulty, size: number, callback: any) {
  var puzzle = puzzles[6];

  if (callback) {
    callback(puzzle.puzzle, puzzle.solution);
  }
}
