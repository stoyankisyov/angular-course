import { Component } from '@angular/core';

import { LoginTemplateDrivenComponent } from './auth/login-template-driven/login-template-driven.component';
import { LoginReactiveFormsComponent } from './auth/login-reactive-forms/login-reactive-forms.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    LoginTemplateDrivenComponent,
    LoginReactiveFormsComponent,
    SignupComponent,
  ],
})
export class AppComponent {}
