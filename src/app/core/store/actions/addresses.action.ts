import { Action } from '@ngrx/store';
import { Address } from '../../models';

// create address
export const ADDRESS_CREATE = '[Addresses] Create Address';
export const ADDRESS_CREATE_FAIL = '[Addresses] Create Address Fail';
export const ADDRESS_CREATE_SUCCESS = '[Addresses] Create Address Success';

export class CreateAddress implements Action {
  readonly type: string = ADDRESS_CREATE;
  constructor(public payload: Address) {}
}

export class CreateAddressFail implements Action {
  readonly type: string = ADDRESS_CREATE_FAIL;
  constructor(public payload: any) {}
}

export class CreateAddressSuccess implements Action {
  readonly type: string = ADDRESS_CREATE_SUCCESS;
  constructor(public payload: Address) {}
}

// action types
export type AddressesAction =
  CreateAddress
  | CreateAddressFail
  | CreateAddressSuccess;
