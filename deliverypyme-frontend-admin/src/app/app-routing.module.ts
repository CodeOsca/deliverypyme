import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuicklinkStrategy } from "ngx-quicklink";
import { AuthGuard } from "./auth/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
