import { AssetProperty } from '../../models';
import * as fromAssetProperties from '../actions/asset-properties.action';

export interface AssetPropertyState {
  entities: { [id: number]: AssetProperty };
}

export const initialState: AssetPropertyState = {
  entities: {},
};

export function reducer(state = initialState, action: fromAssetProperties.AssetPropertiesAction): AssetPropertyState {
  switch (action.type) {
    case fromAssetProperties.AssetPropertyActionTypes.UpdateProperty: {
      const theProperty: AssetProperty = action.payload as AssetProperty;
      const entities = {
        ...state.entities,
        [theProperty.getAssetId()]: theProperty,
      };

      return {
        ...state,
        entities,
      } as AssetPropertyState;
    }

    case fromAssetProperties.AssetPropertyActionTypes.CreateProperty: {
      const theProperty: AssetProperty = action.payload as AssetProperty;
      const entities = {
        ...state.entities,
        [theProperty.getAssetId()]: theProperty,
      };

      return {
        ...state,
        entities,
      } as AssetPropertyState;
    }

    case fromAssetProperties.AssetPropertyActionTypes.DeleteProperty: {
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
