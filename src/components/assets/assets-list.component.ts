import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatPaginator } from '@angular/material';
import {MatTableDataSource, MatSort} from '@angular/material';

import {AssetsAddComponent} from './assets-add.component';

import {AssetsHttp} from '../../shared/http/assets.http';

import {Asset} from '../../shared/models/Asset.model';
import { ErrorStrings } from '../../core/error-strings';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
  providers: [AssetsHttp]
})

export class AssetsListComponent implements OnInit {
  public assets: Asset[];
  public tableConfig: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private assetsHttp: AssetsHttp,
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
      'value'
    ];

    this.assetsHttp.list()
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
