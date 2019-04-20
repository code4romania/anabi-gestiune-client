import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, AddressForm, County, IAddress } from '@app/core/models';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})

export class EditAddressComponent implements OnInit {
  @Input() address: Address;
  @Input() counties: County[];
  @Output() onUpdate: EventEmitter<Address> = new EventEmitter<Address>();
  @Output() onCancel: EventEmitter<Address> = new EventEmitter<Address>();
  @Output() onSave: EventEmitter<Address> = new EventEmitter<Address>();

  public theAddress: Address;
  public addressForm: FormGroup = new FormGroup({
    county: new FormControl('', [ Validators.required ]),
    city: new FormControl('', [ Validators.required ]),
    street: new FormControl(''),
    building: new FormControl(''),
    description: new FormControl(),
  });

  ngOnInit() {
    this.addressForm.patchValue({
      county: this.address.county,
      city: this.address.city,
      street: this.address.street,
      building: this.address.building,
      description: this.address.description,
    });
    this.onChanges();
  }

  onChanges() {
    this.addressForm.valueChanges.subscribe(aFormValue => {
      this.updateAddress(aFormValue);

      this.onUpdate.emit(this.theAddress);
    });
  }

  updateAddress(aFormValue: AddressForm) {
    this.theAddress = cloneDeep(this.address);
    this.theAddress.fromForm(aFormValue);
  }

  cancel() {
    this.onCancel.emit(this.theAddress);
  }

  save() {
    this.onSave.emit(this.theAddress);
  }

  getCounties(): County[] {
    return this.counties.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }

      return 0;
    });
  }
}
