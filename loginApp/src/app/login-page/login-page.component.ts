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
  userLinks = {
    'admin': '/admin',
    'user': '/user'
  }

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
      const _user = Object.values(res).find(el => (el.login == user.login) && (el.password == user.password));
      if (!!_user) {
        this.route.navigate([this.userLinks[_user.role]]);
        localStorage.setItem('userRole', _user.role);
      }
    })

  }

}
