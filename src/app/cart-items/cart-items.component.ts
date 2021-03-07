import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/mockBooks'
import { CartService } from "src/app/services/cart.service";
import { SaveService } from "src/app/services/save.service";

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  items = this.cartService.getItems();

  cartTotal = 0


  removeFromCart(id) {
    this.cartService.removeFromCart(id);
  }

  saveForLater(book: any) {
    this.saveService.saveForLater(book);
    this.cartService.removeFromCart(book);
  }


  constructor(private cartService: CartService,
              private saveService: SaveService) { }

  calcCartTotal() {
    this.cartTotal = 0
    this.items.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  ngOnInit(): void { }

}
