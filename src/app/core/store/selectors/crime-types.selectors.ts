import { createSelector } from '@ngrx/store';

import { CrimeType } from '@app/core/models/crime-type.model';
import * as fromFeature from '../reducers';
import * as fromCrimeTypes from '../reducers/crime-types.reducer';

export const getCrimeTypesState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.crimeTypes
);

const getCrimeTypesEntitiesAsInterfaces = createSelector(getCrimeTypesState, fromCrimeTypes.getCrimeTypesEntities);

export const getCrimeTypesEntities = createSelector(
  getCrimeTypesEntitiesAsInterfaces,
  (aEntities) => {
    const theCrimeTypes = Object.assign({}, aEntities);

    Object.keys(theCrimeTypes).map((aKey) => {
      theCrimeTypes[aKey] = new CrimeType(theCrimeTypes[aKey]);
    });

    return theCrimeTypes;
  }
);

export const getAllCrimeTypes = createSelector(
  getCrimeTypesEntities,
  (entities: CrimeType[]) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getCrimeTypesLoaded = createSelector(getCrimeTypesState, fromCrimeTypes.getCrimeTypesLoaded);
export const getCrimeTypesLoading = createSelector(getCrimeTypesState, fromCrimeTypes.getCrimeTypesLoading);
