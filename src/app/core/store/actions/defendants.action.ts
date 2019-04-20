import { Action } from '@ngrx/store';
import { Asset, Defendant } from '../../models';

// create defendant
export const DEFENDANT_CREATE = '[Defendants] Create Defendant';
export const DEFENDANT_CREATE_FAIL = '[Defendant] Create Defendant Fail';
export const DEFENDANT_CREATE_SUCCESS = '[Defendant] Create Defendant Success';

export class CreateDefendant implements Action {
  readonly type: string = DEFENDANT_CREATE;
  constructor(public payload: Defendant) {}
}

export class CreateDefendantFail implements Action {
  readonly type: string = DEFENDANT_CREATE_FAIL;
  constructor(public payload: any) {}
}

export class CreateDefendantSuccess implements Action {
  readonly type: string = DEFENDANT_CREATE_SUCCESS;
  constructor(public payload: Defendant) {}
}

// load defendants
export const DEFENDANTS_LOAD = '[Defendants] Load Defendants';
export const DEFENDANTS_LOAD_FAIL = '[Defendants] Load Defendants Fail';
export const DEFENDANTS_LOAD_SUCCESS = '[Defendants] Load Defendants Success';

export class LoadDefendants implements Action {
  readonly type: string = DEFENDANTS_LOAD;
  constructor(public payload: number) {}
}

export class LoadDefendantsFail implements Action {
  readonly type: string = DEFENDANTS_LOAD_FAIL;
  constructor(public payload: any) {}
}

export class LoadDefendantsSuccess implements Action {
  readonly type: string = DEFENDANTS_LOAD_SUCCESS;
  constructor(public payload: DefendantsSuccessPayload) {}
}

export interface DefendantsSuccessPayload {
  defendants: Defendant[];
  asset: Asset;
}

export interface DeleteDefendantPayload {
  assetId: number;
  defendantId: number;
}

export const DEFENDANT_DELETE = '[Defendants] Delete Defendant';
export const DEFENDANT_DELETE_FAIL = '[Defendants] Delete Defendant Fail';
export const DEFENDANT_DELETE_SUCCESS = '[Defendants] Delete Defendant Success';

export class DeleteDefendant implements Action {
  readonly type: string = DEFENDANT_DELETE;
  constructor(public payload: DeleteDefendantPayload) {}
}

export class DeleteDefendantFail implements Action {
  readonly type: string = DEFENDANT_DELETE_FAIL;
  constructor(public payload: string) {}
}

export class DeleteDefendantSuccess implements Action {
  readonly type: string = DEFENDANT_DELETE_SUCCESS;
  constructor(public payload: number) {}
}

// action types
export type DefendantsAction =
  CreateDefendant
  | CreateDefendantFail
  | CreateDefendantSuccess
  | LoadDefendants
  | LoadDefendantsFail
  | LoadDefendantsSuccess
  | DeleteDefendant
  | DeleteDefendantFail
  | DeleteDefendantSuccess;
