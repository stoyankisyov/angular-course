import { Component, inject, Input } from '@angular/core';

import { type User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  private tasksService = inject(TasksService);

  isAddingTask = false;

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  get userTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }
}
