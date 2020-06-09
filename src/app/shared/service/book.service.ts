import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Book } from '@app/home/recommended-books/core';
@Injectable({
  providedIn: 'root'
})


export class BookService {

  constructor(private bookClient: HttpClient) {

  }
  getTop5Books(): Observable<any> {
    return this.bookClient.get('http://localhost:3000/top5Books')

  }
  getAllBooks(): Observable<Book[]> {
    return this.bookClient.get<Book[]>('http://localhost:3000/books')
  }


  getBook(id: string) {
    return this.bookClient.get('http://localhost:3000/book', {
      params: { id: id }
    })
  }
}
