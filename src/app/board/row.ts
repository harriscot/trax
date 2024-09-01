import { Cell } from "./Cell";

export class Row {
  index: number;
  cells: Cell[];

  constructor(index: number, cells: Cell[]){
    this.index = index;
    this.cells = cells;
  }
}
