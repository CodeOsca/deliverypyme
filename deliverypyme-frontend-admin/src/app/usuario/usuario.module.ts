import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioRoutingModule } from "./usuario-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { ComentarioComponent } from "./modal/comentario/comentario.component";
import { DetallesComponent } from "./modal/detalles/detalles.component";
import { EnviarCuponComponent } from "./modal/enviar-cupon/enviar-cupon.component";
import { SolicitudesComponent } from "./pages/solicitudes/solicitudes.component";
import { FallbackTextDirective } from "./shared/directives/fallback-text.directive";

@NgModule({
  declarations: [
    UsuariosComponent,
    ComentarioComponent,
    DetallesComponent,
    EnviarCuponComponent,
    SolicitudesComponent,
    FallbackTextDirective,
  ],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule],
})
export class UsuarioModule {}
