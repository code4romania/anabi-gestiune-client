import { Identifier } from '../../models';
import * as fromIdentifiers from '../actions/identifiers.action';

export interface IdentifierState {
  entities: { [id: number]: Identifier };
  loaded: boolean;
  loading: boolean;
}

export const initialState: IdentifierState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromIdentifiers.IdentifiersAction
): IdentifierState {

  switch (action.type) {
    case fromIdentifiers.LOAD_IDENTIFIERS: {
      return {
        ...state,
        loading: true,
      } as IdentifierState;
    }

    case fromIdentifiers.LOAD_IDENTIFIERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as IdentifierState;
    }

    case fromIdentifiers.LOAD_IDENTIFIERS_SUCCESS: {
      const theIdentifiers = action.payload;
      const entities = theIdentifiers.reduce((aEntities: { [id: number]: Identifier }, aIdentifier: Identifier) => {
        return {
          ...aEntities,
          [aIdentifier.id]: aIdentifier.toJson(),
        };
      }, { ...state.entities });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default:
      return { ...state } as IdentifierState;
  }
}

export const getIdentifierEntities = (state: IdentifierState) => state.entities;
export const getIdentifierLoading = (state: IdentifierState) => state.loading;
export const getIdentifierLoaded = (state: IdentifierState) => state.loaded;
