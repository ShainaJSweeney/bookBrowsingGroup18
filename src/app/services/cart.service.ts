import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  addToCart(book: any) {
    this.items.push(book);
  }

  removeFromCart(id: any) {
    const index = this.items.indexOf(id, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
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
