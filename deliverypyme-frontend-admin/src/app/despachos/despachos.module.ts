import { MaterialModule } from "./../material/material.module";
import { SharedModule } from "./../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SolicitudComponent } from "./modal/solicitud/solicitud.component";
import { DespachosRoutingModule } from "./despachos-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DespachoComponent } from "./pages/despacho/despacho.component";

@NgModule({
  declarations: [DespachoComponent, SolicitudComponent],
  imports: [CommonModule, DespachosRoutingModule, ReactiveFormsModule, SharedModule, MaterialModule],
})
export class DespachosModule {}
