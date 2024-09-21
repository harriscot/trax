import { CdkDragDrop, copyArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-two',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './drag-drop-two.component.html',
  styleUrl: './drag-drop-two.component.scss'
})
export class DragDropTwoComponent {

  tasks: any[] = [
    { name: "task 1", completed: "false", id: 1},
    { name: "task 2", completed: "false", id: 2},
    { name: "task 3", completed: "false", id: 3},
  ]

  boxes: any[] = [];

  /*
   * This method copies an item from the widgets array into the board.
   */
  drop(event: CdkDragDrop<string[]>) {
    console.log('in drop method with data: ');
    console.log(event);
    console.log("boxes length: " + this.boxes.length);

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
  }

  /*
   * This method removes an item from the board by dragging it back to the widgets array.
   */
  dropUnique(event: CdkDragDrop<string[]>) {
    console.log('in dropUnique method with data:');
    console.log(event);
    this.boxes.splice(event.previousIndex, 1);
  }

}
