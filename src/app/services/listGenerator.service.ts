import { Injectable } from '@angular/core';
import faker from 'faker';
@Injectable()

// This services creates n dummy todo-lists

export class ListGenerator {
  lists : List[];  // list of todo-lists
  init( n : number ){
    this.lists = [];
    for( let i=0; i<n; i++ ){

       // Generate a random title

       let listTitle = faker.date.weekday();

       // Create 4 different titled tasks

       let tasks = [];
       for( let j=0; j<4; j++ ){
         let taskTitle = "Task " + ( j + 1 );
         let task = {
           id: j,
           title: taskTitle,
         };
         tasks.push(task);
       }

       // Create a list with the randomized title and the 4 tasks

       let List = {
         title:listTitle,
         tasks:tasks,
       };

       // Add the list to the 'list of todo-lists'

       this.lists.push(List);
    }
    return this.lists;
  }
}


interface Task{
  id: number;
  title: string;
}

interface List{
  title: string;
  tasks: Task[];
}
