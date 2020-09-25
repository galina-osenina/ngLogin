import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { AdminGuards } from "./admin-page/admin.guards";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule),
    canActivate : [AdminGuards]
  },
  {
    path: 'user',
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
