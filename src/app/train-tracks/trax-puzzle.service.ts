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
    for(const puzzle of this.puzzleDefinitions.puzzles){
      if(puzzle.problemNumber == puzzleNumber){
        console.log("found puzzle number: " + puzzleNumber);
        for(const track of puzzle.solution){
          console.log("solution track: " + track.coordinates);
        }
        return puzzle;
      } else {
        return undefined;
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
