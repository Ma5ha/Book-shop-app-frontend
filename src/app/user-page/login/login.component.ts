import { Component } from '@angular/core';
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private tokenService: AngularTokenService) { }


  login(user) {
    this.tokenService.signIn({
      login: user.email,
      password: user.name

    })
  }
}
