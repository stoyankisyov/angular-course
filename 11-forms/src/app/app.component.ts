import { Component } from '@angular/core';

import { LoginTemplateDrivenComponent } from './auth/login-template-driven/login-template-driven.component';
import { LoginReactiveFormsComponent } from './auth/login-reactive-forms/login-reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginTemplateDrivenComponent, LoginReactiveFormsComponent],
})
export class AppComponent {}
