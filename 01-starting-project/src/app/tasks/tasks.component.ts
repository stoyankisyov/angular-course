import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  isAddingTask = false;

  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((task) => task.userId == this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.userTasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.isAddingTask = false;
  }
}
