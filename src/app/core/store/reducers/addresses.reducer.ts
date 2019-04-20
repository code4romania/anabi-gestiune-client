import { Address, IAddress } from '../../models';
import * as fromAddresses from '../actions/addresses.action';

export interface AddressesState {
  entities: { [id: number]: IAddress };
  loaded: boolean;
  loading: boolean;
}

export const initialState: AddressesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAddresses.AddressesAction
): AddressesState {

  switch (action.type) {
    case fromAddresses.AddressActionTypes.CreateAddressSuccess: {
      const theAddress = action.payload as Address;
      const entities = {
        ...state.entities,
        [theAddress.id]: theAddress.toJson(),
      };
      return {
        ...state,
        entities,
        loading: false,
        loaded: true,
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
