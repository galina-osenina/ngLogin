import { NgModule } from "@angular/core";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [UserPageComponent, UserProfileComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UserPageComponent
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: UserProfileComponent
      }
    ]),
    CommonModule
  ]
})

export class UserModule {}
