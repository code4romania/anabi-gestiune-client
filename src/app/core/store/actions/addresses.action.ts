import { Action } from '@ngrx/store';
import { Address } from '../../models';

export enum AddressActionTypes {
  CreateAddress = '[Addresses] Create Address',
  CreateAddressFail = '[Addresses] Create Address Fail',
  CreateAddressSuccess = '[Addresses] Create Address Success',
}

// create address
export class CreateAddress implements Action {
  readonly type: string = AddressActionTypes.CreateAddress;
  constructor(public payload: Address) {}
}

export class CreateAddressFail implements Action {
  readonly type: string = AddressActionTypes.CreateAddressFail;
  constructor(public payload: any) {}
}

export class CreateAddressSuccess implements Action {
  readonly type: string = AddressActionTypes.CreateAddressSuccess;
  constructor(public payload: Address) {}
}

// action types
export type AddressesAction =
  CreateAddress
  | CreateAddressFail
  | CreateAddressSuccess;
