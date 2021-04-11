import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {

  booksToDisplay: Object[];
  constructor(private theService: BookserviceService, private router: Router) { }
  selectedBook?: Object;
  review = false;
  genres: String;
  url: String;
  query: String;
  pageNum: number;
  perPage: number;
  
  ngOnInit(): void {
    this.url = window.location.href.replace('http://localhost:4200/books/','');
    this.query = this.url.substring(0,this.url.indexOf('/'));
    this.perPage = Number(this.url.substring(this.url.indexOf('/')+1,this.url.lastIndexOf('/')));
    this.pageNum = Number(this.url.substring(this.url.lastIndexOf('/')+1));
    
    
    this.theService.getGenres().subscribe(genres =>{
      var genreSelect = <HTMLSelectElement>document.getElementById("genre");
      for(var i = 0; i < genres.length; i++){
        var el = document.createElement("option");
        el.textContent = String(genres[i]);
        if(el.textContent === this.query.substring(6).replace("%20"," ")) el.selected = true;
        genreSelect.appendChild(el);
        
      }

    });
    this.theService.searchBook(String(this.query)).subscribe(book => {
      
      var numOnthisPage = book.length - (this.pageNum -1)*this.perPage;
      if(numOnthisPage > this.perPage) this.booksToDisplay = new Array(this.perPage);
      else this.booksToDisplay = new Array(numOnthisPage);
      for(var i = (this.pageNum - 1)*this.perPage,j = 0; i < this.pageNum*this.perPage && i < book.length;i++,j++){
        this.booksToDisplay[j]=book[i];
      }
      var pageSelect = <HTMLSelectElement>document.getElementById("pageNumber");
      for(var i = 1; i < (book.length/this.perPage)+1; i++){
        var el = document.createElement("option");
        el.textContent = String(i);
        el.value = String(i);
        pageSelect.appendChild(el);
        if(this.pageNum === i){
          el.selected = true;
        }
      }
      var minRatingHTML =  (<HTMLSelectElement>document.getElementById("minRating"));
      for(var i = 0; i < minRatingHTML.length; i++){
        if((<HTMLOptionElement>minRatingHTML.item(i)).value === this.query.substring(0,1)){
          (<HTMLOptionElement>minRatingHTML.item(i)).selected = true;
        }
      }
      var toSortHTML =  (<HTMLSelectElement>document.getElementById("toSort"));
      for(var i = 0; i < toSortHTML.length; i++){
        if((<HTMLOptionElement>toSortHTML.item(i)).value === this.query.substring(1,4)){
          (<HTMLOptionElement>toSortHTML.item(i)).selected = true;
        }
      }
      var sortOrderHTML =  (<HTMLSelectElement>document.getElementById("sortOrder"));
      for(var i = 0; i < sortOrderHTML.length; i++){
        if((<HTMLOptionElement>sortOrderHTML.item(i)).value === this.query.substring(4,5)){
          (<HTMLOptionElement>sortOrderHTML.item(i)).selected = true;
        }
      }
      var bestSellerHTML =  (<HTMLSelectElement>document.getElementById("bestSeller"));
      for(var i = 0; i < bestSellerHTML.length; i++){
        if((<HTMLOptionElement>bestSellerHTML.item(i)).value === this.query.substring(5,6)){
          (<HTMLOptionElement>bestSellerHTML.item(i)).selected = true;
        }
      }
      var booksPerPageHTML =  (<HTMLSelectElement>document.getElementById("booksPerPage"));
      for(var i = 0; i < booksPerPageHTML.length; i++){
        if((<HTMLOptionElement>booksPerPageHTML.item(i)).value === String(this.perPage)){
          (<HTMLOptionElement>booksPerPageHTML.item(i)).selected = true;
        }
      }
    });
    
  }  

 
  onSelect(book: Book): void {
    location.href = '/details/'+ book._id.toString();
  }

  // freature-5 write a review button
  dropDownFunc(id) {
    document.getElementById(id).classList.toggle("show");
  }

  sort(){
    var theQuery = "";
    theQuery += (<HTMLSelectElement>document.getElementById("minRating")).value;
    theQuery += (<HTMLSelectElement>document.getElementById("toSort")).value;
    theQuery += (<HTMLSelectElement>document.getElementById("sortOrder")).value;
    theQuery += (<HTMLSelectElement>document.getElementById("bestSeller")).value;
    theQuery += (<HTMLSelectElement>document.getElementById("genre")).value;
    window.location.href = '/books/'+theQuery+'/' + this.perPage +'/1';
  }
  newPage(){
    window.location.href = "/books/"+this.query+"/"+this.perPage+"/"+(<HTMLSelectElement>document.getElementById("pageNumber")).value;
  }
  pageNumUpdate(){
    window.location.href = "/books/"+this.query+"/"+(<HTMLSelectElement>document.getElementById("booksPerPage")).value+"/1";
  }

  


}

