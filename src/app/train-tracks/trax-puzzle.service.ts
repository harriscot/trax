import { Injectable } from '@angular/core';
import { PuzzleDefinition } from './domain/puzzle-definition';
import { PuzzleDefinitions } from './domain/puzzle-definitions';

@Injectable({
  providedIn: 'root'
})
export class TraxPuzzleService {

  private puzzleDefinitions: PuzzleDefinitions = require('./data/puzdefs.json');

  getPuzzleDefinitions(): PuzzleDefinitions {
    return this.puzzleDefinitions;
  }

  getPuzzleDefinition(puzzleNumber: number): PuzzleDefinition | undefined {
    for(let puzzle of this.puzzleDefinitions.puzzles){
      if(puzzle.problemNumber === puzzleNumber){
        console.log("found puzzle number: " + puzzleNumber);
        for(let track of puzzle.solution){
          console.log("solution track: " + track.coordinates);
        }
        return puzzle;
      }
    }
    return undefined;
  }

  getPuzzleNumbers(): number[] {
    let puzzleNumbers: number[] = [];
    for(const puzzle of this.puzzleDefinitions.puzzles){
      puzzleNumbers.push(puzzle.problemNumber);
    }
    console.log ("returning puzzle numbers: " + puzzleNumbers);
    return puzzleNumbers;
  }

  constructor() { }
}
