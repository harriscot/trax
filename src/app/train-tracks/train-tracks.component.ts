import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { NgFor } from '@angular/common';
import { BoardComponent } from "../board/board.component";
import { TraxPuzzleService } from './trax-puzzle.service';
import { PuzzleDefinition } from './domain/puzzle-definition';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-train-tracks',
  standalone: true,
  imports: [ButtonModule, PanelModule, TableModule, NgFor, BoardComponent],
  templateUrl: './train-tracks.component.html',
  styleUrl: './train-tracks.component.scss'
})
export class TrainTracksComponent {
  tracksInColumns: String[] = ['2','2','4','7','6','5','7','3'];
  tracksInRows: String[] = ['5','3','4','2','7','5','5','5'];

  private traxPuzzleService = inject(TraxPuzzleService);
  puzzleDefinition: PuzzleDefinition = this.traxPuzzleService.getPuzzleDefinitions()[0];

}
