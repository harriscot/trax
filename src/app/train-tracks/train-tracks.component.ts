import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BoardComponent } from "../board/board.component";
import { PuzzleDefinition } from './domain/puzzle-definition';
import { PuzzleDefinitions } from './domain/puzzle-definitions';
import { TraxPuzzleService } from './trax-puzzle.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Track, TrackOrientation, TrackShape } from './elements/track';

@Component({
  selector: 'app-train-tracks',
  standalone: true,
  imports: [ButtonModule, PanelModule, TableModule, NgFor, BoardComponent, DropdownModule, FormsModule ],
  templateUrl: './train-tracks.component.html',
  styleUrl: './train-tracks.component.scss'
})
export class TrainTracksComponent {

onSelect(selectedNumber: string) {
  this.getPuzzleDefinition(selectedNumber);
  this.insertStartingTracks();
}
  insertStartingTracks() {
    this.puzzleDefinition?.startingTracks.forEach(function(track){
      console.log(track.coordinates);
      insertTrack(track);
    });
  }


  getPuzzleDefinition(selectedNumber: string): void {
    let selector = parseInt(selectedNumber);
    this.puzzleDefinition = this.traxService.getPuzzleDefinition(selector);
    this.setTableAxisValues();
  }

  public xAxisValues: number[] = [];
  public yAxisValues: number[] = [];
  private traxService = inject(TraxPuzzleService);
  private puzzleDefinitions: PuzzleDefinitions = this.traxService.getPuzzleDefinitions();
  private puzzleDefinition: PuzzleDefinition | undefined;
  public puzzleNumbers: number[] = this.traxService.getPuzzleNumbers();
  public selectedPuzzle: number = 0;



  ngOnInit(): void {
    // this.setTableAxisValues();
  }

  setTableAxisValues() {
    if(this.puzzleDefinition != undefined){
      this.xAxisValues = this.puzzleDefinition.xAxisCounts;
      this.yAxisValues = this.puzzleDefinition.yAxisCounts;
    } else {
      this.xAxisValues = [];
      this.yAxisValues = [];
    }
  }

  insertImage(cellId: string){
    var tableCell = document.getElementById(cellId);
    if(tableCell?.childElementCount == 0){
      var image = document.createElement('img');
      image.src = "/img/track_bottom_left.png";
      image.width = 60;
      image.height = 60;
      tableCell?.appendChild(image);
    }
  }


}



function insertImage(coordinates: [row: number, column: number]) {
  var cellId = '' + coordinates[0] + coordinates[1];
  console.log ("insert image got cell id " + cellId);
  var tableCell = document.getElementById(cellId);
    if(tableCell?.childElementCount == 0){
      var image = document.createElement('img');
      image.src = "/img/track_bottom_left.png";
      image.width = 60;
      image.height = 60;
      tableCell?.appendChild(image);
    }
}

function insertTrack(track: Track) {
  var cellId = '' + track.coordinates[0] + track.coordinates[1];
  var tableCell = document.getElementById(cellId);
  var imagePath: string = getImagePath(track);
  console.log("in insertTrack with image path: " + imagePath);
  if(tableCell?.childElementCount == 0){
    var image = document.createElement('img');
    image.src = imagePath;
    image.width = 60;
    image.height = 60;
    tableCell?.appendChild(image);
  }
}

function getImagePath(track: Track) : string {
  var path : string = '/img/track_';
  if(track.shape === TrackShape.straight){
    if(track.orientation === TrackOrientation.vertical){
      path = path + 'vertical.png';
    } else {
      path = path + 'horizontal.jpg';
    }
  } else if(track.shape === TrackShape.curved){
    if(track.orientation === TrackOrientation.topLeft){
      path = path + 'top_left.png';
    }
    if(track.orientation === TrackOrientation.topRight){
      path = path + 'top_right.png';
    }
    if(track.orientation === TrackOrientation.bottomLeft){
      path = path + 'bottom_left.png';
    }
    if(track.orientation === TrackOrientation.bottomRight){
      path = path + 'bottom_right.png';
    }
  } else {
    throw new Error("image path not found");
  }
  return path;
return "/img/track_bottom_left.png"
}
