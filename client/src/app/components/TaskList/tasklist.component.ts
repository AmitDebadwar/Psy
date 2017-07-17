import { Component } from '@angular/core';

import { TaskListService } from './tasklist.service';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  providers: [TaskListService]
})
export class TaskListComponent {
  tasks: object[];
  matchedPatients: string[] = ['A', 'B', 'C'];
  searchPatient:string;
  isSearchSectionVisible:boolean=false;

  constructor(private taskListService: TaskListService) {
    this.tasks = taskListService.getAllTasks();
  }

  searchPatients = (): void => {
    this.isSearchSectionVisible=true;
    this.taskListService.searchPatients(this.searchPatient);
  }

}
