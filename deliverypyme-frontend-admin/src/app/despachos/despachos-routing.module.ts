import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DespachoComponent } from "./pages/despacho/despacho.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: ":_id",
        component: DespachoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespachosRoutingModule {}
