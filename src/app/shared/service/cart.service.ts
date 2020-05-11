import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { v4 as hashString } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Map<string, Book> = new Map<string, Book>()
  book: Subject<Book> = new Subject
  cartSize: Subject<number> = new Subject()
  totalCartPrice = 0


  constructor(private cartClient: HttpClient) {
    this.book.subscribe(book => this.cart.set(hashString(), book))
    this.book.subscribe(book => this.totalCartPrice += book.price)

  }


  addBook(book?: Book): void {

    this.book.next(book)
    this.cartSize.next(this.cart.size)



  }


  removeBook(index: string): void {
    this.cart.delete(index)
    this.cartSize.next(this.cart.size)


  }
  getBooksIbrought() {
    return this.cartClient.get<[]>('http://localhost:3000/mycart')

  }
  buy() {
    return this.cartClient.post<any>('http://localhost:3000/cart', { book_id: 5 })
  }
}
