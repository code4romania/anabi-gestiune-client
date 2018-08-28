import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSolutions from '../reducers/solutions.reducer';

export const getSolutionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.solutions
);

export const getSolutionEntities = createSelector(getSolutionState, fromSolutions.getSolutionsEntities);

export const getAllSolutions = createSelector(getSolutionEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSolutionsLoaded = createSelector(getSolutionState, fromSolutions.getSolutionsLoaded);
export const getSolutionsLoading = createSelector(getSolutionState, fromSolutions.getSolutionsLoading);
export const getSolutionById = (aSolutionId: number) => createSelector(
  getSolutionEntities,
  (entities) => entities[aSolutionId] || undefined
);
export const getSolutionsByAssetId = (aAssetId: number) => createSelector(
  getAllSolutions,
  (solutions) => solutions.filter(aSolution => aSolution.getAsset().id === aAssetId)
);
