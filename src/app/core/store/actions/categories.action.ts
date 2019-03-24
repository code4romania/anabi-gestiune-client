import { Action } from '@ngrx/store';
import { Category } from '../../models';

export enum CategoryActionTypes {
  LoadCategories = '[Categories] Load Categories',
  LoadCategoriesFail = '[Categories] Load Categories Fail',
  LoadCategoriesSuccess = '[Categories] Load Categories Success',
}

// load categories
export class LoadCategories implements Action {
  readonly type: string = CategoryActionTypes.LoadCategories;
  constructor(public payload?: any) {}
}

export class LoadCategoriesFail implements Action {
  readonly type: string = CategoryActionTypes.LoadCategoriesFail;
  constructor(public payload: any) {}
}

export class LoadCategoriesSuccess implements Action {
  readonly type: string = CategoryActionTypes.LoadCategoriesSuccess;
  constructor(public payload: Category[]) {}
}

// action types
export type CategoriesAction = LoadCategories | LoadCategoriesFail | LoadCategoriesSuccess;
