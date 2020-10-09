import { UserModel} from "./user/models/user.model";
import { CompanyModel } from "./company/models/company.model";
import { ModalModel } from "./UI/models/modal.model";

export interface AppState {
  user: UserModel;
  company: CompanyModel;
  UI: ModalModel
}
