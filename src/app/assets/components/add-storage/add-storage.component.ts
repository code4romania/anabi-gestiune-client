import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Asset, StorageSpace } from '@app/core/models';
import { take } from 'rxjs/operators';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-add-storage',
  templateUrl: 'add-storage.component.html',
  styleUrls: ['add-storage.component.scss'],
})
export class AddStorageSpaceComponent implements OnInit {
  @Input() storageSpace: StorageSpace;
  @Output() onUpdate: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();
  @Output() onCancel: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();
  @Output() onSave: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();

  theStorageSpace: StorageSpace;
  private allStorages: StorageSpace[] = [
    new StorageSpace({
      id: 1,
      name: 'Spatiu 1',
      address: null,
    }),
    new StorageSpace({
      id: 2,
      name: 'Spatiu 2',
      address: null,
    }),
  ];

  public storageForm: FormGroup = new FormGroup({
    storageSpace: new FormControl('', [ Validators.required ]),
  });

  ngOnInit() {
    this.theStorageSpace = cloneDeep(this.storageSpace);

    this.onChanges();
  }

  onChanges() {
    this.storageForm.valueChanges.subscribe(aFormValue => {
      this.theStorageSpace = cloneDeep(this.storageSpace);
      this.theStorageSpace.fromJson(aFormValue.storageSpace);

      this.onUpdate.emit(this.theStorageSpace);
    });
  }

  cancel() {
    this.onCancel.emit(this.theStorageSpace);
  }

  save() {
    this.onSave.emit(this.theStorageSpace);
  }
}
