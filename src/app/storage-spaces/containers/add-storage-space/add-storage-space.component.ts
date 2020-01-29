import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CountiesService, StorageSpace, StorageSpacesService, StorageSpaceRequest } from '@app/core';
import { StorageSpaceType } from '@app/core/models/storage-space-types';
import { CountyCodeExistsValidator } from '@app/storage-spaces/validators/county-code-exists-validator';

@Component({
  selector: 'app-add-storage-space',
  templateUrl: './add-storage-space.component.html',
  styleUrls: ['./add-storage-space.component.scss'],
})
export class AddStorageSpaceComponent implements OnInit {

  newItemForm: FormGroup;
  storageSpaceTypes = StorageSpaceType;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddStorageSpaceComponent>,
    private storageSpacesService: StorageSpacesService,
    private countiesService: CountiesService) {
    this.newItemForm = this.formBuilder.group({
      name: new FormControl(),
      storageSpaceType: new FormControl(),
      countyCode: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [CountyCodeExistsValidator(this.countiesService)],
      }),
      city: new FormControl(),
      street: new FormControl(),
      building: new FormControl(),
      details: new FormControl(),
    });
  }

  ngOnInit() {
  }

  save(): void {
    const newItem: StorageSpaceRequest = { ...this.newItemForm.value };
    this.storageSpacesService.create(newItem)
      .subscribe((savedItem: StorageSpace) => this.dialogRef.close(savedItem));
    this.newItemForm.reset();
  }

  hasError(formControlName: string, errorName: string): boolean {
    const formControl: AbstractControl = this.newItemForm.controls[formControlName];
    return formControl.getError(errorName) ? true : false;
  }
}
