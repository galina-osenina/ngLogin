import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

const userRoutes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports: [
    RouterModule
  ],
})

export class userRoutingModule { }

