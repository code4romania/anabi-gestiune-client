import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-storage-spaces',
  templateUrl: './storage-spaces.component.html',
  styleUrls: ['./storage-spaces.component.scss'],
})
export class StorageSpacesComponent implements OnInit, AfterViewInit {
  public tableConfig: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<fromStore.StorageSpaceState>
  ) {
  }

  ngOnInit() {
    this.tableConfig = {
      displayedColumns: [
        'id',
        'name',
        'type',
        'address',
      ],
    };

    this.refresh();
  }

  ngAfterViewInit() {
    if (this.tableConfig.dataSource) {
      this.tableConfig.dataSource.sort = this.sort;
      this.tableConfig.dataSource.paginator = this.paginator;
    }
  }

  refresh() {
    this.store.pipe(select(fromStore.getAllStorageSpaces))
      .subscribe((aStorageSpaces) => {
        if (aStorageSpaces && aStorageSpaces.length > 0) {
          this.tableConfig.dataSource = new MatTableDataSource(aStorageSpaces);
          this.ngAfterViewInit();
        }
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableConfig.dataSource.filter = filterValue;
  }
}
