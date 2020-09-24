import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private auth: LoginService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login() {
    const user = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    }

    this.auth.getUsers().subscribe(res => {
      let _user = Object.values(res).find(el => (el.login == user.login) && (el.password == user.password));
      if (typeof _user != 'undefined') {
        switch(_user.role) {
          case 'admin':
            this.route.navigate(['/admin']);
            break;
          case 'user':
            this.route.navigate(['/user']);
            break;
        }
      }
    });

    //this.loginForm.reset();
    //this.route.navigate(['/admin']);
  }

}
