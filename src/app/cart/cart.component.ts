import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '@app/shared/service/cart.service'
import { Book } from '@app/home/recommended-books/core';
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
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
    if (!confirm('Are you sure, you want to buy items in your cart?')) return;
    this.cartService.buy()


  }
  increase(item) {

    item.inCart++

    this.cartService.priceUpdate()
  }

  decrease(item) {
    if (item.inCart <= 1) return
    item.inCart--
    this.cartService.priceUpdate()

  }

}
