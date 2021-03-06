import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BOOKS } from 'src/app/mockBooks';
import { CartService } from "src/app/cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;
  // @ts-ignore
  book;

  addToCart(book: any) {
    this.cartService.addToCart(book);
    window.alert("Your book has been added to the cart!");
    console.log(this.cartService.getItems())
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

