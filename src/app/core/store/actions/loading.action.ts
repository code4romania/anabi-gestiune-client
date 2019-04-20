import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  ShowLoading = '[Loading] Show',
  HideLoading = '[Loading] Hide',
}

// show/hide
export class ShowLoading implements Action {
  readonly type: string = LoadingActionTypes.ShowLoading;
  constructor(public payload?: any) {}
}

export class HideLoading implements Action {
  readonly type: string = LoadingActionTypes.HideLoading;
  constructor(public payload?: any) {}
}

// action types
export type LoadingAction = ShowLoading | HideLoading;
