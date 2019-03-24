import { Action } from '@ngrx/store';
import { CrimeType } from '../../models';

// load crime types
export const CRIME_TYPES_LOAD = '[Crime Types] Load Crime Types';
export const CRIME_TYPES_LOAD_FAIL = '[Crime Types] Load Crime Types Fail';
export const CRIME_TYPES_LOAD_SUCCESS = '[Crime Types] Load Crime Types Success';

export class LoadCrimeTypes implements Action {
  readonly type: string = CRIME_TYPES_LOAD;
  constructor(public payload?: any) {}
}

export class LoadCrimeTypesFail implements Action {
  readonly type: string = CRIME_TYPES_LOAD_FAIL;
  constructor(public payload: any) {}
}

export class LoadCrimeTypesSuccess implements Action {
  readonly type: string = CRIME_TYPES_LOAD_SUCCESS;
  constructor(public payload: CrimeType[]) {}
}

// action types
export type CrimeTypesAction =
  LoadCrimeTypes
  | LoadCrimeTypesFail
  | LoadCrimeTypesSuccess;
