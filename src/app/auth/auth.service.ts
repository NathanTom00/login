import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseKEY = 'AIzaSyBsjUPkNEYXiN0VWaE0Evz1tQ3qbL1HN6Q'
  signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKEY}`


  user ?: User
  constructor(private http: HttpClient) { }

  isLoggedIn(){
    return this.user? true : false;
  }

  signUp(email : string,pass : string){
    const body = {email : email, password : pass , returnSecureToken: true}
    return this.http.post(this.signupURL,body)
  }
  
}
