import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.maxLength(15)])

  constructor(public authService: AuthService) { }
  signIn() {
    this.authService.signIn(this.email.value, this.password.value);
  }
  signUp() {
    this.authService.signUp(this.email.value, this.password.value);
  }
}
