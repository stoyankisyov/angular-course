import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.selected.emit(this.user().id);
  }
}
