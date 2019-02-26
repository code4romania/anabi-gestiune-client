import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageSpace } from '@app/core/models';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-edit-storage',
  templateUrl: 'edit-storage.component.html',
  styleUrls: ['edit-storage.component.scss'],
})
export class EditStorageSpaceComponent implements OnInit {
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
