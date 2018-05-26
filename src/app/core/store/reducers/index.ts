import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCategories from './categories.reducer';

export interface AppState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  categories: fromCategories.reducer,
};

export const getAppState = createFeatureSelector<AppState>('app');
