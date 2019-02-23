import { Address } from './address.model';
import { Asset } from './asset.model';

export class StorageSpace {
  id: number;
  address: Address;
  name: string;
  private asset: Asset;

  constructor(aData?: any) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: any) {
    this.id = aJson.id;
    this.address = aJson.address;
    this.name = aJson.name;
  }

  setAsset(aAsset: Asset) {
    this.asset = aAsset;
  }

  getAsset(): Asset {
    return this.asset;
  }
}
