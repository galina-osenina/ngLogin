import { UserModel} from "../models/user.model";
import * as UserActions from "../actions/user.action";

const initialState: UserModel = {
  login: '',
  password: ''
};

export function UserReducer(
   state: UserModel[] = [initialState],
   action: UserActions.Actions
) {
  switch (action.type) {
    case UserActions.GET_USER:
      return state;
    case UserActions.GET_USER_SUCCESS:
      return [...state, action.payload];
    case UserActions.GET_USER_FAILURE:
      return state;
    case UserActions.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
