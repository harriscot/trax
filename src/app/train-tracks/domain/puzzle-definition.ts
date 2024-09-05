import { Track } from "../elements/track";

export interface PuzzleDefinition {
  problemNumber: number;
  numberOfRows: number;
  numberOfColumns: number;
  xAxisCounts: number[];
  yAxisCounts: number[];
  startingTracks: Track[];
  solution: Track[];

}
