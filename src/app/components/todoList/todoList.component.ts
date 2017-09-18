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
  taskTitle : string;
  editMode: boolean;

  constructor(){

    // Disable editMode

    this.editMode = false;
    this.taskTitle = this.title;
  }

  toggleEditMode(){
    if(this.editMode){
      this.editMode = false;
    }else{
      this.editMode = true;
    }
  }

  removeSelf(){

    // Call parent's removeList( i ) function where i is the index of the list

    this.remove.emit(this.listId);
  }

  removeTask( i : number ){

    // Remove task at index i

    this.tasks.splice( i , 1 );
  }

  addTask( title : string ){

  }

}
