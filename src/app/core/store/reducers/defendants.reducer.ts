import { first } from 'lodash';
import { Defendant } from '../../models';
import * as fromDefendants from '../actions/defendants.action';

export interface DefendantsState {
  entities: { [id: number]: Defendant };
  loaded: { [id: number]: boolean };
  loading: { [id: number]: boolean };
}

export const initialState: DefendantsState = {
  entities: {},
  loaded: {},
  loading: {},
};

export function reducer(
  state = initialState,
  action: fromDefendants.DefendantsAction
): DefendantsState {

  switch (action.type) {
    case fromDefendants.DEFENDANT_CREATE_SUCCESS: {
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

    case fromDefendants.DEFENDANTS_LOAD: {
      const theAssetId = action.payload;

      return {
        ...state,
        loading: {
          ...state.loading,
          [theAssetId]: true,
        },
      } as DefendantsState;
    }

    case fromDefendants.DEFENDANTS_LOAD_FAIL: {
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

    case fromDefendants.DEFENDANTS_LOAD_SUCCESS: {
      const theDefendants: Defendant[] = action.payload;
      const theAssetId = first(theDefendants).getAssetId();

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
