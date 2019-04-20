import { ISolution, Solution } from '../../models';
import * as fromSolutions from '../actions/solutions.action';

export interface SolutionState {
  entities: { [id: number]: ISolution };
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
    case fromSolutions.SolutionActionTypes.LoadSolutions: {
      return {
        ...state,
        loading: true,
      } as SolutionState;
    }

    case fromSolutions.SolutionActionTypes.LoadSolutionsSuccess: {
      const theSolutions = action.payload;
      const entities = theSolutions.reduce((aEntities: { [id: number]: Solution }, aSolution: Solution) => {
        return {
          ...aEntities,
          [aSolution.id]: aSolution.toJson(),
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

    case fromSolutions.SolutionActionTypes.LoadSolutionsFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as SolutionState;
    }

    case fromSolutions.SolutionActionTypes.CreateSolutionSuccess: {
      const theSolution: Solution = action.payload;
      const entities = {
        ...state.entities,
        [theSolution.id]: theSolution.toJson(),
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
