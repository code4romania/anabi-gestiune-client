import { Action } from '@ngrx/store';
import { StorageSpace } from '../../models';

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
  | CreateStorageSpaceSuccess;
