import { Action } from '@ngrx/store';
import { Defendant } from '../../models';

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

// action types
export type DefendantsAction =
  CreateDefendant
  | CreateDefendantFail
  | CreateDefendantSuccess;
