import { UserModel} from "./user/models/user.model";

export interface AppState {
  readonly user: UserModel;

}
