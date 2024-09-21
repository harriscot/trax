import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from './board';
import { Row } from './row';
import { Cell } from './cell';
import { CommonService } from '../common.service';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  BOARD_SIZE: number = 8;

  @Input() xAxisCounts: number[] | undefined;
  @Input() yAxisCounts!: number[];
  @Input() icons: string[] = [];
  @Output() dropped = new EventEmitter<{ icon: string; colIndex: number; rowIndex: number }>

  newBoard: any[][] = [];

  constructor(private commonService: CommonService) {
    this.initializeBoard();
  }


  ngOnInit() {
    this.commonService.clearBoard$.subscribe((data) => {
      this.clearBoard(data);
    });

    this.commonService.insertImage$.subscribe(({ columnNumber, rowNumber, imagePath }) => {
      this.insertImage(columnNumber, rowNumber, imagePath);
    })
  }

  initializeBoard() {
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.newBoard[i] = [];
      for (let j = 0; j < this.BOARD_SIZE; j++) {
        this.newBoard[i][j] = { icon: null };
      }

    }
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
        while (tableCell?.firstChild) {
          console.log("removing child elements from cell " + cellId);
          tableCell.removeChild(tableCell.firstChild);
        }
      })
    });
    this.buildBoard();
  }


  buildBoard(): Row[] {
    let rowArray: Row[] = [];

    for (var i = 0; i < this.BOARD_SIZE; i++) {
      rowArray.push(this.buildRow(i));
    }
    return rowArray;
  }


  buildRow(rowIndex: number): Row {
    let row: Row = {
      index: rowIndex,
      cells: this.buildCells(rowIndex)
    };
    return row;
  }

  buildCells(rowIndex: number): Cell[] {
    let cellArray: Cell[] = [];

    for (var i = 0; i < this.BOARD_SIZE; i++) {
      let cell: Cell = {
        row: rowIndex,
        column: i,
        type: ""
      }
      cellArray.push(cell);
    }
    return cellArray;
  }

  onDrop(event: CdkDragDrop<any>, colIndex: number, rowIndex: number) {
    const droppedIcon = event.item.data;

    this.newBoard[colIndex][rowIndex].icon = droppedIcon;

    this.dropped.emit({ icon: droppedIcon, colIndex, rowIndex });
  }

}
