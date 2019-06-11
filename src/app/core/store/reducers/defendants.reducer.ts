import { Defendant } from '../../models';
import * as fromDefendants from '../actions/defendants.action';

export interface DefendantsState {
  entities: { [id: number]: Defendant };
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

    case fromDefendants.DefendantsActionTypes.LoadDefendantsSuccess: {
      const thePayload: fromDefendants.DefendantsSuccessPayload = action.payload;
      const theDefendants: Defendant[] = thePayload.defendants;
      const theAssetId = thePayload.asset.id;

      const entities = theDefendants.reduce((aEntities: { [id: number]: Defendant }, aDefendant: Defendant) => {
        return {
          ...aEntities,
          [aDefendant.id]: aDefendant.toJson(),
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
      } as DefendantsState;
    }

    case fromDefendants.DEFENDANT_DELETE: {
      const theDefendantId = (action.payload as fromDefendants.DeleteDefendantPayload).defendantId;

      return {
        ...state,
        deleting: {
          ...state.deleting,
          [theDefendantId]: true,
        },
      } as DefendantsState
    }

    case fromDefendants.DEFENDANT_DELETE_FAIL: {
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

    case fromDefendants.DEFENDANT_DELETE_SUCCESS: {
      const theDefendantId: number = action.payload;
      // const entities = state.entities;
      // var theDefendants: Defendant[] = []
      // for(var key in Object.keys(entities)) {
      //   theDefendants = [...theDefendants, entities[key]];
      // }
      // theDefendants = theDefendants.filter(d => d.id != theDefendantId);
      const entities: { [id: number]: Defendant } = { ...state.entities }
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
