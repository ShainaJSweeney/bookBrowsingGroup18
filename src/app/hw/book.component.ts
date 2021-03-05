import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mockBooks';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;
  review = false;

  constructor() { }

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

