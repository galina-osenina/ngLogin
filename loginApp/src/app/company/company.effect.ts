import { CompanyService } from "./services/company.service";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";
import * as CompanyActions from "../company/actions/company.action";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {GetCompanyFailure} from "../company/actions/company.action";

@Injectable()
export class CompanyEffects {

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private store: Store<AppState>
  ) {}

  // @Effect()
  // getCompany$ = this.actions$.pipe(
  //   ofType(CompanyActions.GET_COMPANY),
  //   withLatestFrom(this.store),
  //   filter(([action, state]: [CompanyActions.GetCompany, AppState]) => !!state.user && !!state.user.id),
  //   switchMap(([action, state]: [CompanyActions.GetCompany, AppState]) => {
  //     return this.companyService.getCompanies().pipe(
  //       map(companies => {
  //         return new CompanyActions.GetCompanySuccess(
  //           Object.values(companies).find(company => {
  //             return company.employees.includes(state.user.id)
  //           })
  //         );
  //       }),
  //       catchError(error => of(new GetCompanyFailure()))
  //     )
  //   })
  // )

  @Effect()
  getCompany$ = this.actions$.pipe(
    ofType(CompanyActions.GET_COMPANY),
    withLatestFrom(this.store),
    switchMap(([action, state]: [CompanyActions.GetCompany, AppState]) => {
      return of(state)
    }),
    filter(state => {
      return !!state.user && !!state.user.id
    }),
    switchMap((state: AppState) => {
      return this.companyService.getCompanies().pipe(
        map(companies => {
          return new CompanyActions.GetCompanySuccess(
            Object.values(companies).find(company => {
              return company.employees.includes(state.user.id)
            })
          );
        }),
        catchError(error => of(new GetCompanyFailure()))
      )
    })
  )
}
