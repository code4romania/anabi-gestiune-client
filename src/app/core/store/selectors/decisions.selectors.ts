import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromDecisions from '../reducers/decisions.reducer';

export const getDecisionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.decisions
);

export const getDecisionsEntities = createSelector(getDecisionState, fromDecisions.getDecisionsEntities);

export const getAllDecisions = createSelector(getDecisionsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getDecisionsLoaded = createSelector(getDecisionState, fromDecisions.getDecisionsLoaded);
export const getDecisionsLoading = createSelector(getDecisionState, fromDecisions.getDecisionsLoading);
export const getDecisionById = (aDecisionId: number) => createSelector(
  getDecisionsEntities,
  (entities) => entities[aDecisionId] || undefined
);
