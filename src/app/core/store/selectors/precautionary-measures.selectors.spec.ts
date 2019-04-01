import { PrecautionaryMeasure, PrecautionaryMeasureResponse } from '../../models';
import { CoreState, State } from '../reducers/index';
import { PrecautionaryMeasureState } from '../reducers/precautionary-measures.reducer';
import * as fromSelectors from './precautionary-measures.selectors';

import { precautionaryMeasures } from '@app/core/models/mock-data';

describe('Precautionary Measures Selectors', () => {
  let state: State;
  let coreState: CoreState;

  const theMeasures = precautionaryMeasures;

  beforeEach(() => {
    state = {
      core: {
        precautionaryMeasures: {
          entities: {
            1: theMeasures[0],
            2: theMeasures[1],
            3: theMeasures[2],
          },
          loaded: true,
          loading: false,
        } as PrecautionaryMeasureState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getPrecautionaryMeasureState', () => {
    it('should get the PrecautionaryMeasure state', () => {
      expect(fromSelectors.getPrecautionaryMeasureState(state)).toEqual(coreState.precautionaryMeasures);
    });
  });

  describe('getPrecautionaryMeasuresEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getPrecautionaryMeasuresEntities(state)).toEqual(coreState.precautionaryMeasures.entities);
    });
  });

  describe('getPrecautionaryMeasuresEntitiesObjects', () => {
    it('should get the entities as instances of PrecautionaryMeasure model', () => {
      const expectedResult = theMeasures
        .map(a => new PrecautionaryMeasure(a))
        .reduce(((aMeasures, aMeasure: PrecautionaryMeasure) => {
          return {
            ...aMeasures,
            [aMeasure.id]: aMeasure,
          };
        }), {});

      expect(fromSelectors.getPrecautionaryMeasuresEntitiesObjects(state)).toEqual(expectedResult);
    });
  });

  describe('getAllPrecautionaryMeasures', () => {
    it('should get the precautionary measures as array', () => {
      const expectedResult = theMeasures.map(a => new PrecautionaryMeasure(a));
      expect(fromSelectors.getAllPrecautionaryMeasures(state)).toEqual(expectedResult);
    });
  });

  describe('getPrecautionaryMeasuresLoaded', () => {
    it('should get the loaded status', () => {
      expect(fromSelectors.getPrecautionaryMeasuresLoaded(state)).toEqual(coreState.precautionaryMeasures.loaded);
    });
  });

  describe('getPrecautionaryMeasuresLoading', () => {
    it('should get the loading status', () => {
      expect(fromSelectors.getPrecautionaryMeasuresLoading(state)).toEqual(coreState.precautionaryMeasures.loading);
    });
  });
});
