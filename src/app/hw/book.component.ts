import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BOOKS } from 'src/app/mockBooks';
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;
  book;
  review = false;


  addToCart(book: any) {
    this.cartService.addToCart(book);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  // Feature-5 close button
  closeEvent(book: Book): void {
    this.selectedBook = null;
    this.review = false;
  }
  // freature-5 write a review button
  writeReview(): void {
    this.review = true;
  }
}

