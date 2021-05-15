import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Cart } from '../cart.model';
import { CartService } from './cart.service';
import { Product } from '../product.model';

describe('CartService', () => {
    let service: CartService;

    const mockCart: Cart[] = [
        {
            cartList: {
                id: 1,
                category: 'category',
                color: 'black',
                desc: 'Product',
                imgUrl: 'image',
                model: 'mocel',
                name: 'name',
                price: 12,
                type: 'cloth'
            },
            cou: 2
        },
        {
            cartList: {
                id: 2,
                category: 'category',
                color: 'black',
                desc: 'Product',
                imgUrl: 'image',
                model: 'mocel',
                name: 'name',
                price: 12,
                type: 'cloth'
            },
            cou: 1
        }
    ];

    const product: Product = {
        id: 1,
        category: 'category',
        color: 'black',
        desc: 'Product',
        imgUrl: 'image',
        model: 'mocel',
        name: 'name',
        price: 12,
        type: 'cloth'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
        });
        service = TestBed.inject(CartService);
        service.local = mockCart;
    });

    it('should add product', () => {
        service.addToCart(product);
        const cartItem = service.local.find(x => x.cartList.id === product.id);
        expect(cartItem.cou).toBe(3);
    });

    it('should delete product', () => {
        service.deleteItem(product, 1);
        const cartItem = service.local.find(x => x.cartList.id === product.id);
        expect(cartItem.cou).toBe(2);
    });

    it('should add product in cart if not exist', () => {
        product.id = 3;
        service.addToCart(product);
        const cartItem = service.local.find(x => x.cartList.id === product.id);
        expect(cartItem.cou).toBe(1);
    });

    it('should delete product in cart if count is zero', () => {
        product.id = 3;
        service.deleteItem(product, 1);
        const cartItem = service.local.find(x => x.cartList.id === product.id);
        expect(cartItem).toBe(undefined);
    });

    it('should clear cart', () => {
        service.clearCart();
        expect(service.local.length).toBe(0);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
