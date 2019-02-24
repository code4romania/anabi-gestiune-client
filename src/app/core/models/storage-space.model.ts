import { Address } from './address.model';
import { AssetProperty, AssetPropertyType } from './asset-property.model';

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

  fromJson(aJson: any) {
    this.id = aJson.id;
    this.address = aJson.address;
    this.name = aJson.name;
  }

  toJson(): any {
    return {
      id: this.id,
      address: this.address,
      name: this.name,
    };
  }
}
