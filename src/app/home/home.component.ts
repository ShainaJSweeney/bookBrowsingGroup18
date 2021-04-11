import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import{DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h1Style : boolean = true; 
  h2Style: boolean = true;
  h3Style: boolean = true;
  h4Style: boolean = true;
  h5Style: boolean = true; 
  h6Style: boolean = true;
  h7Style: boolean = true; 
  //backgroundStyle: boolean = true;
  Books: Object;
 
  constructor(private book: BookserviceService) { }
  
  // This method is a lifecycle hook that executes whatever is inside whenever webpage loads up. 
  
  ngOnInit(): void {
    this.book.getAllBooks().subscribe(book => {
      this.Books = book;
      console.log(this.Books);
    })

    
    /*
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
    */
  }

  
  firstClick(){
    this.book.firstClick();
  }
  
  
}
