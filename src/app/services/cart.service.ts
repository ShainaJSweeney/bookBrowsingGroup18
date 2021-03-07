import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  addToCart(book: any) {
    // @ts-ignore
    this.items.push(book);
  }

  removeFromCart(book: any) {
    // @ts-ignore
    this.items.pop(book);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor( ) { }
}
