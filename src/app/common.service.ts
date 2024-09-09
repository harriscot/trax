import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private clearMethod = new Subject<any>();
  clearBoard$ = this.clearMethod.asObservable();

  private insertMethod = new Subject<any>();
  insertImage$ = this.insertMethod.asObservable();

  clearBoard(data: any) {
    this.clearMethod.next(data);
  }

  insertImage(columnNumber: number, rowNumber: number, imagePath: string) {
    this.insertMethod.next({columnNumber, rowNumber, imagePath});
    console.log("in common service insert image");
  }

  constructor() { }
}
