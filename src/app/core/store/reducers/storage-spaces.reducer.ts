import { IStorageSpace, StorageSpace } from '../../models';
import * as fromStorageSpaces from '../actions/storage-spaces.action';

export interface StorageSpaceState {
  entities: { [id: number]: IStorageSpace };
  loaded: boolean;
  loading: boolean;
}

export const initialState: StorageSpaceState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromStorageSpaces.StorageSpacesAction
): StorageSpaceState {

  switch (action.type) {
    case fromStorageSpaces.StorageSpaceActionTypes.LoadStorageSpaces: {
      return {
        ...state,
        loading: true,
      } as StorageSpaceState;
    }

    case fromStorageSpaces.StorageSpaceActionTypes.LoadStorageSpacesSuccess: {
      const theStorageSpaces = action.payload;
      const entities = theStorageSpaces.reduce((aEntities: { [id: number]: StorageSpace }, aStorageSpace: StorageSpace) => {
        return {
          ...aEntities,
          [aStorageSpace.id]: aStorageSpace.toJson(),
        };
      }, {
          ...state.entities,
        });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromStorageSpaces.StorageSpaceActionTypes.LoadStorageSpacesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as StorageSpaceState;
    }

    case fromStorageSpaces.StorageSpaceActionTypes.CreateStorageSpaceSuccess: {
      const theStorageSpace = action.payload as StorageSpace;
      const entities = {
        ...state.entities,
        [theStorageSpace.id]: theStorageSpace.toJson(),
      };
      return {
        ...state,
        entities,
      } as StorageSpaceState;
    }

    default: {
      return {
        ...state,
      } as StorageSpaceState;
    }
  }
}

export const getStorageSpacesEntities = (state: StorageSpaceState) => state.entities;
export const getStorageSpacesLoading = (state: StorageSpaceState) => state.loading;
export const getStorageSpacesLoaded = (state: StorageSpaceState) => state.loaded;
