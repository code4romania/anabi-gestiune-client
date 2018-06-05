import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCategories from './categories.reducer';
import * as fromStages from './stages.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  categories: fromCategories.CategoryState;
  stages: fromStages.StageState;
}

export const reducers: ActionReducerMap<CoreState> = {
  categories: fromCategories.reducer,
  stages: fromStages.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
