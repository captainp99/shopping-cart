import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  cartItems: Array<Cart> = new Array<Cart>();
  cartTotal = 0;
  ngOnInit(): void {
    this.cartService.bCartSubject.subscribe(x => {
      this.cartItems = x;
      this.cartTotal = 0;
      x.forEach(y => {
        this.cartTotal += y.cou * y.cartList.price;

      }
      );
    });
  }

  AddItem(cart: Cart): void {
    this.cartService.addToCart(cart.cartList);

  }

  RemoveItem(cart: Cart): void {
    this.cartService.deleteItem(cart.cartList, 1);
  }

  DeleteItem(cart: Cart): void {
    this.cartService.deleteItem(cart.cartList, cart.cou);
  }

  goToCheckout(): void {
    this.router.navigateByUrl('/home/checkout');
  }

}
