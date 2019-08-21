import { Institution, IInstitution } from '../../models';
import * as fromInstitutions from '../actions/institutions.action';

export interface InstitutionState {
  entities: { [id: number]: IInstitution };
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
    case fromInstitutions.InstitutionsActionTypes.LoadInstitutions: {
      return {
        ...state,
        loading: true,
      } as InstitutionState;
    }

    case fromInstitutions.InstitutionsActionTypes.LoadInstitutionsSuccess: {
      const theInstitutions = action.payload;
      const entities = theInstitutions.reduce((aEntities: { [id: number]: Institution }, aInstitution: Institution) => {
        return {
          ...aEntities,
          [aInstitution.businessId]: aInstitution.toJson(),
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

    case fromInstitutions.InstitutionsActionTypes.LoadInstitutionsFail: {
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
