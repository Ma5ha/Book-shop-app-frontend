import { Component } from '@angular/core';
import { AngularTokenService } from 'angular-token'
import { FlashmessageService } from '@app/shared/service/flashmessage.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private tokenService: AngularTokenService, private FlashMessage: FlashmessageService, private router: Router) { }

  sign(newUser) {
    this.tokenService.registerAccount({
      login: newUser.email,
      password: newUser.Password,
      passwordConfirmation: newUser.passwordConfirmation,
      name: newUser.name
    })

      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
    this.router.navigateByUrl("/user")
    this.thankYouFlash()
  }
  thankYouFlash(): void {
    this.FlashMessage.SetMessage({
      for: "Thank You",
      type: 'success',
      message: "Thank You for Sign up!"

    })
  }
}
