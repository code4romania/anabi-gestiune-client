import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { StorageSpace, StorageSpacesService, StorageSpaceRequest } from '@app/core';
import { StorageSpaceTypes } from '@app/core/models/storage-space-types';

@Component({
  selector: 'app-add-storage-space',
  templateUrl: './add-storage-space.component.html',
  styleUrls: ['./add-storage-space.component.scss'],
})
export class AddStorageSpaceComponent implements OnInit {

  newItemForm: FormGroup;
  storageSpaceTypes = StorageSpaceTypes;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddStorageSpaceComponent>,
    private storageSpacesService: StorageSpacesService) {
    this.newItemForm = this.formBuilder.group({
      name: new FormControl(),
      storageSpaceType: new FormControl(),
      countyCode: new FormControl(),
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
