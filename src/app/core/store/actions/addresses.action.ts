import { Action } from '@ngrx/store';
import { Address, Asset } from '../../models';

export enum AddressActionTypes {
  CreateAddress = '[Addresses] Create Address',
  CreateAddressFail = '[Addresses] Create Address Fail',
  CreateAddressSuccess = '[Addresses] Create Address Success',
  LoadAddresses = '[Addresses] Load Address',
  LoadAddressesFail = '[Addresses] Load Address Fail',
  LoadAddressesSuccess = '[Addresses] Load Address Success',
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

// load addresses
export class LoadAddresses implements Action {
  readonly type: string = AddressActionTypes.LoadAddresses;
  constructor(public payload: number) {}
}

export class LoadAddressesFail implements Action {
  readonly type: string = AddressActionTypes.LoadAddressesFail;
  constructor(public payload: any) {}
}

export class LoadAddressesSuccess implements Action {
  readonly type: string = AddressActionTypes.LoadAddressesSuccess;
  constructor(public payload: Address[]) {}
}

// action types
export type AddressesAction =
  CreateAddress
  | CreateAddressFail
  | CreateAddressSuccess
  | LoadAddresses
  | LoadAddressesFail
  | LoadAddressesSuccess;
