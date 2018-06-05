import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

import { Asset, AssetsService, ErrorStrings, NotificationService } from 'app/core';
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
    private assetsService: AssetsService,
    private notificationService: NotificationService
  ) {
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

    this.assetsService.list()
      .subscribe(
        (assets: Asset[]) => {
          this.tableConfig.dataSource = new MatTableDataSource(assets);
          this.tableConfig.dataSource.sort = this.sort;
          this.tableConfig.dataSource.paginator = this.paginator;
        },
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_ASSETS)
      );
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
