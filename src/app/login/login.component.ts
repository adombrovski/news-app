import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private service: AuthService,
    private route: Router
  ) {
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  proceedLogin(): void {
    const logIntoken = this.service.ProceedLogin();
    if (logIntoken) {
      localStorage.setItem('token', logIntoken.token);
      this.route.navigate(['']);
    }
  }
}
