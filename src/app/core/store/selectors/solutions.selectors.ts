import { createSelector } from '@ngrx/store';

import { Solution } from '../../models';
import * as fromFeature from '../reducers';
import * as fromSolutions from '../reducers/solutions.reducer';

export const getSolutionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.solutions
);

const getSolutionEntitiesAsInterfaces = createSelector(getSolutionState, fromSolutions.getSolutionsEntities);
export const getSolutionEntities = createSelector(
  getSolutionEntitiesAsInterfaces,
  (aEntities) => {
    const theSolutions = Object.assign({}, aEntities);
    const theResult: { [id: number]: Solution } = {};

    Object.keys(theSolutions).map((aKey) => {
      theResult[aKey] = new Solution(theSolutions[aKey]);
    });

    return theResult;
  }
);

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
