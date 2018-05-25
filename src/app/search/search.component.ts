import { Component, OnInit } from '@angular/core';

import {
  DecisionsApiService,
  DecisionFilter,
  DecisionSummary,
  ErrorStrings,
  NotificationService
} from 'app/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public page;
  results: DecisionSummary[];
  filter: DecisionFilter;

  constructor(
    private decisionsApiService: DecisionsApiService,
    private notificationService: NotificationService
  ) {
    this.filter = new DecisionFilter();
  }

  ngOnInit() {
    this.page = 'search page';
    this.search();
  }

  public search() {
    this.decisionsApiService.search(this.filter)
      .subscribe(
        (aResult) => this.results = aResult,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_SEARCH_DECISIONS)
      );
  }
}
