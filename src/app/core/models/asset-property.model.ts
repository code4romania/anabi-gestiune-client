import { Asset } from '@app/core';

export enum AssetPropertyType {
  Address = 'Address',
  Defendant = 'Defendant',
  Solution = 'Solution',
  StorageSpace = 'StorageSpace',
}

export abstract class AssetProperty {
  protected asset: Asset;
  protected assetId: number;
  private _type: AssetPropertyType;

  protected constructor(aType: AssetPropertyType) {
    this._type = aType;
  }

  setAsset(aAsset: Asset) {
    this.asset = aAsset;
    this.assetId = aAsset.id;
  }

  getAsset(): Asset {
    return this.asset;
  }

  getAssetId(): number {
    return this.assetId;
  }

  isAddress(): boolean {
    return this.getType() === AssetPropertyType.Address;
  }

  isDefendant(): boolean {
    return this.getType() === AssetPropertyType.Defendant;
  }

  isSolution(): boolean {
    return this.getType() === AssetPropertyType.Solution;
  }

  isStorageSpace(): boolean {
    return this.getType() === AssetPropertyType.StorageSpace;
  }

  getAssetPropertyType(): AssetPropertyType {
    return this.getType();
  }

  private getType(): AssetPropertyType {
    return this._type;
  }
}
