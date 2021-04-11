import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// code defintions that are accesible to multiple components in one location/file. 
export class DataService {

  // putting this in for the instance of it to use http.
  constructor(private http: HttpClient) { 
  }


  /*
  // this gets data from an api
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
*/
  firstClick(){
    console.log('I was clicked');
  }
}
