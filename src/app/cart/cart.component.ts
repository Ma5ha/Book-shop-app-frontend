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

  myCart = this.cartService.myCart

  constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.myCart)

  }
  anime: string

  removeBookFromCart(index: string): void {
    this.anime = index

    setTimeout(() => {
      this.cartService.removeBook(index)
    }, 1000)
  }
  buy() {
    this.cartService.buy()


  }

}
