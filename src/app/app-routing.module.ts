import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'auth',
    loadChildren: './components/auth/auth.module#AuthModule'
  },
  {
    path: 'error',
    loadChildren: './components/error/error.module#ErrorModule'
  },
  {
    path: '**',
    redirectTo: 'error/404' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
