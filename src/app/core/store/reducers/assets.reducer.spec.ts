import { Asset, AssetResponse } from '../../models';
import * as fromAssets from '../actions/assets.action';
import { initialState, reducer, AssetState } from './assets.reducer';

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
    const firstAsset = new Asset();
    firstAsset.fromAssetResponseJson({
      assetId: 1,
      assetName: 'First asset',
      assetIdentifier: 'A1',
      estimatedAmount: 100,
      estimatedAmountCurrency: 'EUR',
      assetCategory: 'Category',
      assetSubcategory: 'Subcategory',
      currentStage: 'Stage',
    } as AssetResponse);

    const secondAsset = new Asset();
    secondAsset.fromAssetResponseJson({
      assetId: 2,
      assetName: 'Second asset',
      assetIdentifier: 'A2',
      estimatedAmount: 110,
      estimatedAmountCurrency: 'EUR',
      assetCategory: 'Category',
      assetSubcategory: 'Subcategory',
      currentStage: 'Stage',
    } as AssetResponse);

    const theAssets = [
      firstAsset,
      secondAsset,
    ];

    const expectedState = {
      ...initialState,
      entities: {
        1: firstAsset,
        2: secondAsset,
      },
      loaded: true,
      loading: false,
    };
    const actualState = reducer(initialState, new fromAssets.LoadAssetsSuccess(theAssets));
    expect(actualState).toEqual(expectedState);
  });
});
