import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { LoginCredential } from '../models/loginCredential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASEURL = `https://dummyjson.com/auth/login`;

  constructor(private http: HttpClient) { }

  login(input: LoginCredential):Observable<User>{
    return this.http.post<User>(this.BASEURL,input);
  }

  setToken(token: string){
    localStorage.setItem('token',token);
  }

  getToken():string{
    let token = localStorage.getItem('token');
    return token!;
  }

  isLoggedIn():boolean{
    return this.getToken() != null;
  }
}
