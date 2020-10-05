import { UserModel} from "./user/models/user.model";
import { CompanyModel } from "./company/models/company.model";

export interface AppState {
  user: UserModel;
  company: CompanyModel
}
