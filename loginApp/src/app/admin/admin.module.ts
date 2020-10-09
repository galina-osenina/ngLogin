import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ModalComponent } from '../UI/components/modal/modal.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [AdminPageComponent, ModalComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})

export class AdminModule {}
