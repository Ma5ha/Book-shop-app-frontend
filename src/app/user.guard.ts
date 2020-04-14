import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularTokenService } from 'angular-token'
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private angularTokenService: AngularTokenService, private router: Router) { }
  canActivate() {

    if (this.angularTokenService.userSignedIn()) {
      return true
    }
    else {
      this.router.navigateByUrl('/user/login')
    }


  }

}


