import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionRoutingModule } from './revision-routing.module';
import { RevisionComponent } from './pages/revision/revision.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RevisionComponent
  ],
  imports: [
    CommonModule,
    RevisionRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RevisionModule { }
