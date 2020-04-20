import { Component, OnInit } from '@angular/core';
import { Book } from './core'
import { BookService } from '@app/shared/service/book.service'
import { Observable, PartialObserver } from 'rxjs';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent {



  /* books: Book[] = [
     {
       title: "how to be a bw",
       author: "Lily Sigh",
       cover: "/assets/img1.jpg",
       price: 49,
 
     },
     {
       title: "how to be a bwase",
       author: "Lily Sigh",
       cover: "/assets/img1.jpg",
       price: 49,
 
     },
     {
       title: "how to be a bwase",
       author: "Lily Sigh",
       cover: "/assets/img1.jpg",
       price: 49,
 
     },
     {
       title: "how to be a bwase",
       author: "Lily Sigh",
       cover: "/assets/img1.jpg",
       price: 49,
 
     },]*/

  books: PartialObserver<any>

  constructor(private bookService: BookService) {



  }

  ngOnInit() {
    this.getTop5Books()

  }
  getTop5Books() {
    this.bookService.getTop5Books().subscribe(Books => this.books = Books)

  }

}

