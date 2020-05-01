import { Injectable } from '@angular/core';
import { Book } from '@app/home/recommended-books/core';
import { BookService } from '@app/shared/service/book.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = []
  constructor() { }



}
