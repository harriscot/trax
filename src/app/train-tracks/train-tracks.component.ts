import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { NgFor } from '@angular/common';
import { BoardComponent } from "../board/board.component";
import { TraxPuzzleService } from './trax-puzzle.service';
import { PuzzleDefinition } from './domain/puzzle-definition';
import { PuzzleDefinitions } from './domain/puzzle-definitions';

@Component({
  selector: 'app-train-tracks',
  standalone: true,
  imports: [ButtonModule, PanelModule, TableModule, NgFor, BoardComponent],
  templateUrl: './train-tracks.component.html',
  styleUrl: './train-tracks.component.scss'
})
export class TrainTracksComponent {

  private traxService = inject(TraxPuzzleService);
  private puzzleDefinitions: PuzzleDefinitions = this.traxService.getPuzzleDefinitions();
  private puzzleDefinition: PuzzleDefinition | undefined = this.traxService.getPuzzleDefinition(1);
  private puzzleNumbers: number[] = this.traxService.getPuzzleNumbers();

}
