import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  //variable named items type of Array<IWishlistItem assigned to empty Array

  items: Array<IWishlistItem> = [];
  constructor() {}

  ngOnInit(): void {}

  //function that pushes author and title to empty array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
