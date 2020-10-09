import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { userRoutingModule } from "./user-routing.module";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [UserPageComponent, UserProfileComponent, UserAddComponent],
  imports: [
    userRoutingModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})

export class UserModule {}
