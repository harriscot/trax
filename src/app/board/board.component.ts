import { Component } from '@angular/core';
import { Board } from './board';
import { Row } from './row';
import { Cell } from './cell';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TableModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  BOARD_SIZE: number = 8;

  board: Board = { rows: this.buildBoard() }

  buildBoard(): Row[] {
    let rowArray: Row[] = [];

    for(var i = 0; i < this.BOARD_SIZE; i++ ) {
      rowArray.push(this.buildRow(i));
    }
    return rowArray;
  }

  buildRow(rowIndex: number) : Row {
    let row: Row = {
      index: rowIndex,
      cells: this.buildCells(rowIndex)
    };
    return row;
  }

  buildCells(rowIndex: number): Cell[] {
    let cellArray: Cell[] = [];

    for(var i = 0; i < this.BOARD_SIZE; i++ ) {
      let cell: Cell = {
        row: rowIndex,
        column: i,
        type: ""
      }
      cellArray.push(cell);
    }
    return cellArray;
  }

}
