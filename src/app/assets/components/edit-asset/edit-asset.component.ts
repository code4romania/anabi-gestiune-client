import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Asset,
  AssetCurrency,
  AssetMeasurement,
  Category,
  Stage
} from '@app/core';

@Component({
  selector: 'app-edit-asset',
  templateUrl: 'edit-asset.component.html',
  styleUrls: ['edit-asset.component.scss'],
})

export class EditAssetComponent implements OnInit {

  @Input() asset: Asset;
  @Input() categories: Category[];
  @Input() subcategories: Category[];
  @Input() stages: Stage[];
  @Input() currencies: AssetCurrency[];
  @Input() measurements: AssetMeasurement[];
  @Output() onCategoryChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSave: EventEmitter<Asset> = new EventEmitter<Asset>();

  public editAssetForm = new FormGroup({
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

  onCategoryChanged(category: Category) {
    this.onCategoryChange.emit(category.id);
  }

  ngOnInit() {
    this.editAssetForm.setValue({
      name: this.asset.name,
      description: this.asset.description,
      identifier: this.asset.identifier,
      category: this.asset.category,
      subcategory: this.asset.subcategory,
      stage: this.asset.stage,
      quantity: this.asset.quantity,
      measureUnit: this.asset.measureUnit,
      estimatedAmount: this.asset.estimatedAmount,
      estimatedAmountCurrency: this.asset.estimatedAmountCurrency,
      remarks: this.asset.remarks,
    });

    this.editAssetForm.valueChanges.subscribe((formValue) => {
      if (formValue.category) {
        this.onCategoryChanged(formValue.category);
      }
      if (formValue.category && !formValue.subcategory) {
        this.editAssetForm.controls['subcategory'].setValidators(Validators.required);
        this.editAssetForm.controls['subcategory'].setErrors({ required: true });
        this.editAssetForm.controls['subcategory'].markAsTouched();
      }

      if (formValue.quantity && formValue.quantity > 0 && !formValue.measureUnit) {
        this.editAssetForm.controls['measureUnit'].setValidators(Validators.required);
        this.editAssetForm.controls['measureUnit'].setErrors({ required: true });
        this.editAssetForm.controls['measureUnit'].markAsTouched();
      }

      if (formValue.estimatedAmount && formValue.estimatedAmount > 0 && !formValue.estimatedAmountCurrency) {
        this.editAssetForm.controls['estimatedAmountCurrency'].setValidators(Validators.required);
        this.editAssetForm.controls['estimatedAmountCurrency'].setErrors({ required: true });
        this.editAssetForm.controls['estimatedAmountCurrency'].markAsTouched();
      }
    });

  }

  save() {
    const editedAsset = new Asset();
    editedAsset.fromForm(this.editAssetForm.value);
    this.onSave.emit(editedAsset);
  }
}
