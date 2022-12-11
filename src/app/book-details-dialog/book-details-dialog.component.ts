// Title: Assignment 5.4 dialog
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
//https://stackoverflow.com/questions/47848778/parameter-implicitly-has-an-any-type

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}
