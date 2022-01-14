import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotosComponent } from './pages/fotos/fotos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FotosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotosRoutingModule { }
