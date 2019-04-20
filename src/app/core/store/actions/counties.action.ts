import { Action } from '@ngrx/store';
import { County } from '../../models';

export enum CountyActionTypes {
  LoadCounties = '[Counties] Load Counties',
  LoadCountiesFail = '[Counties] Load Counties Fail',
  LoadCountiesSuccess = '[Counties] Load Counties Success',
}

// load counties
export class LoadCounties implements Action {
  readonly type: string = CountyActionTypes.LoadCounties;
  constructor(public payload?: any) {}
}

export class LoadCountiesFail implements Action {
  readonly type: string = CountyActionTypes.LoadCountiesFail;
  constructor(public payload: any) {}
}

export class LoadCountiesSuccess implements Action {
  readonly type: string = CountyActionTypes.LoadCountiesSuccess;
  constructor(public payload: County[]) {}
}

// action types
export type CountiesAction = LoadCounties | LoadCountiesFail | LoadCountiesSuccess;
