import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';

export const getCategoryState = createSelector(
  fromFeature.getAppState,
  (state: fromFeature.AppState) => state.categories
);

export const getCategoriesEntities = createSelector(getCategoryState, fromCategories.getCategoriesEntities);

export const getAllCategories = createSelector(getCategoriesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getCategoriesLoaded = createSelector(getCategoryState, fromCategories.getCategoriesLoaded);
export const getCategoriesLoading = createSelector(getCategoryState, fromCategories.getCategoriesLoading);
