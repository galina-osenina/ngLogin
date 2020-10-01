import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    const _user = localStorage.getItem('user')
    console.log('>>> ', _user);
    this.http.get('../../assets/users.json').subscribe(res => {
      Object.values(res).find(el => (el.login == _user))
    });
  }

  setUser(user) {
    this.user = user;
  }
}
