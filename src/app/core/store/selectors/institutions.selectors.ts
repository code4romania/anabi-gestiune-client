import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromInstitutions from '../reducers/institutions.reducer';

export const getInstitutionState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.institutions
);

export const getInstitutionsEntities = createSelector(getInstitutionState, fromInstitutions.getInstitutionsEntities);

export const getAllInstitutions = createSelector(getInstitutionsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getInstitutionsLoaded = createSelector(getInstitutionState, fromInstitutions.getInstitutionsLoaded);
export const getInstitutionsLoading = createSelector(getInstitutionState, fromInstitutions.getInstitutionsLoading);
export const getInstitutionById = (aInstitutionId: number) => createSelector(
  getInstitutionsEntities,
  (entities) => entities[aInstitutionId] || undefined
);
