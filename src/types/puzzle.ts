export type Puzzle = {
  difficulty: Difficulty;
  size: number;
  puzzle: number[];
  solution: number[];
};

export enum Difficulty {
  Easy,
  Medium,
  Hard,
}

export enum SolutionType {
  New,
  Incorrect,
  Partial,
  Success,
}
