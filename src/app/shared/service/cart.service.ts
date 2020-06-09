import { Injectable } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { HttpClient } from '@angular/common/http';

import { v4 as hashString } from 'uuid';
import { myCart } from '@app/core/myCart';
import { myBooks } from '@app/core/myBooks';





@Injectable({
  providedIn: 'root'
})
export class CartService {



  myBooks: myBooks = {
    items: []
  }
  myCart: myCart = {
    items: new Map<string, cartItem>(),
    size: 0,
    price: 0
  }

  constructor(private cartClient: HttpClient) {

    //this.getBooksIbrought()

    console.log(this.myBooks)
  }


  addBook(book?: Book): void {


    let cartItem = this.warpItem(book)


    if (this.isInCart(cartItem)) {


      this.updateItem(cartItem)
    } else {

      this.myCart.items.set(hashString(), cartItem)
      this.priceUpdate()
      this.sizeUpdate()
    }




  }


  removeBook(index: string): void {


    this.myCart.items.delete(index)

    this.priceUpdate()
    this.sizeUpdate()

  }
  private sizeUpdate() {
    this.myCart.size = this.myCart.items.size
  }

  priceUpdate(): void {
    this.myCart.price = 0
    this.myCart.items.forEach(cartItem => this.myCart.price = this.myCart.price + cartItem.item.price * cartItem.inCart)
    console.log(this.myCart.price)
  }
  getBooksIbrought(): void {

    this.cartClient.get<Book[]>('http://localhost:3000/mycart').subscribe(x => this.myBooks.items = x)


  }
  buy(): void {
    // this.cart.forEach(book => this.postRequest(book).subscribe())
    //this.cart.forEach(book => this.myBooks.push(book))
    this.cartItterator()
    this.myCart.items.clear()
    this.priceUpdate()
    this.sizeUpdate()
  }

  private cartItterator() {
    let array = []
    this.myCart.items.forEach(book => array.push({ book_id: book.id }))
    this.myCart.items.forEach(book => this.myBooks.items.push(book))
    this.postRequest(array)


  }


  private postRequest(book?: any[]): void {

    this.cartClient.post<Book>('http://localhost:3000/cart', { cart: book }).subscribe(x => console.log(x))

  }

  private warpItem(book: Book): cartItem {

    return {
      item: book,
      inCart: 1
    }
  }

  private isInCart(cartItem: cartItem) {
    let arrayCart = []
    this.myCart.items.forEach(element => arrayCart.push(element))

    return arrayCart.some(element => element.item === cartItem.item)

  }
  private updateItem(cartItem?) {
    this.myCart.items.forEach(cartI => {

      if (cartI.item === cartItem.item) { cartI.inCart++ }
      console.log(cartI.inCart)
      this.priceUpdate()
      this.sizeUpdate()
    })


  }


}


export interface cartItem {
  item: Book
  inCart: number
}