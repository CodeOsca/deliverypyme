import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OrdenesComponent } from "./pages/ordenes/ordenes.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: OrdenesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesRoutingModule {}
