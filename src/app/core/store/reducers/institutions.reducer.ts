import { Institution } from '../../models';
import * as fromInstitutions from '../actions/institutions.action';

export interface InstitutionState {
  entities: { [id: number]: Institution };
  loaded: boolean;
  loading: boolean;
}

export const initialState: InstitutionState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromInstitutions.InstitutionsAction
): InstitutionState {

  switch (action.type) {
    case fromInstitutions.LOAD_INSTITUTIONS: {
      return {
        ...state,
        loading: true,
      } as InstitutionState;
    }

    case fromInstitutions.LOAD_INSTITUTIONS_SUCCESS: {
      const theInstitutions = action.payload;
      const entities = theInstitutions.reduce((aEntities: { [id: number]: Institution }, aInstitution: Institution) => {
        return {
          ...aEntities,
          [aInstitution.id]: aInstitution,
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

    case fromInstitutions.LOAD_INSTITUTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as InstitutionState;
    }

    default: {
      return {
        ...state,
      } as InstitutionState;
    }
  }
}

export const getInstitutionsEntities = (state: InstitutionState) => state.entities;
export const getInstitutionsLoading = (state: InstitutionState) => state.loading;
export const getInstitutionsLoaded = (state: InstitutionState) => state.loaded;
