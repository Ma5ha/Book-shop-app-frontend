import { Component, OnInit, OnChanges } from '@angular/core';
import { BookService } from '@app/shared/service/book.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '@app/shared/service/cart.service'
import { Book } from '@app/home/recommended-books/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  constructor(private bookService: BookService, private route: ActivatedRoute, private cartService: CartService
  ) { }

  book

  ngOnInit(): void {

    this.route.params.subscribe(x => this.getBook(x.id))

  }
  private getBook(param: string) {

    this.bookService.getBook(param).subscribe(x => this.book = x)
  }

  ngOnChanges() {

  }
  addBookToCart() {
    let book: Book = this.book
    this.cartService.cart.push(book)


  }

}


