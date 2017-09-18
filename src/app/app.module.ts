import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListGenerator } from './services/listGenerator.service'
import { TodoListComponent } from './components/todoList/todoList.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
