import { Category } from '../../models';
import * as fromCategories from '../actions/categories.action';

export interface CategoryState {
  entities: { [id: number]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromCategories.CategoriesAction
): CategoryState {

  switch (action.type) {
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true,
      } as CategoryState;
    }

    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      const theCategories = action.payload;
      const entities = theCategories.reduce((aEntities: { [id: number]: Category }, aCategory: Category) => {
        return {
          ...aEntities,
          [aCategory.id]: aCategory,
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as CategoryState;
    }
  }
}

export const getCategoriesEntities = (state: CategoryState) => state.entities;
export const getCategoriesLoading = (state: CategoryState) => state.loading;
export const getCategoriesLoaded = (state: CategoryState) => state.loaded;
