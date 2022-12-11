// Title: Assignment 8.2 - Server-side Communications
// Author: Professor Krasso
// Date: Dec 11 2022
// Modified: Detres
//Week-8 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw
//https://openlibrary.org/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // list populated from openlibrary books
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  // defines books array of IBook objects
  books: Array<IBook>;

  // populates the books array with openlibrary API
  constructor(private http: HttpClient) {}

  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
