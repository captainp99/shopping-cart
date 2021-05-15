import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  constructor(private cartService: CartService, public router: Router, private fb: FormBuilder) { }

  cartItems: Array<Cart> = new Array<Cart>();
  cartTotal = 0;
  cartItmesCount = 0;
  bookingForm: FormGroup;


  ngOnInit(): void {
    this.cartService.bCartSubject.subscribe(x => {
      this.cartItems = x;
      this.cartTotal = 0;
      this.cartItmesCount = 0;
      x.forEach(y => {
        this.cartTotal += y.cou * y.cartList.price;
        this.cartItmesCount += y.cou;

      }
      );
    });
    if (this.cartItmesCount === 0) {
      this.router.navigateByUrl('/home');
    }
    this.initializeForm();
  }

  private initializeForm(): void {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}')]],
      ccName: ['', Validators.required],
      ccNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}')]],
      ccCvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}')]],
      ccExpiration: ['', Validators.required],

    });
  }

  onFormSubmit(): void {
    this.cartService.thankYouPageAllowed = true;
    this.cartService.clearCart();
    this.router.navigateByUrl('/home/thankyou');
  }

  getControlValidationClasses(control: AbstractControl): object {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}
