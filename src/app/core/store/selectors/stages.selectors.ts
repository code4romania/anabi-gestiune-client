import { createSelector } from '@ngrx/store';

import { Stage } from '../../models';
import * as fromFeature from '../reducers';
import * as fromStages from '../reducers/stages.reducer';

export const getStageState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.stages
);

const getStagesEntitiesAsInterfaces = createSelector(getStageState, fromStages.getStagesEntities);
export const getStagesEntities = createSelector(
  getStagesEntitiesAsInterfaces,
  (aEntities) => {
    const theStages = Object.assign({}, aEntities);
    const theResult: { [id: number]: Stage } = {};

    Object.keys(theStages).map((aKey) => {
      theResult[aKey] = new Stage(theStages[aKey]);
    });

    return theResult;
  }
);

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
