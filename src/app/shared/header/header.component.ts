import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  searchString = '';
  cartSize = 0;
  buttonEnableFlag = false;
  category = 'All';


  constructor(private readonly router: Router, private readonly cartService: CartService, public translate: TranslateService) {

  }

  ngOnInit(): void {

    this.cartService.bSubject.subscribe(x => this.cartSize = x);

    this.isLoggedIn = this.checkLogin();
  }

  checkLogin(): boolean {
    if (localStorage.getItem('isLoggedIn') !== 'Yes') {
      return false;
    }
    return true;
  }
  buttonEnable(): void {
    if (this.searchString.length > 0) {
      this.buttonEnableFlag = true;
    }
    else {
      this.buttonEnableFlag = false;
    }
  }

  goToCart(): void {
    this.router.navigate(['/home/cart']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }

  login(): void {
    this.router.navigate(['/login']);
  }
  search(): void {
    this.router.navigateByUrl('/home/product/' + this.searchString);
  }

  filter(): void {
    this.searchString = '';
    this.router.navigateByUrl('/home/product/category/' + this.category);
  }

}
