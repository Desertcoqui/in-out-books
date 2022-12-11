// Title: Assignment 5.3 Data Tables
// Author: Prof Krasso
// Date: Nov 18 2022
// Modified: Detres
//Week-5 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
// https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink
//https://youtu.be/d6gJLs3ZZII
//https://stackoverflow.com/questions/74114391/npm-install-err-code-eresolve-while-resolving-angular-user-idle3-0-0

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // array of IBook objects
  books: Array<IBook>;

  //the books array
  constructor() {
    this.books = [
      {
        isbn: '8484848484',
        title: 'The Hamster',
        description: 'Childrens book on hamsters',
        numOfPages: 25,
        authors: ['Tim Lockheed'],
      },
      {
        isbn: '8383838383',
        title: 'Jack in the night',
        description: 'Adult book on jack rabbits',
        numOfPages: 300,
        authors: ['Jim Bartledoo'],
      },
      {
        isbn: '8181818181',
        title: 'Hide and Seek',
        description: 'Horror story of epic proportions',
        numOfPages: 600,
        authors: ['Mikahster Vonheausn'],
      },
      {
        isbn: '8787878787',
        title: 'Big tree deep',
        description: 'The story of a blind man who gets his eye site back',
        numOfPages: 84,
        authors: ['Binkle Tomhpon'],
      },
      {
        isbn: '9292929292',
        title: 'Read a book',
        description: 'Stroy of a turtle who can read books',
        numOfPages: 10,
        authors: ['Tammer Knowles'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
