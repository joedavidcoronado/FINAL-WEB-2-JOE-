import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detail-lugar',
    loadChildren: () => import('./detail-lugar/detail-lugar.module').then( m => m.DetailLugarPageModule)
  },
  {
    path: 'detail-lugar/:id',
    loadChildren: () => import('./detail-lugar/detail-lugar.module').then(m => m.DetailLugarPageModule),
  },
  {
    path: 'detail-lugar',
    loadChildren: () => import('./detail-lugar/detail-lugar.module').then(m => m.DetailLugarPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
