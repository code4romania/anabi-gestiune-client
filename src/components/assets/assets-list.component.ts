import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {AssetsAddComponent} from './assets-add.component';

import {Asset} from '../../shared/models/asset.model';

@Component({
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})

export class AssetsListComponent implements OnInit {
  public page;
  public assets: Asset[];

  constructor(public dialog: MatDialog) {
  }

  addAsset(): void {
    const addAssetDialog = this.dialog.open(AssetsAddComponent, {
    });

    addAssetDialog.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.page = 'assets page';
  }
}
