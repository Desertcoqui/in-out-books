// Title: Assignment 8.2 - Server-side Communications
// Author: Professor Krasso
// Date: Dec 11 2022
// Modified: Detres
//Week-8 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw
//https://openlibrary.org/

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  // Books from open library arrays
  books: Array<IBook> = [];

  book: IBook | undefined;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //  get request from openlibrary API
    this.booksService.getBooks().subscribe((res) => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map((author) => {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'n/a',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  // onclick displays book-list.component.html
  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book, disableClose: true, width: '800px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirms') {
        this.book = null;
      }
    });
    console.log(this.book);
  }
}
