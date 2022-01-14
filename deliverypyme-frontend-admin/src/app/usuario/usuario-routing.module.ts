import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { SolicitudesComponent } from "./pages/solicitudes/solicitudes.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UsuariosComponent,
      },
      {
        path: "solicitudes",
        component: SolicitudesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
