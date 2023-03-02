import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBook(isbn: string) {
    return this.http.get(
      `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    );
  }
}
