import { Action } from '@ngrx/store';
import { Address, Solution } from '../../models';

export type AssetProperty = Solution | Address;

// update properties
export const UPDATE_PROPERTY = '[Asset Properties] Update Property';
export const DELETE_PROPERTY = '[Asset Properties] Delete Property';

export class UpdateProperty implements Action {
  readonly type: string = UPDATE_PROPERTY;
    constructor(public payload: AssetProperty) {}
}

export class DeleteProperty implements Action {
  readonly type: string = DELETE_PROPERTY;
  constructor(public payload: number) {}
}

// action types
export type AssetPropertiesAction =
  UpdateProperty
  | DeleteProperty;
