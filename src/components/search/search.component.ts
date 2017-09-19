import { Component, OnInit } from '@angular/core';

import { DecisionsHttp } from 'shared/http/decisions.http'

import { DecisionSummary } from 'shared/models/decisionSummary.model';
import { DecisionFilter } from 'shared/models/search/decisionFilter.model';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DecisionsHttp]
})
export class SearchComponent implements OnInit {
  public page;
  results: DecisionSummary[];
  decisionsHttp: DecisionsHttp;
  filter: DecisionFilter;

  constructor(decisionsHttp: DecisionsHttp) {
    this.decisionsHttp = decisionsHttp;
    this.filter = new DecisionFilter();
  }

  ngOnInit() {
    this.page = 'search page';
    this.search();
  }

  public search() {
    this.decisionsHttp.search(this.filter).subscribe(val => this.results = val);
  }
}
