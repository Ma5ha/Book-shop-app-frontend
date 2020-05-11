import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/shared/service/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  cart: any[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getBooksIbrought()
      .subscribe(x => this.cart = x)


  }




}
