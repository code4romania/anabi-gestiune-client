import { AssetProperty, AssetPropertyType } from '../asset-property.model';
import { Address } from './address.model';
import { StorageSpaceResponse } from "./storage-space-response.interface";

export class StorageSpace extends AssetProperty {
  id: number;
  address: Address;
  type: string;
  name: string;

  constructor(aData?: any) {
    super(AssetPropertyType.StorageSpace);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: StorageSpaceResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.type = aJson.type;
    this.address = aJson.address;
  }

  toJson(): StorageSpaceResponse {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      address: this.address,
    };
  }
}
