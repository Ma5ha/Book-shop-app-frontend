import { Injectable } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { BookService } from '@app/shared/service/book.service'
import { Observable, Subject } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = []
  itemsInCart = new Subject<number>()

  constructor() { }

  itemsCount(book?: Book) {
    this.cart.push(book)
    this.itemsInCart.next(this.cart.length)
  }


}
