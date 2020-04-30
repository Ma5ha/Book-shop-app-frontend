import { Component, OnInit, OnChanges } from '@angular/core';
import { BookService } from '@app/shared/service/book.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  constructor(private bookService: BookService, private route: ActivatedRoute,
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

}


