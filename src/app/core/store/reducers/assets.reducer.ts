import { Asset, IAsset } from '../../models';
import * as fromAssets from '../actions/assets.action';

export interface AssetState {
  entities: { [id: number]: IAsset };
  loaded: boolean;
  loading: boolean;
}

export const initialState: AssetState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAssets.AssetsAction
): AssetState {

  switch (action.type) {
    case fromAssets.AssetActionTypes.LoadAssets: {
      return {
        ...state,
        loading: true,
      } as AssetState;
    }

    case fromAssets.AssetActionTypes.LoadAssetsSuccess: {
      const theAssets = action.payload;
      const entities = theAssets.reduce((aEntities: { [id: number]: Asset }, aAsset: Asset) => {
        return {
          ...aEntities,
          [aAsset.id]: aAsset.toJson(),
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromAssets.AssetActionTypes.LoadAssetsFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as AssetState;
    }

    case fromAssets.AssetActionTypes.CreateAssetSuccess:
    case fromAssets.AssetActionTypes.LoadAssetDetailSuccess:
    case fromAssets.AssetActionTypes.UpdateAssetSuccess: {
      const theAsset: Asset = action.payload;
      const entities = {
        ...state.entities,
        [theAsset.id]: theAsset.toJson(),
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default: {
      return {
        ...state,
      } as AssetState;
    }
  }
}

export const getAssetsEntities = (state: AssetState) => state.entities;
export const getAssetsLoading = (state: AssetState) => state.loading;
export const getAssetsLoaded = (state: AssetState) => state.loaded;
