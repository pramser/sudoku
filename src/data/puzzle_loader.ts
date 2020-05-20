import { Puzzle, Difficulty } from "../types/puzzle";

const puzzles = [
  { difficulty: Difficulty.Easy, size: 1, puzzle: [0], solution: [1] },
  {
    difficulty: Difficulty.Easy,
    size: 2,
    puzzle: [
      [0, -1],
      [0, -2],
    ],
    solution: [
      [2, 1],
      [1, 2],
    ],
  },
  {
    difficulty: Difficulty.Easy,
    size: 3,
    puzzle: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    solution: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [
      [0, -3, 0, -1],
      [-4, 0, 0, 0],
      [0, 0, 0, -2],
      [-3, 0, -1, 0],
    ],
    solution: [
      [2, 3, 4, 1],
      [4, 1, 2, 3],
      [1, 4, 3, 2],
      [3, 2, 1, 4],
    ],
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [
      [0, -2, 0, -4],
      [0, 0, -3, 0],
      [0, -1, 0, 0],
      [-2, 0, -4, 0],
    ],
    solution: [
      [3, 2, 1, 4],
      [1, 4, 3, 2],
      [4, 1, 2, 3],
      [2, 3, 4, 1],
    ],
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [
      [0, -1, 0, 0],
      [-4, 0, 0, -2],
      [-1, 0, 0, -3],
      [0, 0, -2, 0],
    ],
    solution: [
      [2, 1, 3, 4],
      [4, 3, 1, 2],
      [1, 2, 4, 3],
      [3, 4, 2, 1],
    ],
  },
  {
    difficulty: Difficulty.Medium,
    size: 4,
    puzzle: [
      [-1, 0, 0, -3],
      [0, 0, -2, 0],
      [0, -1, 0, 0],
      [-4, 0, 0, -2],
    ],
    solution: [
      [1, 2, 4, 3],
      [3, 4, 2, 1],
      [2, 1, 3, 4],
      [4, 3, 1, 2],
    ],
  },
  {
    difficulty: Difficulty.Medium,
    size: 9,
    puzzle: [
      [0, 0, 0, -9, 0, 0, -8, 0, 0],
      [0, -4, 0, 0, -6, 0, 0, -7, -2],
      [-5, 0, -8, 0, 0, -4, 0, 0, 0],
      [-9, -5, -4, -6, 0, 0, 0, 0, -1],
      [-2, -3, -1, -8, 0, -9, -5, -6, -7],
      [-7, 0, 0, 0, 0, -5, -9, -4, -3],
      [0, 0, 0, -7, 0, 0, -4, 0, -9],
      [-6, -9, 0, 0, -8, 0, 0, -2, 0],
      [0, 0, -5, 0, 0, -3, 0, 0, 0],
    ],
    solution: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
] as Puzzle[];

export function getPuzzle(difficulty: Difficulty, size: number, callback: any) {
  // eslint-disable-next-line
  var filteredPuzzles = puzzles.filter((item) => item.size == size);

  const randomIndex = Math.floor(Math.random() * filteredPuzzles.length);
  const puzzle = filteredPuzzles[randomIndex];

  if (callback && puzzle) {
    callback(puzzle.puzzle, puzzle.solution);
  }
}
