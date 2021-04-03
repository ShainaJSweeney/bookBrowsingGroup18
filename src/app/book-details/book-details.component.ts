import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  h1Style : boolean = true;
  h2Style: boolean = true;
  h3Style: boolean = true;
  h4Style: boolean = true;
  h5Style: boolean = true;
  h6Style: boolean = true;
  h7Style: boolean = true;
  //backgroundStyle: boolean = true;
  Books: Object;
  Authors:Object;
  review = false; // feature 5 Luis

  constructor(private book: BookserviceService, private router: Router) { }

  cusRevButton(){
    this.router.navigateByUrl('/books');
  }

  ngOnInit(): void {
     this.book.getBook(window.location.href.slice(window.location.href.lastIndexOf('/')+1)).subscribe(book => {
     this.Books = book;
     console.log(this.Books);
     this.book.getAuthor(this.Books[0].author).subscribe(book => {
        this.Authors = book;
        console.log(this.Authors);
     })

  })

  }
    firstClick(){
      this.book.firstClick();
    }

  // Feature-5 close button
  closeEvent(): void {
    this.review = false;
  }
  // freature-5 write a review button
  writeReview(): void {
    this.review = true;
  }
}
