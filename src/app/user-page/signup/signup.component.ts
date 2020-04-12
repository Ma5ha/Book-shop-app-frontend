import { Component } from '@angular/core';
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private tokenService: AngularTokenService) { }

  sign(newUser) {
    this.tokenService.registerAccount({
      login: newUser.email,
      password: newUser.password,
      passwordConfirmation: newUser.passwordConfirmation,
      name: newUser.name
    })
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );


  }
}
