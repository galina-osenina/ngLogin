import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./services/login.service";
import { Injectable } from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Injectable()

export class AdminGuards implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let _isAble;
    this.store.select(s => s.user).subscribe(_user => {
      if (_user.role == 'admin') {
        _isAble = true;
      } else {
        this.router.navigate(['/']);
        _isAble = false;
      }
    });
    return _isAble;
  }
}
