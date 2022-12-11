// Title: Assignment 6.2 - Output Properties
// Author: Prof Krasso
// Date: Nov 26 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=SxAsehrObQo&feature=youtu.be

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;
  constructor() {
    //new title
    this.assignment = 'Exercise 6.2 - Input/Output Properties';
  }
}
