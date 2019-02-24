import { createSelector } from '@ngrx/store';

import { PrecautionaryMeasure } from '@app/core/models/precautionary-measure.model';
import * as fromFeature from '../reducers';
import * as fromPrecautionaryMeasures from '../reducers/precautionary-measures.reducer';

export const getPrecautionaryMeasureState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.precautionaryMeasures
);

export const getPrecautionaryMeasuresEntities = createSelector(
  getPrecautionaryMeasureState,
  fromPrecautionaryMeasures.getPrecautionaryMeasuresEntities
);

export const getPrecautionaryMeasuresEntitiesObjects = createSelector(
  getPrecautionaryMeasuresEntities,
  (aEntities) => {
    const theMeasures = Object.assign({}, aEntities);

    Object.keys(theMeasures).map((aKey) => {
      theMeasures[aKey] = new PrecautionaryMeasure(theMeasures[aKey]);
    });

    return theMeasures;
  }
);

export const getAllPrecautionaryMeasures = createSelector(getPrecautionaryMeasuresEntitiesObjects, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getPrecautionaryMeasuresLoaded = createSelector(
  getPrecautionaryMeasureState,
  fromPrecautionaryMeasures.getPrecautionaryMeasuresLoaded
);
export const getPrecautionaryMeasuresLoading = createSelector(
  getPrecautionaryMeasureState,
  fromPrecautionaryMeasures.getPrecautionaryMeasuresLoading
);
