/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Book {
  name: string
}

export interface Author {
  name: string
}
export interface Review {
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  constructor(private http: HttpClient) { }
  newname: string;

  setId(name: string){
    this.newname = name;
 }

 getId(){
    return this.newname;
 }



  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/ALL')
  }

  getBook(name: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:8000/book/' + name)
  }
  getAuthor(name: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:8000/author/' + name)
  }

  getReview(name: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:8000/review/' + name)   //this will get the reviews name from the review collection.
  }

  searchBook(name: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:8000/search/' + name)
  }

  insertBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:8000/api/books/', book)
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/books/' + book.name,
      book
    )
  }

  deleteBook(name: string) {
    return this.http.delete('http://localhost:8000/api/books/' + name)
  }

  firstClick(){
  console.log('I was clicked');
  }

}
