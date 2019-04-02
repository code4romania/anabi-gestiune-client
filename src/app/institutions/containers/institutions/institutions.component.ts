import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit, AfterViewInit, OnDestroy {
  public tableConfig: any;
  private storeSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<fromStore.CoreState>) { }

  ngOnInit() {
    this.tableConfig = {
      displayedColumns: [
        'id',
        'name',
        'contactData',
      ],
    };

    this.refresh();
  }

  ngAfterViewInit(): void {
    if (this.tableConfig.dataSource) {
      this.tableConfig.dataSource.sort = this.sort;
      this.tableConfig.dataSource.paginator = this.paginator;
    }
  }

  refresh() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }

    this.storeSubscription = this.store.pipe(select(fromStore.getAllInstitutions))
      .subscribe((aInstitutions) => {
        if (aInstitutions && aInstitutions.length > 0) {
          this.tableConfig.dataSource = new MatTableDataSource(aInstitutions);
          this.ngAfterViewInit();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
