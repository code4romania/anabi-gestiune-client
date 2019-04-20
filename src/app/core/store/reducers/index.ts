import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAddresses from './addresses.reducer';
import * as fromAssetProperties from './asset-properties.reducer';
import * as fromAssets from './assets.reducer';
import * as fromCategories from './categories.reducer';
import * as fromCounties from './counties.reducer';
import * as fromCrimeTypes from './crime-types.reducer';
import * as fromDecisions from './decisions.reducer';
import * as fromDefendants from './defendants.reducer';
import * as fromIdentifiers from './identifiers.reducer';
import * as fromInstitutions from './institutions.reducer';
import * as fromLoading from './loading.reducer';
import * as fromPrecautionaryMeasures from './precautionary-measures.reducer';
import * as fromRecoveryBeneficiaries from './recovery-beneficiaries.reducer';
import * as fromSolutions from './solutions.reducer';
import * as fromStages from './stages.reducer';
import * as fromStorageSpaces from './storage-spaces.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  addresses: fromAddresses.AddressesState;
  assets: fromAssets.AssetState;
  assetProperties: fromAssetProperties.AssetPropertyState;
  categories: fromCategories.CategoryState;
  counties: fromCounties.CountyState;
  crimeTypes: fromCrimeTypes.CrimeTypesState;
  decisions: fromDecisions.DecisionState;
  defendants: fromDefendants.DefendantsState;
  identifiers: fromIdentifiers.IdentifierState;
  institutions: fromInstitutions.InstitutionState;
  loading: fromLoading.LoadingState;
  precautionaryMeasures: fromPrecautionaryMeasures.PrecautionaryMeasureState;
  recoveryBeneficiaries: fromRecoveryBeneficiaries.RecoveryBeneficiariesState;
  solutions: fromSolutions.SolutionState;
  stages: fromStages.StageState;
  storageSpaces: fromStorageSpaces.StorageSpaceState;
}

export const reducers: ActionReducerMap<CoreState> = {
  addresses: fromAddresses.reducer,
  assets: fromAssets.reducer,
  assetProperties: fromAssetProperties.reducer,
  categories: fromCategories.reducer,
  counties: fromCounties.reducer,
  crimeTypes: fromCrimeTypes.reducer,
  decisions: fromDecisions.reducer,
  defendants: fromDefendants.reducer,
  identifiers: fromIdentifiers.reducer,
  institutions: fromInstitutions.reducer,
  loading: fromLoading.reducer,
  precautionaryMeasures: fromPrecautionaryMeasures.reducer,
  recoveryBeneficiaries: fromRecoveryBeneficiaries.reducer,
  solutions: fromSolutions.reducer,
  stages: fromStages.reducer,
  storageSpaces: fromStorageSpaces.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { AddressesState } from './addresses.reducer';
export { AssetState } from './assets.reducer';
export { AssetPropertyState } from './asset-properties.reducer';
export { CategoryState } from './categories.reducer';
export { CountyState } from './counties.reducer';
export { CrimeTypesState } from './crime-types.reducer';
export { DecisionState } from './decisions.reducer';
export { DefendantsState } from './defendants.reducer';
export { IdentifierState } from './identifiers.reducer';
export { InstitutionState } from './institutions.reducer';
export { LoadingState } from './loading.reducer';
export { PrecautionaryMeasureState } from './precautionary-measures.reducer';
export { RecoveryBeneficiariesState } from './recovery-beneficiaries.reducer';
export { SolutionState } from './solutions.reducer';
export { StageState } from './stages.reducer';
export { StorageSpaceState } from './storage-spaces.reducer';
