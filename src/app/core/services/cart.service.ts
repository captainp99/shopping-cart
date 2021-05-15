import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ProductDetailsComponent } from 'src/app/feature/home/product-details/product-details.component';
import { Cart } from '../cart.model';
import { Product, ProductList } from '../product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    count = 0;

    thankYouPageAllowed = false;
    bSubject = new BehaviorSubject(this.count);
    local: Array<Cart> = new Array<Cart>();
    bCartSubject = new BehaviorSubject(this.local);
    constructor() {
        const res = localStorage.getItem('cart');
        const obj = JSON.parse(res);
        // tslint:disable-next-line: forin
        for (const o in obj) {
            this.local.push({ cartList: obj[o].cartList, cou: obj[o].cou });
            this.count += obj[o].cou;
        }
        this.bSubject.next(this.count);
        this.bCartSubject.next(this.local);
    }

    addToCart(product: Product): void {
        const isExist = this.local.filter(y => y.cartList.id === product.id);
        if (isExist.length !== 0) {
            const x = this.local.find(y => y.cartList.id === product.id);
            x.cou = x.cou + 1;
        }
        else {
            this.local.push({ cartList: product, cou: 1 });
        }
        localStorage.setItem('cart', JSON.stringify({ ...this.local }));
        this.count = this.count + 1;
        this.bSubject.next(this.count);
        this.bCartSubject.next(this.local);
    }

    deleteItem(product: Product, cou: number): void {
        const x = this.local.find(y => y.cartList.id === product.id);
        x.cou = x.cou - cou;
        if (x.cou <= 0) {
            this.local = this.local.filter(y => y.cartList !== product);
        }
        localStorage.setItem('cart', JSON.stringify({ ...this.local }));
        this.count = this.count - cou;
        this.bSubject.next(this.count);
        this.bCartSubject.next(this.local);
    }

    clearCart(): void {
        localStorage.removeItem('cart');
        this.count = 0;
        this.local.splice(0, this.local.length);
        this.bSubject.next(this.count);
        this.bCartSubject.next(this.local);
    }
}
