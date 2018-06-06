import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

import { Store } from '@ngrx/store';
import * as fromStore from '../core/store';

import { Asset } from 'app/core';
import { AddAssetComponent } from './components/add-asset/add-asset.component';

@Component({
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})

export class AssetsComponent implements OnInit {
  public assets: Asset[];
  public tableConfig: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromStore.CoreState>
  ) {
  }

  ngOnInit() {
    this.tableConfig = {};

    this.tableConfig.displayedColumns = [
      'id',
      'name',
      'identifier',
      'categoryName',
      'subcategoryName',
      'stageName',
      'value',
    ];

    this.store.dispatch(new fromStore.LoadAssets());
    this.store.select(fromStore.getAllAssets)
      .subscribe((aAssets) => {
        if (aAssets && aAssets.length > 0) {
          this.tableConfig.dataSource = new MatTableDataSource(aAssets);
          this.tableConfig.dataSource.sort = this.sort;
          this.tableConfig.dataSource.paginator = this.paginator;
        }
      });
  }

  addAsset(): void {
    const addAssetDialog = this.dialog.open(AddAssetComponent, {
      panelClass: 'dialog-add',
    } as MatDialogConfig);

    addAssetDialog.afterClosed().subscribe(result => {

    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableConfig.dataSource.filter = filterValue;
  }

  onAssetClicked(aAsset: Asset) {
    console.warn('asset clicked', aAsset);
  }
}
