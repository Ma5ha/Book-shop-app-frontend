import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token'
import { FlashmessageService } from '@app/shared/service/flashmessage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private tokenService: AngularTokenService, public FlashMessage: FlashmessageService) { }




  login(user) {
    this.tokenService.signIn({
      login: user.email,
      password: user.password

    })

  }



  component: string = "LoginComponent"

}



