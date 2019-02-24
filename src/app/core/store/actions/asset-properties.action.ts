import { Action } from '@ngrx/store';
import { Solution, StorageSpace } from '../../models';

export type AssetProperty = Solution | StorageSpace;

// update properties
export const UPDATE_PROPERTY = '[Asset Properties] Update Property';
export const DELETE_PROPERTY = '[Asset Properties] Delete Property';
export const CREATE_PROPERTY = '[Asset Properties] Create Property';

export class UpdateProperty implements Action {
  readonly type: string = UPDATE_PROPERTY;
  constructor(public payload: AssetProperty) {}
}

export class CreateProperty implements Action {
  readonly type: string = CREATE_PROPERTY;
  constructor(public payload: AssetProperty) {}
}

export class DeleteProperty implements Action {
  readonly type: string = DELETE_PROPERTY;
  constructor(public payload: number) {}
}

// action types
export type AssetPropertiesAction =
  CreateProperty
  | UpdateProperty
  | DeleteProperty;
