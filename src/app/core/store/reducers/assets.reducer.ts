import { Asset } from '../../models';
import * as fromAssets from '../actions/assets.action';

export interface AssetState {
  entities: { [id: number]: Asset };
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
    case fromAssets.LOAD_ASSETS: {
      return {
        ...state,
        loading: true,
      } as AssetState;
    }

    case fromAssets.LOAD_ASSETS_SUCCESS: {
      const theAssets = action.payload;
      const entities = theAssets.reduce((aEntities: { [id: number]: Asset }, aAsset: Asset) => {
        return {
          ...aEntities,
          [aAsset.id]: aAsset,
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

    case fromAssets.LOAD_ASSETS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as AssetState;
    }

    case fromAssets.CREATE_ASSET_SUCCESS:
    case fromAssets.LOAD_ASSET_DETAIL_SUCCESS: {
      const theAsset = action.payload;
      const entities = {
        ...state.entities,
        [theAsset.id]: theAsset,
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
