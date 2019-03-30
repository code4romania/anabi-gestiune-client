import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LoadInstitutions } from '@app/core/store';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss', '../assets/containers/assets/assets.component.scss'],
})
export class InstitutionsComponent implements OnInit, AfterViewInit, OnDestroy {
  public tableConfig: any;
  private storeSubscription: Subscription;
  public institutionsLoaded$: Observable<boolean>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<fromStore.CoreState>) { }

  ngOnInit() {
    this.institutionsLoaded$ = this.store.pipe(select(fromStore.getInstitutionsLoaded))
      .pipe(
        tap(b => {
          if (!b) {
            this.store.dispatch(new LoadInstitutions())
          }
        })
      );

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
