import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginPageComponent
      }
    ]),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [
    LoginPageComponent,
    LoginFormComponent
  ]
})

export class LoginModule {}
