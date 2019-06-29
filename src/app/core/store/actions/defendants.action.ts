import { Action } from '@ngrx/store';
import { Defendant } from '../../models';

export enum DefendantsActionTypes {
  CreateDefendant = '[Defendants] Create Defendant',
  CreateDefendantFail = '[Defendant] Create Defendant Fail',
  CreateDefendantSuccess = '[Defendant] Create Defendant Success',
  LoadDefendants = '[Defendants] Load Defendants',
  LoadDefendantsFail = '[Defendants] Load Defendants Fail',
  LoadDefendantsSuccess = '[Defendants] Load Defendants Success',
  DeleteDefendant = '[Defendants] Delete Defendant',
  DeleteDefendantFail = '[Defendants] Delete Defendant Fail',
  DeleteDefendantSuccess = '[Defendants] Delete Defendant Success',
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
  constructor(public payload: Defendant[]) {}
}

export class DeleteDefendant implements Action {
  readonly type: string = DefendantsActionTypes.DeleteDefendant;
  constructor(public payload: Defendant) {}
}

export class DeleteDefendantFail implements Action {
  readonly type: string = DefendantsActionTypes.DeleteDefendantFail;
  constructor(public payload: number) {}
}

export class DeleteDefendantSuccess implements Action {
  readonly type: string = DefendantsActionTypes.DeleteDefendantSuccess;
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
