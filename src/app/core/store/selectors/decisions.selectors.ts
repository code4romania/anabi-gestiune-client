import { createSelector } from '@ngrx/store';

import { Decision } from '@app/core/models/decision.model';
import * as fromFeature from '../reducers';
import * as fromDecisions from '../reducers/decisions.reducer';

export const getDecisionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.decisions
);

const getDecisionsEntitiesAsInterfaces = createSelector(getDecisionState, fromDecisions.getDecisionsEntities);

export const getDecisionsEntities = createSelector(
  getDecisionsEntitiesAsInterfaces,
  (aDecisions) => {
    const theDecisions = Object.assign({}, aDecisions);

    Object.keys(theDecisions).map((aKey) => {
      theDecisions[aKey] = new Decision(theDecisions[aKey]);
    });

    return theDecisions;
  }
);

export const getAllDecisions = createSelector(getDecisionsEntities, (entities: Decision[]) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getDecisionsLoaded = createSelector(getDecisionState, fromDecisions.getDecisionsLoaded);
export const getDecisionsLoading = createSelector(getDecisionState, fromDecisions.getDecisionsLoading);
export const getDecisionById = (aDecisionId: number) => createSelector(
  getDecisionsEntities,
  (entities) => entities[aDecisionId] || undefined
);
