import { first } from 'lodash';
import { Address, IAddress } from '../../models';
import * as fromAddresses from '../actions/addresses.action';

export interface AddressesState {
  entities: { [id: number]: IAddress };
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
    case fromAddresses.AddressActionTypes.CreateAddressSuccess: {
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

    case fromAddresses.AddressActionTypes.LoadAddresses: {
      const theAssetId = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [theAssetId]: true,
        },
      } as AddressesState;
    }

    case fromAddresses.AddressActionTypes.LoadAddressesFail: {
      const theAssetId = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [theAssetId]: false,
        },
        loaded: {
          ...state.loaded,
          [theAssetId]: false,
        },
      } as AddressesState;
    }

    case fromAddresses.AddressActionTypes.LoadAddressesSuccess: {
      const theAddresses: Address[] = action.payload;
      const theAssetId: number = first(theAddresses).getAssetId();

      const entities = theAddresses.reduce((aEntities: { [id: number]: Address }, aAddress: Address) => {
        return {
          ...aEntities,
          [aAddress.id]: aAddress.toJson(),
        };
      }, { ...state.entities });

      return {
        ...state,
        entities,
        loading: {
          ...state.loading,
          [theAssetId]: false,
        },
        loaded: {
          ...state.loaded,
          [theAssetId]: true,
        },
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
