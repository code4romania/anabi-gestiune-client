import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAssets from './assets.reducer';
import * as fromCategories from './categories.reducer';
import * as fromLoading from './loading.reducer';
import * as fromRecoveryBeneficiaries from './recovery-beneficiaries.reducer';
import * as fromStages from './stages.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  assets: fromAssets.AssetState;
  categories: fromCategories.CategoryState;
  loading: fromLoading.LoadingState;
  recoveryBeneficiaries: fromRecoveryBeneficiaries.RecoveryBeneficiariesState;
  stages: fromStages.StageState;
}

export const reducers: ActionReducerMap<CoreState> = {
  assets: fromAssets.reducer,
  categories: fromCategories.reducer,
  loading: fromLoading.reducer,
  recoveryBeneficiaries: fromRecoveryBeneficiaries.reducer,
  stages: fromStages.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { AssetState } from './assets.reducer';
export { CategoryState } from './categories.reducer';
export { LoadingState } from './loading.reducer';
export { RecoveryBeneficiariesState } from './recovery-beneficiaries.reducer';
export { StageState } from './stages.reducer';
