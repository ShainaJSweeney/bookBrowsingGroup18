import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
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

  constructor(private book: BookserviceService, private router: Router) { 
    //this.book.setId("4")
  }

  cusRevButton(){
    this.router.navigateByUrl('/authorDetails');
  }

  ngOnInit(): void {    
     this.book.getAuthor(window.location.href.slice(window.location.href.lastIndexOf('/')+1)
     ).subscribe(book => {
     this.Books = book;
     console.log(this.Books);

     var bookSelect = <HTMLSelectElement>document.getElementById("books");
     
      for(var i = 0; i < book[0].listOfWorks.length; i++){
        var el = document.createElement("LI");
        var a = document.createElement('a');
        a.textContent = i + book[0].listOfWorks[i];
        
        a.href = 'http://www.google.com/' + i;
        
        el.appendChild(a);
        bookSelect.appendChild(el);
        
      }
  })
  
  }
  bookUrl(){

  }
    firstClick(){
      this.book.firstClick();
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
