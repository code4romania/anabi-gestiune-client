import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss'],
})

export class DecisionComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'decision page';
  }
}
