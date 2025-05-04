import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private taskService: TasksService) { }
  @Output() close = new EventEmitter();

  @Input({required:true}) userId!:string;
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  onCancel() {
    this.close.emit();
  }

  onSubmitTask() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    },this.userId);
    this.close.emit();
  }
}


