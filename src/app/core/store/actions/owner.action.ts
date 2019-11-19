import { Action } from '@ngrx/store';
import { Owner, OwnerPayload } from '../../models';

export enum OwnersActionTypes {
  CreateOwner = '[Owners] Create Owner',
  CreateOwnerFail = '[Owner] Create Owner Fail',
  CreateOwnerSuccess = '[Owner] Create Owner Success',
  LoadOwners = '[Owners] Load Owners',
  LoadOwnersFail = '[Owners] Load Owners Fail',
  LoadOwnersSuccess = '[Owners] Load Owners Success',
  DeleteOwner = '[Owners] Delete Owner',
  DeleteOwnerFail = '[Owners] Delete Owner Fail',
  DeleteOwnerSuccess = '[Owners] Delete Owner Success',
  UpdateOwner = '[Owners] Update Owner',
  UpdateOwnerFail = '[Owners] Update Owner Fail',
  UpdateOwnerSuccess = '[Owners] Update Owner Success',
}

export class CreateOwner implements Action {
  readonly type: string = OwnersActionTypes.CreateOwner;
  constructor(public payload: Owner) {}
}

export class CreateOwnerFail implements Action {
  readonly type: string = OwnersActionTypes.CreateOwnerFail;
  constructor(public payload: any) {}
}

export class CreateOwnerSuccess implements Action {
  readonly type: string = OwnersActionTypes.CreateOwnerSuccess;
  constructor(public payload: Owner) {}
}

// load defendants
export class LoadOwners implements Action {
  readonly type: string = OwnersActionTypes.LoadOwners;
  constructor(public payload: number) {}
}

export class LoadOwnersFail implements Action {
  readonly type: string = OwnersActionTypes.LoadOwnersFail;
  constructor(public payload: number) {}
}

export class LoadOwnersSuccess implements Action {
  readonly type: string = OwnersActionTypes.LoadOwnersSuccess;
  constructor(public payload: OwnerPayload) {}
}

export class DeleteOwner implements Action {
  readonly type: string = OwnersActionTypes.DeleteOwner;
  constructor(public payload: Owner) {}
}

export class DeleteOwnerFail implements Action {
  readonly type: string = OwnersActionTypes.DeleteOwnerFail;
  constructor(public payload: number) {}
}

export class DeleteOwnerSuccess implements Action {
  readonly type: string = OwnersActionTypes.DeleteOwnerSuccess;
  constructor(public payload: number) {}
}

export class UpdateOwner implements Action {
  readonly type: string = OwnersActionTypes.UpdateOwner;
  constructor(public payload: Owner) {}
}

export class UpdateOwnerFail implements Action {
  readonly type: string = OwnersActionTypes.UpdateOwnerFail;
  constructor(public payload: Owner) {}
}

export class UpdateOwnerSuccess implements Action {
  readonly type: string = OwnersActionTypes.UpdateOwnerSuccess;
  constructor(public payload: Owner) {}
}

// action types
export type OwnersAction =
  CreateOwner
  | CreateOwnerFail
  | CreateOwnerSuccess
  | LoadOwners
  | LoadOwnersFail
  | LoadOwnersSuccess
  | DeleteOwner
  | DeleteOwnerFail
  | DeleteOwnerSuccess
  | UpdateOwner
  | UpdateOwnerFail
  | UpdateOwnerSuccess;
