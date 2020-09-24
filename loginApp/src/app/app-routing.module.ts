import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { UserPageComponent } from "./user-page/user-page.component";


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
