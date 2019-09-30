import { Action } from '@ngrx/store';
import { AssetProperty } from '../../models';

export enum AssetPropertyActionTypes {
  CreateProperty = '[Asset Properties] Create Property',
  DeleteProperty = '[Asset Properties] Delete Property',
  UpdateProperty = '[Asset Properties] Update Property',
  PersistProperty = '[Asset Properties] Persist Property',
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

export class PersistProperty implements Action {
  readonly type: string = AssetPropertyActionTypes.PersistProperty;
  constructor(public payload: AssetProperty) {}
}

// action types
export type AssetPropertiesAction =
  CreateProperty
  | UpdateProperty
  | DeleteProperty
  | PersistProperty;
