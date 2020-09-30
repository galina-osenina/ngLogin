import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    AdminRoutingModule,
    CommonModule
  ]
})

export class AdminModule {}
