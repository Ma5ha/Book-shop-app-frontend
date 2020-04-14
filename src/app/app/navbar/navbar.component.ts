import { Component } from '@angular/core';
import { navbarItem } from './index'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  navbarItems: navbarItem[] = [
    { routeLink: '', routeName: "Home" },
    { routeLink: '/about', routeName: "About" },
    { routeLink: '/user', routeName: "User" },


  ]





}
