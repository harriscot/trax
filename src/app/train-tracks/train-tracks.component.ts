import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BoardComponent } from "../board/board.component";
import { PuzzleDefinition } from './domain/puzzle-definition';
import { PuzzleDefinitions } from './domain/puzzle-definitions';
import { TraxPuzzleService } from './trax-puzzle.service';

@Component({
  selector: 'app-train-tracks',
  standalone: true,
  imports: [ButtonModule, PanelModule, TableModule, NgFor, BoardComponent],
  templateUrl: './train-tracks.component.html',
  styleUrl: './train-tracks.component.scss'
})
export class TrainTracksComponent {

  public xAxisValues: number[] = [];
  public yAxisValues: number[] = [];
  private traxService = inject(TraxPuzzleService);
  private puzzleDefinitions: PuzzleDefinitions = this.traxService.getPuzzleDefinitions();
  private puzzleDefinition: PuzzleDefinition | undefined = this.traxService.getPuzzleDefinition(1);
  private puzzleNumbers: number[] = this.traxService.getPuzzleNumbers();


  ngOnInit(): void {
    this.setTableAxisValues();
  }

  setTableAxisValues() {
    if(this.puzzleDefinition != undefined){
      this.xAxisValues = this.puzzleDefinition.xAxisCounts;
      this.yAxisValues = this.puzzleDefinition.yAxisCounts;
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



