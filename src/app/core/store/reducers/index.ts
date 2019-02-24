import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAssetProperties from './asset-properties.reducer';
import * as fromAssets from './assets.reducer';
import * as fromCategories from './categories.reducer';
import * as fromDecisions from './decisions.reducer';
import * as fromInstitutions from './institutions.reducer';
import * as fromLoading from './loading.reducer';
import * as fromRecoveryBeneficiaries from './recovery-beneficiaries.reducer';
import * as fromSolutions from './solutions.reducer';
import * as fromStages from './stages.reducer';
import * as fromStorageSpaces from './storage-spaces.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  assets: fromAssets.AssetState;
  assetProperties: fromAssetProperties.AssetPropertyState;
  categories: fromCategories.CategoryState;
  decisions: fromDecisions.DecisionState;
  institutions: fromInstitutions.InstitutionState;
  loading: fromLoading.LoadingState;
  recoveryBeneficiaries: fromRecoveryBeneficiaries.RecoveryBeneficiariesState;
  solutions: fromSolutions.SolutionState;
  stages: fromStages.StageState;
  storageSpaces: fromStorageSpaces.StorageSpaceState;
}

export const reducers: ActionReducerMap<CoreState> = {
  assets: fromAssets.reducer,
  assetProperties: fromAssetProperties.reducer,
  categories: fromCategories.reducer,
  decisions: fromDecisions.reducer,
  institutions: fromInstitutions.reducer,
  loading: fromLoading.reducer,
  recoveryBeneficiaries: fromRecoveryBeneficiaries.reducer,
  solutions: fromSolutions.reducer,
  stages: fromStages.reducer,
  storageSpaces: fromStorageSpaces.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { AssetState } from './assets.reducer';
export { AssetPropertyState } from './asset-properties.reducer';
export { CategoryState } from './categories.reducer';
export { DecisionState } from './decisions.reducer';
export { InstitutionState } from './institutions.reducer';
export { LoadingState } from './loading.reducer';
export { RecoveryBeneficiariesState } from './recovery-beneficiaries.reducer';
export { SolutionState } from './solutions.reducer';
export { StageState } from './stages.reducer';
export { StorageSpaceState } from './storage-spaces.reducer';
