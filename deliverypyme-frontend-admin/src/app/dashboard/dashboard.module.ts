import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { PanelComponent } from "./pages/panel/panel.component";
import { ActividadesComponent } from "./components/actividades/actividades.component";

@NgModule({
  declarations: [PanelComponent, ActividadesComponent],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule, FormsModule, MaterialModule, SharedModule],
})
export class DashboardModule {}
