import { PuzzleDefinition } from "./puzzle-definition";

export class PuzzleDefinitions {
  puzzles: PuzzleDefinition[];

  constructor (puzzleDefinitions: PuzzleDefinition[]){
    this.puzzles = puzzleDefinitions;
  }
}
