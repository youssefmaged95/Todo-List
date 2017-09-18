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
    this.lists = ListGenerator.init(6);
  }
}
