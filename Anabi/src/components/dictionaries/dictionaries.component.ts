import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.css']
})

export class DictionariesComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'dictionaries page';
  }
}
