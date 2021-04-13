// Feature 4 Book-Details Code.
import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router'; 
import {Subscription} from 'rxjs';

import { Post } from '../rating/post.model';
import { PostsService } from '../rating/posts.service';
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
  Authors: Object;
  Reviews: Object;

  // feature 5 Luis -------------
  review = false;
  posts: Post[] = [];
  private postsSub: Subscription;
// -------------------------------

  constructor(private book: BookserviceService, private router: Router, public postsService: PostsService) { 
    //this.book.setId("4")
  }

  cusRevButton(){
    this.router.navigateByUrl('/books');
  }

  ngOnInit(): void {    
     this.book.getBook(window.location.href.slice(window.location.href.lastIndexOf('/')+1)
     ).subscribe(book => {
     this.Books = book;
     console.log(this.Books);
     this.book.getAuthor(this.Books[0].author).subscribe(book => {
      this.Authors = book;
      console.log(this.Authors);
      this.book.getReview(this.Books[0].id).subscribe(book => {
      this.Reviews = book;
      console.log(this.Reviews);
     })
     })
  })
     /*
     this.book.getAuthor(this.Books[0].author).subscribe(book => {
     this.Authors = book;
     console.log(this.Authors);
     })
     */
  }
    firstClick(){
      this.book.firstClick();
    }

    /*
    // feature 5 Luis -------------
     this.postsService.getPosts();
     this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
*/

    // Feature-5 close button
  closeEvent(): void {
    this.review = false;
  }
  // freature-5 write a review button
  writeReview(): void {
    this.review = true;
  }
    /* 
    compareAuthorName(){
    if(this.Authors[0].name === this.Books[0].author)
    {
    console.log("Authors have the same name");
    return true;
    } 
    else{
    console.log("Authors don't have same name.")  
    return false;
    } 
    }
    */
   
}
