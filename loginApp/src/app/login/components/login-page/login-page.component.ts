import {Component, OnInit} from '@angular/core';
import { LoginService } from "../../../admin/services/login.service";
import { Router } from "@angular/router";
import { AppState } from "../../../app.state";
import { Store} from "@ngrx/store";
import * as UserActions from "../../../shared/actions/user.action"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  userLinks = {
    'admin': '/admin',
    'user': '/user'
  };

  constructor(
    private auth: LoginService,
    private route: Router,
    private store: Store<AppState>
    ) {
  }

  ngOnInit(): void {
  }

  onLogin(user) {
    localStorage.setItem('user', user.login);
    this.store.dispatch(new UserActions.GetUser());
    this.store.select(s => s.user).subscribe(_user => {
      if (_user.role != '') {
        this.route.navigate([this.userLinks[_user.role]], { queryParams: { department: user.department } });
      }
    });
  }

}
