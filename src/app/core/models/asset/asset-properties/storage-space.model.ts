import { AssetProperty, AssetPropertyType } from '../asset-property.model';
import { Asset, IAsset } from '../asset.model';
import { Address, IAddress } from './address.model';

export interface IStorageSpace {
  id: number;
  address: IAddress;
  name: string;
  asset: IAsset;
  assetId: number;
}

export class StorageSpace extends AssetProperty {
  id: number;
  address: Address;
  name: string;

  constructor(aData?: any) {
    super(AssetPropertyType.StorageSpace);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IStorageSpace) {
    this.id = aJson.id;
    this.address = new Address(aJson.address);
    this.name = aJson.name;
    this.asset = aJson.asset ? new Asset(aJson.asset) : undefined;
    this.assetId = aJson.assetId;
  }

  toJson(): IStorageSpace {
    return {
      id: this.id,
      address: this.address.toJson(),
      name: this.name,
      asset: this.asset.toJson(),
      assetId: this.assetId,
    };
  }

  getAddress(): string {
    if (!this.address) {
      return '';
    }

    // variables
    let fullAddress = '';
    let street = '';
    let city = '';

    if (this.address.county) {
      city = this.address.county.name + ' ';
      fullAddress += city
    }
    if (this.address.street) {
      street = this.address.street;
      fullAddress += street;
    }
    return fullAddress;
  }
}
