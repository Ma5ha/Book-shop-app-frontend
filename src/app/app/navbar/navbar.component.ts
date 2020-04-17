import { Component, OnInit } from '@angular/core';
import { navbarItem } from './index'
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navbarItems: navbarItem[] = [
    { routeLink: '', routeName: "Home" },
    { routeLink: '/about', routeName: "About" },
    { routeLink: '/user', routeName: "User" },


  ]

  constructor(private AngularTokenService: AngularTokenService) {

  }
  ngOnInit() {


  }

  get isSignedIn(): boolean {
    return this.AngularTokenService.userSignedIn()
  }


  signOut() {
    this.AngularTokenService.signOut().subscribe()
  }




}
