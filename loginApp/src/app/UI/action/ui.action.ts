import { Action } from "@ngrx/store";
import { ModalModel } from "../models/modal.model";

export const SHOW_MODAL = '[ModalModel] Show'
export const CLOSE_MODAL = '[ModalModel] Close'

export class ShowModal implements Action {
  readonly type = SHOW_MODAL

  constructor(public payload: ModalModel) {
  }
}

export class CloseModal implements Action {
  readonly type = CLOSE_MODAL

  constructor(public payload: ModalModel) {
  }
}

export type Actions = ShowModal | CloseModal

