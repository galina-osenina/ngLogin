import {Component, Input, OnInit} from '@angular/core';
import { LoginService } from "../../../admin/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  userLinks = {
    'admin': '/admin',
    'user': '/user'
  }

  constructor(
    private auth: LoginService,
    private route: Router
    ) { }

  ngOnInit(): void {

  }

  onLogin(user) {
    this.auth.getUsers().subscribe(res => {
      const _user = Object.values(res).find(el => (el.login == user.login) && (el.password == user.password));
      if (!!_user) {
        this.route.navigate([this.userLinks[_user.role]]);
        localStorage.setItem('userRole', _user.role);
      }
    })

  }

}
