import { Component, Input } from '@angular/core';
import { Board } from './board';
import { Row } from './row';
import { Cell } from './cell';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  BOARD_SIZE: number = 8;

  @Input() xAxisCounts: number[] | undefined;
  @Input() yAxisCounts!: number[];

  constructor( private commonService: CommonService){}

  ngOnInit() {
    this.commonService.clearBoard$.subscribe((data) => {
      this.clearBoard(data);
    });

    this.commonService.insertImage$.subscribe(({columnNumber, rowNumber, imagePath}) =>{
      this.insertImage(columnNumber, rowNumber, imagePath);
    })
  }

  insertImage(columnNumber: number, rowNumber: number, imagePath: string) {
    console.log("in board component insert image with data: " + imagePath);
    var cellId = '' + columnNumber + rowNumber;
    var tableCell = document.getElementById(cellId);
    if (tableCell?.childElementCount == 0) {
      var image = document.createElement('img');
      image.src = imagePath;
      image.width = 60;
      image.height = 60;
      tableCell?.appendChild(image);
    }
  }

  board: Board = { rows: this.buildBoard() }

  clearBoard(data: any) {
    //just build a new board
    console.log("clearing the board");

    this.board.rows.forEach((row) => {
      row.cells.forEach((cell) => {
        var cellId = '' + cell.column + cell.row;
        var tableCell = document.getElementById(cellId);
        while(tableCell?.firstChild){
          console.log("removing child elements from cell " + cellId);
          tableCell.removeChild(tableCell.firstChild);
        }
      })
    });
    this.buildBoard();
  }


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
