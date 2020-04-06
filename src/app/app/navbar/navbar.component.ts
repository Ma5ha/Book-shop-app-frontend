import { Component, OnInit, } from '@angular/core';
import { navbarItem } from './index'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navbarItems: navbarItem[] = [
    { routeLink: 'home', routeName: "Home" },
    { routeLink: 'about', routeName: "About" },


  ]


  constructor() { }

  ngOnInit(): void {
  }

}
