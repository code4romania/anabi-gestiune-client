import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

import { StorageSpace, Address } from '@app/core';

@Component({
  selector: 'app-storage-spaces',
  templateUrl: './storage-spaces.component.html',
  styleUrls: ['./storage-spaces.component.scss']
})
export class StorageSpacesComponent implements OnInit, AfterViewInit {
  public tableConfig: any;

  private storageSpacesLoaded$: Observable<boolean>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromStore.CoreState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.storageSpacesLoaded$ = this.store.pipe(select(fromStore.getStorageSpacesLoaded));

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
    console.log('StorageSpacesComponent: refreshed');
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

  getAddress(address: Address): string {
    // variables
    let fullAddress: string = '';
    let street: string = '';
    let city: string = '';

    if (address.county) {
      city = address.county.name + ' ';
      fullAddress += city
    }
    if (address.street) {
      street = address.street;
      fullAddress += street;
    }
    return fullAddress;
  }


}
