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

export enum FilterKeys {
  DECISIONNUMBER = 'decisionNumber',
  FILENUMBER = 'fileNumber',
  PERSONID = 'personId',
  PERSONNAME = 'personName',
}

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  public tableConfig: any;

  private decisionsLoaded$: Observable<boolean>;

  public searchForm = new FormGroup({
    filterKey: new FormControl(),
    filterValue: new FormControl(),
  });

  filterProperties = [
    { name: 'Numar decizie', value: FilterKeys.DECISIONNUMBER },
    { name: 'Numar dosar', value: FilterKeys.FILENUMBER },
    { name: 'CNP/CUI Inculpat', value: FilterKeys.PERSONID },
    { name: 'Nume Inculpat', value: FilterKeys.PERSONNAME },
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
  }

  ngAfterViewInit() {
    if (this.tableConfig.dataSource) {
      this.tableConfig.dataSource.sort = this.sort;
      this.tableConfig.dataSource.paginator = this.paginator;
    }
  }

  public onSubmit() {
    this.filter.getFormValues(this.searchForm.value);
    this.decisionsApiService.search(this.filter)
      .subscribe(
        (aResult: DecisionSummary[]) => {
          if (aResult && aResult.length > 0) {
            this.tableConfig.dataSource = new MatTableDataSource(aResult);
            this.ngAfterViewInit();
          }
        },
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_SEARCH_DECISIONS)
      );
  }
}
