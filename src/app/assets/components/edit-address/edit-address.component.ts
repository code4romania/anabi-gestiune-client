import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from '@app/core';

import { cloneDeep } from 'lodash';

export interface AddressFormValue {
  countyId: number;
  city: string;
  street: string;
  building: string;
  description: string;
}

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})

export class EditAddressComponent implements OnInit {
  @Input() address: Address;
  @Output() onUpdate: EventEmitter<Address> = new EventEmitter<Address>();
  @Output() onCancel: EventEmitter<Address> = new EventEmitter<Address>();
  @Output() onSave: EventEmitter<Address> = new EventEmitter<Address>();

  public theAddress: Address;
  public addressForm: FormGroup = new FormGroup({
    countyId: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    building: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit() {
    this.addressForm.setValue({
      countyId: this.address.countyId,
      city: this.address.city,
      street: this.address.street,
      building: this.address.building,
      description: this.address.description,
    });
    this.theAddress = cloneDeep(this.address);
    this.onChanges();
  }

  onChanges() {
    this.addressForm.valueChanges.subscribe(aFormValue => {
      console.warn('form value', aFormValue);
      this.updateAddress(aFormValue);

      this.onUpdate.emit(this.theAddress);
    });
  }

  updateAddress(aFormValue: AddressFormValue) {
    this.theAddress.countyId = aFormValue.countyId;
    this.theAddress.city = aFormValue.city;
    this.theAddress.street = aFormValue.street;
    this.theAddress.building = aFormValue.building;
    this.theAddress.description = aFormValue.description;
  }

  cancel() {
    this.onCancel.emit(this.theAddress);
  }

  save() {
    this.onSave.emit(this.theAddress);
  }

}
