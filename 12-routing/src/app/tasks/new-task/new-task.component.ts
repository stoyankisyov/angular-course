import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  private router = inject(Router);

  userId = input.required<string>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  isSubmitted = false;

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );

    this.isSubmitted = true;

    this.router.navigate(['/users', this.userId(), 'tasks']);
  }
}

export const canLeaveEdintPage: CanDeactivateFn<NewTaskComponent> = (
  component
) => {
  if (component.isSubmitted) {
    return true;
  }
  if (
    component.enteredTitle() ||
    component.enteredSummary() ||
    component.enteredDate()
  ) {
    return window.confirm('Do you really want to leave?');
  }

  return true;
};
