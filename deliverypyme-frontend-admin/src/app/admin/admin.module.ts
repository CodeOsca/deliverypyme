import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { DashboardModule } from '../dashboard/dashboard.module';

import { AdminComponent } from './admin.component';
import { CuponesModule } from '../cupones/cupones.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './modal/editar-perfil/editar-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    PerfilComponent,
    EditarPerfilComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    UsuarioModule,
    CuponesModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
