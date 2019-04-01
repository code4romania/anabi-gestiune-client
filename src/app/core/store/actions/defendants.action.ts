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

// action types
export type DefendantsAction =
  CreateDefendant
  | CreateDefendantFail
  | CreateDefendantSuccess
  | LoadDefendants
  | LoadDefendantsFail
  | LoadDefendantsSuccess;
