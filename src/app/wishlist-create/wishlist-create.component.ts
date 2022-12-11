// Title: Assignment 6.2 - Output Properties
// Author: Prof Krasso
// Date: Nov 26 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=SxAsehrObQo&feature=youtu.be

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//interface import
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  // output statement named addItemEmitter
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  // variable named item of type IWishlistItem
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  //object literal of type IWishlistItem
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    //item object set to empty object
    this.item = {} as IWishlistItem;
  }
}
