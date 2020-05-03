import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';

import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = []
  book: Subject<Book> = new Subject

  constructor() {
    this.book.subscribe(book => this.cart.push(book))

  }


  addBook(book?: Book) {

    this.book.next(book)
    console.log(this.cart)
  }


}
