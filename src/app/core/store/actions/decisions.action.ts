import { Action } from '@ngrx/store';
import { Decision } from '../../models';

// load decisions
export const LOAD_DECISIONS = '[Decisions] Load Decisions';
export const LOAD_DECISIONS_FAIL = '[Decisions] Load Decisions Fail';
export const LOAD_DECISIONS_SUCCESS = '[Decisions] Load Decisions Success';

export class LoadDecisions implements Action {
  readonly type: string = LOAD_DECISIONS;
  constructor(public payload?: any) {}
}

export class LoadDecisionsFail implements Action {
  readonly type: string = LOAD_DECISIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadDecisionsSuccess implements Action {
  readonly type: string = LOAD_DECISIONS_SUCCESS;
  constructor(public payload: Decision[]) {}
}

// action types
export type DecisionsAction =
  LoadDecisions
  | LoadDecisionsFail
  | LoadDecisionsSuccess;
