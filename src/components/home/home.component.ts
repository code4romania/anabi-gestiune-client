import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'home page';
  }
}
