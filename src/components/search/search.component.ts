import { Component, OnInit } from '@angular/core';

import { ErrorStrings } from '../../core/error-strings';
import { NotificationService } from '../../core/services/notification.service';

import { DecisionsHttp } from 'shared/http/decisions.http'
import { DecisionSummary } from 'shared/models/decisionSummary.model';
import { DecisionFilter } from 'shared/models/search/decisionFilter.model';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DecisionsHttp],
})
export class SearchComponent implements OnInit {
  public page;
  results: DecisionSummary[];
  filter: DecisionFilter;

  constructor(
    private decisionsHttp: DecisionsHttp,
    private notificationService: NotificationService
  ) {
    this.decisionsHttp = decisionsHttp;
    this.filter = new DecisionFilter();
  }

  ngOnInit() {
    this.page = 'search page';
    this.search();
  }

  public search() {
    this.decisionsHttp.search(this.filter)
      .subscribe(
        (aResult) => this.results = aResult,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_SEARCH_DECISIONS)
      );
  }
}
