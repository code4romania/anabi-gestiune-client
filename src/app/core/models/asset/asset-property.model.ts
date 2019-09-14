import { Asset } from './asset.model';

import { Address, Defendant, Solution, StorageSpace } from './asset-properties';

export enum AssetPropertyType {
  Address = 'Address',
  Defendant = 'Defendant',
  Solution = 'Solution',
  StorageSpace = 'StorageSpace',
}

export abstract class AssetProperty {
  protected asset: Asset;
  protected assetId: number;
  protected abstract id: number;
  private _type: AssetPropertyType;

  protected constructor(aType: AssetPropertyType) {
    this._type = aType;
  }

  setAsset(aAsset: Asset) {
    this.asset = aAsset;
    this.assetId = aAsset.id;
  }

  getId(): number {
    return this.id;
  }

  getAsset(): Asset {
    return this.asset;
  }

  getAssetId(): number {
    return this.assetId;
  }

  isAddress(): this is Address {
    return this.getType() === AssetPropertyType.Address;
  }

  isDefendant(): this is Defendant {
    return this.getType() === AssetPropertyType.Defendant;
  }

  isSolution(): this is Solution {
    return this.getType() === AssetPropertyType.Solution;
  }

  isStorageSpace(): this is StorageSpace {
    return this.getType() === AssetPropertyType.StorageSpace;
  }

  getAssetPropertyType(): AssetPropertyType {
    return this.getType();
  }

  private getType(): AssetPropertyType {
    return this._type;
  }
}
