import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'search page';
  }
}
