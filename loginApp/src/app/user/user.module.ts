import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { userRoutingModule } from "./user-routing.module";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [UserPageComponent, UserProfileComponent],
  imports: [
    userRoutingModule,
    CommonModule
  ]
})

export class UserModule {}
