import { Component, OnInit, } from '@angular/core';
import { AngularTokenService } from 'angular-token'
import { FlashmessageService } from '@app/shared/service/flashmessage.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private tokenService: AngularTokenService, private FlashMessage: FlashmessageService, private router: Router) { }




  login(user) {
    this.tokenService.signIn({
      login: user.email,
      password: user.password
    })
    this.router.navigateByUrl("/user")
    this.welcomeFlash()

  }

  welcomeFlash(): void {
    this.FlashMessage.SetMessage({
      for: "Welcome Back",
      type: 'success',
      message: "Welcome Back!"

    })
  }

  component: string = "LoginComponent"

}



