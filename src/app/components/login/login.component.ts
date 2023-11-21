import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogIn : FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor (private authService : AuthService, private router: Router) {}

  onSubmit(){
    const email = this.formLogIn.value.email
    const password = this.formLogIn.value.password
    this.authService.logIn(email,password).subscribe((data:any) => {
      //in data abbiamo email, idToken, localId e expiresIn (expiresIn è un intero che indica in quanti SECONDI scade)
      const dataEmail = data.email
      const dataID = data.localId
      const dataToken = data.idToken
      //ricordamo che abbiamo expiredIn in SECONDI, mentre new Date().getTime() è in MILLISECONDI
      const dataExpiredDate = new Date(new Date().getTime() + (data.expiresIn*1000 ))

      this.authService.createUser(dataEmail,dataID,dataToken,dataExpiredDate)
      this.router.navigate([''])
    })
  }


}
