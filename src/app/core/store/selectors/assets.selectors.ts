import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAssets from '../reducers/assets.reducer';

export const getAssetState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.assets
);

export const getAssetsEntities = createSelector(getAssetState, fromAssets.getAssetsEntities);

export const getAllAssets = createSelector(getAssetsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getAssetsLoaded = createSelector(getAssetState, fromAssets.getAssetsLoaded);
export const getAssetsLoading = createSelector(getAssetState, fromAssets.getAssetsLoading);
export const getAssetById = (aAssetId: number) => createSelector(
  getAssetsEntities,
  (entities) => entities[aAssetId] || undefined
);
