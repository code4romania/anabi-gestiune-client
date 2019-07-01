import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

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
    {name: 'Numar decizie', value: FilterKeys.DECISIONNUMBER},
    {name: 'Numar dosar', value: FilterKeys.FILENUMBER},
    {name: 'CNP/CUI Inculpat', value: FilterKeys.PERSONID},
    {name: 'Nume Inculpat', value: FilterKeys.PERSONNAME},
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  filter: DecisionFilter;

  constructor(private decisionsApiService: DecisionsApiService,
              private notificationService: NotificationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // Table configuration
    this.tableConfig = {
      displayedColumns: [
        'id',
        'fileNumber',
        'defendantName',
        'decisionNumber',
        'stage',
        'buttons',
      ],
    };

    // Querry parameters
    const aFilter = new DecisionFilter();
    const theParams = this.route.snapshot.params;
    const theParamValues = Object.keys(theParams);

    if (theParamValues && theParamValues.length > 0) {
      const theFilter = Object.assign(aFilter, theParams);
      this.search(theFilter);
    };
  }

  ngAfterViewInit() {
    if (this.tableConfig.dataSource) {
      this.tableConfig.dataSource.sort = this.sort;
      this.tableConfig.dataSource.paginator = this.paginator;
    }
  }

  public onSubmit() {
    const aFilter = new DecisionFilter();
    aFilter.getFormValues(this.searchForm.value);
    const theFilter = aFilter;

    const theFilterKey = this.searchForm.value.filterKey;
    const theFilterValue = this.searchForm.value.filterValue;

    this.router.navigate(['search/asset', { [theFilterKey]: theFilterValue } ]);

    this.search(theFilter);
  }

  private search(filter) {
    this.decisionsApiService.search(filter)
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

  public viewAsset(aDecisionSumarry: DecisionSummary) {
    this.router.navigate(['/assets/detail', aDecisionSumarry.assetId]);
  }

  public editAsset(aDecisionSumarry: DecisionSummary) {
    alert('This should edit something');
  }
}
