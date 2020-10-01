import { Action } from "@ngrx/store";
import { UserModel } from "../models/user.model";

export const GET_USER = '[USERMODEL] Get';
export const GET_USER_SUCCESS = '[USERMODEL] Get Success'
export const GET_USER_FAILURE = '[USERMODEL] Get Failure'
export const ADD_USER = '[USERMODEL] Add';

export class GetUser implements Action {
  readonly type = GET_USER

  constructor() {
  }
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS

  constructor(public payload: UserModel) {
  }
}

export class GetUserFailure implements Action {
  readonly type = GET_USER_FAILURE

  constructor() {
  }
}

export class AddUser implements Action {
  readonly type = ADD_USER

  constructor(public payload: UserModel) {
  }
}

export type Actions = GetUser | AddUser | GetUserSuccess | GetUserFailure


