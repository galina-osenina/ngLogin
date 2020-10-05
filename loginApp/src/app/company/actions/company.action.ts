import { Action } from "@ngrx/store";
import { CompanyModel } from "../../company/models/company.model";


export const GET_COMPANY = '[COMPANYMODEL] Get';
export const GET_COMPANY_SUCCESS = '[COMPANYMODEL] Get Success';
export const GET_COMPANY_FAILURE = '[COMPANYMODEL] Get Failure';


export class GetCompany implements Action {
  readonly type = GET_COMPANY

  constructor() {
  }
}

export class GetCompanySuccess implements Action {
  readonly type = GET_COMPANY_SUCCESS

  constructor(public payload: CompanyModel) {
  }
}

export class GetCompanyFailure implements Action {
  readonly type = GET_COMPANY_FAILURE

  constructor() {
  }
}

export type Actions = GetCompany | GetCompanySuccess | GetCompanyFailure
