import * as fromAssetProperties from '../actions/asset-properties.action';
import { AssetProperty } from '../actions/asset-properties.action';

export interface AssetPropertyState {
  entities: { [id: number]: AssetProperty };
}

export const initialState: AssetPropertyState = {
  entities: {},
};

export function reducer(
  state = initialState,
  action: fromAssetProperties.AssetPropertiesAction
): AssetPropertyState {

  switch (action.type) {
    case fromAssetProperties.UPDATE_PROPERTY: {
      const theProperty: AssetProperty = action.payload as AssetProperty;
      const entities = {
        ...state.entities,
        [theProperty.getAsset().id]: theProperty,
      };

      return {
        ...state,
        entities,
      } as AssetPropertyState;
    }

    case fromAssetProperties.DELETE_PROPERTY: {
      const theAssetId: number = action.payload as number;
      const entities = {
        ...state.entities,
      };
      delete entities[theAssetId];

      return {
        ...state,
        entities,
      } as AssetPropertyState;
    }

    default: {
      return {
        ...state,
      } as AssetPropertyState;
    }
  }
}

export const getAssetPropertiesEntities = (state: AssetPropertyState) => state.entities;
