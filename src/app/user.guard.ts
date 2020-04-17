import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularTokenService } from 'angular-token'
import { FlashmessageService } from '@app/shared/service/flashmessage.service'
import { LoginComponent } from './user-page/login/login.component';
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
      this.Flash.SetMessage({
        for: "LoginComponent",
        type: "info",
        message: "Please login if u have account or Sign up!"
      })
      this.router.navigateByUrl('/user/login')


    }


  }

}


