import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-expt',
  standalone: true,
  imports: [],
  templateUrl: './drag-drop-expt.component.html',
  styleUrl: './drag-drop-expt.component.scss'
})
export class DragDropExptComponent {

  tasks: any[] = [
    { name: "task 1", completed: "false", id: 1},
    { name: "task 2", completed: "false", id: 2},
    { name: "task 3", completed: "false", id: 3},
  ]

  dragData?: string;

  onDragStart(event: any){
    this.dragData = event.target.innerText;
    console.log('starting drag with data: ' + this.dragData);
  }

  onDragOver(event: any){
    event.preventDefault();
    console.log('onDragOver called');
  }

  onDrop(event: any){
    event.preventDefault();
    const targetTask = event.target;
    targetTask.innerText = this.dragData;
    console.log('in onDrop with data: ' + this.dragData);
  }

}
