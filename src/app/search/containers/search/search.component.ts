import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

import {
  DecisionsApiService,
  DecisionFilter,
  DecisionSummary,
  ErrorStrings,
  NotificationService
} from '@app/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public tableConfig: any;

  private decisionsLoaded$: Observable<boolean>;

  public searchForm = new FormGroup({
    filterKey: new FormControl(),
    filterValue: new FormControl('', [ Validators.required ]),
  });

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  results: DecisionSummary[];
  filter: DecisionFilter;

  constructor(
    private decisionsApiService: DecisionsApiService,
    private notificationService: NotificationService
  ) {
    this.filter = new DecisionFilter();
  }

  ngOnInit() {
    this.tableConfig = {
      displayedColumns: [
        'id',
        'fileNumber',
        'defendantName',
        'decisionNumber',
        'stage',
      ],
    };
    this.refresh();
    // this.search();
  }

  refresh() {
    // this.store.pipe(select(fromStore.getDecisionSearchLoaded()))
    //   .subscribe((aStorageSpaces) => {
    //     if (aStorageSpaces && aStorageSpaces.length > 0) {
    //       this.tableConfig.dataSource = new MatTableDataSource(aStorageSpaces);
    //       this.ngAfterViewInit();
    //     }
    //   });
  }

  public onSubmit() {
    this.decisionsApiService.search(this.filter)
      .subscribe(
        (aResult) => this.results = aResult,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_SEARCH_DECISIONS)
      );
  }
}
