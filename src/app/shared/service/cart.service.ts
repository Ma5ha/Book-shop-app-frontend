import { Injectable, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from, Observable } from 'rxjs';
import { v4 as hashString } from 'uuid';




@Injectable({
  providedIn: 'root'
})
export class CartService {



  myBooks = {
    items: []
  }
  myCart = {
    items: new Map<string, Book>(),
    size: 0,
    price: 0
  }

  constructor(private cartClient: HttpClient) {

    //this.getBooksIbrought()

    console.log(this.myBooks)
  }


  addBook(book?: Book): void {



    this.myCart.items.set(hashString(), book)

    this.priceUpdate()
    this.sizeUpdate()
  }


  removeBook(index: string): void {


    this.myCart.items.delete(index)

    this.priceUpdate()
    this.sizeUpdate()

  }
  private sizeUpdate() {
    this.myCart.size = this.myCart.items.size
  }

  private priceUpdate(): void {
    this.myCart.price = 0
    this.myCart.items.forEach(book => this.myCart.price = this.myCart.price + book.price)
  }
  getBooksIbrought(): void {

    this.cartClient.get<Book[]>('http://localhost:3000/mycart').subscribe(x => this.myBooks.items = x)


  }
  buy(): void {
    // this.cart.forEach(book => this.postRequest(book).subscribe())
    //this.cart.forEach(book => this.myBooks.push(book))
    this.cartItterator()
  }

  private cartItterator() {
    this.myCart.items.forEach(book => this.postRequest(book))
    this.myCart.items.forEach(book => this.myBooks.items.push(book))
    this.myCart.items.clear()
    this.priceUpdate()
  }


  private postRequest(book?: Book): void {

    this.cartClient.post<Book>('http://localhost:3000/cart', { book_id: book.id }).subscribe()

  }

}
