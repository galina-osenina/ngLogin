import { CompanyModel } from "../models/company.model";
import * as CompanyActions from "../actions/company.action";

const initialState: CompanyModel = {
  id: 0,
  title: '',
  departments: [],
  employees: []
};

export function CompanyReducer(
  state: CompanyModel = initialState,
  action: CompanyActions.Actions
) {
  switch (action.type) {
    case CompanyActions.GET_COMPANY:
      return state;
    case CompanyActions.GET_COMPANY_SUCCESS:
      return action.payload;
    case CompanyActions.GET_COMPANY_FAILURE:
      return state;
    default:
      return state;
  }
}
