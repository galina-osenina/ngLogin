import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AdminPageComponent
      }
    ]),
    CommonModule
  ]
})

export class AdminModule {}
