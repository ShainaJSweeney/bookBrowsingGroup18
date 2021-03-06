import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/mockBooks'


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
