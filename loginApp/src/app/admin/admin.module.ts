import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";

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

export class AdminModule {}
