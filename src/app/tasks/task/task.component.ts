import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(private taskService:TasksService){}
@Input({required:true}) task!: Task;

onCompleteTask(){
  this.taskService.removeTask(this.task.id);
}
}
