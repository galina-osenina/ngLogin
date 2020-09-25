import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./admin-page.component";

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AdminPageComponent
      }
    ])
  ]
})

export class AdminPageModule {}
