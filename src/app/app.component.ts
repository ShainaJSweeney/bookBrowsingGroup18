import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookScript';
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  onCreatePost(postData: {title: string; content: string}) {
    this.http.post(
      'https://books-database-517ee-default-rtdb.firebaseio.com/post.json',
      postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
