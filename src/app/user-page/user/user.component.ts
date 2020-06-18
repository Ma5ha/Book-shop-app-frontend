import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/shared/service/cart.service';

import { myBooks } from '@app/core/myBooks';


import { ListService } from '@app/shared/list.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  active: string | number
  myBooks: myBooks = this.cartService.myBooks
  activeList
  list: string

  myLists = []
  constructor(private cartService: CartService, private listService: ListService) { }

  ngOnInit(): void {

    this.broughtBooks()

    this.listService.get().subscribe(x => { this.myLists = x; })




  }

  broughtBooks(): void {
    this.cartService.getBooksIbrought()
    this.active = 'myBooks'
    this.activeList = this.myBooks.items
  }

  toggle(activate: string | number) {
    this.active = activate
    let param = activate.toString()


    // this.listService.getListBooks(param).subscribe(x => this.activeList = x)
    this.listService.getList(param).subscribe(x => {
      this.activeList = x


      console.log(this.activeList)
    })


  }

  createList(): void {
    this.listService.post(this.list).subscribe(list => this.myLists.push(list))
    this.list = ''
  }
  getMylist(): void {
    this.listService.get().subscribe(lists => this.myLists = lists)
  }
  deleteList(id) {
    let param = id
    this.listService.delete(param).subscribe(() => this.getMylist())
    console.log(id)
  }

}
