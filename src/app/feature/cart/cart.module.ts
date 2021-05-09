import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CartDetailComponent,
    CheckoutPageComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class CartModule { }
