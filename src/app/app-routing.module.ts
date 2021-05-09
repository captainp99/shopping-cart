import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/auth.guard';
import { LoginComponent } from './feature/auth/login/login.component';
import { CartDetailComponent } from './feature/cart/cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },

  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
