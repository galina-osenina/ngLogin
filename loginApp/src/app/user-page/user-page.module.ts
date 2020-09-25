import { NgModule } from "@angular/core";
import { UserPageComponent } from "./user-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UserPageComponent
      }
    ])
  ]
})

export class UserPageModule {}
