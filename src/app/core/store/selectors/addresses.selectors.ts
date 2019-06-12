import { createSelector } from '@ngrx/store';

import { Address } from '@app/core/models/asset/asset-properties/address.model';
import * as fromFeature from '../reducers';
import * as fromAddresses from '../reducers/addresses.reducer';

import * as fromAssets from './assets.selectors';

export const getAddressesState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.addresses
);

const getAddressesEntitiesAsInterfaces = createSelector(getAddressesState, fromAddresses.getAddressesEntities);

export const getAddressesEntities = createSelector(
  getAddressesEntitiesAsInterfaces,
  fromAssets.getAssetsEntities,
  (aAddresses, aAssetEntities) => {
    const theAddresses = Object.assign({}, aAddresses);
    const theResult: { [id: number]: Address } = {};

    Object.keys(theAddresses).map((aKey) => {
      const theAddress = new Address(theAddresses[aKey]);
      theAddress.setAsset(aAssetEntities[theAddress.getAssetId()]);

      theResult[aKey] = theAddress;
    });

    return theResult;
  }
);

export const getAllAddresses = createSelector(
  getAddressesEntities,
  (entities: Address[]) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);
export const getAllAddressesForAssetId = (aAssetId: number) => createSelector(
  getAllAddresses,
  (aAddresses) => aAddresses.filter(aAddress => aAddress.getAssetId() === +aAssetId)
);

export const getAddressesLoaded = createSelector(getAddressesState, fromAddresses.getAddressesLoaded);
export const getAddressesLoadedForAssetId = (aAssetId: number) => createSelector(
  getAddressesLoaded,
  (aLoaded) => aLoaded[aAssetId] || false
);

export const getAddressesLoading = createSelector(getAddressesState, fromAddresses.getAddressesLoading);
export const getAddressesLoadingForAssetId = (aAssetId: number) => createSelector(
  getAddressesLoading,
  (aLoading) => aLoading[aAssetId] || false
);
