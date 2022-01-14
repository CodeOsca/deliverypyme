import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotosRoutingModule } from './fotos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { FotosComponent } from './pages/fotos/fotos.component';
import { AddFotosComponent } from './components/add-fotos/add-fotos.component';
import { SwiperComponent } from './components/swiper/swiper.component';


@NgModule({
  declarations: [
    FotosComponent,
    AddFotosComponent,
    SwiperComponent
  ],
  imports: [
    CommonModule,
    FotosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule
  ]
})
export class FotosModule { }
