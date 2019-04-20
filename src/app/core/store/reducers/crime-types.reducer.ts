import { CrimeType, ICrimeType } from '../../models';
import * as fromCrimeTypes from '../actions/crime-types.action';

export interface CrimeTypesState {
  entities: { [id: number]: ICrimeType };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CrimeTypesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromCrimeTypes.CrimeTypesAction
): CrimeTypesState {

  switch (action.type) {
    case fromCrimeTypes.CrimeTypeActionTypes.LoadCrimeTypes: {
      return {
        ...state,
        loading: true,
      } as CrimeTypesState;
    }

    case fromCrimeTypes.CrimeTypeActionTypes.LoadCrimeTypesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as CrimeTypesState;
    }

    case fromCrimeTypes.CrimeTypeActionTypes.LoadCrimeTypesSuccess: {
      const theCrimeTypes = action.payload;
      const entities = theCrimeTypes.reduce((aEntities: { [id: number]: CrimeType }, aCrimeType: CrimeType) => {
        return {
          ...aEntities,
          [aCrimeType.id]: aCrimeType.toJson(),
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
      return { ...state } as CrimeTypesState;
  }
}

export const getCrimeTypesEntities = (state: CrimeTypesState) => state.entities;
export const getCrimeTypesLoading = (state: CrimeTypesState) => state.loading;
export const getCrimeTypesLoaded = (state: CrimeTypesState) => state.loaded;
