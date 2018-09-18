import { AssetPropertyState } from '../reducers/asset-properties.reducer';
import { CoreState, State } from '../reducers/index';
import * as fromSelectors from './asset-properties.selectors';

import { solutions as mockSolutions } from '../../models/mock-data';

describe('AssetProperty Selectors', () => {
  let state: State;
  let coreState: CoreState;

  const theSolutions = mockSolutions;

  const getEntitiesAsArray = (aState: State) => {
    return Object.keys(aState.core.assetProperties.entities).map(id => aState.core.assetProperties.entities[id]);
  };

  beforeEach(() => {
    state = {
      core: {
        assetProperties: {
          entities: {
            [theSolutions[0].getAsset().id]: theSolutions[0],
            [theSolutions[1].getAsset().id]: theSolutions[1],
          },
        } as AssetPropertyState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getAssetPropertiesState', () => {
    it('should get the AssetProperties state', () => {
      expect(fromSelectors.getAssetPropertiesState(state)).toEqual(coreState.assetProperties);
    });
  });

  describe('getAssetPropertiesEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getAssetPropertiesEntities(state)).toEqual(coreState.assetProperties.entities);
    });
  });

  describe('getAllAssetProperties', () => {
    it('should get the assets', () => {
      const expectedResult = getEntitiesAsArray(state);
      expect(fromSelectors.getAllAssetProperties(state)).toEqual(expectedResult);
    });
  });

  describe('getAssetPropertiesByAssetId', () => {
    it('should get an asset property by the asset id', () => {
      expect(fromSelectors.getAssetPropertiesByAssetId(1)(state)).toEqual(coreState.assetProperties.entities[1]);
    });

    it('should return undefined if the id is not found', () => {
      expect(fromSelectors.getAssetPropertiesByAssetId(99)(state)).toEqual(undefined);
    });
  });
});
