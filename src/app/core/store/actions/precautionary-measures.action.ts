import { Action } from '@ngrx/store';
import { PrecautionaryMeasure } from '../../models';

// load precautionary measures
export const LOAD_PRECAUTIONARY_MEASURES = '[Precautionary Measures] Load Precautionary Measures';
export const LOAD_PRECAUTIONARY_MEASURES_FAIL = '[Precautionary Measures] Load Precautionary Measures Fail';
export const LOAD_PRECAUTIONARY_MEASURES_SUCCESS = '[Precautionary Measures] Load Precautionary Measures Success';

export class LoadPrecautionaryMeasures implements Action {
  readonly type: string = LOAD_PRECAUTIONARY_MEASURES;
  constructor(public payload?: any) {}
}

export class LoadPrecautionaryMeasuresFail implements Action {
  readonly type: string = LOAD_PRECAUTIONARY_MEASURES_FAIL;
  constructor(public payload: any) {}
}

export class LoadPrecautionaryMeasuresSuccess implements Action {
  readonly type: string = LOAD_PRECAUTIONARY_MEASURES_SUCCESS;
  constructor(public payload: PrecautionaryMeasure[]) {}
}

// action types
export type PrecautionaryMeasuresAction =
  LoadPrecautionaryMeasures
  | LoadPrecautionaryMeasuresFail
  | LoadPrecautionaryMeasuresSuccess;
