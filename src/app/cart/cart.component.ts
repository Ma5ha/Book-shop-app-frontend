import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '@app/shared/service/cart.service'
import { Book } from '@app/home/recommended-books/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart: Map<string, Book>
  constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
  }

  removeBookFromCart(index: string): void {

    this.cartService.removeBook(index)
  }

}
