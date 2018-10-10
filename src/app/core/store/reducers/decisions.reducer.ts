import { Decision } from '../../models';
import * as fromDecisions from '../actions/decisions.action';

export interface DecisionState {
  entities: { [id: number]: Decision };
  loaded: boolean;
  loading: boolean;
}

export const initialState: DecisionState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromDecisions.DecisionsAction
): DecisionState {

  switch (action.type) {
    case fromDecisions.LOAD_DECISIONS: {
      return {
        ...state,
        loading: true,
      } as DecisionState;
    }

    case fromDecisions.LOAD_DECISIONS_SUCCESS: {
      const theDecisions = action.payload;
      const entities = theDecisions.reduce((aEntities: { [id: number]: Decision }, aDecision: Decision) => {
        return {
          ...aEntities,
          [aDecision.id]: aDecision,
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

    case fromDecisions.LOAD_DECISIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as DecisionState;
    }

    default: {
      return {
        ...state,
      } as DecisionState;
    }
  }
}

export const getDecisionsEntities = (state: DecisionState) => state.entities;
export const getDecisionsLoading = (state: DecisionState) => state.loading;
export const getDecisionsLoaded = (state: DecisionState) => state.loaded;
