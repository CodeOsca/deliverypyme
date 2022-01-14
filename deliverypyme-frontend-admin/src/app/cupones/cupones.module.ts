import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CuponesRoutingModule } from "./cupones-routing.module";

import { CuponesComponent } from "./pages/cupones/cupones.component";
import { AddCuponComponent } from "./modal/add-cupon/add-cupon.component";
import { RenovateCuponComponent } from "./modal/renovate-cupon/renovate-cupon.component";
import { ChangeDiscountRateComponent } from './modal/change-discount-rate/change-discount-rate.component';

@NgModule({
  declarations: [CuponesComponent, AddCuponComponent, RenovateCuponComponent, ChangeDiscountRateComponent],
  imports: [CommonModule, CuponesRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule],
})
export class CuponesModule {}
