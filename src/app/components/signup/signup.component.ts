import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../login/login.component.css']
})
export class SignupComponent implements OnInit{
  formSignUp !: FormGroup

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
  }
}
