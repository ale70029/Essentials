import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private taskService: TasksService) { }
  @Input() name!: string;
  @Input() userId!: string;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
