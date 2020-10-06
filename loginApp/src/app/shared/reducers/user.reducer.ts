import { UserModel} from "../../user/models/user.model";
import * as UserActions from "../actions/user.action";

const initialState: UserModel = {
  id: 0,
  login: '',
  password: '',
  role: ''
};

export function UserReducer(
   state: UserModel = initialState,
   action: UserActions.Actions
) {
  switch (action.type) {
    case UserActions.GET_USER:
      return state;
    case UserActions.GET_USER_SUCCESS:
      return action.payload;
    case UserActions.GET_USER_FAILURE:
      return state;
    default:
      return state;
  }
}
