import { Component } from '@angular/core';

import { type User } from './user/user.model';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
