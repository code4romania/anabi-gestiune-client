import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../../../core/store';

import {
  Asset,
  AssetsApiService,
  AssetCategory,
  AssetCurrency,
  AssetMeasurement,
  AssetStage,
  AssetSubcategory,
  Category,
  ErrorStrings,
  NotificationService,
} from 'app/core';

@Component({
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
})

export class AddAssetComponent implements OnInit {
  public newAsset: Asset = new Asset({});

  public newAssetForm = new FormGroup({
    name: new FormControl(),
    identifier: new FormControl(),
    category: new FormControl(),
    subcategory: new FormControl(),
    stage: new FormControl(),
    quantity: new FormControl(),
    measureUnit: new FormControl(),
    estimatedAmount: new FormControl(),
    estimatedAmountCurrency: new FormControl(),
  });

  public categories$: Observable<Category[]>;
  public subcategories: AssetSubcategory[];
  public stages: AssetStage[];
  public measurements: AssetMeasurement[];
  public currencies: AssetCurrency[];

  constructor(
    public dialogRef: MatDialogRef<AddAssetComponent>,
    private assetsApiService: AssetsApiService,
    private notificationService: NotificationService,
    private store: Store<fromStore.CoreState>
  ) {
  }

  getSubcategories(categoryId) {
    this.newAsset.subcategoryId = null;
    this.assetsApiService.subcategories(categoryId)
      .subscribe(
        (subcategories) => this.subcategories = subcategories,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_SUBCATEGORIES)
      );
  }

  save() {
    const errorFields = {
      NAME_NOT_EMPTY: 'name',
      NAME_MAX_LENGTH_100: 'name',
      IDENTIFIER_NOT_EMPTY: 'identifier',
      IDENTIFIER_MAX_LENGTH_100: 'identifier',
      CATEGORY_INVALID_ID: 'category',
      SUBCATEGORY_INVALID_ID: 'subcategory',
      STAGE_INVALID_ID: 'stage',
      QUANTITY_MUST_BE_GREATER_THAN_ZERO: 'quantity',
      MEASUREUNIT_MAX_LENGTH_10: 'measureUnit',
      ESTIMATED_AMOUNT_GREATER_THAN_ZERO: 'estimatedAmount',
      ESTIMATED_AMT_CURRENCY_THREE_CHARS: 'estimatedAmountCurrency',
    };

    for (const control in this.newAssetForm.controls) {
      if (this.newAssetForm.controls.hasOwnProperty(control)) {
        this.newAssetForm.controls[control].markAsUntouched();
        this.newAssetForm.controls[control].setErrors({});
      }
    }

    this.assetsApiService.create(this.newAsset)
      .subscribe(
        (asset) => this.dialogRef.close(asset),
        (errors) => {
          for (let error of errors) {
            /**
             * @todo Remove this. Temporary fix until the backend returns the proper error for subcategory validation
             */
            if (error.length === 0) {
              error = 'SUBCATEGORY_INVALID_ID';
            }
            this.newAssetForm.controls[errorFields[error]].markAsTouched();
            this.newAssetForm.controls[errorFields[error]].setErrors({[error]: true});
          }

          this.notificationService.showError(ErrorStrings.ERROR_ADD_MINIMAL_ASSET);
        }
      )
  }

  ngOnInit() {
    this.newAsset = new Asset({});

    this.categories$ = this.store.select(fromStore.getParentCategories);

    /*this.assetsApiService.categories()
      .subscribe(
        (categories) => this.categories = categories,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_CATEGORIES)
      );*/
    this.assetsApiService.stages()
      .subscribe(
        (stages) => this.stages = stages,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_STAGES)
      );
    this.assetsApiService.measurements()
      .subscribe(
        (measurements) => this.measurements = measurements,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_MEASUREMENTS)
      );
    this.assetsApiService.currencies()
      .subscribe(
        (currencies) => this.currencies = currencies,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_CURRENCIES)
      );
  }
}
