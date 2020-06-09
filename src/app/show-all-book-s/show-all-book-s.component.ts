import { Component, OnInit } from '@angular/core';
import { Book } from '@app/home/recommended-books/core/book';
import { BookService } from '@app/shared/service/book.service';

@Component({
  selector: 'app-show-all-book-s',
  templateUrl: './show-all-book-s.component.html',
  styleUrls: ['./show-all-book-s.component.css']
})
export class ShowAllBookSComponent implements OnInit {

  books: Book[]

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(bookArray => this.books = bookArray)
  }

}
