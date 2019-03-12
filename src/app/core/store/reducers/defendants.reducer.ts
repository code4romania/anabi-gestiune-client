import { Defendant } from '../../models';
import * as fromDefendants from '../actions/defendants.action';

export interface DefendantsState {
  entities: { [id: number]: Defendant };
  loaded: boolean;
  loading: boolean;
}

export const initialState: DefendantsState = {
  entities: {},
  loaded: false,
  loading: false,
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
