import { createSelector } from '@ngrx/store';

import { StorageSpace } from '../../models';
import * as fromFeature from '../reducers';
import * as fromStorageSpaces from '../reducers/storage-spaces.reducer';

export const getStorageSpaceState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.storageSpaces
);

const getStorageSpacesEntitiesAsInterfaces = createSelector(getStorageSpaceState, fromStorageSpaces.getStorageSpacesEntities);
export const getStorageSpacesEntities = createSelector(
  getStorageSpacesEntitiesAsInterfaces,
  (aEntities) => {
    const theStorageSpaces = Object.assign({}, aEntities);
    const theResult: { [id: number]: StorageSpace } = {};

    Object.keys(theStorageSpaces).map((aKey) => {
      theResult[aKey] = new StorageSpace(theStorageSpaces[aKey]);
    });

    return theResult;
  }
);

export const getAllStorageSpaces = createSelector(getStorageSpacesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getStorageSpacesLoaded = createSelector(getStorageSpaceState, fromStorageSpaces.getStorageSpacesLoaded);
export const getStorageSpacesLoading = createSelector(getStorageSpaceState, fromStorageSpaces.getStorageSpacesLoading);
export const getStorageSpaceById = (aStorageSpaceId: number) => createSelector(
  getStorageSpacesEntities,
  (entities) => entities[aStorageSpaceId] || undefined
);
