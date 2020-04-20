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
    return this.bookClient.get(environment.bookPath)

  }
}
