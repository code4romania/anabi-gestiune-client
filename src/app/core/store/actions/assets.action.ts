import { Action } from '@ngrx/store';
import { Asset } from '../../models';

// load assets
export const LOAD_ASSETS = '[Assets] Load Assets';
export const LOAD_ASSETS_FAIL = '[Assets] Load Assets Fail';
export const LOAD_ASSETS_SUCCESS = '[Assets] Load Assets Success';

export class LoadAssets implements Action {
  readonly type: string = LOAD_ASSETS;
  constructor(public payload?: any) {}
}

export class LoadAssetsFail implements Action {
  readonly type: string = LOAD_ASSETS_FAIL;
  constructor(public payload: any) {}
}

export class LoadAssetsSuccess implements Action {
  readonly type: string = LOAD_ASSETS_SUCCESS;
  constructor(public payload: Asset[]) {}
}

// action types
export type AssetsAction = LoadAssets | LoadAssetsFail | LoadAssetsSuccess;
