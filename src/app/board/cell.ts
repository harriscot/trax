export class Cell {
  row: number;
  column: number;
  type!: string;

  constructor(row: number, column: number){
    this.row = row;
    this.column = column;
  }
}
