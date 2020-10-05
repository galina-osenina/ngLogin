import { CompanyService } from "./services/company.service";
import * as CompanyActions from './actions/company.action'
import {of} from "rxjs";

@Injectable()
export class CompanyEffects {

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  @Effect()
  getCompany$ = this.actions$.pipe(
    ofType(CompanyActions.GET_COMPANY),
    switchMap(() => {
      return this.companyService.getCompanies().pipe(
        map(companies => {
          console.log('>>>> ', companies);
          // const _user = localStorage.getItem('user');
          // return new UserActions.GetUserSuccess(Object.values(users).find(el => (el.login == _user)))
        }),
        catchError(error => of(new CompanyActions.GetCompanyFailure()))
      )
    })
  )
}
