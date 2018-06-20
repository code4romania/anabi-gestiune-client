import { Action } from '@ngrx/store';
import { Category } from '../../models';

// load categories
export const LOAD_CATEGORIES = '[Categories] Load Categories';
export const LOAD_CATEGORIES_FAIL = '[Categories] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';

export class LoadCategories implements Action {
  readonly type: string = LOAD_CATEGORIES;
  constructor(public payload?: any) {}
}

export class LoadCategoriesFail implements Action {
  readonly type: string = LOAD_CATEGORIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadCategoriesSuccess implements Action {
  readonly type: string = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}

// action types
export type CategoriesAction = LoadCategories | LoadCategoriesFail | LoadCategoriesSuccess;
