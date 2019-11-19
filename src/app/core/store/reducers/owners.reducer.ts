import { IOwner, Owner } from '../../models';
import * as fromOwners from '../actions/owner.action';

export interface OwnersState {
  entities: { [id: number]: IOwner };
  loaded: { [id: number]: boolean };
  loading: { [id: number]: boolean };
  deleted: { [id: number]: boolean };
  deleting: { [id: number]: boolean };
}

export const initialState: OwnersState = {
  entities: {},
  loaded: {},
  loading: {},
  deleted: {},
  deleting: {},
};

export function reducer(
  state = initialState,
  action: fromOwners.OwnersAction
): OwnersState {

  switch (action.type) {
    case fromOwners.OwnersActionTypes.CreateOwnerSuccess: {
      const theOwner = action.payload as Owner;
      const entities = {
        ...state.entities,
        [theOwner.getId()]: theOwner.toJson(),
      };
      return {
        ...state,
        entities,
      } as OwnersState;
    }

    case fromOwners.OwnersActionTypes.LoadOwners: {
      const theAssetId = action.payload;
      return {
        ...state,
        loading: {
          ...state.loading,
          [theAssetId]: true,
        },
      } as OwnersState;
    }

    case fromOwners.OwnersActionTypes.LoadOwnersFail: {
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
      } as OwnersState;
    }

    case fromOwners.OwnersActionTypes.UpdateOwner: {

      const owner = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [owner.id]: true,
        },
        loaded: {
          ...state.loaded,
          [owner.id]: false,
        },
      }
    }

    case fromOwners.OwnersActionTypes.UpdateOwnerSuccess: {

      const owner = action.payload;

      return {
        ...state,
        entities: {
          ...state.entities,
          [owner.id]: owner.toJson(),
        },
        loading: {
          ...state.loading,
          [owner.id]: false,
        },
        loaded: {
          ...state.loaded,
          [owner.id]: true,
        },
      }
    }

    case fromOwners.OwnersActionTypes.UpdateOwnerFail: {
      const owner = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [owner.id]: false,
        },
        loaded: {
          ...state.loaded,
          [owner.id]: false,
        },
      }
    }

    case fromOwners.OwnersActionTypes.LoadOwnersSuccess: {
      const thePayload = (action as fromOwners.LoadOwnersSuccess).payload;
      const theAssetId = thePayload.id;
      const theOwners: Owner[] = thePayload.owners;

      const entities = theOwners.reduce((aEntities: { [id: number]: Owner }, aOwner: Owner) => {
        return {
          ...aEntities,
          [aOwner.getId()]: aOwner.toJson(),
        };
      }, { ...state.entities });

      let loading = { ...state.loading };
      let loaded = { ...state.loaded };

      if (theAssetId) {
        loading = {
          ...state.loading,
          [theAssetId]: false,
        };

        loaded = {
          ...state.loaded,
          [theAssetId]: true,
        };
      }
      return {
        ...state,
        entities,
        loading,
        loaded,
      } as OwnersState;
    }

    case fromOwners.OwnersActionTypes.DeleteOwner: {
      const theOwner = (action.payload as Owner);
      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theOwner.getId()]: true,
        },
      } as OwnersState
    }

    case fromOwners.OwnersActionTypes.DeleteOwnerFail: {
      const theOwnerId = action.payload;

      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theOwnerId]: false,
        },
        deleted: {
          ...state.deleted,
          [theOwnerId]: false,
        },
      } as OwnersState
    }

    case fromOwners.OwnersActionTypes.DeleteOwnerSuccess: {
      const theOwnerId: number = action.payload;
      const entities: { [id: number]: IOwner } = { ...state.entities };
      delete entities[theOwnerId];

      return {
        ...state,
        entities,
        deleting: {
          ...state.deleting,
          [theOwnerId]: false,
        },
        deleted: {
          ...state.deleted,
          [theOwnerId]: true,
        },
      } as OwnersState
    }

    default: {
      return {
        ...state,
      } as OwnersState;
    }
  }
}

export const getOwnersEntities = (state: OwnersState) => state.entities;
export const getOwnersLoading = (state: OwnersState) => state.loading;
export const getOwnersLoaded = (state: OwnersState) => state.loaded;
export const getOwnersDeleting = (state: OwnersState) => state.deleting;
export const getOwnersDeleted = (state: OwnersState) => state.deleted;
