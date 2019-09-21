import { Defendant, IDefendant } from '../../models';
import * as fromDefendants from '../actions/defendants.action';

export interface DefendantsState {
  entities: { [id: number]: IDefendant };
  loaded: { [id: number]: boolean };
  loading: { [id: number]: boolean };
  deleted: { [id: number]: boolean };
  deleting: { [id: number]: boolean };
}

export const initialState: DefendantsState = {
  entities: {},
  loaded: {},
  loading: {},
  deleted: {},
  deleting: {},
};

export function reducer(
  state = initialState,
  action: fromDefendants.DefendantsAction
): DefendantsState {

  switch (action.type) {
    case fromDefendants.DefendantsActionTypes.CreateDefendantSuccess: {
      const theDefendant = action.payload as Defendant;
      const entities = {
        ...state.entities,
        [theDefendant.id]: theDefendant.toJson(),
      };
      return {
        ...state,
        entities,
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

    case fromDefendants.DefendantsActionTypes.UpdateDefendant: {

      const defendant = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [defendant.id]: true,
        },
        loaded: {
          ...state.loaded,
          [defendant.id]: false,
        },
      }
    }

    case fromDefendants.DefendantsActionTypes.UpdateDefendantSuccess: {

      const defendant = action.payload;

      return {
        ...state,
        entities: {
          ...state.entities,
          [defendant.id]: defendant.toJson(),
        },
        loading: {
          ...state.loading,
          [defendant.id]: false,
        },
        loaded: {
          ...state.loaded,
          [defendant.id]: true,
        },
      }
    }

    case fromDefendants.DefendantsActionTypes.UpdateDefendantFail: {
      const defendant = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [defendant.id]: false,
        },
        loaded: {
          ...state.loaded,
          [defendant.id]: false,
        },
      }
    }

    case fromDefendants.DefendantsActionTypes.LoadDefendantsSuccess: {
      const thePayload = (action as fromDefendants.LoadDefendantsSuccess).payload;
      const theAssetId = thePayload.id;
      const theDefendants: Defendant[] = thePayload.defendants;

      const entities = theDefendants.reduce((aEntities: { [id: number]: Defendant }, aDefendant: Defendant) => {
        return {
          ...aEntities,
          [aDefendant.id]: aDefendant.toJson(),
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
      } as DefendantsState;
    }

    case fromDefendants.DefendantsActionTypes.DeleteDefendant: {
      const theDefendant = (action.payload as Defendant);
      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theDefendant.id]: true,
        },
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
