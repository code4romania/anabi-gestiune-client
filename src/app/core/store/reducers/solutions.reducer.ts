import { Solution } from '../../models';
import * as fromSolutions from '../actions/solutions.action';

export interface SolutionState {
  entities: { [id: number]: Solution };
  loaded: boolean;
  loading: boolean;
}

export const initialState: SolutionState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromSolutions.SolutionsAction
): SolutionState {

  switch (action.type) {
    case fromSolutions.LOAD_SOLUTIONS: {
      return {
        ...state,
        loading: true,
      } as SolutionState;
    }

    case fromSolutions.LOAD_SOLUTIONS_SUCCESS: {
      const theSolutions = action.payload;
      const entities = theSolutions.reduce((aEntities: { [id: number]: Solution }, aSolution: Solution) => {
        return {
          ...aEntities,
          [aSolution.id]: aSolution,
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

    case fromSolutions.LOAD_SOLUTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as SolutionState;
    }

    case fromSolutions.CREATE_SOLUTION_SUCCESS: {
      const theSolution = action.payload;
      const entities = {
        ...state.entities,
        [theSolution.id]: theSolution,
      };
      return {
        ...state,
        entities,
      } as SolutionState;
    }

    default: {
      return {
        ...state,
      } as SolutionState;
    }
  }
}

export const getSolutionsEntities = (state: SolutionState) => state.entities;
export const getSolutionsLoading = (state: SolutionState) => state.loading;
export const getSolutionsLoaded = (state: SolutionState) => state.loaded;
