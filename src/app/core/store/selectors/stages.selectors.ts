import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromStages from '../reducers/stages.reducer';

export const getStageState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.stages
);

export const getStagesEntities = createSelector(getStageState, fromStages.getStagesEntities);

export const getAllStages = createSelector(getStagesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getStagesLoaded = createSelector(getStageState, fromStages.getStagesLoaded);
export const getStagesLoading = createSelector(getStageState, fromStages.getStagesLoading);
export const getStageById = (aStageId: number) => createSelector(
  getStagesEntities,
  (entities) => entities[aStageId] || undefined
);
export const getStageByName = (aStageName: string) => createSelector(
  getAllStages,
  (aStages) => aStages.find(aStage => aStage.name === aStageName)
);
