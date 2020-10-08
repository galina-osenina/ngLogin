import { UiModel } from "../models/ui.model";
import * as UiActions from "../action/ui.action"

const initialState: UiModel = {
  modalId: 0,
  modalOpen: false
}

export function UiReducer(
  state: UiModel = initialState,
  action: UiActions.Actions
) {
  switch (action.type) {
    case UiActions.SHOW_MODAL:
      return {
        ...state,
        modalOpen: action.payload
      };
    default:
      return state;
  }
}
