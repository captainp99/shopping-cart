import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService, public router: Router) { }



  ngOnInit(): void {


    if (this.cartService.thankYouPageAllowed === false) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnDestroy(): void {
    this.cartService.thankYouPageAllowed = false;
  }

}
