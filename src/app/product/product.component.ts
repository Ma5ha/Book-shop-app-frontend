import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/shared/service/book.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute,
    private router: Router) { }

  book

  ngOnInit(): void {
    this.getMeBook()

  }
  private getBook(param: string) {

    this.bookService.getBook(param).subscribe(x => this.book = x)
  }
  getMeBook() {
    let id = this.route.snapshot.paramMap.get('id')
    this.getBook(id)




  }
}


