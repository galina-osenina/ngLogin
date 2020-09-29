import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./services/login.service";
import { Injectable } from "@angular/core";

@Injectable()

export class AdminGuards implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userRole') == 'admin') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
