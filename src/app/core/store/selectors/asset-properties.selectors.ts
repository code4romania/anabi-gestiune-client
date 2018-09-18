import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAssetProperties from '../reducers/asset-properties.reducer';

export const getAssetPropertiesState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.assetProperties
);

export const getAssetPropertiesEntities = createSelector(getAssetPropertiesState, fromAssetProperties.getAssetPropertiesEntities);

export const getAllAssetProperties = createSelector(getAssetPropertiesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getAssetPropertiesByAssetId = (aAssetId: number) => createSelector(
  getAssetPropertiesEntities,
  (entities) => entities[aAssetId] || undefined
);
