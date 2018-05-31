import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCategories from './categories.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<CoreState> = {
  categories: fromCategories.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
