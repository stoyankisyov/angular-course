import { Component } from '@angular/core';

import { type User } from './user/user.model';
import { DUMMY_USERS } from './user/dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: User | undefined;

  onSelectedUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
