import { Row } from "./row";

export class Board {
  rows: Row[];

  constructor(rows: Row[]) {
    this.rows = rows;
  }
}
