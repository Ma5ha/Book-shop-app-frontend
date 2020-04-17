import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularTokenService } from 'angular-token'
import { FlashmessageService } from '@app/shared/service/flashmessage.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private angularTokenService: AngularTokenService, private router: Router, private Flash: FlashmessageService) { }
  canActivate() {

    if (this.angularTokenService.userSignedIn()) {
      return true
    }
    else {
      this.router.navigateByUrl('/user/login')
      this.Flash.SetMessage({
        for: "LoginComponent",
        type: "info",
        message: "Please login if u have account or Sign up!"
      })

      console.log(this.Flash.flashToken)

    }


  }

}


