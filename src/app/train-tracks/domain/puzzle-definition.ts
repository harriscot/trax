import { Track } from "../elements/track";

export class PuzzleDefinition {
  problemNumber: number;
  numberOfRows: number;
  numberOfColumns: number;
  xAxisCounts: number[];
  yAxisCounts: number[];
  startingTracks: Track[];
  solution: Track[];

  constructor (problemNumber: number,
    numberOfRows: number,
    numberOfColumns: number,
    xAxisCounts: number[],
    yAxisCounts: number[],
    startingTracks: Track[],
    solution: Track[]
  ) {
    this.problemNumber = problemNumber;
    this.numberOfRows = numberOfRows;
    this.numberOfColumns = numberOfColumns;
    this.xAxisCounts = xAxisCounts;
    this.yAxisCounts = yAxisCounts;
    this.startingTracks = startingTracks;
    this.solution = solution;
  }
}
