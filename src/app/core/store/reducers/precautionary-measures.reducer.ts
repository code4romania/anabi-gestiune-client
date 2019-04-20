import { IPrecautionaryMeasure, PrecautionaryMeasure } from '../../models';
import * as fromPrecautionaryMeasures from '../actions/precautionary-measures.action';

export interface PrecautionaryMeasureState {
  entities: { [id: number]: IPrecautionaryMeasure };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PrecautionaryMeasureState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPrecautionaryMeasures.PrecautionaryMeasuresAction
): PrecautionaryMeasureState {

  switch (action.type) {
    case fromPrecautionaryMeasures.PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasures: {
      return {
        ...state,
        loading: true,
      } as PrecautionaryMeasureState;
    }

    case fromPrecautionaryMeasures.PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasuresSuccess: {
      const theMeasures = action.payload;
      const entities = theMeasures.reduce((aEntities: { [id: number]: PrecautionaryMeasure }, aMeasure: PrecautionaryMeasure) => {
        return {
          ...aEntities,
          [aMeasure.id]: aMeasure.toJson(),
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromPrecautionaryMeasures.PrecautionaryMeasuresActionTypes.LoadPrecautionaryMeasuresFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as PrecautionaryMeasureState;
    }

    default: {
      return {
        ...state,
      } as PrecautionaryMeasureState;
    }
  }
}

export const getPrecautionaryMeasuresEntities = (state: PrecautionaryMeasureState) => state.entities;
export const getPrecautionaryMeasuresLoading = (state: PrecautionaryMeasureState) => state.loading;
export const getPrecautionaryMeasuresLoaded = (state: PrecautionaryMeasureState) => state.loaded;
