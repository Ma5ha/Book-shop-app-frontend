import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from, Observable } from 'rxjs';
import { v4 as hashString } from 'uuid';




@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Map<string, Book> = new Map<string, Book>()
  book: Subject<Book> = new Subject
  cartSize: Subject<number> = new Subject()
  totalCartPrice = 0
  myBooks: Book[] = []

  constructor(private cartClient: HttpClient) {
    this.book.subscribe(book => this.cart.set(hashString(), book))
    this.book.subscribe(book => this.totalCartPrice += book.price)
    //this.getBooksIbrought()

    console.log(this.myBooks)
  }


  addBook(book?: Book): void {

    this.book.next(book)
    this.cartSize.next(this.cart.size)



  }


  removeBook(index: string): void {
    this.cart.delete(index)
    this.cartSize.next(this.cart.size)


  }
  getBooksIbrought(): void {
    this.myBooks = []
    this.cartClient.get<Book[]>('http://localhost:3000/mycart').subscribe(x => from(x).subscribe(x => this.myBooks.push(x)))



  }
  buy(): void {
    this.cart.forEach(book => this.postRequest(book).subscribe())
    this.cart.forEach(book => this.myBooks.push(book))

  }

  private cartItterator(): Book[] {
    let arrayForObservabele: Book[] = []
    this.cart.forEach(book => arrayForObservabele.push(book))
    return arrayForObservabele

  }


  private postRequest(book?: Book): Observable<Book> {
    return this.cartClient.post<Book>('http://localhost:3000/cart', { book_id: book.id })

  }

}
