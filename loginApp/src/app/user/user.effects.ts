import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { LoginService } from "../admin/services/login.service";
import * as UserActions from '../actions/user.action'

@Injectable()

export class UserEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(UserActions.GET_USER),
    switchMap(() => {
      return this.loginService.getUsers().pipe(
        map(users => {
          const _user = localStorage.getItem('user');
          return new UserActions.GetUserSuccess(Object.values(users).find(el => (el.login == _user)))
        }),
        catchError(error => of(new UserActions.GetUserFailure()))
      )
    })
  )
}
