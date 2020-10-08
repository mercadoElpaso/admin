import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercadoPage } from './mercado.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MercadoPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./children/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'concessionaire',
        loadChildren: () => import('./children/concessionaire/concessionaire.module').then( m => m.ConcessionairePageModule)
      },
      {
        path: 'owner',
        loadChildren: () => import('./children/owner/owner.module').then( m => m.OwnerPageModule)
      },
      {
        path: 'permission',
        loadChildren: () => import('./children/permission/permission.module').then( m => m.PermissionPageModule)
      },
      {
        path: 'economic-activity',
        loadChildren: () => import('./children/economic-activity/economic-activity.module').then( m => m.EconomicActivityPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercadoPageRoutingModule {}
