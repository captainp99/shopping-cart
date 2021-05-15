import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ProductList } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = '/assets/mockData';

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<ProductList> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/products.json`;
    return this.http.get<ProductList>(url);
  }
}
