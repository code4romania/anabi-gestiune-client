import { createSelector } from '@ngrx/store';
import { Asset } from '../../models';

import * as fromFeature from '../reducers';
import * as fromAssets from '../reducers/assets.reducer';

export const getAssetState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.assets
);

const getAssetsEntitiesAsInterfaces = createSelector(getAssetState, fromAssets.getAssetsEntities);
export const getAssetsEntities = createSelector(
  getAssetsEntitiesAsInterfaces,
  (aAssets) => {
    const theAssets: { [id: number]: Asset } = {};
    const theInterfaces = Object.assign({}, aAssets);
    Object.keys(theInterfaces).map((aKey) => {
      theAssets[aKey] = new Asset(theInterfaces[aKey]);
    });

    return theAssets;
  }
);

export const getAllAssets = createSelector(getAssetsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getAssetsLoaded = createSelector(getAssetState, fromAssets.getAssetsLoaded);
export const getAssetsLoading = createSelector(getAssetState, fromAssets.getAssetsLoading);
export const getAssetById = (aAssetId: number) => createSelector(
  getAssetsEntities,
  (entities) => entities[aAssetId] || undefined
);
export const hasDetailByAssetId = (aAssetId: number) => createSelector(
  getAssetById(aAssetId),
  (aAsset) => aAsset ? aAsset.isDetailed() : false
);
