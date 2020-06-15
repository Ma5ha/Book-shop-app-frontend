import { Component, OnInit, OnChanges } from '@angular/core';
import { BookService } from '@app/shared/service/book.service'
import { ActivatedRoute, } from '@angular/router';
import { CartService } from '@app/shared/service/cart.service'
import { Book } from '@app/home/recommended-books/core';
import { NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { ListModalComponent } from '@app/list-modal/list-modal.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private modalService: NgbModal
  ) {

  }

  book

  ngOnInit(): void {
    this.route.params.subscribe(x => this.getBook(x.id))




  }
  private getBook(param: string) {

    this.bookService.getBook(param).subscribe(x => this.book = x)
  }


  addBookToCart() {
    let book: Book = this.book
    this.cartService.addBook(book)



  }
  buy() {
    this.cartService.addBook(this.book)
    this.cartService.buy()


  }
  addToList() {
    const modalRef = this.modalService.open(ListModalComponent);

  }

}


