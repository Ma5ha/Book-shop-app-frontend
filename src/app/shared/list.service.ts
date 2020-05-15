import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


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
    return this.listClient.post<list>('localhost/3000/list', { list: { name: list_name } })
  }
  get(): Observable<list[]> {

    return this.listClient.get<list[]>('localhost/3000/list')
  }
}

