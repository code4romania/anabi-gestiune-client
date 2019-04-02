import { Action } from '@ngrx/store';
import { StorageSpace } from '../../models';

// load storage spaces
export const LOAD_STORAGE_SPACES = '[Storage Spaces] Load Storage Spaces';
export const LOAD_STORAGE_SPACES_FAIL = '[Storage Spaces] Load Storage Spaces Fail';
export const LOAD_STORAGE_SPACES_SUCCESS = '[Storage Spaces] Load Storage Spaces Success';

export class LoadStorageSpaces implements Action {
  readonly type: string = LOAD_STORAGE_SPACES;
  constructor(public payload?: any) {}
}

export class LoadStorageSpacesFail implements Action {
  readonly type: string = LOAD_STORAGE_SPACES_FAIL;
  constructor(public payload: any) {}
}

export class LoadStorageSpacesSuccess implements Action {
  readonly type: string = LOAD_STORAGE_SPACES_SUCCESS;
  constructor(public payload: StorageSpace[]) {}
}

// create storage space
export const STORAGE_SPACE_CREATE = '[Storage Spaces] Create Storage Space';
export const STORAGE_SPACE_CREATE_FAIL = '[Storage Spaces] Create Storage Space Fail';
export const STORAGE_SPACE_CREATE_SUCCESS = '[Storage Spaces] Create Storage Space Success';

export class CreateStorageSpace implements Action {
  readonly type: string = STORAGE_SPACE_CREATE;
  constructor(public payload: StorageSpace) {}
}

export class CreateStorageSpaceFail implements Action {
  readonly type: string = STORAGE_SPACE_CREATE_FAIL;
  constructor(public payload: any) {}
}

export class CreateStorageSpaceSuccess implements Action {
  readonly type: string = STORAGE_SPACE_CREATE_SUCCESS;
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
