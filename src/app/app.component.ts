import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'log-in';

  constructor(protected authService : AuthService, private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user')!)
      
      this.authService.createUser(user.email,user.id,user._token,new Date(user._expiredDate))
    }
  }

  onLogOut(){
    this.authService.logOut()
    this.router.navigate(['login'])
  }
}
