import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

import { Asset, AssetsApiService, ErrorStrings, NotificationService } from 'core';
import { AssetsAddComponent } from './assets-add.component';

@Component({
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
})

export class AssetsListComponent implements OnInit {
  public assets: Asset[];
  public tableConfig: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private assetsApiService: AssetsApiService,
    private notificationService: NotificationService
  ) {
  }

  addAsset(): void {
    const addAssetDialog = this.dialog.open(AssetsAddComponent, {
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

  ngOnInit() {
    this.tableConfig = {};

    this.tableConfig.displayedColumns = [
      'assetId',
      'assetName',
      'assetIdentifier',
      'assetCategory',
      'assetSubcategory',
      'currentStage',
      'value',
    ];

    this.assetsApiService.list()
      .subscribe(
        (assets) => {
          this.tableConfig.dataSource = new MatTableDataSource(assets);
          this.tableConfig.dataSource.sort = this.sort;
          this.tableConfig.dataSource.paginator = this.paginator;
        },
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_ASSETS)
      );
  }
}
