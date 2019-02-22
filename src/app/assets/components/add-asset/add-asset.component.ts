import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../core/store';

import {
  Asset,
  AssetsService,
  AssetCurrency,
  AssetMeasurement,
  Category,
  ErrorStrings,
  NotificationService,
  Stage
} from '@app/core';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
})

export class AddAssetComponent implements OnInit {
  public newAsset: Asset;

  public newAssetForm = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    description: new FormControl(),
    identifier: new FormControl(),
    category: new FormControl('', [ Validators.required ]),
    subcategory: new FormControl('', [ Validators.required ]),
    stage: new FormControl('', [ Validators.required ]),
    quantity: new FormControl(),
    measureUnit: new FormControl(),
    estimatedAmount: new FormControl(),
    estimatedAmountCurrency: new FormControl(),
    remarks: new FormControl(),
  });

  public categories$: Observable<Category[]> = this.store.pipe(select(fromStore.getAssetParentCategories));
  public subcategories$: Observable<Category[]>;
  public stages$: Observable<Stage[]> = this.store.pipe(select(fromStore.getAllStages));
  public measurements: AssetMeasurement[];
  public currencies: AssetCurrency[];

  constructor(
    public dialogRef: MatDialogRef<AddAssetComponent>,
    private assetsService: AssetsService,
    private notificationService: NotificationService,
    private store: Store<fromStore.CoreState>
  ) {
  }

  getSubcategories(categoryId) {
    this.newAsset.subcategory = null;
    this.subcategories$ = this.store.pipe(select(fromStore.getAssetSubcategories(categoryId)));
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

    this.assetsService.create(this.newAsset)
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
      );
  }

  ngOnInit() {
    this.assetsService.measurements()
      .pipe(take(1))
      .subscribe(
        (measurements) => this.measurements = measurements,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_MEASUREMENTS)
      );
    this.assetsService.currencies()
      .pipe(take(1))
      .subscribe(
        (currencies) => this.currencies = currencies,
        (aError) => this.notificationService.showError(ErrorStrings.ERROR_FETCH_CURRENCIES)
      );

    this.newAssetForm.valueChanges.subscribe((aValue) => {
      if (aValue.category && !aValue.subcategory) {
        this.newAssetForm.controls['subcategory'].setValidators(Validators.required);
        this.newAssetForm.controls['subcategory'].setErrors({ required: true });
        this.newAssetForm.controls['subcategory'].markAsTouched();
      }

      if (aValue.quantity && aValue.quantity > 0 && !aValue.measureUnit) {
        this.newAssetForm.controls['measureUnit'].setValidators(Validators.required);
        this.newAssetForm.controls['measureUnit'].setErrors({ required: true });
        this.newAssetForm.controls['measureUnit'].markAsTouched();
      }

      if (aValue.estimatedAmount && aValue.estimatedAmount > 0 && !aValue.estimatedAmountCurrency) {
        this.newAssetForm.controls['estimatedAmountCurrency'].setValidators(Validators.required);
        this.newAssetForm.controls['estimatedAmountCurrency'].setErrors({ required: true });
        this.newAssetForm.controls['estimatedAmountCurrency'].markAsTouched();
      }

      if (aValue.category) {
        this.getSubcategories(aValue.category.id);
      }

      this.newAsset = new Asset();
      this.newAsset.fromForm(aValue);
    });
  }
}
