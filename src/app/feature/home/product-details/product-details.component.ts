import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productList: Array<Product>;
  product: Product;
  productId: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.productId = params.id; });
    this.route.data.subscribe(data => {
      if (data.product !== undefined) {
        this.productList = data.product.products;
        // tslint:disable-next-line: radix
        this.productList = this.productList.filter(x => x.id === parseInt(this.productId));
        this.product = this.productList[0];
      }
    });
  }

  addToCart(): void {
    if (localStorage.getItem('isLoggedIn') !== 'Yes') {
      this.router.navigateByUrl('/login');
      return;
    }
    this.cartService.addToCart(this.product);

  }

}
