import { Component } from '@angular/core';
import { TaskListService } from './tasklist.service';

@Component({
  selector: 'tasklist',
  templateUrl:'./tasklist.component.html',
  providers:[TaskListService]
})
export class TaskListComponent  {  
  tasks: object[];
  matchedPatients:string[]=['A','B','C'];
  
  constructor(taskListService: TaskListService){
    this.tasks=taskListService.getAllTasks();
  }
  

}
