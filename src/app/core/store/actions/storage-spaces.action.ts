import { Action } from '@ngrx/store';
import { StorageSpace } from '../../models';

export enum StorageSpaceActionTypes {
  CreateStorageSpace = '[Storage Spaces] Create Storage Space',
  CreateStorageSpaceFail = '[Storage Spaces] Create Storage Space Fail',
  CreateStorageSpaceSuccess = '[Storage Spaces] Create Storage Space Success',
  LoadStorageSpaces = '[Storage Spaces] Load Storage Spaces',
  LoadStorageSpacesFail = '[Storage Spaces] Load Storage Spaces Fail',
  LoadStorageSpacesSuccess = '[Storage Spaces] Load Storage Spaces Success',
}

// load storage spaces
export class LoadStorageSpaces implements Action {
  readonly type: string = StorageSpaceActionTypes.LoadStorageSpaces;
  constructor(public payload?: any) {}
}

export class LoadStorageSpacesFail implements Action {
  readonly type: string = StorageSpaceActionTypes.LoadStorageSpacesFail;
  constructor(public payload: any) {}
}

export class LoadStorageSpacesSuccess implements Action {
  readonly type: string = StorageSpaceActionTypes.LoadStorageSpacesSuccess;
  constructor(public payload: StorageSpace[]) {}
}

// create storage space
export class CreateStorageSpace implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpace;
  constructor(public payload: StorageSpace) {}
}

export class CreateStorageSpaceFail implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpaceFail;
  constructor(public payload: any) {}
}

export class CreateStorageSpaceSuccess implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpaceSuccess;
  constructor(public payload: StorageSpace) {}
}

// action types
export type StorageSpacesAction =
  CreateStorageSpace
  | CreateStorageSpaceFail
  | CreateStorageSpaceSuccess
  | LoadStorageSpaces
  | LoadStorageSpacesFail
  | LoadStorageSpacesSuccess;
