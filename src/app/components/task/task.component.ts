import { Component , Input , Output , EventEmitter} from '@angular/core';
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})

export class TaskComponent {
  @Output()remove:EventEmitter<number> = new EventEmitter();
  @Input() title : string;
  @Input() editMode : boolean;
  @Input() taskId : number;
  checked : boolean;
  textColor : string;
  constructor(){
    this.editMode=false;
    this.checked=false;
    this.textColor="#444";
  }

  removeSelf(){
    this.remove.emit(this.taskId);
  }

  toggleCheck(){
    if(this.checked){
      this.checked=false;
      this.textColor="#444";
    }else{
      this.checked=true;
      this.textColor="#bbb";
    }
  }
}
