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

// load asset detail
export const LOAD_ASSET_DETAIL = '[Assets] Load Asset Detail';
export const LOAD_ASSET_DETAIL_FAIL = '[Assets] Load Asset Detail Fail';
export const LOAD_ASSET_DETAIL_SUCCESS = '[Assets] Load Asset Detail Success';

export class LoadAssetDetail implements Action {
  readonly type: string = LOAD_ASSET_DETAIL;
  constructor(public payload: number) {}
}

export class LoadAssetDetailFail implements Action {
  readonly type: string = LOAD_ASSET_DETAIL_FAIL;
  constructor(public payload: any) {}
}

export class LoadAssetDetailSuccess implements Action {
  readonly type: string = LOAD_ASSET_DETAIL_SUCCESS;
  constructor(public payload: Asset) {}
}

// create asset
export const CREATE_ASSET_SUCCESS = '[Assets] Create Asset Success';

export class CreateAssetSuccess implements Action {
  readonly type: string = CREATE_ASSET_SUCCESS;
  constructor(public payload: Asset) {}
}

// update asset
export const ASSET_UPDATE = '[Assets] Update Asset';
export const ASSET_UPDATE_FAIL = '[Assets] Update Asset Fail';
export const ASSET_UPDATE_SUCCESS = '[Assets] Update Asset Success';

export class UpdateAsset implements Action {
  readonly type: string = ASSET_UPDATE;
  constructor(public payload: Asset) {}
}

export class UpdateAssetFail implements Action {
  readonly type: string = ASSET_UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateAssetSuccess implements Action {
  readonly type: string = ASSET_UPDATE_SUCCESS;
  constructor(public payload: Asset) {}
}

// action types
export type AssetsAction =
  CreateAssetSuccess
  | LoadAssets
  | LoadAssetsFail
  | LoadAssetsSuccess
  | LoadAssetDetail
  | LoadAssetDetailFail
  | LoadAssetDetailSuccess
  | UpdateAsset
  | UpdateAssetFail
  | UpdateAssetSuccess;
