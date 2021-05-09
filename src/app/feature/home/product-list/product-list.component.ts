import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = new Array<Product>();
  searchString: string;
  category: string;
  constructor(private readonly productService: ProductService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.searchString = params.search; });
    this.route.params.subscribe(params => { this.category = params.category; });
    this.route.data.subscribe(data => {
      if (this.searchString === undefined && this.category === undefined) {
        this.productList = data.product.products;
      }
      else if (this.searchString !== undefined){
        this.productList = data.product.products;
        this.productList = this.productList.filter(x => x.name.includes(this.searchString.toLocaleUpperCase()));
      }
      else {
        this.productList = data.product.products;
        const allCat = 'All';
        if (this.category.toLowerCase() !== allCat.toLowerCase()){
        this.productList = this.productList.filter(x => x.category.toLowerCase() === this.category.toLowerCase());
        }
      }

    });
  }



  productDetail(product: Product): void {
    this.router.navigateByUrl('/home/productDetail/' + product.id);
  }
}
