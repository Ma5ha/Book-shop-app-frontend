import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '@app/home/recommended-books/core/book';


interface list {
  name: string;
  id: number
}

@Injectable({
  providedIn: 'root'
})



export class ListService {

  constructor(private listClient: HttpClient) {

  }

  post(list_name: string): Observable<list> {
    return this.listClient.post<list>('http://localhost:3000/list', { list: { name: list_name } })
  }
  get(): Observable<list[]> {

    return this.listClient.get<list[]>('http://localhost:3000/list')
  }

  getListBooks(id: string): Observable<Book[]> {
    return this.listClient.get<Book[]>('http://localhost:3000/myLists', { params: { 'id': id } })

  }
  delete(id) {
    return this.listClient.delete(`http://localhost:3000/list/${id}`)

  }

  getList(id) {
    return this.listClient.get<Book[]>(`http://localhost:3000/list/${id}`,)
  }

}

