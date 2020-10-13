import { ModalModel } from "../models/modal.model";
import * as UiActions from "../action/ui.action"

const initialState: ModalModel = {
  modalData: {
    id: '',
    title: '',
    text: ''
  },
  modalOpen: false,
}

export function ModalReducer(
  state: ModalModel = initialState,
  action: UiActions.Actions
) {
  switch (action.type) {
    case UiActions.SHOW_MODAL:
      return  {
        modalData: action.payload,
        modalOpen: true
      }
    case UiActions.SHOWN_MODAL:
      return  {
        modalData: action.payload,
        modalOpen: true
      }
    case UiActions.CLOSE_MODAL:
      return {
        modalData: initialState,
        modalOpen: false
      }
    default:
      return state;
  }
}
