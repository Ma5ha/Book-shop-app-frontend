import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/shared/service/cart.service';
import { Book } from '@app/home/recommended-books/core/book';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myBooks: Book[] = this.cartService.myBooks

  constructor(private cartService: CartService) { }

  ngOnInit(): void {


    this.cartService.getBooksIbrought()
    this.myBooks = this.cartService.myBooks

  }

  my() {
    return this.cartService.getBooksIbrought()


  }


}
