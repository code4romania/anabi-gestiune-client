import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromRecoveryBeneficiaries from '../reducers/recovery-beneficiaries.reducer';

export const getRecoveryBeneficiariesState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.recoveryBeneficiaries
);

export const getRecoveryBeneficiariesEntities = createSelector(
  getRecoveryBeneficiariesState,
  fromRecoveryBeneficiaries.getRecoveryBeneficiariesEntities
);

export const getAllRecoveryBeneficiaries = createSelector(getRecoveryBeneficiariesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getRecoveryBeneficiariesLoaded = createSelector(
  getRecoveryBeneficiariesState,
  fromRecoveryBeneficiaries.getRecoveryBeneficiariesLoaded
);

export const getRecoveryBeneficiariesLoading = createSelector(
  getRecoveryBeneficiariesState,
  fromRecoveryBeneficiaries.getRecoveryBeneficiariesLoading
);
