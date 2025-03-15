import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-template-driven.component.html',
  styleUrl: './login-template-driven.component.css',
})
export class LoginTemplateDrivenComponent {
  private destroyRef = inject(DestroyRef);
  private form = viewChild.required<NgForm>('form');

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if (savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      var subscription = this.form()
        ?.valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            ),
        });

      this.destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
      });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(formData.form);
    console.log(
      `Entered Email: ${enteredEmail}, Entered Password: ${enteredPassword}`
    );

    formData.form.reset();
  }
}
