import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/shop-cart/services/cart.service";


@Component({
  selector: 'app-cart-price',
  templateUrl: './cart-price.component.html',
  styleUrls: ['./cart-price.component.css']
})
export class CartPriceComponent implements OnInit {

  items = this.cartService.getItems();

  cartTotal = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items.forEach(item => {
      this.cartTotal += item.price
    })
  }

}
