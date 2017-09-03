import { Component, OnInit } from '@angular/core';

import { DecisionsHttp } from 'shared/http/decisions.http'

import { DecisionSummary } from 'shared/models/decisionSummary.model'

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DecisionsHttp]
})
export class SearchComponent implements OnInit {
  public page;
  results: DecisionSummary[];
  decisionsHttp: DecisionsHttp;

  constructor(decisionsHttp: DecisionsHttp) {
    this.decisionsHttp = decisionsHttp;
  }

  ngOnInit() {
    this.page = 'search page';
    this.decisionsHttp.search().subscribe(val => this.results = val);
  }
}
