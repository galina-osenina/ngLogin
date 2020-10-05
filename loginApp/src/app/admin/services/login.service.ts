import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../user/models/user.model";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('../../assets/users.json');
  }

  setUser(user) {
    this.user = user;
  }
}
