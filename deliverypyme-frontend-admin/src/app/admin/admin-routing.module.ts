import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DespachoComponent } from "../despachos/pages/despacho/despacho.component";

import { AdminComponent } from "./admin.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("../dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "perfil",
        component: PerfilComponent,
      },
      {
        path: "usuarios",
        loadChildren: () => import("../usuario/usuario.module").then((m) => m.UsuarioModule),
      },
      {
        path: "pymes-landing",
        loadChildren: () => import("../fotos/fotos.module").then((m) => m.FotosModule),
      },
      {
        path: "cupones",
        loadChildren: () => import("../cupones/cupones.module").then((m) => m.CuponesModule),
      },
      {
        path: "pagos-realizados",
        loadChildren: () => import("../ordenes/ordenes.module").then((m) => m.OrdenesModule),
      },
      {
        path: "comunas",
        loadChildren: () => import("../comunas/comunas.module").then((m) => m.ComunasModule),
      },
      {
        path: "resumen",
        loadChildren: () => import("../subscripcion/subscripcion.module").then((m) => m.SubscripcionModule),
      },
      {
        path: "despacho",
        loadChildren: () => import("../despachos/despachos.module").then((m) => m.DespachosModule),
      },
      {
        path: "transferencias",
        loadChildren: () => import("../revision/revision.module").then((m) => m.RevisionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
