import { Action } from '@ngrx/store';
import { CrimeType } from '../../models';

export enum CrimeTypeActionTypes {
  LoadCrimeTypes = '[Crime Types] Load Crime Types',
  LoadCrimeTypesFail = '[Crime Types] Load Crime Types Fail',
  LoadCrimeTypesSuccess = '[Crime Types] Load Crime Types Success',
}

// load crime types
export class LoadCrimeTypes implements Action {
  readonly type: string = CrimeTypeActionTypes.LoadCrimeTypes;
  constructor(public payload?: any) {}
}

export class LoadCrimeTypesFail implements Action {
  readonly type: string = CrimeTypeActionTypes.LoadCrimeTypesFail;
  constructor(public payload: any) {}
}

export class LoadCrimeTypesSuccess implements Action {
  readonly type: string = CrimeTypeActionTypes.LoadCrimeTypesSuccess;
  constructor(public payload: CrimeType[]) {}
}

// action types
export type CrimeTypesAction =
  LoadCrimeTypes
  | LoadCrimeTypesFail
  | LoadCrimeTypesSuccess;
