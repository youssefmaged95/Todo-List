import { Component } from '@angular/core';
import { ListGenerator } from './services/listGenerator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  lists : any[];
  newList : string;
  constructor(private ListGenerator: ListGenerator){

    // Create 6 dummy todo-lists

    this.lists = ListGenerator.init(6);
  }

  // Remove the list at index i from the list array

  removeList( i : number ){
    this.lists.splice( i , 1 );
  }


  createList(){

    // Create a new list with input title

    let emptyList = {
      title : this.newList,
      tasks : [],
    }

    // Add the new list to the list of todolists

    this.lists.unshift(emptyList);

    this.newList = "";


  }

}
