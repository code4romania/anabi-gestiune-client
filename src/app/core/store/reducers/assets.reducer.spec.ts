import * as fromAssets from '../actions/assets.action';
import { initialState, reducer, AssetState } from './assets.reducer';

import { assets as assetsMock } from '../../models/mock-data';

describe('Assets Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION'} as fromAssets.AssetsAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should set loading to true on LOAD_ASSETS', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    } as AssetState;
    const actualState = reducer(initialState, new fromAssets.LoadAssets());
    expect(actualState).toEqual(expectedState);
  });

  it('should set entities and loaded to true on LOAD_ASSETS_SUCCESS', () => {
    const theAssets = assetsMock;

    const expectedState = {
      ...initialState,
      entities: {
        1: theAssets[0].toJson(),
        2: theAssets[1].toJson(),
      },
      loaded: true,
      loading: false,
    };
    const actualState = reducer(initialState, new fromAssets.LoadAssetsSuccess(theAssets));
    expect(actualState).toEqual(expectedState);
  });
});
