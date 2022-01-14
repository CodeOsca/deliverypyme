import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { SubscripcionRoutingModule } from './subscripcion-routing.module';
import { SubscripcionComponent } from './pages/subscripcion/subscripcion.component';
import { SubscripcionesComponent } from './pages/subscripciones/subscripciones.component';


@NgModule({
  declarations: [
    SubscripcionComponent,
    SubscripcionesComponent
  ],
  imports: [
    CommonModule,
    SubscripcionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SubscripcionModule { }
