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
    case UserActions.GET_USERS:
      return state;
    case UserActions.ADD_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
}
