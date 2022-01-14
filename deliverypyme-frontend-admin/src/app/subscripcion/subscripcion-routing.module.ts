import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubscripcionComponent } from "./pages/subscripcion/subscripcion.component";
import { SubscripcionesComponent } from "./pages/subscripciones/subscripciones.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SubscripcionesComponent,
      },
      {
        path: ":_id",
        component: SubscripcionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscripcionRoutingModule {}
