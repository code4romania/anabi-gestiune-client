import { Address } from '../../models';
import * as fromAddresses from '../actions/addresses.action';

export interface AddressesState {
  entities: { [id: number]: Address };
  loaded: { [id: number]: boolean };
  loading: { [id: number]: boolean };
}

export const initialState: AddressesState = {
  entities: {},
  loaded: {},
  loading: {},
};

export function reducer(
  state = initialState,
  action: fromAddresses.AddressesAction
): AddressesState {

  switch (action.type) {
    case fromAddresses.ADDRESS_CREATE_SUCCESS: {
      const theAddress = action.payload as Address;
      const entities = {
        ...state.entities,
        [theAddress.id]: theAddress.toJson(),
      };
      return {
        ...state,
        entities,
      } as AddressesState;
    }

    default: {
      return {
        ...state,
      } as AddressesState;
    }
  }
}

export const getAddressesEntities = (state: AddressesState) => state.entities;
export const getAddressesLoading = (state: AddressesState) => state.loading;
export const getAddressesLoaded = (state: AddressesState) => state.loaded;
