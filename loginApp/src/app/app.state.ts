import { UserModel} from "./user/models/user.model";
import { CompanyModel } from "./company/models/company.model";
import { UiModel } from "./UI/models/ui.model";

export interface AppState {
  user: UserModel;
  company: CompanyModel;
  UI: UiModel
}
