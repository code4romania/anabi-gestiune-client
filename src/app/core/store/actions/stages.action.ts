import { Action } from '@ngrx/store';
import { Stage } from '../../models';

export enum StageActionTypes {
  LoadStages = '[Stages] Load Stages',
  LoadStagesFail = '[Stages] Load Stages Fail',
  LoadStagesSuccess = '[Stages] Load Stages Success',
}

// load stages
export class LoadStages implements Action {
  readonly type: string = StageActionTypes.LoadStages;
  constructor(public payload?: any) {}
}

export class LoadStagesFail implements Action {
  readonly type: string = StageActionTypes.LoadStagesFail;
  constructor(public payload: any) {}
}

export class LoadStagesSuccess implements Action {
  readonly type: string = StageActionTypes.LoadStagesSuccess;
  constructor(public payload: Stage[]) {}
}

// action types
export type StagesAction = LoadStages | LoadStagesFail | LoadStagesSuccess;
