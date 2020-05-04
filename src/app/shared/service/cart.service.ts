import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';

import { Subject } from 'rxjs';
import { v4 as hashString } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Map<string, Book> = new Map<string, Book>()
  book: Subject<Book> = new Subject
  cartSize: Subject<number> = new Subject()
  constructor() {
    this.book.subscribe(book => this.cart.set(hashString(), book))

  }


  addBook(book?: Book): void {

    this.book.next(book)
    this.cartSize.next(this.cart.size)

  }


  removeBook(index: string): void {
    this.cart.delete(index)
    this.cartSize.next(this.cart.size)

  }
}
