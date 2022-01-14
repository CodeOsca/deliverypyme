import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { ComunasRoutingModule } from "./comunas-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComunasComponent } from "./pages/comunas/comunas.component";
import { CreateComponent } from "./modal/create/create.component";

@NgModule({
  declarations: [ComunasComponent, CreateComponent],
  imports: [CommonModule, SharedModule, ComunasRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class ComunasModule {}
