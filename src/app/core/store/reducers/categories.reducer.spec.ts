import { Category, CategoryResponse } from '../../models';
import * as fromCategories from '../actions/categories.action';
import { initialState, reducer, CategoryState } from './categories.reducer';

import { categories as mockCategories } from '../../models/mock-data';

describe('Categories Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION'} as fromCategories.CategoriesAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should set loading to true on LOAD_CATEGORIES', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    } as CategoryState;
    const actualState = reducer(initialState, new fromCategories.LoadCategories());
    expect(actualState).toEqual(expectedState);
  });

  it('should set entities and loaded to true on LOAD_CATEGORIES_SUCCESS', () => {
    const theCategories = [ mockCategories[0], mockCategories[1] ];

    const expectedState = {
      ...initialState,
      entities: {
        1: theCategories[0].toJson(),
        2: theCategories[1].toJson(),
      },
      loaded: true,
      loading: false,
    };
    const actualState = reducer(initialState, new fromCategories.LoadCategoriesSuccess(theCategories));
    expect(actualState).toEqual(expectedState);
  });
});
