import { County, ICounty } from '../../models';
import * as fromCounties from '../actions/counties.action';

export interface CountyState {
  entities: { [id: number]: ICounty };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CountyState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromCounties.CountiesAction
): CountyState {

  switch (action.type) {
    case fromCounties.CountyActionTypes.LoadCounties: {
      return {
        ...state,
        loading: true,
      } as CountyState;
    }

    case fromCounties.CountyActionTypes.LoadCountiesSuccess: {
      const theCounties = action.payload;
      const entities = theCounties.reduce((aEntities: { [id: number]: County }, aCounty: County) => {
        return {
          ...aEntities,
          [aCounty.id]: aCounty.toJson(),
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

    case fromCounties.CountyActionTypes.LoadCountiesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as CountyState;
    }

    default: {
      return {
        ...state,
      } as CountyState;
    }
  }
}

export const getCountiesEntities = (state: CountyState) => state.entities;
export const getCountiesLoading = (state: CountyState) => state.loading;
export const getCountiesLoaded = (state: CountyState) => state.loaded;
