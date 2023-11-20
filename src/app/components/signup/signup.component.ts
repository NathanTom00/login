import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../login/login.component.css']
})
export class SignupComponent implements OnInit{
  formSignUp !: FormGroup

  constructor(private authService : AuthService, private router:Router){}

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required])
    })
  }

  onSubmit(){
    const email = this.formSignUp.value.email
    const password = this.formSignUp.value.password
    this.authService.signUp(email,password).subscribe(_ => {
      this.router.navigate(['login'])
    })
  }
}
