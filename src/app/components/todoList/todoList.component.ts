import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
  inputs:['title' , 'tasks' , 'listId'],
})

export class TodoListComponent {
  @Output()remove:EventEmitter<number> = new EventEmitter();
  @Input() title: string;
  @Input() tasks: any;
  @Input() listId: number;
  editMode: boolean;

  constructor(){

    // Set edit mode to false

    this.editMode = false;
  }

  removeSelf(){

    // Call parent's removeList( i ) function where i is the index of the list

    this.remove.emit(this.listId);
  }

}
