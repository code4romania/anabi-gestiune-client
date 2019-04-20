import { Decision, IDecision } from '../../models';
import * as fromDecisions from '../actions/decisions.action';

export interface DecisionState {
  entities: { [id: number]: IDecision };
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
    case fromDecisions.DecisionsActionTypes.LoadDecisions: {
      return {
        ...state,
        loading: true,
      } as DecisionState;
    }

    case fromDecisions.DecisionsActionTypes.LoadDecisionsSuccess: {
      const theDecisions = action.payload;
      const entities = theDecisions.reduce((aEntities: { [id: number]: Decision }, aDecision: Decision) => {
        return {
          ...aEntities,
          [aDecision.id]: aDecision.toJson(),
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

    case fromDecisions.DecisionsActionTypes.LoadDecisionsFail: {
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
