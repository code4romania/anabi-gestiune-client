import { Action } from '@ngrx/store';
import { Asset, Defendant } from '../../models';

export enum DefendantsActionTypes {
  CreateDefendant = '[Defendants] Create Defendant',
  CreateDefendantFail = '[Defendant] Create Defendant Fail',
  CreateDefendantSuccess = '[Defendant] Create Defendant Success',
  LoadDefendants = '[Defendants] Load Defendants',
  LoadDefendantsFail = '[Defendants] Load Defendants Fail',
  LoadDefendantsSuccess = '[Defendants] Load Defendants Success',
}

// create defendant
export class CreateDefendant implements Action {
  readonly type: string = DefendantsActionTypes.CreateDefendant;
  constructor(public payload: Defendant) {}
}

export class CreateDefendantFail implements Action {
  readonly type: string = DefendantsActionTypes.CreateDefendantFail;
  constructor(public payload: any) {}
}

export class CreateDefendantSuccess implements Action {
  readonly type: string = DefendantsActionTypes.CreateDefendantSuccess;
  constructor(public payload: Defendant) {}
}

// load defendants
export class LoadDefendants implements Action {
  readonly type: string = DefendantsActionTypes.LoadDefendants;
  constructor(public payload: number) {}
}

export class LoadDefendantsFail implements Action {
  readonly type: string = DefendantsActionTypes.LoadDefendantsFail;
  constructor(public payload: any) {}
}

export class LoadDefendantsSuccess implements Action {
  readonly type: string = DefendantsActionTypes.LoadDefendantsSuccess;
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
  constructor(public payload: number) {}
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
