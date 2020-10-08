import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/children/mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/children/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/children/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
