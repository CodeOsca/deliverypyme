import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionComponent } from './pages/revision/revision.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: RevisionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionRoutingModule { }
