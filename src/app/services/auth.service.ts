import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/users/register', user, {headers: headers})
      .pipe(map((res) => res));
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/users/authenticate', user, {headers: headers})
      .pipe(map((res) => res));
  }

  updateUser(user){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authToken
});
    return this.http.put('http://localhost:8000/users/profile', {headers: headers})
      .pipe(map((res) => res));
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authToken
});
    return this.http.get('http://localhost:8000/users/profile', {headers: headers})
      .pipe(map((res) => res));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
