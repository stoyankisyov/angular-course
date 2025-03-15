import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-reactive-forms.component.html',
  styleUrl: './login-reactive-forms.component.css',
})
export class LoginReactiveFormsComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(
      `Entered Email: ${enteredEmail}, Entered Password: ${enteredPassword}`
    );
  }
}
