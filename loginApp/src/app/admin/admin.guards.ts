import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./services/login.service";
import { Injectable } from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {map} from "rxjs/operators";
import {UserModel} from "../user/models/user.model";

@Injectable()

export class AdminGuards implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(s => s.user),
      map((_user: UserModel) => {
        if (_user.role == 'admin') {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      })
    )
  }
}
