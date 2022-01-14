import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { OrdenesRoutingModule } from "./ordenes-routing.module";

import { OrdenesComponent } from "./pages/ordenes/ordenes.component";

@NgModule({
  declarations: [OrdenesComponent],
  imports: [CommonModule, OrdenesRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule],
})
export class OrdenesModule {}
