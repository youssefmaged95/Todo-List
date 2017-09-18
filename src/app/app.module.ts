import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListGenerator } from './services/listGenerator.service'
import { TodoListComponent } from './components/todoList/todoList.component'
import { TaskComponent } from './components/task/task.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
