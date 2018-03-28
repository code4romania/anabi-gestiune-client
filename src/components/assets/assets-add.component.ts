import {Component, OnInit} from '@angular/core';

import {MatDialogRef} from '@angular/material';

import {AssetsHttp} from '../../shared/http/assets.http';

import {Asset} from '../../shared/models/Asset.model';
import {AssetCategory} from '../../shared/models/AssetCategory.model';
import {AssetSubcategory} from '../../shared/models/AssetSubcategory.model';
import {AssetStage} from '../../shared/models/AssetStage.model';
import {AssetMeasurement} from '../../shared/models/AssetMeasurement.model';
import {AssetCurrency} from '../../shared/models/AssetCurrency.model';

@Component({
  templateUrl: './assets-add.component.html',
  styleUrls: ['./assets-add.component.scss'],
  providers: [AssetsHttp]
})

export class AssetsAddComponent implements OnInit {
  public page;
  public newAsset: Asset;
  public categories: Array<AssetCategory>;
  public subcategories: Array<AssetSubcategory>;
  public stages: Array<AssetStage>;
  public measurements: Array<AssetMeasurement>;
  public currencies: Array<AssetCurrency>;

  constructor(public dialogRef: MatDialogRef<AssetsAddComponent>, private assetsHttp: AssetsHttp) {
  }

  getSubcategories(categoryId) {
    this.newAsset.subcategoryId = null;
    this.assetsHttp.subcategories(categoryId).subscribe((subcategories) => this.subcategories = subcategories);
  }

  save() {
    this.assetsHttp.create(this.newAsset).subscribe(asset => this.dialogRef.close(asset));
  }

  ngOnInit() {
    this.page = 'assets add page';
    this.newAsset = new Asset();

    this.assetsHttp.categories().subscribe((categories) => this.categories = categories);
    this.assetsHttp.stages().subscribe((stages) => this.stages = stages);
    this.assetsHttp.measurements().subscribe((measurements) => this.measurements = measurements);
    this.assetsHttp.currencies().subscribe((currencies) => this.currencies = currencies);
  }
}
