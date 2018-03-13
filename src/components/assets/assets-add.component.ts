import {Component, OnInit} from '@angular/core';

import {MatDialogRef} from '@angular/material';

import {AssetsHttp} from '../../shared/http/assets.http';

import {Asset} from '../../shared/models/asset.model';

@Component({
  templateUrl: './assets-add.component.html',
  styleUrls: ['./assets-add.component.scss'],
  providers: [AssetsHttp]
})

export class AssetsAddComponent implements OnInit {
  public page;
  public newAsset: Asset;

  constructor(public dialogRef: MatDialogRef<AssetsAddComponent>, private assetsHttp: AssetsHttp) {
  }

  save() {
    this.assetsHttp.create(this.newAsset).subscribe(asset => this.dialogRef.close(asset));
  }

  ngOnInit() {
    this.page = 'assets add page';
    this.newAsset = new Asset();
  }
}
