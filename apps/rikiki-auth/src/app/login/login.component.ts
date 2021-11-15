import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    
  }
  loginGoogle() {
    this.authService.googleLogin();
  }
}
