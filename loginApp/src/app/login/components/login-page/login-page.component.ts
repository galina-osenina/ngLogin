import {Component, Input, OnInit} from '@angular/core';
import { LoginService } from "../../../admin/services/login.service";
import { Router } from "@angular/router";
import { AppState } from "../../../app.state";
import {select, Store} from "@ngrx/store";
import * as UserActions from "../../../actions/user.action"
import {Observable} from "rxjs";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  users$: Observable<UserModel[]>;

  userLinks = {
    'admin': '/admin',
    'user': '/user'
  }

  constructor(
    private auth: LoginService,
    private route: Router,
    private store: Store<AppState>
    ) {
    this.users$ = store.pipe(select('user'));
  }

  ngOnInit(): void {

  }

  onLogin(user) {
    localStorage.setItem('user', user.login);
    this.store.dispatch(new UserActions.GetUser());
    // this.auth.getUsers().subscribe(res => {
    //   const _user = Object.values(res).find(el => (el.login == user.login) && (el.password == user.password));
    //   if (!!_user) {
    //     this.route.navigate([this.userLinks[_user.role]], { queryParams: { department: user.department } });
    //     localStorage.setItem('userRole', _user.role);
    //   }
    // })

  }

}
