import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductResolver } from 'src/app/shared/Resolver/product.resolver';
import { AuthGuard } from '../auth/auth.guard';
import { CartDetailComponent } from '../cart/cart-detail/cart-detail.component';
import { CheckoutPageComponent } from '../cart/checkout-page/checkout-page.component';
import { ThankYouComponent } from '../cart/thank-you/thank-you.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

// Holds the route of the module.
const routes: Routes = [

  {
    path: 'home',
    component: MainPageComponent,
    children: [
      {
        path: 'list', component: ProductListComponent,
        resolve: { product: ProductResolver },
      },
      {
        path: 'productDetail/:id', component: ProductDetailsComponent,
        resolve: { product: ProductResolver },
      },
      {
        path: 'product/:search', component: ProductListComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: 'product/category/:category', component: ProductListComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'checkout',
        component: CheckoutPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'thankyou',
        component: ThankYouComponent,
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
