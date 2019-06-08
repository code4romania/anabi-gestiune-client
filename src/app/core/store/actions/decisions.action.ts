import { Action } from '@ngrx/store';
import { Decision } from '../../models';

export enum DecisionsActionTypes {
  LoadDecisions = '[Decisions] Load Decisions',
  LoadDecisionsFail = '[Decisions] Load Decisions Fail',
  LoadDecisionsSuccess = '[Decisions] Load Decisions Success',
  LoadSearchDecisions = '[Decisions] Load Search Decisions',
  LoadSearchDecisionsFail = '[Decisions] Load Search Decisions Fail',
  LoadSearchDecisionsSuccess = '[Decisions] Load Search Decisions Success',
}

// load decisions
export class LoadDecisions implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisions;
  constructor(public payload?: any) {}
}

export class LoadDecisionsFail implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisionsFail;
  constructor(public payload: any) {}
}

export class LoadDecisionsSuccess implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisionsSuccess;
  constructor(public payload: Decision[]) {}
}

// load search decisions
export class LoadSearchDecisions implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisions;
  constructor(public payload?: string) {}
}

export class LoadSearchDecisionsFail implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisionsFail;
  constructor(public payload: any) {}
}

export class LoadSearchDecisionsSuccess implements Action {
  readonly type: string = DecisionsActionTypes.LoadDecisionsSuccess;
  constructor(public payload: Decision[]) {}
}

// action types
export type DecisionsAction =
  LoadDecisions
  | LoadDecisionsFail
  | LoadDecisionsSuccess
  | LoadSearchDecisions
  | LoadSearchDecisionsFail
  | LoadSearchDecisionsSuccess;
