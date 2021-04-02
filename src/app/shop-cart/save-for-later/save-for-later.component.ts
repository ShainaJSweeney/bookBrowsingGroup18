import { Component, OnInit } from '@angular/core';
import { SaveService } from "src/app/shop-cart/services/save.service";
import { CartService } from "src/app/shop-cart/services/cart.service";

@Component({
  selector: 'app-save-for-later',
  templateUrl: './save-for-later.component.html',
  styleUrls: ['./save-for-later.component.css']
})
export class SaveForLaterComponent implements OnInit {

  savedItems = this.saveService.getItems();

  removeFromSave(book: any) {
    this.saveService.removeFromSave(book);
  }

  addToCart(book: any) {
    this.cartService.addToCart(book);
    this.saveService.removeFromSave(book)
  }

  constructor( private saveService: SaveService,
               private cartService: CartService) { }

  ngOnInit(): void {
  }

}
