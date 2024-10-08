import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BoardComponent } from "../board/board.component";
import { PuzzleDefinition } from './domain/puzzle-definition';
import { TraxPuzzleService } from './trax-puzzle.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Track, TrackOrientation, TrackShape } from './elements/track';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-train-tracks',
  standalone: true,
  imports: [ButtonModule, PanelModule, TableModule, BoardComponent, DropdownModule, FormsModule],
  templateUrl: './train-tracks.component.html',
  styleUrl: './train-tracks.component.scss'
})

export class TrainTracksComponent {
  constructor(private commonService: CommonService) { }

  onSelect(selectedNumber: string) {
    this.clearBoard();
    this.getPuzzleDefinition(selectedNumber);
    this.insertStartingTracks();
  }

  clearBoard() {
    this.commonService.clearBoard('');
  }

  public insertTrack(columnNumber: number, rowNumber: number, imagePath: string) {
    this.commonService.insertImage(columnNumber, rowNumber, imagePath);
  }

  insertStartingTracks() {
    this.puzzleDefinition?.startingTracks.forEach((value) => {
      this.insertTrack(value.coordinates[0], value.coordinates[1], getImagePath(value));
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
  private puzzleDefinition: PuzzleDefinition | undefined;
  public puzzleNumbers: number[] = this.traxService.getPuzzleNumbers();
  public selectedPuzzle: number = 0;

  setTableAxisValues() {
    if (this.puzzleDefinition != undefined) {
      this.xAxisValues = this.puzzleDefinition.xAxisCounts;
      this.yAxisValues = this.puzzleDefinition.yAxisCounts;
    } else {
      this.xAxisValues = [];
      this.yAxisValues = [];
    }
  }

}

function getImagePath(track: Track): string {
  var path: string = '/img/track_';
  if (track.shape === TrackShape.straight) {
    if (track.orientation === TrackOrientation.vertical) {
      path = path + 'vertical.png';
    } else {
      path = path + 'horizontal.jpg';
    }
  } else if (track.shape === TrackShape.curved) {
    if (track.orientation === TrackOrientation.topLeft) {
      path = path + 'top_left.png';
    }
    if (track.orientation === TrackOrientation.topRight) {
      path = path + 'top_right.png';
    }
    if (track.orientation === TrackOrientation.bottomLeft) {
      path = path + 'bottom_left.png';
    }
    if (track.orientation === TrackOrientation.bottomRight) {
      path = path + 'bottom_right.png';
    }
  } else {
    throw new Error("image path not found");
  }
  return path;
}
