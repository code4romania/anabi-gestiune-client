import { Category, CategoryResponse } from '../../models';
import * as fromCategories from '../actions/categories.action';
import { initialState, reducer, CategoryState } from './categories.reducer';

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
    const theCategories = [
      new Category({
        id: 1,
        code: '1',
        description: 'First category',
        parentId: null,
        forEntity: 'test',
      } as CategoryResponse),
      new Category({
        id: 2,
        code: '2',
        description: 'Second category',
        parentId: null,
        forEntity: 'test',
      } as CategoryResponse),
    ];

    const expectedState = {
      ...initialState,
      entities: {
        1: theCategories[0],
        2: theCategories[1],
      },
      loaded: true,
      loading: false,
    };
    const actualState = reducer(initialState, new fromCategories.LoadCategoriesSuccess(theCategories));
    expect(actualState).toEqual(expectedState);
  });
});
