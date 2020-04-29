import { Component, OnInit } from '@angular/core';
import { navbarItem } from './index'
import { AngularTokenService } from 'angular-token'
import { Observable, PartialObserver } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map, pluck

} from 'rxjs/operators';
import { Book } from '@app/home/recommended-books/core'
import { BookService } from '@app/shared/service/book.service'




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

  public model: any;



  constructor(private AngularTokenService: AngularTokenService, private bookService: BookService) {

  }
  ngOnInit() {
    this.bookService.getTop5Books().subscribe(x => this.books = x)


  }

  get isSignedIn(): boolean {
    return this.AngularTokenService.userSignedIn()
  }


  signOut() {
    this.AngularTokenService.signOut().subscribe()
  }


  books: Book[]


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.books.filter(v => v.title.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { title: string }) => x.title;



}
