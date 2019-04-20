import { Action } from '@ngrx/store';
import { AssetProperty } from '../../models';

export enum AssetPropertyActionTypes {
  CreateProperty = '[Asset Properties] Create Property',
  DeleteProperty = '[Asset Properties] Delete Property',
  UpdateProperty = '[Asset Properties] Update Property',
}

// update properties
export class UpdateProperty implements Action {
  readonly type: string = AssetPropertyActionTypes.UpdateProperty;
  constructor(public payload: AssetProperty) {}
}

export class CreateProperty implements Action {
  readonly type: string = AssetPropertyActionTypes.CreateProperty;
  constructor(public payload: AssetProperty) {}
}

export class DeleteProperty implements Action {
  readonly type: string = AssetPropertyActionTypes.DeleteProperty;
  constructor(public payload: number) {}
}

// action types
export type AssetPropertiesAction =
  CreateProperty
  | UpdateProperty
  | DeleteProperty;
