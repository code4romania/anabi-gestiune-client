import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageSpace } from '@app/core/models/storage-space.model';

@Component({
  selector: 'app-add-storage',
  templateUrl: 'add-storage.component.html',
  styleUrls: ['add-storage.component.scss'],
})
export class AddStorageSpaceComponent implements OnInit {
  @Output() onUpdate: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();
  @Output() onCancel: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();
  @Output() onSave: EventEmitter<StorageSpace> = new EventEmitter<StorageSpace>();

  private allStorages: StorageSpace[] = [
    {
      id: 1,
      name: 'Spatiu 1',
      address: null,
    } as StorageSpace,
    {
      id: 2,
      name: 'Spatiu 2',
      address: null,
    } as StorageSpace,
  ];

  private selectedStorage: StorageSpace;
  public storageForm: FormGroup = new FormGroup({
    spatiu: new FormControl(),
  });

  ngOnInit() {
    this.selectedStorage = this.allStorages[0];
    this.storageForm.setValue({
      spatiu: this.allStorages,
    });
  }

  cancel() {
    this.onCancel.emit(this.selectedStorage);
  }

  save() {
    this.onSave.emit(this.selectedStorage);
  }
}
