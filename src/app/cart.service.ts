import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(book: any) {
    // @ts-ignore
    this.items.push(book);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {
    return this.items;
  }



  constructor() { }
}
