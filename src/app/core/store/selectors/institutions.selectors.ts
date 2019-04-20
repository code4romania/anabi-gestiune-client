import { createSelector } from '@ngrx/store';

import { Institution } from '../../models/institution.model';
import * as fromFeature from '../reducers';
import * as fromInstitutions from '../reducers/institutions.reducer';

export const getInstitutionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.institutions
);

const getInstitutionsEntitiesAsInterfaces = createSelector(getInstitutionState, fromInstitutions.getInstitutionsEntities);

export const getInstitutionsEntities = createSelector(
  getInstitutionsEntitiesAsInterfaces,
  (aInstitutions) => {
    const theInstitutions = Object.assign({}, aInstitutions);

    Object.keys(theInstitutions).map((aKey) => {
      theInstitutions[aKey] = new Institution(theInstitutions[aKey]);
    });

    return theInstitutions;
  }
);

export const getAllInstitutions = createSelector(getInstitutionsEntities, (entities: Institution[]) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getInstitutionsLoaded = createSelector(getInstitutionState, fromInstitutions.getInstitutionsLoaded);
export const getInstitutionsLoading = createSelector(getInstitutionState, fromInstitutions.getInstitutionsLoading);
export const getInstitutionById = (aInstitutionId: number) => createSelector(
  getInstitutionsEntities,
  (entities) => entities[aInstitutionId] || undefined
);
