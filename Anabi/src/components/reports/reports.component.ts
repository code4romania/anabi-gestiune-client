import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'reports page';
  }
}
