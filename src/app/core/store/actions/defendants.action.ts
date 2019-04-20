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

// action types
export type DefendantsAction =
  CreateDefendant
  | CreateDefendantFail
  | CreateDefendantSuccess
  | LoadDefendants
  | LoadDefendantsFail
  | LoadDefendantsSuccess;
