import { Asset } from '@app/core';
import { AssetState } from '../reducers/assets.reducer';
import { CoreState, State } from '../reducers/index';
import * as fromSelectors from './assets.selectors';

import { assets as mockAssets, detailedAsset as mockDetailedAsset } from '../../models/mock-data';

describe('Assets Selectors', () => {
  let state: State;
  let coreState: CoreState;

  const theAssets = mockAssets;

  const getEntitiesAsArray = (aState: State) => {
    return Object.keys(aState.core.assets.entities).map(id => new Asset(aState.core.assets.entities[id]));
  };

  const getEntitiesAsObjects = (aState: State) => {
    const theEntities: { [id: number]: Asset } = {};
    Object.keys(aState.core.assets.entities).map(id => {
      theEntities[id] = new Asset(aState.core.assets.entities[id]);
    });

    return theEntities;
  };

  beforeEach(() => {
    state = {
      core: {
        assets: {
          entities: {
            1: theAssets[0].toJson(),
            2: theAssets[1].toJson(),
            3: mockDetailedAsset.toJson(),
          },
          loaded: true,
          loading: false,
        } as AssetState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getAssetState', () => {
    it('should get the Asset state', () => {
      expect(fromSelectors.getAssetState(state)).toEqual(coreState.assets);
    });
  });

  describe('getAssetsEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getAssetsEntities(state)).toEqual(getEntitiesAsObjects(state));
    });
  });

  describe('getAllAssets', () => {
    it('should get the assets', () => {
      const expectedResult = getEntitiesAsArray(state);
      expect(fromSelectors.getAllAssets(state)).toEqual(expectedResult);
    });
  });

  describe('getAssetsLoaded', () => {
    it('should get the loaded status', () => {
      expect(fromSelectors.getAssetsLoaded(state)).toEqual(coreState.assets.loaded);
    });
  });

  describe('getAssetsLoading', () => {
    it('should get the loading status', () => {
      expect(fromSelectors.getAssetsLoading(state)).toEqual(coreState.assets.loading);
    });
  });

  describe('getAssetById', () => {
    it('should get an asset by id', () => {
      expect(fromSelectors.getAssetById(1)(state)).toEqual(getEntitiesAsObjects(state)[1]);
    });

    it('should return undefined if the id is not found', () => {
      expect(fromSelectors.getAssetById(99)(state)).toEqual(undefined);
    });
  });

  describe('hasDetailByAssetId', () => {
    it('should return true if the asset has detailed information', () => {
      expect(fromSelectors.hasDetailByAssetId(3)(state)).toBeTruthy();
    });

    it('should return false if the asset does not have detailed information', () => {
      expect(fromSelectors.hasDetailByAssetId(1)(state)).toBeFalsy();
    });

    it('should return false if the asset does not exist', () => {
      expect(fromSelectors.hasDetailByAssetId(99)(state)).toBeFalsy();
    });
  });
});
