import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { RouterModule, Routes } from "@angular/router";

const adminRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule
  ],
})

export class AdminRoutingModule { }

