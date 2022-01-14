import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CuponesComponent } from './pages/cupones/cupones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component: CuponesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponesRoutingModule { }
