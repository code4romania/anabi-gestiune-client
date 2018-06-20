import { Action } from '@ngrx/store';

// load stages
export const SHOW_LOADING = '[Loading] Show';
export const HIDE_LOADING = '[Loading] Hide';

export class ShowLoading implements Action {
  readonly type: string = SHOW_LOADING;
  constructor(public payload?: any) {}
}

export class HideLoading implements Action {
  readonly type: string = HIDE_LOADING;
  constructor(public payload?: any) {}
}

// action types
export type LoadingAction = ShowLoading | HideLoading;
