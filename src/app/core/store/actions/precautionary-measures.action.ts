import { Action } from '@ngrx/store';
import { PrecautionaryMeasure } from '../../models';

export enum PrecautionaryMeasuresActionTypes {
  LoadPrecautionaryMeasures = '[Precautionary Measures] Load Precautionary Measures',
  LoadPrecautionaryMeasuresFail = '[Precautionary Measures] Load Precautionary Measures Fail',
  LoadPrecautionaryMeasuresSuccess = '[Precautionary Measures] Load Precautionary Measures Success',
}

// load precautionary measures
export class LoadPrecautionaryMeasures implements Action {
  readonly type: string = PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasures;
  constructor(public payload?: any) {}
}

export class LoadPrecautionaryMeasuresFail implements Action {
  readonly type: string = PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasuresFail;
  constructor(public payload: any) {}
}

export class LoadPrecautionaryMeasuresSuccess implements Action {
  readonly type: string = PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasuresSuccess;
  constructor(public payload: PrecautionaryMeasure[]) {}
}

// action types
export type PrecautionaryMeasuresAction =
  LoadPrecautionaryMeasures
  | LoadPrecautionaryMeasuresFail
  | LoadPrecautionaryMeasuresSuccess;
