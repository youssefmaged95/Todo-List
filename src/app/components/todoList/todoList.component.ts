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
  newTask : string;
  constructor(){

    // Disable editMode

    this.editMode = false;
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

  addTask(){

    // Check if task title is empty

    if(this.newTask.length == 0 ){
      alert("Please enter a task title");
    }else{

      // Create a new task with the input title

      let task = {
        title : this.newTask,
      }

      // Add the new task to the list of tasks

      this.tasks.push(task);
      this.newTask = "";
    }

  }

}
