import { DefendantsPayload } from '@app/core/models/defendants-payload';
import { Defendant, IDefendant } from '../../models';
import * as fromDefendants from '../actions/defendants.action';

export interface DefendantsState {
  entities: { [id: number]: IDefendant };
  loaded: { [id: number]: boolean };
  loading: { [id: number]: boolean };
  deleted: { [id: number]: boolean };
  deleting: { [id: number]: boolean };
  assetsToDefendantsCount: { [id: number]: number };
}

export const initialState: DefendantsState = {
  entities: {},
  loaded: {},
  loading: {},
  deleted: {},
  deleting: {},
  assetsToDefendantsCount: {},
};

export function reducer(
  state = initialState,
  action: fromDefendants.DefendantsAction
): DefendantsState {

  switch (action.type) {
    case fromDefendants.DefendantsActionTypes.CreateDefendantSuccess: {
      const theDefendant = action.payload as Defendant;
      const assetsToDefendantsCount: {[id: number]: number} = {};
      assetsToDefendantsCount[theDefendant.getAssetId()] = state.assetsToDefendantsCount[theDefendant.getAssetId()] + 1;
      const entities = {
        ...state.entities,
        [theDefendant.id]: theDefendant.toJson(),
      };
      return {
        ...state,
        entities,
        assetsToDefendantsCount,
      } as DefendantsState;
    }

    case fromDefendants.DefendantsActionTypes.LoadDefendants: {
      const theAssetId = action.payload;
      return {
        ...state,
        loading: {
          ...state.loading,
          [theAssetId]: true,
        },
      } as DefendantsState;
    }

    case fromDefendants.DefendantsActionTypes.LoadDefendantsFail: {
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
      } as DefendantsState;
    }

    case fromDefendants.DefendantsActionTypes.LoadDefendantsSuccess: {
      const payload: DefendantsPayload = action.payload;
      const theDefendants: Defendant[] = payload.defendants;
      const entities = theDefendants.reduce((aEntities: { [id: number]: Defendant }, aDefendant: Defendant) => {
        return {
          ...aEntities,
          [aDefendant.id]: aDefendant.toJson(),
        };
      }, { ...state.entities });

      const defendantsCount = {};
      defendantsCount[payload.id] = theDefendants.length;
      let loading = { ...state.loading };
      let loaded = { ...state.loaded };
      if (payload.id) {
        loading = {
          ...state.loading,
          [payload.id]: false,
        };

        loaded = {
          ...state.loaded,
          [payload.id]: true,
        };
      }
      return {
        ...state,
        entities,
        loading,
        loaded,
        assetsToDefendantsCount: defendantsCount,
      } as DefendantsState;
    }

    case fromDefendants.DefendantsActionTypes.DeleteDefendant: {
      const theDefendant = (action.payload as Defendant);
      const assetsToDefendantsCount: {[id: number]: number} = {};
      assetsToDefendantsCount[theDefendant.getAssetId()] = state.assetsToDefendantsCount[theDefendant.getAssetId()] - 1;
      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theDefendant.id]: true,
        },
        assetsToDefendantsCount,
      } as DefendantsState
    }

    case fromDefendants.DefendantsActionTypes.DeleteDefendantFail: {
      const theDefendantId = action.payload;

      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theDefendantId]: false,
        },
        deleted: {
          ...state.deleted,
          [theDefendantId]: false,
        },
      } as DefendantsState
    }

    case fromDefendants.DefendantsActionTypes.DeleteDefendantSuccess: {
      const theDefendantId: number = action.payload;
      const entities: { [id: number]: IDefendant } = { ...state.entities };
      delete entities[theDefendantId];

      return {
        ...state,
        entities,
        deleting: {
          ...state.deleting,
          [theDefendantId]: false,
        },
        deleted: {
          ...state.deleted,
          [theDefendantId]: true,
        },
      } as DefendantsState
    }

    default: {
      return {
        ...state,
      } as DefendantsState;
    }
  }
}

export const getDefendantsEntities = (state: DefendantsState) => state.entities;
export const getDefendantsLoading = (state: DefendantsState) => state.loading;
export const getDefendantsLoaded = (state: DefendantsState) => state.loaded;
export const getDefendantsDeleting = (state: DefendantsState) => state.deleting;
export const getDefendantsDeleted = (state: DefendantsState) => state.deleted;
