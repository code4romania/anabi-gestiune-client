import * as fromAssetProperties from '../actions/asset-properties.action';
import { initialState, reducer, AssetPropertyState } from './asset-properties.reducer';

import { solutions as mockSolutions } from '../../models/mock-data';

describe('Asset Properties Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION'} as fromAssetProperties.AssetPropertiesAction);
    expect(expectedState).toEqual(initialState);
  });

  describe('UPDATE_PROPERTY', () => {
    it('should create an AssetProperty if none exists', () => {
      const theSolution = mockSolutions[0];

      const entities = {
        [theSolution.getAsset().id]: theSolution,
      };
      const expectedState = {
        ...initialState,
        entities,
      } as AssetPropertyState;

      const actualState = reducer(initialState, new fromAssetProperties.UpdateProperty(theSolution));
      expect(actualState).toEqual(expectedState);
    });

    it('should update an existing AssetProperty', () => {
      const theSolution = mockSolutions[0];
      theSolution.decisionNumber = '2';

      const entities = {
        [theSolution.getAsset().id]: theSolution,
      };
      const expectedState = {
        ...initialState,
        entities,
      } as AssetPropertyState;

      const actualState = reducer(initialState, new fromAssetProperties.UpdateProperty(theSolution));
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('DELETE_PROPERTY', () => {
    it('should delete an AssetProperty', () => {
      const theSolution = mockSolutions[0];

      const theState = {
        ...initialState,
        entities: {
          [theSolution.getAsset().id]: theSolution,
        },
      } as AssetPropertyState;

      const expectedState = {
        ...initialState,
        entities: {},
      };

      const actualState = reducer(theState, new fromAssetProperties.DeleteProperty(theSolution.getAsset().id));
      expect(actualState).toEqual(expectedState);
    });
  });
});
