import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAssets from './assets.reducer';
import * as fromCategories from './categories.reducer';
import * as fromStages from './stages.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  categories: fromCategories.CategoryState;
  stages: fromStages.StageState;
  assets: fromAssets.AssetState;
}

export const reducers: ActionReducerMap<CoreState> = {
  categories: fromCategories.reducer,
  stages: fromStages.reducer,
  assets: fromAssets.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
