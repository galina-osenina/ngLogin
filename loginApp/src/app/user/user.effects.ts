import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from "../admin/services/login.service";
import * as UserActions from '../actions/user.action'

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.GET_USER),
      mergeMap(() => this.loginService.getCurrentUser()
        .pipe(
          map(_user => (new UserActions.GetUserSuccess(_user))),
          catchError(() => of(new UserActions.GET_USER_FAILURE))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}
