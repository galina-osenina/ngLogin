import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

  getUser() {
    return this.user;
  }
}
