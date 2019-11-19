import { Owner } from '@app/core/models';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromOwners from '../reducers/owners.reducer';

import * as fromAssets from './assets.selectors';

export const getOwnersState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.owners
);

const getOwnersAsInterface = createSelector(
  getOwnersState,
  fromOwners.getOwnersEntities
);

export const getOwnersEntities = createSelector(
  getOwnersAsInterface,
  fromAssets.getAssetsEntities,
  (owners, asset) => {
    const theOwners = Object.assign({}, owners);
    const theResult: { [id: number]: Owner } = {};

    Object.keys(theOwners).map(key => {
      const owner = new Owner(theOwners[key]);
      owner.setAsset(asset[owner.getAssetId()]);

      theResult[key] = owner;
    });

    return theResult;
  }
)

export const getAllOwners = createSelector(
  getOwnersEntities,
  (owners: Owner[]) =>
    Object.keys(owners).map(id => owners[Number(id)])
)

export const getAllOwnersForAssetId = (aAssetId: number) =>
  createSelector(
    getAllOwners,
    (owners) => owners
      .filter(owner => owner.getAssetId() === Number(aAssetId))
  );

export const getOwnersLoaded = createSelector(
  getOwnersState,
  fromOwners.getOwnersLoaded
)
export const getOwnersLoadedForAssetId = (assetId: number) =>
  createSelector(
    getOwnersLoaded,
    (aLoaded) => aLoaded[assetId] || false
  );
