import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mockBooks';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

