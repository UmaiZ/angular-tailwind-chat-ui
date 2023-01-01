import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullContentComponent } from './views/full-content/full-content.component';

const routes: Routes = [
  {
    path: '', component: FullContentComponent, children: [
      {
        path: '', loadChildren: () => import('../app/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
