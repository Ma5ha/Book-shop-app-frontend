import { Component } from '@angular/core';
import { Book } from './core'
@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent {


  books: Book[] = [
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

    },]


}

