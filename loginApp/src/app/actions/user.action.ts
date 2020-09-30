import { Action } from "@ngrx/store";
import {UserModel} from "../models/user.model";

export const GET_USERS = '[USERMODEL] Get';
export const ADD_USERS = '[USERMODEL] Add';

export class GetUser implements Action {
  readonly type = GET_USERS

  constructor() {
  }
}

export class AddUser implements Action {
  readonly type = ADD_USERS

  constructor(public payload: UserModel) {
  }
}

export type Actions = GetUser | AddUser


