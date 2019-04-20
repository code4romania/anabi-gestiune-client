import { createSelector } from '@ngrx/store';

import { RecoveryBeneficiary } from '@app/core/models';
import * as fromFeature from '../reducers';
import * as fromRecoveryBeneficiaries from '../reducers/recovery-beneficiaries.reducer';

export const getRecoveryBeneficiariesState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.recoveryBeneficiaries
);

const getRecoveryBeneficiariesEntitiesAsInterfaces = createSelector(
  getRecoveryBeneficiariesState,
  fromRecoveryBeneficiaries.getRecoveryBeneficiariesEntities
);

export const getRecoveryBeneficiariesEntities = createSelector(
  getRecoveryBeneficiariesEntitiesAsInterfaces,
  (aEntities) => {
    const theBeneficiaries = Object.assign({}, aEntities);
    const theResult: { [id: number]: RecoveryBeneficiary } = {};

    Object.keys(theBeneficiaries).map((aKey) => {
      theResult[aKey] = new RecoveryBeneficiary(theBeneficiaries[aKey]);
    });

    return theResult;
  }
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
