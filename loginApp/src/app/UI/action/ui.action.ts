import { Action } from "@ngrx/store";
import { ModalModel, ModalData } from "../models/modal.model";

export const SHOW_MODAL = '[ModalModel] Show'
export const SHOWN_MODAL = '[ModalModel] Shown'
export const CLOSE_MODAL = '[ModalModel] Close'

export class ShowModal implements Action {
  readonly type = SHOW_MODAL

  constructor(public payload: ModalData) {
  }
}

export class ShownModal implements Action {
  readonly type = SHOWN_MODAL

  constructor(public payload: Object ) {
  }
}

export class CloseModal implements Action {
  readonly type = CLOSE_MODAL

  constructor() {
  }
}

export type Actions = ShowModal | ShownModal | CloseModal

