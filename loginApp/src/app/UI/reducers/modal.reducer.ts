import { ModalModel } from "../models/modal.model";
import * as UiActions from "../action/ui.action"

const initialState: ModalModel = {
  modalId: '',
  modalOpen: false,
}

export function ModalReducer(
  state: ModalModel = initialState,
  action: UiActions.Actions
) {
  switch (action.type) {
    case UiActions.SHOW_MODAL:
      return  {
        modalId: action.payload,
        modalOpen: true
      }
    case UiActions.SHOWN_MODAL:
      return  {
        modalId: action.payload,
        modalOpen: true
      }
    case UiActions.CLOSE_MODAL:
      return  action.payload;
    default:
      return state;
  }
}
