import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicActivityPage } from './economic-activity.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EconomicActivityPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./children/list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./children/add/add.module').then( m => m.AddPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomicActivityPageRoutingModule {}
