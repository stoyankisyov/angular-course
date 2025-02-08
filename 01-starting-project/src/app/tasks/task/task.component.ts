import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TasksService);

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
