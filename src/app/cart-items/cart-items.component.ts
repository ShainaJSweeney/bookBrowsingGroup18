import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/mockBooks'
import { CartService } from "src/app/cart.service";

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
