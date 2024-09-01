import { Injectable } from '@angular/core';
import { Track } from '../board/track';
import { TrackType } from '../board/track';
import { TrackOrientation } from '../board/track';
import { PuzzleDefinition } from './domain/puzzle-definition';

@Injectable({
  providedIn: 'root'
})
export class TraxPuzzleService {

  // private puzzleDefinition!: PuzzleDefinition[];
  private puzzleDefinition: PuzzleDefinition [] = require('./data/puzzle-definitions.json');

  getPuzzleDefinitions(): PuzzleDefinition []{
    // this.puzzleDefinition = this.puzzleDef;
    console.log("got puzzle definition: " + this.puzzleDefinition);
    console.log("first puzzle definition: " + this.puzzleDefinition[0]);
    console.log("json string" + JSON.stringify(this.getPuzzleDefinition_old()));
    console.log("gpo " + this.getPuzzleDefinition_old());
    return this.puzzleDefinition;

  }

  getPuzzleDefinition_old(): PuzzleDefinition {
    return new PuzzleDefinition(55, 8, 8, [2,2], [3,3],
      [new Track(TrackType.straight,
      TrackOrientation.vertical,
      [5, 6])
  ])
  }

  constructor() { }
}
