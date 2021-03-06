import { Injectable } from '@angular/core'
import { Book } from "./book";


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  addToCart(book: any) {
    // @ts-ignore
    this.items.push(book);
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
