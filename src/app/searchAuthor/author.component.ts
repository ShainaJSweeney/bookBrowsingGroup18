import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})


export class AuthorComponent implements OnInit {

  authorsToDisplay: Object[];
  constructor(private theService: BookserviceService, private router: Router) { }
  selectedAuthor?: Object;
  review = false;
  url: String;
  pageNum: number;
  perPage: number;
  
  ngOnInit(): void {
    this.url = window.location.href.replace('http://localhost:4200/authors/','');
    this.perPage = Number(this.url.substring(0,this.url.indexOf('/')));
    this.pageNum = Number(this.url.substring(this.url.lastIndexOf('/')+1));
    
    this.theService.getAllAuthors().subscribe(authors =>{
      var numOnthisPage = authors.length - (this.pageNum -1)*this.perPage;
      if(numOnthisPage > this.perPage) this.authorsToDisplay = new Array(this.perPage);
      else this.authorsToDisplay = new Array(numOnthisPage);
      for(var i = (this.pageNum - 1)*this.perPage,j = 0; i < this.pageNum*this.perPage && i < authors.length;i++,j++){
        this.authorsToDisplay[j]=authors[i];
      }
      var pageSelect = <HTMLSelectElement>document.getElementById("pageNumber");
      for(var i = 1; i < (authors.length/this.perPage)+1; i++){
        var el = document.createElement("option");
        el.textContent = String(i);
        el.value = String(i);
        pageSelect.appendChild(el);
        if(this.pageNum === i){
          el.selected = true;
        }
      }
      var booksPerPageHTML =  (<HTMLSelectElement>document.getElementById("authorsPerPage"));
      for(var i = 0; i < booksPerPageHTML.length; i++){
        if((<HTMLOptionElement>booksPerPageHTML.item(i)).value === String(this.perPage)){
          (<HTMLOptionElement>booksPerPageHTML.item(i)).selected = true;
        }
      }

    });
    
  }  

 
  onSelect(author: any): void {
    location.href = '/authorDetails/'+ author.name.toString();
  }

  // freature-5 write a review button
  dropDownFunc(id) {
    document.getElementById(id).classList.toggle("show");
  }

  newPage(){
    window.location.href = "/authors/"+this.perPage+"/"+(<HTMLSelectElement>document.getElementById("pageNumber")).value;
  }
  pageNumUpdate(){
    window.location.href = "/authors/"+(<HTMLSelectElement>document.getElementById("authorsPerPage")).value+"/1";
  }

  


}

