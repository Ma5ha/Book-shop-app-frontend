import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';

import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Map<number, Book> = new Map<number, Book>()
  book: Subject<Book> = new Subject
  cartSize: Subject<number> = new Subject()
  constructor() {
    this.book.subscribe(book => this.cart.set(this.cart.size, book))

  }


  addBook(book?: Book): void {

    this.book.next(book)
    this.cartSize.next(this.cart.size)
  }


  removeBook(index: number): void {
    this.cart.delete(index)
    this.cartSize.next(this.cart.size)

  }
}
