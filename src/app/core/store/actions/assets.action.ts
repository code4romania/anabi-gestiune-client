import { Action } from '@ngrx/store';
import { Asset } from '../../models';

export enum AssetActionTypes {
  CreateAssetSuccess = '[Assets] Create Asset Success',
  LoadAssets = '[Assets] Load Assets',
  LoadAssetsFail = '[Assets] Load Assets Fail',
  LoadAssetsSuccess = '[Assets] Load Assets Success',
  LoadAssetDetail = '[Assets] Load Asset Detail',
  LoadAssetDetailFail = '[Assets] Load Asset Detail Fail',
  LoadAssetDetailSuccess = '[Assets] Load Asset Detail Success',
  UpdateAsset = '[Assets] Update Asset',
  UpdateAssetFail = '[Assets] Update Asset Fail',
  UpdateAssetSuccess = '[Assets] Update Asset Success',
}

// load assets
export class LoadAssets implements Action {
  readonly type: string = AssetActionTypes.LoadAssets;
  constructor(public payload?: any) {}
}

export class LoadAssetsFail implements Action {
  readonly type: string = AssetActionTypes.LoadAssetsFail;
  constructor(public payload: any) {}
}

export class LoadAssetsSuccess implements Action {
  readonly type: string = AssetActionTypes.LoadAssetsSuccess;
  constructor(public payload: Asset[]) {}
}

// load asset detail
export class LoadAssetDetail implements Action {
  readonly type: string = AssetActionTypes.LoadAssetDetail;
  constructor(public payload: number) {}
}

export class LoadAssetDetailFail implements Action {
  readonly type: string = AssetActionTypes.LoadAssetDetailFail;
  constructor(public payload: any) {}
}

export class LoadAssetDetailSuccess implements Action {
  readonly type: string = AssetActionTypes.LoadAssetDetailSuccess;
  constructor(public payload: Asset) {}
}

// create asset
export class CreateAssetSuccess implements Action {
  readonly type: string = AssetActionTypes.CreateAssetSuccess;
  constructor(public payload: Asset) {}
}

// update asset
export class UpdateAsset implements Action {
  readonly type: string = AssetActionTypes.UpdateAsset;
  constructor(public payload: Asset) {}
}

export class UpdateAssetFail implements Action {
  readonly type: string = AssetActionTypes.UpdateAssetFail;
  constructor(public payload: any) {}
}

export class UpdateAssetSuccess implements Action {
  readonly type: string = AssetActionTypes.UpdateAssetSuccess;
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
