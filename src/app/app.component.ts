import { Component } from '@angular/core';
import { ListGenerator } from './services/listGenerator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  lists : any[];
  constructor(private ListGenerator: ListGenerator){

    // Create 6 dummy todo-lists

    this.lists = ListGenerator.init(6);
  }

  // Remove the list with index i from the list array

  removeList( i : number ){
    this.lists.splice( i , 1 );
  }

}
