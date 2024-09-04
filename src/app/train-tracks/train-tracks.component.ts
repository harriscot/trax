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

  private traxService = inject(TraxPuzzleService);
  private puzzleDefinitions: PuzzleDefinitions = this.traxService.getPuzzleDefinitions();
  private puzzleDefinition: PuzzleDefinition | undefined = this.traxService.getPuzzleDefinition(1);
  private puzzleNumbers: number[] = this.traxService.getPuzzleNumbers();

  layTrack(){
    var tableCell = document.getElementById('44');
    var image = document.createElement('i');
    image.setAttribute('class','fadein');
    tableCell?.appendChild(image);

  }

  insertImage(){
    var image = document.createElement('img');
    image.src = "/img/track_bottom_left.png";
    document.getElementById('44')?.appendChild(image);

    console.log('image added');

    // document.querySelectorAll('td img').forEach( img => {
    //   img.onload = function() {

    //   }
    // })
  }

  // TODO - resize images
  resizeImages(){
    document.querySelectorAll('td img').forEach(image => {
      let cellWidth = image.parentElement?.clientWidth ?? 1;
      let cellHeight = image.parentElement?.clientHeight ?? 1;

      // if(image.width > cellWidth || image.height > cellHeight){
      //   image.style.width = '100%';
      //   image.style.height = 'auto';
      }
    );

  }

}


// function layTrack() {
//   var tableCell = document.getElementById('44');
//   var image = document.createElement('i');
//   image.setAttribute('class','fadein');
//   tableCell?.appendChild(image);
// }

