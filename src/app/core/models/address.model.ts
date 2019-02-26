import { AddressResponse } from './address-response.interface';
import { AssetProperty, AssetPropertyType } from './asset-property.model';
import { County } from './county.model';

export class Address extends  AssetProperty {
  id: number;
  countyId: number = null;
  county: County;
  street: string = '';
  city: string = '';
  building: string = '';
  stair: string;
  floor: string;
  flatNo: string;
  description: string = '';

  constructor(aData?: AddressResponse) {
    super(AssetPropertyType.Address);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: AddressResponse) {
    this.id = aJson.id || undefined;
    this.countyId = aJson.countyId;
    this.county = new County(aJson.county);
    this.street = aJson.street;
    this.city = aJson.city;
    this.building = aJson.building;
    this.stair = aJson.stair;
    this.floor = aJson.floor;
    this.flatNo = aJson.flatNo;
    this.description = aJson.description;
  }
}
