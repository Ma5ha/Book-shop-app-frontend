import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/shared/service/cart.service';

import { myBooks } from '@app/core/myBooks';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  active: string = ''
  myBooks: myBooks = this.cartService.myBooks

  constructor(private cartService: CartService) { }

  ngOnInit(): void {


    this.cartService.getBooksIbrought()



  }


  toggle(activate: string) {
    this.active = activate

  }

}
