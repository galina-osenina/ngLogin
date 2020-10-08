import { Action } from "@ngrx/store";

export const SHOW_MODAL = '[UiModel] Show'

export class ShowModal implements Action {
  readonly type = SHOW_MODAL

  constructor(public payload: boolean) {
  }
}

export type Actions = ShowModal

