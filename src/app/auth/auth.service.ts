import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseKEY = 'AIzaSyBsjUPkNEYXiN0VWaE0Evz1tQ3qbL1HN6Q'
  signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKEY}`
  loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseKEY}`

  user ?: User
  constructor(private http: HttpClient) { }

  isLoggedIn(){
    return this.user? true : false;
  }

  signUp(email : string,pass : string){
    const body = {email : email, password : pass , returnSecureToken: true}
    return this.http.post(this.signupURL,body)
  }

  logIn(email : string, pass : string){
    const body = {email: email, password : pass, returnSecureToken: true}
    return this.http.post(this.loginURL,body)
  }
  
  /**
   * Metodo che serve una volta fatto il log in:
   * Istanzio l'user e salvo nel localStore lo user 
   * (qui possiamo avere il login persistente nel tempo)
   */
  createUser(email : string ,id : string, token : string, expiredDate : Date ){
    this.user = new User(email,id,token,expiredDate)

    //Salvo lo user nel localStorage e visto che è un oggetto utilizzo JSON.stringify()
    localStorage.setItem('user' , JSON.stringify(this.user))
  }

  logOut(){
    this.user = undefined;
    localStorage.removeItem('user')
  }

}
