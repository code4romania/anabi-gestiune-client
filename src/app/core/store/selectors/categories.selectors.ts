import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';

export const getCategoryState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.categories
);

export const getCategoriesEntities = createSelector(getCategoryState, fromCategories.getCategoriesEntities);

export const getAllCategories = createSelector(getCategoriesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getCategoriesLoaded = createSelector(getCategoryState, fromCategories.getCategoriesLoaded);
export const getCategoriesLoading = createSelector(getCategoryState, fromCategories.getCategoriesLoading);
export const getCategoryById = (aCategoryId: number) => createSelector(
  getCategoriesEntities,
  (entities) => entities[aCategoryId] || undefined
);
export const getParentCategories = createSelector(
  getAllCategories,
  (aCategories) => aCategories.filter(aCategory => aCategory.parentId === null)
);
export const getSubcategories = (aParentCategoryId: number) => createSelector(
  getAllCategories,
  (aCategories) => aCategories.filter(aCategory => aCategory.parentId === aParentCategoryId)
);
export const getCategoryByName = (aCategoryName: string) => createSelector(
  getAllCategories,
  (aCategories) => aCategories.find(aCategory => aCategory.name === aCategoryName)
);
export const getAssetParentCategories = createSelector(
  getParentCategories,
  (aCategories) => aCategories.filter(aCategory => aCategory.isAssetEntity())
);
export const getAssetSubcategories = (aParentCategoryId: number) => createSelector(
  getAllCategories,
  (aCategories) => aCategories.filter(aCategory => aCategory.parentId === aParentCategoryId && aCategory.isAssetEntity())
);
